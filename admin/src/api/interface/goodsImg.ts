import { ReqPage } from ".";

export namespace GoodsImg {
  export interface ResGoodsImgList {
    _id: string;
    name: string;
    imgs: string;
    goods_id: string;
    date: string;
    status: string;
    sort: number;
    goods_name: string;
    intro: string;
  }
  export interface ResGoodsImgParams extends ReqPage {
    name: string;
  }
}
