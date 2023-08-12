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
