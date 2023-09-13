<template>
  <CommonBanner
    :title="chooseData?.classify_name"
    :img="chooseData?.classify_img"
  >
  </CommonBanner>
  <div class="choose-section">
    <div class="container">
      <el-row type="flex">
        <el-col :span="16" :offset="4">
          <div class="choose-content" v-html="chooseData?.classify_intro"></div>
          <nuxt-link to="/store" class="more-btn"
            ><i class="fa fa-map-marker"></i>挑选专业门店</nuxt-link
          >
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="choose-supply">
    <div class="container">
      <h2 class="title">{{ chooseData?.children[0].classify_name }}</h2>
      <div class="list">
        <div
          class="item"
          v-for="supply in chooseData?.children[0].children"
          :key="supply._id"
        >
          <el-row type="flex">
            <el-col :span="10" style="padding: 0 15px">
              <img
                class="supply-image"
                :src="supply.img"
                :alt="supply.name"
                srcset=""
              />
            </el-col>
            <el-col :span="14" class="supply-right">
              <h3 class="supply-title">{{ supply.name }}</h3>
              <p class="supply-content">{{ supply.intro }}</p>
              <nuxt-link to="/store" class="more-btn" v-if="!supply.e_mail"
                ><i class="fa fa-map-marker"></i>挑选专业门店</nuxt-link
              >
              <div v-else>
                <strong class="tip">电子邮件</strong>
                <nuxt-link class="link-arrow" :to="'mailto:' + supply.e_mail"
                  >{{ supply.e_mail }}
                </nuxt-link>
                <span class="link-pipe">|</span>
                <strong class="tip">联系电话</strong>
                <nuxt-link class="link-arrow" :to="'tel:' + supply.phone">{{
                  supply.phone
                }}</nuxt-link>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
  <div class="choose-topic">
    <div class="container">
      <h2 class="title">{{ chooseData?.children[2].classify_name }}</h2>

      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="30"
        navigation
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide
          v-for="video in chooseData?.children[2].children"
          :key="video._id"
        >
          <div class="item">
            <div class="link" @click="playVideo(video)">
              <img :src="video.img" :alt="video.name" srcset="" />
              <i class="fa fa-play-circle-o"></i>
            </div>
            <h5 class="item-title">{{ video.name }}</h5>
            <p class="item-content">{{ video.intro }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <client-only>
      <el-dialog v-model="dialogVisible" width="50%" :title="dialogTitle">
        <video :src="dialogVideo" controls style="width: 100%"></video>
      </el-dialog>
    </client-only>
  </div>
  <el-divider style="margin-bottom: 50px"></el-divider>
  <div class="choose-approval">
    <div class="container">
      <h2 class="title">{{ chooseData?.children[1].classify_name }}</h2>
      <div class="content">
        <p>{{ chooseData?.children[1].sub_name }}</p>
        <p>{{ chooseData?.children[1].en_name }}</p>
      </div>
      <el-row class="list" :gutter="120">
        <el-col
          :span="8"
          class="item"
          v-for="approval in chooseData?.children[1].children"
          :key="approval._id"
        >
          <div class="approval-image">
            <img :src="approval.img" :alt="approval.name" srcset="" />
          </div>
          <h4>
            <i class="fa fa-quote-left"></i>
            {{ approval.name }}
          </h4>
          <div class="approval-content">
            {{ approval.intro }}
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { VideoType } from 'types';
const siteInfo = useWebSite();
const menuList = await useMenuList();
const routeInfo = menuList.value.find(
  (item) => item.classify_url === '/choose'
);
const modules = [Navigation, Pagination, A11y];
const { data: chooseData } = await useFetch('/api/choose');
const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogVideo = ref('');
const playVideo = (video: VideoType) => {
  dialogTitle.value = video.name;
  dialogVideo.value = video.upload_video;
  dialogVisible.value = true;
};

useHead({
  title: routeInfo?.classify_name || siteInfo.value.title,
});
</script>

<style scoped lang="less">
.choose-section {
  padding: 60px 0;
  text-align: center;
  .choose-content {
    color: #333333;
    line-height: 1.5;
    font-size: 16px;
  }
}
.choose-supply {
  text-align: center;
  padding: 60px 0;
  .title {
    font-size: 36px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 40px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 100%;
      margin-bottom: 40px;
      text-align: left;

      .supply-image {
        width: 100%;
        height: auto;
      }
      .supply-right {
        padding: 0 30px;

        .supply-title {
          font-size: 32px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 20px;
        }
        .supply-content {
          font-size: 16px;
          color: #333333;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .link-pipe {
          margin: 0 15px;
        }
        .link-arrow {
          color: #f5af05;
          &:after {
            content: '\f061';
            margin-left: 5px;
            color: #f5af05;
            font-size: 0.9375rem;
            font-family: fontawesome;
          }
        }
        .tip {
          font-size: 16px;
          color: #333333;
          margin-right: 10px;
        }
      }
    }
  }
}
.choose-topic {
  text-align: center;
  padding: 40px 0;
  background-color: #1c1b1b;
  .title {
    font-size: 36px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 40px;
  }
  .item {
    text-align: left;
    cursor: pointer;
    color: #ffffff;
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
    .item-title {
      font-size: 20px;
      font-weight: 600;
      margin-top: 25px;
    }
    .item-content {
      font-size: 16px;
      margin-top: 10px;
      color: #f5af05;
    }
  }
}
.choose-approval {
  padding: 60px 0;
  text-align: center;
  .title {
    font-size: 36px;
    font-weight: 600;
    color: #333333;
  }
  .content {
    font-size: 22px;
    color: #f5af05;
    line-height: 1.2;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 100%;
      margin-bottom: 40px;
      .approval-image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
      }
      h4 {
        font-size: 18px;
        font-weight: 600;
        color: #333333;
        margin: 20px 0 10px;
        i {
          font-size: 30px;
          color: #f5af05;
          margin-right: 15px;
        }
      }
      .approval-content {
        font-size: 16px;
        color: #333333;
        margin-bottom: 20px;
        text-align: left;
      }
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
  i {
    margin-right: 5px;
  }
}
</style>
