(function(e){function n(n){for(var a,r,s=n[0],u=n[1],i=n[2],f=0,d=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var s=t[r];0!==c[s]&&(a=!1)}a&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-094ab88c":"1ffd7fc3","chunk-16663bde":"c58d3bfe","chunk-19b1d4d6":"42c442e9","chunk-2d0ac07d":"3b2ca915","chunk-2d0c80ef":"06a823bb","chunk-2d224ad6":"713489f6","chunk-32ffede8":"0f57d9f6","chunk-623bfd63":"f206497c","chunk-d33f0a5a":"4ccaa178","chunk-e375e6aa":"7748e280","chunk-110448e4":"de57a4f1","chunk-130e17ba":"eef705d6","chunk-15aec928":"721ce583","chunk-287d633a":"69490dc3","chunk-504f871d":"1600e9e3","chunk-667d1aa4":"a5503f4f","chunk-69bbc2f2":"abaf3f4e","chunk-b2474e62":"ace6b367","chunk-2d0cc032":"a3709776","chunk-2d0c5583":"03f29ab3","chunk-47334500":"d46608f0"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-19b1d4d6":1,"chunk-32ffede8":1,"chunk-623bfd63":1,"chunk-e375e6aa":1,"chunk-47334500":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-094ab88c":"31d6cfe0","chunk-16663bde":"31d6cfe0","chunk-19b1d4d6":"b77170c5","chunk-2d0ac07d":"31d6cfe0","chunk-2d0c80ef":"31d6cfe0","chunk-2d224ad6":"31d6cfe0","chunk-32ffede8":"5333508f","chunk-623bfd63":"293486e0","chunk-d33f0a5a":"31d6cfe0","chunk-e375e6aa":"63289e56","chunk-110448e4":"31d6cfe0","chunk-130e17ba":"31d6cfe0","chunk-15aec928":"31d6cfe0","chunk-287d633a":"31d6cfe0","chunk-504f871d":"31d6cfe0","chunk-667d1aa4":"31d6cfe0","chunk-69bbc2f2":"31d6cfe0","chunk-b2474e62":"31d6cfe0","chunk-2d0cc032":"31d6cfe0","chunk-2d0c5583":"31d6cfe0","chunk-47334500":"429aed3d"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===a||f===c))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],f=i.getAttribute("data-href");if(f===a||f===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],l.parentNode.removeChild(l),t(o)},l.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=s(e);var d=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,t[1](d)}c[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("85ec"),r=t.n(a);r.a},"10d9":function(e,n,t){},"3fab":function(e,n,t){"use strict";t.r(n)},"400a":function(e,n,t){"use strict";var a=t("2b0e"),r=new a["a"];n["a"]=r},"43c6":function(e,n,t){"use strict";t.r(n)},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var n=c(e);return t(n)}function c(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=t("a925");a["a"].use(r["a"]);var c="zh-CN",o={"zh-CN":t("43c6"),"en-US":t("3fab")},s=new r["a"]({locale:c,messages:o}),u=s,i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},f=[],d=t("bc3a"),l=t.n(d),b={name:"App",beforeCreate:function(){var e=this;this.$util.IsPC()?this.$router.push("about"):this.$router.push("aboutMobile"),l.a.get("data/lang.json").then((function(n){e.$i18n.mergeLocaleMessage("en-US",n.data.en),e.$i18n.mergeLocaleMessage("zh-CN",n.data.cn)}))}},h=b,p=(t("034f"),t("2877")),j=Object(p["a"])(h,i,f,!1,null,null,null),m=j.exports,g=t("2f62");a["a"].use(g["a"]);var k=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=(t("d3b7"),t("8c4f")),y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{style:{width:"100vw",height:"100vh",backgroundColor:"whitesmoke"}})},w=[],O={},z=Object(p["a"])(O,y,w,!1,null,null,null),M=z.exports,P=v["a"].prototype.push;v["a"].prototype.push=function(e){return P.call(this,e).catch((function(e){return e}))},a["a"].use(v["a"]);var x=[{path:"/",alias:"/loading",name:"loading",component:M},{path:"/home",name:"home",component:function(){return t.e("chunk-2d224ad6").then(t.bind(null,"e0c8"))},children:[{path:"/about",name:"about",meta:{icon:"user",title:"about"},component:function(){return t.e("chunk-e375e6aa").then(t.bind(null,"28f6"))}},{path:"/timeLine",name:"timeLine",meta:{icon:"profile",title:"timeLine"},component:function(){return t.e("chunk-2d0ac07d").then(t.bind(null,"1899"))}},{path:"/portfolio",name:"portfolio",meta:{icon:"picture",title:"portfolio"},component:function(){return t.e("chunk-32ffede8").then(t.bind(null,"d1c1"))}},{path:"/contact",name:"contact",meta:{icon:"mail",title:"contact"},component:function(){return t.e("chunk-d33f0a5a").then(t.bind(null,"06c9"))}}]},{path:"/mobile",name:"mobile",component:function(){return t.e("chunk-2d0c80ef").then(t.bind(null,"52ea"))},children:[{path:"/aboutMobile",name:"aboutMobile",meta:{icon:"contact",title:"about"},component:function(){return t.e("chunk-19b1d4d6").then(t.bind(null,"44d2e"))}},{path:"/timeLineMobile",name:"timeLineMobile",meta:{icon:"description",title:"timeLine"},component:function(){return t.e("chunk-16663bde").then(t.bind(null,"8d99"))}},{path:"/portfolioMobile",name:"portfolioMobile",meta:{icon:"photo-o",title:"portfolio"},component:function(){return t.e("chunk-623bfd63").then(t.bind(null,"fe40"))}},{path:"/contactMobile",name:"contactMobile",meta:{icon:"envelop-o",title:"contact"},component:function(){return t.e("chunk-094ab88c").then(t.bind(null,"eada"))}}]}],A=new v["a"]({routes:x}),S=A,E=t("400a"),N=(t("c975"),t("d81d"),t("a434"),t("b0c0"),t("a9e3"),t("e25e"),t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("53ca")),C={resizeTable:function(){return window.innerHeight?window.innerHeight-230:document.body&&document.body.clientHeight?document.body.clientHeight-230:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight-230:void 0},splitArray:function(e,n){for(var t=[],a=[],r=0;r<e.length;r++)t.push(e[r]),(0!==r&&(r+1)%n===0||r===e.length-1)&&(a.push(t),t=[]);return a},isValidIP:function(e){var n=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;return n.test(e)},isValidMac:function(e){var n=/^[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}$/;return n.test(e)},formatDate:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss",t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,c=t.getDate(),o=t.getHours(),s=t.getMinutes(),u=t.getSeconds(),i=Array.apply(null,Array(10)).map((function(e,n){return"0"+n})),f=n.replace(/YYYY/g,a).replace(/MM/g,i[r]||r).replace(/DD/g,i[c]||c).replace(/hh/g,i[o]||o).replace(/mm/g,i[s]||s).replace(/ss/g,i[u]||u);return f},randomNum:function(e,n){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(n-e+1)+e,10);default:return 0}},getIndex:function(e,n){for(var t=0;t<e.length;t++)if(this[t]==n)return t},isIE:function(){return!!(window.ActiveXObject||"ActiveXObject"in window)},findIndex:function(e,n){if(Array.prototype.indexOf)return e.indexOf(n);for(var t=0;t<e.length;t++)return e[t]===n?t:-1},removeByName:function(e,n){for(var t=0;t<e.length;t++)if(e[t].name===n){e.splice(t,1);break}return e},IsPC:function(){for(var e=navigator.userAgent,n=["Android","iPhone","SymbianOS","Windows Phone","MeeGo","BB10","iPad","iPod"],t=!0,a=0;a<n.length;a++)if(e.indexOf(n[a])>0){t=!1;break}return t},deepCompare:function(e,n){var t,a,r,c;function o(e,n){var t;if(isNaN(e)&&isNaN(n)&&"number"===typeof e&&"number"===typeof n)return!0;if(e===n)return!0;if("function"===typeof e&&"function"===typeof n||e instanceof Date&&n instanceof Date||e instanceof RegExp&&n instanceof RegExp||e instanceof String&&n instanceof String||e instanceof Number&&n instanceof Number)return e.toString()===n.toString();if(!(e instanceof Object&&n instanceof Object))return!1;if(e.isPrototypeOf(n)||n.isPrototypeOf(e))return!1;if(e.constructor!==n.constructor)return!1;if(e.prototype!==n.prototype)return!1;if(r.indexOf(e)>-1||c.indexOf(n)>-1)return!1;for(t in n){if(n.hasOwnProperty(t)!==e.hasOwnProperty(t))return!1;if(Object(N["a"])(n[t])!==Object(N["a"])(e[t]))return!1}for(t in e){if(n.hasOwnProperty(t)!==e.hasOwnProperty(t))return!1;if(Object(N["a"])(n[t])!==Object(N["a"])(e[t]))return!1;switch(Object(N["a"])(e[t])){case"object":case"function":if(r.push(e),c.push(n),!o(e[t],n[t]))return!1;r.pop(),c.pop();break;default:if(e[t]!==n[t])return!1;break}}return!0}if(console.log(e,n),arguments.length<1)return!0;for(t=1,a=arguments.length;t<a;t++)if(r=[],c=[],!o(arguments[0],arguments[t]))return!1;return!0}},_=t("f23d"),L=t("b970"),D=t("2819"),$=t.n(D);t("202f"),t("157a"),t("10d9");a["a"].config.productionTip=!1,a["a"].prototype.$bus=E["a"],a["a"].prototype.$util=C,a["a"].use(_["a"]),a["a"].use(L["a"]),a["a"].use($.a),new a["a"]({i18n:u,store:k,router:S,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,n,t){}});