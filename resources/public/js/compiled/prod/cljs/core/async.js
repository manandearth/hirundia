// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38578 = arguments.length;
switch (G__38578) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38579 = (function (f,blockable,meta38580){
this.f = f;
this.blockable = blockable;
this.meta38580 = meta38580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38581,meta38580__$1){
var self__ = this;
var _38581__$1 = this;
return (new cljs.core.async.t_cljs$core$async38579(self__.f,self__.blockable,meta38580__$1));
});

cljs.core.async.t_cljs$core$async38579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38581){
var self__ = this;
var _38581__$1 = this;
return self__.meta38580;
});

cljs.core.async.t_cljs$core$async38579.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta38580], null);
});

cljs.core.async.t_cljs$core$async38579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38579";

cljs.core.async.t_cljs$core$async38579.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38579");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38579.
 */
cljs.core.async.__GT_t_cljs$core$async38579 = (function cljs$core$async$__GT_t_cljs$core$async38579(f__$1,blockable__$1,meta38580){
return (new cljs.core.async.t_cljs$core$async38579(f__$1,blockable__$1,meta38580));
});

}

return (new cljs.core.async.t_cljs$core$async38579(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38585 = arguments.length;
switch (G__38585) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38588 = arguments.length;
switch (G__38588) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38591 = arguments.length;
switch (G__38591) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38593 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38593) : fn1.call(null,val_38593));
} else {
cljs.core.async.impl.dispatch.run(((function (val_38593,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38593) : fn1.call(null,val_38593));
});})(val_38593,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38595 = arguments.length;
switch (G__38595) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___38597 = n;
var x_38598 = (0);
while(true){
if((x_38598 < n__4607__auto___38597)){
(a[x_38598] = (0));

var G__38599 = (x_38598 + (1));
x_38598 = G__38599;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__38600 = (i + (1));
i = G__38600;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38601 = (function (flag,meta38602){
this.flag = flag;
this.meta38602 = meta38602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38603,meta38602__$1){
var self__ = this;
var _38603__$1 = this;
return (new cljs.core.async.t_cljs$core$async38601(self__.flag,meta38602__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38603){
var self__ = this;
var _38603__$1 = this;
return self__.meta38602;
});})(flag))
;

cljs.core.async.t_cljs$core$async38601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38601.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta38602], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38601";

cljs.core.async.t_cljs$core$async38601.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38601");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38601.
 */
cljs.core.async.__GT_t_cljs$core$async38601 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38601(flag__$1,meta38602){
return (new cljs.core.async.t_cljs$core$async38601(flag__$1,meta38602));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38601(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38604 = (function (flag,cb,meta38605){
this.flag = flag;
this.cb = cb;
this.meta38605 = meta38605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38606,meta38605__$1){
var self__ = this;
var _38606__$1 = this;
return (new cljs.core.async.t_cljs$core$async38604(self__.flag,self__.cb,meta38605__$1));
});

cljs.core.async.t_cljs$core$async38604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38606){
var self__ = this;
var _38606__$1 = this;
return self__.meta38605;
});

cljs.core.async.t_cljs$core$async38604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async38604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta38605], null);
});

cljs.core.async.t_cljs$core$async38604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38604";

cljs.core.async.t_cljs$core$async38604.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38604");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38604.
 */
cljs.core.async.__GT_t_cljs$core$async38604 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38604(flag__$1,cb__$1,meta38605){
return (new cljs.core.async.t_cljs$core$async38604(flag__$1,cb__$1,meta38605));
});

}

