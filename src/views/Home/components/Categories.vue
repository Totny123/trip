<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.categories {
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    img {
      width: 36px;
      height: 36px;
    }
    span {
      margin-top: 4px;
      font-size: 14px;
    }
  }
}
</style>
