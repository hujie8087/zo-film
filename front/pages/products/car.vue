<template>
  <CommonBanner
    :img="carData?.banner"
    breadTo="/products"
    :breadText="carData?.title"
  />
  <div class="car">
    <div class="container">
      <el-row type="flex" class="car-detail" :gutter="50">
        <el-col :span="14">
          <h2>{{ carData?.subtitle }}</h2>
          <div class="car-content" v-html="carData?.content"></div>
        </el-col>
        <el-col :span="10">
          <div class="car-video">
            <video :src="carData?.file" controls muted></video>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div class="car-index">
        <h2>{{ carData?.index.title }}</h2>
        <nuxt-link class="more" to="#"
          >了解更多信息 <i class="fa fa-arrow-down"></i
        ></nuxt-link>
        <el-row type="flex" :gutter="30">
          <el-col
            :span="12"
            v-for="item in carData?.index.list"
            :key="item._id"
            class="item"
          >
            <img :src="item.productUrl" alt="" srcset="" />
            <h3>{{ item.title }}</h3>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="car-other">
      <div class="container">
        <h2>{{ carData?.other.title }}</h2>
        <el-row type="flex" :gutter="50">
          <el-col :span="8" v-for="item in carData?.other.list" :key="item._id">
            <img :src="item.imageUrl" alt="" srcset="" />
            <h3>{{ item.title }}</h3>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="car-list" v-for="item in carData?.index.list">
      <div class="container">
        <div class="car-item">
          <img :src="item.imageUrl" alt="" srcset="" />
          <div class="car-content">
            <h2>{{ item.title }}</h2>

            <nuxt-link to="/store" class="more">
              <i class="fa fa-map-marker"></i> 挑选专业门店
            </nuxt-link>
            <el-row type="flex" :gutter="50">
              <el-col :span="12" v-for="img in item.imageList.split(',')">
                <img :src="img" alt="" srcset="" />
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: carData } = useFetch('/api/products/car');
</script>

<style lang="less" scoped>
.car {
  .car-detail {
    padding-top: 60px;
    h2 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .car-content {
      font-size: 16px;
      line-height: 1.8;
      color: #666;
    }
    .car-video {
      video {
        width: 100%;
      }
    }
  }
  .el-divider {
    margin: 50px 0;
  }
  .car-index {
    .item {
      margin-bottom: 50px;
    }
    h2 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }
    img {
      width: 100%;
      height: auto;
    }
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-top: 20px;
      color: #323232;
    }
  }
  .car-other {
    background-color: #1c1b1b;
    padding: 60px 0;
    h2 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 40px;
      text-align: center;
      color: #fff;
    }
    img {
      width: 100%;
      height: auto;
    }
    h3 {
      font-size: 24px;
      font-weight: bold;
      margin-top: 20px;
      color: #fff;
    }
  }
  .car-list {
    margin: 25px 0;
    background-color: #f1f1f1;
    .car-item {
      margin: 50px 0;
      background-color: #fff;
      img {
        width: 100%;
        height: auto;
      }
      .car-content {
        padding: 15px;
        h2 {
          font-size: 22px;
          font-weight: bold;
          color: #323232;
        }
      }
    }
  }
  .more {
    display: block;
    text-align: center;
    margin: 30px 0;
    width: 180px;
    color: #323232;
    font-size: 16px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    background-color: #f5af05;
    letter-spacing: 0.03em;
    border-radius: 5px;
    i {
      margin-left: 10px;
    }
  }
}
</style>
