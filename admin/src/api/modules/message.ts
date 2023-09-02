import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Message } from "../interface/message";

// 获取选择内容列表
export const getMessageList = (params: Message.ResMessageList) => {
  return http.get<ResPage<Message.ResMessageList[]>>(PORT1 + `/message`, params);
};
// 增选择内容
export const addMessage = (params: Message.ResMessageList) => {
  return http.post(PORT1 + `/message`, params);
};
// 编辑选择内容
export const editMessage = (params: Message.ResMessageList) => {
  return http.put(PORT1 + `/message/${params._id}`, params);
};
// 删除选择内容
export const deleteMessage = (params: Message.ResMessageList) => {
  return http.delete(PORT1 + `/message/${params._id}`, params);
};
// 获取选择内容详情
export const getMessageById = (id: string) => {
  return http.get<Message.ResMessageList>(PORT1 + `/message/${id}`);
};

// 批量删除选择内容
export const deleteMessageList = (ids: string[]) => {
  return http.delete(PORT1 + `/message/removeMany`, { ids });
};
