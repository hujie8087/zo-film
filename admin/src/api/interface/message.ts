import { ReqPage } from ".";

export namespace Message {
  export interface ResMessageList {
    _id: string;
    message_id: string;
    type_id: string;
    date: string;
    title: string;
    keywords: string;
    description: string;
    version_id: string;
    tel: string;
    qq: string;
    theme: string;
    content: string;
    e_mail: string;
  }
  export interface ResMessageParams extends ReqPage {
    name: string;
  }
}
