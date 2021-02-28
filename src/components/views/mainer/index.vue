<template>
    <div>
        <el-menu>
            <el-submenu 
            v-for= "item in data"
            :key= "item.index"
            :index= "item.index"
            @click.native="jump(item)"
            >
                <template slot="title">
                    <i :class="item.icon"></i>
                    {{ item.name }}
                </template>
                <el-menu-item-group v-show="item.child">
                    <el-menu-item 
                    v-for=" child in item.child"
                    :key= "child.index"
                    :index= "child.index"
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
import mainer from './index.js'
export default {
    name: "mainer",
    data(){
        return {
            data: mainer
        }
    },
    methods: {
        jump(item) {
            console.log(item);
            if(item.component)
                this.$emit('changeRouter', item.component)
        }
    }
}
</script>
<style scoped>

</style>

