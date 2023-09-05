<template>
  <CommonBanner
    :img="`../${coverData?.classify_img}`"
    breadTo="/products"
    :breadText="coverData?.classify_name"
    :title="coverData?.classify_name"
  />
  <div class="cover">
    <div class="container">
      <div class="cover-video">
        <h2>漆面保护膜</h2>
        <el-row :gutter="50">
          <el-col
            :span="8"
            :xs="24"
            v-for="(mounting, index) in coverData?.children"
            :key="mounting._id"
          >
            <div class="item">
              <img
                :src="'../' + mounting.goods_img"
                :alt="mounting.goods_name"
                srcset=""
              />
              <h3>{{ mounting.goods_name }}</h3>
              <div>{{ mounting.erji_title }}</div>
            </div>
          </el-col>
        </el-row>
        <nuxt-link to="/store" class="more-btn">挑选专业门店</nuxt-link>
      </div>
      <div class="cover-list">
        <h3>{{ coverData?.sub_name }}</h3>
        <div
          class="cover-item"
          v-for="cover in coverData?.detailList"
          :key="cover._id"
        >
          <el-row type="flex" :gutter="50">
            <el-col :span="10">
              <div class="cover-image">
                <nuxt-link :to="`/products/cover/${cover.goods_id}`">
                  <img :src="`../${cover?.goods_img}`" alt="" srcset="" />
                </nuxt-link>
              </div>
            </el-col>
            <el-col :span="14">
              <nuxt-link :to="`/products/cover/${cover.goods_id}`">
                <h2>{{ cover.goods_name }}</h2></nuxt-link
              >
              <h4>{{ cover.erji_title }}</h4>
              <div class="cover-content">
                {{ cover.goods_intro }}
              </div>
              <div class="cover-link">
                <nuxt-link to="/store" class="store-btn btn">
                  <i class="fa fa-map-marker"></i> 挑选专业门店
                </nuxt-link>
                <nuxt-link
                  :to="`/products/cover/${cover.goods_id}`"
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
const { data: coverData } = useFetch('/api/products/cover', {
  query: {
    id: '88',
  },
});
</script>

<style scoped lang="less">
.cover {
  padding: 80px 0;
  h2 {
    font-weight: 600;
    font-size: 30px;
    margin-top: 30px;
  }
  .cover-video {
    margin-bottom: 60px;
    text-align: center;
    h3 {
      font-weight: 600;
      font-size: 30px;
      margin-top: 30px;
    }
    .item {
      margin-top: 20px;
      img {
        width: 100%;
        height: auto;
      }
      h4 {
        font-size: 16px;
        font-weight: 600;
        margin-top: 10px;
      }
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
