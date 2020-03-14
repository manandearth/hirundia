// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46717 = arguments.length;
var i__4731__auto___46718 = (0);
while(true){
if((i__4731__auto___46718 < len__4730__auto___46717)){
args__4736__auto__.push((arguments[i__4731__auto___46718]));

var G__46719 = (i__4731__auto___46718 + (1));
i__4731__auto___46718 = G__46719;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__46711){
var vec__46712 = p__46711;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46712,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__46712,_opts){
return (function (data){
var map__46715 = data;
var map__46715__$1 = (((((!((map__46715 == null))))?(((((map__46715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46715):map__46715);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46715__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
});})(vec__46712,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq46710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46710));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46729 = arguments.length;
var i__4731__auto___46730 = (0);
while(true){
if((i__4731__auto___46730 < len__4730__auto___46729)){
args__4736__auto__.push((arguments[i__4731__auto___46730]));

var G__46731 = (i__4731__auto___46730 + (1));
i__4731__auto___46730 = G__46731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__46721){
var vec__46722 = p__46721;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46722,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,(((typeof console !== 'undefined'))?(function (){var level__GT_logger = ((function (vec__46722,opts){
return (function (level){
var or__4131__auto__ = (function (){var G__46726 = level;
var G__46726__$1 = (((G__46726 instanceof cljs.core.Keyword))?G__46726.fqn:null);
switch (G__46726__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46726__$1)].join('')));

}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return console.log;
}
});})(vec__46722,opts))
;
return ((function (level__GT_logger,vec__46722,opts){
return (function (data){
var temp__5720__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5720__auto__)){
var logger = temp__5720__auto__;
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$raw_DASH_console_QMARK_.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
var output = (function (){var G__46728 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_QMARK_err,null], 0));
var fexpr__46727 = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__46727.cljs$core$IFn$_invoke$arity$1 ? fexpr__46727.cljs$core$IFn$_invoke$arity$1(G__46728) : fexpr__46727.call(null,G__46728));
})();
var args = (function (){var vargs = cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data);
var temp__5718__auto__ = cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5718__auto__)){
var err = temp__5718__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
;})(level__GT_logger,vec__46722,opts))
})():((function (vec__46722,opts){
return (function (data){
return null;
});})(vec__46722,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq46720){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46720));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
