// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('promesa.protocols');
goog.require('promesa.impl');
goog.require('promesa.impl.scheduler');
/**
 * Sets the default promise type that should be used for creating
 *   all promise instances.
 */
promesa.core.set_default_promise_BANG_ = (function promesa$core$set_default_promise_BANG_(promise){
return promesa.impl._STAR_default_promise_STAR_ = promise;
});
/**
 * A helper function that attaches the internal protocols implementation
 *   to a specified type. Usefull if you want to use different promise
 *   implementations with promesa functions.
 */
promesa.core.extend_promise_BANG_ = (function promesa$core$extend_promise_BANG_(promise){
return promesa.impl.extend_promise_BANG_(promise);
});
/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.core.schedule = (function promesa$core$schedule(ms,func){
return promesa.impl.scheduler.schedule(ms,func);
});
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.resolved(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.rejected(v);
});
/**
 * The promise constructor.
 */
promesa.core.promise = (function promesa$core$promise(var_args){
var G__37456 = arguments.length;
switch (G__37456) {
case 0:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.promise.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.impl.empty_promise();
});

promesa.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (v){
return promesa.protocols._promise(v);
});

promesa.core.promise.cljs$lang$maxFixedArity = 1;

/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
return (v instanceof promesa.impl._STAR_default_promise_STAR_);
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_(p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_(p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.protocols._pending_QMARK_(p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(p){
return promesa.protocols._extract(p);
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = cljs.core.complement(promesa.core.pending_QMARK_);
/**
 * Apply a function to the promise value and
 *   return a new promise with the result.
 */
promesa.core.map = (function promesa$core$map(f,p){
return promesa.protocols._map(p,f);
});
/**
 * Same as `map` but removes one level of
 *   promise neesting. Useful when the map function
 *   returns a promise instead of value.
 * 
 *   In JS environment this function is analogous
 *   to `map` because the promise abstraction overloads
 *   the `map` operator.
 */
promesa.core.mapcat = (function promesa$core$mapcat(f,p){
return promesa.protocols._bind(p,f);
});
/**
 * A chain helper for promises.
 */
promesa.core.bind = (function promesa$core$bind(p,f){
return promesa.protocols._bind(p,f);
});
/**
 * Similar to `map` but with parameters inverted
 *   for convenience and for familiarity with
 *   javascript's promises `.then` operator.
 * 
 *   Unlike Clojure's `map`, will resolve any promises
 *   returned  by `f`.
 */
promesa.core.then = (function promesa$core$then(p,f){
return promesa.protocols._map(p,f);
});
/**
 * Like then but accepts multiple parameters.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37462 = arguments.length;
var i__4731__auto___37463 = (0);
while(true){
if((i__4731__auto___37463 < len__4730__auto___37462)){
args__4736__auto__.push((arguments[i__4731__auto___37463]));

var G__37464 = (i__4731__auto___37463 + (1));
i__4731__auto___37463 = G__37464;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37458_SHARP_,p2__37459_SHARP_){
return promesa.core.then(p1__37458_SHARP_,p2__37459_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
promesa.core.chain.cljs$lang$applyTo = (function (seq37460){
var G__37461 = cljs.core.first(seq37460);
var seq37460__$1 = cljs.core.next(seq37460);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37461,seq37460__$1);
});

promesa.core.branch = (function promesa$core$branch(p,success,failure){
return promesa.protocols._catch(promesa.protocols._map(p,success),failure);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__37467 = arguments.length;
switch (G__37467) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._catch(p,f);
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__37465_SHARP_){
return (p1__37465_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._catch(p,((function (accept_QMARK_){
return (function (e){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : accept_QMARK_.call(null,e)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
return promesa.impl.rejected(e);
}
});})(accept_QMARK_))
);
});

promesa.core.catch$.cljs$lang$maxFixedArity = 3;

/**
 * Same as `catch` but with parameters inverted.
 */
promesa.core.error = (function promesa$core$error(var_args){
var G__37470 = arguments.length;
switch (G__37470) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(p,f);
});

promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3(p,type,f);
});

promesa.core.error.cljs$lang$maxFixedArity = 3;

/**
 * A short alias for `error` function.
 */
promesa.core.err = promesa.core.error;
/**
 * Attach handler to promise that will be
 *   executed independently if promise is
 *   resolved or rejected.
 */
promesa.core.finally$ = (function promesa$core$finally(p,callback){
return p.lastly(callback);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 * 
 *   Example:
 * 
 *   (-> (all [(promise :first-promise)
 *          (promise :second-promise)]
 *    (then (fn [[first-result second-result]]))
 *     (println (str first-result ", " second-result)
 * 
 *   Will print out
 *   :first-promise, :second-promise.
 * 
 *   If at least one of the promises is rejected, the resulting promise will be
 *   rejected.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.core.then(promesa.impl._STAR_default_promise_STAR_.all(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(promises)),cljs.core.vec);
});
promesa.core.race = (function promesa$core$race(promises){
var resolved = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(((function (resolved){
return (function (resolve,reject){
var seq__37472 = cljs.core.seq(promises);
var chunk__37473 = null;
var count__37474 = (0);
var i__37475 = (0);
while(true){
if((i__37475 < count__37474)){
var p = chunk__37473.cljs$core$IIndexed$_nth$arity$2(null,i__37475);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__37472,chunk__37473,count__37474,i__37475,p,resolved){
return (function (v){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
} else {
return null;
}
});})(seq__37472,chunk__37473,count__37474,i__37475,p,resolved))
),((function (seq__37472,chunk__37473,count__37474,i__37475,p,resolved){
return (function (e){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
return null;
}
});})(seq__37472,chunk__37473,count__37474,i__37475,p,resolved))
);


var G__37476 = seq__37472;
var G__37477 = chunk__37473;
var G__37478 = count__37474;
var G__37479 = (i__37475 + (1));
seq__37472 = G__37476;
chunk__37473 = G__37477;
count__37474 = G__37478;
i__37475 = G__37479;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37472);
if(temp__5720__auto__){
var seq__37472__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37472__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37472__$1);
var G__37480 = cljs.core.chunk_rest(seq__37472__$1);
var G__37481 = c__4550__auto__;
var G__37482 = cljs.core.count(c__4550__auto__);
var G__37483 = (0);
seq__37472 = G__37480;
chunk__37473 = G__37481;
count__37474 = G__37482;
i__37475 = G__37483;
continue;
} else {
var p = cljs.core.first(seq__37472__$1);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__37472,chunk__37473,count__37474,i__37475,p,seq__37472__$1,temp__5720__auto__,resolved){
return (function (v){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
} else {
return null;
}
});})(seq__37472,chunk__37473,count__37474,i__37475,p,seq__37472__$1,temp__5720__auto__,resolved))
),((function (seq__37472,chunk__37473,count__37474,i__37475,p,seq__37472__$1,temp__5720__auto__,resolved){
return (function (e){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
return null;
}
});})(seq__37472,chunk__37473,count__37474,i__37475,p,seq__37472__$1,temp__5720__auto__,resolved))
);


