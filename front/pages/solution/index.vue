<template>
  <CommonBanner
    :img="solutionData?.classify_img"
    :title="solutionData?.classify_name"
    breadTo="/help"
    :breadText="solutionData?.classify_name"
  />
  <div class="solution">
    <div class="container">
      <h2>{{ solutionData?.sub_name }}</h2>
      <div class="content" v-html="solutionData?.classify_intro"></div>
      <nuxt-link class="more" to="#"
        >请求更多信息 <i class="fa fa-arrow-down"></i
      ></nuxt-link>
      <div class="solution-train">
        <el-row type="flex" :gutter="50">
          <el-col
            :span="8"
            v-for="item in solutionData?.children"
            :key="item._id"
          >
            <div class="item">
              <nuxt-link :to="item.classify_url">
                <img :src="item.page_img" :alt="item.classify_name" srcset="" />
                <h4>
                  {{ item.classify_name }}<i class="fa fa-arrow-right"></i>
                </h4>
              </nuxt-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <h2 class="dealer-title">{{ solutionData?.video.classify_name }}</h2>
    <div class="solution-dealer">
      <div class="container">
        <el-row type="flex">
          <el-col :span="20" :offset="2">
            <swiper
              :modules="modules"
              :slides-per-view="3"
              :space-between="30"
              navigation
              :loop="true"
              :pagination="{ clickable: true }"
            >
              <swiper-slide
                v-for="video in solutionData?.video.children"
                :key="video._id"
              >
                <div class="item">
                  <div class="link" @click="playVideo(video)">
                    <img :src="video.img" :alt="video.goods_name" srcset="" />
                    <i class="fa fa-play-circle-o"></i>
                  </div>
                  <h5 class="title">{{ video.name }}</h5>
                  <p class="content">{{ video.intro }}</p>
                </div>
              </swiper-slide>
            </swiper></el-col
          >
        </el-row>
      </div>
    </div>
    <client-only>
      <el-dialog v-model="dialogVisible" width="50%" :title="dialogTitle">
        <video :src="dialogVideo" controls style="width: 100%"></video>
      </el-dialog>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { VideoType } from 'types';

const { data: solutionData } = useFetch('/api/solution');
const modules = [Navigation, Pagination, A11y];

const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogVideo = ref('');
const playVideo = (video: VideoType) => {
  dialogTitle.value = video.name;
  dialogVideo.value = video.upload_video;
  dialogVisible.value = true;
};
</script>

<style lang="less" scoped>
.solution {
  h2 {
    text-align: center;
    margin-top: 30px;
    color: #323232;
    font-size: 30px;
    font-weight: bold;
    margin: 50px 0 40px;
  }
  .content {
    font-size: 16px;
    color: #333333;
  }
  .more {
    display: block;
    text-align: center;
    margin: 30px auto;
    width: 180px;
    color: #323232;
    font-size: 16px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    background-color: #f5af05;
    letter-spacing: 0.03em;
    border-radius: 5px;
    i {
      margin-left: 10px;
    }
  }
  .solution-train {
    margin: 50px 0;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
      h4 {
        margin-top: 20px;
        font-size: 16px;
        color: #323232;
        font-weight: bold;
        i {
          margin-left: 10px;
          color: #f5af05;
        }
      }
    }
  }
  .dealer-title {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .solution-dealer {
    text-align: center;
    margin: 50px 0;
    padding: 40px;
    background-color: #1c1b1b;
    .item {
      text-align: left;
      cursor: pointer;
      .link {
        position: relative;
        img {
          width: 100%;
          height: auto;
        }
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 50px;
          color: #f5af05;
          z-index: 9;
        }
      }
      .title {
        font-size: 20px;
        font-weight: 600;
        margin-top: 25px;
        color: #ffffff;
      }
      .content {
        font-size: 16px;
        margin-top: 10px;
        color: #f5af05;
      }
    }
  }
  :deep(.el-dialog__body) {
    padding: 0 20px 20px;
  }
}
</style>
