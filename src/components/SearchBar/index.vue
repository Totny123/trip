<template>
  <div class="searchBar">
    <div class="left">
      <div class="enter">
        <span class="text">住</span>
        <span class="time">{{ startDate }}</span>
      </div>
      <div class="leave">
        <span class="text">离</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>
    <div class="center">
      <input type="text" placeholder="关键字/位置/民宿" />
    </div>
    <div class="right">
      <van-icon name="search" size="20" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { formatDate } from "@/utils";
import { computed } from "vue";
import useMainStore from "@/stores/modules/main";

// #region tip: 获取用户选择的时间
const { startDateTimeStamp, endDateTimeStamp } = storeToRefs(useMainStore());
const startDate = computed(() => formatDate(startDateTimeStamp.value, "MM.DD"));
const endDate = computed(() => formatDate(endDateTimeStamp.value, "MM.DD"));
// #endregion
</script>

<style lang="less" scoped>
.searchBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 9;
  font-size: 12px;
  height: 64px;
  > * {
    background-color: #f2f4f5;
    height: 100%;
  }
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 5px;
}
.center {
  flex-grow: 1;
  display: flex;
  align-items: center;
  input {
    margin-left: 2px;
    background-color: #f2f4f5;
    width: 95%;
  }
}
.right {
  width: 35px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  margin-right: 2px;
}
</style>
