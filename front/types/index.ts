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

export interface VideoType {
  _id: string;
  title: string;
  imageUrl: string;
  subtitle: string;
  videoUrl: string;
}

export interface MenuType {
  _id: string;
  title: string;
  path: string;
}
