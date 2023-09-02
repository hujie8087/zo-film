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
      :default-expand-all="true"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      @selection-change="selectionChange"
    >
      <!-- selection || index -->
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="classify_name" label="栏目名称" header-align="center" width="400" />
      <el-table-column prop="classify_img" label="图片" align="center">
        <template #default="scope">
          <el-image
            v-if="scope.row.classify_img"
            style="height: 40px"
            :src="scope.row.classify_img"
            :zoom-rate="1.2"
            :preview-src-list="[scope.row.classify_img]"
            :z-index="999"
            preview-teleported
            fit="cover"
          >
            <template #error>
              <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
              </div>
            </template>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="page_img" label="内页图片" align="center">
        <template #default="scope">
          <el-image
            style="height: 40px"
            v-if="scope.row.page_img"
            :src="scope.row.page_img"
            :preview-src-list="[scope.row.page_img]"
            :zoom-rate="1.2"
            :z-index="999"
            preview-teleported
            fit="cover"
          >
            <template #error>
              <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
              </div>
            </template>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="upload_img" label="上传图片" align="center">
        <template #default="scope">
          <el-image
            v-if="scope.row.upload_img"
            style="height: 40px"
            :src="scope.row.upload_img"
            :zoom-rate="1.2"
            :preview-src-list="[scope.row.upload_img]"
            :z-index="999"
            preview-teleported
            fit="cover"
          >
            <template #error>
              <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
              </div>
            </template>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="type_id" label="类型" align="center" width="80">
        <template #default="scope">
          {{ typeDict.find(item => item.value === scope.row.type_id)?.label }}
        </template>
      </el-table-column>
      <el-table-column prop="listCount" label="内容列表" align="center" width="100">
        <template #default="scope">
          <el-button link type="success" v-if="scope.row.listCount && scope.row.listCount !== 0" @click="toRouter(scope.row)">{{
            `内容列表${scope.row.listCount}`
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" align="center" width="100" />
      <el-table-column prop="beizhu" label="备注" align="center">
        <template #default="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.beizhu" placement="top">
            <div class="item-text">{{ scope.row.beizhu }}</div>
          </el-tooltip>
        </template>
      </el-table-column>
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
import { Picture as IconPicture, CirclePlus, Delete, EditPen, Plus } from "@element-plus/icons-vue";
import { ref } from "vue";
import HomeDrawer from "./components/HomeDrawer.vue";
import {
  getFrontPageClassifyTree,
  deleteFrontPage,
  addFrontPage,
  editFrontPage,
  getClassifyTypeList
} from "@/api/modules/frontPage";
import { typeDict } from "@/utils/serviceDict";
import { Comment } from "@/api/interface";
import { useRouter } from "vue-router";
import { ClassifyType } from "@/api/interface/classifyType";
const router = useRouter();

const tableData = ref();
const tableRef = ref();
// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getNewsTypeList"
const getTableList = async () => {
  const { data } = await getFrontPageClassifyTree("1");
  tableData.value = data.list;
};
const classifyTypeList = ref<ClassifyType.ResClassifyTypeList[]>([]);
const multipleSelection = ref<string[]>([]);
const selectionChange = (val: Comment.ResCommentList[]) => {
  multipleSelection.value = val.map(item => item._id);
};

const getClassifyTypeData = async () => {
  const { data } = await getClassifyTypeList();
  classifyTypeList.value = data;
};

getClassifyTypeData();

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
      infoData = { classify_pid: "1", level_id: rowData.level_id ? +rowData.level_id + 1 + "" : "1" };
      break;
    case 2:
      title = "新增";
      infoData = { classify_pid: rowData.classify_id, level_id: rowData.level_id ? +rowData.level_id + 1 + "" : "1" };
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
    classifyList: tableData.value,
    classifyType: classifyTypeList.value
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
    router.push({ path: "/goods", query: { goods_classify_id: row.classify_id } });
  } else if (row.type_id === "14") {
    router.push({ path: "/news" });
  } else if (row.type_id === "65") {
    router.push({ path: "/textc", query: { classify_id: row.classify_id } });
  } else if (row.type_id === "68") {
    router.push({ path: "/videoDown", query: { classify_id: row.classify_id } });
  } else if (row.type_id === "43") {
    router.push({ path: "/download", query: { classify_id: row.classify_id } });
  } else if (row.type_id === "7") {
    router.push({ path: "/link", query: { classify_id: row.classify_id } });
  } else if (row.type_id === "69") {
    router.push({ path: "/text", query: { classify_id: row.classify_id } });
  } else if (row.type_id === "11") {
    router.push({ path: "/message" });
  } else if (row.type_id === "63") {
    router.push({ path: "/manage" });
  }
};
</script>

<style scoped>
.header-button-lf {
  margin-bottom: 20px;
}
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.image-slot .el-icon {
  font-size: 30px;
}
.item-text {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
