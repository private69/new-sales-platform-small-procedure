<template>
    <div>
        <!-- 
            type        -类型 success/info/warning/danger
            closable    -是否可关闭
            hit         -是否有边框描边
            color       -背景色
            size        -尺寸 medium/small/mini
            effect      -主题 dark/light/plain
         -->
        <el-tag
        class="el-tag__base"
        v-for="(item ,index ) in list"
        :key= "index"
        closable
        :type= "item.path !== $route.path?'info':'primary'"
        @close= "closeTags(index)"
        @click.native = "handleClick(item)"
        hit
        >
        <i v-if="item.path == $route.path" class="el-icon-mouse"></i>
        {{ item.name }}
        </el-tag>
    </div>
</template>
<script>
export default {
    name: "elTags",
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            storeName: [],
            data: []
        }
    },
    watch: {
        list:{
            handler(newVal){
                if(!newVal.length) return ;
                this.clearRepeat(newVal)
            },
            deep: true,
        }
    },
    methods: {
        closeTags(index) {
            let NowPath = this.$store.state.tagsList[index].path
            this.$store.state.tagsList.splice(index,1);
            // 关闭当前活跃的页面时，返回主页面
            if(this.$route.path === NowPath) this.$router.replace('/browse')
        },
        // 数据排重
        clearRepeat(newVal){
            this.storeName = []
            newVal.forEach( item => {
                this.storeName.push(item.name)
            })
            console.log(this.storeName);
            this.storeName.forEach( (item ,index)=> {
                let indexof = this.storeName.indexOf(item)
                // console.log(index);
                if(indexof+1 && indexof !== index) newVal.splice(index,1)
            })
            console.log(newVal);
            this.data = newVal
        },
        handleClick(item) {
            // 路由处理
            if(item.path) {
                this.$emit('changeRouter',item.path)
            }
        }
    },
    mounted(){
        // 数据排重
        // if(!this.list.length) return ;
        // this.list.forEach( item => {
        //     this.storeName.push(item.name)
        // })
        // this.storeName.forEach( (ele,index) => {
        //     if(this.storeName.lastIndexOf(ele) != -1){
        //         this.list.splice(this.storeName.lastIndexOf(ele),1)
        //     }
        // })
        this.data = this.list
    }
}
</script>
<style scoped>
.el-tag__base {
    cursor: pointer;
}
</style>

