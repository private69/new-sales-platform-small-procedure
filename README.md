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
demoPetSc					// 文档相关截图
```

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

## 前端：

#### 主要功能：

1. 利用组件搭建页面

   | 组件实例                               |
   | -------------------------------------- |
   | 表格 （可设置规则-行、列）             |
   | 图表（饼图、直方图等）                 |
   | 文段格式（空格、粗细、字体样式、字号） |
   | 轮播图                                 |
   | 背景图                                 |

2. 利用 html 原生标签/饿了么组件 组成页面

3. 拖拽功能

4. 画布用于展示页面的实时编辑的样式效果

5. 可生成图片用于查看效果

6. 可将图片转换为相应页面文件



## 常见问题：

1. git 提交时报`LF will be replaced by CRLF in`

   - 问题：

     > LF和CRLF其实都是换行符，但是不同的是，LF是linux和Unix系统的换行符，CRLF是window 系统的换行符。这就给跨平台的协作的项目带来了问题，保存文件到底是使用哪个标准呢？ git为了解决这个问题，提供了一个”换行符自动转换“的功能，并且这个功能是默认处于”自动模式“即开启状态的。
     > 这个换行符自动转换会把自动把你代码里 与你当前操作系统不相同的换行的方式 转换成当前系统的换行方式（即LF和CRLF 之间的转换），这样一来，当你提交代码的时候，即使你没有修改过某个文件，也被git认为你修改过了，从而提示"LF will be replaced by CRLF in *****"

   - 解决：

     1. `git config core.autocrlf false`（仅对当前 git 仓库有效）
     2. `git config --global core.autocrlf false` ( 全局有效）

