<template>
  <div>
      <el-row>
      <el-card style="height:50px">
        <p style="text-align:right;margin-top:-7px;margin-right:40px;font-size:18px" v-if="totalFilms!=0">
          您现在浏览的是<span style="color:#0066cc;font-weight:bold">{{' '+search+' '}}</span>相关条目
        </p>
        <p style="margin-top:-7px;margin-right:40px;font-size:18px;text-align:right;" v-else>
            未搜索到<span style="color:#0066cc;font-weight:bold">{{' '+search+' '}}</span>相关条目
        </p>
      </el-card>
    </el-row>
    <el-row v-if="totalFilms!=0">
      <el-col :span="14" :offset="5" style="margin-top:35px">
        <div v-for="(film, index) in films" :key="index">
          <el-row style="padding-top:20px">
            <el-col :span="5">
              <img
                class="poster"
                :src="film.poster"
                :alt="film.title"
                :onerror="replace"
                @click="filmDetail(film.id)"
              />
            </el-col>
            <el-col :span="12" style="text-align:left;margin-top:-20px">
              <div>
                <p class="name" @click="filmDetail(film.id)">
                  {{ film.title}}<span class="language">&nbsp;[{{ film.language }}]</span>
                </p>
                <p class="director"> <span style="font-weight:bold">导演：</span>{{ film.directors }}</p>

                <p class="intro">
                  <span style="font-weight:bold">简介：</span>
                  {{ film.summary }}
                </p>
                <p><span  v-for="(genre,index) in film.genres" :key="index"><el-tag size="small" :type="type[index]">{{genre}}</el-tag>&nbsp;</span></p>
              </div>
            </el-col>
            <el-col :span="7" style="text-align:center">
              <p class="rate" v-if="film.average.length != 0">
                
                {{ "评分："+film.average }}
              </p>
              <p class="ratepeople"  v-if="film.rating_people.length != 0">{{"（评价人数："+ film.rating_people+"）"}}</p>
           <p style="font-size: 15px;" v-if="film.pubdate.length!=0">
                上映时间：<span style="color:cadetblue;font-weight:bold">{{film.pubdate
                }}</span>
              </p> </el-col>
          </el-row>
          <hr class="hr-row" />
        </div>
        <el-row style="margin-top:50px;margin-bottom:50px">
          <el-col align="center">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total,prev, pager, next"
            :total="totalFilms"
          >
          </el-pagination>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "search",
  data() {
    return {
      replace:'this.src="'+require('../assets/replace.jpg')+'"',
      search: "",
      select: "",
      currentPage: 1,
      pages:0,
      totalFilms:0,
      type:["","success","danger","warning",""],
      //筛选后
      searchedList:[],
      //每页
      films:[],
      //全部
      filmList: [],
      leftheight:{
          height:'500px'
      }
    };
  },
  watch:{
    '$route'(to,from){
      this.currentPage=1
        this.init(this.currentPage)
    }
  },
  created() {
      this.init(this.currentPage)
  },
  methods: {
    init(page) {
      const search = this.$route.query.search
      this.search = search
      const select = this.$route.query.select
      this.select = select
      if(this.select==1){//name
        this.searchByName(page)
      }else if(this.select==2){//type
        this.searchByType(page)
      }else if(this.select==3){//country
        this.searchByCountry(page)
      }else{//director
        this.searchByDirector(page)
      }
    },

    searchByName(page) {
      this.$axios
       .get("/api/getFilmByName",{
         params:{
           name:this.search,
           page:page
         }
       }).then(resp => {
       if (resp.status === 200) {
         this.searchedList=resp.data;
         
         this.totalFilms=this.searchedList.splice(-1,1)[0]
         this.films = this.searchedList.filter(function(film){
          film.directors.replace(","," ");

          var types=new Array();
          types=film.genres.split(",");
          film.genres=types;

          return film
        })
      } 
    }).catch(err=>{
      console.log(err)
    });
    },
    searchByType(page) {
      this.$axios
       .get("/api/getFilmByType",{
         params:{
           type:this.search,
           page:page
         }
       }).then(resp => {
       if (resp.status === 200) {
         this.searchedList=resp.data;
         this.totalFilms=this.searchedList.splice(-1,1)[0]
         this.films = this.searchedList.filter(function(film){
          film.directors.replace(","," ");

          var types=new Array();
          types=film.genres.split(",");
          film.genres=types;

          return film
        })
      } 
    }).catch(err=>{
      console.log(err)
    });
    },
    searchByCountry(page) {
      this.$axios
       .get("/api/getFilmByCountry",{
         params:{
           country:this.search,
           page:page
         }
       }).then(resp => {
       if (resp.status === 200) {
        this.searchedList=resp.data;
         
         this.totalFilms=this.searchedList.splice(-1,1)[0]
         this.films = this.searchedList.filter(function(film){
          film.directors.replace(","," ");

          var types=new Array();
          types=film.genres.split(",");
          film.genres=types;

          return film
        })
      } 
    }).catch(err=>{
      console.log(err)
    });
    },
    searchByDirector(page) {
      this.$axios
       .get("/api/getFilmByDirector",{
         params:{
           director:this.search,
           page:page
         }
       }).then(resp => {
       if (resp.status === 200) {
         this.searchedList=resp.data;
         this.totalFilms=this.searchedList.splice(-1,1)[0]
         this.films = this.searchedList.filter(function(film){
          film.directors.replace(","," ");

          var types=new Array();
          types=film.genres.split(",");
          film.genres=types;

          return film
        })
      } 
    }).catch(err=>{
      console.log(err)
    });
    },
    handleCurrentChange(val) {
      this.init(val)
    },
    filmDetail(id) {
      this.$router.push({
        path:'/detail',
        query:{
          id:id
      }})
    },
  },
};
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: antiquewhite;
}
.poster {
  height: 150px;
  width: 110px;
  cursor: pointer;
}
.name{
  font-size: 18px;
  color: #0066cc;
  cursor: pointer;
}
.language{
  margin-top: -10px;
  font-size: 13px;
  color: rgb(104, 103, 103);
  letter-spacing: 5px;
}
.director{
  margin-top: -10px;
  font-size: 13px;
  color: #535351ec;
}
.rate{
  font-size: 20px;
  color: rgb(233, 43, 10);
}
.ratepeople {
  font-size: 13px;
  color: #4e5c99ec;
  margin-top:-5px;
}
.intro {
  font-size: 13px;
  color: #535351ec;
  text-align: left;
  height: 34px;
  width: 370px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.hr-row {
  background-color: rgb(192, 190, 190);
}
</style>
