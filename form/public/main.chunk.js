(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"home":"principal","about":"informaci\xf3n","nests":"db","dashboard":"panel de control","nests-insert":"a\xf1adir nidos","username":"usuario","password":"contrase\xf1a","register":"registrarse","login":"entrar","logout":"cerrar","street":"calle","house_number_name":"No. / nombre","lat":"latitud","lon":"longitud","type":"construcci\xf3n","window":"ventana","cornice":"cornisa","crack":"grieta","cables":"cable","gable":"tejado","balcony":"balc\xf3n","facing":"orientaci\xf3n","N":"norte","NE":"norteste","E":"este","SE":"sudeste","S":"sur","SW":"sudoeste","W":"oeste","NW":"nortoeste","true":"Si","false":"No","destroyed":"destruida","date":"fecha","species":"especie","swift":"vencejo com\xfan","swallow":"golondrina com\xfan","martin":"avi\xf3n com\xfan","pallid_swift":"vencejo p\xe1lido","red_rumped_swallow":"golondrina d\xe1urica","height":"altura (en metros) ","qty":"cantidad","destroyed_date":"fecha de destrucci\xf3n","submit":"enviar","delete":"borrar ","delete_entry":"borrar entrada","update":"actualizar","logged_as":"session ","update_entry":"actualiza entrada","address":"direcci\xf3n","map_title":"distribuci\xf3n geografica"}')},105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(23),s=t.n(r),o=(t(79),t(73)),c=t(72),i=t(38),d=t(8),m=(t(56),t(69),t(70),"".concat(window.location.origin,"/form"),t(102)),u=d.b().shape({street:d.c().min(2,"Too Short!").max(50,"Too Long!").required("Required"),house_number_name:d.c().max(20,"Too Long!").required("Required"),species:d.b().shape({label:d.c().required("hey... this is required")}),lat:d.c().matches(/[0-9]+\./,"only a valid coordinate").required("Required"),lon:d.c().matches(/[0-9]+\./,"only a valid coordinate").required("Required"),date:d.a().required("Required"),qty:d.c().required("Required"),destroyed:d.c().required("Required"),destroyed_date:d.a().when("destroyed",{is:m[!0],then:d.a().required("date is required")})}),b=["window","cornice","crack","cables","gable"].map((function(e){return{value:m[e],label:m[e]}})),p=["swallow","swift","martin","pallid_swift","red_rumped_swallow"].map((function(e){return{value:m[e],label:m[e]}})),f=Object(o.a)(Array(20).keys()).map((function(e){return{value:e,label:e}})),g=["N","NE","E","SE","S","SW","W","NW"].map((function(e){return{value:m[e],label:m[e]}})),h=function(e){return n.a.createElement("div",null,n.a.createElement("small",{className:"text-danger"},e))},v=function(e){var a=document.getElementById("form"),t=Object(l.useRef)(null),r=a&&a.attributes&&a.attributes.data&&JSON.parse(a.attributes.data.nodeValue),s=Object(c.a)({initialValues:{street:r?r.street:"",house_number_name:r?r.house_number_name:"",lat:r?r.gps.match(/\((.*?)\)/)[1].split(",")[0]:"",lon:r?r.gps.match(/\((.*?)\)/)[1].split(",")[1]:"",species:r?{label:m[r.species],value:m[r.species]}:{label:m.swallow,value:m.swallow},type_of:r?{label:m[r.type],value:m[r.type]}:{label:"",value:""},height:r?{label:r.height,value:r.height}:{label:"",value:""},facing:r?{label:m[r.facing],value:m[r.facing]}:{label:"",value:""},date:r?r.date.substring(0,10):"",qty:"1",destroyed:r?{label:m[r.destroyed],value:m[r.destroyed]}:{label:m.false,value:m.false},destroyed_date:r&&null!==r.destroyed_date?r.destroyed_date.substring(0,10):""},validationSchema:u}),o=s.values,d=s.errors,v=s.touched,y=s.handleChange,E=s.handleBlur,N=s.isSubmitting,_=s.setSubmitting,w=s.setFieldValue,q=s.setFieldTouched;return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"card"},n.a.createElement("form",{method:"POST",ref:t,action:r?"/nests-update/".concat(r.id):"/nests-insert",onSubmit:function(e){console.log(d),_(!0),t.current.submit()}},n.a.createElement("input",{type:"hidden",name:"language",value:"spanish"}),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},m.street,n.a.createElement("input",{className:"form-control mx-sm-1",type:"text",name:"street",value:o.street,onChange:y,onBlur:E})),d.street&&v.street&&h(d.street)),n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},m.house_number_name,n.a.createElement("input",{className:"form-control ma-sm-1",type:"text",name:"house_number_name",onChange:y,value:o.house_number_name,onBlur:E})),d.house_number_name&&v.house_number_name&&h(d.house_number_name))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},m.lat,n.a.createElement("input",{className:"form-control mx-sm-1",type:"int",name:"lat",onChange:y,onBlur:E,value:o.lat})),d.lat&&v.lat&&h(d.lat)),n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},m.lon,n.a.createElement("input",{className:"form-control mx-sm-1",type:"int",name:"lon",onChange:y,onBlur:E,value:o.lon})),d.lon&&v.lon&&h(d.lon))),n.a.createElement("div",{className:"form-group row text-capitalize"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,m.species),n.a.createElement(i.a,{className:"basic-single",classNamePrefix:"select",name:"species",options:p,defaultValue:p[0].label,onChange:function(e){return w("species",e)},value:o.species,onBlur:function(){return q("species",!0)}}),d.species&&v.species&&h(d.species.label)),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,m.type),n.a.createElement(i.a,{name:"type_of",options:b,defaultValue:b[0].label,onChange:function(e){return w("type_of",e)},onBlur:E,value:o.type_of}),d.type&&v.type&&h(d.type.label))),n.a.createElement("div",{className:"form-group row text-capitalize"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,m.height),n.a.createElement(i.a,{name:"height",options:f,onChange:function(e){return w("height",e)},onBlur:E,defaultValue:f[0].value,value:o.height}),d.height&&v.height&&h(d.height.label)),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,m.facing),n.a.createElement(i.a,{name:"facing",options:g,defaultValue:o.facing.label,value:o.facing,onChange:function(e){return w("facing",e)},onBlur:E}),d.facing&&v.facing&&h(d.facing.label))),n.a.createElement("div",null,n.a.createElement("label",{className:"text-capitalize"},m.date,n.a.createElement("input",{type:"date",name:"date",onChange:y,onBlur:E,value:o.date})),d.date&&v.date&&h(d.date.label)),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body",style:{backgroundColor:"#f5faff"}},n.a.createElement("div",{className:"card-subtitle mb-2 text-muted"}," ",'"Cada nido crea una entrada en la base de datos. "'),n.a.createElement("div",{className:"card-subtitle mb-2 text-muted"}," ",'"En el caso de m\xfaltiples nidos con las mismas especificaciones se actualiza este valor:"'),n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"text-capitalize"},m.qty,n.a.createElement("input",{className:"form-control ms-mx-1",type:"int",name:"qty",onChange:y,onBlur:E,value:o.qty})),d.qty&&v.qty&&h(d.qty)))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body",style:{backgroundColor:"#e3f2fd"}},n.a.createElement("div",{className:"card-subtitle mb-2 text-muted"},"Si el nido ya no est\xe1 all\xed, rellene lo siguiente e incluya el d\xeda registrado:"),n.a.createElement("div",null,n.a.createElement("label",{className:"text-capitalize"},m.destroyed),n.a.createElement(i.a,{name:"destroyed",defaultValue:o.destroyed,options:[{value:m.true,label:m.true},{value:m.false,label:m.false}],onChange:function(e){w("destroyed",e)},onBlur:function(){console.log(o.destroyed.label)},value:o.destroyed}),d.date&&v.date&&h(d.date)),n.a.createElement("div",{className:o.destroyed.label===m.false?"invisible":""},n.a.createElement("label",{className:"text-capitalize"},m.destroyed_date,n.a.createElement("input",{type:"date",name:"destroyed_date",value:o.destroyed_date})),d.destroyed_date&&v.destroyed_date&&h(d.destroyed_date)))),n.a.createElement("button",{className:"btn btn-primary mb-2 text-capitalize",value:m.submit,disabled:N||Object.keys(d).length>0,onClick:function(){return console.log(d)}},"Submit"))))};t(105);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",null,n.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("form")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,a,t){e.exports=t(106)},79:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.a50730e8.chunk.js.map