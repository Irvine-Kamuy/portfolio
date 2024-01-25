(function(){"use strict";var e={2239:function(e,t,n){n.d(t,{G:function(){return s}});n(560);var a=n(7795),o=n(4287);n(5743);const r={apiKey:"AIzaSyDB3QphiVBsn4avkGEvBkgbPrgPNcjg5Hc",authDomain:"portfolio-bf0d2.firebaseapp.com",projectId:"portfolio-bf0d2",storageBucket:"portfolio-bf0d2.appspot.com",messagingSenderId:"874198523776",appId:"1:874198523776:web:38c231858baf6bd0556b65"},i=(0,a.ZF)(r),c=(0,o.ad)(i),s=(0,o.hJ)(c,"projects");(0,o.PL)(s).then((e=>{let t=[];e.docs.forEach((e=>{t.push({...e.data(),id:e.id})})),console.log(t)})).catch((e=>{console.log(e.message)}))},1096:function(e,t,n){var a=n(9242),o=n(3396);function r(e,t){const n=(0,o.up)("router-link"),a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n,{to:"/"}),(0,o.Wm)(a)],64)}var i=n(89);const c={},s=(0,i.Z)(c,[["render",r]]);var l=s,u=n(2483);function d(e,t,n,a,r,i){const c=(0,o.up)("Navbar"),s=(0,o.up)("Hero"),l=(0,o.up)("About"),u=(0,o.up)("Projects"),d=(0,o.up)("Contact"),p=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(s),(0,o.Wm)(l),(0,o.Wm)(u),(0,o.Wm)(d),(0,o.Wm)(p)],64)}const p=e=>((0,o.dD)("data-v-d2a8c95a"),e=e(),(0,o.Cn)(),e),v=p((()=>(0,o._)("div",{class:"logo"},[(0,o._)("a",{href:"#"},"Peter.dev")],-1))),f={class:"other-nav"},h=p((()=>(0,o._)("a",{href:"#"},"Home",-1)));function m(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("nav",null,[v,(0,o._)("div",f,[h,(0,o._)("a",{onClick:t[0]||(t[0]=(...e)=>a.about&&a.about(...e))},"About"),(0,o._)("a",{onClick:t[1]||(t[1]=(...e)=>a.projects&&a.projects(...e))},"Projects"),(0,o._)("a",{onClick:t[2]||(t[2]=(...e)=>a.contact&&a.contact(...e))},"Contact")])])}var g={setup(){const e=()=>{const e=document.getElementById("about");e.scrollIntoView({behavior:"smooth",block:"center"})},t=()=>{const e=document.getElementById("projects");e.scrollIntoView({behavior:"smooth",block:"center"})},n=()=>{const e=document.getElementById("contact");e.scrollIntoView({behavior:"smooth",block:"center"})};return{about:e,projects:t,contact:n}}};const b=(0,i.Z)(g,[["render",m],["__scopeId","data-v-d2a8c95a"]]);var w=b;const k={class:"home"},_=(0,o.uE)('<div class="container" data-v-5081e31c><div class="content" data-v-5081e31c><div class="hero-main" data-v-5081e31c><div class="hero-txt" data-v-5081e31c><h1 data-v-5081e31c>Front-End Vue Developer</h1><p data-v-5081e31c>Hi, I&#39;m <span data-shadow="Peter Chen" data-v-5081e31c>Peter Chen</span>. A passionate Front-end Vue Developer based in Taiwan.</p><span data-v-5081e31c><a href="https://www.linkedin.com/in/po-an-chen/" data-v-5081e31c><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin" data-v-5081e31c><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" data-v-5081e31c></path><path d="M8 11l0 5" data-v-5081e31c></path><path d="M8 8l0 .01" data-v-5081e31c></path><path d="M12 16l0 -5" data-v-5081e31c></path><path d="M16 16v-3a2 2 0 0 0 -4 0" data-v-5081e31c></path></svg></a><a href="https://github.com/Irvine-Kamuy" data-v-5081e31c><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-v-5081e31c><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-v-5081e31c></path></svg></a></span></div><div class="hero-img" data-v-5081e31c></div></div><div class="skills" data-v-5081e31c><p data-v-5081e31c>Tech Stack</p><div class="logos" data-v-5081e31c><ul data-v-5081e31c><li data-v-5081e31c><img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" data-v-5081e31c></li><li data-v-5081e31c><img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" data-v-5081e31c></li><li data-v-5081e31c><img src="https://skillicons.dev/icons?i=vue,sass" alt="skill-icon" data-v-5081e31c></li></ul></div></div></div></div>',1),y=[_];function j(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("section",k,y)}var C={setup(){return{}}};const I=(0,i.Z)(C,[["render",j],["__scopeId","data-v-5081e31c"]]);var D=I;const E=e=>((0,o.dD)("data-v-7ca70747"),e=e(),(0,o.Cn)(),e),P={id:"about"},A=E((()=>(0,o._)("h2",null,"About me",-1))),S=E((()=>(0,o._)("h3",null,[(0,o._)("span",null,[(0,o.Uk)("HR "),(0,o._)("span",{class:"material-symbols-outlined"},"keyboard_double_arrow_right"),(0,o.Uk)(" Front-end Developer ")]),(0,o._)("span",null,"based in Taipei, Taiwan")],-1))),M=E((()=>(0,o._)("p",null,"Hiya, it's Peter here. I was an HR, specifically in the recruitment field. After few months of learning, I have had some projects to demonstrate in the next section. I am currently looking for an opportunity to put what I have learned into practice in an awesome team as a front-end vue developer. Feel free to reach out if you see my potential through the projects!",-1))),x=[A,S,M];function H(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("section",P,x)}var O={setup(){return{}}};const T=(0,i.Z)(O,[["render",H],["__scopeId","data-v-7ca70747"]]);var N=T,B=n(7139);const F=e=>((0,o.dD)("data-v-d0cf4718"),e=e(),(0,o.Cn)(),e),L={id:"projects"},W=F((()=>(0,o._)("h2",null,"Projects",-1))),Z={key:0,class:"container"},z=["href"],U=["src"],G=["href"],V=F((()=>(0,o._)("img",{src:"https://skillicons.dev/icons?i=github",alt:"skill-icon"},null,-1))),K=[V];function Y(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("section",L,[W,((0,o.wg)(),(0,o.iD)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.projects,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"project",key:e.id},[(0,o._)("a",{href:e.url},[(0,o._)("img",{src:e.imgUrl?e.imgUrl:"https://fakeimg.pl/350x200/?text=NoImage",alt:"img",width:"80%"},null,8,U),(0,o._)("h3",null,(0,B.zw)(e.title),1),(0,o._)("span",null,(0,B.zw)(e.skills),1),(0,o._)("p",null,(0,B.zw)(e.description),1),(0,o._)("a",{href:e.githubUrl},K,8,G)],8,z)])))),128))]))])}n(560);var q=n(4870),J=n(4287),R=n(2239),Q={setup(){let e=(0,q.iH)([]);return(0,o.bv)((()=>{(0,J.PL)(R.G).then((t=>{t.docs.forEach((t=>{e.value.push({...t.data(),id:t.id})})),console.log(e.value)})).catch((e=>{console.log(e.message)}))})),{projects:e}}};const X=(0,i.Z)(Q,[["render",Y],["__scopeId","data-v-d0cf4718"]]);var $=X;const ee=e=>((0,o.dD)("data-v-1ccfdfc0"),e=e(),(0,o.Cn)(),e),te={id:"contact"},ne=ee((()=>(0,o._)("h2",null,"Let's get in touch!",-1))),ae={class:"contact-inner"},oe=ee((()=>(0,o._)("div",{class:"inner-left"},[(0,o._)("p",null,"I enjoy working with dedicated people as it makes both of us better and overcomes obstacles effortlessly."),(0,o._)("p",null,"We can achieve much more than how we can alone. Let's talk.")],-1))),re={class:"inner-right"},ie=ee((()=>(0,o._)("span",{class:"material-symbols-outlined"},"map",-1))),ce={class:"location-inner"},se=ee((()=>(0,o._)("span",null,"Location: ",-1))),le=ee((()=>(0,o._)("span",null,"Taipei, Taiwan",-1))),ue={key:0,class:"google-map",id:"map"},de=ee((()=>(0,o._)("div",{class:"mail"},[(0,o._)("div",{class:"mail-inner"},[(0,o._)("span",{class:"material-symbols-outlined"},"mail"),(0,o._)("span",null,"Mail to: "),(0,o._)("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=booanchen@gmail.com",target:"_blank"},"booanchen@gmail.com")])],-1)));function pe(e,t,n,a,r,i){const c=(0,o.up)("Marker"),s=(0,o.up)("GoogleMap");return(0,o.wg)(),(0,o.iD)("section",te,[ne,(0,o._)("div",ae,[oe,(0,o._)("div",re,[(0,o._)("div",{class:"location",onClick:t[0]||(t[0]=(...e)=>a.toggleMapState&&a.toggleMapState(...e))},[ie,(0,o._)("div",ce,[se,le,a.mapState?((0,o.wg)(),(0,o.iD)("div",ue,[(0,o.Wm)(s,{"api-key":"AIzaSyCavrWsE2kJ9Te7j9sLGJngCl0EqNEMnYU",style:{width:"150%",height:"300px"},center:a.center,zoom:12},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{options:{position:a.center}},null,8,["options"])])),_:1},8,["center"])])):(0,o.kq)("",!0)])]),de])])])}var ve=n(4036),fe={components:{GoogleMap:ve.b6,Marker:ve.Jx},setup(){const e={lat:25.03314781188965,lng:121.56539154052734},t=(0,q.iH)(!1),n=()=>{t.value=!t.value};return{center:e,mapState:t,toggleMapState:n}}};const he=(0,i.Z)(fe,[["render",pe],["__scopeId","data-v-1ccfdfc0"]]);var me=he;const ge={class:"footer"},be={class:"copyright"},we=(0,o.uE)('<div class="links" data-v-1af32188><ul data-v-1af32188><li data-v-1af32188><a href="https://github.com/Irvine-Kamuy" data-v-1af32188><img src="https://skillicons.dev/icons?i=github" alt="skill-icon" data-v-1af32188></a></li><li data-v-1af32188><a href="https://www.linkedin.com/in/po-an-chen/" data-v-1af32188><img src="https://skillicons.dev/icons?i=linkedin" alt="skill-icon" data-v-1af32188></a></li></ul></div>',1);function ke(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("div",ge,[(0,o._)("div",be,[(0,o._)("p",null,"Copyright © "+(0,B.zw)(a.year)+". All rights are reserved",1)]),we])}var _e={setup(){const e=new Date,t=(0,q.iH)(e.getFullYear()),n=(0,q.iH)(!1),a=()=>{n.value=!n.value};return{year:t,project:n,toggleProject:a}}};const ye=(0,i.Z)(_e,[["render",ke],["__scopeId","data-v-1af32188"]]);var je=ye,Ce={name:"App",components:{Navbar:w,Hero:D,About:N,Projects:$,Contact:me,Footer:je},setup(){return{}}};const Ie=(0,i.Z)(Ce,[["render",d]]);var De=Ie;const Ee=[{path:"/",name:"home",component:De},{path:"/add-project",name:"add-project",component:()=>n.e(417).then(n.bind(n,2417))}],Pe=(0,u.p7)({history:(0,u.PO)("/portfolio/"),routes:Ee});var Ae=Pe;(0,a.ri)(l).use(Ae).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".5c892c56.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".9c212d9c.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio-ver.1:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var c,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=a),e[a]=[o];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(v);var o=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/portfolio/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var i=n&&n.type,c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,r.parentNode&&r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),c=n.p+i;if(t(i,c))return o();e(a,c,null,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={417:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),c=new Error,s=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,o[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],c=a[1],s=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(a);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunkportfolio_ver_1"]=self["webpackChunkportfolio_ver_1"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1096)}));a=n.O(a)})();
//# sourceMappingURL=app.89e3148d.js.map