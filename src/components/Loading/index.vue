<template>
  <div class="loading" v-if="mainStore.isLoading">
    <van-loading type="spinner" color="white" />
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
