<template>
  <CommonBanner :img="newsData?.banner" breadTo="/news" breadText="新闻中心">
  </CommonBanner>
  <CateName title="新闻中心" category="公司新闻" />
  <div class="list-content">
    <div class="container">
      <el-row type="flex">
        <el-col :span="6">
          <keep-alive>
            <NewsMenu active="/news/news" :menuList="MenuList!" />
          </keep-alive>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="news-content">
            <div class="goBack">
              <nuxt-link to="/news/news"
                ><i class="fa fa-arrow-left"></i> 返回所有公司新闻</nuxt-link
              >
            </div>
            <h2>{{ newsDetail?.title }}</h2>
            <div class="time">发布于{{ newsDetail?.time }}</div>
            <el-divider />
            <div class="content" v-html="newsDetail?.content"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: MenuList } = useFetch('/api/news/newsMenu');
const { data: newsData } = useFetch('/api/news/news', {
  params: {
    type: 'news',
  },
});
const route = useRoute();
console.log(route.params.id);
const { data: newsDetail } = useFetch('/api/news/newsDetail', {
  params: {
    id: route.params.id,
  },
});
</script>

<style scoped lang="less">
.list-content {
  padding: 50px;
  .news-content {
    .goBack {
      margin-bottom: 20px;
      a {
        color: #b6b6b6;
        &:hover {
          color: #f5af05;
        }
      }
    }
    h2 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #323232;
      line-height: 1.3;
    }
    .time {
      font-size: 16px;
      color: #f5af05;
      font-weight: 600;
    }
    p {
      color: #333333;
    }
    :deep(img) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
