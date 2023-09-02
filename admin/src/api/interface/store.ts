import { ReqPage } from ".";

export namespace Store {
  export interface ResStoreList {
    _id: string;
    store_id: string;
    type_id: string;
    date: string;
    name: string;
    type: string;
    img: string;
    address: string;
    province: string;
    province_name: string;
    city: string;
    city_name: string;
    content: string;
  }
  export interface ResStoreParams extends ReqPage {
    name: string;
  }
}
