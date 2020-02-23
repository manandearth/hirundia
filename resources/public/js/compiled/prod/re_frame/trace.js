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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38220){
var map__38221 = p__38220;
var map__38221__$1 = (((((!((map__38221 == null))))?(((((map__38221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38221):map__38221);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__38223_38247 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38224_38248 = null;
var count__38225_38249 = (0);
var i__38226_38250 = (0);
while(true){
if((i__38226_38250 < count__38225_38249)){
var vec__38237_38251 = chunk__38224_38248.cljs$core$IIndexed$_nth$arity$2(null,i__38226_38250);
var k_38252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237_38251,(0),null);
var cb_38253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237_38251,(1),null);
try{var G__38241_38254 = cljs.core.deref(re_frame.trace.traces);
(cb_38253.cljs$core$IFn$_invoke$arity$1 ? cb_38253.cljs$core$IFn$_invoke$arity$1(G__38241_38254) : cb_38253.call(null,G__38241_38254));
}catch (e38240){var e_38255 = e38240;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38252,"while storing",cljs.core.deref(re_frame.trace.traces),e_38255], 0));
}

var G__38256 = seq__38223_38247;
var G__38257 = chunk__38224_38248;
var G__38258 = count__38225_38249;
var G__38259 = (i__38226_38250 + (1));
seq__38223_38247 = G__38256;
chunk__38224_38248 = G__38257;
count__38225_38249 = G__38258;
i__38226_38250 = G__38259;
continue;
} else {
var temp__5720__auto___38260 = cljs.core.seq(seq__38223_38247);
if(temp__5720__auto___38260){
var seq__38223_38261__$1 = temp__5720__auto___38260;
if(cljs.core.chunked_seq_QMARK_(seq__38223_38261__$1)){
var c__4550__auto___38262 = cljs.core.chunk_first(seq__38223_38261__$1);
var G__38263 = cljs.core.chunk_rest(seq__38223_38261__$1);
var G__38264 = c__4550__auto___38262;
var G__38265 = cljs.core.count(c__4550__auto___38262);
var G__38266 = (0);
seq__38223_38247 = G__38263;
chunk__38224_38248 = G__38264;
count__38225_38249 = G__38265;
i__38226_38250 = G__38266;
continue;
} else {
var vec__38242_38267 = cljs.core.first(seq__38223_38261__$1);
var k_38268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38242_38267,(0),null);
var cb_38269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38242_38267,(1),null);
try{var G__38246_38270 = cljs.core.deref(re_frame.trace.traces);
(cb_38269.cljs$core$IFn$_invoke$arity$1 ? cb_38269.cljs$core$IFn$_invoke$arity$1(G__38246_38270) : cb_38269.call(null,G__38246_38270));
}catch (e38245){var e_38271 = e38245;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38268,"while storing",cljs.core.deref(re_frame.trace.traces),e_38271], 0));
}

var G__38272 = cljs.core.next(seq__38223_38261__$1);
var G__38273 = null;
var G__38274 = (0);
var G__38275 = (0);
seq__38223_38247 = G__38272;
chunk__38224_38248 = G__38273;
count__38225_38249 = G__38274;
i__38226_38250 = G__38275;
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
