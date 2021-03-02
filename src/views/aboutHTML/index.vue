<template>
    <div>
        <menus 
        :list= "list"
        :keywords="keywords"
        />
    </div>
</template>
<script>
import list from './index.js'
export default {
    name: "aboutHTML",
    components: {
    },
    data(){
        return {
            list: list,
            keywords: "push" // 查看html 的标签解释
        }
    }
}
</script>
<style scoped>

</style>

