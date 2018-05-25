webpackJsonp([12],{"+mGa":function(t,e,a){var r=a("XY6V");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("0921f27a",r,!1,{sourceMap:!1})},TFRu:function(t,e,a){"use strict";var r=a("woOf"),i=a.n(r),n=a("Xxa5"),s=a.n(n),o=a("exGp"),l=a.n(o),c=a("Dd8w"),d=a.n(c),u=a("NYxO"),p=(a("4swq"),a("mtWM")),m=a.n(p);e.a={middleware:["authenticated"],components:{},computed:d()({},Object(u.mapGetters)({isAuthenticated:"auth/isAuthenticated",loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"})),data:function(){return{error:"",snackbar:!1,snackbarColor:"green",snackbarText:"",snackbarTimeout:5e3,items:[],tableLoading:!0,tableNoData:"You have not added any web forwards.",tableHeaders:[{text:"Label",value:"label"},{text:"IP",value:"ip"},{text:"Port",value:"port"},{text:"Domains",value:"ownDomain"},{text:"SSL",value:"ssl_type"},{text:"Actions",value:"name",sortable:!1,align:"right"}],itemActions:[{title:"Start"},{title:"Stop"},{title:"Delete"}],dialog:!1,editingIndex:-1,editingItem:{id:-1,label:"",name:"",ssl_type:"",letsencrypt:!1,added:"",updated:"",has_change:1,has_error:0,delete:0,enabled:1,update_ip:0,ip:"",port:"",error:"",ownDomain:[],ownUpstream:[]},defaultItem:{id:-1,label:"",name:"",ssl_type:"",letsencrypt:!1,added:"",updated:"",has_change:1,has_error:0,delete:0,enabled:1,update_ip:0,ip:"",port:"",error:"",ownDomain:[],ownUpstream:[]},newDomain:"",newUpstream:{ip:"",port:""},valid:!0,labelRule:[function(t){return!!t||"Label is required"},function(t){return t&&t.length<=100||"Label must be less than 100 characters"}]}},mounted:function(){this.initialize()},watch:{dialog:function(t){t||this.close()}},methods:{initialize:function(){var t=l()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loggedUser||this.$router.replace("/servers"),m.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,t.next=5,m.a.get(this.loggedUser.sub+"/api/routes/web-forwards");case 5:e=t.sent,this.items=e.data.data,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),this.tableNoData="No data.",this.error="Could not fetch data from server.";case 13:this.tableLoading=!1;case 14:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),addDomain:function(){this.editingItem.ownDomain||(this.editingItem.ownDomain=[]),this.editingItem.ownDomain.unshift({name:this.newDomain}),this.newDomain=""},removeDomain:function(t){var e=this.editingItem.ownDomain.indexOf(t);this.editingItem.ownDomain.splice(e,1)},addUpstream:function(){this.editingItem.ownUpstream||(this.editingItem.ownUpstream=[]),this.editingItem.ownUpstream.unshift({ip:this.newUpstream.ip,port:this.newUpstream.port}),this.newUpstream={ip:"",port:""}},removeUpstream:function(t){var e=this.editingItem.ownUpstream.indexOf(t);this.editingItem.ownUpstream.splice(e,1)},editItem:function(t){this.editingIndex=this.items.indexOf(t),"letsencrypt"===t.ssl_type&&(t.letsencrypt=!0),this.editingItem=i()({},t),this.dialog=!0},deleteItem:function(){var t=l()(s.a.mark(function t(e){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.items.indexOf(e),this.items.splice(a,1),t.prev=2,this.loggedUser||this.$router.replace("/servers"),m.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,t.next=7,m.a.delete(this.loggedUser.sub+"/api/routes/web-forwards",{data:e});case 7:t.sent,this.snackbar=!0,this.snackbarText="Web forward successfully deleted.",t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),this.error="Could not delete web forward from server.";case 15:case"end":return t.stop()}},t,this,[[2,12]])}));return function(e){return t.apply(this,arguments)}}(),save:function(){var t=l()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=19;break}return this.newDomain.length>0&&this.addDomain(),this.newUpstream.ip&&this.addUpstream(),this.editingIndex>-1?i()(this.items[this.editingIndex],this.editingItem):this.items.push(i()({},this.editingItem)),t.prev=4,this.loggedUser||this.$router.replace("/servers"),m.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,t.next=9,m.a.post(this.loggedUser.sub+"/api/routes/web-forwards",this.editingItem);case 9:t.sent,this.snackbar=!0,this.snackbarText="Web forward successfully saved.",t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),this.error="Could not save web forward to server.";case 17:this.initialize(),this.close();case 19:case"end":return t.stop()}},t,this,[[4,14]])}));return function(){return t.apply(this,arguments)}}(),close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editingItem=i()({},t.defaultItem),t.editingIndex=-1},300)}}}},XY6V:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},gf0O:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("TFRu"),i=a("uy+8"),n=!1;var s=function(t){n||a("+mGa")},o=a("VU/8")(r.a,i.a,!1,s,null,null);o.options.__file="pages/routes/web-forwards.vue",e.default=o.exports},"uy+8":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-snackbar",{attrs:{top:"",timeout:t.snackbarTimeout,color:t.snackbarColor},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("v-content",[a("v-container",{attrs:{fluid:"",tag:"section",id:"grid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"display mb-2",attrs:{tag:"h1"}},[t._v("\n              Routes - Web Forwards\n              "),a("v-btn",{staticStyle:{float:"right"},attrs:{color:"success"},on:{click:function(e){t.dialog=!0}}},[t._v("New Forward")])],1),a("v-flex",[a("v-alert",{attrs:{type:"error",value:t.error}},[t._v("\n                "+t._s(t.error)+"\n              ")]),a("p",[t._v("Web forwards allow you to route HTTP/S traffic to containers or external upstreams.")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.tableHeaders,items:t.items,"hide-actions":"",loading:t.tableLoading},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){a.stopPropagation(),t.editItem(e.item)}}},[t._v(t._s(e.item.label))])]),a("td",[t._v(t._s(e.item.ip))]),a("td",[t._v(t._s(e.item.port))]),a("td",[a("ul",t._l(e.item.ownDomain,function(e){return a("li",{key:e.name,staticStyle:{"list-style-type":"none"}},[t._v(t._s(e.name))])}))]),a("td",["letsencrypt"===e.item.ssl_type?a("v-icon",{attrs:{color:"blue-grey lighten-3"}},[t._v("https")]):t._e()],1),a("td",[a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{icon:""},on:{click:function(a){t.deleteItem(e.item)}}},[a("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),a("template",{slot:"no-data"},[t._v("\n                  "+t._s(t.tableLoading?"Fetching data, please wait...":t.tableNoData)+"\n                ")])],2)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"900px",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"light-blue darken-3"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v(t._s(-1===t.editingIndex?"New":"Edit")+" Web Forward")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.save()}}},[t._v("Save")])],1)],1),a("v-card-text",{staticStyle:{padding:"0px"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.labelRule,label:"Label:",placeholder:"",required:"",hint:"Enter a label for the web forward."},model:{value:t.editingItem.label,callback:function(e){t.$set(t.editingItem,"label",e)},expression:"editingItem.label"}}),a("h3",{staticStyle:{"margin-top":"15px"}},[t._v("Domains")]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs11:""}},[a("v-text-field",{attrs:{label:"Domain:",hint:"Enter a domain name to forward to upstream/s."},model:{value:t.newDomain,callback:function(e){t.newDomain=e},expression:"newDomain"}})],1),a("v-flex",{attrs:{xs1:""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"success"},nativeOn:{click:function(e){return t.addDomain(e)}}},[a("v-icon",[t._v("add")])],1)],1)],1),t._l(t.editingItem.ownDomain,function(e){return a("v-layout",{key:e.id,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs11:""}},[a("v-text-field",{attrs:{label:"Domain:",hint:"Empty or invalid domains are removed."},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"domain.name"}})],1),a("v-flex",{attrs:{xs1:""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"error"},nativeOn:{click:function(a){t.removeDomain(e)}}},[a("v-icon",[t._v("remove")])],1)],1)],1)}),a("h3",{staticStyle:{"margin-top":"15px"}},[t._v("Upstream/s")]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"IP Address:",hint:"Enter upstream IP address."},model:{value:t.newUpstream.ip,callback:function(e){t.$set(t.newUpstream,"ip",e)},expression:"newUpstream.ip"}})],1),a("v-flex",{attrs:{xs5:""}},[a("v-text-field",{attrs:{label:"Port:",hint:"Enter upstream port."},model:{value:t.newUpstream.port,callback:function(e){t.$set(t.newUpstream,"port",e)},expression:"newUpstream.port"}})],1),a("v-flex",{attrs:{xs1:""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"success"},nativeOn:{click:function(e){return t.addUpstream(e)}}},[a("v-icon",[t._v("add")])],1)],1)],1),t._l(t.editingItem.ownUpstream,function(e){return a("v-layout",{key:e.id,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"IP Address:",hint:"Empty or invalid ips are removed."},model:{value:e.ip,callback:function(a){t.$set(e,"ip",a)},expression:"upstream.ip"}})],1),a("v-flex",{attrs:{xs5:""}},[a("v-text-field",{attrs:{label:"Port:",hint:"Empty or invalid ports are removed."},model:{value:e.port,callback:function(a){t.$set(e,"port",a)},expression:"upstream.port"}})],1),a("v-flex",{attrs:{xs1:""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"error"},nativeOn:{click:function(a){t.removeUpstream(e)}}},[a("v-icon",[t._v("remove")])],1)],1)],1)}),a("h3",{staticStyle:{"margin-top":"15px"}},[t._v("SSL")]),a("v-checkbox",{attrs:{label:"Let's Encrypt"},model:{value:t.editingItem.letsencrypt,callback:function(e){t.$set(t.editingItem,"letsencrypt",e)},expression:"editingItem.letsencrypt"}})],2)],1)],1)],1),a("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i}});