import { ReqPage } from ".";

export namespace Text {
  export interface ResTextList {
    _id: string;
    text_id: string;
    type_id: string;
    name: string;
    img: string;
    classify_id: string;
    upload_img: string;
    date: string;
  }
  export interface ResTextParams extends ReqPage {
    name: string;
  }
}
