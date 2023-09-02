import { ClassifyType, MenuType, ResponseType } from '../../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ClassifyType[]>(
    'http://localhost:3100/news-type/menu'
  );
  const newsMenu = data.map((item) => {
    return {
      _id: item._id,
      title: item.classify_name,
      path: item.classify_url,
    };
  });
  return newsMenu;
});
