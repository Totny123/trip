import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/Home/index.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/Favor/index.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/Order/index.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/Message/index.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/City/index.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/search",
      component: () => import("@/views/Search/index.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/Detail/index.vue"),
      meta: {
        hideTabBar: true,
      },
    },
  ],
});

export default router;
