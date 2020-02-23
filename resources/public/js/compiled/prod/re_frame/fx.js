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
var _STAR_current_trace_STAR__orig_val__49312 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49313 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49313;

try{try{var seq__49314 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__49315 = null;
var count__49316 = (0);
var i__49317 = (0);
while(true){
if((i__49317 < count__49316)){
var vec__49324 = chunk__49315.cljs$core$IIndexed$_nth$arity$2(null,i__49317);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324,(1),null);
var temp__5718__auto___49346 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49346)){
var effect_fn_49347 = temp__5718__auto___49346;
(effect_fn_49347.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49347.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49347.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49348 = seq__49314;
var G__49349 = chunk__49315;
var G__49350 = count__49316;
var G__49351 = (i__49317 + (1));
seq__49314 = G__49348;
chunk__49315 = G__49349;
count__49316 = G__49350;
i__49317 = G__49351;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49314);
if(temp__5720__auto__){
var seq__49314__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49314__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49314__$1);
var G__49352 = cljs.core.chunk_rest(seq__49314__$1);
var G__49353 = c__4550__auto__;
var G__49354 = cljs.core.count(c__4550__auto__);
var G__49355 = (0);
seq__49314 = G__49352;
chunk__49315 = G__49353;
count__49316 = G__49354;
i__49317 = G__49355;
continue;
} else {
var vec__49327 = cljs.core.first(seq__49314__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49327,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49327,(1),null);
var temp__5718__auto___49356 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49356)){
var effect_fn_49357 = temp__5718__auto___49356;
(effect_fn_49357.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49357.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49357.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49358 = cljs.core.next(seq__49314__$1);
var G__49359 = null;
var G__49360 = (0);
var G__49361 = (0);
seq__49314 = G__49358;
chunk__49315 = G__49359;
count__49316 = G__49360;
i__49317 = G__49361;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38078__auto___49362 = re_frame.interop.now();
var duration__38079__auto___49363 = (end__38078__auto___49362 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__38079__auto___49363,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38078__auto___49362);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49312;
}} else {
var seq__49330 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__49331 = null;
var count__49332 = (0);
var i__49333 = (0);
while(true){
if((i__49333 < count__49332)){
var vec__49340 = chunk__49331.cljs$core$IIndexed$_nth$arity$2(null,i__49333);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49340,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49340,(1),null);
var temp__5718__auto___49364 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49364)){
var effect_fn_49365 = temp__5718__auto___49364;
(effect_fn_49365.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49365.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49365.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49366 = seq__49330;
var G__49367 = chunk__49331;
var G__49368 = count__49332;
var G__49369 = (i__49333 + (1));
seq__49330 = G__49366;
chunk__49331 = G__49367;
count__49332 = G__49368;
i__49333 = G__49369;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49330);
if(temp__5720__auto__){
var seq__49330__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49330__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49330__$1);
var G__49370 = cljs.core.chunk_rest(seq__49330__$1);
var G__49371 = c__4550__auto__;
var G__49372 = cljs.core.count(c__4550__auto__);
var G__49373 = (0);
seq__49330 = G__49370;
chunk__49331 = G__49371;
count__49332 = G__49372;
i__49333 = G__49373;
continue;
} else {
var vec__49343 = cljs.core.first(seq__49330__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49343,(1),null);
var temp__5718__auto___49374 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___49374)){
var effect_fn_49375 = temp__5718__auto___49374;
(effect_fn_49375.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49375.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49375.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49376 = cljs.core.next(seq__49330__$1);
var G__49377 = null;
var G__49378 = (0);
var G__49379 = (0);
seq__49330 = G__49376;
chunk__49331 = G__49377;
count__49332 = G__49378;
i__49333 = G__49379;
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
var seq__49380 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49381 = null;
var count__49382 = (0);
var i__49383 = (0);
while(true){
if((i__49383 < count__49382)){
var map__49388 = chunk__49381.cljs$core$IIndexed$_nth$arity$2(null,i__49383);
var map__49388__$1 = (((((!((map__49388 == null))))?(((((map__49388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49388):map__49388);
var effect = map__49388__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49388__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49388__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49380,chunk__49381,count__49382,i__49383,map__49388,map__49388__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49380,chunk__49381,count__49382,i__49383,map__49388,map__49388__$1,effect,ms,dispatch))
,ms);
}


var G__49392 = seq__49380;
var G__49393 = chunk__49381;
var G__49394 = count__49382;
var G__49395 = (i__49383 + (1));
seq__49380 = G__49392;
chunk__49381 = G__49393;
count__49382 = G__49394;
i__49383 = G__49395;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49380);
if(temp__5720__auto__){
var seq__49380__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49380__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49380__$1);
var G__49396 = cljs.core.chunk_rest(seq__49380__$1);
var G__49397 = c__4550__auto__;
var G__49398 = cljs.core.count(c__4550__auto__);
var G__49399 = (0);
seq__49380 = G__49396;
chunk__49381 = G__49397;
count__49382 = G__49398;
i__49383 = G__49399;
continue;
} else {
var map__49390 = cljs.core.first(seq__49380__$1);
var map__49390__$1 = (((((!((map__49390 == null))))?(((((map__49390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49390):map__49390);
var effect = map__49390__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49390__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49390__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__49380,chunk__49381,count__49382,i__49383,map__49390,map__49390__$1,effect,ms,dispatch,seq__49380__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__49380,chunk__49381,count__49382,i__49383,map__49390,map__49390__$1,effect,ms,dispatch,seq__49380__$1,temp__5720__auto__))
,ms);
}


var G__49400 = cljs.core.next(seq__49380__$1);
var G__49401 = null;
var G__49402 = (0);
var G__49403 = (0);
seq__49380 = G__49400;
chunk__49381 = G__49401;
count__49382 = G__49402;
i__49383 = G__49403;
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
var seq__49404 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49405 = null;
var count__49406 = (0);
var i__49407 = (0);
while(true){
if((i__49407 < count__49406)){
var event = chunk__49405.cljs$core$IIndexed$_nth$arity$2(null,i__49407);
re_frame.router.dispatch(event);


var G__49408 = seq__49404;
var G__49409 = chunk__49405;
var G__49410 = count__49406;
var G__49411 = (i__49407 + (1));
seq__49404 = G__49408;
chunk__49405 = G__49409;
count__49406 = G__49410;
i__49407 = G__49411;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49404);
if(temp__5720__auto__){
var seq__49404__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49404__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49404__$1);
var G__49412 = cljs.core.chunk_rest(seq__49404__$1);
var G__49413 = c__4550__auto__;
var G__49414 = cljs.core.count(c__4550__auto__);
var G__49415 = (0);
seq__49404 = G__49412;
chunk__49405 = G__49413;
count__49406 = G__49414;
i__49407 = G__49415;
continue;
} else {
var event = cljs.core.first(seq__49404__$1);
re_frame.router.dispatch(event);


var G__49416 = cljs.core.next(seq__49404__$1);
var G__49417 = null;
var G__49418 = (0);
var G__49419 = (0);
seq__49404 = G__49416;
chunk__49405 = G__49417;
count__49406 = G__49418;
i__49407 = G__49419;
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
var seq__49420 = cljs.core.seq(value);
var chunk__49421 = null;
var count__49422 = (0);
var i__49423 = (0);
while(true){
if((i__49423 < count__49422)){
var event = chunk__49421.cljs$core$IIndexed$_nth$arity$2(null,i__49423);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__49424 = seq__49420;
var G__49425 = chunk__49421;
var G__49426 = count__49422;
var G__49427 = (i__49423 + (1));
seq__49420 = G__49424;
chunk__49421 = G__49425;
count__49422 = G__49426;
i__49423 = G__49427;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49420);
if(temp__5720__auto__){
var seq__49420__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49420__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49420__$1);
var G__49428 = cljs.core.chunk_rest(seq__49420__$1);
var G__49429 = c__4550__auto__;
var G__49430 = cljs.core.count(c__4550__auto__);
var G__49431 = (0);
seq__49420 = G__49428;
chunk__49421 = G__49429;
count__49422 = G__49430;
i__49423 = G__49431;
continue;
} else {
var event = cljs.core.first(seq__49420__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__49432 = cljs.core.next(seq__49420__$1);
var G__49433 = null;
var G__49434 = (0);
var G__49435 = (0);
seq__49420 = G__49432;
chunk__49421 = G__49433;
count__49422 = G__49434;
i__49423 = G__49435;
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
