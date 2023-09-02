import { ReqPage } from ".";

export namespace Region {
  export interface ResRegionList {
    _id: string;
    region_id: string;
    region_pid: string;
    region_name: string;
    region_type: string;
    agency_id: string;
  }
  export interface ResRegionParams extends ReqPage {
    region_name: string;
  }
}
