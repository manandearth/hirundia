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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__45640){
var vec__45641 = p__45640;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45641,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45641,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__45644 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__45644);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__45647){
var map__45648 = p__45647;
var map__45648__$1 = (((((!((map__45648 == null))))?(((((map__45648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45648):map__45648);
var request = map__45648__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45648__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45648__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__45648,map__45648__$1,request,on_success,on_failure){
return (function (p1__45645_SHARP_){
var G__45650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__45645_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45650) : re_frame.core.dispatch.call(null,G__45650));
});})(api,map__45648,map__45648__$1,request,on_success,on_failure))
,((function (api,map__45648,map__45648__$1,request,on_success,on_failure){
return (function (p1__45646_SHARP_){
var G__45651 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__45646_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45651) : re_frame.core.dispatch.call(null,G__45651));
});})(api,map__45648,map__45648__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__45652 = cljs.core.seq(seq_request_maps);
var chunk__45653 = null;
var count__45654 = (0);
var i__45655 = (0);
while(true){
if((i__45655 < count__45654)){
var request__$1 = chunk__45653.cljs$core$IIndexed$_nth$arity$2(null,i__45655);
var G__45658_45660 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__45658_45660) : ajax.core.ajax_request.call(null,G__45658_45660));


var G__45661 = seq__45652;
var G__45662 = chunk__45653;
var G__45663 = count__45654;
var G__45664 = (i__45655 + (1));
seq__45652 = G__45661;
chunk__45653 = G__45662;
count__45654 = G__45663;
i__45655 = G__45664;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45652);
if(temp__5720__auto__){
var seq__45652__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45652__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45652__$1);
var G__45665 = cljs.core.chunk_rest(seq__45652__$1);
var G__45666 = c__4550__auto__;
var G__45667 = cljs.core.count(c__4550__auto__);
var G__45668 = (0);
seq__45652 = G__45665;
chunk__45653 = G__45666;
count__45654 = G__45667;
i__45655 = G__45668;
continue;
} else {
var request__$1 = cljs.core.first(seq__45652__$1);
var G__45659_45669 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__45659_45669) : ajax.core.ajax_request.call(null,G__45659_45669));


var G__45670 = cljs.core.next(seq__45652__$1);
var G__45671 = null;
var G__45672 = (0);
var G__45673 = (0);
seq__45652 = G__45670;
chunk__45653 = G__45671;
count__45654 = G__45672;
i__45655 = G__45673;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__45674_45676 = cljs.core.cst$kw$http_DASH_xhrio;
var G__45675_45677 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__45674_45676,G__45675_45677) : re_frame.core.reg_fx.call(null,G__45674_45676,G__45675_45677));
