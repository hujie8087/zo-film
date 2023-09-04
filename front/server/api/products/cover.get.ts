import { ResCoverType } from '../../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<ResCoverType>(
    `http://127.0.0.1:3100/products/cover?id=${query.id}`
  );
  return data;
});
