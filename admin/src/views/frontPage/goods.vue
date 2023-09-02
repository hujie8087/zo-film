<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="首页装贴部位列表"
      :columns="columns"
      :request-api="getTableList"
      :init-param="initParam"
      :data-callback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer('新增')"> 新增 </el-button>
        <el-button type="danger" :icon="Delete" plain :disabled="!scope.isSelected" @click="batchDelete(scope.selectedListIds)">
          批量删除
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button type="danger" link :icon="View" @click="openImgDrawer(scope.row)">
          图片集({{ scope.row.imgCount }})
        </el-button>
        <el-button type="warning" link :icon="View" @click="openVideoDrawer(scope.row)">
          视频集({{ scope.row.videoCount }})
        </el-button>
        <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)"> 查看 </el-button>
        <el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)"> 编辑 </el-button>
        <el-button type="primary" link :icon="Delete" @click="deleteAccount(scope.row)"> 删除 </el-button>
      </template>
    </ProTable>
    <GoodsDrawer ref="drawerRef" />
  </div>
</template>

<script lang="tsx" setup name="GoodsList">
import { reactive, ref } from "vue";
import { useHandleData } from "@/hooks/useHandleData";
import ProTable from "@/components/ProTable/index.vue";
import GoodsDrawer from "./components/GoodsDrawer.vue";
import { ProTableInstance, ColumnProps } from "@/components/ProTable/interface";
import { CirclePlus, Delete, EditPen, View } from "@element-plus/icons-vue";
import { getGoodsList, deleteGoods, editGoods, addGoods } from "@/api/modules/goods";
import dayjs from "dayjs";
import { Goods } from "@/api/interface/goods";
import { useRoute, useRouter } from "vue-router";
import { getClassifyList } from "@/api/modules/frontPage";
const route = useRoute();
const router = useRouter();

// 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
const proTable = ref<ProTableInstance>();
const goodsId = route.query.type_id as string;
const initParam = reactive({ type_id: goodsId });
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
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getGoods"
const getTableList = (params: any) => {
  let newParams = JSON.parse(JSON.stringify(params));
  return getGoodsList(newParams);
};

// 表格配置项
const columns: ColumnProps<Goods.ResGoodsList>[] = [
  { type: "selection", fixed: "left", width: 80 },
  {
    prop: "goods_classify_id",
    label: "产品分类",
    enum: () => getClassifyList({ type_id: "3" }),
    search: { el: "select", props: { filterable: true } },
    fieldNames: { label: "classify_name", value: "classify_id" }
  },
  {
    prop: "goods_name",
    label: "商品名称",
    search: { el: "input" }
  },
  {
    prop: "goods_img",
    label: "产品图片",
    width: 250,
    render: scope => {
      return (
        <>
          <img src={scope.row.goods_img} alt="" srcset="" style={{ height: "50px" }} />
        </>
      );
    }
  },
  {
    prop: "goods_bigimg",
    label: "产品大图",
    width: 250,
    render: scope => {
      return (
        <>
          <img src={scope.row.goods_bigimg} alt="" srcset="" style={{ height: "50px" }} />
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
    width: 150,
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
const deleteAccount = async (params: Goods.ResGoodsList) => {
  await useHandleData(deleteGoods, params._id, `删除【${params.goods_name}】`);
  proTable.value?.getTableList();
};

// 批量删除用户信息
const batchDelete = async (id: string[]) => {
  await useHandleData(deleteGoods, { id }, "删除所选广告条信息");
  proTable.value?.clearSelection();
  proTable.value?.getTableList();
};

const changeSort = async (row: Goods.ResGoodsList) => {
  // await useHandleData(editGoods, { _id: row._id, sort: row.sort }, `修改【${row.news_title}】新闻排序`);
  await editGoods(row);
  proTable.value?.getTableList();
};

const changeStatus = async (row: Goods.ResGoodsList) => {
  // await useHandleData(editGoods, { _id: row._id, status: row.status }, `修改【${row.news_title}】新闻状态`);
  await editGoods({ ...row, status: row.status === "1" ? "0" : "1" });
  proTable.value?.getTableList();
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof GoodsDrawer> | null>(null);
const openDrawer = (title: string, row: Partial<Goods.ResGoodsList> = {}) => {
  const params = {
    title,
    isView: title === "查看",
    rowData: { ...row },
    api: title === "新增" ? addGoods : title === "编辑" ? editGoods : undefined,
    getTableList: proTable.value?.getTableList
  };
  drawerRef.value?.acceptParams(params);
};
const openImgDrawer = (row: Partial<Goods.ResGoodsList> = {}) => {
  router.push(`/goodsImgs?goods_id=${row.goods_id}`);
};
const openVideoDrawer = (row: Partial<Goods.ResGoodsList> = {}) => {
  router.push(`/goodsVideos?goods_id=${row.goods_id}`);
};
</script>

<style lang="less" scoped></style>
