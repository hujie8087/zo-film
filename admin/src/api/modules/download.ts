import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Download } from "../interface/download";

// 获取文件上传列表
export const getDownloadList = (params: Download.ResDownloadParams) => {
  return http.get<ResPage<Download.ResDownloadList[]>>(PORT1 + `/download`, params);
};
// 增文件上传
export const addDownload = (params: Download.ResDownloadList) => {
  return http.post(PORT1 + `/download`, params);
};
// 编辑文件上传
export const editDownload = (params: Download.ResDownloadList) => {
  return http.put(PORT1 + `/download/${params._id}`, params);
};
// 删除文件上传
export const deleteDownload = (params: Download.ResDownloadList) => {
  return http.delete(PORT1 + `/download/${params._id}`, params);
};
// 获取文件上传详情
export const getDownloadById = (id: string) => {
  return http.get<Download.ResDownloadList>(PORT1 + `/download/${id}`);
};
