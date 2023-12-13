<template>
  <div class="menu">
    <el-menu class="el-menu" mode="horizontal">
      <template v-for="item in menu" :key="item.classify_id">
        <el-menu-item
          v-if="item.children && item.children.length === 0"
          :index="item.classify_url"
        >
          <nuxt-link :to="item.classify_url">{{
            item.classify_name
          }}</nuxt-link>
        </el-menu-item>
        <el-sub-menu
          v-if="item.children && item.children.length > 0"
          :index="item.classify_url"
        >
          <template #title>
            <nuxt-link :to="item.classify_url">{{
              item.classify_name
            }}</nuxt-link></template
          >
          <template v-if="item.classify_id === '7'">
            <div class="product">
              <div class="coverage">
                <nuxt-link :to="productOther?.other.classify_url">
                  <img
                    v-lazy="productOther?.other.classify_img"
                    alt=""
                    srcset=""
                  />
                  <div class="sub-title">
                    {{ productOther?.other.sub_name }}
                  </div>
                  <div class="title">
                    {{ productOther?.other.classify_name
                    }}<i class="fa fa-arrow-right"></i>
                  </div>
                </nuxt-link>
              </div>
              <el-row>
                <el-col
                  class="item"
                  :span="8"
                  v-for="child in item.children"
                  :key="child.classify_id"
                >
                  <nuxt-link :to="child.classify_url" class="level2">{{
                    child.classify_name
                  }}</nuxt-link>
                  <ul v-if="child.children && child.children.length > 0">
                    <template v-if="child.classify_id === '67'">
                      <li
                        v-for="son in productOther?.coverList"
                        :key="son.goods_id"
                      >
                        <nuxt-link
                          :to="'/products/cover/' + son.goods_classify_id"
                          class="level3"
                        >
                          {{ son.goods_name }}
                        </nuxt-link>
                      </li>
                    </template>
                    <template v-else-if="child.classify_id === '101'">
                      <li
                        v-for="son in productOther?.carList"
                        :key="son.classify_id"
                      >
                        <nuxt-link
                          :to="'/products/car#more' + son.classify_id"
                          class="level3"
                        >
                          {{ son.classify_name }}
                        </nuxt-link>
                      </li>
                    </template>
                    <template v-else>
                      <li v-for="son in child?.children" :key="son.classify_id">
                        <nuxt-link
                          :to="'/products/construction/' + son.classify_id"
                          class="level3"
                        >
                          {{ son.classify_name }}
                        </nuxt-link>
                      </li>
                    </template>
                  </ul>
                </el-col></el-row
              >
            </div>
          </template>
          <template v-else-if="item.classify_id === '9'">
            <div class="product solution">
              <el-row>
                <el-col
                  class="item"
                  :span="8"
                  v-for="solution in productOther?.solutionList"
                  :key="solution.classify_id"
                >
                  <nuxt-link :to="solution.classify_url" class="level2">{{
                    solution.classify_name
                  }}</nuxt-link>
                  <ul>
                    <li v-for="son in solution.children" :key="son.classify_id">
                      <nuxt-link :to="son.classify_url" class="level3">
                        {{ son.classify_name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </div>
          </template>
          <template v-else>
            <el-menu-item
              v-for="child in item.children"
              :key="child.classify_id"
            >
              <nuxt-link :to="child.classify_url">{{
                child.classify_name
              }}</nuxt-link>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>

      <nuxt-link
        class="outline"
        v-for="link in links"
        :key="link.classify_id"
        :to="link.classify_url"
        ><img
          v-if="link.classify_id === '128'"
          src="~/assets/images/tm1.png"
          alt=""
          srcset=""
        />
        <img
          v-else-if="link.classify_id === '129'"
          src="~/assets/images/jd1.png"
          alt=""
          srcset=""
        />
      </nuxt-link>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ClassifyTreeType, ClassifyType } from 'types';

const { data: menu } = await useFetch('/api/menu');
const menuList = useMenuList();
menuList.value = menu.value as ClassifyTreeType<ClassifyType>[];
const { data: links } = await useFetch('/api/links');
const link = useLinks();
link.value = links.value!;
const { data: productOther } = await useFetch('/api/header');
</script>
<style>
.el-menu.el-menu--popup {
  min-width: 320px !important;
}
</style>
<style scoped lang="less">
.menu {
  height: 98px;
  line-height: 98px;
  a {
    color: #fff !important;
    &:hover {
      color: #fff;
    }
  }
  .el-menu {
    background-color: transparent;
    border: none;
    line-height: 98px;
    height: 98px;
    justify-content: center;
    align-items: center;
    .el-menu-item,
    .el-sub-menu :deep(.el-sub-menu__title) {
      font-size: 18px;
      font-weight: bold;
      margin: 0 20px;
      padding: 0 5px;
      height: 58px;
      line-height: 58px;
      border: 0;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #f5af05;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.2s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s;
      }
    }
    .el-menu-item:hover,
    :deep(.el-sub-menu__title:hover) {
      background-color: transparent;
      &::after {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
    :deep(.el-popper) {
      padding: 20px;
    }
    :deep(.el-icon) {
      display: none;
    }
    .outline {
      margin-left: 20px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>

<style lang="less">
.product {
  width: 1306px;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  background-color: #fff;
  border-radius: 0;
  display: flex;
  .el-row {
    .item {
      padding: 25px 30px;
      border-left: 1px solid #ebebeb;
      .level2 {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        color: #323232;
        padding-bottom: 5px;
        margin-bottom: 10px;
        display: block;
      }
      .level3 {
        display: block;
        padding: 5px 0;
        color: #323232;
        font-weight: 400;
        font-size: 16px;
      }
    }
    flex: 1;
  }
  .coverage {
    background-color: #f5f5f5;
    width: 350px;
    padding: 25px 30px;
    img {
      width: 100%;
      height: auto;
    }
    .sub-title {
      font-size: 16px;
      font-weight: 400;
      color: #1c1b1b;
      margin-bottom: 10px;
    }
    .title {
      color: #1c1b1b;
      font-size: 22px;
      font-weight: bold;
      line-height: 40px;
      i {
        font-size: 1rem;
        color: #f5af05;
        position: relative;
        margin-left: 10px;
        position: relative;
        bottom: 1px;
      }
    }
  }
}
.solution {
  margin-left: -250px;
  min-height: 150px;
  .el-row .item {
    margin: 5px 0;
  }
}
</style>
