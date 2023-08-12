<template>
  <TheBanner />
  <div class="home-section-con">
    <div class="container">
      <el-row type="flex">
        <el-col :span="8">
          <div class="logo">
            <img src="~/assets/logo.png" alt="" srcset="" />
          </div>
        </el-col>
        <el-col :span="16">
          <div class="home-section-link">
            <ul>
              <li>
                <nuxt-link
                  to="https://daokeshi.tthweixin.com/app/index.php?i=4&c=entry&eid=297&op=query&wxref=mp.weixin.qq.com"
                >
                  <i class="fa fa-file-text"></i>电子质保查询<i
                    class="fa fa-arrow-right"
                  ></i>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="">
                  <i class="fa fa-map-marker"></i>挑选专业门店<i
                    class="fa fa-arrow-right"
                  ></i>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin" class="outline"
                  ><img src="~/assets/images/tm1.png" alt="" srcset=""
                /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin" class="outline"
                  ><img src="~/assets/images/jd1.png" alt="" srcset=""
                /></nuxt-link>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="home-section">
    <div class="home-banner">
      <img src="~/assets/images/home_banner.jpg" alt="" srcset="" />
    </div>
  </div>
  <div class="home-section2">
    <div class="container">
      <h2 class="home-title">选择您需要的装贴部位</h2>
      <el-row :gutter="20">
        <el-col
          :span="8"
          :xs="24"
          v-for="(mounting, index) in homeData?.mountingList"
          :key="mounting.id"
        >
          <div class="item">
            <img :src="mounting.img" :alt="mounting.title" srcset="" />
            <h5>{{ mounting.title }}</h5>
          </div>
        </el-col>
      </el-row>
      <nuxt-link to="" class="more-btn">查看所有局部保护选项</nuxt-link>
    </div>
  </div>
  <div class="video-layout-content">
    <div class="container">
      <h2 class="home-title">Z&O视频</h2>
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="30"
        navigation
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="video in homeData?.videoList" :key="video._id">
          <div class="item">
            <div class="link" @click="playVideo(video)">
              <img :src="video.imageUrl" :alt="video.title" srcset="" />
              <i class="fa fa-play-circle-o"></i>
            </div>
            <h5 class="title">{{ video.title }}</h5>
            <p class="content">{{ video.subtitle }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <nuxt-link to="" class="more-btn">查看更多视频</nuxt-link>
    </div>
  </div>
  <div class="home-section5">
    <div class="container">
      <nuxt-link to="/">
        <img src="~/assets/images/logo_black.png" alt="" srcset="" />
        <i class="fa fa-instagram"></i>
      </nuxt-link>
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
import type { Action } from 'element-plus';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { VideoType } from 'types';

const modules = [Navigation, Pagination, A11y];
const { data: homeData } = useFetch('/api/homeData');

const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogVideo = ref('');

const playVideo = (video: VideoType) => {
  dialogTitle.value = video.title;
  dialogVideo.value = video.videoUrl;
  dialogVisible.value = true;
};
</script>

<style scoped lang="less">
.home-section-con {
  padding: 30px;
  background-color: #292929;
  .logo {
    height: 44px;
    img {
      height: 100%;
    }
  }
  .home-section-link {
    ul {
      float: right;
      li {
        float: left;
        height: 44px;
        line-height: 44px;
        border-right: 2px solid #323232;
        padding: 0 20px;
        &:last-child {
          border-right: none;
          padding-right: 0;
        }
        img {
          width: auto;
          height: 30px;
        }
        a {
          color: #ffffff;
          font-size: 16px;
          &:hover {
            color: #f5af05;
          }
          .fa {
            margin: 0 5px;
          }
          .fa-arrow-right {
            color: #f5af05;
          }
        }
      }
    }
  }
}
.home-section {
  img {
    width: 100%;
    height: auto;
  }
}
.home-section5 {
  background-color: #ebebeb;
  text-align: center;
  padding: 25px 0;
  line-height: 50px;
  i {
    font-size: 50px;
    color: #1c1b1b;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 50px;
  }
}
.home-section2 {
  text-align: center;
  .home-title {
    font-weight: 600;
    font-size: 30px;
  }
  .item {
    margin-top: 20px;
    img {
      width: 100%;
      height: auto;
    }
    h5 {
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
    }
  }
}
.video-layout-content {
  text-align: center;
  margin: 50px 0;
  .home-title {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 30px;
  }
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
    }
    .content {
      font-size: 16px;
      margin-top: 10px;
    }
  }
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
:deep(.el-dialog__body) {
  padding: 0 20px;
}
</style>
