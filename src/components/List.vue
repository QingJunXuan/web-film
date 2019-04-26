<template>
  <div>
      <el-col :span="14" :offset="5">
        <div>
          <h1 style="margin-top:40px;padding-bottom:10px;text-align:center">
            TOP 200 MOVIES
          </h1>
          <hr class="hr-row" />
        </div>
        <div v-for="(film, index) in films" :key="index">
          <el-row style="padding-top:20px">
            <el-col :span="4" style="padding-left:10px">
              <img
                class="poster"
                :src="film.poster"
                :alt="film.title"
                @click="filmDetail(film._id)"
              />
            </el-col>
            <el-col :span="11" :offset="1" style="text-align:left;margin-top:-20px">
              <div>
                <p class="name" @click="filmDetail(film._id)">
                  {{ film.title
                  }}<span class="language"
                    >&nbsp;[{{ film.languages[0] }}]</span
                  >
                </p>
                <p class="director">
                  <span style="font-weight:bold">导演：</span
                  >{{ film.directors[0].name }}
                </p>

                <p class="intro">
                  <span style="font-weight:bold">简介：</span>
                  {{ film.summary }}
                </p>
                <p>
                  <span v-for="(genre, index) in film.genres" :key="index">
                    <el-tag size="small" :type="type[index]">
                      {{ genre }} </el-tag>
                      &nbsp;
                  </span>
                </p>
              </div>
            </el-col>
            <el-col :span="7" :offset="1" style="text-align:center">
              <p class="rate" v-if="film.rating.average.length != 0">
                
                {{ "评分："+film.rating.average }}
              </p>
              <p class="ratepeople" v-if="film.rating.rating_people.length != 0">
                {{ "（评价人数："+film.rating.rating_people +"）"}}
              </p>
              <p class="pubdate" v-if="film.pubdate[0].length != 0">
                上映时间：<span style="color:cadetblue;font-weight:bold">{{
                  film.pubdate[0]
                }}</span>
              </p>
            </el-col>
          </el-row>
          <hr class="hr-row" />
        </div>
        <el-row style="margin:50px auto">
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "list",
  data() {
    return {
      search: "",
      select: "1",
      currentPage: 0,
      pages: 0,
      totalFilms: 0,
      type: ["", "success", "danger", "warning", ""],
      //每页
      films: [],
      //全部
      filmList: [],
      leftheight: {
        height: "500px"
      }
    };
  },
  created() {
    axios.get("/api/films.json").then(resp => {
      if (resp.status === 200) {
        this.filmList = resp.data.sort(
          this.compare("rating", "average", false)
        );
        this.totalFilms = this.filmList.length;
        this.films = this.filmList.slice(0, 10);
      }
    }).catch(err=>{
      console.log(err)
    });
  },
  methods: {
    compare(property1, property2) {
      return function(a, b) {
        var value1 = a[property1][property2];
        var value2 = b[property1][property2];
        return value2 - value1;
      };
    },
    handleCurrentChange(val) {
      this.films = this.filmList.slice((val - 1) * 10, val * 10);
    },
    filmDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id
        }
      });
    },
    searchFilm() {
      this.$router.push({
        path: "/search",
        query: {
          search: this.search,
          select: this.select
        }
      });
    }
  }
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
  height: 90%;
  width: 90%;
 /*  height: 160px; */
  /* width: 110px; */
  cursor: pointer;
}
.name {
  font-size: 18px;
  color: #0066cc;
  cursor: pointer;
}
.language {
  margin-top: -10px;
  font-size: 13px;
  color: rgb(104, 103, 103);
  letter-spacing: 5px;
}
.director {
  margin-top: -10px;
  font-size: 13px;
  color: #535351ec;
}
.rate {
  font-size: 20px;
  color: rgb(233, 43, 10);
}
.ratepeople {
  font-size: 13px;
  color: #4e5c99ec;
  margin-top: -5px;
}
.pubdate {
  font-size: 15px;
}
.intro {
  font-size: 13px;
  color: #535351ec;
  text-align: left;
  height: 33px;
  width: 367px;
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
