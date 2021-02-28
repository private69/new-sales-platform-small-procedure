# new-sales-platform-small-procedure

> this is a demo with visual implement to create H5's page 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### check.vue:

`axios`方法封装：`@/plugins/axios.js`

请求方法封装：`@/services/request.js`

> 检验接口是否生效：
>
> 
>
> 接口：`http://localhost:8080/aaa//checkPost.do`

注：

- 如需要接口`http://localhost:8080/aaa/checkPost.do`

  1. 转至项目文件`src\plugins\axios.js`

  2. `${host}/${url}` 

     修改为

     `${host}${url}`

目录结构：

```
src
|————assets 				// 静态资源(图片、视频等)
|————components				// 组件资源
|	|————assets				// 外部静态文件资源
|	|————base				// 
|	|————common				// 公共组件管理(局部组件、方法)
|	|	|————public			// 全局组件
|	|————views				// 页面管理
|	|	|————header			// 头部样式 (公用)
|	|	|————mainer			// 侧边栏内容(公用)
|————global					// 全局资源
|————plugins				// 插件引入
|————router					// 路由管理
|————services				// 请求服务
|————ABOUT.md				// 关于 文档
|————App.vue				// 入口组件
|————main.js				// 项目入口文件
```

