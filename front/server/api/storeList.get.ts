import { StoreType } from '../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<StoreType[]>(
    `http://localhost:3100/store/list?city=${query.city}&province=${query.province}`
  );
  return data;
});
