<template>
  <el-dialog v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}`">
    <el-form
      ref="ruleFormRef"
      label-width="120px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.rowData"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item label="父级" prop="pid">
        <el-tree-select
          v-model="drawerProps.rowData.pid"
          :data="drawerProps?.newsTypeTree"
          check-strictly
          :key="drawerProps.rowData._id"
          :props="newsTypeTreeProps"
          :render-after-expand="false"
        />
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="drawerProps.rowData!.title" placeholder="请输入新闻分类标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="关键字" prop="keywords">
        <el-input v-model="drawerProps.rowData!.keywords" placeholder="请输入新闻分类关键字" clearable></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="drawerProps.rowData!.description" placeholder="请输入新闻分类描述" clearable></el-input>
      </el-form-item>
      <el-form-item label="自定义" prop="url">
        <el-input v-model="drawerProps.rowData!.url" placeholder="请输入新闻分类链接" clearable></el-input>
      </el-form-item>
      <el-form-item label="英文标题" prop="en_title">
        <el-input v-model="drawerProps.rowData!.note" placeholder="请输入新闻分类英文标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="drawerProps.rowData!.content" placeholder="请输入新闻分类内容" clearable></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="intro">
        <el-input v-model="drawerProps.rowData!.intro" placeholder="请输入新闻分类简介" clearable></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="drawerProps.rowData!.sort" :min="0" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="分类图片" prop="image_url">
        <UploadImg v-model:image-url="drawerProps.rowData.image_url" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传分类图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="内页图片" prop="page_img">
        <UploadImg v-model:image-url="drawerProps.rowData.page_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传内页图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="图片上传" prop="upload_img">
        <UploadImg v-model:image-url="drawerProps.rowData.upload_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="drawerProps.rowData!.remark" placeholder="请输入新闻分类备注" clearable></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-switch
          v-model="drawerProps.rowData!.status"
          size="large"
          active-text="显示"
          inactive-text="影藏"
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

<script setup lang="ts" name="NewsTypeDrawer">
import { ref, reactive } from "vue";
import { NewsType } from "@/api/interface/news";
import { ElMessage, FormInstance } from "element-plus";
import UploadImg from "@/components/Upload/Img.vue";

const rules = reactive({
  title: [{ required: true, message: "请输入新闻分类标题", trigger: "blur" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  rowData?: any;
  api?: (params: any) => Promise<any>;
  getTableList?: () => Promise<any>;
  newsTypeTree?: NewsType.ResNewsTypeList[];
  updateBuilding?: (id: number) => Promise<any>;
}

const newsTypeTreeProps = {
  label: "title",
  value: "_id",
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
};
// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    if (!drawerProps.value.rowData.pid) {
      drawerProps.value.rowData = { ...drawerProps.value.rowData, pid: 0 };
    }
    try {
      await drawerProps.value.api!(drawerProps.value.rowData);
      ElMessage.success({
        message: `${drawerProps.value.title}成功`
      });
      drawerProps.value.getTableList!();
      drawerProps.value.updateBuilding!(drawerProps.value.rowData.pid);
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
