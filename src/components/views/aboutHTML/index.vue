<template>
    <div>
        <menus 
        :list= "list"
        :keywords="keywords"
        />
    </div>
</template>
<script>
import menus from '@/components/common/elMenu.vue'
import list from './index.js'
export default {
    name: "aboutHTML",
    components: {
        menus
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

