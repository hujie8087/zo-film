<template>
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
</template>
<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 注册图标
const nuxtApp = useNuxtApp();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component);
}
</script>
