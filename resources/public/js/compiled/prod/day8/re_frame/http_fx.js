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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__45265){
var vec__45266 = p__45265;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45266,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45266,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__45269 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__45269);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__45272){
var map__45273 = p__45272;
var map__45273__$1 = (((((!((map__45273 == null))))?(((((map__45273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45273):map__45273);
var request = map__45273__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45273__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45273__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__45273,map__45273__$1,request,on_success,on_failure){
return (function (p1__45270_SHARP_){
var G__45275 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__45270_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45275) : re_frame.core.dispatch.call(null,G__45275));
});})(api,map__45273,map__45273__$1,request,on_success,on_failure))
,((function (api,map__45273,map__45273__$1,request,on_success,on_failure){
return (function (p1__45271_SHARP_){
var G__45276 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__45271_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45276) : re_frame.core.dispatch.call(null,G__45276));
});})(api,map__45273,map__45273__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__45277 = cljs.core.seq(seq_request_maps);
var chunk__45278 = null;
var count__45279 = (0);
var i__45280 = (0);
while(true){
if((i__45280 < count__45279)){
var request__$1 = chunk__45278.cljs$core$IIndexed$_nth$arity$2(null,i__45280);
var G__45283_45285 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__45283_45285) : ajax.core.ajax_request.call(null,G__45283_45285));


var G__45286 = seq__45277;
var G__45287 = chunk__45278;
var G__45288 = count__45279;
var G__45289 = (i__45280 + (1));
seq__45277 = G__45286;
chunk__45278 = G__45287;
count__45279 = G__45288;
i__45280 = G__45289;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45277);
if(temp__5720__auto__){
var seq__45277__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45277__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45277__$1);
var G__45290 = cljs.core.chunk_rest(seq__45277__$1);
var G__45291 = c__4550__auto__;
var G__45292 = cljs.core.count(c__4550__auto__);
var G__45293 = (0);
seq__45277 = G__45290;
chunk__45278 = G__45291;
count__45279 = G__45292;
i__45280 = G__45293;
continue;
} else {
var request__$1 = cljs.core.first(seq__45277__$1);
var G__45284_45294 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__45284_45294) : ajax.core.ajax_request.call(null,G__45284_45294));


var G__45295 = cljs.core.next(seq__45277__$1);
var G__45296 = null;
var G__45297 = (0);
var G__45298 = (0);
seq__45277 = G__45295;
chunk__45278 = G__45296;
count__45279 = G__45297;
i__45280 = G__45298;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__45299_45301 = cljs.core.cst$kw$http_DASH_xhrio;
var G__45300_45302 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__45299_45301,G__45300_45302) : re_frame.core.reg_fx.call(null,G__45299_45301,G__45300_45302));
