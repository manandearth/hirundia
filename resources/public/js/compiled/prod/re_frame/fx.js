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
var _STAR_current_trace_STAR__orig_val__49371 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49372 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49372;

try{try{var seq__49373 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__49374 = null;
var count__49375 = (0);
var i__49376 = (0);
while(true){
if((i__49376 < count__49375)){
var vec__49383 = chunk__49374.cljs$core$IIndexed$_nth$arity$2(null,i__49376);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49383,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49383,(1),null);
var temp__5718__auto___49405 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49405)){
var effect_fn_49406 = temp__5718__auto___49405;
(effect_fn_49406.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49406.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49406.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49407 = seq__49373;
var G__49408 = chunk__49374;
var G__49409 = count__49375;
var G__49410 = (i__49376 + (1));
seq__49373 = G__49407;
chunk__49374 = G__49408;
count__49375 = G__49409;
i__49376 = G__49410;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49373);
if(temp__5720__auto__){
var seq__49373__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49373__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49373__$1);
var G__49411 = cljs.core.chunk_rest(seq__49373__$1);
var G__49412 = c__4550__auto__;
var G__49413 = cljs.core.count(c__4550__auto__);
var G__49414 = (0);
seq__49373 = G__49411;
chunk__49374 = G__49412;
count__49375 = G__49413;
i__49376 = G__49414;
continue;
} else {
var vec__49386 = cljs.core.first(seq__49373__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49386,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49386,(1),null);
var temp__5718__auto___49415 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49415)){
var effect_fn_49416 = temp__5718__auto___49415;
(effect_fn_49416.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49416.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49416.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49417 = cljs.core.next(seq__49373__$1);
var G__49418 = null;
var G__49419 = (0);
var G__49420 = (0);
seq__49373 = G__49417;
chunk__49374 = G__49418;
count__49375 = G__49419;
i__49376 = G__49420;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38137__auto___49421 = re_frame.interop.now();
var duration__38138__auto___49422 = (end__38137__auto___49421 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__38138__auto___49422,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38137__auto___49421);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49371;
}} else {
var seq__49389 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__49390 = null;
var count__49391 = (0);
var i__49392 = (0);
while(true){
if((i__49392 < count__49391)){
var vec__49399 = chunk__49390.cljs$core$IIndexed$_nth$arity$2(null,i__49392);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49399,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49399,(1),null);
var temp__5718__auto___49423 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49423)){
var effect_fn_49424 = temp__5718__auto___49423;
(effect_fn_49424.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49424.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49424.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49425 = seq__49389;
var G__49426 = chunk__49390;
var G__49427 = count__49391;
var G__49428 = (i__49392 + (1));
seq__49389 = G__49425;
chunk__49390 = G__49426;
count__49391 = G__49427;
i__49392 = G__49428;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49389);
if(temp__5720__auto__){
var seq__49389__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49389__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49389__$1);
var G__49429 = cljs.core.chunk_rest(seq__49389__$1);
var G__49430 = c__4550__auto__;
var G__49431 = cljs.core.count(c__4550__auto__);
var G__49432 = (0);
seq__49389 = G__49429;
chunk__49390 = G__49430;
count__49391 = G__49431;
i__49392 = G__49432;
continue;
} else {
var vec__49402 = cljs.core.first(seq__49389__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49402,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49402,(1),null);
var temp__5718__auto___49433 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49433)){
var effect_fn_49434 = temp__5718__auto___49433;
(effect_fn_49434.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49434.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49434.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49435 = cljs.core.next(seq__49389__$1);
var G__49436 = null;
var G__49437 = (0);
var G__49438 = (0);
seq__49389 = G__49435;
chunk__49390 = G__49436;
count__49391 = G__49437;
i__49392 = G__49438;
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
var seq__49439 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49440 = null;
var count__49441 = (0);
var i__49442 = (0);
while(true){
if((i__49442 < count__49441)){
var map__49447 = chunk__49440.cljs$core$IIndexed$_nth$arity$2(null,i__49442);
var map__49447__$1 = (((((!((map__49447 == null))))?(((((map__49447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49447):map__49447);
var effect = map__49447__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49439,chunk__49440,count__49441,i__49442,map__49447,map__49447__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49439,chunk__49440,count__49441,i__49442,map__49447,map__49447__$1,effect,ms,dispatch))
,ms);
}


var G__49451 = seq__49439;
var G__49452 = chunk__49440;
var G__49453 = count__49441;
var G__49454 = (i__49442 + (1));
seq__49439 = G__49451;
chunk__49440 = G__49452;
count__49441 = G__49453;
i__49442 = G__49454;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49439);
if(temp__5720__auto__){
var seq__49439__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49439__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49439__$1);
var G__49455 = cljs.core.chunk_rest(seq__49439__$1);
var G__49456 = c__4550__auto__;
var G__49457 = cljs.core.count(c__4550__auto__);
var G__49458 = (0);
seq__49439 = G__49455;
chunk__49440 = G__49456;
count__49441 = G__49457;
i__49442 = G__49458;
continue;
} else {
var map__49449 = cljs.core.first(seq__49439__$1);
var map__49449__$1 = (((((!((map__49449 == null))))?(((((map__49449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49449):map__49449);
var effect = map__49449__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49439,chunk__49440,count__49441,i__49442,map__49449,map__49449__$1,effect,ms,dispatch,seq__49439__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49439,chunk__49440,count__49441,i__49442,map__49449,map__49449__$1,effect,ms,dispatch,seq__49439__$1,temp__5720__auto__))
,ms);
}


var G__49459 = cljs.core.next(seq__49439__$1);
var G__49460 = null;
var G__49461 = (0);
var G__49462 = (0);
seq__49439 = G__49459;
chunk__49440 = G__49460;
count__49441 = G__49461;
i__49442 = G__49462;
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
var seq__49463 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49464 = null;
var count__49465 = (0);
var i__49466 = (0);
while(true){
if((i__49466 < count__49465)){
var event = chunk__49464.cljs$core$IIndexed$_nth$arity$2(null,i__49466);
re_frame.router.dispatch(event);


var G__49467 = seq__49463;
var G__49468 = chunk__49464;
var G__49469 = count__49465;
var G__49470 = (i__49466 + (1));
seq__49463 = G__49467;
chunk__49464 = G__49468;
count__49465 = G__49469;
i__49466 = G__49470;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49463);
if(temp__5720__auto__){
var seq__49463__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49463__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49463__$1);
var G__49471 = cljs.core.chunk_rest(seq__49463__$1);
var G__49472 = c__4550__auto__;
var G__49473 = cljs.core.count(c__4550__auto__);
var G__49474 = (0);
seq__49463 = G__49471;
chunk__49464 = G__49472;
count__49465 = G__49473;
i__49466 = G__49474;
continue;
} else {
var event = cljs.core.first(seq__49463__$1);
re_frame.router.dispatch(event);


var G__49475 = cljs.core.next(seq__49463__$1);
var G__49476 = null;
var G__49477 = (0);
var G__49478 = (0);
seq__49463 = G__49475;
chunk__49464 = G__49476;
count__49465 = G__49477;
i__49466 = G__49478;
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
var seq__49479 = cljs.core.seq(value);
var chunk__49480 = null;
var count__49481 = (0);
var i__49482 = (0);
while(true){
if((i__49482 < count__49481)){
var event = chunk__49480.cljs$core$IIndexed$_nth$arity$2(null,i__49482);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__49483 = seq__49479;
var G__49484 = chunk__49480;
var G__49485 = count__49481;
var G__49486 = (i__49482 + (1));
seq__49479 = G__49483;
chunk__49480 = G__49484;
count__49481 = G__49485;
i__49482 = G__49486;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49479);
if(temp__5720__auto__){
var seq__49479__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49479__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49479__$1);
var G__49487 = cljs.core.chunk_rest(seq__49479__$1);
var G__49488 = c__4550__auto__;
var G__49489 = cljs.core.count(c__4550__auto__);
var G__49490 = (0);
seq__49479 = G__49487;
chunk__49480 = G__49488;
count__49481 = G__49489;
i__49482 = G__49490;
continue;
} else {
var event = cljs.core.first(seq__49479__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__49491 = cljs.core.next(seq__49479__$1);
var G__49492 = null;
var G__49493 = (0);
var G__49494 = (0);
seq__49479 = G__49491;
chunk__49480 = G__49492;
count__49481 = G__49493;
i__49482 = G__49494;
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
