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
var G__42812 = arguments.length;
switch (G__42812) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42813 = (function (f,blockable,meta42814){
this.f = f;
this.blockable = blockable;
this.meta42814 = meta42814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42815,meta42814__$1){
var self__ = this;
var _42815__$1 = this;
return (new cljs.core.async.t_cljs$core$async42813(self__.f,self__.blockable,meta42814__$1));
});

cljs.core.async.t_cljs$core$async42813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42815){
var self__ = this;
var _42815__$1 = this;
return self__.meta42814;
});

cljs.core.async.t_cljs$core$async42813.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42813.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta42814], null);
});

cljs.core.async.t_cljs$core$async42813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42813";

cljs.core.async.t_cljs$core$async42813.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42813");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42813.
 */
cljs.core.async.__GT_t_cljs$core$async42813 = (function cljs$core$async$__GT_t_cljs$core$async42813(f__$1,blockable__$1,meta42814){
return (new cljs.core.async.t_cljs$core$async42813(f__$1,blockable__$1,meta42814));
});

}

return (new cljs.core.async.t_cljs$core$async42813(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42819 = arguments.length;
switch (G__42819) {
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
var G__42822 = arguments.length;
switch (G__42822) {
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
var G__42825 = arguments.length;
switch (G__42825) {
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
var val_42827 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42827) : fn1.call(null,val_42827));
} else {
cljs.core.async.impl.dispatch.run(((function (val_42827,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42827) : fn1.call(null,val_42827));
});})(val_42827,ret))
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
var G__42829 = arguments.length;
switch (G__42829) {
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
var n__4607__auto___42831 = n;
var x_42832 = (0);
while(true){
if((x_42832 < n__4607__auto___42831)){
(a[x_42832] = (0));

var G__42833 = (x_42832 + (1));
x_42832 = G__42833;
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

var G__42834 = (i + (1));
i = G__42834;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42835 = (function (flag,meta42836){
this.flag = flag;
this.meta42836 = meta42836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42837,meta42836__$1){
var self__ = this;
var _42837__$1 = this;
return (new cljs.core.async.t_cljs$core$async42835(self__.flag,meta42836__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42837){
var self__ = this;
var _42837__$1 = this;
return self__.meta42836;
});})(flag))
;

cljs.core.async.t_cljs$core$async42835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42835.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta42836], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42835";

cljs.core.async.t_cljs$core$async42835.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42835");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42835.
 */
cljs.core.async.__GT_t_cljs$core$async42835 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42835(flag__$1,meta42836){
return (new cljs.core.async.t_cljs$core$async42835(flag__$1,meta42836));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42835(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42838 = (function (flag,cb,meta42839){
this.flag = flag;
this.cb = cb;
this.meta42839 = meta42839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42840,meta42839__$1){
var self__ = this;
var _42840__$1 = this;
return (new cljs.core.async.t_cljs$core$async42838(self__.flag,self__.cb,meta42839__$1));
});

cljs.core.async.t_cljs$core$async42838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42840){
var self__ = this;
var _42840__$1 = this;
return self__.meta42839;
});

cljs.core.async.t_cljs$core$async42838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async42838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta42839], null);
});

cljs.core.async.t_cljs$core$async42838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42838";

cljs.core.async.t_cljs$core$async42838.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42838");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42838.
 */
cljs.core.async.__GT_t_cljs$core$async42838 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42838(flag__$1,cb__$1,meta42839){
return (new cljs.core.async.t_cljs$core$async42838(flag__$1,cb__$1,meta42839));
});

}

