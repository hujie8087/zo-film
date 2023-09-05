<template>
  <div class="detail">
    <div class="container">
      <BreadCrumbsItem
        to="/products/construction"
        :text="detailData?.classify_name"
      />
      <el-row type="flex" :gutter="30" class="detail-info">
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
                <template v-for="menu in menuList" :key="menu._id">
                  <el-menu-item :index="menu.path">
                    <span>{{ menu.title }}</span>
                    <i class="fa fa-arrow-right"> </i>
                  </el-menu-item>
                  <!-- <el-menu-item
                    v-else
                    @click="handleClickMenu(menu.classify_url)"
                  >
                    <span>{{ menu.classify_name }}</span>
                    <i class="fa fa-arrow-right"></i>
                  </el-menu-item> -->
                </template>
              </el-menu>
            </div>
          </keep-alive>
        </el-col>
        <el-col :span="12">
          <h2>{{ detailData?.classify_name }}</h2>
          <div class="detail-content" v-html="detailData?.classify_intro"></div>
          <h3>{{ detailData?.children[0].classify_name }}</h3>
          <div
            class="detail-content"
            v-html="detailData?.children[0].classify_intro"
          ></div>
        </el-col>
        <el-col :span="6">
          <nuxt-link to="/store" class="store-btn btn">
            <i class="fa fa-map-marker"></i> 挑选专业门店
          </nuxt-link>
          <h4 class="cover-buy">购买{{ detailData?.classify_name }}的方法</h4>
          <nuxt-link
            v-if="detailData?.children[1]"
            :to="detailData?.children[1].classify_url"
            class="cover-link"
          >
            {{ detailData?.children[1].classify_name }}
            <i class="fa fa-arrow-right"></i>
          </nuxt-link>
          <nuxt-link
            v-if="detailData?.children[2]"
            :to="detailData?.children[2].classify_url"
            class="cover-link"
          >
            {{ detailData?.children[2].classify_name }}
            <i class="fa fa-arrow-right"></i>
          </nuxt-link>
          <img :src="'../../' + detailData?.page_img" alt="" srcset="" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: constructionMenu } = useFetch('/api/products/construction');
const { data: detailData } = useFetch('/api/products/constructionDetail', {
  params: {
    id: route.params.id,
  },
});
const menuList = ref<{ _id: string; title: string; path: string }[]>([]);
const active = ref(`/products/construction/${route.params.id}`);
onMounted(() => {
  menuList.value = constructionMenu.value?.children.map((item) => {
    return {
      _id: item._id,
      title: item.classify_name,
      path: '/products/construction/' + item.classify_id,
    };
  })!;
});
</script>

<style lang="less" scoped>
.detail {
  .detail-info {
    padding: 60px 0;
    h2 {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #1c1b1b;
    }
    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #1c1b1b;
    }
    .detail-content {
      margin-bottom: 50px;
    }
    .store-btn {
      padding: 20px 24px;
      display: inline-block;
      line-height: 1;
      letter-spacing: 0.03em;
      font-size: 16px;
      text-align: center;
      margin: 20px auto;
      text-transform: uppercase;
      margin-right: 20px;
      color: #1c1b1b;
      font-weight: 600;
      background: #f5af05;
      border-radius: 4px;
      i {
        font-size: 22px;
      }
    }
    h4 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #1c1b1b;
    }
    .cover-link {
      display: block;
      font-size: 16px;
      color: #f5af05;
      margin-bottom: 10px;
      i {
        font-size: 16px;
        margin-left: 5px;
      }
      &:hover {
        color: #323232;
      }
    }
    img {
      width: 50%;
      margin-top: 50px;
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