var G__37484 = cljs.core.next(seq__37472__$1);
var G__37485 = null;
var G__37486 = (0);
var G__37487 = (0);
seq__37472 = G__37484;
chunk__37473 = G__37485;
count__37474 = G__37486;
i__37475 = G__37487;
continue;
}
} else {
return null;
}
}
break;
}
});})(resolved))
);
});
/**
 * Given an array of promises, return a promise that is fulfilled when
 *   first one item in the array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(var_args){
var G__37489 = arguments.length;
switch (G__37489) {
case 1:
return promesa.core.any.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.any.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.any.cljs$core$IFn$_invoke$arity$1 = (function (promises){
return promesa.core.any.cljs$core$IFn$_invoke$arity$2(promises,cljs.core.cst$kw$promesa$core_SLASH_default);
});

promesa.core.any.cljs$core$IFn$_invoke$arity$2 = (function (promises,default$){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$resolved,false,cljs.core.cst$kw$counter,cljs.core.count(promises),cljs.core.cst$kw$rejections,cljs.core.PersistentVector.EMPTY], null));
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(((function (state){
return (function (resolve,reject){
var seq__37490 = cljs.core.seq(promises);
var chunk__37491 = null;
var count__37492 = (0);
var i__37493 = (0);
while(true){
if((i__37493 < count__37492)){
var p = chunk__37491.cljs$core$IIndexed$_nth$arity$2(null,i__37493);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__37490,chunk__37491,count__37492,i__37493,p,state){
return (function (v){
if(cljs.core.truth_(cljs.core.cst$kw$resolved.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__37490,chunk__37491,count__37492,i__37493,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$resolved,true),cljs.core.cst$kw$counter,cljs.core.dec);
});})(seq__37490,chunk__37491,count__37492,i__37493,p,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__37490,chunk__37491,count__37492,i__37493,p,state))
),((function (seq__37490,chunk__37491,count__37492,i__37493,p,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__37490,chunk__37491,count__37492,i__37493,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$counter,cljs.core.dec),cljs.core.cst$kw$rejections,cljs.core.conj,e);
});})(seq__37490,chunk__37491,count__37492,i__37493,p,state))
);

var map__37500 = cljs.core.deref(state);
var map__37500__$1 = (((((!((map__37500 == null))))?(((((map__37500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37500):map__37500);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,cljs.core.cst$kw$resolved);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,cljs.core.cst$kw$counter);
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,cljs.core.cst$kw$rejections);
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,cljs.core.cst$kw$promesa$core_SLASH_default)){
var G__37502 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rejections,rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__37502) : reject.call(null,G__37502));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__37490,chunk__37491,count__37492,i__37493,p,state))
);


var G__37507 = seq__37490;
var G__37508 = chunk__37491;
var G__37509 = count__37492;
var G__37510 = (i__37493 + (1));
seq__37490 = G__37507;
chunk__37491 = G__37508;
count__37492 = G__37509;
i__37493 = G__37510;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37490);
if(temp__5720__auto__){
var seq__37490__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37490__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37490__$1);
var G__37511 = cljs.core.chunk_rest(seq__37490__$1);
var G__37512 = c__4550__auto__;
var G__37513 = cljs.core.count(c__4550__auto__);
var G__37514 = (0);
seq__37490 = G__37511;
chunk__37491 = G__37512;
count__37492 = G__37513;
i__37493 = G__37514;
continue;
} else {
var p = cljs.core.first(seq__37490__$1);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state){
return (function (v){
if(cljs.core.truth_(cljs.core.cst$kw$resolved.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$resolved,true),cljs.core.cst$kw$counter,cljs.core.dec);
});})(seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state))
),((function (seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$counter,cljs.core.dec),cljs.core.cst$kw$rejections,cljs.core.conj,e);
});})(seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state))
);

var map__37503 = cljs.core.deref(state);
var map__37503__$1 = (((((!((map__37503 == null))))?(((((map__37503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37503):map__37503);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,cljs.core.cst$kw$resolved);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,cljs.core.cst$kw$counter);
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,cljs.core.cst$kw$rejections);
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,cljs.core.cst$kw$promesa$core_SLASH_default)){
var G__37505 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rejections,rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__37505) : reject.call(null,G__37505));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__37490,chunk__37491,count__37492,i__37493,p,seq__37490__$1,temp__5720__auto__,state))
);


var G__37515 = cljs.core.next(seq__37490__$1);
var G__37516 = null;
var G__37517 = (0);
var G__37518 = (0);
seq__37490 = G__37515;
chunk__37491 = G__37516;
count__37492 = G__37517;
i__37493 = G__37518;
continue;
}
} else {
return null;
}
}
break;
}
});})(state))
);
});

promesa.core.any.cljs$lang$maxFixedArity = 2;

/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.protocols._cancel(p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_(v);
});
/**
 * Resolve a completable promise with a value.
 */
