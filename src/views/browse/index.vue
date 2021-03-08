<template>
    <div>
        <Elcard :list = "list" v-if="list.length"/>
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
    },
    mounted(){
    }
}
</script>
<style scoped>

</style>

