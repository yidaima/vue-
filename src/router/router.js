import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: { render: h => h("router-view") },
    children: [
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../user/login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "register" */ "../user/register.vue")
      }
    ]
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "Home" */ "../page/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/About.vue")
  },
  {
    path: "*",
    name: "404page",
    component: () => import(/* webpackChunkName: "404page" */ "../page/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
