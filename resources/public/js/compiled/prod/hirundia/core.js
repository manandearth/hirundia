// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('hirundia.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('hirundia.db');
goog.require('hirundia.subs');
goog.require('hirundia.views');
goog.require('hirundia.events');
goog.require('hirundia.config');
goog.require('oz.core');
goog.require('oops.core');
hirundia.core.dev_setup = (function hirundia$core$dev_setup(){
if(hirundia.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return console.log("production");
}
});
hirundia.core.coords_helper = (function hirundia$core$coords_helper(entry){
var split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gps.cljs$core$IFn$_invoke$arity$1(entry),/[(),]/);
var lat = parseFloat(cljs.core.second(split));
var lon = parseFloat(cljs.core.last(split));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$latitude,lat,cljs.core.cst$kw$longitude,lon], null);
});
hirundia.core.transform_df = (function hirundia$core$transform_df(data){
return cljs.core.vec((function (){var iter__4523__auto__ = (function hirundia$core$transform_df_$_iter__45685(s__45686){
return (new cljs.core.LazySeq(null,(function (){
var s__45686__$1 = s__45686;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__45686__$1);
if(temp__5720__auto__){
var s__45686__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45686__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45686__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45688 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45687 = (0);
while(true){
if((i__45687 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45687);
cljs.core.chunk_append(b__45688,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,hirundia.core.coords_helper(e)),cljs.core.cst$kw$date,(new Date(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(e)))),cljs.core.cst$kw$destroyed_date,(((!(cljs.core.nil_QMARK_)))?(new Date(cljs.core.cst$kw$destroyed_date.cljs$core$IFn$_invoke$arity$1(e))):null)),cljs.core.cst$kw$gps));

var G__45689 = (i__45687 + (1));
i__45687 = G__45689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45688),hirundia$core$transform_df_$_iter__45685(cljs.core.chunk_rest(s__45686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45688),null);
}
} else {
var e = cljs.core.first(s__45686__$2);
return cljs.core.cons(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,hirundia.core.coords_helper(e)),cljs.core.cst$kw$date,(new Date(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(e)))),cljs.core.cst$kw$destroyed_date,(((!(cljs.core.nil_QMARK_)))?(new Date(cljs.core.cst$kw$destroyed_date.cljs$core$IFn$_invoke$arity$1(e))):null)),cljs.core.cst$kw$gps),hirundia$core$transform_df_$_iter__45685(cljs.core.rest(s__45686__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(data);
})());
});
hirundia.core.fetch_data_BANG_ = (function hirundia$core$fetch_data_BANG_(a){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/transit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,(function (response){
return cljs.core.reset_BANG_(a,hirundia.core.transform_df(response));
})], null)], 0));
});
hirundia.core.play_data = (function hirundia$core$play_data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45701 = arguments.length;
var i__4731__auto___45702 = (0);
while(true){
if((i__4731__auto___45702 < len__4730__auto___45701)){
args__4736__auto__.push((arguments[i__4731__auto___45702]));

var G__45703 = (i__4731__auto___45702 + (1));
i__4731__auto___45702 = G__45703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return hirundia.core.play_data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

hirundia.core.play_data.cljs$core$IFn$_invoke$arity$variadic = (function (names){
var iter__4523__auto__ = (function hirundia$core$iter__45691(s__45692){
return (new cljs.core.LazySeq(null,(function (){
var s__45692__$1 = s__45692;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__45692__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__45692__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function hirundia$core$iter__45691_$_iter__45693(s__45694){
return (new cljs.core.LazySeq(null,((function (s__45692__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__45694__$1 = s__45694;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__45694__$1);
if(temp__5720__auto____$1){
var s__45694__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45694__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45694__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45696 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45695 = (0);
while(true){
if((i__45695 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45695);
cljs.core.chunk_append(b__45696,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,i,cljs.core.cst$kw$item,n,cljs.core.cst$kw$quantity,((function (){var G__45697 = (i * cljs.core.count(n));
var G__45698 = 0.8;
return Math.pow(G__45697,G__45698);
})() + cljs.core.rand_int(cljs.core.count(n)))], null));

var G__45704 = (i__45695 + (1));
i__45695 = G__45704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45696),hirundia$core$iter__45691_$_iter__45693(cljs.core.chunk_rest(s__45694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45696),null);
}
} else {
var i = cljs.core.first(s__45694__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,i,cljs.core.cst$kw$item,n,cljs.core.cst$kw$quantity,((function (){var G__45699 = (i * cljs.core.count(n));
var G__45700 = 0.8;
return Math.pow(G__45699,G__45700);
})() + cljs.core.rand_int(cljs.core.count(n)))], null),hirundia$core$iter__45691_$_iter__45693(cljs.core.rest(s__45694__$2)));
}
} else {
return null;
}
break;
}
});})(s__45692__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__45692__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,hirundia$core$iter__45691(cljs.core.rest(s__45692__$1)));
} else {
var G__45705 = cljs.core.rest(s__45692__$1);
s__45692__$1 = G__45705;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(names);
});

hirundia.core.play_data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hirundia.core.play_data.cljs$lang$applyTo = (function (seq45690){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45690));
});

hirundia.core.nest_height_schema = (function hirundia$core$nest_height_schema(data){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$values,data], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"species",cljs.core.cst$kw$type,"nominal"], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$stack,"normalize"], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"height",cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["12","11","10","9","8","7","6","5","4","3","2","1"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#D5D8DD","#BECDE0","#AEC7E5","#99B9E1","#6098DC","#4B8AD8","#2D75CD","#1D6FD3","#0F5DBD","#0C4B97","#063F84","#04254E"], null)], null)], null)], null),cljs.core.cst$kw$legend,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"height by species"], null),cljs.core.cst$kw$mark,"bar"], null);
});
/**
 * extract the min and max latitude for the scatter dynamic schema
 */
