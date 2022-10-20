<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="onCancel"
      />
      <van-tabs v-model:active="activeTab" color="orange">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(groupValue, groupKey) in allCities" :key="groupKey">
        <div v-show="activeTab === groupKey">
          <CityGroup :groupValue="groupValue" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import CityGroup from "./components/CityGroup.vue";

const router = useRouter();
const searchValue = ref("");
const activeTab = ref();

const onCancel = () => {
  router.back();
};

const cityStore = useCityStore();
cityStore.fetchAllCity();
const { allCities } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.city {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.top {
  position: relative;
  z-index: 99;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
