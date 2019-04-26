<template>
  <el-row>
    <el-row>
      <el-card style="height: 50px;width: 100%;margin-top: -7px;border-bottom: 2px solid #ddd">
        <p style="text-align:right;margin-top:-7px;margin-right:40px">
          您现在浏览的是
          <span style="color:#0066cc;font-weight:bold">{{' '+film.title+' '}}</span>相关信息
        </p>
      </el-card>
    </el-row>
    <el-row style="padding-top:60px;padding-bottom:60px">
      <el-col :span="20" :offset="2">
        <el-col :span="6" :offset="2">
          <img class="detailImg" :src="film.poster" 
                :alt="film.title">
        </el-col>
        <el-col :span="13" :offset="1" style="text-align:left;margin-top:-15px">
          <div>
            <p class="name">{{film.title}}<span class="language">&nbsp;[{{ film.languages[0] }}]</span></p>
            <p>
                  <span v-for="(genre, index) in film.genres" :key="index">
                    <el-tag size="medium" :type="type[index]">
                      {{ genre }} </el-tag>
                      &nbsp;
                  </span>
                </p>
            <p style="padding-top:20px">
              <span style="font-size:35px;color:red;" v-if="film.rating.average.length != 0">{{film.rating.average}}</span>
              <span style=" font-size: 15px;color: #4e5c99ec;" v-if="film.rating.rating_people.length != 0">
                {{"（评价人数："+ film.rating.rating_people +"）"}}
              </span></p>
            <hr style="width:800px;background-color:#535351ec;">
            <el-row style="font-size:17px">
              <el-col :span="8">
                导演：
                <span style="color:#0066cc">{{film.directors[0].name}}</span>
              </el-col>
              <el-col :span="6">
                国家：
                <span style="color:#0066cc">{{film.countries[0]}}</span>
              </el-col>
              <el-col :span="10">
                上映时间：
                <span style="color:#0066cc">{{film.pubdate[0]}}</span>
              </el-col>
            </el-row>
            <el-row style="font-size:17px;padding-top:20px;line-height:30px" v-if="film.aka.length!=0">
              别名：
              <span  v-for="(aka, index) in film.aka" :key="index">
                {{" / "+aka}}
              </span>
            </el-row>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-row>
        <el-col :span="3" :offset="3">
          <p style="height:27px;background-color:rgb(241,241,241);font-size:20px;margin-top:16px">电 影 信 息</p>
        </el-col>
        <el-col :span="15">
          <p style="height:27px;background-color:rgb(241,241,241);border-left:4px solid #487A6F"></p>
          <P style="font-size:17px;font-weight:bold;text-align:left;">
            <el-row>
              <el-col :span="6" :offset="2">
                名称：
                <span style="font-weight:100">{{film.title}}</span>
              </el-col>
              <el-col :span="6" :offset="2">
                年份：
                <span style="font-weight:100">{{film.year}}年</span>
              </el-col>
              <el-col :span="6" :offset="2">
                上映时长：
                <span style="font-weight:100">{{film.duration}}天</span>
              </el-col>
            </el-row>
          </P>
          <p style="height:3px;background-color:rgb(220,220,220)"></p>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
        <el-col :span="3" :offset="3">
          <p style="height:27px;background-color:rgb(241,241,241);font-size:20px;margin-top:16px">演 员 表</p>
        </el-col>
        <el-col :span="15">
          <p style="height:27px;background-color:rgb(241,241,241);border-left:4px solid #487A6F"></p>
          <P style="font-size:17px;text-align:left;margin:0 35px;line-height:35px">
            <span  v-for="(cast, index) in film.casts" :key="index">
                {{" / "+cast.name}}
              </span>
          </P>
          <p style="height:3px;background-color:rgb(220,220,220)"></p>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
        <el-col :span="3" :offset="3">
          <p style="height:27px;background-color:rgb(241,241,241);font-size:20px;margin-top:16px">内 容 简 介</p>
        </el-col>
        <el-col :span="15">
          <p style="height:27px;background-color:rgb(241,241,241);border-left:4px solid #487A6F"></p>
          <P style="font-size:17px;text-align:left;margin:0 35px;line-height:35px">
            {{film.summary}}
          </P>
          <p style="height:3px;background-color:rgb(220,220,220)"></p>
        </el-col>
      </el-row>
      
    </el-row>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      film: {},
      type:["success","danger","","warning"],
      id:1,
    };
  },
  created() {   
    this.getDetail();
  },
  methods: {
    getDetail() {
      const id = this.$route.query.id;
      this.id = id;
      this.$axios
        .get("/static/films.json")
        .then(resp => {
          var test = resp.data.filter(function(film){
            if(film._id==id){
              return film
            }
          });
          this.film=test[0]
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
.language {
  margin-top: -10px;
  font-size: 15px;
  color: rgb(104, 103, 103);
  letter-spacing: 5px;
}
.detailImg {
  height: 80%;
  width: 80%;
}
.name {
  font-size: 25px;
  color: rgb(53, 52, 52);
  font-weight: bold;
}
</style>