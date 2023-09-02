import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Site } from "../interface/site";

// 获取站点设置列表
export const getSiteList = (params: Site.ResSiteParams) => {
  return http.get<ResPage<Site.ResSiteList[]>>(PORT1 + `/site`, params);
};
// 增站点设置
export const addSite = (params: Site.ResSiteList) => {
  return http.post(PORT1 + `/site`, params);
};
// 编辑站点设置
export const editSite = (params: Site.ResSiteList) => {
  return http.put(PORT1 + `/site/${params._id}`, params);
};
// 删除站点设置
export const deleteSite = (params: Site.ResSiteList) => {
  return http.delete(PORT1 + `/site/${params._id}`, params);
};
// 获取站点设置详情
export const getSiteById = (id: string) => {
  return http.get<Site.ResSiteList>(PORT1 + `/site/${id}`);
};
