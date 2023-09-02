import { NewsListType } from '../../../types';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const data = await $fetch<NewsListType>(
    `http://localhost:3100/news/list?id=${query.classify_id}`
  );
  return data;
});
