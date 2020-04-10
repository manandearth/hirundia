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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__53443){
var vec__53444 = p__53443;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53444,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53444,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__53447 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__53447);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__53450){
var map__53451 = p__53450;
var map__53451__$1 = (((((!((map__53451 == null))))?(((((map__53451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53451):map__53451);
var request = map__53451__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53451__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53451__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__53451,map__53451__$1,request,on_success,on_failure){
return (function (p1__53448_SHARP_){
var G__53453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__53448_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53453) : re_frame.core.dispatch.call(null,G__53453));
});})(api,map__53451,map__53451__$1,request,on_success,on_failure))
,((function (api,map__53451,map__53451__$1,request,on_success,on_failure){
return (function (p1__53449_SHARP_){
var G__53454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__53449_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53454) : re_frame.core.dispatch.call(null,G__53454));
});})(api,map__53451,map__53451__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__53455 = cljs.core.seq(seq_request_maps);
var chunk__53456 = null;
var count__53457 = (0);
var i__53458 = (0);
while(true){
if((i__53458 < count__53457)){
var request__$1 = chunk__53456.cljs$core$IIndexed$_nth$arity$2(null,i__53458);
var G__53461_53463 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53461_53463) : ajax.core.ajax_request.call(null,G__53461_53463));


var G__53464 = seq__53455;
var G__53465 = chunk__53456;
var G__53466 = count__53457;
var G__53467 = (i__53458 + (1));
seq__53455 = G__53464;
chunk__53456 = G__53465;
count__53457 = G__53466;
i__53458 = G__53467;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__53455);
if(temp__5720__auto__){
var seq__53455__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53455__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53455__$1);
var G__53468 = cljs.core.chunk_rest(seq__53455__$1);
var G__53469 = c__4550__auto__;
var G__53470 = cljs.core.count(c__4550__auto__);
var G__53471 = (0);
seq__53455 = G__53468;
chunk__53456 = G__53469;
count__53457 = G__53470;
i__53458 = G__53471;
continue;
} else {
var request__$1 = cljs.core.first(seq__53455__$1);
var G__53462_53472 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53462_53472) : ajax.core.ajax_request.call(null,G__53462_53472));


var G__53473 = cljs.core.next(seq__53455__$1);
var G__53474 = null;
var G__53475 = (0);
var G__53476 = (0);
seq__53455 = G__53473;
chunk__53456 = G__53474;
count__53457 = G__53475;
i__53458 = G__53476;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__53477_53479 = cljs.core.cst$kw$http_DASH_xhrio;
var G__53478_53480 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53477_53479,G__53478_53480) : re_frame.core.reg_fx.call(null,G__53477_53479,G__53478_53480));
