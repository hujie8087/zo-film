<template>
  <div
    class="store"
    :style="{
      backgroundImage: `url(${storeData?.background})`,
    }"
  >
    <div class="container">
      <BreadCrumbsItem :to="'/store'" text="挑选专业安装门店" />
      <h1>查找授权的Z&O安装门店</h1>
      <div class="search">
        <el-form
          :inline="true"
          :model="searchStore"
          class="store-form"
          label-position="top"
        >
          <el-form-item label="国家">
            <el-select v-model="searchStore.country" placeholder="国家">
              <el-option label="中国" value="86" />
            </el-select>
          </el-form-item>
          <el-form-item label="省">
            <el-select v-model="searchStore.province" placeholder="省">
              <el-option
                v-for="province in (Object.keys(data[searchStore.country]) as string[])"
                :key="province"
                :label="data[searchStore.country][province]"
                :value="province"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="城市">
            <el-select
              v-model="searchStore.city"
              placeholder="城市"
              @change="changeCity"
            >
              <template v-if="searchStore.province !== '省'">
                <el-option
                  v-for="city in (Object.keys(data[searchStore.province]) as string[])"
                  :key="city"
                  :label="data[searchStore.province][city]"
                  :value="city"
                />
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="locations-wrapper">
        <el-row class="locations-list" v-if="level !== 3">
          <el-col
            :span="6"
            class="locations-item"
            v-for="location in Object.keys(locations)"
            :key="location"
          >
            <div class="item" @click="changeLocation(location, level)">
              {{ locations[location] }}
            </div>
          </el-col>
        </el-row>
        <div class="store-list" v-else>
          <el-collapse v-model="activeNames">
            <el-collapse-item
              :title="store.title"
              v-for="(store, index) in storeList"
              :key="store._id"
              :name="store._id"
            >
              <template #title>
                <div class="title">
                  <span>{{ index + 1 }}.{{ store.title }}</span>
                  <span
                    >（）<i
                      :class="
                        activeNames.includes(store._id)
                          ? 'fa fa-chevron-circle-left'
                          : 'fa fa-chevron-circle-down'
                      "
                    ></i
                  ></span>
                </div>
              </template>
              <div class="content" v-html="store.content"></div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from 'china-area-data';
const { data: storeData } = await useFetch('/api/store');
const searchStore = ref({
  country: '86',
  province: '省',
  city: '市',
});
const storeList = ref();
const locations = ref(data[86]);
const level = ref(1);
const activeNames = ref<string[]>([]);

const changeCity = async (val: string) => {
  level.value = 3;
  const { data: StoreList } = await useFetch('/api/storeList', {
    query: searchStore.value,
  });
  storeList.value = StoreList.value;
};
const changeLocation = (val: string, num: number) => {
  if (num === 1) {
    level.value = 2;
    locations.value = data[val];
    searchStore.value.province = val;
  } else {
    searchStore.value.city = val;
    changeCity(val);
  }
};
</script>

<style scoped lang="less">
.store {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  .container {
    padding: 50px 0;
    position: relative;
  }
  h1 {
    color: #fff;
    text-align: center;
    font-size: 45px;
    margin-bottom: 50px;
    font-weight: bold;
  }
  .store-form {
    width: 1000px;
    margin: 0 auto 40px;
    display: flex;
    justify-content: center;
    gap: 20px;
    .el-form-item {
      flex: 1;
      margin-bottom: 0;
      :deep(.el-form-item__label) {
        color: #fff;
        font-size: 14px;
        line-height: 50px;
      }
      .el-select {
        width: 100%;
      }
      :deep(.el-input__inner) {
        height: 58px;
        line-height: 58px;
        font-size: 14px;
        color: #323232;
      }
    }
  }
  .locations-wrapper {
    background: rgba(0, 0, 0, 0.7);
    padding: 50px 0px;
    text-align: left;
    color: #f5af05;
    font-size: 16px;
    line-height: 30px;
    .locations-list {
      padding: 0 70px;
    }
    .item {
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    .store-list {
      background: #fff;
      padding: 20px 70px;
      .el-collapse {
        border: 0;
        .el-collapse-item {
          margin-bottom: 20px;
          .content {
            font-size: 22px;
            text-align: left;
            color: #333;
            line-height: 1.42857143;
          }
          :deep(.el-collapse-item__wrap) {
            border: 0;
          }
          :deep(.el-collapse-item__header) {
            background-color: #1c1b1b;
            border: 0;
            padding: 0 15px;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            .el-icon {
              display: none;
            }
            .title {
              display: flex;
              justify-content: space-between;
              width: 100%;
              height: 58px;
              line-height: 58px;
            }
          }
        }
      }
    }
  }
}
</style>
