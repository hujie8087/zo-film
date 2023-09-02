import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { VideoUpload } from "../interface/videoUpload";

// 获取商品视频列表
export const getVideoUploadList = (params: VideoUpload.ResVideoUploadParams) => {
  return http.get<ResPage<VideoUpload.ResVideoUploadList[]>>(PORT1 + `/video-upload`, params);
};
// 增商品视频
export const addVideoUpload = (params: VideoUpload.ResVideoUploadList) => {
  return http.post(PORT1 + `/video-upload`, params);
};
// 编辑商品视频
export const editVideoUpload = (params: VideoUpload.ResVideoUploadList) => {
  return http.put(PORT1 + `/video-upload/${params._id}`, params);
};
// 删除商品视频
export const deleteVideoUpload = (params: VideoUpload.ResVideoUploadList) => {
  return http.delete(PORT1 + `/video-upload/${params._id}`, params);
};
// 获取商品视频详情
export const getVideoUploadById = (id: string) => {
  return http.get<VideoUpload.ResVideoUploadList>(PORT1 + `/video-upload/${id}`);
};
