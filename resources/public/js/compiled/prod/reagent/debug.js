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
var G__35514__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35515__i = 0, G__35515__a = new Array(arguments.length -  0);
while (G__35515__i < G__35515__a.length) {G__35515__a[G__35515__i] = arguments[G__35515__i + 0]; ++G__35515__i;}
  args = new cljs.core.IndexedSeq(G__35515__a,0,null);
} 
return G__35514__delegate.call(this,args);};
G__35514.cljs$lang$maxFixedArity = 0;
G__35514.cljs$lang$applyTo = (function (arglist__35516){
var args = cljs.core.seq(arglist__35516);
return G__35514__delegate(args);
});
G__35514.cljs$core$IFn$_invoke$arity$variadic = G__35514__delegate;
return G__35514;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35517__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35518__i = 0, G__35518__a = new Array(arguments.length -  0);
while (G__35518__i < G__35518__a.length) {G__35518__a[G__35518__i] = arguments[G__35518__i + 0]; ++G__35518__i;}
  args = new cljs.core.IndexedSeq(G__35518__a,0,null);
} 
return G__35517__delegate.call(this,args);};
G__35517.cljs$lang$maxFixedArity = 0;
G__35517.cljs$lang$applyTo = (function (arglist__35519){
var args = cljs.core.seq(arglist__35519);
return G__35517__delegate(args);
});
G__35517.cljs$core$IFn$_invoke$arity$variadic = G__35517__delegate;
return G__35517;
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
