import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/views/home'
import colorPicker from '@/components/common/colorProcess'
import check from '@/components/views/checkDo/check'
import aboutHTML from '@/components/views/aboutHTML/index.vue'

import routes from './router'

Vue.use(Router)

export default new Router({
  routes
})
