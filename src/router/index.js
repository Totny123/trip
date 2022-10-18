import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
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
  ],
});

export default router;
