import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { TextC } from "../interface/textc";

// 获取文本列表
export const getTextCList = (params: TextC.ResTextCList) => {
  return http.get<ResPage<TextC.ResTextCList[]>>(PORT1 + `/text-c`, params);
};
// 增文本
export const addTextC = (params: TextC.ResTextCList) => {
  return http.post(PORT1 + `/text-c`, params);
};
// 编辑文本
export const editTextC = (params: TextC.ResTextCList) => {
  return http.put(PORT1 + `/text-c/${params._id}`, params);
};
// 删除文本
export const deleteTextC = (params: TextC.ResTextCList) => {
  return http.delete(PORT1 + `/text-c/${params._id}`, params);
};
// 获取文本详情
export const getTextCById = (id: string) => {
  return http.get<TextC.ResTextCList>(PORT1 + `/text-c/${id}`);
};

// 批量删除文本
export const deleteTextCList = (ids: string[]) => {
  return http.delete(PORT1 + `/text-c/removeMany`, { ids });
};
