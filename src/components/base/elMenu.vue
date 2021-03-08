<template>
    <div>
        <el-menu
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeColor"
        :collapse="$store.state.folder"
        class="el-menu-vertical-demo"
        >
            <el-submenu 
            v-for= "(item , index) in list"
            :key= "index"
            :index= "item.index || index+1"
            @click.native="action(item)"
            >
                <template slot="title">
                    <i v-if="item.icon" :class="item.icon"></i>
                    <span slot="title">{{ item.name }}</span>
                </template>
                <el-menu-item-group v-show="item.child">
                    <el-menu-item 
                    v-for=" (child , index) in item.child"
                    :key= "index"
                    :index= "child.index || (index + 1  + '-' + index + 1)"
                    >
                        <i v-if="child.icon" :class="child.icon"></i>
                        <span slot="title">{{ child.name }}</span>
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
        },
        backgroundColor: {
            type: String,
            default: "#FFF"
        },
        textColor: {
            type: String,
            default: "#000"
        },
        activeColor: {
            type: String,
            default: "#CCC"
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    /* min-height: 400px; */
}
.el-menu-vertical-demo{
    height: 100vh;
    width: 60px;
    background-color: #232323;
}
</style>