hirundia.core.latitude_helper = (function hirundia$core$latitude_helper(data){
var lat_max = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Math.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$latitude,data));
var lat_min = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Math.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$latitude,data));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,lat_min,cljs.core.cst$kw$max,lat_max], null);
});
hirundia.core.scatter_schema = (function hirundia$core$scatter_schema(data){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(500),cljs.core.cst$kw$description,"A scatter plot to show height in relation to latitude",cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$values,data], null),cljs.core.cst$kw$mark,"point",cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"height",cljs.core.cst$kw$type,"quantitative"], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"latitude",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(hirundia.core.latitude_helper(data)),cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(hirundia.core.latitude_helper(data))], null)], null)], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"species",cljs.core.cst$kw$type,"nominal"], null),cljs.core.cst$kw$shape,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"species",cljs.core.cst$kw$type,"nominal"], null)], null)], null);
});
hirundia.core.gps_helper = (function hirundia$core$gps_helper(lat,lon){
return [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)];
});
hirundia.core.nests_per_address_schema = (function hirundia$core$nests_per_address_schema(data){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(500),cljs.core.cst$kw$description,"A plot showing addresses ordered by number of nests",cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$values,data], null),cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"bar",cljs.core.cst$kw$tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"address",cljs.core.cst$kw$type,"nominal"], null)], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"gps",cljs.core.cst$kw$type,"nominal"], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$stack,"normalize"], null),cljs.core.cst$kw$tooltip,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"street",cljs.core.cst$kw$type,"nominal"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"house_number_name",cljs.core.cst$kw$type,"nominal"], null)], null)], null)], null);
});
hirundia.core.oz_nest_height = (function hirundia$core$oz_nest_height(){
var d = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hirundia.core.fetch_data_BANG_(d);

return ((function (d){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega,hirundia.core.nest_height_schema(cljs.core.deref(d))], null)], null);
});
;})(d))
});
hirundia.core.oz_scatter = (function hirundia$core$oz_scatter(){
var d = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hirundia.core.fetch_data_BANG_(d);

return ((function (d){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega,hirundia.core.scatter_schema(cljs.core.deref(d))], null)], null);
});
;})(d))
});
hirundia.core.oz_nests_per_address = (function hirundia$core$oz_nests_per_address(){
var d = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hirundia.core.fetch_data_BANG_(d);

return ((function (d){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega,hirundia.core.nests_per_address_schema(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (d){
return (function (p1__45706_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45706_SHARP_,cljs.core.cst$kw$gps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latitude.cljs$core$IFn$_invoke$arity$1(p1__45706_SHARP_),cljs.core.cst$kw$longitude.cljs$core$IFn$_invoke$arity$1(p1__45706_SHARP_)], null));
});})(d))
,cljs.core.deref(d)))], null)], null);
});
;})(d))
});
hirundia.core.URL_OSM = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
hirundia.core.attribution = "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors";
hirundia.core.circle = (function hirundia$core$circle(entry){
var lon = cljs.core.cst$kw$longitude.cljs$core$IFn$_invoke$arity$1(entry);
var lat = cljs.core.cst$kw$latitude.cljs$core$IFn$_invoke$arity$1(entry);
var species = cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(entry);
return L.circle([lat,lon],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,(function (){var G__45707 = species;
switch (G__45707) {
case "swallow":
return "crimson";

break;
case "martin":
return "steelblue";

break;
case "swift":
return "seagreen";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45707)].join('')));

}
})(),cljs.core.cst$kw$fillColor,(function (){var G__45708 = species;
switch (G__45708) {
case "swallow":
return "red";

break;
case "martin":
return "dodgerblue";

break;
case "swift":
return "green";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45708)].join('')));

}
})(),cljs.core.cst$kw$fillOpacity,0.2,cljs.core.cst$kw$radius,(5)], null)));
});
hirundia.core.popup = (function hirundia$core$popup(entry){
var street = cljs.core.cst$kw$street.cljs$core$IFn$_invoke$arity$1(entry);
var house_number_name = cljs.core.cst$kw$house_number_name.cljs$core$IFn$_invoke$arity$1(entry);
var height = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(entry);
var facing = cljs.core.cst$kw$facing.cljs$core$IFn$_invoke$arity$1(entry);
var type_of = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(entry);
var date = cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(entry).toDateString();
return ["<table>\n<tr><td><b>Address: </b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(street)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(house_number_name),"</td></tr>\n<tr><td><b>Height: </b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," m</td></tr>\n<tr><td><b>Aspect: </b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(facing),"</td></tr>\n<tr><td><b>Type of nest: </b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_of),"</td></tr>\n<tr><td><b>First recorded: </b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date),"</td></tr>\n</table>"].join('');
});
hirundia.core.tooltip = (function hirundia$core$tooltip(entry){
var lat = cljs.core.cst$kw$latitude.cljs$core$IFn$_invoke$arity$1(entry);
var lon = cljs.core.cst$kw$longitude.cljs$core$IFn$_invoke$arity$1(entry);
var gps = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),")"].join('');
return ["gps -> ",gps].join('');
});
hirundia.core.vejer_map = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lat,36.253,cljs.core.cst$kw$ln,-5.965,cljs.core.cst$kw$zoom,(17)], null);
hirundia.core.legend = (function hirundia$core$legend(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$legend,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,"0 0 100 20",cljs.core.cst$kw$x,(200),cljs.core.cst$kw$width,(500)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,(12),cljs.core.cst$kw$y,(12),cljs.core.cst$kw$font_DASH_size,(5)], null),"Swallow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$r,1.5,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fill,"crimson",cljs.core.cst$kw$fill_DASH_opacity,0.5,cljs.core.cst$kw$stroke,"red"], null),cljs.core.cst$kw$stroke_DASH_width,0.5,cljs.core.cst$kw$cx,(10),cljs.core.cst$kw$cy,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,(38),cljs.core.cst$kw$y,(12),cljs.core.cst$kw$font_DASH_size,(5)], null),"martin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$r,1.5,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fill,"steelblue",cljs.core.cst$kw$fill_DASH_opacity,0.5,cljs.core.cst$kw$stroke,"dodgerblue"], null),cljs.core.cst$kw$stroke_DASH_width,0.5,cljs.core.cst$kw$cx,(35),cljs.core.cst$kw$cy,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,(62),cljs.core.cst$kw$y,(12),cljs.core.cst$kw$font_DASH_size,(5)], null),"swift"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$r,1.5,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fill,"seagreen",cljs.core.cst$kw$fill_DASH_opacity,0.5,cljs.core.cst$kw$stroke,"green"], null),cljs.core.cst$kw$stroke_DASH_width,0.5,cljs.core.cst$kw$cx,(60),cljs.core.cst$kw$cy,(10)], null)], null)], null)], null)], null);
});
});
hirundia.core.ajax_map_call = (function hirundia$core$ajax_map_call(m){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/transit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$error_DASH_handler,(function (){
return console.log("problem boss..");
}),cljs.core.cst$kw$handler,(function (response){
var seq__45711 = cljs.core.seq(hirundia.core.transform_df(response));
var chunk__45712 = null;
var count__45713 = (0);
var i__45714 = (0);
while(true){
if((i__45714 < count__45713)){
var e = chunk__45712.cljs$core$IIndexed$_nth$arity$2(null,i__45714);
hirundia.core.circle(e).bindPopup(hirundia.core.popup(e)).bindTooltip(hirundia.core.tooltip(e)).addTo(m);


var G__45715 = seq__45711;
var G__45716 = chunk__45712;
var G__45717 = count__45713;
var G__45718 = (i__45714 + (1));
seq__45711 = G__45715;
chunk__45712 = G__45716;
count__45713 = G__45717;
i__45714 = G__45718;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45711);
if(temp__5720__auto__){
var seq__45711__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45711__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45711__$1);
var G__45719 = cljs.core.chunk_rest(seq__45711__$1);
var G__45720 = c__4550__auto__;
var G__45721 = cljs.core.count(c__4550__auto__);
var G__45722 = (0);
seq__45711 = G__45719;
chunk__45712 = G__45720;
count__45713 = G__45721;
i__45714 = G__45722;
continue;
} else {
var e = cljs.core.first(seq__45711__$1);
hirundia.core.circle(e).bindPopup(hirundia.core.popup(e)).bindTooltip(hirundia.core.tooltip(e)).addTo(m);


var G__45723 = cljs.core.next(seq__45711__$1);
var G__45724 = null;
var G__45725 = (0);
var G__45726 = (0);
seq__45711 = G__45723;
chunk__45712 = G__45724;
count__45713 = G__45725;
i__45714 = G__45726;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], 0));
});
hirundia.core.ajax_did_mount = (function hirundia$core$ajax_did_mount(){
return (function (){
var atm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var map = L.map("map").setView([36.253,-5.965],(17));
var centered = L.tileLayer(hirundia.core.URL_OSM,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attribution,hirundia.core.attribution,cljs.core.cst$kw$maxZoom,(19)], null))).addTo(map);
return hirundia.core.ajax_map_call(map);
});
});
hirundia.core.home = (function hirundia$core$home(){
return (function (){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"reactive-map",cljs.core.cst$kw$component_DASH_did_DASH_mount,hirundia.core.ajax_did_mount(),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"640px",cljs.core.cst$kw$width,"1024px"], null)], null)], null);
})], null));
});
});
hirundia.core.mount_root = (function hirundia$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Dashboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Distribution of nests:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hirundia.core.home], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hirundia.core.legend], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Nest height by species:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hirundia.core.oz_nest_height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Height / Latitude / Species:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hirundia.core.oz_scatter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Address / Number of nests"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hirundia.core.oz_nests_per_address], null)], null)], null),document.getElementById("app"));
});
hirundia.core.main = (function hirundia$core$main(){
hirundia.core.dev_setup();

return hirundia.core.mount_root();
});
goog.exportSymbol('hirundia.core.main', hirundia.core.main);
hirundia.core.on_js_reload = (function hirundia$core$on_js_reload(){
return hirundia.core.main();
});
hirundia.core.main();
