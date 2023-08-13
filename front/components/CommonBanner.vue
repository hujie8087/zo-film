<template>
  <div class="common-banner">
    <div class="mark" v-if="title">
      <h1>{{ title }}</h1>
    </div>
    <img :src="img" alt="" srcset="" />
    <div class="container">
      <BreadCrumbsItem v-if="breadTo" :to="breadTo" :text="breadText" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, img } = defineProps({
  title: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
  breadTo: {
    type: String,
    default: '',
  },
  breadText: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="less">
.common-banner {
  width: 100%;
  height: auto;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .mark {
    background-color: rgba(0, 0, 0, 0.35);
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #fff;
      font-size: 60px;
      font-weight: bold;
    }
  }
  .container {
    position: absolute;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
  }
}
</style>
