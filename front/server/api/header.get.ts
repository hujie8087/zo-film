import { ResHeadProduct } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResHeadProduct>(`http://localhost:3100/head-other`);
  return data;
});
