<template>
  <div class="home">
    <NavBar />
    <div class="banner">
      <img src="@/assets/img/baidu.png" alt="" />
    </div>
    <Search />
    <Categories />
    <div v-if="searchBtnShow">搜索框xxxxxxxxxxxxxxxxx</div>
    <HouseList />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Search from "./components/Search.vue";
import Categories from "./components/Categories.vue";
import HouseList from "./components/HouseList.vue";
import useHomeStore from "@/stores/modules/home";
import { useScroll } from "@/hooks/useScroll";
import { watch, ref } from "vue";

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();

// #region tip: 加载更多
const { isBottom, scrollTop } = useScroll();
watch(isBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList();
  }
});
// #endregion

// #region tip: 搜索框显隐
const searchBtnShow = ref(false);
watch(scrollTop, (newScrollTop) => {
  if (newScrollTop > 100) {
    searchBtnShow.value = true;
  }
});
// #endregion
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      max-width: 100%;
    }
  }
  margin-bottom: 100px;
}
</style>
