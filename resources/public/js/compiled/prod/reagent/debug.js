// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35546__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35547__i = 0, G__35547__a = new Array(arguments.length -  0);
while (G__35547__i < G__35547__a.length) {G__35547__a[G__35547__i] = arguments[G__35547__i + 0]; ++G__35547__i;}
  args = new cljs.core.IndexedSeq(G__35547__a,0,null);
} 
return G__35546__delegate.call(this,args);};
G__35546.cljs$lang$maxFixedArity = 0;
G__35546.cljs$lang$applyTo = (function (arglist__35548){
var args = cljs.core.seq(arglist__35548);
return G__35546__delegate(args);
});
G__35546.cljs$core$IFn$_invoke$arity$variadic = G__35546__delegate;
return G__35546;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35549__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35550__i = 0, G__35550__a = new Array(arguments.length -  0);
while (G__35550__i < G__35550__a.length) {G__35550__a[G__35550__i] = arguments[G__35550__i + 0]; ++G__35550__i;}
  args = new cljs.core.IndexedSeq(G__35550__a,0,null);
} 
return G__35549__delegate.call(this,args);};
G__35549.cljs$lang$maxFixedArity = 0;
G__35549.cljs$lang$applyTo = (function (arglist__35551){
var args = cljs.core.seq(arglist__35551);
return G__35549__delegate(args);
});
G__35549.cljs$core$IFn$_invoke$arity$variadic = G__35549__delegate;
return G__35549;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
