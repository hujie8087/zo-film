import { ResSolutionType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResSolutionType>(`http://localhost:3100/solution`);
  return data;
});
