import { ReqPage } from ".";

export namespace Link {
  export interface ResLinkList {
    _id: string;
    link_id: string;
    date: string;
    type_id: string;
    link_name: string;
    link_url: string;
    link_img: string;
    is_delete: boolean;
    classify_id: string;
  }
  export interface ResLinkParams extends ReqPage {
    link_name: string;
  }
}
