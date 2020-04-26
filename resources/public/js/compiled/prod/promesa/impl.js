// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('promesa.protocols');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL;

t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__37425_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__37425_SHARP_) : cb.call(null,p1__37425_SHARP_));
});})(it__$1))
);
});

t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__37426_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__37426_SHARP_) : cb.call(null,p1__37426_SHARP_));
});})(it__$1))
);
});

return t.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__37427_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__37427_SHARP_) : cb.call(null,p1__37427_SHARP_));
});})(it__$1))
);
});
});
promesa.impl.extend_promise_BANG_(Promise);
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
goog.object.set(promesa.protocols.IPromiseFactory,"function",true);

var G__37430_37436 = promesa.protocols._promise;
var G__37431_37437 = "function";
var G__37432_37438 = ((function (G__37430_37436,G__37431_37437){
return (function (func){
return (new promesa.impl._STAR_default_promise_STAR_(func));
});})(G__37430_37436,G__37431_37437))
;
goog.object.set(G__37430_37436,G__37431_37437,G__37432_37438);

Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
});

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

var G__37433_37439 = promesa.protocols._promise;
var G__37434_37440 = "_";
var G__37435_37441 = ((function (G__37433_37439,G__37434_37440){
return (function (v){
return promesa.impl.resolved(v);
});})(G__37433_37439,G__37434_37440))
;
goog.object.set(G__37433_37439,G__37434_37440,G__37435_37441);
promesa.impl.empty_promise = (function promesa$impl$empty_promise(){
var state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var obj = (new promesa.impl._STAR_default_promise_STAR_(((function (state){
return (function (resolve,reject){
return cljs.core.vreset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$resolve,resolve,cljs.core.cst$kw$reject,reject], null));
});})(state))
));
var x37442 = obj;
x37442.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL;

x37442.promesa$protocols$ICompletable$_resolve$arity$2 = ((function (x37442,state,obj){
return (function (_,v){
var ___$1 = this;
var fexpr__37443 = cljs.core.cst$kw$resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__37443.cljs$core$IFn$_invoke$arity$1 ? fexpr__37443.cljs$core$IFn$_invoke$arity$1(v) : fexpr__37443.call(null,v));
});})(x37442,state,obj))
;

x37442.promesa$protocols$ICompletable$_reject$arity$2 = ((function (x37442,state,obj){
return (function (_,v){
var ___$1 = this;
var fexpr__37444 = cljs.core.cst$kw$reject.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__37444.cljs$core$IFn$_invoke$arity$1 ? fexpr__37444.cljs$core$IFn$_invoke$arity$1(v) : fexpr__37444.call(null,v));
});})(x37442,state,obj))
;

return x37442;
});
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
});
