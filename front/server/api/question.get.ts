import { ResQuestionType } from '../../types';

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  const data = await $fetch<ResQuestionType>(
    `http://127.0.0.1:3100/help/question?id=${query.classify_id}`
  );

  return data;
});
