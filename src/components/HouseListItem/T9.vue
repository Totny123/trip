<template>
  <div class="T9">
    <img :src="itemData.image.url" alt="" />
    <div class="text">
      <div>{{ itemData.summaryText }}</div>
      <div class="houseName">{{ itemData.houseName }}</div>
      <div class="price">
        <van-rate
          :size="13"
          color="#fff"
          allow-half
          readonly
          :model-value="Number(itemData.commentScore)"
        />
        <span>￥{{ itemData.finalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>

<style lang="less" scoped>
.T9 {
  position: relative;
  padding: 10px;
  width: 180px;
  height: 240px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .text {
    position: absolute;
    padding: 10px;
    bottom: 10px;
    color: #fff;
    font-size: 12px;
    .houseName {
      margin-top: 6px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      overflow-wrap: break-word;
    }
    .price {
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
