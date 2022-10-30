<template>
  <div class="home">
    <NavBar />
    <div class="banner">
      <img src="@/assets/img/baidu.png" alt="" />
    </div>
    <Search />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Search from "./components/Search.vue";
import useHomeStore from "@/stores/modules/home";

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      max-width: 100%;
    }
  }
}
</style>
