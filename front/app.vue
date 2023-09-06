<template>
  <ElConfigProvider :locale="zhCn">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <el-backtop
      :right="20"
      :bottom="20"
      style="background-color: #f5af05; align-items: self-start"
    >
      <i class="fa fa-angle-up" style="font-size: 35px; color: #fff"></i>
    </el-backtop>
  </ElConfigProvider>
</template>
<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 注册图标
const nuxtApp = useNuxtApp();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component);
}
const webSiteInfo = useWebSite();
useHead({
  // as a string,
  // where `%s` is replaced with the title
  // titleTemplate: '%s - Site Title',
  // ... or as a function
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - ${webSiteInfo.value.title}`
      : webSiteInfo.value.title;
  },
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover',
    },
    {
      name: 'keywords',
      content: webSiteInfo.value.keywords,
    },
    {
      name: 'description',
      content: webSiteInfo.value.description,
    },
  ],
});
</script>
