import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Choose } from "../interface/choose";

// 获取选择内容列表
export const getChooseList = (params: Choose.ResChooseList) => {
  return http.get<ResPage<Choose.ResChooseList[]>>(PORT1 + `/why`, params);
};
// 增选择内容
export const addChoose = (params: Choose.ResChooseList) => {
  return http.post(PORT1 + `/why`, params);
};
// 编辑选择内容
export const editChoose = (params: Choose.ResChooseList) => {
  return http.put(PORT1 + `/why/${params._id}`, params);
};
// 删除选择内容
export const deleteChoose = (params: Choose.ResChooseList) => {
  return http.delete(PORT1 + `/why/${params._id}`, params);
};
// 获取选择内容详情
export const getChooseById = (id: string) => {
  return http.get<Choose.ResChooseList>(PORT1 + `/why/${id}`);
};

// 批量删除选择内容
export const deleteChooseList = (ids: string[]) => {
  return http.delete(PORT1 + `/why/removeMany`, { ids });
};
