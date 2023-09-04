import { NewsType } from '../../../types';

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const data = await $fetch<NewsType>(
    'http://127.0.0.1:3100/news/detail/' + id
  );
  console.log(data);

  return data;
});
