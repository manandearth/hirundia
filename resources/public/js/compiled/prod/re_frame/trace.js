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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38161){
var map__38162 = p__38161;
var map__38162__$1 = (((((!((map__38162 == null))))?(((((map__38162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38162):map__38162);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__38164_38188 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38165_38189 = null;
var count__38166_38190 = (0);
var i__38167_38191 = (0);
while(true){
if((i__38167_38191 < count__38166_38190)){
var vec__38178_38192 = chunk__38165_38189.cljs$core$IIndexed$_nth$arity$2(null,i__38167_38191);
var k_38193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38178_38192,(0),null);
var cb_38194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38178_38192,(1),null);
try{var G__38182_38195 = cljs.core.deref(re_frame.trace.traces);
(cb_38194.cljs$core$IFn$_invoke$arity$1 ? cb_38194.cljs$core$IFn$_invoke$arity$1(G__38182_38195) : cb_38194.call(null,G__38182_38195));
}catch (e38181){var e_38196 = e38181;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38193,"while storing",cljs.core.deref(re_frame.trace.traces),e_38196], 0));
}

var G__38197 = seq__38164_38188;
var G__38198 = chunk__38165_38189;
var G__38199 = count__38166_38190;
var G__38200 = (i__38167_38191 + (1));
seq__38164_38188 = G__38197;
chunk__38165_38189 = G__38198;
count__38166_38190 = G__38199;
i__38167_38191 = G__38200;
continue;
} else {
var temp__5720__auto___38201 = cljs.core.seq(seq__38164_38188);
if(temp__5720__auto___38201){
var seq__38164_38202__$1 = temp__5720__auto___38201;
if(cljs.core.chunked_seq_QMARK_(seq__38164_38202__$1)){
var c__4550__auto___38203 = cljs.core.chunk_first(seq__38164_38202__$1);
var G__38204 = cljs.core.chunk_rest(seq__38164_38202__$1);
var G__38205 = c__4550__auto___38203;
var G__38206 = cljs.core.count(c__4550__auto___38203);
var G__38207 = (0);
seq__38164_38188 = G__38204;
chunk__38165_38189 = G__38205;
count__38166_38190 = G__38206;
i__38167_38191 = G__38207;
continue;
} else {
var vec__38183_38208 = cljs.core.first(seq__38164_38202__$1);
var k_38209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38183_38208,(0),null);
var cb_38210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38183_38208,(1),null);
try{var G__38187_38211 = cljs.core.deref(re_frame.trace.traces);
(cb_38210.cljs$core$IFn$_invoke$arity$1 ? cb_38210.cljs$core$IFn$_invoke$arity$1(G__38187_38211) : cb_38210.call(null,G__38187_38211));
}catch (e38186){var e_38212 = e38186;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38209,"while storing",cljs.core.deref(re_frame.trace.traces),e_38212], 0));
}

var G__38213 = cljs.core.next(seq__38164_38202__$1);
var G__38214 = null;
var G__38215 = (0);
var G__38216 = (0);
seq__38164_38188 = G__38213;
chunk__38165_38189 = G__38214;
count__38166_38190 = G__38215;
i__38167_38191 = G__38216;
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
