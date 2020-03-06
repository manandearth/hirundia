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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__52625){
var vec__52626 = p__52625;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52626,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52626,(1),null);
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
var vec__52629 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52629,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52629,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52629,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__52633 = arguments.length;
switch (G__52633) {
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

var G__52635_52659 = clojure.data.equality_partition;
var G__52636_52660 = "null";
var G__52637_52661 = ((function (G__52635_52659,G__52636_52660){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52635_52659,G__52636_52660))
;
goog.object.set(G__52635_52659,G__52636_52660,G__52637_52661);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__52638_52662 = clojure.data.equality_partition;
var G__52639_52663 = "string";
var G__52640_52664 = ((function (G__52638_52662,G__52639_52663){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52638_52662,G__52639_52663))
;
goog.object.set(G__52638_52662,G__52639_52663,G__52640_52664);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__52641_52665 = clojure.data.equality_partition;
var G__52642_52666 = "number";
var G__52643_52667 = ((function (G__52641_52665,G__52642_52666){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52641_52665,G__52642_52666))
;
goog.object.set(G__52641_52665,G__52642_52666,G__52643_52667);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__52644_52668 = clojure.data.equality_partition;
var G__52645_52669 = "array";
var G__52646_52670 = ((function (G__52644_52668,G__52645_52669){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__52644_52668,G__52645_52669))
;
goog.object.set(G__52644_52668,G__52645_52669,G__52646_52670);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__52647_52671 = clojure.data.equality_partition;
var G__52648_52672 = "function";
var G__52649_52673 = ((function (G__52647_52671,G__52648_52672){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52647_52671,G__52648_52672))
;
goog.object.set(G__52647_52671,G__52648_52672,G__52649_52673);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__52650_52674 = clojure.data.equality_partition;
var G__52651_52675 = "boolean";
var G__52652_52676 = ((function (G__52650_52674,G__52651_52675){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__52650_52674,G__52651_52675))
;
goog.object.set(G__52650_52674,G__52651_52675,G__52652_52676);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__52653_52677 = clojure.data.equality_partition;
var G__52654_52678 = "_";
var G__52655_52679 = ((function (G__52653_52677,G__52654_52678){
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
});})(G__52653_52677,G__52654_52678))
;
goog.object.set(G__52653_52677,G__52654_52678,G__52655_52679);
goog.object.set(clojure.data.Diff,"null",true);

var G__52680_52704 = clojure.data.diff_similar;
var G__52681_52705 = "null";
var G__52682_52706 = ((function (G__52680_52704,G__52681_52705){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52680_52704,G__52681_52705))
;
goog.object.set(G__52680_52704,G__52681_52705,G__52682_52706);

goog.object.set(clojure.data.Diff,"string",true);

var G__52683_52707 = clojure.data.diff_similar;
var G__52684_52708 = "string";
var G__52685_52709 = ((function (G__52683_52707,G__52684_52708){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52683_52707,G__52684_52708))
;
goog.object.set(G__52683_52707,G__52684_52708,G__52685_52709);

goog.object.set(clojure.data.Diff,"number",true);

var G__52686_52710 = clojure.data.diff_similar;
var G__52687_52711 = "number";
var G__52688_52712 = ((function (G__52686_52710,G__52687_52711){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52686_52710,G__52687_52711))
;
goog.object.set(G__52686_52710,G__52687_52711,G__52688_52712);

goog.object.set(clojure.data.Diff,"array",true);

var G__52689_52713 = clojure.data.diff_similar;
var G__52690_52714 = "array";
var G__52691_52715 = ((function (G__52689_52713,G__52690_52714){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__52689_52713,G__52690_52714))
;
goog.object.set(G__52689_52713,G__52690_52714,G__52691_52715);

goog.object.set(clojure.data.Diff,"function",true);

var G__52692_52716 = clojure.data.diff_similar;
var G__52693_52717 = "function";
var G__52694_52718 = ((function (G__52692_52716,G__52693_52717){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52692_52716,G__52693_52717))
;
goog.object.set(G__52692_52716,G__52693_52717,G__52694_52718);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__52695_52719 = clojure.data.diff_similar;
var G__52696_52720 = "boolean";
var G__52697_52721 = ((function (G__52695_52719,G__52696_52720){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__52695_52719,G__52696_52720))
;
goog.object.set(G__52695_52719,G__52696_52720,G__52697_52721);

goog.object.set(clojure.data.Diff,"_",true);

var G__52698_52722 = clojure.data.diff_similar;
var G__52699_52723 = "_";
var G__52700_52724 = ((function (G__52698_52722,G__52699_52723){
return (function (a,b){
var fexpr__52702 = (function (){var G__52703 = clojure.data.equality_partition(a);
var G__52703__$1 = (((G__52703 instanceof cljs.core.Keyword))?G__52703.fqn:null);
switch (G__52703__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52703__$1)].join('')));

}
})();
return (fexpr__52702.cljs$core$IFn$_invoke$arity$2 ? fexpr__52702.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__52702.call(null,a,b));
});})(G__52698_52722,G__52699_52723))
;
goog.object.set(G__52698_52722,G__52699_52723,G__52700_52724);
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
