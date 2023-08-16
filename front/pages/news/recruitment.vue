<template>
  <CommonBanner :img="newsData?.banner" breadTo="/news" breadText="招聘信息">
  </CommonBanner>
  <CateName title="招聘信息" category="公司新闻" />
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
            <h2>招聘信息</h2>
            <div class="news-list-content">
              <div v-html="recruitmentData?.content"></div>
            </div>
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
const { data: recruitmentData } = useFetch('/api/news/recruitment');
</script>

<style scoped lang="less">
.list-content {
  padding: 50px;
}
</style>
