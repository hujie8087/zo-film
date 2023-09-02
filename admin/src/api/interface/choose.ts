import { ReqPage } from ".";

export namespace Choose {
  export interface ResChooseList {
    _id: string;
    type_id: string;
    name: string;
    img: string;
    date: string;
    e_mail: string;
    phone: string;
    status: string;
    sort: number;
    classify_name: string;
  }
  export interface ResChooseParams extends ReqPage {
    name: string;
  }
}
