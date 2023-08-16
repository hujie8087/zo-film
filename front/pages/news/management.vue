<template>
  <CommonBanner :img="newsData?.banner" breadTo="/news" breadText="管理信息">
  </CommonBanner>
  <CateName title="管理信息" category="公司新闻" />
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
            <p>
              在Z&O，我们非常清晰的认识到，要提供优质的服务必须要有强大的团队。虽然我们在保护膜行业里从一家小小的公司发展到具有全球影响力的公司，我们的初心时刻不变，与我们服务的客户需求时刻保持一致。我们的一些团队成员如下。
            </p>
            <div class="news-list-content">
              <div class="manage-list">
                <div class="item" v-for="item in management" :key="item._id">
                  <el-divider />
                  <h2>{{ item.title }}</h2>
                  <el-row type="flex">
                    <el-col
                      :span="8"
                      :xs="12"
                      v-for="person in item.list"
                      :key="person._id"
                    >
                      <div class="title">
                        {{ person.title }}
                      </div>
                      <div class="post">
                        {{ person.post }}
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
const { data: newsData } = useFetch('/api/news/news', {
  params: {
    type: 'news',
  },
});
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
