<template>
  <CommonBanner
    :img="helpData?.banner"
    breadTo="/help"
    :breadText="helpData?.title"
  />
  <CateName :title="helpData?.title" category="帮助" />
  <div class="list-content">
    <div class="container">
      <el-row type="flex">
        <el-col :span="6">
          <keep-alive>
            <NewsMenu
              :active="active"
              :menuList="helpMenu!"
              @select="menuChange"
            />
          </keep-alive>
        </el-col>
        <el-col :span="16" :offset="2">
          <div class="help-list">
            <h3>
              {{ helpData?.subtitle }}
            </h3>
            <el-collapse v-model="activeNames">
              <el-collapse-item
                v-for="item in helpData?.helpList"
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
                  >{{ item.title }}
                </template>
                <div class="content">
                  <div v-html="item.content"></div>
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
const getData = async (type: string) => {
  const { data } = await useFetch('/api/help', {
    params: {
      typeId: type,
    },
  });
  helpData.value = data.value;
};
const typeId = route.query.typeId as string;
const { data: helpMenu } = useFetch('/api/helpMenu');
const activeNames = ref<string[]>([]);
getData(typeId);

const menuChange = (path: string) => {
  active.value = path;
  getData(path.split('=')[1]);
};
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
</style>
