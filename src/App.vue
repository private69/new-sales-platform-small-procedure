<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
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
                        <router-view />
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
export default {
  name: 'App',
  components: {
    HeaderCpm,
    mainer
  },
  methods: {
      changeRouter(path){
          this.$router.push(path)
      }
      
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
