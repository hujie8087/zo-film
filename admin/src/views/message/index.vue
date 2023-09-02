<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="留言列表"
      :columns="columns"
      :request-api="getTableList"
      :init-param="initParam"
      :data-callback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer('新增')"> 新增 </el-button>
        <el-button type="danger" :disabled="!scope.isSelected" :icon="DeleteFilled" @click="batchDelete(scope.selectedList)">
          批量删除
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)"> 查看 </el-button>
        <el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)"> 编辑 </el-button>
        <el-button type="primary" link :icon="Delete" @click="deleteAccount(scope.row)"> 删除 </el-button>
      </template>
    </ProTable>
    <MessageDrawer ref="drawerRef" />
  </div>
</template>

<script lang="tsx" setup name="MessageList">
import { reactive, ref } from "vue";
import { useHandleData } from "@/hooks/useHandleData";
import ProTable from "@/components/ProTable/index.vue";
import { ProTableInstance, ColumnProps } from "@/components/ProTable/interface";
import { CirclePlus, Delete, DeleteFilled, EditPen, View } from "@element-plus/icons-vue";
import { getMessageList, deleteMessage, editMessage, addMessage, deleteMessageList } from "@/api/modules/message";
import dayjs from "dayjs";
import { Message } from "@/api/interface/message";
import MessageDrawer from "./components/MessageDrawer.vue";

// 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
const proTable = ref<ProTableInstance>();
const initParam = reactive({});

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
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getMessageList"
const getTableList = (params: any) => {
  let newParams = JSON.parse(JSON.stringify(params));
  return getMessageList(newParams);
};

// 表格配置项
const columns: ColumnProps<Message.ResMessageList>[] = [
  { type: "selection", fixed: "left", width: 80 },
  {
    prop: "theme",
    label: "留言主题",
    align: "left",
    headerAlign: "center",
    search: { el: "input" }
  },
  {
    prop: "tel",
    label: "电话"
  },
  {
    prop: "e_mail",
    label: "邮箱"
  },
  {
    prop: "qq",
    label: "QQ"
  },
  {
    prop: "data",
    label: "留言时间",
    width: 180,
    render: scope => {
      return (
        <>{scope.row.date && scope.row.date !== "0" ? dayjs(+(scope.row.date + "000")).format("YYYY-MM-DD HH:mm:ss") : "--"}</>
      );
    }
  },
  { prop: "operation", label: "操作", fixed: "right", width: 200 }
];

// 删除用户信息
const deleteAccount = async (params: Message.ResMessageList) => {
  await useHandleData(deleteMessage, params, `删除【${params.theme}】`);
  proTable.value?.getTableList();
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof MessageDrawer> | null>(null);
const openDrawer = (title: string, row: Partial<Message.ResMessageList> = {}) => {
  const params = {
    title,
    isView: title === "查看",
    rowData: { ...row },
    api: title === "新增" ? addMessage : title === "编辑" ? editMessage : undefined,
    getTableList: proTable.value?.getTableList
  };
  drawerRef.value?.acceptParams(params);
};

const batchDelete = async (row: any) => {
  let ids = row.map((item: any) => item._id);
  await useHandleData(deleteMessageList, ids, "删除所选留言");
  proTable.value?.clearSelection();
  proTable.value?.getTableList();
};
</script>

<style lang="less" scoped></style>
