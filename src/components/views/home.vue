<template>
    <div>
        <HeaderCpm />
        <h1 ref="t" >这是文字</h1>
        <input type="text" v-model="colorCode" @change="getColor">
        <pre>
输入任意数量的十六进制数参数即可改变文字颜色
        </pre>
    </div>
</template>
<script>
import HeaderCpm from '@/components/views/header/index.vue'
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
        HeaderCpm
    },
    methods: {
        getColor(){
            let colorValue = this.colorCode
            if(colorValue.length < 6)
                colorValue = this.handleColorCode(colorValue)
            this.$refs.t.style.color = `#${colorValue}`
        },
        // 处理输入的颜色长度
        handleColorCode(code){
            let size = code.length
            if(!size)
                return "000000"
            else if(size == 3)
                return `${code}${code}`
            else if(size == 2)
                return `${code}${code}${code}`
            else if(size == 1)
                return `${code}${code}${code}${code}${code}${code}`
            else {
                let endCode = code.split("").slice(size - (6 - size ), size ).join("")
                return `${code}${endCode}`
            }
        }
    }
}
</script>
<style scoped>

</style>


