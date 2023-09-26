<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <nuxt-link to="/">
          <el-image :src="siteInfo.logo_img" alt="logo" lazy />
        </nuxt-link>
      </div>
      <div class="header__menu">
        <TheMenu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const siteInfo = useWebSite();
</script>

<style scoped lang="less">
.header {
  background-color: #1c1b1b;
  height: 98px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header__logo {
  width: 166px;
  height: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
}
.header__menu {
  width: calc(100% - 166px);
  float: right;
}
</style>
