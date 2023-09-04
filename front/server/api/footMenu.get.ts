import { FootDataType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<FootDataType>('http://127.0.0.1:3100/foot-data');
  return data;
});
