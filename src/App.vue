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
                      <el-container>
                        <el-header>
                          <div class="el-global__tags" v-if="$store.state.tagsList">
                              <Eltags 
                              @changeRouter= "changeRouter"
                              :list = "$store.state.tagsList"
                              />
                          </div>
                        </el-header>
                        <el-main>
                          <router-view />
                        </el-main>
                      </el-container>
                        <!-- <component :is="component" /> -->
                    </el-main>
                </el-container>
            </el-main>
            <el-footer>
            </el-footer>
        </el-container>
  </div>
</template>

<script>
import HeaderCpm from '@/views/header/index.vue'
import mainer from '@/views/mainer/index.vue'
export default {
  name: 'App',
  components: {
    HeaderCpm,
    mainer
  },
  methods: {
      changeRouter(path){
        console.log(this.$route.path);
        if(this.$route.path === path) return ;
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
.el-main {
  padding: 0;
  margin: 0;
}
</style>
