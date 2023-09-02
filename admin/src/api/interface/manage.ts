import { ReqPage } from ".";

export namespace Manage {
  export interface ResManageList {
    _id: string;
    manage_id: string;
    type_id: string;
    date: string;
    title: string;
    keywords: string;
    description: string;
    version_id: string;
    name: string;
    position: string;
    theme: string;
    detail: string;
    classify_name: string;
    status: string;
    sort: number;
    classify_id: string;
  }
  export interface ResManageParams extends ReqPage {
    name?: string;
    classify_id?: string;
  }
}
