<template>
  <div class="search">
    <div class="location">
      <span @click="cityHandle">{{ currentCity.cityName }}</span>
      <div class="position" @click="positionHandle">
        <span>我的位置</span>
        <van-icon name="aim" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

// 城市点击逻辑
const router = useRouter();
const cityHandle = () => {
  router.push("/city");
};

// 定位点击逻辑
const positionHandle = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
    { timeout: 1000 }
  );
};

// 获取城市名字逻辑
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.location {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  .position {
    i {
      margin-left: 4px;
    }
  }
}
</style>
