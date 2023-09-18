<template>
  <div class="video-box">
    <div class="container">
      <BreadCrumbsItem :to="'/video'" :text="videoData?.data.classify_name" />
      <h2 class="video-title">{{ videoData?.data.classify_name }}</h2>
    </div>
  </div>
  <div class="video-wrap">
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
              v-for="video in videoData?.videoList"
              :key="video._id"
            >
              <div class="item">
                <div class="link" @click="playVideo(video)">
                  <img
                    :src="'../../' + video.img"
                    :alt="video.name"
                    srcset=""
                  />
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
  <div class="video-box">
    <div class="container">
      <div
        class="video-list"
        v-for="item in videoData?.children"
        :key="item.classify_id"
      >
        <h3>{{ item.classify_name }}</h3>
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
              <swiper-slide v-for="video in item.children" :key="video._id">
                <div class="item">
                  <div class="link" @click="playVideo(video)">
                    <img
                      :src="'../../' + video.img"
                      :alt="video.name"
                      srcset=""
                    />
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
  </div>
  <client-only>
    <el-dialog v-model="dialogVisible" width="50%" :title="dialogTitle">
      <video :src="dialogVideo" controls style="width: 100%"></video>
    </el-dialog>
  </client-only>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { VideoUploadType } from 'types';
const modules = [Navigation, Pagination, A11y];
const { data: videoData } = useFetch('/api/videoData');
const siteInfo = useWebSite();
useHead({
  title: videoData.value?.data.classify_name || siteInfo.value.title,
  meta: [
    { name: 'description', content: siteInfo.value.description },
    { name: 'keywords', content: siteInfo.value.keywords },
  ],
});
const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogVideo = ref('');
const playVideo = (video: VideoUploadType) => {
  dialogTitle.value = video.name;
  dialogVideo.value = '../../' + video.upload_video;
  dialogVisible.value = true;
};
</script>

<style scoped lang="less">
.video-title {
  text-align: center;
  font-size: 36px;
  margin: 50px 0;
}
.video-wrap {
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
</style>
