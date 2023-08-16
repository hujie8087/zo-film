<template>
  <div class="cate-name">
    <div class="container">
      <h1>
        <span class="category">{{ category }}</span>
        <span class="title">{{ title }}</span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const { category, title } = defineProps({
  category: String,
  title: String,
});
</script>

<style scoped lang="less">
.cate-name {
  background-color: #1c1b1b;
  padding: 10px 0;
  h1 {
    font-weight: bold;
    margin: 0;
    .category {
      font-size: 36px;
      margin-right: 30px;
      color: #f5af05;
    }
    .title {
      font-size: 20px;
      color: #ffffff;
    }
  }
}
</style>
