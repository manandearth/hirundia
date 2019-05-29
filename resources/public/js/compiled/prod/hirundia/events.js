// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('hirundia.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('hirundia.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hirundia$events_SLASH_initialize_DASH_db,(function (_,___$1){
return hirundia.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_attr,(function (db,p__45240){
var vec__45241 = p__45240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_attr,attr);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hirundia$events_SLASH_http_DASH_get,(function (_world,p__45244){
var vec__45245 = p__45244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45245,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45245,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,"/transit",cljs.core.cst$kw$timeout,(5000),cljs.core.cst$kw$format,(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),cljs.core.cst$kw$response_DASH_format,(function (){var G__45248 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__45248) : ajax.core.json_response_format.call(null,G__45248));
})(),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hirundia$events_SLASH_good_DASH_get_DASH_result], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hirundia$events_SLASH_bad_DASH_get_DASH_result], null)], null)], null);
}));
