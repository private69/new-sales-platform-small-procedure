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

## 修改内容：

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
  
- [ ] 组件拖拽的实现方式

- [ ] 新手指引页面（使用折叠面板）

- [ ] 新手指引页面（使用Steps 步骤条演示操作流程s）

- [ ] 关于项目（使用时间线）

- [ ] 新增错误页面

- [ ] 添加页面分布引导（driver.js）

- [ ] 开发vs插件

## 组件库：

### echarts：

安装：

```
npm install echarts --save
```

引入：

```
// main.js
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts
```

`chart = this.$echarts.init(document.getElementById(this.id))`

通用样式：

```general
itemStyle: {
    // 阴影的大小
    shadowBlur: 200,
    // 阴影水平方向上的偏移
    shadowOffsetX: 0,
    // 阴影垂直方向上的偏移
    shadowOffsetY: 0,
    // 阴影颜色
    shadowColor: 'rgba(0, 0, 0, 0.5)'
},
// 直角坐标系
grid: {},
// 极坐标系
polar: {},
series: [
	{
		renderItem:function(params,api){
			// 开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
			// params：包含数据信息以及坐标系信息
			// api：开发者可调用的方法集合
		}
	}

]
```

事件监听：

```
chart.on('click', {element: 'aaa'}, function (params) {
    // 当 name 为 'aaa' 的图形元素被点击时，此回调被触发。
    console.log(params.info);
});
```

异步加载：

```
// loading动画
chart.showLoading(); // 加载动画
chart.hideLoading(); // 隐藏加载动画
// 先设置完其它的样式，显示一个空直角坐标轴，然后获取数据后填入数据
chart.setOption({
	title: {}, // 图表标题
	tooltip: {}, // 提示信息
	legend: {}, // 种类描述
	xAxis: {}, // 横轴数据
	yAxis: {}, // 纵轴数据
	series: [] // 所有类别的具体数值
})
```

图表类型：

```
series: [{
		type:""
	}]
/**
* pie——饼图
* bar——直方图
* sunburst——旭日图
* custom——个人定义图
* radar——雷达图
* line——折线图
*/
```

- 饼图：

  ```series对象
  // 标签属性
  label：{ 
  	normal: {
  		// 文本的样式
  		textStyle: { 
  			color:""
  		}
  	}
  }
  // 标签直线属性
  labelLine: {
  	normal: {
  		// 连接线的样式
  		lineStyle: {
  			color: ""
  		}
  	}
  }
  roseType: "angle"
  ```

- 折线图

  ```
  xAxis: {
  	data: [], // 横轴
      boundaryGap: false/true, // 边界间隙（false指紧靠y轴）
      axisTick: {
      	show: false/true // 
      }
  },
  // 位置信息
  grid: {
  	left: , right: , top: , bottom: ,containLabel: ,
  },
  tooltip:{},
  series:[
  	{
  		name: "",
  		smooth: false/true, // 折线获取为曲线
  		type: "line",	
  		data: [],
  		animationDuring: , // 动画持续时间
  		animationEasing: "quadraticOut"
  	}
  ]
  ```

  

- 雷达图

  ```
  radar: {
  	radius: "", // 控制绘制的整个图表的尺寸
  	center: [], // 位置信息
  	splitNumber: , // 雷达图的绘制线条的数量
  	splitArea: { // 雷达图的样式
  		areaStyle: {
  			color: "",
  			shadowBlur: , // 脱焦时雷达图的阴影
  			shadowColor: "", // 雷达图阴影的颜色
  			shadowOffsetX: , // 图形的横向阴影偏移量
  			shadowOffsetY: , // 图形的纵向阴影偏移量
  		}
  	},
  	// 雷达图每一边角的名称以及最大值
  	indicate: [
  		{name: "", max:}....
  	],	
  },
  series: {
  	type: "raddar",
  	symbolSize: 0, // 每一边角点的尺寸
  	areaStyle: {
  		normal: {
  		
  		}
  	},
  	data: [],
  	animationDuration: , // 动作持续时间
  }
  ```

  

```
// 将数值的大小映射到明暗度
visualMap: {
    // 不显示 visualMap 组件，只用于明暗度的映射
    show: false,
    // 映射的最小值为 80
    min: 80,
    // 映射的最大值为 600
    max: 600,
    inRange: {
        // 明暗度的范围是 0 到 1
        colorLightness: [0, 1]
    }
}
```



