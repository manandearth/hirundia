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
var _STAR_current_trace_STAR__orig_val__43192 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43193 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43193;

try{try{var seq__43194 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__43195 = null;
var count__43196 = (0);
var i__43197 = (0);
while(true){
if((i__43197 < count__43196)){
var vec__43204 = chunk__43195.cljs$core$IIndexed$_nth$arity$2(null,i__43197);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43204,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43204,(1),null);
var temp__5718__auto___43226 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___43226)){
var effect_fn_43227 = temp__5718__auto___43226;
(effect_fn_43227.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43227.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43227.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43228 = seq__43194;
var G__43229 = chunk__43195;
var G__43230 = count__43196;
var G__43231 = (i__43197 + (1));
seq__43194 = G__43228;
chunk__43195 = G__43229;
count__43196 = G__43230;
i__43197 = G__43231;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__43194);
if(temp__5720__auto__){
var seq__43194__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43194__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43194__$1);
var G__43232 = cljs.core.chunk_rest(seq__43194__$1);
var G__43233 = c__4550__auto__;
var G__43234 = cljs.core.count(c__4550__auto__);
var G__43235 = (0);
seq__43194 = G__43232;
chunk__43195 = G__43233;
count__43196 = G__43234;
i__43197 = G__43235;
continue;
} else {
var vec__43207 = cljs.core.first(seq__43194__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43207,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43207,(1),null);
var temp__5718__auto___43236 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___43236)){
var effect_fn_43237 = temp__5718__auto___43236;
(effect_fn_43237.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43237.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43237.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43238 = cljs.core.next(seq__43194__$1);
var G__43239 = null;
var G__43240 = (0);
var G__43241 = (0);
seq__43194 = G__43238;
chunk__43195 = G__43239;
count__43196 = G__43240;
i__43197 = G__43241;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36885__auto___43242 = re_frame.interop.now();
var duration__36886__auto___43243 = (end__36885__auto___43242 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__36886__auto___43243,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36885__auto___43242);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43192;
}} else {
var seq__43210 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__43211 = null;
var count__43212 = (0);
var i__43213 = (0);
while(true){
if((i__43213 < count__43212)){
var vec__43220 = chunk__43211.cljs$core$IIndexed$_nth$arity$2(null,i__43213);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43220,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43220,(1),null);
var temp__5718__auto___43244 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___43244)){
var effect_fn_43245 = temp__5718__auto___43244;
(effect_fn_43245.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43245.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43245.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43246 = seq__43210;
var G__43247 = chunk__43211;
var G__43248 = count__43212;
var G__43249 = (i__43213 + (1));
seq__43210 = G__43246;
chunk__43211 = G__43247;
count__43212 = G__43248;
i__43213 = G__43249;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__43210);
if(temp__5720__auto__){
var seq__43210__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43210__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43210__$1);
var G__43250 = cljs.core.chunk_rest(seq__43210__$1);
var G__43251 = c__4550__auto__;
var G__43252 = cljs.core.count(c__4550__auto__);
var G__43253 = (0);
seq__43210 = G__43250;
chunk__43211 = G__43251;
count__43212 = G__43252;
i__43213 = G__43253;
continue;
} else {
var vec__43223 = cljs.core.first(seq__43210__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43223,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43223,(1),null);
var temp__5718__auto___43254 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___43254)){
var effect_fn_43255 = temp__5718__auto___43254;
(effect_fn_43255.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43255.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43255.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43256 = cljs.core.next(seq__43210__$1);
var G__43257 = null;
var G__43258 = (0);
var G__43259 = (0);
seq__43210 = G__43256;
chunk__43211 = G__43257;
count__43212 = G__43258;
i__43213 = G__43259;
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
var seq__43260 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43261 = null;
var count__43262 = (0);
var i__43263 = (0);
while(true){
if((i__43263 < count__43262)){
var map__43268 = chunk__43261.cljs$core$IIndexed$_nth$arity$2(null,i__43263);
var map__43268__$1 = (((((!((map__43268 == null))))?(((((map__43268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43268):map__43268);
var effect = map__43268__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43268__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43268__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43260,chunk__43261,count__43262,i__43263,map__43268,map__43268__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43260,chunk__43261,count__43262,i__43263,map__43268,map__43268__$1,effect,ms,dispatch))
,ms);
}


var G__43272 = seq__43260;
var G__43273 = chunk__43261;
var G__43274 = count__43262;
var G__43275 = (i__43263 + (1));
seq__43260 = G__43272;
chunk__43261 = G__43273;
count__43262 = G__43274;
i__43263 = G__43275;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__43260);
if(temp__5720__auto__){
var seq__43260__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43260__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43260__$1);
var G__43276 = cljs.core.chunk_rest(seq__43260__$1);
var G__43277 = c__4550__auto__;
var G__43278 = cljs.core.count(c__4550__auto__);
var G__43279 = (0);
seq__43260 = G__43276;
chunk__43261 = G__43277;
count__43262 = G__43278;
i__43263 = G__43279;
continue;
} else {
var map__43270 = cljs.core.first(seq__43260__$1);
var map__43270__$1 = (((((!((map__43270 == null))))?(((((map__43270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43270):map__43270);
var effect = map__43270__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43270__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43270__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43260,chunk__43261,count__43262,i__43263,map__43270,map__43270__$1,effect,ms,dispatch,seq__43260__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43260,chunk__43261,count__43262,i__43263,map__43270,map__43270__$1,effect,ms,dispatch,seq__43260__$1,temp__5720__auto__))
,ms);
}


var G__43280 = cljs.core.next(seq__43260__$1);
var G__43281 = null;
var G__43282 = (0);
var G__43283 = (0);
seq__43260 = G__43280;
chunk__43261 = G__43281;
count__43262 = G__43282;
i__43263 = G__43283;
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
var seq__43284 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43285 = null;
var count__43286 = (0);
var i__43287 = (0);
while(true){
if((i__43287 < count__43286)){
var event = chunk__43285.cljs$core$IIndexed$_nth$arity$2(null,i__43287);
re_frame.router.dispatch(event);


var G__43288 = seq__43284;
var G__43289 = chunk__43285;
var G__43290 = count__43286;
var G__43291 = (i__43287 + (1));
seq__43284 = G__43288;
chunk__43285 = G__43289;
count__43286 = G__43290;
i__43287 = G__43291;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__43284);
if(temp__5720__auto__){
var seq__43284__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43284__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43284__$1);
var G__43292 = cljs.core.chunk_rest(seq__43284__$1);
var G__43293 = c__4550__auto__;
var G__43294 = cljs.core.count(c__4550__auto__);
var G__43295 = (0);
seq__43284 = G__43292;
chunk__43285 = G__43293;
count__43286 = G__43294;
i__43287 = G__43295;
continue;
} else {
var event = cljs.core.first(seq__43284__$1);
re_frame.router.dispatch(event);


var G__43296 = cljs.core.next(seq__43284__$1);
var G__43297 = null;
var G__43298 = (0);
var G__43299 = (0);
seq__43284 = G__43296;
chunk__43285 = G__43297;
count__43286 = G__43298;
i__43287 = G__43299;
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
var seq__43300 = cljs.core.seq(value);
var chunk__43301 = null;
var count__43302 = (0);
var i__43303 = (0);
while(true){
if((i__43303 < count__43302)){
var event = chunk__43301.cljs$core$IIndexed$_nth$arity$2(null,i__43303);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43304 = seq__43300;
var G__43305 = chunk__43301;
var G__43306 = count__43302;
var G__43307 = (i__43303 + (1));
seq__43300 = G__43304;
chunk__43301 = G__43305;
count__43302 = G__43306;
i__43303 = G__43307;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__43300);
if(temp__5720__auto__){
var seq__43300__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43300__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43300__$1);
var G__43308 = cljs.core.chunk_rest(seq__43300__$1);
var G__43309 = c__4550__auto__;
var G__43310 = cljs.core.count(c__4550__auto__);
var G__43311 = (0);
seq__43300 = G__43308;
chunk__43301 = G__43309;
count__43302 = G__43310;
i__43303 = G__43311;
continue;
} else {
var event = cljs.core.first(seq__43300__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43312 = cljs.core.next(seq__43300__$1);
var G__43313 = null;
var G__43314 = (0);
var G__43315 = (0);
seq__43300 = G__43312;
chunk__43301 = G__43313;
count__43302 = G__43314;
i__43303 = G__43315;
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
