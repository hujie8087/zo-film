<template>
  <div>
    <TheHeader />
    <div class="main">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { data: siteInfo } = await useFetch('/api/site');
const site = useWebSite();
site.value = siteInfo.value!;
useHead({
  meta: [
    {
      name: 'keywords',
      content: siteInfo.value?.keywords,
    },
    {
      name: 'description',
      content: siteInfo.value?.description,
    },
  ],
  title: `${siteInfo.value?.title}`,
});
</script>

<style scoped></style>
