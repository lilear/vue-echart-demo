import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: { name: "EmptyCirclePie"},
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/emptyCirclePie",
        name: "EmptyCirclePie",
        component: () => import("../components/empty-circle-pie/index.vue"),
      },
      {
        path: "/solidPie",
        name: "SolidPie",
        component: () => import("../components/soild-pie/index.vue"),
      },
      {
        path: "/lineBar",
        name: "LineBar",
        component: () => import("../components/line-bar/index.vue"),
      },
      {
        path: "/scatter",
        name: "Scatter",
        component: () => import("../components/scrollList/index.vue"),
      },
      {
        path: "/map",
        name: "Map",
        component: () => import("../components/map/index.vue"),
      },
      {
        path: "/spinAnim",
        name: "SpinAnim",
        component: () => import("../components/spin-anim/index.vue"),
      },
      {
        path: "/countTo",
        name: "CountTo",
        component: () => import("../components/count-to/index.vue"),
      },
      {
        path: "/marquee",
        name: "Marquee",
        component: () => import("../components/marquee/index.vue"),
      },
      {
        path: "/scrollList",
        name: "ScrollList",
        component: () => import("../components/scrollList/index.vue"),
      },
      {
        path: "/lineLine",
        name: "LineLine",
        component: () => import("../components/line-line/index.vue"),
      },
      {
        path: "/lineArea",
        name: "LineArea",
        component: () => import("../components/line-area/index.vue"),
      },
      {
        path: "/scrollList",
        name: "ScrollList",
        component: () => import("../components/scrollList/index.vue"),
      },
      {
        path: "/horizonBar",
        name: "HorizonBar",
        component: () => import("../components/horizon-bar/index.vue"),
      },
      {
        path: "/spinText",
        name: "SpinText",
        component: () => import("../components/spin-text/index.vue"),
      },
      {
        path: "/cardBar",
        name: "CardBar",
        component: () => import("../components/card-bar/index.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
