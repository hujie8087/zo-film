import { ResGoodDetail } from '../../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<ResGoodDetail>(
    `http://127.0.0.1:3100/products/good-detail?id=${query.id}`
  );
  return data;
});
