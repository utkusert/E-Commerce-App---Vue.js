import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";
import ProjectLogin from "../components/ProjectLogin.vue";
import ProjectRegister from "../components/ProjectRegister.vue";
import store from "../store/index.js";
import ProjectMain from "@/components/ProjectMain.vue";

const routes = [
  { path: "/", name: "MainPage", component: ProjectMain },
  {
    path: "/products",
    name: "Products",
    component: ProductList,
    meta: { requiresAuth: true },
  },
  { path: "/register", component: ProjectRegister },
  { path: "/login", name: "Login", component: ProjectLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated = store.getters.isAuthenticated;
    if (!isAuthenticated) {
      next({ name: "MainPage" });
    } else {
      next();
    }
  } else if (to.path === "/basket") {
    const isAuthenticated = store.getters.isAuthenticated;
    if (!isAuthenticated) {
      next({ name: "MainPage" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
