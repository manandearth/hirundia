// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__45283){
var vec__45284 = p__45283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45284,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__45287 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__45291 = arguments.length;
switch (G__45291) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__45293_45317 = clojure.data.equality_partition;
var G__45294_45318 = "null";
var G__45295_45319 = ((function (G__45293_45317,G__45294_45318){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__45293_45317,G__45294_45318))
;
goog.object.set(G__45293_45317,G__45294_45318,G__45295_45319);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__45296_45320 = clojure.data.equality_partition;
var G__45297_45321 = "string";
var G__45298_45322 = ((function (G__45296_45320,G__45297_45321){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__45296_45320,G__45297_45321))
;
goog.object.set(G__45296_45320,G__45297_45321,G__45298_45322);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__45299_45323 = clojure.data.equality_partition;
var G__45300_45324 = "number";
var G__45301_45325 = ((function (G__45299_45323,G__45300_45324){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__45299_45323,G__45300_45324))
;
goog.object.set(G__45299_45323,G__45300_45324,G__45301_45325);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__45302_45326 = clojure.data.equality_partition;
var G__45303_45327 = "array";
var G__45304_45328 = ((function (G__45302_45326,G__45303_45327){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__45302_45326,G__45303_45327))
;
goog.object.set(G__45302_45326,G__45303_45327,G__45304_45328);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__45305_45329 = clojure.data.equality_partition;
var G__45306_45330 = "function";
var G__45307_45331 = ((function (G__45305_45329,G__45306_45330){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__45305_45329,G__45306_45330))
;
goog.object.set(G__45305_45329,G__45306_45330,G__45307_45331);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__45308_45332 = clojure.data.equality_partition;
var G__45309_45333 = "boolean";
var G__45310_45334 = ((function (G__45308_45332,G__45309_45333){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__45308_45332,G__45309_45333))
;
goog.object.set(G__45308_45332,G__45309_45333,G__45310_45334);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__45311_45335 = clojure.data.equality_partition;
var G__45312_45336 = "_";
var G__45313_45337 = ((function (G__45311_45335,G__45312_45336){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__45311_45335,G__45312_45336))
;
goog.object.set(G__45311_45335,G__45312_45336,G__45313_45337);
goog.object.set(clojure.data.Diff,"null",true);

var G__45338_45362 = clojure.data.diff_similar;
var G__45339_45363 = "null";
var G__45340_45364 = ((function (G__45338_45362,G__45339_45363){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__45338_45362,G__45339_45363))
;
goog.object.set(G__45338_45362,G__45339_45363,G__45340_45364);

goog.object.set(clojure.data.Diff,"string",true);

var G__45341_45365 = clojure.data.diff_similar;
var G__45342_45366 = "string";
var G__45343_45367 = ((function (G__45341_45365,G__45342_45366){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__45341_45365,G__45342_45366))
;
goog.object.set(G__45341_45365,G__45342_45366,G__45343_45367);

goog.object.set(clojure.data.Diff,"number",true);

var G__45344_45368 = clojure.data.diff_similar;
var G__45345_45369 = "number";
var G__45346_45370 = ((function (G__45344_45368,G__45345_45369){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__45344_45368,G__45345_45369))
;
goog.object.set(G__45344_45368,G__45345_45369,G__45346_45370);

goog.object.set(clojure.data.Diff,"array",true);

var G__45347_45371 = clojure.data.diff_similar;
var G__45348_45372 = "array";
var G__45349_45373 = ((function (G__45347_45371,G__45348_45372){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__45347_45371,G__45348_45372))
;
goog.object.set(G__45347_45371,G__45348_45372,G__45349_45373);

goog.object.set(clojure.data.Diff,"function",true);

var G__45350_45374 = clojure.data.diff_similar;
var G__45351_45375 = "function";
var G__45352_45376 = ((function (G__45350_45374,G__45351_45375){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__45350_45374,G__45351_45375))
;
goog.object.set(G__45350_45374,G__45351_45375,G__45352_45376);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__45353_45377 = clojure.data.diff_similar;
var G__45354_45378 = "boolean";
var G__45355_45379 = ((function (G__45353_45377,G__45354_45378){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__45353_45377,G__45354_45378))
;
goog.object.set(G__45353_45377,G__45354_45378,G__45355_45379);

goog.object.set(clojure.data.Diff,"_",true);

var G__45356_45380 = clojure.data.diff_similar;
var G__45357_45381 = "_";
var G__45358_45382 = ((function (G__45356_45380,G__45357_45381){
return (function (a,b){
var fexpr__45360 = (function (){var G__45361 = clojure.data.equality_partition(a);
var G__45361__$1 = (((G__45361 instanceof cljs.core.Keyword))?G__45361.fqn:null);
switch (G__45361__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45361__$1)].join('')));

}
})();
return (fexpr__45360.cljs$core$IFn$_invoke$arity$2 ? fexpr__45360.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__45360.call(null,a,b));
});})(G__45356_45380,G__45357_45381))
;
goog.object.set(G__45356_45380,G__45357_45381,G__45358_45382);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
