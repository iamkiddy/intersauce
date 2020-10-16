import Vue from "vue";
import VueRouter from "vue-router";
import errorpage from "./components/errorpage";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: errorpage,
    },
  ],
});
