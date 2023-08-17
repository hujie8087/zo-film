import { MenuType, ResponseType } from '../../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResponseType<MenuType[]>>(
    'http://localhost:3000/news-type/menu'
  );
  return data.data;
});
