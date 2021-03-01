<template>
    <div>
        <el-col
        :span="7"
        v-for="(item , index ) in list"
        :key="index"
        style="margin:10px;"
        >
            <el-card shadow="hover" align="center">
                <div class="el-card__img">
                    <img v-if="item.picImg" :src="item.picImg" alt="error">
                </div>
                <span>{{ item.name }}</span>
                <div>
                    <div class="el-card__time">
                        <span style="float:left;line-height:36px;">{{ item.time || getTime }}</span>
                        <el-button type="text" style="float:right;" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
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
        }
    },
    computed: {
        getTime(){
            return new Date();
        }
    },
    methods: {
    },
}
</script>
<style scoped>
.el-card__img {
    width: 140px;
    height: 180px;
    margin-bottom: 10px;
    border: 1px solid #999;
}
.el-card__time{
    /* text-align: left; */
}
.el-card__time .button {
    text-align: right;
}
</style>

