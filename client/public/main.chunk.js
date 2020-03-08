(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{62:function(e,t,n){e.exports=n(92)},92:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(19),s=n.n(r),c=n(3),u=n(2),i=n.n(u),o=n(4),p=n(54),m=n.n(p);var d=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/transit",e.abrupt("return",new Promise((function(e){var t;e((t="/transit",function(){var e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()({method:"GET",url:t,headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()))})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.useState)(10),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)({swallowNests:0,martinNests:0,swiftNests:0,pallidSwiftNests:0,redrumpedSwallowNests:0}),u=Object(c.a)(s,2),i=u[0],o=u[1];return Object(a.useEffect)((function(){d().then((function(e){if(e){var t=e.data?e.data:"boo";r(t.length),o({swallowNests:t.filter((function(e){return"swallow"===e.species})).length,martinNests:t.filter((function(e){return"martin"===e.species})).length,swiftNests:t.filter((function(e){return"swift"===e.species})).length,pallidSwiftNests:t.filter((function(e){return"pallid_swift"===e.species})).length,redrumpedSwallowNests:t.filter((function(e){return"red_rumped_swallow"===e.species})).length})}}))}),[]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,"total nests in db:"),l.a.createElement("span",null,n)),l.a.createElement("div",null,l.a.createElement("span",null,"swallow nests:"),l.a.createElement("span",null,i.swallowNests)),l.a.createElement("div",null,l.a.createElement("span",null,"swift nests:"),l.a.createElement("span",null,i.swiftNests)),l.a.createElement("div",null,l.a.createElement("span",null,"martin nests:"),l.a.createElement("span",null,i.martinNests)),l.a.createElement("div",null,l.a.createElement("span",null,"red rumped swallow nests:"),l.a.createElement("span",null,i.redrumpedSwallowNests)),l.a.createElement("div",null,l.a.createElement("span",null,"pallid swift nests:"),l.a.createElement("span",null,i.pallidSwiftNests)))},E=n(39),w={title:"Nests counted",width:800,height:500,mark:{type:"bar",cornerRadiusEnd:4},encoding:{x:{aggregate:"count",field:"*",type:"quantitative"},y:{field:"species",type:"nominal"}}},b=function(){var e=Object(a.useState)({values:[]}),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){d().then((function(e){if(e){var t=e.data?e.data:"boo";r({values:t})}}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{spec:w,data:n}),";")};var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"Edit ",l.a.createElement("code",null,"src/App.js")," and save to reload."),l.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement(f,null),l.a.createElement(b,null))},h=n(101),v=n(102),N=n(100),j=n(98),O=n(99),y=function(e){var t=/\(([^)]+)\)/;return[parseFloat(t.exec(e)[1].split(",")[0]),parseFloat(t.exec(e)[1].split(",")[1])]},S=function(){var e=Object(a.useState)([{gps:"(36.253, -5.965)"},{gps:"(36.25302, -5.9655)"}]),t=Object(c.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){d().then((function(e){r(e.data)}))}),[]);y(n[0].gps)[0],y(n[0].gps)[1],y(n[1].gps)[0],y(n[1].gps)[1];var s=function(e){switch(e.species){case"swallow":return"crimson";case"swift":return"steelblue";case"martin":return"orange";case"pallid_swift":return"seagreen";case"red_rumped_swallow":return"brown"}};return l.a.createElement(h.a,{center:[36.253,-5.965],zoom:17},l.a.createElement(v.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),n.map((function(e){return l.a.createElement(N.a,{center:[y(e.gps)[0],y(e.gps)[1]],fillColor:s(e),color:s(e),radius:5},l.a.createElement(j.a,null,function(e){return l.a.createElement("table",null,l.a.createElement("tr",null," ",l.a.createElement("td",null,l.a.createElement("b",null,"Address: ")," ","".concat(e.street," ").concat(e.house_number_name," "))," "),l.a.createElement("tr",null," ",l.a.createElement("td",null,l.a.createElement("b",null,"Height: "),"".concat(e.height," m "))," "),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Aspect: "),e.facing)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Type of nest: "),e.type)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"First recorded: "),e.date)))}(e)),l.a.createElement(O.a,null,function(e){return l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"lat/lon: ")," ","".concat(y(e.gps)[0]," ").concat(y(e.gps)[1]))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Species: "),e.species)))}(e)))})))};s.a.render(l.a.createElement(g,null),document.getElementById("new-app")),s.a.render(l.a.createElement(S,null),document.getElementById("map"))}},[[62,1,2]]]);
//# sourceMappingURL=main.a36f6a23.chunk.js.map