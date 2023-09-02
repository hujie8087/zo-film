import { ResHelpType } from '../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);

  const data = await $fetch<ResHelpType>(
    `http://localhost:3100/help/list?id=${query.classify_id}`
  );
  return data;
});
