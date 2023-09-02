import { ClassifyTreeType, ClassifyType } from '../../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<ClassifyTreeType<ClassifyType>>(
    `http://localhost:3100/products/construction/${query.id}`
  );
  return data;
});
