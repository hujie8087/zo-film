import { ClassifyTreeType, ClassifyType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ClassifyTreeType<ClassifyTreeType<ClassifyType>>[]>(
    `http://localhost:3100/menu`
  );
  return data;
});
