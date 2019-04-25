<template>
  <div id="app">
        <el-row style="height:120px;background-color:#6f89a2">
      <el-col :span="4" :offset="5" style="margin-top:0px">
        <p class="slogan">
          The - Movies
        </p>
      </el-col>
      <el-col :span="9" :offset="1" style="margin-top:40px;padding-left:25px">
        <el-input
          placeholder="请输入内容"
          v-model="search"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="电影名称" value="1"></el-option>
            <el-option label="类型" value="2"></el-option>
            <el-option label="国家" value="3"></el-option>
            <el-option label="导演" value="4"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="searchFilm"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      search: "",
      select: "1",
    }
  },
  methods:{
    searchFilm(){
      this.$router.push({
        path:'/search',
        query:{
          search:this.search,
          select:this.select,
        }
      })
    },
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  padding:0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
