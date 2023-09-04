<template>
  <el-dialog v-model="drawerVisible" :destroy-on-close="true" :width="1100" :title="`${drawerProps.title}`">
    <el-form
      ref="ruleFormRef"
      label-width="80px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.rowData"
      :hide-required-asterisk="drawerProps.isView"
      style="height: 70vh; padding: 0 10px; overflow-y: auto"
    >
      <el-form-item label="标题" prop="banner_title">
        <el-input v-model="drawerProps.rowData!.banner_title" placeholder="请输入标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="链接" prop="banner_url">
        <el-input v-model="drawerProps.rowData!.banner_url" placeholder="请输入链接" clearable></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="drawerProps.rowData!.sort" :min="0" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="图片" prop="banner_img">
        <UploadImg v-model:image-url="drawerProps.rowData!.banner_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-switch
          v-model="drawerProps.rowData!.status"
          active-text="显示"
          inactive-text="隐藏"
          active-value="1"
          inactive-value="0"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button type="primary" v-show="!drawerProps.isView" @click="handleSubmit">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="BannerDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import UploadImg from "@/components/Upload/Img.vue";

const rules = reactive({
  title: [{ required: true, message: "请输入新闻标题", trigger: "blur" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  rowData?: any;
  api?: (params: any) => Promise<any>;
  getTableList?: () => Promise<any>;
}

// drawer框状态
const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: ""
});
// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
  drawerProps.value = params;
  drawerVisible.value = true;
};
// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async () => {
    try {
      await drawerProps.value.api!(drawerProps.value.rowData);
      ElMessage.success({
        message: `${drawerProps.value.title}成功`
      });
      drawerProps.value.getTableList!();
      drawerVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  });
};

defineExpose({
  acceptParams
});
</script>
<style>
.el-dialog {
  max-height: 90vh;
  margin-top: 5vh;
}
</style>
