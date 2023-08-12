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
const route = useRoute();

useHead({
  meta: [{ property: 'og:title', content: `Z&O - ${route.meta.title}` }],
  title: `Z&O - ${route.meta.title}`,
});
</script>

<style scoped></style>
