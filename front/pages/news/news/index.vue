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
            <NewsMenu active="/news/news" :menuList="MenuList!" />
          </keep-alive>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="news-list">
            <h2>{{ newsData?.classify_name }}</h2>
            <div class="news-list-content">
              <div
                class="news-item"
                v-for="item in newsData?.children"
                :key="item._id"
              >
                <div class="news-item-time">
                  <span>{{ formateDate(item.date + '000') }}</span>
                </div>
                <h3>{{ item.news_title }}</h3>
                <nuxt-link :to="`/news/news/${item.news_id}`"
                  >查看文章</nuxt-link
                >
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formateDate } from '@/utils';
const { data: MenuList } = useFetch('/api/news/newsMenu');
const { data: newsData } = await useFetch(`/api/news/news?classify_id=16`);
</script>

<style scoped lang="less">
.list-content {
  padding: 50px;
  .news-list {
    margin-bottom: 50px;
    h2 {
      font-size: 30px;
      font-weight: bold;
      margin: 0 0 20px;
      color: #323232;
    }
    .news-list-content {
      .news-item {
        padding: 25px 0 35px;
        border-top: 2px solid #ebebeb;
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-top: none;
        }
        .news-item-time {
          margin-bottom: 10px;
          span {
            font-size: 16px;
            color: #323232;
          }
        }
        h3 {
          font-size: 20px;
          font-weight: bold;
          margin: 0 0 10px;
          color: #323232;
        }
        a {
          font-size: 16px;
          color: #f5af05;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
