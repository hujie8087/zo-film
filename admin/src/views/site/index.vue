<template>
  <div class="card content-box">
    <el-form
      v-if="rowData"
      ref="ruleFormRef"
      label-width="120px"
      label-suffix=" :"
      :rules="rules"
      :model="rowData"
      style="height: 70vh; overflow-y: auto; padding: 0 10px"
    >
      <h3 style="text-align: left; width: 100%">{{ rowData.version_name }}</h3>
      <el-form-item label="标题" prop="title">
        <el-input v-model="rowData!.title" placeholder="请输入标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="网站关键词" prop="keywords">
        <el-input v-model="rowData!.keywords" placeholder="请输入网站关键词" clearable></el-input>
      </el-form-item>
      <el-form-item label="网站描述" prop="description">
        <el-input v-model="rowData!.description" placeholder="请输入网站描述" clearable></el-input>
      </el-form-item>
      <el-form-item label="公司名" prop="company_name">
        <el-input v-model="rowData!.company_name" placeholder="请输入公司名" clearable></el-input>
      </el-form-item>
      <el-form-item label="网址" prop="url">
        <el-input v-model="rowData!.url" placeholder="请输入网址" clearable></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="rowData!.mobile" placeholder="请输入手机" clearable></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="rowData!.tel" placeholder="请输入电话" clearable></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="qq">
        <el-input v-model="rowData!.qq" placeholder="请输入QQ" clearable></el-input>
      </el-form-item>
      <el-form-item label="剩余短信数量" prop="sms_number"> {{ rowData!.sms_number }}条 </el-form-item>
      <el-form-item label="logo" prop="logo">
        <UploadImg v-model:image-url="rowData!.logo_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传logo</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="页眉背景" prop="header_bj">
        <UploadImg v-model:image-url="rowData!.header_bj" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="落款" prop="inscribe">
        <WangEditor id="classify_intro2" v-model:value="rowData!.inscribe" height="400px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="siteForm">
import { Site } from "@/api/interface/site";
import { editSite, getSiteById } from "@/api/modules/site";
import UploadImg from "@/components/Upload/Img.vue";
import WangEditor from "@/components/WangEditor/index.vue";
import { ElMessage, FormInstance } from "element-plus";
import { reactive, ref } from "vue";
const rules = reactive({
  classify_name: [{ required: true, message: "请输入标题", trigger: "blur" }]
});

const ruleFormRef = ref<FormInstance>();
const rowData = ref<Site.ResSiteList>();

const getRowData = async () => {
  const data = await getSiteById("1");
  rowData.value = data.data;
};
getRowData();
const submit = () => {
  ruleFormRef.value!.validate(async () => {
    try {
      await editSite(rowData.value!);
      ElMessage.success({
        message: `修改成功`
      });
      getRowData();
    } catch (error) {
      console.log(error);
    }
  });
};
const reset = () => {
  getRowData();
};
</script>

<style scoped lang="scss">
.el-form {
  width: 100%;
}
</style>
