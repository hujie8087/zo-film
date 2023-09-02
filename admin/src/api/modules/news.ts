import { ResPage, Classify } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { News } from "../interface/news";

/**
 * @name 新闻类型模块
 */
// 获取新闻类型列表
export const getNewsTypeList = () => {
  return http.get<ResPage<Classify.ResClassifyList>>(PORT1 + `/news-type`);
};

// 增新闻类型
export const addNewsType = (params: Classify.ResClassifyList) => {
  return http.post(PORT1 + `/news-type`, params);
};

// 编辑新闻类型
export const editNewsType = (params: Classify.ResClassifyList) => {
  return http.put(PORT1 + `/news-type/${params._id}`, params);
};

// 删除新闻类型
export const deleteNewsType = (params: Classify.ResClassifyList) => {
  return http.delete(PORT1 + `/news-type/${params._id}`, params);
};

// 切换新闻类型状态
export const changeNewsTypeStatus = (params: { status: number; _id: string }) => {
  return http.put(PORT1 + `/news-type/changeStatus`, params);
};

/**
 * @name 新闻模块
 */
// 获取新闻列表
export const getNewsList = (params: News.ResNewsParams) => {
  return http.get<ResPage<News.ResNewsList[]>>(PORT1 + `/news`, params);
};

// 增新闻
export const addNews = (params: News.ResNewsList) => {
  return http.post(PORT1 + `/news`, params);
};

// 编辑新闻
export const editNews = (params: News.ResNewsList) => {
  return http.put(PORT1 + `/news/${params._id}`, params);
};

// 删除新闻
export const deleteNews = (id: string) => {
  return http.delete(PORT1 + `/news/${id}`);
};

// 切换新闻状态
export const changeNewsStatus = (params: { status: number; _id: string }) => {
  return http.put(PORT1 + `/news/changeStatus`, params);
};
