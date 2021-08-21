import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
Vue.config.productionTip = false;

import router from "@/router";
import {dollarFilter, percentFilter} from '@/filters'

Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
