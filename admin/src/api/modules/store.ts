import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Store } from "../interface/store";
import { Region } from "../interface/region";

// 获取店铺列表
export const getStoreList = (params: ResPage<Store.ResStoreParams>) => {
  return http.get<ResPage<Store.ResStoreList[]>>(PORT1 + `/store`, params);
};
// 增店铺
export const addStore = (params: Store.ResStoreList) => {
  return http.post(PORT1 + `/store`, params);
};
// 编辑店铺
export const editStore = (params: Store.ResStoreList) => {
  return http.put(PORT1 + `/store/${params._id}`, params);
};
// 删除店铺
export const deleteStore = (id: string) => {
  return http.delete(PORT1 + `/store/${id}`);
};
// 获取店铺详情
export const getStoreById = (id: string) => {
  return http.get<Store.ResStoreList>(PORT1 + `/store/${id}`);
};

// 批量删除店铺
export const deleteStoreList = (ids: string[]) => {
  return http.delete(PORT1 + `/store/removeMany`, { ids });
};

export const getFilterRegionList = (pid: string) => {
  return http.get<ResPage<Region.ResRegionList>>(PORT1 + `/store/filter`, { pid });
};
