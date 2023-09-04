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
      <el-form-item label="主题" prop="theme">
        <el-input v-model="drawerProps.rowData!.theme" placeholder="请输入主题" clearable></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input type="textarea" rows="3" v-model="drawerProps.rowData!.tel" placeholder="请输入联系电话" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="e_mail">
        <el-input v-model="drawerProps.rowData!.e_mail" placeholder="请输入邮箱" clearable></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="qq">
        <el-input v-model="drawerProps.rowData!.qq" placeholder="请输入电话" clearable></el-input>
      </el-form-item>
      <el-form-item label="留言内容" prop="content">
        <el-input
          type="textarea"
          rows="5"
          v-model="drawerProps.rowData!.content"
          placeholder="请输入留言内容"
          clearable
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button type="primary" v-show="!drawerProps.isView" @click="handleSubmit">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="messageDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";

const rules = reactive({
  theme: [{ required: true, message: "请输入图片名称", trigger: "blur" }],
  tel: [{ required: true, message: "请上传图片名称", trigger: "blur" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  rowData?: any;
  api?: (params: any) => Promise<any>;
  getTableList?: () => Promise<any>;
  typeId?: string;
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
.el-upload-list {
  display: none !important;
}
</style>
