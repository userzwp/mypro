import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router/index.js"
import http from "./network/http.js"
Vue.config.productionTip = false
Vue.prototype.$http = http

import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
Vue.prototype.$msg = Toast
Vue.use(Vant);
new Vue({
  store,
  router,
  render: h => h(App),
 
}).$mount('#app')
