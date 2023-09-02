import { ClassifyType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ClassifyType[]>('http://localhost:3100/help/menu');
  return data;
});
