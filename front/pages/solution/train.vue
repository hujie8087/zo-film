<template>
  <CommonBanner
    :img="`../${trainData?.classify_img}`"
    :title="trainData?.classify_name"
    breadTo="/solution/train"
    :breadText="trainData?.classify_name"
  />
  <div class="train">
    <div class="container">
      <el-row class="shop-list">
        <el-col :span="14">
          <div class="train-left">
            <h2>{{ trainData?.children[2].classify_name }}</h2>
            <div
              class="train-content"
              v-html="trainData?.children[2].classify_intro2"
            ></div>
            <nuxt-link to="/" class="more-btn"
              >了解更多信息 <i class="fa fa-arrow-down"></i
            ></nuxt-link>
          </div>
        </el-col>
        <el-col :span="10">
          <div
            class="train-right"
            v-html="trainData?.children[2].classify_intro"
          ></div>
        </el-col>
      </el-row>
      <div class="shop-list course">
        <h1>{{ trainData?.children[3].classify_name }}</h1>
        <div
          class="course-content"
          v-html="trainData?.children[3].classify_intro"
        ></div>
      </div>
      <div class="shop-list">
        <el-row type="flex">
          <el-col :span="14">
            <div
              class="train-content"
              v-html="trainData?.children[1].classify_intro"
            ></div>
            <nuxt-link to="/" class="more-btn"
              >了解更多信息 <i class="fa fa-arrow-down"></i
            ></nuxt-link>
          </el-col>
          <el-col :span="10">
            <div class="train-install">
              <h1>{{ trainData?.children[1].classify_name }}</h1>
              <img
                :src="`../${trainData?.children[1].classify_img}`"
                alt=""
                srcset=""
              />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="shop-list course">
        <h1>{{ trainData?.children[0].classify_name }}</h1>
        <el-row :gutter="30">
          <el-col
            :span="8"
            v-for="(item, index) in trainData?.children[0].children"
          >
            <img :src="`../${item.upload_img}`" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: trainData } = useFetch('/api/train');
useHead({
  title: trainData.value?.classify_name,
});
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
      padding-right: 15px;
      h1 {
        margin: 0 0 40px;
      }
    }
    .train-content {
      font-size: 16px;
      margin-bottom: 20px;
      p {
        margin: 0;
      }
    }
    .train-right {
      background-color: #f5af05;
      padding: 30px;
      font-size: 16px;
      font-style: italic;
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
