<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="文件上传列表"
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
    <LinkDrawer ref="drawerRef" />
  </div>
</template>

<script lang="tsx" setup name="linkList">
import { reactive, ref } from "vue";
import { useHandleData } from "@/hooks/useHandleData";
import ProTable from "@/components/ProTable/index.vue";
import { ProTableInstance, ColumnProps } from "@/components/ProTable/interface";
import { CirclePlus, Delete, EditPen, View } from "@element-plus/icons-vue";
import { getLinkList, deleteLink, editLink, addLink } from "@/api/modules/link";
import dayjs from "dayjs";
import { Link } from "@/api/interface/link";
import { useRoute } from "vue-router";
import LinkDrawer from "./components/LinkDrawer.vue";
import { getClassifyList } from "@/api/modules/frontPage";
const route = useRoute();
// 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
const proTable = ref<ProTableInstance>();
const classifyId = route.query.pid as string;
const initParam = reactive({ classify_id: classifyId });

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
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getLinkList"
const getTableList = (params: any) => {
  let newParams = JSON.parse(JSON.stringify(params));
  return getLinkList(newParams);
};

// 表格配置项
const columns: ColumnProps<Link.ResLinkList>[] = [
  { type: "selection", fixed: "left", width: 80 },
  {
    prop: "link_name",
    align: "left",
    headerAlign: "center",
    label: "名称",
    search: { el: "input" }
  },
  {
    prop: "classify_id",
    align: "left",
    headerAlign: "center",
    label: "归属栏目",
    enum: () => getClassifyList({ type_id: "7" }),
    fieldNames: { label: "classify_name", value: "classify_id" }
  },
  {
    prop: "link_img",
    label: "图片",
    width: 250,
    render: scope => {
      return (
        <>
          <el-image
            src={scope.row.link_img}
            style="height:50px"
            preview-src-list={[scope.row.link_img]}
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
const deleteAccount = async (params: Link.ResLinkList) => {
  await useHandleData(deleteLink, params, `删除【${params.link_name}】`);
  proTable.value?.getTableList();
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof LinkDrawer> | null>(null);
const openDrawer = (title: string, row: Partial<Link.ResLinkList> = {}) => {
  const params = {
    title,
    isView: title === "查看",
    rowData: { ...row },
    api: title === "新增" ? addLink : title === "编辑" ? editLink : undefined,
    getTableList: proTable.value?.getTableList,
    classifyId
  };
  drawerRef.value?.acceptParams(params);
};
</script>

<style lang="less" scoped></style>
