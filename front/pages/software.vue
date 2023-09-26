<template>
  <CommonBanner
    :img="softwareData?.classify_img"
    breadTo="/software"
    :breadText="softwareData?.classify_name"
    :title="softwareData?.classify_name"
  />
  <div class="software-box">
    <div class="container">
      <el-row class="shop-list" :gutter="30">
        <el-col :span="14">
          <div class="software-left">
            <h2>{{ getDate('50')?.classify_name }}</h2>
            <div
              class="software-content"
              v-html="getDate('50')?.classify_intro2"
            ></div>
            <nuxt-link to="/store" class="more-btn"
              >了解更多信息 <i class="fa fa-arrow-down"></i
            ></nuxt-link>
          </div>
        </el-col>
        <el-col :span="10">
          <div
            class="software-right"
            v-html="getDate('50')?.classify_intro"
          ></div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="software-box">
    <div class="container">
      <div class="video-wrap">
        <video
          :src="getDate('51')?.children[0].down_video"
          controls
          muted
          autoplay
          loop
        ></video>
      </div>
    </div>
  </div>
  <div class="software-box">
    <div class="container">
      <div class="software-section">
        <h2>{{ getDate('52')?.classify_name }}</h2>
        <el-row type="flex" :gutter="50">
          <el-col :span="8">
            <img v-lazy="getDate('52')?.classify_img" alt="" srcset="" />
            <h3>{{ getDate('52')?.classify_name }}</h3>
            <p>{{ getDate('52')?.sub_name }}</p>
          </el-col>
          <el-col :span="16">
            <div class="content" v-html="getDate('52')?.classify_intro"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <div class="software-box">
    <div class="container">
      <div class="software-list">
        <h2>{{ getDate('53')?.classify_name }}</h2>
        <el-row type="flex">
          <el-col
            :span="8"
            v-for="item in getDate('53')?.children"
            :key="item._id"
          >
            <div class="item">
              <img v-lazy="item.img" alt="" srcset="" />
              <h4>{{ item.name }}</h4>
              <div v-html="item.content"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <div class="software-box">
    <div class="container">
      <div class="software-section">
        <h2>{{ getDate('54')?.classify_name }}</h2>
        <el-row type="flex" :gutter="50">
          <el-col :span="8">
            <img v-lazy="getDate('54')?.classify_img" alt="" srcset="" />
            <h3>{{ getDate('54')?.classify_name }}</h3>
            <p>{{ getDate('54')?.en_name }}</p>
          </el-col>
          <el-col :span="16">
            <div class="content" v-html="getDate('54')?.classify_intro"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <div class="software-box">
    <div class="container">
      <div class="software-list">
        <h2>{{ getDate('55')?.classify_name }}</h2>
        <el-row type="flex">
          <el-col
            :span="8"
            v-for="item in getDate('55')?.children"
            :key="item._id"
          >
            <div class="item">
              <img v-lazy="item.img" alt="" srcset="" />
              <h4>{{ item.name }}</h4>
              <div v-html="item.content"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <div
    class="software-box"
    v-for="software in getDate('56')?.children"
    :key="software._id"
  >
    <div class="container">
      <h4>{{ software.name }}</h4>
      <div class="software-content" v-html="software.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: softwareData } = useFetch('/api/software');
const getDate = (id: string) => {
  return softwareData.value?.children.find(
    (item: any) => item.classify_id === id
  );
};
const siteInfo = useWebSite();
useHead({
  title: softwareData.value?.classify_name || siteInfo.value.title,
  meta: [
    { name: 'description', content: siteInfo.value.description },
    { name: 'keywords', content: siteInfo.value.keywords },
  ],
});
</script>

<style scoped lang="less">
.software-box {
  padding: 60px 0;
  &:nth-child(2n + 1) {
    background-color: #f1f1f1;
  }
  .shop-list {
    padding: 50px 0;
    h2,
    h1 {
      font-size: 30px;
      margin: 0 0 30px;
      font-weight: bold;
    }
    .software-left {
      padding: 0 15px;
      h1 {
        margin: 0 0 40px;
      }
    }
    .software-content {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .software-right {
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
  }
  .video-wrap {
    width: 100%;
    height: auto;
    display: block;
    video {
      width: 100%;
      height: auto;
    }
  }
  .software-section {
    h2 {
      font-size: 36px;
      margin: 0 0 60px;
      text-align: center;
    }
    h3 {
      font-style: italic;
      line-height: 30px;
      font-size: 24px;
    }
    :deep(h4) {
      margin-bottom: 10px;
    }
  }
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
  }
  .software-list {
    h2 {
      font-size: 36px;
      margin: 0 0 60px;
      text-align: center;
    }
    .item {
      padding: 0px 65px;
      text-align: center;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 0 auto;
      }
      h4 {
        font-size: 20px;
        margin: 20px 0;
      }
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
