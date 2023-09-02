import { ReqPage } from ".";

export namespace Goods {
  export interface ResGoodsList {
    _id: string;
    goods_id: string;
    type_id: string;
    date: string;
    title: string;
    keywords: string;
    description: string;
    version_id: string;
    goods_name: string;
    brand: string;
    goods_intro: string;
    goods_type_id: string;
    sales: string;
    index_img: string;
    is_index: string;
    goods_img: string;
    goods_bigimg: string;
    additional_img1: string;
    additional_img2: string;
    additional_img3: string;
    additional_img4: string;
    goods_content: string;
    goods_classify_id: string;
    color: string;
    size: string;
    price: string;
    price_array: string;
    tianmao: string;
    jingdong: string;
    erji_title: string;
    upload_video: string;
    sort: string;
    is_delete: boolean;
    status: string;
    imgCount: number;
    videoCount: number;
  }
  export interface ResGoodsParams extends ReqPage {
    goods_name?: string;
  }
}
