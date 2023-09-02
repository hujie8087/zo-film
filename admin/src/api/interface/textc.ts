import { ReqPage } from ".";

export namespace TextC {
  export interface ResTextCList {
    _id: string;
    text_c_id: string;
    type_id: string;
    name: string;
    img: string;
    classify_id: string;
    content: string;
    date: string;
    status: string;
    sort: number;
  }
  export interface ResTextCParams extends ReqPage {
    name: string;
  }
}
