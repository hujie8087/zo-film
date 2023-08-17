import { Classify } from ".";

export namespace NewsType {
  export interface ResNewsTypeList extends Classify.ResClassifyList {
    children?: ResNewsTypeList[];
  }
}
