<template>
  <div class="home">
    <h1>home</h1>
    <div>{{ cities }}</div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
const cityStore = useCityStore();
const cities = cityStore.getCities;
</script>

<style lang="less" scoped></style>
