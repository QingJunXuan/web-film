webpackJsonp([1],{"6HvJ":function(t,e){},ENLf:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticStyle:{height:"120px","background-color":"#6f89a2"}},[a("el-col",{staticStyle:{"margin-top":"0px"},attrs:{span:6,offset:4}},[a("router-link",{attrs:{to:{path:"/"}}},[a("p",{staticClass:"slogan"},[t._v("\n        The - Movies\n      ")])])],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"40px","padding-left":"25px"},attrs:{span:9,offset:1}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[a("el-option",{attrs:{label:"电影名称",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"类型",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"国家",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"导演",value:"4"}})],1),t._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchFilm},slot:"append"})],1)],1)],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App",data:function(){return{search:"",select:"1"}},watch:{$route:function(t,e){this.search=""}},methods:{searchFilm:function(){this.$router.push({path:"/search",query:{search:this.search,select:this.select}})}}},s,!1,function(t){a("R/7L")},null,null).exports,l=a("/ocq"),r=a("mtWM"),o=a.n(r),c={name:"list",data:function(){return{search:"",select:"1",currentPage:0,pages:0,totalFilms:0,type:["","success","danger","warning",""],films:[],filmList:[],leftheight:{height:"500px"}}},created:function(){var t=this;o.a.get("/api/films.json").then(function(e){200===e.status&&(t.filmList=e.data.sort(t.compare("rating","average",!1)),t.totalFilms=t.filmList.length,t.films=t.filmList.slice(0,10))}).catch(function(t){console.log(t)})},methods:{compare:function(t,e){return function(a,n){var s=a[t][e];return n[t][e]-s}},handleCurrentChange:function(t){this.films=this.filmList.slice(10*(t-1),10*t)},filmDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})},searchFilm:function(){this.$router.push({path:"/search",query:{search:this.search,select:this.select}})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{attrs:{span:14,offset:5}},[a("div",[a("h1",{staticStyle:{"margin-top":"40px","padding-bottom":"10px","text-align":"center"}},[t._v("\n          TOP 200 MOVIES\n        ")]),t._v(" "),a("hr",{staticClass:"hr-row"})]),t._v(" "),t._l(t.films,function(e,n){return a("div",{key:n},[a("el-row",{staticStyle:{"padding-top":"20px"}},[a("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:4}},[a("img",{staticClass:"poster",attrs:{src:e.poster,alt:e.title},on:{click:function(a){return t.filmDetail(e._id)}}})]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-top":"-20px"},attrs:{span:11,offset:1}},[a("div",[a("p",{staticClass:"name",on:{click:function(a){return t.filmDetail(e._id)}}},[t._v("\n                "+t._s(e.title)),a("span",{staticClass:"language"},[t._v(" ["+t._s(e.languages[0])+"]")])]),t._v(" "),a("p",{staticClass:"director"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("导演：")]),t._v(t._s(e.directors[0].name)+"\n              ")]),t._v(" "),a("p",{staticClass:"intro"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("简介：")]),t._v("\n                "+t._s(e.summary)+"\n              ")]),t._v(" "),a("p",t._l(e.genres,function(e,n){return a("span",{key:n},[a("el-tag",{attrs:{size:"small",type:t.type[n]}},[t._v("\n                    "+t._s(e)+" ")]),t._v("\n                     \n                ")],1)}),0)])]),t._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:7,offset:1}},[0!=e.rating.average.length?a("p",{staticClass:"rate"},[t._v("\n              \n              "+t._s("评分："+e.rating.average)+"\n            ")]):t._e(),t._v(" "),0!=e.rating.rating_people.length?a("p",{staticClass:"ratepeople"},[t._v("\n              "+t._s("（评价人数："+e.rating.rating_people+"）")+"\n            ")]):t._e(),t._v(" "),0!=e.pubdate[0].length?a("p",{staticClass:"pubdate"},[t._v("\n              上映时间："),a("span",{staticStyle:{color:"cadetblue","font-weight":"bold"}},[t._v(t._s(e.pubdate[0]))])]):t._e()])],1),t._v(" "),a("hr",{staticClass:"hr-row"})],1)}),t._v(" "),a("el-row",{staticStyle:{margin:"50px auto"}},[a("el-col",{attrs:{align:"center"}},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":10,layout:"total,prev, pager, next",total:t.totalFilms},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)],2)],1)},staticRenderFns:[]};var u=a("VU/8")(c,p,!1,function(t){a("6HvJ")},null,null).exports,g={data:function(){return{name:"",film:{},type:["success","danger","","warning"],id:1}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this,e=this.$route.query.id;this.id=e,this.$axios.get("/static/films.json").then(function(a){var n=a.data.filter(function(t){if(t._id==e)return t});t.film=n[0]}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-row",[a("el-card",{staticStyle:{height:"50px",width:"100%","margin-top":"-7px","border-bottom":"2px solid #ddd"}},[a("p",{staticStyle:{"text-align":"right","margin-top":"-7px","margin-right":"40px"}},[t._v("\n        您现在浏览的是\n        "),a("span",{staticStyle:{color:"#0066cc","font-weight":"bold"}},[t._v(t._s(" "+t.film.title+" "))]),t._v("相关信息\n      ")])])],1),t._v(" "),a("el-row",{staticStyle:{"padding-top":"60px","padding-bottom":"60px"}},[a("el-col",{attrs:{span:20,offset:2}},[a("el-col",{attrs:{span:6,offset:2}},[a("img",{staticClass:"detailImg",attrs:{src:t.film.poster,alt:t.film.title}})]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-top":"-15px"},attrs:{span:13,offset:1}},[a("div",[a("p",{staticClass:"name"},[t._v(t._s(t.film.title)),a("span",{staticClass:"language"},[t._v(" ["+t._s(t.film.languages[0])+"]")])]),t._v(" "),a("p",t._l(t.film.genres,function(e,n){return a("span",{key:n},[a("el-tag",{attrs:{size:"medium",type:t.type[n]}},[t._v("\n                    "+t._s(e)+" ")]),t._v("\n                     \n                ")],1)}),0),t._v(" "),a("p",{staticStyle:{"padding-top":"20px"}},[0!=t.film.rating.average.length?a("span",{staticStyle:{"font-size":"35px",color:"red"}},[t._v(t._s(t.film.rating.average))]):t._e(),t._v(" "),0!=t.film.rating.rating_people.length?a("span",{staticStyle:{"font-size":"15px",color:"#4e5c99ec"}},[t._v("\n              "+t._s("（评价人数："+t.film.rating.rating_people+"）")+"\n            ")]):t._e()]),t._v(" "),a("hr",{staticStyle:{width:"800px","background-color":"#535351ec"}}),t._v(" "),a("el-row",{staticStyle:{"font-size":"17px"}},[a("el-col",{attrs:{span:8}},[t._v("\n              导演：\n              "),a("span",{staticStyle:{color:"#0066cc"}},[t._v(t._s(t.film.directors[0].name))])]),t._v(" "),a("el-col",{attrs:{span:6}},[t._v("\n              国家：\n              "),a("span",{staticStyle:{color:"#0066cc"}},[t._v(t._s(t.film.countries[0]))])]),t._v(" "),a("el-col",{attrs:{span:10}},[t._v("\n              上映时间：\n              "),a("span",{staticStyle:{color:"#0066cc"}},[t._v(t._s(t.film.pubdate[0]))])])],1),t._v(" "),0!=t.film.aka.length?a("el-row",{staticStyle:{"font-size":"17px","padding-top":"20px","line-height":"30px"}},[t._v("\n            别名：\n            "),t._l(t.film.aka,function(e,n){return a("span",{key:n},[t._v("\n              "+t._s(" / "+e)+"\n            ")])})],2):t._e()],1)])],1)],1),t._v(" "),a("el-row",[a("el-row",[a("el-col",{attrs:{span:3,offset:3}},[a("p",{staticStyle:{height:"27px","background-color":"rgb(241,241,241)","font-size":"20px","margin-top":"16px"}},[t._v("电 影 信 息")])]),t._v(" "),a("el-col",{attrs:{span:15}},[a("p",{staticStyle:{height:"27px","background-color":"rgb(241,241,241)","border-left":"4px solid #487A6F"}}),t._v(" "),a("P",{staticStyle:{"font-size":"17px","font-weight":"bold","text-align":"left"}},[a("el-row",[a("el-col",{attrs:{span:6,offset:2}},[t._v("\n              名称：\n              "),a("span",{staticStyle:{"font-weight":"100"}},[t._v(t._s(t.film.title))])]),t._v(" "),a("el-col",{attrs:{span:6,offset:2}},[t._v("\n              年份：\n              "),a("span",{staticStyle:{"font-weight":"100"}},[t._v(t._s(t.film.year)+"年")])]),t._v(" "),a("el-col",{attrs:{span:6,offset:2}},[t._v("\n              上映时长：\n              "),a("span",{staticStyle:{"font-weight":"100"}},[t._v(t._s(t.film.duration)+"天")])])],1)],1),t._v(" "),a("p",{staticStyle:{height:"3px","background-color":"rgb(220,220,220)"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"padding-top":"20px"}},[a("el-col",{attrs:{span:3,offset:3}},[a("p",{staticStyle:{height:"27px","background-color":"rgb(241,241,241)","font-size":"20px","margin-top":"16px"}},[t._v("演 员 表")])]),t._v(" "),a("el-col",{attrs:{span:15}},[a("p",{staticStyle:{height:"27px","background-color":"rgb(241,241,241)","border-left":"4px solid #487A6F"}}),t._v(" "),a("P",{staticStyle:{"font-size":"17px","text-align":"left",margin:"0 35px","line-height":"35px"}},t._l(t.film.casts,function(e,n){return a("span",{key:n},[t._v("\n              "+t._s(" / "+e.name)+"\n            ")])}),0),t._v(" "),a("p",{staticStyle:{height:"3px","background-color":"rgb(220,220,220)"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"padding-top":"20px"}},[a("el-col",{attrs:{span:3,offset:3}},[a("p",{staticStyle:{height:"27px","background-color":"rgb(241,241,241)","font-size":"20px","margin-top":"16px"}},[t._v("内 容 简 介")])]),t._v(" "),a("el-col",{attrs:{span:15}},[a("p",{staticStyle:{height:"27px","background-color":"rgb(241,241,241)","border-left":"4px solid #487A6F"}}),t._v(" "),a("P",{staticStyle:{"font-size":"17px","text-align":"left",margin:"0 35px","line-height":"35px"}},[t._v("\n          "+t._s(t.film.summary)+"\n        ")]),t._v(" "),a("p",{staticStyle:{height:"3px","background-color":"rgb(220,220,220)"}})],1)],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(g,f,!1,function(t){a("pHx1")},null,null).exports,_={name:"search",data:function(){return{search:"",select:"",currentPage:0,pages:0,totalFilms:0,type:["","success","danger","warning",""],searchedList:[],films:[],filmList:[],leftheight:{height:"500px"}}},watch:{$route:function(t,e){this.init()}},created:function(){this.init()},methods:{init:function(){var t=this,e=this.$route.query.search;this.search=e;var a=this.$route.query.select;this.select=a,o.a.get("/static/films.json").then(function(a){200===a.status&&(t.filmList=a.data,1==t.select?t.searchedList=t.searchByName(t.filmList,t.search):2==t.select?t.searchedList=t.filmList.filter(function(t){for(var a=t.genres.length,n=0;n<a;n++)if(t.genres[n]==e)return t}):3==t.select?t.searchedList=t.filmList.filter(function(t){for(var a=t.countries.length,n=0;n<a;n++)if(t.countries[n]==e)return t}):4==t.select&&(t.searchedList=t.filmList.filter(function(t){for(var a=t.directors.length,n=0;n<a;n++)if(t.directors[n].name==e)return t})),t.searchedList=t.searchedList.sort(t.compare("rating","rate")),t.films=t.searchedList.slice(0,10),t.totalFilms=t.searchedList.length)})},compare:function(t,e){return function(a,n){var s=a[t][e];return n[t][e]-s}},searchByName:function(t,e){for(var a=new RegExp(e),n=[],s=0;s<t.length;s++)a.test(t[s].title)&&n.push(t[s]);return n},handleCurrentChange:function(t){this.films=this.searchedList.slice(10*(t-1),10*t)},filmDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-card",{staticStyle:{height:"50px"}},[0!=t.totalFilms?a("p",{staticStyle:{"text-align":"right","margin-top":"-7px","margin-right":"40px","font-size":"18px"}},[t._v("\n        您现在浏览的是"),a("span",{staticStyle:{color:"#0066cc","font-weight":"bold"}},[t._v(t._s(" "+t.search+" "))]),t._v("相关条目\n      ")]):a("p",{staticStyle:{"margin-top":"-7px","margin-right":"40px","font-size":"18px"}},[t._v("\n          未搜索到相关条目\n      ")])])],1),t._v(" "),0!=t.totalFilms?a("el-row",[a("el-col",{staticStyle:{"margin-top":"35px"},attrs:{span:14,offset:5}},[t._l(t.films,function(e,n){return a("div",{key:n},[a("el-row",{staticStyle:{"padding-top":"20px"}},[a("el-col",{attrs:{span:5}},[a("img",{staticClass:"poster",attrs:{src:e.poster,alt:e.title},on:{click:function(a){return t.filmDetail(e._id)}}})]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-top":"-20px"},attrs:{span:12}},[a("div",[a("p",{staticClass:"name",on:{click:function(a){return t.filmDetail(e._id)}}},[t._v("\n                "+t._s(e.title)),a("span",{staticClass:"language"},[t._v(" ["+t._s(e.languages[0])+"]")])]),t._v(" "),a("p",{staticClass:"director"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("导演：")]),t._v(t._s(e.directors[0].name))]),t._v(" "),a("p",{staticClass:"intro"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("简介：")]),t._v("\n                "+t._s(e.summary)+"\n              ")]),t._v(" "),a("p",t._l(e.genres,function(e,n){return a("span",{key:n},[a("el-tag",{attrs:{size:"small",type:t.type[n]}},[t._v(t._s(e))]),t._v(" ")],1)}),0)])]),t._v(" "),a("el-col",{attrs:{span:7}},[a("p",{staticClass:"rate"},[t._v("\n              \n              "+t._s("评分："+e.rating.average)+"\n            ")]),t._v(" "),a("p",{staticClass:"ratepeople"},[t._v(t._s("（评价人数："+e.rating.rating_people+"）"))]),t._v(" "),0!=e.pubdate[0].length?a("p",{staticClass:"pubdate"},[t._v("\n              上映时间："),a("span",{staticStyle:{color:"cadetblue","font-weight":"bold"}},[t._v(t._s(e.pubdate[0]))])]):t._e()])],1),t._v(" "),a("hr",{staticClass:"hr-row"})],1)}),t._v(" "),a("el-row",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"}},[a("el-col",{attrs:{align:"center"}},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":10,layout:"total,prev, pager, next",total:t.totalFilms},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)],2)],1):t._e()],1)},staticRenderFns:[]};var v=a("VU/8")(_,d,!1,function(t){a("ENLf")},null,null).exports;n.default.use(l.a);var m=new l.a({routes:[{path:"/",name:"List",component:u},{path:"/detail",name:"detail",component:h},{path:"/search",name:"search",component:v}]}),x=a("zL8q"),y=a.n(x);a("tvR6");n.default.use(y.a),n.default.config.productionTip=!1,n.default.prototype.$axios=o.a,new n.default({el:"#app",router:m,components:{App:i},template:"<App/>"})},"R/7L":function(t,e){},pHx1:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9cdb7f2a56172833031e.js.map