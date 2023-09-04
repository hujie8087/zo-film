<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :loop="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="banner in props.bannerList" :key="banner._id">
      <img :src="banner.banner_img" alt="" srcset="" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
const modules = [Navigation, Pagination, A11y];
import { BannerType } from 'types';

// 接收父级组件传递的参数
const props = defineProps({
  bannerList: {
    type: Array as PropType<BannerType[]>,
    required: true,
  },
});
</script>

<style scoped>
.swiper {
  width: 100%;
  height: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  background: #ccc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-button-prev {
  background: #eee;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.swiper-button-next {
  background: #eee;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 去掉左右箭头默认样式 */
.swiper-button-prev:after {
  display: none;
}
.swiper-button-next:after {
  display: none;
}
</style>
