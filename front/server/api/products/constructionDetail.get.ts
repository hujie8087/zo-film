import { ClassifyTreeType, ClassifyType } from '../../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<ClassifyTreeType<ClassifyType>>(
    `http://127.0.0.1:3100/products/construction/${query.id}`
  );
  return data;
});
