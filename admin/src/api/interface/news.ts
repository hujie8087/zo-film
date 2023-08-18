import { Classify } from ".";

export namespace NewsType {
  export interface ResNewsTypeList extends Classify.ResClassifyList {
    children?: ResNewsTypeList[];
  }
}

export namespace News {
  export interface ResNewsList {
    _id: string;
    title: string;
    keywords: string;
    description: string;
    content: string;
    time: string;
    news_id: string;
    type_id: string;
    type_name: string;
    date: string;
    news_title: string;
    news_intro: string;
    news_author: string;
    news_source: string;
    news_content: string;
    news_img: string;
    status: string;
    is_delete: boolean;
    sort: number;
  }
  export interface ResNewsParams {
    news_title?: string;
    type_id?: string;
  }
}
