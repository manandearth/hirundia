// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.sente.packers.transit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('cognitect.transit');
goog.require('taoensso.sente.interfaces');
/**
 * Returns thread-safe (fn [x-to-write])
 */
taoensso.sente.packers.transit.get_transit_writer_fn = taoensso.encore.memoize_((function (fmt,opts){
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(fmt,opts);
return ((function (writer){
return (function (x){
return cognitect.transit.write(writer,x);
});
;})(writer))
}));
/**
 * Returns thread-safe (fn [str-to-read])
 */
taoensso.sente.packers.transit.get_transit_reader_fn = taoensso.encore.memoize_((function (fmt,opts){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(fmt,opts);
return ((function (reader){
return (function (s){
return cognitect.transit.read(reader,s);
});
;})(reader))
}));

/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.packers.transit.TransitPacker = (function (transit_fmt,writer_opts,reader_opts){
this.transit_fmt = transit_fmt;
this.writer_opts = writer_opts;
this.reader_opts = reader_opts;
});
taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var fexpr__49274 = (taoensso.sente.packers.transit.get_transit_writer_fn.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.packers.transit.get_transit_writer_fn.cljs$core$IFn$_invoke$arity$2(self__.transit_fmt,self__.writer_opts) : taoensso.sente.packers.transit.get_transit_writer_fn.call(null,self__.transit_fmt,self__.writer_opts));
return (fexpr__49274.cljs$core$IFn$_invoke$arity$1 ? fexpr__49274.cljs$core$IFn$_invoke$arity$1(x) : fexpr__49274.call(null,x));
});

taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var fexpr__49275 = (taoensso.sente.packers.transit.get_transit_reader_fn.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.packers.transit.get_transit_reader_fn.cljs$core$IFn$_invoke$arity$2(self__.transit_fmt,self__.reader_opts) : taoensso.sente.packers.transit.get_transit_reader_fn.call(null,self__.transit_fmt,self__.reader_opts));
return (fexpr__49275.cljs$core$IFn$_invoke$arity$1 ? fexpr__49275.cljs$core$IFn$_invoke$arity$1(s) : fexpr__49275.call(null,s));
});

taoensso.sente.packers.transit.TransitPacker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$transit_DASH_fmt,cljs.core.cst$sym$writer_DASH_opts,cljs.core.cst$sym$reader_DASH_opts], null);
});

taoensso.sente.packers.transit.TransitPacker.cljs$lang$type = true;

taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorStr = "taoensso.sente.packers.transit/TransitPacker";

taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.sente.packers.transit/TransitPacker");
});

/**
 * Positional factory function for taoensso.sente.packers.transit/TransitPacker.
 */
taoensso.sente.packers.transit.__GT_TransitPacker = (function taoensso$sente$packers$transit$__GT_TransitPacker(transit_fmt,writer_opts,reader_opts){
return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
});

/**
 * Returns a new TransitPacker
 */
taoensso.sente.packers.transit.get_transit_packer = (function taoensso$sente$packers$transit$get_transit_packer(var_args){
var G__49277 = arguments.length;
switch (G__49277) {
case 0:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$json,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1 = (function (transit_fmt){
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(transit_fmt,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3 = (function (transit_fmt,writer_opts,reader_opts){
var e_49285 = (function (){try{if((function (){var fexpr__49280 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__49281 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$json,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__49281) : taoensso.truss.impl.set_STAR_.call(null,G__49281));
})(),x);
});
return fexpr__49280(transit_fmt);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49278){if((e49278 instanceof Error)){
var e = e49278;
return e;
} else {
throw e49278;

}
}})();
if((e_49285 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente.packers.transit",102,"([:el #{:json}] transit-fmt)",transit_fmt,e_49285,null);
}

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(cljs.core.map_QMARK_(writer_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49282){if((e49282 instanceof Error)){
var e = e49282;
return e;
} else {
throw e49282;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente.packers.transit",103,"(map? writer-opts)",writer_opts,e,null);
}
})(),(function (){var e = (function (){try{if(cljs.core.map_QMARK_(reader_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49283){if((e49283 instanceof Error)){
var e = e49283;
return e;
} else {
throw e49283;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente.packers.transit",103,"(map? reader-opts)",reader_opts,e,null);
}
})()], null);

return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
});

taoensso.sente.packers.transit.get_transit_packer.cljs$lang$maxFixedArity = 3;

