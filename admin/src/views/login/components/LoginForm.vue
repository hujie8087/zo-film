<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入用户名">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="captcha">
      <el-input v-model="loginForm.captcha" placeholder="请输入验证码">
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
        <template #suffix>
          <span v-html="captcha" @click="getCaptchaData" style="width: 100px; height: 34px" />
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)"> 重置 </el-button>
    <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading" @click="login(loginFormRef)">
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { HOME_URL } from "@/config";
import { getTimeState } from "@/utils";
import { Login } from "@/api/interface";
import { ElNotification } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { useUserStore } from "@/stores/modules/user";
import { useTabsStore } from "@/stores/modules/tabs";
import { useKeepAliveStore } from "@/stores/modules/keepAlive";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
import { getCaptcha, sendCaptcha } from "@/api/modules/captcha";

const router = useRouter();
const userStore = useUserStore();
const tabsStore = useTabsStore();
const keepAliveStore = useKeepAliveStore();

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive<Login.ReqLoginFormParams>({
  username: "",
  password: "",
  captcha: ""
});

const captcha = ref();

const getCaptchaData = async () => {
  const data = await getCaptcha();
  captcha.value = data;
};

getCaptchaData();

// login
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async valid => {
    if (!valid) return;
    loading.value = true;
    const data = await sendCaptcha({ captcha: loginForm.captcha });
    if (data.code !== 200) {
      ElNotification({
        message: "验证码错误",
        type: "error",
        duration: 3000
      });
      loading.value = false;
      return;
    } else {
      try {
        // 1.执行登录接口
        const res = await loginApi({ username: loginForm.username, password: loginForm.password });
        if (res.code !== 200) {
          userStore.setToken(res.data.access_token);
          userStore.setUserInfo({ name: res.data.username });

          // 2.添加动态路由
          await initDynamicRouter();

          // 3.清空 tabs、keepAlive 数据
          tabsStore.closeMultipleTab();
          keepAliveStore.setKeepAliveName();

          // 4.跳转到首页
          router.push(HOME_URL);
          ElNotification({
            title: getTimeState(),
            message: "欢迎登录 zo-film管理后台",
            type: "success",
            duration: 3000
          });
        } else {
          loading.value = false;
          ElNotification({
            message: res.msg || "登录失败",
            type: "error",
            duration: 3000
          });
        }
      } finally {
        loading.value = false;
      }
    }
  });
};

// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onMounted(() => {
  // 监听 enter 事件（调用登录）
  document.onkeydown = (e: KeyboardEvent) => {
    e = (window.event as KeyboardEvent) || e;
    if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
      if (loading.value) return;
      login(loginFormRef.value);
    }
  };
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
