import { SiteType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<SiteType>(`http://127.0.0.1:3100/site`);
  return data;
});
