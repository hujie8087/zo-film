import { ReqPage } from ".";

export namespace Download {
  export interface ResDownloadList {
    _id: string;
    type_id: string;
    date: string;
    download_id: string;
    download_name: string;
    download_file: string;
    pv: string;
    download_number: string;
    download_content: string;
    is_delete: boolean;
    classify_id: string;
  }
  export interface ResDownloadParams extends ReqPage {
    download_name: string;
  }
}
