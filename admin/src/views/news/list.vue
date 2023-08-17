<template>
  <!-- 表格内容 card -->
  <div class="card table">
    <!-- 表格头部 操作按钮 -->
    <div class="table-header">
      <div class="header-button-lf">
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer(1)" v-auth="'dormitory:building:add'">{{
          $t("dormitory.building.add")
        }}</el-button>
      </div>
    </div>
    <!-- 表格主体 -->
    <el-table
      ref="tableRef"
      :data="tableData"
      row-key="id"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      @selection-change="selectionChange"
    >
      <!-- selection || index -->
      <el-table-column type="selection" width="55" />
      <el-table-column prop="title" label="分类名称" />
      <el-table-column prop="parent" label="父级" />
      <el-table-column prop="sort" label="排序" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === 0 ? 'danger' : 'success'">
            {{ scope.row.status === 0 ? "显示" : "不显示" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" />
      <el-table-column label="操作">
        <!-- 表格操作 -->
        <template #default="scope">
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
  </div>
</template>

<script lang="tsx" setup name="newsList">
import { Classify } from "@/api/interface";
import { deleteNewsType, getNewsTypeList, addNewsType, editNewsType } from "@/api/modules/news";
import { useHandleData } from "@/hooks/useHandleData";
import { CirclePlus, Delete, EditPen } from "@element-plus/icons-vue";
import { ref } from "vue";

const tableData = ref();
const tableRef = ref();
// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getNewsTypeList"
const getTableList = async () => {
  const { data } = await getNewsTypeList();
  tableData.value = data;
};
const multipleSelection = ref<string[]>([]);
const selectionChange = (val: Classify.ResClassifyList[]) => {
  multipleSelection.value = val.map(item => item._id);
};
// 删除新闻分类信息
const deleteAccount = async (params: Classify.ResClassifyList) => {
  await useHandleData(deleteNewsType, params._id, "删除新闻分类成功");
  getTableList();
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref();
const openDrawer = async (num: number, rowData: Partial<Classify.ResClassifyList> = {}) => {
  let title;
  switch (num) {
    case 1:
      title = "新增";
      break;
    case 2:
      title = "新增";
      break;
    case 3:
      title = "编辑";
      break;
    default:
      break;
  }
  let params = {
    title,
    rowData: { ...rowData },
    tableData: tableData.value.filter((item: Classify.ResClassifyList) => item._id === rowData.type_id)[0],
    isView: false,
    api: num !== 3 ? addNewsType : editNewsType,
    getTableList: getTableList
  };
  drawerRef.value.acceptParams(params);
};
</script>

<style lang="less" scoped></style>
