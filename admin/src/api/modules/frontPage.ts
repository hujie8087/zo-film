import { Comment, ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { FrontPage } from "../interface/frontPage";
import { ClassifyType } from "../interface/classifyType";

/**
 * @name 首页广告图模块
 */
// 获取首页广告图列表
export const getFrontPageBannerList = () => {
  return http.get<ResPage<FrontPage.ResFrontBanner[]>>(PORT1 + `/home/banner`);
};

// 增首页广告图
export const addFrontPageBanner = (params: FrontPage.ResFrontBanner) => {
  return http.post(PORT1 + `/home/banner`, params);
};

// 编辑首页广告图
export const editFrontPageBanner = (params: FrontPage.ResFrontBanner) => {
  return http.put(PORT1 + `/home/banner/${params._id}`, params);
};

// 删除首页广告图
export const deleteFrontPageBanner = (params: FrontPage.ResFrontBanner) => {
  return http.delete(PORT1 + `/home/banner/${params._id}`, params);
};

// 切换首页广告图状态
export const changeFrontPageBannerStatus = (params: { status: number; _id: string }) => {
  return http.put(PORT1 + `/home/banner/changeStatus`, params);
};

/**
 * @name 首页内容区图片模块
 */
// 获取首页内容区列表
export const getFrontPageList = (params: Comment.ReqCommentParams) => {
  return http.get<ResPage<Comment.ResCommentList>>(PORT1 + `/home/classify`, params);
};
// 增首页内容区图片
export const getFrontPage = (id: string) => {
  return http.get<Comment.ResCommentList>(PORT1 + `/home/classify/${id}`);
};

// 增首页内容区图片
export const addFrontPage = (params: Comment.ResCommentList) => {
  return http.post(PORT1 + `/home/classify`, params);
};

// 编辑首页内容区图片
export const editFrontPage = (params: Comment.ResCommentList) => {
  return http.put(PORT1 + `/home/classify/${params._id}`, params);
};

// 删除首页内容区图片
export const deleteFrontPage = (id: string) => {
  return http.delete(PORT1 + `/home/classify/${id}`);
};

// 获取首页分类树结构
export const getFrontPageClassifyTree = (pid: string) => {
  return http.get<ResPage<Comment.ResCommentTree>>(PORT1 + `/home/classify/tree`, { pid });
};

export const getClassifyList = (params: Comment.ReqComment) => {
  return http.get<Comment.ResCommentList[]>(PORT1 + `/home/classify/list`, params);
};

// 获取classify-type分类列表
export const getClassifyTypeList = () => {
  return http.get<ClassifyType.ResClassifyTypeList[]>(PORT1 + `/classify-type`);
};
