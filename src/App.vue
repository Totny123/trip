<template>
  <div>
    <router-view />
    <TabBar v-show="isShow" />
  </div>
</template>

<script setup>
import TabBar from "./components/TabBar/index.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const isShow = computed(() => !route.meta.hideTabBar);
</script>

<style scoped></style>
