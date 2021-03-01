<template>
    <div>
        <menus 
        :list= "data"
        :keyWords= "keyWords"
        @changeRouter= "changeRouter"
        />
    </div>
</template>
<script>
import mainer from './index.js'
export default {
    name: "mainer",
    data(){
        return {
            data: mainer,
            keyWords: "push" // 关键字：跳转路由
        }
    },
    components: {
    },
    methods: {
        changeRouter(path){
            console.log(path);
            // this.$emit('changeRouter', path)
            this.$router.push(path)
        }
    }
}
</script>
<style scoped>

</style>

