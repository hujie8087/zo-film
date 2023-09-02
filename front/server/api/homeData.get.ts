import { HomeDataType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<HomeDataType>(
    'http://localhost:3100/home-data?pid=4'
  );
  return data;
});
