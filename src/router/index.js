// Import
import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import ListCustomer from "../views/Customers/ListCustomer.vue";
import NewCustomer from "../views/Customers/NewCustomer.vue";
import UpdateCustomer from "../views/Customers/UpdateCustomer.vue";
import ShowCus from "../views/Customers/CustomerDetial";
import ListDisbursement from "../views/Disbursements/ListDisbursement";
import NewDisbursement from "../views/Disbursements/NewDisbursement";
import ListUser from "../views/ListUser.vue";
import Profile from "../views/UserProfile.vue";
import UpdateUser from "../views/UpdateUser.vue";
import UserDetial from "../views/UserDetial.vue";
import MyAccount from "../views/MyAccount.vue";
import ShowDis from "../views/Disbursements/Show.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
// import store from "@/store";

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
        path: "customer",
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
        path: "/customer/:id/edit",
        name: "Update Customer",
        components: { default: UpdateCustomer },
        meta: { requireAuth: true },
      },
      {
        path: "/customer/:id/show",
        name: "Customer Detial",
        components: { default: ShowCus },
        meta: { requireAuth: true },
      },
      {
        path: "disbursed",
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
        path: "user",
        name: "User Lists",
        components: { default: ListUser },
        meta: { requireAuth: true },
      },
      {
        path: "/new-user",
        name: "New User",
        components: { default: Profile },
        meta: { requireAuth: true },
      },
      {
        path: "/user/:id/edit",
        name: "Edit User",
        components: { default: UpdateUser },
        meta: { requireAuth: true },
      },
      {
        path: "/user/:id/show",
        name: "User Detial",
        components: { default: UserDetial },
        meta: { requireAuth: true },
      },
      {
        path: "/my-account",
        name: "My Account",
        components: { default: MyAccount },
        meta: { requireAuth: true },
      },
      {
        path: "/disbursed/:id/show",
        name: "Priview Disbursement",
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
  let loggedUser = true;
  if (to.meta.requireAuth && !loggedUser) next({ name: 'Login' })
  else next()
})

export default router;
