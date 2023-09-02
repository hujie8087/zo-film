import { ResGoodDetail } from '../../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<ResGoodDetail>(
    `http://localhost:3100/products/good-detail?id=${query.id}`
  );
  return data;
});
