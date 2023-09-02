import { ResPage } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import { Goods } from "../interface/goods";
import { GoodsImg } from "../interface/goodsImg";
import { GoodsVideo } from "../interface/goodsVideo";

// 获取商品列表
export const getGoodsList = (params: Goods.ResGoodsParams) => {
  return http.get<ResPage<Goods.ResGoodsList>>(PORT1 + `/goods`, params);
};
// 获取商品数据
export const getGoodsData = () => {
  return http.get<Goods.ResGoodsList[]>(PORT1 + `/goods/data`);
};
// 增商品
export const addGoods = (params: Goods.ResGoodsList) => {
  return http.post(PORT1 + `/goods`, params);
};
// 编辑商品
export const editGoods = (params: Goods.ResGoodsList) => {
  return http.put(PORT1 + `/goods/${params._id}`, params);
};
// 删除商品
export const deleteGoods = (id: string) => {
  return http.delete(PORT1 + `/goods/${id}`);
};
// 获取商品详情
export const getGoodsById = (id: string) => {
  return http.get<Goods.ResGoodsList>(PORT1 + `/goods/${id}`);
};

// 获取商品图片列表
export const getGoodsImgList = (params: GoodsImg.ResGoodsImgParams) => {
  return http.get<ResPage<GoodsImg.ResGoodsImgList[]>>(PORT1 + `/goods-imgs`, params);
};
// 增商品图片
export const addGoodsImg = (params: GoodsImg.ResGoodsImgList) => {
  return http.post(PORT1 + `/goods-imgs`, params);
};
// 编辑商品图片
export const editGoodsImg = (params: GoodsImg.ResGoodsImgList) => {
  return http.put(PORT1 + `/goods-imgs/${params._id}`, params);
};
// 删除商品图片
export const deleteGoodsImg = (params: GoodsImg.ResGoodsImgList) => {
  return http.delete(PORT1 + `/goods-imgs/${params._id}`, params);
};
// 获取商品图片详情
export const getGoodsImgById = (id: string) => {
  return http.get<GoodsImg.ResGoodsImgList>(PORT1 + `/goods-imgs/${id}`);
};
// 批量删除商品图片
export const deleteGoodsImgList = (ids: string[]) => {
  return http.delete(PORT1 + `/goods-imgs/removeMany`, { ids });
};

// 获取商品视频列表
export const getGoodsVideoList = (params: GoodsVideo.ResGoodsVideoParams) => {
  return http.get<ResPage<GoodsVideo.ResGoodsVideoList[]>>(PORT1 + `/goods-videos`, params);
};
// 增商品视频
export const addGoodsVideo = (params: GoodsVideo.ResGoodsVideoList) => {
  return http.post(PORT1 + `/goods-videos`, params);
};
// 编辑商品视频
export const editGoodsVideo = (params: GoodsVideo.ResGoodsVideoList) => {
  return http.put(PORT1 + `/goods-videos/${params._id}`, params);
};
// 删除商品视频
export const deleteGoodsVideo = (params: GoodsVideo.ResGoodsVideoList) => {
  return http.delete(PORT1 + `/goods-videos/${params._id}`, params);
};
// 获取商品视频详情
export const getGoodsVideoById = (id: string) => {
  return http.get<GoodsVideo.ResGoodsVideoList>(PORT1 + `/goods-videos/${id}`);
};
// 批量删除商品视频
export const deleteGoodsVideoList = (ids: string[]) => {
  return http.delete(PORT1 + `/goods-videos/removeMany`, { ids });
};
