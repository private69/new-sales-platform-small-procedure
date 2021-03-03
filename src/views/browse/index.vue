<template>
    <div>
        <Elcard :list = "list"/>
        <p class="aa"></p>
    </div>
</template>
<script>
import data from './browse.js'
export default {
    name: "browse",
    data(){
        return {
            list: data
        }
    },
    created(){
        console.log(this.list);
    },
    mounted(){
        // 测试文档对象
        console.log(document.getElementsByClassName("aa")[0]);
    }
}
</script>
<style scoped>

</style>

