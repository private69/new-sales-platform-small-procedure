import Vue from 'vue'
import App from './App'
import router from './router'
import '@/global/css/index.css';
import '@/plugins/elementUI'
import '@/plugins/install'
import store from './store'
import '@/plugins/echarts'

import bus from './global/js/bus'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
