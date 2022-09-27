<template>
  <div class="tab-bar">
    <template v-for="item in tabBarData" :key="item.text">
      <div class="tab-bar-item" @click="tabBarClick(item.path)">
        <img :src="getImgURL(item.imgURL)" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import router from "@/router";
import tabBarData from "@/assets/data/tabBarData";
import { getImgURL } from "@/utils";

const tabBarClick = (path) => router.push(path);
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;

  &-item {
    height: 48px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 36px;
      height: auto;
    }

    span {
      margin-top: 4px;
    }
  }
}
</style>
