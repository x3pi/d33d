(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"298d":function(t,e,n){},9377:function(t,e,n){"use strict";n("298d")},eabb:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-page doc-page",attrs:{id:"container"}},[n("div",[n("canvas",{staticClass:"q-page doc-page",attrs:{id:"artifactCanvas",myattr:"myattr"}})])])}],a=n("5a89"),r={name:"ThreeTest",data(){return{camera:null,scene:null,renderer:null,mesh:null}},methods:{init:function(){this.$root.store.toc=[{id:"Introduction2",title:"Introduction2"}];const t=document.getElementById("container"),e=document.getElementById("artifactCanvas");this.camera=new a["d"](70,t.clientWidth/t.clientHeight,.01,10),this.camera.position.z=1,this.scene=new a["e"];const n=new a["a"](.2,.2,.2),i=new a["c"];this.mesh=new a["b"](n,i),this.scene.add(this.mesh),this.renderer=new a["f"]({canvas:e,antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.render(this.scene,this.camera)},animate:function(){requestAnimationFrame(this.animate),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.renderer.render(this.scene,this.camera)},myScript:function(){this.init(),this.animate()}},mounted(){this.myScript();const t=document.getElementById("canva");this.w=t.clientWidth,setInterval((()=>{this.w!==t.clientWidth&&this.init(),this.w=t.clientWidth}),500)}},c=r,h=(n("9377"),n("2877")),o=Object(h["a"])(c,i,s,!1,null,"d0a5e400",null);e["default"]=o.exports}}]);