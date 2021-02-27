<template>
    <div>
        <div class="views-header">
            <span></span>
            <span
                v-for="(item , index) in data"
                :key="index"
            >
             <span class="header-menus">
                 {{item.name}}
             </span>
            </span>
        </div>
    </div>
</template>
<script>
import headerMenus from './index.js'
export default {
    name: "header",
    data(){
        return {
            data: headerMenus
        }
    },
    created(){}
}
</script>
<style>
.views-header {
    width: 100%;
    /* height: 100px; */
    background-color: #999
}
.header-menus {
    display: inline-block;
    width: 10%;
    height: 50px;
    line-height: 50px;
}
</style>

