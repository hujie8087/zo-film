import { MenuListType } from 'types';

export const useMenuList = () => {
  return useState('menuList', (): MenuListType[] => []);
};
