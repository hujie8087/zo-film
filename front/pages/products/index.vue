<template>
  <CommonBanner
    :img="productData?.banner"
    breadTo="/products"
    :breadText="productData?.title"
    :title="productData?.subtitle"
  />
  <div class="products">
    <div class="container">
      <el-row type="flex" :gutter="50">
        <el-col
          :span="12"
          v-for="product in productData?.list"
          :key="product._id"
        >
          <nuxt-link :to="product.url">
            <div class="item">
              <div class="images">
                <img :src="product.imageUrl" alt="" srcset="" />
              </div>
              <h4>{{ product.title }} <i class="fa fa-arrow-right"></i></h4>
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
