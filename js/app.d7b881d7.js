(function(){"use strict";var t={5411:function(t,e,n){var r=n(9242),a=n(3396);function o(t,e,n,r,o,i){const l=(0,a.up)("Home");return(0,a.wg)(),(0,a.j4)(l)}const i={class:"Home"};function l(t,e,n,r,o,l){const u=(0,a.up)("Header"),s=(0,a.up)("Form"),c=(0,a.up)("List");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(u),(0,a.Wm)(s),(0,a.Wm)(c)])}const u={key:0},s={class:"col-md-12"},c=(0,a._)("label",{for:"inputValue",class:"form-label"},[(0,a.Uk)("Value "),(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"7",fill:"currentColor",class:"bi bi-asterisk",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"})])],-1),d=(0,a._)("button",{type:"submit",class:"btn btn-primary px-5 mt-3 rounded-2"},[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-person-plus-fill",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}),(0,a._)("path",{"fill-rule":"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"})]),(0,a.Uk)("Save ")],-1);function m(t,e,n,o,i,l){return l.isEdit?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("form",{class:"row g-3 my-3 border-bottom pb-4",onSubmit:e[1]||(e[1]=(0,r.iM)(((...t)=>l.handleSubmit&&l.handleSubmit(...t)),["prevent"]))},[(0,a._)("div",s,[c,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.item.value=t),class:"form-control",id:"inputValue",required:""},null,512),[[r.nr,l.item.value]]),d])],32)])):(0,a.kq)("",!0)}var p=n(65),f={name:"Form",computed:{...(0,p.rn)(["editItem"]),isEdit(){return!!this.editItem},item:{get(){return this.editItem||{value:""}},set(t){this.updateItem(t)}}},methods:{...(0,p.OI)(["updateItem"]),handleSubmit(){this.isEdit&&this.updateItem(this.item),this.item={}}}},v=n(89);const h=(0,v.Z)(f,[["render",m]]);var b=h,g=n(7139);const w={class:"table"},_=(0,a._)("thead",{class:"table-dark"},[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"№"),(0,a._)("th",{scope:"col"},"Name"),(0,a._)("th",{scope:"col"},"Value"),(0,a._)("th",{scope:"col"},"Edit")])],-1),y={scope:"row"},I=["onClick"],O=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),(0,a._)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})],-1),x=(0,a._)("span",null,"Update",-1),k=[O,x];function H(t,e,n,r,o,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("table",w,[_,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.items,((e,n)=>((0,a.wg)(),(0,a.iD)("tr",{key:n},[(0,a._)("th",y,(0,g.zw)(n+1),1),(0,a._)("td",null,(0,g.zw)(e.name),1),(0,a._)("td",null,(0,g.zw)(e.value),1),(0,a._)("td",null,[(0,a._)("button",{id:"btn-update",type:"button",class:"btn btn-secondary p-1 rounded-0",onClick:n=>t.editItem(e)},k,8,I)])])))),128))])])])}n(2166);var L={name:"List",computed:(0,p.rn)(["items"]),methods:{...(0,p.OI)(["editItem"])}};const M=(0,v.Z)(L,[["render",H]]);var V=M;const j={class:"container p-0 mb-3"},z=(0,a._)("nav",{class:"navbar navbar-expand-lg navbar-success bg-success"},[(0,a._)("div",{class:"container-fluid"},[(0,a._)("a",{class:"navbar-brand text-light",href:"#"},"OPTIMAL CITY Technologies")])],-1),S=[z];function C(t,e,n,r,o,i){return(0,a.wg)(),(0,a.iD)("div",j,S)}var T={name:"Header-Line"};const D=(0,v.Z)(T,[["render",C]]);var P=D,E={name:"HomePage",components:{Form:b,Header:P,List:V}};const Z=(0,v.Z)(E,[["render",l]]);var A=Z,F={name:"App",components:{Home:A}};const U=(0,v.Z)(F,[["render",o]]);var q=U,B=(0,p.MT)({state:{items:[{name:"foo1",value:"bar1"},{name:"foo2",value:"bar2"}],editItem:null},mutations:{updateItem(t,e){t.editItem&&(Object.assign(t.editItem,e),t.editItem=null)},editItem(t,e){t.editItem=e}}});(0,r.ri)(q).use(B).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],o=t[c][2];for(var l=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(l=!1,o<i&&(i=o));if(l){t.splice(c--,1);var s=a();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],l=r[1],u=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(u)var c=u(n)}for(e&&e(r);s<i.length;s++)o=i[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkdata_app"]=self["webpackChunkdata_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5411)}));r=n.O(r)})();
//# sourceMappingURL=app.d7b881d7.js.map