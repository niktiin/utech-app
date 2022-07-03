import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/identific",
    name: "IdentificView",
    component: () => import("../views/IdentificView.vue"),
  },
  {
    path: "/main",
    name: "MainView",
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/subinfo",
    name: "SubInfoView",
    component: () => import("../views/SubInfoView.vue"),
  },
  {
    path: "/result",
    name: "ResultView",
    component: () => import("../views/ResultView.vue"),
  },
  {
    path: "*",
    name: "PreviewView",
    component: () => import("../views/PreviewView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
