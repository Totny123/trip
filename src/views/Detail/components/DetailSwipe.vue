<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="item in swipeData" :key="item.orderIndex">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <div
            class="item"
            :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            v-for="(arr, key, index) in swiperGroup"
          >
            <span>{{ getTitle(arr[0].title) }} </span>
            <span v-if="swipeData[active]?.enumPictureCategory == key">
              {{ getIndexOfPictureCategory(swipeData[active], arr) }}/{{
                arr.length
              }}
            </span>
          </div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// #region tip: 定义props
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});
// #endregion

// #region tip: 数据分组
const swiperGroup = {};
props.swipeData.forEach((item) => {
  const enumPictureCategory = item.enumPictureCategory;
  if (!swiperGroup[enumPictureCategory]) {
    swiperGroup[enumPictureCategory] = [];
  }
  swiperGroup[enumPictureCategory].push(item);
});
// #endregion

// #region tip: 从字符串提取中文
const titleReg = /【(.*?)】/i;
const getTitle = (title) => {
  const results = titleReg.exec(title);
  return results[1];
};
// #endregion

// #region tip: 获取分组中的index
const getIndexOfPictureCategory = (item, arr) => {
  return arr.findIndex((i) => i === item) + 1;
};

// #endregion
</script>

<style lang="less" scoped>
.swipe {
  img {
    display: block;
    width: 100%;
  }
}
.custom-indicator {
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  border-radius: 8px;
  .item {
    padding: 2px;
    margin: 2px;
    &.active {
      background-color: white;
      color: #333;
      border-radius: 8px;
    }
  }
}
</style>
