<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="2" @click="leftClick">
                <span class="el-icon-s-fold"></span>
            </el-col>
            <el-col :span="18">
                <slot name="main">aaaa</slot>
            </el-col>
            <el-col :span="2"><span class="el-icon-share"></span></el-col>
            <el-col :span="2"><span class="el-icon-s-custom"></span></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "navigation",
    methods: {
        leftClick(){

        }
    }
}
</script>
<style scoped>

</style>

