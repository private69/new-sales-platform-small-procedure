// 主页路由
module.exports = [
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