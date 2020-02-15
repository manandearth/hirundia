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
var G__42679 = arguments.length;
switch (G__42679) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42680 = (function (f,blockable,meta42681){
this.f = f;
this.blockable = blockable;
this.meta42681 = meta42681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42682,meta42681__$1){
var self__ = this;
var _42682__$1 = this;
return (new cljs.core.async.t_cljs$core$async42680(self__.f,self__.blockable,meta42681__$1));
});

cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42682){
var self__ = this;
var _42682__$1 = this;
return self__.meta42681;
});

cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta42681], null);
});

cljs.core.async.t_cljs$core$async42680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42680";

cljs.core.async.t_cljs$core$async42680.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42680");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42680.
 */
cljs.core.async.__GT_t_cljs$core$async42680 = (function cljs$core$async$__GT_t_cljs$core$async42680(f__$1,blockable__$1,meta42681){
return (new cljs.core.async.t_cljs$core$async42680(f__$1,blockable__$1,meta42681));
});

}

return (new cljs.core.async.t_cljs$core$async42680(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42686 = arguments.length;
switch (G__42686) {
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
var G__42689 = arguments.length;
switch (G__42689) {
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
var G__42692 = arguments.length;
switch (G__42692) {
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
var val_42694 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42694) : fn1.call(null,val_42694));
} else {
cljs.core.async.impl.dispatch.run(((function (val_42694,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42694) : fn1.call(null,val_42694));
});})(val_42694,ret))
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
var G__42696 = arguments.length;
switch (G__42696) {
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
var n__4607__auto___42698 = n;
var x_42699 = (0);
while(true){
if((x_42699 < n__4607__auto___42698)){
(a[x_42699] = (0));

var G__42700 = (x_42699 + (1));
x_42699 = G__42700;
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

var G__42701 = (i + (1));
i = G__42701;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42702 = (function (flag,meta42703){
this.flag = flag;
this.meta42703 = meta42703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42704,meta42703__$1){
var self__ = this;
var _42704__$1 = this;
return (new cljs.core.async.t_cljs$core$async42702(self__.flag,meta42703__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42704){
var self__ = this;
var _42704__$1 = this;
return self__.meta42703;
});})(flag))
;

cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42702.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta42703], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42702";

cljs.core.async.t_cljs$core$async42702.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42702");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42702.
 */
cljs.core.async.__GT_t_cljs$core$async42702 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42702(flag__$1,meta42703){
return (new cljs.core.async.t_cljs$core$async42702(flag__$1,meta42703));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42702(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42705 = (function (flag,cb,meta42706){
this.flag = flag;
this.cb = cb;
this.meta42706 = meta42706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42707,meta42706__$1){
var self__ = this;
var _42707__$1 = this;
return (new cljs.core.async.t_cljs$core$async42705(self__.flag,self__.cb,meta42706__$1));
});

cljs.core.async.t_cljs$core$async42705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42707){
var self__ = this;
var _42707__$1 = this;
return self__.meta42706;
});

cljs.core.async.t_cljs$core$async42705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async42705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta42706], null);
});

cljs.core.async.t_cljs$core$async42705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42705";

cljs.core.async.t_cljs$core$async42705.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42705");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42705.
 */
cljs.core.async.__GT_t_cljs$core$async42705 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42705(flag__$1,cb__$1,meta42706){
return (new cljs.core.async.t_cljs$core$async42705(flag__$1,cb__$1,meta42706));
});

}

