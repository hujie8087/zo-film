import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { VideoDown } from "../interface/videoDown";

// 获取商品视频列表
export const getVideoDownList = (params: VideoDown.ResVideoDownParams) => {
  return http.get<ResPage<VideoDown.ResVideoDownList[]>>(PORT1 + `/video-down`, params);
};
// 增商品视频
export const addVideoDown = (params: VideoDown.ResVideoDownList) => {
  return http.post(PORT1 + `/video-down`, params);
};
// 编辑商品视频
export const editVideoDown = (params: VideoDown.ResVideoDownList) => {
  return http.put(PORT1 + `/video-down/${params._id}`, params);
};
// 删除商品视频
export const deleteVideoDown = (params: VideoDown.ResVideoDownList) => {
  return http.delete(PORT1 + `/video-down/${params._id}`, params);
};
// 获取商品视频详情
export const getVideoDownById = (id: string) => {
  return http.get<VideoDown.ResVideoDownList>(PORT1 + `/video-down/${id}`);
};