return (new cljs.core.async.t_cljs$core$async38604(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38607_SHARP_){
var G__38609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38607_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38609) : fret.call(null,G__38609));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38608_SHARP_){
var G__38610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38608_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38610) : fret.call(null,G__38610));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38611 = (i + (1));
i = G__38611;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38617 = arguments.length;
var i__4731__auto___38618 = (0);
while(true){
if((i__4731__auto___38618 < len__4730__auto___38617)){
args__4736__auto__.push((arguments[i__4731__auto___38618]));

var G__38619 = (i__4731__auto___38618 + (1));
i__4731__auto___38618 = G__38619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38614){
var map__38615 = p__38614;
var map__38615__$1 = (((((!((map__38615 == null))))?(((((map__38615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38615):map__38615);
var opts = map__38615__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38612){
var G__38613 = cljs.core.first(seq38612);
var seq38612__$1 = cljs.core.next(seq38612);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38613,seq38612__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38621 = arguments.length;
switch (G__38621) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38518__auto___38667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___38667){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___38667){
return (function (state_38645){
var state_val_38646 = (state_38645[(1)]);
if((state_val_38646 === (7))){
var inst_38641 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
var statearr_38647_38668 = state_38645__$1;
(statearr_38647_38668[(2)] = inst_38641);

(statearr_38647_38668[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (1))){
var state_38645__$1 = state_38645;
var statearr_38648_38669 = state_38645__$1;
(statearr_38648_38669[(2)] = null);

(statearr_38648_38669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (4))){
var inst_38624 = (state_38645[(7)]);
var inst_38624__$1 = (state_38645[(2)]);
var inst_38625 = (inst_38624__$1 == null);
var state_38645__$1 = (function (){var statearr_38649 = state_38645;
(statearr_38649[(7)] = inst_38624__$1);

return statearr_38649;
})();
if(cljs.core.truth_(inst_38625)){
var statearr_38650_38670 = state_38645__$1;
(statearr_38650_38670[(1)] = (5));

} else {
var statearr_38651_38671 = state_38645__$1;
(statearr_38651_38671[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (13))){
var state_38645__$1 = state_38645;
var statearr_38652_38672 = state_38645__$1;
(statearr_38652_38672[(2)] = null);

(statearr_38652_38672[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (6))){
var inst_38624 = (state_38645[(7)]);
var state_38645__$1 = state_38645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38645__$1,(11),to,inst_38624);
} else {
if((state_val_38646 === (3))){
var inst_38643 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38645__$1,inst_38643);
} else {
if((state_val_38646 === (12))){
var state_38645__$1 = state_38645;
var statearr_38653_38673 = state_38645__$1;
(statearr_38653_38673[(2)] = null);

(statearr_38653_38673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (2))){
var state_38645__$1 = state_38645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38645__$1,(4),from);
} else {
if((state_val_38646 === (11))){
var inst_38634 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
if(cljs.core.truth_(inst_38634)){
var statearr_38654_38674 = state_38645__$1;
(statearr_38654_38674[(1)] = (12));

} else {
var statearr_38655_38675 = state_38645__$1;
(statearr_38655_38675[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (9))){
var state_38645__$1 = state_38645;
var statearr_38656_38676 = state_38645__$1;
(statearr_38656_38676[(2)] = null);

(statearr_38656_38676[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (5))){
var state_38645__$1 = state_38645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38657_38677 = state_38645__$1;
(statearr_38657_38677[(1)] = (8));

} else {
var statearr_38658_38678 = state_38645__$1;
(statearr_38658_38678[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (14))){
var inst_38639 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
var statearr_38659_38679 = state_38645__$1;
(statearr_38659_38679[(2)] = inst_38639);

(statearr_38659_38679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (10))){
var inst_38631 = (state_38645[(2)]);
var state_38645__$1 = state_38645;
var statearr_38660_38680 = state_38645__$1;
(statearr_38660_38680[(2)] = inst_38631);

(statearr_38660_38680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38646 === (8))){
var inst_38628 = cljs.core.async.close_BANG_(to);
var state_38645__$1 = state_38645;
var statearr_38661_38681 = state_38645__$1;
(statearr_38661_38681[(2)] = inst_38628);

(statearr_38661_38681[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___38667))
;
return ((function (switch__38411__auto__,c__38518__auto___38667){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_38662 = [null,null,null,null,null,null,null,null];
(statearr_38662[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_38662[(1)] = (1));

return statearr_38662;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_38645){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_38645);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e38663){if((e38663 instanceof Object)){
var ex__38415__auto__ = e38663;
var statearr_38664_38682 = state_38645;
(statearr_38664_38682[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38645);

return cljs.core.cst$kw$recur;
} else {
throw e38663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__38683 = state_38645;
state_38645 = G__38683;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_38645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_38645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___38667))
})();
var state__38520__auto__ = (function (){var statearr_38665 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_38665[(6)] = c__38518__auto___38667);

return statearr_38665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___38667))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__38684){
var vec__38685 = p__38684;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38685,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38685,(1),null);
var job = vec__38685;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38518__auto___38856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___38856,res,vec__38685,v,p,job,jobs,results){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___38856,res,vec__38685,v,p,job,jobs,results){
return (function (state_38692){
var state_val_38693 = (state_38692[(1)]);
if((state_val_38693 === (1))){
var state_38692__$1 = state_38692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38692__$1,(2),res,v);
} else {
if((state_val_38693 === (2))){
var inst_38689 = (state_38692[(2)]);
var inst_38690 = cljs.core.async.close_BANG_(res);
var state_38692__$1 = (function (){var statearr_38694 = state_38692;
(statearr_38694[(7)] = inst_38689);

return statearr_38694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38692__$1,inst_38690);
} else {
return null;
}
}
});})(c__38518__auto___38856,res,vec__38685,v,p,job,jobs,results))
;
return ((function (switch__38411__auto__,c__38518__auto___38856,res,vec__38685,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0 = (function (){
var statearr_38695 = [null,null,null,null,null,null,null,null];
(statearr_38695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__);

(statearr_38695[(1)] = (1));

return statearr_38695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1 = (function (state_38692){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_38692);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e38696){if((e38696 instanceof Object)){
var ex__38415__auto__ = e38696;
var statearr_38697_38857 = state_38692;
(statearr_38697_38857[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38692);

return cljs.core.cst$kw$recur;
} else {
throw e38696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__38858 = state_38692;
state_38692 = G__38858;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = function(state_38692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1.call(this,state_38692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___38856,res,vec__38685,v,p,job,jobs,results))
})();
var state__38520__auto__ = (function (){var statearr_38698 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_38698[(6)] = c__38518__auto___38856);

return statearr_38698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___38856,res,vec__38685,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38699){
var vec__38700 = p__38699;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(1),null);
var job = vec__38700;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___38859 = n;
var __38860 = (0);
while(true){
if((__38860 < n__4607__auto___38859)){
var G__38703_38861 = type;
var G__38703_38862__$1 = (((G__38703_38861 instanceof cljs.core.Keyword))?G__38703_38861.fqn:null);
switch (G__38703_38862__$1) {
case "compute":
var c__38518__auto___38864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38860,c__38518__auto___38864,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (__38860,c__38518__auto___38864,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async){
return (function (state_38716){
var state_val_38717 = (state_38716[(1)]);
if((state_val_38717 === (1))){
var state_38716__$1 = state_38716;
var statearr_38718_38865 = state_38716__$1;
(statearr_38718_38865[(2)] = null);

(statearr_38718_38865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38717 === (2))){
var state_38716__$1 = state_38716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38716__$1,(4),jobs);
} else {
if((state_val_38717 === (3))){
var inst_38714 = (state_38716[(2)]);
var state_38716__$1 = state_38716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38716__$1,inst_38714);
} else {
if((state_val_38717 === (4))){
var inst_38706 = (state_38716[(2)]);
var inst_38707 = process(inst_38706);
var state_38716__$1 = state_38716;
if(cljs.core.truth_(inst_38707)){
var statearr_38719_38866 = state_38716__$1;
(statearr_38719_38866[(1)] = (5));

} else {
var statearr_38720_38867 = state_38716__$1;
(statearr_38720_38867[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38717 === (5))){
var state_38716__$1 = state_38716;
var statearr_38721_38868 = state_38716__$1;
(statearr_38721_38868[(2)] = null);

(statearr_38721_38868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38717 === (6))){
var state_38716__$1 = state_38716;
var statearr_38722_38869 = state_38716__$1;
(statearr_38722_38869[(2)] = null);

(statearr_38722_38869[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38717 === (7))){
var inst_38712 = (state_38716[(2)]);
var state_38716__$1 = state_38716;
var statearr_38723_38870 = state_38716__$1;
(statearr_38723_38870[(2)] = inst_38712);

(statearr_38723_38870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__38860,c__38518__auto___38864,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async))
;
return ((function (__38860,switch__38411__auto__,c__38518__auto___38864,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0 = (function (){
var statearr_38724 = [null,null,null,null,null,null,null];
(statearr_38724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__);

(statearr_38724[(1)] = (1));

return statearr_38724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1 = (function (state_38716){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_38716);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e38725){if((e38725 instanceof Object)){
var ex__38415__auto__ = e38725;
var statearr_38726_38871 = state_38716;
(statearr_38726_38871[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38716);

return cljs.core.cst$kw$recur;
} else {
throw e38725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__38872 = state_38716;
state_38716 = G__38872;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = function(state_38716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1.call(this,state_38716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__;
})()
;})(__38860,switch__38411__auto__,c__38518__auto___38864,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async))
})();
var state__38520__auto__ = (function (){var statearr_38727 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_38727[(6)] = c__38518__auto___38864);

return statearr_38727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(__38860,c__38518__auto___38864,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async))
);


break;
case "async":
var c__38518__auto___38873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38860,c__38518__auto___38873,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (__38860,c__38518__auto___38873,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async){
return (function (state_38740){
var state_val_38741 = (state_38740[(1)]);
if((state_val_38741 === (1))){
var state_38740__$1 = state_38740;
var statearr_38742_38874 = state_38740__$1;
(statearr_38742_38874[(2)] = null);

(statearr_38742_38874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38741 === (2))){
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38740__$1,(4),jobs);
} else {
if((state_val_38741 === (3))){
var inst_38738 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38740__$1,inst_38738);
} else {
if((state_val_38741 === (4))){
var inst_38730 = (state_38740[(2)]);
var inst_38731 = async(inst_38730);
var state_38740__$1 = state_38740;
if(cljs.core.truth_(inst_38731)){
var statearr_38743_38875 = state_38740__$1;
(statearr_38743_38875[(1)] = (5));

} else {
var statearr_38744_38876 = state_38740__$1;
(statearr_38744_38876[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38741 === (5))){
var state_38740__$1 = state_38740;
var statearr_38745_38877 = state_38740__$1;
(statearr_38745_38877[(2)] = null);

(statearr_38745_38877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38741 === (6))){
var state_38740__$1 = state_38740;
var statearr_38746_38878 = state_38740__$1;
(statearr_38746_38878[(2)] = null);

(statearr_38746_38878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38741 === (7))){
var inst_38736 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
var statearr_38747_38879 = state_38740__$1;
(statearr_38747_38879[(2)] = inst_38736);

(statearr_38747_38879[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__38860,c__38518__auto___38873,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async))
;
return ((function (__38860,switch__38411__auto__,c__38518__auto___38873,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0 = (function (){
var statearr_38748 = [null,null,null,null,null,null,null];
(statearr_38748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__);

(statearr_38748[(1)] = (1));

return statearr_38748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1 = (function (state_38740){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_38740);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e38749){if((e38749 instanceof Object)){
var ex__38415__auto__ = e38749;
var statearr_38750_38880 = state_38740;
(statearr_38750_38880[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38740);

return cljs.core.cst$kw$recur;
} else {
throw e38749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__38881 = state_38740;
state_38740 = G__38881;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = function(state_38740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1.call(this,state_38740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__;
})()
;})(__38860,switch__38411__auto__,c__38518__auto___38873,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async))
})();
var state__38520__auto__ = (function (){var statearr_38751 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_38751[(6)] = c__38518__auto___38873);

return statearr_38751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(__38860,c__38518__auto___38873,G__38703_38861,G__38703_38862__$1,n__4607__auto___38859,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38703_38862__$1)].join('')));

}

var G__38882 = (__38860 + (1));
__38860 = G__38882;
continue;
} else {
}
break;
}

var c__38518__auto___38883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___38883,jobs,results,process,async){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___38883,jobs,results,process,async){
return (function (state_38773){
var state_val_38774 = (state_38773[(1)]);
if((state_val_38774 === (7))){
var inst_38769 = (state_38773[(2)]);
var state_38773__$1 = state_38773;
var statearr_38775_38884 = state_38773__$1;
(statearr_38775_38884[(2)] = inst_38769);

(statearr_38775_38884[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38774 === (1))){
var state_38773__$1 = state_38773;
var statearr_38776_38885 = state_38773__$1;
(statearr_38776_38885[(2)] = null);

(statearr_38776_38885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38774 === (4))){
var inst_38754 = (state_38773[(7)]);
var inst_38754__$1 = (state_38773[(2)]);
var inst_38755 = (inst_38754__$1 == null);
var state_38773__$1 = (function (){var statearr_38777 = state_38773;
(statearr_38777[(7)] = inst_38754__$1);

return statearr_38777;
})();
if(cljs.core.truth_(inst_38755)){
var statearr_38778_38886 = state_38773__$1;
(statearr_38778_38886[(1)] = (5));

} else {
var statearr_38779_38887 = state_38773__$1;
(statearr_38779_38887[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38774 === (6))){
var inst_38759 = (state_38773[(8)]);
var inst_38754 = (state_38773[(7)]);
var inst_38759__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38760 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38761 = [inst_38754,inst_38759__$1];
var inst_38762 = (new cljs.core.PersistentVector(null,2,(5),inst_38760,inst_38761,null));
var state_38773__$1 = (function (){var statearr_38780 = state_38773;
(statearr_38780[(8)] = inst_38759__$1);

return statearr_38780;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38773__$1,(8),jobs,inst_38762);
} else {
if((state_val_38774 === (3))){
var inst_38771 = (state_38773[(2)]);
var state_38773__$1 = state_38773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38773__$1,inst_38771);
} else {
if((state_val_38774 === (2))){
var state_38773__$1 = state_38773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38773__$1,(4),from);
} else {
if((state_val_38774 === (9))){
var inst_38766 = (state_38773[(2)]);
var state_38773__$1 = (function (){var statearr_38781 = state_38773;
(statearr_38781[(9)] = inst_38766);

return statearr_38781;
})();
var statearr_38782_38888 = state_38773__$1;
(statearr_38782_38888[(2)] = null);

(statearr_38782_38888[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38774 === (5))){
var inst_38757 = cljs.core.async.close_BANG_(jobs);
var state_38773__$1 = state_38773;
var statearr_38783_38889 = state_38773__$1;
(statearr_38783_38889[(2)] = inst_38757);

(statearr_38783_38889[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38774 === (8))){
var inst_38759 = (state_38773[(8)]);
var inst_38764 = (state_38773[(2)]);
var state_38773__$1 = (function (){var statearr_38784 = state_38773;
(statearr_38784[(10)] = inst_38764);

return statearr_38784;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38773__$1,(9),results,inst_38759);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___38883,jobs,results,process,async))
;
return ((function (switch__38411__auto__,c__38518__auto___38883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0 = (function (){
var statearr_38785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__);

(statearr_38785[(1)] = (1));

return statearr_38785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1 = (function (state_38773){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_38773);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e38786){if((e38786 instanceof Object)){
var ex__38415__auto__ = e38786;
var statearr_38787_38890 = state_38773;
(statearr_38787_38890[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38773);

return cljs.core.cst$kw$recur;
} else {
throw e38786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__38891 = state_38773;
state_38773 = G__38891;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = function(state_38773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1.call(this,state_38773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___38883,jobs,results,process,async))
})();
var state__38520__auto__ = (function (){var statearr_38788 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_38788[(6)] = c__38518__auto___38883);

return statearr_38788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___38883,jobs,results,process,async))
);


var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__,jobs,results,process,async){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__,jobs,results,process,async){
return (function (state_38826){
var state_val_38827 = (state_38826[(1)]);
if((state_val_38827 === (7))){
var inst_38822 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
var statearr_38828_38892 = state_38826__$1;
(statearr_38828_38892[(2)] = inst_38822);

(statearr_38828_38892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (20))){
var state_38826__$1 = state_38826;
var statearr_38829_38893 = state_38826__$1;
(statearr_38829_38893[(2)] = null);

(statearr_38829_38893[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (1))){
var state_38826__$1 = state_38826;
var statearr_38830_38894 = state_38826__$1;
(statearr_38830_38894[(2)] = null);

(statearr_38830_38894[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (4))){
var inst_38791 = (state_38826[(7)]);
var inst_38791__$1 = (state_38826[(2)]);
var inst_38792 = (inst_38791__$1 == null);
var state_38826__$1 = (function (){var statearr_38831 = state_38826;
(statearr_38831[(7)] = inst_38791__$1);

return statearr_38831;
})();
if(cljs.core.truth_(inst_38792)){
var statearr_38832_38895 = state_38826__$1;
(statearr_38832_38895[(1)] = (5));

} else {
var statearr_38833_38896 = state_38826__$1;
(statearr_38833_38896[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (15))){
var inst_38804 = (state_38826[(8)]);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38826__$1,(18),to,inst_38804);
} else {
if((state_val_38827 === (21))){
var inst_38817 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
var statearr_38834_38897 = state_38826__$1;
(statearr_38834_38897[(2)] = inst_38817);

(statearr_38834_38897[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (13))){
var inst_38819 = (state_38826[(2)]);
var state_38826__$1 = (function (){var statearr_38835 = state_38826;
(statearr_38835[(9)] = inst_38819);

return statearr_38835;
})();
var statearr_38836_38898 = state_38826__$1;
(statearr_38836_38898[(2)] = null);

(statearr_38836_38898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (6))){
var inst_38791 = (state_38826[(7)]);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38826__$1,(11),inst_38791);
} else {
if((state_val_38827 === (17))){
var inst_38812 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
if(cljs.core.truth_(inst_38812)){
var statearr_38837_38899 = state_38826__$1;
(statearr_38837_38899[(1)] = (19));

} else {
var statearr_38838_38900 = state_38826__$1;
(statearr_38838_38900[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (3))){
var inst_38824 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38826__$1,inst_38824);
} else {
if((state_val_38827 === (12))){
var inst_38801 = (state_38826[(10)]);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38826__$1,(14),inst_38801);
} else {
if((state_val_38827 === (2))){
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38826__$1,(4),results);
} else {
if((state_val_38827 === (19))){
var state_38826__$1 = state_38826;
var statearr_38839_38901 = state_38826__$1;
(statearr_38839_38901[(2)] = null);

(statearr_38839_38901[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (11))){
var inst_38801 = (state_38826[(2)]);
var state_38826__$1 = (function (){var statearr_38840 = state_38826;
(statearr_38840[(10)] = inst_38801);

return statearr_38840;
})();
var statearr_38841_38902 = state_38826__$1;
(statearr_38841_38902[(2)] = null);

(statearr_38841_38902[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (9))){
var state_38826__$1 = state_38826;
var statearr_38842_38903 = state_38826__$1;
(statearr_38842_38903[(2)] = null);

(statearr_38842_38903[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (5))){
var state_38826__$1 = state_38826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38843_38904 = state_38826__$1;
(statearr_38843_38904[(1)] = (8));

} else {
var statearr_38844_38905 = state_38826__$1;
(statearr_38844_38905[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (14))){
var inst_38804 = (state_38826[(8)]);
var inst_38806 = (state_38826[(11)]);
var inst_38804__$1 = (state_38826[(2)]);
var inst_38805 = (inst_38804__$1 == null);
var inst_38806__$1 = cljs.core.not(inst_38805);
var state_38826__$1 = (function (){var statearr_38845 = state_38826;
(statearr_38845[(8)] = inst_38804__$1);

(statearr_38845[(11)] = inst_38806__$1);

return statearr_38845;
})();
if(inst_38806__$1){
var statearr_38846_38906 = state_38826__$1;
(statearr_38846_38906[(1)] = (15));

} else {
var statearr_38847_38907 = state_38826__$1;
(statearr_38847_38907[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (16))){
var inst_38806 = (state_38826[(11)]);
var state_38826__$1 = state_38826;
var statearr_38848_38908 = state_38826__$1;
(statearr_38848_38908[(2)] = inst_38806);

(statearr_38848_38908[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (10))){
var inst_38798 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
var statearr_38849_38909 = state_38826__$1;
(statearr_38849_38909[(2)] = inst_38798);

(statearr_38849_38909[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (18))){
var inst_38809 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
var statearr_38850_38910 = state_38826__$1;
(statearr_38850_38910[(2)] = inst_38809);

(statearr_38850_38910[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38827 === (8))){
var inst_38795 = cljs.core.async.close_BANG_(to);
var state_38826__$1 = state_38826;
var statearr_38851_38911 = state_38826__$1;
(statearr_38851_38911[(2)] = inst_38795);

(statearr_38851_38911[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto__,jobs,results,process,async))
;
return ((function (switch__38411__auto__,c__38518__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0 = (function (){
var statearr_38852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__);

(statearr_38852[(1)] = (1));

return statearr_38852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1 = (function (state_38826){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_38826);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e38853){if((e38853 instanceof Object)){
var ex__38415__auto__ = e38853;
var statearr_38854_38912 = state_38826;
(statearr_38854_38912[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38826);

return cljs.core.cst$kw$recur;
} else {
throw e38853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__38913 = state_38826;
state_38826 = G__38913;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__ = function(state_38826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1.call(this,state_38826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__,jobs,results,process,async))
})();
var state__38520__auto__ = (function (){var statearr_38855 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_38855[(6)] = c__38518__auto__);

return statearr_38855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__,jobs,results,process,async))
);

return c__38518__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38915 = arguments.length;
switch (G__38915) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38918 = arguments.length;
switch (G__38918) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38921 = arguments.length;
switch (G__38921) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38518__auto___38970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___38970,tc,fc){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___38970,tc,fc){
return (function (state_38947){
var state_val_38948 = (state_38947[(1)]);
if((state_val_38948 === (7))){
var inst_38943 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
var statearr_38949_38971 = state_38947__$1;
(statearr_38949_38971[(2)] = inst_38943);

(statearr_38949_38971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (1))){
var state_38947__$1 = state_38947;
var statearr_38950_38972 = state_38947__$1;
(statearr_38950_38972[(2)] = null);

(statearr_38950_38972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (4))){
var inst_38924 = (state_38947[(7)]);
var inst_38924__$1 = (state_38947[(2)]);
var inst_38925 = (inst_38924__$1 == null);
var state_38947__$1 = (function (){var statearr_38951 = state_38947;
(statearr_38951[(7)] = inst_38924__$1);

return statearr_38951;
})();
if(cljs.core.truth_(inst_38925)){
var statearr_38952_38973 = state_38947__$1;
(statearr_38952_38973[(1)] = (5));

} else {
var statearr_38953_38974 = state_38947__$1;
(statearr_38953_38974[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (13))){
var state_38947__$1 = state_38947;
var statearr_38954_38975 = state_38947__$1;
(statearr_38954_38975[(2)] = null);

(statearr_38954_38975[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (6))){
var inst_38924 = (state_38947[(7)]);
var inst_38930 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38924) : p.call(null,inst_38924));
var state_38947__$1 = state_38947;
if(cljs.core.truth_(inst_38930)){
var statearr_38955_38976 = state_38947__$1;
(statearr_38955_38976[(1)] = (9));

} else {
var statearr_38956_38977 = state_38947__$1;
(statearr_38956_38977[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (3))){
var inst_38945 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38947__$1,inst_38945);
} else {
if((state_val_38948 === (12))){
var state_38947__$1 = state_38947;
var statearr_38957_38978 = state_38947__$1;
(statearr_38957_38978[(2)] = null);

(statearr_38957_38978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (2))){
var state_38947__$1 = state_38947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38947__$1,(4),ch);
} else {
if((state_val_38948 === (11))){
var inst_38924 = (state_38947[(7)]);
var inst_38934 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38947__$1,(8),inst_38934,inst_38924);
} else {
if((state_val_38948 === (9))){
var state_38947__$1 = state_38947;
var statearr_38958_38979 = state_38947__$1;
(statearr_38958_38979[(2)] = tc);

(statearr_38958_38979[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (5))){
var inst_38927 = cljs.core.async.close_BANG_(tc);
var inst_38928 = cljs.core.async.close_BANG_(fc);
var state_38947__$1 = (function (){var statearr_38959 = state_38947;
(statearr_38959[(8)] = inst_38927);

return statearr_38959;
})();
var statearr_38960_38980 = state_38947__$1;
(statearr_38960_38980[(2)] = inst_38928);

(statearr_38960_38980[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (14))){
var inst_38941 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
var statearr_38961_38981 = state_38947__$1;
(statearr_38961_38981[(2)] = inst_38941);

(statearr_38961_38981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (10))){
var state_38947__$1 = state_38947;
var statearr_38962_38982 = state_38947__$1;
(statearr_38962_38982[(2)] = fc);

(statearr_38962_38982[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38948 === (8))){
var inst_38936 = (state_38947[(2)]);
var state_38947__$1 = state_38947;
if(cljs.core.truth_(inst_38936)){
var statearr_38963_38983 = state_38947__$1;
(statearr_38963_38983[(1)] = (12));

} else {
var statearr_38964_38984 = state_38947__$1;
(statearr_38964_38984[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___38970,tc,fc))
;
return ((function (switch__38411__auto__,c__38518__auto___38970,tc,fc){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_38965 = [null,null,null,null,null,null,null,null,null];
(statearr_38965[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_38965[(1)] = (1));

return statearr_38965;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_38947){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_38947);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e38966){if((e38966 instanceof Object)){
var ex__38415__auto__ = e38966;
var statearr_38967_38985 = state_38947;
(statearr_38967_38985[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38947);

return cljs.core.cst$kw$recur;
} else {
throw e38966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__38986 = state_38947;
state_38947 = G__38986;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_38947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_38947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___38970,tc,fc))
})();
var state__38520__auto__ = (function (){var statearr_38968 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_38968[(6)] = c__38518__auto___38970);

return statearr_38968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___38970,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__){
return (function (state_39007){
var state_val_39008 = (state_39007[(1)]);
if((state_val_39008 === (7))){
var inst_39003 = (state_39007[(2)]);
var state_39007__$1 = state_39007;
var statearr_39009_39027 = state_39007__$1;
(statearr_39009_39027[(2)] = inst_39003);

(statearr_39009_39027[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39008 === (1))){
var inst_38987 = init;
var state_39007__$1 = (function (){var statearr_39010 = state_39007;
(statearr_39010[(7)] = inst_38987);

return statearr_39010;
})();
var statearr_39011_39028 = state_39007__$1;
(statearr_39011_39028[(2)] = null);

(statearr_39011_39028[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39008 === (4))){
var inst_38990 = (state_39007[(8)]);
var inst_38990__$1 = (state_39007[(2)]);
var inst_38991 = (inst_38990__$1 == null);
var state_39007__$1 = (function (){var statearr_39012 = state_39007;
(statearr_39012[(8)] = inst_38990__$1);

return statearr_39012;
})();
if(cljs.core.truth_(inst_38991)){
var statearr_39013_39029 = state_39007__$1;
(statearr_39013_39029[(1)] = (5));

} else {
var statearr_39014_39030 = state_39007__$1;
(statearr_39014_39030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39008 === (6))){
var inst_38990 = (state_39007[(8)]);
var inst_38994 = (state_39007[(9)]);
var inst_38987 = (state_39007[(7)]);
var inst_38994__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38987,inst_38990) : f.call(null,inst_38987,inst_38990));
var inst_38995 = cljs.core.reduced_QMARK_(inst_38994__$1);
var state_39007__$1 = (function (){var statearr_39015 = state_39007;
(statearr_39015[(9)] = inst_38994__$1);

return statearr_39015;
})();
if(inst_38995){
var statearr_39016_39031 = state_39007__$1;
(statearr_39016_39031[(1)] = (8));

} else {
var statearr_39017_39032 = state_39007__$1;
(statearr_39017_39032[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39008 === (3))){
var inst_39005 = (state_39007[(2)]);
var state_39007__$1 = state_39007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39007__$1,inst_39005);
} else {
if((state_val_39008 === (2))){
var state_39007__$1 = state_39007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39007__$1,(4),ch);
} else {
if((state_val_39008 === (9))){
var inst_38994 = (state_39007[(9)]);
var inst_38987 = inst_38994;
var state_39007__$1 = (function (){var statearr_39018 = state_39007;
(statearr_39018[(7)] = inst_38987);

return statearr_39018;
})();
var statearr_39019_39033 = state_39007__$1;
(statearr_39019_39033[(2)] = null);

(statearr_39019_39033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39008 === (5))){
var inst_38987 = (state_39007[(7)]);
var state_39007__$1 = state_39007;
var statearr_39020_39034 = state_39007__$1;
(statearr_39020_39034[(2)] = inst_38987);

(statearr_39020_39034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39008 === (10))){
var inst_39001 = (state_39007[(2)]);
var state_39007__$1 = state_39007;
var statearr_39021_39035 = state_39007__$1;
(statearr_39021_39035[(2)] = inst_39001);

(statearr_39021_39035[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39008 === (8))){
var inst_38994 = (state_39007[(9)]);
var inst_38997 = cljs.core.deref(inst_38994);
var state_39007__$1 = state_39007;
var statearr_39022_39036 = state_39007__$1;
(statearr_39022_39036[(2)] = inst_38997);

(statearr_39022_39036[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto__))
;
return ((function (switch__38411__auto__,c__38518__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38412__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38412__auto____0 = (function (){
var statearr_39023 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39023[(0)] = cljs$core$async$reduce_$_state_machine__38412__auto__);

(statearr_39023[(1)] = (1));

return statearr_39023;
});
var cljs$core$async$reduce_$_state_machine__38412__auto____1 = (function (state_39007){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39007);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39024){if((e39024 instanceof Object)){
var ex__38415__auto__ = e39024;
var statearr_39025_39037 = state_39007;
(statearr_39025_39037[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39007);

return cljs.core.cst$kw$recur;
} else {
throw e39024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39038 = state_39007;
state_39007 = G__39038;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38412__auto__ = function(state_39007){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38412__auto____1.call(this,state_39007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38412__auto____0;
cljs$core$async$reduce_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38412__auto____1;
return cljs$core$async$reduce_$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__))
})();
var state__38520__auto__ = (function (){var statearr_39026 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39026[(6)] = c__38518__auto__);

return statearr_39026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__))
);

return c__38518__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__,f__$1){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__,f__$1){
return (function (state_39044){
var state_val_39045 = (state_39044[(1)]);
if((state_val_39045 === (1))){
var inst_39039 = cljs.core.async.reduce(f__$1,init,ch);
var state_39044__$1 = state_39044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39044__$1,(2),inst_39039);
} else {
if((state_val_39045 === (2))){
var inst_39041 = (state_39044[(2)]);
var inst_39042 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39041) : f__$1.call(null,inst_39041));
var state_39044__$1 = state_39044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39044__$1,inst_39042);
} else {
return null;
}
}
});})(c__38518__auto__,f__$1))
;
return ((function (switch__38411__auto__,c__38518__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38412__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38412__auto____0 = (function (){
var statearr_39046 = [null,null,null,null,null,null,null];
(statearr_39046[(0)] = cljs$core$async$transduce_$_state_machine__38412__auto__);

(statearr_39046[(1)] = (1));

return statearr_39046;
});
var cljs$core$async$transduce_$_state_machine__38412__auto____1 = (function (state_39044){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39044);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39047){if((e39047 instanceof Object)){
var ex__38415__auto__ = e39047;
var statearr_39048_39050 = state_39044;
(statearr_39048_39050[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39044);

return cljs.core.cst$kw$recur;
} else {
throw e39047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39051 = state_39044;
state_39044 = G__39051;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38412__auto__ = function(state_39044){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38412__auto____1.call(this,state_39044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38412__auto____0;
cljs$core$async$transduce_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38412__auto____1;
return cljs$core$async$transduce_$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__,f__$1))
})();
var state__38520__auto__ = (function (){var statearr_39049 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39049[(6)] = c__38518__auto__);

return statearr_39049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__,f__$1))
);

return c__38518__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39053 = arguments.length;
switch (G__39053) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__){
return (function (state_39078){
var state_val_39079 = (state_39078[(1)]);
if((state_val_39079 === (7))){
var inst_39060 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39080_39101 = state_39078__$1;
(statearr_39080_39101[(2)] = inst_39060);

(statearr_39080_39101[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (1))){
var inst_39054 = cljs.core.seq(coll);
var inst_39055 = inst_39054;
var state_39078__$1 = (function (){var statearr_39081 = state_39078;
(statearr_39081[(7)] = inst_39055);

return statearr_39081;
})();
var statearr_39082_39102 = state_39078__$1;
(statearr_39082_39102[(2)] = null);

(statearr_39082_39102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (4))){
var inst_39055 = (state_39078[(7)]);
var inst_39058 = cljs.core.first(inst_39055);
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39078__$1,(7),ch,inst_39058);
} else {
if((state_val_39079 === (13))){
var inst_39072 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39083_39103 = state_39078__$1;
(statearr_39083_39103[(2)] = inst_39072);

(statearr_39083_39103[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (6))){
var inst_39063 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
if(cljs.core.truth_(inst_39063)){
var statearr_39084_39104 = state_39078__$1;
(statearr_39084_39104[(1)] = (8));

} else {
var statearr_39085_39105 = state_39078__$1;
(statearr_39085_39105[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (3))){
var inst_39076 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39078__$1,inst_39076);
} else {
if((state_val_39079 === (12))){
var state_39078__$1 = state_39078;
var statearr_39086_39106 = state_39078__$1;
(statearr_39086_39106[(2)] = null);

(statearr_39086_39106[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (2))){
var inst_39055 = (state_39078[(7)]);
var state_39078__$1 = state_39078;
if(cljs.core.truth_(inst_39055)){
var statearr_39087_39107 = state_39078__$1;
(statearr_39087_39107[(1)] = (4));

} else {
var statearr_39088_39108 = state_39078__$1;
(statearr_39088_39108[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (11))){
var inst_39069 = cljs.core.async.close_BANG_(ch);
var state_39078__$1 = state_39078;
var statearr_39089_39109 = state_39078__$1;
(statearr_39089_39109[(2)] = inst_39069);

(statearr_39089_39109[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (9))){
var state_39078__$1 = state_39078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39090_39110 = state_39078__$1;
(statearr_39090_39110[(1)] = (11));

} else {
var statearr_39091_39111 = state_39078__$1;
(statearr_39091_39111[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (5))){
var inst_39055 = (state_39078[(7)]);
var state_39078__$1 = state_39078;
var statearr_39092_39112 = state_39078__$1;
(statearr_39092_39112[(2)] = inst_39055);

(statearr_39092_39112[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (10))){
var inst_39074 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39093_39113 = state_39078__$1;
(statearr_39093_39113[(2)] = inst_39074);

(statearr_39093_39113[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39079 === (8))){
var inst_39055 = (state_39078[(7)]);
var inst_39065 = cljs.core.next(inst_39055);
var inst_39055__$1 = inst_39065;
var state_39078__$1 = (function (){var statearr_39094 = state_39078;
(statearr_39094[(7)] = inst_39055__$1);

return statearr_39094;
})();
var statearr_39095_39114 = state_39078__$1;
(statearr_39095_39114[(2)] = null);

(statearr_39095_39114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto__))
;
return ((function (switch__38411__auto__,c__38518__auto__){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_39096 = [null,null,null,null,null,null,null,null];
(statearr_39096[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_39096[(1)] = (1));

return statearr_39096;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_39078){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39078);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39097){if((e39097 instanceof Object)){
var ex__38415__auto__ = e39097;
var statearr_39098_39115 = state_39078;
(statearr_39098_39115[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39078);

return cljs.core.cst$kw$recur;
} else {
throw e39097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39116 = state_39078;
state_39078 = G__39116;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_39078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_39078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__))
})();
var state__38520__auto__ = (function (){var statearr_39099 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39099[(6)] = c__38518__auto__);

return statearr_39099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__))
);

return c__38518__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39117 = (function (ch,cs,meta39118){
this.ch = ch;
this.cs = cs;
this.meta39118 = meta39118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39119,meta39118__$1){
var self__ = this;
var _39119__$1 = this;
return (new cljs.core.async.t_cljs$core$async39117(self__.ch,self__.cs,meta39118__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39119){
var self__ = this;
var _39119__$1 = this;
return self__.meta39118;
});})(cs))
;

cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39117.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39117.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta39118], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39117";

cljs.core.async.t_cljs$core$async39117.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39117");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39117.
 */
cljs.core.async.__GT_t_cljs$core$async39117 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39117(ch__$1,cs__$1,meta39118){
return (new cljs.core.async.t_cljs$core$async39117(ch__$1,cs__$1,meta39118));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39117(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38518__auto___39339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___39339,cs,m,dchan,dctr,done){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___39339,cs,m,dchan,dctr,done){
return (function (state_39254){
var state_val_39255 = (state_39254[(1)]);
if((state_val_39255 === (7))){
var inst_39250 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39256_39340 = state_39254__$1;
(statearr_39256_39340[(2)] = inst_39250);

(statearr_39256_39340[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (20))){
var inst_39153 = (state_39254[(7)]);
var inst_39165 = cljs.core.first(inst_39153);
var inst_39166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39165,(0),null);
var inst_39167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39165,(1),null);
var state_39254__$1 = (function (){var statearr_39257 = state_39254;
(statearr_39257[(8)] = inst_39166);

return statearr_39257;
})();
if(cljs.core.truth_(inst_39167)){
var statearr_39258_39341 = state_39254__$1;
(statearr_39258_39341[(1)] = (22));

} else {
var statearr_39259_39342 = state_39254__$1;
(statearr_39259_39342[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (27))){
var inst_39195 = (state_39254[(9)]);
var inst_39197 = (state_39254[(10)]);
var inst_39202 = (state_39254[(11)]);
var inst_39122 = (state_39254[(12)]);
var inst_39202__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39195,inst_39197);
var inst_39203 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39202__$1,inst_39122,done);
var state_39254__$1 = (function (){var statearr_39260 = state_39254;
(statearr_39260[(11)] = inst_39202__$1);

return statearr_39260;
})();
if(cljs.core.truth_(inst_39203)){
var statearr_39261_39343 = state_39254__$1;
(statearr_39261_39343[(1)] = (30));

} else {
var statearr_39262_39344 = state_39254__$1;
(statearr_39262_39344[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (1))){
var state_39254__$1 = state_39254;
var statearr_39263_39345 = state_39254__$1;
(statearr_39263_39345[(2)] = null);

(statearr_39263_39345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (24))){
var inst_39153 = (state_39254[(7)]);
var inst_39172 = (state_39254[(2)]);
var inst_39173 = cljs.core.next(inst_39153);
var inst_39131 = inst_39173;
var inst_39132 = null;
var inst_39133 = (0);
var inst_39134 = (0);
var state_39254__$1 = (function (){var statearr_39264 = state_39254;
(statearr_39264[(13)] = inst_39131);

(statearr_39264[(14)] = inst_39134);

(statearr_39264[(15)] = inst_39132);

(statearr_39264[(16)] = inst_39133);

(statearr_39264[(17)] = inst_39172);

return statearr_39264;
})();
var statearr_39265_39346 = state_39254__$1;
(statearr_39265_39346[(2)] = null);

(statearr_39265_39346[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (39))){
var state_39254__$1 = state_39254;
var statearr_39269_39347 = state_39254__$1;
(statearr_39269_39347[(2)] = null);

(statearr_39269_39347[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (4))){
var inst_39122 = (state_39254[(12)]);
var inst_39122__$1 = (state_39254[(2)]);
var inst_39123 = (inst_39122__$1 == null);
var state_39254__$1 = (function (){var statearr_39270 = state_39254;
(statearr_39270[(12)] = inst_39122__$1);

return statearr_39270;
})();
if(cljs.core.truth_(inst_39123)){
var statearr_39271_39348 = state_39254__$1;
(statearr_39271_39348[(1)] = (5));

} else {
var statearr_39272_39349 = state_39254__$1;
(statearr_39272_39349[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (15))){
var inst_39131 = (state_39254[(13)]);
var inst_39134 = (state_39254[(14)]);
var inst_39132 = (state_39254[(15)]);
var inst_39133 = (state_39254[(16)]);
var inst_39149 = (state_39254[(2)]);
var inst_39150 = (inst_39134 + (1));
var tmp39266 = inst_39131;
var tmp39267 = inst_39132;
var tmp39268 = inst_39133;
var inst_39131__$1 = tmp39266;
var inst_39132__$1 = tmp39267;
var inst_39133__$1 = tmp39268;
var inst_39134__$1 = inst_39150;
var state_39254__$1 = (function (){var statearr_39273 = state_39254;
(statearr_39273[(13)] = inst_39131__$1);

(statearr_39273[(14)] = inst_39134__$1);

(statearr_39273[(15)] = inst_39132__$1);

(statearr_39273[(16)] = inst_39133__$1);

(statearr_39273[(18)] = inst_39149);

return statearr_39273;
})();
var statearr_39274_39350 = state_39254__$1;
(statearr_39274_39350[(2)] = null);

(statearr_39274_39350[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (21))){
var inst_39176 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39278_39351 = state_39254__$1;
(statearr_39278_39351[(2)] = inst_39176);

(statearr_39278_39351[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (31))){
var inst_39202 = (state_39254[(11)]);
var inst_39206 = done(null);
var inst_39207 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39202);
var state_39254__$1 = (function (){var statearr_39279 = state_39254;
(statearr_39279[(19)] = inst_39206);

return statearr_39279;
})();
var statearr_39280_39352 = state_39254__$1;
(statearr_39280_39352[(2)] = inst_39207);

(statearr_39280_39352[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (32))){
var inst_39195 = (state_39254[(9)]);
var inst_39194 = (state_39254[(20)]);
var inst_39197 = (state_39254[(10)]);
var inst_39196 = (state_39254[(21)]);
var inst_39209 = (state_39254[(2)]);
var inst_39210 = (inst_39197 + (1));
var tmp39275 = inst_39195;
var tmp39276 = inst_39194;
var tmp39277 = inst_39196;
var inst_39194__$1 = tmp39276;
var inst_39195__$1 = tmp39275;
var inst_39196__$1 = tmp39277;
var inst_39197__$1 = inst_39210;
var state_39254__$1 = (function (){var statearr_39281 = state_39254;
(statearr_39281[(9)] = inst_39195__$1);

(statearr_39281[(20)] = inst_39194__$1);

(statearr_39281[(10)] = inst_39197__$1);

(statearr_39281[(22)] = inst_39209);

(statearr_39281[(21)] = inst_39196__$1);

return statearr_39281;
})();
var statearr_39282_39353 = state_39254__$1;
(statearr_39282_39353[(2)] = null);

(statearr_39282_39353[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (40))){
var inst_39222 = (state_39254[(23)]);
var inst_39226 = done(null);
var inst_39227 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39222);
var state_39254__$1 = (function (){var statearr_39283 = state_39254;
(statearr_39283[(24)] = inst_39226);

return statearr_39283;
})();
var statearr_39284_39354 = state_39254__$1;
(statearr_39284_39354[(2)] = inst_39227);

(statearr_39284_39354[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (33))){
var inst_39213 = (state_39254[(25)]);
var inst_39215 = cljs.core.chunked_seq_QMARK_(inst_39213);
var state_39254__$1 = state_39254;
if(inst_39215){
var statearr_39285_39355 = state_39254__$1;
(statearr_39285_39355[(1)] = (36));

} else {
var statearr_39286_39356 = state_39254__$1;
(statearr_39286_39356[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (13))){
var inst_39143 = (state_39254[(26)]);
var inst_39146 = cljs.core.async.close_BANG_(inst_39143);
var state_39254__$1 = state_39254;
var statearr_39287_39357 = state_39254__$1;
(statearr_39287_39357[(2)] = inst_39146);

(statearr_39287_39357[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (22))){
var inst_39166 = (state_39254[(8)]);
var inst_39169 = cljs.core.async.close_BANG_(inst_39166);
var state_39254__$1 = state_39254;
var statearr_39288_39358 = state_39254__$1;
(statearr_39288_39358[(2)] = inst_39169);

(statearr_39288_39358[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (36))){
var inst_39213 = (state_39254[(25)]);
var inst_39217 = cljs.core.chunk_first(inst_39213);
var inst_39218 = cljs.core.chunk_rest(inst_39213);
var inst_39219 = cljs.core.count(inst_39217);
var inst_39194 = inst_39218;
var inst_39195 = inst_39217;
var inst_39196 = inst_39219;
var inst_39197 = (0);
var state_39254__$1 = (function (){var statearr_39289 = state_39254;
(statearr_39289[(9)] = inst_39195);

(statearr_39289[(20)] = inst_39194);

(statearr_39289[(10)] = inst_39197);

(statearr_39289[(21)] = inst_39196);

return statearr_39289;
})();
var statearr_39290_39359 = state_39254__$1;
(statearr_39290_39359[(2)] = null);

(statearr_39290_39359[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (41))){
var inst_39213 = (state_39254[(25)]);
var inst_39229 = (state_39254[(2)]);
var inst_39230 = cljs.core.next(inst_39213);
var inst_39194 = inst_39230;
var inst_39195 = null;
var inst_39196 = (0);
var inst_39197 = (0);
var state_39254__$1 = (function (){var statearr_39291 = state_39254;
(statearr_39291[(9)] = inst_39195);

(statearr_39291[(20)] = inst_39194);

(statearr_39291[(27)] = inst_39229);

(statearr_39291[(10)] = inst_39197);

(statearr_39291[(21)] = inst_39196);

return statearr_39291;
})();
var statearr_39292_39360 = state_39254__$1;
(statearr_39292_39360[(2)] = null);

(statearr_39292_39360[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (43))){
var state_39254__$1 = state_39254;
var statearr_39293_39361 = state_39254__$1;
(statearr_39293_39361[(2)] = null);

(statearr_39293_39361[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (29))){
var inst_39238 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39294_39362 = state_39254__$1;
(statearr_39294_39362[(2)] = inst_39238);

(statearr_39294_39362[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (44))){
var inst_39247 = (state_39254[(2)]);
var state_39254__$1 = (function (){var statearr_39295 = state_39254;
(statearr_39295[(28)] = inst_39247);

return statearr_39295;
})();
var statearr_39296_39363 = state_39254__$1;
(statearr_39296_39363[(2)] = null);

(statearr_39296_39363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (6))){
var inst_39186 = (state_39254[(29)]);
var inst_39185 = cljs.core.deref(cs);
var inst_39186__$1 = cljs.core.keys(inst_39185);
var inst_39187 = cljs.core.count(inst_39186__$1);
var inst_39188 = cljs.core.reset_BANG_(dctr,inst_39187);
var inst_39193 = cljs.core.seq(inst_39186__$1);
var inst_39194 = inst_39193;
var inst_39195 = null;
var inst_39196 = (0);
var inst_39197 = (0);
var state_39254__$1 = (function (){var statearr_39297 = state_39254;
(statearr_39297[(9)] = inst_39195);

(statearr_39297[(20)] = inst_39194);

(statearr_39297[(29)] = inst_39186__$1);

(statearr_39297[(10)] = inst_39197);

(statearr_39297[(21)] = inst_39196);

(statearr_39297[(30)] = inst_39188);

return statearr_39297;
})();
var statearr_39298_39364 = state_39254__$1;
(statearr_39298_39364[(2)] = null);

(statearr_39298_39364[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (28))){
var inst_39194 = (state_39254[(20)]);
var inst_39213 = (state_39254[(25)]);
var inst_39213__$1 = cljs.core.seq(inst_39194);
var state_39254__$1 = (function (){var statearr_39299 = state_39254;
(statearr_39299[(25)] = inst_39213__$1);

return statearr_39299;
})();
if(inst_39213__$1){
var statearr_39300_39365 = state_39254__$1;
(statearr_39300_39365[(1)] = (33));

} else {
var statearr_39301_39366 = state_39254__$1;
(statearr_39301_39366[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (25))){
var inst_39197 = (state_39254[(10)]);
var inst_39196 = (state_39254[(21)]);
var inst_39199 = (inst_39197 < inst_39196);
var inst_39200 = inst_39199;
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39200)){
var statearr_39302_39367 = state_39254__$1;
(statearr_39302_39367[(1)] = (27));

} else {
var statearr_39303_39368 = state_39254__$1;
(statearr_39303_39368[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (34))){
var state_39254__$1 = state_39254;
var statearr_39304_39369 = state_39254__$1;
(statearr_39304_39369[(2)] = null);

(statearr_39304_39369[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (17))){
var state_39254__$1 = state_39254;
var statearr_39305_39370 = state_39254__$1;
(statearr_39305_39370[(2)] = null);

(statearr_39305_39370[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (3))){
var inst_39252 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39254__$1,inst_39252);
} else {
if((state_val_39255 === (12))){
var inst_39181 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39306_39371 = state_39254__$1;
(statearr_39306_39371[(2)] = inst_39181);

(statearr_39306_39371[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (2))){
var state_39254__$1 = state_39254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39254__$1,(4),ch);
} else {
if((state_val_39255 === (23))){
var state_39254__$1 = state_39254;
var statearr_39307_39372 = state_39254__$1;
(statearr_39307_39372[(2)] = null);

(statearr_39307_39372[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (35))){
var inst_39236 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39308_39373 = state_39254__$1;
(statearr_39308_39373[(2)] = inst_39236);

(statearr_39308_39373[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (19))){
var inst_39153 = (state_39254[(7)]);
var inst_39157 = cljs.core.chunk_first(inst_39153);
var inst_39158 = cljs.core.chunk_rest(inst_39153);
var inst_39159 = cljs.core.count(inst_39157);
var inst_39131 = inst_39158;
var inst_39132 = inst_39157;
var inst_39133 = inst_39159;
var inst_39134 = (0);
var state_39254__$1 = (function (){var statearr_39309 = state_39254;
(statearr_39309[(13)] = inst_39131);

(statearr_39309[(14)] = inst_39134);

(statearr_39309[(15)] = inst_39132);

(statearr_39309[(16)] = inst_39133);

return statearr_39309;
})();
var statearr_39310_39374 = state_39254__$1;
(statearr_39310_39374[(2)] = null);

(statearr_39310_39374[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (11))){
var inst_39131 = (state_39254[(13)]);
var inst_39153 = (state_39254[(7)]);
var inst_39153__$1 = cljs.core.seq(inst_39131);
var state_39254__$1 = (function (){var statearr_39311 = state_39254;
(statearr_39311[(7)] = inst_39153__$1);

return statearr_39311;
})();
if(inst_39153__$1){
var statearr_39312_39375 = state_39254__$1;
(statearr_39312_39375[(1)] = (16));

} else {
var statearr_39313_39376 = state_39254__$1;
(statearr_39313_39376[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (9))){
var inst_39183 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39314_39377 = state_39254__$1;
(statearr_39314_39377[(2)] = inst_39183);

(statearr_39314_39377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (5))){
var inst_39129 = cljs.core.deref(cs);
var inst_39130 = cljs.core.seq(inst_39129);
var inst_39131 = inst_39130;
var inst_39132 = null;
var inst_39133 = (0);
var inst_39134 = (0);
var state_39254__$1 = (function (){var statearr_39315 = state_39254;
(statearr_39315[(13)] = inst_39131);

(statearr_39315[(14)] = inst_39134);

(statearr_39315[(15)] = inst_39132);

(statearr_39315[(16)] = inst_39133);

return statearr_39315;
})();
var statearr_39316_39378 = state_39254__$1;
(statearr_39316_39378[(2)] = null);

(statearr_39316_39378[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (14))){
var state_39254__$1 = state_39254;
var statearr_39317_39379 = state_39254__$1;
(statearr_39317_39379[(2)] = null);

(statearr_39317_39379[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (45))){
var inst_39244 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39318_39380 = state_39254__$1;
(statearr_39318_39380[(2)] = inst_39244);

(statearr_39318_39380[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (26))){
var inst_39186 = (state_39254[(29)]);
var inst_39240 = (state_39254[(2)]);
var inst_39241 = cljs.core.seq(inst_39186);
var state_39254__$1 = (function (){var statearr_39319 = state_39254;
(statearr_39319[(31)] = inst_39240);

return statearr_39319;
})();
if(inst_39241){
var statearr_39320_39381 = state_39254__$1;
(statearr_39320_39381[(1)] = (42));

} else {
var statearr_39321_39382 = state_39254__$1;
(statearr_39321_39382[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (16))){
var inst_39153 = (state_39254[(7)]);
var inst_39155 = cljs.core.chunked_seq_QMARK_(inst_39153);
var state_39254__$1 = state_39254;
if(inst_39155){
var statearr_39322_39383 = state_39254__$1;
(statearr_39322_39383[(1)] = (19));

} else {
var statearr_39323_39384 = state_39254__$1;
(statearr_39323_39384[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (38))){
var inst_39233 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39324_39385 = state_39254__$1;
(statearr_39324_39385[(2)] = inst_39233);

(statearr_39324_39385[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (30))){
var state_39254__$1 = state_39254;
var statearr_39325_39386 = state_39254__$1;
(statearr_39325_39386[(2)] = null);

(statearr_39325_39386[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (10))){
var inst_39134 = (state_39254[(14)]);
var inst_39132 = (state_39254[(15)]);
var inst_39142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39132,inst_39134);
var inst_39143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39142,(0),null);
var inst_39144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39142,(1),null);
var state_39254__$1 = (function (){var statearr_39326 = state_39254;
(statearr_39326[(26)] = inst_39143);

return statearr_39326;
})();
if(cljs.core.truth_(inst_39144)){
var statearr_39327_39387 = state_39254__$1;
(statearr_39327_39387[(1)] = (13));

} else {
var statearr_39328_39388 = state_39254__$1;
(statearr_39328_39388[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (18))){
var inst_39179 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39329_39389 = state_39254__$1;
(statearr_39329_39389[(2)] = inst_39179);

(statearr_39329_39389[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (42))){
var state_39254__$1 = state_39254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39254__$1,(45),dchan);
} else {
if((state_val_39255 === (37))){
var inst_39222 = (state_39254[(23)]);
var inst_39213 = (state_39254[(25)]);
var inst_39122 = (state_39254[(12)]);
var inst_39222__$1 = cljs.core.first(inst_39213);
var inst_39223 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39222__$1,inst_39122,done);
var state_39254__$1 = (function (){var statearr_39330 = state_39254;
(statearr_39330[(23)] = inst_39222__$1);

return statearr_39330;
})();
if(cljs.core.truth_(inst_39223)){
var statearr_39331_39390 = state_39254__$1;
(statearr_39331_39390[(1)] = (39));

} else {
var statearr_39332_39391 = state_39254__$1;
(statearr_39332_39391[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39255 === (8))){
var inst_39134 = (state_39254[(14)]);
var inst_39133 = (state_39254[(16)]);
var inst_39136 = (inst_39134 < inst_39133);
var inst_39137 = inst_39136;
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39137)){
var statearr_39333_39392 = state_39254__$1;
(statearr_39333_39392[(1)] = (10));

} else {
var statearr_39334_39393 = state_39254__$1;
(statearr_39334_39393[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___39339,cs,m,dchan,dctr,done))
;
return ((function (switch__38411__auto__,c__38518__auto___39339,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38412__auto__ = null;
var cljs$core$async$mult_$_state_machine__38412__auto____0 = (function (){
var statearr_39335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39335[(0)] = cljs$core$async$mult_$_state_machine__38412__auto__);

(statearr_39335[(1)] = (1));

return statearr_39335;
});
var cljs$core$async$mult_$_state_machine__38412__auto____1 = (function (state_39254){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39254);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39336){if((e39336 instanceof Object)){
var ex__38415__auto__ = e39336;
var statearr_39337_39394 = state_39254;
(statearr_39337_39394[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39254);

return cljs.core.cst$kw$recur;
} else {
throw e39336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39395 = state_39254;
state_39254 = G__39395;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38412__auto__ = function(state_39254){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38412__auto____1.call(this,state_39254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38412__auto____0;
cljs$core$async$mult_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38412__auto____1;
return cljs$core$async$mult_$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___39339,cs,m,dchan,dctr,done))
})();
var state__38520__auto__ = (function (){var statearr_39338 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39338[(6)] = c__38518__auto___39339);

return statearr_39338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___39339,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39397 = arguments.length;
switch (G__39397) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39409 = arguments.length;
var i__4731__auto___39410 = (0);
while(true){
if((i__4731__auto___39410 < len__4730__auto___39409)){
args__4736__auto__.push((arguments[i__4731__auto___39410]));

var G__39411 = (i__4731__auto___39410 + (1));
i__4731__auto___39410 = G__39411;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39403){
var map__39404 = p__39403;
var map__39404__$1 = (((((!((map__39404 == null))))?(((((map__39404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39404):map__39404);
var opts = map__39404__$1;
var statearr_39406_39412 = state;
(statearr_39406_39412[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__39404,map__39404__$1,opts){
return (function (val){
var statearr_39407_39413 = state;
(statearr_39407_39413[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__39404,map__39404__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_39408_39414 = state;
(statearr_39408_39414[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39399){
var G__39400 = cljs.core.first(seq39399);
var seq39399__$1 = cljs.core.next(seq39399);
var G__39401 = cljs.core.first(seq39399__$1);
var seq39399__$2 = cljs.core.next(seq39399__$1);
var G__39402 = cljs.core.first(seq39399__$2);
var seq39399__$3 = cljs.core.next(seq39399__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39400,G__39401,G__39402,seq39399__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39415 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39416){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39416 = meta39416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39417,meta39416__$1){
var self__ = this;
var _39417__$1 = this;
return (new cljs.core.async.t_cljs$core$async39415(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39416__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39417){
var self__ = this;
var _39417__$1 = this;
return self__.meta39416;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta39416], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39415";

cljs.core.async.t_cljs$core$async39415.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39415");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39415.
 */
cljs.core.async.__GT_t_cljs$core$async39415 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39415(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39416){
return (new cljs.core.async.t_cljs$core$async39415(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39416));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39415(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38518__auto___39579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___39579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___39579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39519){
var state_val_39520 = (state_39519[(1)]);
if((state_val_39520 === (7))){
var inst_39434 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
var statearr_39521_39580 = state_39519__$1;
(statearr_39521_39580[(2)] = inst_39434);

(statearr_39521_39580[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (20))){
var inst_39446 = (state_39519[(7)]);
var state_39519__$1 = state_39519;
var statearr_39522_39581 = state_39519__$1;
(statearr_39522_39581[(2)] = inst_39446);

(statearr_39522_39581[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (27))){
var state_39519__$1 = state_39519;
var statearr_39523_39582 = state_39519__$1;
(statearr_39523_39582[(2)] = null);

(statearr_39523_39582[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (1))){
var inst_39421 = (state_39519[(8)]);
var inst_39421__$1 = calc_state();
var inst_39423 = (inst_39421__$1 == null);
var inst_39424 = cljs.core.not(inst_39423);
var state_39519__$1 = (function (){var statearr_39524 = state_39519;
(statearr_39524[(8)] = inst_39421__$1);

return statearr_39524;
})();
if(inst_39424){
var statearr_39525_39583 = state_39519__$1;
(statearr_39525_39583[(1)] = (2));

} else {
var statearr_39526_39584 = state_39519__$1;
(statearr_39526_39584[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (24))){
var inst_39479 = (state_39519[(9)]);
var inst_39493 = (state_39519[(10)]);
var inst_39470 = (state_39519[(11)]);
var inst_39493__$1 = (inst_39470.cljs$core$IFn$_invoke$arity$1 ? inst_39470.cljs$core$IFn$_invoke$arity$1(inst_39479) : inst_39470.call(null,inst_39479));
var state_39519__$1 = (function (){var statearr_39527 = state_39519;
(statearr_39527[(10)] = inst_39493__$1);

return statearr_39527;
})();
if(cljs.core.truth_(inst_39493__$1)){
var statearr_39528_39585 = state_39519__$1;
(statearr_39528_39585[(1)] = (29));

} else {
var statearr_39529_39586 = state_39519__$1;
(statearr_39529_39586[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (4))){
var inst_39437 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39437)){
var statearr_39530_39587 = state_39519__$1;
(statearr_39530_39587[(1)] = (8));

} else {
var statearr_39531_39588 = state_39519__$1;
(statearr_39531_39588[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (15))){
var inst_39464 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39464)){
var statearr_39532_39589 = state_39519__$1;
(statearr_39532_39589[(1)] = (19));

} else {
var statearr_39533_39590 = state_39519__$1;
(statearr_39533_39590[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (21))){
var inst_39469 = (state_39519[(12)]);
var inst_39469__$1 = (state_39519[(2)]);
var inst_39470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39469__$1,cljs.core.cst$kw$solos);
var inst_39471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39469__$1,cljs.core.cst$kw$mutes);
var inst_39472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39469__$1,cljs.core.cst$kw$reads);
var state_39519__$1 = (function (){var statearr_39534 = state_39519;
(statearr_39534[(13)] = inst_39471);

(statearr_39534[(12)] = inst_39469__$1);

(statearr_39534[(11)] = inst_39470);

return statearr_39534;
})();
return cljs.core.async.ioc_alts_BANG_(state_39519__$1,(22),inst_39472);
} else {
if((state_val_39520 === (31))){
var inst_39501 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39501)){
var statearr_39535_39591 = state_39519__$1;
(statearr_39535_39591[(1)] = (32));

} else {
var statearr_39536_39592 = state_39519__$1;
(statearr_39536_39592[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (32))){
var inst_39478 = (state_39519[(14)]);
var state_39519__$1 = state_39519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39519__$1,(35),out,inst_39478);
} else {
if((state_val_39520 === (33))){
var inst_39469 = (state_39519[(12)]);
var inst_39446 = inst_39469;
var state_39519__$1 = (function (){var statearr_39537 = state_39519;
(statearr_39537[(7)] = inst_39446);

return statearr_39537;
})();
var statearr_39538_39593 = state_39519__$1;
(statearr_39538_39593[(2)] = null);

(statearr_39538_39593[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (13))){
var inst_39446 = (state_39519[(7)]);
var inst_39453 = inst_39446.cljs$lang$protocol_mask$partition0$;
var inst_39454 = (inst_39453 & (64));
var inst_39455 = inst_39446.cljs$core$ISeq$;
var inst_39456 = (cljs.core.PROTOCOL_SENTINEL === inst_39455);
var inst_39457 = ((inst_39454) || (inst_39456));
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39457)){
var statearr_39539_39594 = state_39519__$1;
(statearr_39539_39594[(1)] = (16));

} else {
var statearr_39540_39595 = state_39519__$1;
(statearr_39540_39595[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (22))){
var inst_39479 = (state_39519[(9)]);
var inst_39478 = (state_39519[(14)]);
var inst_39477 = (state_39519[(2)]);
var inst_39478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39477,(0),null);
var inst_39479__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39477,(1),null);
var inst_39480 = (inst_39478__$1 == null);
var inst_39481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39479__$1,change);
var inst_39482 = ((inst_39480) || (inst_39481));
var state_39519__$1 = (function (){var statearr_39541 = state_39519;
(statearr_39541[(9)] = inst_39479__$1);

(statearr_39541[(14)] = inst_39478__$1);

return statearr_39541;
})();
if(cljs.core.truth_(inst_39482)){
var statearr_39542_39596 = state_39519__$1;
(statearr_39542_39596[(1)] = (23));

} else {
var statearr_39543_39597 = state_39519__$1;
(statearr_39543_39597[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (36))){
var inst_39469 = (state_39519[(12)]);
var inst_39446 = inst_39469;
var state_39519__$1 = (function (){var statearr_39544 = state_39519;
(statearr_39544[(7)] = inst_39446);

return statearr_39544;
})();
var statearr_39545_39598 = state_39519__$1;
(statearr_39545_39598[(2)] = null);

(statearr_39545_39598[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (29))){
var inst_39493 = (state_39519[(10)]);
var state_39519__$1 = state_39519;
var statearr_39546_39599 = state_39519__$1;
(statearr_39546_39599[(2)] = inst_39493);

(statearr_39546_39599[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (6))){
var state_39519__$1 = state_39519;
var statearr_39547_39600 = state_39519__$1;
(statearr_39547_39600[(2)] = false);

(statearr_39547_39600[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (28))){
var inst_39489 = (state_39519[(2)]);
var inst_39490 = calc_state();
var inst_39446 = inst_39490;
var state_39519__$1 = (function (){var statearr_39548 = state_39519;
(statearr_39548[(15)] = inst_39489);

(statearr_39548[(7)] = inst_39446);

return statearr_39548;
})();
var statearr_39549_39601 = state_39519__$1;
(statearr_39549_39601[(2)] = null);

(statearr_39549_39601[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (25))){
var inst_39515 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
var statearr_39550_39602 = state_39519__$1;
(statearr_39550_39602[(2)] = inst_39515);

(statearr_39550_39602[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (34))){
var inst_39513 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
var statearr_39551_39603 = state_39519__$1;
(statearr_39551_39603[(2)] = inst_39513);

(statearr_39551_39603[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (17))){
var state_39519__$1 = state_39519;
var statearr_39552_39604 = state_39519__$1;
(statearr_39552_39604[(2)] = false);

(statearr_39552_39604[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (3))){
var state_39519__$1 = state_39519;
var statearr_39553_39605 = state_39519__$1;
(statearr_39553_39605[(2)] = false);

(statearr_39553_39605[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (12))){
var inst_39517 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39519__$1,inst_39517);
} else {
if((state_val_39520 === (2))){
var inst_39421 = (state_39519[(8)]);
var inst_39426 = inst_39421.cljs$lang$protocol_mask$partition0$;
var inst_39427 = (inst_39426 & (64));
var inst_39428 = inst_39421.cljs$core$ISeq$;
var inst_39429 = (cljs.core.PROTOCOL_SENTINEL === inst_39428);
var inst_39430 = ((inst_39427) || (inst_39429));
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39430)){
var statearr_39554_39606 = state_39519__$1;
(statearr_39554_39606[(1)] = (5));

} else {
var statearr_39555_39607 = state_39519__$1;
(statearr_39555_39607[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (23))){
var inst_39478 = (state_39519[(14)]);
var inst_39484 = (inst_39478 == null);
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39484)){
var statearr_39556_39608 = state_39519__$1;
(statearr_39556_39608[(1)] = (26));

} else {
var statearr_39557_39609 = state_39519__$1;
(statearr_39557_39609[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (35))){
var inst_39504 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39504)){
var statearr_39558_39610 = state_39519__$1;
(statearr_39558_39610[(1)] = (36));

} else {
var statearr_39559_39611 = state_39519__$1;
(statearr_39559_39611[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (19))){
var inst_39446 = (state_39519[(7)]);
var inst_39466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39446);
var state_39519__$1 = state_39519;
var statearr_39560_39612 = state_39519__$1;
(statearr_39560_39612[(2)] = inst_39466);

(statearr_39560_39612[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (11))){
var inst_39446 = (state_39519[(7)]);
var inst_39450 = (inst_39446 == null);
var inst_39451 = cljs.core.not(inst_39450);
var state_39519__$1 = state_39519;
if(inst_39451){
var statearr_39561_39613 = state_39519__$1;
(statearr_39561_39613[(1)] = (13));

} else {
var statearr_39562_39614 = state_39519__$1;
(statearr_39562_39614[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (9))){
var inst_39421 = (state_39519[(8)]);
var state_39519__$1 = state_39519;
var statearr_39563_39615 = state_39519__$1;
(statearr_39563_39615[(2)] = inst_39421);

(statearr_39563_39615[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (5))){
var state_39519__$1 = state_39519;
var statearr_39564_39616 = state_39519__$1;
(statearr_39564_39616[(2)] = true);

(statearr_39564_39616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (14))){
var state_39519__$1 = state_39519;
var statearr_39565_39617 = state_39519__$1;
(statearr_39565_39617[(2)] = false);

(statearr_39565_39617[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (26))){
var inst_39479 = (state_39519[(9)]);
var inst_39486 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39479);
var state_39519__$1 = state_39519;
var statearr_39566_39618 = state_39519__$1;
(statearr_39566_39618[(2)] = inst_39486);

(statearr_39566_39618[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (16))){
var state_39519__$1 = state_39519;
var statearr_39567_39619 = state_39519__$1;
(statearr_39567_39619[(2)] = true);

(statearr_39567_39619[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (38))){
var inst_39509 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
var statearr_39568_39620 = state_39519__$1;
(statearr_39568_39620[(2)] = inst_39509);

(statearr_39568_39620[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (30))){
var inst_39479 = (state_39519[(9)]);
var inst_39471 = (state_39519[(13)]);
var inst_39470 = (state_39519[(11)]);
var inst_39496 = cljs.core.empty_QMARK_(inst_39470);
var inst_39497 = (inst_39471.cljs$core$IFn$_invoke$arity$1 ? inst_39471.cljs$core$IFn$_invoke$arity$1(inst_39479) : inst_39471.call(null,inst_39479));
var inst_39498 = cljs.core.not(inst_39497);
var inst_39499 = ((inst_39496) && (inst_39498));
var state_39519__$1 = state_39519;
var statearr_39569_39621 = state_39519__$1;
(statearr_39569_39621[(2)] = inst_39499);

(statearr_39569_39621[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (10))){
var inst_39421 = (state_39519[(8)]);
var inst_39442 = (state_39519[(2)]);
var inst_39443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39442,cljs.core.cst$kw$solos);
var inst_39444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39442,cljs.core.cst$kw$mutes);
var inst_39445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39442,cljs.core.cst$kw$reads);
var inst_39446 = inst_39421;
var state_39519__$1 = (function (){var statearr_39570 = state_39519;
(statearr_39570[(16)] = inst_39443);

(statearr_39570[(17)] = inst_39444);

(statearr_39570[(18)] = inst_39445);

(statearr_39570[(7)] = inst_39446);

return statearr_39570;
})();
var statearr_39571_39622 = state_39519__$1;
(statearr_39571_39622[(2)] = null);

(statearr_39571_39622[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (18))){
var inst_39461 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
var statearr_39572_39623 = state_39519__$1;
(statearr_39572_39623[(2)] = inst_39461);

(statearr_39572_39623[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (37))){
var state_39519__$1 = state_39519;
var statearr_39573_39624 = state_39519__$1;
(statearr_39573_39624[(2)] = null);

(statearr_39573_39624[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39520 === (8))){
var inst_39421 = (state_39519[(8)]);
var inst_39439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39421);
var state_39519__$1 = state_39519;
var statearr_39574_39625 = state_39519__$1;
(statearr_39574_39625[(2)] = inst_39439);

(statearr_39574_39625[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___39579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38411__auto__,c__38518__auto___39579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38412__auto__ = null;
var cljs$core$async$mix_$_state_machine__38412__auto____0 = (function (){
var statearr_39575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39575[(0)] = cljs$core$async$mix_$_state_machine__38412__auto__);

(statearr_39575[(1)] = (1));

return statearr_39575;
});
var cljs$core$async$mix_$_state_machine__38412__auto____1 = (function (state_39519){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39519);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39576){if((e39576 instanceof Object)){
var ex__38415__auto__ = e39576;
var statearr_39577_39626 = state_39519;
(statearr_39577_39626[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39519);

return cljs.core.cst$kw$recur;
} else {
throw e39576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39627 = state_39519;
state_39519 = G__39627;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38412__auto__ = function(state_39519){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38412__auto____1.call(this,state_39519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38412__auto____0;
cljs$core$async$mix_$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38412__auto____1;
return cljs$core$async$mix_$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___39579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38520__auto__ = (function (){var statearr_39578 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39578[(6)] = c__38518__auto___39579);

return statearr_39578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___39579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39629 = arguments.length;
switch (G__39629) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39633 = arguments.length;
switch (G__39633) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__39631_SHARP_){
if(cljs.core.truth_((p1__39631_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39631_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39631_SHARP_.call(null,topic)))){
return p1__39631_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39631_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39634 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39635){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39635 = meta39635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39636,meta39635__$1){
var self__ = this;
var _39636__$1 = this;
return (new cljs.core.async.t_cljs$core$async39634(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39635__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39636){
var self__ = this;
var _39636__$1 = this;
return self__.meta39635;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta39635], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39634";

cljs.core.async.t_cljs$core$async39634.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39634");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39634.
 */
cljs.core.async.__GT_t_cljs$core$async39634 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39634(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39635){
return (new cljs.core.async.t_cljs$core$async39634(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39635));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39634(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38518__auto___39754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___39754,mults,ensure_mult,p){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___39754,mults,ensure_mult,p){
return (function (state_39708){
var state_val_39709 = (state_39708[(1)]);
if((state_val_39709 === (7))){
var inst_39704 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39710_39755 = state_39708__$1;
(statearr_39710_39755[(2)] = inst_39704);

(statearr_39710_39755[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (20))){
var state_39708__$1 = state_39708;
var statearr_39711_39756 = state_39708__$1;
(statearr_39711_39756[(2)] = null);

(statearr_39711_39756[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (1))){
var state_39708__$1 = state_39708;
var statearr_39712_39757 = state_39708__$1;
(statearr_39712_39757[(2)] = null);

(statearr_39712_39757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (24))){
var inst_39687 = (state_39708[(7)]);
var inst_39696 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39687);
var state_39708__$1 = state_39708;
var statearr_39713_39758 = state_39708__$1;
(statearr_39713_39758[(2)] = inst_39696);

(statearr_39713_39758[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (4))){
var inst_39639 = (state_39708[(8)]);
var inst_39639__$1 = (state_39708[(2)]);
var inst_39640 = (inst_39639__$1 == null);
var state_39708__$1 = (function (){var statearr_39714 = state_39708;
(statearr_39714[(8)] = inst_39639__$1);

return statearr_39714;
})();
if(cljs.core.truth_(inst_39640)){
var statearr_39715_39759 = state_39708__$1;
(statearr_39715_39759[(1)] = (5));

} else {
var statearr_39716_39760 = state_39708__$1;
(statearr_39716_39760[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (15))){
var inst_39681 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39717_39761 = state_39708__$1;
(statearr_39717_39761[(2)] = inst_39681);

(statearr_39717_39761[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (21))){
var inst_39701 = (state_39708[(2)]);
var state_39708__$1 = (function (){var statearr_39718 = state_39708;
(statearr_39718[(9)] = inst_39701);

return statearr_39718;
})();
var statearr_39719_39762 = state_39708__$1;
(statearr_39719_39762[(2)] = null);

(statearr_39719_39762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (13))){
var inst_39663 = (state_39708[(10)]);
var inst_39665 = cljs.core.chunked_seq_QMARK_(inst_39663);
var state_39708__$1 = state_39708;
if(inst_39665){
var statearr_39720_39763 = state_39708__$1;
(statearr_39720_39763[(1)] = (16));

} else {
var statearr_39721_39764 = state_39708__$1;
(statearr_39721_39764[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (22))){
var inst_39693 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39693)){
var statearr_39722_39765 = state_39708__$1;
(statearr_39722_39765[(1)] = (23));

} else {
var statearr_39723_39766 = state_39708__$1;
(statearr_39723_39766[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (6))){
var inst_39639 = (state_39708[(8)]);
var inst_39687 = (state_39708[(7)]);
var inst_39689 = (state_39708[(11)]);
var inst_39687__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39639) : topic_fn.call(null,inst_39639));
var inst_39688 = cljs.core.deref(mults);
var inst_39689__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39688,inst_39687__$1);
var state_39708__$1 = (function (){var statearr_39724 = state_39708;
(statearr_39724[(7)] = inst_39687__$1);

(statearr_39724[(11)] = inst_39689__$1);

return statearr_39724;
})();
if(cljs.core.truth_(inst_39689__$1)){
var statearr_39725_39767 = state_39708__$1;
(statearr_39725_39767[(1)] = (19));

} else {
var statearr_39726_39768 = state_39708__$1;
(statearr_39726_39768[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (25))){
var inst_39698 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39727_39769 = state_39708__$1;
(statearr_39727_39769[(2)] = inst_39698);

(statearr_39727_39769[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (17))){
var inst_39663 = (state_39708[(10)]);
var inst_39672 = cljs.core.first(inst_39663);
var inst_39673 = cljs.core.async.muxch_STAR_(inst_39672);
var inst_39674 = cljs.core.async.close_BANG_(inst_39673);
var inst_39675 = cljs.core.next(inst_39663);
var inst_39649 = inst_39675;
var inst_39650 = null;
var inst_39651 = (0);
var inst_39652 = (0);
var state_39708__$1 = (function (){var statearr_39728 = state_39708;
(statearr_39728[(12)] = inst_39650);

(statearr_39728[(13)] = inst_39674);

(statearr_39728[(14)] = inst_39652);

(statearr_39728[(15)] = inst_39651);

(statearr_39728[(16)] = inst_39649);

return statearr_39728;
})();
var statearr_39729_39770 = state_39708__$1;
(statearr_39729_39770[(2)] = null);

(statearr_39729_39770[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (3))){
var inst_39706 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39708__$1,inst_39706);
} else {
if((state_val_39709 === (12))){
var inst_39683 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39730_39771 = state_39708__$1;
(statearr_39730_39771[(2)] = inst_39683);

(statearr_39730_39771[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (2))){
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39708__$1,(4),ch);
} else {
if((state_val_39709 === (23))){
var state_39708__$1 = state_39708;
var statearr_39731_39772 = state_39708__$1;
(statearr_39731_39772[(2)] = null);

(statearr_39731_39772[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (19))){
var inst_39639 = (state_39708[(8)]);
var inst_39689 = (state_39708[(11)]);
var inst_39691 = cljs.core.async.muxch_STAR_(inst_39689);
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39708__$1,(22),inst_39691,inst_39639);
} else {
if((state_val_39709 === (11))){
var inst_39649 = (state_39708[(16)]);
var inst_39663 = (state_39708[(10)]);
var inst_39663__$1 = cljs.core.seq(inst_39649);
var state_39708__$1 = (function (){var statearr_39732 = state_39708;
(statearr_39732[(10)] = inst_39663__$1);

return statearr_39732;
})();
if(inst_39663__$1){
var statearr_39733_39773 = state_39708__$1;
(statearr_39733_39773[(1)] = (13));

} else {
var statearr_39734_39774 = state_39708__$1;
(statearr_39734_39774[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (9))){
var inst_39685 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39735_39775 = state_39708__$1;
(statearr_39735_39775[(2)] = inst_39685);

(statearr_39735_39775[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (5))){
var inst_39646 = cljs.core.deref(mults);
var inst_39647 = cljs.core.vals(inst_39646);
var inst_39648 = cljs.core.seq(inst_39647);
var inst_39649 = inst_39648;
var inst_39650 = null;
var inst_39651 = (0);
var inst_39652 = (0);
var state_39708__$1 = (function (){var statearr_39736 = state_39708;
(statearr_39736[(12)] = inst_39650);

(statearr_39736[(14)] = inst_39652);

(statearr_39736[(15)] = inst_39651);

(statearr_39736[(16)] = inst_39649);

return statearr_39736;
})();
var statearr_39737_39776 = state_39708__$1;
(statearr_39737_39776[(2)] = null);

(statearr_39737_39776[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (14))){
var state_39708__$1 = state_39708;
var statearr_39741_39777 = state_39708__$1;
(statearr_39741_39777[(2)] = null);

(statearr_39741_39777[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (16))){
var inst_39663 = (state_39708[(10)]);
var inst_39667 = cljs.core.chunk_first(inst_39663);
var inst_39668 = cljs.core.chunk_rest(inst_39663);
var inst_39669 = cljs.core.count(inst_39667);
var inst_39649 = inst_39668;
var inst_39650 = inst_39667;
var inst_39651 = inst_39669;
var inst_39652 = (0);
var state_39708__$1 = (function (){var statearr_39742 = state_39708;
(statearr_39742[(12)] = inst_39650);

(statearr_39742[(14)] = inst_39652);

(statearr_39742[(15)] = inst_39651);

(statearr_39742[(16)] = inst_39649);

return statearr_39742;
})();
var statearr_39743_39778 = state_39708__$1;
(statearr_39743_39778[(2)] = null);

(statearr_39743_39778[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (10))){
var inst_39650 = (state_39708[(12)]);
var inst_39652 = (state_39708[(14)]);
var inst_39651 = (state_39708[(15)]);
var inst_39649 = (state_39708[(16)]);
var inst_39657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39650,inst_39652);
var inst_39658 = cljs.core.async.muxch_STAR_(inst_39657);
var inst_39659 = cljs.core.async.close_BANG_(inst_39658);
var inst_39660 = (inst_39652 + (1));
var tmp39738 = inst_39650;
var tmp39739 = inst_39651;
var tmp39740 = inst_39649;
var inst_39649__$1 = tmp39740;
var inst_39650__$1 = tmp39738;
var inst_39651__$1 = tmp39739;
var inst_39652__$1 = inst_39660;
var state_39708__$1 = (function (){var statearr_39744 = state_39708;
(statearr_39744[(12)] = inst_39650__$1);

(statearr_39744[(14)] = inst_39652__$1);

(statearr_39744[(15)] = inst_39651__$1);

(statearr_39744[(16)] = inst_39649__$1);

(statearr_39744[(17)] = inst_39659);

return statearr_39744;
})();
var statearr_39745_39779 = state_39708__$1;
(statearr_39745_39779[(2)] = null);

(statearr_39745_39779[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (18))){
var inst_39678 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39746_39780 = state_39708__$1;
(statearr_39746_39780[(2)] = inst_39678);

(statearr_39746_39780[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39709 === (8))){
var inst_39652 = (state_39708[(14)]);
var inst_39651 = (state_39708[(15)]);
var inst_39654 = (inst_39652 < inst_39651);
var inst_39655 = inst_39654;
var state_39708__$1 = state_39708;
if(cljs.core.truth_(inst_39655)){
var statearr_39747_39781 = state_39708__$1;
(statearr_39747_39781[(1)] = (10));

} else {
var statearr_39748_39782 = state_39708__$1;
(statearr_39748_39782[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___39754,mults,ensure_mult,p))
;
return ((function (switch__38411__auto__,c__38518__auto___39754,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_39749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39749[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_39749[(1)] = (1));

return statearr_39749;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_39708){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39708);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39750){if((e39750 instanceof Object)){
var ex__38415__auto__ = e39750;
var statearr_39751_39783 = state_39708;
(statearr_39751_39783[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39708);

return cljs.core.cst$kw$recur;
} else {
throw e39750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39784 = state_39708;
state_39708 = G__39784;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_39708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_39708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___39754,mults,ensure_mult,p))
})();
var state__38520__auto__ = (function (){var statearr_39752 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39752[(6)] = c__38518__auto___39754);

return statearr_39752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___39754,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39786 = arguments.length;
switch (G__39786) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39789 = arguments.length;
switch (G__39789) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39792 = arguments.length;
switch (G__39792) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__38518__auto___39859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___39859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___39859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39831){
var state_val_39832 = (state_39831[(1)]);
if((state_val_39832 === (7))){
var state_39831__$1 = state_39831;
var statearr_39833_39860 = state_39831__$1;
(statearr_39833_39860[(2)] = null);

(statearr_39833_39860[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (1))){
var state_39831__$1 = state_39831;
var statearr_39834_39861 = state_39831__$1;
(statearr_39834_39861[(2)] = null);

(statearr_39834_39861[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (4))){
var inst_39795 = (state_39831[(7)]);
var inst_39797 = (inst_39795 < cnt);
var state_39831__$1 = state_39831;
if(cljs.core.truth_(inst_39797)){
var statearr_39835_39862 = state_39831__$1;
(statearr_39835_39862[(1)] = (6));

} else {
var statearr_39836_39863 = state_39831__$1;
(statearr_39836_39863[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (15))){
var inst_39827 = (state_39831[(2)]);
var state_39831__$1 = state_39831;
var statearr_39837_39864 = state_39831__$1;
(statearr_39837_39864[(2)] = inst_39827);

(statearr_39837_39864[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (13))){
var inst_39820 = cljs.core.async.close_BANG_(out);
var state_39831__$1 = state_39831;
var statearr_39838_39865 = state_39831__$1;
(statearr_39838_39865[(2)] = inst_39820);

(statearr_39838_39865[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (6))){
var state_39831__$1 = state_39831;
var statearr_39839_39866 = state_39831__$1;
(statearr_39839_39866[(2)] = null);

(statearr_39839_39866[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (3))){
var inst_39829 = (state_39831[(2)]);
var state_39831__$1 = state_39831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39831__$1,inst_39829);
} else {
if((state_val_39832 === (12))){
var inst_39817 = (state_39831[(8)]);
var inst_39817__$1 = (state_39831[(2)]);
var inst_39818 = cljs.core.some(cljs.core.nil_QMARK_,inst_39817__$1);
var state_39831__$1 = (function (){var statearr_39840 = state_39831;
(statearr_39840[(8)] = inst_39817__$1);

return statearr_39840;
})();
if(cljs.core.truth_(inst_39818)){
var statearr_39841_39867 = state_39831__$1;
(statearr_39841_39867[(1)] = (13));

} else {
var statearr_39842_39868 = state_39831__$1;
(statearr_39842_39868[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (2))){
var inst_39794 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39795 = (0);
var state_39831__$1 = (function (){var statearr_39843 = state_39831;
(statearr_39843[(9)] = inst_39794);

(statearr_39843[(7)] = inst_39795);

return statearr_39843;
})();
var statearr_39844_39869 = state_39831__$1;
(statearr_39844_39869[(2)] = null);

(statearr_39844_39869[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (11))){
var inst_39795 = (state_39831[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39831,(10),Object,null,(9));
var inst_39804 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39795) : chs__$1.call(null,inst_39795));
var inst_39805 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39795) : done.call(null,inst_39795));
var inst_39806 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39804,inst_39805);
var state_39831__$1 = state_39831;
var statearr_39845_39870 = state_39831__$1;
(statearr_39845_39870[(2)] = inst_39806);


cljs.core.async.impl.ioc_helpers.process_exception(state_39831__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (9))){
var inst_39795 = (state_39831[(7)]);
var inst_39808 = (state_39831[(2)]);
var inst_39809 = (inst_39795 + (1));
var inst_39795__$1 = inst_39809;
var state_39831__$1 = (function (){var statearr_39846 = state_39831;
(statearr_39846[(10)] = inst_39808);

(statearr_39846[(7)] = inst_39795__$1);

return statearr_39846;
})();
var statearr_39847_39871 = state_39831__$1;
(statearr_39847_39871[(2)] = null);

(statearr_39847_39871[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (5))){
var inst_39815 = (state_39831[(2)]);
var state_39831__$1 = (function (){var statearr_39848 = state_39831;
(statearr_39848[(11)] = inst_39815);

return statearr_39848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39831__$1,(12),dchan);
} else {
if((state_val_39832 === (14))){
var inst_39817 = (state_39831[(8)]);
var inst_39822 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39817);
var state_39831__$1 = state_39831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39831__$1,(16),out,inst_39822);
} else {
if((state_val_39832 === (16))){
var inst_39824 = (state_39831[(2)]);
var state_39831__$1 = (function (){var statearr_39849 = state_39831;
(statearr_39849[(12)] = inst_39824);

return statearr_39849;
})();
var statearr_39850_39872 = state_39831__$1;
(statearr_39850_39872[(2)] = null);

(statearr_39850_39872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (10))){
var inst_39799 = (state_39831[(2)]);
var inst_39800 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39831__$1 = (function (){var statearr_39851 = state_39831;
(statearr_39851[(13)] = inst_39799);

return statearr_39851;
})();
var statearr_39852_39873 = state_39831__$1;
(statearr_39852_39873[(2)] = inst_39800);


cljs.core.async.impl.ioc_helpers.process_exception(state_39831__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_39832 === (8))){
var inst_39813 = (state_39831[(2)]);
var state_39831__$1 = state_39831;
var statearr_39853_39874 = state_39831__$1;
(statearr_39853_39874[(2)] = inst_39813);

(statearr_39853_39874[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___39859,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38411__auto__,c__38518__auto___39859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_39854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39854[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_39854[(1)] = (1));

return statearr_39854;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_39831){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39831);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39855){if((e39855 instanceof Object)){
var ex__38415__auto__ = e39855;
var statearr_39856_39875 = state_39831;
(statearr_39856_39875[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39831);

return cljs.core.cst$kw$recur;
} else {
throw e39855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39876 = state_39831;
state_39831 = G__39876;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_39831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_39831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___39859,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38520__auto__ = (function (){var statearr_39857 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39857[(6)] = c__38518__auto___39859);

return statearr_39857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___39859,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39879 = arguments.length;
switch (G__39879) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38518__auto___39933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___39933,out){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___39933,out){
return (function (state_39911){
var state_val_39912 = (state_39911[(1)]);
if((state_val_39912 === (7))){
var inst_39891 = (state_39911[(7)]);
var inst_39890 = (state_39911[(8)]);
var inst_39890__$1 = (state_39911[(2)]);
var inst_39891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39890__$1,(0),null);
var inst_39892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39890__$1,(1),null);
var inst_39893 = (inst_39891__$1 == null);
var state_39911__$1 = (function (){var statearr_39913 = state_39911;
(statearr_39913[(9)] = inst_39892);

(statearr_39913[(7)] = inst_39891__$1);

(statearr_39913[(8)] = inst_39890__$1);

return statearr_39913;
})();
if(cljs.core.truth_(inst_39893)){
var statearr_39914_39934 = state_39911__$1;
(statearr_39914_39934[(1)] = (8));

} else {
var statearr_39915_39935 = state_39911__$1;
(statearr_39915_39935[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39912 === (1))){
var inst_39880 = cljs.core.vec(chs);
var inst_39881 = inst_39880;
var state_39911__$1 = (function (){var statearr_39916 = state_39911;
(statearr_39916[(10)] = inst_39881);

return statearr_39916;
})();
var statearr_39917_39936 = state_39911__$1;
(statearr_39917_39936[(2)] = null);

(statearr_39917_39936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39912 === (4))){
var inst_39881 = (state_39911[(10)]);
var state_39911__$1 = state_39911;
return cljs.core.async.ioc_alts_BANG_(state_39911__$1,(7),inst_39881);
} else {
if((state_val_39912 === (6))){
var inst_39907 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
var statearr_39918_39937 = state_39911__$1;
(statearr_39918_39937[(2)] = inst_39907);

(statearr_39918_39937[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39912 === (3))){
var inst_39909 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39911__$1,inst_39909);
} else {
if((state_val_39912 === (2))){
var inst_39881 = (state_39911[(10)]);
var inst_39883 = cljs.core.count(inst_39881);
var inst_39884 = (inst_39883 > (0));
var state_39911__$1 = state_39911;
if(cljs.core.truth_(inst_39884)){
var statearr_39920_39938 = state_39911__$1;
(statearr_39920_39938[(1)] = (4));

} else {
var statearr_39921_39939 = state_39911__$1;
(statearr_39921_39939[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39912 === (11))){
var inst_39881 = (state_39911[(10)]);
var inst_39900 = (state_39911[(2)]);
var tmp39919 = inst_39881;
var inst_39881__$1 = tmp39919;
var state_39911__$1 = (function (){var statearr_39922 = state_39911;
(statearr_39922[(11)] = inst_39900);

(statearr_39922[(10)] = inst_39881__$1);

return statearr_39922;
})();
var statearr_39923_39940 = state_39911__$1;
(statearr_39923_39940[(2)] = null);

(statearr_39923_39940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39912 === (9))){
var inst_39891 = (state_39911[(7)]);
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39911__$1,(11),out,inst_39891);
} else {
if((state_val_39912 === (5))){
var inst_39905 = cljs.core.async.close_BANG_(out);
var state_39911__$1 = state_39911;
var statearr_39924_39941 = state_39911__$1;
(statearr_39924_39941[(2)] = inst_39905);

(statearr_39924_39941[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39912 === (10))){
var inst_39903 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
var statearr_39925_39942 = state_39911__$1;
(statearr_39925_39942[(2)] = inst_39903);

(statearr_39925_39942[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39912 === (8))){
var inst_39892 = (state_39911[(9)]);
var inst_39891 = (state_39911[(7)]);
var inst_39890 = (state_39911[(8)]);
var inst_39881 = (state_39911[(10)]);
var inst_39895 = (function (){var cs = inst_39881;
var vec__39886 = inst_39890;
var v = inst_39891;
var c = inst_39892;
return ((function (cs,vec__39886,v,c,inst_39892,inst_39891,inst_39890,inst_39881,state_val_39912,c__38518__auto___39933,out){
return (function (p1__39877_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39877_SHARP_);
});
;})(cs,vec__39886,v,c,inst_39892,inst_39891,inst_39890,inst_39881,state_val_39912,c__38518__auto___39933,out))
})();
var inst_39896 = cljs.core.filterv(inst_39895,inst_39881);
var inst_39881__$1 = inst_39896;
var state_39911__$1 = (function (){var statearr_39926 = state_39911;
(statearr_39926[(10)] = inst_39881__$1);

return statearr_39926;
})();
var statearr_39927_39943 = state_39911__$1;
(statearr_39927_39943[(2)] = null);

(statearr_39927_39943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___39933,out))
;
return ((function (switch__38411__auto__,c__38518__auto___39933,out){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_39928 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39928[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_39928[(1)] = (1));

return statearr_39928;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_39911){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39911);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39929){if((e39929 instanceof Object)){
var ex__38415__auto__ = e39929;
var statearr_39930_39944 = state_39911;
(statearr_39930_39944[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39911);

return cljs.core.cst$kw$recur;
} else {
throw e39929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__39945 = state_39911;
state_39911 = G__39945;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_39911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_39911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___39933,out))
})();
var state__38520__auto__ = (function (){var statearr_39931 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39931[(6)] = c__38518__auto___39933);

return statearr_39931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___39933,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39947 = arguments.length;
switch (G__39947) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38518__auto___39992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___39992,out){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___39992,out){
return (function (state_39971){
var state_val_39972 = (state_39971[(1)]);
if((state_val_39972 === (7))){
var inst_39953 = (state_39971[(7)]);
var inst_39953__$1 = (state_39971[(2)]);
var inst_39954 = (inst_39953__$1 == null);
var inst_39955 = cljs.core.not(inst_39954);
var state_39971__$1 = (function (){var statearr_39973 = state_39971;
(statearr_39973[(7)] = inst_39953__$1);

return statearr_39973;
})();
if(inst_39955){
var statearr_39974_39993 = state_39971__$1;
(statearr_39974_39993[(1)] = (8));

} else {
var statearr_39975_39994 = state_39971__$1;
(statearr_39975_39994[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (1))){
var inst_39948 = (0);
var state_39971__$1 = (function (){var statearr_39976 = state_39971;
(statearr_39976[(8)] = inst_39948);

return statearr_39976;
})();
var statearr_39977_39995 = state_39971__$1;
(statearr_39977_39995[(2)] = null);

(statearr_39977_39995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (4))){
var state_39971__$1 = state_39971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39971__$1,(7),ch);
} else {
if((state_val_39972 === (6))){
var inst_39966 = (state_39971[(2)]);
var state_39971__$1 = state_39971;
var statearr_39978_39996 = state_39971__$1;
(statearr_39978_39996[(2)] = inst_39966);

(statearr_39978_39996[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (3))){
var inst_39968 = (state_39971[(2)]);
var inst_39969 = cljs.core.async.close_BANG_(out);
var state_39971__$1 = (function (){var statearr_39979 = state_39971;
(statearr_39979[(9)] = inst_39968);

return statearr_39979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39971__$1,inst_39969);
} else {
if((state_val_39972 === (2))){
var inst_39948 = (state_39971[(8)]);
var inst_39950 = (inst_39948 < n);
var state_39971__$1 = state_39971;
if(cljs.core.truth_(inst_39950)){
var statearr_39980_39997 = state_39971__$1;
(statearr_39980_39997[(1)] = (4));

} else {
var statearr_39981_39998 = state_39971__$1;
(statearr_39981_39998[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (11))){
var inst_39948 = (state_39971[(8)]);
var inst_39958 = (state_39971[(2)]);
var inst_39959 = (inst_39948 + (1));
var inst_39948__$1 = inst_39959;
var state_39971__$1 = (function (){var statearr_39982 = state_39971;
(statearr_39982[(8)] = inst_39948__$1);

(statearr_39982[(10)] = inst_39958);

return statearr_39982;
})();
var statearr_39983_39999 = state_39971__$1;
(statearr_39983_39999[(2)] = null);

(statearr_39983_39999[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (9))){
var state_39971__$1 = state_39971;
var statearr_39984_40000 = state_39971__$1;
(statearr_39984_40000[(2)] = null);

(statearr_39984_40000[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (5))){
var state_39971__$1 = state_39971;
var statearr_39985_40001 = state_39971__$1;
(statearr_39985_40001[(2)] = null);

(statearr_39985_40001[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (10))){
var inst_39963 = (state_39971[(2)]);
var state_39971__$1 = state_39971;
var statearr_39986_40002 = state_39971__$1;
(statearr_39986_40002[(2)] = inst_39963);

(statearr_39986_40002[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39972 === (8))){
var inst_39953 = (state_39971[(7)]);
var state_39971__$1 = state_39971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39971__$1,(11),out,inst_39953);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___39992,out))
;
return ((function (switch__38411__auto__,c__38518__auto___39992,out){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_39987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39987[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_39987[(1)] = (1));

return statearr_39987;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_39971){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_39971);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e39988){if((e39988 instanceof Object)){
var ex__38415__auto__ = e39988;
var statearr_39989_40003 = state_39971;
(statearr_39989_40003[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39971);

return cljs.core.cst$kw$recur;
} else {
throw e39988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__40004 = state_39971;
state_39971 = G__40004;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_39971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_39971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___39992,out))
})();
var state__38520__auto__ = (function (){var statearr_39990 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_39990[(6)] = c__38518__auto___39992);

return statearr_39990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___39992,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40006 = (function (f,ch,meta40007){
this.f = f;
this.ch = ch;
this.meta40007 = meta40007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40008,meta40007__$1){
var self__ = this;
var _40008__$1 = this;
return (new cljs.core.async.t_cljs$core$async40006(self__.f,self__.ch,meta40007__$1));
});

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40008){
var self__ = this;
var _40008__$1 = this;
return self__.meta40007;
});

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40009 = (function (f,ch,meta40007,_,fn1,meta40010){
this.f = f;
this.ch = ch;
this.meta40007 = meta40007;
this._ = _;
this.fn1 = fn1;
this.meta40010 = meta40010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40011,meta40010__$1){
var self__ = this;
var _40011__$1 = this;
return (new cljs.core.async.t_cljs$core$async40009(self__.f,self__.ch,self__.meta40007,self__._,self__.fn1,meta40010__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40011){
var self__ = this;
var _40011__$1 = this;
return self__.meta40010;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40005_SHARP_){
var G__40012 = (((p1__40005_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40005_SHARP_) : self__.f.call(null,p1__40005_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40012) : f1.call(null,G__40012));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40009.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40007,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async40006], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta40010], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40009";

cljs.core.async.t_cljs$core$async40009.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40009");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40009.
 */
cljs.core.async.__GT_t_cljs$core$async40009 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40009(f__$1,ch__$1,meta40007__$1,___$2,fn1__$1,meta40010){
return (new cljs.core.async.t_cljs$core$async40009(f__$1,ch__$1,meta40007__$1,___$2,fn1__$1,meta40010));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40009(self__.f,self__.ch,self__.meta40007,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40013 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40013) : self__.f.call(null,G__40013));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40007], null);
});

cljs.core.async.t_cljs$core$async40006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40006";

cljs.core.async.t_cljs$core$async40006.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40006");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40006.
 */
cljs.core.async.__GT_t_cljs$core$async40006 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40006(f__$1,ch__$1,meta40007){
return (new cljs.core.async.t_cljs$core$async40006(f__$1,ch__$1,meta40007));
});

}

return (new cljs.core.async.t_cljs$core$async40006(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40014 = (function (f,ch,meta40015){
this.f = f;
this.ch = ch;
this.meta40015 = meta40015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40016,meta40015__$1){
var self__ = this;
var _40016__$1 = this;
return (new cljs.core.async.t_cljs$core$async40014(self__.f,self__.ch,meta40015__$1));
});

cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40016){
var self__ = this;
var _40016__$1 = this;
return self__.meta40015;
});

cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async40014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40015], null);
});

cljs.core.async.t_cljs$core$async40014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40014";

cljs.core.async.t_cljs$core$async40014.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40014");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40014.
 */
cljs.core.async.__GT_t_cljs$core$async40014 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40014(f__$1,ch__$1,meta40015){
return (new cljs.core.async.t_cljs$core$async40014(f__$1,ch__$1,meta40015));
});

}

return (new cljs.core.async.t_cljs$core$async40014(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40017 = (function (p,ch,meta40018){
this.p = p;
this.ch = ch;
this.meta40018 = meta40018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40019,meta40018__$1){
var self__ = this;
var _40019__$1 = this;
return (new cljs.core.async.t_cljs$core$async40017(self__.p,self__.ch,meta40018__$1));
});

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40019){
var self__ = this;
var _40019__$1 = this;
return self__.meta40018;
});

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40018], null);
});

cljs.core.async.t_cljs$core$async40017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40017";

cljs.core.async.t_cljs$core$async40017.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40017");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40017.
 */
cljs.core.async.__GT_t_cljs$core$async40017 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40017(p__$1,ch__$1,meta40018){
return (new cljs.core.async.t_cljs$core$async40017(p__$1,ch__$1,meta40018));
});

}

return (new cljs.core.async.t_cljs$core$async40017(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40021 = arguments.length;
switch (G__40021) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38518__auto___40061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___40061,out){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___40061,out){
return (function (state_40042){
var state_val_40043 = (state_40042[(1)]);
if((state_val_40043 === (7))){
var inst_40038 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
var statearr_40044_40062 = state_40042__$1;
(statearr_40044_40062[(2)] = inst_40038);

(statearr_40044_40062[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (1))){
var state_40042__$1 = state_40042;
var statearr_40045_40063 = state_40042__$1;
(statearr_40045_40063[(2)] = null);

(statearr_40045_40063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (4))){
var inst_40024 = (state_40042[(7)]);
var inst_40024__$1 = (state_40042[(2)]);
var inst_40025 = (inst_40024__$1 == null);
var state_40042__$1 = (function (){var statearr_40046 = state_40042;
(statearr_40046[(7)] = inst_40024__$1);

return statearr_40046;
})();
if(cljs.core.truth_(inst_40025)){
var statearr_40047_40064 = state_40042__$1;
(statearr_40047_40064[(1)] = (5));

} else {
var statearr_40048_40065 = state_40042__$1;
(statearr_40048_40065[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (6))){
var inst_40024 = (state_40042[(7)]);
var inst_40029 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40024) : p.call(null,inst_40024));
var state_40042__$1 = state_40042;
if(cljs.core.truth_(inst_40029)){
var statearr_40049_40066 = state_40042__$1;
(statearr_40049_40066[(1)] = (8));

} else {
var statearr_40050_40067 = state_40042__$1;
(statearr_40050_40067[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (3))){
var inst_40040 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40042__$1,inst_40040);
} else {
if((state_val_40043 === (2))){
var state_40042__$1 = state_40042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40042__$1,(4),ch);
} else {
if((state_val_40043 === (11))){
var inst_40032 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
var statearr_40051_40068 = state_40042__$1;
(statearr_40051_40068[(2)] = inst_40032);

(statearr_40051_40068[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (9))){
var state_40042__$1 = state_40042;
var statearr_40052_40069 = state_40042__$1;
(statearr_40052_40069[(2)] = null);

(statearr_40052_40069[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (5))){
var inst_40027 = cljs.core.async.close_BANG_(out);
var state_40042__$1 = state_40042;
var statearr_40053_40070 = state_40042__$1;
(statearr_40053_40070[(2)] = inst_40027);

(statearr_40053_40070[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (10))){
var inst_40035 = (state_40042[(2)]);
var state_40042__$1 = (function (){var statearr_40054 = state_40042;
(statearr_40054[(8)] = inst_40035);

return statearr_40054;
})();
var statearr_40055_40071 = state_40042__$1;
(statearr_40055_40071[(2)] = null);

(statearr_40055_40071[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40043 === (8))){
var inst_40024 = (state_40042[(7)]);
var state_40042__$1 = state_40042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40042__$1,(11),out,inst_40024);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___40061,out))
;
return ((function (switch__38411__auto__,c__38518__auto___40061,out){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_40056 = [null,null,null,null,null,null,null,null,null];
(statearr_40056[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_40056[(1)] = (1));

return statearr_40056;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_40042){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_40042);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e40057){if((e40057 instanceof Object)){
var ex__38415__auto__ = e40057;
var statearr_40058_40072 = state_40042;
(statearr_40058_40072[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40042);

return cljs.core.cst$kw$recur;
} else {
throw e40057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__40073 = state_40042;
state_40042 = G__40073;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_40042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_40042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___40061,out))
})();
var state__38520__auto__ = (function (){var statearr_40059 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_40059[(6)] = c__38518__auto___40061);

return statearr_40059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___40061,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40075 = arguments.length;
switch (G__40075) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__){
return (function (state_40138){
var state_val_40139 = (state_40138[(1)]);
if((state_val_40139 === (7))){
var inst_40134 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
var statearr_40140_40178 = state_40138__$1;
(statearr_40140_40178[(2)] = inst_40134);

(statearr_40140_40178[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (20))){
var inst_40104 = (state_40138[(7)]);
var inst_40115 = (state_40138[(2)]);
var inst_40116 = cljs.core.next(inst_40104);
var inst_40090 = inst_40116;
var inst_40091 = null;
var inst_40092 = (0);
var inst_40093 = (0);
var state_40138__$1 = (function (){var statearr_40141 = state_40138;
(statearr_40141[(8)] = inst_40090);

(statearr_40141[(9)] = inst_40092);

(statearr_40141[(10)] = inst_40093);

(statearr_40141[(11)] = inst_40091);

(statearr_40141[(12)] = inst_40115);

return statearr_40141;
})();
var statearr_40142_40179 = state_40138__$1;
(statearr_40142_40179[(2)] = null);

(statearr_40142_40179[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (1))){
var state_40138__$1 = state_40138;
var statearr_40143_40180 = state_40138__$1;
(statearr_40143_40180[(2)] = null);

(statearr_40143_40180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (4))){
var inst_40079 = (state_40138[(13)]);
var inst_40079__$1 = (state_40138[(2)]);
var inst_40080 = (inst_40079__$1 == null);
var state_40138__$1 = (function (){var statearr_40144 = state_40138;
(statearr_40144[(13)] = inst_40079__$1);

return statearr_40144;
})();
if(cljs.core.truth_(inst_40080)){
var statearr_40145_40181 = state_40138__$1;
(statearr_40145_40181[(1)] = (5));

} else {
var statearr_40146_40182 = state_40138__$1;
(statearr_40146_40182[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (15))){
var state_40138__$1 = state_40138;
var statearr_40150_40183 = state_40138__$1;
(statearr_40150_40183[(2)] = null);

(statearr_40150_40183[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (21))){
var state_40138__$1 = state_40138;
var statearr_40151_40184 = state_40138__$1;
(statearr_40151_40184[(2)] = null);

(statearr_40151_40184[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (13))){
var inst_40090 = (state_40138[(8)]);
var inst_40092 = (state_40138[(9)]);
var inst_40093 = (state_40138[(10)]);
var inst_40091 = (state_40138[(11)]);
var inst_40100 = (state_40138[(2)]);
var inst_40101 = (inst_40093 + (1));
var tmp40147 = inst_40090;
var tmp40148 = inst_40092;
var tmp40149 = inst_40091;
var inst_40090__$1 = tmp40147;
var inst_40091__$1 = tmp40149;
var inst_40092__$1 = tmp40148;
var inst_40093__$1 = inst_40101;
var state_40138__$1 = (function (){var statearr_40152 = state_40138;
(statearr_40152[(8)] = inst_40090__$1);

(statearr_40152[(9)] = inst_40092__$1);

(statearr_40152[(10)] = inst_40093__$1);

(statearr_40152[(11)] = inst_40091__$1);

(statearr_40152[(14)] = inst_40100);

return statearr_40152;
})();
var statearr_40153_40185 = state_40138__$1;
(statearr_40153_40185[(2)] = null);

(statearr_40153_40185[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (22))){
var state_40138__$1 = state_40138;
var statearr_40154_40186 = state_40138__$1;
(statearr_40154_40186[(2)] = null);

(statearr_40154_40186[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (6))){
var inst_40079 = (state_40138[(13)]);
var inst_40088 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40079) : f.call(null,inst_40079));
var inst_40089 = cljs.core.seq(inst_40088);
var inst_40090 = inst_40089;
var inst_40091 = null;
var inst_40092 = (0);
var inst_40093 = (0);
var state_40138__$1 = (function (){var statearr_40155 = state_40138;
(statearr_40155[(8)] = inst_40090);

(statearr_40155[(9)] = inst_40092);

(statearr_40155[(10)] = inst_40093);

(statearr_40155[(11)] = inst_40091);

return statearr_40155;
})();
var statearr_40156_40187 = state_40138__$1;
(statearr_40156_40187[(2)] = null);

(statearr_40156_40187[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (17))){
var inst_40104 = (state_40138[(7)]);
var inst_40108 = cljs.core.chunk_first(inst_40104);
var inst_40109 = cljs.core.chunk_rest(inst_40104);
var inst_40110 = cljs.core.count(inst_40108);
var inst_40090 = inst_40109;
var inst_40091 = inst_40108;
var inst_40092 = inst_40110;
var inst_40093 = (0);
var state_40138__$1 = (function (){var statearr_40157 = state_40138;
(statearr_40157[(8)] = inst_40090);

(statearr_40157[(9)] = inst_40092);

(statearr_40157[(10)] = inst_40093);

(statearr_40157[(11)] = inst_40091);

return statearr_40157;
})();
var statearr_40158_40188 = state_40138__$1;
(statearr_40158_40188[(2)] = null);

(statearr_40158_40188[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (3))){
var inst_40136 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40138__$1,inst_40136);
} else {
if((state_val_40139 === (12))){
var inst_40124 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
var statearr_40159_40189 = state_40138__$1;
(statearr_40159_40189[(2)] = inst_40124);

(statearr_40159_40189[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (2))){
var state_40138__$1 = state_40138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40138__$1,(4),in$);
} else {
if((state_val_40139 === (23))){
var inst_40132 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
var statearr_40160_40190 = state_40138__$1;
(statearr_40160_40190[(2)] = inst_40132);

(statearr_40160_40190[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (19))){
var inst_40119 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
var statearr_40161_40191 = state_40138__$1;
(statearr_40161_40191[(2)] = inst_40119);

(statearr_40161_40191[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (11))){
var inst_40090 = (state_40138[(8)]);
var inst_40104 = (state_40138[(7)]);
var inst_40104__$1 = cljs.core.seq(inst_40090);
var state_40138__$1 = (function (){var statearr_40162 = state_40138;
(statearr_40162[(7)] = inst_40104__$1);

return statearr_40162;
})();
if(inst_40104__$1){
var statearr_40163_40192 = state_40138__$1;
(statearr_40163_40192[(1)] = (14));

} else {
var statearr_40164_40193 = state_40138__$1;
(statearr_40164_40193[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (9))){
var inst_40126 = (state_40138[(2)]);
var inst_40127 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40138__$1 = (function (){var statearr_40165 = state_40138;
(statearr_40165[(15)] = inst_40126);

return statearr_40165;
})();
if(cljs.core.truth_(inst_40127)){
var statearr_40166_40194 = state_40138__$1;
(statearr_40166_40194[(1)] = (21));

} else {
var statearr_40167_40195 = state_40138__$1;
(statearr_40167_40195[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (5))){
var inst_40082 = cljs.core.async.close_BANG_(out);
var state_40138__$1 = state_40138;
var statearr_40168_40196 = state_40138__$1;
(statearr_40168_40196[(2)] = inst_40082);

(statearr_40168_40196[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (14))){
var inst_40104 = (state_40138[(7)]);
var inst_40106 = cljs.core.chunked_seq_QMARK_(inst_40104);
var state_40138__$1 = state_40138;
if(inst_40106){
var statearr_40169_40197 = state_40138__$1;
(statearr_40169_40197[(1)] = (17));

} else {
var statearr_40170_40198 = state_40138__$1;
(statearr_40170_40198[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (16))){
var inst_40122 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
var statearr_40171_40199 = state_40138__$1;
(statearr_40171_40199[(2)] = inst_40122);

(statearr_40171_40199[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40139 === (10))){
var inst_40093 = (state_40138[(10)]);
var inst_40091 = (state_40138[(11)]);
var inst_40098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40091,inst_40093);
var state_40138__$1 = state_40138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40138__$1,(13),out,inst_40098);
} else {
if((state_val_40139 === (18))){
var inst_40104 = (state_40138[(7)]);
var inst_40113 = cljs.core.first(inst_40104);
var state_40138__$1 = state_40138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40138__$1,(20),out,inst_40113);
} else {
if((state_val_40139 === (8))){
var inst_40092 = (state_40138[(9)]);
var inst_40093 = (state_40138[(10)]);
var inst_40095 = (inst_40093 < inst_40092);
var inst_40096 = inst_40095;
var state_40138__$1 = state_40138;
if(cljs.core.truth_(inst_40096)){
var statearr_40172_40200 = state_40138__$1;
(statearr_40172_40200[(1)] = (10));

} else {
var statearr_40173_40201 = state_40138__$1;
(statearr_40173_40201[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto__))
;
return ((function (switch__38411__auto__,c__38518__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38412__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38412__auto____0 = (function (){
var statearr_40174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40174[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38412__auto__);

(statearr_40174[(1)] = (1));

return statearr_40174;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38412__auto____1 = (function (state_40138){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_40138);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e40175){if((e40175 instanceof Object)){
var ex__38415__auto__ = e40175;
var statearr_40176_40202 = state_40138;
(statearr_40176_40202[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40138);

return cljs.core.cst$kw$recur;
} else {
throw e40175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__40203 = state_40138;
state_40138 = G__40203;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38412__auto__ = function(state_40138){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38412__auto____1.call(this,state_40138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38412__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38412__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__))
})();
var state__38520__auto__ = (function (){var statearr_40177 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_40177[(6)] = c__38518__auto__);

return statearr_40177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__))
);

return c__38518__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40205 = arguments.length;
switch (G__40205) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40208 = arguments.length;
switch (G__40208) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40211 = arguments.length;
switch (G__40211) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38518__auto___40258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___40258,out){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___40258,out){
return (function (state_40235){
var state_val_40236 = (state_40235[(1)]);
if((state_val_40236 === (7))){
var inst_40230 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40237_40259 = state_40235__$1;
(statearr_40237_40259[(2)] = inst_40230);

(statearr_40237_40259[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40236 === (1))){
var inst_40212 = null;
var state_40235__$1 = (function (){var statearr_40238 = state_40235;
(statearr_40238[(7)] = inst_40212);

return statearr_40238;
})();
var statearr_40239_40260 = state_40235__$1;
(statearr_40239_40260[(2)] = null);

(statearr_40239_40260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40236 === (4))){
var inst_40215 = (state_40235[(8)]);
var inst_40215__$1 = (state_40235[(2)]);
var inst_40216 = (inst_40215__$1 == null);
var inst_40217 = cljs.core.not(inst_40216);
var state_40235__$1 = (function (){var statearr_40240 = state_40235;
(statearr_40240[(8)] = inst_40215__$1);

return statearr_40240;
})();
if(inst_40217){
var statearr_40241_40261 = state_40235__$1;
(statearr_40241_40261[(1)] = (5));

} else {
var statearr_40242_40262 = state_40235__$1;
(statearr_40242_40262[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40236 === (6))){
var state_40235__$1 = state_40235;
var statearr_40243_40263 = state_40235__$1;
(statearr_40243_40263[(2)] = null);

(statearr_40243_40263[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40236 === (3))){
var inst_40232 = (state_40235[(2)]);
var inst_40233 = cljs.core.async.close_BANG_(out);
var state_40235__$1 = (function (){var statearr_40244 = state_40235;
(statearr_40244[(9)] = inst_40232);

return statearr_40244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40235__$1,inst_40233);
} else {
if((state_val_40236 === (2))){
var state_40235__$1 = state_40235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40235__$1,(4),ch);
} else {
if((state_val_40236 === (11))){
var inst_40215 = (state_40235[(8)]);
var inst_40224 = (state_40235[(2)]);
var inst_40212 = inst_40215;
var state_40235__$1 = (function (){var statearr_40245 = state_40235;
(statearr_40245[(10)] = inst_40224);

(statearr_40245[(7)] = inst_40212);

return statearr_40245;
})();
var statearr_40246_40264 = state_40235__$1;
(statearr_40246_40264[(2)] = null);

(statearr_40246_40264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40236 === (9))){
var inst_40215 = (state_40235[(8)]);
var state_40235__$1 = state_40235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40235__$1,(11),out,inst_40215);
} else {
if((state_val_40236 === (5))){
var inst_40215 = (state_40235[(8)]);
var inst_40212 = (state_40235[(7)]);
var inst_40219 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40215,inst_40212);
var state_40235__$1 = state_40235;
if(inst_40219){
var statearr_40248_40265 = state_40235__$1;
(statearr_40248_40265[(1)] = (8));

} else {
var statearr_40249_40266 = state_40235__$1;
(statearr_40249_40266[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40236 === (10))){
var inst_40227 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40250_40267 = state_40235__$1;
(statearr_40250_40267[(2)] = inst_40227);

(statearr_40250_40267[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40236 === (8))){
var inst_40212 = (state_40235[(7)]);
var tmp40247 = inst_40212;
var inst_40212__$1 = tmp40247;
var state_40235__$1 = (function (){var statearr_40251 = state_40235;
(statearr_40251[(7)] = inst_40212__$1);

return statearr_40251;
})();
var statearr_40252_40268 = state_40235__$1;
(statearr_40252_40268[(2)] = null);

(statearr_40252_40268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___40258,out))
;
return ((function (switch__38411__auto__,c__38518__auto___40258,out){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_40253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40253[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_40253[(1)] = (1));

return statearr_40253;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_40235){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_40235);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e40254){if((e40254 instanceof Object)){
var ex__38415__auto__ = e40254;
var statearr_40255_40269 = state_40235;
(statearr_40255_40269[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40235);

return cljs.core.cst$kw$recur;
} else {
throw e40254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__40270 = state_40235;
state_40235 = G__40270;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_40235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_40235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___40258,out))
})();
var state__38520__auto__ = (function (){var statearr_40256 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_40256[(6)] = c__38518__auto___40258);

return statearr_40256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___40258,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40272 = arguments.length;
switch (G__40272) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38518__auto___40338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___40338,out){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___40338,out){
return (function (state_40310){
var state_val_40311 = (state_40310[(1)]);
if((state_val_40311 === (7))){
var inst_40306 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40312_40339 = state_40310__$1;
(statearr_40312_40339[(2)] = inst_40306);

(statearr_40312_40339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (1))){
var inst_40273 = (new Array(n));
var inst_40274 = inst_40273;
var inst_40275 = (0);
var state_40310__$1 = (function (){var statearr_40313 = state_40310;
(statearr_40313[(7)] = inst_40275);

(statearr_40313[(8)] = inst_40274);

return statearr_40313;
})();
var statearr_40314_40340 = state_40310__$1;
(statearr_40314_40340[(2)] = null);

(statearr_40314_40340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (4))){
var inst_40278 = (state_40310[(9)]);
var inst_40278__$1 = (state_40310[(2)]);
var inst_40279 = (inst_40278__$1 == null);
var inst_40280 = cljs.core.not(inst_40279);
var state_40310__$1 = (function (){var statearr_40315 = state_40310;
(statearr_40315[(9)] = inst_40278__$1);

return statearr_40315;
})();
if(inst_40280){
var statearr_40316_40341 = state_40310__$1;
(statearr_40316_40341[(1)] = (5));

} else {
var statearr_40317_40342 = state_40310__$1;
(statearr_40317_40342[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (15))){
var inst_40300 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40318_40343 = state_40310__$1;
(statearr_40318_40343[(2)] = inst_40300);

(statearr_40318_40343[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (13))){
var state_40310__$1 = state_40310;
var statearr_40319_40344 = state_40310__$1;
(statearr_40319_40344[(2)] = null);

(statearr_40319_40344[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (6))){
var inst_40275 = (state_40310[(7)]);
var inst_40296 = (inst_40275 > (0));
var state_40310__$1 = state_40310;
if(cljs.core.truth_(inst_40296)){
var statearr_40320_40345 = state_40310__$1;
(statearr_40320_40345[(1)] = (12));

} else {
var statearr_40321_40346 = state_40310__$1;
(statearr_40321_40346[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (3))){
var inst_40308 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40310__$1,inst_40308);
} else {
if((state_val_40311 === (12))){
var inst_40274 = (state_40310[(8)]);
var inst_40298 = cljs.core.vec(inst_40274);
var state_40310__$1 = state_40310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40310__$1,(15),out,inst_40298);
} else {
if((state_val_40311 === (2))){
var state_40310__$1 = state_40310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40310__$1,(4),ch);
} else {
if((state_val_40311 === (11))){
var inst_40290 = (state_40310[(2)]);
var inst_40291 = (new Array(n));
var inst_40274 = inst_40291;
var inst_40275 = (0);
var state_40310__$1 = (function (){var statearr_40322 = state_40310;
(statearr_40322[(10)] = inst_40290);

(statearr_40322[(7)] = inst_40275);

(statearr_40322[(8)] = inst_40274);

return statearr_40322;
})();
var statearr_40323_40347 = state_40310__$1;
(statearr_40323_40347[(2)] = null);

(statearr_40323_40347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (9))){
var inst_40274 = (state_40310[(8)]);
var inst_40288 = cljs.core.vec(inst_40274);
var state_40310__$1 = state_40310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40310__$1,(11),out,inst_40288);
} else {
if((state_val_40311 === (5))){
var inst_40283 = (state_40310[(11)]);
var inst_40275 = (state_40310[(7)]);
var inst_40278 = (state_40310[(9)]);
var inst_40274 = (state_40310[(8)]);
var inst_40282 = (inst_40274[inst_40275] = inst_40278);
var inst_40283__$1 = (inst_40275 + (1));
var inst_40284 = (inst_40283__$1 < n);
var state_40310__$1 = (function (){var statearr_40324 = state_40310;
(statearr_40324[(12)] = inst_40282);

(statearr_40324[(11)] = inst_40283__$1);

return statearr_40324;
})();
if(cljs.core.truth_(inst_40284)){
var statearr_40325_40348 = state_40310__$1;
(statearr_40325_40348[(1)] = (8));

} else {
var statearr_40326_40349 = state_40310__$1;
(statearr_40326_40349[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (14))){
var inst_40303 = (state_40310[(2)]);
var inst_40304 = cljs.core.async.close_BANG_(out);
var state_40310__$1 = (function (){var statearr_40328 = state_40310;
(statearr_40328[(13)] = inst_40303);

return statearr_40328;
})();
var statearr_40329_40350 = state_40310__$1;
(statearr_40329_40350[(2)] = inst_40304);

(statearr_40329_40350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (10))){
var inst_40294 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40330_40351 = state_40310__$1;
(statearr_40330_40351[(2)] = inst_40294);

(statearr_40330_40351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40311 === (8))){
var inst_40283 = (state_40310[(11)]);
var inst_40274 = (state_40310[(8)]);
var tmp40327 = inst_40274;
var inst_40274__$1 = tmp40327;
var inst_40275 = inst_40283;
var state_40310__$1 = (function (){var statearr_40331 = state_40310;
(statearr_40331[(7)] = inst_40275);

(statearr_40331[(8)] = inst_40274__$1);

return statearr_40331;
})();
var statearr_40332_40352 = state_40310__$1;
(statearr_40332_40352[(2)] = null);

(statearr_40332_40352[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___40338,out))
;
return ((function (switch__38411__auto__,c__38518__auto___40338,out){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_40333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40333[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_40333[(1)] = (1));

return statearr_40333;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_40310){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_40310);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e40334){if((e40334 instanceof Object)){
var ex__38415__auto__ = e40334;
var statearr_40335_40353 = state_40310;
(statearr_40335_40353[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40310);

return cljs.core.cst$kw$recur;
} else {
throw e40334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__40354 = state_40310;
state_40310 = G__40354;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_40310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_40310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___40338,out))
})();
var state__38520__auto__ = (function (){var statearr_40336 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_40336[(6)] = c__38518__auto___40338);

return statearr_40336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___40338,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40356 = arguments.length;
switch (G__40356) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38518__auto___40426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___40426,out){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___40426,out){
return (function (state_40398){
var state_val_40399 = (state_40398[(1)]);
if((state_val_40399 === (7))){
var inst_40394 = (state_40398[(2)]);
var state_40398__$1 = state_40398;
var statearr_40400_40427 = state_40398__$1;
(statearr_40400_40427[(2)] = inst_40394);

(statearr_40400_40427[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (1))){
var inst_40357 = [];
var inst_40358 = inst_40357;
var inst_40359 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_40398__$1 = (function (){var statearr_40401 = state_40398;
(statearr_40401[(7)] = inst_40358);

(statearr_40401[(8)] = inst_40359);

return statearr_40401;
})();
var statearr_40402_40428 = state_40398__$1;
(statearr_40402_40428[(2)] = null);

(statearr_40402_40428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (4))){
var inst_40362 = (state_40398[(9)]);
var inst_40362__$1 = (state_40398[(2)]);
var inst_40363 = (inst_40362__$1 == null);
var inst_40364 = cljs.core.not(inst_40363);
var state_40398__$1 = (function (){var statearr_40403 = state_40398;
(statearr_40403[(9)] = inst_40362__$1);

return statearr_40403;
})();
if(inst_40364){
var statearr_40404_40429 = state_40398__$1;
(statearr_40404_40429[(1)] = (5));

} else {
var statearr_40405_40430 = state_40398__$1;
(statearr_40405_40430[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (15))){
var inst_40388 = (state_40398[(2)]);
var state_40398__$1 = state_40398;
var statearr_40406_40431 = state_40398__$1;
(statearr_40406_40431[(2)] = inst_40388);

(statearr_40406_40431[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (13))){
var state_40398__$1 = state_40398;
var statearr_40407_40432 = state_40398__$1;
(statearr_40407_40432[(2)] = null);

(statearr_40407_40432[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (6))){
var inst_40358 = (state_40398[(7)]);
var inst_40383 = inst_40358.length;
var inst_40384 = (inst_40383 > (0));
var state_40398__$1 = state_40398;
if(cljs.core.truth_(inst_40384)){
var statearr_40408_40433 = state_40398__$1;
(statearr_40408_40433[(1)] = (12));

} else {
var statearr_40409_40434 = state_40398__$1;
(statearr_40409_40434[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (3))){
var inst_40396 = (state_40398[(2)]);
var state_40398__$1 = state_40398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40398__$1,inst_40396);
} else {
if((state_val_40399 === (12))){
var inst_40358 = (state_40398[(7)]);
var inst_40386 = cljs.core.vec(inst_40358);
var state_40398__$1 = state_40398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40398__$1,(15),out,inst_40386);
} else {
if((state_val_40399 === (2))){
var state_40398__$1 = state_40398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40398__$1,(4),ch);
} else {
if((state_val_40399 === (11))){
var inst_40366 = (state_40398[(10)]);
var inst_40362 = (state_40398[(9)]);
var inst_40376 = (state_40398[(2)]);
var inst_40377 = [];
var inst_40378 = inst_40377.push(inst_40362);
var inst_40358 = inst_40377;
var inst_40359 = inst_40366;
var state_40398__$1 = (function (){var statearr_40410 = state_40398;
(statearr_40410[(7)] = inst_40358);

(statearr_40410[(11)] = inst_40376);

(statearr_40410[(12)] = inst_40378);

(statearr_40410[(8)] = inst_40359);

return statearr_40410;
})();
var statearr_40411_40435 = state_40398__$1;
(statearr_40411_40435[(2)] = null);

(statearr_40411_40435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (9))){
var inst_40358 = (state_40398[(7)]);
var inst_40374 = cljs.core.vec(inst_40358);
var state_40398__$1 = state_40398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40398__$1,(11),out,inst_40374);
} else {
if((state_val_40399 === (5))){
var inst_40366 = (state_40398[(10)]);
var inst_40359 = (state_40398[(8)]);
var inst_40362 = (state_40398[(9)]);
var inst_40366__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40362) : f.call(null,inst_40362));
var inst_40367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40366__$1,inst_40359);
var inst_40368 = cljs.core.keyword_identical_QMARK_(inst_40359,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_40369 = ((inst_40367) || (inst_40368));
var state_40398__$1 = (function (){var statearr_40412 = state_40398;
(statearr_40412[(10)] = inst_40366__$1);

return statearr_40412;
})();
if(cljs.core.truth_(inst_40369)){
var statearr_40413_40436 = state_40398__$1;
(statearr_40413_40436[(1)] = (8));

} else {
var statearr_40414_40437 = state_40398__$1;
(statearr_40414_40437[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (14))){
var inst_40391 = (state_40398[(2)]);
var inst_40392 = cljs.core.async.close_BANG_(out);
var state_40398__$1 = (function (){var statearr_40416 = state_40398;
(statearr_40416[(13)] = inst_40391);

return statearr_40416;
})();
var statearr_40417_40438 = state_40398__$1;
(statearr_40417_40438[(2)] = inst_40392);

(statearr_40417_40438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (10))){
var inst_40381 = (state_40398[(2)]);
var state_40398__$1 = state_40398;
var statearr_40418_40439 = state_40398__$1;
(statearr_40418_40439[(2)] = inst_40381);

(statearr_40418_40439[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40399 === (8))){
var inst_40358 = (state_40398[(7)]);
var inst_40366 = (state_40398[(10)]);
var inst_40362 = (state_40398[(9)]);
var inst_40371 = inst_40358.push(inst_40362);
var tmp40415 = inst_40358;
var inst_40358__$1 = tmp40415;
var inst_40359 = inst_40366;
var state_40398__$1 = (function (){var statearr_40419 = state_40398;
(statearr_40419[(7)] = inst_40358__$1);

(statearr_40419[(14)] = inst_40371);

(statearr_40419[(8)] = inst_40359);

return statearr_40419;
})();
var statearr_40420_40440 = state_40398__$1;
(statearr_40420_40440[(2)] = null);

(statearr_40420_40440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38518__auto___40426,out))
;
return ((function (switch__38411__auto__,c__38518__auto___40426,out){
return (function() {
var cljs$core$async$state_machine__38412__auto__ = null;
var cljs$core$async$state_machine__38412__auto____0 = (function (){
var statearr_40421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40421[(0)] = cljs$core$async$state_machine__38412__auto__);

(statearr_40421[(1)] = (1));

return statearr_40421;
});
var cljs$core$async$state_machine__38412__auto____1 = (function (state_40398){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_40398);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e40422){if((e40422 instanceof Object)){
var ex__38415__auto__ = e40422;
var statearr_40423_40441 = state_40398;
(statearr_40423_40441[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40398);

return cljs.core.cst$kw$recur;
} else {
throw e40422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__40442 = state_40398;
state_40398 = G__40442;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
cljs$core$async$state_machine__38412__auto__ = function(state_40398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38412__auto____1.call(this,state_40398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38412__auto____0;
cljs$core$async$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38412__auto____1;
return cljs$core$async$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___40426,out))
})();
var state__38520__auto__ = (function (){var statearr_40424 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_40424[(6)] = c__38518__auto___40426);

return statearr_40424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___40426,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

