<template>
    <div>
        <h5 ref="t" >{{text}}</h5>
        <input type="text" v-model="colorCode" @change="getColor">
        <pre>
输入任意数量的十六进制数参数即可改变文字颜色
        </pre>
    </div>
</template>
<script>
import { handleColorCode } from '@/components/common/colorProcess/handleColor'
export default {
    name: "colorPicker",
    props:{
        colorText:{
            type: String,
            default: "这是文本"
        }
    },
    data(){
        return {
            text:"",
            colorCode: ""
        }
    },
    mounted(){
        this.text = this.colorText
    },
    getColor(){
        let colorValue = this.colorCode
        // 文本长度处理颜色
        if(colorValue.length < 6) colorValue = handleColorCode(colorValue)
        else colorValue = colorValue.slice(0,6)
        this.$refs.t.style.color = `#${colorValue}`
        console.log(colorValue);
        this.colorCode = ""
    },
}
</script>
<style scoped>

</style>

