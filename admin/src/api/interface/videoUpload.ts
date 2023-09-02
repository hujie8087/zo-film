import { ReqPage } from ".";

export namespace VideoUpload {
  export interface ResVideoUploadList {
    _id: string;
    name: string;
    img: string;
    goods_id: string;
    date: string;
    upload_video: string;
    intro: string;
    goods_name: string;
    status: string;
    sort: number;
    pid: string;
  }
  export interface ResVideoUploadParams extends ReqPage {
    name: string;
  }
}
