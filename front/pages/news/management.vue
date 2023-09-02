<template>
  <CommonBanner
    :img="`https://www.zo-film.com/${management?.classify_img}`"
    breadTo="/news"
    :breadText="management?.classify_name"
  >
  </CommonBanner>
  <CateName :title="management?.classify_name" category="公司新闻" />
  <div class="list-content">
    <div class="container">
      <el-row type="flex">
        <el-col :span="6">
          <keep-alive>
            <NewsMenu active="/news/management" :menuList="MenuList!" />
          </keep-alive>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="news-list">
            <div v-html="management?.classify_intro"></div>
            <div class="news-list-content">
              <div class="manage-list">
                <div
                  class="item"
                  v-for="item in management?.children"
                  :key="item._id"
                >
                  <el-divider />
                  <h2>{{ item.classify_name }}</h2>
                  <el-row type="flex">
                    <el-col
                      :span="8"
                      :xs="12"
                      v-for="person in item.children"
                      :key="person._id"
                    >
                      <div class="title">
                        {{ person.name }}
                      </div>
                      <div class="post">
                        {{ person.position }}
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: MenuList } = useFetch('/api/news/newsMenu');
const { data: management } = useFetch('/api/news/management');
</script>

<style scoped lang="less">
.list-content {
  padding: 50px;
  .news-list {
    margin-bottom: 50px;
    > p {
      margin: 0 0 20px;
      color: #333333;
      font-size: 16px;
    }
    .manage-list {
      .item {
        margin-bottom: 50px;
        h2 {
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 40px;
          color: #323232;
          line-height: 1.3;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #323232;
          cursor: pointer;
        }
        .post {
          font-size: 16px;
          font-weight: bold;
          color: #f5af05;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
