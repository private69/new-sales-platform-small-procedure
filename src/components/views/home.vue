<template>
    <div>
        <el-container>
            <el-header>
                <HeaderCpm />
            </el-header>
            <el-main>
                <el-container>
                    <el-aside width="200px">
                        <mainer />
                    </el-aside>
                    <el-main>
                        <!-- <h5 ref="t" >这是文字</h5>
                        <input type="text" v-model="colorCode" @change="getColor">
                        <pre>
        输入任意数量的十六进制数参数即可改变文字颜色
                        </pre> -->
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
import { handleColorCode } from '@/components/common/public/handlecolor'
export default {
    name: "home",
    data(){
        return {
            colorCode: ""
        }
    },
    created(){
    },
    components: {
        HeaderCpm,
        mainer,
        check
    },
    methods: {
        getColor(){
            let colorValue = this.colorCode
            if(colorValue.length < 6)
                colorValue = handleColorCode(colorValue)
            else colorValue = colorValue.slice(0,6)
            this.$refs.t.style.color = `#${colorValue}`
            console.log(colorValue);
            this.colorCode = ""
        },
        
    }
}
</script>
<style scoped>

</style>


