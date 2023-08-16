<template>
  <div class="list-info-nav">
    <el-menu
      class="news-menu"
      background-color="#1c1b1b"
      text-color="#fff"
      active-text-color="#f5af05"
      :default-active="active"
      router
      @select="handleSelect"
    >
      <el-menu-item v-for="menu in menuList" :index="menu.path">
        <span>{{ menu.title }}</span>
        <i class="fa fa-arrow-right"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { MenuType } from '@/types';
const { active, menuList } = defineProps<{
  active: string;
  menuList: MenuType[];
}>();
const emit = defineEmits(['select']);
const handleSelect = (path: string) => {
  emit('select', path);
};
</script>

<style scoped lang="less">
.list-info-nav {
  padding: 0 13px;
  .el-menu-item {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    border-bottom: 2px solid #323232;
    &:last-child {
      border-bottom: none;
    }
    &.is-active {
      background-color: #323232;
    }
    .fa {
      color: #f5af05;
    }
  }
}
</style>
