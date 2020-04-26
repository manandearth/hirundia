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
var G__39369 = arguments.length;
switch (G__39369) {
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
var len__4730__auto___39375 = arguments.length;
var i__4731__auto___39376 = (0);
while(true){
if((i__4731__auto___39376 < len__4730__auto___39375)){
args__4736__auto__.push((arguments[i__4731__auto___39376]));

var G__39377 = (i__4731__auto___39376 + (1));
i__4731__auto___39376 = G__39377;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39371_SHARP_,p2__39372_SHARP_){
return promesa.core.then(p1__39371_SHARP_,p2__39372_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
promesa.core.chain.cljs$lang$applyTo = (function (seq39373){
var G__39374 = cljs.core.first(seq39373);
var seq39373__$1 = cljs.core.next(seq39373);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39374,seq39373__$1);
});

promesa.core.branch = (function promesa$core$branch(p,success,failure){
return promesa.protocols._catch(promesa.protocols._map(p,success),failure);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__39380 = arguments.length;
switch (G__39380) {
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
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__39378_SHARP_){
return (p1__39378_SHARP_ instanceof pred_or_type);
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
var G__39383 = arguments.length;
switch (G__39383) {
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
var seq__39385 = cljs.core.seq(promises);
var chunk__39386 = null;
var count__39387 = (0);
var i__39388 = (0);
while(true){
if((i__39388 < count__39387)){
var p = chunk__39386.cljs$core$IIndexed$_nth$arity$2(null,i__39388);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__39385,chunk__39386,count__39387,i__39388,p,resolved){
return (function (v){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
} else {
return null;
}
});})(seq__39385,chunk__39386,count__39387,i__39388,p,resolved))
),((function (seq__39385,chunk__39386,count__39387,i__39388,p,resolved){
return (function (e){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
return null;
}
});})(seq__39385,chunk__39386,count__39387,i__39388,p,resolved))
);


var G__39389 = seq__39385;
var G__39390 = chunk__39386;
var G__39391 = count__39387;
var G__39392 = (i__39388 + (1));
seq__39385 = G__39389;
chunk__39386 = G__39390;
count__39387 = G__39391;
i__39388 = G__39392;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39385);
if(temp__5720__auto__){
var seq__39385__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39385__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39385__$1);
var G__39393 = cljs.core.chunk_rest(seq__39385__$1);
var G__39394 = c__4550__auto__;
var G__39395 = cljs.core.count(c__4550__auto__);
var G__39396 = (0);
seq__39385 = G__39393;
chunk__39386 = G__39394;
count__39387 = G__39395;
i__39388 = G__39396;
continue;
} else {
var p = cljs.core.first(seq__39385__$1);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__39385,chunk__39386,count__39387,i__39388,p,seq__39385__$1,temp__5720__auto__,resolved){
return (function (v){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
} else {
return null;
}
});})(seq__39385,chunk__39386,count__39387,i__39388,p,seq__39385__$1,temp__5720__auto__,resolved))
),((function (seq__39385,chunk__39386,count__39387,i__39388,p,seq__39385__$1,temp__5720__auto__,resolved){
return (function (e){
if(cljs.core.compare_and_set_BANG_(resolved,false,true)){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
return null;
}
});})(seq__39385,chunk__39386,count__39387,i__39388,p,seq__39385__$1,temp__5720__auto__,resolved))
);


var G__39397 = cljs.core.next(seq__39385__$1);
var G__39398 = null;
var G__39399 = (0);
var G__39400 = (0);
seq__39385 = G__39397;
chunk__39386 = G__39398;
count__39387 = G__39399;
i__39388 = G__39400;
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
var G__39402 = arguments.length;
switch (G__39402) {
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
var seq__39403 = cljs.core.seq(promises);
var chunk__39404 = null;
var count__39405 = (0);
var i__39406 = (0);
while(true){
if((i__39406 < count__39405)){
var p = chunk__39404.cljs$core$IIndexed$_nth$arity$2(null,i__39406);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__39403,chunk__39404,count__39405,i__39406,p,state){
return (function (v){
if(cljs.core.truth_(cljs.core.cst$kw$resolved.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__39403,chunk__39404,count__39405,i__39406,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$resolved,true),cljs.core.cst$kw$counter,cljs.core.dec);
});})(seq__39403,chunk__39404,count__39405,i__39406,p,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__39403,chunk__39404,count__39405,i__39406,p,state))
),((function (seq__39403,chunk__39404,count__39405,i__39406,p,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__39403,chunk__39404,count__39405,i__39406,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$counter,cljs.core.dec),cljs.core.cst$kw$rejections,cljs.core.conj,e);
});})(seq__39403,chunk__39404,count__39405,i__39406,p,state))
);

