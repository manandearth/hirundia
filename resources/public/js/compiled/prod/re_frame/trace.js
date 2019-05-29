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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__36539){
var map__36540 = p__36539;
var map__36540__$1 = (((((!((map__36540 == null))))?(((((map__36540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36540):map__36540);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36540__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36540__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36540__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36540__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__36542_36566 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__36543_36567 = null;
var count__36544_36568 = (0);
var i__36545_36569 = (0);
while(true){
if((i__36545_36569 < count__36544_36568)){
var vec__36556_36570 = chunk__36543_36567.cljs$core$IIndexed$_nth$arity$2(null,i__36545_36569);
var k_36571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36556_36570,(0),null);
var cb_36572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36556_36570,(1),null);
try{var G__36560_36573 = cljs.core.deref(re_frame.trace.traces);
(cb_36572.cljs$core$IFn$_invoke$arity$1 ? cb_36572.cljs$core$IFn$_invoke$arity$1(G__36560_36573) : cb_36572.call(null,G__36560_36573));
}catch (e36559){var e_36574 = e36559;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36571,"while storing",cljs.core.deref(re_frame.trace.traces),e_36574], 0));
}

var G__36575 = seq__36542_36566;
var G__36576 = chunk__36543_36567;
var G__36577 = count__36544_36568;
var G__36578 = (i__36545_36569 + (1));
seq__36542_36566 = G__36575;
chunk__36543_36567 = G__36576;
count__36544_36568 = G__36577;
i__36545_36569 = G__36578;
continue;
} else {
var temp__5720__auto___36579 = cljs.core.seq(seq__36542_36566);
if(temp__5720__auto___36579){
var seq__36542_36580__$1 = temp__5720__auto___36579;
if(cljs.core.chunked_seq_QMARK_(seq__36542_36580__$1)){
var c__4550__auto___36581 = cljs.core.chunk_first(seq__36542_36580__$1);
var G__36582 = cljs.core.chunk_rest(seq__36542_36580__$1);
var G__36583 = c__4550__auto___36581;
var G__36584 = cljs.core.count(c__4550__auto___36581);
var G__36585 = (0);
seq__36542_36566 = G__36582;
chunk__36543_36567 = G__36583;
count__36544_36568 = G__36584;
i__36545_36569 = G__36585;
continue;
} else {
var vec__36561_36586 = cljs.core.first(seq__36542_36580__$1);
var k_36587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561_36586,(0),null);
var cb_36588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561_36586,(1),null);
try{var G__36565_36589 = cljs.core.deref(re_frame.trace.traces);
(cb_36588.cljs$core$IFn$_invoke$arity$1 ? cb_36588.cljs$core$IFn$_invoke$arity$1(G__36565_36589) : cb_36588.call(null,G__36565_36589));
}catch (e36564){var e_36590 = e36564;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36587,"while storing",cljs.core.deref(re_frame.trace.traces),e_36590], 0));
}

var G__36591 = cljs.core.next(seq__36542_36580__$1);
var G__36592 = null;
var G__36593 = (0);
var G__36594 = (0);
seq__36542_36566 = G__36591;
chunk__36543_36567 = G__36592;
count__36544_36568 = G__36593;
i__36545_36569 = G__36594;
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
