<template>
    <div>
        <div 
        id="el-base__baseCharts"
        :style="'width:' + width + ';' + 'height:' + height"
        ></div>
    </div>
</template>
<script>
export default {
    name: "baseCharts",
    props: {
        width:{
            type: String,
            default: "120vw"
        },
        height: {
            type: String,
            default: "50vh",
        },
        list: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return {
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    },
    mounted(){
        const baseChart = document.getElementById("el-base__baseCharts")
        console.log(baseChart);
        const myChart = this.$echarts.init(baseChart)
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
    }
}
</script>
<style scoped>

</style>

