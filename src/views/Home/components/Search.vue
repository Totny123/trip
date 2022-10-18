<template>
  <div class="search">
    <div class="location">
      <span @click="cityHandle">广州</span>
      <div class="position" @click="positionHandle">
        <span>我的位置</span>
        <van-icon name="aim" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const cityHandle = () => {
  router.push("/city");
};

const positionHandle = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
    { timeout: 1000 }
  );
};
</script>

<style lang="less" scoped>
.location {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  .position {
    i {
      margin-left: 4px;
    }
  }
}
</style>
