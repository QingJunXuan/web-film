<template>
  <div>
    <el-row>
      <el-col :span="14" :offset="5" style="margin-top:35px">
        <div>
          <h3>
            TOP 200 MOVIES
          </h3>
          <hr class="hr-row" />
        </div>
        <div v-for="(film, index) in films" :key="index">
          <el-row style="padding-top:20px">
            <el-col :span="5">
              <img
                class="poster"
                :src="film.poster"
                @click="filmDetail(film._id)"
              />
            </el-col>
            <el-col :span="12" style="text-align:left;margin-top:-20px">
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
            <el-col :span="7">
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
        <el-row style="margin:50px 0px">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total,prev, pager, next"
            :total="totalFilms"
          >
          </el-pagination>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
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
      filmList: [
        {
          _id: "1299731",
          directors: [{ name: "马丁·里特", id: "1032478" }],
          genres: ["剧情", "动作", "西部"],
          season_count: "",
          rating: {
            average: "8.0",
            rating_people: "145",
            stars: ["24.0", "53.8", "19.2", "2.9", "0.0"]
          },
          pubdate: ["1967-03-21"],
          countries: ["美国"],
          lens_id: 5435,
          casts: [
            { name: "保罗·纽曼", id: "1054516" },
            { name: "弗雷德里克·马奇", id: "1049865" },
            { name: "理查德·布恩", id: "1019098" },
            { name: "黛安妮·赛琳托", id: "1027409" },
            { name: "卡梅隆·米切尔", id: "1041239" }
          ],
          title: "野狼 Hombre",
          site: "",
          poster: "https://img3.doubanio.com/lpic/s2555801.jpg",
          summary:
            "约翰·罗塞尔自幼是老罗塞尔先生从战俘中带回来并抚养他长大的，但是他生性豪放不羁，又回到土著人的中间，在茫茫山野间生活。直到老人去世时，留给他自己的一处房子，那里现在是一家旅馆，由能乾的杰茜经营。老人希望他回到白人中间，用英语思考问题。他却将房子变卖，杰茜只好回家。他们一行人从旅馆出发，一同乘坐马车的还有医生夫妇以及强行霸占别人位置的弗兰克。他们担心路上不安全，改走一条废弃的山路，却遭到一伙人的袭击，原来弗兰克是劫匪中的成员，目的是医生携带的不义之财。这伙人打破了他们的水袋，劫走了医生的妻子做人质。匆忙间，劫匪们遗失了钱袋，他们要用医生妻子换钱袋。胆小的医生不敢前去，一任妻子在炎炎烈日下呻吟。带领大家对付劫匪的罗塞尔冒死前往，在腹背受敌的不利情况下，只身对敌，为了营救他人与匪徒同归于尽。",
          languages: ["英语"],
          episodes: "",
          writers: [
            { name: "埃尔莫·伦纳德", id: "1027969" },
            { name: "Harriet Frank Jr.", id: "search" },
            { name: "欧文·拉文奇", id: "1042352" }
          ],
          imdb: "tt0061770",
          year: "1967",
          duration: "111",
          douban_site: "",
          aka: [""]
        }
      ],
      leftheight: {
        height: "500px"
      }
    };
  },
  created() {
    axios.get("/static/films.json").then(resp => {
      console.log(resp, "filmlist");
      //response = response.body;
      if (resp.status === 200) {
        this.filmList = resp.data.sort(
          this.compare("rating", "average", false)
        );
        this.totalFilms = this.filmList.length;
        this.films = this.filmList.slice(0, 10);
        console.log(this.films, "fimls");
      }
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: antiquewhite;
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
.headCard {
  height: 50px;
  width: 100%;
  margin-top: -7px;
  border-bottom: 2px solid #ddd;
}
.leftType {
  margin-bottom: -5px;
  cursor: pointer;
}
.leftType:hover {
  color: coral;
}
.poster {
  height: 150px;
  width: 110px;
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
