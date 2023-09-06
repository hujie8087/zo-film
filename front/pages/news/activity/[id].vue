<template>
  <CommonBanner
    :img="`https://www.zo-film.com/${newsData?.classify_img}`"
    breadTo="/news"
    :breadText="newsData?.classify_name"
  >
  </CommonBanner>
  <CateName :title="newsData?.classify_name" category="公司新闻" />
  <div class="list-content">
    <div class="container">
      <el-row type="flex">
        <el-col :span="6">
          <keep-alive>
            <NewsMenu active="/news/activity" :menuList="MenuList!" />
          </keep-alive>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="news-content">
            <div class="goBack">
              <nuxt-link to="/news/activity"
                ><i class="fa fa-arrow-left"></i> 返回所有公司活动</nuxt-link
              >
            </div>
            <h2>{{ newsDetail?.news_title }}</h2>
            <div class="time">
              发布于 {{ formateDate(newsDetail?.date + '000') }}
            </div>
            <el-divider />
            <div
              class="content"
              v-html="
                newsDetail?.news_content?.replaceAll(
                  '&quot;Uploads',
                  '&quot;https://www.zo-film.com/Uploads'
                )
              "
            ></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: MenuList } = useFetch('/api/news/newsMenu');
const { data: newsData } = await useFetch(`/api/news/news?classify_id=17`);
const route = useRoute();
const { data: newsDetail } = useFetch(
  `/api/news/newsDetail?id=${route.params.id}`
);
useHead({
  title: newsDetail.value?.news_title,
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
