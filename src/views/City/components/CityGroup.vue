<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hotCities">
        <template v-for="item in groupValue.hotCities" :key="item.cityId">
          <div class="hotCity">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="item in groupValue.cities" :key="item.group">
        <van-index-anchor :index="item.group" />
        <template v-for="city in item.cities" :key="city.cityId">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  groupValue: {
    type: Object,
    default: () => ({}),
  },
});

const indexList = computed(() => [
  "#",
  ...props.groupValue.cities.map((item) => item.group),
]);
</script>

<style lang="less" scoped>
.hotCities {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 20px;
  .hotCity {
    width: 70px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    border-radius: 14px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
