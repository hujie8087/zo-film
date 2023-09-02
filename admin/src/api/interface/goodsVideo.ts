import { ReqPage } from ".";

export namespace GoodsVideo {
  export interface ResGoodsVideoList {
    _id: string;
    name: string;
    img: string;
    goods_id: string;
    date: string;
    upload_video: string;
    subtitle: string;
    goods_name: string;
    status: string;
    sort: number;
  }
  export interface ResGoodsVideoParams extends ReqPage {
    name: string;
  }
}
