<template>
  <div class="home">
    <NavBar />
    <div class="banner">
      <img src="@/assets/img/baidu.png" alt="" />
    </div>
    <Search />
    <Categories />
    <HouseList />
    <button @click="moreClick">加载更多</button>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Search from "./components/Search.vue";
import Categories from "./components/Categories.vue";
import HouseList from "./components/HouseList.vue";
import useHomeStore from "@/stores/modules/home";

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();

const moreClick = () => {
  homeStore.fetchHouseList();
};
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
