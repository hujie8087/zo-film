<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="产品图片列表"
      :columns="columns"
      :request-api="getTableList"
      :init-param="initParam"
      :data-callback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer('新增')"> 新增 </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)"> 查看 </el-button>
        <el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)"> 编辑 </el-button>
        <el-button type="primary" link :icon="Delete" @click="deleteAccount(scope.row)"> 删除 </el-button>
      </template>
    </ProTable>
    <VideoUploadDrawer ref="drawerRef" />
  </div>
</template>

<script lang="tsx" setup name="videoUploadList">
import { reactive, ref } from "vue";
import { useHandleData } from "@/hooks/useHandleData";
import ProTable from "@/components/ProTable/index.vue";
import { ProTableInstance, ColumnProps } from "@/components/ProTable/interface";
import { CirclePlus, Delete, EditPen, View } from "@element-plus/icons-vue";
import { getVideoUploadList, deleteVideoUpload, editVideoUpload, addVideoUpload } from "@/api/modules/videoUpload";
import dayjs from "dayjs";
import { VideoUpload } from "@/api/interface/videoUpload";
import { useRoute } from "vue-router";
import { statusDict } from "@/utils/serviceDict";
import VideoUploadDrawer from "./components/VideoUploadDrawer.vue";
import { getClassifyList } from "@/api/modules/frontPage";
const route = useRoute();
// 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
const proTable = ref<ProTableInstance>();
const goodsId = route.query.pid as string;
const initParam = reactive({ pid: goodsId });

// 如果表格需要初始化请求参数，直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上，改变此参数会自动刷新表格数据)
// dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 list && total && pageNum && pageSize 这些字段，那么你可以在这里进行处理成这些字段
// 或者直接去 hooks/useTable.ts 文件中把字段改为你后端对应的就行
const dataCallback = (data: any) => {
  return {
    list: data.list,
    total: data.total,
    pageNum: data.pageNum,
    pageSize: data.pageSize
  };
};

// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getVideoUploadList"
const getTableList = (params: any) => {
  let newParams = JSON.parse(JSON.stringify(params));
  return getVideoUploadList(newParams);
};

// 表格配置项
const columns: ColumnProps<VideoUpload.ResVideoUploadList>[] = [
  { type: "selection", fixed: "left", width: 80 },
  { type: "index", label: "#", width: 80 },
  {
    prop: "name",
    label: "名称",
    search: { el: "input" }
  },
  {
    prop: "pid",
    label: "归属栏目",
    enum: () => getClassifyList({ type_id: "72" }),
    fieldNames: { label: "classify_name", value: "classify_id" }
  },
  {
    prop: "intro",
    label: "视频简介"
  },
  {
    prop: "img",
    label: "图片",
    width: 250,
    render: scope => {
      return (
        <>
          <el-image
            src={scope.row.img}
            style="height:50px"
            preview-src-list={[scope.row.img]}
            zoom-rate={1.2}
            z-index={999}
            preview-teleported
            fit="cover"
          ></el-image>
        </>
      );
    }
  },
  {
    prop: "sort",
    label: "排序",
    width: 150,
    render: scope => {
      return (
        <>
          <el-input-number v-model={scope.row.sort} min={0} step={1} onChange={() => changeSort(scope.row)} />
        </>
      );
    }
  },
  {
    prop: "status",
    label: "显示状态",
    enum: statusDict,
    search: { el: "tree-select", props: { filterable: true } },
    render: scope => {
      return (
        <>
          <el-switch
            model-value={scope.row.status}
            active-text={scope.row.status === "1" ? "显示" : "隐藏"}
            active-value={"1"}
            inactive-value={"0"}
            onClick={() => changeStatus(scope.row)}
          />
        </>
      );
    }
  },
  {
    prop: "data",
    label: "创建时间",
    width: 180,
    render: scope => {
      return <>{scope.row.date ? dayjs(+(scope.row.date + "000")).format("YYYY-MM-DD HH:mm:ss") : "--"}</>;
    }
  },
  { prop: "operation", label: "操作", fixed: "right", width: 330 }
];

// 删除用户信息
const deleteAccount = async (params: VideoUpload.ResVideoUploadList) => {
  await useHandleData(deleteVideoUpload, params, `删除【${params.name}】`);
  proTable.value?.getTableList();
};

// 切换新闻状态
const changeStatus = async (row: VideoUpload.ResVideoUploadList) => {
  await useHandleData(editVideoUpload, { ...row, status: row.status == "1" ? "0" : "1" }, `切换【${row.name}】状态`);
  proTable.value?.getTableList();
};

const changeSort = async (row: VideoUpload.ResVideoUploadList) => {
  // await useHandleData(editVideoUpload, { _id: row._id, sort: row.sort }, `修改【${row.news_title}】新闻排序`);
  await editVideoUpload(row);
  proTable.value?.getTableList();
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof VideoUploadDrawer> | null>(null);
const openDrawer = (title: string, row: Partial<VideoUpload.ResVideoUploadList> = {}) => {
  const params = {
    title,
    isView: title === "查看",
    rowData: { ...row },
    api: title === "新增" ? addVideoUpload : title === "编辑" ? editVideoUpload : undefined,
    getTableList: proTable.value?.getTableList,
    goodsId
  };
  drawerRef.value?.acceptParams(params);
};
</script>

<style lang="less" scoped></style>
