import { ResMessageType } from '../../types';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = await $fetch<ResMessageType>(
    `http://localhost:3100/contact/message`,
    {
      method: 'POST',
      body,
    }
  );
  return data;
});
