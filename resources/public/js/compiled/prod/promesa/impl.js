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
return (function (p1__39053_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__39053_SHARP_) : cb.call(null,p1__39053_SHARP_));
});})(it__$1))
);
});

t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__39054_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__39054_SHARP_) : cb.call(null,p1__39054_SHARP_));
});})(it__$1))
);
});

return t.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__39055_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__39055_SHARP_) : cb.call(null,p1__39055_SHARP_));
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

var G__39058_39064 = promesa.protocols._promise;
var G__39059_39065 = "function";
var G__39060_39066 = ((function (G__39058_39064,G__39059_39065){
return (function (func){
return (new promesa.impl._STAR_default_promise_STAR_(func));
});})(G__39058_39064,G__39059_39065))
;
goog.object.set(G__39058_39064,G__39059_39065,G__39060_39066);

Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
});

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

var G__39061_39067 = promesa.protocols._promise;
var G__39062_39068 = "_";
var G__39063_39069 = ((function (G__39061_39067,G__39062_39068){
return (function (v){
return promesa.impl.resolved(v);
});})(G__39061_39067,G__39062_39068))
;
goog.object.set(G__39061_39067,G__39062_39068,G__39063_39069);
promesa.impl.empty_promise = (function promesa$impl$empty_promise(){
var state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var obj = (new promesa.impl._STAR_default_promise_STAR_(((function (state){
return (function (resolve,reject){
return cljs.core.vreset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$resolve,resolve,cljs.core.cst$kw$reject,reject], null));
});})(state))
));
var x39070 = obj;
x39070.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL;

x39070.promesa$protocols$ICompletable$_resolve$arity$2 = ((function (x39070,state,obj){
return (function (_,v){
var ___$1 = this;
var fexpr__39071 = cljs.core.cst$kw$resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__39071.cljs$core$IFn$_invoke$arity$1 ? fexpr__39071.cljs$core$IFn$_invoke$arity$1(v) : fexpr__39071.call(null,v));
});})(x39070,state,obj))
;

x39070.promesa$protocols$ICompletable$_reject$arity$2 = ((function (x39070,state,obj){
return (function (_,v){
var ___$1 = this;
var fexpr__39072 = cljs.core.cst$kw$reject.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__39072.cljs$core$IFn$_invoke$arity$1 ? fexpr__39072.cljs$core$IFn$_invoke$arity$1(v) : fexpr__39072.call(null,v));
});})(x39070,state,obj))
;

return x39070;
});
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
});
