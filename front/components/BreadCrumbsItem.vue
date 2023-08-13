<template>
  <div class="bread-crumbs-item">
    <nuxt-link to="/">首页</nuxt-link>
    <i>/</i>
    <span v-if="props.to">{{ props.text }}</span>
    <span v-else><slot /></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="less">
.bread-crumbs-item {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 30px;
  font-size: 14px;
  color: #f5af05;
  padding: 10px 0;
  a {
    color: #f5af05;
  }
  i {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
