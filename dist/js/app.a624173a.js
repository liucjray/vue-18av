(function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("integration")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tabs",{staticStyle:{},attrs:{type:"card",tabPosition:"left"},on:{"tab-click":e.switchCategory},model:{value:e.activeCHID,callback:function(t){e.activeCHID=t},expression:"activeCHID"}},e._l(e.categories,(function(t){return n("el-tab-pane",{key:t.CHID,attrs:{label:t.shortname,name:t.CHID}},[n("el-pagination",{staticStyle:{width:"50%"},attrs:{background:"",layout:"prev, pager, next","page-size":e.videosLimit,total:e.videosTotal},on:{"current-change":e.vidoePageClick,"prev-click":e.videosPrevClick,"next-click":e.videosNextClick}}),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"50%"},attrs:{data:e.videos,"element-loading-text":"載入中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("el-table-column",{attrs:{prop:"preview_url",label:"預覽圖"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("a",{attrs:{target:"_blank",href:e.row.video_url}},[n("img",{attrs:{src:e.row.preview_url,height:"80",content:"no-referrer"}})])]}}],null,!0)}),n("el-table-column",{attrs:{prop:"title",label:"片名",width:"500px"}}),n("el-table-column",{attrs:{prop:"duration",label:"時長"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{icon:"el-icon-timer",effect:"dark"}},[e._v(" "+e._s(e.transformHumanTime(t.row.duration))+" ")])]}}],null,!0)})],1)],1)})),1)],1)},s=[],c=(n("99af"),n("bc3a")),l=n.n(c),u={name:"categories",data:function(){return{isLoading:!1,activeCHID:"1",categories:[],videos:[],videosLimit:8,videosTotal:0,videosCurrentPage:0}},beforeMount:function(){this.getCategories(),this.switchCategory(this.activeCHID)},methods:{switchCategory:function(){this.videosCurrentPage=0,this.getVideos()},getCategories:function(){var e=this;this.isLoading=!0,l.a.get("https://api.avgle.com/v1/categories").then((function(t){var n=t.data;e.isLoading=1!=n.success,e.categories=n.response.categories})).catch((function(e){console.error(e)}))},getVideos:function(){var e=this;this.isLoading=!0;var t="https://api.avgle.com/v1/videos/".concat(this.videosCurrentPage,"?c=").concat(this.activeCHID,"&limit=").concat(this.videosLimit);l.a.get(t).then((function(t){var n=t.data;e.isLoading=1!=n.success,e.videosTotal=n.response.total_videos,e.videos=n.response.videos})).catch((function(e){console.error(e)}))},videosPrevClick:function(){this.videosCurrentPage-=1,this.getVideos()},videosNextClick:function(){this.videosCurrentPage+=1,this.getVideos()},vidoePageClick:function(e){this.videosCurrentPage=e-1,this.getVideos()},transformHumanTime:function(e){var t=new Date(1e3*e).toISOString().substr(11,8);return t}},computed:{}},d=u,f=n("2877"),p=Object(f["a"])(d,a,s,!1,null,null,null),v=p.exports,g={name:"App",components:{integration:v}},h=g,b=(n("034f"),Object(f["a"])(h,o,r,!1,null,null,null)),m=b.exports,y=n("5c96"),C=n.n(y);n("0fae"),n("e05f");i["default"].config.productionTip=!1,i["default"].use(C.a),new i["default"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.a624173a.js.map