import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/views/home'
import colorPicker from '@/components/common/colorProcess'
import check from '@/components/views/checkDo/check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "主页",
      component: home
    },
    {
      path: "/color",
      name: "颜色管理",
      component: colorPicker
    },
    {
      path: "/check",
      name: "测试请求方法",
      component: check
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
