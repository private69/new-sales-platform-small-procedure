<template>
    <div>
        <el-container>
            <el-header>
                <HeaderCpm />
            </el-header>
            <el-main>
                <el-container>
                    <el-aside width="200px">
                        <mainer @changeRouter="changeRouter"/>
                    </el-aside>
                    <el-main>
                        <!-- <component :is="component" /> -->
                        <check />
                    </el-main>
                </el-container>
            </el-main>
            <el-footer>
            </el-footer>
        </el-container>

    </div>
</template>
<script>
import HeaderCpm from '@/components/views/header/index.vue'
import mainer from '@/components/views/mainer/index.vue'
import check from "@/components/views/checkDo/check.vue"
import colorProcess from "@/components/common/colorProcess/index.vue"
export default {
    name: "home",
    data(){
        return {
            component: ""
        }
    },
    created(){
        this.component = "check"
    },
    components: {
        HeaderCpm,
        mainer,
        check,
        colorProcess
    },
    methods: {
        changeRouter(cpm){
            this.component = cpm
        }
        
    }
}
</script>
<style scoped>

</style>


