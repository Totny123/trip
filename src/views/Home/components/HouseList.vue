<template>
  <div class="houseList">
    <template v-for="item in houseList" :key="item.data.houseId">
      <T3
        @click="itemClick(item)"
        v-if="item.discoveryContentType === 3"
        :itemData="item.data"
      />
      <T9
        @click="itemClick(item)"
        v-else-if="item.discoveryContentType === 9"
        :itemData="item.data"
      />
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import T3 from "@/components/HouseListItem/T3.vue";
import T9 from "@/components/HouseListItem/T9.vue";
import { useRouter } from "vue-router";

// #region tip: 获取房屋列表数据
const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
// #endregion

// #region tip: 跳转到详情页
const router = useRouter();
const itemClick = (item) => {
  router.push(`detail/${item.data.houseId}`);
};
// #endregion
</script>

<style lang="less" scoped>
.houseList {
  display: flex;
  flex-wrap: wrap;
}
</style>
