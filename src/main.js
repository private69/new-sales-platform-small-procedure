import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入elementui
import ELEMENTUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELEMENTUI)
// 引入echart
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts

import '@/components/base/install'; // 注册基础组件
import '@/components/global/install'; // 注册全局插件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
