<template>
  <!-- 表格内容 card -->
  <div class="card table">
    <!-- 表格头部 操作按钮 -->
    <div class="table-header">
      <div class="header-button-lf">
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer(1)">新增</el-button>
      </div>
    </div>
    <!-- 表格主体 -->
    <el-table
      ref="tableRef"
      :data="tableData"
      row-key="_id"
      :border="true"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      @selection-change="selectionChange"
    >
      <!-- selection || index -->
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="region_id" width="100" label="Id" header-align="center" />
      <el-table-column prop="region_name" label="省份名称" header-align="center" />
      <el-table-column label="操作" align="center">
        <!-- 表格操作 -->
        <template #default="scope">
          <el-button link :icon="Plus" @click="openDrawer(2, scope.row)" v-if="scope.row.region_type === '1'">新增</el-button>
          <el-button type="warning" link :icon="EditPen" @click="openDrawer(3, scope.row)">编辑</el-button>
          <el-button type="danger" link :icon="Delete" @click="deleteAccount(scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <!-- 表格无数据情况 -->
      <template #empty>
        <div class="table-empty">
          <slot name="empty">
            <img src="@/assets/images/notData.png" alt="notData" />
            <div>暂无数据</div>
          </slot>
        </div>
      </template>
    </el-table>
    <RegionDrawer ref="drawerRef" />
  </div>
</template>

<script lang="tsx" setup name="regionIndex">
import { useHandleData } from "@/hooks/useHandleData";
import { CirclePlus, Delete, EditPen, Plus } from "@element-plus/icons-vue";
import { ref } from "vue";
import RegionDrawer from "./components/RegionDrawer.vue";
import { getRegionList, deleteRegion, addRegion, editRegion } from "@/api/modules/region";
import { Region } from "@/api/interface/region";

const tableData = ref();
const tableRef = ref();
// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getNewsTypeList"
const getTableList = async () => {
  const { data } = await getRegionList("1");
  tableData.value = data.list;
};
const multipleSelection = ref<string[]>([]);
const selectionChange = (val: Region.ResRegionList[]) => {
  multipleSelection.value = val.map(item => item._id);
};
// 删除新闻分类信息
const deleteAccount = async (params: Region.ResRegionList) => {
  await useHandleData(deleteRegion, params._id, "删除地区成功");
  getTableList();
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref();
const openDrawer = async (num: number, rowData: Partial<Region.ResRegionList> = {}) => {
  let title;
  let infoData = {};
  switch (num) {
    case 1:
      title = "新增";
      infoData = { region_type: "1", agency_id: "0", region_pid: "1" };
      break;
    case 2:
      title = "新增";
      let region_type = rowData.region_type === "1" ? "2" : "3";
      let region_pid = rowData.region_id;
      infoData = { region_pid, region_type, agency_id: "0" };
      break;
    case 3:
      title = "编辑";
      infoData = { ...rowData };
      break;
    default:
      break;
  }
  let params = {
    title,
    rowData: { ...infoData },
    isView: false,
    api: num !== 3 ? addRegion : editRegion,
    getTableList: getTableList
  };
  drawerRef.value.acceptParams(params);
};
getTableList();
</script>

<style scoped>
.header-button-lf {
  margin-bottom: 20px;
}
</style>
