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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__36907){
var map__36908 = p__36907;
var map__36908__$1 = (((((!((map__36908 == null))))?(((((map__36908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36908):map__36908);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36908__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36908__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36908__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36908__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__36910_36934 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__36911_36935 = null;
var count__36912_36936 = (0);
var i__36913_36937 = (0);
while(true){
if((i__36913_36937 < count__36912_36936)){
var vec__36924_36938 = chunk__36911_36935.cljs$core$IIndexed$_nth$arity$2(null,i__36913_36937);
var k_36939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924_36938,(0),null);
var cb_36940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924_36938,(1),null);
try{var G__36928_36941 = cljs.core.deref(re_frame.trace.traces);
(cb_36940.cljs$core$IFn$_invoke$arity$1 ? cb_36940.cljs$core$IFn$_invoke$arity$1(G__36928_36941) : cb_36940.call(null,G__36928_36941));
}catch (e36927){var e_36942 = e36927;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36939,"while storing",cljs.core.deref(re_frame.trace.traces),e_36942], 0));
}

var G__36943 = seq__36910_36934;
var G__36944 = chunk__36911_36935;
var G__36945 = count__36912_36936;
var G__36946 = (i__36913_36937 + (1));
seq__36910_36934 = G__36943;
chunk__36911_36935 = G__36944;
count__36912_36936 = G__36945;
i__36913_36937 = G__36946;
continue;
} else {
var temp__5720__auto___36947 = cljs.core.seq(seq__36910_36934);
if(temp__5720__auto___36947){
var seq__36910_36948__$1 = temp__5720__auto___36947;
if(cljs.core.chunked_seq_QMARK_(seq__36910_36948__$1)){
var c__4550__auto___36949 = cljs.core.chunk_first(seq__36910_36948__$1);
var G__36950 = cljs.core.chunk_rest(seq__36910_36948__$1);
var G__36951 = c__4550__auto___36949;
var G__36952 = cljs.core.count(c__4550__auto___36949);
var G__36953 = (0);
seq__36910_36934 = G__36950;
chunk__36911_36935 = G__36951;
count__36912_36936 = G__36952;
i__36913_36937 = G__36953;
continue;
} else {
var vec__36929_36954 = cljs.core.first(seq__36910_36948__$1);
var k_36955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929_36954,(0),null);
var cb_36956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929_36954,(1),null);
try{var G__36933_36957 = cljs.core.deref(re_frame.trace.traces);
(cb_36956.cljs$core$IFn$_invoke$arity$1 ? cb_36956.cljs$core$IFn$_invoke$arity$1(G__36933_36957) : cb_36956.call(null,G__36933_36957));
}catch (e36932){var e_36958 = e36932;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36955,"while storing",cljs.core.deref(re_frame.trace.traces),e_36958], 0));
}

var G__36959 = cljs.core.next(seq__36910_36948__$1);
var G__36960 = null;
var G__36961 = (0);
var G__36962 = (0);
seq__36910_36934 = G__36959;
chunk__36911_36935 = G__36960;
count__36912_36936 = G__36961;
i__36913_36937 = G__36962;
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
