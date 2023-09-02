import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Manage } from "../interface/manage";

// 获取选择内容列表
export const getManageList = (params: Manage.ResManageList) => {
  return http.get<ResPage<Manage.ResManageList[]>>(PORT1 + `/manage`, params);
};
// 增选择内容
export const addManage = (params: Manage.ResManageList) => {
  return http.post(PORT1 + `/manage`, params);
};
// 编辑选择内容
export const editManage = (params: Manage.ResManageList) => {
  return http.put(PORT1 + `/manage/${params._id}`, params);
};
// 删除选择内容
export const deleteManage = (params: Manage.ResManageList) => {
  return http.delete(PORT1 + `/manage/${params._id}`, params);
};
// 获取选择内容详情
export const getManageById = (id: string) => {
  return http.get<Manage.ResManageList>(PORT1 + `/manage/${id}`);
};

// 批量删除选择内容
export const deleteManageList = (ids: string[]) => {
  return http.delete(PORT1 + `/manage/removeMany`, { ids });
};
