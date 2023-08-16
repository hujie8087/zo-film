<template>
  <CommonBanner
    :img="coverData?.banner"
    breadTo="/products"
    :breadText="coverData?.title"
    :title="coverData?.title"
  />
  <div class="cover">
    <div class="container">
      <div class="cover-video">
        <video :src="coverData?.file" controls muted autoplay loop></video>
      </div>
      <div class="cover-list">
        <h3>探索我们的漆面保护膜</h3>
        <div
          class="cover-item"
          v-for="cover in coverData?.list"
          :key="cover._id"
        >
          <el-row type="flex" :gutter="50">
            <el-col :span="10">
              <div class="cover-image">
                <nuxt-link :to="`/products/cover/${cover._id}`">
                  <img :src="cover.imageUrl" alt="" srcset="" />
                </nuxt-link>
              </div>
            </el-col>
            <el-col :span="14">
              <nuxt-link :to="`/products/cover/${cover._id}`">
                <h2>{{ cover.title }}</h2></nuxt-link
              >
              <h4>{{ cover.subtitle }}</h4>
              <div class="cover-content">
                {{ cover.description }}
              </div>
              <div class="cover-link">
                <nuxt-link to="/store" class="store-btn btn">
                  <i class="fa fa-map-marker"></i> 挑选专业门店
                </nuxt-link>
                <nuxt-link
                  :to="`/products/cover/${cover._id}`"
                  class="more-btn btn"
                >
                  了解更多信息
                </nuxt-link>
              </div>
            </el-col>
          </el-row>
          <el-divider />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: coverData } = useFetch('/api/products/cover');
</script>

<style scoped lang="less">
.cover {
  padding: 80px 0;
  .cover-video {
    margin-bottom: 60px;
    padding: 0 100px;
    video {
      width: 100%;
      height: auto;
    }
  }
  .cover-list {
    padding: 50px 0;
    h3 {
      text-align: center;
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 40px;
    }
    .cover-item {
      .cover-image {
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
          transition: 0.3s all ease-in-out;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
      h2 {
        font-size: 30px;
        font-weight: 600;
        color: #f5af05;
        margin-bottom: 20px;
        &:hover {
          color: #1c1b1b;
        }
      }
      h4 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
      }
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
      .el-divider {
        margin: 50px 0;
      }
    }
  }
}
</style>
