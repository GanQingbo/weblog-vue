<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-row >
            <el-col :span="3"><div class="grid-content bg-purple">
              <el-menu-item index="/">博客首页</el-menu-item>
            </div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">
              <el-menu-item index="/users">我的文章</el-menu-item>
            </div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">
              <el-menu-item index="/newArticle">新建文章</el-menu-item>
            </div></el-col>
            <el-col :span="3":offset="12"><div class="grid-content bg-purple-light">
              <el-menu-item index="/login">登录</el-menu-item>
            </div></el-col>
          </el-row>
        </el-menu>
      </el-header>
      <el-main>
        <!--路由展示-->
        <router-view></router-view>
      </el-main>
    </el-container>
  <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key);
    }
  }
}
</script>
<!--app.vue作为主组件在main.js中被使用，可以调用其他组件来构建页面-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
