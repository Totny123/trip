<template>
  <div class="infos" v-if="Object.keys(infos)">
    <div class="houseName">{{ infos.houseName }}</div>
    <div class="houseTags">
      <template v-for="item in infos.houseTags">
        <span
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="commentBrief">
      <div class="left">
        <span class="overall">{{ infos.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ infos.commentBrief.scoreTitle }}</span>
        <span class="text">{{ infos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="totalCount"
          >{{ infos.commentBrief.totalCount }}条评论&gt;</span
        >
      </div>
    </div>
    <div class="nearByPosition">
      <div class="left">{{ infos.nearByPosition.address }}</div>
      <div class="right">地图·周边&gt;</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  infos: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.infos {
  padding: 0 10px;
  margin-top: 15px;
}
.houseName {
  font-size: 18px;
  font-weight: bold;
}
.houseTags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;
  span {
    margin-right: 4px;
    margin-top: 2px;
    padding: 2px;
    font-size: 12px;
  }
}
.commentBrief {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  padding: 10px 5px;
  border-radius: 4px;
  background-color: #f5f7fb;
  font-size: 12px;
  .overall {
    font-size: 16px;
    font-weight: bold;
  }
  .scoreTitle {
    font-weight: bold;
  }
  .text {
  }
  .totalCount {
    color: orange;
  }
  .left {
    display: flex;
    align-items: center;
    span {
      margin-right: 4px;
    }
  }
}
.nearByPosition {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  padding: 10px 5px;
  border-radius: 4px;
  background-color: #f5f7fb;
  font-size: 14px;
  .left {
    font-weight: bold;
  }
  .right {
    color: orange;
  }
}
</style>
