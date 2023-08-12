<template>
  <div class="menu">
    <el-menu class="el-menu" mode="horizontal">
      <template v-for="item in menu" :key="item.path">
        <el-menu-item
          :index="item.path"
          v-if="item.children && item.children.length === 0"
        >
          <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
        </el-menu-item>
        <el-sub-menu
          v-if="item.children && item.children.length > 0"
          :index="item.path"
        >
          <template #title>
            <nuxt-link :to="item.path">{{ item.title }}</nuxt-link></template
          >
          <el-menu-item v-for="child in item.children"
            ><nuxt-link :to="child.path">{{
              child.title
            }}</nuxt-link></el-menu-item
          >
        </el-sub-menu>
      </template>
      <nuxt-link to="/admin" class="outline"
        ><img src="~/assets/images/tm1.png" alt="" srcset=""
      /></nuxt-link>
      <nuxt-link to="/admin" class="outline"
        ><img src="~/assets/images/jd1.png" alt="" srcset=""
      /></nuxt-link>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { MenuListType } from 'types';
const { data: menu } = await useFetch('/api/menu');
const menuList = useMenuList();
menuList.value = menu.value as MenuListType[];
</script>

<style scoped lang="less">
.menu {
  height: 98px;
  line-height: 98px;
  a {
    color: #fff;
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
