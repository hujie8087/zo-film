<template>
  <div class="contact">
    <div class="container">
      <div class="bread">
        <BreadCrumbsItem to="/contact" text="联系我们" />
      </div>
      <div class="contact-content">
        <div v-html="contactData?.content"></div>
      </div>
      <el-divider />
      <div class="contact-form">
        <el-form :model="form" label-width="120px" :rules="rules">
          <el-form-item label="主题" prop="subject">
            <el-input v-model="form.subject" />
          </el-form-item>
          <el-form-item label="联系电话" prop="tel">
            <el-input v-model="form.tel" />
          </el-form-item>
          <el-form-item label="QQ号" prop="qq">
            <el-input v-model="form.qq" />
          </el-form-item>
          <el-form-item label="邮箱地址" prop="email">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="留言内容" prop="content">
            <el-input v-model="form.content" type="textarea" rows="5" />
          </el-form-item>
          <el-form-item class="btn-wrap">
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: contactData } = useFetch('/api/contact');
const form = ref({
  subject: '',
  tel: '',
  qq: '',
  email: '',
  content: '',
});
const validate_email = (rule: any, value: any, callback: any) => {
  var emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  var emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (
    (!emailRegExp.test(value) && value != '') ||
    (!emailRegExp1.test(value) && value != '')
  ) {
    callback(new Error('请输入有效邮箱格式！'));
  } else {
    callback();
  }
};
const rules = reactive({
  subject: [{ required: true, message: '请输入主题', trigger: 'blur' }],
  tel: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
  qq: [{ required: true, message: '请输入QQ号', trigger: 'blur' }],
  email: [
    { validator: validate_email, trigger: ['blur'] },
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
  ],
});

const onSubmit = () => {
  const { data: res } = useFetch('/api/messages', {
    method: 'POST',
    body: form.value,
  });
  console.log(res);
};
const reset = () => {
  form.value = {
    subject: '',
    tel: '',
    qq: '',
    email: '',
    content: '',
  };
};
</script>

<style scoped lang="less">
.contact {
  .bread {
    height: 50px;
    position: relative;
    margin-bottom: 20px;
  }
  .contact-content {
    margin-bottom: 20px;
    :deep(img) {
      width: 100%;
      height: auto;
    }
  }
  .contact-form {
    width: 800px;
    margin: 0 auto 50px;
    .el-form-item {
      margin-bottom: 20px;
      :deep(.el-form-item__label) {
        line-height: 46px;
        font-size: 16px;
        color: #333;
      }
      :deep(.el-input__inner) {
        line-height: 46px;
        height: 46px;
      }
      &.btn-wrap {
        padding-left: 100px;
        .el-button {
          margin-right: 20px;
          padding: 30px;
          font-size: 14px;
          background-color: #f5af05;
          border: 0;
          color: #333;
          margin: 0 50px;
          &:last-child {
            background-color: #1c1b1b;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
