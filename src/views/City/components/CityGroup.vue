<template>
  <div class="city-group">
    <van-index-bar>
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
import { defineProps } from "vue";

defineProps({
  groupValue: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped></style>
