import { ManageDataType } from '../../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ManageDataType>(
    'http://127.0.0.1:3100/news/manage'
  );
  return data;
});
