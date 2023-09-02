import { ManageDataType } from '../../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ManageDataType>(
    'http://localhost:3100/news/manage'
  );
  return data;
});