var map__39413 = cljs.core.deref(state);
var map__39413__$1 = (((((!((map__39413 == null))))?(((((map__39413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39413):map__39413);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39413__$1,cljs.core.cst$kw$resolved);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39413__$1,cljs.core.cst$kw$counter);
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39413__$1,cljs.core.cst$kw$rejections);
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,cljs.core.cst$kw$promesa$core_SLASH_default)){
var G__39415 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rejections,rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__39415) : reject.call(null,G__39415));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__39403,chunk__39404,count__39405,i__39406,p,state))
);


var G__39420 = seq__39403;
var G__39421 = chunk__39404;
var G__39422 = count__39405;
var G__39423 = (i__39406 + (1));
seq__39403 = G__39420;
chunk__39404 = G__39421;
count__39405 = G__39422;
i__39406 = G__39423;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39403);
if(temp__5720__auto__){
var seq__39403__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39403__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39403__$1);
var G__39424 = cljs.core.chunk_rest(seq__39403__$1);
var G__39425 = c__4550__auto__;
var G__39426 = cljs.core.count(c__4550__auto__);
var G__39427 = (0);
seq__39403 = G__39424;
chunk__39404 = G__39425;
count__39405 = G__39426;
i__39406 = G__39427;
continue;
} else {
var p = cljs.core.first(seq__39403__$1);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state){
return (function (v){
if(cljs.core.truth_(cljs.core.cst$kw$resolved.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$resolved,true),cljs.core.cst$kw$counter,cljs.core.dec);
});})(seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state))
),((function (seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$counter,cljs.core.dec),cljs.core.cst$kw$rejections,cljs.core.conj,e);
});})(seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state))
);

var map__39416 = cljs.core.deref(state);
var map__39416__$1 = (((((!((map__39416 == null))))?(((((map__39416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39416):map__39416);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39416__$1,cljs.core.cst$kw$resolved);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39416__$1,cljs.core.cst$kw$counter);
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39416__$1,cljs.core.cst$kw$rejections);
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,cljs.core.cst$kw$promesa$core_SLASH_default)){
var G__39418 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rejections,rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__39418) : reject.call(null,G__39418));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__39403,chunk__39404,count__39405,i__39406,p,seq__39403__$1,temp__5720__auto__,state))
);


var G__39428 = cljs.core.next(seq__39403__$1);
var G__39429 = null;
var G__39430 = (0);
var G__39431 = (0);
seq__39403 = G__39428;
chunk__39404 = G__39429;
count__39405 = G__39430;
i__39406 = G__39431;
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
var G__39433 = arguments.length;
switch (G__39433) {
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
var G__39436__delegate = function (args){
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var args__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(args),resolve);
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callable,args__$1);
}catch (e39435){if((e39435 instanceof Error)){
var e = e39435;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
throw e39435;

}
}}));
};
var G__39436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39437__i = 0, G__39437__a = new Array(arguments.length -  0);
while (G__39437__i < G__39437__a.length) {G__39437__a[G__39437__i] = arguments[G__39437__i + 0]; ++G__39437__i;}
  args = new cljs.core.IndexedSeq(G__39437__a,0,null);
} 
return G__39436__delegate.call(this,args);};
G__39436.cljs$lang$maxFixedArity = 0;
G__39436.cljs$lang$applyTo = (function (arglist__39438){
var args = cljs.core.seq(arglist__39438);
return G__39436__delegate(args);
});
G__39436.cljs$core$IFn$_invoke$arity$variadic = G__39436__delegate;
return G__39436;
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
var G__39440 = arguments.length;
switch (G__39440) {
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
var G__39441 = (new promesa.core.TimeoutException("Operation timed out."));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__39441) : reject.call(null,G__39441));
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
var G__39444 = arguments.length;
switch (G__39444) {
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
var G__39446 = (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__39446) : resolve.call(null,G__39446));
}));
});
promesa.core.await$ = (function promesa$core$await(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39448 = arguments.length;
var i__4731__auto___39449 = (0);
while(true){
if((i__4731__auto___39449 < len__4730__auto___39448)){
args__4736__auto__.push((arguments[i__4731__auto___39449]));

var G__39450 = (i__4731__auto___39449 + (1));
i__4731__auto___39449 = G__39450;
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
promesa.core.await$.cljs$lang$applyTo = (function (seq39447){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39447));
});

