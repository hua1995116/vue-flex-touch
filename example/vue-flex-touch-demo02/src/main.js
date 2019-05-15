import Vue from "vue";
import App from "./App.vue";
import flexTouch from "../../../src/index";

Vue.use(flexTouch, { timeout: 900 });
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
