<template>
  <CommonBanner
    :img="`../${installerData?.classify_img}`"
    :title="installerData?.classify_name"
    breadTo="/solution/train"
    :breadText="installerData?.classify_name"
  />
  <div class="installer">
    <div class="container">
      <el-row class="shop-list">
        <el-col :span="14">
          <div class="train-left">
            <h2>{{ installerData?.children[3].classify_name }}</h2>
            <div
              class="train-content"
              v-html="installerData?.children[3].classify_intro2"
            ></div>
            <nuxt-link to="/store" class="more-btn"
              ><i class="fa fa-map-marker"></i> 挑选专业门店</nuxt-link
            >
          </div>
        </el-col>
        <el-col :span="10">
          <div
            class="train-right"
            v-html="installerData?.children[3].classify_intro"
          ></div>
        </el-col>
      </el-row>
      <el-divider />

      <div class="shop-list">
        <el-row type="flex">
          <el-col :span="14">
            <div class=""></div>
            <div
              class="train-content"
              v-html="installerData?.children[2].classify_intro"
            ></div>
          </el-col>
          <el-col :span="10">
            <div class="train-install">
              <h1>{{ installerData?.children[2].classify_name }}</h1>
              <img
                :src="'../' + installerData?.children[2].classify_img"
                alt=""
                srcset=""
              />
              <h4>{{ installerData?.children[2].sub_name }}</h4>
              <div class="train-address">
                {{ installerData?.children[2].en_name }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="success-wrap">
      <div class="container">
        <h1>{{ installerData?.children[0].classify_name }}</h1>
        <el-row type="flex" :gutter="50">
          <el-col
            :span="12"
            v-for="item in installerData?.children[0].children"
            :key="item._id"
          >
            <div class="item">
              <img :src="'../' + item.img" alt="" srcset="" />
              <div class="content">
                <h3>{{ item.name }}</h3>
                <p v-html="item.content"></p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <h2 class="video-title">{{ installerData?.children[1].classify_name }}</h2>
    <div class="installer-video">
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
                v-for="video in installerData?.children[1].children"
                :key="video._id"
              >
                <div class="item">
                  <div class="link" @click="playVideo(video)">
                    <img :src="'../' + video.img" :alt="video.name" srcset="" />
                    <i class="fa fa-play-circle-o"></i>
                  </div>
                  <h5 class="title">{{ video.name }}</h5>
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
const { data: installerData } = useFetch('/api/installer');

const modules = [Navigation, Pagination, A11y];
useHead({
  title: installerData.value?.classify_name,
});
const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogVideo = ref('');
const playVideo = (video: VideoType) => {
  dialogTitle.value = video.name;
  dialogVideo.value = video.upload_video;
  dialogVisible.value = true;
};
</script>

<style scoped lang="less">
.installer {
  .shop-list {
    padding: 50px 0;
    h2,
    h1 {
      font-size: 30px;
      margin: 0 0 30px;
      font-weight: bold;
    }
    .train-left {
      padding: 0 15px;
      h1 {
        margin: 0 0 40px;
      }
    }
    .train-content {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .train-right {
      background-color: #f5af05;
      padding: 30px;
      font-size: 16px;
    }
    .more-btn {
      padding: 20px 24px;
      display: inline-block;
      line-height: 1;
      letter-spacing: 0.03em;
      font-size: 16px;
      text-align: center;
      margin: 20px auto;
      color: #1c1b1b;
      font-weight: 600;
      text-transform: uppercase;
      background: #f5af05;
      border-radius: 4px;
    }
    &.course {
      h1 {
        text-align: center;
        font-weight: bold;
      }
      .course-content {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    .train-install {
      padding: 0 15px;
      h1 {
        font-style: italic;
      }
      h4 {
        font-size: 20px;
        margin: 10px 0;
      }
      .train-address {
        font-size: 16px;
        color: #f5af05;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .success-wrap {
    background-color: #f1f1f1;
    margin-top: 20px;
    padding: 70px 0;
    h1 {
      text-align: center;
      font-size: 36px;
      margin: 0 0 70px;
      font-weight: bold;
    }
    .item {
      img {
        width: 100%;
        height: auto;
      }
      .content {
        background-color: #fff;
        padding: 30px;
        h3 {
          font-size: 20px;
          margin: 20px 0;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
  .video-title {
    text-align: center;
    font-size: 36px;
    margin: 50px 0;
  }
  .installer-video {
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
