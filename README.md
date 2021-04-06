<h2 align="center">
 DESIGN PORTAL
</h2>

----

## 简介
类似凡科微传单、易企秀、MAKA的可视化H5编辑器(基于Vue2，使用VueCli3.0搭建)

## 预览地址
[www.designportal.cn](http://www.designportal.cn)

## 配套设施
- [服务端](https://github.com/DESIGN-PORTAL/DESIGNPORTAL-BE)
- [预览页](https://github.com/DESIGN-PORTAL/DESIGNPORTAL-VIEWER)

## 开发者文档
- [编辑器迁移指南](./guides/编辑器迁移指南.md)
- [编辑器组件开发指南](./guides/编辑器组件开发指南.md)

## TODO
  + [ ] 组件组合功能
  + [ ] 动画功能
  + [ ] 图片裁剪

----
## 目录结构
```
.
├── src
│   ├── api
│   │   └── axios.js                      // axios请求封装
│   ├── assets
│   │   ├── css                           // css代码
│   │   ├── iconfont                      // iconfont 字体图标
│   ├── components
│   │   ├── advanceForm.vue               // 高阶表单组件
│   │   ├── advanceTable.vue              // 高阶表格组件
│   │   ├── base                          // 基础组件
│   │   ├── editor                        // 编辑器组件
│   │   ├── global                        // 挂载到Vue原型上的组件/插件
│   │   ├── table                         // 表格组件
│   ├── pages
│   │   ├── Editor.vue                    // 编辑器路由页
│   │   ├── Manage                        // 管理页面
│   ├── services                          // 接口
```

修改内容：

- [ ] 预览页面使用饿了么重写

- [ ] 添加账户信息编辑页面

- [ ] 添加色调更改功能

- [ ] 侧边栏内容更改

- [ ] 更改页面——关于项目（`/manage/about`）

- [ ] 引入Echarts库

- [ ] 新增图表（直方图）

- [ ] 新增图表（饼图）

- [ ] 新增图表（动态排序柱状图）

- [ ] 新增图表（直方图）

- [ ] 添加回到顶部功能

- [ ] 增加对话框（保存、退出）

- [ ] 使用node搭建服务器

- [ ] 本地服务器匹配数据 [ '/api/project/list' , ‘GET’ , 'page:number' , 'limit:number' ]

  {
  	list: [ { id，coverImg，createAt，createUser，name，updateAt } ]

  ​	total

  }

- [ ] 获取本地列表 [ 
  '/api/file/list' , 'POST' , 

  'classification:number' , 

  'limit:number' , 

  'name:string' , 

  'page:number' ,

  'queryType:number' ,

  'type:number'

  ] 

- [ ] 保存新建的页面[

  '/api/project/save' , 'POST' , 

  fontList: [] ,

  music: { name , url , loop: boolean} ,

  pages: [{

  ​	bg: { url ,x ,y ,height ,naturalHeight ,naturalWidth ,opacity ,url ,width} ,

  ​	coverImg , height , id , type , width , 

  ​	layers: [{

  ​		borderRadius ,height ,hide ,id ,img ,layerName ,left,

  ​		lock ,opacity ,rotate ,top ,type ,width

  ​	}]

  }]

  share: { description , image , title } ,

  directory ,

  id ,

  name

  ]

- [ ] 创建独立分支
  dev-server：本地node服务器

  cpm-set：新增组件