promesa.core.resolve_BANG_ = (function promesa$core$resolve_BANG_(var_args){
var G__37520 = arguments.length;
switch (G__37520) {
case 1:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(o,null);
});

promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,v){
return promesa.protocols._resolve(o,v);
});

promesa.core.resolve_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Reject a completable promise with an error.
 */
promesa.core.reject_BANG_ = (function promesa$core$reject_BANG_(p,e){
return promesa.protocols._reject(p,e);
});
/**
 * Given a function that accepts a callback as the last argument return other
 *   function that returns a promise. Callback is expected to take single
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__37523__delegate = function (args){
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var args__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(args),resolve);
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callable,args__$1);
}catch (e37522){if((e37522 instanceof Error)){
var e = e37522;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
throw e37522;

}
}}));
};
var G__37523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37524__i = 0, G__37524__a = new Array(arguments.length -  0);
while (G__37524__i < G__37524__a.length) {G__37524__a[G__37524__i] = arguments[G__37524__i + 0]; ++G__37524__i;}
  args = new cljs.core.IndexedSeq(G__37524__a,0,null);
} 
return G__37523__delegate.call(this,args);};
G__37523.cljs$lang$maxFixedArity = 0;
G__37523.cljs$lang$applyTo = (function (arglist__37525){
var args = cljs.core.seq(arglist__37525);
return G__37523__delegate(args);
});
G__37523.cljs$core$IFn$_invoke$arity$variadic = G__37523__delegate;
return G__37523;
})()
;
});
/**
 * @constructor
 */