return (new cljs.core.async.t_cljs$core$async42838(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42841_SHARP_){
var G__42843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42841_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42843) : fret.call(null,G__42843));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42842_SHARP_){
var G__42844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42842_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42844) : fret.call(null,G__42844));
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
var G__42845 = (i + (1));
i = G__42845;
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
var len__4730__auto___42851 = arguments.length;
var i__4731__auto___42852 = (0);
while(true){
if((i__4731__auto___42852 < len__4730__auto___42851)){
args__4736__auto__.push((arguments[i__4731__auto___42852]));

var G__42853 = (i__4731__auto___42852 + (1));
i__4731__auto___42852 = G__42853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42848){
var map__42849 = p__42848;
var map__42849__$1 = (((((!((map__42849 == null))))?(((((map__42849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42849):map__42849);
var opts = map__42849__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42846){
var G__42847 = cljs.core.first(seq42846);
var seq42846__$1 = cljs.core.next(seq42846);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42847,seq42846__$1);
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
var G__42855 = arguments.length;
switch (G__42855) {
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
var c__40884__auto___42901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___42901){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___42901){
return (function (state_42879){
var state_val_42880 = (state_42879[(1)]);
if((state_val_42880 === (7))){
var inst_42875 = (state_42879[(2)]);
var state_42879__$1 = state_42879;
var statearr_42881_42902 = state_42879__$1;
(statearr_42881_42902[(2)] = inst_42875);

(statearr_42881_42902[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (1))){
var state_42879__$1 = state_42879;
var statearr_42882_42903 = state_42879__$1;
(statearr_42882_42903[(2)] = null);

(statearr_42882_42903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (4))){
var inst_42858 = (state_42879[(7)]);
var inst_42858__$1 = (state_42879[(2)]);
var inst_42859 = (inst_42858__$1 == null);
var state_42879__$1 = (function (){var statearr_42883 = state_42879;
(statearr_42883[(7)] = inst_42858__$1);

return statearr_42883;
})();
if(cljs.core.truth_(inst_42859)){
var statearr_42884_42904 = state_42879__$1;
(statearr_42884_42904[(1)] = (5));

} else {
var statearr_42885_42905 = state_42879__$1;
(statearr_42885_42905[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (13))){
var state_42879__$1 = state_42879;
var statearr_42886_42906 = state_42879__$1;
(statearr_42886_42906[(2)] = null);

(statearr_42886_42906[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (6))){
var inst_42858 = (state_42879[(7)]);
var state_42879__$1 = state_42879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42879__$1,(11),to,inst_42858);
} else {
if((state_val_42880 === (3))){
var inst_42877 = (state_42879[(2)]);
var state_42879__$1 = state_42879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42879__$1,inst_42877);
} else {
if((state_val_42880 === (12))){
var state_42879__$1 = state_42879;
var statearr_42887_42907 = state_42879__$1;
(statearr_42887_42907[(2)] = null);

(statearr_42887_42907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (2))){
var state_42879__$1 = state_42879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42879__$1,(4),from);
} else {
if((state_val_42880 === (11))){
var inst_42868 = (state_42879[(2)]);
var state_42879__$1 = state_42879;
if(cljs.core.truth_(inst_42868)){
var statearr_42888_42908 = state_42879__$1;
(statearr_42888_42908[(1)] = (12));

} else {
var statearr_42889_42909 = state_42879__$1;
(statearr_42889_42909[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (9))){
var state_42879__$1 = state_42879;
var statearr_42890_42910 = state_42879__$1;
(statearr_42890_42910[(2)] = null);

(statearr_42890_42910[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (5))){
var state_42879__$1 = state_42879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42891_42911 = state_42879__$1;
(statearr_42891_42911[(1)] = (8));

} else {
var statearr_42892_42912 = state_42879__$1;
(statearr_42892_42912[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (14))){
var inst_42873 = (state_42879[(2)]);
var state_42879__$1 = state_42879;
var statearr_42893_42913 = state_42879__$1;
(statearr_42893_42913[(2)] = inst_42873);

(statearr_42893_42913[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (10))){
var inst_42865 = (state_42879[(2)]);
var state_42879__$1 = state_42879;
var statearr_42894_42914 = state_42879__$1;
(statearr_42894_42914[(2)] = inst_42865);

(statearr_42894_42914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42880 === (8))){
var inst_42862 = cljs.core.async.close_BANG_(to);
var state_42879__$1 = state_42879;
var statearr_42895_42915 = state_42879__$1;
(statearr_42895_42915[(2)] = inst_42862);

(statearr_42895_42915[(1)] = (10));


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
});})(c__40884__auto___42901))
;
return ((function (switch__40693__auto__,c__40884__auto___42901){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_42896 = [null,null,null,null,null,null,null,null];
(statearr_42896[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_42896[(1)] = (1));

return statearr_42896;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_42879){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_42879);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e42897){if((e42897 instanceof Object)){
var ex__40697__auto__ = e42897;
var statearr_42898_42916 = state_42879;
(statearr_42898_42916[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42879);

return cljs.core.cst$kw$recur;
} else {
throw e42897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__42917 = state_42879;
state_42879 = G__42917;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_42879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_42879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___42901))
})();
var state__40886__auto__ = (function (){var statearr_42899 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_42899[(6)] = c__40884__auto___42901);

return statearr_42899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___42901))
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
return (function (p__42918){
var vec__42919 = p__42918;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42919,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42919,(1),null);
var job = vec__42919;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40884__auto___43090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___43090,res,vec__42919,v,p,job,jobs,results){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___43090,res,vec__42919,v,p,job,jobs,results){
return (function (state_42926){
var state_val_42927 = (state_42926[(1)]);
if((state_val_42927 === (1))){
var state_42926__$1 = state_42926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42926__$1,(2),res,v);
} else {
if((state_val_42927 === (2))){
var inst_42923 = (state_42926[(2)]);
var inst_42924 = cljs.core.async.close_BANG_(res);
var state_42926__$1 = (function (){var statearr_42928 = state_42926;
(statearr_42928[(7)] = inst_42923);

return statearr_42928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42926__$1,inst_42924);
} else {
return null;
}
}
});})(c__40884__auto___43090,res,vec__42919,v,p,job,jobs,results))
;
return ((function (switch__40693__auto__,c__40884__auto___43090,res,vec__42919,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0 = (function (){
var statearr_42929 = [null,null,null,null,null,null,null,null];
(statearr_42929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__);

(statearr_42929[(1)] = (1));

return statearr_42929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1 = (function (state_42926){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_42926);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e42930){if((e42930 instanceof Object)){
var ex__40697__auto__ = e42930;
var statearr_42931_43091 = state_42926;
(statearr_42931_43091[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42926);

return cljs.core.cst$kw$recur;
} else {
throw e42930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43092 = state_42926;
state_42926 = G__43092;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = function(state_42926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1.call(this,state_42926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___43090,res,vec__42919,v,p,job,jobs,results))
})();
var state__40886__auto__ = (function (){var statearr_42932 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_42932[(6)] = c__40884__auto___43090);

return statearr_42932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___43090,res,vec__42919,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42933){
var vec__42934 = p__42933;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42934,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42934,(1),null);
var job = vec__42934;
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
var n__4607__auto___43093 = n;
var __43094 = (0);
while(true){
if((__43094 < n__4607__auto___43093)){
var G__42937_43095 = type;
var G__42937_43096__$1 = (((G__42937_43095 instanceof cljs.core.Keyword))?G__42937_43095.fqn:null);
switch (G__42937_43096__$1) {
case "compute":
var c__40884__auto___43098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43094,c__40884__auto___43098,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (__43094,c__40884__auto___43098,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async){
return (function (state_42950){
var state_val_42951 = (state_42950[(1)]);
if((state_val_42951 === (1))){
var state_42950__$1 = state_42950;
var statearr_42952_43099 = state_42950__$1;
(statearr_42952_43099[(2)] = null);

(statearr_42952_43099[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42951 === (2))){
var state_42950__$1 = state_42950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42950__$1,(4),jobs);
} else {
if((state_val_42951 === (3))){
var inst_42948 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42950__$1,inst_42948);
} else {
if((state_val_42951 === (4))){
var inst_42940 = (state_42950[(2)]);
var inst_42941 = process(inst_42940);
var state_42950__$1 = state_42950;
if(cljs.core.truth_(inst_42941)){
var statearr_42953_43100 = state_42950__$1;
(statearr_42953_43100[(1)] = (5));

} else {
var statearr_42954_43101 = state_42950__$1;
(statearr_42954_43101[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42951 === (5))){
var state_42950__$1 = state_42950;
var statearr_42955_43102 = state_42950__$1;
(statearr_42955_43102[(2)] = null);

(statearr_42955_43102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42951 === (6))){
var state_42950__$1 = state_42950;
var statearr_42956_43103 = state_42950__$1;
(statearr_42956_43103[(2)] = null);

(statearr_42956_43103[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42951 === (7))){
var inst_42946 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
var statearr_42957_43104 = state_42950__$1;
(statearr_42957_43104[(2)] = inst_42946);

(statearr_42957_43104[(1)] = (3));


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
});})(__43094,c__40884__auto___43098,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async))
;
return ((function (__43094,switch__40693__auto__,c__40884__auto___43098,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0 = (function (){
var statearr_42958 = [null,null,null,null,null,null,null];
(statearr_42958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__);

(statearr_42958[(1)] = (1));

return statearr_42958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1 = (function (state_42950){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_42950);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e42959){if((e42959 instanceof Object)){
var ex__40697__auto__ = e42959;
var statearr_42960_43105 = state_42950;
(statearr_42960_43105[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42950);

return cljs.core.cst$kw$recur;
} else {
throw e42959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43106 = state_42950;
state_42950 = G__43106;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = function(state_42950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1.call(this,state_42950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__;
})()
;})(__43094,switch__40693__auto__,c__40884__auto___43098,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async))
})();
var state__40886__auto__ = (function (){var statearr_42961 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_42961[(6)] = c__40884__auto___43098);

return statearr_42961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(__43094,c__40884__auto___43098,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async))
);


break;
case "async":
var c__40884__auto___43107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43094,c__40884__auto___43107,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (__43094,c__40884__auto___43107,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async){
return (function (state_42974){
var state_val_42975 = (state_42974[(1)]);
if((state_val_42975 === (1))){
var state_42974__$1 = state_42974;
var statearr_42976_43108 = state_42974__$1;
(statearr_42976_43108[(2)] = null);

(statearr_42976_43108[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42975 === (2))){
var state_42974__$1 = state_42974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42974__$1,(4),jobs);
} else {
if((state_val_42975 === (3))){
var inst_42972 = (state_42974[(2)]);
var state_42974__$1 = state_42974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42974__$1,inst_42972);
} else {
if((state_val_42975 === (4))){
var inst_42964 = (state_42974[(2)]);
var inst_42965 = async(inst_42964);
var state_42974__$1 = state_42974;
if(cljs.core.truth_(inst_42965)){
var statearr_42977_43109 = state_42974__$1;
(statearr_42977_43109[(1)] = (5));

} else {
var statearr_42978_43110 = state_42974__$1;
(statearr_42978_43110[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42975 === (5))){
var state_42974__$1 = state_42974;
var statearr_42979_43111 = state_42974__$1;
(statearr_42979_43111[(2)] = null);

(statearr_42979_43111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42975 === (6))){
var state_42974__$1 = state_42974;
var statearr_42980_43112 = state_42974__$1;
(statearr_42980_43112[(2)] = null);

(statearr_42980_43112[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42975 === (7))){
var inst_42970 = (state_42974[(2)]);
var state_42974__$1 = state_42974;
var statearr_42981_43113 = state_42974__$1;
(statearr_42981_43113[(2)] = inst_42970);

(statearr_42981_43113[(1)] = (3));


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
});})(__43094,c__40884__auto___43107,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async))
;
return ((function (__43094,switch__40693__auto__,c__40884__auto___43107,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0 = (function (){
var statearr_42982 = [null,null,null,null,null,null,null];
(statearr_42982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__);

(statearr_42982[(1)] = (1));

return statearr_42982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1 = (function (state_42974){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_42974);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e42983){if((e42983 instanceof Object)){
var ex__40697__auto__ = e42983;
var statearr_42984_43114 = state_42974;
(statearr_42984_43114[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42974);

return cljs.core.cst$kw$recur;
} else {
throw e42983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43115 = state_42974;
state_42974 = G__43115;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = function(state_42974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1.call(this,state_42974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__;
})()
;})(__43094,switch__40693__auto__,c__40884__auto___43107,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async))
})();
var state__40886__auto__ = (function (){var statearr_42985 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_42985[(6)] = c__40884__auto___43107);

return statearr_42985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(__43094,c__40884__auto___43107,G__42937_43095,G__42937_43096__$1,n__4607__auto___43093,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42937_43096__$1)].join('')));

}

var G__43116 = (__43094 + (1));
__43094 = G__43116;
continue;
} else {
}
break;
}

var c__40884__auto___43117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___43117,jobs,results,process,async){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___43117,jobs,results,process,async){
return (function (state_43007){
var state_val_43008 = (state_43007[(1)]);
if((state_val_43008 === (7))){
var inst_43003 = (state_43007[(2)]);
var state_43007__$1 = state_43007;
var statearr_43009_43118 = state_43007__$1;
(statearr_43009_43118[(2)] = inst_43003);

(statearr_43009_43118[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43008 === (1))){
var state_43007__$1 = state_43007;
var statearr_43010_43119 = state_43007__$1;
(statearr_43010_43119[(2)] = null);

(statearr_43010_43119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43008 === (4))){
var inst_42988 = (state_43007[(7)]);
var inst_42988__$1 = (state_43007[(2)]);
var inst_42989 = (inst_42988__$1 == null);
var state_43007__$1 = (function (){var statearr_43011 = state_43007;
(statearr_43011[(7)] = inst_42988__$1);

return statearr_43011;
})();
if(cljs.core.truth_(inst_42989)){
var statearr_43012_43120 = state_43007__$1;
(statearr_43012_43120[(1)] = (5));

} else {
var statearr_43013_43121 = state_43007__$1;
(statearr_43013_43121[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43008 === (6))){
var inst_42993 = (state_43007[(8)]);
var inst_42988 = (state_43007[(7)]);
var inst_42993__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42995 = [inst_42988,inst_42993__$1];
var inst_42996 = (new cljs.core.PersistentVector(null,2,(5),inst_42994,inst_42995,null));
var state_43007__$1 = (function (){var statearr_43014 = state_43007;
(statearr_43014[(8)] = inst_42993__$1);

return statearr_43014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43007__$1,(8),jobs,inst_42996);
} else {
if((state_val_43008 === (3))){
var inst_43005 = (state_43007[(2)]);
var state_43007__$1 = state_43007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43007__$1,inst_43005);
} else {
if((state_val_43008 === (2))){
var state_43007__$1 = state_43007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43007__$1,(4),from);
} else {
if((state_val_43008 === (9))){
var inst_43000 = (state_43007[(2)]);
var state_43007__$1 = (function (){var statearr_43015 = state_43007;
(statearr_43015[(9)] = inst_43000);

return statearr_43015;
})();
var statearr_43016_43122 = state_43007__$1;
(statearr_43016_43122[(2)] = null);

(statearr_43016_43122[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43008 === (5))){
var inst_42991 = cljs.core.async.close_BANG_(jobs);
var state_43007__$1 = state_43007;
var statearr_43017_43123 = state_43007__$1;
(statearr_43017_43123[(2)] = inst_42991);

(statearr_43017_43123[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43008 === (8))){
var inst_42993 = (state_43007[(8)]);
var inst_42998 = (state_43007[(2)]);
var state_43007__$1 = (function (){var statearr_43018 = state_43007;
(statearr_43018[(10)] = inst_42998);

return statearr_43018;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43007__$1,(9),results,inst_42993);
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
});})(c__40884__auto___43117,jobs,results,process,async))
;
return ((function (switch__40693__auto__,c__40884__auto___43117,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0 = (function (){
var statearr_43019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__);

(statearr_43019[(1)] = (1));

return statearr_43019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1 = (function (state_43007){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43007);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43020){if((e43020 instanceof Object)){
var ex__40697__auto__ = e43020;
var statearr_43021_43124 = state_43007;
(statearr_43021_43124[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43007);

return cljs.core.cst$kw$recur;
} else {
throw e43020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43125 = state_43007;
state_43007 = G__43125;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = function(state_43007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1.call(this,state_43007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___43117,jobs,results,process,async))
})();
var state__40886__auto__ = (function (){var statearr_43022 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43022[(6)] = c__40884__auto___43117);

return statearr_43022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___43117,jobs,results,process,async))
);


var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__,jobs,results,process,async){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__,jobs,results,process,async){
return (function (state_43060){
var state_val_43061 = (state_43060[(1)]);
if((state_val_43061 === (7))){
var inst_43056 = (state_43060[(2)]);
var state_43060__$1 = state_43060;
var statearr_43062_43126 = state_43060__$1;
(statearr_43062_43126[(2)] = inst_43056);

(statearr_43062_43126[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (20))){
var state_43060__$1 = state_43060;
var statearr_43063_43127 = state_43060__$1;
(statearr_43063_43127[(2)] = null);

(statearr_43063_43127[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (1))){
var state_43060__$1 = state_43060;
var statearr_43064_43128 = state_43060__$1;
(statearr_43064_43128[(2)] = null);

(statearr_43064_43128[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (4))){
var inst_43025 = (state_43060[(7)]);
var inst_43025__$1 = (state_43060[(2)]);
var inst_43026 = (inst_43025__$1 == null);
var state_43060__$1 = (function (){var statearr_43065 = state_43060;
(statearr_43065[(7)] = inst_43025__$1);

return statearr_43065;
})();
if(cljs.core.truth_(inst_43026)){
var statearr_43066_43129 = state_43060__$1;
(statearr_43066_43129[(1)] = (5));

} else {
var statearr_43067_43130 = state_43060__$1;
(statearr_43067_43130[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (15))){
var inst_43038 = (state_43060[(8)]);
var state_43060__$1 = state_43060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43060__$1,(18),to,inst_43038);
} else {
if((state_val_43061 === (21))){
var inst_43051 = (state_43060[(2)]);
var state_43060__$1 = state_43060;
var statearr_43068_43131 = state_43060__$1;
(statearr_43068_43131[(2)] = inst_43051);

(statearr_43068_43131[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (13))){
var inst_43053 = (state_43060[(2)]);
var state_43060__$1 = (function (){var statearr_43069 = state_43060;
(statearr_43069[(9)] = inst_43053);

return statearr_43069;
})();
var statearr_43070_43132 = state_43060__$1;
(statearr_43070_43132[(2)] = null);

(statearr_43070_43132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (6))){
var inst_43025 = (state_43060[(7)]);
var state_43060__$1 = state_43060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43060__$1,(11),inst_43025);
} else {
if((state_val_43061 === (17))){
var inst_43046 = (state_43060[(2)]);
var state_43060__$1 = state_43060;
if(cljs.core.truth_(inst_43046)){
var statearr_43071_43133 = state_43060__$1;
(statearr_43071_43133[(1)] = (19));

} else {
var statearr_43072_43134 = state_43060__$1;
(statearr_43072_43134[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (3))){
var inst_43058 = (state_43060[(2)]);
var state_43060__$1 = state_43060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43060__$1,inst_43058);
} else {
if((state_val_43061 === (12))){
var inst_43035 = (state_43060[(10)]);
var state_43060__$1 = state_43060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43060__$1,(14),inst_43035);
} else {
if((state_val_43061 === (2))){
var state_43060__$1 = state_43060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43060__$1,(4),results);
} else {
if((state_val_43061 === (19))){
var state_43060__$1 = state_43060;
var statearr_43073_43135 = state_43060__$1;
(statearr_43073_43135[(2)] = null);

(statearr_43073_43135[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (11))){
var inst_43035 = (state_43060[(2)]);
var state_43060__$1 = (function (){var statearr_43074 = state_43060;
(statearr_43074[(10)] = inst_43035);

return statearr_43074;
})();
var statearr_43075_43136 = state_43060__$1;
(statearr_43075_43136[(2)] = null);

(statearr_43075_43136[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (9))){
var state_43060__$1 = state_43060;
var statearr_43076_43137 = state_43060__$1;
(statearr_43076_43137[(2)] = null);

(statearr_43076_43137[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (5))){
var state_43060__$1 = state_43060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43077_43138 = state_43060__$1;
(statearr_43077_43138[(1)] = (8));

} else {
var statearr_43078_43139 = state_43060__$1;
(statearr_43078_43139[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (14))){
var inst_43040 = (state_43060[(11)]);
var inst_43038 = (state_43060[(8)]);
var inst_43038__$1 = (state_43060[(2)]);
var inst_43039 = (inst_43038__$1 == null);
var inst_43040__$1 = cljs.core.not(inst_43039);
var state_43060__$1 = (function (){var statearr_43079 = state_43060;
(statearr_43079[(11)] = inst_43040__$1);

(statearr_43079[(8)] = inst_43038__$1);

return statearr_43079;
})();
if(inst_43040__$1){
var statearr_43080_43140 = state_43060__$1;
(statearr_43080_43140[(1)] = (15));

} else {
var statearr_43081_43141 = state_43060__$1;
(statearr_43081_43141[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (16))){
var inst_43040 = (state_43060[(11)]);
var state_43060__$1 = state_43060;
var statearr_43082_43142 = state_43060__$1;
(statearr_43082_43142[(2)] = inst_43040);

(statearr_43082_43142[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (10))){
var inst_43032 = (state_43060[(2)]);
var state_43060__$1 = state_43060;
var statearr_43083_43143 = state_43060__$1;
(statearr_43083_43143[(2)] = inst_43032);

(statearr_43083_43143[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (18))){
var inst_43043 = (state_43060[(2)]);
var state_43060__$1 = state_43060;
var statearr_43084_43144 = state_43060__$1;
(statearr_43084_43144[(2)] = inst_43043);

(statearr_43084_43144[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43061 === (8))){
var inst_43029 = cljs.core.async.close_BANG_(to);
var state_43060__$1 = state_43060;
var statearr_43085_43145 = state_43060__$1;
(statearr_43085_43145[(2)] = inst_43029);

(statearr_43085_43145[(1)] = (10));


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
});})(c__40884__auto__,jobs,results,process,async))
;
return ((function (switch__40693__auto__,c__40884__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0 = (function (){
var statearr_43086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__);

(statearr_43086[(1)] = (1));

return statearr_43086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1 = (function (state_43060){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43060);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43087){if((e43087 instanceof Object)){
var ex__40697__auto__ = e43087;
var statearr_43088_43146 = state_43060;
(statearr_43088_43146[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43060);

return cljs.core.cst$kw$recur;
} else {
throw e43087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43147 = state_43060;
state_43060 = G__43147;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__ = function(state_43060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1.call(this,state_43060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__,jobs,results,process,async))
})();
var state__40886__auto__ = (function (){var statearr_43089 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43089[(6)] = c__40884__auto__);

return statearr_43089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__,jobs,results,process,async))
);

return c__40884__auto__;
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
var G__43149 = arguments.length;
switch (G__43149) {
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
var G__43152 = arguments.length;
switch (G__43152) {
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
var G__43155 = arguments.length;
switch (G__43155) {
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
var c__40884__auto___43204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___43204,tc,fc){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___43204,tc,fc){
return (function (state_43181){
var state_val_43182 = (state_43181[(1)]);
if((state_val_43182 === (7))){
var inst_43177 = (state_43181[(2)]);
var state_43181__$1 = state_43181;
var statearr_43183_43205 = state_43181__$1;
(statearr_43183_43205[(2)] = inst_43177);

(statearr_43183_43205[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (1))){
var state_43181__$1 = state_43181;
var statearr_43184_43206 = state_43181__$1;
(statearr_43184_43206[(2)] = null);

(statearr_43184_43206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (4))){
var inst_43158 = (state_43181[(7)]);
var inst_43158__$1 = (state_43181[(2)]);
var inst_43159 = (inst_43158__$1 == null);
var state_43181__$1 = (function (){var statearr_43185 = state_43181;
(statearr_43185[(7)] = inst_43158__$1);

return statearr_43185;
})();
if(cljs.core.truth_(inst_43159)){
var statearr_43186_43207 = state_43181__$1;
(statearr_43186_43207[(1)] = (5));

} else {
var statearr_43187_43208 = state_43181__$1;
(statearr_43187_43208[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (13))){
var state_43181__$1 = state_43181;
var statearr_43188_43209 = state_43181__$1;
(statearr_43188_43209[(2)] = null);

(statearr_43188_43209[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (6))){
var inst_43158 = (state_43181[(7)]);
var inst_43164 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43158) : p.call(null,inst_43158));
var state_43181__$1 = state_43181;
if(cljs.core.truth_(inst_43164)){
var statearr_43189_43210 = state_43181__$1;
(statearr_43189_43210[(1)] = (9));

} else {
var statearr_43190_43211 = state_43181__$1;
(statearr_43190_43211[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (3))){
var inst_43179 = (state_43181[(2)]);
var state_43181__$1 = state_43181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43181__$1,inst_43179);
} else {
if((state_val_43182 === (12))){
var state_43181__$1 = state_43181;
var statearr_43191_43212 = state_43181__$1;
(statearr_43191_43212[(2)] = null);

(statearr_43191_43212[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (2))){
var state_43181__$1 = state_43181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43181__$1,(4),ch);
} else {
if((state_val_43182 === (11))){
var inst_43158 = (state_43181[(7)]);
var inst_43168 = (state_43181[(2)]);
var state_43181__$1 = state_43181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43181__$1,(8),inst_43168,inst_43158);
} else {
if((state_val_43182 === (9))){
var state_43181__$1 = state_43181;
var statearr_43192_43213 = state_43181__$1;
(statearr_43192_43213[(2)] = tc);

(statearr_43192_43213[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (5))){
var inst_43161 = cljs.core.async.close_BANG_(tc);
var inst_43162 = cljs.core.async.close_BANG_(fc);
var state_43181__$1 = (function (){var statearr_43193 = state_43181;
(statearr_43193[(8)] = inst_43161);

return statearr_43193;
})();
var statearr_43194_43214 = state_43181__$1;
(statearr_43194_43214[(2)] = inst_43162);

(statearr_43194_43214[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (14))){
var inst_43175 = (state_43181[(2)]);
var state_43181__$1 = state_43181;
var statearr_43195_43215 = state_43181__$1;
(statearr_43195_43215[(2)] = inst_43175);

(statearr_43195_43215[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (10))){
var state_43181__$1 = state_43181;
var statearr_43196_43216 = state_43181__$1;
(statearr_43196_43216[(2)] = fc);

(statearr_43196_43216[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43182 === (8))){
var inst_43170 = (state_43181[(2)]);
var state_43181__$1 = state_43181;
if(cljs.core.truth_(inst_43170)){
var statearr_43197_43217 = state_43181__$1;
(statearr_43197_43217[(1)] = (12));

} else {
var statearr_43198_43218 = state_43181__$1;
(statearr_43198_43218[(1)] = (13));

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
});})(c__40884__auto___43204,tc,fc))
;
return ((function (switch__40693__auto__,c__40884__auto___43204,tc,fc){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_43199 = [null,null,null,null,null,null,null,null,null];
(statearr_43199[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_43199[(1)] = (1));

return statearr_43199;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_43181){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43181);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43200){if((e43200 instanceof Object)){
var ex__40697__auto__ = e43200;
var statearr_43201_43219 = state_43181;
(statearr_43201_43219[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43181);

return cljs.core.cst$kw$recur;
} else {
throw e43200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43220 = state_43181;
state_43181 = G__43220;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_43181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_43181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___43204,tc,fc))
})();
var state__40886__auto__ = (function (){var statearr_43202 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43202[(6)] = c__40884__auto___43204);

return statearr_43202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___43204,tc,fc))
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
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__){
return (function (state_43241){
var state_val_43242 = (state_43241[(1)]);
if((state_val_43242 === (7))){
var inst_43237 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
var statearr_43243_43261 = state_43241__$1;
(statearr_43243_43261[(2)] = inst_43237);

(statearr_43243_43261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43242 === (1))){
var inst_43221 = init;
var state_43241__$1 = (function (){var statearr_43244 = state_43241;
(statearr_43244[(7)] = inst_43221);

return statearr_43244;
})();
var statearr_43245_43262 = state_43241__$1;
(statearr_43245_43262[(2)] = null);

(statearr_43245_43262[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43242 === (4))){
var inst_43224 = (state_43241[(8)]);
var inst_43224__$1 = (state_43241[(2)]);
var inst_43225 = (inst_43224__$1 == null);
var state_43241__$1 = (function (){var statearr_43246 = state_43241;
(statearr_43246[(8)] = inst_43224__$1);

return statearr_43246;
})();
if(cljs.core.truth_(inst_43225)){
var statearr_43247_43263 = state_43241__$1;
(statearr_43247_43263[(1)] = (5));

} else {
var statearr_43248_43264 = state_43241__$1;
(statearr_43248_43264[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43242 === (6))){
var inst_43228 = (state_43241[(9)]);
var inst_43224 = (state_43241[(8)]);
var inst_43221 = (state_43241[(7)]);
var inst_43228__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43221,inst_43224) : f.call(null,inst_43221,inst_43224));
var inst_43229 = cljs.core.reduced_QMARK_(inst_43228__$1);
var state_43241__$1 = (function (){var statearr_43249 = state_43241;
(statearr_43249[(9)] = inst_43228__$1);

return statearr_43249;
})();
if(inst_43229){
var statearr_43250_43265 = state_43241__$1;
(statearr_43250_43265[(1)] = (8));

} else {
var statearr_43251_43266 = state_43241__$1;
(statearr_43251_43266[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43242 === (3))){
var inst_43239 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43241__$1,inst_43239);
} else {
if((state_val_43242 === (2))){
var state_43241__$1 = state_43241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43241__$1,(4),ch);
} else {
if((state_val_43242 === (9))){
var inst_43228 = (state_43241[(9)]);
var inst_43221 = inst_43228;
var state_43241__$1 = (function (){var statearr_43252 = state_43241;
(statearr_43252[(7)] = inst_43221);

return statearr_43252;
})();
var statearr_43253_43267 = state_43241__$1;
(statearr_43253_43267[(2)] = null);

(statearr_43253_43267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43242 === (5))){
var inst_43221 = (state_43241[(7)]);
var state_43241__$1 = state_43241;
var statearr_43254_43268 = state_43241__$1;
(statearr_43254_43268[(2)] = inst_43221);

(statearr_43254_43268[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43242 === (10))){
var inst_43235 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
var statearr_43255_43269 = state_43241__$1;
(statearr_43255_43269[(2)] = inst_43235);

(statearr_43255_43269[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43242 === (8))){
var inst_43228 = (state_43241[(9)]);
var inst_43231 = cljs.core.deref(inst_43228);
var state_43241__$1 = state_43241;
var statearr_43256_43270 = state_43241__$1;
(statearr_43256_43270[(2)] = inst_43231);

(statearr_43256_43270[(1)] = (10));


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
});})(c__40884__auto__))
;
return ((function (switch__40693__auto__,c__40884__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40694__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40694__auto____0 = (function (){
var statearr_43257 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43257[(0)] = cljs$core$async$reduce_$_state_machine__40694__auto__);

(statearr_43257[(1)] = (1));

return statearr_43257;
});
var cljs$core$async$reduce_$_state_machine__40694__auto____1 = (function (state_43241){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43241);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43258){if((e43258 instanceof Object)){
var ex__40697__auto__ = e43258;
var statearr_43259_43271 = state_43241;
(statearr_43259_43271[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43241);

return cljs.core.cst$kw$recur;
} else {
throw e43258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43272 = state_43241;
state_43241 = G__43272;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40694__auto__ = function(state_43241){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40694__auto____1.call(this,state_43241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40694__auto____0;
cljs$core$async$reduce_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40694__auto____1;
return cljs$core$async$reduce_$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__))
})();
var state__40886__auto__ = (function (){var statearr_43260 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43260[(6)] = c__40884__auto__);

return statearr_43260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__))
);

return c__40884__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__,f__$1){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__,f__$1){
return (function (state_43278){
var state_val_43279 = (state_43278[(1)]);
if((state_val_43279 === (1))){
var inst_43273 = cljs.core.async.reduce(f__$1,init,ch);
var state_43278__$1 = state_43278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43278__$1,(2),inst_43273);
} else {
if((state_val_43279 === (2))){
var inst_43275 = (state_43278[(2)]);
var inst_43276 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43275) : f__$1.call(null,inst_43275));
var state_43278__$1 = state_43278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43278__$1,inst_43276);
} else {
return null;
}
}
});})(c__40884__auto__,f__$1))
;
return ((function (switch__40693__auto__,c__40884__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40694__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40694__auto____0 = (function (){
var statearr_43280 = [null,null,null,null,null,null,null];
(statearr_43280[(0)] = cljs$core$async$transduce_$_state_machine__40694__auto__);

(statearr_43280[(1)] = (1));

return statearr_43280;
});
var cljs$core$async$transduce_$_state_machine__40694__auto____1 = (function (state_43278){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43278);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43281){if((e43281 instanceof Object)){
var ex__40697__auto__ = e43281;
var statearr_43282_43284 = state_43278;
(statearr_43282_43284[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43278);

return cljs.core.cst$kw$recur;
} else {
throw e43281;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43285 = state_43278;
state_43278 = G__43285;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40694__auto__ = function(state_43278){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40694__auto____1.call(this,state_43278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40694__auto____0;
cljs$core$async$transduce_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40694__auto____1;
return cljs$core$async$transduce_$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__,f__$1))
})();
var state__40886__auto__ = (function (){var statearr_43283 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43283[(6)] = c__40884__auto__);

return statearr_43283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__,f__$1))
);

return c__40884__auto__;
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
var G__43287 = arguments.length;
switch (G__43287) {
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
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__){
return (function (state_43312){
var state_val_43313 = (state_43312[(1)]);
if((state_val_43313 === (7))){
var inst_43294 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43314_43335 = state_43312__$1;
(statearr_43314_43335[(2)] = inst_43294);

(statearr_43314_43335[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (1))){
var inst_43288 = cljs.core.seq(coll);
var inst_43289 = inst_43288;
var state_43312__$1 = (function (){var statearr_43315 = state_43312;
(statearr_43315[(7)] = inst_43289);

return statearr_43315;
})();
var statearr_43316_43336 = state_43312__$1;
(statearr_43316_43336[(2)] = null);

(statearr_43316_43336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (4))){
var inst_43289 = (state_43312[(7)]);
var inst_43292 = cljs.core.first(inst_43289);
var state_43312__$1 = state_43312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43312__$1,(7),ch,inst_43292);
} else {
if((state_val_43313 === (13))){
var inst_43306 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43317_43337 = state_43312__$1;
(statearr_43317_43337[(2)] = inst_43306);

(statearr_43317_43337[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (6))){
var inst_43297 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
if(cljs.core.truth_(inst_43297)){
var statearr_43318_43338 = state_43312__$1;
(statearr_43318_43338[(1)] = (8));

} else {
var statearr_43319_43339 = state_43312__$1;
(statearr_43319_43339[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (3))){
var inst_43310 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43312__$1,inst_43310);
} else {
if((state_val_43313 === (12))){
var state_43312__$1 = state_43312;
var statearr_43320_43340 = state_43312__$1;
(statearr_43320_43340[(2)] = null);

(statearr_43320_43340[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (2))){
var inst_43289 = (state_43312[(7)]);
var state_43312__$1 = state_43312;
if(cljs.core.truth_(inst_43289)){
var statearr_43321_43341 = state_43312__$1;
(statearr_43321_43341[(1)] = (4));

} else {
var statearr_43322_43342 = state_43312__$1;
(statearr_43322_43342[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (11))){
var inst_43303 = cljs.core.async.close_BANG_(ch);
var state_43312__$1 = state_43312;
var statearr_43323_43343 = state_43312__$1;
(statearr_43323_43343[(2)] = inst_43303);

(statearr_43323_43343[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (9))){
var state_43312__$1 = state_43312;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43324_43344 = state_43312__$1;
(statearr_43324_43344[(1)] = (11));

} else {
var statearr_43325_43345 = state_43312__$1;
(statearr_43325_43345[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (5))){
var inst_43289 = (state_43312[(7)]);
var state_43312__$1 = state_43312;
var statearr_43326_43346 = state_43312__$1;
(statearr_43326_43346[(2)] = inst_43289);

(statearr_43326_43346[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (10))){
var inst_43308 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43327_43347 = state_43312__$1;
(statearr_43327_43347[(2)] = inst_43308);

(statearr_43327_43347[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43313 === (8))){
var inst_43289 = (state_43312[(7)]);
var inst_43299 = cljs.core.next(inst_43289);
var inst_43289__$1 = inst_43299;
var state_43312__$1 = (function (){var statearr_43328 = state_43312;
(statearr_43328[(7)] = inst_43289__$1);

return statearr_43328;
})();
var statearr_43329_43348 = state_43312__$1;
(statearr_43329_43348[(2)] = null);

(statearr_43329_43348[(1)] = (2));


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
});})(c__40884__auto__))
;
return ((function (switch__40693__auto__,c__40884__auto__){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_43330 = [null,null,null,null,null,null,null,null];
(statearr_43330[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_43330[(1)] = (1));

return statearr_43330;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_43312){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43312);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43331){if((e43331 instanceof Object)){
var ex__40697__auto__ = e43331;
var statearr_43332_43349 = state_43312;
(statearr_43332_43349[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43312);

return cljs.core.cst$kw$recur;
} else {
throw e43331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43350 = state_43312;
state_43312 = G__43350;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_43312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_43312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__))
})();
var state__40886__auto__ = (function (){var statearr_43333 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43333[(6)] = c__40884__auto__);

return statearr_43333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__))
);

return c__40884__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43351 = (function (ch,cs,meta43352){
this.ch = ch;
this.cs = cs;
this.meta43352 = meta43352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43353,meta43352__$1){
var self__ = this;
var _43353__$1 = this;
return (new cljs.core.async.t_cljs$core$async43351(self__.ch,self__.cs,meta43352__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43353){
var self__ = this;
var _43353__$1 = this;
return self__.meta43352;
});})(cs))
;

cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43351.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta43352], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43351";

cljs.core.async.t_cljs$core$async43351.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43351");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43351.
 */
cljs.core.async.__GT_t_cljs$core$async43351 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43351(ch__$1,cs__$1,meta43352){
return (new cljs.core.async.t_cljs$core$async43351(ch__$1,cs__$1,meta43352));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43351(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40884__auto___43573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___43573,cs,m,dchan,dctr,done){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___43573,cs,m,dchan,dctr,done){
return (function (state_43488){
var state_val_43489 = (state_43488[(1)]);
if((state_val_43489 === (7))){
var inst_43484 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43490_43574 = state_43488__$1;
(statearr_43490_43574[(2)] = inst_43484);

(statearr_43490_43574[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (20))){
var inst_43387 = (state_43488[(7)]);
var inst_43399 = cljs.core.first(inst_43387);
var inst_43400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43399,(0),null);
var inst_43401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43399,(1),null);
var state_43488__$1 = (function (){var statearr_43491 = state_43488;
(statearr_43491[(8)] = inst_43400);

return statearr_43491;
})();
if(cljs.core.truth_(inst_43401)){
var statearr_43492_43575 = state_43488__$1;
(statearr_43492_43575[(1)] = (22));

} else {
var statearr_43493_43576 = state_43488__$1;
(statearr_43493_43576[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (27))){
var inst_43431 = (state_43488[(9)]);
var inst_43436 = (state_43488[(10)]);
var inst_43356 = (state_43488[(11)]);
var inst_43429 = (state_43488[(12)]);
var inst_43436__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43429,inst_43431);
var inst_43437 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43436__$1,inst_43356,done);
var state_43488__$1 = (function (){var statearr_43494 = state_43488;
(statearr_43494[(10)] = inst_43436__$1);

return statearr_43494;
})();
if(cljs.core.truth_(inst_43437)){
var statearr_43495_43577 = state_43488__$1;
(statearr_43495_43577[(1)] = (30));

} else {
var statearr_43496_43578 = state_43488__$1;
(statearr_43496_43578[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (1))){
var state_43488__$1 = state_43488;
var statearr_43497_43579 = state_43488__$1;
(statearr_43497_43579[(2)] = null);

(statearr_43497_43579[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (24))){
var inst_43387 = (state_43488[(7)]);
var inst_43406 = (state_43488[(2)]);
var inst_43407 = cljs.core.next(inst_43387);
var inst_43365 = inst_43407;
var inst_43366 = null;
var inst_43367 = (0);
var inst_43368 = (0);
var state_43488__$1 = (function (){var statearr_43498 = state_43488;
(statearr_43498[(13)] = inst_43365);

(statearr_43498[(14)] = inst_43366);

(statearr_43498[(15)] = inst_43368);

(statearr_43498[(16)] = inst_43406);

(statearr_43498[(17)] = inst_43367);

return statearr_43498;
})();
var statearr_43499_43580 = state_43488__$1;
(statearr_43499_43580[(2)] = null);

(statearr_43499_43580[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (39))){
var state_43488__$1 = state_43488;
var statearr_43503_43581 = state_43488__$1;
(statearr_43503_43581[(2)] = null);

(statearr_43503_43581[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (4))){
var inst_43356 = (state_43488[(11)]);
var inst_43356__$1 = (state_43488[(2)]);
var inst_43357 = (inst_43356__$1 == null);
var state_43488__$1 = (function (){var statearr_43504 = state_43488;
(statearr_43504[(11)] = inst_43356__$1);

return statearr_43504;
})();
if(cljs.core.truth_(inst_43357)){
var statearr_43505_43582 = state_43488__$1;
(statearr_43505_43582[(1)] = (5));

} else {
var statearr_43506_43583 = state_43488__$1;
(statearr_43506_43583[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (15))){
var inst_43365 = (state_43488[(13)]);
var inst_43366 = (state_43488[(14)]);
var inst_43368 = (state_43488[(15)]);
var inst_43367 = (state_43488[(17)]);
var inst_43383 = (state_43488[(2)]);
var inst_43384 = (inst_43368 + (1));
var tmp43500 = inst_43365;
var tmp43501 = inst_43366;
var tmp43502 = inst_43367;
var inst_43365__$1 = tmp43500;
var inst_43366__$1 = tmp43501;
var inst_43367__$1 = tmp43502;
var inst_43368__$1 = inst_43384;
var state_43488__$1 = (function (){var statearr_43507 = state_43488;
(statearr_43507[(13)] = inst_43365__$1);

(statearr_43507[(14)] = inst_43366__$1);

(statearr_43507[(15)] = inst_43368__$1);

(statearr_43507[(18)] = inst_43383);

(statearr_43507[(17)] = inst_43367__$1);

return statearr_43507;
})();
var statearr_43508_43584 = state_43488__$1;
(statearr_43508_43584[(2)] = null);

(statearr_43508_43584[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (21))){
var inst_43410 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43512_43585 = state_43488__$1;
(statearr_43512_43585[(2)] = inst_43410);

(statearr_43512_43585[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (31))){
var inst_43436 = (state_43488[(10)]);
var inst_43440 = done(null);
var inst_43441 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43436);
var state_43488__$1 = (function (){var statearr_43513 = state_43488;
(statearr_43513[(19)] = inst_43440);

return statearr_43513;
})();
var statearr_43514_43586 = state_43488__$1;
(statearr_43514_43586[(2)] = inst_43441);

(statearr_43514_43586[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (32))){
var inst_43431 = (state_43488[(9)]);
var inst_43428 = (state_43488[(20)]);
var inst_43430 = (state_43488[(21)]);
var inst_43429 = (state_43488[(12)]);
var inst_43443 = (state_43488[(2)]);
var inst_43444 = (inst_43431 + (1));
var tmp43509 = inst_43428;
var tmp43510 = inst_43430;
var tmp43511 = inst_43429;
var inst_43428__$1 = tmp43509;
var inst_43429__$1 = tmp43511;
var inst_43430__$1 = tmp43510;
var inst_43431__$1 = inst_43444;
var state_43488__$1 = (function (){var statearr_43515 = state_43488;
(statearr_43515[(9)] = inst_43431__$1);

(statearr_43515[(20)] = inst_43428__$1);

(statearr_43515[(21)] = inst_43430__$1);

(statearr_43515[(22)] = inst_43443);

(statearr_43515[(12)] = inst_43429__$1);

return statearr_43515;
})();
var statearr_43516_43587 = state_43488__$1;
(statearr_43516_43587[(2)] = null);

(statearr_43516_43587[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (40))){
var inst_43456 = (state_43488[(23)]);
var inst_43460 = done(null);
var inst_43461 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43456);
var state_43488__$1 = (function (){var statearr_43517 = state_43488;
(statearr_43517[(24)] = inst_43460);

return statearr_43517;
})();
var statearr_43518_43588 = state_43488__$1;
(statearr_43518_43588[(2)] = inst_43461);

(statearr_43518_43588[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (33))){
var inst_43447 = (state_43488[(25)]);
var inst_43449 = cljs.core.chunked_seq_QMARK_(inst_43447);
var state_43488__$1 = state_43488;
if(inst_43449){
var statearr_43519_43589 = state_43488__$1;
(statearr_43519_43589[(1)] = (36));

} else {
var statearr_43520_43590 = state_43488__$1;
(statearr_43520_43590[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (13))){
var inst_43377 = (state_43488[(26)]);
var inst_43380 = cljs.core.async.close_BANG_(inst_43377);
var state_43488__$1 = state_43488;
var statearr_43521_43591 = state_43488__$1;
(statearr_43521_43591[(2)] = inst_43380);

(statearr_43521_43591[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (22))){
var inst_43400 = (state_43488[(8)]);
var inst_43403 = cljs.core.async.close_BANG_(inst_43400);
var state_43488__$1 = state_43488;
var statearr_43522_43592 = state_43488__$1;
(statearr_43522_43592[(2)] = inst_43403);

(statearr_43522_43592[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (36))){
var inst_43447 = (state_43488[(25)]);
var inst_43451 = cljs.core.chunk_first(inst_43447);
var inst_43452 = cljs.core.chunk_rest(inst_43447);
var inst_43453 = cljs.core.count(inst_43451);
var inst_43428 = inst_43452;
var inst_43429 = inst_43451;
var inst_43430 = inst_43453;
var inst_43431 = (0);
var state_43488__$1 = (function (){var statearr_43523 = state_43488;
(statearr_43523[(9)] = inst_43431);

(statearr_43523[(20)] = inst_43428);

(statearr_43523[(21)] = inst_43430);

(statearr_43523[(12)] = inst_43429);

return statearr_43523;
})();
var statearr_43524_43593 = state_43488__$1;
(statearr_43524_43593[(2)] = null);

(statearr_43524_43593[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (41))){
var inst_43447 = (state_43488[(25)]);
var inst_43463 = (state_43488[(2)]);
var inst_43464 = cljs.core.next(inst_43447);
var inst_43428 = inst_43464;
var inst_43429 = null;
var inst_43430 = (0);
var inst_43431 = (0);
var state_43488__$1 = (function (){var statearr_43525 = state_43488;
(statearr_43525[(9)] = inst_43431);

(statearr_43525[(20)] = inst_43428);

(statearr_43525[(21)] = inst_43430);

(statearr_43525[(12)] = inst_43429);

(statearr_43525[(27)] = inst_43463);

return statearr_43525;
})();
var statearr_43526_43594 = state_43488__$1;
(statearr_43526_43594[(2)] = null);

(statearr_43526_43594[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (43))){
var state_43488__$1 = state_43488;
var statearr_43527_43595 = state_43488__$1;
(statearr_43527_43595[(2)] = null);

(statearr_43527_43595[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (29))){
var inst_43472 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43528_43596 = state_43488__$1;
(statearr_43528_43596[(2)] = inst_43472);

(statearr_43528_43596[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (44))){
var inst_43481 = (state_43488[(2)]);
var state_43488__$1 = (function (){var statearr_43529 = state_43488;
(statearr_43529[(28)] = inst_43481);

return statearr_43529;
})();
var statearr_43530_43597 = state_43488__$1;
(statearr_43530_43597[(2)] = null);

(statearr_43530_43597[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (6))){
var inst_43420 = (state_43488[(29)]);
var inst_43419 = cljs.core.deref(cs);
var inst_43420__$1 = cljs.core.keys(inst_43419);
var inst_43421 = cljs.core.count(inst_43420__$1);
var inst_43422 = cljs.core.reset_BANG_(dctr,inst_43421);
var inst_43427 = cljs.core.seq(inst_43420__$1);
var inst_43428 = inst_43427;
var inst_43429 = null;
var inst_43430 = (0);
var inst_43431 = (0);
var state_43488__$1 = (function (){var statearr_43531 = state_43488;
(statearr_43531[(9)] = inst_43431);

(statearr_43531[(30)] = inst_43422);

(statearr_43531[(29)] = inst_43420__$1);

(statearr_43531[(20)] = inst_43428);

(statearr_43531[(21)] = inst_43430);

(statearr_43531[(12)] = inst_43429);

return statearr_43531;
})();
var statearr_43532_43598 = state_43488__$1;
(statearr_43532_43598[(2)] = null);

(statearr_43532_43598[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (28))){
var inst_43428 = (state_43488[(20)]);
var inst_43447 = (state_43488[(25)]);
var inst_43447__$1 = cljs.core.seq(inst_43428);
var state_43488__$1 = (function (){var statearr_43533 = state_43488;
(statearr_43533[(25)] = inst_43447__$1);

return statearr_43533;
})();
if(inst_43447__$1){
var statearr_43534_43599 = state_43488__$1;
(statearr_43534_43599[(1)] = (33));

} else {
var statearr_43535_43600 = state_43488__$1;
(statearr_43535_43600[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (25))){
var inst_43431 = (state_43488[(9)]);
var inst_43430 = (state_43488[(21)]);
var inst_43433 = (inst_43431 < inst_43430);
var inst_43434 = inst_43433;
var state_43488__$1 = state_43488;
if(cljs.core.truth_(inst_43434)){
var statearr_43536_43601 = state_43488__$1;
(statearr_43536_43601[(1)] = (27));

} else {
var statearr_43537_43602 = state_43488__$1;
(statearr_43537_43602[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (34))){
var state_43488__$1 = state_43488;
var statearr_43538_43603 = state_43488__$1;
(statearr_43538_43603[(2)] = null);

(statearr_43538_43603[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (17))){
var state_43488__$1 = state_43488;
var statearr_43539_43604 = state_43488__$1;
(statearr_43539_43604[(2)] = null);

(statearr_43539_43604[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (3))){
var inst_43486 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43488__$1,inst_43486);
} else {
if((state_val_43489 === (12))){
var inst_43415 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43540_43605 = state_43488__$1;
(statearr_43540_43605[(2)] = inst_43415);

(statearr_43540_43605[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (2))){
var state_43488__$1 = state_43488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43488__$1,(4),ch);
} else {
if((state_val_43489 === (23))){
var state_43488__$1 = state_43488;
var statearr_43541_43606 = state_43488__$1;
(statearr_43541_43606[(2)] = null);

(statearr_43541_43606[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (35))){
var inst_43470 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43542_43607 = state_43488__$1;
(statearr_43542_43607[(2)] = inst_43470);

(statearr_43542_43607[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (19))){
var inst_43387 = (state_43488[(7)]);
var inst_43391 = cljs.core.chunk_first(inst_43387);
var inst_43392 = cljs.core.chunk_rest(inst_43387);
var inst_43393 = cljs.core.count(inst_43391);
var inst_43365 = inst_43392;
var inst_43366 = inst_43391;
var inst_43367 = inst_43393;
var inst_43368 = (0);
var state_43488__$1 = (function (){var statearr_43543 = state_43488;
(statearr_43543[(13)] = inst_43365);

(statearr_43543[(14)] = inst_43366);

(statearr_43543[(15)] = inst_43368);

(statearr_43543[(17)] = inst_43367);

return statearr_43543;
})();
var statearr_43544_43608 = state_43488__$1;
(statearr_43544_43608[(2)] = null);

(statearr_43544_43608[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (11))){
var inst_43365 = (state_43488[(13)]);
var inst_43387 = (state_43488[(7)]);
var inst_43387__$1 = cljs.core.seq(inst_43365);
var state_43488__$1 = (function (){var statearr_43545 = state_43488;
(statearr_43545[(7)] = inst_43387__$1);

return statearr_43545;
})();
if(inst_43387__$1){
var statearr_43546_43609 = state_43488__$1;
(statearr_43546_43609[(1)] = (16));

} else {
var statearr_43547_43610 = state_43488__$1;
(statearr_43547_43610[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (9))){
var inst_43417 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43548_43611 = state_43488__$1;
(statearr_43548_43611[(2)] = inst_43417);

(statearr_43548_43611[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (5))){
var inst_43363 = cljs.core.deref(cs);
var inst_43364 = cljs.core.seq(inst_43363);
var inst_43365 = inst_43364;
var inst_43366 = null;
var inst_43367 = (0);
var inst_43368 = (0);
var state_43488__$1 = (function (){var statearr_43549 = state_43488;
(statearr_43549[(13)] = inst_43365);

(statearr_43549[(14)] = inst_43366);

(statearr_43549[(15)] = inst_43368);

(statearr_43549[(17)] = inst_43367);

return statearr_43549;
})();
var statearr_43550_43612 = state_43488__$1;
(statearr_43550_43612[(2)] = null);

(statearr_43550_43612[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (14))){
var state_43488__$1 = state_43488;
var statearr_43551_43613 = state_43488__$1;
(statearr_43551_43613[(2)] = null);

(statearr_43551_43613[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (45))){
var inst_43478 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43552_43614 = state_43488__$1;
(statearr_43552_43614[(2)] = inst_43478);

(statearr_43552_43614[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (26))){
var inst_43420 = (state_43488[(29)]);
var inst_43474 = (state_43488[(2)]);
var inst_43475 = cljs.core.seq(inst_43420);
var state_43488__$1 = (function (){var statearr_43553 = state_43488;
(statearr_43553[(31)] = inst_43474);

return statearr_43553;
})();
if(inst_43475){
var statearr_43554_43615 = state_43488__$1;
(statearr_43554_43615[(1)] = (42));

} else {
var statearr_43555_43616 = state_43488__$1;
(statearr_43555_43616[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (16))){
var inst_43387 = (state_43488[(7)]);
var inst_43389 = cljs.core.chunked_seq_QMARK_(inst_43387);
var state_43488__$1 = state_43488;
if(inst_43389){
var statearr_43556_43617 = state_43488__$1;
(statearr_43556_43617[(1)] = (19));

} else {
var statearr_43557_43618 = state_43488__$1;
(statearr_43557_43618[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (38))){
var inst_43467 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43558_43619 = state_43488__$1;
(statearr_43558_43619[(2)] = inst_43467);

(statearr_43558_43619[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (30))){
var state_43488__$1 = state_43488;
var statearr_43559_43620 = state_43488__$1;
(statearr_43559_43620[(2)] = null);

(statearr_43559_43620[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (10))){
var inst_43366 = (state_43488[(14)]);
var inst_43368 = (state_43488[(15)]);
var inst_43376 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43366,inst_43368);
var inst_43377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43376,(0),null);
var inst_43378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43376,(1),null);
var state_43488__$1 = (function (){var statearr_43560 = state_43488;
(statearr_43560[(26)] = inst_43377);

return statearr_43560;
})();
if(cljs.core.truth_(inst_43378)){
var statearr_43561_43621 = state_43488__$1;
(statearr_43561_43621[(1)] = (13));

} else {
var statearr_43562_43622 = state_43488__$1;
(statearr_43562_43622[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (18))){
var inst_43413 = (state_43488[(2)]);
var state_43488__$1 = state_43488;
var statearr_43563_43623 = state_43488__$1;
(statearr_43563_43623[(2)] = inst_43413);

(statearr_43563_43623[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (42))){
var state_43488__$1 = state_43488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43488__$1,(45),dchan);
} else {
if((state_val_43489 === (37))){
var inst_43456 = (state_43488[(23)]);
var inst_43356 = (state_43488[(11)]);
var inst_43447 = (state_43488[(25)]);
var inst_43456__$1 = cljs.core.first(inst_43447);
var inst_43457 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43456__$1,inst_43356,done);
var state_43488__$1 = (function (){var statearr_43564 = state_43488;
(statearr_43564[(23)] = inst_43456__$1);

return statearr_43564;
})();
if(cljs.core.truth_(inst_43457)){
var statearr_43565_43624 = state_43488__$1;
(statearr_43565_43624[(1)] = (39));

} else {
var statearr_43566_43625 = state_43488__$1;
(statearr_43566_43625[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43489 === (8))){
var inst_43368 = (state_43488[(15)]);
var inst_43367 = (state_43488[(17)]);
var inst_43370 = (inst_43368 < inst_43367);
var inst_43371 = inst_43370;
var state_43488__$1 = state_43488;
if(cljs.core.truth_(inst_43371)){
var statearr_43567_43626 = state_43488__$1;
(statearr_43567_43626[(1)] = (10));

} else {
var statearr_43568_43627 = state_43488__$1;
(statearr_43568_43627[(1)] = (11));

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
});})(c__40884__auto___43573,cs,m,dchan,dctr,done))
;
return ((function (switch__40693__auto__,c__40884__auto___43573,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40694__auto__ = null;
var cljs$core$async$mult_$_state_machine__40694__auto____0 = (function (){
var statearr_43569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43569[(0)] = cljs$core$async$mult_$_state_machine__40694__auto__);

(statearr_43569[(1)] = (1));

return statearr_43569;
});
var cljs$core$async$mult_$_state_machine__40694__auto____1 = (function (state_43488){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43488);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43570){if((e43570 instanceof Object)){
var ex__40697__auto__ = e43570;
var statearr_43571_43628 = state_43488;
(statearr_43571_43628[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43488);

return cljs.core.cst$kw$recur;
} else {
throw e43570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43629 = state_43488;
state_43488 = G__43629;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40694__auto__ = function(state_43488){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40694__auto____1.call(this,state_43488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40694__auto____0;
cljs$core$async$mult_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40694__auto____1;
return cljs$core$async$mult_$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___43573,cs,m,dchan,dctr,done))
})();
var state__40886__auto__ = (function (){var statearr_43572 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43572[(6)] = c__40884__auto___43573);

return statearr_43572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___43573,cs,m,dchan,dctr,done))
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
var G__43631 = arguments.length;
switch (G__43631) {
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
var len__4730__auto___43643 = arguments.length;
var i__4731__auto___43644 = (0);
while(true){
if((i__4731__auto___43644 < len__4730__auto___43643)){
args__4736__auto__.push((arguments[i__4731__auto___43644]));

var G__43645 = (i__4731__auto___43644 + (1));
i__4731__auto___43644 = G__43645;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43637){
var map__43638 = p__43637;
var map__43638__$1 = (((((!((map__43638 == null))))?(((((map__43638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43638):map__43638);
var opts = map__43638__$1;
var statearr_43640_43646 = state;
(statearr_43640_43646[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__43638,map__43638__$1,opts){
return (function (val){
var statearr_43641_43647 = state;
(statearr_43641_43647[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__43638,map__43638__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_43642_43648 = state;
(statearr_43642_43648[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43633){
var G__43634 = cljs.core.first(seq43633);
var seq43633__$1 = cljs.core.next(seq43633);
var G__43635 = cljs.core.first(seq43633__$1);
var seq43633__$2 = cljs.core.next(seq43633__$1);
var G__43636 = cljs.core.first(seq43633__$2);
var seq43633__$3 = cljs.core.next(seq43633__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43634,G__43635,G__43636,seq43633__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43649 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43650){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43650 = meta43650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43651,meta43650__$1){
var self__ = this;
var _43651__$1 = this;
return (new cljs.core.async.t_cljs$core$async43649(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43650__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43651){
var self__ = this;
var _43651__$1 = this;
return self__.meta43650;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43649.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta43650], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43649";

cljs.core.async.t_cljs$core$async43649.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43649");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43649.
 */
cljs.core.async.__GT_t_cljs$core$async43649 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43649(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43650){
return (new cljs.core.async.t_cljs$core$async43649(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43650));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43649(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40884__auto___43813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___43813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___43813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43753){
var state_val_43754 = (state_43753[(1)]);
if((state_val_43754 === (7))){
var inst_43668 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
var statearr_43755_43814 = state_43753__$1;
(statearr_43755_43814[(2)] = inst_43668);

(statearr_43755_43814[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (20))){
var inst_43680 = (state_43753[(7)]);
var state_43753__$1 = state_43753;
var statearr_43756_43815 = state_43753__$1;
(statearr_43756_43815[(2)] = inst_43680);

(statearr_43756_43815[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (27))){
var state_43753__$1 = state_43753;
var statearr_43757_43816 = state_43753__$1;
(statearr_43757_43816[(2)] = null);

(statearr_43757_43816[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (1))){
var inst_43655 = (state_43753[(8)]);
var inst_43655__$1 = calc_state();
var inst_43657 = (inst_43655__$1 == null);
var inst_43658 = cljs.core.not(inst_43657);
var state_43753__$1 = (function (){var statearr_43758 = state_43753;
(statearr_43758[(8)] = inst_43655__$1);

return statearr_43758;
})();
if(inst_43658){
var statearr_43759_43817 = state_43753__$1;
(statearr_43759_43817[(1)] = (2));

} else {
var statearr_43760_43818 = state_43753__$1;
(statearr_43760_43818[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (24))){
var inst_43713 = (state_43753[(9)]);
var inst_43727 = (state_43753[(10)]);
var inst_43704 = (state_43753[(11)]);
var inst_43727__$1 = (inst_43704.cljs$core$IFn$_invoke$arity$1 ? inst_43704.cljs$core$IFn$_invoke$arity$1(inst_43713) : inst_43704.call(null,inst_43713));
var state_43753__$1 = (function (){var statearr_43761 = state_43753;
(statearr_43761[(10)] = inst_43727__$1);

return statearr_43761;
})();
if(cljs.core.truth_(inst_43727__$1)){
var statearr_43762_43819 = state_43753__$1;
(statearr_43762_43819[(1)] = (29));

} else {
var statearr_43763_43820 = state_43753__$1;
(statearr_43763_43820[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (4))){
var inst_43671 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
if(cljs.core.truth_(inst_43671)){
var statearr_43764_43821 = state_43753__$1;
(statearr_43764_43821[(1)] = (8));

} else {
var statearr_43765_43822 = state_43753__$1;
(statearr_43765_43822[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (15))){
var inst_43698 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
if(cljs.core.truth_(inst_43698)){
var statearr_43766_43823 = state_43753__$1;
(statearr_43766_43823[(1)] = (19));

} else {
var statearr_43767_43824 = state_43753__$1;
(statearr_43767_43824[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (21))){
var inst_43703 = (state_43753[(12)]);
var inst_43703__$1 = (state_43753[(2)]);
var inst_43704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43703__$1,cljs.core.cst$kw$solos);
var inst_43705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43703__$1,cljs.core.cst$kw$mutes);
var inst_43706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43703__$1,cljs.core.cst$kw$reads);
var state_43753__$1 = (function (){var statearr_43768 = state_43753;
(statearr_43768[(13)] = inst_43705);

(statearr_43768[(12)] = inst_43703__$1);

(statearr_43768[(11)] = inst_43704);

return statearr_43768;
})();
return cljs.core.async.ioc_alts_BANG_(state_43753__$1,(22),inst_43706);
} else {
if((state_val_43754 === (31))){
var inst_43735 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
if(cljs.core.truth_(inst_43735)){
var statearr_43769_43825 = state_43753__$1;
(statearr_43769_43825[(1)] = (32));

} else {
var statearr_43770_43826 = state_43753__$1;
(statearr_43770_43826[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (32))){
var inst_43712 = (state_43753[(14)]);
var state_43753__$1 = state_43753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43753__$1,(35),out,inst_43712);
} else {
if((state_val_43754 === (33))){
var inst_43703 = (state_43753[(12)]);
var inst_43680 = inst_43703;
var state_43753__$1 = (function (){var statearr_43771 = state_43753;
(statearr_43771[(7)] = inst_43680);

return statearr_43771;
})();
var statearr_43772_43827 = state_43753__$1;
(statearr_43772_43827[(2)] = null);

(statearr_43772_43827[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (13))){
var inst_43680 = (state_43753[(7)]);
var inst_43687 = inst_43680.cljs$lang$protocol_mask$partition0$;
var inst_43688 = (inst_43687 & (64));
var inst_43689 = inst_43680.cljs$core$ISeq$;
var inst_43690 = (cljs.core.PROTOCOL_SENTINEL === inst_43689);
var inst_43691 = ((inst_43688) || (inst_43690));
var state_43753__$1 = state_43753;
if(cljs.core.truth_(inst_43691)){
var statearr_43773_43828 = state_43753__$1;
(statearr_43773_43828[(1)] = (16));

} else {
var statearr_43774_43829 = state_43753__$1;
(statearr_43774_43829[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (22))){
var inst_43713 = (state_43753[(9)]);
var inst_43712 = (state_43753[(14)]);
var inst_43711 = (state_43753[(2)]);
var inst_43712__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43711,(0),null);
var inst_43713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43711,(1),null);
var inst_43714 = (inst_43712__$1 == null);
var inst_43715 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43713__$1,change);
var inst_43716 = ((inst_43714) || (inst_43715));
var state_43753__$1 = (function (){var statearr_43775 = state_43753;
(statearr_43775[(9)] = inst_43713__$1);

(statearr_43775[(14)] = inst_43712__$1);

return statearr_43775;
})();
if(cljs.core.truth_(inst_43716)){
var statearr_43776_43830 = state_43753__$1;
(statearr_43776_43830[(1)] = (23));

} else {
var statearr_43777_43831 = state_43753__$1;
(statearr_43777_43831[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (36))){
var inst_43703 = (state_43753[(12)]);
var inst_43680 = inst_43703;
var state_43753__$1 = (function (){var statearr_43778 = state_43753;
(statearr_43778[(7)] = inst_43680);

return statearr_43778;
})();
var statearr_43779_43832 = state_43753__$1;
(statearr_43779_43832[(2)] = null);

(statearr_43779_43832[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (29))){
var inst_43727 = (state_43753[(10)]);
var state_43753__$1 = state_43753;
var statearr_43780_43833 = state_43753__$1;
(statearr_43780_43833[(2)] = inst_43727);

(statearr_43780_43833[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (6))){
var state_43753__$1 = state_43753;
var statearr_43781_43834 = state_43753__$1;
(statearr_43781_43834[(2)] = false);

(statearr_43781_43834[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (28))){
var inst_43723 = (state_43753[(2)]);
var inst_43724 = calc_state();
var inst_43680 = inst_43724;
var state_43753__$1 = (function (){var statearr_43782 = state_43753;
(statearr_43782[(7)] = inst_43680);

(statearr_43782[(15)] = inst_43723);

return statearr_43782;
})();
var statearr_43783_43835 = state_43753__$1;
(statearr_43783_43835[(2)] = null);

(statearr_43783_43835[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (25))){
var inst_43749 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
var statearr_43784_43836 = state_43753__$1;
(statearr_43784_43836[(2)] = inst_43749);

(statearr_43784_43836[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (34))){
var inst_43747 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
var statearr_43785_43837 = state_43753__$1;
(statearr_43785_43837[(2)] = inst_43747);

(statearr_43785_43837[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (17))){
var state_43753__$1 = state_43753;
var statearr_43786_43838 = state_43753__$1;
(statearr_43786_43838[(2)] = false);

(statearr_43786_43838[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (3))){
var state_43753__$1 = state_43753;
var statearr_43787_43839 = state_43753__$1;
(statearr_43787_43839[(2)] = false);

(statearr_43787_43839[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (12))){
var inst_43751 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43753__$1,inst_43751);
} else {
if((state_val_43754 === (2))){
var inst_43655 = (state_43753[(8)]);
var inst_43660 = inst_43655.cljs$lang$protocol_mask$partition0$;
var inst_43661 = (inst_43660 & (64));
var inst_43662 = inst_43655.cljs$core$ISeq$;
var inst_43663 = (cljs.core.PROTOCOL_SENTINEL === inst_43662);
var inst_43664 = ((inst_43661) || (inst_43663));
var state_43753__$1 = state_43753;
if(cljs.core.truth_(inst_43664)){
var statearr_43788_43840 = state_43753__$1;
(statearr_43788_43840[(1)] = (5));

} else {
var statearr_43789_43841 = state_43753__$1;
(statearr_43789_43841[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (23))){
var inst_43712 = (state_43753[(14)]);
var inst_43718 = (inst_43712 == null);
var state_43753__$1 = state_43753;
if(cljs.core.truth_(inst_43718)){
var statearr_43790_43842 = state_43753__$1;
(statearr_43790_43842[(1)] = (26));

} else {
var statearr_43791_43843 = state_43753__$1;
(statearr_43791_43843[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (35))){
var inst_43738 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
if(cljs.core.truth_(inst_43738)){
var statearr_43792_43844 = state_43753__$1;
(statearr_43792_43844[(1)] = (36));

} else {
var statearr_43793_43845 = state_43753__$1;
(statearr_43793_43845[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (19))){
var inst_43680 = (state_43753[(7)]);
var inst_43700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43680);
var state_43753__$1 = state_43753;
var statearr_43794_43846 = state_43753__$1;
(statearr_43794_43846[(2)] = inst_43700);

(statearr_43794_43846[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (11))){
var inst_43680 = (state_43753[(7)]);
var inst_43684 = (inst_43680 == null);
var inst_43685 = cljs.core.not(inst_43684);
var state_43753__$1 = state_43753;
if(inst_43685){
var statearr_43795_43847 = state_43753__$1;
(statearr_43795_43847[(1)] = (13));

} else {
var statearr_43796_43848 = state_43753__$1;
(statearr_43796_43848[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (9))){
var inst_43655 = (state_43753[(8)]);
var state_43753__$1 = state_43753;
var statearr_43797_43849 = state_43753__$1;
(statearr_43797_43849[(2)] = inst_43655);

(statearr_43797_43849[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (5))){
var state_43753__$1 = state_43753;
var statearr_43798_43850 = state_43753__$1;
(statearr_43798_43850[(2)] = true);

(statearr_43798_43850[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (14))){
var state_43753__$1 = state_43753;
var statearr_43799_43851 = state_43753__$1;
(statearr_43799_43851[(2)] = false);

(statearr_43799_43851[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (26))){
var inst_43713 = (state_43753[(9)]);
var inst_43720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43713);
var state_43753__$1 = state_43753;
var statearr_43800_43852 = state_43753__$1;
(statearr_43800_43852[(2)] = inst_43720);

(statearr_43800_43852[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (16))){
var state_43753__$1 = state_43753;
var statearr_43801_43853 = state_43753__$1;
(statearr_43801_43853[(2)] = true);

(statearr_43801_43853[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (38))){
var inst_43743 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
var statearr_43802_43854 = state_43753__$1;
(statearr_43802_43854[(2)] = inst_43743);

(statearr_43802_43854[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (30))){
var inst_43713 = (state_43753[(9)]);
var inst_43705 = (state_43753[(13)]);
var inst_43704 = (state_43753[(11)]);
var inst_43730 = cljs.core.empty_QMARK_(inst_43704);
var inst_43731 = (inst_43705.cljs$core$IFn$_invoke$arity$1 ? inst_43705.cljs$core$IFn$_invoke$arity$1(inst_43713) : inst_43705.call(null,inst_43713));
var inst_43732 = cljs.core.not(inst_43731);
var inst_43733 = ((inst_43730) && (inst_43732));
var state_43753__$1 = state_43753;
var statearr_43803_43855 = state_43753__$1;
(statearr_43803_43855[(2)] = inst_43733);

(statearr_43803_43855[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (10))){
var inst_43655 = (state_43753[(8)]);
var inst_43676 = (state_43753[(2)]);
var inst_43677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43676,cljs.core.cst$kw$solos);
var inst_43678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43676,cljs.core.cst$kw$mutes);
var inst_43679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43676,cljs.core.cst$kw$reads);
var inst_43680 = inst_43655;
var state_43753__$1 = (function (){var statearr_43804 = state_43753;
(statearr_43804[(16)] = inst_43677);

(statearr_43804[(17)] = inst_43678);

(statearr_43804[(7)] = inst_43680);

(statearr_43804[(18)] = inst_43679);

return statearr_43804;
})();
var statearr_43805_43856 = state_43753__$1;
(statearr_43805_43856[(2)] = null);

(statearr_43805_43856[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (18))){
var inst_43695 = (state_43753[(2)]);
var state_43753__$1 = state_43753;
var statearr_43806_43857 = state_43753__$1;
(statearr_43806_43857[(2)] = inst_43695);

(statearr_43806_43857[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (37))){
var state_43753__$1 = state_43753;
var statearr_43807_43858 = state_43753__$1;
(statearr_43807_43858[(2)] = null);

(statearr_43807_43858[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43754 === (8))){
var inst_43655 = (state_43753[(8)]);
var inst_43673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43655);
var state_43753__$1 = state_43753;
var statearr_43808_43859 = state_43753__$1;
(statearr_43808_43859[(2)] = inst_43673);

(statearr_43808_43859[(1)] = (10));


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
});})(c__40884__auto___43813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40693__auto__,c__40884__auto___43813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40694__auto__ = null;
var cljs$core$async$mix_$_state_machine__40694__auto____0 = (function (){
var statearr_43809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43809[(0)] = cljs$core$async$mix_$_state_machine__40694__auto__);

(statearr_43809[(1)] = (1));

return statearr_43809;
});
var cljs$core$async$mix_$_state_machine__40694__auto____1 = (function (state_43753){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43753);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43810){if((e43810 instanceof Object)){
var ex__40697__auto__ = e43810;
var statearr_43811_43860 = state_43753;
(statearr_43811_43860[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43753);

return cljs.core.cst$kw$recur;
} else {
throw e43810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__43861 = state_43753;
state_43753 = G__43861;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40694__auto__ = function(state_43753){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40694__auto____1.call(this,state_43753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40694__auto____0;
cljs$core$async$mix_$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40694__auto____1;
return cljs$core$async$mix_$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___43813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40886__auto__ = (function (){var statearr_43812 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43812[(6)] = c__40884__auto___43813);

return statearr_43812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___43813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__43863 = arguments.length;
switch (G__43863) {
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
var G__43867 = arguments.length;
switch (G__43867) {
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
return (function (p1__43865_SHARP_){
if(cljs.core.truth_((p1__43865_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43865_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43865_SHARP_.call(null,topic)))){
return p1__43865_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43865_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43869 = meta43869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43870,meta43869__$1){
var self__ = this;
var _43870__$1 = this;
return (new cljs.core.async.t_cljs$core$async43868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43869__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43870){
var self__ = this;
var _43870__$1 = this;
return self__.meta43869;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43868.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta43869], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43868";

cljs.core.async.t_cljs$core$async43868.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43868");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43868.
 */
cljs.core.async.__GT_t_cljs$core$async43868 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43869){
return (new cljs.core.async.t_cljs$core$async43868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43869));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40884__auto___43988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___43988,mults,ensure_mult,p){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___43988,mults,ensure_mult,p){
return (function (state_43942){
var state_val_43943 = (state_43942[(1)]);
if((state_val_43943 === (7))){
var inst_43938 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
var statearr_43944_43989 = state_43942__$1;
(statearr_43944_43989[(2)] = inst_43938);

(statearr_43944_43989[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (20))){
var state_43942__$1 = state_43942;
var statearr_43945_43990 = state_43942__$1;
(statearr_43945_43990[(2)] = null);

(statearr_43945_43990[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (1))){
var state_43942__$1 = state_43942;
var statearr_43946_43991 = state_43942__$1;
(statearr_43946_43991[(2)] = null);

(statearr_43946_43991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (24))){
var inst_43921 = (state_43942[(7)]);
var inst_43930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43921);
var state_43942__$1 = state_43942;
var statearr_43947_43992 = state_43942__$1;
(statearr_43947_43992[(2)] = inst_43930);

(statearr_43947_43992[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (4))){
var inst_43873 = (state_43942[(8)]);
var inst_43873__$1 = (state_43942[(2)]);
var inst_43874 = (inst_43873__$1 == null);
var state_43942__$1 = (function (){var statearr_43948 = state_43942;
(statearr_43948[(8)] = inst_43873__$1);

return statearr_43948;
})();
if(cljs.core.truth_(inst_43874)){
var statearr_43949_43993 = state_43942__$1;
(statearr_43949_43993[(1)] = (5));

} else {
var statearr_43950_43994 = state_43942__$1;
(statearr_43950_43994[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (15))){
var inst_43915 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
var statearr_43951_43995 = state_43942__$1;
(statearr_43951_43995[(2)] = inst_43915);

(statearr_43951_43995[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (21))){
var inst_43935 = (state_43942[(2)]);
var state_43942__$1 = (function (){var statearr_43952 = state_43942;
(statearr_43952[(9)] = inst_43935);

return statearr_43952;
})();
var statearr_43953_43996 = state_43942__$1;
(statearr_43953_43996[(2)] = null);

(statearr_43953_43996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (13))){
var inst_43897 = (state_43942[(10)]);
var inst_43899 = cljs.core.chunked_seq_QMARK_(inst_43897);
var state_43942__$1 = state_43942;
if(inst_43899){
var statearr_43954_43997 = state_43942__$1;
(statearr_43954_43997[(1)] = (16));

} else {
var statearr_43955_43998 = state_43942__$1;
(statearr_43955_43998[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (22))){
var inst_43927 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
if(cljs.core.truth_(inst_43927)){
var statearr_43956_43999 = state_43942__$1;
(statearr_43956_43999[(1)] = (23));

} else {
var statearr_43957_44000 = state_43942__$1;
(statearr_43957_44000[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (6))){
var inst_43873 = (state_43942[(8)]);
var inst_43921 = (state_43942[(7)]);
var inst_43923 = (state_43942[(11)]);
var inst_43921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43873) : topic_fn.call(null,inst_43873));
var inst_43922 = cljs.core.deref(mults);
var inst_43923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43922,inst_43921__$1);
var state_43942__$1 = (function (){var statearr_43958 = state_43942;
(statearr_43958[(7)] = inst_43921__$1);

(statearr_43958[(11)] = inst_43923__$1);

return statearr_43958;
})();
if(cljs.core.truth_(inst_43923__$1)){
var statearr_43959_44001 = state_43942__$1;
(statearr_43959_44001[(1)] = (19));

} else {
var statearr_43960_44002 = state_43942__$1;
(statearr_43960_44002[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (25))){
var inst_43932 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
var statearr_43961_44003 = state_43942__$1;
(statearr_43961_44003[(2)] = inst_43932);

(statearr_43961_44003[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (17))){
var inst_43897 = (state_43942[(10)]);
var inst_43906 = cljs.core.first(inst_43897);
var inst_43907 = cljs.core.async.muxch_STAR_(inst_43906);
var inst_43908 = cljs.core.async.close_BANG_(inst_43907);
var inst_43909 = cljs.core.next(inst_43897);
var inst_43883 = inst_43909;
var inst_43884 = null;
var inst_43885 = (0);
var inst_43886 = (0);
var state_43942__$1 = (function (){var statearr_43962 = state_43942;
(statearr_43962[(12)] = inst_43883);

(statearr_43962[(13)] = inst_43884);

(statearr_43962[(14)] = inst_43885);

(statearr_43962[(15)] = inst_43886);

(statearr_43962[(16)] = inst_43908);

return statearr_43962;
})();
var statearr_43963_44004 = state_43942__$1;
(statearr_43963_44004[(2)] = null);

(statearr_43963_44004[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (3))){
var inst_43940 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43942__$1,inst_43940);
} else {
if((state_val_43943 === (12))){
var inst_43917 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
var statearr_43964_44005 = state_43942__$1;
(statearr_43964_44005[(2)] = inst_43917);

(statearr_43964_44005[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (2))){
var state_43942__$1 = state_43942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43942__$1,(4),ch);
} else {
if((state_val_43943 === (23))){
var state_43942__$1 = state_43942;
var statearr_43965_44006 = state_43942__$1;
(statearr_43965_44006[(2)] = null);

(statearr_43965_44006[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (19))){
var inst_43873 = (state_43942[(8)]);
var inst_43923 = (state_43942[(11)]);
var inst_43925 = cljs.core.async.muxch_STAR_(inst_43923);
var state_43942__$1 = state_43942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43942__$1,(22),inst_43925,inst_43873);
} else {
if((state_val_43943 === (11))){
var inst_43883 = (state_43942[(12)]);
var inst_43897 = (state_43942[(10)]);
var inst_43897__$1 = cljs.core.seq(inst_43883);
var state_43942__$1 = (function (){var statearr_43966 = state_43942;
(statearr_43966[(10)] = inst_43897__$1);

return statearr_43966;
})();
if(inst_43897__$1){
var statearr_43967_44007 = state_43942__$1;
(statearr_43967_44007[(1)] = (13));

} else {
var statearr_43968_44008 = state_43942__$1;
(statearr_43968_44008[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (9))){
var inst_43919 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
var statearr_43969_44009 = state_43942__$1;
(statearr_43969_44009[(2)] = inst_43919);

(statearr_43969_44009[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (5))){
var inst_43880 = cljs.core.deref(mults);
var inst_43881 = cljs.core.vals(inst_43880);
var inst_43882 = cljs.core.seq(inst_43881);
var inst_43883 = inst_43882;
var inst_43884 = null;
var inst_43885 = (0);
var inst_43886 = (0);
var state_43942__$1 = (function (){var statearr_43970 = state_43942;
(statearr_43970[(12)] = inst_43883);

(statearr_43970[(13)] = inst_43884);

(statearr_43970[(14)] = inst_43885);

(statearr_43970[(15)] = inst_43886);

return statearr_43970;
})();
var statearr_43971_44010 = state_43942__$1;
(statearr_43971_44010[(2)] = null);

(statearr_43971_44010[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (14))){
var state_43942__$1 = state_43942;
var statearr_43975_44011 = state_43942__$1;
(statearr_43975_44011[(2)] = null);

(statearr_43975_44011[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (16))){
var inst_43897 = (state_43942[(10)]);
var inst_43901 = cljs.core.chunk_first(inst_43897);
var inst_43902 = cljs.core.chunk_rest(inst_43897);
var inst_43903 = cljs.core.count(inst_43901);
var inst_43883 = inst_43902;
var inst_43884 = inst_43901;
var inst_43885 = inst_43903;
var inst_43886 = (0);
var state_43942__$1 = (function (){var statearr_43976 = state_43942;
(statearr_43976[(12)] = inst_43883);

(statearr_43976[(13)] = inst_43884);

(statearr_43976[(14)] = inst_43885);

(statearr_43976[(15)] = inst_43886);

return statearr_43976;
})();
var statearr_43977_44012 = state_43942__$1;
(statearr_43977_44012[(2)] = null);

(statearr_43977_44012[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (10))){
var inst_43883 = (state_43942[(12)]);
var inst_43884 = (state_43942[(13)]);
var inst_43885 = (state_43942[(14)]);
var inst_43886 = (state_43942[(15)]);
var inst_43891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43884,inst_43886);
var inst_43892 = cljs.core.async.muxch_STAR_(inst_43891);
var inst_43893 = cljs.core.async.close_BANG_(inst_43892);
var inst_43894 = (inst_43886 + (1));
var tmp43972 = inst_43883;
var tmp43973 = inst_43884;
var tmp43974 = inst_43885;
var inst_43883__$1 = tmp43972;
var inst_43884__$1 = tmp43973;
var inst_43885__$1 = tmp43974;
var inst_43886__$1 = inst_43894;
var state_43942__$1 = (function (){var statearr_43978 = state_43942;
(statearr_43978[(17)] = inst_43893);

(statearr_43978[(12)] = inst_43883__$1);

(statearr_43978[(13)] = inst_43884__$1);

(statearr_43978[(14)] = inst_43885__$1);

(statearr_43978[(15)] = inst_43886__$1);

return statearr_43978;
})();
var statearr_43979_44013 = state_43942__$1;
(statearr_43979_44013[(2)] = null);

(statearr_43979_44013[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (18))){
var inst_43912 = (state_43942[(2)]);
var state_43942__$1 = state_43942;
var statearr_43980_44014 = state_43942__$1;
(statearr_43980_44014[(2)] = inst_43912);

(statearr_43980_44014[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43943 === (8))){
var inst_43885 = (state_43942[(14)]);
var inst_43886 = (state_43942[(15)]);
var inst_43888 = (inst_43886 < inst_43885);
var inst_43889 = inst_43888;
var state_43942__$1 = state_43942;
if(cljs.core.truth_(inst_43889)){
var statearr_43981_44015 = state_43942__$1;
(statearr_43981_44015[(1)] = (10));

} else {
var statearr_43982_44016 = state_43942__$1;
(statearr_43982_44016[(1)] = (11));

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
});})(c__40884__auto___43988,mults,ensure_mult,p))
;
return ((function (switch__40693__auto__,c__40884__auto___43988,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_43983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43983[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_43983[(1)] = (1));

return statearr_43983;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_43942){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_43942);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e43984){if((e43984 instanceof Object)){
var ex__40697__auto__ = e43984;
var statearr_43985_44017 = state_43942;
(statearr_43985_44017[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43942);

return cljs.core.cst$kw$recur;
} else {
throw e43984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44018 = state_43942;
state_43942 = G__44018;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_43942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_43942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___43988,mults,ensure_mult,p))
})();
var state__40886__auto__ = (function (){var statearr_43986 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_43986[(6)] = c__40884__auto___43988);

return statearr_43986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___43988,mults,ensure_mult,p))
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
var G__44020 = arguments.length;
switch (G__44020) {
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
var G__44023 = arguments.length;
switch (G__44023) {
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
var G__44026 = arguments.length;
switch (G__44026) {
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
var c__40884__auto___44093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___44093,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___44093,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44065){
var state_val_44066 = (state_44065[(1)]);
if((state_val_44066 === (7))){
var state_44065__$1 = state_44065;
var statearr_44067_44094 = state_44065__$1;
(statearr_44067_44094[(2)] = null);

(statearr_44067_44094[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (1))){
var state_44065__$1 = state_44065;
var statearr_44068_44095 = state_44065__$1;
(statearr_44068_44095[(2)] = null);

(statearr_44068_44095[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (4))){
var inst_44029 = (state_44065[(7)]);
var inst_44031 = (inst_44029 < cnt);
var state_44065__$1 = state_44065;
if(cljs.core.truth_(inst_44031)){
var statearr_44069_44096 = state_44065__$1;
(statearr_44069_44096[(1)] = (6));

} else {
var statearr_44070_44097 = state_44065__$1;
(statearr_44070_44097[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (15))){
var inst_44061 = (state_44065[(2)]);
var state_44065__$1 = state_44065;
var statearr_44071_44098 = state_44065__$1;
(statearr_44071_44098[(2)] = inst_44061);

(statearr_44071_44098[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (13))){
var inst_44054 = cljs.core.async.close_BANG_(out);
var state_44065__$1 = state_44065;
var statearr_44072_44099 = state_44065__$1;
(statearr_44072_44099[(2)] = inst_44054);

(statearr_44072_44099[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (6))){
var state_44065__$1 = state_44065;
var statearr_44073_44100 = state_44065__$1;
(statearr_44073_44100[(2)] = null);

(statearr_44073_44100[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (3))){
var inst_44063 = (state_44065[(2)]);
var state_44065__$1 = state_44065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44065__$1,inst_44063);
} else {
if((state_val_44066 === (12))){
var inst_44051 = (state_44065[(8)]);
var inst_44051__$1 = (state_44065[(2)]);
var inst_44052 = cljs.core.some(cljs.core.nil_QMARK_,inst_44051__$1);
var state_44065__$1 = (function (){var statearr_44074 = state_44065;
(statearr_44074[(8)] = inst_44051__$1);

return statearr_44074;
})();
if(cljs.core.truth_(inst_44052)){
var statearr_44075_44101 = state_44065__$1;
(statearr_44075_44101[(1)] = (13));

} else {
var statearr_44076_44102 = state_44065__$1;
(statearr_44076_44102[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (2))){
var inst_44028 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44029 = (0);
var state_44065__$1 = (function (){var statearr_44077 = state_44065;
(statearr_44077[(7)] = inst_44029);

(statearr_44077[(9)] = inst_44028);

return statearr_44077;
})();
var statearr_44078_44103 = state_44065__$1;
(statearr_44078_44103[(2)] = null);

(statearr_44078_44103[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (11))){
var inst_44029 = (state_44065[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44065,(10),Object,null,(9));
var inst_44038 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44029) : chs__$1.call(null,inst_44029));
var inst_44039 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44029) : done.call(null,inst_44029));
var inst_44040 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44038,inst_44039);
var state_44065__$1 = state_44065;
var statearr_44079_44104 = state_44065__$1;
(statearr_44079_44104[(2)] = inst_44040);


cljs.core.async.impl.ioc_helpers.process_exception(state_44065__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (9))){
var inst_44029 = (state_44065[(7)]);
var inst_44042 = (state_44065[(2)]);
var inst_44043 = (inst_44029 + (1));
var inst_44029__$1 = inst_44043;
var state_44065__$1 = (function (){var statearr_44080 = state_44065;
(statearr_44080[(7)] = inst_44029__$1);

(statearr_44080[(10)] = inst_44042);

return statearr_44080;
})();
var statearr_44081_44105 = state_44065__$1;
(statearr_44081_44105[(2)] = null);

(statearr_44081_44105[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (5))){
var inst_44049 = (state_44065[(2)]);
var state_44065__$1 = (function (){var statearr_44082 = state_44065;
(statearr_44082[(11)] = inst_44049);

return statearr_44082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44065__$1,(12),dchan);
} else {
if((state_val_44066 === (14))){
var inst_44051 = (state_44065[(8)]);
var inst_44056 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44051);
var state_44065__$1 = state_44065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44065__$1,(16),out,inst_44056);
} else {
if((state_val_44066 === (16))){
var inst_44058 = (state_44065[(2)]);
var state_44065__$1 = (function (){var statearr_44083 = state_44065;
(statearr_44083[(12)] = inst_44058);

return statearr_44083;
})();
var statearr_44084_44106 = state_44065__$1;
(statearr_44084_44106[(2)] = null);

(statearr_44084_44106[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (10))){
var inst_44033 = (state_44065[(2)]);
var inst_44034 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44065__$1 = (function (){var statearr_44085 = state_44065;
(statearr_44085[(13)] = inst_44033);

return statearr_44085;
})();
var statearr_44086_44107 = state_44065__$1;
(statearr_44086_44107[(2)] = inst_44034);


cljs.core.async.impl.ioc_helpers.process_exception(state_44065__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_44066 === (8))){
var inst_44047 = (state_44065[(2)]);
var state_44065__$1 = state_44065;
var statearr_44087_44108 = state_44065__$1;
(statearr_44087_44108[(2)] = inst_44047);

(statearr_44087_44108[(1)] = (5));


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
});})(c__40884__auto___44093,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40693__auto__,c__40884__auto___44093,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_44088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44088[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_44088[(1)] = (1));

return statearr_44088;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_44065){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44065);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44089){if((e44089 instanceof Object)){
var ex__40697__auto__ = e44089;
var statearr_44090_44109 = state_44065;
(statearr_44090_44109[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44065);

return cljs.core.cst$kw$recur;
} else {
throw e44089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44110 = state_44065;
state_44065 = G__44110;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_44065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_44065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___44093,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40886__auto__ = (function (){var statearr_44091 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44091[(6)] = c__40884__auto___44093);

return statearr_44091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___44093,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__44113 = arguments.length;
switch (G__44113) {
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
var c__40884__auto___44167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___44167,out){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___44167,out){
return (function (state_44145){
var state_val_44146 = (state_44145[(1)]);
if((state_val_44146 === (7))){
var inst_44125 = (state_44145[(7)]);
var inst_44124 = (state_44145[(8)]);
var inst_44124__$1 = (state_44145[(2)]);
var inst_44125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44124__$1,(0),null);
var inst_44126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44124__$1,(1),null);
var inst_44127 = (inst_44125__$1 == null);
var state_44145__$1 = (function (){var statearr_44147 = state_44145;
(statearr_44147[(7)] = inst_44125__$1);

(statearr_44147[(9)] = inst_44126);

(statearr_44147[(8)] = inst_44124__$1);

return statearr_44147;
})();
if(cljs.core.truth_(inst_44127)){
var statearr_44148_44168 = state_44145__$1;
(statearr_44148_44168[(1)] = (8));

} else {
var statearr_44149_44169 = state_44145__$1;
(statearr_44149_44169[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44146 === (1))){
var inst_44114 = cljs.core.vec(chs);
var inst_44115 = inst_44114;
var state_44145__$1 = (function (){var statearr_44150 = state_44145;
(statearr_44150[(10)] = inst_44115);

return statearr_44150;
})();
var statearr_44151_44170 = state_44145__$1;
(statearr_44151_44170[(2)] = null);

(statearr_44151_44170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44146 === (4))){
var inst_44115 = (state_44145[(10)]);
var state_44145__$1 = state_44145;
return cljs.core.async.ioc_alts_BANG_(state_44145__$1,(7),inst_44115);
} else {
if((state_val_44146 === (6))){
var inst_44141 = (state_44145[(2)]);
var state_44145__$1 = state_44145;
var statearr_44152_44171 = state_44145__$1;
(statearr_44152_44171[(2)] = inst_44141);

(statearr_44152_44171[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44146 === (3))){
var inst_44143 = (state_44145[(2)]);
var state_44145__$1 = state_44145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44145__$1,inst_44143);
} else {
if((state_val_44146 === (2))){
var inst_44115 = (state_44145[(10)]);
var inst_44117 = cljs.core.count(inst_44115);
var inst_44118 = (inst_44117 > (0));
var state_44145__$1 = state_44145;
if(cljs.core.truth_(inst_44118)){
var statearr_44154_44172 = state_44145__$1;
(statearr_44154_44172[(1)] = (4));

} else {
var statearr_44155_44173 = state_44145__$1;
(statearr_44155_44173[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44146 === (11))){
var inst_44115 = (state_44145[(10)]);
var inst_44134 = (state_44145[(2)]);
var tmp44153 = inst_44115;
var inst_44115__$1 = tmp44153;
var state_44145__$1 = (function (){var statearr_44156 = state_44145;
(statearr_44156[(11)] = inst_44134);

(statearr_44156[(10)] = inst_44115__$1);

return statearr_44156;
})();
var statearr_44157_44174 = state_44145__$1;
(statearr_44157_44174[(2)] = null);

(statearr_44157_44174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44146 === (9))){
var inst_44125 = (state_44145[(7)]);
var state_44145__$1 = state_44145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44145__$1,(11),out,inst_44125);
} else {
if((state_val_44146 === (5))){
var inst_44139 = cljs.core.async.close_BANG_(out);
var state_44145__$1 = state_44145;
var statearr_44158_44175 = state_44145__$1;
(statearr_44158_44175[(2)] = inst_44139);

(statearr_44158_44175[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44146 === (10))){
var inst_44137 = (state_44145[(2)]);
var state_44145__$1 = state_44145;
var statearr_44159_44176 = state_44145__$1;
(statearr_44159_44176[(2)] = inst_44137);

(statearr_44159_44176[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44146 === (8))){
var inst_44125 = (state_44145[(7)]);
var inst_44115 = (state_44145[(10)]);
var inst_44126 = (state_44145[(9)]);
var inst_44124 = (state_44145[(8)]);
var inst_44129 = (function (){var cs = inst_44115;
var vec__44120 = inst_44124;
var v = inst_44125;
var c = inst_44126;
return ((function (cs,vec__44120,v,c,inst_44125,inst_44115,inst_44126,inst_44124,state_val_44146,c__40884__auto___44167,out){
return (function (p1__44111_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44111_SHARP_);
});
;})(cs,vec__44120,v,c,inst_44125,inst_44115,inst_44126,inst_44124,state_val_44146,c__40884__auto___44167,out))
})();
var inst_44130 = cljs.core.filterv(inst_44129,inst_44115);
var inst_44115__$1 = inst_44130;
var state_44145__$1 = (function (){var statearr_44160 = state_44145;
(statearr_44160[(10)] = inst_44115__$1);

return statearr_44160;
})();
var statearr_44161_44177 = state_44145__$1;
(statearr_44161_44177[(2)] = null);

(statearr_44161_44177[(1)] = (2));


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
});})(c__40884__auto___44167,out))
;
return ((function (switch__40693__auto__,c__40884__auto___44167,out){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_44162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44162[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_44162[(1)] = (1));

return statearr_44162;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_44145){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44145);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44163){if((e44163 instanceof Object)){
var ex__40697__auto__ = e44163;
var statearr_44164_44178 = state_44145;
(statearr_44164_44178[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44145);

return cljs.core.cst$kw$recur;
} else {
throw e44163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44179 = state_44145;
state_44145 = G__44179;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_44145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_44145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___44167,out))
})();
var state__40886__auto__ = (function (){var statearr_44165 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44165[(6)] = c__40884__auto___44167);

return statearr_44165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___44167,out))
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
var G__44181 = arguments.length;
switch (G__44181) {
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
var c__40884__auto___44226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___44226,out){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___44226,out){
return (function (state_44205){
var state_val_44206 = (state_44205[(1)]);
if((state_val_44206 === (7))){
var inst_44187 = (state_44205[(7)]);
var inst_44187__$1 = (state_44205[(2)]);
var inst_44188 = (inst_44187__$1 == null);
var inst_44189 = cljs.core.not(inst_44188);
var state_44205__$1 = (function (){var statearr_44207 = state_44205;
(statearr_44207[(7)] = inst_44187__$1);

return statearr_44207;
})();
if(inst_44189){
var statearr_44208_44227 = state_44205__$1;
(statearr_44208_44227[(1)] = (8));

} else {
var statearr_44209_44228 = state_44205__$1;
(statearr_44209_44228[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (1))){
var inst_44182 = (0);
var state_44205__$1 = (function (){var statearr_44210 = state_44205;
(statearr_44210[(8)] = inst_44182);

return statearr_44210;
})();
var statearr_44211_44229 = state_44205__$1;
(statearr_44211_44229[(2)] = null);

(statearr_44211_44229[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (4))){
var state_44205__$1 = state_44205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44205__$1,(7),ch);
} else {
if((state_val_44206 === (6))){
var inst_44200 = (state_44205[(2)]);
var state_44205__$1 = state_44205;
var statearr_44212_44230 = state_44205__$1;
(statearr_44212_44230[(2)] = inst_44200);

(statearr_44212_44230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (3))){
var inst_44202 = (state_44205[(2)]);
var inst_44203 = cljs.core.async.close_BANG_(out);
var state_44205__$1 = (function (){var statearr_44213 = state_44205;
(statearr_44213[(9)] = inst_44202);

return statearr_44213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44205__$1,inst_44203);
} else {
if((state_val_44206 === (2))){
var inst_44182 = (state_44205[(8)]);
var inst_44184 = (inst_44182 < n);
var state_44205__$1 = state_44205;
if(cljs.core.truth_(inst_44184)){
var statearr_44214_44231 = state_44205__$1;
(statearr_44214_44231[(1)] = (4));

} else {
var statearr_44215_44232 = state_44205__$1;
(statearr_44215_44232[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (11))){
var inst_44182 = (state_44205[(8)]);
var inst_44192 = (state_44205[(2)]);
var inst_44193 = (inst_44182 + (1));
var inst_44182__$1 = inst_44193;
var state_44205__$1 = (function (){var statearr_44216 = state_44205;
(statearr_44216[(8)] = inst_44182__$1);

(statearr_44216[(10)] = inst_44192);

return statearr_44216;
})();
var statearr_44217_44233 = state_44205__$1;
(statearr_44217_44233[(2)] = null);

(statearr_44217_44233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (9))){
var state_44205__$1 = state_44205;
var statearr_44218_44234 = state_44205__$1;
(statearr_44218_44234[(2)] = null);

(statearr_44218_44234[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (5))){
var state_44205__$1 = state_44205;
var statearr_44219_44235 = state_44205__$1;
(statearr_44219_44235[(2)] = null);

(statearr_44219_44235[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (10))){
var inst_44197 = (state_44205[(2)]);
var state_44205__$1 = state_44205;
var statearr_44220_44236 = state_44205__$1;
(statearr_44220_44236[(2)] = inst_44197);

(statearr_44220_44236[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44206 === (8))){
var inst_44187 = (state_44205[(7)]);
var state_44205__$1 = state_44205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44205__$1,(11),out,inst_44187);
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
});})(c__40884__auto___44226,out))
;
return ((function (switch__40693__auto__,c__40884__auto___44226,out){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_44221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44221[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_44221[(1)] = (1));

return statearr_44221;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_44205){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44205);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44222){if((e44222 instanceof Object)){
var ex__40697__auto__ = e44222;
var statearr_44223_44237 = state_44205;
(statearr_44223_44237[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44205);

return cljs.core.cst$kw$recur;
} else {
throw e44222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44238 = state_44205;
state_44205 = G__44238;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_44205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_44205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___44226,out))
})();
var state__40886__auto__ = (function (){var statearr_44224 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44224[(6)] = c__40884__auto___44226);

return statearr_44224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___44226,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44240 = (function (f,ch,meta44241){
this.f = f;
this.ch = ch;
this.meta44241 = meta44241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44242,meta44241__$1){
var self__ = this;
var _44242__$1 = this;
return (new cljs.core.async.t_cljs$core$async44240(self__.f,self__.ch,meta44241__$1));
});

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44242){
var self__ = this;
var _44242__$1 = this;
return self__.meta44241;
});

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44243 = (function (f,ch,meta44241,_,fn1,meta44244){
this.f = f;
this.ch = ch;
this.meta44241 = meta44241;
this._ = _;
this.fn1 = fn1;
this.meta44244 = meta44244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44245,meta44244__$1){
var self__ = this;
var _44245__$1 = this;
return (new cljs.core.async.t_cljs$core$async44243(self__.f,self__.ch,self__.meta44241,self__._,self__.fn1,meta44244__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44245){
var self__ = this;
var _44245__$1 = this;
return self__.meta44244;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44239_SHARP_){
var G__44246 = (((p1__44239_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44239_SHARP_) : self__.f.call(null,p1__44239_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44246) : f1.call(null,G__44246));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async44243.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44241,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async44240], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta44244], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44243";

cljs.core.async.t_cljs$core$async44243.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44243");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44243.
 */
cljs.core.async.__GT_t_cljs$core$async44243 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44243(f__$1,ch__$1,meta44241__$1,___$2,fn1__$1,meta44244){
return (new cljs.core.async.t_cljs$core$async44243(f__$1,ch__$1,meta44241__$1,___$2,fn1__$1,meta44244));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async44243(self__.f,self__.ch,self__.meta44241,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44247 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44247) : self__.f.call(null,G__44247));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async44240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44241], null);
});

cljs.core.async.t_cljs$core$async44240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44240";

cljs.core.async.t_cljs$core$async44240.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44240");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44240.
 */
cljs.core.async.__GT_t_cljs$core$async44240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44240(f__$1,ch__$1,meta44241){
return (new cljs.core.async.t_cljs$core$async44240(f__$1,ch__$1,meta44241));
});

}

return (new cljs.core.async.t_cljs$core$async44240(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44248 = (function (f,ch,meta44249){
this.f = f;
this.ch = ch;
this.meta44249 = meta44249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44250,meta44249__$1){
var self__ = this;
var _44250__$1 = this;
return (new cljs.core.async.t_cljs$core$async44248(self__.f,self__.ch,meta44249__$1));
});

cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44250){
var self__ = this;
var _44250__$1 = this;
return self__.meta44249;
});

cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async44248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44249], null);
});

cljs.core.async.t_cljs$core$async44248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44248";

cljs.core.async.t_cljs$core$async44248.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44248");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44248.
 */
cljs.core.async.__GT_t_cljs$core$async44248 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44248(f__$1,ch__$1,meta44249){
return (new cljs.core.async.t_cljs$core$async44248(f__$1,ch__$1,meta44249));
});

}

return (new cljs.core.async.t_cljs$core$async44248(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44251 = (function (p,ch,meta44252){
this.p = p;
this.ch = ch;
this.meta44252 = meta44252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44253,meta44252__$1){
var self__ = this;
var _44253__$1 = this;
return (new cljs.core.async.t_cljs$core$async44251(self__.p,self__.ch,meta44252__$1));
});

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44253){
var self__ = this;
var _44253__$1 = this;
return self__.meta44252;
});

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async44251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44252], null);
});

cljs.core.async.t_cljs$core$async44251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44251";

cljs.core.async.t_cljs$core$async44251.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44251");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44251.
 */
cljs.core.async.__GT_t_cljs$core$async44251 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44251(p__$1,ch__$1,meta44252){
return (new cljs.core.async.t_cljs$core$async44251(p__$1,ch__$1,meta44252));
});

}

return (new cljs.core.async.t_cljs$core$async44251(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44255 = arguments.length;
switch (G__44255) {
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
var c__40884__auto___44295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___44295,out){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___44295,out){
return (function (state_44276){
var state_val_44277 = (state_44276[(1)]);
if((state_val_44277 === (7))){
var inst_44272 = (state_44276[(2)]);
var state_44276__$1 = state_44276;
var statearr_44278_44296 = state_44276__$1;
(statearr_44278_44296[(2)] = inst_44272);

(statearr_44278_44296[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (1))){
var state_44276__$1 = state_44276;
var statearr_44279_44297 = state_44276__$1;
(statearr_44279_44297[(2)] = null);

(statearr_44279_44297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (4))){
var inst_44258 = (state_44276[(7)]);
var inst_44258__$1 = (state_44276[(2)]);
var inst_44259 = (inst_44258__$1 == null);
var state_44276__$1 = (function (){var statearr_44280 = state_44276;
(statearr_44280[(7)] = inst_44258__$1);

return statearr_44280;
})();
if(cljs.core.truth_(inst_44259)){
var statearr_44281_44298 = state_44276__$1;
(statearr_44281_44298[(1)] = (5));

} else {
var statearr_44282_44299 = state_44276__$1;
(statearr_44282_44299[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (6))){
var inst_44258 = (state_44276[(7)]);
var inst_44263 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44258) : p.call(null,inst_44258));
var state_44276__$1 = state_44276;
if(cljs.core.truth_(inst_44263)){
var statearr_44283_44300 = state_44276__$1;
(statearr_44283_44300[(1)] = (8));

} else {
var statearr_44284_44301 = state_44276__$1;
(statearr_44284_44301[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (3))){
var inst_44274 = (state_44276[(2)]);
var state_44276__$1 = state_44276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44276__$1,inst_44274);
} else {
if((state_val_44277 === (2))){
var state_44276__$1 = state_44276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44276__$1,(4),ch);
} else {
if((state_val_44277 === (11))){
var inst_44266 = (state_44276[(2)]);
var state_44276__$1 = state_44276;
var statearr_44285_44302 = state_44276__$1;
(statearr_44285_44302[(2)] = inst_44266);

(statearr_44285_44302[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (9))){
var state_44276__$1 = state_44276;
var statearr_44286_44303 = state_44276__$1;
(statearr_44286_44303[(2)] = null);

(statearr_44286_44303[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (5))){
var inst_44261 = cljs.core.async.close_BANG_(out);
var state_44276__$1 = state_44276;
var statearr_44287_44304 = state_44276__$1;
(statearr_44287_44304[(2)] = inst_44261);

(statearr_44287_44304[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (10))){
var inst_44269 = (state_44276[(2)]);
var state_44276__$1 = (function (){var statearr_44288 = state_44276;
(statearr_44288[(8)] = inst_44269);

return statearr_44288;
})();
var statearr_44289_44305 = state_44276__$1;
(statearr_44289_44305[(2)] = null);

(statearr_44289_44305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44277 === (8))){
var inst_44258 = (state_44276[(7)]);
var state_44276__$1 = state_44276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44276__$1,(11),out,inst_44258);
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
});})(c__40884__auto___44295,out))
;
return ((function (switch__40693__auto__,c__40884__auto___44295,out){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_44290 = [null,null,null,null,null,null,null,null,null];
(statearr_44290[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_44290[(1)] = (1));

return statearr_44290;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_44276){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44276);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44291){if((e44291 instanceof Object)){
var ex__40697__auto__ = e44291;
var statearr_44292_44306 = state_44276;
(statearr_44292_44306[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44276);

return cljs.core.cst$kw$recur;
} else {
throw e44291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44307 = state_44276;
state_44276 = G__44307;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_44276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_44276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___44295,out))
})();
var state__40886__auto__ = (function (){var statearr_44293 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44293[(6)] = c__40884__auto___44295);

return statearr_44293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___44295,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44309 = arguments.length;
switch (G__44309) {
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
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__){
return (function (state_44372){
var state_val_44373 = (state_44372[(1)]);
if((state_val_44373 === (7))){
var inst_44368 = (state_44372[(2)]);
var state_44372__$1 = state_44372;
var statearr_44374_44412 = state_44372__$1;
(statearr_44374_44412[(2)] = inst_44368);

(statearr_44374_44412[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (20))){
var inst_44338 = (state_44372[(7)]);
var inst_44349 = (state_44372[(2)]);
var inst_44350 = cljs.core.next(inst_44338);
var inst_44324 = inst_44350;
var inst_44325 = null;
var inst_44326 = (0);
var inst_44327 = (0);
var state_44372__$1 = (function (){var statearr_44375 = state_44372;
(statearr_44375[(8)] = inst_44325);

(statearr_44375[(9)] = inst_44326);

(statearr_44375[(10)] = inst_44327);

(statearr_44375[(11)] = inst_44349);

(statearr_44375[(12)] = inst_44324);

return statearr_44375;
})();
var statearr_44376_44413 = state_44372__$1;
(statearr_44376_44413[(2)] = null);

(statearr_44376_44413[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (1))){
var state_44372__$1 = state_44372;
var statearr_44377_44414 = state_44372__$1;
(statearr_44377_44414[(2)] = null);

(statearr_44377_44414[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (4))){
var inst_44313 = (state_44372[(13)]);
var inst_44313__$1 = (state_44372[(2)]);
var inst_44314 = (inst_44313__$1 == null);
var state_44372__$1 = (function (){var statearr_44378 = state_44372;
(statearr_44378[(13)] = inst_44313__$1);

return statearr_44378;
})();
if(cljs.core.truth_(inst_44314)){
var statearr_44379_44415 = state_44372__$1;
(statearr_44379_44415[(1)] = (5));

} else {
var statearr_44380_44416 = state_44372__$1;
(statearr_44380_44416[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (15))){
var state_44372__$1 = state_44372;
var statearr_44384_44417 = state_44372__$1;
(statearr_44384_44417[(2)] = null);

(statearr_44384_44417[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (21))){
var state_44372__$1 = state_44372;
var statearr_44385_44418 = state_44372__$1;
(statearr_44385_44418[(2)] = null);

(statearr_44385_44418[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (13))){
var inst_44325 = (state_44372[(8)]);
var inst_44326 = (state_44372[(9)]);
var inst_44327 = (state_44372[(10)]);
var inst_44324 = (state_44372[(12)]);
var inst_44334 = (state_44372[(2)]);
var inst_44335 = (inst_44327 + (1));
var tmp44381 = inst_44325;
var tmp44382 = inst_44326;
var tmp44383 = inst_44324;
var inst_44324__$1 = tmp44383;
var inst_44325__$1 = tmp44381;
var inst_44326__$1 = tmp44382;
var inst_44327__$1 = inst_44335;
var state_44372__$1 = (function (){var statearr_44386 = state_44372;
(statearr_44386[(14)] = inst_44334);

(statearr_44386[(8)] = inst_44325__$1);

(statearr_44386[(9)] = inst_44326__$1);

(statearr_44386[(10)] = inst_44327__$1);

(statearr_44386[(12)] = inst_44324__$1);

return statearr_44386;
})();
var statearr_44387_44419 = state_44372__$1;
(statearr_44387_44419[(2)] = null);

(statearr_44387_44419[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (22))){
var state_44372__$1 = state_44372;
var statearr_44388_44420 = state_44372__$1;
(statearr_44388_44420[(2)] = null);

(statearr_44388_44420[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (6))){
var inst_44313 = (state_44372[(13)]);
var inst_44322 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44313) : f.call(null,inst_44313));
var inst_44323 = cljs.core.seq(inst_44322);
var inst_44324 = inst_44323;
var inst_44325 = null;
var inst_44326 = (0);
var inst_44327 = (0);
var state_44372__$1 = (function (){var statearr_44389 = state_44372;
(statearr_44389[(8)] = inst_44325);

(statearr_44389[(9)] = inst_44326);

(statearr_44389[(10)] = inst_44327);

(statearr_44389[(12)] = inst_44324);

return statearr_44389;
})();
var statearr_44390_44421 = state_44372__$1;
(statearr_44390_44421[(2)] = null);

(statearr_44390_44421[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (17))){
var inst_44338 = (state_44372[(7)]);
var inst_44342 = cljs.core.chunk_first(inst_44338);
var inst_44343 = cljs.core.chunk_rest(inst_44338);
var inst_44344 = cljs.core.count(inst_44342);
var inst_44324 = inst_44343;
var inst_44325 = inst_44342;
var inst_44326 = inst_44344;
var inst_44327 = (0);
var state_44372__$1 = (function (){var statearr_44391 = state_44372;
(statearr_44391[(8)] = inst_44325);

(statearr_44391[(9)] = inst_44326);

(statearr_44391[(10)] = inst_44327);

(statearr_44391[(12)] = inst_44324);

return statearr_44391;
})();
var statearr_44392_44422 = state_44372__$1;
(statearr_44392_44422[(2)] = null);

(statearr_44392_44422[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (3))){
var inst_44370 = (state_44372[(2)]);
var state_44372__$1 = state_44372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44372__$1,inst_44370);
} else {
if((state_val_44373 === (12))){
var inst_44358 = (state_44372[(2)]);
var state_44372__$1 = state_44372;
var statearr_44393_44423 = state_44372__$1;
(statearr_44393_44423[(2)] = inst_44358);

(statearr_44393_44423[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (2))){
var state_44372__$1 = state_44372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44372__$1,(4),in$);
} else {
if((state_val_44373 === (23))){
var inst_44366 = (state_44372[(2)]);
var state_44372__$1 = state_44372;
var statearr_44394_44424 = state_44372__$1;
(statearr_44394_44424[(2)] = inst_44366);

(statearr_44394_44424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (19))){
var inst_44353 = (state_44372[(2)]);
var state_44372__$1 = state_44372;
var statearr_44395_44425 = state_44372__$1;
(statearr_44395_44425[(2)] = inst_44353);

(statearr_44395_44425[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (11))){
var inst_44338 = (state_44372[(7)]);
var inst_44324 = (state_44372[(12)]);
var inst_44338__$1 = cljs.core.seq(inst_44324);
var state_44372__$1 = (function (){var statearr_44396 = state_44372;
(statearr_44396[(7)] = inst_44338__$1);

return statearr_44396;
})();
if(inst_44338__$1){
var statearr_44397_44426 = state_44372__$1;
(statearr_44397_44426[(1)] = (14));

} else {
var statearr_44398_44427 = state_44372__$1;
(statearr_44398_44427[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (9))){
var inst_44360 = (state_44372[(2)]);
var inst_44361 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44372__$1 = (function (){var statearr_44399 = state_44372;
(statearr_44399[(15)] = inst_44360);

return statearr_44399;
})();
if(cljs.core.truth_(inst_44361)){
var statearr_44400_44428 = state_44372__$1;
(statearr_44400_44428[(1)] = (21));

} else {
var statearr_44401_44429 = state_44372__$1;
(statearr_44401_44429[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (5))){
var inst_44316 = cljs.core.async.close_BANG_(out);
var state_44372__$1 = state_44372;
var statearr_44402_44430 = state_44372__$1;
(statearr_44402_44430[(2)] = inst_44316);

(statearr_44402_44430[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (14))){
var inst_44338 = (state_44372[(7)]);
var inst_44340 = cljs.core.chunked_seq_QMARK_(inst_44338);
var state_44372__$1 = state_44372;
if(inst_44340){
var statearr_44403_44431 = state_44372__$1;
(statearr_44403_44431[(1)] = (17));

} else {
var statearr_44404_44432 = state_44372__$1;
(statearr_44404_44432[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (16))){
var inst_44356 = (state_44372[(2)]);
var state_44372__$1 = state_44372;
var statearr_44405_44433 = state_44372__$1;
(statearr_44405_44433[(2)] = inst_44356);

(statearr_44405_44433[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44373 === (10))){
var inst_44325 = (state_44372[(8)]);
var inst_44327 = (state_44372[(10)]);
var inst_44332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44325,inst_44327);
var state_44372__$1 = state_44372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44372__$1,(13),out,inst_44332);
} else {
if((state_val_44373 === (18))){
var inst_44338 = (state_44372[(7)]);
var inst_44347 = cljs.core.first(inst_44338);
var state_44372__$1 = state_44372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44372__$1,(20),out,inst_44347);
} else {
if((state_val_44373 === (8))){
var inst_44326 = (state_44372[(9)]);
var inst_44327 = (state_44372[(10)]);
var inst_44329 = (inst_44327 < inst_44326);
var inst_44330 = inst_44329;
var state_44372__$1 = state_44372;
if(cljs.core.truth_(inst_44330)){
var statearr_44406_44434 = state_44372__$1;
(statearr_44406_44434[(1)] = (10));

} else {
var statearr_44407_44435 = state_44372__$1;
(statearr_44407_44435[(1)] = (11));

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
});})(c__40884__auto__))
;
return ((function (switch__40693__auto__,c__40884__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40694__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40694__auto____0 = (function (){
var statearr_44408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44408[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40694__auto__);

(statearr_44408[(1)] = (1));

return statearr_44408;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40694__auto____1 = (function (state_44372){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44372);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44409){if((e44409 instanceof Object)){
var ex__40697__auto__ = e44409;
var statearr_44410_44436 = state_44372;
(statearr_44410_44436[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44372);

return cljs.core.cst$kw$recur;
} else {
throw e44409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44437 = state_44372;
state_44372 = G__44437;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40694__auto__ = function(state_44372){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40694__auto____1.call(this,state_44372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40694__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40694__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__))
})();
var state__40886__auto__ = (function (){var statearr_44411 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44411[(6)] = c__40884__auto__);

return statearr_44411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__))
);

return c__40884__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44439 = arguments.length;
switch (G__44439) {
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
var G__44442 = arguments.length;
switch (G__44442) {
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
var G__44445 = arguments.length;
switch (G__44445) {
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
var c__40884__auto___44492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___44492,out){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___44492,out){
return (function (state_44469){
var state_val_44470 = (state_44469[(1)]);
if((state_val_44470 === (7))){
var inst_44464 = (state_44469[(2)]);
var state_44469__$1 = state_44469;
var statearr_44471_44493 = state_44469__$1;
(statearr_44471_44493[(2)] = inst_44464);

(statearr_44471_44493[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44470 === (1))){
var inst_44446 = null;
var state_44469__$1 = (function (){var statearr_44472 = state_44469;
(statearr_44472[(7)] = inst_44446);

return statearr_44472;
})();
var statearr_44473_44494 = state_44469__$1;
(statearr_44473_44494[(2)] = null);

(statearr_44473_44494[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44470 === (4))){
var inst_44449 = (state_44469[(8)]);
var inst_44449__$1 = (state_44469[(2)]);
var inst_44450 = (inst_44449__$1 == null);
var inst_44451 = cljs.core.not(inst_44450);
var state_44469__$1 = (function (){var statearr_44474 = state_44469;
(statearr_44474[(8)] = inst_44449__$1);

return statearr_44474;
})();
if(inst_44451){
var statearr_44475_44495 = state_44469__$1;
(statearr_44475_44495[(1)] = (5));

} else {
var statearr_44476_44496 = state_44469__$1;
(statearr_44476_44496[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44470 === (6))){
var state_44469__$1 = state_44469;
var statearr_44477_44497 = state_44469__$1;
(statearr_44477_44497[(2)] = null);

(statearr_44477_44497[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44470 === (3))){
var inst_44466 = (state_44469[(2)]);
var inst_44467 = cljs.core.async.close_BANG_(out);
var state_44469__$1 = (function (){var statearr_44478 = state_44469;
(statearr_44478[(9)] = inst_44466);

return statearr_44478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44469__$1,inst_44467);
} else {
if((state_val_44470 === (2))){
var state_44469__$1 = state_44469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44469__$1,(4),ch);
} else {
if((state_val_44470 === (11))){
var inst_44449 = (state_44469[(8)]);
var inst_44458 = (state_44469[(2)]);
var inst_44446 = inst_44449;
var state_44469__$1 = (function (){var statearr_44479 = state_44469;
(statearr_44479[(10)] = inst_44458);

(statearr_44479[(7)] = inst_44446);

return statearr_44479;
})();
var statearr_44480_44498 = state_44469__$1;
(statearr_44480_44498[(2)] = null);

(statearr_44480_44498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44470 === (9))){
var inst_44449 = (state_44469[(8)]);
var state_44469__$1 = state_44469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44469__$1,(11),out,inst_44449);
} else {
if((state_val_44470 === (5))){
var inst_44449 = (state_44469[(8)]);
var inst_44446 = (state_44469[(7)]);
var inst_44453 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44449,inst_44446);
var state_44469__$1 = state_44469;
if(inst_44453){
var statearr_44482_44499 = state_44469__$1;
(statearr_44482_44499[(1)] = (8));

} else {
var statearr_44483_44500 = state_44469__$1;
(statearr_44483_44500[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44470 === (10))){
var inst_44461 = (state_44469[(2)]);
var state_44469__$1 = state_44469;
var statearr_44484_44501 = state_44469__$1;
(statearr_44484_44501[(2)] = inst_44461);

(statearr_44484_44501[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44470 === (8))){
var inst_44446 = (state_44469[(7)]);
var tmp44481 = inst_44446;
var inst_44446__$1 = tmp44481;
var state_44469__$1 = (function (){var statearr_44485 = state_44469;
(statearr_44485[(7)] = inst_44446__$1);

return statearr_44485;
})();
var statearr_44486_44502 = state_44469__$1;
(statearr_44486_44502[(2)] = null);

(statearr_44486_44502[(1)] = (2));


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
});})(c__40884__auto___44492,out))
;
return ((function (switch__40693__auto__,c__40884__auto___44492,out){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_44487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44487[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_44487[(1)] = (1));

return statearr_44487;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_44469){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44469);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44488){if((e44488 instanceof Object)){
var ex__40697__auto__ = e44488;
var statearr_44489_44503 = state_44469;
(statearr_44489_44503[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44469);

return cljs.core.cst$kw$recur;
} else {
throw e44488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44504 = state_44469;
state_44469 = G__44504;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_44469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_44469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___44492,out))
})();
var state__40886__auto__ = (function (){var statearr_44490 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44490[(6)] = c__40884__auto___44492);

return statearr_44490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___44492,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44506 = arguments.length;
switch (G__44506) {
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
var c__40884__auto___44572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___44572,out){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___44572,out){
return (function (state_44544){
var state_val_44545 = (state_44544[(1)]);
if((state_val_44545 === (7))){
var inst_44540 = (state_44544[(2)]);
var state_44544__$1 = state_44544;
var statearr_44546_44573 = state_44544__$1;
(statearr_44546_44573[(2)] = inst_44540);

(statearr_44546_44573[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (1))){
var inst_44507 = (new Array(n));
var inst_44508 = inst_44507;
var inst_44509 = (0);
var state_44544__$1 = (function (){var statearr_44547 = state_44544;
(statearr_44547[(7)] = inst_44509);

(statearr_44547[(8)] = inst_44508);

return statearr_44547;
})();
var statearr_44548_44574 = state_44544__$1;
(statearr_44548_44574[(2)] = null);

(statearr_44548_44574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (4))){
var inst_44512 = (state_44544[(9)]);
var inst_44512__$1 = (state_44544[(2)]);
var inst_44513 = (inst_44512__$1 == null);
var inst_44514 = cljs.core.not(inst_44513);
var state_44544__$1 = (function (){var statearr_44549 = state_44544;
(statearr_44549[(9)] = inst_44512__$1);

return statearr_44549;
})();
if(inst_44514){
var statearr_44550_44575 = state_44544__$1;
(statearr_44550_44575[(1)] = (5));

} else {
var statearr_44551_44576 = state_44544__$1;
(statearr_44551_44576[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (15))){
var inst_44534 = (state_44544[(2)]);
var state_44544__$1 = state_44544;
var statearr_44552_44577 = state_44544__$1;
(statearr_44552_44577[(2)] = inst_44534);

(statearr_44552_44577[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (13))){
var state_44544__$1 = state_44544;
var statearr_44553_44578 = state_44544__$1;
(statearr_44553_44578[(2)] = null);

(statearr_44553_44578[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (6))){
var inst_44509 = (state_44544[(7)]);
var inst_44530 = (inst_44509 > (0));
var state_44544__$1 = state_44544;
if(cljs.core.truth_(inst_44530)){
var statearr_44554_44579 = state_44544__$1;
(statearr_44554_44579[(1)] = (12));

} else {
var statearr_44555_44580 = state_44544__$1;
(statearr_44555_44580[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (3))){
var inst_44542 = (state_44544[(2)]);
var state_44544__$1 = state_44544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44544__$1,inst_44542);
} else {
if((state_val_44545 === (12))){
var inst_44508 = (state_44544[(8)]);
var inst_44532 = cljs.core.vec(inst_44508);
var state_44544__$1 = state_44544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44544__$1,(15),out,inst_44532);
} else {
if((state_val_44545 === (2))){
var state_44544__$1 = state_44544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44544__$1,(4),ch);
} else {
if((state_val_44545 === (11))){
var inst_44524 = (state_44544[(2)]);
var inst_44525 = (new Array(n));
var inst_44508 = inst_44525;
var inst_44509 = (0);
var state_44544__$1 = (function (){var statearr_44556 = state_44544;
(statearr_44556[(7)] = inst_44509);

(statearr_44556[(10)] = inst_44524);

(statearr_44556[(8)] = inst_44508);

return statearr_44556;
})();
var statearr_44557_44581 = state_44544__$1;
(statearr_44557_44581[(2)] = null);

(statearr_44557_44581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (9))){
var inst_44508 = (state_44544[(8)]);
var inst_44522 = cljs.core.vec(inst_44508);
var state_44544__$1 = state_44544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44544__$1,(11),out,inst_44522);
} else {
if((state_val_44545 === (5))){
var inst_44509 = (state_44544[(7)]);
var inst_44517 = (state_44544[(11)]);
var inst_44508 = (state_44544[(8)]);
var inst_44512 = (state_44544[(9)]);
var inst_44516 = (inst_44508[inst_44509] = inst_44512);
var inst_44517__$1 = (inst_44509 + (1));
var inst_44518 = (inst_44517__$1 < n);
var state_44544__$1 = (function (){var statearr_44558 = state_44544;
(statearr_44558[(11)] = inst_44517__$1);

(statearr_44558[(12)] = inst_44516);

return statearr_44558;
})();
if(cljs.core.truth_(inst_44518)){
var statearr_44559_44582 = state_44544__$1;
(statearr_44559_44582[(1)] = (8));

} else {
var statearr_44560_44583 = state_44544__$1;
(statearr_44560_44583[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (14))){
var inst_44537 = (state_44544[(2)]);
var inst_44538 = cljs.core.async.close_BANG_(out);
var state_44544__$1 = (function (){var statearr_44562 = state_44544;
(statearr_44562[(13)] = inst_44537);

return statearr_44562;
})();
var statearr_44563_44584 = state_44544__$1;
(statearr_44563_44584[(2)] = inst_44538);

(statearr_44563_44584[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (10))){
var inst_44528 = (state_44544[(2)]);
var state_44544__$1 = state_44544;
var statearr_44564_44585 = state_44544__$1;
(statearr_44564_44585[(2)] = inst_44528);

(statearr_44564_44585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44545 === (8))){
var inst_44517 = (state_44544[(11)]);
var inst_44508 = (state_44544[(8)]);
var tmp44561 = inst_44508;
var inst_44508__$1 = tmp44561;
var inst_44509 = inst_44517;
var state_44544__$1 = (function (){var statearr_44565 = state_44544;
(statearr_44565[(7)] = inst_44509);

(statearr_44565[(8)] = inst_44508__$1);

return statearr_44565;
})();
var statearr_44566_44586 = state_44544__$1;
(statearr_44566_44586[(2)] = null);

(statearr_44566_44586[(1)] = (2));


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
});})(c__40884__auto___44572,out))
;
return ((function (switch__40693__auto__,c__40884__auto___44572,out){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_44567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44567[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_44567[(1)] = (1));

return statearr_44567;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_44544){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44544);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44568){if((e44568 instanceof Object)){
var ex__40697__auto__ = e44568;
var statearr_44569_44587 = state_44544;
(statearr_44569_44587[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44544);

return cljs.core.cst$kw$recur;
} else {
throw e44568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44588 = state_44544;
state_44544 = G__44588;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_44544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_44544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___44572,out))
})();
var state__40886__auto__ = (function (){var statearr_44570 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44570[(6)] = c__40884__auto___44572);

return statearr_44570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___44572,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44590 = arguments.length;
switch (G__44590) {
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
var c__40884__auto___44660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___44660,out){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___44660,out){
return (function (state_44632){
var state_val_44633 = (state_44632[(1)]);
if((state_val_44633 === (7))){
var inst_44628 = (state_44632[(2)]);
var state_44632__$1 = state_44632;
var statearr_44634_44661 = state_44632__$1;
(statearr_44634_44661[(2)] = inst_44628);

(statearr_44634_44661[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (1))){
var inst_44591 = [];
var inst_44592 = inst_44591;
var inst_44593 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_44632__$1 = (function (){var statearr_44635 = state_44632;
(statearr_44635[(7)] = inst_44592);

(statearr_44635[(8)] = inst_44593);

return statearr_44635;
})();
var statearr_44636_44662 = state_44632__$1;
(statearr_44636_44662[(2)] = null);

(statearr_44636_44662[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (4))){
var inst_44596 = (state_44632[(9)]);
var inst_44596__$1 = (state_44632[(2)]);
var inst_44597 = (inst_44596__$1 == null);
var inst_44598 = cljs.core.not(inst_44597);
var state_44632__$1 = (function (){var statearr_44637 = state_44632;
(statearr_44637[(9)] = inst_44596__$1);

return statearr_44637;
})();
if(inst_44598){
var statearr_44638_44663 = state_44632__$1;
(statearr_44638_44663[(1)] = (5));

} else {
var statearr_44639_44664 = state_44632__$1;
(statearr_44639_44664[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (15))){
var inst_44622 = (state_44632[(2)]);
var state_44632__$1 = state_44632;
var statearr_44640_44665 = state_44632__$1;
(statearr_44640_44665[(2)] = inst_44622);

(statearr_44640_44665[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (13))){
var state_44632__$1 = state_44632;
var statearr_44641_44666 = state_44632__$1;
(statearr_44641_44666[(2)] = null);

(statearr_44641_44666[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (6))){
var inst_44592 = (state_44632[(7)]);
var inst_44617 = inst_44592.length;
var inst_44618 = (inst_44617 > (0));
var state_44632__$1 = state_44632;
if(cljs.core.truth_(inst_44618)){
var statearr_44642_44667 = state_44632__$1;
(statearr_44642_44667[(1)] = (12));

} else {
var statearr_44643_44668 = state_44632__$1;
(statearr_44643_44668[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (3))){
var inst_44630 = (state_44632[(2)]);
var state_44632__$1 = state_44632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44632__$1,inst_44630);
} else {
if((state_val_44633 === (12))){
var inst_44592 = (state_44632[(7)]);
var inst_44620 = cljs.core.vec(inst_44592);
var state_44632__$1 = state_44632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44632__$1,(15),out,inst_44620);
} else {
if((state_val_44633 === (2))){
var state_44632__$1 = state_44632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44632__$1,(4),ch);
} else {
if((state_val_44633 === (11))){
var inst_44600 = (state_44632[(10)]);
var inst_44596 = (state_44632[(9)]);
var inst_44610 = (state_44632[(2)]);
var inst_44611 = [];
var inst_44612 = inst_44611.push(inst_44596);
var inst_44592 = inst_44611;
var inst_44593 = inst_44600;
var state_44632__$1 = (function (){var statearr_44644 = state_44632;
(statearr_44644[(11)] = inst_44610);

(statearr_44644[(12)] = inst_44612);

(statearr_44644[(7)] = inst_44592);

(statearr_44644[(8)] = inst_44593);

return statearr_44644;
})();
var statearr_44645_44669 = state_44632__$1;
(statearr_44645_44669[(2)] = null);

(statearr_44645_44669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (9))){
var inst_44592 = (state_44632[(7)]);
var inst_44608 = cljs.core.vec(inst_44592);
var state_44632__$1 = state_44632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44632__$1,(11),out,inst_44608);
} else {
if((state_val_44633 === (5))){
var inst_44600 = (state_44632[(10)]);
var inst_44596 = (state_44632[(9)]);
var inst_44593 = (state_44632[(8)]);
var inst_44600__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44596) : f.call(null,inst_44596));
var inst_44601 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44600__$1,inst_44593);
var inst_44602 = cljs.core.keyword_identical_QMARK_(inst_44593,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_44603 = ((inst_44601) || (inst_44602));
var state_44632__$1 = (function (){var statearr_44646 = state_44632;
(statearr_44646[(10)] = inst_44600__$1);

return statearr_44646;
})();
if(cljs.core.truth_(inst_44603)){
var statearr_44647_44670 = state_44632__$1;
(statearr_44647_44670[(1)] = (8));

} else {
var statearr_44648_44671 = state_44632__$1;
(statearr_44648_44671[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (14))){
var inst_44625 = (state_44632[(2)]);
var inst_44626 = cljs.core.async.close_BANG_(out);
var state_44632__$1 = (function (){var statearr_44650 = state_44632;
(statearr_44650[(13)] = inst_44625);

return statearr_44650;
})();
var statearr_44651_44672 = state_44632__$1;
(statearr_44651_44672[(2)] = inst_44626);

(statearr_44651_44672[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (10))){
var inst_44615 = (state_44632[(2)]);
var state_44632__$1 = state_44632;
var statearr_44652_44673 = state_44632__$1;
(statearr_44652_44673[(2)] = inst_44615);

(statearr_44652_44673[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44633 === (8))){
var inst_44600 = (state_44632[(10)]);
var inst_44592 = (state_44632[(7)]);
var inst_44596 = (state_44632[(9)]);
var inst_44605 = inst_44592.push(inst_44596);
var tmp44649 = inst_44592;
var inst_44592__$1 = tmp44649;
var inst_44593 = inst_44600;
var state_44632__$1 = (function (){var statearr_44653 = state_44632;
(statearr_44653[(14)] = inst_44605);

(statearr_44653[(7)] = inst_44592__$1);

(statearr_44653[(8)] = inst_44593);

return statearr_44653;
})();
var statearr_44654_44674 = state_44632__$1;
(statearr_44654_44674[(2)] = null);

(statearr_44654_44674[(1)] = (2));


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
});})(c__40884__auto___44660,out))
;
return ((function (switch__40693__auto__,c__40884__auto___44660,out){
return (function() {
var cljs$core$async$state_machine__40694__auto__ = null;
var cljs$core$async$state_machine__40694__auto____0 = (function (){
var statearr_44655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44655[(0)] = cljs$core$async$state_machine__40694__auto__);

(statearr_44655[(1)] = (1));

return statearr_44655;
});
var cljs$core$async$state_machine__40694__auto____1 = (function (state_44632){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_44632);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e44656){if((e44656 instanceof Object)){
var ex__40697__auto__ = e44656;
var statearr_44657_44675 = state_44632;
(statearr_44657_44675[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44632);

return cljs.core.cst$kw$recur;
} else {
throw e44656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__44676 = state_44632;
state_44632 = G__44676;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
cljs$core$async$state_machine__40694__auto__ = function(state_44632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40694__auto____1.call(this,state_44632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40694__auto____0;
cljs$core$async$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40694__auto____1;
return cljs$core$async$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___44660,out))
})();
var state__40886__auto__ = (function (){var statearr_44658 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_44658[(6)] = c__40884__auto___44660);

return statearr_44658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___44660,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

