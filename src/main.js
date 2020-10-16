import Vue from "vue";
import App from "./App.vue";
import VueRouter from "./router";

Vue.config.productionTip = false;

new Vue({
  VueRouter,
  render: (h) => h(App),
}).$mount("#app");
