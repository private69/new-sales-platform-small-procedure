<template>
  <div id="app">
    <router-view v-if="!$store.state.login"/>
    <!-- <img src="./assets/logo.png"> -->
            <!-- <el-header>
                <HeaderCpm />
            </el-header> -->
    <el-container v-else class="el-app__main">
        <el-aside  class="el-app-main__aside">
            <mainer @changeRouter="changeRouter"/>
        </el-aside>
        <el-main>
          <el-container>
            <el-header class="el-app__header">
              <div style="padding: 1vh 0;" @click="openFolder()">
                <navigation>
                  <span slot="main">cunocaoid</span>
                </navigation>
              </div>
              <div class="el-app__tags" v-if="$store.state.tagsList.length">
                  <Eltags 
                  @changeRouter= "changeRouter"
                  :list = "$store.state.tagsList"
                  />
              </div>
            </el-header>
            <el-main style="margin-top:2vh;">
              <router-view />
            </el-main>
          </el-container>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderCpm from '@/views/header/index.vue'
import mainer from '@/views/mainer/index.vue'
import navigation from '@/components/common/navigation.vue'
export default {
  name: 'App',
  components: {
    HeaderCpm,
    mainer,
    navigation
  },
  data(){
    return {
      routeStatus: ''
    }
  },
  methods: {
      changeRouter(path){
        console.log(this.$route.path);
        if(this.$route.path === path) return ;
        this.$router.push(path)
      },
      // 打开关闭折叠
      openFolder(){
        console.log(this.$store.state.folder);
        this.$store.state.folder = !this.$store.state.folder
      },
  },
  mounted(){
    console.log(this.$route.path);
    // 检测当前路由与登录状态
    if(this.$route.path !== '/' || !this.$store.state.login){
      this.$router.replace('/');
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
.el-app__header {
  padding: 0;
  margin: 1vh 0;
}
.el-app__main {
  width: 100vw;
  height: 100vh;
}
/* 避免导航菜单折叠后，右方元素无法向左靠拢的问题 */
.el-app-main__aside {
  width: auto !important;
}
.el-app__tags {
  display: flex;
  border: 0.3vw solid #666;
  box-shadow: 0 0 4px 2px #dedede inset;
  text-align: left;
}
</style>
