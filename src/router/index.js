// Import
import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import ListCustomer from "../views/ListCustomer.vue";
import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard ",
        components: { default: Dashboard },
        meta: { requireAuth: true },
      },
      {
        path: "/list-customer",
        name: "listCustomer",
        components: { default: ListCustomer },
        meta: { requireAuth: true },
      },
      
      {
        path: "/maps",
        name: "maps",
        components: { default: Maps },
        meta: { requireAuth: true },
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
        meta: { requireAuth: true },
      },
      {
        path: "/tables",
        name: "tables",
        components: { default: Tables },
        meta: { requireAuth: true },
      },
    ],
  },
  
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

// Middlewares
router.beforeEach((to, from, next) => {
  // Get logged user
  // let loggedUser = store.getters.getLoggedUser;
  let loggedUser = true;

  if (to.matched.some((record) => record.meta.requireAuth)) {
    // Check if access token expired
    if (loggedUser) {
      let currentDateTime = new Date().getTime();
      if (currentDateTime > loggedUser.expiryDate) {
        store.dispatch("logOut");
        return router.replace("/login");
      } else {
        next(); 
      }
    }
    else {
      router.replace("/login");
    }
    // Auth
    if (to.meta.auth) {
      if (loggedUser) return next();
      else return router.replace("login");
    }
  }
  // Allow page to load
  else {
    next();
  }
});

export default router;
