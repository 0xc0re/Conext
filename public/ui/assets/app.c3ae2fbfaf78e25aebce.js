webpackJsonp([21],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"4/hK":function(t,e){},"4Atj":function(t,e,n){var r={"./anonymous.js":"MiiD","./authenticated.js":"OQSI","./check-auth.js":"bfkc"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4Atj"},"4swq":function(t,e,n){"use strict";n.d(e,"c",function(){return c}),n.d(e,"d",function(){return f}),n.d(e,"b",function(){return l}),n.d(e,"a",function(){return d});var r=n("mvHQ"),o=n.n(r),a=n("ytdl"),i=n.n(a),u=n("lbHh"),s=n.n(u),c=function(t){window.localStorage.setItem("token",t),window.localStorage.setItem("user",o()(i()(t))),s.a.set("jwt",t)},f=function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),window.localStorage.removeItem("secret"),s.a.remove("jwt")},l=function(){var t=window.localStorage.user;return t?JSON.parse(t):void 0},d=function(){var t=window.localStorage.token;return t||void 0}},"58j5":function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},"5W1q":function(t,e){},"8XKr":function(t,e){},BJaL:function(t,e,n){"use strict";var r=n("/5sW"),o=n("3EgV"),a=n.n(o);r.default.use(a.a,{})},BnaQ:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},F88d:function(t,e,n){"use strict";var r=n("BnaQ"),o=n("P+aQ"),a=!1;var i=function(t){a||n("8XKr")},u=n("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-loading.vue",e.a=u.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var u=n,s=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var l=s[f]||c,d={};r.forEach(function(t){void 0!==l[t]&&(d[t]=l[t])});var h={};o.forEach(function(t){"function"==typeof l[t]&&(h[t]=l[t].bind(u))});var p=h.beforeEnter;h.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),p)return p.call(u,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:d,on:h},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),u=n("/5sW"),s=n("NYxO");u.default.use(s.default);var c=n("QA5y"),f=c.keys(),l={},d=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(d=t)}),d&&(l=_(d)),"function"!=typeof l){l.modules||(l.modules={});var h=!0,p=!1,m=void 0;try{for(var v,x=i()(f);!(h=(v=x.next()).done);h=!0){var y=v.value,w=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==w){var g=w.split(/\//);(t=C(l,g))[w=g.pop()]=_(y),t[w].namespaced=!0}}}catch(t){p=!0,m=t}finally{try{!h&&x.return&&x.return()}finally{if(p)throw m}}}var b=l instanceof Function?l:function(){return new s.default.Store(o()({strict:!1},l,{state:l.state instanceof Function?l.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},LxZp:function(t,e){},MiiD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.store,n=t.redirect;if(e.getters["auth/isAuthenticated"])return n("/")}},NaCs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o}),n.d(e,"getters",function(){return a});var r=function(){return{user:null,token:null}},o={SET_USER:function(t,e){t.user=e||null},SET_TOKEN:function(t,e){t.token=e||null}},a={isAuthenticated:function(t){return!!t.user},loggedUser:function(t){return t.user},loggedToken:function(t){return t.token}}},OQSI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.store,n=t.redirect;if(!e.getters["auth/isAuthenticated"])return n("/servers")}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},PTGN:function(t,e){},QA5y:function(t,e,n){var r={"./auth.js":"NaCs","./index.js":"vdRI"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QCv7:function(t,e){},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Go back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},R2N8:function(t,e,n){"use strict";var r=n("mvHQ"),o=n.n(r),a=n("/5sW"),i=n("Av7u"),u="2SAQLEJuhV2LVANqgZzomZXVlPK9q8N5",s={install:function(t,e){t.prototype.$storage={get:function(t){if(window.localStorage.getItem(e.prefix+t))try{return JSON.parse(i.AES.decrypt(window.localStorage.getItem(e.prefix+t),u).toString(i.enc.Utf8))}catch(t){this.clear(!0)}return null},set:function(t,n){window.localStorage.setItem(e.prefix+t,i.AES.encrypt(o()(n),u))},isset:function(t){return e.prefix+t in window.localStorage},remove:function(t){window.localStorage.removeItem(e.prefix+t)},clear:function(t){for(var n=[],r=0;r<window.localStorage.length;r++)(t||"storage_servers"!=window.localStorage.key(r))&&window.localStorage.key(r).substring(0,e.prefix.length)==e.prefix&&n.push(window.localStorage.key(r));for(r=0;r<n.length;r++)window.localStorage.removeItem(n[r])}}}};a.default.use(s,{prefix:"storage_"})},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),u=n.n(i),s=n("//Fk"),c=n.n(s),f=n("Xxa5"),l=n.n(f),d=n("mvHQ"),h=n.n(d),p=n("exGp"),m=n.n(p),v=n("fZjL"),x=n.n(v),y=n("woOf"),w=n.n(y),g=n("/5sW"),b=n("unZF"),_=n("qcny"),C=n("YLfZ"),k=(r=m()(l.a.mark(function t(e,n,r){var o,a,i=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!S.nuxt.err||n.path!==e.path,this._queryChanged=h()(e.query)!==h()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),$=(o=m()(l.a.mark(function t(e,n,r){var o,a,i,u,s,f,d,h,p=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&p.$loading.finish&&p.$loading.finish(),n.path!==t.path&&p.$loading.pause&&p.$loading.pause(),!o){o=!0;var e=[];j=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)(S,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=S.nuxt.dateErr,this._hadError=!!S.nuxt.err,i=[],(u=Object(C.e)(e,i)).length){t.next=24;break}return t.next=13,I.call(this,u,S.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(S.context):_.a.layout);case 17:return s=t.sent,t.next=20,I.call(this,u,S.context,s);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return S.context.error({statusCode:404,message:"Page could not be found"}),t.abrupt("return",r());case 24:return u.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(A(u,e,n)),t.prev=26,t.next=29,I.call(this,u,S.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!S.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=u[0].options.layout)&&(f=f(S.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,I.call(this,u,S.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!S.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(d=!0,u.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:R}))}),d){t.next=49;break}return this.error({statusCode:404,message:"Page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(u.map(function(t,n){if(t._path=Object(C.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,p._pathChanged&&t._path!==j[n])t._dataRefresh=!0;else if(!p._pathChanged&&p._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return p._diffQuery[t]}))}if(!p._hadError&&p._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,s=a&&u?30:45;if(a){var f=Object(C.j)(t.options.asyncData,S.context).then(function(e){Object(C.a)(t,e),p.$loading.increase&&p.$loading.increase(s)});o.push(f)}if(u){var l=t.options.fetch(S.context);l&&(l instanceof c.a||"function"==typeof l.then)||(l=c.a.resolve(l)),l.then(function(t){p.$loading.increase&&p.$loading.increase(s)}),o.push(l)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),j=u.map(function(t,n){return Object(C.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(h=_.a.layout)&&(h=h(S.context)),t.next=63,this.loadLayout(h);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),E=(a=m()(l.a.mark(function t(e){var n,r,o,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return S=e.app,O=e.router,R=e.store,t.next=5,c.a.all(N(O));case 5:return n=t.sent,r=new g.default(S),o=T.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),g.default.nextTick(function(){U(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(A(n,O.currentRoute)),j=O.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(O.currentRoute.params)})),r.$loading={},T.error&&r.error(T.error),O.beforeEach(k.bind(r)),O.beforeEach($.bind(r)),O.afterEach(L),O.afterEach(Q.bind(r)),!T.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:$.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return L(O.currentRoute,O.currentRoute),M.call(r,O.currentRoute),void a();O.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),j=[],S=void 0,O=void 0,R=void 0,T=window.__NUXT__||{};function A(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=w()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);x()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function q(t,e){return T.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function N(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=m()(l.a.mark(function t(e,r,o,a,i){var u;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return u=q(Object(C.l)(e),T.data?T.data[i]:null),o.components[a]=u,t.abrupt("return",u);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function I(t,e,n){var r=this,o=["check-auth"],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof b.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),b.a[t])}),!a)return Object(C.i)(o,e)}function L(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":u()(t))||t.options||((t=g.default.extend(t))._Ctor=t,n.components[r]=t),t})}function M(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(S.context)),this.setLayout(e)}function Q(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||g.default.nextTick(function(){Object(C.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&j[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)g.default.set(t.$data,r,n[r])}}),M.call(n,t)})}function U(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){g.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(E).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},TH4K:function(t,e,n){"use strict";var r=n("/5sW"),o=n("E5Az"),a=n.n(o),i=n("c6RA"),u=(n.n(i),n("aGTD")),s=(n.n(u),n("U80t")),c=(n.n(s),n("c+I8")),f=(n.n(c),n("QSKu")),l=(n.n(f),n("/A6h")),d=(n.n(l),n("OkRY")),h=(n.n(d),n("6S2o")),p=(n.n(h),n("vq+x")),m=(n.n(p),n("Z6qg")),v=(n.n(m),n("RkhK")),x=(n.n(v),n("LxZp")),y=(n.n(x),n("CK2l")),w=(n.n(y),n("7Xsf")),g=(n.n(w),n("Yokd")),b=(n.n(g),n("fo6W")),_=(n.n(b),n("soCA")),C=(n.n(_),n("THjC")),k=(n.n(C),n("Kk9m")),$=(n.n(k),n("U3HU")),E=(n.n($),n("dxBS")),j=(n.n(E),n("TQy8"));n.n(j);r.default.use(a.a)},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=w,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return p()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=b,e.k=_,n.d(e,"h",function(){return $}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return d.a.resolve();return j(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=j,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},u=r||{},s=u.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l,d=i[f.name];if(null==d){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<d.length;h++){if(l=s(d[h]),!e[c].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(l)+"`");a+=(0===h?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(d),!e[c].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');a+=f.prefix+l}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",u=e&&e.delimiter||"/";for(;null!=(n=S.exec(t));){var s=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+s.length,c)i+=c[1];else{var l=t[a],d=n[2],h=n[3],p=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=d&&null!=l&&l!==d,w="+"===v||"*"===v,g="?"===v||"*"===v,b=n[2]||u,_=p||m;r.push({name:h||o++,prefix:d||"",delimiter:b,optional:g,repeat:w,partial:y,asterisk:!!x,pattern:_?T(_):x?".*":"[^"+R(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),u=n("Xxa5"),s=n.n(u),c=n("exGp"),f=n.n(c),l=n("//Fk"),d=n.n(l),h=n("fZjL"),p=n.n(h),m=n("Dd8w"),v=n.n(m),x=n("/5sW"),y=function(){return{}};function w(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return p()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function b(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return p()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return d.a.all(b(t,(e=f()(s.a.mark(function t(e,r,o,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=w(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,k,$=(C=f()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",v()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),E=(k=f()(s.a.mark(function t(e,n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/ui/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,$(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,$(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function j(t,e){var n=void 0;return(n=2===t.length?new d.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof d.a||"function"==typeof n.then)||(n=d.a.resolve(n)),n}var S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),u=a.filter(Boolean).join("/"),s=void 0;return 2===(a=u.split("#")).length&&(u=a[0],s=a[1]),i+=u?"/"+u:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return p()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=s?"#"+s:""}},Yokd:function(t,e){},bfkc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("4swq");e.default=function(t){var e=t.store;t.req;var n=Object(r.b)(),o=Object(r.a)();e.commit("auth/SET_USER",n),e.commit("auth/SET_TOKEN",o)}},ct3O:function(t,e,n){"use strict";var r=n("58j5"),o=n("QhKw"),a=!1;var i=function(t){a||n("PTGN")},u=n("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-error.vue",e.a=u.exports},fIPj:function(t,e){},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/ui/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:E,routes:[{path:"/servers",component:u,children:[{path:"",component:s,name:"servers"},{path:"add",component:c,name:"servers-add"}]},{path:"/routes",component:f,name:"routes",children:[{path:"web-forwards",component:l,name:"routes-web-forwards"}]},{path:"/api",component:d,name:"api",children:[{path:"data",component:h,name:"api-data"}]},{path:"/lxd",component:p,name:"lxd",children:[{path:"containers",component:m,name:"lxd-containers"}]},{path:"/server",component:v,name:"server",children:[{path:"top",component:x,name:"server-top"},{path:"network-connections",component:y,name:"server-network-connections"},{path:"logins",component:w,name:"server-logins"},{path:"cpu-information",component:g,name:"server-cpu-information"},{path:"disks",component:b,name:"server-disks"},{path:"memory",component:_,name:"server-memory"},{path:"process-tree",component:C,name:"server-process-tree"}]},{path:"/auth/sign-out",component:k,name:"auth-sign-out"},{path:"/",component:$,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var u=function(){return n.e(5).then(n.bind(null,"WGlu")).then(function(t){return t.default||t})},s=function(){return n.e(3).then(n.bind(null,"aUfn")).then(function(t){return t.default||t})},c=function(){return n.e(4).then(n.bind(null,"9c5Z")).then(function(t){return t.default||t})},f=function(){return n.e(14).then(n.bind(null,"JMXi")).then(function(t){return t.default||t})},l=function(){return n.e(0).then(n.bind(null,"gf0O")).then(function(t){return t.default||t})},d=function(){return n.e(19).then(n.bind(null,"1MLv")).then(function(t){return t.default||t})},h=function(){return n.e(18).then(n.bind(null,"F1c2")).then(function(t){return t.default||t})},p=function(){return n.e(15).then(n.bind(null,"iIPz")).then(function(t){return t.default||t})},m=function(){return n.e(1).then(n.bind(null,"QoYn")).then(function(t){return t.default||t})},v=function(){return n.e(13).then(n.bind(null,"a/Zj")).then(function(t){return t.default||t})},x=function(){return n.e(6).then(n.bind(null,"CvfV")).then(function(t){return t.default||t})},y=function(){return n.e(8).then(n.bind(null,"O6NG")).then(function(t){return t.default||t})},w=function(){return n.e(10).then(n.bind(null,"POTC")).then(function(t){return t.default||t})},g=function(){return n.e(12).then(n.bind(null,"7H4D")).then(function(t){return t.default||t})},b=function(){return n.e(11).then(n.bind(null,"raem")).then(function(t){return t.default||t})},_=function(){return n.e(9).then(n.bind(null,"GTE6")).then(function(t){return t.default||t})},C=function(){return n.e(7).then(n.bind(null,"02cY")).then(function(t){return t.default||t})},k=function(){return n.e(17).then(n.bind(null,"MZEA")).then(function(t){return t.default||t})},$=function(){return n.e(16).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var E=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return T});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),u=n.n(i),s=n("woOf"),c=n.n(s),f=n("Dd8w"),l=n.n(f),d=n("exGp"),h=n.n(d),p=n("MU8w"),m=(n.n(p),n("/5sW")),v=n("p3jY"),x=n.n(v),y=n("mtxM"),w=n("0F0d"),g=n("HBB+"),b=n("WRRc"),_=n("ct3O"),C=n("Hot+"),k=n("yTq1"),$=n("YLfZ"),E=n("J2Ti"),j=n("BJaL"),S=n("R2N8"),O=n("TH4K");n.d(e,"a",function(){return _.a});var R,T=(R=h()(o.a.mark(function t(e){var n,r,a,i,s,f,d;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(E.a)(e)).$router=n,a=l()({router:n,store:r,nuxt:{defaultTransition:A,transitions:[A],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},A,{name:t}):c()({},A,t):A}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},s=void 0,e?s=n.resolve(e.url).route:(f=Object($.d)(n.options.base),s=n.resolve(f).route),t.next=10,Object($.m)(a,{route:s,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||u()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof j.default){t.next=15;break}return t.next=15,Object(j.default)(a.context,d);case 15:if("function"!=typeof S.default){t.next=19;break}return t.next=19,Object(S.default)(a.context,d);case 19:if("function"!=typeof O.default){t.next=22;break}return t.next=22,Object(O.default)(a.context,d);case 22:t.next=25;break;case 25:return t.abrupt("return",{app:a,router:n,store:r});case 26:case"end":return t.stop()}},t,this)})),function(t){return R.apply(this,arguments)});m.default.component(w.a.name,w.a),m.default.component(g.a.name,g.a),m.default.component(b.a.name,b.a),m.default.component(C.a.name,C.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var A={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function u(t){var e=a(t);return e.default?e.default:e}var s={},c=!0,f=!1,l=void 0;try{for(var d,h=o()(i);!(c=(d=h.next()).done);c=!0){var p=d.value;s[p.replace(/^\.\//,"").replace(/\.(js)$/,"")]=u(p)}}catch(t){f=!0,l=t}finally{try{!c&&h.return&&h.return()}finally{if(f)throw l}}e.a=s},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{counter:0}},o={increment:function(t){t.counter++}}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),u=n("QCv7"),s=(n.n(u),n("fIPj")),c=(n.n(s),n("4/hK")),f=(n.n(c),n("5W1q")),l=(n.n(f),{_default:function(){return n.e(2).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),d={};e.a={head:{title:"",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&d["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=d[e],this.layout},loadLayout:function(t){var e=this;t&&(l["_"+t]||d["_"+t])||(t="default");var n="_"+t;return d[n]?o.a.resolve(d[n]):l[n]().then(function(t){return d[n]=t,delete l[n],d[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);