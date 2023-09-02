import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Region } from "../interface/region";

// 获取选择地区列表
export const getRegionList = (pid: string) => {
  return http.get<ResPage<Region.ResRegionList>>(PORT1 + `/region`, { region_pid: pid });
};
// 增选择地区
export const addRegion = (params: Region.ResRegionList) => {
  return http.post(PORT1 + `/region`, params);
};
// 编辑选择地区
export const editRegion = (params: Region.ResRegionList) => {
  return http.put(PORT1 + `/region/${params._id}`, params);
};
// 删除选择地区
export const deleteRegion = (id: string) => {
  return http.delete(PORT1 + `/region/${id}`);
};
// 获取选择地区详情
export const getRegionById = (id: string) => {
  return http.get<Region.ResRegionList>(PORT1 + `/region/${id}`);
};

// 批量删除选择地区
export const deleteRegionList = (ids: string[]) => {
  return http.delete(PORT1 + `/region/removeMany`, { ids });
};

// 获取选择地区数据
export const getRegionData = (pid: string) => {
  return http.get<Region.ResRegionList[]>(PORT1 + `/region/data`, { region_pid: pid });
};
