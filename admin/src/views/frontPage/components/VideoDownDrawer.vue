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
      <el-form-item label="视频名称" prop="name">
        <el-input v-model="drawerProps.rowData!.name" placeholder="请输入视频名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="视频文件" prop="upload_video">
        <el-input v-model="drawerProps.rowData!.upload_video">
          <template #append>
            <el-upload
              ref="upload"
              class="upload-demo"
              :action="`/api${PORT1}/upload`"
              accept="video/mp4"
              :limit="1"
              :on-success="res => (drawerProps.rowData!.upload_video = res.data.fileUrl)"
            >
              <el-button type="success" @click="submitUpload">上传视频</el-button>
            </el-upload>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="drawerProps.rowData!.sort" :min="0" :step="1"></el-input-number>
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

<script setup lang="ts" name="VideoUploadDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance, UploadInstance } from "element-plus";
import { PORT1 } from "@/api/config/servicePort";

const rules = reactive({
  name: [{ required: true, message: "请输入图片名称", trigger: "blur" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  rowData?: any;
  api?: (params: any) => Promise<any>;
  getTableList?: () => Promise<any>;
  goodsId?: string;
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
      await drawerProps.value.api!({ ...drawerProps.value.rowData, goods_id: drawerProps.value.goodsId });
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
const upload = ref<UploadInstance>();
const submitUpload = () => {
  upload.value!.submit();
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
.el-upload-list {
  display: none !important;
}
</style>
