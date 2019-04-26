<template>
  <div>
      <el-row>
      <el-card style="height:50px">
        <p style="text-align:right;margin-top:-7px;margin-right:40px;font-size:18px" v-if="totalFilms!=0">
          您现在浏览的是<span style="color:#0066cc;font-weight:bold">{{' '+search+' '}}</span>相关条目
        </p>
        <p style="margin-top:-7px;margin-right:40px;font-size:18px" v-else>
            未搜索到相关条目
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
                @click="filmDetail(film._id)"
              />
            </el-col>
            <el-col :span="12" style="text-align:left;margin-top:-20px">
              <div>
                <p class="name" @click="filmDetail(film._id)">
                  {{ film.title}}<span class="language">&nbsp;[{{ film.languages[0] }}]</span>
                </p>
                <p class="director"> <span style="font-weight:bold">导演：</span>{{ film.directors[0].name }}</p>

                <p class="intro">
                  <span style="font-weight:bold">简介：</span>
                  {{ film.summary }}
                </p>
                <p><span  v-for="(genre,index) in film.genres" :key="index"><el-tag size="small" :type="type[index]">{{genre}}</el-tag>&nbsp;</span></p>
              </div>
            </el-col>
            <el-col :span="7">
              <p class="rate">
                
                {{ "评分："+film.rating.average }}
              </p>
              <p class="ratepeople">{{"（评价人数："+ film.rating.rating_people+"）"}}</p>
           <p class="pubdate" v-if="film.pubdate[0].length!=0">
                上映时间：<span style="color:cadetblue;font-weight:bold">{{film.pubdate[0]
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
      search: "",
      select: "",
      currentPage: 0,
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
        this.init()
    }

  },
  created() {
      this.init()
  },
  methods: {
    init() {
      const search = this.$route.query.search
      this.search = search
      const select = this.$route.query.select
      this.select = select
        axios.get('/static/films.json')
        .then((resp) => {
          if (resp.status === 200) {
            
            this.filmList = resp.data
            if(this.select==1){
                this.searchedList = this.searchByName(this.filmList,this.search)
            }else if(this.select==2){
                this.searchedList=this.filmList.filter(function(film){
                    var length = film.genres.length
                    for(var i=0;i<length;i++){
                        if(film.genres[i]==search){
                            return film
                        }
                    }
                })
            }else if(this.select==3){
                this.searchedList=this.filmList.filter(function(film){
                    var length = film.countries.length
                    for(var i=0;i<length;i++){
                        if(film.countries[i]==search){
                            return film
                        }
                    }
                })
            }else if(this.select==4){
                this.searchedList=this.filmList.filter(function(film){
                    var length = film.directors.length
                    for(var i=0;i<length;i++){
                        if(film.directors[i].name==search){
                            return film
                        }
                    }
                })
            }
            this.searchedList=this.searchedList.sort(this.compare('rating','rate'))
            this.films=this.searchedList.slice(0,10)
            this.totalFilms = this.searchedList.length 
          } 
        });
      },
 
    compare(property1,property2){
      return function(a,b){
        var value1=a[property1][property2]
        var value2=b[property1][property2]
        return value2-value1
      }
    },
    searchByName(list, keyWord) {
    var reg =  new RegExp(keyWord);
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if (reg.test(list[i].title)) {
        arr.push(list[i]);
      }
    }
    return arr;
  },
    handleCurrentChange(val) {
      this.films=this.searchedList.slice((val-1)*10,val*10)
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
<style>
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
.pubdate {
  font-size: 15px;
}
.intro {
  font-size: 13px;
  color: #535351ec;
  text-align: left;
  height: 33px;
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
