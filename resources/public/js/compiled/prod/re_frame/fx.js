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
var _STAR_current_trace_STAR__orig_val__42823 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42824 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42824;

try{try{var seq__42825 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__42826 = null;
var count__42827 = (0);
var i__42828 = (0);
while(true){
if((i__42828 < count__42827)){
var vec__42835 = chunk__42826.cljs$core$IIndexed$_nth$arity$2(null,i__42828);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42835,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42835,(1),null);
var temp__5718__auto___42857 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42857)){
var effect_fn_42858 = temp__5718__auto___42857;
(effect_fn_42858.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42858.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42858.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42859 = seq__42825;
var G__42860 = chunk__42826;
var G__42861 = count__42827;
var G__42862 = (i__42828 + (1));
seq__42825 = G__42859;
chunk__42826 = G__42860;
count__42827 = G__42861;
i__42828 = G__42862;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42825);
if(temp__5720__auto__){
var seq__42825__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42825__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42825__$1);
var G__42863 = cljs.core.chunk_rest(seq__42825__$1);
var G__42864 = c__4550__auto__;
var G__42865 = cljs.core.count(c__4550__auto__);
var G__42866 = (0);
seq__42825 = G__42863;
chunk__42826 = G__42864;
count__42827 = G__42865;
i__42828 = G__42866;
continue;
} else {
var vec__42838 = cljs.core.first(seq__42825__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42838,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42838,(1),null);
var temp__5718__auto___42867 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42867)){
var effect_fn_42868 = temp__5718__auto___42867;
(effect_fn_42868.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42868.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42868.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42869 = cljs.core.next(seq__42825__$1);
var G__42870 = null;
var G__42871 = (0);
var G__42872 = (0);
seq__42825 = G__42869;
chunk__42826 = G__42870;
count__42827 = G__42871;
i__42828 = G__42872;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36517__auto___42873 = re_frame.interop.now();
var duration__36518__auto___42874 = (end__36517__auto___42873 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__36518__auto___42874,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36517__auto___42873);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42823;
}} else {
var seq__42841 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__42842 = null;
var count__42843 = (0);
var i__42844 = (0);
while(true){
if((i__42844 < count__42843)){
var vec__42851 = chunk__42842.cljs$core$IIndexed$_nth$arity$2(null,i__42844);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42851,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42851,(1),null);
var temp__5718__auto___42875 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42875)){
var effect_fn_42876 = temp__5718__auto___42875;
(effect_fn_42876.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42876.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42876.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42877 = seq__42841;
var G__42878 = chunk__42842;
var G__42879 = count__42843;
var G__42880 = (i__42844 + (1));
seq__42841 = G__42877;
chunk__42842 = G__42878;
count__42843 = G__42879;
i__42844 = G__42880;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42841);
if(temp__5720__auto__){
var seq__42841__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42841__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42841__$1);
var G__42881 = cljs.core.chunk_rest(seq__42841__$1);
var G__42882 = c__4550__auto__;
var G__42883 = cljs.core.count(c__4550__auto__);
var G__42884 = (0);
seq__42841 = G__42881;
chunk__42842 = G__42882;
count__42843 = G__42883;
i__42844 = G__42884;
continue;
} else {
var vec__42854 = cljs.core.first(seq__42841__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42854,(1),null);
var temp__5718__auto___42885 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___42885)){
var effect_fn_42886 = temp__5718__auto___42885;
(effect_fn_42886.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42886.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42886.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42887 = cljs.core.next(seq__42841__$1);
var G__42888 = null;
var G__42889 = (0);
var G__42890 = (0);
seq__42841 = G__42887;
chunk__42842 = G__42888;
count__42843 = G__42889;
i__42844 = G__42890;
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
var seq__42891 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42892 = null;
var count__42893 = (0);
var i__42894 = (0);
while(true){
if((i__42894 < count__42893)){
var map__42899 = chunk__42892.cljs$core$IIndexed$_nth$arity$2(null,i__42894);
var map__42899__$1 = (((((!((map__42899 == null))))?(((((map__42899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42899):map__42899);
var effect = map__42899__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42899__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42899__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__42891,chunk__42892,count__42893,i__42894,map__42899,map__42899__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__42891,chunk__42892,count__42893,i__42894,map__42899,map__42899__$1,effect,ms,dispatch))
,ms);
}


var G__42903 = seq__42891;
var G__42904 = chunk__42892;
var G__42905 = count__42893;
var G__42906 = (i__42894 + (1));
seq__42891 = G__42903;
chunk__42892 = G__42904;
count__42893 = G__42905;
i__42894 = G__42906;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42891);
if(temp__5720__auto__){
var seq__42891__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42891__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42891__$1);
var G__42907 = cljs.core.chunk_rest(seq__42891__$1);
var G__42908 = c__4550__auto__;
var G__42909 = cljs.core.count(c__4550__auto__);
var G__42910 = (0);
seq__42891 = G__42907;
chunk__42892 = G__42908;
count__42893 = G__42909;
i__42894 = G__42910;
continue;
} else {
var map__42901 = cljs.core.first(seq__42891__$1);
var map__42901__$1 = (((((!((map__42901 == null))))?(((((map__42901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42901):map__42901);
var effect = map__42901__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42901__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42901__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__42891,chunk__42892,count__42893,i__42894,map__42901,map__42901__$1,effect,ms,dispatch,seq__42891__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__42891,chunk__42892,count__42893,i__42894,map__42901,map__42901__$1,effect,ms,dispatch,seq__42891__$1,temp__5720__auto__))
,ms);
}


var G__42911 = cljs.core.next(seq__42891__$1);
var G__42912 = null;
var G__42913 = (0);
var G__42914 = (0);
seq__42891 = G__42911;
chunk__42892 = G__42912;
count__42893 = G__42913;
i__42894 = G__42914;
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
var seq__42915 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42916 = null;
var count__42917 = (0);
var i__42918 = (0);
while(true){
if((i__42918 < count__42917)){
var event = chunk__42916.cljs$core$IIndexed$_nth$arity$2(null,i__42918);
re_frame.router.dispatch(event);


var G__42919 = seq__42915;
var G__42920 = chunk__42916;
var G__42921 = count__42917;
var G__42922 = (i__42918 + (1));
seq__42915 = G__42919;
chunk__42916 = G__42920;
count__42917 = G__42921;
i__42918 = G__42922;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42915);
if(temp__5720__auto__){
var seq__42915__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42915__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42915__$1);
var G__42923 = cljs.core.chunk_rest(seq__42915__$1);
var G__42924 = c__4550__auto__;
var G__42925 = cljs.core.count(c__4550__auto__);
var G__42926 = (0);
seq__42915 = G__42923;
chunk__42916 = G__42924;
count__42917 = G__42925;
i__42918 = G__42926;
continue;
} else {
var event = cljs.core.first(seq__42915__$1);
re_frame.router.dispatch(event);


var G__42927 = cljs.core.next(seq__42915__$1);
var G__42928 = null;
var G__42929 = (0);
var G__42930 = (0);
seq__42915 = G__42927;
chunk__42916 = G__42928;
count__42917 = G__42929;
i__42918 = G__42930;
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
var seq__42931 = cljs.core.seq(value);
var chunk__42932 = null;
var count__42933 = (0);
var i__42934 = (0);
while(true){
if((i__42934 < count__42933)){
var event = chunk__42932.cljs$core$IIndexed$_nth$arity$2(null,i__42934);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__42935 = seq__42931;
var G__42936 = chunk__42932;
var G__42937 = count__42933;
var G__42938 = (i__42934 + (1));
seq__42931 = G__42935;
chunk__42932 = G__42936;
count__42933 = G__42937;
i__42934 = G__42938;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42931);
if(temp__5720__auto__){
var seq__42931__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42931__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42931__$1);
var G__42939 = cljs.core.chunk_rest(seq__42931__$1);
var G__42940 = c__4550__auto__;
var G__42941 = cljs.core.count(c__4550__auto__);
var G__42942 = (0);
seq__42931 = G__42939;
chunk__42932 = G__42940;
count__42933 = G__42941;
i__42934 = G__42942;
continue;
} else {
var event = cljs.core.first(seq__42931__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__42943 = cljs.core.next(seq__42931__$1);
var G__42944 = null;
var G__42945 = (0);
var G__42946 = (0);
seq__42931 = G__42943;
chunk__42932 = G__42944;
count__42933 = G__42945;
i__42934 = G__42946;
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
