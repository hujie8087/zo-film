<template>
  <CommonBanner
    title="为何选择Z&O"
    img="https://www.zo-film.com/Uploads/images/2020/10/29/1603959885_classify_img.jpg"
  >
  </CommonBanner>
  <div class="choose-section">
    <div class="container">
      <el-row type="flex">
        <el-col :span="16" :offset="4">
          <div class="choose-content">
            {{ chooseData?.content }}
          </div>
          <nuxt-link to="/store" class="more-btn"
            ><i class="fa fa-map-marker"></i>挑选专业门店</nuxt-link
          >
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="choose-supply">
    <div class="container">
      <h2 class="title">我们提供什么</h2>
      <div class="list">
        <div
          class="item"
          v-for="supply in chooseData?.supply"
          :key="supply._id"
        >
          <el-row type="flex">
            <el-col :span="10" style="padding: 0 15px">
              <img
                class="supply-image"
                :src="supply.imageUrl"
                :alt="supply.title"
                srcset=""
              />
            </el-col>
            <el-col :span="14" class="supply-right">
              <h3 class="supply-title">{{ supply.title }}</h3>
              <p class="supply-content">{{ supply.content }}</p>
              <nuxt-link to="/store" class="more-btn" v-if="supply.showBtn"
                ><i class="fa fa-map-marker"></i>挑选专业门店</nuxt-link
              >
              <div v-else>
                <strong class="tip">电子邮件</strong>
                <nuxt-link
                  class="link-arrow"
                  to="mailto:dowcause@dowcause.com.cn"
                  >mailto:dowcause@dowcause.com.cn
                </nuxt-link>
                <span class="link-pipe">|</span>
                <strong class="tip">联系电话</strong>
                <nuxt-link class="link-arrow" to="tel:4006999590"
                  >4006999590</nuxt-link
                >
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
  <div class="choose-topic">
    <div class="container">
      <h2 class="title">专题报道</h2>

      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="30"
        navigation
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="video in chooseData?.topic" :key="video._id">
          <div class="item">
            <div class="link" @click="playVideo(video)">
              <img :src="video.imageUrl" :alt="video.title" srcset="" />
              <i class="fa fa-play-circle-o"></i>
            </div>
            <h5 class="item-title">{{ video.title }}</h5>
            <p class="item-content">{{ video.subtitle }}</p>
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
  <div class="choose-approval">
    <div class="container">
      <h2 class="title">客户赞许</h2>
      <div class="content">
        <p>听听我们的客户和经销商对Z&O的看法。如果您有话要说？</p>
        <p>请通过4006999590向我们提供反馈。</p>
      </div>
      <el-row class="list" :gutter="120">
        <el-col
          :span="8"
          class="item"
          v-for="approval in chooseData?.approval"
          :key="approval._id"
        >
          <div class="approval-image">
            <img :src="approval.imageUrl" :alt="approval.title" srcset="" />
          </div>
          <h4>
            <i class="fa fa-quote-left"></i>
            {{ approval.title }}
          </h4>
          <div class="approval-content">
            {{ approval.content }}
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
const menuList = await useMenuList();
const routeInfo = menuList.value.find((item) => item.path === '/choose');
console.log(routeInfo?.keyWord);
onMounted(() => {
  if (routeInfo) {
    // definePageMeta({
    //   title: routeInfo?.title || '',
    //   description: routeInfo?.path || '',
    //   keywords: routeInfo?.keyWord.join(',') || '',
    // });
    definePageMeta({
      title: '挑选专业门店',
      description: '挑选专业门店',
      keywords: '挑选专业门店',
    });
    console.log(routeInfo?.keyWord);
  }
});

const modules = [Navigation, Pagination, A11y];
const { data: chooseData } = await useFetch('/api/choose');
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
