<template>
  <div class="home">
    <NavBar />
    <div class="banner">
      <img src="@/assets/img/baidu.png" alt="" />
    </div>
    <div class="location">
      <span>广州</span>
      <div class="position">
        <span>我的位置</span>
        <van-icon name="aim" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      max-width: 100%;
    }
  }
  .location {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 14px;
    .position {
      i {
        margin-left: 4px;
      }
    }
  }
}
</style>
