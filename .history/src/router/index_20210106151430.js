import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/layout/Layout.vue";

Vue.use(VueRouter);

const routes = [{
   path:"",
  component:Layout,
  children:[{
    path: "/",
    name: "Home",
    component: Home
  },
  
  ]},
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login/Login.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
