<template>
  <div class="bread-crumbs-item">
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
    <i class="iconfont icon-angle-right"></i>
  </div>
</template>

<script setup lang="ts">
const { to } = defineProps({
  to: {
    type: [String, Object],
  },
});
</script>

<style scoped></style>
