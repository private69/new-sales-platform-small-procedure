<template>
    <div>
        <Elcard :list = "list"/>
    </div>
</template>
<script>
import data from './browse.js'
export default {
    name: "browse",
    data(){
        return {
            list: data
        }
    },
    created(){
        console.log(this.list);
    }
}
</script>
<style scoped>

</style>

