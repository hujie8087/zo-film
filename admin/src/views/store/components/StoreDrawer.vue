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
      <el-form-item label="名称" prop="name">
        <el-input v-model="drawerProps.rowData!.name" placeholder="请输入门店名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="店铺类型" prop="type">
        <el-input v-model="drawerProps.rowData!.type" placeholder="请输入店铺类型" clearable></el-input>
      </el-form-item>
      <el-form-item label="门店简介" prop="content">
        <WangEditor id="content" v-model:value="drawerProps.rowData!.content" height="200px" />
      </el-form-item>
      <el-form-item label="门店主图" prop="img">
        <UploadImg v-model:image-url="drawerProps.rowData!.img" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传图片</span>
          </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="省份" prop="province">
        <el-select v-model="drawerProps.rowData!.province" placeholder="" @change="changeProvince">
          <el-option v-for="item in provinceList" :key="item._id" :label="item.region_name" :value="item.region_id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-select v-model="drawerProps.rowData!.city" placeholder="">
          <el-option v-for="item in cityList" :key="item._id" :label="item.region_name" :value="item.region_id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button type="primary" v-show="!drawerProps.isView" @click="handleSubmit">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="chooseDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import UploadImg from "@/components/Upload/Img.vue";
import WangEditor from "@/components/WangEditor/index.vue";
import { Region } from "@/api/interface/region";
import { getFilterRegionList } from "@/api/modules/store";

const provinceList = ref<Region.ResRegionList[]>([]);
const cityList = ref<Region.ResRegionList[]>([]);
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
  typeId?: string;
}

const getProvinceList = async () => {
  const { data } = await getFilterRegionList("1");
  provinceList.value = data.list;
};
const getCityList = async (pid: string) => {
  const { data } = await getFilterRegionList(pid);
  cityList.value = data.list;
};

// drawer框状态
const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: ""
});

getProvinceList();
// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
  drawerProps.value = params;
  drawerVisible.value = true;
  if (params.rowData.province) {
    getCityList(params.rowData.province);
  }
};

const changeProvince = (val: string) => {
  drawerProps.value.rowData.city = "";
  getCityList(val);
};

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async () => {
    try {
      await drawerProps.value.api!({ ...drawerProps.value.rowData, type_id: drawerProps.value.typeId });
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
