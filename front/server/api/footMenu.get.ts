import { FootDataType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<FootDataType>('http://localhost:3100/foot-data');
  return data;
});
