import { RegionType } from '../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);

  const data = await $fetch<RegionType[]>(
    `http://127.0.0.1:3100/store/region?pid=${query.pid}`
  );
  return data;
});
