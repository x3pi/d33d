(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0569c":function(t,e,a){"use strict";a("d15f")},"0c50":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"virtualListScrollTargetRef",staticClass:"scroll",staticStyle:{"max-height":"230px"}},[a("div",{staticClass:"q-pa-md bg-yellow"},[t._v("\n    Above the list - scrolls with the list\n  ")]),a("q-virtual-scroll",{attrs:{"scroll-target":t.scrollTarget,items:t.heavyList,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("\n            #"+t._s(s)+" - "+t._s(r.label)+"\n          ")])],1)],1)]}}])}),a("div",{staticClass:"q-pa-md bg-yellow"},[t._v("\n    Below the list - scrolls with the list\n  ")])],1)},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1)});Object.freeze(i);var l={data(){return{heavyList:i,scrollTarget:void 0}},mounted(){this.scrollTarget=this.$refs.virtualListScrollTargetRef}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},"0c86":function(t,e,a){},"0e10":function(t,e,a){"use strict";a("0c86")},1308:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-virtual-scroll",{staticStyle:{"max-height":"300px"},attrs:{items:t.heavyList,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("\n          #"+t._s(s)+" - "+t._s(r.label)+"\n        ")])],1)],1)]}}])})},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1)});Object.freeze(i);var l={data(){return{heavyList:i}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},"1ae2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll",staticStyle:{"max-height":"230px"},attrs:{id:"virtual-scroll-target"}},[a("div",{staticClass:"q-pa-md bg-yellow"},[t._v("\n    Above the list - scrolls with the list\n  ")]),a("q-virtual-scroll",{attrs:{"scroll-target":"#virtual-scroll-target",items:t.heavyList,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("\n            #"+t._s(s)+" - "+t._s(r.label)+"\n          ")])],1)],1)]}}])}),a("div",{staticClass:"q-pa-md bg-yellow"},[t._v("\n    Below the list - scrolls with the list\n  ")])],1)},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1)});Object.freeze(i);var l={data(){return{heavyList:i}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},"2d12":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-virtual-scroll",{staticStyle:{"max-height":"70vh"},attrs:{type:"table","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":32,items:t.heavyList},scopedSlots:t._u([{key:"before",fn:function(){return[a("thead",{staticClass:"thead-sticky text-left"},[a("tr",[a("th",[t._v("Index")]),t._l(t.columns,(function(e){return a("th",{key:"1--"+e.name},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2)])]},proxy:!0},{key:"after",fn:function(){return[a("tfoot",{staticClass:"tfoot-sticky text-left"},[a("tr",[a("th",[t._v("Index")]),t._l(t.columns,(function(e){return a("th",{key:"2--"+e.name},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2)])]},proxy:!0},{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("tr",{key:s},[a("td",[t._v("#"+t._s(s))]),t._l(t.columns,(function(e){return a("td",{key:s+"-"+e.name},[t._v("\n          "+t._s(r[e.prop])+"\n        ")])}))],2)]}}])})],1)},s=[];const n=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%"}],i=[{name:"Dessert (100g serving)",prop:"name"},{name:"Calories",prop:"calories"},{name:"Fat (g)",prop:"fat"},{name:"Carbs (g)",prop:"carbs"},{name:"Protein (g)",prop:"protein"},{name:"Sodium (mg)",prop:"sodium"},{name:"Calcium (%)",prop:"calcium"}],l=[];for(let p=0;p<=1e3;p++)Array.prototype.push.apply(l,n);Object.freeze(l),Object.freeze(i);var o={data(){return{heavyList:l,columns:i}}},c=o,u=(a("0569c"),a("2877")),m=Object(u["a"])(c,r,s,!1,null,null,null);e["default"]=m.exports},"4d02":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-virtual-scroll",{staticStyle:{"max-height":"300px","overflow-x":"hidden"},attrs:{"items-size":t.size,"items-fn":t.getItems,"virtual-scroll-item-size":78,separator:""},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item,r=t.index;return[a("async-component",{key:r,attrs:{index:e.index,sent:e.sent}})]}}])})},s=[];const n=1e5,i=Array(n).fill(null).map(((t,e)=>({index:e,sent:Math.random()>.5})));var l={components:{asyncComponent:{props:{index:Number,sent:Boolean},data(){return{asyncContent:null}},beforeMount(){this.timer=setTimeout((()=>{this.asyncContent={sent:this.sent,name:!0===this.sent?"me":"Someone else",avatar:!0===this.sent?"https://cdn.quasar.dev/img/avatar4.jpg":"https://cdn.quasar.dev/img/avatar3.jpg",stamp:`${Math.floor(this.index/1e3)} minutes ago`,text:[`Message with id ${this.index}`]}}),300+2e3*Math.random())},beforeDestroy(){clearTimeout(this.timer)},render(t){if(this.asyncContent===Object(this.asyncContent))return t("q-chat-message",{staticClass:"q-mx-sm",key:this.index,props:this.asyncContent});{const e=[t("q-skeleton",{staticClass:"on-left on-right",props:{animation:"none",type:"text",width:"150px",height:"100px"}})];return e[!0===this.sent?"push":"unshift"](t("q-skeleton",{props:{animation:"none",type:"QAvatar"}})),t("div",{staticClass:"row no-wrap items-center q-mx-sm justify-"+(!0===this.sent?"end":"start"),style:"height: 78px",key:this.index},e)}}}},data(){return{size:n}},methods:{getItems(t,e){const a=[];for(let r=0;r<e;r++)a.push(i[t+r]);return Object.freeze(a)}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},"85af":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-virtual-scroll",{attrs:{items:t.heavyList,"virtual-scroll-horizontal":""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("div",{key:s,staticClass:"row items-center"},[0===s?a("q-separator",{attrs:{vertical:"",spaced:""}}):t._e(),!0===r.avatar?a("q-avatar",{staticClass:"bg-black text-white q-my-md"},[t._v("\n        "+t._s(s%10+1)+"\n      ")]):a("q-item",{attrs:{dense:"",clickable:""}},[a("q-item-section",[a("q-item-label",[t._v("\n            #"+t._s(s)+" - "+t._s(r.label)+"\n          ")])],1)],1),a("q-separator",{attrs:{vertical:"",spaced:""}})],1)]}}])})},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1),avatar:m%5===0});Object.freeze(i);var l={data(){return{heavyList:i}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},a24c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-virtual-scroll",{staticStyle:{"max-height":"300px"},attrs:{items:t.heavyList,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[!0===r.banner?a("q-banner",{key:s,staticClass:"bg-black text-white q-py-xl"},[t._v("\n      #"+t._s(s)+" - "+t._s(r.label)+"\n    ")]):a("q-item",{key:s,attrs:{dense:"",clickable:""}},[a("q-item-section",[a("q-item-label",[t._v("\n          #"+t._s(s)+" - "+t._s(r.label)+"\n        ")])],1)],1)]}}])})},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1),banner:m%5===0});Object.freeze(i);var l={data(){return{heavyList:i}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},ab9f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-virtual-scroll",{staticStyle:{"max-height":"70vh"},attrs:{type:"table","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":32,items:t.heavyList},scopedSlots:t._u([{key:"before",fn:function(){return[a("thead",{staticClass:"text-left"},[a("tr",[a("th",[t._v("Index")]),t._l(t.columns,(function(e){return a("th",{key:"1--"+e.name},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2)])]},proxy:!0},{key:"after",fn:function(){return[a("tfoot",{staticClass:"text-left"},[a("tr",[a("th",[t._v("Index")]),t._l(t.columns,(function(e){return a("th",{key:"2--"+e.name},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2)])]},proxy:!0},{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("tr",{key:s},[a("td",[t._v("#"+t._s(s))]),t._l(t.columns,(function(e){return a("td",{key:s+"-"+e.name},[t._v("\n          "+t._s(r[e.prop])+"\n        ")])}))],2)]}}])})],1)},s=[];const n=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%"}],i=[{name:"Dessert (100g serving)",prop:"name"},{name:"Calories",prop:"calories"},{name:"Fat (g)",prop:"fat"},{name:"Carbs (g)",prop:"carbs"},{name:"Protein (g)",prop:"protein"},{name:"Sodium (mg)",prop:"sodium"},{name:"Calcium (%)",prop:"calcium"}],l=[];for(let p=0;p<=1e3;p++)Array.prototype.push.apply(l,n);Object.freeze(l),Object.freeze(i);var o={data(){return{heavyList:l,columns:i}}},c=o,u=a("2877"),m=Object(u["a"])(c,r,s,!1,null,null,null);e["default"]=m.exports},bf15:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-virtual-scroll",{staticStyle:{"max-height":"70vh"},attrs:{type:"table","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":32,items:t.heavyList},scopedSlots:t._u([{key:"before",fn:function(){return[a("thead",{staticClass:"thead-custom-sticky text-left"},[a("tr",[a("th",[t._v("#")]),t._l(t.columns,(function(e){return a("th",{key:"1--"+e.name2},[t._v("\n            "+t._s(e.name1)+"\n          ")])}))],2),a("tr",[a("th",[t._v("Index")]),t._l(t.columns,(function(e){return a("th",{key:"2--"+e.name2},[t._v("\n            "+t._s(e.name2)+"\n          ")])}))],2)])]},proxy:!0},{key:"after",fn:function(){return[a("tfoot",{staticClass:"tfoot-custom-sticky text-left"},[a("tr",[a("th",[t._v("#")]),t._l(t.columns,(function(e){return a("th",{key:"3--"+e.name2},[t._v("\n            "+t._s(e.name1)+"\n          ")])}))],2),a("tr",[a("th",[t._v("Index")]),t._l(t.columns,(function(e){return a("th",{key:"4--"+e.name2},[t._v("\n            "+t._s(e.name2)+"\n          ")])}))],2)])]},proxy:!0},{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("tr",{key:s},[a("td",[t._v("#"+t._s(s))]),t._l(t.columns,(function(e){return a("td",{key:s+"-"+e.name2},[t._v("\n          "+t._s(r[e.prop])+"\n        ")])}))],2)]}}])})],1)},s=[];const n=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%"}],i=[{name1:"(100g serving)",name2:"Dessert",prop:"name"},{name1:"(val)",name2:"Calories",prop:"calories"},{name1:"(g)",name2:"Fat",prop:"fat"},{name1:"(g)",name2:"Carbs",prop:"carbs"},{name1:"(g)",name2:"Protein",prop:"protein"},{name1:"(mg)",name2:"Sodium",prop:"sodium"},{name1:"(%)",name2:"Calcium",prop:"calcium"}],l=[];for(let p=0;p<=1e3;p++)Array.prototype.push.apply(l,n);Object.freeze(l),Object.freeze(i);var o={data(){return{heavyList:l,columns:i}}},c=o,u=(a("0e10"),a("2877")),m=Object(u["a"])(c,r,s,!1,null,null,null);e["default"]=m.exports},caf2:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-ma-md"},[a("q-scroll-area",{staticStyle:{height:"200px"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle,id:"scroll-area-with-virtual-scroll-1"}},[a("q-virtual-scroll",{attrs:{"scroll-target":"#scroll-area-with-virtual-scroll-1 > .scroll",items:t.heavyList,"virtual-scroll-item-size":32,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("\n              #"+t._s(s)+" - "+t._s(r.label)+"\n            ")])],1)],1)]}}])})],1)],1)},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1)});Object.freeze(i);var l={data(){return{heavyList:i,thumbStyle:{right:"5px",borderRadius:"8px",backgroundColor:"#027be3",width:"8px",opacity:.75},barStyle:{right:"2px",borderRadius:"14px",backgroundColor:"#027be3",width:"14px",opacity:.2,marginTop:"-3px",marginBottom:"-3px",paddingTop:"3px",paddingBottom:"3px"}}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},d15f:function(t,e,a){},f1b2:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-virtual-scroll",{attrs:{items:t.heavyList,"virtual-scroll-horizontal":""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("div",{key:s,class:r.class},[t._v("\n      #"+t._s(s)+" - "+t._s(r.label)+"\n    ")])]}}])})},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1),class:m%2===0?"q-pa-md self-center bg-grey-2 text-black":"q-pa-lg bg-black text-white"});Object.freeze(i);var l={data(){return{heavyList:i}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},f464:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"q-pa-md row justify-center"},[a("q-input",{staticStyle:{"min-width":"10em"},attrs:{type:"number",min:0,max:9999,label:"Scroll to index","input-class":"text-right"},model:{value:t.virtualListIndex,callback:function(e){t.virtualListIndex=t._n(e)},expression:"virtualListIndex"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Go","no-caps":"",color:"primary"},on:{click:function(e){return t.$refs.virtualListRef.scrollTo(t.virtualListIndex,"start-force")}}})],1),a("q-virtual-scroll",{ref:"virtualListRef",staticStyle:{"max-height":"300px"},attrs:{component:"q-list",items:t.heavyList,separator:""},on:{"virtual-scroll":t.onVirtualScroll},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("q-item",{key:s,class:{"bg-black text-white":s===t.virtualListIndex},attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v("\n            #"+t._s(s)+" - "+t._s(r.label)+"\n          ")])],1)],1)]}}])})],1)},s=[];const n=1e4,i=[];for(let m=0;m<n;m++)i.push({label:"Option "+(m+1)});Object.freeze(i);var l={data(){return{heavyList:i,virtualListIndex:1200}},mounted(){this.$refs.virtualListRef.scrollTo(this.virtualListIndex)},methods:{onVirtualScroll({index:t}){this.virtualListIndex=t}}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},ff75:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-virtual-scroll",{staticStyle:{"max-height":"70vh"},attrs:{type:"table","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":32,items:t.heavyList},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,s=e.index;return[a("tr",{key:s},[a("td",[t._v("#"+t._s(s))]),t._l(t.columns,(function(e){return a("td",{key:s+"-"+e},[t._v("\n          "+t._s(r[e])+"\n        ")])}))],2)]}}])})],1)},s=[];const n=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}],i=["name","calories","fat","carbs","protein","sodium","calcium","iron"],l=[];for(let p=0;p<=1e3;p++)Array.prototype.push.apply(l,n);Object.freeze(l),Object.freeze(i);var o={data(){return{heavyList:l,columns:i}}},c=o,u=a("2877"),m=Object(u["a"])(c,r,s,!1,null,null,null);e["default"]=m.exports}}]);