import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../LandingPage.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
    children: [{ path: "", name: "home", component: Home }],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
