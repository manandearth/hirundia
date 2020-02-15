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
var G__35605__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35606__i = 0, G__35606__a = new Array(arguments.length -  0);
while (G__35606__i < G__35606__a.length) {G__35606__a[G__35606__i] = arguments[G__35606__i + 0]; ++G__35606__i;}
  args = new cljs.core.IndexedSeq(G__35606__a,0,null);
} 
return G__35605__delegate.call(this,args);};
G__35605.cljs$lang$maxFixedArity = 0;
G__35605.cljs$lang$applyTo = (function (arglist__35607){
var args = cljs.core.seq(arglist__35607);
return G__35605__delegate(args);
});
G__35605.cljs$core$IFn$_invoke$arity$variadic = G__35605__delegate;
return G__35605;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35608__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35609__i = 0, G__35609__a = new Array(arguments.length -  0);
while (G__35609__i < G__35609__a.length) {G__35609__a[G__35609__i] = arguments[G__35609__i + 0]; ++G__35609__i;}
  args = new cljs.core.IndexedSeq(G__35609__a,0,null);
} 
return G__35608__delegate.call(this,args);};
G__35608.cljs$lang$maxFixedArity = 0;
G__35608.cljs$lang$applyTo = (function (arglist__35610){
var args = cljs.core.seq(arglist__35610);
return G__35608__delegate(args);
});
G__35608.cljs$core$IFn$_invoke$arity$variadic = G__35608__delegate;
return G__35608;
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