return (new cljs.core.async.t_cljs$core$async42705(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42708_SHARP_){
var G__42710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42708_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42710) : fret.call(null,G__42710));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42709_SHARP_){
var G__42711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42709_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42711) : fret.call(null,G__42711));
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
var G__42712 = (i + (1));
i = G__42712;
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
var len__4730__auto___42718 = arguments.length;
var i__4731__auto___42719 = (0);
while(true){
if((i__4731__auto___42719 < len__4730__auto___42718)){
args__4736__auto__.push((arguments[i__4731__auto___42719]));

var G__42720 = (i__4731__auto___42719 + (1));
i__4731__auto___42719 = G__42720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42715){
var map__42716 = p__42715;
var map__42716__$1 = (((((!((map__42716 == null))))?(((((map__42716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42716):map__42716);
var opts = map__42716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42713){
var G__42714 = cljs.core.first(seq42713);
var seq42713__$1 = cljs.core.next(seq42713);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42714,seq42713__$1);
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
var G__42722 = arguments.length;
switch (G__42722) {
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
var c__40751__auto___42768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___42768){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___42768){
return (function (state_42746){
var state_val_42747 = (state_42746[(1)]);
if((state_val_42747 === (7))){
var inst_42742 = (state_42746[(2)]);
var state_42746__$1 = state_42746;
var statearr_42748_42769 = state_42746__$1;
(statearr_42748_42769[(2)] = inst_42742);

(statearr_42748_42769[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (1))){
var state_42746__$1 = state_42746;
var statearr_42749_42770 = state_42746__$1;
(statearr_42749_42770[(2)] = null);

(statearr_42749_42770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (4))){
var inst_42725 = (state_42746[(7)]);
var inst_42725__$1 = (state_42746[(2)]);
var inst_42726 = (inst_42725__$1 == null);
var state_42746__$1 = (function (){var statearr_42750 = state_42746;
(statearr_42750[(7)] = inst_42725__$1);

return statearr_42750;
})();
if(cljs.core.truth_(inst_42726)){
var statearr_42751_42771 = state_42746__$1;
(statearr_42751_42771[(1)] = (5));

} else {
var statearr_42752_42772 = state_42746__$1;
(statearr_42752_42772[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (13))){
var state_42746__$1 = state_42746;
var statearr_42753_42773 = state_42746__$1;
(statearr_42753_42773[(2)] = null);

(statearr_42753_42773[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (6))){
var inst_42725 = (state_42746[(7)]);
var state_42746__$1 = state_42746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42746__$1,(11),to,inst_42725);
} else {
if((state_val_42747 === (3))){
var inst_42744 = (state_42746[(2)]);
var state_42746__$1 = state_42746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42746__$1,inst_42744);
} else {
if((state_val_42747 === (12))){
var state_42746__$1 = state_42746;
var statearr_42754_42774 = state_42746__$1;
(statearr_42754_42774[(2)] = null);

(statearr_42754_42774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (2))){
var state_42746__$1 = state_42746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42746__$1,(4),from);
} else {
if((state_val_42747 === (11))){
var inst_42735 = (state_42746[(2)]);
var state_42746__$1 = state_42746;
if(cljs.core.truth_(inst_42735)){
var statearr_42755_42775 = state_42746__$1;
(statearr_42755_42775[(1)] = (12));

} else {
var statearr_42756_42776 = state_42746__$1;
(statearr_42756_42776[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (9))){
var state_42746__$1 = state_42746;
var statearr_42757_42777 = state_42746__$1;
(statearr_42757_42777[(2)] = null);

(statearr_42757_42777[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (5))){
var state_42746__$1 = state_42746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42758_42778 = state_42746__$1;
(statearr_42758_42778[(1)] = (8));

} else {
var statearr_42759_42779 = state_42746__$1;
(statearr_42759_42779[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (14))){
var inst_42740 = (state_42746[(2)]);
var state_42746__$1 = state_42746;
var statearr_42760_42780 = state_42746__$1;
(statearr_42760_42780[(2)] = inst_42740);

(statearr_42760_42780[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (10))){
var inst_42732 = (state_42746[(2)]);
var state_42746__$1 = state_42746;
var statearr_42761_42781 = state_42746__$1;
(statearr_42761_42781[(2)] = inst_42732);

(statearr_42761_42781[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42747 === (8))){
var inst_42729 = cljs.core.async.close_BANG_(to);
var state_42746__$1 = state_42746;
var statearr_42762_42782 = state_42746__$1;
(statearr_42762_42782[(2)] = inst_42729);

(statearr_42762_42782[(1)] = (10));


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
});})(c__40751__auto___42768))
;
return ((function (switch__40560__auto__,c__40751__auto___42768){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_42763 = [null,null,null,null,null,null,null,null];
(statearr_42763[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_42763[(1)] = (1));

return statearr_42763;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_42746){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_42746);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e42764){if((e42764 instanceof Object)){
var ex__40564__auto__ = e42764;
var statearr_42765_42783 = state_42746;
(statearr_42765_42783[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42746);

return cljs.core.cst$kw$recur;
} else {
throw e42764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__42784 = state_42746;
state_42746 = G__42784;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_42746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_42746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___42768))
})();
var state__40753__auto__ = (function (){var statearr_42766 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_42766[(6)] = c__40751__auto___42768);

return statearr_42766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___42768))
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
return (function (p__42785){
var vec__42786 = p__42785;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42786,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42786,(1),null);
var job = vec__42786;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40751__auto___42957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___42957,res,vec__42786,v,p,job,jobs,results){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___42957,res,vec__42786,v,p,job,jobs,results){
return (function (state_42793){
var state_val_42794 = (state_42793[(1)]);
if((state_val_42794 === (1))){
var state_42793__$1 = state_42793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42793__$1,(2),res,v);
} else {
if((state_val_42794 === (2))){
var inst_42790 = (state_42793[(2)]);
var inst_42791 = cljs.core.async.close_BANG_(res);
var state_42793__$1 = (function (){var statearr_42795 = state_42793;
(statearr_42795[(7)] = inst_42790);

return statearr_42795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42793__$1,inst_42791);
} else {
return null;
}
}
});})(c__40751__auto___42957,res,vec__42786,v,p,job,jobs,results))
;
return ((function (switch__40560__auto__,c__40751__auto___42957,res,vec__42786,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0 = (function (){
var statearr_42796 = [null,null,null,null,null,null,null,null];
(statearr_42796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__);

(statearr_42796[(1)] = (1));

return statearr_42796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1 = (function (state_42793){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_42793);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e42797){if((e42797 instanceof Object)){
var ex__40564__auto__ = e42797;
var statearr_42798_42958 = state_42793;
(statearr_42798_42958[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42793);

return cljs.core.cst$kw$recur;
} else {
throw e42797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__42959 = state_42793;
state_42793 = G__42959;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = function(state_42793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1.call(this,state_42793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___42957,res,vec__42786,v,p,job,jobs,results))
})();
var state__40753__auto__ = (function (){var statearr_42799 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_42799[(6)] = c__40751__auto___42957);

return statearr_42799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___42957,res,vec__42786,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42800){
var vec__42801 = p__42800;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42801,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42801,(1),null);
var job = vec__42801;
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
var n__4607__auto___42960 = n;
var __42961 = (0);
while(true){
if((__42961 < n__4607__auto___42960)){
var G__42804_42962 = type;
var G__42804_42963__$1 = (((G__42804_42962 instanceof cljs.core.Keyword))?G__42804_42962.fqn:null);
switch (G__42804_42963__$1) {
case "compute":
var c__40751__auto___42965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42961,c__40751__auto___42965,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (__42961,c__40751__auto___42965,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async){
return (function (state_42817){
var state_val_42818 = (state_42817[(1)]);
if((state_val_42818 === (1))){
var state_42817__$1 = state_42817;
var statearr_42819_42966 = state_42817__$1;
(statearr_42819_42966[(2)] = null);

(statearr_42819_42966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42818 === (2))){
var state_42817__$1 = state_42817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42817__$1,(4),jobs);
} else {
if((state_val_42818 === (3))){
var inst_42815 = (state_42817[(2)]);
var state_42817__$1 = state_42817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42817__$1,inst_42815);
} else {
if((state_val_42818 === (4))){
var inst_42807 = (state_42817[(2)]);
var inst_42808 = process(inst_42807);
var state_42817__$1 = state_42817;
if(cljs.core.truth_(inst_42808)){
var statearr_42820_42967 = state_42817__$1;
(statearr_42820_42967[(1)] = (5));

} else {
var statearr_42821_42968 = state_42817__$1;
(statearr_42821_42968[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42818 === (5))){
var state_42817__$1 = state_42817;
var statearr_42822_42969 = state_42817__$1;
(statearr_42822_42969[(2)] = null);

(statearr_42822_42969[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42818 === (6))){
var state_42817__$1 = state_42817;
var statearr_42823_42970 = state_42817__$1;
(statearr_42823_42970[(2)] = null);

(statearr_42823_42970[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42818 === (7))){
var inst_42813 = (state_42817[(2)]);
var state_42817__$1 = state_42817;
var statearr_42824_42971 = state_42817__$1;
(statearr_42824_42971[(2)] = inst_42813);

(statearr_42824_42971[(1)] = (3));


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
});})(__42961,c__40751__auto___42965,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async))
;
return ((function (__42961,switch__40560__auto__,c__40751__auto___42965,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0 = (function (){
var statearr_42825 = [null,null,null,null,null,null,null];
(statearr_42825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__);

(statearr_42825[(1)] = (1));

return statearr_42825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1 = (function (state_42817){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_42817);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e42826){if((e42826 instanceof Object)){
var ex__40564__auto__ = e42826;
var statearr_42827_42972 = state_42817;
(statearr_42827_42972[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42817);

return cljs.core.cst$kw$recur;
} else {
throw e42826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__42973 = state_42817;
state_42817 = G__42973;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = function(state_42817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1.call(this,state_42817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__;
})()
;})(__42961,switch__40560__auto__,c__40751__auto___42965,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async))
})();
var state__40753__auto__ = (function (){var statearr_42828 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_42828[(6)] = c__40751__auto___42965);

return statearr_42828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(__42961,c__40751__auto___42965,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async))
);


break;
case "async":
var c__40751__auto___42974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42961,c__40751__auto___42974,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (__42961,c__40751__auto___42974,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async){
return (function (state_42841){
var state_val_42842 = (state_42841[(1)]);
if((state_val_42842 === (1))){
var state_42841__$1 = state_42841;
var statearr_42843_42975 = state_42841__$1;
(statearr_42843_42975[(2)] = null);

(statearr_42843_42975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42842 === (2))){
var state_42841__$1 = state_42841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42841__$1,(4),jobs);
} else {
if((state_val_42842 === (3))){
var inst_42839 = (state_42841[(2)]);
var state_42841__$1 = state_42841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42841__$1,inst_42839);
} else {
if((state_val_42842 === (4))){
var inst_42831 = (state_42841[(2)]);
var inst_42832 = async(inst_42831);
var state_42841__$1 = state_42841;
if(cljs.core.truth_(inst_42832)){
var statearr_42844_42976 = state_42841__$1;
(statearr_42844_42976[(1)] = (5));

} else {
var statearr_42845_42977 = state_42841__$1;
(statearr_42845_42977[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42842 === (5))){
var state_42841__$1 = state_42841;
var statearr_42846_42978 = state_42841__$1;
(statearr_42846_42978[(2)] = null);

(statearr_42846_42978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42842 === (6))){
var state_42841__$1 = state_42841;
var statearr_42847_42979 = state_42841__$1;
(statearr_42847_42979[(2)] = null);

(statearr_42847_42979[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42842 === (7))){
var inst_42837 = (state_42841[(2)]);
var state_42841__$1 = state_42841;
var statearr_42848_42980 = state_42841__$1;
(statearr_42848_42980[(2)] = inst_42837);

(statearr_42848_42980[(1)] = (3));


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
});})(__42961,c__40751__auto___42974,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async))
;
return ((function (__42961,switch__40560__auto__,c__40751__auto___42974,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0 = (function (){
var statearr_42849 = [null,null,null,null,null,null,null];
(statearr_42849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__);

(statearr_42849[(1)] = (1));

return statearr_42849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1 = (function (state_42841){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_42841);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e42850){if((e42850 instanceof Object)){
var ex__40564__auto__ = e42850;
var statearr_42851_42981 = state_42841;
(statearr_42851_42981[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42841);

return cljs.core.cst$kw$recur;
} else {
throw e42850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__42982 = state_42841;
state_42841 = G__42982;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = function(state_42841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1.call(this,state_42841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__;
})()
;})(__42961,switch__40560__auto__,c__40751__auto___42974,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async))
})();
var state__40753__auto__ = (function (){var statearr_42852 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_42852[(6)] = c__40751__auto___42974);

return statearr_42852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(__42961,c__40751__auto___42974,G__42804_42962,G__42804_42963__$1,n__4607__auto___42960,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42804_42963__$1)].join('')));

}

var G__42983 = (__42961 + (1));
__42961 = G__42983;
continue;
} else {
}
break;
}

var c__40751__auto___42984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___42984,jobs,results,process,async){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___42984,jobs,results,process,async){
return (function (state_42874){
var state_val_42875 = (state_42874[(1)]);
if((state_val_42875 === (7))){
var inst_42870 = (state_42874[(2)]);
var state_42874__$1 = state_42874;
var statearr_42876_42985 = state_42874__$1;
(statearr_42876_42985[(2)] = inst_42870);

(statearr_42876_42985[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42875 === (1))){
var state_42874__$1 = state_42874;
var statearr_42877_42986 = state_42874__$1;
(statearr_42877_42986[(2)] = null);

(statearr_42877_42986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42875 === (4))){
var inst_42855 = (state_42874[(7)]);
var inst_42855__$1 = (state_42874[(2)]);
var inst_42856 = (inst_42855__$1 == null);
var state_42874__$1 = (function (){var statearr_42878 = state_42874;
(statearr_42878[(7)] = inst_42855__$1);

return statearr_42878;
})();
if(cljs.core.truth_(inst_42856)){
var statearr_42879_42987 = state_42874__$1;
(statearr_42879_42987[(1)] = (5));

} else {
var statearr_42880_42988 = state_42874__$1;
(statearr_42880_42988[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42875 === (6))){
var inst_42860 = (state_42874[(8)]);
var inst_42855 = (state_42874[(7)]);
var inst_42860__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42862 = [inst_42855,inst_42860__$1];
var inst_42863 = (new cljs.core.PersistentVector(null,2,(5),inst_42861,inst_42862,null));
var state_42874__$1 = (function (){var statearr_42881 = state_42874;
(statearr_42881[(8)] = inst_42860__$1);

return statearr_42881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42874__$1,(8),jobs,inst_42863);
} else {
if((state_val_42875 === (3))){
var inst_42872 = (state_42874[(2)]);
var state_42874__$1 = state_42874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42874__$1,inst_42872);
} else {
if((state_val_42875 === (2))){
var state_42874__$1 = state_42874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42874__$1,(4),from);
} else {
if((state_val_42875 === (9))){
var inst_42867 = (state_42874[(2)]);
var state_42874__$1 = (function (){var statearr_42882 = state_42874;
(statearr_42882[(9)] = inst_42867);

return statearr_42882;
})();
var statearr_42883_42989 = state_42874__$1;
(statearr_42883_42989[(2)] = null);

(statearr_42883_42989[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42875 === (5))){
var inst_42858 = cljs.core.async.close_BANG_(jobs);
var state_42874__$1 = state_42874;
var statearr_42884_42990 = state_42874__$1;
(statearr_42884_42990[(2)] = inst_42858);

(statearr_42884_42990[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42875 === (8))){
var inst_42860 = (state_42874[(8)]);
var inst_42865 = (state_42874[(2)]);
var state_42874__$1 = (function (){var statearr_42885 = state_42874;
(statearr_42885[(10)] = inst_42865);

return statearr_42885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42874__$1,(9),results,inst_42860);
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
});})(c__40751__auto___42984,jobs,results,process,async))
;
return ((function (switch__40560__auto__,c__40751__auto___42984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0 = (function (){
var statearr_42886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__);

(statearr_42886[(1)] = (1));

return statearr_42886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1 = (function (state_42874){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_42874);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e42887){if((e42887 instanceof Object)){
var ex__40564__auto__ = e42887;
var statearr_42888_42991 = state_42874;
(statearr_42888_42991[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42874);

return cljs.core.cst$kw$recur;
} else {
throw e42887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__42992 = state_42874;
state_42874 = G__42992;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = function(state_42874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1.call(this,state_42874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___42984,jobs,results,process,async))
})();
var state__40753__auto__ = (function (){var statearr_42889 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_42889[(6)] = c__40751__auto___42984);

return statearr_42889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___42984,jobs,results,process,async))
);


var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__,jobs,results,process,async){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__,jobs,results,process,async){
return (function (state_42927){
var state_val_42928 = (state_42927[(1)]);
if((state_val_42928 === (7))){
var inst_42923 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42929_42993 = state_42927__$1;
(statearr_42929_42993[(2)] = inst_42923);

(statearr_42929_42993[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (20))){
var state_42927__$1 = state_42927;
var statearr_42930_42994 = state_42927__$1;
(statearr_42930_42994[(2)] = null);

(statearr_42930_42994[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (1))){
var state_42927__$1 = state_42927;
var statearr_42931_42995 = state_42927__$1;
(statearr_42931_42995[(2)] = null);

(statearr_42931_42995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (4))){
var inst_42892 = (state_42927[(7)]);
var inst_42892__$1 = (state_42927[(2)]);
var inst_42893 = (inst_42892__$1 == null);
var state_42927__$1 = (function (){var statearr_42932 = state_42927;
(statearr_42932[(7)] = inst_42892__$1);

return statearr_42932;
})();
if(cljs.core.truth_(inst_42893)){
var statearr_42933_42996 = state_42927__$1;
(statearr_42933_42996[(1)] = (5));

} else {
var statearr_42934_42997 = state_42927__$1;
(statearr_42934_42997[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (15))){
var inst_42905 = (state_42927[(8)]);
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42927__$1,(18),to,inst_42905);
} else {
if((state_val_42928 === (21))){
var inst_42918 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42935_42998 = state_42927__$1;
(statearr_42935_42998[(2)] = inst_42918);

(statearr_42935_42998[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (13))){
var inst_42920 = (state_42927[(2)]);
var state_42927__$1 = (function (){var statearr_42936 = state_42927;
(statearr_42936[(9)] = inst_42920);

return statearr_42936;
})();
var statearr_42937_42999 = state_42927__$1;
(statearr_42937_42999[(2)] = null);

(statearr_42937_42999[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (6))){
var inst_42892 = (state_42927[(7)]);
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42927__$1,(11),inst_42892);
} else {
if((state_val_42928 === (17))){
var inst_42913 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
if(cljs.core.truth_(inst_42913)){
var statearr_42938_43000 = state_42927__$1;
(statearr_42938_43000[(1)] = (19));

} else {
var statearr_42939_43001 = state_42927__$1;
(statearr_42939_43001[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (3))){
var inst_42925 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42927__$1,inst_42925);
} else {
if((state_val_42928 === (12))){
var inst_42902 = (state_42927[(10)]);
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42927__$1,(14),inst_42902);
} else {
if((state_val_42928 === (2))){
var state_42927__$1 = state_42927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42927__$1,(4),results);
} else {
if((state_val_42928 === (19))){
var state_42927__$1 = state_42927;
var statearr_42940_43002 = state_42927__$1;
(statearr_42940_43002[(2)] = null);

(statearr_42940_43002[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (11))){
var inst_42902 = (state_42927[(2)]);
var state_42927__$1 = (function (){var statearr_42941 = state_42927;
(statearr_42941[(10)] = inst_42902);

return statearr_42941;
})();
var statearr_42942_43003 = state_42927__$1;
(statearr_42942_43003[(2)] = null);

(statearr_42942_43003[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (9))){
var state_42927__$1 = state_42927;
var statearr_42943_43004 = state_42927__$1;
(statearr_42943_43004[(2)] = null);

(statearr_42943_43004[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (5))){
var state_42927__$1 = state_42927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42944_43005 = state_42927__$1;
(statearr_42944_43005[(1)] = (8));

} else {
var statearr_42945_43006 = state_42927__$1;
(statearr_42945_43006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (14))){
var inst_42905 = (state_42927[(8)]);
var inst_42907 = (state_42927[(11)]);
var inst_42905__$1 = (state_42927[(2)]);
var inst_42906 = (inst_42905__$1 == null);
var inst_42907__$1 = cljs.core.not(inst_42906);
var state_42927__$1 = (function (){var statearr_42946 = state_42927;
(statearr_42946[(8)] = inst_42905__$1);

(statearr_42946[(11)] = inst_42907__$1);

return statearr_42946;
})();
if(inst_42907__$1){
var statearr_42947_43007 = state_42927__$1;
(statearr_42947_43007[(1)] = (15));

} else {
var statearr_42948_43008 = state_42927__$1;
(statearr_42948_43008[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (16))){
var inst_42907 = (state_42927[(11)]);
var state_42927__$1 = state_42927;
var statearr_42949_43009 = state_42927__$1;
(statearr_42949_43009[(2)] = inst_42907);

(statearr_42949_43009[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (10))){
var inst_42899 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42950_43010 = state_42927__$1;
(statearr_42950_43010[(2)] = inst_42899);

(statearr_42950_43010[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (18))){
var inst_42910 = (state_42927[(2)]);
var state_42927__$1 = state_42927;
var statearr_42951_43011 = state_42927__$1;
(statearr_42951_43011[(2)] = inst_42910);

(statearr_42951_43011[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42928 === (8))){
var inst_42896 = cljs.core.async.close_BANG_(to);
var state_42927__$1 = state_42927;
var statearr_42952_43012 = state_42927__$1;
(statearr_42952_43012[(2)] = inst_42896);

(statearr_42952_43012[(1)] = (10));


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
});})(c__40751__auto__,jobs,results,process,async))
;
return ((function (switch__40560__auto__,c__40751__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0 = (function (){
var statearr_42953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__);

(statearr_42953[(1)] = (1));

return statearr_42953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1 = (function (state_42927){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_42927);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e42954){if((e42954 instanceof Object)){
var ex__40564__auto__ = e42954;
var statearr_42955_43013 = state_42927;
(statearr_42955_43013[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42927);

return cljs.core.cst$kw$recur;
} else {
throw e42954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43014 = state_42927;
state_42927 = G__43014;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__ = function(state_42927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1.call(this,state_42927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__,jobs,results,process,async))
})();
var state__40753__auto__ = (function (){var statearr_42956 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_42956[(6)] = c__40751__auto__);

return statearr_42956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__,jobs,results,process,async))
);

return c__40751__auto__;
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
var G__43016 = arguments.length;
switch (G__43016) {
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
var G__43019 = arguments.length;
switch (G__43019) {
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
var G__43022 = arguments.length;
switch (G__43022) {
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
var c__40751__auto___43071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___43071,tc,fc){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___43071,tc,fc){
return (function (state_43048){
var state_val_43049 = (state_43048[(1)]);
if((state_val_43049 === (7))){
var inst_43044 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
var statearr_43050_43072 = state_43048__$1;
(statearr_43050_43072[(2)] = inst_43044);

(statearr_43050_43072[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (1))){
var state_43048__$1 = state_43048;
var statearr_43051_43073 = state_43048__$1;
(statearr_43051_43073[(2)] = null);

(statearr_43051_43073[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (4))){
var inst_43025 = (state_43048[(7)]);
var inst_43025__$1 = (state_43048[(2)]);
var inst_43026 = (inst_43025__$1 == null);
var state_43048__$1 = (function (){var statearr_43052 = state_43048;
(statearr_43052[(7)] = inst_43025__$1);

return statearr_43052;
})();
if(cljs.core.truth_(inst_43026)){
var statearr_43053_43074 = state_43048__$1;
(statearr_43053_43074[(1)] = (5));

} else {
var statearr_43054_43075 = state_43048__$1;
(statearr_43054_43075[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (13))){
var state_43048__$1 = state_43048;
var statearr_43055_43076 = state_43048__$1;
(statearr_43055_43076[(2)] = null);

(statearr_43055_43076[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (6))){
var inst_43025 = (state_43048[(7)]);
var inst_43031 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43025) : p.call(null,inst_43025));
var state_43048__$1 = state_43048;
if(cljs.core.truth_(inst_43031)){
var statearr_43056_43077 = state_43048__$1;
(statearr_43056_43077[(1)] = (9));

} else {
var statearr_43057_43078 = state_43048__$1;
(statearr_43057_43078[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (3))){
var inst_43046 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43048__$1,inst_43046);
} else {
if((state_val_43049 === (12))){
var state_43048__$1 = state_43048;
var statearr_43058_43079 = state_43048__$1;
(statearr_43058_43079[(2)] = null);

(statearr_43058_43079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (2))){
var state_43048__$1 = state_43048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43048__$1,(4),ch);
} else {
if((state_val_43049 === (11))){
var inst_43025 = (state_43048[(7)]);
var inst_43035 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43048__$1,(8),inst_43035,inst_43025);
} else {
if((state_val_43049 === (9))){
var state_43048__$1 = state_43048;
var statearr_43059_43080 = state_43048__$1;
(statearr_43059_43080[(2)] = tc);

(statearr_43059_43080[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (5))){
var inst_43028 = cljs.core.async.close_BANG_(tc);
var inst_43029 = cljs.core.async.close_BANG_(fc);
var state_43048__$1 = (function (){var statearr_43060 = state_43048;
(statearr_43060[(8)] = inst_43028);

return statearr_43060;
})();
var statearr_43061_43081 = state_43048__$1;
(statearr_43061_43081[(2)] = inst_43029);

(statearr_43061_43081[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (14))){
var inst_43042 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
var statearr_43062_43082 = state_43048__$1;
(statearr_43062_43082[(2)] = inst_43042);

(statearr_43062_43082[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (10))){
var state_43048__$1 = state_43048;
var statearr_43063_43083 = state_43048__$1;
(statearr_43063_43083[(2)] = fc);

(statearr_43063_43083[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43049 === (8))){
var inst_43037 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
if(cljs.core.truth_(inst_43037)){
var statearr_43064_43084 = state_43048__$1;
(statearr_43064_43084[(1)] = (12));

} else {
var statearr_43065_43085 = state_43048__$1;
(statearr_43065_43085[(1)] = (13));

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
});})(c__40751__auto___43071,tc,fc))
;
return ((function (switch__40560__auto__,c__40751__auto___43071,tc,fc){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_43066 = [null,null,null,null,null,null,null,null,null];
(statearr_43066[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_43066[(1)] = (1));

return statearr_43066;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_43048){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43048);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43067){if((e43067 instanceof Object)){
var ex__40564__auto__ = e43067;
var statearr_43068_43086 = state_43048;
(statearr_43068_43086[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43048);

return cljs.core.cst$kw$recur;
} else {
throw e43067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43087 = state_43048;
state_43048 = G__43087;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_43048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_43048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___43071,tc,fc))
})();
var state__40753__auto__ = (function (){var statearr_43069 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43069[(6)] = c__40751__auto___43071);

return statearr_43069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___43071,tc,fc))
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
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__){
return (function (state_43108){
var state_val_43109 = (state_43108[(1)]);
if((state_val_43109 === (7))){
var inst_43104 = (state_43108[(2)]);
var state_43108__$1 = state_43108;
var statearr_43110_43128 = state_43108__$1;
(statearr_43110_43128[(2)] = inst_43104);

(statearr_43110_43128[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43109 === (1))){
var inst_43088 = init;
var state_43108__$1 = (function (){var statearr_43111 = state_43108;
(statearr_43111[(7)] = inst_43088);

return statearr_43111;
})();
var statearr_43112_43129 = state_43108__$1;
(statearr_43112_43129[(2)] = null);

(statearr_43112_43129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43109 === (4))){
var inst_43091 = (state_43108[(8)]);
var inst_43091__$1 = (state_43108[(2)]);
var inst_43092 = (inst_43091__$1 == null);
var state_43108__$1 = (function (){var statearr_43113 = state_43108;
(statearr_43113[(8)] = inst_43091__$1);

return statearr_43113;
})();
if(cljs.core.truth_(inst_43092)){
var statearr_43114_43130 = state_43108__$1;
(statearr_43114_43130[(1)] = (5));

} else {
var statearr_43115_43131 = state_43108__$1;
(statearr_43115_43131[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43109 === (6))){
var inst_43088 = (state_43108[(7)]);
var inst_43091 = (state_43108[(8)]);
var inst_43095 = (state_43108[(9)]);
var inst_43095__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43088,inst_43091) : f.call(null,inst_43088,inst_43091));
var inst_43096 = cljs.core.reduced_QMARK_(inst_43095__$1);
var state_43108__$1 = (function (){var statearr_43116 = state_43108;
(statearr_43116[(9)] = inst_43095__$1);

return statearr_43116;
})();
if(inst_43096){
var statearr_43117_43132 = state_43108__$1;
(statearr_43117_43132[(1)] = (8));

} else {
var statearr_43118_43133 = state_43108__$1;
(statearr_43118_43133[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43109 === (3))){
var inst_43106 = (state_43108[(2)]);
var state_43108__$1 = state_43108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43108__$1,inst_43106);
} else {
if((state_val_43109 === (2))){
var state_43108__$1 = state_43108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43108__$1,(4),ch);
} else {
if((state_val_43109 === (9))){
var inst_43095 = (state_43108[(9)]);
var inst_43088 = inst_43095;
var state_43108__$1 = (function (){var statearr_43119 = state_43108;
(statearr_43119[(7)] = inst_43088);

return statearr_43119;
})();
var statearr_43120_43134 = state_43108__$1;
(statearr_43120_43134[(2)] = null);

(statearr_43120_43134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43109 === (5))){
var inst_43088 = (state_43108[(7)]);
var state_43108__$1 = state_43108;
var statearr_43121_43135 = state_43108__$1;
(statearr_43121_43135[(2)] = inst_43088);

(statearr_43121_43135[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43109 === (10))){
var inst_43102 = (state_43108[(2)]);
var state_43108__$1 = state_43108;
var statearr_43122_43136 = state_43108__$1;
(statearr_43122_43136[(2)] = inst_43102);

(statearr_43122_43136[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43109 === (8))){
var inst_43095 = (state_43108[(9)]);
var inst_43098 = cljs.core.deref(inst_43095);
var state_43108__$1 = state_43108;
var statearr_43123_43137 = state_43108__$1;
(statearr_43123_43137[(2)] = inst_43098);

(statearr_43123_43137[(1)] = (10));


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
});})(c__40751__auto__))
;
return ((function (switch__40560__auto__,c__40751__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40561__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40561__auto____0 = (function (){
var statearr_43124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43124[(0)] = cljs$core$async$reduce_$_state_machine__40561__auto__);

(statearr_43124[(1)] = (1));

return statearr_43124;
});
var cljs$core$async$reduce_$_state_machine__40561__auto____1 = (function (state_43108){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43108);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43125){if((e43125 instanceof Object)){
var ex__40564__auto__ = e43125;
var statearr_43126_43138 = state_43108;
(statearr_43126_43138[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43108);

return cljs.core.cst$kw$recur;
} else {
throw e43125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43139 = state_43108;
state_43108 = G__43139;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40561__auto__ = function(state_43108){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40561__auto____1.call(this,state_43108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40561__auto____0;
cljs$core$async$reduce_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40561__auto____1;
return cljs$core$async$reduce_$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__))
})();
var state__40753__auto__ = (function (){var statearr_43127 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43127[(6)] = c__40751__auto__);

return statearr_43127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__))
);

return c__40751__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__,f__$1){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__,f__$1){
return (function (state_43145){
var state_val_43146 = (state_43145[(1)]);
if((state_val_43146 === (1))){
var inst_43140 = cljs.core.async.reduce(f__$1,init,ch);
var state_43145__$1 = state_43145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43145__$1,(2),inst_43140);
} else {
if((state_val_43146 === (2))){
var inst_43142 = (state_43145[(2)]);
var inst_43143 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43142) : f__$1.call(null,inst_43142));
var state_43145__$1 = state_43145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43145__$1,inst_43143);
} else {
return null;
}
}
});})(c__40751__auto__,f__$1))
;
return ((function (switch__40560__auto__,c__40751__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40561__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40561__auto____0 = (function (){
var statearr_43147 = [null,null,null,null,null,null,null];
(statearr_43147[(0)] = cljs$core$async$transduce_$_state_machine__40561__auto__);

(statearr_43147[(1)] = (1));

return statearr_43147;
});
var cljs$core$async$transduce_$_state_machine__40561__auto____1 = (function (state_43145){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43145);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43148){if((e43148 instanceof Object)){
var ex__40564__auto__ = e43148;
var statearr_43149_43151 = state_43145;
(statearr_43149_43151[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43145);

return cljs.core.cst$kw$recur;
} else {
throw e43148;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43152 = state_43145;
state_43145 = G__43152;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40561__auto__ = function(state_43145){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40561__auto____1.call(this,state_43145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40561__auto____0;
cljs$core$async$transduce_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40561__auto____1;
return cljs$core$async$transduce_$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__,f__$1))
})();
var state__40753__auto__ = (function (){var statearr_43150 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43150[(6)] = c__40751__auto__);

return statearr_43150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__,f__$1))
);

return c__40751__auto__;
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
var G__43154 = arguments.length;
switch (G__43154) {
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
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__){
return (function (state_43179){
var state_val_43180 = (state_43179[(1)]);
if((state_val_43180 === (7))){
var inst_43161 = (state_43179[(2)]);
var state_43179__$1 = state_43179;
var statearr_43181_43202 = state_43179__$1;
(statearr_43181_43202[(2)] = inst_43161);

(statearr_43181_43202[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (1))){
var inst_43155 = cljs.core.seq(coll);
var inst_43156 = inst_43155;
var state_43179__$1 = (function (){var statearr_43182 = state_43179;
(statearr_43182[(7)] = inst_43156);

return statearr_43182;
})();
var statearr_43183_43203 = state_43179__$1;
(statearr_43183_43203[(2)] = null);

(statearr_43183_43203[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (4))){
var inst_43156 = (state_43179[(7)]);
var inst_43159 = cljs.core.first(inst_43156);
var state_43179__$1 = state_43179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43179__$1,(7),ch,inst_43159);
} else {
if((state_val_43180 === (13))){
var inst_43173 = (state_43179[(2)]);
var state_43179__$1 = state_43179;
var statearr_43184_43204 = state_43179__$1;
(statearr_43184_43204[(2)] = inst_43173);

(statearr_43184_43204[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (6))){
var inst_43164 = (state_43179[(2)]);
var state_43179__$1 = state_43179;
if(cljs.core.truth_(inst_43164)){
var statearr_43185_43205 = state_43179__$1;
(statearr_43185_43205[(1)] = (8));

} else {
var statearr_43186_43206 = state_43179__$1;
(statearr_43186_43206[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (3))){
var inst_43177 = (state_43179[(2)]);
var state_43179__$1 = state_43179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43179__$1,inst_43177);
} else {
if((state_val_43180 === (12))){
var state_43179__$1 = state_43179;
var statearr_43187_43207 = state_43179__$1;
(statearr_43187_43207[(2)] = null);

(statearr_43187_43207[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (2))){
var inst_43156 = (state_43179[(7)]);
var state_43179__$1 = state_43179;
if(cljs.core.truth_(inst_43156)){
var statearr_43188_43208 = state_43179__$1;
(statearr_43188_43208[(1)] = (4));

} else {
var statearr_43189_43209 = state_43179__$1;
(statearr_43189_43209[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (11))){
var inst_43170 = cljs.core.async.close_BANG_(ch);
var state_43179__$1 = state_43179;
var statearr_43190_43210 = state_43179__$1;
(statearr_43190_43210[(2)] = inst_43170);

(statearr_43190_43210[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (9))){
var state_43179__$1 = state_43179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43191_43211 = state_43179__$1;
(statearr_43191_43211[(1)] = (11));

} else {
var statearr_43192_43212 = state_43179__$1;
(statearr_43192_43212[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (5))){
var inst_43156 = (state_43179[(7)]);
var state_43179__$1 = state_43179;
var statearr_43193_43213 = state_43179__$1;
(statearr_43193_43213[(2)] = inst_43156);

(statearr_43193_43213[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (10))){
var inst_43175 = (state_43179[(2)]);
var state_43179__$1 = state_43179;
var statearr_43194_43214 = state_43179__$1;
(statearr_43194_43214[(2)] = inst_43175);

(statearr_43194_43214[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43180 === (8))){
var inst_43156 = (state_43179[(7)]);
var inst_43166 = cljs.core.next(inst_43156);
var inst_43156__$1 = inst_43166;
var state_43179__$1 = (function (){var statearr_43195 = state_43179;
(statearr_43195[(7)] = inst_43156__$1);

return statearr_43195;
})();
var statearr_43196_43215 = state_43179__$1;
(statearr_43196_43215[(2)] = null);

(statearr_43196_43215[(1)] = (2));


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
});})(c__40751__auto__))
;
return ((function (switch__40560__auto__,c__40751__auto__){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_43197 = [null,null,null,null,null,null,null,null];
(statearr_43197[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_43197[(1)] = (1));

return statearr_43197;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_43179){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43179);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43198){if((e43198 instanceof Object)){
var ex__40564__auto__ = e43198;
var statearr_43199_43216 = state_43179;
(statearr_43199_43216[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43179);

return cljs.core.cst$kw$recur;
} else {
throw e43198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43217 = state_43179;
state_43179 = G__43217;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_43179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_43179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__))
})();
var state__40753__auto__ = (function (){var statearr_43200 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43200[(6)] = c__40751__auto__);

return statearr_43200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__))
);

return c__40751__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43218 = (function (ch,cs,meta43219){
this.ch = ch;
this.cs = cs;
this.meta43219 = meta43219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43220,meta43219__$1){
var self__ = this;
var _43220__$1 = this;
return (new cljs.core.async.t_cljs$core$async43218(self__.ch,self__.cs,meta43219__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43220){
var self__ = this;
var _43220__$1 = this;
return self__.meta43219;
});})(cs))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43218.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta43219], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43218";

cljs.core.async.t_cljs$core$async43218.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43218");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43218.
 */
cljs.core.async.__GT_t_cljs$core$async43218 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43218(ch__$1,cs__$1,meta43219){
return (new cljs.core.async.t_cljs$core$async43218(ch__$1,cs__$1,meta43219));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43218(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40751__auto___43440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___43440,cs,m,dchan,dctr,done){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___43440,cs,m,dchan,dctr,done){
return (function (state_43355){
var state_val_43356 = (state_43355[(1)]);
if((state_val_43356 === (7))){
var inst_43351 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43357_43441 = state_43355__$1;
(statearr_43357_43441[(2)] = inst_43351);

(statearr_43357_43441[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (20))){
var inst_43254 = (state_43355[(7)]);
var inst_43266 = cljs.core.first(inst_43254);
var inst_43267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43266,(0),null);
var inst_43268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43266,(1),null);
var state_43355__$1 = (function (){var statearr_43358 = state_43355;
(statearr_43358[(8)] = inst_43267);

return statearr_43358;
})();
if(cljs.core.truth_(inst_43268)){
var statearr_43359_43442 = state_43355__$1;
(statearr_43359_43442[(1)] = (22));

} else {
var statearr_43360_43443 = state_43355__$1;
(statearr_43360_43443[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (27))){
var inst_43296 = (state_43355[(9)]);
var inst_43303 = (state_43355[(10)]);
var inst_43223 = (state_43355[(11)]);
var inst_43298 = (state_43355[(12)]);
var inst_43303__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43296,inst_43298);
var inst_43304 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43303__$1,inst_43223,done);
var state_43355__$1 = (function (){var statearr_43361 = state_43355;
(statearr_43361[(10)] = inst_43303__$1);

return statearr_43361;
})();
if(cljs.core.truth_(inst_43304)){
var statearr_43362_43444 = state_43355__$1;
(statearr_43362_43444[(1)] = (30));

} else {
var statearr_43363_43445 = state_43355__$1;
(statearr_43363_43445[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (1))){
var state_43355__$1 = state_43355;
var statearr_43364_43446 = state_43355__$1;
(statearr_43364_43446[(2)] = null);

(statearr_43364_43446[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (24))){
var inst_43254 = (state_43355[(7)]);
var inst_43273 = (state_43355[(2)]);
var inst_43274 = cljs.core.next(inst_43254);
var inst_43232 = inst_43274;
var inst_43233 = null;
var inst_43234 = (0);
var inst_43235 = (0);
var state_43355__$1 = (function (){var statearr_43365 = state_43355;
(statearr_43365[(13)] = inst_43232);

(statearr_43365[(14)] = inst_43234);

(statearr_43365[(15)] = inst_43233);

(statearr_43365[(16)] = inst_43273);

(statearr_43365[(17)] = inst_43235);

return statearr_43365;
})();
var statearr_43366_43447 = state_43355__$1;
(statearr_43366_43447[(2)] = null);

(statearr_43366_43447[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (39))){
var state_43355__$1 = state_43355;
var statearr_43370_43448 = state_43355__$1;
(statearr_43370_43448[(2)] = null);

(statearr_43370_43448[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (4))){
var inst_43223 = (state_43355[(11)]);
var inst_43223__$1 = (state_43355[(2)]);
var inst_43224 = (inst_43223__$1 == null);
var state_43355__$1 = (function (){var statearr_43371 = state_43355;
(statearr_43371[(11)] = inst_43223__$1);

return statearr_43371;
})();
if(cljs.core.truth_(inst_43224)){
var statearr_43372_43449 = state_43355__$1;
(statearr_43372_43449[(1)] = (5));

} else {
var statearr_43373_43450 = state_43355__$1;
(statearr_43373_43450[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (15))){
var inst_43232 = (state_43355[(13)]);
var inst_43234 = (state_43355[(14)]);
var inst_43233 = (state_43355[(15)]);
var inst_43235 = (state_43355[(17)]);
var inst_43250 = (state_43355[(2)]);
var inst_43251 = (inst_43235 + (1));
var tmp43367 = inst_43232;
var tmp43368 = inst_43234;
var tmp43369 = inst_43233;
var inst_43232__$1 = tmp43367;
var inst_43233__$1 = tmp43369;
var inst_43234__$1 = tmp43368;
var inst_43235__$1 = inst_43251;
var state_43355__$1 = (function (){var statearr_43374 = state_43355;
(statearr_43374[(18)] = inst_43250);

(statearr_43374[(13)] = inst_43232__$1);

(statearr_43374[(14)] = inst_43234__$1);

(statearr_43374[(15)] = inst_43233__$1);

(statearr_43374[(17)] = inst_43235__$1);

return statearr_43374;
})();
var statearr_43375_43451 = state_43355__$1;
(statearr_43375_43451[(2)] = null);

(statearr_43375_43451[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (21))){
var inst_43277 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43379_43452 = state_43355__$1;
(statearr_43379_43452[(2)] = inst_43277);

(statearr_43379_43452[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (31))){
var inst_43303 = (state_43355[(10)]);
var inst_43307 = done(null);
var inst_43308 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43303);
var state_43355__$1 = (function (){var statearr_43380 = state_43355;
(statearr_43380[(19)] = inst_43307);

return statearr_43380;
})();
var statearr_43381_43453 = state_43355__$1;
(statearr_43381_43453[(2)] = inst_43308);

(statearr_43381_43453[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (32))){
var inst_43296 = (state_43355[(9)]);
var inst_43295 = (state_43355[(20)]);
var inst_43298 = (state_43355[(12)]);
var inst_43297 = (state_43355[(21)]);
var inst_43310 = (state_43355[(2)]);
var inst_43311 = (inst_43298 + (1));
var tmp43376 = inst_43296;
var tmp43377 = inst_43295;
var tmp43378 = inst_43297;
var inst_43295__$1 = tmp43377;
var inst_43296__$1 = tmp43376;
var inst_43297__$1 = tmp43378;
var inst_43298__$1 = inst_43311;
var state_43355__$1 = (function (){var statearr_43382 = state_43355;
(statearr_43382[(22)] = inst_43310);

(statearr_43382[(9)] = inst_43296__$1);

(statearr_43382[(20)] = inst_43295__$1);

(statearr_43382[(12)] = inst_43298__$1);

(statearr_43382[(21)] = inst_43297__$1);

return statearr_43382;
})();
var statearr_43383_43454 = state_43355__$1;
(statearr_43383_43454[(2)] = null);

(statearr_43383_43454[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (40))){
var inst_43323 = (state_43355[(23)]);
var inst_43327 = done(null);
var inst_43328 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43323);
var state_43355__$1 = (function (){var statearr_43384 = state_43355;
(statearr_43384[(24)] = inst_43327);

return statearr_43384;
})();
var statearr_43385_43455 = state_43355__$1;
(statearr_43385_43455[(2)] = inst_43328);

(statearr_43385_43455[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (33))){
var inst_43314 = (state_43355[(25)]);
var inst_43316 = cljs.core.chunked_seq_QMARK_(inst_43314);
var state_43355__$1 = state_43355;
if(inst_43316){
var statearr_43386_43456 = state_43355__$1;
(statearr_43386_43456[(1)] = (36));

} else {
var statearr_43387_43457 = state_43355__$1;
(statearr_43387_43457[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (13))){
var inst_43244 = (state_43355[(26)]);
var inst_43247 = cljs.core.async.close_BANG_(inst_43244);
var state_43355__$1 = state_43355;
var statearr_43388_43458 = state_43355__$1;
(statearr_43388_43458[(2)] = inst_43247);

(statearr_43388_43458[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (22))){
var inst_43267 = (state_43355[(8)]);
var inst_43270 = cljs.core.async.close_BANG_(inst_43267);
var state_43355__$1 = state_43355;
var statearr_43389_43459 = state_43355__$1;
(statearr_43389_43459[(2)] = inst_43270);

(statearr_43389_43459[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (36))){
var inst_43314 = (state_43355[(25)]);
var inst_43318 = cljs.core.chunk_first(inst_43314);
var inst_43319 = cljs.core.chunk_rest(inst_43314);
var inst_43320 = cljs.core.count(inst_43318);
var inst_43295 = inst_43319;
var inst_43296 = inst_43318;
var inst_43297 = inst_43320;
var inst_43298 = (0);
var state_43355__$1 = (function (){var statearr_43390 = state_43355;
(statearr_43390[(9)] = inst_43296);

(statearr_43390[(20)] = inst_43295);

(statearr_43390[(12)] = inst_43298);

(statearr_43390[(21)] = inst_43297);

return statearr_43390;
})();
var statearr_43391_43460 = state_43355__$1;
(statearr_43391_43460[(2)] = null);

(statearr_43391_43460[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (41))){
var inst_43314 = (state_43355[(25)]);
var inst_43330 = (state_43355[(2)]);
var inst_43331 = cljs.core.next(inst_43314);
var inst_43295 = inst_43331;
var inst_43296 = null;
var inst_43297 = (0);
var inst_43298 = (0);
var state_43355__$1 = (function (){var statearr_43392 = state_43355;
(statearr_43392[(27)] = inst_43330);

(statearr_43392[(9)] = inst_43296);

(statearr_43392[(20)] = inst_43295);

(statearr_43392[(12)] = inst_43298);

(statearr_43392[(21)] = inst_43297);

return statearr_43392;
})();
var statearr_43393_43461 = state_43355__$1;
(statearr_43393_43461[(2)] = null);

(statearr_43393_43461[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (43))){
var state_43355__$1 = state_43355;
var statearr_43394_43462 = state_43355__$1;
(statearr_43394_43462[(2)] = null);

(statearr_43394_43462[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (29))){
var inst_43339 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43395_43463 = state_43355__$1;
(statearr_43395_43463[(2)] = inst_43339);

(statearr_43395_43463[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (44))){
var inst_43348 = (state_43355[(2)]);
var state_43355__$1 = (function (){var statearr_43396 = state_43355;
(statearr_43396[(28)] = inst_43348);

return statearr_43396;
})();
var statearr_43397_43464 = state_43355__$1;
(statearr_43397_43464[(2)] = null);

(statearr_43397_43464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (6))){
var inst_43287 = (state_43355[(29)]);
var inst_43286 = cljs.core.deref(cs);
var inst_43287__$1 = cljs.core.keys(inst_43286);
var inst_43288 = cljs.core.count(inst_43287__$1);
var inst_43289 = cljs.core.reset_BANG_(dctr,inst_43288);
var inst_43294 = cljs.core.seq(inst_43287__$1);
var inst_43295 = inst_43294;
var inst_43296 = null;
var inst_43297 = (0);
var inst_43298 = (0);
var state_43355__$1 = (function (){var statearr_43398 = state_43355;
(statearr_43398[(9)] = inst_43296);

(statearr_43398[(20)] = inst_43295);

(statearr_43398[(30)] = inst_43289);

(statearr_43398[(12)] = inst_43298);

(statearr_43398[(21)] = inst_43297);

(statearr_43398[(29)] = inst_43287__$1);

return statearr_43398;
})();
var statearr_43399_43465 = state_43355__$1;
(statearr_43399_43465[(2)] = null);

(statearr_43399_43465[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (28))){
var inst_43314 = (state_43355[(25)]);
var inst_43295 = (state_43355[(20)]);
var inst_43314__$1 = cljs.core.seq(inst_43295);
var state_43355__$1 = (function (){var statearr_43400 = state_43355;
(statearr_43400[(25)] = inst_43314__$1);

return statearr_43400;
})();
if(inst_43314__$1){
var statearr_43401_43466 = state_43355__$1;
(statearr_43401_43466[(1)] = (33));

} else {
var statearr_43402_43467 = state_43355__$1;
(statearr_43402_43467[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (25))){
var inst_43298 = (state_43355[(12)]);
var inst_43297 = (state_43355[(21)]);
var inst_43300 = (inst_43298 < inst_43297);
var inst_43301 = inst_43300;
var state_43355__$1 = state_43355;
if(cljs.core.truth_(inst_43301)){
var statearr_43403_43468 = state_43355__$1;
(statearr_43403_43468[(1)] = (27));

} else {
var statearr_43404_43469 = state_43355__$1;
(statearr_43404_43469[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (34))){
var state_43355__$1 = state_43355;
var statearr_43405_43470 = state_43355__$1;
(statearr_43405_43470[(2)] = null);

(statearr_43405_43470[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (17))){
var state_43355__$1 = state_43355;
var statearr_43406_43471 = state_43355__$1;
(statearr_43406_43471[(2)] = null);

(statearr_43406_43471[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (3))){
var inst_43353 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43355__$1,inst_43353);
} else {
if((state_val_43356 === (12))){
var inst_43282 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43407_43472 = state_43355__$1;
(statearr_43407_43472[(2)] = inst_43282);

(statearr_43407_43472[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (2))){
var state_43355__$1 = state_43355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43355__$1,(4),ch);
} else {
if((state_val_43356 === (23))){
var state_43355__$1 = state_43355;
var statearr_43408_43473 = state_43355__$1;
(statearr_43408_43473[(2)] = null);

(statearr_43408_43473[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (35))){
var inst_43337 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43409_43474 = state_43355__$1;
(statearr_43409_43474[(2)] = inst_43337);

(statearr_43409_43474[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (19))){
var inst_43254 = (state_43355[(7)]);
var inst_43258 = cljs.core.chunk_first(inst_43254);
var inst_43259 = cljs.core.chunk_rest(inst_43254);
var inst_43260 = cljs.core.count(inst_43258);
var inst_43232 = inst_43259;
var inst_43233 = inst_43258;
var inst_43234 = inst_43260;
var inst_43235 = (0);
var state_43355__$1 = (function (){var statearr_43410 = state_43355;
(statearr_43410[(13)] = inst_43232);

(statearr_43410[(14)] = inst_43234);

(statearr_43410[(15)] = inst_43233);

(statearr_43410[(17)] = inst_43235);

return statearr_43410;
})();
var statearr_43411_43475 = state_43355__$1;
(statearr_43411_43475[(2)] = null);

(statearr_43411_43475[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (11))){
var inst_43254 = (state_43355[(7)]);
var inst_43232 = (state_43355[(13)]);
var inst_43254__$1 = cljs.core.seq(inst_43232);
var state_43355__$1 = (function (){var statearr_43412 = state_43355;
(statearr_43412[(7)] = inst_43254__$1);

return statearr_43412;
})();
if(inst_43254__$1){
var statearr_43413_43476 = state_43355__$1;
(statearr_43413_43476[(1)] = (16));

} else {
var statearr_43414_43477 = state_43355__$1;
(statearr_43414_43477[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (9))){
var inst_43284 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43415_43478 = state_43355__$1;
(statearr_43415_43478[(2)] = inst_43284);

(statearr_43415_43478[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (5))){
var inst_43230 = cljs.core.deref(cs);
var inst_43231 = cljs.core.seq(inst_43230);
var inst_43232 = inst_43231;
var inst_43233 = null;
var inst_43234 = (0);
var inst_43235 = (0);
var state_43355__$1 = (function (){var statearr_43416 = state_43355;
(statearr_43416[(13)] = inst_43232);

(statearr_43416[(14)] = inst_43234);

(statearr_43416[(15)] = inst_43233);

(statearr_43416[(17)] = inst_43235);

return statearr_43416;
})();
var statearr_43417_43479 = state_43355__$1;
(statearr_43417_43479[(2)] = null);

(statearr_43417_43479[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (14))){
var state_43355__$1 = state_43355;
var statearr_43418_43480 = state_43355__$1;
(statearr_43418_43480[(2)] = null);

(statearr_43418_43480[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (45))){
var inst_43345 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43419_43481 = state_43355__$1;
(statearr_43419_43481[(2)] = inst_43345);

(statearr_43419_43481[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (26))){
var inst_43287 = (state_43355[(29)]);
var inst_43341 = (state_43355[(2)]);
var inst_43342 = cljs.core.seq(inst_43287);
var state_43355__$1 = (function (){var statearr_43420 = state_43355;
(statearr_43420[(31)] = inst_43341);

return statearr_43420;
})();
if(inst_43342){
var statearr_43421_43482 = state_43355__$1;
(statearr_43421_43482[(1)] = (42));

} else {
var statearr_43422_43483 = state_43355__$1;
(statearr_43422_43483[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (16))){
var inst_43254 = (state_43355[(7)]);
var inst_43256 = cljs.core.chunked_seq_QMARK_(inst_43254);
var state_43355__$1 = state_43355;
if(inst_43256){
var statearr_43423_43484 = state_43355__$1;
(statearr_43423_43484[(1)] = (19));

} else {
var statearr_43424_43485 = state_43355__$1;
(statearr_43424_43485[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (38))){
var inst_43334 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43425_43486 = state_43355__$1;
(statearr_43425_43486[(2)] = inst_43334);

(statearr_43425_43486[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (30))){
var state_43355__$1 = state_43355;
var statearr_43426_43487 = state_43355__$1;
(statearr_43426_43487[(2)] = null);

(statearr_43426_43487[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (10))){
var inst_43233 = (state_43355[(15)]);
var inst_43235 = (state_43355[(17)]);
var inst_43243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43233,inst_43235);
var inst_43244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43243,(0),null);
var inst_43245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43243,(1),null);
var state_43355__$1 = (function (){var statearr_43427 = state_43355;
(statearr_43427[(26)] = inst_43244);

return statearr_43427;
})();
if(cljs.core.truth_(inst_43245)){
var statearr_43428_43488 = state_43355__$1;
(statearr_43428_43488[(1)] = (13));

} else {
var statearr_43429_43489 = state_43355__$1;
(statearr_43429_43489[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (18))){
var inst_43280 = (state_43355[(2)]);
var state_43355__$1 = state_43355;
var statearr_43430_43490 = state_43355__$1;
(statearr_43430_43490[(2)] = inst_43280);

(statearr_43430_43490[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (42))){
var state_43355__$1 = state_43355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43355__$1,(45),dchan);
} else {
if((state_val_43356 === (37))){
var inst_43323 = (state_43355[(23)]);
var inst_43314 = (state_43355[(25)]);
var inst_43223 = (state_43355[(11)]);
var inst_43323__$1 = cljs.core.first(inst_43314);
var inst_43324 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43323__$1,inst_43223,done);
var state_43355__$1 = (function (){var statearr_43431 = state_43355;
(statearr_43431[(23)] = inst_43323__$1);

return statearr_43431;
})();
if(cljs.core.truth_(inst_43324)){
var statearr_43432_43491 = state_43355__$1;
(statearr_43432_43491[(1)] = (39));

} else {
var statearr_43433_43492 = state_43355__$1;
(statearr_43433_43492[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43356 === (8))){
var inst_43234 = (state_43355[(14)]);
var inst_43235 = (state_43355[(17)]);
var inst_43237 = (inst_43235 < inst_43234);
var inst_43238 = inst_43237;
var state_43355__$1 = state_43355;
if(cljs.core.truth_(inst_43238)){
var statearr_43434_43493 = state_43355__$1;
(statearr_43434_43493[(1)] = (10));

} else {
var statearr_43435_43494 = state_43355__$1;
(statearr_43435_43494[(1)] = (11));

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
});})(c__40751__auto___43440,cs,m,dchan,dctr,done))
;
return ((function (switch__40560__auto__,c__40751__auto___43440,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40561__auto__ = null;
var cljs$core$async$mult_$_state_machine__40561__auto____0 = (function (){
var statearr_43436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43436[(0)] = cljs$core$async$mult_$_state_machine__40561__auto__);

(statearr_43436[(1)] = (1));

return statearr_43436;
});
var cljs$core$async$mult_$_state_machine__40561__auto____1 = (function (state_43355){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43355);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43437){if((e43437 instanceof Object)){
var ex__40564__auto__ = e43437;
var statearr_43438_43495 = state_43355;
(statearr_43438_43495[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43355);

return cljs.core.cst$kw$recur;
} else {
throw e43437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43496 = state_43355;
state_43355 = G__43496;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40561__auto__ = function(state_43355){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40561__auto____1.call(this,state_43355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40561__auto____0;
cljs$core$async$mult_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40561__auto____1;
return cljs$core$async$mult_$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___43440,cs,m,dchan,dctr,done))
})();
var state__40753__auto__ = (function (){var statearr_43439 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43439[(6)] = c__40751__auto___43440);

return statearr_43439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___43440,cs,m,dchan,dctr,done))
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
var G__43498 = arguments.length;
switch (G__43498) {
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
var len__4730__auto___43510 = arguments.length;
var i__4731__auto___43511 = (0);
while(true){
if((i__4731__auto___43511 < len__4730__auto___43510)){
args__4736__auto__.push((arguments[i__4731__auto___43511]));

var G__43512 = (i__4731__auto___43511 + (1));
i__4731__auto___43511 = G__43512;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43504){
var map__43505 = p__43504;
var map__43505__$1 = (((((!((map__43505 == null))))?(((((map__43505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43505):map__43505);
var opts = map__43505__$1;
var statearr_43507_43513 = state;
(statearr_43507_43513[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__43505,map__43505__$1,opts){
return (function (val){
var statearr_43508_43514 = state;
(statearr_43508_43514[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__43505,map__43505__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_43509_43515 = state;
(statearr_43509_43515[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43500){
var G__43501 = cljs.core.first(seq43500);
var seq43500__$1 = cljs.core.next(seq43500);
var G__43502 = cljs.core.first(seq43500__$1);
var seq43500__$2 = cljs.core.next(seq43500__$1);
var G__43503 = cljs.core.first(seq43500__$2);
var seq43500__$3 = cljs.core.next(seq43500__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43501,G__43502,G__43503,seq43500__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43516 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43517){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43517 = meta43517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43518,meta43517__$1){
var self__ = this;
var _43518__$1 = this;
return (new cljs.core.async.t_cljs$core$async43516(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43517__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43518){
var self__ = this;
var _43518__$1 = this;
return self__.meta43517;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43516.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta43517], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43516";

cljs.core.async.t_cljs$core$async43516.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43516");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43516.
 */
cljs.core.async.__GT_t_cljs$core$async43516 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43516(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43517){
return (new cljs.core.async.t_cljs$core$async43516(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43517));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43516(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40751__auto___43680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___43680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___43680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43620){
var state_val_43621 = (state_43620[(1)]);
if((state_val_43621 === (7))){
var inst_43535 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43622_43681 = state_43620__$1;
(statearr_43622_43681[(2)] = inst_43535);

(statearr_43622_43681[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (20))){
var inst_43547 = (state_43620[(7)]);
var state_43620__$1 = state_43620;
var statearr_43623_43682 = state_43620__$1;
(statearr_43623_43682[(2)] = inst_43547);

(statearr_43623_43682[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (27))){
var state_43620__$1 = state_43620;
var statearr_43624_43683 = state_43620__$1;
(statearr_43624_43683[(2)] = null);

(statearr_43624_43683[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (1))){
var inst_43522 = (state_43620[(8)]);
var inst_43522__$1 = calc_state();
var inst_43524 = (inst_43522__$1 == null);
var inst_43525 = cljs.core.not(inst_43524);
var state_43620__$1 = (function (){var statearr_43625 = state_43620;
(statearr_43625[(8)] = inst_43522__$1);

return statearr_43625;
})();
if(inst_43525){
var statearr_43626_43684 = state_43620__$1;
(statearr_43626_43684[(1)] = (2));

} else {
var statearr_43627_43685 = state_43620__$1;
(statearr_43627_43685[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (24))){
var inst_43594 = (state_43620[(9)]);
var inst_43580 = (state_43620[(10)]);
var inst_43571 = (state_43620[(11)]);
var inst_43594__$1 = (inst_43571.cljs$core$IFn$_invoke$arity$1 ? inst_43571.cljs$core$IFn$_invoke$arity$1(inst_43580) : inst_43571.call(null,inst_43580));
var state_43620__$1 = (function (){var statearr_43628 = state_43620;
(statearr_43628[(9)] = inst_43594__$1);

return statearr_43628;
})();
if(cljs.core.truth_(inst_43594__$1)){
var statearr_43629_43686 = state_43620__$1;
(statearr_43629_43686[(1)] = (29));

} else {
var statearr_43630_43687 = state_43620__$1;
(statearr_43630_43687[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (4))){
var inst_43538 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43538)){
var statearr_43631_43688 = state_43620__$1;
(statearr_43631_43688[(1)] = (8));

} else {
var statearr_43632_43689 = state_43620__$1;
(statearr_43632_43689[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (15))){
var inst_43565 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43565)){
var statearr_43633_43690 = state_43620__$1;
(statearr_43633_43690[(1)] = (19));

} else {
var statearr_43634_43691 = state_43620__$1;
(statearr_43634_43691[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (21))){
var inst_43570 = (state_43620[(12)]);
var inst_43570__$1 = (state_43620[(2)]);
var inst_43571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43570__$1,cljs.core.cst$kw$solos);
var inst_43572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43570__$1,cljs.core.cst$kw$mutes);
var inst_43573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43570__$1,cljs.core.cst$kw$reads);
var state_43620__$1 = (function (){var statearr_43635 = state_43620;
(statearr_43635[(13)] = inst_43572);

(statearr_43635[(11)] = inst_43571);

(statearr_43635[(12)] = inst_43570__$1);

return statearr_43635;
})();
return cljs.core.async.ioc_alts_BANG_(state_43620__$1,(22),inst_43573);
} else {
if((state_val_43621 === (31))){
var inst_43602 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43602)){
var statearr_43636_43692 = state_43620__$1;
(statearr_43636_43692[(1)] = (32));

} else {
var statearr_43637_43693 = state_43620__$1;
(statearr_43637_43693[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (32))){
var inst_43579 = (state_43620[(14)]);
var state_43620__$1 = state_43620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43620__$1,(35),out,inst_43579);
} else {
if((state_val_43621 === (33))){
var inst_43570 = (state_43620[(12)]);
var inst_43547 = inst_43570;
var state_43620__$1 = (function (){var statearr_43638 = state_43620;
(statearr_43638[(7)] = inst_43547);

return statearr_43638;
})();
var statearr_43639_43694 = state_43620__$1;
(statearr_43639_43694[(2)] = null);

(statearr_43639_43694[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (13))){
var inst_43547 = (state_43620[(7)]);
var inst_43554 = inst_43547.cljs$lang$protocol_mask$partition0$;
var inst_43555 = (inst_43554 & (64));
var inst_43556 = inst_43547.cljs$core$ISeq$;
var inst_43557 = (cljs.core.PROTOCOL_SENTINEL === inst_43556);
var inst_43558 = ((inst_43555) || (inst_43557));
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43558)){
var statearr_43640_43695 = state_43620__$1;
(statearr_43640_43695[(1)] = (16));

} else {
var statearr_43641_43696 = state_43620__$1;
(statearr_43641_43696[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (22))){
var inst_43579 = (state_43620[(14)]);
var inst_43580 = (state_43620[(10)]);
var inst_43578 = (state_43620[(2)]);
var inst_43579__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43578,(0),null);
var inst_43580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43578,(1),null);
var inst_43581 = (inst_43579__$1 == null);
var inst_43582 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43580__$1,change);
var inst_43583 = ((inst_43581) || (inst_43582));
var state_43620__$1 = (function (){var statearr_43642 = state_43620;
(statearr_43642[(14)] = inst_43579__$1);

(statearr_43642[(10)] = inst_43580__$1);

return statearr_43642;
})();
if(cljs.core.truth_(inst_43583)){
var statearr_43643_43697 = state_43620__$1;
(statearr_43643_43697[(1)] = (23));

} else {
var statearr_43644_43698 = state_43620__$1;
(statearr_43644_43698[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (36))){
var inst_43570 = (state_43620[(12)]);
var inst_43547 = inst_43570;
var state_43620__$1 = (function (){var statearr_43645 = state_43620;
(statearr_43645[(7)] = inst_43547);

return statearr_43645;
})();
var statearr_43646_43699 = state_43620__$1;
(statearr_43646_43699[(2)] = null);

(statearr_43646_43699[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (29))){
var inst_43594 = (state_43620[(9)]);
var state_43620__$1 = state_43620;
var statearr_43647_43700 = state_43620__$1;
(statearr_43647_43700[(2)] = inst_43594);

(statearr_43647_43700[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (6))){
var state_43620__$1 = state_43620;
var statearr_43648_43701 = state_43620__$1;
(statearr_43648_43701[(2)] = false);

(statearr_43648_43701[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (28))){
var inst_43590 = (state_43620[(2)]);
var inst_43591 = calc_state();
var inst_43547 = inst_43591;
var state_43620__$1 = (function (){var statearr_43649 = state_43620;
(statearr_43649[(7)] = inst_43547);

(statearr_43649[(15)] = inst_43590);

return statearr_43649;
})();
var statearr_43650_43702 = state_43620__$1;
(statearr_43650_43702[(2)] = null);

(statearr_43650_43702[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (25))){
var inst_43616 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43651_43703 = state_43620__$1;
(statearr_43651_43703[(2)] = inst_43616);

(statearr_43651_43703[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (34))){
var inst_43614 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43652_43704 = state_43620__$1;
(statearr_43652_43704[(2)] = inst_43614);

(statearr_43652_43704[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (17))){
var state_43620__$1 = state_43620;
var statearr_43653_43705 = state_43620__$1;
(statearr_43653_43705[(2)] = false);

(statearr_43653_43705[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (3))){
var state_43620__$1 = state_43620;
var statearr_43654_43706 = state_43620__$1;
(statearr_43654_43706[(2)] = false);

(statearr_43654_43706[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (12))){
var inst_43618 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43620__$1,inst_43618);
} else {
if((state_val_43621 === (2))){
var inst_43522 = (state_43620[(8)]);
var inst_43527 = inst_43522.cljs$lang$protocol_mask$partition0$;
var inst_43528 = (inst_43527 & (64));
var inst_43529 = inst_43522.cljs$core$ISeq$;
var inst_43530 = (cljs.core.PROTOCOL_SENTINEL === inst_43529);
var inst_43531 = ((inst_43528) || (inst_43530));
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43531)){
var statearr_43655_43707 = state_43620__$1;
(statearr_43655_43707[(1)] = (5));

} else {
var statearr_43656_43708 = state_43620__$1;
(statearr_43656_43708[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (23))){
var inst_43579 = (state_43620[(14)]);
var inst_43585 = (inst_43579 == null);
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43585)){
var statearr_43657_43709 = state_43620__$1;
(statearr_43657_43709[(1)] = (26));

} else {
var statearr_43658_43710 = state_43620__$1;
(statearr_43658_43710[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (35))){
var inst_43605 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43605)){
var statearr_43659_43711 = state_43620__$1;
(statearr_43659_43711[(1)] = (36));

} else {
var statearr_43660_43712 = state_43620__$1;
(statearr_43660_43712[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (19))){
var inst_43547 = (state_43620[(7)]);
var inst_43567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43547);
var state_43620__$1 = state_43620;
var statearr_43661_43713 = state_43620__$1;
(statearr_43661_43713[(2)] = inst_43567);

(statearr_43661_43713[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (11))){
var inst_43547 = (state_43620[(7)]);
var inst_43551 = (inst_43547 == null);
var inst_43552 = cljs.core.not(inst_43551);
var state_43620__$1 = state_43620;
if(inst_43552){
var statearr_43662_43714 = state_43620__$1;
(statearr_43662_43714[(1)] = (13));

} else {
var statearr_43663_43715 = state_43620__$1;
(statearr_43663_43715[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (9))){
var inst_43522 = (state_43620[(8)]);
var state_43620__$1 = state_43620;
var statearr_43664_43716 = state_43620__$1;
(statearr_43664_43716[(2)] = inst_43522);

(statearr_43664_43716[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (5))){
var state_43620__$1 = state_43620;
var statearr_43665_43717 = state_43620__$1;
(statearr_43665_43717[(2)] = true);

(statearr_43665_43717[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (14))){
var state_43620__$1 = state_43620;
var statearr_43666_43718 = state_43620__$1;
(statearr_43666_43718[(2)] = false);

(statearr_43666_43718[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (26))){
var inst_43580 = (state_43620[(10)]);
var inst_43587 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43580);
var state_43620__$1 = state_43620;
var statearr_43667_43719 = state_43620__$1;
(statearr_43667_43719[(2)] = inst_43587);

(statearr_43667_43719[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (16))){
var state_43620__$1 = state_43620;
var statearr_43668_43720 = state_43620__$1;
(statearr_43668_43720[(2)] = true);

(statearr_43668_43720[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (38))){
var inst_43610 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43669_43721 = state_43620__$1;
(statearr_43669_43721[(2)] = inst_43610);

(statearr_43669_43721[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (30))){
var inst_43572 = (state_43620[(13)]);
var inst_43580 = (state_43620[(10)]);
var inst_43571 = (state_43620[(11)]);
var inst_43597 = cljs.core.empty_QMARK_(inst_43571);
var inst_43598 = (inst_43572.cljs$core$IFn$_invoke$arity$1 ? inst_43572.cljs$core$IFn$_invoke$arity$1(inst_43580) : inst_43572.call(null,inst_43580));
var inst_43599 = cljs.core.not(inst_43598);
var inst_43600 = ((inst_43597) && (inst_43599));
var state_43620__$1 = state_43620;
var statearr_43670_43722 = state_43620__$1;
(statearr_43670_43722[(2)] = inst_43600);

(statearr_43670_43722[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (10))){
var inst_43522 = (state_43620[(8)]);
var inst_43543 = (state_43620[(2)]);
var inst_43544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43543,cljs.core.cst$kw$solos);
var inst_43545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43543,cljs.core.cst$kw$mutes);
var inst_43546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43543,cljs.core.cst$kw$reads);
var inst_43547 = inst_43522;
var state_43620__$1 = (function (){var statearr_43671 = state_43620;
(statearr_43671[(16)] = inst_43546);

(statearr_43671[(7)] = inst_43547);

(statearr_43671[(17)] = inst_43545);

(statearr_43671[(18)] = inst_43544);

return statearr_43671;
})();
var statearr_43672_43723 = state_43620__$1;
(statearr_43672_43723[(2)] = null);

(statearr_43672_43723[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (18))){
var inst_43562 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43673_43724 = state_43620__$1;
(statearr_43673_43724[(2)] = inst_43562);

(statearr_43673_43724[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (37))){
var state_43620__$1 = state_43620;
var statearr_43674_43725 = state_43620__$1;
(statearr_43674_43725[(2)] = null);

(statearr_43674_43725[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43621 === (8))){
var inst_43522 = (state_43620[(8)]);
var inst_43540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43522);
var state_43620__$1 = state_43620;
var statearr_43675_43726 = state_43620__$1;
(statearr_43675_43726[(2)] = inst_43540);

(statearr_43675_43726[(1)] = (10));


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
});})(c__40751__auto___43680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40560__auto__,c__40751__auto___43680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40561__auto__ = null;
var cljs$core$async$mix_$_state_machine__40561__auto____0 = (function (){
var statearr_43676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43676[(0)] = cljs$core$async$mix_$_state_machine__40561__auto__);

(statearr_43676[(1)] = (1));

return statearr_43676;
});
var cljs$core$async$mix_$_state_machine__40561__auto____1 = (function (state_43620){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43620);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43677){if((e43677 instanceof Object)){
var ex__40564__auto__ = e43677;
var statearr_43678_43727 = state_43620;
(statearr_43678_43727[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43620);

return cljs.core.cst$kw$recur;
} else {
throw e43677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43728 = state_43620;
state_43620 = G__43728;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40561__auto__ = function(state_43620){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40561__auto____1.call(this,state_43620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40561__auto____0;
cljs$core$async$mix_$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40561__auto____1;
return cljs$core$async$mix_$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___43680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40753__auto__ = (function (){var statearr_43679 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43679[(6)] = c__40751__auto___43680);

return statearr_43679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___43680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__43730 = arguments.length;
switch (G__43730) {
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
var G__43734 = arguments.length;
switch (G__43734) {
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
return (function (p1__43732_SHARP_){
if(cljs.core.truth_((p1__43732_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43732_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43732_SHARP_.call(null,topic)))){
return p1__43732_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43732_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43735 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43736){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43736 = meta43736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43737,meta43736__$1){
var self__ = this;
var _43737__$1 = this;
return (new cljs.core.async.t_cljs$core$async43735(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43736__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43737){
var self__ = this;
var _43737__$1 = this;
return self__.meta43736;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43735.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta43736], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43735";

cljs.core.async.t_cljs$core$async43735.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43735");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43735.
 */
cljs.core.async.__GT_t_cljs$core$async43735 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43736){
return (new cljs.core.async.t_cljs$core$async43735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43736));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43735(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40751__auto___43855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___43855,mults,ensure_mult,p){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___43855,mults,ensure_mult,p){
return (function (state_43809){
var state_val_43810 = (state_43809[(1)]);
if((state_val_43810 === (7))){
var inst_43805 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43811_43856 = state_43809__$1;
(statearr_43811_43856[(2)] = inst_43805);

(statearr_43811_43856[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (20))){
var state_43809__$1 = state_43809;
var statearr_43812_43857 = state_43809__$1;
(statearr_43812_43857[(2)] = null);

(statearr_43812_43857[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (1))){
var state_43809__$1 = state_43809;
var statearr_43813_43858 = state_43809__$1;
(statearr_43813_43858[(2)] = null);

(statearr_43813_43858[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (24))){
var inst_43788 = (state_43809[(7)]);
var inst_43797 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43788);
var state_43809__$1 = state_43809;
var statearr_43814_43859 = state_43809__$1;
(statearr_43814_43859[(2)] = inst_43797);

(statearr_43814_43859[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (4))){
var inst_43740 = (state_43809[(8)]);
var inst_43740__$1 = (state_43809[(2)]);
var inst_43741 = (inst_43740__$1 == null);
var state_43809__$1 = (function (){var statearr_43815 = state_43809;
(statearr_43815[(8)] = inst_43740__$1);

return statearr_43815;
})();
if(cljs.core.truth_(inst_43741)){
var statearr_43816_43860 = state_43809__$1;
(statearr_43816_43860[(1)] = (5));

} else {
var statearr_43817_43861 = state_43809__$1;
(statearr_43817_43861[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (15))){
var inst_43782 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43818_43862 = state_43809__$1;
(statearr_43818_43862[(2)] = inst_43782);

(statearr_43818_43862[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (21))){
var inst_43802 = (state_43809[(2)]);
var state_43809__$1 = (function (){var statearr_43819 = state_43809;
(statearr_43819[(9)] = inst_43802);

return statearr_43819;
})();
var statearr_43820_43863 = state_43809__$1;
(statearr_43820_43863[(2)] = null);

(statearr_43820_43863[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (13))){
var inst_43764 = (state_43809[(10)]);
var inst_43766 = cljs.core.chunked_seq_QMARK_(inst_43764);
var state_43809__$1 = state_43809;
if(inst_43766){
var statearr_43821_43864 = state_43809__$1;
(statearr_43821_43864[(1)] = (16));

} else {
var statearr_43822_43865 = state_43809__$1;
(statearr_43822_43865[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (22))){
var inst_43794 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
if(cljs.core.truth_(inst_43794)){
var statearr_43823_43866 = state_43809__$1;
(statearr_43823_43866[(1)] = (23));

} else {
var statearr_43824_43867 = state_43809__$1;
(statearr_43824_43867[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (6))){
var inst_43740 = (state_43809[(8)]);
var inst_43790 = (state_43809[(11)]);
var inst_43788 = (state_43809[(7)]);
var inst_43788__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43740) : topic_fn.call(null,inst_43740));
var inst_43789 = cljs.core.deref(mults);
var inst_43790__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43789,inst_43788__$1);
var state_43809__$1 = (function (){var statearr_43825 = state_43809;
(statearr_43825[(11)] = inst_43790__$1);

(statearr_43825[(7)] = inst_43788__$1);

return statearr_43825;
})();
if(cljs.core.truth_(inst_43790__$1)){
var statearr_43826_43868 = state_43809__$1;
(statearr_43826_43868[(1)] = (19));

} else {
var statearr_43827_43869 = state_43809__$1;
(statearr_43827_43869[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (25))){
var inst_43799 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43828_43870 = state_43809__$1;
(statearr_43828_43870[(2)] = inst_43799);

(statearr_43828_43870[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (17))){
var inst_43764 = (state_43809[(10)]);
var inst_43773 = cljs.core.first(inst_43764);
var inst_43774 = cljs.core.async.muxch_STAR_(inst_43773);
var inst_43775 = cljs.core.async.close_BANG_(inst_43774);
var inst_43776 = cljs.core.next(inst_43764);
var inst_43750 = inst_43776;
var inst_43751 = null;
var inst_43752 = (0);
var inst_43753 = (0);
var state_43809__$1 = (function (){var statearr_43829 = state_43809;
(statearr_43829[(12)] = inst_43752);

(statearr_43829[(13)] = inst_43750);

(statearr_43829[(14)] = inst_43775);

(statearr_43829[(15)] = inst_43751);

(statearr_43829[(16)] = inst_43753);

return statearr_43829;
})();
var statearr_43830_43871 = state_43809__$1;
(statearr_43830_43871[(2)] = null);

(statearr_43830_43871[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (3))){
var inst_43807 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43809__$1,inst_43807);
} else {
if((state_val_43810 === (12))){
var inst_43784 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43831_43872 = state_43809__$1;
(statearr_43831_43872[(2)] = inst_43784);

(statearr_43831_43872[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (2))){
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43809__$1,(4),ch);
} else {
if((state_val_43810 === (23))){
var state_43809__$1 = state_43809;
var statearr_43832_43873 = state_43809__$1;
(statearr_43832_43873[(2)] = null);

(statearr_43832_43873[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (19))){
var inst_43740 = (state_43809[(8)]);
var inst_43790 = (state_43809[(11)]);
var inst_43792 = cljs.core.async.muxch_STAR_(inst_43790);
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43809__$1,(22),inst_43792,inst_43740);
} else {
if((state_val_43810 === (11))){
var inst_43750 = (state_43809[(13)]);
var inst_43764 = (state_43809[(10)]);
var inst_43764__$1 = cljs.core.seq(inst_43750);
var state_43809__$1 = (function (){var statearr_43833 = state_43809;
(statearr_43833[(10)] = inst_43764__$1);

return statearr_43833;
})();
if(inst_43764__$1){
var statearr_43834_43874 = state_43809__$1;
(statearr_43834_43874[(1)] = (13));

} else {
var statearr_43835_43875 = state_43809__$1;
(statearr_43835_43875[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (9))){
var inst_43786 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43836_43876 = state_43809__$1;
(statearr_43836_43876[(2)] = inst_43786);

(statearr_43836_43876[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (5))){
var inst_43747 = cljs.core.deref(mults);
var inst_43748 = cljs.core.vals(inst_43747);
var inst_43749 = cljs.core.seq(inst_43748);
var inst_43750 = inst_43749;
var inst_43751 = null;
var inst_43752 = (0);
var inst_43753 = (0);
var state_43809__$1 = (function (){var statearr_43837 = state_43809;
(statearr_43837[(12)] = inst_43752);

(statearr_43837[(13)] = inst_43750);

(statearr_43837[(15)] = inst_43751);

(statearr_43837[(16)] = inst_43753);

return statearr_43837;
})();
var statearr_43838_43877 = state_43809__$1;
(statearr_43838_43877[(2)] = null);

(statearr_43838_43877[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (14))){
var state_43809__$1 = state_43809;
var statearr_43842_43878 = state_43809__$1;
(statearr_43842_43878[(2)] = null);

(statearr_43842_43878[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (16))){
var inst_43764 = (state_43809[(10)]);
var inst_43768 = cljs.core.chunk_first(inst_43764);
var inst_43769 = cljs.core.chunk_rest(inst_43764);
var inst_43770 = cljs.core.count(inst_43768);
var inst_43750 = inst_43769;
var inst_43751 = inst_43768;
var inst_43752 = inst_43770;
var inst_43753 = (0);
var state_43809__$1 = (function (){var statearr_43843 = state_43809;
(statearr_43843[(12)] = inst_43752);

(statearr_43843[(13)] = inst_43750);

(statearr_43843[(15)] = inst_43751);

(statearr_43843[(16)] = inst_43753);

return statearr_43843;
})();
var statearr_43844_43879 = state_43809__$1;
(statearr_43844_43879[(2)] = null);

(statearr_43844_43879[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (10))){
var inst_43752 = (state_43809[(12)]);
var inst_43750 = (state_43809[(13)]);
var inst_43751 = (state_43809[(15)]);
var inst_43753 = (state_43809[(16)]);
var inst_43758 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43751,inst_43753);
var inst_43759 = cljs.core.async.muxch_STAR_(inst_43758);
var inst_43760 = cljs.core.async.close_BANG_(inst_43759);
var inst_43761 = (inst_43753 + (1));
var tmp43839 = inst_43752;
var tmp43840 = inst_43750;
var tmp43841 = inst_43751;
var inst_43750__$1 = tmp43840;
var inst_43751__$1 = tmp43841;
var inst_43752__$1 = tmp43839;
var inst_43753__$1 = inst_43761;
var state_43809__$1 = (function (){var statearr_43845 = state_43809;
(statearr_43845[(12)] = inst_43752__$1);

(statearr_43845[(17)] = inst_43760);

(statearr_43845[(13)] = inst_43750__$1);

(statearr_43845[(15)] = inst_43751__$1);

(statearr_43845[(16)] = inst_43753__$1);

return statearr_43845;
})();
var statearr_43846_43880 = state_43809__$1;
(statearr_43846_43880[(2)] = null);

(statearr_43846_43880[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (18))){
var inst_43779 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43847_43881 = state_43809__$1;
(statearr_43847_43881[(2)] = inst_43779);

(statearr_43847_43881[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43810 === (8))){
var inst_43752 = (state_43809[(12)]);
var inst_43753 = (state_43809[(16)]);
var inst_43755 = (inst_43753 < inst_43752);
var inst_43756 = inst_43755;
var state_43809__$1 = state_43809;
if(cljs.core.truth_(inst_43756)){
var statearr_43848_43882 = state_43809__$1;
(statearr_43848_43882[(1)] = (10));

} else {
var statearr_43849_43883 = state_43809__$1;
(statearr_43849_43883[(1)] = (11));

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
});})(c__40751__auto___43855,mults,ensure_mult,p))
;
return ((function (switch__40560__auto__,c__40751__auto___43855,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_43850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43850[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_43850[(1)] = (1));

return statearr_43850;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_43809){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43809);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43851){if((e43851 instanceof Object)){
var ex__40564__auto__ = e43851;
var statearr_43852_43884 = state_43809;
(statearr_43852_43884[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43809);

return cljs.core.cst$kw$recur;
} else {
throw e43851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43885 = state_43809;
state_43809 = G__43885;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_43809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_43809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___43855,mults,ensure_mult,p))
})();
var state__40753__auto__ = (function (){var statearr_43853 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43853[(6)] = c__40751__auto___43855);

return statearr_43853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___43855,mults,ensure_mult,p))
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
var G__43887 = arguments.length;
switch (G__43887) {
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
var G__43890 = arguments.length;
switch (G__43890) {
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
var G__43893 = arguments.length;
switch (G__43893) {
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
var c__40751__auto___43960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___43960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___43960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43932){
var state_val_43933 = (state_43932[(1)]);
if((state_val_43933 === (7))){
var state_43932__$1 = state_43932;
var statearr_43934_43961 = state_43932__$1;
(statearr_43934_43961[(2)] = null);

(statearr_43934_43961[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (1))){
var state_43932__$1 = state_43932;
var statearr_43935_43962 = state_43932__$1;
(statearr_43935_43962[(2)] = null);

(statearr_43935_43962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (4))){
var inst_43896 = (state_43932[(7)]);
var inst_43898 = (inst_43896 < cnt);
var state_43932__$1 = state_43932;
if(cljs.core.truth_(inst_43898)){
var statearr_43936_43963 = state_43932__$1;
(statearr_43936_43963[(1)] = (6));

} else {
var statearr_43937_43964 = state_43932__$1;
(statearr_43937_43964[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (15))){
var inst_43928 = (state_43932[(2)]);
var state_43932__$1 = state_43932;
var statearr_43938_43965 = state_43932__$1;
(statearr_43938_43965[(2)] = inst_43928);

(statearr_43938_43965[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (13))){
var inst_43921 = cljs.core.async.close_BANG_(out);
var state_43932__$1 = state_43932;
var statearr_43939_43966 = state_43932__$1;
(statearr_43939_43966[(2)] = inst_43921);

(statearr_43939_43966[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (6))){
var state_43932__$1 = state_43932;
var statearr_43940_43967 = state_43932__$1;
(statearr_43940_43967[(2)] = null);

(statearr_43940_43967[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (3))){
var inst_43930 = (state_43932[(2)]);
var state_43932__$1 = state_43932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43932__$1,inst_43930);
} else {
if((state_val_43933 === (12))){
var inst_43918 = (state_43932[(8)]);
var inst_43918__$1 = (state_43932[(2)]);
var inst_43919 = cljs.core.some(cljs.core.nil_QMARK_,inst_43918__$1);
var state_43932__$1 = (function (){var statearr_43941 = state_43932;
(statearr_43941[(8)] = inst_43918__$1);

return statearr_43941;
})();
if(cljs.core.truth_(inst_43919)){
var statearr_43942_43968 = state_43932__$1;
(statearr_43942_43968[(1)] = (13));

} else {
var statearr_43943_43969 = state_43932__$1;
(statearr_43943_43969[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (2))){
var inst_43895 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43896 = (0);
var state_43932__$1 = (function (){var statearr_43944 = state_43932;
(statearr_43944[(9)] = inst_43895);

(statearr_43944[(7)] = inst_43896);

return statearr_43944;
})();
var statearr_43945_43970 = state_43932__$1;
(statearr_43945_43970[(2)] = null);

(statearr_43945_43970[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (11))){
var inst_43896 = (state_43932[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43932,(10),Object,null,(9));
var inst_43905 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43896) : chs__$1.call(null,inst_43896));
var inst_43906 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43896) : done.call(null,inst_43896));
var inst_43907 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43905,inst_43906);
var state_43932__$1 = state_43932;
var statearr_43946_43971 = state_43932__$1;
(statearr_43946_43971[(2)] = inst_43907);


cljs.core.async.impl.ioc_helpers.process_exception(state_43932__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (9))){
var inst_43896 = (state_43932[(7)]);
var inst_43909 = (state_43932[(2)]);
var inst_43910 = (inst_43896 + (1));
var inst_43896__$1 = inst_43910;
var state_43932__$1 = (function (){var statearr_43947 = state_43932;
(statearr_43947[(7)] = inst_43896__$1);

(statearr_43947[(10)] = inst_43909);

return statearr_43947;
})();
var statearr_43948_43972 = state_43932__$1;
(statearr_43948_43972[(2)] = null);

(statearr_43948_43972[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (5))){
var inst_43916 = (state_43932[(2)]);
var state_43932__$1 = (function (){var statearr_43949 = state_43932;
(statearr_43949[(11)] = inst_43916);

return statearr_43949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43932__$1,(12),dchan);
} else {
if((state_val_43933 === (14))){
var inst_43918 = (state_43932[(8)]);
var inst_43923 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43918);
var state_43932__$1 = state_43932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43932__$1,(16),out,inst_43923);
} else {
if((state_val_43933 === (16))){
var inst_43925 = (state_43932[(2)]);
var state_43932__$1 = (function (){var statearr_43950 = state_43932;
(statearr_43950[(12)] = inst_43925);

return statearr_43950;
})();
var statearr_43951_43973 = state_43932__$1;
(statearr_43951_43973[(2)] = null);

(statearr_43951_43973[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (10))){
var inst_43900 = (state_43932[(2)]);
var inst_43901 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43932__$1 = (function (){var statearr_43952 = state_43932;
(statearr_43952[(13)] = inst_43900);

return statearr_43952;
})();
var statearr_43953_43974 = state_43932__$1;
(statearr_43953_43974[(2)] = inst_43901);


cljs.core.async.impl.ioc_helpers.process_exception(state_43932__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_43933 === (8))){
var inst_43914 = (state_43932[(2)]);
var state_43932__$1 = state_43932;
var statearr_43954_43975 = state_43932__$1;
(statearr_43954_43975[(2)] = inst_43914);

(statearr_43954_43975[(1)] = (5));


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
});})(c__40751__auto___43960,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40560__auto__,c__40751__auto___43960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_43955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43955[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_43955[(1)] = (1));

return statearr_43955;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_43932){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_43932);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e43956){if((e43956 instanceof Object)){
var ex__40564__auto__ = e43956;
var statearr_43957_43976 = state_43932;
(statearr_43957_43976[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43932);

return cljs.core.cst$kw$recur;
} else {
throw e43956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__43977 = state_43932;
state_43932 = G__43977;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_43932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_43932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___43960,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40753__auto__ = (function (){var statearr_43958 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_43958[(6)] = c__40751__auto___43960);

return statearr_43958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___43960,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43980 = arguments.length;
switch (G__43980) {
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
var c__40751__auto___44034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___44034,out){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___44034,out){
return (function (state_44012){
var state_val_44013 = (state_44012[(1)]);
if((state_val_44013 === (7))){
var inst_43991 = (state_44012[(7)]);
var inst_43992 = (state_44012[(8)]);
var inst_43991__$1 = (state_44012[(2)]);
var inst_43992__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43991__$1,(0),null);
var inst_43993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43991__$1,(1),null);
var inst_43994 = (inst_43992__$1 == null);
var state_44012__$1 = (function (){var statearr_44014 = state_44012;
(statearr_44014[(7)] = inst_43991__$1);

(statearr_44014[(8)] = inst_43992__$1);

(statearr_44014[(9)] = inst_43993);

return statearr_44014;
})();
if(cljs.core.truth_(inst_43994)){
var statearr_44015_44035 = state_44012__$1;
(statearr_44015_44035[(1)] = (8));

} else {
var statearr_44016_44036 = state_44012__$1;
(statearr_44016_44036[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44013 === (1))){
var inst_43981 = cljs.core.vec(chs);
var inst_43982 = inst_43981;
var state_44012__$1 = (function (){var statearr_44017 = state_44012;
(statearr_44017[(10)] = inst_43982);

return statearr_44017;
})();
var statearr_44018_44037 = state_44012__$1;
(statearr_44018_44037[(2)] = null);

(statearr_44018_44037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44013 === (4))){
var inst_43982 = (state_44012[(10)]);
var state_44012__$1 = state_44012;
return cljs.core.async.ioc_alts_BANG_(state_44012__$1,(7),inst_43982);
} else {
if((state_val_44013 === (6))){
var inst_44008 = (state_44012[(2)]);
var state_44012__$1 = state_44012;
var statearr_44019_44038 = state_44012__$1;
(statearr_44019_44038[(2)] = inst_44008);

(statearr_44019_44038[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44013 === (3))){
var inst_44010 = (state_44012[(2)]);
var state_44012__$1 = state_44012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44012__$1,inst_44010);
} else {
if((state_val_44013 === (2))){
var inst_43982 = (state_44012[(10)]);
var inst_43984 = cljs.core.count(inst_43982);
var inst_43985 = (inst_43984 > (0));
var state_44012__$1 = state_44012;
if(cljs.core.truth_(inst_43985)){
var statearr_44021_44039 = state_44012__$1;
(statearr_44021_44039[(1)] = (4));

} else {
var statearr_44022_44040 = state_44012__$1;
(statearr_44022_44040[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44013 === (11))){
var inst_43982 = (state_44012[(10)]);
var inst_44001 = (state_44012[(2)]);
var tmp44020 = inst_43982;
var inst_43982__$1 = tmp44020;
var state_44012__$1 = (function (){var statearr_44023 = state_44012;
(statearr_44023[(10)] = inst_43982__$1);

(statearr_44023[(11)] = inst_44001);

return statearr_44023;
})();
var statearr_44024_44041 = state_44012__$1;
(statearr_44024_44041[(2)] = null);

(statearr_44024_44041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44013 === (9))){
var inst_43992 = (state_44012[(8)]);
var state_44012__$1 = state_44012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44012__$1,(11),out,inst_43992);
} else {
if((state_val_44013 === (5))){
var inst_44006 = cljs.core.async.close_BANG_(out);
var state_44012__$1 = state_44012;
var statearr_44025_44042 = state_44012__$1;
(statearr_44025_44042[(2)] = inst_44006);

(statearr_44025_44042[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44013 === (10))){
var inst_44004 = (state_44012[(2)]);
var state_44012__$1 = state_44012;
var statearr_44026_44043 = state_44012__$1;
(statearr_44026_44043[(2)] = inst_44004);

(statearr_44026_44043[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44013 === (8))){
var inst_43982 = (state_44012[(10)]);
var inst_43991 = (state_44012[(7)]);
var inst_43992 = (state_44012[(8)]);
var inst_43993 = (state_44012[(9)]);
var inst_43996 = (function (){var cs = inst_43982;
var vec__43987 = inst_43991;
var v = inst_43992;
var c = inst_43993;
return ((function (cs,vec__43987,v,c,inst_43982,inst_43991,inst_43992,inst_43993,state_val_44013,c__40751__auto___44034,out){
return (function (p1__43978_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43978_SHARP_);
});
;})(cs,vec__43987,v,c,inst_43982,inst_43991,inst_43992,inst_43993,state_val_44013,c__40751__auto___44034,out))
})();
var inst_43997 = cljs.core.filterv(inst_43996,inst_43982);
var inst_43982__$1 = inst_43997;
var state_44012__$1 = (function (){var statearr_44027 = state_44012;
(statearr_44027[(10)] = inst_43982__$1);

return statearr_44027;
})();
var statearr_44028_44044 = state_44012__$1;
(statearr_44028_44044[(2)] = null);

(statearr_44028_44044[(1)] = (2));


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
});})(c__40751__auto___44034,out))
;
return ((function (switch__40560__auto__,c__40751__auto___44034,out){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_44029 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44029[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_44029[(1)] = (1));

return statearr_44029;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_44012){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_44012);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e44030){if((e44030 instanceof Object)){
var ex__40564__auto__ = e44030;
var statearr_44031_44045 = state_44012;
(statearr_44031_44045[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44012);

return cljs.core.cst$kw$recur;
} else {
throw e44030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__44046 = state_44012;
state_44012 = G__44046;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_44012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_44012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___44034,out))
})();
var state__40753__auto__ = (function (){var statearr_44032 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_44032[(6)] = c__40751__auto___44034);

return statearr_44032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___44034,out))
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
var G__44048 = arguments.length;
switch (G__44048) {
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
var c__40751__auto___44093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___44093,out){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___44093,out){
return (function (state_44072){
var state_val_44073 = (state_44072[(1)]);
if((state_val_44073 === (7))){
var inst_44054 = (state_44072[(7)]);
var inst_44054__$1 = (state_44072[(2)]);
var inst_44055 = (inst_44054__$1 == null);
var inst_44056 = cljs.core.not(inst_44055);
var state_44072__$1 = (function (){var statearr_44074 = state_44072;
(statearr_44074[(7)] = inst_44054__$1);

return statearr_44074;
})();
if(inst_44056){
var statearr_44075_44094 = state_44072__$1;
(statearr_44075_44094[(1)] = (8));

} else {
var statearr_44076_44095 = state_44072__$1;
(statearr_44076_44095[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (1))){
var inst_44049 = (0);
var state_44072__$1 = (function (){var statearr_44077 = state_44072;
(statearr_44077[(8)] = inst_44049);

return statearr_44077;
})();
var statearr_44078_44096 = state_44072__$1;
(statearr_44078_44096[(2)] = null);

(statearr_44078_44096[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (4))){
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44072__$1,(7),ch);
} else {
if((state_val_44073 === (6))){
var inst_44067 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44079_44097 = state_44072__$1;
(statearr_44079_44097[(2)] = inst_44067);

(statearr_44079_44097[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (3))){
var inst_44069 = (state_44072[(2)]);
var inst_44070 = cljs.core.async.close_BANG_(out);
var state_44072__$1 = (function (){var statearr_44080 = state_44072;
(statearr_44080[(9)] = inst_44069);

return statearr_44080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44072__$1,inst_44070);
} else {
if((state_val_44073 === (2))){
var inst_44049 = (state_44072[(8)]);
var inst_44051 = (inst_44049 < n);
var state_44072__$1 = state_44072;
if(cljs.core.truth_(inst_44051)){
var statearr_44081_44098 = state_44072__$1;
(statearr_44081_44098[(1)] = (4));

} else {
var statearr_44082_44099 = state_44072__$1;
(statearr_44082_44099[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (11))){
var inst_44049 = (state_44072[(8)]);
var inst_44059 = (state_44072[(2)]);
var inst_44060 = (inst_44049 + (1));
var inst_44049__$1 = inst_44060;
var state_44072__$1 = (function (){var statearr_44083 = state_44072;
(statearr_44083[(10)] = inst_44059);

(statearr_44083[(8)] = inst_44049__$1);

return statearr_44083;
})();
var statearr_44084_44100 = state_44072__$1;
(statearr_44084_44100[(2)] = null);

(statearr_44084_44100[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (9))){
var state_44072__$1 = state_44072;
var statearr_44085_44101 = state_44072__$1;
(statearr_44085_44101[(2)] = null);

(statearr_44085_44101[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (5))){
var state_44072__$1 = state_44072;
var statearr_44086_44102 = state_44072__$1;
(statearr_44086_44102[(2)] = null);

(statearr_44086_44102[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (10))){
var inst_44064 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44087_44103 = state_44072__$1;
(statearr_44087_44103[(2)] = inst_44064);

(statearr_44087_44103[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44073 === (8))){
var inst_44054 = (state_44072[(7)]);
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44072__$1,(11),out,inst_44054);
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
});})(c__40751__auto___44093,out))
;
return ((function (switch__40560__auto__,c__40751__auto___44093,out){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_44088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44088[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_44088[(1)] = (1));

return statearr_44088;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_44072){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_44072);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e44089){if((e44089 instanceof Object)){
var ex__40564__auto__ = e44089;
var statearr_44090_44104 = state_44072;
(statearr_44090_44104[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44072);

return cljs.core.cst$kw$recur;
} else {
throw e44089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__44105 = state_44072;
state_44072 = G__44105;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_44072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_44072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___44093,out))
})();
var state__40753__auto__ = (function (){var statearr_44091 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_44091[(6)] = c__40751__auto___44093);

return statearr_44091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___44093,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44107 = (function (f,ch,meta44108){
this.f = f;
this.ch = ch;
this.meta44108 = meta44108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44109,meta44108__$1){
var self__ = this;
var _44109__$1 = this;
return (new cljs.core.async.t_cljs$core$async44107(self__.f,self__.ch,meta44108__$1));
});

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44109){
var self__ = this;
var _44109__$1 = this;
return self__.meta44108;
});

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44110 = (function (f,ch,meta44108,_,fn1,meta44111){
this.f = f;
this.ch = ch;
this.meta44108 = meta44108;
this._ = _;
this.fn1 = fn1;
this.meta44111 = meta44111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44112,meta44111__$1){
var self__ = this;
var _44112__$1 = this;
return (new cljs.core.async.t_cljs$core$async44110(self__.f,self__.ch,self__.meta44108,self__._,self__.fn1,meta44111__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async44110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44112){
var self__ = this;
var _44112__$1 = this;
return self__.meta44111;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44106_SHARP_){
var G__44113 = (((p1__44106_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44106_SHARP_) : self__.f.call(null,p1__44106_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44113) : f1.call(null,G__44113));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async44110.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44108,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async44107], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta44111], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44110";

cljs.core.async.t_cljs$core$async44110.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44110");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44110.
 */
cljs.core.async.__GT_t_cljs$core$async44110 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44110(f__$1,ch__$1,meta44108__$1,___$2,fn1__$1,meta44111){
return (new cljs.core.async.t_cljs$core$async44110(f__$1,ch__$1,meta44108__$1,___$2,fn1__$1,meta44111));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async44110(self__.f,self__.ch,self__.meta44108,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44114 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44114) : self__.f.call(null,G__44114));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async44107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44108], null);
});

cljs.core.async.t_cljs$core$async44107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44107";

cljs.core.async.t_cljs$core$async44107.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44107");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44107.
 */
cljs.core.async.__GT_t_cljs$core$async44107 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44107(f__$1,ch__$1,meta44108){
return (new cljs.core.async.t_cljs$core$async44107(f__$1,ch__$1,meta44108));
});

}

return (new cljs.core.async.t_cljs$core$async44107(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44115 = (function (f,ch,meta44116){
this.f = f;
this.ch = ch;
this.meta44116 = meta44116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44117,meta44116__$1){
var self__ = this;
var _44117__$1 = this;
return (new cljs.core.async.t_cljs$core$async44115(self__.f,self__.ch,meta44116__$1));
});

cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44117){
var self__ = this;
var _44117__$1 = this;
return self__.meta44116;
});

cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async44115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44116], null);
});

cljs.core.async.t_cljs$core$async44115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44115";

cljs.core.async.t_cljs$core$async44115.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44115");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44115.
 */
cljs.core.async.__GT_t_cljs$core$async44115 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44115(f__$1,ch__$1,meta44116){
return (new cljs.core.async.t_cljs$core$async44115(f__$1,ch__$1,meta44116));
});

}

return (new cljs.core.async.t_cljs$core$async44115(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44118 = (function (p,ch,meta44119){
this.p = p;
this.ch = ch;
this.meta44119 = meta44119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44120,meta44119__$1){
var self__ = this;
var _44120__$1 = this;
return (new cljs.core.async.t_cljs$core$async44118(self__.p,self__.ch,meta44119__$1));
});

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44120){
var self__ = this;
var _44120__$1 = this;
return self__.meta44119;
});

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async44118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44119], null);
});

cljs.core.async.t_cljs$core$async44118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44118";

cljs.core.async.t_cljs$core$async44118.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44118");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44118.
 */
cljs.core.async.__GT_t_cljs$core$async44118 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44118(p__$1,ch__$1,meta44119){
return (new cljs.core.async.t_cljs$core$async44118(p__$1,ch__$1,meta44119));
});

}

return (new cljs.core.async.t_cljs$core$async44118(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44122 = arguments.length;
switch (G__44122) {
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
var c__40751__auto___44162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___44162,out){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___44162,out){
return (function (state_44143){
var state_val_44144 = (state_44143[(1)]);
if((state_val_44144 === (7))){
var inst_44139 = (state_44143[(2)]);
var state_44143__$1 = state_44143;
var statearr_44145_44163 = state_44143__$1;
(statearr_44145_44163[(2)] = inst_44139);

(statearr_44145_44163[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (1))){
var state_44143__$1 = state_44143;
var statearr_44146_44164 = state_44143__$1;
(statearr_44146_44164[(2)] = null);

(statearr_44146_44164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (4))){
var inst_44125 = (state_44143[(7)]);
var inst_44125__$1 = (state_44143[(2)]);
var inst_44126 = (inst_44125__$1 == null);
var state_44143__$1 = (function (){var statearr_44147 = state_44143;
(statearr_44147[(7)] = inst_44125__$1);

return statearr_44147;
})();
if(cljs.core.truth_(inst_44126)){
var statearr_44148_44165 = state_44143__$1;
(statearr_44148_44165[(1)] = (5));

} else {
var statearr_44149_44166 = state_44143__$1;
(statearr_44149_44166[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (6))){
var inst_44125 = (state_44143[(7)]);
var inst_44130 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44125) : p.call(null,inst_44125));
var state_44143__$1 = state_44143;
if(cljs.core.truth_(inst_44130)){
var statearr_44150_44167 = state_44143__$1;
(statearr_44150_44167[(1)] = (8));

} else {
var statearr_44151_44168 = state_44143__$1;
(statearr_44151_44168[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (3))){
var inst_44141 = (state_44143[(2)]);
var state_44143__$1 = state_44143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44143__$1,inst_44141);
} else {
if((state_val_44144 === (2))){
var state_44143__$1 = state_44143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44143__$1,(4),ch);
} else {
if((state_val_44144 === (11))){
var inst_44133 = (state_44143[(2)]);
var state_44143__$1 = state_44143;
var statearr_44152_44169 = state_44143__$1;
(statearr_44152_44169[(2)] = inst_44133);

(statearr_44152_44169[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (9))){
var state_44143__$1 = state_44143;
var statearr_44153_44170 = state_44143__$1;
(statearr_44153_44170[(2)] = null);

(statearr_44153_44170[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (5))){
var inst_44128 = cljs.core.async.close_BANG_(out);
var state_44143__$1 = state_44143;
var statearr_44154_44171 = state_44143__$1;
(statearr_44154_44171[(2)] = inst_44128);

(statearr_44154_44171[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (10))){
var inst_44136 = (state_44143[(2)]);
var state_44143__$1 = (function (){var statearr_44155 = state_44143;
(statearr_44155[(8)] = inst_44136);

return statearr_44155;
})();
var statearr_44156_44172 = state_44143__$1;
(statearr_44156_44172[(2)] = null);

(statearr_44156_44172[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44144 === (8))){
var inst_44125 = (state_44143[(7)]);
var state_44143__$1 = state_44143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44143__$1,(11),out,inst_44125);
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
});})(c__40751__auto___44162,out))
;
return ((function (switch__40560__auto__,c__40751__auto___44162,out){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_44157 = [null,null,null,null,null,null,null,null,null];
(statearr_44157[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_44157[(1)] = (1));

return statearr_44157;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_44143){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_44143);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e44158){if((e44158 instanceof Object)){
var ex__40564__auto__ = e44158;
var statearr_44159_44173 = state_44143;
(statearr_44159_44173[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44143);

return cljs.core.cst$kw$recur;
} else {
throw e44158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__44174 = state_44143;
state_44143 = G__44174;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_44143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_44143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___44162,out))
})();
var state__40753__auto__ = (function (){var statearr_44160 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_44160[(6)] = c__40751__auto___44162);

return statearr_44160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___44162,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44176 = arguments.length;
switch (G__44176) {
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
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__){
return (function (state_44239){
var state_val_44240 = (state_44239[(1)]);
if((state_val_44240 === (7))){
var inst_44235 = (state_44239[(2)]);
var state_44239__$1 = state_44239;
var statearr_44241_44279 = state_44239__$1;
(statearr_44241_44279[(2)] = inst_44235);

(statearr_44241_44279[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (20))){
var inst_44205 = (state_44239[(7)]);
var inst_44216 = (state_44239[(2)]);
var inst_44217 = cljs.core.next(inst_44205);
var inst_44191 = inst_44217;
var inst_44192 = null;
var inst_44193 = (0);
var inst_44194 = (0);
var state_44239__$1 = (function (){var statearr_44242 = state_44239;
(statearr_44242[(8)] = inst_44194);

(statearr_44242[(9)] = inst_44191);

(statearr_44242[(10)] = inst_44193);

(statearr_44242[(11)] = inst_44192);

(statearr_44242[(12)] = inst_44216);

return statearr_44242;
})();
var statearr_44243_44280 = state_44239__$1;
(statearr_44243_44280[(2)] = null);

(statearr_44243_44280[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (1))){
var state_44239__$1 = state_44239;
var statearr_44244_44281 = state_44239__$1;
(statearr_44244_44281[(2)] = null);

(statearr_44244_44281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (4))){
var inst_44180 = (state_44239[(13)]);
var inst_44180__$1 = (state_44239[(2)]);
var inst_44181 = (inst_44180__$1 == null);
var state_44239__$1 = (function (){var statearr_44245 = state_44239;
(statearr_44245[(13)] = inst_44180__$1);

return statearr_44245;
})();
if(cljs.core.truth_(inst_44181)){
var statearr_44246_44282 = state_44239__$1;
(statearr_44246_44282[(1)] = (5));

} else {
var statearr_44247_44283 = state_44239__$1;
(statearr_44247_44283[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (15))){
var state_44239__$1 = state_44239;
var statearr_44251_44284 = state_44239__$1;
(statearr_44251_44284[(2)] = null);

(statearr_44251_44284[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (21))){
var state_44239__$1 = state_44239;
var statearr_44252_44285 = state_44239__$1;
(statearr_44252_44285[(2)] = null);

(statearr_44252_44285[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (13))){
var inst_44194 = (state_44239[(8)]);
var inst_44191 = (state_44239[(9)]);
var inst_44193 = (state_44239[(10)]);
var inst_44192 = (state_44239[(11)]);
var inst_44201 = (state_44239[(2)]);
var inst_44202 = (inst_44194 + (1));
var tmp44248 = inst_44191;
var tmp44249 = inst_44193;
var tmp44250 = inst_44192;
var inst_44191__$1 = tmp44248;
var inst_44192__$1 = tmp44250;
var inst_44193__$1 = tmp44249;
var inst_44194__$1 = inst_44202;
var state_44239__$1 = (function (){var statearr_44253 = state_44239;
(statearr_44253[(8)] = inst_44194__$1);

(statearr_44253[(9)] = inst_44191__$1);

(statearr_44253[(10)] = inst_44193__$1);

(statearr_44253[(14)] = inst_44201);

(statearr_44253[(11)] = inst_44192__$1);

return statearr_44253;
})();
var statearr_44254_44286 = state_44239__$1;
(statearr_44254_44286[(2)] = null);

(statearr_44254_44286[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (22))){
var state_44239__$1 = state_44239;
var statearr_44255_44287 = state_44239__$1;
(statearr_44255_44287[(2)] = null);

(statearr_44255_44287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (6))){
var inst_44180 = (state_44239[(13)]);
var inst_44189 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44180) : f.call(null,inst_44180));
var inst_44190 = cljs.core.seq(inst_44189);
var inst_44191 = inst_44190;
var inst_44192 = null;
var inst_44193 = (0);
var inst_44194 = (0);
var state_44239__$1 = (function (){var statearr_44256 = state_44239;
(statearr_44256[(8)] = inst_44194);

(statearr_44256[(9)] = inst_44191);

(statearr_44256[(10)] = inst_44193);

(statearr_44256[(11)] = inst_44192);

return statearr_44256;
})();
var statearr_44257_44288 = state_44239__$1;
(statearr_44257_44288[(2)] = null);

(statearr_44257_44288[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (17))){
var inst_44205 = (state_44239[(7)]);
var inst_44209 = cljs.core.chunk_first(inst_44205);
var inst_44210 = cljs.core.chunk_rest(inst_44205);
var inst_44211 = cljs.core.count(inst_44209);
var inst_44191 = inst_44210;
var inst_44192 = inst_44209;
var inst_44193 = inst_44211;
var inst_44194 = (0);
var state_44239__$1 = (function (){var statearr_44258 = state_44239;
(statearr_44258[(8)] = inst_44194);

(statearr_44258[(9)] = inst_44191);

(statearr_44258[(10)] = inst_44193);

(statearr_44258[(11)] = inst_44192);

return statearr_44258;
})();
var statearr_44259_44289 = state_44239__$1;
(statearr_44259_44289[(2)] = null);

(statearr_44259_44289[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (3))){
var inst_44237 = (state_44239[(2)]);
var state_44239__$1 = state_44239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44239__$1,inst_44237);
} else {
if((state_val_44240 === (12))){
var inst_44225 = (state_44239[(2)]);
var state_44239__$1 = state_44239;
var statearr_44260_44290 = state_44239__$1;
(statearr_44260_44290[(2)] = inst_44225);

(statearr_44260_44290[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (2))){
var state_44239__$1 = state_44239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44239__$1,(4),in$);
} else {
if((state_val_44240 === (23))){
var inst_44233 = (state_44239[(2)]);
var state_44239__$1 = state_44239;
var statearr_44261_44291 = state_44239__$1;
(statearr_44261_44291[(2)] = inst_44233);

(statearr_44261_44291[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (19))){
var inst_44220 = (state_44239[(2)]);
var state_44239__$1 = state_44239;
var statearr_44262_44292 = state_44239__$1;
(statearr_44262_44292[(2)] = inst_44220);

(statearr_44262_44292[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (11))){
var inst_44191 = (state_44239[(9)]);
var inst_44205 = (state_44239[(7)]);
var inst_44205__$1 = cljs.core.seq(inst_44191);
var state_44239__$1 = (function (){var statearr_44263 = state_44239;
(statearr_44263[(7)] = inst_44205__$1);

return statearr_44263;
})();
if(inst_44205__$1){
var statearr_44264_44293 = state_44239__$1;
(statearr_44264_44293[(1)] = (14));

} else {
var statearr_44265_44294 = state_44239__$1;
(statearr_44265_44294[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (9))){
var inst_44227 = (state_44239[(2)]);
var inst_44228 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44239__$1 = (function (){var statearr_44266 = state_44239;
(statearr_44266[(15)] = inst_44227);

return statearr_44266;
})();
if(cljs.core.truth_(inst_44228)){
var statearr_44267_44295 = state_44239__$1;
(statearr_44267_44295[(1)] = (21));

} else {
var statearr_44268_44296 = state_44239__$1;
(statearr_44268_44296[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (5))){
var inst_44183 = cljs.core.async.close_BANG_(out);
var state_44239__$1 = state_44239;
var statearr_44269_44297 = state_44239__$1;
(statearr_44269_44297[(2)] = inst_44183);

(statearr_44269_44297[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (14))){
var inst_44205 = (state_44239[(7)]);
var inst_44207 = cljs.core.chunked_seq_QMARK_(inst_44205);
var state_44239__$1 = state_44239;
if(inst_44207){
var statearr_44270_44298 = state_44239__$1;
(statearr_44270_44298[(1)] = (17));

} else {
var statearr_44271_44299 = state_44239__$1;
(statearr_44271_44299[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (16))){
var inst_44223 = (state_44239[(2)]);
var state_44239__$1 = state_44239;
var statearr_44272_44300 = state_44239__$1;
(statearr_44272_44300[(2)] = inst_44223);

(statearr_44272_44300[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44240 === (10))){
var inst_44194 = (state_44239[(8)]);
var inst_44192 = (state_44239[(11)]);
var inst_44199 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44192,inst_44194);
var state_44239__$1 = state_44239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44239__$1,(13),out,inst_44199);
} else {
if((state_val_44240 === (18))){
var inst_44205 = (state_44239[(7)]);
var inst_44214 = cljs.core.first(inst_44205);
var state_44239__$1 = state_44239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44239__$1,(20),out,inst_44214);
} else {
if((state_val_44240 === (8))){
var inst_44194 = (state_44239[(8)]);
var inst_44193 = (state_44239[(10)]);
var inst_44196 = (inst_44194 < inst_44193);
var inst_44197 = inst_44196;
var state_44239__$1 = state_44239;
if(cljs.core.truth_(inst_44197)){
var statearr_44273_44301 = state_44239__$1;
(statearr_44273_44301[(1)] = (10));

} else {
var statearr_44274_44302 = state_44239__$1;
(statearr_44274_44302[(1)] = (11));

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
});})(c__40751__auto__))
;
return ((function (switch__40560__auto__,c__40751__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40561__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40561__auto____0 = (function (){
var statearr_44275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44275[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40561__auto__);

(statearr_44275[(1)] = (1));

return statearr_44275;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40561__auto____1 = (function (state_44239){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_44239);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e44276){if((e44276 instanceof Object)){
var ex__40564__auto__ = e44276;
var statearr_44277_44303 = state_44239;
(statearr_44277_44303[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44239);

return cljs.core.cst$kw$recur;
} else {
throw e44276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__44304 = state_44239;
state_44239 = G__44304;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40561__auto__ = function(state_44239){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40561__auto____1.call(this,state_44239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40561__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40561__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__))
})();
var state__40753__auto__ = (function (){var statearr_44278 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_44278[(6)] = c__40751__auto__);

return statearr_44278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__))
);

return c__40751__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44306 = arguments.length;
switch (G__44306) {
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
var G__44309 = arguments.length;
switch (G__44309) {
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
var G__44312 = arguments.length;
switch (G__44312) {
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
var c__40751__auto___44359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___44359,out){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___44359,out){
return (function (state_44336){
var state_val_44337 = (state_44336[(1)]);
if((state_val_44337 === (7))){
var inst_44331 = (state_44336[(2)]);
var state_44336__$1 = state_44336;
var statearr_44338_44360 = state_44336__$1;
(statearr_44338_44360[(2)] = inst_44331);

(statearr_44338_44360[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44337 === (1))){
var inst_44313 = null;
var state_44336__$1 = (function (){var statearr_44339 = state_44336;
(statearr_44339[(7)] = inst_44313);

return statearr_44339;
})();
var statearr_44340_44361 = state_44336__$1;
(statearr_44340_44361[(2)] = null);

(statearr_44340_44361[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44337 === (4))){
var inst_44316 = (state_44336[(8)]);
var inst_44316__$1 = (state_44336[(2)]);
var inst_44317 = (inst_44316__$1 == null);
var inst_44318 = cljs.core.not(inst_44317);
var state_44336__$1 = (function (){var statearr_44341 = state_44336;
(statearr_44341[(8)] = inst_44316__$1);

return statearr_44341;
})();
if(inst_44318){
var statearr_44342_44362 = state_44336__$1;
(statearr_44342_44362[(1)] = (5));

} else {
var statearr_44343_44363 = state_44336__$1;
(statearr_44343_44363[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44337 === (6))){
var state_44336__$1 = state_44336;
var statearr_44344_44364 = state_44336__$1;
(statearr_44344_44364[(2)] = null);

(statearr_44344_44364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44337 === (3))){
var inst_44333 = (state_44336[(2)]);
var inst_44334 = cljs.core.async.close_BANG_(out);
var state_44336__$1 = (function (){var statearr_44345 = state_44336;
(statearr_44345[(9)] = inst_44333);

return statearr_44345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44336__$1,inst_44334);
} else {
if((state_val_44337 === (2))){
var state_44336__$1 = state_44336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44336__$1,(4),ch);
} else {
if((state_val_44337 === (11))){
var inst_44316 = (state_44336[(8)]);
var inst_44325 = (state_44336[(2)]);
var inst_44313 = inst_44316;
var state_44336__$1 = (function (){var statearr_44346 = state_44336;
(statearr_44346[(10)] = inst_44325);

(statearr_44346[(7)] = inst_44313);

return statearr_44346;
})();
var statearr_44347_44365 = state_44336__$1;
(statearr_44347_44365[(2)] = null);

(statearr_44347_44365[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44337 === (9))){
var inst_44316 = (state_44336[(8)]);
var state_44336__$1 = state_44336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44336__$1,(11),out,inst_44316);
} else {
if((state_val_44337 === (5))){
var inst_44316 = (state_44336[(8)]);
var inst_44313 = (state_44336[(7)]);
var inst_44320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44316,inst_44313);
var state_44336__$1 = state_44336;
if(inst_44320){
var statearr_44349_44366 = state_44336__$1;
(statearr_44349_44366[(1)] = (8));

} else {
var statearr_44350_44367 = state_44336__$1;
(statearr_44350_44367[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44337 === (10))){
var inst_44328 = (state_44336[(2)]);
var state_44336__$1 = state_44336;
var statearr_44351_44368 = state_44336__$1;
(statearr_44351_44368[(2)] = inst_44328);

(statearr_44351_44368[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44337 === (8))){
var inst_44313 = (state_44336[(7)]);
var tmp44348 = inst_44313;
var inst_44313__$1 = tmp44348;
var state_44336__$1 = (function (){var statearr_44352 = state_44336;
(statearr_44352[(7)] = inst_44313__$1);

return statearr_44352;
})();
var statearr_44353_44369 = state_44336__$1;
(statearr_44353_44369[(2)] = null);

(statearr_44353_44369[(1)] = (2));


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
});})(c__40751__auto___44359,out))
;
return ((function (switch__40560__auto__,c__40751__auto___44359,out){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_44354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44354[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_44354[(1)] = (1));

return statearr_44354;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_44336){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_44336);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e44355){if((e44355 instanceof Object)){
var ex__40564__auto__ = e44355;
var statearr_44356_44370 = state_44336;
(statearr_44356_44370[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44336);

return cljs.core.cst$kw$recur;
} else {
throw e44355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__44371 = state_44336;
state_44336 = G__44371;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_44336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_44336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___44359,out))
})();
var state__40753__auto__ = (function (){var statearr_44357 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_44357[(6)] = c__40751__auto___44359);

return statearr_44357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___44359,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44373 = arguments.length;
switch (G__44373) {
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
var c__40751__auto___44439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___44439,out){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___44439,out){
return (function (state_44411){
var state_val_44412 = (state_44411[(1)]);
if((state_val_44412 === (7))){
var inst_44407 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
var statearr_44413_44440 = state_44411__$1;
(statearr_44413_44440[(2)] = inst_44407);

(statearr_44413_44440[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (1))){
var inst_44374 = (new Array(n));
var inst_44375 = inst_44374;
var inst_44376 = (0);
var state_44411__$1 = (function (){var statearr_44414 = state_44411;
(statearr_44414[(7)] = inst_44375);

(statearr_44414[(8)] = inst_44376);

return statearr_44414;
})();
var statearr_44415_44441 = state_44411__$1;
(statearr_44415_44441[(2)] = null);

(statearr_44415_44441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (4))){
var inst_44379 = (state_44411[(9)]);
var inst_44379__$1 = (state_44411[(2)]);
var inst_44380 = (inst_44379__$1 == null);
var inst_44381 = cljs.core.not(inst_44380);
var state_44411__$1 = (function (){var statearr_44416 = state_44411;
(statearr_44416[(9)] = inst_44379__$1);

return statearr_44416;
})();
if(inst_44381){
var statearr_44417_44442 = state_44411__$1;
(statearr_44417_44442[(1)] = (5));

} else {
var statearr_44418_44443 = state_44411__$1;
(statearr_44418_44443[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (15))){
var inst_44401 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
var statearr_44419_44444 = state_44411__$1;
(statearr_44419_44444[(2)] = inst_44401);

(statearr_44419_44444[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (13))){
var state_44411__$1 = state_44411;
var statearr_44420_44445 = state_44411__$1;
(statearr_44420_44445[(2)] = null);

(statearr_44420_44445[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (6))){
var inst_44376 = (state_44411[(8)]);
var inst_44397 = (inst_44376 > (0));
var state_44411__$1 = state_44411;
if(cljs.core.truth_(inst_44397)){
var statearr_44421_44446 = state_44411__$1;
(statearr_44421_44446[(1)] = (12));

} else {
var statearr_44422_44447 = state_44411__$1;
(statearr_44422_44447[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (3))){
var inst_44409 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44411__$1,inst_44409);
} else {
if((state_val_44412 === (12))){
var inst_44375 = (state_44411[(7)]);
var inst_44399 = cljs.core.vec(inst_44375);
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44411__$1,(15),out,inst_44399);
} else {
if((state_val_44412 === (2))){
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44411__$1,(4),ch);
} else {
if((state_val_44412 === (11))){
var inst_44391 = (state_44411[(2)]);
var inst_44392 = (new Array(n));
var inst_44375 = inst_44392;
var inst_44376 = (0);
var state_44411__$1 = (function (){var statearr_44423 = state_44411;
(statearr_44423[(7)] = inst_44375);

(statearr_44423[(8)] = inst_44376);

(statearr_44423[(10)] = inst_44391);

return statearr_44423;
})();
var statearr_44424_44448 = state_44411__$1;
(statearr_44424_44448[(2)] = null);

(statearr_44424_44448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (9))){
var inst_44375 = (state_44411[(7)]);
var inst_44389 = cljs.core.vec(inst_44375);
var state_44411__$1 = state_44411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44411__$1,(11),out,inst_44389);
} else {
if((state_val_44412 === (5))){
var inst_44375 = (state_44411[(7)]);
var inst_44384 = (state_44411[(11)]);
var inst_44376 = (state_44411[(8)]);
var inst_44379 = (state_44411[(9)]);
var inst_44383 = (inst_44375[inst_44376] = inst_44379);
var inst_44384__$1 = (inst_44376 + (1));
var inst_44385 = (inst_44384__$1 < n);
var state_44411__$1 = (function (){var statearr_44425 = state_44411;
(statearr_44425[(12)] = inst_44383);

(statearr_44425[(11)] = inst_44384__$1);

return statearr_44425;
})();
if(cljs.core.truth_(inst_44385)){
var statearr_44426_44449 = state_44411__$1;
(statearr_44426_44449[(1)] = (8));

} else {
var statearr_44427_44450 = state_44411__$1;
(statearr_44427_44450[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (14))){
var inst_44404 = (state_44411[(2)]);
var inst_44405 = cljs.core.async.close_BANG_(out);
var state_44411__$1 = (function (){var statearr_44429 = state_44411;
(statearr_44429[(13)] = inst_44404);

return statearr_44429;
})();
var statearr_44430_44451 = state_44411__$1;
(statearr_44430_44451[(2)] = inst_44405);

(statearr_44430_44451[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (10))){
var inst_44395 = (state_44411[(2)]);
var state_44411__$1 = state_44411;
var statearr_44431_44452 = state_44411__$1;
(statearr_44431_44452[(2)] = inst_44395);

(statearr_44431_44452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44412 === (8))){
var inst_44375 = (state_44411[(7)]);
var inst_44384 = (state_44411[(11)]);
var tmp44428 = inst_44375;
var inst_44375__$1 = tmp44428;
var inst_44376 = inst_44384;
var state_44411__$1 = (function (){var statearr_44432 = state_44411;
(statearr_44432[(7)] = inst_44375__$1);

(statearr_44432[(8)] = inst_44376);

return statearr_44432;
})();
var statearr_44433_44453 = state_44411__$1;
(statearr_44433_44453[(2)] = null);

(statearr_44433_44453[(1)] = (2));


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
});})(c__40751__auto___44439,out))
;
return ((function (switch__40560__auto__,c__40751__auto___44439,out){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_44434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44434[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_44434[(1)] = (1));

return statearr_44434;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_44411){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_44411);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e44435){if((e44435 instanceof Object)){
var ex__40564__auto__ = e44435;
var statearr_44436_44454 = state_44411;
(statearr_44436_44454[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44411);

return cljs.core.cst$kw$recur;
} else {
throw e44435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__44455 = state_44411;
state_44411 = G__44455;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_44411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_44411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___44439,out))
})();
var state__40753__auto__ = (function (){var statearr_44437 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_44437[(6)] = c__40751__auto___44439);

return statearr_44437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___44439,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44457 = arguments.length;
switch (G__44457) {
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
var c__40751__auto___44527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___44527,out){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___44527,out){
return (function (state_44499){
var state_val_44500 = (state_44499[(1)]);
if((state_val_44500 === (7))){
var inst_44495 = (state_44499[(2)]);
var state_44499__$1 = state_44499;
var statearr_44501_44528 = state_44499__$1;
(statearr_44501_44528[(2)] = inst_44495);

(statearr_44501_44528[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (1))){
var inst_44458 = [];
var inst_44459 = inst_44458;
var inst_44460 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_44499__$1 = (function (){var statearr_44502 = state_44499;
(statearr_44502[(7)] = inst_44459);

(statearr_44502[(8)] = inst_44460);

return statearr_44502;
})();
var statearr_44503_44529 = state_44499__$1;
(statearr_44503_44529[(2)] = null);

(statearr_44503_44529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (4))){
var inst_44463 = (state_44499[(9)]);
var inst_44463__$1 = (state_44499[(2)]);
var inst_44464 = (inst_44463__$1 == null);
var inst_44465 = cljs.core.not(inst_44464);
var state_44499__$1 = (function (){var statearr_44504 = state_44499;
(statearr_44504[(9)] = inst_44463__$1);

return statearr_44504;
})();
if(inst_44465){
var statearr_44505_44530 = state_44499__$1;
(statearr_44505_44530[(1)] = (5));

} else {
var statearr_44506_44531 = state_44499__$1;
(statearr_44506_44531[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (15))){
var inst_44489 = (state_44499[(2)]);
var state_44499__$1 = state_44499;
var statearr_44507_44532 = state_44499__$1;
(statearr_44507_44532[(2)] = inst_44489);

(statearr_44507_44532[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (13))){
var state_44499__$1 = state_44499;
var statearr_44508_44533 = state_44499__$1;
(statearr_44508_44533[(2)] = null);

(statearr_44508_44533[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (6))){
var inst_44459 = (state_44499[(7)]);
var inst_44484 = inst_44459.length;
var inst_44485 = (inst_44484 > (0));
var state_44499__$1 = state_44499;
if(cljs.core.truth_(inst_44485)){
var statearr_44509_44534 = state_44499__$1;
(statearr_44509_44534[(1)] = (12));

} else {
var statearr_44510_44535 = state_44499__$1;
(statearr_44510_44535[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (3))){
var inst_44497 = (state_44499[(2)]);
var state_44499__$1 = state_44499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44499__$1,inst_44497);
} else {
if((state_val_44500 === (12))){
var inst_44459 = (state_44499[(7)]);
var inst_44487 = cljs.core.vec(inst_44459);
var state_44499__$1 = state_44499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44499__$1,(15),out,inst_44487);
} else {
if((state_val_44500 === (2))){
var state_44499__$1 = state_44499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44499__$1,(4),ch);
} else {
if((state_val_44500 === (11))){
var inst_44463 = (state_44499[(9)]);
var inst_44467 = (state_44499[(10)]);
var inst_44477 = (state_44499[(2)]);
var inst_44478 = [];
var inst_44479 = inst_44478.push(inst_44463);
var inst_44459 = inst_44478;
var inst_44460 = inst_44467;
var state_44499__$1 = (function (){var statearr_44511 = state_44499;
(statearr_44511[(7)] = inst_44459);

(statearr_44511[(11)] = inst_44479);

(statearr_44511[(8)] = inst_44460);

(statearr_44511[(12)] = inst_44477);

return statearr_44511;
})();
var statearr_44512_44536 = state_44499__$1;
(statearr_44512_44536[(2)] = null);

(statearr_44512_44536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (9))){
var inst_44459 = (state_44499[(7)]);
var inst_44475 = cljs.core.vec(inst_44459);
var state_44499__$1 = state_44499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44499__$1,(11),out,inst_44475);
} else {
if((state_val_44500 === (5))){
var inst_44463 = (state_44499[(9)]);
var inst_44460 = (state_44499[(8)]);
var inst_44467 = (state_44499[(10)]);
var inst_44467__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44463) : f.call(null,inst_44463));
var inst_44468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44467__$1,inst_44460);
var inst_44469 = cljs.core.keyword_identical_QMARK_(inst_44460,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_44470 = ((inst_44468) || (inst_44469));
var state_44499__$1 = (function (){var statearr_44513 = state_44499;
(statearr_44513[(10)] = inst_44467__$1);

return statearr_44513;
})();
if(cljs.core.truth_(inst_44470)){
var statearr_44514_44537 = state_44499__$1;
(statearr_44514_44537[(1)] = (8));

} else {
var statearr_44515_44538 = state_44499__$1;
(statearr_44515_44538[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (14))){
var inst_44492 = (state_44499[(2)]);
var inst_44493 = cljs.core.async.close_BANG_(out);
var state_44499__$1 = (function (){var statearr_44517 = state_44499;
(statearr_44517[(13)] = inst_44492);

return statearr_44517;
})();
var statearr_44518_44539 = state_44499__$1;
(statearr_44518_44539[(2)] = inst_44493);

(statearr_44518_44539[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (10))){
var inst_44482 = (state_44499[(2)]);
var state_44499__$1 = state_44499;
var statearr_44519_44540 = state_44499__$1;
(statearr_44519_44540[(2)] = inst_44482);

(statearr_44519_44540[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44500 === (8))){
var inst_44459 = (state_44499[(7)]);
var inst_44463 = (state_44499[(9)]);
var inst_44467 = (state_44499[(10)]);
var inst_44472 = inst_44459.push(inst_44463);
var tmp44516 = inst_44459;
var inst_44459__$1 = tmp44516;
var inst_44460 = inst_44467;
var state_44499__$1 = (function (){var statearr_44520 = state_44499;
(statearr_44520[(7)] = inst_44459__$1);

(statearr_44520[(8)] = inst_44460);

(statearr_44520[(14)] = inst_44472);

return statearr_44520;
})();
var statearr_44521_44541 = state_44499__$1;
(statearr_44521_44541[(2)] = null);

(statearr_44521_44541[(1)] = (2));


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
});})(c__40751__auto___44527,out))
;
return ((function (switch__40560__auto__,c__40751__auto___44527,out){
return (function() {
var cljs$core$async$state_machine__40561__auto__ = null;
var cljs$core$async$state_machine__40561__auto____0 = (function (){
var statearr_44522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44522[(0)] = cljs$core$async$state_machine__40561__auto__);

(statearr_44522[(1)] = (1));

return statearr_44522;
});
var cljs$core$async$state_machine__40561__auto____1 = (function (state_44499){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_44499);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e44523){if((e44523 instanceof Object)){
var ex__40564__auto__ = e44523;
var statearr_44524_44542 = state_44499;
(statearr_44524_44542[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44499);

return cljs.core.cst$kw$recur;
} else {
throw e44523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__44543 = state_44499;
state_44499 = G__44543;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
cljs$core$async$state_machine__40561__auto__ = function(state_44499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40561__auto____1.call(this,state_44499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40561__auto____0;
cljs$core$async$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40561__auto____1;
return cljs$core$async$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___44527,out))
})();
var state__40753__auto__ = (function (){var statearr_44525 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_44525[(6)] = c__40751__auto___44527);

return statearr_44525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___44527,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

