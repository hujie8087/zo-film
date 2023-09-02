<template>
  <CommonBanner
    :img="productData?.classify_img"
    breadTo="/products"
    :breadText="productData?.classify_name"
    :title="productData?.sub_name"
  />
  <div class="products">
    <div class="container">
      <el-row type="flex" :gutter="50">
        <el-col
          :span="12"
          v-for="product in productData?.children"
          :key="product._id"
        >
          <nuxt-link :to="product.classify_url">
            <div class="item">
              <div class="images">
                <img :src="product.page_img" alt="" srcset="" />
              </div>
              <h4>
                {{ product.classify_name }} <i class="fa fa-arrow-right"></i>
              </h4>
            </div>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: productData } = useFetch('/api/products/products');
</script>

<style scoped lang="less">
.products {
  padding: 80px 0;
  .item {
    margin-bottom: 30px;
    overflow: hidden;
    .images {
      width: 100%;
      height: auto;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        transition: 0.3s all ease-in-out;
      }
    }
    h4 {
      font-size: 20px;
      font-weight: 600;
      margin: 30px 0;
      color: #333;
      i {
        margin-left: 10px;
        font-size: 12px;
        color: #f5af05;
      }
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
      h4 {
        color: #f5af05;
      }
    }
  }
}
</style>
