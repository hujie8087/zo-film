<template>
  <div
    class="footer"
    :style="{
      backgroundImage: `url(https://www.zo-film.com/${footBg.classify_img})`,
    }"
  >
    <div class="footer-super">
      <div class="container">
        <el-row type="flex">
          <el-col :span="12" v-for="link in footLinks" :key="link.classify_id">
            <nuxt-link :to="link.classify_url">
              <span class="icon-span">
                <i
                  class="fa"
                  :class="
                    link.classify_id === '25' ? 'fa-map-marker' : 'fa-search'
                  "
                ></i>
              </span>
              <span class="title">{{ link.classify_name }}</span>
              <i class="fa fa-arrow-right"></i>
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer-main">
      <div class="container">
        <div class="footer-main-nav">
          <el-row type="flex">
            <el-col
              :span="5"
              v-for="(item, index) in footData?.menu"
              :key="item._id"
            >
              <div class="title">
                <nuxt-link :to="item.classify_url">{{
                  item.classify_name
                }}</nuxt-link>
              </div>
              <div class="content">
                <nuxt-link
                  v-for="(child, index) in item.children"
                  :key="child._id"
                  :to="child.classify_url"
                  >{{ child.classify_name }}</nuxt-link
                >
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="footer-main-social">
          <ul style="display: flex; float: right">
            <li v-for="link in footData?.links" :key="link._id">
              <a
                :href="link.classify_url || 'javascript:;'"
                :target="link.classify_url ? '_blank' : '_self'"
                :alt="link.classify_name"
                :title="link.classify_name"
                rel="external nofollow"
              >
                <template v-if="link.classify_id === '75'">
                  <i class="fa fa-weibo" style="font-size: 40px"></i>
                  <span>{{ link.classify_name }}</span>
                </template>
                <template v-if="link.classify_id === '76'">
                  <img
                    src="~/assets/images/youku.png"
                    alt=""
                    style="height: 40px"
                  />
                </template>
                <template v-if="link.classify_id === '77'">
                  <img
                    src="~/assets/images/tm.png"
                    alt=""
                    style="height: 40px"
                  />
                </template>
                <template v-if="link.classify_id === '78'">
                  <img
                    src="~/assets/images/jd.png"
                    alt=""
                    style="height: 40px"
                  />
                </template>
                <template v-if="link.classify_id === '79'">
                  <i
                    id="weixin"
                    class="fa fa-weixin"
                    style="font-size: 40px"
                    @click="showWeixin(link)"
                  ></i>
                </template>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <div class="container">
        <div class="footer-legal-copyright">
          <p>
            <nuxt-link
              :to="footData?.technology[0].classify_url"
              target="_blank"
              >{{ footData?.technology[0].classify_name }}</nuxt-link
            >
          </p>
          <p>
            技术支持:
            <nuxt-link to="/">{{
              footData?.technology[1].classify_name
            }}</nuxt-link>
          </p>
        </div>
      </div>
    </div>
    <client-only>
      <el-dialog
        :title="title"
        v-model="dialogVisible"
        width="300px"
        :close-on-click-modal="false"
      >
        <div style="text-align: center">
          <img v-lazy="weixinUrl" alt="" style="width: 200px; height: 200px" />
        </div> </el-dialog
    ></client-only>
  </div>
</template>

<script setup lang="ts">
import { ClassifyType } from '~/types';
const { data: footData } = await useFetch('/api/footMenu');
const { data: footLinks } = await useFetch('/api/footLinks');
const dialogVisible = ref(false);
const weixinUrl = ref('');
const title = ref();
const footBg = ref();
footBg.value = footData.value?.footBg;
const showWeixin = (link: ClassifyType) => {
  weixinUrl.value = link.classify_img;
  title.value = link.classify_name;
  dialogVisible.value = true;
};
const footLink = useFootLinks();
footLink.value = footLinks.value!;
</script>

<style scoped lang="less">
.footer {
  background-color: #323232;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  .footer-super {
    background-color: #f5af05;
    padding: 28px 0;
    text-align: center;
    font-size: 20px;
    .icon-span {
      display: inline-block;
      background-color: #323232;
      border-radius: 50%;
      height: 40px;
      line-height: 40px;
      margin-right: 10px;
      vertical-align: middle;
      width: 40px;
      text-align: center;
      font-size: 20px;
      i {
        color: #ffffff;
      }
    }
    .title {
      color: #323232;
    }
    .fa-arrow-right {
      color: #323232;
      display: inline-block;
      float: none;
      margin-left: 10px;
      text-align: left;
    }
  }
  .footer-main {
    padding: 30px 0;
    .footer-main-nav {
      .title {
        font-size: 14px;
        color: #ffffff;
        width: 150px;
        line-height: 44px;
        border-bottom: 2px solid #f5af05;
        margin-bottom: 15px;
      }
      .content {
        a {
          line-height: 32px;
        }
      }
      a {
        display: block;
        color: #ffffff;
        &:hover {
          color: #f5af05;
        }
      }
    }
    .footer-main-social ul {
      text-align: right;
      li {
        display: inline-block;
        margin-left: 20px;
        &:last-of-type {
          margin-right: 0;
        }
        a {
          display: block;
        }
      }
      i {
        font-size: 28px;
        font-size: 1.75rem;
        color: #949494;
        position: relative;
      }
      span {
        display: inline-block;
        text-indent: -9999px;
        overflow: hidden;
        height: 0;
        width: 0;
      }
    }
  }
  .footer-legal {
    border-top: 2px solid #323232;
    padding: 25px 0;
    overflow: hidden;
    color: #949494;
    .footer-legal-copyright {
      float: right;
      p {
        float: right;
        margin: 5px;
        a {
          color: #f5af05;
          text-decoration: none;
          cursor: pointer;
          cursor: hand;
        }
      }
    }
  }
}
</style>
