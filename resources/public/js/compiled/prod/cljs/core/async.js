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
var G__38947 = arguments.length;
switch (G__38947) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38948 = (function (f,blockable,meta38949){
this.f = f;
this.blockable = blockable;
this.meta38949 = meta38949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38950,meta38949__$1){
var self__ = this;
var _38950__$1 = this;
return (new cljs.core.async.t_cljs$core$async38948(self__.f,self__.blockable,meta38949__$1));
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38950){
var self__ = this;
var _38950__$1 = this;
return self__.meta38949;
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta38949], null);
});

cljs.core.async.t_cljs$core$async38948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38948";

cljs.core.async.t_cljs$core$async38948.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38948");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38948.
 */
cljs.core.async.__GT_t_cljs$core$async38948 = (function cljs$core$async$__GT_t_cljs$core$async38948(f__$1,blockable__$1,meta38949){
return (new cljs.core.async.t_cljs$core$async38948(f__$1,blockable__$1,meta38949));
});

}

return (new cljs.core.async.t_cljs$core$async38948(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38954 = arguments.length;
switch (G__38954) {
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
var G__38957 = arguments.length;
switch (G__38957) {
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
var G__38960 = arguments.length;
switch (G__38960) {
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
var val_38962 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38962) : fn1.call(null,val_38962));
} else {
cljs.core.async.impl.dispatch.run(((function (val_38962,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38962) : fn1.call(null,val_38962));
});})(val_38962,ret))
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
var G__38964 = arguments.length;
switch (G__38964) {
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
var n__4607__auto___38966 = n;
var x_38967 = (0);
while(true){
if((x_38967 < n__4607__auto___38966)){
(a[x_38967] = (0));

var G__38968 = (x_38967 + (1));
x_38967 = G__38968;
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

var G__38969 = (i + (1));
i = G__38969;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38970 = (function (flag,meta38971){
this.flag = flag;
this.meta38971 = meta38971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38972,meta38971__$1){
var self__ = this;
var _38972__$1 = this;
return (new cljs.core.async.t_cljs$core$async38970(self__.flag,meta38971__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38972){
var self__ = this;
var _38972__$1 = this;
return self__.meta38971;
});})(flag))
;

cljs.core.async.t_cljs$core$async38970.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38970.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta38971], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38970";

cljs.core.async.t_cljs$core$async38970.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38970");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38970.
 */
cljs.core.async.__GT_t_cljs$core$async38970 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38970(flag__$1,meta38971){
return (new cljs.core.async.t_cljs$core$async38970(flag__$1,meta38971));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38970(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38973 = (function (flag,cb,meta38974){
this.flag = flag;
this.cb = cb;
this.meta38974 = meta38974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38975,meta38974__$1){
var self__ = this;
var _38975__$1 = this;
return (new cljs.core.async.t_cljs$core$async38973(self__.flag,self__.cb,meta38974__$1));
});

cljs.core.async.t_cljs$core$async38973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38975){
var self__ = this;
var _38975__$1 = this;
return self__.meta38974;
});

cljs.core.async.t_cljs$core$async38973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async38973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta38974], null);
});

cljs.core.async.t_cljs$core$async38973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38973";

cljs.core.async.t_cljs$core$async38973.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38973");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38973.
 */
cljs.core.async.__GT_t_cljs$core$async38973 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38973(flag__$1,cb__$1,meta38974){
return (new cljs.core.async.t_cljs$core$async38973(flag__$1,cb__$1,meta38974));
});

}

