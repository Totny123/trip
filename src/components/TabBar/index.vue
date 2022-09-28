<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex">
      <template v-for="item in tabBarData">
        <van-tabbar-item icon="home-o" :to="item.path">
          <template #icon="props">
            <img
              class="test"
              :src="getImgURL(props.active ? item.activeImgURL : item.imgURL)"
              alt=""
            />
          </template>
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabBarData";
import { getImgURL } from "@/utils";
import { ref } from "vue";

const currentIndex = ref(0);
</script>

<style lang="less" scoped></style>
