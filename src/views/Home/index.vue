<template>
  <div class="home">
    <h1>home</h1>
    <div>{{ cities }}</div>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
const cityStore = useCityStore();
const cities = cityStore.getCities;
</script>

<style lang="less" scoped>
</style>