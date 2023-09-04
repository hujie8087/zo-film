<template>
  <el-dialog v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}`">
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
      <el-form-item label="父级" prop="classify_pid">
        <el-tree-select
          v-model="drawerProps.rowData!.classify_pid"
          :data="drawerProps?.classifyList"
          check-strictly
          :key="drawerProps.rowData.classify_id"
          :props="classifyProps"
          :render-after-expand="false"
        />
      </el-form-item>
      <el-form-item label="类型" prop="type_id">
        <el-select v-model="drawerProps.rowData!.type_id" placeholder="请选择类型">
          <el-option v-for="item in drawerProps.classifyType" :key="item.type_id" :label="item.type_name" :value="item.type_id" />
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称" prop="classify_name">
        <el-input v-model="drawerProps.rowData!.classify_name" placeholder="请输入分类名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="副标题" prop="sub_name">
        <el-input v-model="drawerProps.rowData!.sub_name" placeholder="请输入分类副标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="英文标题" prop="en_name">
        <el-input v-model="drawerProps.rowData!.en_name" placeholder="请输入分类英文标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="自定义链接" prop="classify_url">
        <el-input v-model="drawerProps.rowData!.classify_url" placeholder="请输入新闻分类链接" clearable></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="classify_intro">
        <WangEditor id="classify_intro" v-model:value="drawerProps.rowData!.classify_intro" height="300px" />
      </el-form-item>
      <el-form-item label="分类图片" prop="classify_img">
        <UploadImg v-model:image-url="drawerProps.rowData.classify_img" width="200px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传分类图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="内页图片" prop="page_img">
        <UploadImg v-model:image-url="drawerProps.rowData.page_img" width="200px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传内页图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="图片上传" prop="upload_img">
        <UploadImg v-model:image-url="drawerProps.rowData.upload_img" width="200px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="简介2" prop="classify_intro2">
        <WangEditor id="classify_intro2" v-model:value="drawerProps.rowData!.classify_intro2" height="300px" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="drawerProps.rowData!.sort" :min="0" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="备注" prop="beizhu">
        <el-input
          type="textarea"
          rows="3"
          v-model="drawerProps.rowData!.beizhu"
          placeholder="请输入分类备注"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-switch
          v-model="drawerProps.rowData!.status"
          active-text="显示"
          inactive-text="隐藏"
          :active-value="1"
          :inactive-value="0"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button type="primary" v-show="!drawerProps.isView" @click="handleSubmit">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="HomeDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import WangEditor from "@/components/WangEditor/index.vue";
import UploadImg from "@/components/Upload/Img.vue";
import { ClassifyType } from "@/api/interface/classifyType";
import { Comment } from "@/api/interface";

const rules = reactive({
  title: [{ required: true, message: "请输入新闻分类标题", trigger: "blur" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  rowData?: any;
  api?: (params: any) => Promise<any>;
  getTableList?: () => Promise<any>;
  classifyList?: Comment.ResCommentList[];
  classifyType?: ClassifyType.ResClassifyTypeList[];
}

const classifyProps = {
  label: "classify_name",
  value: "classify_id",
  children: "children",
  isLeaf: "hasChildren"
};

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
  if (!drawerProps.value.rowData.type_id) {
    drawerProps.value.rowData = { ...drawerProps.value.rowData, type_id: "13" };
  }
};
// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    if (!drawerProps.value.rowData.classify_pid) {
      drawerProps.value.rowData = { ...drawerProps.value.rowData, classify_pid: "1" };
    }
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
