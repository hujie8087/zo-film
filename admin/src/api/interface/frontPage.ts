export namespace FrontPage {
  export interface ResFrontBanner {
    _id: string;
    banner_id: string;
    type_id: string;
    date: string;
    title: string;
    keywords: string;
    description: string;
    banner_title: string;
    banner_url: string;
    banner_img: string;
    sort: number;
    status: string;
  }
  export interface ResFrontBannerParams {
    title: string;
  }
  export interface ResFrontHome {
    _id: string;
    classify_id: string;
    classify_pid: string;
    type_id: string;
    level_id: string;
    date: string;
    title: string;
    keywords: string;
    description: string;
    version_id: string;
    note: string;
    classify_name: string;
    classify_url: string;
    classify_note: string;
    en_name: string;
    classify_intro: string;
    classify_img: string;
    page_img: string;
    is_delete: boolean;
    sub_name: string;
    beizhu: string;
    classify_intro2: string;
    upload_img: string;
    sort: number;
  }
}
