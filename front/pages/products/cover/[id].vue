<template>
  <CommonBanner
    :img="`../../${coverDetail?.data.goods_bigimg}`"
    breadTo="/products"
    :breadText="coverDetail?.data.goods_name"
  />
  <div class="cover-detail">
    <div class="container">
      <el-row type="flex" :gutter="80">
        <el-col :span="16">
          <h1>{{ coverDetail?.data.goods_name }}</h1>
          <div
            class="cover-content"
            v-html="
              coverDetail?.data.goods_content.replaceAll(
                '&quot;Uploads',
                '&quot;../../Uploads'
              )
            "
          ></div>
        </el-col>
        <el-col :span="8">
          <nuxt-link to="/store" class="store-btn btn">
            <i class="fa fa-map-marker"></i> 挑选专业门店
          </nuxt-link>
          <h4 class="cover-buy">
            购买{{ coverDetail?.data.goods_name }}的方法
          </h4>
          <nuxt-link :to="coverDetail?.data.tianmao" class="cover-link">
            Z&O天猫旗舰店
            <i class="fa fa-arrow-right"></i>
          </nuxt-link>
          <nuxt-link :to="coverDetail?.data.jingdong" class="cover-link">
            Z&O京东自营店 <i class="fa fa-arrow-right"></i>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
    <div class="video-wrap">
      <div class="container">
        <video
          :src="'../../' + coverDetail?.data.upload_video"
          controls
        ></video>
      </div>
    </div>
    <div class="cover-function">
      <div class="container">
        <h2>功能介绍</h2>
        <el-row type="flex" :gutter="30">
          <el-col
            :span="8"
            v-for="item in coverDetail?.imgList"
            :key="item._id"
            class="item"
          >
            <img :src="'../../' + item.imgs" alt="" srcset="" />
            <h3>{{ item.name }}</h3>
            <div class="content">{{ item.intro }}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <h2 class="video-title">{{ coverDetail?.data.goods_name }}视频</h2>
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
                v-for="video in coverDetail?.videoList"
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
    <client-only>
      <el-dialog v-model="dialogVisible" width="50%" :title="dialogTitle">
        <video :src="dialogVideo" controls style="width: 100%"></video>
      </el-dialog>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { GoodVideo } from 'types';
const modules = [Navigation, Pagination, A11y];
const route = useRoute();
const { data: coverDetail } = useFetch('/api/products/coverDetail', {
  query: {
    id: route.params.id,
  },
});
useHead({
  title: coverDetail.value?.data.goods_name,
});
const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogVideo = ref('');
const playVideo = (video: GoodVideo) => {
  dialogTitle.value = video.name;
  dialogVideo.value = '../../' + video.upload_video;
  dialogVisible.value = true;
};
</script>

<style lang="less" scoped>
.cover-detail {
  padding: 60px 0;
  h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 40px;
    color: #1c1b1b;
  }
  .cover-content {
    font-size: 16px;
    line-height: 1.8;
    color: #1c1b1b;
  }
  .store-btn {
    padding: 20px 24px;
    display: inline-block;
    line-height: 1;
    letter-spacing: 0.03em;
    font-size: 16px;
    text-align: center;
    margin: 20px auto;
    text-transform: uppercase;
    margin-right: 20px;
    color: #1c1b1b;
    font-weight: 600;
    background: #f5af05;
    border-radius: 4px;
    i {
      font-size: 22px;
    }
  }
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #1c1b1b;
  }
  .cover-link {
    display: block;
    font-size: 16px;
    color: #f5af05;
    margin-bottom: 10px;
    i {
      font-size: 16px;
      margin-left: 5px;
    }
    &:hover {
      color: #323232;
    }
  }
  .video-wrap {
    background-color: #f1f1f1;
    padding: 50px 0;
    video {
      width: 100%;
      height: auto;
    }
  }
  .cover-function {
    padding: 50px 0;
    h2 {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 40px;
      color: #1c1b1b;
      text-align: center;
    }
    .item {
      img {
        width: 100%;
        height: auto;
      }
      h3 {
        font-size: 20px;
        font-weight: 600;
        margin-top: 20px;
        color: #1c1b1b;
      }
      .content {
        font-size: 16px;
        margin-top: 10px;
        color: #1c1b1b;
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
</style>
