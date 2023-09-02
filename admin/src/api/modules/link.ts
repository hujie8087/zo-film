import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Link } from "../interface/link";

// 获取友情链接列表
export const getLinkList = (params: Link.ResLinkParams) => {
  return http.get<ResPage<Link.ResLinkList[]>>(PORT1 + `/link`, params);
};
// 增友情链接
export const addLink = (params: Link.ResLinkList) => {
  return http.post(PORT1 + `/link`, params);
};
// 编辑友情链接
export const editLink = (params: Link.ResLinkList) => {
  return http.put(PORT1 + `/link/${params._id}`, params);
};
// 删除友情链接
export const deleteLink = (params: Link.ResLinkList) => {
  return http.delete(PORT1 + `/link/${params._id}`, params);
};
// 获取友情链接详情
export const getLinkById = (id: string) => {
  return http.get<Link.ResLinkList>(PORT1 + `/link/${id}`);
};
