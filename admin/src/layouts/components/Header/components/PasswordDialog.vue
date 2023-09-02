<template>
  <el-dialog v-model="dialogVisible" title="修改密码" width="500px" draggable>
    <el-form ref="ruleFormRef" label-width="80px" label-suffix=" :" :rules="rules" :model="ruleForm">
      <el-form-item label="原密码" prop="oldPassword">
        <el-input type="password" v-model="ruleForm.oldPassword" placeholder="请输入原密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="ruleForm.newPassword" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="ruleForm.confirmPassword" placeholder="请再次输入新密码"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus";
import { ref, computed } from "vue";
import { changeUserPassword } from "@/api/modules/user";
import { useUserStore } from "@/stores/modules/user";
import { logoutApi } from "@/api/modules/login";
import router from "@/routers";
import { LOGIN_URL } from "@/config";
const userStore = useUserStore();
const username = computed(() => userStore.userInfo.name);

const dialogVisible = ref(false);
const openDialog = () => {
  dialogVisible.value = true;
};
const ruleForm = ref({
  oldPassword: "",
  newPassword: "",
  confirmPassword: ""
});
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== ruleForm.value.newPassword) {
    callback(new Error("新密码两次不一致"));
  } else {
    callback();
  }
};
const rules = ref({
  oldPassword: [{ required: true, message: "请输入原密码", trigger: "blur" }],
  newPassword: [{ required: true, message: "请输入新密码", trigger: "blur" }],
  confirmPassword: [
    { required: true, message: "请输入确认密码", trigger: "blur" },
    { validator: validatePass2, trigger: "blur" }
  ]
});
// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (valid) {
      const res = await changeUserPassword({
        oldPassword: ruleForm.value.oldPassword,
        newPassword: ruleForm.value.newPassword,
        username: username.value
      });
      if (res.code === 200) {
        ElMessage.success(res.msg);
        dialogVisible.value = false;
        // 1.执行退出登录接口
        await logoutApi();

        // 2.清除 Token
        userStore.setToken("");

        // 3.重定向到登陆页
        router.replace(LOGIN_URL);
      } else {
        ElMessage.error(res.msg);
      }
    } else {
      return false;
    }
  });
};
defineExpose({ openDialog });
</script>
