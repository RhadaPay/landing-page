import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
    children: [{ path: "", name: "home", component: Home }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
