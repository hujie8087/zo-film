import { RegionType } from '../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);

  const data = await $fetch<RegionType[]>(
    `http://localhost:3100/store/region?pid=${query.pid}`
  );
  return data;
});
