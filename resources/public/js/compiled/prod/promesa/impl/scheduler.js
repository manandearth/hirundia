// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('promesa.protocols');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_(false);
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler39083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {promesa.protocols.ICancellable}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler39083 = (function (cur,done_QMARK_,cancelled,meta39084){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta39084 = meta39084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler39083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_39085,meta39084__$1){
var self__ = this;
var _39085__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler39083(self__.cur,self__.done_QMARK_,self__.cancelled,meta39084__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_39085){
var self__ = this;
var _39085__$1 = this;
return self__.meta39084;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.prototype.promesa$protocols$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_(self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cur,cljs.core.cst$sym$done_QMARK_,cljs.core.cst$sym$cancelled,cljs.core.cst$sym$meta39084], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler39083.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler39083";

promesa.impl.scheduler.t_promesa$impl$scheduler39083.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler39083");
});})(cancelled))
;

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler39083.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler39083 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler39083(cur__$1,done_QMARK___$1,cancelled__$1,meta39084){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler39083(cur__$1,done_QMARK___$1,cancelled__$1,meta39084));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler39083(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler39086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler39086 = (function (meta39087){
this.meta39087 = meta39087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler39086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39088,meta39087__$1){
var self__ = this;
var _39088__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler39086(meta39087__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler39086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39088){
var self__ = this;
var _39088__$1 = this;
return self__.meta39087;
});

promesa.impl.scheduler.t_promesa$impl$scheduler39086.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler39086.prototype.promesa$protocols$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_(false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {cljs.core.vreset_BANG_(done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task(cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler39086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta39087], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler39086.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler39086.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler39086";

promesa.impl.scheduler.t_promesa$impl$scheduler39086.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler39086");
});

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler39086.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler39086 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler39086(meta39087){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler39086(meta39087));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler39086(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._STAR_scheduler_STAR_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler();
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.protocols._schedule(cljs.core.deref(promesa.impl.scheduler._STAR_scheduler_STAR_),ms,func);
});
