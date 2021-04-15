<template>
    <div class="el-new__guide">
      <el-steps
      :active="active"
      finish-status="success"
      >
        <el-step 
        v-for="(item , index) in steps" 
        :key="index"
        :title="item.title" 
        :description="item.description"
        ></el-step>
      </el-steps>
      <el-collapse 
      v-model="activeNames"
      @change="handleChange"
      accordion
      >
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          <el-collapse accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
        <el-collapse-item title="一致性 Consistency" name="2">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="一致性 Consistency" name="3">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
      </el-collapse>
      
      <el-button @click="showTips">
        新手指引
      </el-button>
      <div :id="id" :style="{width:width,height:height}"></div>
      <fieldset>
        <legend>拖拽至容器一</legend>
        <draggable 
        v-model="list" 
        :options="{ group:{name:'site' , pull:'clone'} }"
        animation="500"
        @sort="onstart"
        >
          <div v-for="(item , index) in list" :key="index">
            {{item.name}}
          </div>
          <el-button slot="footer">点击</el-button>
        </draggable>
      </fieldset>
      <fieldset>
        <legend>容器一</legend>
        <draggable 
        v-model="list2" 
        group="site"
        animation="500"
        @start="onstart"
        >
          <div v-for="(item , index) in list2" :key="index">{{item.name}}</div>
        </draggable>
      </fieldset>
      <!-- 组件拖拽 -->
      <fieldset>
        <legend>拖拽组件至容器二</legend>
        <draggable 
        chooseClass=".all"
        :options="{ group:{name:'allSite' , pull:'clone'} }"
        animation="500"
        >
          <div class="all">
            <div v-for="(item , index) in list" :key="index">{{item.name}}</div>
          </div>
        </draggable>
      </fieldset>
      <fieldset>
        <legend>容器二</legend>
        <draggable 
        chooseClass=".all"
        group="allSite"
        animation="500"
        >
          <div class="all">
            <div v-for="(item , index) in list2" :key="index">{{item.name}}</div>
          </div>
        </draggable>
      </fieldset>
    </div>
</template>
<script>
import list from './list.js'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import draggable from 'vuedraggable'
// import echarts from 'echarts'
export default {
    name:"list",
    components: {
      draggable: draggable
    },
    data(){
      return {
        draggableValue: '',
        activeNames: '0',
        active: 0,
        steps: list.steps,
        id:"chart",
        width:"500px",
        height: "300px",
        driver: null,
        list: [
          {
            group: "list",
            name: "第一"
          },
          {
            group: "list",
            name: "第二"
          },
          {
            group: "list",
            name: "第三"
          },
        ],
        list2: [
          {
            group: "list",
            name: "第一"
          },
          {
            group: "list",
            name: "第二"
          },
          {
            group: "list",
            name: "第三"
          },
          {
            group: "list",
            name: "第四"
          },
        ]
      }
    },
    methods:{
      onstart(item){
        console.log(item);
      },
      handleChange(val){
        console.log(val);
        this.active = Number(val)
      },
      // 绘制图表
      paint(){
        // let id = document.getElementById(this.id)
        const chart = this.$echarts.init(document.getElementById(this.id))
        chart.setOption({
          title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [{
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],

        })
      },
      showTips(){
        // console.log(list.driver);
        this.driver.defineSteps(list.driver)
        this.driver.start()
      }
    },
    mounted(){
      this.driver = new Driver({
        onReset: ele => {
          console.log(this.driver.getSteps());
          console.log(this.driver.getSteps()[this.driver.getSteps().length-1] == ele ); // true
        }
      })
      this.paint()
      console.log( document.getElementById('el-menu__wrapper') )
    }
}
</script>
<style>
.el-new__guide .el-collapse-item__content {
  padding-left: 10px;
  padding-right: 10px;
}
/* 隐藏关闭按钮 */
[class*="driver-close-btn"] {
    /* visibility: hidden; */
    display: none;
}
/* 隐藏上一步按钮  */
/* [class*="driver-prev-btn"] {
    visibility: hidden;
} */
</style>
