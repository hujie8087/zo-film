import { ChooseType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ChooseType>(`http://localhost:3100/why`);
  return data;
});
