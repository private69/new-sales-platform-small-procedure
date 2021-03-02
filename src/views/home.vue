<template>
    <div>
        <check />
    </div>
</template>
<script>

import check from "@/views/checkDo/check.vue"
export default {
    name: "home",
    data(){
        return {
            component: ""
        }
    },
    created(){
    },
    components: {
        check
    }
}
</script>
<style scoped>

</style>


