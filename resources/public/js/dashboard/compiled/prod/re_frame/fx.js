// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__49504 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49505 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49505;

try{try{var seq__49506 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__49507 = null;
var count__49508 = (0);
var i__49509 = (0);
while(true){
if((i__49509 < count__49508)){
var vec__49516 = chunk__49507.cljs$core$IIndexed$_nth$arity$2(null,i__49509);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49516,(1),null);
var temp__5718__auto___49538 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49538)){
var effect_fn_49539 = temp__5718__auto___49538;
(effect_fn_49539.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49539.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49539.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49540 = seq__49506;
var G__49541 = chunk__49507;
var G__49542 = count__49508;
var G__49543 = (i__49509 + (1));
seq__49506 = G__49540;
chunk__49507 = G__49541;
count__49508 = G__49542;
i__49509 = G__49543;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49506);
if(temp__5720__auto__){
var seq__49506__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49506__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49506__$1);
var G__49544 = cljs.core.chunk_rest(seq__49506__$1);
var G__49545 = c__4550__auto__;
var G__49546 = cljs.core.count(c__4550__auto__);
var G__49547 = (0);
seq__49506 = G__49544;
chunk__49507 = G__49545;
count__49508 = G__49546;
i__49509 = G__49547;
continue;
} else {
var vec__49519 = cljs.core.first(seq__49506__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49519,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49519,(1),null);
var temp__5718__auto___49548 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49548)){
var effect_fn_49549 = temp__5718__auto___49548;
(effect_fn_49549.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49549.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49549.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49550 = cljs.core.next(seq__49506__$1);
var G__49551 = null;
var G__49552 = (0);
var G__49553 = (0);
seq__49506 = G__49550;
chunk__49507 = G__49551;
count__49508 = G__49552;
i__49509 = G__49553;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38270__auto___49554 = re_frame.interop.now();
var duration__38271__auto___49555 = (end__38270__auto___49554 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__38271__auto___49555,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38270__auto___49554);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49504;
}} else {
var seq__49522 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__49523 = null;
var count__49524 = (0);
var i__49525 = (0);
while(true){
if((i__49525 < count__49524)){
var vec__49532 = chunk__49523.cljs$core$IIndexed$_nth$arity$2(null,i__49525);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49532,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49532,(1),null);
var temp__5718__auto___49556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49556)){
var effect_fn_49557 = temp__5718__auto___49556;
(effect_fn_49557.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49557.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49557.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49558 = seq__49522;
var G__49559 = chunk__49523;
var G__49560 = count__49524;
var G__49561 = (i__49525 + (1));
seq__49522 = G__49558;
chunk__49523 = G__49559;
count__49524 = G__49560;
i__49525 = G__49561;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49522);
if(temp__5720__auto__){
var seq__49522__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49522__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49522__$1);
var G__49562 = cljs.core.chunk_rest(seq__49522__$1);
var G__49563 = c__4550__auto__;
var G__49564 = cljs.core.count(c__4550__auto__);
var G__49565 = (0);
seq__49522 = G__49562;
chunk__49523 = G__49563;
count__49524 = G__49564;
i__49525 = G__49565;
continue;
} else {
var vec__49535 = cljs.core.first(seq__49522__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49535,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49535,(1),null);
var temp__5718__auto___49566 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49566)){
var effect_fn_49567 = temp__5718__auto___49566;
(effect_fn_49567.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49567.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49567.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49568 = cljs.core.next(seq__49522__$1);
var G__49569 = null;
var G__49570 = (0);
var G__49571 = (0);
seq__49522 = G__49568;
chunk__49523 = G__49569;
count__49524 = G__49570;
i__49525 = G__49571;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__49572 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49573 = null;
var count__49574 = (0);
var i__49575 = (0);
while(true){
if((i__49575 < count__49574)){
var map__49580 = chunk__49573.cljs$core$IIndexed$_nth$arity$2(null,i__49575);
var map__49580__$1 = (((((!((map__49580 == null))))?(((((map__49580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49580):map__49580);
var effect = map__49580__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49580__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49580__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49572,chunk__49573,count__49574,i__49575,map__49580,map__49580__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49572,chunk__49573,count__49574,i__49575,map__49580,map__49580__$1,effect,ms,dispatch))
,ms);
}


var G__49584 = seq__49572;
var G__49585 = chunk__49573;
var G__49586 = count__49574;
var G__49587 = (i__49575 + (1));
seq__49572 = G__49584;
chunk__49573 = G__49585;
count__49574 = G__49586;
i__49575 = G__49587;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49572);
if(temp__5720__auto__){
var seq__49572__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49572__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49572__$1);
var G__49588 = cljs.core.chunk_rest(seq__49572__$1);
var G__49589 = c__4550__auto__;
var G__49590 = cljs.core.count(c__4550__auto__);
var G__49591 = (0);
seq__49572 = G__49588;
chunk__49573 = G__49589;
count__49574 = G__49590;
i__49575 = G__49591;
continue;
} else {
var map__49582 = cljs.core.first(seq__49572__$1);
var map__49582__$1 = (((((!((map__49582 == null))))?(((((map__49582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49582):map__49582);
var effect = map__49582__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49572,chunk__49573,count__49574,i__49575,map__49582,map__49582__$1,effect,ms,dispatch,seq__49572__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49572,chunk__49573,count__49574,i__49575,map__49582,map__49582__$1,effect,ms,dispatch,seq__49572__$1,temp__5720__auto__))
,ms);
}


var G__49592 = cljs.core.next(seq__49572__$1);
var G__49593 = null;
var G__49594 = (0);
var G__49595 = (0);
seq__49572 = G__49592;
chunk__49573 = G__49593;
count__49574 = G__49594;
i__49575 = G__49595;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__49596 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49597 = null;
var count__49598 = (0);
var i__49599 = (0);
while(true){
if((i__49599 < count__49598)){
var event = chunk__49597.cljs$core$IIndexed$_nth$arity$2(null,i__49599);
re_frame.router.dispatch(event);


var G__49600 = seq__49596;
var G__49601 = chunk__49597;
var G__49602 = count__49598;
var G__49603 = (i__49599 + (1));
seq__49596 = G__49600;
chunk__49597 = G__49601;
count__49598 = G__49602;
i__49599 = G__49603;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49596);
if(temp__5720__auto__){
var seq__49596__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49596__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49596__$1);
var G__49604 = cljs.core.chunk_rest(seq__49596__$1);
var G__49605 = c__4550__auto__;
var G__49606 = cljs.core.count(c__4550__auto__);
var G__49607 = (0);
seq__49596 = G__49604;
chunk__49597 = G__49605;
count__49598 = G__49606;
i__49599 = G__49607;
continue;
} else {
var event = cljs.core.first(seq__49596__$1);
re_frame.router.dispatch(event);


var G__49608 = cljs.core.next(seq__49596__$1);
var G__49609 = null;
var G__49610 = (0);
var G__49611 = (0);
seq__49596 = G__49608;
chunk__49597 = G__49609;
count__49598 = G__49610;
i__49599 = G__49611;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49612 = cljs.core.seq(value);
var chunk__49613 = null;
var count__49614 = (0);
var i__49615 = (0);
while(true){
if((i__49615 < count__49614)){
var event = chunk__49613.cljs$core$IIndexed$_nth$arity$2(null,i__49615);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__49616 = seq__49612;
var G__49617 = chunk__49613;
var G__49618 = count__49614;
var G__49619 = (i__49615 + (1));
seq__49612 = G__49616;
chunk__49613 = G__49617;
count__49614 = G__49618;
i__49615 = G__49619;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49612);
if(temp__5720__auto__){
var seq__49612__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49612__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49612__$1);
var G__49620 = cljs.core.chunk_rest(seq__49612__$1);
var G__49621 = c__4550__auto__;
var G__49622 = cljs.core.count(c__4550__auto__);
var G__49623 = (0);
seq__49612 = G__49620;
chunk__49613 = G__49621;
count__49614 = G__49622;
i__49615 = G__49623;
continue;
} else {
var event = cljs.core.first(seq__49612__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__49624 = cljs.core.next(seq__49612__$1);
var G__49625 = null;
var G__49626 = (0);
var G__49627 = (0);
seq__49612 = G__49624;
chunk__49613 = G__49625;
count__49614 = G__49626;
i__49615 = G__49627;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
