// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__53251){
var vec__53252 = p__53251;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53252,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53252,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__53255 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__53255);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__53258){
var map__53259 = p__53258;
var map__53259__$1 = (((((!((map__53259 == null))))?(((((map__53259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53259):map__53259);
var request = map__53259__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53259__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53259__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__53259,map__53259__$1,request,on_success,on_failure){
return (function (p1__53256_SHARP_){
var G__53261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__53256_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53261) : re_frame.core.dispatch.call(null,G__53261));
});})(api,map__53259,map__53259__$1,request,on_success,on_failure))
,((function (api,map__53259,map__53259__$1,request,on_success,on_failure){
return (function (p1__53257_SHARP_){
var G__53262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__53257_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53262) : re_frame.core.dispatch.call(null,G__53262));
});})(api,map__53259,map__53259__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__53263 = cljs.core.seq(seq_request_maps);
var chunk__53264 = null;
var count__53265 = (0);
var i__53266 = (0);
while(true){
if((i__53266 < count__53265)){
var request__$1 = chunk__53264.cljs$core$IIndexed$_nth$arity$2(null,i__53266);
var G__53269_53271 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53269_53271) : ajax.core.ajax_request.call(null,G__53269_53271));


var G__53272 = seq__53263;
var G__53273 = chunk__53264;
var G__53274 = count__53265;
var G__53275 = (i__53266 + (1));
seq__53263 = G__53272;
chunk__53264 = G__53273;
count__53265 = G__53274;
i__53266 = G__53275;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__53263);
if(temp__5720__auto__){
var seq__53263__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53263__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53263__$1);
var G__53276 = cljs.core.chunk_rest(seq__53263__$1);
var G__53277 = c__4550__auto__;
var G__53278 = cljs.core.count(c__4550__auto__);
var G__53279 = (0);
seq__53263 = G__53276;
chunk__53264 = G__53277;
count__53265 = G__53278;
i__53266 = G__53279;
continue;
} else {
var request__$1 = cljs.core.first(seq__53263__$1);
var G__53270_53280 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53270_53280) : ajax.core.ajax_request.call(null,G__53270_53280));


var G__53281 = cljs.core.next(seq__53263__$1);
var G__53282 = null;
var G__53283 = (0);
var G__53284 = (0);
seq__53263 = G__53281;
chunk__53264 = G__53282;
count__53265 = G__53283;
i__53266 = G__53284;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__53285_53287 = cljs.core.cst$kw$http_DASH_xhrio;
var G__53286_53288 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53285_53287,G__53286_53288) : re_frame.core.reg_fx.call(null,G__53285_53287,G__53286_53288));
