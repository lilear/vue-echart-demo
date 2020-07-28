import Vue from "vue";
import element from "./lib/elementui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
