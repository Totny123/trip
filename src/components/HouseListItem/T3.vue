<template>
  <div class="T3">
    <img :src="itemData.image.url" alt="" />
    <div class="text">
      <div>{{ itemData.location }}</div>
      <div class="houseName">{{ itemData.houseName }}</div>
      <div class="summaryText">{{ itemData.summaryText }}</div>
      <div class="price">
        <span class="finalPrice">￥{{ itemData.finalPrice }}</span>
        <span class="productPrice">￥{{ itemData.productPrice }}</span>
        <span class="priceTipBadge">{{ itemData.priceTipBadge.text }}</span>
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
.T3 {
  padding: 10px;
  position: relative;
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
    color: black;
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
      align-items: center;
      span {
        margin-right: 4px;
      }
      .finalPrice {
        color: orange;
        font-size: 14px;
      }
      .productPrice {
        color: gray;
        text-decoration: line-through;
        font-size: 12px;
      }
      .priceTipBadge {
        display: block;
        padding: 2px;
        color: #fff;
        font-size: 12px;
        background-color: pink;
        border-radius: 6px;
      }
    }
  }
  .summaryText {
    margin-top: 6px;
  }
}
</style>
