webpackJsonp([2,0],[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=i(134),o=n(s),a=i(26),r=(n(a),i(46)),u=n(r),c=i(27),l=n(c),d=i(45),f=n(d),v=i(72),m=n(v),p=i(74),h=n(p);u.default.use(o.default);var _=new o.default({routes:m.default});new u.default({router:_,store:h.default,axios:l.default,render:function(t){return t(f.default)}}).$mount("#app")},,,,,,,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t){return new l.default(function(e,i){f.default.get(v+t).then(function(t){e(t.data)})})}function o(t){return s(""+t)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return o("/movie/"+t+"?start="+e+"&count="+i)}function r(t){return s("/movie/subject/"+t)}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=encodeURI("/movie/search?q="+t+"&start="+e);return s(i)}Object.defineProperty(e,"__esModule",{value:!0}),e.API_TYPE=void 0;var c=i(76),l=n(c);e.fetch=s,e.fetchItemByType=o,e.fetchMoviesByType=a,e.fetchMovieById=r,e.fetchSearchMovies=u;var d=i(27),f=n(d),v="https://node-douban-api.herokuapp.com";e.API_TYPE={movie:{in_theaters:"in_theaters",coming_soon:"coming_soon"}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.FETCH_MOVIES="movie/FETCH_MOVIES",e.FETCH_MOVIE_LIST="movie/FETCH_MOVIE_LIST",e.FETCH_MOVIE_BY_ID="movie/FETCH_MOVIE_BY_ID",e.SET_INFINITE_BUSY="movie/SET_INFINITE_BUSY",e.CLEAN_MOVIES="movie/CLEAN_MOVIES",e.CLEAN_MOVIE_LIST="movie/CLEAN_MOVIE_LIST",e.CLEAN_MOVIE="movie/CLEAN_MOVIE"},,,,,,,function(t,e,i){var n,s;i(117),n=i(66);var o=i(131);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){var n,s;i(115),n=i(64);var o=i(129);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(121),o=n(s),a=i(120),r=n(a),u=i(124),c=n(u),l=i(123),d=n(l),f=i(122),v=n(f),m=i(125),p=n(m);e.default={name:"app",components:{vHeader:o.default,Hello:r.default,Movies:c.default,MovieList:d.default,MovieDetail:v.default,SearchList:p.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["show"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{query:"",placeholder:"",path:"search-movie"}},mounted:function(){"index"===this.$route.path||this.$route.path.indexOf("movie")?this.path="/movie/search":this.$route.path.indexOf("book")&&(this.path="/book/search")},methods:{search:function(){this.$router.push({path:this.path,query:{query:this.query}}),this.query=""}}}},function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(16),a=s(o),r=i(9),u=(n(r),i(8));e.default={components:{Spinner:a.default},data:function(){return{loading:!0,id:"",movie:{}}},computed:{getMeta:function(){var t=this.movie.casts.reduce(function(t,e){return t?t+" / "+e.name:e.name},"");return this.movie.countries.join(" / ")+" / "+this.movie.genres.join(" / ")+" / "+this.movie.directors[0].name+"(导演) / "+t},getOriginalTitle:function(){return new RegExp(/([A-Za-z])/g).test(this.movie.original_title)?this.movie.original_title:""}},mounted:function(){var t=this;this.id=this.$route.params.id,(0,u.fetchMovieById)(this.id).then(function(e){t.movie=e,t.loading=!1})}}},function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(16),a=s(o),r=i(44),u=s(r),c=i(9),l=(n(c),i(8));e.default={components:{Spinner:a.default},directives:{InfiniteScroll:u.default},data:function(){return{loading:!0,type:"",movieList:{subjects:[]},busy:!1,isScroll:!1}},computed:{},mounted:function(){this.type=this.$route.query.type},methods:{loadMore:function(){var t=this,e=this.movieList.subjects.length;this.busy=!0,this.isScroll=!0,(0,l.fetchMoviesByType)(this.type,e).then(function(e){t.movieList.title=e.title,t.movieList.total=e.total,t.movieList.subjects=t.movieList.subjects.concat(e.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1),t.loading=!1,t.isScroll=!1})}},destroyed:function(){}}},function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(16),a=s(o),r=(i(26),i(9)),u=(n(r),i(8));e.default={components:{Spinner:a.default},data:function(){return{loading:!0,inTheater:{type:""},comingSoon:{type:""}}},mounted:function(){var t=this,e=0,i=9;(0,u.fetchMoviesByType)(u.API_TYPE.movie.in_theaters,e,i).then(function(e){t.inTheater=e,t.inTheater.type=u.API_TYPE.movie.in_theaters,t.loading=!1}),(0,u.fetchMoviesByType)(u.API_TYPE.movie.coming_soon,e,i).then(function(e){t.comingSoon=e,t.comingSoon.type=u.API_TYPE.movie.coming_soon,t.loading=!1})},updated:function(){},destroyed:function(){}}},function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(16),a=s(o),r=i(44),u=s(r),c=i(9),l=(n(c),i(8));e.default={components:{Spinner:a.default},directives:{InfiniteScroll:u.default},data:function(){return{loading:!0,query:"",movieList:{subjects:[]},busy:!1}},computed:{},mounted:function(){this.query=this.$route.query.query},watch:{$route:"loadAgain"},methods:{loadAgain:function(){this.movieList.subjects=[],this.busy=!1,this.query=this.$route.query.query,this.loadMore()},loadMore:function(){var t=this,e=this.movieList.subjects.length;this.busy=!0,(0,l.fetchSearchMovies)(this.query,e).then(function(e){t.movieList.title=e.title,t.movieList.total=e.total,t.movieList.subjects=t.movieList.subjects.concat(e.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1),t.loading=!1})}},destroyed:function(){}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(45),o=n(s);e.default=[{path:"/",component:o.default.components.Movies,name:"index"},{path:"/vuex-demo",component:o.default.components.VuexDemo,name:"vuex-demo"},{path:"/movies",component:o.default.components.Movies,name:"movies"},{path:"/movie/list",component:o.default.components.MovieList,name:"movie-list"},{path:"/movie/subject/:id",component:o.default.components.MovieDetail,name:"movie-detail"},{path:"/movie/search",component:o.default.components.SearchList,name:"movie-search"}]},function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,a,r=i(77),u=s(r),c=i(9),l=n(c),d=i(8),f={movies:[],movieList:{title:"",total:0,subjects:[]},busy:!1,movie:{}},v=(o={},(0,u.default)(o,l.FETCH_MOVIES,function(t,e){(0,d.fetchMoviesByType)(e.type,e.start,e.count).then(function(i){return i.type=e.type,t.commit([l.FETCH_MOVIES],i)})}),(0,u.default)(o,l.FETCH_MOVIE_LIST,function(t,e){(0,d.fetchMoviesByType)(e.type,e.start).then(function(e){return t.commit([l.FETCH_MOVIE_LIST],e)})}),(0,u.default)(o,l.FETCH_MOVIE_BY_ID,function(t,e){(0,d.fetchMovieById)(e).then(function(e){return t.commit([l.FETCH_MOVIE_BY_ID],e)})}),(0,u.default)(o,l.SET_INFINITE_BUSY,function(t,e){t.commit([l.SET_INFINITE_BUSY],e)}),(0,u.default)(o,l.CLEAN_MOVIE,function(t){t.commit(l.CLEAN_MOVIE)}),(0,u.default)(o,l.CLEAN_MOVIES,function(t){t.commit([l.CLEAN_MOVIES])}),(0,u.default)(o,l.CLEAN_MOVIE_LIST,function(t){t.commit([l.CLEAN_MOVIE_LIST])}),o),m=(a={},(0,u.default)(a,l.FETCH_MOVIES,function(t,e){t.movies.push(e)}),(0,u.default)(a,l.FETCH_MOVIE_LIST,function(t,e){t.movieList.title=e.title,t.movieList.total=e.total,t.movieList.subjects=t.movieList.subjects.concat(e.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1)}),(0,u.default)(a,l.FETCH_MOVIE_BY_ID,function(t,e){t.movie=e}),(0,u.default)(a,l.SET_INFINITE_BUSY,function(t,e){t.busy=e}),(0,u.default)(a,l.CLEAN_MOVIE,function(t){t.movie={}}),(0,u.default)(a,l.CLEAN_MOVIES,function(t){t.movies=[]}),(0,u.default)(a,l.CLEAN_MOVIE_LIST,function(t){t.movieList={}}),a);e.default={state:f,mutations:m,actions:v}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(26),o=n(s),a=i(46),r=n(a),u=i(73),c=n(u);r.default.use(o.default),e.default=new o.default.Store({modules:{movie:c.default}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAALVBMVEX6+vr19fX9/f37+/v+/v75+fni4+L39/fx8/Hm5+br7Ovb29v////V1dX///98IJfXAAAAD3RSTlP//////////////////wDU3JihAAAAXUlEQVR42j3K0Q7AIAhDUedEoVj+/3MHLtt9aU7SFqHmbhpVC/CEIyVN1UgtGe3uPWeWnNfYY1z0Erl2tsjSJBID7xN0iMCJUhjf/CgwyQlPlkJEWlvJ1FdSUz8RD5YjB2QIqEc+AAAAAElFTkSuQmCC"},function(t,e,i){var n,s;i(114),n=i(65);var o=i(128);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-0fa3609f",t.exports=n},function(t,e,i){var n,s;i(116),n=i(67);var o=i(130);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-42a522f0",t.exports=n},function(t,e,i){var n,s;i(113),n=i(68);var o=i(126);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-03925af4",t.exports=n},function(t,e,i){var n,s;n=i(69);var o=i(127);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e,i){var n,s;n=i(70);var o=i(132);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e,i){var n,s;n=i(71);var o=i(133);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{},[t.movie.title?e("div",{staticClass:"detail-card"},[e("div",{staticClass:"title"},[t._s(t.movie.title)+" "+t._s(t.getOriginalTitle)])," ",e("div",[e("img",{staticStyle:{width:"100%"},attrs:{src:t.movie.images.large}})])," ",e("section",{staticClass:"subject-info"},[t._s(t.getMeta)])," ",e("section",{staticClass:"subject-mark"},[e("div",{staticClass:"mark-item"},[e("a",[e("span",["想看("+t._s(t.movie.wish_count)+")"])])," ",t._m(0)])])," ",e("section",{staticClass:"subject-intro"},[e("h2",[t._s(t.movie.title)+"的剧情介绍"])," ",e("div",{staticClass:"bd"},[e("p",["\n          "+t._s(t.movie.summary)+"\n        "])])])]):t._e()," ",e("spinner",{attrs:{show:t.loading}})])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("a",[e("span",["看过"])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"grid has-search-bar",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[e("h2",[t._s(t.movieList.title)])," ",t.movieList.subjects.length>0?e("div",{staticClass:"card"},[t._l(t.movieList.subjects,function(i){return e("router-link",{staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])])," ",e("div",{staticClass:"info"},[e("h3",[t._s(i.title)])])])})]):t._e()," ",e("spinner",{attrs:{show:t.loading}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"hello"},[e("router-link",{attrs:{to:"/index"}},["Github Api 示例"])," ",e("router-link",{attrs:{to:"/vuex-demo"}},["Vuex示例"])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",[e("v-header")," ",e("router-view")])},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"TalionNav"}},[t._m(0)," ",e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",name:"search",placeholder:"请输入搜索内容"},domProps:{value:t._s(t.query)},on:{keyup:function(e){13===e.keyCode&&t.search()},input:function(e){e.target.composing||(t.query=e.target.value.trim())}}})," ",e("img",{staticClass:"search-btn",attrs:{src:i(119)},on:{click:function(e){t.search()}}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("header",{staticClass:"TalionNav"},[e("div",{staticClass:"TalionNav-primary"},[e("nav",[e("ul",[e("li",[e("a",{staticStyle:{color:"#2384E8"},attrs:{href:"#/movies"}},["电影"])])," "])," ",e("span",{staticClass:"search"})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",[e("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"spinner",class:{show:t.show},attrs:{width:"68px",height:"68px",viewBox:"0 0 44 44"}},[e("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",[e("section",{staticClass:"grid has-search-bar"},[t.inTheater.title?e("div",[e("h2",[t._s(t.inTheater.title)+"\n        ",e("router-link",{staticClass:"more",attrs:{tag:"span",to:{name:"movie-list",query:{type:t.inTheater.type}}}},["更多>\n        "])])," ",e("div",{staticClass:"card"},[t._l(t.inTheater.subjects,function(i){return e("router-link",{staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])])," ",e("div",{staticClass:"info"},[e("h3",[t._s(i.title)])])])})])]):t._e()," ",t.comingSoon.title?e("div",[e("h2",[t._s(t.comingSoon.title)+"\n        ",e("router-link",{staticClass:"more",attrs:{tag:"span",to:{name:"movie-list",query:{type:t.comingSoon.type}}}},["更多>\n        "])])," ",e("div",{staticClass:"card"},[t._l(t.comingSoon.subjects,function(i){return e("router-link",{staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])])," ",e("div",{staticClass:"info"},[e("h3",[t._s(i.title)])])])})])]):t._e()," ",e("spinner",{attrs:{show:t.loading}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"grid has-search-bar",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[e("h2",[t._s(t.movieList.title)])," ",t.movieList.subjects.length>0?e("div",{staticClass:"card"},[t._l(t.movieList.subjects,function(i){return e("router-link",{staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])])," ",e("div",{staticClass:"info"},[e("h3",[t._s(i.title)])])])})]):t._e()," ",e("spinner",{attrs:{show:t.loading}})])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.b500d3cb8a29c3be02a0.js.map