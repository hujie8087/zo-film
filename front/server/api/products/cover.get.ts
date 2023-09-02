import { ResCoverType } from '../../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<ResCoverType>(
    `http://localhost:3100/products/cover?id=${query.id}`
  );
  return data;
});
