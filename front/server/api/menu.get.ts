import { ClassifyTreeType, ClassifyType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ClassifyTreeType<ClassifyTreeType<ClassifyType>>[]>(
    `http://127.0.0.1:3100/menu`
  );
  return data;
});
