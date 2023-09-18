import { ResHomeVideo } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResHomeVideo>('http://127.0.0.1:3100/home-video');
  return data;
});
