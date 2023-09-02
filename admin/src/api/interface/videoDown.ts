import { ReqPage } from ".";

export namespace VideoDown {
  export interface ResVideoDownList {
    _id: string;
    video_down_id: string;
    type_id: string;
    date: string;
    name: string;
    down_video: string;
    status: string;
    sort: number;
    classify_id: string;
  }
  export interface ResVideoDownParams extends ReqPage {
    name: string;
  }
}
