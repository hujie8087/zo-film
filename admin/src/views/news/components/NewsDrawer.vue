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
      <el-form-item label="新闻分类" prop="pid">
        <el-select v-model="drawerProps.rowData!.pid" :data="newsTypeList">
          <el-option
            v-for="newsType in newsTypeList"
            :key="newsType.value"
            :label="newsType.label"
            :value="newsType.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="news_title">
        <el-input v-model="drawerProps.rowData!.news_title" placeholder="请输入新闻标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="news_author">
        <el-input v-model="drawerProps.rowData!.news_author" placeholder="请输入新闻作者" clearable></el-input>
      </el-form-item>
      <el-form-item label="来源" prop="news_source">
        <el-input v-model="drawerProps.rowData!.news_source" placeholder="请输入新闻来源" clearable></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="news_content">
        <WangEditor id="news_content" v-model:value="drawerProps.rowData!.news_content" height="200px" />
      </el-form-item>
      <el-form-item label="简介" prop="news_intro">
        <WangEditor id="news_intro" v-model:value="drawerProps.rowData!.news_intro" height="200px" />
      </el-form-item>
      <el-form-item label="图片" prop="news_img">
        <UploadImg v-model:image-url="drawerProps.rowData!.news_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="关键字" prop="keywords">
        <el-input v-model="drawerProps.rowData!.keywords" placeholder="请输入新闻关键字" clearable></el-input>
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

<script setup lang="ts" name="NewsTypeDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import WangEditor from "@/components/WangEditor/index.vue";
import UploadImg from "@/components/Upload/Img.vue";
import { Comment } from "@/api/interface";
import { getClassifyList } from "@/api/modules/frontPage";

const rules = reactive({
  pid: [{ required: true, message: "请选择新闻分类", trigger: "change" }],
  news_title: [{ required: true, message: "请输入新闻标题", trigger: "blur" }]
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

const newsTypeList = ref<Comment.ResStatus[]>();
const getNewsType = async () => {
  const data = await getClassifyList({ type_id: "14" });
  newsTypeList.value = data.data.map(item => {
    return {
      label: item.classify_name,
      value: item.classify_id
    };
  });
};
// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
  drawerProps.value = params;
  drawerVisible.value = true;
  getNewsType();
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
