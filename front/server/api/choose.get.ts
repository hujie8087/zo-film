import { ChooseType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ChooseType>(`http://127.0.0.1:3100/why`);
  return data;
});
