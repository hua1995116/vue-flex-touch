import Vue from "vue";
import App from "./App.vue";
import flexTouch from "vue-flex-touch";

Vue.use(flexTouch, { timeout: 900 });
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
