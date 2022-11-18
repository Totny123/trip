<template>
  <div>
    <router-view v-slot="props">
      <KeepAlive include="home">
        <component :is="props.Component"></component>
      </KeepAlive>
    </router-view>
    <TabBar v-show="isShow" />
    <Loading />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import TabBar from "./components/TabBar/index.vue";
import Loading from "@/components/Loading/index.vue";

const route = useRoute();
const isShow = computed(() => !route.meta.hideTabBar);
</script>

<style scoped></style>
