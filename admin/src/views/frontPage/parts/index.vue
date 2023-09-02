<template>
  <div class="card content-box">
    <el-form
      v-if="rowData"
      ref="ruleFormRef"
      label-width="80px"
      label-suffix=" :"
      :rules="rules"
      :model="rowData"
      style="height: 70vh; overflow-y: auto; padding: 0 10px"
    >
      <el-form-item label="标题" prop="classify_name">
        <el-input v-model="rowData!.classify_name" placeholder="请输入标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="副标题" prop="sub_name">
        <el-input v-model="rowData!.sub_name" placeholder="请输入副标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="英文标题" prop="en_name">
        <el-input v-model="rowData!.en_name" placeholder="请输入英文标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="自定义链接" prop="classify_url">
        <el-input v-model="rowData!.classify_url" placeholder="请输入链接" clearable></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="classify_intro">
        <WangEditor id="classify_intro" v-model:value="rowData!.classify_intro" height="400px" />
      </el-form-item>
      <el-form-item label="图片" prop="classify_img">
        <UploadImg v-model:image-url="rowData!.classify_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="内页插图" prop="page_img">
        <UploadImg v-model:image-url="rowData!.page_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="图片上传" prop="upload_img">
        <UploadImg v-model:image-url="rowData!.upload_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="简介2" prop="classify_intro2">
        <WangEditor id="classify_intro2" v-model:value="rowData!.classify_intro2" height="400px" />
      </el-form-item>
      <el-form-item label="备注" prop="beizhu">
        <el-input v-model="rowData.beizhu" type="textarea" rows="4" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="proForm">
import { Comment } from "@/api/interface";
import { editFrontPagePicture, getFrontPagePicture } from "@/api/modules/frontPage";
import UploadImg from "@/components/Upload/Img.vue";
import WangEditor from "@/components/WangEditor/index.vue";
import { ElMessage, FormInstance } from "element-plus";
import { reactive, ref } from "vue";
const rules = reactive({
  classify_name: [{ required: true, message: "请输入标题", trigger: "blur" }]
});

const rowData = ref<Comment.ResCommentList>();
const ruleFormRef = ref<FormInstance>();

const getRowData = async () => {
  const data = await getFrontPagePicture("88");
  rowData.value = data.data;
};
getRowData();
const submit = () => {
  ruleFormRef.value!.validate(async () => {
    try {
      await editFrontPagePicture(rowData.value!);
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
  margin-top: 20px;
}
</style>
