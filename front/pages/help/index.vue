<template>
  <CommonBanner
    :img="helpData?.classify_img"
    breadTo="/help"
    :breadText="helpData?.classify_name"
  />
  <CateName :title="helpData?.classify_name" category="帮助" />
  <div class="list-content">
    <div class="container">
      <el-row type="flex">
        <el-col :span="6">
          <keep-alive>
            <div class="list-info-nav">
              <el-menu
                class="news-menu"
                background-color="#1c1b1b"
                text-color="#fff"
                active-text-color="#f5af05"
                :default-active="active"
                router
              >
                <template v-for="menu in helpMenu" :key="menu._id">
                  <el-menu-item
                    :index="menu.classify_url"
                    v-if="menu.classify_url.indexOf('http') === -1"
                  >
                    <span>{{ menu.classify_name }}</span>
                    <i class="fa fa-arrow-right"></i>
                  </el-menu-item>
                  <el-menu-item
                    v-else
                    @click="handleClickMenu(menu.classify_url)"
                  >
                    <span>{{ menu.classify_name }}</span>
                    <i class="fa fa-arrow-right"></i>
                  </el-menu-item>
                </template>
              </el-menu>
            </div>
          </keep-alive>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="help-list">
            <h3>
              {{ helpData?.sub_name }}
            </h3>
            <el-collapse v-model="activeNames">
              <el-collapse-item
                v-for="item in helpData?.children"
                :key="item._id"
                :name="item._id"
              >
                <template #title>
                  <i
                    :class="
                      activeNames.includes(item._id)
                        ? 'fa fa-chevron-up'
                        : 'fa fa-chevron-down'
                    "
                  ></i
                  >{{ item.classify_name }}
                </template>
                <div class="content">
                  <div v-html="item.classify_intro"></div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const helpData = ref();
const active = ref('');
const route = useRoute();
const getData = async (classify_id: string) => {
  const { data } = await useFetch(`/api/help?classify_id=${classify_id}`);
  helpData.value = data.value;
};
const classifyId = ref(route.query.classify_id);
const { data: helpMenu } = useFetch('/api/helpMenu');
const activeNames = ref<string[]>([]);
getData(classifyId.value as string);
onMounted(() => {
  active.value = helpMenu.value?.find(
    (item) => item.classify_id === classifyId.value
  )?.classify_url!;
});
useHead({
  title: helpData.value?.classify_name,
});
const handleClickMenu = (url: string) => {
  return window.open(url);
};

watch(
  () => route.query.classify_id,
  (val) => {
    classifyId.value = val as string;
    getData(classifyId.value);
  }
);
</script>

<style scoped lang="less">
.list-content {
  padding: 50px;
  .help-list {
    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .el-collapse {
      border: 0;
      .el-collapse-item {
        margin-bottom: 10px;
        padding-top: 10px;
        border-top: 2px solid #ebebeb;
        :deep(.el-collapse-item__wrap) {
          border: 0;
        }
        :deep(.el-collapse-item__header) {
          border: 0;
          padding: 0 15px;
          font-size: 22px;
          font-weight: bold;
          .el-icon {
            display: none;
          }
          .fa {
            color: #f5af05;
            font-size: 16px;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
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
