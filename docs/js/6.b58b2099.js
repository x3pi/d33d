(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"473e":function(t,e,a){},6865:function(t,e,a){"use strict";a("473e")},7599:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"canva"}},[a("canvas",{attrs:{id:"artifactCanvas",myattr:"myattr"}})])}],i=a("5a89"),l={name:"ThreeTest",data(){return{camera:null,scene:null,renderer:null,mesh:null}},methods:{init:function(){this.$root.store.toc=[{id:"Introduction2",title:"Introduction2"}];const t=document.getElementById("canva"),e=document.getElementById("artifactCanvas");if(t){this.camera=new i["d"](70,t.clientWidth/t.clientHeight,.01,10),this.camera.position.z=1,this.scene=new i["e"];const a=new i["a"](.2,.2,.2),s=new i["c"];this.mesh=new i["b"](a,s),this.scene.add(this.mesh),this.renderer=new i["f"]({canvas:e,antialias:!0,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setClearColor(0,0),this.renderer.render(this.scene,this.camera)}else cancelAnimationFrame(this.idd)},animate:function(){const t=document.getElementById("artifactCanvas");t?(this.idd=requestAnimationFrame(this.animate),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.renderer.render(this.scene,this.camera)):cancelAnimationFrame(this.idd)},myScript:function(){this.init(),this.animate()}},mounted(){this.myScript();const t=document.getElementById("canva");this.w=t.clientWidth}},n=l,r=(a("6865"),a("2877")),c=Object(r["a"])(n,s,o,!1,null,"611d4275",null);e["a"]=c.exports},f1b9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{title:"Virtual Scroll",related:t.related,badge:t.badge}},[a("p",[t._v("The QVirtualScroll component allows you to display only a part of a long list of items and update the visible items as the user scrolls in the container. This has several advantages: only visible items are rendered, so the smallest number of nodes are in the DOM tree at any given point in time and the memory consumption is kept at its lowest.")]),a("p",[t._v("There are currently two types of QVirtualScroll: “list” (using QItems) and “table” (using a tabular style to display rows of data).")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),a("doc-installation",{attrs:{components:"QVirtualScroll"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("ul",[a("li",[t._v("To get the best performance while using large lists freeze the array you are passing in the "),a("code",{staticClass:"doc-token"},[t._v("items")]),t._v(" prop using "),a("code",{staticClass:"doc-token"},[t._v("Object.freeze(items)")]),t._v(". This allows Vue to skip making the list “responsive” to changes.")]),a("li",[t._v("The number of items that will be rendered will be calculated based on the "),a("code",{staticClass:"doc-token"},[t._v("virtual-scroll-item-size")]),t._v(" prop and the size of the scrollable area, but you can fit it to your needs using the "),a("code",{staticClass:"doc-token"},[t._v("virtual-scroll-slice-size")]),t._v(" prop.")]),a("li",[t._v("Use the "),a("code",{staticClass:"doc-token"},[t._v("virtual-scroll-item-size")]),t._v(" to specify the size of elements (pixels of height, or width if horizontal). After an element is rendered on screen its size is updated automatically, but if you specify an element size close to the real size you’ll get a better initial indication of the scroll position. Regardless if you will be using this property or not, QVirtualScroll will still work, but without it you may experience the scrollbar not following the mouse grab position while continuously scrolling (on desktop) or the actual scroll of the container getting slightly off by one or two elements when on mobile and continuously scrolling.")])])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("ul",[a("li",[t._v("There is a maximum height of the scrolling container, imposed by the browser. In IE11 this is around 1,000,000px, while in the rest of the browsers it’s much more, but still limited.")])])]),a("p",[t._v("Scroll the examples below to see QVirtualScroll in action.")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(e){return t.copyHeading("Basic")}}},[t._v("Basic")]),a("landing"),a("header-menu"),a("q-btn",{attrs:{push:"",color:"primary","icon-right":"launch",label:"Layout Builder",type:"a",href:"layout-builder",target:"_blank",rel:"noopener noreferrer"}}),a("p",[a("landing")],1),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-page-container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- page content --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-page-container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("doc-example",{attrs:{title:"Basic",file:"QVirtualScroll/Basic"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Horizontal"},on:{click:function(e){return t.copyHeading("Horizontal")}}},[t._v("Horizontal")]),a("doc-example",{attrs:{title:"Horizontal",file:"QVirtualScroll/BasicHorizontal"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Different-templates"},on:{click:function(e){return t.copyHeading("Different-templates")}}},[t._v("Different templates")]),a("doc-example",{attrs:{title:"Different templates for items",file:"QVirtualScroll/VariousContent"}}),a("doc-example",{attrs:{title:"Different templates for horizontal items",file:"QVirtualScroll/VariousContentHorizontal"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Table-type"},on:{click:function(e){return t.copyHeading("Table-type")}}},[t._v("Table type")]),a("p",[t._v("Notice the "),a("code",{staticClass:"doc-token"},[t._v('type="table"')]),t._v(" property.")]),a("doc-example",{attrs:{title:"Basic table",file:"QVirtualScroll/TableBasic"}}),a("p",[t._v("With header that scrolls along with content (doesn’t stay in place).")]),a("doc-example",{attrs:{title:"Table with scrolling header/footer",file:"QVirtualScroll/TableBasicHeader"}}),a("p",[t._v("Notice (in the example below) the CSS required to make the table header and footer “sticky”. Also note the additional scoped slots which define the header and footer content.")]),a("div",{staticClass:"doc-note doc-note--danger"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("IE11 does not supports the sticky header/footer.")])]),a("doc-example",{attrs:{title:"Sticky headers table",file:"QVirtualScroll/TableSticky"}}),a("p",[t._v("A more involved example below, playing with sticky headers and footers.")]),a("doc-example",{attrs:{title:"Playing with sticky headers",file:"QVirtualScroll/TableSticky2"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Scroll-target"},on:{click:function(e){return t.copyHeading("Scroll-target")}}},[t._v("Scroll target")]),a("p",[t._v("If you need to specify the scroll target (because the auto detected one is not the desired one) pass a CSS selector (as string) or the DOM element to the "),a("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" prop.")]),a("p",[t._v("If you need to use the virtual list with the whole page as the scrolling element then please set  "),a("code",{staticClass:"doc-token"},[t._v('scroll-target="body"')]),t._v(".")]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("ul",[a("li",[t._v("If you pass a custom scroll target container with "),a("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" prop you must make sure that the element exists and that it can be overflowed (it must have a maximum height and an overflow that allows scrolling).")]),a("li",[t._v("If the scroll target container cannot be overflowed you’ll get the whole list rendered.")])])]),a("div",{staticClass:"doc-note doc-note--danger"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("If you want to use a Vue reference for "),a("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(", please take care to set it after mounting the component, like in the example below.")])]),a("doc-example",{attrs:{title:"Custom scroll target by id",file:"QVirtualScroll/ScrollTargetId"}}),a("doc-example",{attrs:{title:"Custom scroll target by ref",file:"QVirtualScroll/ScrollTargetRef"}}),a("doc-example",{attrs:{title:"Using QScrollArea",file:"QVirtualScroll/ScrollArea"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Scroll-to-position"},on:{click:function(e){return t.copyHeading("Scroll-to-position")}}},[t._v("Scroll to position")]),a("doc-example",{attrs:{title:"Scroll to position",file:"QVirtualScroll/ScrollTo"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Sync-and-async"},on:{click:function(e){return t.copyHeading("Sync-and-async")}}},[t._v("Sync and async")]),a("p",[t._v("You can also generate the items to be displayed on the list by using the "),a("code",{staticClass:"doc-token"},[t._v("items-fn")]),t._v(" prop.")]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("Make sure to use a synchronous function that returns the list of items to be displayed.")])]),a("p",[t._v("If you need async data use a component that retrieves and renders the data.")]),a("doc-example",{attrs:{title:"Generate items on the fly",file:"QVirtualScroll/GenerateItems"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Utility-classes"},on:{click:function(e){return t.copyHeading("Utility-classes")}}},[t._v("Utility classes "),a("q-badge",{attrs:{align:"top",label:"v1.8.4+"}})],1),a("p",[t._v("There are two CSS classes that you can use (should you need to) to control VirtualScroll size calculation:")]),a("ul",[a("li",[t._v("Use "),a("code",{staticClass:"doc-token"},[t._v("q-virtual-scroll--with-prev")]),t._v(" class on an element rendered by the VirtualScroll to indicate the element should be grouped with the previous one (main use case is for multiple table rows generated from the same row of data).")]),a("li",[t._v("Use "),a("code",{staticClass:"doc-token"},[t._v("q-virtual-scroll--skip")]),t._v(" class on an element rendered by the VirtualScroll to indicate the element size should be ignored in size calculations.")])]),a("doc-example",{attrs:{title:"Virtual scroll with multiple rows for a data row",file:"QTable/VirtscrollMultipleRows"}}),a("doc-example",{attrs:{title:"Virtual scroll with expansion model",file:"QTable/VirtscrollExpandedRow"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QVirtualScroll-API"},on:{click:function(e){return t.copyHeading("QVirtualScroll-API")}}},[t._v("QVirtualScroll API")]),a("doc-api",{attrs:{file:"QVirtualScroll"}})],1)},o=[],i=a("8669"),l=a("7599");const n="Virtual Scroll | Xpi",r="The QVirtualScroll component renders a big list of items as the user scrolls in the container, keeping DOM tree clean and eating the lowest amount of memory possible.";var c={meta:{title:"Virtual Scroll",meta:{title:{name:"title",content:n},ogTitle:{name:"og:title",content:n},twitterTitle:{name:"twitter:title",content:n},description:{name:"description",content:r},ogDesc:{name:"og:description",content:r},twitterDesc:{name:"twitter:description",content:r}}},components:{Landing:l["a"]},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"Horizontal",title:"Horizontal",sub:!0},{id:"Different-templates",title:"Different templates",sub:!0},{id:"Table-type",title:"Table type",sub:!0},{id:"Scroll-target",title:"Scroll target",sub:!0},{id:"Scroll-to-position",title:"Scroll to position",sub:!0},{id:"Sync-and-async",title:"Sync and async",sub:!0},{id:"Utility-classes",title:"Utility classes",sub:!0},{id:"QVirtualScroll-API",title:"QVirtualScroll API"}],this.related=[{}],this.badge="v1.1+"},methods:{copyHeading:i["a"]}},d=c,p=a("2877"),u=Object(p["a"])(d,s,o,!1,null,null,null);e["default"]=u.exports}}]);