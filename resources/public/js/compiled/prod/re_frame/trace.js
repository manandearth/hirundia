// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38353){
var map__38354 = p__38353;
var map__38354__$1 = (((((!((map__38354 == null))))?(((((map__38354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38354):map__38354);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38354__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38354__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38354__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38354__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38356_38380 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38357_38381 = null;
var count__38358_38382 = (0);
var i__38359_38383 = (0);
while(true){
if((i__38359_38383 < count__38358_38382)){
var vec__38370_38384 = chunk__38357_38381.cljs$core$IIndexed$_nth$arity$2(null,i__38359_38383);
var k_38385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370_38384,(0),null);
var cb_38386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370_38384,(1),null);
try{var G__38374_38387 = cljs.core.deref(re_frame.trace.traces);
(cb_38386.cljs$core$IFn$_invoke$arity$1 ? cb_38386.cljs$core$IFn$_invoke$arity$1(G__38374_38387) : cb_38386.call(null,G__38374_38387));
}catch (e38373){var e_38388 = e38373;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38385,"while storing",cljs.core.deref(re_frame.trace.traces),e_38388], 0));
}

var G__38389 = seq__38356_38380;
var G__38390 = chunk__38357_38381;
var G__38391 = count__38358_38382;
var G__38392 = (i__38359_38383 + (1));
seq__38356_38380 = G__38389;
chunk__38357_38381 = G__38390;
count__38358_38382 = G__38391;
i__38359_38383 = G__38392;
continue;
} else {
var temp__5720__auto___38393 = cljs.core.seq(seq__38356_38380);
if(temp__5720__auto___38393){
var seq__38356_38394__$1 = temp__5720__auto___38393;
if(cljs.core.chunked_seq_QMARK_(seq__38356_38394__$1)){
var c__4550__auto___38395 = cljs.core.chunk_first(seq__38356_38394__$1);
var G__38396 = cljs.core.chunk_rest(seq__38356_38394__$1);
var G__38397 = c__4550__auto___38395;
var G__38398 = cljs.core.count(c__4550__auto___38395);
var G__38399 = (0);
seq__38356_38380 = G__38396;
chunk__38357_38381 = G__38397;
count__38358_38382 = G__38398;
i__38359_38383 = G__38399;
continue;
} else {
var vec__38375_38400 = cljs.core.first(seq__38356_38394__$1);
var k_38401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38375_38400,(0),null);
var cb_38402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38375_38400,(1),null);
try{var G__38379_38403 = cljs.core.deref(re_frame.trace.traces);
(cb_38402.cljs$core$IFn$_invoke$arity$1 ? cb_38402.cljs$core$IFn$_invoke$arity$1(G__38379_38403) : cb_38402.call(null,G__38379_38403));
}catch (e38378){var e_38404 = e38378;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38401,"while storing",cljs.core.deref(re_frame.trace.traces),e_38404], 0));
}

var G__38405 = cljs.core.next(seq__38356_38394__$1);
var G__38406 = null;
var G__38407 = (0);
var G__38408 = (0);
seq__38356_38380 = G__38405;
chunk__38357_38381 = G__38406;
count__38358_38382 = G__38407;
i__38359_38383 = G__38408;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
