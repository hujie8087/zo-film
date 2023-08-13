<template>
  <div class="footer">
    <div class="footer-super">
      <div class="container">
        <el-row type="flex">
          <el-col :span="12">
            <nuxt-link
              to="https://daokeshi.tthweixin.com/app/index.php?i=4&c=entry&eid=297&op=query&wxref=mp.weixin.qq.com"
            >
              <span class="icon-span">
                <i class="fa fa-map-marker"></i>
              </span>
              <span class="title">电子质保查询</span>
              <i class="fa fa-arrow-right"></i>
            </nuxt-link>
          </el-col>
          <el-col :span="12">
            <nuxt-link to="/store">
              <span class="icon-span">
                <i class="fa fa-search"></i>
              </span>
              <span class="title">挑选专业门店</span>
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
              v-for="(item, index) in menuList"
              :key="item.path"
            >
              <div class="title">
                <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
              </div>
              <div class="content">
                <nuxt-link
                  v-for="(child, index) in item.children"
                  :key="child.path"
                  :to="child.path"
                  >{{ child.title }}</nuxt-link
                >
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="footer-main-social">
          <ul style="display: flex; float: right; padding-right: 50px">
            <li>
              <a
                href="https://weibo.com/"
                target="_blank"
                rel="external nofollow"
                ><i class="fa fa-weibo" style="font-size: 40px"></i
                ><span>微博</span></a
              >
            </li>
            <li>
              <a
                href="https://www.youku.com/"
                target="_blank"
                rel="external nofollow"
                ><img
                  src="~/assets/images/youku.png"
                  alt=""
                  style="height: 40px"
              /></a>
            </li>
            <li>
              <a
                href="https://detail.tmall.com/item.htm?spm=a230r.1.14.31.5a667aa6cTxBu6&amp;id=625536775855&amp;ns=1&amp;abbucket=6"
                target="_blank"
                rel="external nofollow"
                ><img src="~/assets/images/tm.png" alt="" style="height: 40px"
              /></a>
            </li>
            <li>
              <a
                href="https://mall.jd.com/index-10337440.html"
                target="_blank"
                rel="external nofollow"
                ><img src="~/assets/images/jd.png" alt="" style="height: 40px"
              /></a>
            </li>
            <li>
              <i id="weixin" class="fa fa-weixin" style="font-size: 40px"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <div class="container">
        <div class="footer-legal-copyright">
          <p>
            <nuxt-link to="https://beian.miit.gov.cn" target="_blank"
              >粤ICP备10069293号</nuxt-link
            >
          </p>
          <p>
            技术支持:
            <nuxt-link to="/">Z&O</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: menuList } = await useFetch('/api/footMenu');
// console.log(menuList.value);
</script>

<style scoped lang="less">
.footer {
  background-color: #323232;
  background: url('~/assets/images/footer-bg.jpg') no-repeat center top;
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
      }
    }
    .footer-main-social ul {
      text-align: center;
      li {
        display: inline-block;
        margin-right: 20px;
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
