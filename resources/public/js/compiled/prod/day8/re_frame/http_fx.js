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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__53310){
var vec__53311 = p__53310;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53311,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53311,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__53314 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__53314);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__53317){
var map__53318 = p__53317;
var map__53318__$1 = (((((!((map__53318 == null))))?(((((map__53318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53318):map__53318);
var request = map__53318__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53318__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53318__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__53318,map__53318__$1,request,on_success,on_failure){
return (function (p1__53315_SHARP_){
var G__53320 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__53315_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53320) : re_frame.core.dispatch.call(null,G__53320));
});})(api,map__53318,map__53318__$1,request,on_success,on_failure))
,((function (api,map__53318,map__53318__$1,request,on_success,on_failure){
return (function (p1__53316_SHARP_){
var G__53321 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__53316_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53321) : re_frame.core.dispatch.call(null,G__53321));
});})(api,map__53318,map__53318__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__53322 = cljs.core.seq(seq_request_maps);
var chunk__53323 = null;
var count__53324 = (0);
var i__53325 = (0);
while(true){
if((i__53325 < count__53324)){
var request__$1 = chunk__53323.cljs$core$IIndexed$_nth$arity$2(null,i__53325);
var G__53328_53330 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53328_53330) : ajax.core.ajax_request.call(null,G__53328_53330));


var G__53331 = seq__53322;
var G__53332 = chunk__53323;
var G__53333 = count__53324;
var G__53334 = (i__53325 + (1));
seq__53322 = G__53331;
chunk__53323 = G__53332;
count__53324 = G__53333;
i__53325 = G__53334;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__53322);
if(temp__5720__auto__){
var seq__53322__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53322__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53322__$1);
var G__53335 = cljs.core.chunk_rest(seq__53322__$1);
var G__53336 = c__4550__auto__;
var G__53337 = cljs.core.count(c__4550__auto__);
var G__53338 = (0);
seq__53322 = G__53335;
chunk__53323 = G__53336;
count__53324 = G__53337;
i__53325 = G__53338;
continue;
} else {
var request__$1 = cljs.core.first(seq__53322__$1);
var G__53329_53339 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53329_53339) : ajax.core.ajax_request.call(null,G__53329_53339));


var G__53340 = cljs.core.next(seq__53322__$1);
var G__53341 = null;
var G__53342 = (0);
var G__53343 = (0);
seq__53322 = G__53340;
chunk__53323 = G__53341;
count__53324 = G__53342;
i__53325 = G__53343;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__53344_53346 = cljs.core.cst$kw$http_DASH_xhrio;
var G__53345_53347 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53344_53346,G__53345_53347) : re_frame.core.reg_fx.call(null,G__53344_53346,G__53345_53347));
