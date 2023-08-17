import { ResPage, Classify } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 新闻类型模块
 */
// 获取新闻类型列表
export const getNewsTypeList = () => {
  return http.get<ResPage<Classify.ResClassifyList>>(PORT1 + `/news-type`);
};

// 增新闻类型
export const addNewsType = (params: Classify.ResClassifyList) => {
  return http.post(PORT1 + `/News-type`, params);
};

// 编辑新闻类型
export const editNewsType = (params: Classify.ResClassifyList) => {
  return http.put(PORT1 + `/News-type/${params._id}`, params);
};

// 删除新闻类型
export const deleteNewsType = (params: Classify.ResClassifyList) => {
  return http.delete(PORT1 + `/News-type/${params._id}`, params);
};
