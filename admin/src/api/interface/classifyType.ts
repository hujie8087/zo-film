import { ReqPage } from ".";

export namespace ClassifyType {
  export interface ResClassifyTypeList {
    _id: string;
    type_id: string;
    table_name: string;
    type_name: string;
    show_id: string;
    page_name: string;
    date: string;
    is_delete: boolean;
    glids: string;
    biaoshi: string;
  }
  export interface ResClassifyTypeParams extends ReqPage {
    type_name: string;
  }
}
