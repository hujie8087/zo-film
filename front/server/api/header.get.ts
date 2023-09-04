import { ResHeadProduct } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResHeadProduct>(`http://127.0.0.1:3100/head-other`);
  return data;
});
