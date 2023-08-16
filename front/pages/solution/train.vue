<template>
  <CommonBanner
    :img="trainData?.banner"
    :title="trainData?.title"
    breadTo="/solution/train"
    :breadText="trainData?.title"
  />
  <div class="train">
    <div class="container">
      <el-row class="shop-list">
        <el-col :span="14">
          <div class="train-left">
            <h2>{{ trainData?.list[0].title }}</h2>
            <div
              class="train-content"
              v-html="trainData?.list[0].content"
            ></div>
            <nuxt-link to="/" class="more-btn"
              >了解更多信息 <i class="fa fa-arrow-down"></i
            ></nuxt-link>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="train-right" v-html="trainData?.list[0].desc"></div>
        </el-col>
      </el-row>
      <div class="shop-list course">
        <h1>{{ trainData?.list[1].title }}</h1>
        <div class="course-content" v-html="trainData?.list[1].content"></div>
      </div>
      <div class="shop-list">
        <el-row type="flex">
          <el-col :span="14">
            <div
              class="train-content"
              v-html="trainData?.list[2].content"
            ></div>
            <nuxt-link to="/" class="more-btn"
              >了解更多信息 <i class="fa fa-arrow-down"></i
            ></nuxt-link>
          </el-col>
          <el-col :span="10">
            <div class="train-install">
              <h1>{{ trainData?.list[2].title }}</h1>
              <img :src="trainData?.list[2].imageUrl" alt="" srcset="" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="shop-list course">
        <h1>{{ trainData?.list[3].title }}</h1>
        <el-row :gutter="30">
          <el-col :span="8" v-for="(item, index) in trainData?.list[3].images">
            <img :src="item" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: trainData } = useFetch('/api/train');
</script>

<style scoped lang="less">
.train {
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
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
