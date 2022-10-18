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
      <div v-for="item in currentCityGroup?.cities">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";

const router = useRouter();
const searchValue = ref("");
const activeTab = ref();

const onCancel = () => {
  router.back();
};

const cityStore = useCityStore();
cityStore.fetchAllCity();
const { allCities } = storeToRefs(cityStore);

const currentCityGroup = computed(() => allCities.value[activeTab.value]);
</script>

<style lang="less" scoped>
.city {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
