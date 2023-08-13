<template>
  <CommonBanner :img="newsData?.banner" breadTo="/news" breadText="新闻中心">
  </CommonBanner>
  <div class="cate-name">
    <div class="container">
      <h1>
        <span class="category">公司新闻</span>
        <span class="title">新闻中心</span>
      </h1>
    </div>
  </div>
  <div class="list-content">
    <div class="container">
      <el-row type="flex">
        <el-col :span="6">
          <div class="list-info-nav">
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#1c1b1b"
              text-color="#fff"
              router
            >
              <el-menu-item v-for="menu in newsMenu" :index="menu.path">
                <span>{{ menu.title }}</span>
                <i class="fa fa-arrow-right"></i>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="18"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: newsMenu } = useFetch('/api/news/newsMenu');
const { data: newsData } = useFetch('/api/news/news');
console.log(newsData.value);
</script>

<style scoped lang="less">
.cate-name {
  background-color: #1c1b1b;
  padding: 10px 0;
  h1 {
    font-weight: bold;
    margin: 0;
    .category {
      font-size: 36px;
      margin-right: 30px;
      color: #f5af05;
    }
    .title {
      font-size: 20px;
      color: #ffffff;
    }
  }
}
.list-content {
  padding: 50px;
  .list-info-nav {
    padding: 0 13px;
    .el-menu-item {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      .fa {
        color: #f5af05;
      }
    }
  }
}
</style>
