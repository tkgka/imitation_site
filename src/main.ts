import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueClipboard from "vue-clipboard2";
import VueSocialSharing from "vue-social-sharing";

Vue.use(VueSocialSharing);
Vue.use(VueClipboard);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
