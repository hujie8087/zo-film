<template>
  <div class="construction">
    <div class="container">
      <BreadCrumbsItem
        :to="constructionData?.classify_name"
        :text="constructionData?.classify_name"
      />
      <h2>
        {{ constructionData?.classify_name }}
      </h2>
      <div class="construction-list">
        <div
          class="construction-item"
          v-for="item in constructionData?.children"
          :key="item.classify_id"
        >
          <el-row type="flex" :gutter="50">
            <el-col :span="10">
              <nuxt-link :to="`/products/construction/${item.classify_id}`">
                <img
                  v-lazy="'../' + item.classify_img"
                  :alt="item.classify_name"
                  srcset=""
                />
              </nuxt-link>
            </el-col>
            <el-col :span="14">
              <div class="construction-info">
                <nuxt-link :to="`/products/construction/${item.classify_id}`"
                  ><h1>{{ item.classify_name }}</h1>
                </nuxt-link>
                <div
                  class="construction-content"
                  v-html="item.classify_intro"
                ></div>
                <div class="construction-link">
                  <nuxt-link to="/store" class="store-btn btn">
                    <i class="fa fa-map-marker"></i> 挑选专业门店
                  </nuxt-link>
                  <nuxt-link
                    :to="`/products/construction/${item.classify_id}`"
                    class="more-btn btn"
                  >
                    了解更多信息
                  </nuxt-link>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-divider />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: constructionData } = useFetch('/api/products/construction');
useHead({
  title: constructionData.value?.classify_name,
});
</script>

<style lang="less" scoped>
.construction {
  h2 {
    padding: 50px 0 30px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
  .construction-list {
    .construction-item {
      img {
        width: 100%;
        height: auto;
      }
      .construction-info {
        h1 {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #f5af05;
        }
        .construction-content {
          margin-bottom: 20px;
        }
        .construction-link {
          .btn {
            padding: 20px 24px;
            display: inline-block;
            line-height: 1;
            letter-spacing: 0.03em;
            font-size: 16px;
            text-align: center;
            margin: 20px auto;
            text-transform: uppercase;
            margin-right: 20px;
          }
          .store-btn {
            color: #1c1b1b;
            font-weight: 600;
            background: #f5af05;
            border-radius: 4px;
            i {
              font-size: 22px;
            }
          }
          .more-btn {
            color: #fff;
            background: #1c1b1b;
            border-radius: 4px;
          }
        }
      }
      .el-divider {
        margin: 50px 0;
      }
    }
  }
}
</style>
