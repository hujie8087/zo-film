import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Text } from "../interface/text";

// 获取图文列表
export const getTextList = (params: Text.ResTextList) => {
  return http.get<ResPage<Text.ResTextList[]>>(PORT1 + `/text`, params);
};
// 增图文
export const addText = (params: Text.ResTextList) => {
  return http.post(PORT1 + `/text`, params);
};
// 编辑图文
export const editText = (params: Text.ResTextList) => {
  return http.put(PORT1 + `/text/${params._id}`, params);
};
// 删除图文
export const deleteText = (params: Text.ResTextList) => {
  return http.delete(PORT1 + `/text/${params._id}`, params);
};
// 获取图文详情
export const getTextById = (id: string) => {
  return http.get<Text.ResTextList>(PORT1 + `/text/${id}`);
};

// 批量删除图文
export const deleteTextList = (ids: string[]) => {
  return http.delete(PORT1 + `/text/removeMany`, { ids });
};
