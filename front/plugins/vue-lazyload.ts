import VueLazyLoad from 'vue-lazyload';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyLoad, {
    preLoad: 1.33,
    error: '',
    loading: '',
    attempt: 2,
    throttleWait: 200,
  });
});
