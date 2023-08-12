<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <nuxt-link to="/">
          <img src="~/assets/logo.png" alt="logo" />
        </nuxt-link>
      </div>
      <div class="header__menu">
        <TheMenu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header {
  background-color: #1c1b1b;
  height: 98px;
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
