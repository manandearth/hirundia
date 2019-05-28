// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.ring');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
goog.require('ajax.formats');
ajax.ring.make_ring_read = (function ajax$ring$make_ring_read(body_read){
return (function ajax$ring$make_ring_read_$_ring_read(response){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,ajax.protocols._status(response),cljs.core.cst$kw$headers,ajax.protocols._get_all_headers(response),cljs.core.cst$kw$body,(body_read.cljs$core$IFn$_invoke$arity$1 ? body_read.cljs$core$IFn$_invoke$arity$1(response) : body_read.call(null,response))], null);
});
});
/**
 * Returns a Ring-compatible response map.
 * 
 * Optionally can be passed a :format option. This should be another
 * response-format map. If format is provided it will be used to
 * specify the content-type, and the read method will be used to
 * populate the :body key in the response map.
 */
ajax.ring.ring_response_format = (function ajax$ring$ring_response_format(var_args){
var G__36298 = arguments.length;
switch (G__36298) {
case 0:
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0()], null));
});

ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__36299){
var map__36300 = p__36299;
var map__36300__$1 = (((((!((map__36300 == null))))?(((((map__36300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36300):map__36300);
var map__36301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36300__$1,cljs.core.cst$kw$format);
var map__36301__$1 = (((((!((map__36301 == null))))?(((((map__36301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36301):map__36301);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36301__$1,cljs.core.cst$kw$read);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36301__$1,cljs.core.cst$kw$description);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36301__$1,cljs.core.cst$kw$content_DASH_type);
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.ring.make_ring_read(read),cljs.core.cst$kw$description,["ring/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join(''),cljs.core.cst$kw$content_DASH_type,content_type], null));
});

ajax.ring.ring_response_format.cljs$lang$maxFixedArity = 1;

