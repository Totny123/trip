<template>
  <div class="houseList">
    <template v-for="item in houseList" :key="item.data.houseId">
      <T3 v-if="item.discoveryContentType === 3" :itemData="item.data" />
      <T9 v-else-if="item.discoveryContentType === 9" :itemData="item.data" />
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import T3 from "@/components/HouseListItem/T3.vue";
import T9 from "@/components/HouseListItem/T9.vue";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.houseList {
  display: flex;
  flex-wrap: wrap;
}
</style>
