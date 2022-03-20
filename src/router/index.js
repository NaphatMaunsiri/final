import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import registerPage from "../views/registerPage.vue";
import loginPage from "../views/loginPage.vue";
import covidView from "../views/covidView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: loginPage,
    },
    {
      path: "/register",
      name: "register",
      component: registerPage,
    },
    {
      path: '/covid',
      component: covidView
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
