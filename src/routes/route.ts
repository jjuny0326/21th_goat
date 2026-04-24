import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/hwang0611",
  },
  {
    path: "/hwang0611",
    name: "hwang0611",
    component: () => import("@/views/hwang0611.vue"),
  },
  {
    path: "/itleo29",
    name: "itleo29",
    component: () => import("@/views/itleo29.vue"),
  },
  {
    path: "/jjjinsung",
    name: "jjjinsung",
    component: () => import("@/views/jjjinsung.vue"),
  },
  {
    path: "/jjuny0326",
    name: "jjuny0326",
    component: () => import("@/views/jjuny0326.vue"),
  },
  {
    path: "/kimjm9841",
    name: "kimjm9841",
    component: () => import("@/views/kimjm9841.vue"),
  },
  {
    path: "/sangsangwoowoo",
    name: "sangsangwoowoo",
    component: () => import("@/views/sangsangwoowoo.vue"),
  },
  {
    path: "/yanh2",
    name: "yanh2",
    component: () => import("@/views/yanh2.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
