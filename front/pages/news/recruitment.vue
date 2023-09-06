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
            <NewsMenu active="/news/recruitment" :menuList="MenuList!" />
          </keep-alive>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="news-list">
            <h2>{{ newsData?.classify_name }}</h2>
            <div class="news-list-content">
              <div v-html="newsData?.classify_intro"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: MenuList } = useFetch('/api/news/newsMenu');
const { data: newsData } = await useFetch(`/api/news/news?classify_id=15`);
useHead({
  title: newsData.value?.classify_name,
});
</script>

<style scoped lang="less">
.list-content {
  padding: 50px;
}
</style>
