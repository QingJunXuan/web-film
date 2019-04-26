<template>
  <div>
        <el-row style="height:120px;background-color:#6f89a2">
      <el-col :span="6" :offset="4" style="margin-top:0px">
        <router-link :to="{path :'/'}">
        <p class="slogan">
          The - Movies
        </p>
        </router-link>
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
  watch:{
    '$route' (to,from) {
      this.search=''
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
.slogan {
  font-family: "Times New Roman", Times, serif;
  font-size: 37px;
  font-weight: bolder;
  letter-spacing: 6px;
  color: #fff;
}
.el-select .el-input {
  width: 115px;
  font-size: 14px;
  background-color: #fff;
  color: rgb(34, 34, 34);
}
.el-input .el-input__inner {
  height: 45px;
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active {
  text-decoration: none;
}
</style>
