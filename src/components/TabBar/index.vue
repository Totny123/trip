<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="orange">
      <template v-for="item in tabBarData">
        <van-tabbar-item :icon="item.icon" :to="item.path">
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import tabBarData from "@/assets/data/tabBarData";

const currentIndex = ref(0);
</script>

<style lang="less" scoped></style>
