<template>
    <div>
        <el-menu>
            <el-submenu 
            v-for= "(item , index) in list"
            :key= "index"
            :index= "item.index || index+1"
            @click.native="action(item)"
            >
                <template slot="title">
                    <i v-if="item.icon" :class="item.icon"></i>
                    {{ item.name }}
                </template>
                <el-menu-item-group v-show="item.child">
                    <el-menu-item 
                    v-for=" (child , index) in item.child"
                    :key= "index"
                    :index= "child.index || (index + 1  + '-' + index + 1)"
                    >
                        <i v-if="child.icon" :class="child.icon"></i>
                        {{child.name}}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: "el-menus",
    props: {
        // 列表数据
        list: {
            type: Array,
            default: []
        },
        keyWords: {
            type: String,
            default: ''
        }
    },
    methods: {
        // 增加行为
        action(item){
            this.$emit('pushInStore', item)
            if(this.keyWords == "push") this.jump(item);
        },
        jump(item) {
            if(item.path != this.$route.fullPath){
                console.log("当前路由：" ,this.$route.fullPath , item.path);
                this.$emit('changeRouter', item.path)
            }
        }
    },
}
</script>
<style scoped>

</style>

