import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "power",
      component: home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