promesa.core.TimeoutException = (function promesa$core$TimeoutException(message){
var it = this;
Error.call(it,message,cljs.core.PersistentArrayMap.EMPTY,null);

return it;
});
goog.inherits(promesa.core.TimeoutException,Error);
/**
 * Returns a cancellable promise that will be fulfilled with this
 *   promise's fulfillment value or rejection reason.  However, if this
 *   promise is not fulfilled or rejected within `ms` milliseconds, the
 *   returned promise is cancelled with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__37527 = arguments.length;
switch (G__37527) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3(p,t,cljs.core.cst$kw$promesa$core_SLASH_default);
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
var tp = promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return promesa.impl.scheduler.schedule(t,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$promesa$core_SLASH_default)){
var G__37528 = (new promesa.core.TimeoutException("Operation timed out."));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__37528) : reject.call(null,G__37528));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
}));
}));
return promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,tp], null));
});

promesa.core.timeout.cljs$lang$maxFixedArity = 3;

/**
 * Given a timeout in miliseconds and optional
 *   value, returns a promise that will fulfilled
 *   with provided value (or nil) after the
 *   time is reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__37531 = arguments.length;
switch (G__37531) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2(t,null);
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return promesa.core.schedule(t,(function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}));
}));
});

promesa.core.delay.cljs$lang$maxFixedArity = 2;

/**
 * A helper for start promise chain without worry about
 *   synchronous or asynchronous exceptions. Returns a promise
 *   resolved with the return value of the callback.
 */
promesa.core.attempt = (function promesa$core$attempt(callback){
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (resolve){
var G__37533 = (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__37533) : resolve.call(null,G__37533));
}));
});
promesa.core.await$ = (function promesa$core$await(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37535 = arguments.length;
var i__4731__auto___37536 = (0);
while(true){
if((i__4731__auto___37536 < len__4730__auto___37535)){
args__4736__auto__.push((arguments[i__4731__auto___37536]));

var G__37537 = (i__4731__auto___37536 + (1));
i__4731__auto___37536 = G__37537;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return promesa.core.await$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

promesa.core.await$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Should be only used in alet macro.",cljs.core.PersistentArrayMap.EMPTY);
});

promesa.core.await$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
promesa.core.await$.cljs$lang$applyTo = (function (seq37534){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37534));
});

