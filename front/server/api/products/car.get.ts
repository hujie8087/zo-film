import { ClassifyTreeType, ClassifyType } from '../../../types';

export default defineEventHandler(async () => {
  const data = await $fetch<ClassifyTreeType<ClassifyTreeType<ClassifyType>>>(
    `http://localhost:3100/products/car`
  );

  return data;
});
