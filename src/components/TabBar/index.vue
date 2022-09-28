<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData" :key="item.text">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="tabBarClick(item.path, index)"
      >
        <img
          :src="
            getImgURL(currentIndex !== index ? item.imgURL : item.activeImgURL)
          "
          alt=""
        />
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabBarData";
import { getImgURL } from "@/utils";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const currentIndex = ref(0);

const tabBarClick = (path, index) => {
  router.push(path);
  currentIndex.value = index;
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;

  &-item {
    height: 48px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 36px;
      height: auto;
    }

    span {
      margin-top: 4px;
    }
  }
}
.active {
  color: var(--primary-color);
}
</style>
