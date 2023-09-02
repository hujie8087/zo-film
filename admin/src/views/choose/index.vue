<template>
  <!-- 表格内容 card -->
  <div class="card table">
    <!-- 表格头部 操作按钮 -->
    <div class="table-header">
      <div class="header-button-lf">
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer(1)">新增栏目</el-button>
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
      <el-table-column prop="classify_name" label="栏目名称" header-align="center" />
      <el-table-column prop="classify_img" label="图片" align="center">
        <template #default="scope">
          <img height="50" :src="scope.row.classify_img" alt="" srcset="" />
        </template>
      </el-table-column>
      <el-table-column prop="page_img" label="内页图片" align="center">
        <template #default="scope">
          <img height="50" :src="scope.row.page_img" alt="" srcset="" />
        </template>
      </el-table-column>
      <el-table-column prop="type_id" label="类型" align="center">
        <template #default="scope">
          {{ typeDict.find(item => item.value === scope.row.type_id)?.label }}
        </template>
      </el-table-column>
      <el-table-column prop="listCount" label="内容列表" align="center">
        <template #default="scope">
          <el-button link v-if="scope.row.listCount && scope.row.listCount !== 0" @click="toRouter(scope.row)">{{
            `内容列表${scope.row.listCount}`
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" align="center" />
      <el-table-column prop="beizhu" label="备注" align="center" />
      <el-table-column label="操作" align="center">
        <!-- 表格操作 -->
        <template #default="scope">
          <el-button type="success" link :icon="Plus" @click="openDrawer(2, scope.row)">新增</el-button>
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
    <HomeDrawer ref="drawerRef" />
  </div>
</template>

<script lang="tsx" setup name="frontPage">
import { useHandleData } from "@/hooks/useHandleData";
import { CirclePlus, Delete, EditPen, Plus } from "@element-plus/icons-vue";
import { ref } from "vue";
import HomeDrawer from "../frontPage/components/HomeDrawer.vue";
import { getFrontPageClassifyTree, deleteFrontPage, addFrontPage, editFrontPage } from "@/api/modules/frontPage";
import { typeDict } from "@/utils/serviceDict";
import { Comment } from "@/api/interface";
import { useRouter } from "vue-router";
const router = useRouter();

const tableData = ref();
const tableRef = ref();
// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getNewsTypeList"
const getTableList = async () => {
  const { data } = await getFrontPageClassifyTree("23");
  tableData.value = data.list;
};
const multipleSelection = ref<string[]>([]);
const selectionChange = (val: Comment.ResCommentList[]) => {
  multipleSelection.value = val.map(item => item._id);
};
// 删除新闻分类信息
const deleteAccount = async (params: Comment.ResCommentList) => {
  await useHandleData(deleteFrontPage, params._id, "删除分类成功");
  getTableList();
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref();
const openDrawer = async (num: number, rowData: Partial<Comment.ResCommentList> = {}) => {
  let title;
  let infoData = {};
  switch (num) {
    case 1:
      title = "新增";
      break;
    case 2:
      title = "新增";
      infoData = { pid: rowData._id, pid_name: rowData.title };
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
    tableData: tableData.value.filter((item: Comment.ResCommentList) => item._id === rowData._id)[0],
    isView: false,
    api: num !== 3 ? addFrontPage : editFrontPage,
    getTableList: getTableList,
    newsTypeTree: [{ classify_name: "首页板块", _id: 4, children: tableData.value }]
  };
  drawerRef.value.acceptParams(params);
};
getTableList();
const toRouter = (row: Comment.ResCommentList) => {
  if (row.type_id === "6") {
    router.push({ path: "/banner", query: { goods_id: row._id } });
  } else if (row.type_id === "72") {
    router.push({ path: "/videoUpload", query: { pid: row.classify_id } });
  } else if (row.type_id === "3") {
    router.push({ path: "/goods", query: { type_id: row._id } });
  } else if (row.type_id === "73") {
    router.push({ path: "/chooseList", query: { type_id: row._id } });
  }
};
</script>

<style scoped>
.header-button-lf {
  margin-bottom: 20px;
}
</style>
