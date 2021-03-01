import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/views/home'
import colorPicker from '@/components/common/colorProcess'
import check from '@/components/views/checkDo/check'
import aboutHTML from '@/components/views/aboutHTML/index.vue'

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
    },
    {
      path: "/aboutHTML",
      name: "查看html相关元素",
      component: aboutHTML
    },{
      path: "/browse",
      name: "浏览作品",
      component: () => import ('@/components/views/browse/index.vue')
    }
  ]
})
