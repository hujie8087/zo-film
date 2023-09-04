import { ClassifyType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ClassifyType[]>(`http://127.0.0.1:3100/footLinks`);
  return data;
});
