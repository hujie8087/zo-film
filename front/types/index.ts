export type ResponseType<T> = {
  code: number;
  data: T;
  msg: string;
};

export type MenuListType = {
  title: string;
  path: string;
  children?: MenuListType[] | [];
  keyWord: string[];
  isFoot: boolean;
};

export type MountingType = {
  title: string;
  img: string;
  id: string;
};

export interface VideoUploadType {
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

export interface VideoDownType {
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

export interface MenuType {
  _id: string;
  title: string;
  path: string;
}

export interface ClassifyType {
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

export interface ClassifyTreeType<T> extends ClassifyType {
  children: T[];
}

export interface ResCoverType extends ClassifyType {
  children: GoodType[];
  video: ClassifyType;
  detailList: GoodType[];
}

export interface BannerType {
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

export interface VideoType {
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
export interface GoodType {
  _id: string;
  goods_id: string;
  type_id: string;
  date: string;
  title: string;
  keywords: string;
  description: string;
  version_id: string;
  goods_name: string;
  brand: string;
  goods_intro: string;
  goods_type_id: string;
  sales: string;
  index_img: string;
  is_index: string;
  goods_img: string;
  goods_bigimg: string;
  additional_img1: string;
  additional_img2: string;
  additional_img3: string;
  additional_img4: string;
  goods_content: string;
  goods_classify_id: string;
  color: string;
  size: string;
  price: string;
  price_array: string;
  tianmao: string;
  jingdong: string;
  erji_title: string;
  upload_video: string;
  sort: string;
  is_delete: boolean;
  status: string;
  imgCount: number;
  videoCount: number;
}

export interface HomeDataType {
  bannerList: BannerType[];
  picture: ClassifyType;
  mounting: ClassifyTreeType<GoodType>;
  video: ClassifyTreeType<VideoType>;
}

export interface FootDataType {
  links: ClassifyType[];
  technology: ClassifyType[];
  footBg: ClassifyType;
  logo: ClassifyType;
  menu: ClassifyTreeType<ClassifyType>[];
}

export interface ManageType {
  _id: string;
  manage_id: string;
  type_id: string;
  date: string;
  title: string;
  keywords: string;
  description: string;
  version_id: string;
  name: string;
  position: string;
  theme: string;
  detail: string;
  classify_name: string;
  status: string;
  sort: number;
  classify_id: string;
}

export interface ManageTreeType extends ClassifyType {
  children: ManageType[];
}

export interface ManageDataType extends ClassifyType {
  children: ManageTreeType[];
}

export interface NewsType {
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
  pid: string;
}
export interface NewsListType extends ClassifyType {
  children: NewsType[];
}

export interface whyType {
  _id: string;
  type_id: string;
  name: string;
  img: string;
  date: string;
  intro: string;
  e_mail: string;
  phone: string;
  status: string;
  sort: number;
  classify_name: string;
}

export interface ChooseType extends ClassifyType {
  children: ClassifyTreeType<whyType & VideoUploadType>[];
}

export interface ResMessageType {
  code: number;
  msg: string;
}

export interface ResSolutionType extends ClassifyType {
  children: ClassifyType[];
  video: ClassifyTreeType<VideoUploadType>;
}

export interface TextType {
  _id: string;
  text_id: string;
  type_id: string;
  name: string;
  img: string;
  classify_id: string;
  upload_img: string;
  date: string;
}
export interface ResTrainType extends ClassifyType {
  children: ClassifyTreeType<TextType>[];
}

export interface TextCType {
  _id: string;
  text_c_id: string;
  type_id: string;
  name: string;
  img: string;
  classify_id: string;
  content: string;
  date: string;
  status: string;
  sort: number;
}

export interface DownloadType {
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

export interface SiteType {
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

export interface RegionType {
  _id: string;
  region_id: string;
  region_pid: string;
  region_name: string;
  region_type: string;
  agency_id: string;
}

export interface StoreType {
  _id: string;
  store_id: string;
  type_id: string;
  date: string;
  name: string;
  type: string;
  img: string;
  address: string;
  province: string;
  province_name: string;
  city: string;
  city_name: string;
  content: string;
}

export interface ResInstallerType extends ClassifyType {
  children: ClassifyTreeType<TextCType & VideoUploadType>[];
}

export interface ResSoftwareType extends ClassifyType {
  children: ClassifyTreeType<TextCType & VideoDownType>[];
}

export interface ResHelpType extends ClassifyType {
  children: ClassifyType[];
  downloads: DownloadType[];
}

export interface GoodImg {
  _id: string;
  name: string;
  imgs: string;
  goods_id: string;
  date: string;
  status: string;
  sort: number;
  goods_name: string;
  intro: string;
}
export interface GoodVideo {
  _id: string;
  name: string;
  img: string;
  goods_id: string;
  date: string;
  upload_video: string;
  subtitle: string;
  goods_name: string;
  status: string;
  sort: number;
}

export interface ResGoodDetail {
  data: GoodType;
  imgList: GoodImg[];
  videoList: GoodVideo[];
}

export interface ResHeadProduct {
  other: ClassifyType;
  coverList: GoodType[];
  carList: ClassifyType[];
  solutionList: ClassifyTreeType<ClassifyType>[];
}
