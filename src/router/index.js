// Import
import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import ListCustomer from "../views/ListCustomer.vue";
import NewCustomer from "../views/NewCustomer.vue";
import ListDisbursement from "../views/Disbursements/ListDisbursement";
import NewDisbursement from "../views/Disbursements/NewDisbursement";
import ListUser from "../views/ListUser.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";
import ShowDis from "../views/Disbursements/Show.vue";

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
        name: "Dashboard",
        components: { default: Dashboard },
        meta: { requireAuth: true },
      },
      {
        path: "list-customer",
        name: "List Customer",
        components: { default: ListCustomer },
        meta: { requireAuth: true },
      },
      {
        path: "new-customer",
        name: "New Customer",
        components: { default: NewCustomer },
        meta: { requireAuth: true },
      },
      {
        path: "list-disbursed",
        name: "List disbursed",
        components: { default: ListDisbursement },
        meta: { requireAuth: true },
      },
      {
        path: "new-disbursement",
        name: "New disbursement",
        components: { default: NewDisbursement },
        meta: { requireAuth: true },
      },
      {
        path: "list-user",
        name: "UserList",
        components: { default: ListUser },
        meta: { requireAuth: true },
      },
      {
        path: "/profile",
        name: "Profile",
        components: { default: Profile },
        meta: { requireAuth: true },
      },
      {
        path: "/tables",
        name: "tables",
        components: { default: Tables },
        meta: { requireAuth: true },
      },
      {
        path: "/list-disbursed/show",
        name: "Show",
        components: { default: ShowDis },
        meta: { requireAuth: true },
      },
    ],
  },
  {
    path: "/",
    redirect: "/login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        components: { default: Login },
        meta: { requireAuth: false },
      },
      {
        path: "/register",
        name: "Register",
        components: { default: Register },
        meta: { requireAuth: false },
      },
      {
        path: "/logout",
        name: "Logout",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  mode: history,
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  let loggedUser = store.getters.getLoggedUser;
  if (to.meta.requireAuth && !loggedUser) next({ name: 'Login' })
  else next()
})

export default router;
