import { ReqPage } from ".";

export namespace Site {
  export interface ResSiteList {
    _id: string;
    site_id: string;
    type_id: string;
    date: string;
    version_id: string;
    title: string;
    keywords: string;
    description: string;
    company_name: string;
    logo_img: string;
    header_bj: string;
    url: string;
    header: string;
    inscribe: string;
    proportion_integral: string;
    tel: string;
    qq: string;
    version_name: string;
    sms_number: string;
    mobile: string;
  }
  export interface ResSiteParams extends ReqPage {
    company_name: string;
  }
}
