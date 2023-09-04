import { StoreType } from '../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<StoreType[]>(
    `http://127.0.0.1:3100/store/list?city=${query.city}&province=${query.province}`
  );
  return data;
});
