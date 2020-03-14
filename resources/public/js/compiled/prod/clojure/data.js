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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__52817){
var vec__52818 = p__52817;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52818,(1),null);
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
var vec__52821 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52821,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52821,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52821,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__52825 = arguments.length;
switch (G__52825) {
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

var G__52827_52851 = clojure.data.equality_partition;
var G__52828_52852 = "null";
var G__52829_52853 = ((function (G__52827_52851,G__52828_52852){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52827_52851,G__52828_52852))
;
goog.object.set(G__52827_52851,G__52828_52852,G__52829_52853);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__52830_52854 = clojure.data.equality_partition;
var G__52831_52855 = "string";
var G__52832_52856 = ((function (G__52830_52854,G__52831_52855){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52830_52854,G__52831_52855))
;
goog.object.set(G__52830_52854,G__52831_52855,G__52832_52856);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__52833_52857 = clojure.data.equality_partition;
var G__52834_52858 = "number";
var G__52835_52859 = ((function (G__52833_52857,G__52834_52858){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52833_52857,G__52834_52858))
;
goog.object.set(G__52833_52857,G__52834_52858,G__52835_52859);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__52836_52860 = clojure.data.equality_partition;
var G__52837_52861 = "array";
var G__52838_52862 = ((function (G__52836_52860,G__52837_52861){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__52836_52860,G__52837_52861))
;
goog.object.set(G__52836_52860,G__52837_52861,G__52838_52862);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__52839_52863 = clojure.data.equality_partition;
var G__52840_52864 = "function";
var G__52841_52865 = ((function (G__52839_52863,G__52840_52864){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52839_52863,G__52840_52864))
;
goog.object.set(G__52839_52863,G__52840_52864,G__52841_52865);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__52842_52866 = clojure.data.equality_partition;
var G__52843_52867 = "boolean";
var G__52844_52868 = ((function (G__52842_52866,G__52843_52867){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52842_52866,G__52843_52867))
;
goog.object.set(G__52842_52866,G__52843_52867,G__52844_52868);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__52845_52869 = clojure.data.equality_partition;
var G__52846_52870 = "_";
var G__52847_52871 = ((function (G__52845_52869,G__52846_52870){
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
});})(G__52845_52869,G__52846_52870))
;
goog.object.set(G__52845_52869,G__52846_52870,G__52847_52871);
goog.object.set(clojure.data.Diff,"null",true);

var G__52872_52896 = clojure.data.diff_similar;
var G__52873_52897 = "null";
var G__52874_52898 = ((function (G__52872_52896,G__52873_52897){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52872_52896,G__52873_52897))
;
goog.object.set(G__52872_52896,G__52873_52897,G__52874_52898);

goog.object.set(clojure.data.Diff,"string",true);

var G__52875_52899 = clojure.data.diff_similar;
var G__52876_52900 = "string";
var G__52877_52901 = ((function (G__52875_52899,G__52876_52900){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52875_52899,G__52876_52900))
;
goog.object.set(G__52875_52899,G__52876_52900,G__52877_52901);

goog.object.set(clojure.data.Diff,"number",true);

var G__52878_52902 = clojure.data.diff_similar;
var G__52879_52903 = "number";
var G__52880_52904 = ((function (G__52878_52902,G__52879_52903){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52878_52902,G__52879_52903))
;
goog.object.set(G__52878_52902,G__52879_52903,G__52880_52904);

goog.object.set(clojure.data.Diff,"array",true);

var G__52881_52905 = clojure.data.diff_similar;
var G__52882_52906 = "array";
var G__52883_52907 = ((function (G__52881_52905,G__52882_52906){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__52881_52905,G__52882_52906))
;
goog.object.set(G__52881_52905,G__52882_52906,G__52883_52907);

goog.object.set(clojure.data.Diff,"function",true);

var G__52884_52908 = clojure.data.diff_similar;
var G__52885_52909 = "function";
var G__52886_52910 = ((function (G__52884_52908,G__52885_52909){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52884_52908,G__52885_52909))
;
goog.object.set(G__52884_52908,G__52885_52909,G__52886_52910);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__52887_52911 = clojure.data.diff_similar;
var G__52888_52912 = "boolean";
var G__52889_52913 = ((function (G__52887_52911,G__52888_52912){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52887_52911,G__52888_52912))
;
goog.object.set(G__52887_52911,G__52888_52912,G__52889_52913);

goog.object.set(clojure.data.Diff,"_",true);

var G__52890_52914 = clojure.data.diff_similar;
var G__52891_52915 = "_";
var G__52892_52916 = ((function (G__52890_52914,G__52891_52915){
return (function (a,b){
var fexpr__52894 = (function (){var G__52895 = clojure.data.equality_partition(a);
var G__52895__$1 = (((G__52895 instanceof cljs.core.Keyword))?G__52895.fqn:null);
switch (G__52895__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52895__$1)].join('')));

}
})();
return (fexpr__52894.cljs$core$IFn$_invoke$arity$2 ? fexpr__52894.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__52894.call(null,a,b));
});})(G__52890_52914,G__52891_52915))
;
goog.object.set(G__52890_52914,G__52891_52915,G__52892_52916);
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