return (new cljs.core.async.t_cljs$core$async38973(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38976_SHARP_){
var G__38978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38976_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38978) : fret.call(null,G__38978));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38977_SHARP_){
var G__38979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38977_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38979) : fret.call(null,G__38979));
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
var G__38980 = (i + (1));
i = G__38980;
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
var len__4730__auto___38986 = arguments.length;
var i__4731__auto___38987 = (0);
while(true){
if((i__4731__auto___38987 < len__4730__auto___38986)){
args__4736__auto__.push((arguments[i__4731__auto___38987]));

var G__38988 = (i__4731__auto___38987 + (1));
i__4731__auto___38987 = G__38988;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38983){
var map__38984 = p__38983;
var map__38984__$1 = (((((!((map__38984 == null))))?(((((map__38984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38984):map__38984);
var opts = map__38984__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38981){
var G__38982 = cljs.core.first(seq38981);
var seq38981__$1 = cljs.core.next(seq38981);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38982,seq38981__$1);
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
var G__38990 = arguments.length;
switch (G__38990) {
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
var c__38887__auto___39036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___39036){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___39036){
return (function (state_39014){
var state_val_39015 = (state_39014[(1)]);
if((state_val_39015 === (7))){
var inst_39010 = (state_39014[(2)]);
var state_39014__$1 = state_39014;
var statearr_39016_39037 = state_39014__$1;
(statearr_39016_39037[(2)] = inst_39010);

(statearr_39016_39037[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (1))){
var state_39014__$1 = state_39014;
var statearr_39017_39038 = state_39014__$1;
(statearr_39017_39038[(2)] = null);

(statearr_39017_39038[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (4))){
var inst_38993 = (state_39014[(7)]);
var inst_38993__$1 = (state_39014[(2)]);
var inst_38994 = (inst_38993__$1 == null);
var state_39014__$1 = (function (){var statearr_39018 = state_39014;
(statearr_39018[(7)] = inst_38993__$1);

return statearr_39018;
})();
if(cljs.core.truth_(inst_38994)){
var statearr_39019_39039 = state_39014__$1;
(statearr_39019_39039[(1)] = (5));

} else {
var statearr_39020_39040 = state_39014__$1;
(statearr_39020_39040[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (13))){
var state_39014__$1 = state_39014;
var statearr_39021_39041 = state_39014__$1;
(statearr_39021_39041[(2)] = null);

(statearr_39021_39041[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (6))){
var inst_38993 = (state_39014[(7)]);
var state_39014__$1 = state_39014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39014__$1,(11),to,inst_38993);
} else {
if((state_val_39015 === (3))){
var inst_39012 = (state_39014[(2)]);
var state_39014__$1 = state_39014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39014__$1,inst_39012);
} else {
if((state_val_39015 === (12))){
var state_39014__$1 = state_39014;
var statearr_39022_39042 = state_39014__$1;
(statearr_39022_39042[(2)] = null);

(statearr_39022_39042[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (2))){
var state_39014__$1 = state_39014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39014__$1,(4),from);
} else {
if((state_val_39015 === (11))){
var inst_39003 = (state_39014[(2)]);
var state_39014__$1 = state_39014;
if(cljs.core.truth_(inst_39003)){
var statearr_39023_39043 = state_39014__$1;
(statearr_39023_39043[(1)] = (12));

} else {
var statearr_39024_39044 = state_39014__$1;
(statearr_39024_39044[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (9))){
var state_39014__$1 = state_39014;
var statearr_39025_39045 = state_39014__$1;
(statearr_39025_39045[(2)] = null);

(statearr_39025_39045[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (5))){
var state_39014__$1 = state_39014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39026_39046 = state_39014__$1;
(statearr_39026_39046[(1)] = (8));

} else {
var statearr_39027_39047 = state_39014__$1;
(statearr_39027_39047[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (14))){
var inst_39008 = (state_39014[(2)]);
var state_39014__$1 = state_39014;
var statearr_39028_39048 = state_39014__$1;
(statearr_39028_39048[(2)] = inst_39008);

(statearr_39028_39048[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (10))){
var inst_39000 = (state_39014[(2)]);
var state_39014__$1 = state_39014;
var statearr_39029_39049 = state_39014__$1;
(statearr_39029_39049[(2)] = inst_39000);

(statearr_39029_39049[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39015 === (8))){
var inst_38997 = cljs.core.async.close_BANG_(to);
var state_39014__$1 = state_39014;
var statearr_39030_39050 = state_39014__$1;
(statearr_39030_39050[(2)] = inst_38997);

(statearr_39030_39050[(1)] = (10));


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
});})(c__38887__auto___39036))
;
return ((function (switch__38780__auto__,c__38887__auto___39036){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_39031 = [null,null,null,null,null,null,null,null];
(statearr_39031[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_39031[(1)] = (1));

return statearr_39031;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_39014){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39014);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39032){if((e39032 instanceof Object)){
var ex__38784__auto__ = e39032;
var statearr_39033_39051 = state_39014;
(statearr_39033_39051[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39014);

return cljs.core.cst$kw$recur;
} else {
throw e39032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39052 = state_39014;
state_39014 = G__39052;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_39014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_39014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___39036))
})();
var state__38889__auto__ = (function (){var statearr_39034 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39034[(6)] = c__38887__auto___39036);

return statearr_39034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___39036))
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
return (function (p__39053){
var vec__39054 = p__39053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(1),null);
var job = vec__39054;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38887__auto___39225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___39225,res,vec__39054,v,p,job,jobs,results){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___39225,res,vec__39054,v,p,job,jobs,results){
return (function (state_39061){
var state_val_39062 = (state_39061[(1)]);
if((state_val_39062 === (1))){
var state_39061__$1 = state_39061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39061__$1,(2),res,v);
} else {
if((state_val_39062 === (2))){
var inst_39058 = (state_39061[(2)]);
var inst_39059 = cljs.core.async.close_BANG_(res);
var state_39061__$1 = (function (){var statearr_39063 = state_39061;
(statearr_39063[(7)] = inst_39058);

return statearr_39063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39061__$1,inst_39059);
} else {
return null;
}
}
});})(c__38887__auto___39225,res,vec__39054,v,p,job,jobs,results))
;
return ((function (switch__38780__auto__,c__38887__auto___39225,res,vec__39054,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0 = (function (){
var statearr_39064 = [null,null,null,null,null,null,null,null];
(statearr_39064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__);

(statearr_39064[(1)] = (1));

return statearr_39064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1 = (function (state_39061){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39061);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39065){if((e39065 instanceof Object)){
var ex__38784__auto__ = e39065;
var statearr_39066_39226 = state_39061;
(statearr_39066_39226[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39061);

return cljs.core.cst$kw$recur;
} else {
throw e39065;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39227 = state_39061;
state_39061 = G__39227;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = function(state_39061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1.call(this,state_39061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___39225,res,vec__39054,v,p,job,jobs,results))
})();
var state__38889__auto__ = (function (){var statearr_39067 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39067[(6)] = c__38887__auto___39225);

return statearr_39067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___39225,res,vec__39054,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39068){
var vec__39069 = p__39068;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39069,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39069,(1),null);
var job = vec__39069;
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
var n__4607__auto___39228 = n;
var __39229 = (0);
while(true){
if((__39229 < n__4607__auto___39228)){
var G__39072_39230 = type;
var G__39072_39231__$1 = (((G__39072_39230 instanceof cljs.core.Keyword))?G__39072_39230.fqn:null);
switch (G__39072_39231__$1) {
case "compute":
var c__38887__auto___39233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39229,c__38887__auto___39233,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (__39229,c__38887__auto___39233,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async){
return (function (state_39085){
var state_val_39086 = (state_39085[(1)]);
if((state_val_39086 === (1))){
var state_39085__$1 = state_39085;
var statearr_39087_39234 = state_39085__$1;
(statearr_39087_39234[(2)] = null);

(statearr_39087_39234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39086 === (2))){
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39085__$1,(4),jobs);
} else {
if((state_val_39086 === (3))){
var inst_39083 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39085__$1,inst_39083);
} else {
if((state_val_39086 === (4))){
var inst_39075 = (state_39085[(2)]);
var inst_39076 = process(inst_39075);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39076)){
var statearr_39088_39235 = state_39085__$1;
(statearr_39088_39235[(1)] = (5));

} else {
var statearr_39089_39236 = state_39085__$1;
(statearr_39089_39236[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39086 === (5))){
var state_39085__$1 = state_39085;
var statearr_39090_39237 = state_39085__$1;
(statearr_39090_39237[(2)] = null);

(statearr_39090_39237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39086 === (6))){
var state_39085__$1 = state_39085;
var statearr_39091_39238 = state_39085__$1;
(statearr_39091_39238[(2)] = null);

(statearr_39091_39238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39086 === (7))){
var inst_39081 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39092_39239 = state_39085__$1;
(statearr_39092_39239[(2)] = inst_39081);

(statearr_39092_39239[(1)] = (3));


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
});})(__39229,c__38887__auto___39233,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async))
;
return ((function (__39229,switch__38780__auto__,c__38887__auto___39233,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0 = (function (){
var statearr_39093 = [null,null,null,null,null,null,null];
(statearr_39093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__);

(statearr_39093[(1)] = (1));

return statearr_39093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1 = (function (state_39085){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39085);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39094){if((e39094 instanceof Object)){
var ex__38784__auto__ = e39094;
var statearr_39095_39240 = state_39085;
(statearr_39095_39240[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39085);

return cljs.core.cst$kw$recur;
} else {
throw e39094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39241 = state_39085;
state_39085 = G__39241;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = function(state_39085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1.call(this,state_39085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__;
})()
;})(__39229,switch__38780__auto__,c__38887__auto___39233,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async))
})();
var state__38889__auto__ = (function (){var statearr_39096 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39096[(6)] = c__38887__auto___39233);

return statearr_39096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(__39229,c__38887__auto___39233,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async))
);


break;
case "async":
var c__38887__auto___39242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39229,c__38887__auto___39242,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (__39229,c__38887__auto___39242,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async){
return (function (state_39109){
var state_val_39110 = (state_39109[(1)]);
if((state_val_39110 === (1))){
var state_39109__$1 = state_39109;
var statearr_39111_39243 = state_39109__$1;
(statearr_39111_39243[(2)] = null);

(statearr_39111_39243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39110 === (2))){
var state_39109__$1 = state_39109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39109__$1,(4),jobs);
} else {
if((state_val_39110 === (3))){
var inst_39107 = (state_39109[(2)]);
var state_39109__$1 = state_39109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39109__$1,inst_39107);
} else {
if((state_val_39110 === (4))){
var inst_39099 = (state_39109[(2)]);
var inst_39100 = async(inst_39099);
var state_39109__$1 = state_39109;
if(cljs.core.truth_(inst_39100)){
var statearr_39112_39244 = state_39109__$1;
(statearr_39112_39244[(1)] = (5));

} else {
var statearr_39113_39245 = state_39109__$1;
(statearr_39113_39245[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39110 === (5))){
var state_39109__$1 = state_39109;
var statearr_39114_39246 = state_39109__$1;
(statearr_39114_39246[(2)] = null);

(statearr_39114_39246[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39110 === (6))){
var state_39109__$1 = state_39109;
var statearr_39115_39247 = state_39109__$1;
(statearr_39115_39247[(2)] = null);

(statearr_39115_39247[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39110 === (7))){
var inst_39105 = (state_39109[(2)]);
var state_39109__$1 = state_39109;
var statearr_39116_39248 = state_39109__$1;
(statearr_39116_39248[(2)] = inst_39105);

(statearr_39116_39248[(1)] = (3));


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
});})(__39229,c__38887__auto___39242,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async))
;
return ((function (__39229,switch__38780__auto__,c__38887__auto___39242,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0 = (function (){
var statearr_39117 = [null,null,null,null,null,null,null];
(statearr_39117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__);

(statearr_39117[(1)] = (1));

return statearr_39117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1 = (function (state_39109){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39109);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39118){if((e39118 instanceof Object)){
var ex__38784__auto__ = e39118;
var statearr_39119_39249 = state_39109;
(statearr_39119_39249[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39109);

return cljs.core.cst$kw$recur;
} else {
throw e39118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39250 = state_39109;
state_39109 = G__39250;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = function(state_39109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1.call(this,state_39109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__;
})()
;})(__39229,switch__38780__auto__,c__38887__auto___39242,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async))
})();
var state__38889__auto__ = (function (){var statearr_39120 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39120[(6)] = c__38887__auto___39242);

return statearr_39120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(__39229,c__38887__auto___39242,G__39072_39230,G__39072_39231__$1,n__4607__auto___39228,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39072_39231__$1)].join('')));

}

var G__39251 = (__39229 + (1));
__39229 = G__39251;
continue;
} else {
}
break;
}

var c__38887__auto___39252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___39252,jobs,results,process,async){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___39252,jobs,results,process,async){
return (function (state_39142){
var state_val_39143 = (state_39142[(1)]);
if((state_val_39143 === (7))){
var inst_39138 = (state_39142[(2)]);
var state_39142__$1 = state_39142;
var statearr_39144_39253 = state_39142__$1;
(statearr_39144_39253[(2)] = inst_39138);

(statearr_39144_39253[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39143 === (1))){
var state_39142__$1 = state_39142;
var statearr_39145_39254 = state_39142__$1;
(statearr_39145_39254[(2)] = null);

(statearr_39145_39254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39143 === (4))){
var inst_39123 = (state_39142[(7)]);
var inst_39123__$1 = (state_39142[(2)]);
var inst_39124 = (inst_39123__$1 == null);
var state_39142__$1 = (function (){var statearr_39146 = state_39142;
(statearr_39146[(7)] = inst_39123__$1);

return statearr_39146;
})();
if(cljs.core.truth_(inst_39124)){
var statearr_39147_39255 = state_39142__$1;
(statearr_39147_39255[(1)] = (5));

} else {
var statearr_39148_39256 = state_39142__$1;
(statearr_39148_39256[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39143 === (6))){
var inst_39123 = (state_39142[(7)]);
var inst_39128 = (state_39142[(8)]);
var inst_39128__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39129 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39130 = [inst_39123,inst_39128__$1];
var inst_39131 = (new cljs.core.PersistentVector(null,2,(5),inst_39129,inst_39130,null));
var state_39142__$1 = (function (){var statearr_39149 = state_39142;
(statearr_39149[(8)] = inst_39128__$1);

return statearr_39149;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39142__$1,(8),jobs,inst_39131);
} else {
if((state_val_39143 === (3))){
var inst_39140 = (state_39142[(2)]);
var state_39142__$1 = state_39142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39142__$1,inst_39140);
} else {
if((state_val_39143 === (2))){
var state_39142__$1 = state_39142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39142__$1,(4),from);
} else {
if((state_val_39143 === (9))){
var inst_39135 = (state_39142[(2)]);
var state_39142__$1 = (function (){var statearr_39150 = state_39142;
(statearr_39150[(9)] = inst_39135);

return statearr_39150;
})();
var statearr_39151_39257 = state_39142__$1;
(statearr_39151_39257[(2)] = null);

(statearr_39151_39257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39143 === (5))){
var inst_39126 = cljs.core.async.close_BANG_(jobs);
var state_39142__$1 = state_39142;
var statearr_39152_39258 = state_39142__$1;
(statearr_39152_39258[(2)] = inst_39126);

(statearr_39152_39258[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39143 === (8))){
var inst_39128 = (state_39142[(8)]);
var inst_39133 = (state_39142[(2)]);
var state_39142__$1 = (function (){var statearr_39153 = state_39142;
(statearr_39153[(10)] = inst_39133);

return statearr_39153;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39142__$1,(9),results,inst_39128);
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
});})(c__38887__auto___39252,jobs,results,process,async))
;
return ((function (switch__38780__auto__,c__38887__auto___39252,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0 = (function (){
var statearr_39154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__);

(statearr_39154[(1)] = (1));

return statearr_39154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1 = (function (state_39142){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39142);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39155){if((e39155 instanceof Object)){
var ex__38784__auto__ = e39155;
var statearr_39156_39259 = state_39142;
(statearr_39156_39259[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39142);

return cljs.core.cst$kw$recur;
} else {
throw e39155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39260 = state_39142;
state_39142 = G__39260;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = function(state_39142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1.call(this,state_39142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___39252,jobs,results,process,async))
})();
var state__38889__auto__ = (function (){var statearr_39157 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39157[(6)] = c__38887__auto___39252);

return statearr_39157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___39252,jobs,results,process,async))
);


var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__,jobs,results,process,async){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__,jobs,results,process,async){
return (function (state_39195){
var state_val_39196 = (state_39195[(1)]);
if((state_val_39196 === (7))){
var inst_39191 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39197_39261 = state_39195__$1;
(statearr_39197_39261[(2)] = inst_39191);

(statearr_39197_39261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (20))){
var state_39195__$1 = state_39195;
var statearr_39198_39262 = state_39195__$1;
(statearr_39198_39262[(2)] = null);

(statearr_39198_39262[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (1))){
var state_39195__$1 = state_39195;
var statearr_39199_39263 = state_39195__$1;
(statearr_39199_39263[(2)] = null);

(statearr_39199_39263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (4))){
var inst_39160 = (state_39195[(7)]);
var inst_39160__$1 = (state_39195[(2)]);
var inst_39161 = (inst_39160__$1 == null);
var state_39195__$1 = (function (){var statearr_39200 = state_39195;
(statearr_39200[(7)] = inst_39160__$1);

return statearr_39200;
})();
if(cljs.core.truth_(inst_39161)){
var statearr_39201_39264 = state_39195__$1;
(statearr_39201_39264[(1)] = (5));

} else {
var statearr_39202_39265 = state_39195__$1;
(statearr_39202_39265[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (15))){
var inst_39173 = (state_39195[(8)]);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39195__$1,(18),to,inst_39173);
} else {
if((state_val_39196 === (21))){
var inst_39186 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39203_39266 = state_39195__$1;
(statearr_39203_39266[(2)] = inst_39186);

(statearr_39203_39266[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (13))){
var inst_39188 = (state_39195[(2)]);
var state_39195__$1 = (function (){var statearr_39204 = state_39195;
(statearr_39204[(9)] = inst_39188);

return statearr_39204;
})();
var statearr_39205_39267 = state_39195__$1;
(statearr_39205_39267[(2)] = null);

(statearr_39205_39267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (6))){
var inst_39160 = (state_39195[(7)]);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39195__$1,(11),inst_39160);
} else {
if((state_val_39196 === (17))){
var inst_39181 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
if(cljs.core.truth_(inst_39181)){
var statearr_39206_39268 = state_39195__$1;
(statearr_39206_39268[(1)] = (19));

} else {
var statearr_39207_39269 = state_39195__$1;
(statearr_39207_39269[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (3))){
var inst_39193 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39195__$1,inst_39193);
} else {
if((state_val_39196 === (12))){
var inst_39170 = (state_39195[(10)]);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39195__$1,(14),inst_39170);
} else {
if((state_val_39196 === (2))){
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39195__$1,(4),results);
} else {
if((state_val_39196 === (19))){
var state_39195__$1 = state_39195;
var statearr_39208_39270 = state_39195__$1;
(statearr_39208_39270[(2)] = null);

(statearr_39208_39270[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (11))){
var inst_39170 = (state_39195[(2)]);
var state_39195__$1 = (function (){var statearr_39209 = state_39195;
(statearr_39209[(10)] = inst_39170);

return statearr_39209;
})();
var statearr_39210_39271 = state_39195__$1;
(statearr_39210_39271[(2)] = null);

(statearr_39210_39271[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (9))){
var state_39195__$1 = state_39195;
var statearr_39211_39272 = state_39195__$1;
(statearr_39211_39272[(2)] = null);

(statearr_39211_39272[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (5))){
var state_39195__$1 = state_39195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39212_39273 = state_39195__$1;
(statearr_39212_39273[(1)] = (8));

} else {
var statearr_39213_39274 = state_39195__$1;
(statearr_39213_39274[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (14))){
var inst_39173 = (state_39195[(8)]);
var inst_39175 = (state_39195[(11)]);
var inst_39173__$1 = (state_39195[(2)]);
var inst_39174 = (inst_39173__$1 == null);
var inst_39175__$1 = cljs.core.not(inst_39174);
var state_39195__$1 = (function (){var statearr_39214 = state_39195;
(statearr_39214[(8)] = inst_39173__$1);

(statearr_39214[(11)] = inst_39175__$1);

return statearr_39214;
})();
if(inst_39175__$1){
var statearr_39215_39275 = state_39195__$1;
(statearr_39215_39275[(1)] = (15));

} else {
var statearr_39216_39276 = state_39195__$1;
(statearr_39216_39276[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (16))){
var inst_39175 = (state_39195[(11)]);
var state_39195__$1 = state_39195;
var statearr_39217_39277 = state_39195__$1;
(statearr_39217_39277[(2)] = inst_39175);

(statearr_39217_39277[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (10))){
var inst_39167 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39218_39278 = state_39195__$1;
(statearr_39218_39278[(2)] = inst_39167);

(statearr_39218_39278[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (18))){
var inst_39178 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39219_39279 = state_39195__$1;
(statearr_39219_39279[(2)] = inst_39178);

(statearr_39219_39279[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39196 === (8))){
var inst_39164 = cljs.core.async.close_BANG_(to);
var state_39195__$1 = state_39195;
var statearr_39220_39280 = state_39195__$1;
(statearr_39220_39280[(2)] = inst_39164);

(statearr_39220_39280[(1)] = (10));


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
});})(c__38887__auto__,jobs,results,process,async))
;
return ((function (switch__38780__auto__,c__38887__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0 = (function (){
var statearr_39221 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__);

(statearr_39221[(1)] = (1));

return statearr_39221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1 = (function (state_39195){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39195);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39222){if((e39222 instanceof Object)){
var ex__38784__auto__ = e39222;
var statearr_39223_39281 = state_39195;
(statearr_39223_39281[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39195);

return cljs.core.cst$kw$recur;
} else {
throw e39222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39282 = state_39195;
state_39195 = G__39282;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__ = function(state_39195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1.call(this,state_39195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__,jobs,results,process,async))
})();
var state__38889__auto__ = (function (){var statearr_39224 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39224[(6)] = c__38887__auto__);

return statearr_39224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__,jobs,results,process,async))
);

return c__38887__auto__;
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
var G__39284 = arguments.length;
switch (G__39284) {
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
var G__39287 = arguments.length;
switch (G__39287) {
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
var G__39290 = arguments.length;
switch (G__39290) {
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
var c__38887__auto___39339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___39339,tc,fc){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___39339,tc,fc){
return (function (state_39316){
var state_val_39317 = (state_39316[(1)]);
if((state_val_39317 === (7))){
var inst_39312 = (state_39316[(2)]);
var state_39316__$1 = state_39316;
var statearr_39318_39340 = state_39316__$1;
(statearr_39318_39340[(2)] = inst_39312);

(statearr_39318_39340[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (1))){
var state_39316__$1 = state_39316;
var statearr_39319_39341 = state_39316__$1;
(statearr_39319_39341[(2)] = null);

(statearr_39319_39341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (4))){
var inst_39293 = (state_39316[(7)]);
var inst_39293__$1 = (state_39316[(2)]);
var inst_39294 = (inst_39293__$1 == null);
var state_39316__$1 = (function (){var statearr_39320 = state_39316;
(statearr_39320[(7)] = inst_39293__$1);

return statearr_39320;
})();
if(cljs.core.truth_(inst_39294)){
var statearr_39321_39342 = state_39316__$1;
(statearr_39321_39342[(1)] = (5));

} else {
var statearr_39322_39343 = state_39316__$1;
(statearr_39322_39343[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (13))){
var state_39316__$1 = state_39316;
var statearr_39323_39344 = state_39316__$1;
(statearr_39323_39344[(2)] = null);

(statearr_39323_39344[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (6))){
var inst_39293 = (state_39316[(7)]);
var inst_39299 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39293) : p.call(null,inst_39293));
var state_39316__$1 = state_39316;
if(cljs.core.truth_(inst_39299)){
var statearr_39324_39345 = state_39316__$1;
(statearr_39324_39345[(1)] = (9));

} else {
var statearr_39325_39346 = state_39316__$1;
(statearr_39325_39346[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (3))){
var inst_39314 = (state_39316[(2)]);
var state_39316__$1 = state_39316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39316__$1,inst_39314);
} else {
if((state_val_39317 === (12))){
var state_39316__$1 = state_39316;
var statearr_39326_39347 = state_39316__$1;
(statearr_39326_39347[(2)] = null);

(statearr_39326_39347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (2))){
var state_39316__$1 = state_39316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39316__$1,(4),ch);
} else {
if((state_val_39317 === (11))){
var inst_39293 = (state_39316[(7)]);
var inst_39303 = (state_39316[(2)]);
var state_39316__$1 = state_39316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39316__$1,(8),inst_39303,inst_39293);
} else {
if((state_val_39317 === (9))){
var state_39316__$1 = state_39316;
var statearr_39327_39348 = state_39316__$1;
(statearr_39327_39348[(2)] = tc);

(statearr_39327_39348[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (5))){
var inst_39296 = cljs.core.async.close_BANG_(tc);
var inst_39297 = cljs.core.async.close_BANG_(fc);
var state_39316__$1 = (function (){var statearr_39328 = state_39316;
(statearr_39328[(8)] = inst_39296);

return statearr_39328;
})();
var statearr_39329_39349 = state_39316__$1;
(statearr_39329_39349[(2)] = inst_39297);

(statearr_39329_39349[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (14))){
var inst_39310 = (state_39316[(2)]);
var state_39316__$1 = state_39316;
var statearr_39330_39350 = state_39316__$1;
(statearr_39330_39350[(2)] = inst_39310);

(statearr_39330_39350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (10))){
var state_39316__$1 = state_39316;
var statearr_39331_39351 = state_39316__$1;
(statearr_39331_39351[(2)] = fc);

(statearr_39331_39351[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39317 === (8))){
var inst_39305 = (state_39316[(2)]);
var state_39316__$1 = state_39316;
if(cljs.core.truth_(inst_39305)){
var statearr_39332_39352 = state_39316__$1;
(statearr_39332_39352[(1)] = (12));

} else {
var statearr_39333_39353 = state_39316__$1;
(statearr_39333_39353[(1)] = (13));

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
});})(c__38887__auto___39339,tc,fc))
;
return ((function (switch__38780__auto__,c__38887__auto___39339,tc,fc){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_39334 = [null,null,null,null,null,null,null,null,null];
(statearr_39334[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_39334[(1)] = (1));

return statearr_39334;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_39316){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39316);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39335){if((e39335 instanceof Object)){
var ex__38784__auto__ = e39335;
var statearr_39336_39354 = state_39316;
(statearr_39336_39354[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39316);

return cljs.core.cst$kw$recur;
} else {
throw e39335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39355 = state_39316;
state_39316 = G__39355;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_39316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_39316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___39339,tc,fc))
})();
var state__38889__auto__ = (function (){var statearr_39337 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39337[(6)] = c__38887__auto___39339);

return statearr_39337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___39339,tc,fc))
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
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__){
return (function (state_39376){
var state_val_39377 = (state_39376[(1)]);
if((state_val_39377 === (7))){
var inst_39372 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39378_39396 = state_39376__$1;
(statearr_39378_39396[(2)] = inst_39372);

(statearr_39378_39396[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39377 === (1))){
var inst_39356 = init;
var state_39376__$1 = (function (){var statearr_39379 = state_39376;
(statearr_39379[(7)] = inst_39356);

return statearr_39379;
})();
var statearr_39380_39397 = state_39376__$1;
(statearr_39380_39397[(2)] = null);

(statearr_39380_39397[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39377 === (4))){
var inst_39359 = (state_39376[(8)]);
var inst_39359__$1 = (state_39376[(2)]);
var inst_39360 = (inst_39359__$1 == null);
var state_39376__$1 = (function (){var statearr_39381 = state_39376;
(statearr_39381[(8)] = inst_39359__$1);

return statearr_39381;
})();
if(cljs.core.truth_(inst_39360)){
var statearr_39382_39398 = state_39376__$1;
(statearr_39382_39398[(1)] = (5));

} else {
var statearr_39383_39399 = state_39376__$1;
(statearr_39383_39399[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39377 === (6))){
var inst_39359 = (state_39376[(8)]);
var inst_39356 = (state_39376[(7)]);
var inst_39363 = (state_39376[(9)]);
var inst_39363__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39356,inst_39359) : f.call(null,inst_39356,inst_39359));
var inst_39364 = cljs.core.reduced_QMARK_(inst_39363__$1);
var state_39376__$1 = (function (){var statearr_39384 = state_39376;
(statearr_39384[(9)] = inst_39363__$1);

return statearr_39384;
})();
if(inst_39364){
var statearr_39385_39400 = state_39376__$1;
(statearr_39385_39400[(1)] = (8));

} else {
var statearr_39386_39401 = state_39376__$1;
(statearr_39386_39401[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39377 === (3))){
var inst_39374 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39376__$1,inst_39374);
} else {
if((state_val_39377 === (2))){
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39376__$1,(4),ch);
} else {
if((state_val_39377 === (9))){
var inst_39363 = (state_39376[(9)]);
var inst_39356 = inst_39363;
var state_39376__$1 = (function (){var statearr_39387 = state_39376;
(statearr_39387[(7)] = inst_39356);

return statearr_39387;
})();
var statearr_39388_39402 = state_39376__$1;
(statearr_39388_39402[(2)] = null);

(statearr_39388_39402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39377 === (5))){
var inst_39356 = (state_39376[(7)]);
var state_39376__$1 = state_39376;
var statearr_39389_39403 = state_39376__$1;
(statearr_39389_39403[(2)] = inst_39356);

(statearr_39389_39403[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39377 === (10))){
var inst_39370 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39390_39404 = state_39376__$1;
(statearr_39390_39404[(2)] = inst_39370);

(statearr_39390_39404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39377 === (8))){
var inst_39363 = (state_39376[(9)]);
var inst_39366 = cljs.core.deref(inst_39363);
var state_39376__$1 = state_39376;
var statearr_39391_39405 = state_39376__$1;
(statearr_39391_39405[(2)] = inst_39366);

(statearr_39391_39405[(1)] = (10));


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
});})(c__38887__auto__))
;
return ((function (switch__38780__auto__,c__38887__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38781__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38781__auto____0 = (function (){
var statearr_39392 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39392[(0)] = cljs$core$async$reduce_$_state_machine__38781__auto__);

(statearr_39392[(1)] = (1));

return statearr_39392;
});
var cljs$core$async$reduce_$_state_machine__38781__auto____1 = (function (state_39376){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39376);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39393){if((e39393 instanceof Object)){
var ex__38784__auto__ = e39393;
var statearr_39394_39406 = state_39376;
(statearr_39394_39406[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39376);

return cljs.core.cst$kw$recur;
} else {
throw e39393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39407 = state_39376;
state_39376 = G__39407;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38781__auto__ = function(state_39376){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38781__auto____1.call(this,state_39376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38781__auto____0;
cljs$core$async$reduce_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38781__auto____1;
return cljs$core$async$reduce_$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__))
})();
var state__38889__auto__ = (function (){var statearr_39395 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39395[(6)] = c__38887__auto__);

return statearr_39395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__))
);

return c__38887__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__,f__$1){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__,f__$1){
return (function (state_39413){
var state_val_39414 = (state_39413[(1)]);
if((state_val_39414 === (1))){
var inst_39408 = cljs.core.async.reduce(f__$1,init,ch);
var state_39413__$1 = state_39413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39413__$1,(2),inst_39408);
} else {
if((state_val_39414 === (2))){
var inst_39410 = (state_39413[(2)]);
var inst_39411 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39410) : f__$1.call(null,inst_39410));
var state_39413__$1 = state_39413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39413__$1,inst_39411);
} else {
return null;
}
}
});})(c__38887__auto__,f__$1))
;
return ((function (switch__38780__auto__,c__38887__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38781__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38781__auto____0 = (function (){
var statearr_39415 = [null,null,null,null,null,null,null];
(statearr_39415[(0)] = cljs$core$async$transduce_$_state_machine__38781__auto__);

(statearr_39415[(1)] = (1));

return statearr_39415;
});
var cljs$core$async$transduce_$_state_machine__38781__auto____1 = (function (state_39413){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39413);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39416){if((e39416 instanceof Object)){
var ex__38784__auto__ = e39416;
var statearr_39417_39419 = state_39413;
(statearr_39417_39419[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39413);

return cljs.core.cst$kw$recur;
} else {
throw e39416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39420 = state_39413;
state_39413 = G__39420;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38781__auto__ = function(state_39413){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38781__auto____1.call(this,state_39413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38781__auto____0;
cljs$core$async$transduce_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38781__auto____1;
return cljs$core$async$transduce_$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__,f__$1))
})();
var state__38889__auto__ = (function (){var statearr_39418 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39418[(6)] = c__38887__auto__);

return statearr_39418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__,f__$1))
);

return c__38887__auto__;
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
var G__39422 = arguments.length;
switch (G__39422) {
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
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__){
return (function (state_39447){
var state_val_39448 = (state_39447[(1)]);
if((state_val_39448 === (7))){
var inst_39429 = (state_39447[(2)]);
var state_39447__$1 = state_39447;
var statearr_39449_39470 = state_39447__$1;
(statearr_39449_39470[(2)] = inst_39429);

(statearr_39449_39470[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (1))){
var inst_39423 = cljs.core.seq(coll);
var inst_39424 = inst_39423;
var state_39447__$1 = (function (){var statearr_39450 = state_39447;
(statearr_39450[(7)] = inst_39424);

return statearr_39450;
})();
var statearr_39451_39471 = state_39447__$1;
(statearr_39451_39471[(2)] = null);

(statearr_39451_39471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (4))){
var inst_39424 = (state_39447[(7)]);
var inst_39427 = cljs.core.first(inst_39424);
var state_39447__$1 = state_39447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39447__$1,(7),ch,inst_39427);
} else {
if((state_val_39448 === (13))){
var inst_39441 = (state_39447[(2)]);
var state_39447__$1 = state_39447;
var statearr_39452_39472 = state_39447__$1;
(statearr_39452_39472[(2)] = inst_39441);

(statearr_39452_39472[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (6))){
var inst_39432 = (state_39447[(2)]);
var state_39447__$1 = state_39447;
if(cljs.core.truth_(inst_39432)){
var statearr_39453_39473 = state_39447__$1;
(statearr_39453_39473[(1)] = (8));

} else {
var statearr_39454_39474 = state_39447__$1;
(statearr_39454_39474[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (3))){
var inst_39445 = (state_39447[(2)]);
var state_39447__$1 = state_39447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39447__$1,inst_39445);
} else {
if((state_val_39448 === (12))){
var state_39447__$1 = state_39447;
var statearr_39455_39475 = state_39447__$1;
(statearr_39455_39475[(2)] = null);

(statearr_39455_39475[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (2))){
var inst_39424 = (state_39447[(7)]);
var state_39447__$1 = state_39447;
if(cljs.core.truth_(inst_39424)){
var statearr_39456_39476 = state_39447__$1;
(statearr_39456_39476[(1)] = (4));

} else {
var statearr_39457_39477 = state_39447__$1;
(statearr_39457_39477[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (11))){
var inst_39438 = cljs.core.async.close_BANG_(ch);
var state_39447__$1 = state_39447;
var statearr_39458_39478 = state_39447__$1;
(statearr_39458_39478[(2)] = inst_39438);

(statearr_39458_39478[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (9))){
var state_39447__$1 = state_39447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39459_39479 = state_39447__$1;
(statearr_39459_39479[(1)] = (11));

} else {
var statearr_39460_39480 = state_39447__$1;
(statearr_39460_39480[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (5))){
var inst_39424 = (state_39447[(7)]);
var state_39447__$1 = state_39447;
var statearr_39461_39481 = state_39447__$1;
(statearr_39461_39481[(2)] = inst_39424);

(statearr_39461_39481[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (10))){
var inst_39443 = (state_39447[(2)]);
var state_39447__$1 = state_39447;
var statearr_39462_39482 = state_39447__$1;
(statearr_39462_39482[(2)] = inst_39443);

(statearr_39462_39482[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39448 === (8))){
var inst_39424 = (state_39447[(7)]);
var inst_39434 = cljs.core.next(inst_39424);
var inst_39424__$1 = inst_39434;
var state_39447__$1 = (function (){var statearr_39463 = state_39447;
(statearr_39463[(7)] = inst_39424__$1);

return statearr_39463;
})();
var statearr_39464_39483 = state_39447__$1;
(statearr_39464_39483[(2)] = null);

(statearr_39464_39483[(1)] = (2));


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
});})(c__38887__auto__))
;
return ((function (switch__38780__auto__,c__38887__auto__){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_39465 = [null,null,null,null,null,null,null,null];
(statearr_39465[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_39465[(1)] = (1));

return statearr_39465;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_39447){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39447);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39466){if((e39466 instanceof Object)){
var ex__38784__auto__ = e39466;
var statearr_39467_39484 = state_39447;
(statearr_39467_39484[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39447);

return cljs.core.cst$kw$recur;
} else {
throw e39466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39485 = state_39447;
state_39447 = G__39485;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_39447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_39447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__))
})();
var state__38889__auto__ = (function (){var statearr_39468 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39468[(6)] = c__38887__auto__);

return statearr_39468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__))
);

return c__38887__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39486 = (function (ch,cs,meta39487){
this.ch = ch;
this.cs = cs;
this.meta39487 = meta39487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39488,meta39487__$1){
var self__ = this;
var _39488__$1 = this;
return (new cljs.core.async.t_cljs$core$async39486(self__.ch,self__.cs,meta39487__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39488){
var self__ = this;
var _39488__$1 = this;
return self__.meta39487;
});})(cs))
;

cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39486.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39486.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta39487], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39486";

cljs.core.async.t_cljs$core$async39486.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39486");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39486.
 */
cljs.core.async.__GT_t_cljs$core$async39486 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39486(ch__$1,cs__$1,meta39487){
return (new cljs.core.async.t_cljs$core$async39486(ch__$1,cs__$1,meta39487));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39486(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38887__auto___39708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___39708,cs,m,dchan,dctr,done){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___39708,cs,m,dchan,dctr,done){
return (function (state_39623){
var state_val_39624 = (state_39623[(1)]);
if((state_val_39624 === (7))){
var inst_39619 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39625_39709 = state_39623__$1;
(statearr_39625_39709[(2)] = inst_39619);

(statearr_39625_39709[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (20))){
var inst_39522 = (state_39623[(7)]);
var inst_39534 = cljs.core.first(inst_39522);
var inst_39535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39534,(0),null);
var inst_39536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39534,(1),null);
var state_39623__$1 = (function (){var statearr_39626 = state_39623;
(statearr_39626[(8)] = inst_39535);

return statearr_39626;
})();
if(cljs.core.truth_(inst_39536)){
var statearr_39627_39710 = state_39623__$1;
(statearr_39627_39710[(1)] = (22));

} else {
var statearr_39628_39711 = state_39623__$1;
(statearr_39628_39711[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (27))){
var inst_39571 = (state_39623[(9)]);
var inst_39566 = (state_39623[(10)]);
var inst_39491 = (state_39623[(11)]);
var inst_39564 = (state_39623[(12)]);
var inst_39571__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39564,inst_39566);
var inst_39572 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39571__$1,inst_39491,done);
var state_39623__$1 = (function (){var statearr_39629 = state_39623;
(statearr_39629[(9)] = inst_39571__$1);

return statearr_39629;
})();
if(cljs.core.truth_(inst_39572)){
var statearr_39630_39712 = state_39623__$1;
(statearr_39630_39712[(1)] = (30));

} else {
var statearr_39631_39713 = state_39623__$1;
(statearr_39631_39713[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (1))){
var state_39623__$1 = state_39623;
var statearr_39632_39714 = state_39623__$1;
(statearr_39632_39714[(2)] = null);

(statearr_39632_39714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (24))){
var inst_39522 = (state_39623[(7)]);
var inst_39541 = (state_39623[(2)]);
var inst_39542 = cljs.core.next(inst_39522);
var inst_39500 = inst_39542;
var inst_39501 = null;
var inst_39502 = (0);
var inst_39503 = (0);
var state_39623__$1 = (function (){var statearr_39633 = state_39623;
(statearr_39633[(13)] = inst_39541);

(statearr_39633[(14)] = inst_39501);

(statearr_39633[(15)] = inst_39503);

(statearr_39633[(16)] = inst_39500);

(statearr_39633[(17)] = inst_39502);

return statearr_39633;
})();
var statearr_39634_39715 = state_39623__$1;
(statearr_39634_39715[(2)] = null);

(statearr_39634_39715[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (39))){
var state_39623__$1 = state_39623;
var statearr_39638_39716 = state_39623__$1;
(statearr_39638_39716[(2)] = null);

(statearr_39638_39716[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (4))){
var inst_39491 = (state_39623[(11)]);
var inst_39491__$1 = (state_39623[(2)]);
var inst_39492 = (inst_39491__$1 == null);
var state_39623__$1 = (function (){var statearr_39639 = state_39623;
(statearr_39639[(11)] = inst_39491__$1);

return statearr_39639;
})();
if(cljs.core.truth_(inst_39492)){
var statearr_39640_39717 = state_39623__$1;
(statearr_39640_39717[(1)] = (5));

} else {
var statearr_39641_39718 = state_39623__$1;
(statearr_39641_39718[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (15))){
var inst_39501 = (state_39623[(14)]);
var inst_39503 = (state_39623[(15)]);
var inst_39500 = (state_39623[(16)]);
var inst_39502 = (state_39623[(17)]);
var inst_39518 = (state_39623[(2)]);
var inst_39519 = (inst_39503 + (1));
var tmp39635 = inst_39501;
var tmp39636 = inst_39500;
var tmp39637 = inst_39502;
var inst_39500__$1 = tmp39636;
var inst_39501__$1 = tmp39635;
var inst_39502__$1 = tmp39637;
var inst_39503__$1 = inst_39519;
var state_39623__$1 = (function (){var statearr_39642 = state_39623;
(statearr_39642[(14)] = inst_39501__$1);

(statearr_39642[(15)] = inst_39503__$1);

(statearr_39642[(16)] = inst_39500__$1);

(statearr_39642[(17)] = inst_39502__$1);

(statearr_39642[(18)] = inst_39518);

return statearr_39642;
})();
var statearr_39643_39719 = state_39623__$1;
(statearr_39643_39719[(2)] = null);

(statearr_39643_39719[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (21))){
var inst_39545 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39647_39720 = state_39623__$1;
(statearr_39647_39720[(2)] = inst_39545);

(statearr_39647_39720[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (31))){
var inst_39571 = (state_39623[(9)]);
var inst_39575 = done(null);
var inst_39576 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39571);
var state_39623__$1 = (function (){var statearr_39648 = state_39623;
(statearr_39648[(19)] = inst_39575);

return statearr_39648;
})();
var statearr_39649_39721 = state_39623__$1;
(statearr_39649_39721[(2)] = inst_39576);

(statearr_39649_39721[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (32))){
var inst_39563 = (state_39623[(20)]);
var inst_39566 = (state_39623[(10)]);
var inst_39565 = (state_39623[(21)]);
var inst_39564 = (state_39623[(12)]);
var inst_39578 = (state_39623[(2)]);
var inst_39579 = (inst_39566 + (1));
var tmp39644 = inst_39563;
var tmp39645 = inst_39565;
var tmp39646 = inst_39564;
var inst_39563__$1 = tmp39644;
var inst_39564__$1 = tmp39646;
var inst_39565__$1 = tmp39645;
var inst_39566__$1 = inst_39579;
var state_39623__$1 = (function (){var statearr_39650 = state_39623;
(statearr_39650[(20)] = inst_39563__$1);

(statearr_39650[(10)] = inst_39566__$1);

(statearr_39650[(22)] = inst_39578);

(statearr_39650[(21)] = inst_39565__$1);

(statearr_39650[(12)] = inst_39564__$1);

return statearr_39650;
})();
var statearr_39651_39722 = state_39623__$1;
(statearr_39651_39722[(2)] = null);

(statearr_39651_39722[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (40))){
var inst_39591 = (state_39623[(23)]);
var inst_39595 = done(null);
var inst_39596 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39591);
var state_39623__$1 = (function (){var statearr_39652 = state_39623;
(statearr_39652[(24)] = inst_39595);

return statearr_39652;
})();
var statearr_39653_39723 = state_39623__$1;
(statearr_39653_39723[(2)] = inst_39596);

(statearr_39653_39723[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (33))){
var inst_39582 = (state_39623[(25)]);
var inst_39584 = cljs.core.chunked_seq_QMARK_(inst_39582);
var state_39623__$1 = state_39623;
if(inst_39584){
var statearr_39654_39724 = state_39623__$1;
(statearr_39654_39724[(1)] = (36));

} else {
var statearr_39655_39725 = state_39623__$1;
(statearr_39655_39725[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (13))){
var inst_39512 = (state_39623[(26)]);
var inst_39515 = cljs.core.async.close_BANG_(inst_39512);
var state_39623__$1 = state_39623;
var statearr_39656_39726 = state_39623__$1;
(statearr_39656_39726[(2)] = inst_39515);

(statearr_39656_39726[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (22))){
var inst_39535 = (state_39623[(8)]);
var inst_39538 = cljs.core.async.close_BANG_(inst_39535);
var state_39623__$1 = state_39623;
var statearr_39657_39727 = state_39623__$1;
(statearr_39657_39727[(2)] = inst_39538);

(statearr_39657_39727[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (36))){
var inst_39582 = (state_39623[(25)]);
var inst_39586 = cljs.core.chunk_first(inst_39582);
var inst_39587 = cljs.core.chunk_rest(inst_39582);
var inst_39588 = cljs.core.count(inst_39586);
var inst_39563 = inst_39587;
var inst_39564 = inst_39586;
var inst_39565 = inst_39588;
var inst_39566 = (0);
var state_39623__$1 = (function (){var statearr_39658 = state_39623;
(statearr_39658[(20)] = inst_39563);

(statearr_39658[(10)] = inst_39566);

(statearr_39658[(21)] = inst_39565);

(statearr_39658[(12)] = inst_39564);

return statearr_39658;
})();
var statearr_39659_39728 = state_39623__$1;
(statearr_39659_39728[(2)] = null);

(statearr_39659_39728[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (41))){
var inst_39582 = (state_39623[(25)]);
var inst_39598 = (state_39623[(2)]);
var inst_39599 = cljs.core.next(inst_39582);
var inst_39563 = inst_39599;
var inst_39564 = null;
var inst_39565 = (0);
var inst_39566 = (0);
var state_39623__$1 = (function (){var statearr_39660 = state_39623;
(statearr_39660[(20)] = inst_39563);

(statearr_39660[(27)] = inst_39598);

(statearr_39660[(10)] = inst_39566);

(statearr_39660[(21)] = inst_39565);

(statearr_39660[(12)] = inst_39564);

return statearr_39660;
})();
var statearr_39661_39729 = state_39623__$1;
(statearr_39661_39729[(2)] = null);

(statearr_39661_39729[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (43))){
var state_39623__$1 = state_39623;
var statearr_39662_39730 = state_39623__$1;
(statearr_39662_39730[(2)] = null);

(statearr_39662_39730[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (29))){
var inst_39607 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39663_39731 = state_39623__$1;
(statearr_39663_39731[(2)] = inst_39607);

(statearr_39663_39731[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (44))){
var inst_39616 = (state_39623[(2)]);
var state_39623__$1 = (function (){var statearr_39664 = state_39623;
(statearr_39664[(28)] = inst_39616);

return statearr_39664;
})();
var statearr_39665_39732 = state_39623__$1;
(statearr_39665_39732[(2)] = null);

(statearr_39665_39732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (6))){
var inst_39555 = (state_39623[(29)]);
var inst_39554 = cljs.core.deref(cs);
var inst_39555__$1 = cljs.core.keys(inst_39554);
var inst_39556 = cljs.core.count(inst_39555__$1);
var inst_39557 = cljs.core.reset_BANG_(dctr,inst_39556);
var inst_39562 = cljs.core.seq(inst_39555__$1);
var inst_39563 = inst_39562;
var inst_39564 = null;
var inst_39565 = (0);
var inst_39566 = (0);
var state_39623__$1 = (function (){var statearr_39666 = state_39623;
(statearr_39666[(20)] = inst_39563);

(statearr_39666[(10)] = inst_39566);

(statearr_39666[(29)] = inst_39555__$1);

(statearr_39666[(30)] = inst_39557);

(statearr_39666[(21)] = inst_39565);

(statearr_39666[(12)] = inst_39564);

return statearr_39666;
})();
var statearr_39667_39733 = state_39623__$1;
(statearr_39667_39733[(2)] = null);

(statearr_39667_39733[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (28))){
var inst_39563 = (state_39623[(20)]);
var inst_39582 = (state_39623[(25)]);
var inst_39582__$1 = cljs.core.seq(inst_39563);
var state_39623__$1 = (function (){var statearr_39668 = state_39623;
(statearr_39668[(25)] = inst_39582__$1);

return statearr_39668;
})();
if(inst_39582__$1){
var statearr_39669_39734 = state_39623__$1;
(statearr_39669_39734[(1)] = (33));

} else {
var statearr_39670_39735 = state_39623__$1;
(statearr_39670_39735[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (25))){
var inst_39566 = (state_39623[(10)]);
var inst_39565 = (state_39623[(21)]);
var inst_39568 = (inst_39566 < inst_39565);
var inst_39569 = inst_39568;
var state_39623__$1 = state_39623;
if(cljs.core.truth_(inst_39569)){
var statearr_39671_39736 = state_39623__$1;
(statearr_39671_39736[(1)] = (27));

} else {
var statearr_39672_39737 = state_39623__$1;
(statearr_39672_39737[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (34))){
var state_39623__$1 = state_39623;
var statearr_39673_39738 = state_39623__$1;
(statearr_39673_39738[(2)] = null);

(statearr_39673_39738[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (17))){
var state_39623__$1 = state_39623;
var statearr_39674_39739 = state_39623__$1;
(statearr_39674_39739[(2)] = null);

(statearr_39674_39739[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (3))){
var inst_39621 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39623__$1,inst_39621);
} else {
if((state_val_39624 === (12))){
var inst_39550 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39675_39740 = state_39623__$1;
(statearr_39675_39740[(2)] = inst_39550);

(statearr_39675_39740[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (2))){
var state_39623__$1 = state_39623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39623__$1,(4),ch);
} else {
if((state_val_39624 === (23))){
var state_39623__$1 = state_39623;
var statearr_39676_39741 = state_39623__$1;
(statearr_39676_39741[(2)] = null);

(statearr_39676_39741[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (35))){
var inst_39605 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39677_39742 = state_39623__$1;
(statearr_39677_39742[(2)] = inst_39605);

(statearr_39677_39742[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (19))){
var inst_39522 = (state_39623[(7)]);
var inst_39526 = cljs.core.chunk_first(inst_39522);
var inst_39527 = cljs.core.chunk_rest(inst_39522);
var inst_39528 = cljs.core.count(inst_39526);
var inst_39500 = inst_39527;
var inst_39501 = inst_39526;
var inst_39502 = inst_39528;
var inst_39503 = (0);
var state_39623__$1 = (function (){var statearr_39678 = state_39623;
(statearr_39678[(14)] = inst_39501);

(statearr_39678[(15)] = inst_39503);

(statearr_39678[(16)] = inst_39500);

(statearr_39678[(17)] = inst_39502);

return statearr_39678;
})();
var statearr_39679_39743 = state_39623__$1;
(statearr_39679_39743[(2)] = null);

(statearr_39679_39743[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (11))){
var inst_39522 = (state_39623[(7)]);
var inst_39500 = (state_39623[(16)]);
var inst_39522__$1 = cljs.core.seq(inst_39500);
var state_39623__$1 = (function (){var statearr_39680 = state_39623;
(statearr_39680[(7)] = inst_39522__$1);

return statearr_39680;
})();
if(inst_39522__$1){
var statearr_39681_39744 = state_39623__$1;
(statearr_39681_39744[(1)] = (16));

} else {
var statearr_39682_39745 = state_39623__$1;
(statearr_39682_39745[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (9))){
var inst_39552 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39683_39746 = state_39623__$1;
(statearr_39683_39746[(2)] = inst_39552);

(statearr_39683_39746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (5))){
var inst_39498 = cljs.core.deref(cs);
var inst_39499 = cljs.core.seq(inst_39498);
var inst_39500 = inst_39499;
var inst_39501 = null;
var inst_39502 = (0);
var inst_39503 = (0);
var state_39623__$1 = (function (){var statearr_39684 = state_39623;
(statearr_39684[(14)] = inst_39501);

(statearr_39684[(15)] = inst_39503);

(statearr_39684[(16)] = inst_39500);

(statearr_39684[(17)] = inst_39502);

return statearr_39684;
})();
var statearr_39685_39747 = state_39623__$1;
(statearr_39685_39747[(2)] = null);

(statearr_39685_39747[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (14))){
var state_39623__$1 = state_39623;
var statearr_39686_39748 = state_39623__$1;
(statearr_39686_39748[(2)] = null);

(statearr_39686_39748[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (45))){
var inst_39613 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39687_39749 = state_39623__$1;
(statearr_39687_39749[(2)] = inst_39613);

(statearr_39687_39749[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (26))){
var inst_39555 = (state_39623[(29)]);
var inst_39609 = (state_39623[(2)]);
var inst_39610 = cljs.core.seq(inst_39555);
var state_39623__$1 = (function (){var statearr_39688 = state_39623;
(statearr_39688[(31)] = inst_39609);

return statearr_39688;
})();
if(inst_39610){
var statearr_39689_39750 = state_39623__$1;
(statearr_39689_39750[(1)] = (42));

} else {
var statearr_39690_39751 = state_39623__$1;
(statearr_39690_39751[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (16))){
var inst_39522 = (state_39623[(7)]);
var inst_39524 = cljs.core.chunked_seq_QMARK_(inst_39522);
var state_39623__$1 = state_39623;
if(inst_39524){
var statearr_39691_39752 = state_39623__$1;
(statearr_39691_39752[(1)] = (19));

} else {
var statearr_39692_39753 = state_39623__$1;
(statearr_39692_39753[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (38))){
var inst_39602 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39693_39754 = state_39623__$1;
(statearr_39693_39754[(2)] = inst_39602);

(statearr_39693_39754[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (30))){
var state_39623__$1 = state_39623;
var statearr_39694_39755 = state_39623__$1;
(statearr_39694_39755[(2)] = null);

(statearr_39694_39755[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (10))){
var inst_39501 = (state_39623[(14)]);
var inst_39503 = (state_39623[(15)]);
var inst_39511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39501,inst_39503);
var inst_39512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39511,(0),null);
var inst_39513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39511,(1),null);
var state_39623__$1 = (function (){var statearr_39695 = state_39623;
(statearr_39695[(26)] = inst_39512);

return statearr_39695;
})();
if(cljs.core.truth_(inst_39513)){
var statearr_39696_39756 = state_39623__$1;
(statearr_39696_39756[(1)] = (13));

} else {
var statearr_39697_39757 = state_39623__$1;
(statearr_39697_39757[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (18))){
var inst_39548 = (state_39623[(2)]);
var state_39623__$1 = state_39623;
var statearr_39698_39758 = state_39623__$1;
(statearr_39698_39758[(2)] = inst_39548);

(statearr_39698_39758[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (42))){
var state_39623__$1 = state_39623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39623__$1,(45),dchan);
} else {
if((state_val_39624 === (37))){
var inst_39591 = (state_39623[(23)]);
var inst_39491 = (state_39623[(11)]);
var inst_39582 = (state_39623[(25)]);
var inst_39591__$1 = cljs.core.first(inst_39582);
var inst_39592 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39591__$1,inst_39491,done);
var state_39623__$1 = (function (){var statearr_39699 = state_39623;
(statearr_39699[(23)] = inst_39591__$1);

return statearr_39699;
})();
if(cljs.core.truth_(inst_39592)){
var statearr_39700_39759 = state_39623__$1;
(statearr_39700_39759[(1)] = (39));

} else {
var statearr_39701_39760 = state_39623__$1;
(statearr_39701_39760[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39624 === (8))){
var inst_39503 = (state_39623[(15)]);
var inst_39502 = (state_39623[(17)]);
var inst_39505 = (inst_39503 < inst_39502);
var inst_39506 = inst_39505;
var state_39623__$1 = state_39623;
if(cljs.core.truth_(inst_39506)){
var statearr_39702_39761 = state_39623__$1;
(statearr_39702_39761[(1)] = (10));

} else {
var statearr_39703_39762 = state_39623__$1;
(statearr_39703_39762[(1)] = (11));

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
});})(c__38887__auto___39708,cs,m,dchan,dctr,done))
;
return ((function (switch__38780__auto__,c__38887__auto___39708,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38781__auto__ = null;
var cljs$core$async$mult_$_state_machine__38781__auto____0 = (function (){
var statearr_39704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39704[(0)] = cljs$core$async$mult_$_state_machine__38781__auto__);

(statearr_39704[(1)] = (1));

return statearr_39704;
});
var cljs$core$async$mult_$_state_machine__38781__auto____1 = (function (state_39623){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39623);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39705){if((e39705 instanceof Object)){
var ex__38784__auto__ = e39705;
var statearr_39706_39763 = state_39623;
(statearr_39706_39763[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39623);

return cljs.core.cst$kw$recur;
} else {
throw e39705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39764 = state_39623;
state_39623 = G__39764;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38781__auto__ = function(state_39623){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38781__auto____1.call(this,state_39623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38781__auto____0;
cljs$core$async$mult_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38781__auto____1;
return cljs$core$async$mult_$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___39708,cs,m,dchan,dctr,done))
})();
var state__38889__auto__ = (function (){var statearr_39707 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39707[(6)] = c__38887__auto___39708);

return statearr_39707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___39708,cs,m,dchan,dctr,done))
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
var G__39766 = arguments.length;
switch (G__39766) {
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
var len__4730__auto___39778 = arguments.length;
var i__4731__auto___39779 = (0);
while(true){
if((i__4731__auto___39779 < len__4730__auto___39778)){
args__4736__auto__.push((arguments[i__4731__auto___39779]));

var G__39780 = (i__4731__auto___39779 + (1));
i__4731__auto___39779 = G__39780;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39772){
var map__39773 = p__39772;
var map__39773__$1 = (((((!((map__39773 == null))))?(((((map__39773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39773):map__39773);
var opts = map__39773__$1;
var statearr_39775_39781 = state;
(statearr_39775_39781[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__39773,map__39773__$1,opts){
return (function (val){
var statearr_39776_39782 = state;
(statearr_39776_39782[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__39773,map__39773__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_39777_39783 = state;
(statearr_39777_39783[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39768){
var G__39769 = cljs.core.first(seq39768);
var seq39768__$1 = cljs.core.next(seq39768);
var G__39770 = cljs.core.first(seq39768__$1);
var seq39768__$2 = cljs.core.next(seq39768__$1);
var G__39771 = cljs.core.first(seq39768__$2);
var seq39768__$3 = cljs.core.next(seq39768__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39769,G__39770,G__39771,seq39768__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39784 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39785){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39785 = meta39785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39786,meta39785__$1){
var self__ = this;
var _39786__$1 = this;
return (new cljs.core.async.t_cljs$core$async39784(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39785__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39786){
var self__ = this;
var _39786__$1 = this;
return self__.meta39785;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39784.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta39785], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39784";

cljs.core.async.t_cljs$core$async39784.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39784");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39784.
 */
cljs.core.async.__GT_t_cljs$core$async39784 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39784(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39785){
return (new cljs.core.async.t_cljs$core$async39784(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39785));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39784(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38887__auto___39948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___39948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___39948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39888){
var state_val_39889 = (state_39888[(1)]);
if((state_val_39889 === (7))){
var inst_39803 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
var statearr_39890_39949 = state_39888__$1;
(statearr_39890_39949[(2)] = inst_39803);

(statearr_39890_39949[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (20))){
var inst_39815 = (state_39888[(7)]);
var state_39888__$1 = state_39888;
var statearr_39891_39950 = state_39888__$1;
(statearr_39891_39950[(2)] = inst_39815);

(statearr_39891_39950[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (27))){
var state_39888__$1 = state_39888;
var statearr_39892_39951 = state_39888__$1;
(statearr_39892_39951[(2)] = null);

(statearr_39892_39951[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (1))){
var inst_39790 = (state_39888[(8)]);
var inst_39790__$1 = calc_state();
var inst_39792 = (inst_39790__$1 == null);
var inst_39793 = cljs.core.not(inst_39792);
var state_39888__$1 = (function (){var statearr_39893 = state_39888;
(statearr_39893[(8)] = inst_39790__$1);

return statearr_39893;
})();
if(inst_39793){
var statearr_39894_39952 = state_39888__$1;
(statearr_39894_39952[(1)] = (2));

} else {
var statearr_39895_39953 = state_39888__$1;
(statearr_39895_39953[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (24))){
var inst_39848 = (state_39888[(9)]);
var inst_39862 = (state_39888[(10)]);
var inst_39839 = (state_39888[(11)]);
var inst_39862__$1 = (inst_39839.cljs$core$IFn$_invoke$arity$1 ? inst_39839.cljs$core$IFn$_invoke$arity$1(inst_39848) : inst_39839.call(null,inst_39848));
var state_39888__$1 = (function (){var statearr_39896 = state_39888;
(statearr_39896[(10)] = inst_39862__$1);

return statearr_39896;
})();
if(cljs.core.truth_(inst_39862__$1)){
var statearr_39897_39954 = state_39888__$1;
(statearr_39897_39954[(1)] = (29));

} else {
var statearr_39898_39955 = state_39888__$1;
(statearr_39898_39955[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (4))){
var inst_39806 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
if(cljs.core.truth_(inst_39806)){
var statearr_39899_39956 = state_39888__$1;
(statearr_39899_39956[(1)] = (8));

} else {
var statearr_39900_39957 = state_39888__$1;
(statearr_39900_39957[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (15))){
var inst_39833 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
if(cljs.core.truth_(inst_39833)){
var statearr_39901_39958 = state_39888__$1;
(statearr_39901_39958[(1)] = (19));

} else {
var statearr_39902_39959 = state_39888__$1;
(statearr_39902_39959[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (21))){
var inst_39838 = (state_39888[(12)]);
var inst_39838__$1 = (state_39888[(2)]);
var inst_39839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39838__$1,cljs.core.cst$kw$solos);
var inst_39840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39838__$1,cljs.core.cst$kw$mutes);
var inst_39841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39838__$1,cljs.core.cst$kw$reads);
var state_39888__$1 = (function (){var statearr_39903 = state_39888;
(statearr_39903[(13)] = inst_39840);

(statearr_39903[(12)] = inst_39838__$1);

(statearr_39903[(11)] = inst_39839);

return statearr_39903;
})();
return cljs.core.async.ioc_alts_BANG_(state_39888__$1,(22),inst_39841);
} else {
if((state_val_39889 === (31))){
var inst_39870 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
if(cljs.core.truth_(inst_39870)){
var statearr_39904_39960 = state_39888__$1;
(statearr_39904_39960[(1)] = (32));

} else {
var statearr_39905_39961 = state_39888__$1;
(statearr_39905_39961[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (32))){
var inst_39847 = (state_39888[(14)]);
var state_39888__$1 = state_39888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39888__$1,(35),out,inst_39847);
} else {
if((state_val_39889 === (33))){
var inst_39838 = (state_39888[(12)]);
var inst_39815 = inst_39838;
var state_39888__$1 = (function (){var statearr_39906 = state_39888;
(statearr_39906[(7)] = inst_39815);

return statearr_39906;
})();
var statearr_39907_39962 = state_39888__$1;
(statearr_39907_39962[(2)] = null);

(statearr_39907_39962[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (13))){
var inst_39815 = (state_39888[(7)]);
var inst_39822 = inst_39815.cljs$lang$protocol_mask$partition0$;
var inst_39823 = (inst_39822 & (64));
var inst_39824 = inst_39815.cljs$core$ISeq$;
var inst_39825 = (cljs.core.PROTOCOL_SENTINEL === inst_39824);
var inst_39826 = ((inst_39823) || (inst_39825));
var state_39888__$1 = state_39888;
if(cljs.core.truth_(inst_39826)){
var statearr_39908_39963 = state_39888__$1;
(statearr_39908_39963[(1)] = (16));

} else {
var statearr_39909_39964 = state_39888__$1;
(statearr_39909_39964[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (22))){
var inst_39847 = (state_39888[(14)]);
var inst_39848 = (state_39888[(9)]);
var inst_39846 = (state_39888[(2)]);
var inst_39847__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39846,(0),null);
var inst_39848__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39846,(1),null);
var inst_39849 = (inst_39847__$1 == null);
var inst_39850 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39848__$1,change);
var inst_39851 = ((inst_39849) || (inst_39850));
var state_39888__$1 = (function (){var statearr_39910 = state_39888;
(statearr_39910[(14)] = inst_39847__$1);

(statearr_39910[(9)] = inst_39848__$1);

return statearr_39910;
})();
if(cljs.core.truth_(inst_39851)){
var statearr_39911_39965 = state_39888__$1;
(statearr_39911_39965[(1)] = (23));

} else {
var statearr_39912_39966 = state_39888__$1;
(statearr_39912_39966[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (36))){
var inst_39838 = (state_39888[(12)]);
var inst_39815 = inst_39838;
var state_39888__$1 = (function (){var statearr_39913 = state_39888;
(statearr_39913[(7)] = inst_39815);

return statearr_39913;
})();
var statearr_39914_39967 = state_39888__$1;
(statearr_39914_39967[(2)] = null);

(statearr_39914_39967[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (29))){
var inst_39862 = (state_39888[(10)]);
var state_39888__$1 = state_39888;
var statearr_39915_39968 = state_39888__$1;
(statearr_39915_39968[(2)] = inst_39862);

(statearr_39915_39968[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (6))){
var state_39888__$1 = state_39888;
var statearr_39916_39969 = state_39888__$1;
(statearr_39916_39969[(2)] = false);

(statearr_39916_39969[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (28))){
var inst_39858 = (state_39888[(2)]);
var inst_39859 = calc_state();
var inst_39815 = inst_39859;
var state_39888__$1 = (function (){var statearr_39917 = state_39888;
(statearr_39917[(15)] = inst_39858);

(statearr_39917[(7)] = inst_39815);

return statearr_39917;
})();
var statearr_39918_39970 = state_39888__$1;
(statearr_39918_39970[(2)] = null);

(statearr_39918_39970[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (25))){
var inst_39884 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
var statearr_39919_39971 = state_39888__$1;
(statearr_39919_39971[(2)] = inst_39884);

(statearr_39919_39971[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (34))){
var inst_39882 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
var statearr_39920_39972 = state_39888__$1;
(statearr_39920_39972[(2)] = inst_39882);

(statearr_39920_39972[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (17))){
var state_39888__$1 = state_39888;
var statearr_39921_39973 = state_39888__$1;
(statearr_39921_39973[(2)] = false);

(statearr_39921_39973[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (3))){
var state_39888__$1 = state_39888;
var statearr_39922_39974 = state_39888__$1;
(statearr_39922_39974[(2)] = false);

(statearr_39922_39974[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (12))){
var inst_39886 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39888__$1,inst_39886);
} else {
if((state_val_39889 === (2))){
var inst_39790 = (state_39888[(8)]);
var inst_39795 = inst_39790.cljs$lang$protocol_mask$partition0$;
var inst_39796 = (inst_39795 & (64));
var inst_39797 = inst_39790.cljs$core$ISeq$;
var inst_39798 = (cljs.core.PROTOCOL_SENTINEL === inst_39797);
var inst_39799 = ((inst_39796) || (inst_39798));
var state_39888__$1 = state_39888;
if(cljs.core.truth_(inst_39799)){
var statearr_39923_39975 = state_39888__$1;
(statearr_39923_39975[(1)] = (5));

} else {
var statearr_39924_39976 = state_39888__$1;
(statearr_39924_39976[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (23))){
var inst_39847 = (state_39888[(14)]);
var inst_39853 = (inst_39847 == null);
var state_39888__$1 = state_39888;
if(cljs.core.truth_(inst_39853)){
var statearr_39925_39977 = state_39888__$1;
(statearr_39925_39977[(1)] = (26));

} else {
var statearr_39926_39978 = state_39888__$1;
(statearr_39926_39978[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (35))){
var inst_39873 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
if(cljs.core.truth_(inst_39873)){
var statearr_39927_39979 = state_39888__$1;
(statearr_39927_39979[(1)] = (36));

} else {
var statearr_39928_39980 = state_39888__$1;
(statearr_39928_39980[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (19))){
var inst_39815 = (state_39888[(7)]);
var inst_39835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39815);
var state_39888__$1 = state_39888;
var statearr_39929_39981 = state_39888__$1;
(statearr_39929_39981[(2)] = inst_39835);

(statearr_39929_39981[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (11))){
var inst_39815 = (state_39888[(7)]);
var inst_39819 = (inst_39815 == null);
var inst_39820 = cljs.core.not(inst_39819);
var state_39888__$1 = state_39888;
if(inst_39820){
var statearr_39930_39982 = state_39888__$1;
(statearr_39930_39982[(1)] = (13));

} else {
var statearr_39931_39983 = state_39888__$1;
(statearr_39931_39983[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (9))){
var inst_39790 = (state_39888[(8)]);
var state_39888__$1 = state_39888;
var statearr_39932_39984 = state_39888__$1;
(statearr_39932_39984[(2)] = inst_39790);

(statearr_39932_39984[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (5))){
var state_39888__$1 = state_39888;
var statearr_39933_39985 = state_39888__$1;
(statearr_39933_39985[(2)] = true);

(statearr_39933_39985[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (14))){
var state_39888__$1 = state_39888;
var statearr_39934_39986 = state_39888__$1;
(statearr_39934_39986[(2)] = false);

(statearr_39934_39986[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (26))){
var inst_39848 = (state_39888[(9)]);
var inst_39855 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39848);
var state_39888__$1 = state_39888;
var statearr_39935_39987 = state_39888__$1;
(statearr_39935_39987[(2)] = inst_39855);

(statearr_39935_39987[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (16))){
var state_39888__$1 = state_39888;
var statearr_39936_39988 = state_39888__$1;
(statearr_39936_39988[(2)] = true);

(statearr_39936_39988[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (38))){
var inst_39878 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
var statearr_39937_39989 = state_39888__$1;
(statearr_39937_39989[(2)] = inst_39878);

(statearr_39937_39989[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (30))){
var inst_39840 = (state_39888[(13)]);
var inst_39848 = (state_39888[(9)]);
var inst_39839 = (state_39888[(11)]);
var inst_39865 = cljs.core.empty_QMARK_(inst_39839);
var inst_39866 = (inst_39840.cljs$core$IFn$_invoke$arity$1 ? inst_39840.cljs$core$IFn$_invoke$arity$1(inst_39848) : inst_39840.call(null,inst_39848));
var inst_39867 = cljs.core.not(inst_39866);
var inst_39868 = ((inst_39865) && (inst_39867));
var state_39888__$1 = state_39888;
var statearr_39938_39990 = state_39888__$1;
(statearr_39938_39990[(2)] = inst_39868);

(statearr_39938_39990[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (10))){
var inst_39790 = (state_39888[(8)]);
var inst_39811 = (state_39888[(2)]);
var inst_39812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39811,cljs.core.cst$kw$solos);
var inst_39813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39811,cljs.core.cst$kw$mutes);
var inst_39814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39811,cljs.core.cst$kw$reads);
var inst_39815 = inst_39790;
var state_39888__$1 = (function (){var statearr_39939 = state_39888;
(statearr_39939[(16)] = inst_39812);

(statearr_39939[(17)] = inst_39813);

(statearr_39939[(18)] = inst_39814);

(statearr_39939[(7)] = inst_39815);

return statearr_39939;
})();
var statearr_39940_39991 = state_39888__$1;
(statearr_39940_39991[(2)] = null);

(statearr_39940_39991[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (18))){
var inst_39830 = (state_39888[(2)]);
var state_39888__$1 = state_39888;
var statearr_39941_39992 = state_39888__$1;
(statearr_39941_39992[(2)] = inst_39830);

(statearr_39941_39992[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (37))){
var state_39888__$1 = state_39888;
var statearr_39942_39993 = state_39888__$1;
(statearr_39942_39993[(2)] = null);

(statearr_39942_39993[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39889 === (8))){
var inst_39790 = (state_39888[(8)]);
var inst_39808 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39790);
var state_39888__$1 = state_39888;
var statearr_39943_39994 = state_39888__$1;
(statearr_39943_39994[(2)] = inst_39808);

(statearr_39943_39994[(1)] = (10));


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
});})(c__38887__auto___39948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38780__auto__,c__38887__auto___39948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38781__auto__ = null;
var cljs$core$async$mix_$_state_machine__38781__auto____0 = (function (){
var statearr_39944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39944[(0)] = cljs$core$async$mix_$_state_machine__38781__auto__);

(statearr_39944[(1)] = (1));

return statearr_39944;
});
var cljs$core$async$mix_$_state_machine__38781__auto____1 = (function (state_39888){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_39888);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e39945){if((e39945 instanceof Object)){
var ex__38784__auto__ = e39945;
var statearr_39946_39995 = state_39888;
(statearr_39946_39995[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39888);

return cljs.core.cst$kw$recur;
} else {
throw e39945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__39996 = state_39888;
state_39888 = G__39996;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38781__auto__ = function(state_39888){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38781__auto____1.call(this,state_39888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38781__auto____0;
cljs$core$async$mix_$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38781__auto____1;
return cljs$core$async$mix_$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___39948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38889__auto__ = (function (){var statearr_39947 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_39947[(6)] = c__38887__auto___39948);

return statearr_39947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___39948,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__39998 = arguments.length;
switch (G__39998) {
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
var G__40002 = arguments.length;
switch (G__40002) {
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
return (function (p1__40000_SHARP_){
if(cljs.core.truth_((p1__40000_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40000_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40000_SHARP_.call(null,topic)))){
return p1__40000_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40000_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40003 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40004){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40004 = meta40004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40005,meta40004__$1){
var self__ = this;
var _40005__$1 = this;
return (new cljs.core.async.t_cljs$core$async40003(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40004__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40005){
var self__ = this;
var _40005__$1 = this;
return self__.meta40004;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40003.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta40004], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40003";

cljs.core.async.t_cljs$core$async40003.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40003");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40003.
 */
cljs.core.async.__GT_t_cljs$core$async40003 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40004){
return (new cljs.core.async.t_cljs$core$async40003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40004));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40003(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38887__auto___40123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40123,mults,ensure_mult,p){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40123,mults,ensure_mult,p){
return (function (state_40077){
var state_val_40078 = (state_40077[(1)]);
if((state_val_40078 === (7))){
var inst_40073 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
var statearr_40079_40124 = state_40077__$1;
(statearr_40079_40124[(2)] = inst_40073);

(statearr_40079_40124[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (20))){
var state_40077__$1 = state_40077;
var statearr_40080_40125 = state_40077__$1;
(statearr_40080_40125[(2)] = null);

(statearr_40080_40125[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (1))){
var state_40077__$1 = state_40077;
var statearr_40081_40126 = state_40077__$1;
(statearr_40081_40126[(2)] = null);

(statearr_40081_40126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (24))){
var inst_40056 = (state_40077[(7)]);
var inst_40065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40056);
var state_40077__$1 = state_40077;
var statearr_40082_40127 = state_40077__$1;
(statearr_40082_40127[(2)] = inst_40065);

(statearr_40082_40127[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (4))){
var inst_40008 = (state_40077[(8)]);
var inst_40008__$1 = (state_40077[(2)]);
var inst_40009 = (inst_40008__$1 == null);
var state_40077__$1 = (function (){var statearr_40083 = state_40077;
(statearr_40083[(8)] = inst_40008__$1);

return statearr_40083;
})();
if(cljs.core.truth_(inst_40009)){
var statearr_40084_40128 = state_40077__$1;
(statearr_40084_40128[(1)] = (5));

} else {
var statearr_40085_40129 = state_40077__$1;
(statearr_40085_40129[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (15))){
var inst_40050 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
var statearr_40086_40130 = state_40077__$1;
(statearr_40086_40130[(2)] = inst_40050);

(statearr_40086_40130[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (21))){
var inst_40070 = (state_40077[(2)]);
var state_40077__$1 = (function (){var statearr_40087 = state_40077;
(statearr_40087[(9)] = inst_40070);

return statearr_40087;
})();
var statearr_40088_40131 = state_40077__$1;
(statearr_40088_40131[(2)] = null);

(statearr_40088_40131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (13))){
var inst_40032 = (state_40077[(10)]);
var inst_40034 = cljs.core.chunked_seq_QMARK_(inst_40032);
var state_40077__$1 = state_40077;
if(inst_40034){
var statearr_40089_40132 = state_40077__$1;
(statearr_40089_40132[(1)] = (16));

} else {
var statearr_40090_40133 = state_40077__$1;
(statearr_40090_40133[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (22))){
var inst_40062 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
if(cljs.core.truth_(inst_40062)){
var statearr_40091_40134 = state_40077__$1;
(statearr_40091_40134[(1)] = (23));

} else {
var statearr_40092_40135 = state_40077__$1;
(statearr_40092_40135[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (6))){
var inst_40058 = (state_40077[(11)]);
var inst_40056 = (state_40077[(7)]);
var inst_40008 = (state_40077[(8)]);
var inst_40056__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40008) : topic_fn.call(null,inst_40008));
var inst_40057 = cljs.core.deref(mults);
var inst_40058__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40057,inst_40056__$1);
var state_40077__$1 = (function (){var statearr_40093 = state_40077;
(statearr_40093[(11)] = inst_40058__$1);

(statearr_40093[(7)] = inst_40056__$1);

return statearr_40093;
})();
if(cljs.core.truth_(inst_40058__$1)){
var statearr_40094_40136 = state_40077__$1;
(statearr_40094_40136[(1)] = (19));

} else {
var statearr_40095_40137 = state_40077__$1;
(statearr_40095_40137[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (25))){
var inst_40067 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
var statearr_40096_40138 = state_40077__$1;
(statearr_40096_40138[(2)] = inst_40067);

(statearr_40096_40138[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (17))){
var inst_40032 = (state_40077[(10)]);
var inst_40041 = cljs.core.first(inst_40032);
var inst_40042 = cljs.core.async.muxch_STAR_(inst_40041);
var inst_40043 = cljs.core.async.close_BANG_(inst_40042);
var inst_40044 = cljs.core.next(inst_40032);
var inst_40018 = inst_40044;
var inst_40019 = null;
var inst_40020 = (0);
var inst_40021 = (0);
var state_40077__$1 = (function (){var statearr_40097 = state_40077;
(statearr_40097[(12)] = inst_40021);

(statearr_40097[(13)] = inst_40020);

(statearr_40097[(14)] = inst_40019);

(statearr_40097[(15)] = inst_40018);

(statearr_40097[(16)] = inst_40043);

return statearr_40097;
})();
var statearr_40098_40139 = state_40077__$1;
(statearr_40098_40139[(2)] = null);

(statearr_40098_40139[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (3))){
var inst_40075 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40077__$1,inst_40075);
} else {
if((state_val_40078 === (12))){
var inst_40052 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
var statearr_40099_40140 = state_40077__$1;
(statearr_40099_40140[(2)] = inst_40052);

(statearr_40099_40140[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (2))){
var state_40077__$1 = state_40077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40077__$1,(4),ch);
} else {
if((state_val_40078 === (23))){
var state_40077__$1 = state_40077;
var statearr_40100_40141 = state_40077__$1;
(statearr_40100_40141[(2)] = null);

(statearr_40100_40141[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (19))){
var inst_40058 = (state_40077[(11)]);
var inst_40008 = (state_40077[(8)]);
var inst_40060 = cljs.core.async.muxch_STAR_(inst_40058);
var state_40077__$1 = state_40077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40077__$1,(22),inst_40060,inst_40008);
} else {
if((state_val_40078 === (11))){
var inst_40032 = (state_40077[(10)]);
var inst_40018 = (state_40077[(15)]);
var inst_40032__$1 = cljs.core.seq(inst_40018);
var state_40077__$1 = (function (){var statearr_40101 = state_40077;
(statearr_40101[(10)] = inst_40032__$1);

return statearr_40101;
})();
if(inst_40032__$1){
var statearr_40102_40142 = state_40077__$1;
(statearr_40102_40142[(1)] = (13));

} else {
var statearr_40103_40143 = state_40077__$1;
(statearr_40103_40143[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (9))){
var inst_40054 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
var statearr_40104_40144 = state_40077__$1;
(statearr_40104_40144[(2)] = inst_40054);

(statearr_40104_40144[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (5))){
var inst_40015 = cljs.core.deref(mults);
var inst_40016 = cljs.core.vals(inst_40015);
var inst_40017 = cljs.core.seq(inst_40016);
var inst_40018 = inst_40017;
var inst_40019 = null;
var inst_40020 = (0);
var inst_40021 = (0);
var state_40077__$1 = (function (){var statearr_40105 = state_40077;
(statearr_40105[(12)] = inst_40021);

(statearr_40105[(13)] = inst_40020);

(statearr_40105[(14)] = inst_40019);

(statearr_40105[(15)] = inst_40018);

return statearr_40105;
})();
var statearr_40106_40145 = state_40077__$1;
(statearr_40106_40145[(2)] = null);

(statearr_40106_40145[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (14))){
var state_40077__$1 = state_40077;
var statearr_40110_40146 = state_40077__$1;
(statearr_40110_40146[(2)] = null);

(statearr_40110_40146[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (16))){
var inst_40032 = (state_40077[(10)]);
var inst_40036 = cljs.core.chunk_first(inst_40032);
var inst_40037 = cljs.core.chunk_rest(inst_40032);
var inst_40038 = cljs.core.count(inst_40036);
var inst_40018 = inst_40037;
var inst_40019 = inst_40036;
var inst_40020 = inst_40038;
var inst_40021 = (0);
var state_40077__$1 = (function (){var statearr_40111 = state_40077;
(statearr_40111[(12)] = inst_40021);

(statearr_40111[(13)] = inst_40020);

(statearr_40111[(14)] = inst_40019);

(statearr_40111[(15)] = inst_40018);

return statearr_40111;
})();
var statearr_40112_40147 = state_40077__$1;
(statearr_40112_40147[(2)] = null);

(statearr_40112_40147[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (10))){
var inst_40021 = (state_40077[(12)]);
var inst_40020 = (state_40077[(13)]);
var inst_40019 = (state_40077[(14)]);
var inst_40018 = (state_40077[(15)]);
var inst_40026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40019,inst_40021);
var inst_40027 = cljs.core.async.muxch_STAR_(inst_40026);
var inst_40028 = cljs.core.async.close_BANG_(inst_40027);
var inst_40029 = (inst_40021 + (1));
var tmp40107 = inst_40020;
var tmp40108 = inst_40019;
var tmp40109 = inst_40018;
var inst_40018__$1 = tmp40109;
var inst_40019__$1 = tmp40108;
var inst_40020__$1 = tmp40107;
var inst_40021__$1 = inst_40029;
var state_40077__$1 = (function (){var statearr_40113 = state_40077;
(statearr_40113[(12)] = inst_40021__$1);

(statearr_40113[(13)] = inst_40020__$1);

(statearr_40113[(14)] = inst_40019__$1);

(statearr_40113[(15)] = inst_40018__$1);

(statearr_40113[(17)] = inst_40028);

return statearr_40113;
})();
var statearr_40114_40148 = state_40077__$1;
(statearr_40114_40148[(2)] = null);

(statearr_40114_40148[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (18))){
var inst_40047 = (state_40077[(2)]);
var state_40077__$1 = state_40077;
var statearr_40115_40149 = state_40077__$1;
(statearr_40115_40149[(2)] = inst_40047);

(statearr_40115_40149[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40078 === (8))){
var inst_40021 = (state_40077[(12)]);
var inst_40020 = (state_40077[(13)]);
var inst_40023 = (inst_40021 < inst_40020);
var inst_40024 = inst_40023;
var state_40077__$1 = state_40077;
if(cljs.core.truth_(inst_40024)){
var statearr_40116_40150 = state_40077__$1;
(statearr_40116_40150[(1)] = (10));

} else {
var statearr_40117_40151 = state_40077__$1;
(statearr_40117_40151[(1)] = (11));

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
});})(c__38887__auto___40123,mults,ensure_mult,p))
;
return ((function (switch__38780__auto__,c__38887__auto___40123,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40118[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40118[(1)] = (1));

return statearr_40118;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40077){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40077);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40119){if((e40119 instanceof Object)){
var ex__38784__auto__ = e40119;
var statearr_40120_40152 = state_40077;
(statearr_40120_40152[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40077);

return cljs.core.cst$kw$recur;
} else {
throw e40119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40153 = state_40077;
state_40077 = G__40153;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40123,mults,ensure_mult,p))
})();
var state__38889__auto__ = (function (){var statearr_40121 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40121[(6)] = c__38887__auto___40123);

return statearr_40121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40123,mults,ensure_mult,p))
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
var G__40155 = arguments.length;
switch (G__40155) {
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
var G__40158 = arguments.length;
switch (G__40158) {
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
var G__40161 = arguments.length;
switch (G__40161) {
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
var c__38887__auto___40228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40200){
var state_val_40201 = (state_40200[(1)]);
if((state_val_40201 === (7))){
var state_40200__$1 = state_40200;
var statearr_40202_40229 = state_40200__$1;
(statearr_40202_40229[(2)] = null);

(statearr_40202_40229[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (1))){
var state_40200__$1 = state_40200;
var statearr_40203_40230 = state_40200__$1;
(statearr_40203_40230[(2)] = null);

(statearr_40203_40230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (4))){
var inst_40164 = (state_40200[(7)]);
var inst_40166 = (inst_40164 < cnt);
var state_40200__$1 = state_40200;
if(cljs.core.truth_(inst_40166)){
var statearr_40204_40231 = state_40200__$1;
(statearr_40204_40231[(1)] = (6));

} else {
var statearr_40205_40232 = state_40200__$1;
(statearr_40205_40232[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (15))){
var inst_40196 = (state_40200[(2)]);
var state_40200__$1 = state_40200;
var statearr_40206_40233 = state_40200__$1;
(statearr_40206_40233[(2)] = inst_40196);

(statearr_40206_40233[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (13))){
var inst_40189 = cljs.core.async.close_BANG_(out);
var state_40200__$1 = state_40200;
var statearr_40207_40234 = state_40200__$1;
(statearr_40207_40234[(2)] = inst_40189);

(statearr_40207_40234[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (6))){
var state_40200__$1 = state_40200;
var statearr_40208_40235 = state_40200__$1;
(statearr_40208_40235[(2)] = null);

(statearr_40208_40235[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (3))){
var inst_40198 = (state_40200[(2)]);
var state_40200__$1 = state_40200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40200__$1,inst_40198);
} else {
if((state_val_40201 === (12))){
var inst_40186 = (state_40200[(8)]);
var inst_40186__$1 = (state_40200[(2)]);
var inst_40187 = cljs.core.some(cljs.core.nil_QMARK_,inst_40186__$1);
var state_40200__$1 = (function (){var statearr_40209 = state_40200;
(statearr_40209[(8)] = inst_40186__$1);

return statearr_40209;
})();
if(cljs.core.truth_(inst_40187)){
var statearr_40210_40236 = state_40200__$1;
(statearr_40210_40236[(1)] = (13));

} else {
var statearr_40211_40237 = state_40200__$1;
(statearr_40211_40237[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (2))){
var inst_40163 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40164 = (0);
var state_40200__$1 = (function (){var statearr_40212 = state_40200;
(statearr_40212[(7)] = inst_40164);

(statearr_40212[(9)] = inst_40163);

return statearr_40212;
})();
var statearr_40213_40238 = state_40200__$1;
(statearr_40213_40238[(2)] = null);

(statearr_40213_40238[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (11))){
var inst_40164 = (state_40200[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40200,(10),Object,null,(9));
var inst_40173 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40164) : chs__$1.call(null,inst_40164));
var inst_40174 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40164) : done.call(null,inst_40164));
var inst_40175 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40173,inst_40174);
var state_40200__$1 = state_40200;
var statearr_40214_40239 = state_40200__$1;
(statearr_40214_40239[(2)] = inst_40175);


cljs.core.async.impl.ioc_helpers.process_exception(state_40200__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (9))){
var inst_40164 = (state_40200[(7)]);
var inst_40177 = (state_40200[(2)]);
var inst_40178 = (inst_40164 + (1));
var inst_40164__$1 = inst_40178;
var state_40200__$1 = (function (){var statearr_40215 = state_40200;
(statearr_40215[(7)] = inst_40164__$1);

(statearr_40215[(10)] = inst_40177);

return statearr_40215;
})();
var statearr_40216_40240 = state_40200__$1;
(statearr_40216_40240[(2)] = null);

(statearr_40216_40240[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (5))){
var inst_40184 = (state_40200[(2)]);
var state_40200__$1 = (function (){var statearr_40217 = state_40200;
(statearr_40217[(11)] = inst_40184);

return statearr_40217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40200__$1,(12),dchan);
} else {
if((state_val_40201 === (14))){
var inst_40186 = (state_40200[(8)]);
var inst_40191 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40186);
var state_40200__$1 = state_40200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40200__$1,(16),out,inst_40191);
} else {
if((state_val_40201 === (16))){
var inst_40193 = (state_40200[(2)]);
var state_40200__$1 = (function (){var statearr_40218 = state_40200;
(statearr_40218[(12)] = inst_40193);

return statearr_40218;
})();
var statearr_40219_40241 = state_40200__$1;
(statearr_40219_40241[(2)] = null);

(statearr_40219_40241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (10))){
var inst_40168 = (state_40200[(2)]);
var inst_40169 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40200__$1 = (function (){var statearr_40220 = state_40200;
(statearr_40220[(13)] = inst_40168);

return statearr_40220;
})();
var statearr_40221_40242 = state_40200__$1;
(statearr_40221_40242[(2)] = inst_40169);


cljs.core.async.impl.ioc_helpers.process_exception(state_40200__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_40201 === (8))){
var inst_40182 = (state_40200[(2)]);
var state_40200__$1 = state_40200;
var statearr_40222_40243 = state_40200__$1;
(statearr_40222_40243[(2)] = inst_40182);

(statearr_40222_40243[(1)] = (5));


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
});})(c__38887__auto___40228,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38780__auto__,c__38887__auto___40228,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40223[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40223[(1)] = (1));

return statearr_40223;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40200){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40200);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40224){if((e40224 instanceof Object)){
var ex__38784__auto__ = e40224;
var statearr_40225_40244 = state_40200;
(statearr_40225_40244[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40200);

return cljs.core.cst$kw$recur;
} else {
throw e40224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40245 = state_40200;
state_40200 = G__40245;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40228,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38889__auto__ = (function (){var statearr_40226 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40226[(6)] = c__38887__auto___40228);

return statearr_40226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40228,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40248 = arguments.length;
switch (G__40248) {
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
var c__38887__auto___40302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40302,out){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40302,out){
return (function (state_40280){
var state_val_40281 = (state_40280[(1)]);
if((state_val_40281 === (7))){
var inst_40259 = (state_40280[(7)]);
var inst_40260 = (state_40280[(8)]);
var inst_40259__$1 = (state_40280[(2)]);
var inst_40260__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40259__$1,(0),null);
var inst_40261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40259__$1,(1),null);
var inst_40262 = (inst_40260__$1 == null);
var state_40280__$1 = (function (){var statearr_40282 = state_40280;
(statearr_40282[(9)] = inst_40261);

(statearr_40282[(7)] = inst_40259__$1);

(statearr_40282[(8)] = inst_40260__$1);

return statearr_40282;
})();
if(cljs.core.truth_(inst_40262)){
var statearr_40283_40303 = state_40280__$1;
(statearr_40283_40303[(1)] = (8));

} else {
var statearr_40284_40304 = state_40280__$1;
(statearr_40284_40304[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40281 === (1))){
var inst_40249 = cljs.core.vec(chs);
var inst_40250 = inst_40249;
var state_40280__$1 = (function (){var statearr_40285 = state_40280;
(statearr_40285[(10)] = inst_40250);

return statearr_40285;
})();
var statearr_40286_40305 = state_40280__$1;
(statearr_40286_40305[(2)] = null);

(statearr_40286_40305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40281 === (4))){
var inst_40250 = (state_40280[(10)]);
var state_40280__$1 = state_40280;
return cljs.core.async.ioc_alts_BANG_(state_40280__$1,(7),inst_40250);
} else {
if((state_val_40281 === (6))){
var inst_40276 = (state_40280[(2)]);
var state_40280__$1 = state_40280;
var statearr_40287_40306 = state_40280__$1;
(statearr_40287_40306[(2)] = inst_40276);

(statearr_40287_40306[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40281 === (3))){
var inst_40278 = (state_40280[(2)]);
var state_40280__$1 = state_40280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40280__$1,inst_40278);
} else {
if((state_val_40281 === (2))){
var inst_40250 = (state_40280[(10)]);
var inst_40252 = cljs.core.count(inst_40250);
var inst_40253 = (inst_40252 > (0));
var state_40280__$1 = state_40280;
if(cljs.core.truth_(inst_40253)){
var statearr_40289_40307 = state_40280__$1;
(statearr_40289_40307[(1)] = (4));

} else {
var statearr_40290_40308 = state_40280__$1;
(statearr_40290_40308[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40281 === (11))){
var inst_40250 = (state_40280[(10)]);
var inst_40269 = (state_40280[(2)]);
var tmp40288 = inst_40250;
var inst_40250__$1 = tmp40288;
var state_40280__$1 = (function (){var statearr_40291 = state_40280;
(statearr_40291[(10)] = inst_40250__$1);

(statearr_40291[(11)] = inst_40269);

return statearr_40291;
})();
var statearr_40292_40309 = state_40280__$1;
(statearr_40292_40309[(2)] = null);

(statearr_40292_40309[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40281 === (9))){
var inst_40260 = (state_40280[(8)]);
var state_40280__$1 = state_40280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40280__$1,(11),out,inst_40260);
} else {
if((state_val_40281 === (5))){
var inst_40274 = cljs.core.async.close_BANG_(out);
var state_40280__$1 = state_40280;
var statearr_40293_40310 = state_40280__$1;
(statearr_40293_40310[(2)] = inst_40274);

(statearr_40293_40310[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40281 === (10))){
var inst_40272 = (state_40280[(2)]);
var state_40280__$1 = state_40280;
var statearr_40294_40311 = state_40280__$1;
(statearr_40294_40311[(2)] = inst_40272);

(statearr_40294_40311[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40281 === (8))){
var inst_40250 = (state_40280[(10)]);
var inst_40261 = (state_40280[(9)]);
var inst_40259 = (state_40280[(7)]);
var inst_40260 = (state_40280[(8)]);
var inst_40264 = (function (){var cs = inst_40250;
var vec__40255 = inst_40259;
var v = inst_40260;
var c = inst_40261;
return ((function (cs,vec__40255,v,c,inst_40250,inst_40261,inst_40259,inst_40260,state_val_40281,c__38887__auto___40302,out){
return (function (p1__40246_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40246_SHARP_);
});
;})(cs,vec__40255,v,c,inst_40250,inst_40261,inst_40259,inst_40260,state_val_40281,c__38887__auto___40302,out))
})();
var inst_40265 = cljs.core.filterv(inst_40264,inst_40250);
var inst_40250__$1 = inst_40265;
var state_40280__$1 = (function (){var statearr_40295 = state_40280;
(statearr_40295[(10)] = inst_40250__$1);

return statearr_40295;
})();
var statearr_40296_40312 = state_40280__$1;
(statearr_40296_40312[(2)] = null);

(statearr_40296_40312[(1)] = (2));


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
});})(c__38887__auto___40302,out))
;
return ((function (switch__38780__auto__,c__38887__auto___40302,out){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40297[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40297[(1)] = (1));

return statearr_40297;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40280){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40280);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40298){if((e40298 instanceof Object)){
var ex__38784__auto__ = e40298;
var statearr_40299_40313 = state_40280;
(statearr_40299_40313[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40280);

return cljs.core.cst$kw$recur;
} else {
throw e40298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40314 = state_40280;
state_40280 = G__40314;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40302,out))
})();
var state__38889__auto__ = (function (){var statearr_40300 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40300[(6)] = c__38887__auto___40302);

return statearr_40300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40302,out))
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
var G__40316 = arguments.length;
switch (G__40316) {
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
var c__38887__auto___40361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40361,out){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40361,out){
return (function (state_40340){
var state_val_40341 = (state_40340[(1)]);
if((state_val_40341 === (7))){
var inst_40322 = (state_40340[(7)]);
var inst_40322__$1 = (state_40340[(2)]);
var inst_40323 = (inst_40322__$1 == null);
var inst_40324 = cljs.core.not(inst_40323);
var state_40340__$1 = (function (){var statearr_40342 = state_40340;
(statearr_40342[(7)] = inst_40322__$1);

return statearr_40342;
})();
if(inst_40324){
var statearr_40343_40362 = state_40340__$1;
(statearr_40343_40362[(1)] = (8));

} else {
var statearr_40344_40363 = state_40340__$1;
(statearr_40344_40363[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (1))){
var inst_40317 = (0);
var state_40340__$1 = (function (){var statearr_40345 = state_40340;
(statearr_40345[(8)] = inst_40317);

return statearr_40345;
})();
var statearr_40346_40364 = state_40340__$1;
(statearr_40346_40364[(2)] = null);

(statearr_40346_40364[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (4))){
var state_40340__$1 = state_40340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40340__$1,(7),ch);
} else {
if((state_val_40341 === (6))){
var inst_40335 = (state_40340[(2)]);
var state_40340__$1 = state_40340;
var statearr_40347_40365 = state_40340__$1;
(statearr_40347_40365[(2)] = inst_40335);

(statearr_40347_40365[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (3))){
var inst_40337 = (state_40340[(2)]);
var inst_40338 = cljs.core.async.close_BANG_(out);
var state_40340__$1 = (function (){var statearr_40348 = state_40340;
(statearr_40348[(9)] = inst_40337);

return statearr_40348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40340__$1,inst_40338);
} else {
if((state_val_40341 === (2))){
var inst_40317 = (state_40340[(8)]);
var inst_40319 = (inst_40317 < n);
var state_40340__$1 = state_40340;
if(cljs.core.truth_(inst_40319)){
var statearr_40349_40366 = state_40340__$1;
(statearr_40349_40366[(1)] = (4));

} else {
var statearr_40350_40367 = state_40340__$1;
(statearr_40350_40367[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (11))){
var inst_40317 = (state_40340[(8)]);
var inst_40327 = (state_40340[(2)]);
var inst_40328 = (inst_40317 + (1));
var inst_40317__$1 = inst_40328;
var state_40340__$1 = (function (){var statearr_40351 = state_40340;
(statearr_40351[(8)] = inst_40317__$1);

(statearr_40351[(10)] = inst_40327);

return statearr_40351;
})();
var statearr_40352_40368 = state_40340__$1;
(statearr_40352_40368[(2)] = null);

(statearr_40352_40368[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (9))){
var state_40340__$1 = state_40340;
var statearr_40353_40369 = state_40340__$1;
(statearr_40353_40369[(2)] = null);

(statearr_40353_40369[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (5))){
var state_40340__$1 = state_40340;
var statearr_40354_40370 = state_40340__$1;
(statearr_40354_40370[(2)] = null);

(statearr_40354_40370[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (10))){
var inst_40332 = (state_40340[(2)]);
var state_40340__$1 = state_40340;
var statearr_40355_40371 = state_40340__$1;
(statearr_40355_40371[(2)] = inst_40332);

(statearr_40355_40371[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40341 === (8))){
var inst_40322 = (state_40340[(7)]);
var state_40340__$1 = state_40340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40340__$1,(11),out,inst_40322);
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
});})(c__38887__auto___40361,out))
;
return ((function (switch__38780__auto__,c__38887__auto___40361,out){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40356[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40356[(1)] = (1));

return statearr_40356;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40340){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40340);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40357){if((e40357 instanceof Object)){
var ex__38784__auto__ = e40357;
var statearr_40358_40372 = state_40340;
(statearr_40358_40372[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40340);

return cljs.core.cst$kw$recur;
} else {
throw e40357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40373 = state_40340;
state_40340 = G__40373;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40361,out))
})();
var state__38889__auto__ = (function (){var statearr_40359 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40359[(6)] = c__38887__auto___40361);

return statearr_40359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40361,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40375 = (function (f,ch,meta40376){
this.f = f;
this.ch = ch;
this.meta40376 = meta40376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40377,meta40376__$1){
var self__ = this;
var _40377__$1 = this;
return (new cljs.core.async.t_cljs$core$async40375(self__.f,self__.ch,meta40376__$1));
});

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40377){
var self__ = this;
var _40377__$1 = this;
return self__.meta40376;
});

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40378 = (function (f,ch,meta40376,_,fn1,meta40379){
this.f = f;
this.ch = ch;
this.meta40376 = meta40376;
this._ = _;
this.fn1 = fn1;
this.meta40379 = meta40379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40380,meta40379__$1){
var self__ = this;
var _40380__$1 = this;
return (new cljs.core.async.t_cljs$core$async40378(self__.f,self__.ch,self__.meta40376,self__._,self__.fn1,meta40379__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40380){
var self__ = this;
var _40380__$1 = this;
return self__.meta40379;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40378.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40374_SHARP_){
var G__40381 = (((p1__40374_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40374_SHARP_) : self__.f.call(null,p1__40374_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40381) : f1.call(null,G__40381));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40378.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40376,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async40375], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta40379], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40378";

cljs.core.async.t_cljs$core$async40378.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40378");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40378.
 */
cljs.core.async.__GT_t_cljs$core$async40378 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40378(f__$1,ch__$1,meta40376__$1,___$2,fn1__$1,meta40379){
return (new cljs.core.async.t_cljs$core$async40378(f__$1,ch__$1,meta40376__$1,___$2,fn1__$1,meta40379));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40378(self__.f,self__.ch,self__.meta40376,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40382 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40382) : self__.f.call(null,G__40382));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40376], null);
});

cljs.core.async.t_cljs$core$async40375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40375";

cljs.core.async.t_cljs$core$async40375.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40375");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40375.
 */
cljs.core.async.__GT_t_cljs$core$async40375 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40375(f__$1,ch__$1,meta40376){
return (new cljs.core.async.t_cljs$core$async40375(f__$1,ch__$1,meta40376));
});

}

return (new cljs.core.async.t_cljs$core$async40375(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40383 = (function (f,ch,meta40384){
this.f = f;
this.ch = ch;
this.meta40384 = meta40384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40385,meta40384__$1){
var self__ = this;
var _40385__$1 = this;
return (new cljs.core.async.t_cljs$core$async40383(self__.f,self__.ch,meta40384__$1));
});

cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40385){
var self__ = this;
var _40385__$1 = this;
return self__.meta40384;
});

cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40383.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async40383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40384], null);
});

cljs.core.async.t_cljs$core$async40383.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40383";

cljs.core.async.t_cljs$core$async40383.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40383");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40383.
 */
cljs.core.async.__GT_t_cljs$core$async40383 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40383(f__$1,ch__$1,meta40384){
return (new cljs.core.async.t_cljs$core$async40383(f__$1,ch__$1,meta40384));
});

}

return (new cljs.core.async.t_cljs$core$async40383(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40386 = (function (p,ch,meta40387){
this.p = p;
this.ch = ch;
this.meta40387 = meta40387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40388,meta40387__$1){
var self__ = this;
var _40388__$1 = this;
return (new cljs.core.async.t_cljs$core$async40386(self__.p,self__.ch,meta40387__$1));
});

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40388){
var self__ = this;
var _40388__$1 = this;
return self__.meta40387;
});

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta40387], null);
});

cljs.core.async.t_cljs$core$async40386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40386";

cljs.core.async.t_cljs$core$async40386.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40386");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40386.
 */
cljs.core.async.__GT_t_cljs$core$async40386 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40386(p__$1,ch__$1,meta40387){
return (new cljs.core.async.t_cljs$core$async40386(p__$1,ch__$1,meta40387));
});

}

return (new cljs.core.async.t_cljs$core$async40386(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40390 = arguments.length;
switch (G__40390) {
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
var c__38887__auto___40430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40430,out){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40430,out){
return (function (state_40411){
var state_val_40412 = (state_40411[(1)]);
if((state_val_40412 === (7))){
var inst_40407 = (state_40411[(2)]);
var state_40411__$1 = state_40411;
var statearr_40413_40431 = state_40411__$1;
(statearr_40413_40431[(2)] = inst_40407);

(statearr_40413_40431[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (1))){
var state_40411__$1 = state_40411;
var statearr_40414_40432 = state_40411__$1;
(statearr_40414_40432[(2)] = null);

(statearr_40414_40432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (4))){
var inst_40393 = (state_40411[(7)]);
var inst_40393__$1 = (state_40411[(2)]);
var inst_40394 = (inst_40393__$1 == null);
var state_40411__$1 = (function (){var statearr_40415 = state_40411;
(statearr_40415[(7)] = inst_40393__$1);

return statearr_40415;
})();
if(cljs.core.truth_(inst_40394)){
var statearr_40416_40433 = state_40411__$1;
(statearr_40416_40433[(1)] = (5));

} else {
var statearr_40417_40434 = state_40411__$1;
(statearr_40417_40434[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (6))){
var inst_40393 = (state_40411[(7)]);
var inst_40398 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40393) : p.call(null,inst_40393));
var state_40411__$1 = state_40411;
if(cljs.core.truth_(inst_40398)){
var statearr_40418_40435 = state_40411__$1;
(statearr_40418_40435[(1)] = (8));

} else {
var statearr_40419_40436 = state_40411__$1;
(statearr_40419_40436[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (3))){
var inst_40409 = (state_40411[(2)]);
var state_40411__$1 = state_40411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40411__$1,inst_40409);
} else {
if((state_val_40412 === (2))){
var state_40411__$1 = state_40411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40411__$1,(4),ch);
} else {
if((state_val_40412 === (11))){
var inst_40401 = (state_40411[(2)]);
var state_40411__$1 = state_40411;
var statearr_40420_40437 = state_40411__$1;
(statearr_40420_40437[(2)] = inst_40401);

(statearr_40420_40437[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (9))){
var state_40411__$1 = state_40411;
var statearr_40421_40438 = state_40411__$1;
(statearr_40421_40438[(2)] = null);

(statearr_40421_40438[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (5))){
var inst_40396 = cljs.core.async.close_BANG_(out);
var state_40411__$1 = state_40411;
var statearr_40422_40439 = state_40411__$1;
(statearr_40422_40439[(2)] = inst_40396);

(statearr_40422_40439[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (10))){
var inst_40404 = (state_40411[(2)]);
var state_40411__$1 = (function (){var statearr_40423 = state_40411;
(statearr_40423[(8)] = inst_40404);

return statearr_40423;
})();
var statearr_40424_40440 = state_40411__$1;
(statearr_40424_40440[(2)] = null);

(statearr_40424_40440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40412 === (8))){
var inst_40393 = (state_40411[(7)]);
var state_40411__$1 = state_40411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40411__$1,(11),out,inst_40393);
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
});})(c__38887__auto___40430,out))
;
return ((function (switch__38780__auto__,c__38887__auto___40430,out){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40425 = [null,null,null,null,null,null,null,null,null];
(statearr_40425[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40425[(1)] = (1));

return statearr_40425;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40411){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40411);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40426){if((e40426 instanceof Object)){
var ex__38784__auto__ = e40426;
var statearr_40427_40441 = state_40411;
(statearr_40427_40441[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40411);

return cljs.core.cst$kw$recur;
} else {
throw e40426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40442 = state_40411;
state_40411 = G__40442;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40430,out))
})();
var state__38889__auto__ = (function (){var statearr_40428 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40428[(6)] = c__38887__auto___40430);

return statearr_40428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40430,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40444 = arguments.length;
switch (G__40444) {
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
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__){
return (function (state_40507){
var state_val_40508 = (state_40507[(1)]);
if((state_val_40508 === (7))){
var inst_40503 = (state_40507[(2)]);
var state_40507__$1 = state_40507;
var statearr_40509_40547 = state_40507__$1;
(statearr_40509_40547[(2)] = inst_40503);

(statearr_40509_40547[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (20))){
var inst_40473 = (state_40507[(7)]);
var inst_40484 = (state_40507[(2)]);
var inst_40485 = cljs.core.next(inst_40473);
var inst_40459 = inst_40485;
var inst_40460 = null;
var inst_40461 = (0);
var inst_40462 = (0);
var state_40507__$1 = (function (){var statearr_40510 = state_40507;
(statearr_40510[(8)] = inst_40461);

(statearr_40510[(9)] = inst_40462);

(statearr_40510[(10)] = inst_40484);

(statearr_40510[(11)] = inst_40459);

(statearr_40510[(12)] = inst_40460);

return statearr_40510;
})();
var statearr_40511_40548 = state_40507__$1;
(statearr_40511_40548[(2)] = null);

(statearr_40511_40548[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (1))){
var state_40507__$1 = state_40507;
var statearr_40512_40549 = state_40507__$1;
(statearr_40512_40549[(2)] = null);

(statearr_40512_40549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (4))){
var inst_40448 = (state_40507[(13)]);
var inst_40448__$1 = (state_40507[(2)]);
var inst_40449 = (inst_40448__$1 == null);
var state_40507__$1 = (function (){var statearr_40513 = state_40507;
(statearr_40513[(13)] = inst_40448__$1);

return statearr_40513;
})();
if(cljs.core.truth_(inst_40449)){
var statearr_40514_40550 = state_40507__$1;
(statearr_40514_40550[(1)] = (5));

} else {
var statearr_40515_40551 = state_40507__$1;
(statearr_40515_40551[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (15))){
var state_40507__$1 = state_40507;
var statearr_40519_40552 = state_40507__$1;
(statearr_40519_40552[(2)] = null);

(statearr_40519_40552[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (21))){
var state_40507__$1 = state_40507;
var statearr_40520_40553 = state_40507__$1;
(statearr_40520_40553[(2)] = null);

(statearr_40520_40553[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (13))){
var inst_40461 = (state_40507[(8)]);
var inst_40462 = (state_40507[(9)]);
var inst_40459 = (state_40507[(11)]);
var inst_40460 = (state_40507[(12)]);
var inst_40469 = (state_40507[(2)]);
var inst_40470 = (inst_40462 + (1));
var tmp40516 = inst_40461;
var tmp40517 = inst_40459;
var tmp40518 = inst_40460;
var inst_40459__$1 = tmp40517;
var inst_40460__$1 = tmp40518;
var inst_40461__$1 = tmp40516;
var inst_40462__$1 = inst_40470;
var state_40507__$1 = (function (){var statearr_40521 = state_40507;
(statearr_40521[(8)] = inst_40461__$1);

(statearr_40521[(9)] = inst_40462__$1);

(statearr_40521[(11)] = inst_40459__$1);

(statearr_40521[(12)] = inst_40460__$1);

(statearr_40521[(14)] = inst_40469);

return statearr_40521;
})();
var statearr_40522_40554 = state_40507__$1;
(statearr_40522_40554[(2)] = null);

(statearr_40522_40554[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (22))){
var state_40507__$1 = state_40507;
var statearr_40523_40555 = state_40507__$1;
(statearr_40523_40555[(2)] = null);

(statearr_40523_40555[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (6))){
var inst_40448 = (state_40507[(13)]);
var inst_40457 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40448) : f.call(null,inst_40448));
var inst_40458 = cljs.core.seq(inst_40457);
var inst_40459 = inst_40458;
var inst_40460 = null;
var inst_40461 = (0);
var inst_40462 = (0);
var state_40507__$1 = (function (){var statearr_40524 = state_40507;
(statearr_40524[(8)] = inst_40461);

(statearr_40524[(9)] = inst_40462);

(statearr_40524[(11)] = inst_40459);

(statearr_40524[(12)] = inst_40460);

return statearr_40524;
})();
var statearr_40525_40556 = state_40507__$1;
(statearr_40525_40556[(2)] = null);

(statearr_40525_40556[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (17))){
var inst_40473 = (state_40507[(7)]);
var inst_40477 = cljs.core.chunk_first(inst_40473);
var inst_40478 = cljs.core.chunk_rest(inst_40473);
var inst_40479 = cljs.core.count(inst_40477);
var inst_40459 = inst_40478;
var inst_40460 = inst_40477;
var inst_40461 = inst_40479;
var inst_40462 = (0);
var state_40507__$1 = (function (){var statearr_40526 = state_40507;
(statearr_40526[(8)] = inst_40461);

(statearr_40526[(9)] = inst_40462);

(statearr_40526[(11)] = inst_40459);

(statearr_40526[(12)] = inst_40460);

return statearr_40526;
})();
var statearr_40527_40557 = state_40507__$1;
(statearr_40527_40557[(2)] = null);

(statearr_40527_40557[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (3))){
var inst_40505 = (state_40507[(2)]);
var state_40507__$1 = state_40507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40507__$1,inst_40505);
} else {
if((state_val_40508 === (12))){
var inst_40493 = (state_40507[(2)]);
var state_40507__$1 = state_40507;
var statearr_40528_40558 = state_40507__$1;
(statearr_40528_40558[(2)] = inst_40493);

(statearr_40528_40558[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (2))){
var state_40507__$1 = state_40507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40507__$1,(4),in$);
} else {
if((state_val_40508 === (23))){
var inst_40501 = (state_40507[(2)]);
var state_40507__$1 = state_40507;
var statearr_40529_40559 = state_40507__$1;
(statearr_40529_40559[(2)] = inst_40501);

(statearr_40529_40559[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (19))){
var inst_40488 = (state_40507[(2)]);
var state_40507__$1 = state_40507;
var statearr_40530_40560 = state_40507__$1;
(statearr_40530_40560[(2)] = inst_40488);

(statearr_40530_40560[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (11))){
var inst_40473 = (state_40507[(7)]);
var inst_40459 = (state_40507[(11)]);
var inst_40473__$1 = cljs.core.seq(inst_40459);
var state_40507__$1 = (function (){var statearr_40531 = state_40507;
(statearr_40531[(7)] = inst_40473__$1);

return statearr_40531;
})();
if(inst_40473__$1){
var statearr_40532_40561 = state_40507__$1;
(statearr_40532_40561[(1)] = (14));

} else {
var statearr_40533_40562 = state_40507__$1;
(statearr_40533_40562[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (9))){
var inst_40495 = (state_40507[(2)]);
var inst_40496 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40507__$1 = (function (){var statearr_40534 = state_40507;
(statearr_40534[(15)] = inst_40495);

return statearr_40534;
})();
if(cljs.core.truth_(inst_40496)){
var statearr_40535_40563 = state_40507__$1;
(statearr_40535_40563[(1)] = (21));

} else {
var statearr_40536_40564 = state_40507__$1;
(statearr_40536_40564[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (5))){
var inst_40451 = cljs.core.async.close_BANG_(out);
var state_40507__$1 = state_40507;
var statearr_40537_40565 = state_40507__$1;
(statearr_40537_40565[(2)] = inst_40451);

(statearr_40537_40565[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (14))){
var inst_40473 = (state_40507[(7)]);
var inst_40475 = cljs.core.chunked_seq_QMARK_(inst_40473);
var state_40507__$1 = state_40507;
if(inst_40475){
var statearr_40538_40566 = state_40507__$1;
(statearr_40538_40566[(1)] = (17));

} else {
var statearr_40539_40567 = state_40507__$1;
(statearr_40539_40567[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (16))){
var inst_40491 = (state_40507[(2)]);
var state_40507__$1 = state_40507;
var statearr_40540_40568 = state_40507__$1;
(statearr_40540_40568[(2)] = inst_40491);

(statearr_40540_40568[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40508 === (10))){
var inst_40462 = (state_40507[(9)]);
var inst_40460 = (state_40507[(12)]);
var inst_40467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40460,inst_40462);
var state_40507__$1 = state_40507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40507__$1,(13),out,inst_40467);
} else {
if((state_val_40508 === (18))){
var inst_40473 = (state_40507[(7)]);
var inst_40482 = cljs.core.first(inst_40473);
var state_40507__$1 = state_40507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40507__$1,(20),out,inst_40482);
} else {
if((state_val_40508 === (8))){
var inst_40461 = (state_40507[(8)]);
var inst_40462 = (state_40507[(9)]);
var inst_40464 = (inst_40462 < inst_40461);
var inst_40465 = inst_40464;
var state_40507__$1 = state_40507;
if(cljs.core.truth_(inst_40465)){
var statearr_40541_40569 = state_40507__$1;
(statearr_40541_40569[(1)] = (10));

} else {
var statearr_40542_40570 = state_40507__$1;
(statearr_40542_40570[(1)] = (11));

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
});})(c__38887__auto__))
;
return ((function (switch__38780__auto__,c__38887__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38781__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38781__auto____0 = (function (){
var statearr_40543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40543[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38781__auto__);

(statearr_40543[(1)] = (1));

return statearr_40543;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38781__auto____1 = (function (state_40507){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40507);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40544){if((e40544 instanceof Object)){
var ex__38784__auto__ = e40544;
var statearr_40545_40571 = state_40507;
(statearr_40545_40571[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40507);

return cljs.core.cst$kw$recur;
} else {
throw e40544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40572 = state_40507;
state_40507 = G__40572;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38781__auto__ = function(state_40507){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38781__auto____1.call(this,state_40507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38781__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38781__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__))
})();
var state__38889__auto__ = (function (){var statearr_40546 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40546[(6)] = c__38887__auto__);

return statearr_40546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__))
);

return c__38887__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40574 = arguments.length;
switch (G__40574) {
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
var G__40577 = arguments.length;
switch (G__40577) {
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
var G__40580 = arguments.length;
switch (G__40580) {
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
var c__38887__auto___40627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40627,out){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40627,out){
return (function (state_40604){
var state_val_40605 = (state_40604[(1)]);
if((state_val_40605 === (7))){
var inst_40599 = (state_40604[(2)]);
var state_40604__$1 = state_40604;
var statearr_40606_40628 = state_40604__$1;
(statearr_40606_40628[(2)] = inst_40599);

(statearr_40606_40628[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40605 === (1))){
var inst_40581 = null;
var state_40604__$1 = (function (){var statearr_40607 = state_40604;
(statearr_40607[(7)] = inst_40581);

return statearr_40607;
})();
var statearr_40608_40629 = state_40604__$1;
(statearr_40608_40629[(2)] = null);

(statearr_40608_40629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40605 === (4))){
var inst_40584 = (state_40604[(8)]);
var inst_40584__$1 = (state_40604[(2)]);
var inst_40585 = (inst_40584__$1 == null);
var inst_40586 = cljs.core.not(inst_40585);
var state_40604__$1 = (function (){var statearr_40609 = state_40604;
(statearr_40609[(8)] = inst_40584__$1);

return statearr_40609;
})();
if(inst_40586){
var statearr_40610_40630 = state_40604__$1;
(statearr_40610_40630[(1)] = (5));

} else {
var statearr_40611_40631 = state_40604__$1;
(statearr_40611_40631[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40605 === (6))){
var state_40604__$1 = state_40604;
var statearr_40612_40632 = state_40604__$1;
(statearr_40612_40632[(2)] = null);

(statearr_40612_40632[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40605 === (3))){
var inst_40601 = (state_40604[(2)]);
var inst_40602 = cljs.core.async.close_BANG_(out);
var state_40604__$1 = (function (){var statearr_40613 = state_40604;
(statearr_40613[(9)] = inst_40601);

return statearr_40613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40604__$1,inst_40602);
} else {
if((state_val_40605 === (2))){
var state_40604__$1 = state_40604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40604__$1,(4),ch);
} else {
if((state_val_40605 === (11))){
var inst_40584 = (state_40604[(8)]);
var inst_40593 = (state_40604[(2)]);
var inst_40581 = inst_40584;
var state_40604__$1 = (function (){var statearr_40614 = state_40604;
(statearr_40614[(7)] = inst_40581);

(statearr_40614[(10)] = inst_40593);

return statearr_40614;
})();
var statearr_40615_40633 = state_40604__$1;
(statearr_40615_40633[(2)] = null);

(statearr_40615_40633[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40605 === (9))){
var inst_40584 = (state_40604[(8)]);
var state_40604__$1 = state_40604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40604__$1,(11),out,inst_40584);
} else {
if((state_val_40605 === (5))){
var inst_40581 = (state_40604[(7)]);
var inst_40584 = (state_40604[(8)]);
var inst_40588 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40584,inst_40581);
var state_40604__$1 = state_40604;
if(inst_40588){
var statearr_40617_40634 = state_40604__$1;
(statearr_40617_40634[(1)] = (8));

} else {
var statearr_40618_40635 = state_40604__$1;
(statearr_40618_40635[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40605 === (10))){
var inst_40596 = (state_40604[(2)]);
var state_40604__$1 = state_40604;
var statearr_40619_40636 = state_40604__$1;
(statearr_40619_40636[(2)] = inst_40596);

(statearr_40619_40636[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40605 === (8))){
var inst_40581 = (state_40604[(7)]);
var tmp40616 = inst_40581;
var inst_40581__$1 = tmp40616;
var state_40604__$1 = (function (){var statearr_40620 = state_40604;
(statearr_40620[(7)] = inst_40581__$1);

return statearr_40620;
})();
var statearr_40621_40637 = state_40604__$1;
(statearr_40621_40637[(2)] = null);

(statearr_40621_40637[(1)] = (2));


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
});})(c__38887__auto___40627,out))
;
return ((function (switch__38780__auto__,c__38887__auto___40627,out){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40622[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40622[(1)] = (1));

return statearr_40622;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40604){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40604);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40623){if((e40623 instanceof Object)){
var ex__38784__auto__ = e40623;
var statearr_40624_40638 = state_40604;
(statearr_40624_40638[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40604);

return cljs.core.cst$kw$recur;
} else {
throw e40623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40639 = state_40604;
state_40604 = G__40639;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40627,out))
})();
var state__38889__auto__ = (function (){var statearr_40625 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40625[(6)] = c__38887__auto___40627);

return statearr_40625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40627,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40641 = arguments.length;
switch (G__40641) {
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
var c__38887__auto___40707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40707,out){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40707,out){
return (function (state_40679){
var state_val_40680 = (state_40679[(1)]);
if((state_val_40680 === (7))){
var inst_40675 = (state_40679[(2)]);
var state_40679__$1 = state_40679;
var statearr_40681_40708 = state_40679__$1;
(statearr_40681_40708[(2)] = inst_40675);

(statearr_40681_40708[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (1))){
var inst_40642 = (new Array(n));
var inst_40643 = inst_40642;
var inst_40644 = (0);
var state_40679__$1 = (function (){var statearr_40682 = state_40679;
(statearr_40682[(7)] = inst_40644);

(statearr_40682[(8)] = inst_40643);

return statearr_40682;
})();
var statearr_40683_40709 = state_40679__$1;
(statearr_40683_40709[(2)] = null);

(statearr_40683_40709[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (4))){
var inst_40647 = (state_40679[(9)]);
var inst_40647__$1 = (state_40679[(2)]);
var inst_40648 = (inst_40647__$1 == null);
var inst_40649 = cljs.core.not(inst_40648);
var state_40679__$1 = (function (){var statearr_40684 = state_40679;
(statearr_40684[(9)] = inst_40647__$1);

return statearr_40684;
})();
if(inst_40649){
var statearr_40685_40710 = state_40679__$1;
(statearr_40685_40710[(1)] = (5));

} else {
var statearr_40686_40711 = state_40679__$1;
(statearr_40686_40711[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (15))){
var inst_40669 = (state_40679[(2)]);
var state_40679__$1 = state_40679;
var statearr_40687_40712 = state_40679__$1;
(statearr_40687_40712[(2)] = inst_40669);

(statearr_40687_40712[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (13))){
var state_40679__$1 = state_40679;
var statearr_40688_40713 = state_40679__$1;
(statearr_40688_40713[(2)] = null);

(statearr_40688_40713[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (6))){
var inst_40644 = (state_40679[(7)]);
var inst_40665 = (inst_40644 > (0));
var state_40679__$1 = state_40679;
if(cljs.core.truth_(inst_40665)){
var statearr_40689_40714 = state_40679__$1;
(statearr_40689_40714[(1)] = (12));

} else {
var statearr_40690_40715 = state_40679__$1;
(statearr_40690_40715[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (3))){
var inst_40677 = (state_40679[(2)]);
var state_40679__$1 = state_40679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40679__$1,inst_40677);
} else {
if((state_val_40680 === (12))){
var inst_40643 = (state_40679[(8)]);
var inst_40667 = cljs.core.vec(inst_40643);
var state_40679__$1 = state_40679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40679__$1,(15),out,inst_40667);
} else {
if((state_val_40680 === (2))){
var state_40679__$1 = state_40679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40679__$1,(4),ch);
} else {
if((state_val_40680 === (11))){
var inst_40659 = (state_40679[(2)]);
var inst_40660 = (new Array(n));
var inst_40643 = inst_40660;
var inst_40644 = (0);
var state_40679__$1 = (function (){var statearr_40691 = state_40679;
(statearr_40691[(7)] = inst_40644);

(statearr_40691[(8)] = inst_40643);

(statearr_40691[(10)] = inst_40659);

return statearr_40691;
})();
var statearr_40692_40716 = state_40679__$1;
(statearr_40692_40716[(2)] = null);

(statearr_40692_40716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (9))){
var inst_40643 = (state_40679[(8)]);
var inst_40657 = cljs.core.vec(inst_40643);
var state_40679__$1 = state_40679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40679__$1,(11),out,inst_40657);
} else {
if((state_val_40680 === (5))){
var inst_40644 = (state_40679[(7)]);
var inst_40643 = (state_40679[(8)]);
var inst_40647 = (state_40679[(9)]);
var inst_40652 = (state_40679[(11)]);
var inst_40651 = (inst_40643[inst_40644] = inst_40647);
var inst_40652__$1 = (inst_40644 + (1));
var inst_40653 = (inst_40652__$1 < n);
var state_40679__$1 = (function (){var statearr_40693 = state_40679;
(statearr_40693[(12)] = inst_40651);

(statearr_40693[(11)] = inst_40652__$1);

return statearr_40693;
})();
if(cljs.core.truth_(inst_40653)){
var statearr_40694_40717 = state_40679__$1;
(statearr_40694_40717[(1)] = (8));

} else {
var statearr_40695_40718 = state_40679__$1;
(statearr_40695_40718[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (14))){
var inst_40672 = (state_40679[(2)]);
var inst_40673 = cljs.core.async.close_BANG_(out);
var state_40679__$1 = (function (){var statearr_40697 = state_40679;
(statearr_40697[(13)] = inst_40672);

return statearr_40697;
})();
var statearr_40698_40719 = state_40679__$1;
(statearr_40698_40719[(2)] = inst_40673);

(statearr_40698_40719[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (10))){
var inst_40663 = (state_40679[(2)]);
var state_40679__$1 = state_40679;
var statearr_40699_40720 = state_40679__$1;
(statearr_40699_40720[(2)] = inst_40663);

(statearr_40699_40720[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40680 === (8))){
var inst_40643 = (state_40679[(8)]);
var inst_40652 = (state_40679[(11)]);
var tmp40696 = inst_40643;
var inst_40643__$1 = tmp40696;
var inst_40644 = inst_40652;
var state_40679__$1 = (function (){var statearr_40700 = state_40679;
(statearr_40700[(7)] = inst_40644);

(statearr_40700[(8)] = inst_40643__$1);

return statearr_40700;
})();
var statearr_40701_40721 = state_40679__$1;
(statearr_40701_40721[(2)] = null);

(statearr_40701_40721[(1)] = (2));


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
});})(c__38887__auto___40707,out))
;
return ((function (switch__38780__auto__,c__38887__auto___40707,out){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40702[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40702[(1)] = (1));

return statearr_40702;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40679){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40679);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40703){if((e40703 instanceof Object)){
var ex__38784__auto__ = e40703;
var statearr_40704_40722 = state_40679;
(statearr_40704_40722[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40679);

return cljs.core.cst$kw$recur;
} else {
throw e40703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40723 = state_40679;
state_40679 = G__40723;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40707,out))
})();
var state__38889__auto__ = (function (){var statearr_40705 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40705[(6)] = c__38887__auto___40707);

return statearr_40705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40707,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40725 = arguments.length;
switch (G__40725) {
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
var c__38887__auto___40795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___40795,out){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___40795,out){
return (function (state_40767){
var state_val_40768 = (state_40767[(1)]);
if((state_val_40768 === (7))){
var inst_40763 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40769_40796 = state_40767__$1;
(statearr_40769_40796[(2)] = inst_40763);

(statearr_40769_40796[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (1))){
var inst_40726 = [];
var inst_40727 = inst_40726;
var inst_40728 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_40767__$1 = (function (){var statearr_40770 = state_40767;
(statearr_40770[(7)] = inst_40728);

(statearr_40770[(8)] = inst_40727);

return statearr_40770;
})();
var statearr_40771_40797 = state_40767__$1;
(statearr_40771_40797[(2)] = null);

(statearr_40771_40797[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (4))){
var inst_40731 = (state_40767[(9)]);
var inst_40731__$1 = (state_40767[(2)]);
var inst_40732 = (inst_40731__$1 == null);
var inst_40733 = cljs.core.not(inst_40732);
var state_40767__$1 = (function (){var statearr_40772 = state_40767;
(statearr_40772[(9)] = inst_40731__$1);

return statearr_40772;
})();
if(inst_40733){
var statearr_40773_40798 = state_40767__$1;
(statearr_40773_40798[(1)] = (5));

} else {
var statearr_40774_40799 = state_40767__$1;
(statearr_40774_40799[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (15))){
var inst_40757 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40775_40800 = state_40767__$1;
(statearr_40775_40800[(2)] = inst_40757);

(statearr_40775_40800[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (13))){
var state_40767__$1 = state_40767;
var statearr_40776_40801 = state_40767__$1;
(statearr_40776_40801[(2)] = null);

(statearr_40776_40801[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (6))){
var inst_40727 = (state_40767[(8)]);
var inst_40752 = inst_40727.length;
var inst_40753 = (inst_40752 > (0));
var state_40767__$1 = state_40767;
if(cljs.core.truth_(inst_40753)){
var statearr_40777_40802 = state_40767__$1;
(statearr_40777_40802[(1)] = (12));

} else {
var statearr_40778_40803 = state_40767__$1;
(statearr_40778_40803[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (3))){
var inst_40765 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40767__$1,inst_40765);
} else {
if((state_val_40768 === (12))){
var inst_40727 = (state_40767[(8)]);
var inst_40755 = cljs.core.vec(inst_40727);
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40767__$1,(15),out,inst_40755);
} else {
if((state_val_40768 === (2))){
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40767__$1,(4),ch);
} else {
if((state_val_40768 === (11))){
var inst_40735 = (state_40767[(10)]);
var inst_40731 = (state_40767[(9)]);
var inst_40745 = (state_40767[(2)]);
var inst_40746 = [];
var inst_40747 = inst_40746.push(inst_40731);
var inst_40727 = inst_40746;
var inst_40728 = inst_40735;
var state_40767__$1 = (function (){var statearr_40779 = state_40767;
(statearr_40779[(11)] = inst_40745);

(statearr_40779[(12)] = inst_40747);

(statearr_40779[(7)] = inst_40728);

(statearr_40779[(8)] = inst_40727);

return statearr_40779;
})();
var statearr_40780_40804 = state_40767__$1;
(statearr_40780_40804[(2)] = null);

(statearr_40780_40804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (9))){
var inst_40727 = (state_40767[(8)]);
var inst_40743 = cljs.core.vec(inst_40727);
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40767__$1,(11),out,inst_40743);
} else {
if((state_val_40768 === (5))){
var inst_40735 = (state_40767[(10)]);
var inst_40728 = (state_40767[(7)]);
var inst_40731 = (state_40767[(9)]);
var inst_40735__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40731) : f.call(null,inst_40731));
var inst_40736 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40735__$1,inst_40728);
var inst_40737 = cljs.core.keyword_identical_QMARK_(inst_40728,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_40738 = ((inst_40736) || (inst_40737));
var state_40767__$1 = (function (){var statearr_40781 = state_40767;
(statearr_40781[(10)] = inst_40735__$1);

return statearr_40781;
})();
if(cljs.core.truth_(inst_40738)){
var statearr_40782_40805 = state_40767__$1;
(statearr_40782_40805[(1)] = (8));

} else {
var statearr_40783_40806 = state_40767__$1;
(statearr_40783_40806[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (14))){
var inst_40760 = (state_40767[(2)]);
var inst_40761 = cljs.core.async.close_BANG_(out);
var state_40767__$1 = (function (){var statearr_40785 = state_40767;
(statearr_40785[(13)] = inst_40760);

return statearr_40785;
})();
var statearr_40786_40807 = state_40767__$1;
(statearr_40786_40807[(2)] = inst_40761);

(statearr_40786_40807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (10))){
var inst_40750 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40787_40808 = state_40767__$1;
(statearr_40787_40808[(2)] = inst_40750);

(statearr_40787_40808[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40768 === (8))){
var inst_40735 = (state_40767[(10)]);
var inst_40731 = (state_40767[(9)]);
var inst_40727 = (state_40767[(8)]);
var inst_40740 = inst_40727.push(inst_40731);
var tmp40784 = inst_40727;
var inst_40727__$1 = tmp40784;
var inst_40728 = inst_40735;
var state_40767__$1 = (function (){var statearr_40788 = state_40767;
(statearr_40788[(7)] = inst_40728);

(statearr_40788[(14)] = inst_40740);

(statearr_40788[(8)] = inst_40727__$1);

return statearr_40788;
})();
var statearr_40789_40809 = state_40767__$1;
(statearr_40789_40809[(2)] = null);

(statearr_40789_40809[(1)] = (2));


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
});})(c__38887__auto___40795,out))
;
return ((function (switch__38780__auto__,c__38887__auto___40795,out){
return (function() {
var cljs$core$async$state_machine__38781__auto__ = null;
var cljs$core$async$state_machine__38781__auto____0 = (function (){
var statearr_40790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40790[(0)] = cljs$core$async$state_machine__38781__auto__);

(statearr_40790[(1)] = (1));

return statearr_40790;
});
var cljs$core$async$state_machine__38781__auto____1 = (function (state_40767){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_40767);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e40791){if((e40791 instanceof Object)){
var ex__38784__auto__ = e40791;
var statearr_40792_40810 = state_40767;
(statearr_40792_40810[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40767);

return cljs.core.cst$kw$recur;
} else {
throw e40791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__40811 = state_40767;
state_40767 = G__40811;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
cljs$core$async$state_machine__38781__auto__ = function(state_40767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38781__auto____1.call(this,state_40767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38781__auto____0;
cljs$core$async$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38781__auto____1;
return cljs$core$async$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___40795,out))
})();
var state__38889__auto__ = (function (){var statearr_40793 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_40793[(6)] = c__38887__auto___40795);

return statearr_40793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___40795,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

