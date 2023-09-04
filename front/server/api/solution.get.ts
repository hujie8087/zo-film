import { ResSolutionType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResSolutionType>(`http://127.0.0.1:3100/solution`);
  return data;
});
