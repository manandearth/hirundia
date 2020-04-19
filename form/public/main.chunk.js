(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{62:function(e,a,t){e.exports=t(76)},67:function(e,a,t){},72:function(e){e.exports=JSON.parse('{"home":"principal","about":"informaci\xf3n","nests":"db","dashboard":"panel de control","nests-insert":"a\xf1adir nidos","username":"usuario","password":"contrase\xf1a","register":"registrarse","login":"entrar","logout":"cerrar","street":"calle","house_number_name":"No. / nombre","lat":"latitud","lon":"longitud","type":"construcci\xf3n","window":"ventana","cornice":"cornisa","crack":"grieta","cables":"cable","gable":"tejado","balcony":"balc\xf3n","facing":"orientaci\xf3n","N":"norte","NE":"norteste","E":"este","SE":"sudeste","S":"sur","SW":"sudoeste","W":"oeste","NW":"nortoeste","true":"Si","false":"No","destroyed":"destruida","date":"fecha","species":"especie","swift":"vencejo com\xfan","swallow":"golondrina com\xfan","martin":"avi\xf3n com\xfan","pallid_swift":"vencejo p\xe1lido","red_rumped_swallow":"golondrina d\xe1urica","height":"altura (en metros) ","qty":"cantidad","destroyed_date":"fecha de destrucci\xf3n","submit":"enviar","delete":"borrar ","delete_entry":"borrar entrada","update":"actualizar","logged_as":"session ","update_entry":"actualiza entrada","address":"direcci\xf3n","map_title":"distribuci\xf3n geografica"}')},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(22),s=t.n(r),c=(t(67),t(61)),o=t(60),i=t(37),m=t(7),d=t(72),u=m.b().shape({street:m.c().min(2,"Too Short!").max(50,"Too Long!").required("Required"),house_number_name:m.c().max(20,"Too Long!").required("Required"),species:m.b().shape({label:m.c().required("hey... this is required")}),lat:m.c().matches(/[0-9]+\./,"only a valid coordinate").required("Required"),lon:m.c().matches(/[0-9]+\./,"only a valid coordinate").required("Required"),date:m.a().required("Required"),qty:m.c().required("Required"),destroyed:m.c().max(1,"testing!").required("Required"),destroyed_date:m.a().when("destroyed",{is:d[!0],then:m.a().required("date is required")})}),p=["window","cornice","crack","cables","gable"].map((function(e){return{value:e,label:d[e]}})),b=["swallow","swift","martin","pallid_swift","red_rumped_swallow"].map((function(e){return{value:e,label:d[e]}})),f=Object(c.a)(Array(20).keys()).map((function(e){return{value:e,label:e}})),E=["N","NE","E","SE","S","SW","W","NW"].map((function(e){return{value:e,label:d[e]}})),h=function(e){return n.a.createElement("div",null,n.a.createElement("small",{className:"text-danger"},e))},g=function(e){var a=Object(o.a)({initialValues:{qty:"1",destroyed:{label:d.false,value:d.false}},validationSchema:u,onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),400)}}),t=a.values,r=a.errors,s=a.touched,c=a.handleChange,m=a.handleBlur,g=a.handleSubmit,y=a.isSubmitting,v=a.setFieldValue,N=a.setFieldTouched;return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"card"},n.a.createElement("form",{onSubmit:g},n.a.createElement("input",{type:"hidden",name:"language",value:"spanish"}),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},d.street,n.a.createElement("input",{className:"form-control mx-sm-1",type:"text",name:"street",value:t.street,onChange:c,onBlur:m})),r.street&&s.street&&h(r.street)),n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},d.house_number_name,n.a.createElement("input",{className:"form-control ma-sm-1",type:"text",name:"house_number_name",onChange:c,onBlur:m})),r.house_number_name&&s.house_number_name&&h(r.house_number_name))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},d.lat,n.a.createElement("input",{className:"form-control mx-sm-1",type:"int",name:"lat",onChange:c,onBlur:m})),r.lat&&s.lat&&h(r.lat)),n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"my-1 mr-2 text-capitalize"},d.lon,n.a.createElement("input",{className:"form-control mx-sm-1",type:"int",name:"lon",onChange:c,onBlur:m})),r.lon&&s.lon&&h(r.lon))),n.a.createElement("div",{className:"form-group row text-capitalize"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,d.species),n.a.createElement(i.a,{className:"basic-single",classNamePrefix:"select",name:"species",options:b,defaultValue:b[0].label,onChange:function(e){return v("species",e)},value:t.species,onBlur:function(){return N("species",!0)}}),r.species&&s.species&&h(r.species.label)),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,d.type),n.a.createElement(i.a,{name:"type",options:p,defaultValue:p[0].label,onChange:v,onBlur:m}),r.type&&s.type&&h(r.type.label))),n.a.createElement("div",{className:"form-group row text-capitalize"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,d.height),n.a.createElement(i.a,{name:"height",options:f,defaultValue:f[0].value,onChange:v,onBlur:m}),r.height&&s.height&&h(r.height.label)),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("label",null,d.facing),n.a.createElement(i.a,{name:"facing",options:E,defaultValue:E[0].value,onChange:v,onBlur:m}),r.facing&&s.facing&&h(r.facing.label))),n.a.createElement("div",null,n.a.createElement("label",{className:"text-capitalize"},d.date,n.a.createElement("input",{type:"date",name:"date",onChange:c,onBlur:m})),r.date&&s.date&&h(r.date.label)),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body",style:{backgroundColor:"#f5faff"}},n.a.createElement("div",{className:"card-subtitle mb-2 text-muted"}," ",'"Cada nido crea una entrada en la base de datos. "'),n.a.createElement("div",{className:"card-subtitle mb-2 text-muted"}," ",'"En el caso de m\xfaltiples nidos con las mismas especificaciones se actualiza este valor:"'),n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"text-capitalize"},d.qty,n.a.createElement("input",{className:"form-control ms-mx-1",type:"int",name:"qty",value:t.qty,onChange:c,onBlur:m})),r.qty&&s.qty&&h(r.qty)))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body",style:{backgroundColor:"#e3f2fd"}},n.a.createElement("div",{className:"card-subtitle mb-2 text-muted"},"Si el nido ya no est\xe1 all\xed, rellene lo siguiente e incluya el d\xeda registrado:"),n.a.createElement("div",null,n.a.createElement("label",{className:"text-capitalize"},d.destroyed),n.a.createElement(i.a,{name:"destroyed",defaultValue:{value:!1,label:d.false},options:[{value:d.true,label:d.true},{value:d.false,label:d.false}],onChange:function(e){v("destroyed",e)},onBlur:function(){console.log(t.destroyed.label)}}),r.date&&s.date&&h(r.date)),n.a.createElement("div",{className:t.destroyed.label===d.false?"invisible":""},n.a.createElement("label",{className:"text-capitalize"},d.destroyed_date,n.a.createElement("input",{type:"date",name:"destroyed_date"})),r.destroyed_date&&s.destroyed_date&&h(r.destroyed_date)))),n.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2 text-capitalize",value:d.submit,disabled:y},"Submit"))))};t(75);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",null,n.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("form")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.e9ec8bef.chunk.js.map