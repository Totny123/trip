<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <main class="main" v-if="mainPart">
      <DetailSwipe :swipeData="mainPart.topModule.housePicture.housePics" />
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getHouseDetailData } from "@/services";
import DetailSwipe from "./components/DetailSwipe.vue";

// #region tip: 获取路由和活跃路由
const router = useRouter();
const route = useRoute();
// #endregion

// #region tip: 获取屋子的id
const houseId = route.params.id;
// #endregion

// #region tip: 返回上一页
const onClickLeft = () => {
  router.go(-1);
};
// #endregion

// #region tip: 发起网络请求，获取屋子的详情数据
const houseInfos = ref({});
const mainPart = computed(() => houseInfos.value.mainPart);
getHouseDetailData(houseId).then((res) => {
  houseInfos.value = res.data;
});
// #endregion
</script>

<style lang="less" scoped></style>
