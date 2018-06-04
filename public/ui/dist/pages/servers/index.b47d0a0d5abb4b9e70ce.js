webpackJsonp([10],{"/LJZ":function(t,e,s){"use strict";var i=s("woOf"),r=s.n(i),o=s("mvHQ"),a=s.n(o),n=s("Dd8w"),l=s.n(n),c=s("NYxO"),d=s("4swq"),u=s("mtWM"),v=s.n(u);e.a={middleware:[],components:{},computed:l()({},Object(c.mapGetters)({isAuthenticated:"auth/isAuthenticated",loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"}),{formTitle:function(){return-1===this.editedIndex?"Add Server":"Edit Server"}}),data:function(){return{error:"",dialog:!1,headers:[{text:"Label",align:"left",value:"label"},{text:"Host",value:"host"},{text:"Secret",value:"secret"},{text:"Status",value:"status"},{text:"Actions",value:"host",sortable:!1}],items:[],editedIndex:-1,editedItem:{host:"",secret:""},defaultItem:{host:"",secret:""},valid:!0,labelRule:[function(t){return!!t||"Label is required"}],hostRule:[function(t){return!!t||"Host is required"},function(t){return t&&/^https?:\/\/.+:\d+/i.test(t)||"Host must be in the following format: "+window.location.protocol+"//"+window.location.hostname+":"+window.location.port}],secretRule:[function(t){return!!t||"Secret is required"}]}},mounted:function(){var t=this;this.initialize(),document.forms.import_form.elements.import_file.onchange=function(e){t.import_servers(e)}},watch:{dialog:function(t){t||this.close()}},methods:{initialize:function(){var t=this;this.items=this.$storage.get("servers")||[],setTimeout(function(){t.items.forEach(function(e){t.status(e)})},100)},export_servers:function(){var t=[];this.items.forEach(function(e){t.push({label:e.label,host:e.host,secret:e.secret})});var e=document.createElement("a");e.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(a()(t,null,2))),e.setAttribute("download","servers.json"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)},import_servers:function(t){var e=this;if(window.FileReader){this.error="";var s=new FileReader;s.onload=function(t){if(2==t.target.readyState)if(t.target.error)e.error="Error reading file.";else try{var s=JSON.parse(t.target.result),i=[];s.forEach(function(t){i.push({label:t.label||"-",host:t.host||"-",secret:t.secret||"-"})}),s.length>0?(e.items=i,e.$storage.set("servers",e.items),setTimeout(function(){e.initialize()},300)):e.error="Nothing to import"}catch(t){e.error="Invalid file."}},s.readAsText(t.target.files[0])}else this.error="Browser not supported."},authItem:function(t){var e=this;this.editedIndex=this.items.indexOf(t),this.editedItem=r()({},t),v.a.post(t.host+"/auth",{label:t.label,server:t.host,secret:t.secret}).then(function(t){t.data.constructor!==Object?e.error="Failed to connect to host, check details.":(Object(d.c)(t.data.token),e.$router.replace("/"))}).catch(function(t){t.response?401===t.response.status?e.error="Incorrect secret!":e.error="Failed to connect to host, invalid connection details.":t.request?e.error="Failed to connect to host, invalid connection details.":e.error=t.message})},editItem:function(t){this.editedIndex=this.items.indexOf(t),this.editedItem=r()({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.$prompt.show({persistent:!0,width:400,toolbar:{color:"red darken-3",closable:!1},title:"Delete server?",text:"Are you sure you want to delete the <b>"+t.label+"</b> server?",buttons:[{title:"Yes",color:"success",handler:function(){var s=e.items.indexOf(t);e.items.splice(s,1),e.$storage.set("servers",e.items)}},{title:"No",color:"error"}]})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=r()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;this.$refs.form.validate()&&(this.editedIndex>-1?r()(this.items[this.editedIndex],this.editedItem):this.items.push(this.editedItem),this.$storage.set("servers",this.items),this.close(),setTimeout(function(){t.initialize()},100))},status:function(t){var e=this,s=this.items.indexOf(t);v.a.get(t.host+"/ping").then(function(t){e.$set(e.items[s],"status",{status:"pong"===t.data,msg:"pong"===t.data?"Connectable":"Invalid Host"})}).catch(function(t){t.response?e.$set(e.items[s],"status",{status:!1,msg:"Failed to connect"}):(t.request,e.$set(e.items[s],"status",{status:!1,msg:"Failed to connect"}))})}}}},MKgQ:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"input[type=file]{display:none}",""])},RDx6:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",[s("v-container",{attrs:{fluid:"",tag:"section",id:"grid"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[s("v-layout",{attrs:{column:""}},[s("v-flex",{staticClass:"display mb-2",attrs:{tag:"h1"}},[t._v("\n              My Servers\n              "),s("v-btn",{staticStyle:{float:"right"},attrs:{color:"success",ripple:!1},on:{click:function(e){t.dialog=!0}}},[t._v("Add Server")]),t.items.length>0?s("v-btn",{staticStyle:{float:"right"},attrs:{dark:"",color:"blue-grey lighten-2",ripple:!1},on:{click:function(e){t.export_servers()}}},[t._v("Export")]):t._e(),s("form",{staticStyle:{display:"inline-block",float:"right"},attrs:{id:"import_form"}},[s("label",{staticClass:"btn theme--dark blue-grey lighten-2",staticStyle:{cursor:"pointer"},attrs:{for:"import_file"}},[t._v("\n                  Import\n                ")]),s("input",{attrs:{id:"import_file",name:"file",type:"file",accept:".json"}})])],1),s("v-flex",[s("v-alert",{attrs:{type:"error",value:t.error}},[t._v("\n                "+t._s(t.error)+"\n              ")]),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[s("td",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){t.authItem(e.item)}}},[t._v(t._s(e.item.label))])]),s("td",[t._v(t._s(e.item.host))]),s("td",[t._v(t._s(e.item.secret))]),s("td",[e.item.status&&e.item.status.status?s("span",{attrs:{left:""}},[s("v-icon",{attrs:{color:"green"}},[t._v("check_circle")]),s("span",[t._v(t._s(e.item.status.msg))])],1):t._e(),e.item.status&&!e.item.status.status&&e.item.status.msg?s("span",{attrs:{left:""}},[s("v-icon",{attrs:{color:"red"}},[t._v("error")]),s("span",[t._v(t._s(e.item.status.msg))])],1):t._e(),!e.item.status||e.item.status&&!e.item.status.status&&!e.item.status.msg?s("span",{attrs:{left:""}},[s("v-icon",{attrs:{color:"orange"}},[t._v("error_outline")]),s("span",[t._v("Checking")])],1):t._e()]),s("td",{staticClass:"justify-center layout px-0"},[s("v-tooltip",{attrs:{left:""}},[s("v-btn",{staticClass:"mx-0",attrs:{slot:"activator",icon:""},on:{click:function(s){t.editItem(e.item)}},slot:"activator"},[s("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),s("span",[t._v("Edit")])],1),s("v-tooltip",{attrs:{left:""}},[s("v-btn",{staticClass:"mx-0",attrs:{slot:"activator",icon:""},on:{click:function(s){t.deleteItem(e.item)}},slot:"activator"},[s("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1),s("span",[t._v("Delete")])],1)],1)]}}])},[s("template",{slot:"no-data"},[t._v("\n                  You have not added any servers, add a new server to continue.\n                ")])],2),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),s("v-card-text",[s("v-alert",{attrs:{outline:"",color:"info",icon:"info",value:!0}},[t._v("\n                      Servers are securely stored in your browser for easy selection.\n                    ")]),s("v-container",{attrs:{"grid-list-md":""}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{label:"Label",rules:t.labelRule,required:""},model:{value:t.editedItem.label,callback:function(e){t.$set(t.editedItem,"label",e)},expression:"editedItem.label"}}),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{attrs:{label:"Host",rules:t.hostRule,required:""},model:{value:t.editedItem.host,callback:function(e){t.$set(t.editedItem,"host",e)},expression:"editedItem.host"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{attrs:{label:"Secret",rules:t.secretRule,required:""},model:{value:t.editedItem.secret,callback:function(e){t.$set(t.editedItem,"secret",e)},expression:"editedItem.secret"}})],1)],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},aUfn:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("/LJZ"),r=s("RDx6"),o=!1;var a=function(t){o||s("gRt1")},n=s("VU/8")(i.a,r.a,!1,a,null,null);n.options.__file="pages/servers/index.vue",e.default=n.exports},gRt1:function(t,e,s){var i=s("MKgQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("bf32465e",i,!1,{sourceMap:!1})}});