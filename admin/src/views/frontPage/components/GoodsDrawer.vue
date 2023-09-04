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
      <el-form-item label="产品分类" prop="pid">
        <el-select v-model="drawerProps.rowData!.pid" :data="goodsTypeList">
          <el-option
            v-for="newsType in goodsTypeList"
            :key="newsType.value"
            :label="newsType.label"
            :value="newsType.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品名称" prop="goods_name">
        <el-input v-model="drawerProps.rowData!.goods_name" placeholder="请输入产品名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="品牌" prop="brand">
        <el-input v-model="drawerProps.rowData!.brand" placeholder="请输入品牌" clearable></el-input>
      </el-form-item>
      <el-form-item label="天猫链接" prop="tianmao">
        <el-input v-model="drawerProps.rowData!.tianmao" placeholder="请输入天猫链接" clearable></el-input>
      </el-form-item>
      <el-form-item label="京东链接" prop="jingdong">
        <el-input v-model="drawerProps.rowData!.jingdong" placeholder="请输入京东链接" clearable></el-input>
      </el-form-item>
      <el-form-item label="二级标题" prop="erji_title">
        <el-input v-model="drawerProps.rowData!.erji_title" placeholder="请输入二级标题" clearable></el-input>
      </el-form-item>
      <el-form-item label="产品内容" prop="goods_content">
        <WangEditor id="goods_content" v-model:value="drawerProps.rowData!.goods_content" height="200px" />
      </el-form-item>
      <el-form-item label="产品简介" prop="goods_intro">
        <WangEditor id="goods_intro" v-model:value="drawerProps.rowData!.goods_intro" height="200px" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="drawerProps.rowData!.sort" :min="0" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="产品图片" prop="goods_img">
        <UploadImg v-model:image-url="drawerProps.rowData!.goods_img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="产品大图" prop="goods_bigimg">
        <UploadImg v-model:image-url="drawerProps.rowData!.goods_bigimg" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="产品视频" prop="upload_video">
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
import { ElMessage, FormInstance, UploadInstance } from "element-plus";
import UploadImg from "@/components/Upload/Img.vue";
import WangEditor from "@/components/WangEditor/index.vue";
import { PORT1 } from "@/api/config/servicePort";
import { getClassifyList } from "@/api/modules/frontPage";
import { Comment } from "@/api/interface";

const rules = reactive({
  goods_name: [{ required: true, message: "请输入新闻标题", trigger: "blur" }],
  pid: [{ required: true, message: "请选择产品分类", trigger: "change" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  rowData?: any;
  api?: (params: any) => Promise<any>;
  getTableList?: () => Promise<any>;
}

const goodsTypeList = ref<Comment.ResStatus[]>();
const getGoodsType = async () => {
  const data = await getClassifyList({ type_id: "3" });
  goodsTypeList.value = data.data.map(item => {
    return {
      label: item.classify_name,
      value: item.classify_id
    };
  });
};
getGoodsType();
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
