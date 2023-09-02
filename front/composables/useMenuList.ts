import { ClassifyTreeType, ClassifyType } from 'types';

export const useMenuList = () => {
  return useState('menuList', (): ClassifyTreeType<ClassifyType>[] => []);
};
