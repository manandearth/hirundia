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
return (function (p1__39112_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__39112_SHARP_) : cb.call(null,p1__39112_SHARP_));
});})(it__$1))
);
});

t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__39113_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__39113_SHARP_) : cb.call(null,p1__39113_SHARP_));
});})(it__$1))
);
});

return t.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__39114_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__39114_SHARP_) : cb.call(null,p1__39114_SHARP_));
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

var G__39117_39123 = promesa.protocols._promise;
var G__39118_39124 = "function";
var G__39119_39125 = ((function (G__39117_39123,G__39118_39124){
return (function (func){
return (new promesa.impl._STAR_default_promise_STAR_(func));
});})(G__39117_39123,G__39118_39124))
;
goog.object.set(G__39117_39123,G__39118_39124,G__39119_39125);

Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
});

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

var G__39120_39126 = promesa.protocols._promise;
var G__39121_39127 = "_";
var G__39122_39128 = ((function (G__39120_39126,G__39121_39127){
return (function (v){
return promesa.impl.resolved(v);
});})(G__39120_39126,G__39121_39127))
;
goog.object.set(G__39120_39126,G__39121_39127,G__39122_39128);
promesa.impl.empty_promise = (function promesa$impl$empty_promise(){
var state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var obj = (new promesa.impl._STAR_default_promise_STAR_(((function (state){
return (function (resolve,reject){
return cljs.core.vreset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$resolve,resolve,cljs.core.cst$kw$reject,reject], null));
});})(state))
));
var x39129 = obj;
x39129.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL;

x39129.promesa$protocols$ICompletable$_resolve$arity$2 = ((function (x39129,state,obj){
return (function (_,v){
var ___$1 = this;
var fexpr__39130 = cljs.core.cst$kw$resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__39130.cljs$core$IFn$_invoke$arity$1 ? fexpr__39130.cljs$core$IFn$_invoke$arity$1(v) : fexpr__39130.call(null,v));
});})(x39129,state,obj))
;

x39129.promesa$protocols$ICompletable$_reject$arity$2 = ((function (x39129,state,obj){
return (function (_,v){
var ___$1 = this;
var fexpr__39131 = cljs.core.cst$kw$reject.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (fexpr__39131.cljs$core$IFn$_invoke$arity$1 ? fexpr__39131.cljs$core$IFn$_invoke$arity$1(v) : fexpr__39131.call(null,v));
});})(x39129,state,obj))
;

return x39129;
});
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
});
