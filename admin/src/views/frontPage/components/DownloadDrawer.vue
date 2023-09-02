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
      style="height: 70vh; overflow-y: auto; padding: 0 10px"
    >
      <el-form-item label="文件名称" prop="download_name">
        <el-input v-model="drawerProps.rowData!.download_name" placeholder="请输入文件名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="download_content">
        <WangEditor id="download_content" v-model:value="drawerProps.rowData!.download_content" height="200px" />
      </el-form-item>
      <el-form-item label="上传文件" prop="download_file">
        <el-input v-model="drawerProps.rowData!.download_file">
          <template #append>
            <el-upload
              ref="upload"
              class="upload-demo"
              :action="`/api${PORT1}/upload`"
              accept="pdf,doc,docx,xls,xlsx,ppt,pptx,zip,rar,PFD"
              :limit="1"
              :on-success="res => (drawerProps.rowData!.download_file = res.data.fileUrl)"
            >
              <el-button type="success" @click="submitUpload">上传文件</el-button>
            </el-upload>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button type="primary" v-show="!drawerProps.isView" @click="handleSubmit">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="DownloadDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance, UploadInstance } from "element-plus";
import WangEditor from "@/components/WangEditor/index.vue";
import { PORT1 } from "@/api/config/servicePort";

const rules = reactive({
  title: [{ required: true, message: "请输入图片名称", trigger: "blur" }],
  img: [{ required: true, message: "请上传图片名称", trigger: "blur" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  rowData?: any;
  api?: (params: any) => Promise<any>;
  getTableList?: () => Promise<any>;
  classifyId?: string;
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
      await drawerProps.value.api!({ ...drawerProps.value.rowData, classify_id: drawerProps.value.classifyId });
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
