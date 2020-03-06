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
var G__42620 = arguments.length;
switch (G__42620) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42621 = (function (f,blockable,meta42622){
this.f = f;
this.blockable = blockable;
this.meta42622 = meta42622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42623,meta42622__$1){
var self__ = this;
var _42623__$1 = this;
return (new cljs.core.async.t_cljs$core$async42621(self__.f,self__.blockable,meta42622__$1));
});

cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42623){
var self__ = this;
var _42623__$1 = this;
return self__.meta42622;
});

cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta42622], null);
});

cljs.core.async.t_cljs$core$async42621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42621";

cljs.core.async.t_cljs$core$async42621.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42621");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42621.
 */
cljs.core.async.__GT_t_cljs$core$async42621 = (function cljs$core$async$__GT_t_cljs$core$async42621(f__$1,blockable__$1,meta42622){
return (new cljs.core.async.t_cljs$core$async42621(f__$1,blockable__$1,meta42622));
});

}

return (new cljs.core.async.t_cljs$core$async42621(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42627 = arguments.length;
switch (G__42627) {
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
var G__42630 = arguments.length;
switch (G__42630) {
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
var G__42633 = arguments.length;
switch (G__42633) {
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
var val_42635 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42635) : fn1.call(null,val_42635));
} else {
cljs.core.async.impl.dispatch.run(((function (val_42635,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42635) : fn1.call(null,val_42635));
});})(val_42635,ret))
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
var G__42637 = arguments.length;
switch (G__42637) {
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
var n__4607__auto___42639 = n;
var x_42640 = (0);
while(true){
if((x_42640 < n__4607__auto___42639)){
(a[x_42640] = (0));

var G__42641 = (x_42640 + (1));
x_42640 = G__42641;
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

var G__42642 = (i + (1));
i = G__42642;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42643 = (function (flag,meta42644){
this.flag = flag;
this.meta42644 = meta42644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42645,meta42644__$1){
var self__ = this;
var _42645__$1 = this;
return (new cljs.core.async.t_cljs$core$async42643(self__.flag,meta42644__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42645){
var self__ = this;
var _42645__$1 = this;
return self__.meta42644;
});})(flag))
;

cljs.core.async.t_cljs$core$async42643.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42643.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42643.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta42644], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42643";

cljs.core.async.t_cljs$core$async42643.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42643");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42643.
 */
cljs.core.async.__GT_t_cljs$core$async42643 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42643(flag__$1,meta42644){
return (new cljs.core.async.t_cljs$core$async42643(flag__$1,meta42644));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42643(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42646 = (function (flag,cb,meta42647){
this.flag = flag;
this.cb = cb;
this.meta42647 = meta42647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42648,meta42647__$1){
var self__ = this;
var _42648__$1 = this;
return (new cljs.core.async.t_cljs$core$async42646(self__.flag,self__.cb,meta42647__$1));
});

cljs.core.async.t_cljs$core$async42646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42648){
var self__ = this;
var _42648__$1 = this;
return self__.meta42647;
});

cljs.core.async.t_cljs$core$async42646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async42646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta42647], null);
});

cljs.core.async.t_cljs$core$async42646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42646";

cljs.core.async.t_cljs$core$async42646.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42646");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42646.
 */
cljs.core.async.__GT_t_cljs$core$async42646 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42646(flag__$1,cb__$1,meta42647){
return (new cljs.core.async.t_cljs$core$async42646(flag__$1,cb__$1,meta42647));
});

}

return (new cljs.core.async.t_cljs$core$async42646(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42649_SHARP_){
var G__42651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42649_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42651) : fret.call(null,G__42651));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42650_SHARP_){
var G__42652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42650_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42652) : fret.call(null,G__42652));
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
var G__42653 = (i + (1));
i = G__42653;
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
var len__4730__auto___42659 = arguments.length;
var i__4731__auto___42660 = (0);
while(true){
if((i__4731__auto___42660 < len__4730__auto___42659)){
args__4736__auto__.push((arguments[i__4731__auto___42660]));

var G__42661 = (i__4731__auto___42660 + (1));
i__4731__auto___42660 = G__42661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42656){
var map__42657 = p__42656;
var map__42657__$1 = (((((!((map__42657 == null))))?(((((map__42657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42657):map__42657);
var opts = map__42657__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42654){
var G__42655 = cljs.core.first(seq42654);
var seq42654__$1 = cljs.core.next(seq42654);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42655,seq42654__$1);
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
var G__42663 = arguments.length;
switch (G__42663) {
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
var c__40692__auto___42709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___42709){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___42709){
return (function (state_42687){
var state_val_42688 = (state_42687[(1)]);
if((state_val_42688 === (7))){
var inst_42683 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42689_42710 = state_42687__$1;
(statearr_42689_42710[(2)] = inst_42683);

(statearr_42689_42710[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (1))){
var state_42687__$1 = state_42687;
var statearr_42690_42711 = state_42687__$1;
(statearr_42690_42711[(2)] = null);

(statearr_42690_42711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (4))){
var inst_42666 = (state_42687[(7)]);
var inst_42666__$1 = (state_42687[(2)]);
var inst_42667 = (inst_42666__$1 == null);
var state_42687__$1 = (function (){var statearr_42691 = state_42687;
(statearr_42691[(7)] = inst_42666__$1);

return statearr_42691;
})();
if(cljs.core.truth_(inst_42667)){
var statearr_42692_42712 = state_42687__$1;
(statearr_42692_42712[(1)] = (5));

} else {
var statearr_42693_42713 = state_42687__$1;
(statearr_42693_42713[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (13))){
var state_42687__$1 = state_42687;
var statearr_42694_42714 = state_42687__$1;
(statearr_42694_42714[(2)] = null);

(statearr_42694_42714[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (6))){
var inst_42666 = (state_42687[(7)]);
var state_42687__$1 = state_42687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42687__$1,(11),to,inst_42666);
} else {
if((state_val_42688 === (3))){
var inst_42685 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42687__$1,inst_42685);
} else {
if((state_val_42688 === (12))){
var state_42687__$1 = state_42687;
var statearr_42695_42715 = state_42687__$1;
(statearr_42695_42715[(2)] = null);

(statearr_42695_42715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (2))){
var state_42687__$1 = state_42687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42687__$1,(4),from);
} else {
if((state_val_42688 === (11))){
var inst_42676 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42676)){
var statearr_42696_42716 = state_42687__$1;
(statearr_42696_42716[(1)] = (12));

} else {
var statearr_42697_42717 = state_42687__$1;
(statearr_42697_42717[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (9))){
var state_42687__$1 = state_42687;
var statearr_42698_42718 = state_42687__$1;
(statearr_42698_42718[(2)] = null);

(statearr_42698_42718[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (5))){
var state_42687__$1 = state_42687;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42699_42719 = state_42687__$1;
(statearr_42699_42719[(1)] = (8));

} else {
var statearr_42700_42720 = state_42687__$1;
(statearr_42700_42720[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (14))){
var inst_42681 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42701_42721 = state_42687__$1;
(statearr_42701_42721[(2)] = inst_42681);

(statearr_42701_42721[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (10))){
var inst_42673 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42702_42722 = state_42687__$1;
(statearr_42702_42722[(2)] = inst_42673);

(statearr_42702_42722[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42688 === (8))){
var inst_42670 = cljs.core.async.close_BANG_(to);
var state_42687__$1 = state_42687;
var statearr_42703_42723 = state_42687__$1;
(statearr_42703_42723[(2)] = inst_42670);

(statearr_42703_42723[(1)] = (10));


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
});})(c__40692__auto___42709))
;
return ((function (switch__40501__auto__,c__40692__auto___42709){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_42704 = [null,null,null,null,null,null,null,null];
(statearr_42704[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_42704[(1)] = (1));

return statearr_42704;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_42687){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_42687);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e42705){if((e42705 instanceof Object)){
var ex__40505__auto__ = e42705;
var statearr_42706_42724 = state_42687;
(statearr_42706_42724[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42687);

return cljs.core.cst$kw$recur;
} else {
throw e42705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__42725 = state_42687;
state_42687 = G__42725;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_42687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_42687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___42709))
})();
var state__40694__auto__ = (function (){var statearr_42707 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_42707[(6)] = c__40692__auto___42709);

return statearr_42707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___42709))
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
return (function (p__42726){
var vec__42727 = p__42726;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42727,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42727,(1),null);
var job = vec__42727;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40692__auto___42898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___42898,res,vec__42727,v,p,job,jobs,results){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___42898,res,vec__42727,v,p,job,jobs,results){
return (function (state_42734){
var state_val_42735 = (state_42734[(1)]);
if((state_val_42735 === (1))){
var state_42734__$1 = state_42734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42734__$1,(2),res,v);
} else {
if((state_val_42735 === (2))){
var inst_42731 = (state_42734[(2)]);
var inst_42732 = cljs.core.async.close_BANG_(res);
var state_42734__$1 = (function (){var statearr_42736 = state_42734;
(statearr_42736[(7)] = inst_42731);

return statearr_42736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42734__$1,inst_42732);
} else {
return null;
}
}
});})(c__40692__auto___42898,res,vec__42727,v,p,job,jobs,results))
;
return ((function (switch__40501__auto__,c__40692__auto___42898,res,vec__42727,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0 = (function (){
var statearr_42737 = [null,null,null,null,null,null,null,null];
(statearr_42737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__);

(statearr_42737[(1)] = (1));

return statearr_42737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1 = (function (state_42734){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_42734);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e42738){if((e42738 instanceof Object)){
var ex__40505__auto__ = e42738;
var statearr_42739_42899 = state_42734;
(statearr_42739_42899[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42734);

return cljs.core.cst$kw$recur;
} else {
throw e42738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__42900 = state_42734;
state_42734 = G__42900;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = function(state_42734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1.call(this,state_42734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___42898,res,vec__42727,v,p,job,jobs,results))
})();
var state__40694__auto__ = (function (){var statearr_42740 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_42740[(6)] = c__40692__auto___42898);

return statearr_42740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___42898,res,vec__42727,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42741){
var vec__42742 = p__42741;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42742,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42742,(1),null);
var job = vec__42742;
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
var n__4607__auto___42901 = n;
var __42902 = (0);
while(true){
if((__42902 < n__4607__auto___42901)){
var G__42745_42903 = type;
var G__42745_42904__$1 = (((G__42745_42903 instanceof cljs.core.Keyword))?G__42745_42903.fqn:null);
switch (G__42745_42904__$1) {
case "compute":
var c__40692__auto___42906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42902,c__40692__auto___42906,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (__42902,c__40692__auto___42906,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async){
return (function (state_42758){
var state_val_42759 = (state_42758[(1)]);
if((state_val_42759 === (1))){
var state_42758__$1 = state_42758;
var statearr_42760_42907 = state_42758__$1;
(statearr_42760_42907[(2)] = null);

(statearr_42760_42907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42759 === (2))){
var state_42758__$1 = state_42758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42758__$1,(4),jobs);
} else {
if((state_val_42759 === (3))){
var inst_42756 = (state_42758[(2)]);
var state_42758__$1 = state_42758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42758__$1,inst_42756);
} else {
if((state_val_42759 === (4))){
var inst_42748 = (state_42758[(2)]);
var inst_42749 = process(inst_42748);
var state_42758__$1 = state_42758;
if(cljs.core.truth_(inst_42749)){
var statearr_42761_42908 = state_42758__$1;
(statearr_42761_42908[(1)] = (5));

} else {
var statearr_42762_42909 = state_42758__$1;
(statearr_42762_42909[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42759 === (5))){
var state_42758__$1 = state_42758;
var statearr_42763_42910 = state_42758__$1;
(statearr_42763_42910[(2)] = null);

(statearr_42763_42910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42759 === (6))){
var state_42758__$1 = state_42758;
var statearr_42764_42911 = state_42758__$1;
(statearr_42764_42911[(2)] = null);

(statearr_42764_42911[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42759 === (7))){
var inst_42754 = (state_42758[(2)]);
var state_42758__$1 = state_42758;
var statearr_42765_42912 = state_42758__$1;
(statearr_42765_42912[(2)] = inst_42754);

(statearr_42765_42912[(1)] = (3));


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
});})(__42902,c__40692__auto___42906,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async))
;
return ((function (__42902,switch__40501__auto__,c__40692__auto___42906,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0 = (function (){
var statearr_42766 = [null,null,null,null,null,null,null];
(statearr_42766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__);

(statearr_42766[(1)] = (1));

return statearr_42766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1 = (function (state_42758){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_42758);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e42767){if((e42767 instanceof Object)){
var ex__40505__auto__ = e42767;
var statearr_42768_42913 = state_42758;
(statearr_42768_42913[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42758);

return cljs.core.cst$kw$recur;
} else {
throw e42767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__42914 = state_42758;
state_42758 = G__42914;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = function(state_42758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1.call(this,state_42758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__;
})()
;})(__42902,switch__40501__auto__,c__40692__auto___42906,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async))
})();
var state__40694__auto__ = (function (){var statearr_42769 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_42769[(6)] = c__40692__auto___42906);

return statearr_42769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(__42902,c__40692__auto___42906,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async))
);


break;
case "async":
var c__40692__auto___42915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42902,c__40692__auto___42915,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (__42902,c__40692__auto___42915,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async){
return (function (state_42782){
var state_val_42783 = (state_42782[(1)]);
if((state_val_42783 === (1))){
var state_42782__$1 = state_42782;
var statearr_42784_42916 = state_42782__$1;
(statearr_42784_42916[(2)] = null);

(statearr_42784_42916[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42783 === (2))){
var state_42782__$1 = state_42782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42782__$1,(4),jobs);
} else {
if((state_val_42783 === (3))){
var inst_42780 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42782__$1,inst_42780);
} else {
if((state_val_42783 === (4))){
var inst_42772 = (state_42782[(2)]);
var inst_42773 = async(inst_42772);
var state_42782__$1 = state_42782;
if(cljs.core.truth_(inst_42773)){
var statearr_42785_42917 = state_42782__$1;
(statearr_42785_42917[(1)] = (5));

} else {
var statearr_42786_42918 = state_42782__$1;
(statearr_42786_42918[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42783 === (5))){
var state_42782__$1 = state_42782;
var statearr_42787_42919 = state_42782__$1;
(statearr_42787_42919[(2)] = null);

(statearr_42787_42919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42783 === (6))){
var state_42782__$1 = state_42782;
var statearr_42788_42920 = state_42782__$1;
(statearr_42788_42920[(2)] = null);

(statearr_42788_42920[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42783 === (7))){
var inst_42778 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
var statearr_42789_42921 = state_42782__$1;
(statearr_42789_42921[(2)] = inst_42778);

(statearr_42789_42921[(1)] = (3));


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
});})(__42902,c__40692__auto___42915,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async))
;
return ((function (__42902,switch__40501__auto__,c__40692__auto___42915,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0 = (function (){
var statearr_42790 = [null,null,null,null,null,null,null];
(statearr_42790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__);

(statearr_42790[(1)] = (1));

return statearr_42790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1 = (function (state_42782){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_42782);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e42791){if((e42791 instanceof Object)){
var ex__40505__auto__ = e42791;
var statearr_42792_42922 = state_42782;
(statearr_42792_42922[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42782);

return cljs.core.cst$kw$recur;
} else {
throw e42791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__42923 = state_42782;
state_42782 = G__42923;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = function(state_42782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1.call(this,state_42782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__;
})()
;})(__42902,switch__40501__auto__,c__40692__auto___42915,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async))
})();
var state__40694__auto__ = (function (){var statearr_42793 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_42793[(6)] = c__40692__auto___42915);

return statearr_42793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(__42902,c__40692__auto___42915,G__42745_42903,G__42745_42904__$1,n__4607__auto___42901,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42745_42904__$1)].join('')));

}

var G__42924 = (__42902 + (1));
__42902 = G__42924;
continue;
} else {
}
break;
}

var c__40692__auto___42925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___42925,jobs,results,process,async){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___42925,jobs,results,process,async){
return (function (state_42815){
var state_val_42816 = (state_42815[(1)]);
if((state_val_42816 === (7))){
var inst_42811 = (state_42815[(2)]);
var state_42815__$1 = state_42815;
var statearr_42817_42926 = state_42815__$1;
(statearr_42817_42926[(2)] = inst_42811);

(statearr_42817_42926[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42816 === (1))){
var state_42815__$1 = state_42815;
var statearr_42818_42927 = state_42815__$1;
(statearr_42818_42927[(2)] = null);

(statearr_42818_42927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42816 === (4))){
var inst_42796 = (state_42815[(7)]);
var inst_42796__$1 = (state_42815[(2)]);
var inst_42797 = (inst_42796__$1 == null);
var state_42815__$1 = (function (){var statearr_42819 = state_42815;
(statearr_42819[(7)] = inst_42796__$1);

return statearr_42819;
})();
if(cljs.core.truth_(inst_42797)){
var statearr_42820_42928 = state_42815__$1;
(statearr_42820_42928[(1)] = (5));

} else {
var statearr_42821_42929 = state_42815__$1;
(statearr_42821_42929[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42816 === (6))){
var inst_42801 = (state_42815[(8)]);
var inst_42796 = (state_42815[(7)]);
var inst_42801__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42803 = [inst_42796,inst_42801__$1];
var inst_42804 = (new cljs.core.PersistentVector(null,2,(5),inst_42802,inst_42803,null));
var state_42815__$1 = (function (){var statearr_42822 = state_42815;
(statearr_42822[(8)] = inst_42801__$1);

return statearr_42822;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42815__$1,(8),jobs,inst_42804);
} else {
if((state_val_42816 === (3))){
var inst_42813 = (state_42815[(2)]);
var state_42815__$1 = state_42815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42815__$1,inst_42813);
} else {
if((state_val_42816 === (2))){
var state_42815__$1 = state_42815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42815__$1,(4),from);
} else {
if((state_val_42816 === (9))){
var inst_42808 = (state_42815[(2)]);
var state_42815__$1 = (function (){var statearr_42823 = state_42815;
(statearr_42823[(9)] = inst_42808);

return statearr_42823;
})();
var statearr_42824_42930 = state_42815__$1;
(statearr_42824_42930[(2)] = null);

(statearr_42824_42930[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42816 === (5))){
var inst_42799 = cljs.core.async.close_BANG_(jobs);
var state_42815__$1 = state_42815;
var statearr_42825_42931 = state_42815__$1;
(statearr_42825_42931[(2)] = inst_42799);

(statearr_42825_42931[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42816 === (8))){
var inst_42801 = (state_42815[(8)]);
var inst_42806 = (state_42815[(2)]);
var state_42815__$1 = (function (){var statearr_42826 = state_42815;
(statearr_42826[(10)] = inst_42806);

return statearr_42826;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42815__$1,(9),results,inst_42801);
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
});})(c__40692__auto___42925,jobs,results,process,async))
;
return ((function (switch__40501__auto__,c__40692__auto___42925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0 = (function (){
var statearr_42827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__);

(statearr_42827[(1)] = (1));

return statearr_42827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1 = (function (state_42815){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_42815);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e42828){if((e42828 instanceof Object)){
var ex__40505__auto__ = e42828;
var statearr_42829_42932 = state_42815;
(statearr_42829_42932[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42815);

return cljs.core.cst$kw$recur;
} else {
throw e42828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__42933 = state_42815;
state_42815 = G__42933;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = function(state_42815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1.call(this,state_42815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___42925,jobs,results,process,async))
})();
var state__40694__auto__ = (function (){var statearr_42830 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_42830[(6)] = c__40692__auto___42925);

return statearr_42830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___42925,jobs,results,process,async))
);


var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__,jobs,results,process,async){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__,jobs,results,process,async){
return (function (state_42868){
var state_val_42869 = (state_42868[(1)]);
if((state_val_42869 === (7))){
var inst_42864 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
var statearr_42870_42934 = state_42868__$1;
(statearr_42870_42934[(2)] = inst_42864);

(statearr_42870_42934[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (20))){
var state_42868__$1 = state_42868;
var statearr_42871_42935 = state_42868__$1;
(statearr_42871_42935[(2)] = null);

(statearr_42871_42935[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (1))){
var state_42868__$1 = state_42868;
var statearr_42872_42936 = state_42868__$1;
(statearr_42872_42936[(2)] = null);

(statearr_42872_42936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (4))){
var inst_42833 = (state_42868[(7)]);
var inst_42833__$1 = (state_42868[(2)]);
var inst_42834 = (inst_42833__$1 == null);
var state_42868__$1 = (function (){var statearr_42873 = state_42868;
(statearr_42873[(7)] = inst_42833__$1);

return statearr_42873;
})();
if(cljs.core.truth_(inst_42834)){
var statearr_42874_42937 = state_42868__$1;
(statearr_42874_42937[(1)] = (5));

} else {
var statearr_42875_42938 = state_42868__$1;
(statearr_42875_42938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (15))){
var inst_42846 = (state_42868[(8)]);
var state_42868__$1 = state_42868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42868__$1,(18),to,inst_42846);
} else {
if((state_val_42869 === (21))){
var inst_42859 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
var statearr_42876_42939 = state_42868__$1;
(statearr_42876_42939[(2)] = inst_42859);

(statearr_42876_42939[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (13))){
var inst_42861 = (state_42868[(2)]);
var state_42868__$1 = (function (){var statearr_42877 = state_42868;
(statearr_42877[(9)] = inst_42861);

return statearr_42877;
})();
var statearr_42878_42940 = state_42868__$1;
(statearr_42878_42940[(2)] = null);

(statearr_42878_42940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (6))){
var inst_42833 = (state_42868[(7)]);
var state_42868__$1 = state_42868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42868__$1,(11),inst_42833);
} else {
if((state_val_42869 === (17))){
var inst_42854 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
if(cljs.core.truth_(inst_42854)){
var statearr_42879_42941 = state_42868__$1;
(statearr_42879_42941[(1)] = (19));

} else {
var statearr_42880_42942 = state_42868__$1;
(statearr_42880_42942[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (3))){
var inst_42866 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42868__$1,inst_42866);
} else {
if((state_val_42869 === (12))){
var inst_42843 = (state_42868[(10)]);
var state_42868__$1 = state_42868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42868__$1,(14),inst_42843);
} else {
if((state_val_42869 === (2))){
var state_42868__$1 = state_42868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42868__$1,(4),results);
} else {
if((state_val_42869 === (19))){
var state_42868__$1 = state_42868;
var statearr_42881_42943 = state_42868__$1;
(statearr_42881_42943[(2)] = null);

(statearr_42881_42943[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (11))){
var inst_42843 = (state_42868[(2)]);
var state_42868__$1 = (function (){var statearr_42882 = state_42868;
(statearr_42882[(10)] = inst_42843);

return statearr_42882;
})();
var statearr_42883_42944 = state_42868__$1;
(statearr_42883_42944[(2)] = null);

(statearr_42883_42944[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (9))){
var state_42868__$1 = state_42868;
var statearr_42884_42945 = state_42868__$1;
(statearr_42884_42945[(2)] = null);

(statearr_42884_42945[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (5))){
var state_42868__$1 = state_42868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42885_42946 = state_42868__$1;
(statearr_42885_42946[(1)] = (8));

} else {
var statearr_42886_42947 = state_42868__$1;
(statearr_42886_42947[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (14))){
var inst_42846 = (state_42868[(8)]);
var inst_42848 = (state_42868[(11)]);
var inst_42846__$1 = (state_42868[(2)]);
var inst_42847 = (inst_42846__$1 == null);
var inst_42848__$1 = cljs.core.not(inst_42847);
var state_42868__$1 = (function (){var statearr_42887 = state_42868;
(statearr_42887[(8)] = inst_42846__$1);

(statearr_42887[(11)] = inst_42848__$1);

return statearr_42887;
})();
if(inst_42848__$1){
var statearr_42888_42948 = state_42868__$1;
(statearr_42888_42948[(1)] = (15));

} else {
var statearr_42889_42949 = state_42868__$1;
(statearr_42889_42949[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (16))){
var inst_42848 = (state_42868[(11)]);
var state_42868__$1 = state_42868;
var statearr_42890_42950 = state_42868__$1;
(statearr_42890_42950[(2)] = inst_42848);

(statearr_42890_42950[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (10))){
var inst_42840 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
var statearr_42891_42951 = state_42868__$1;
(statearr_42891_42951[(2)] = inst_42840);

(statearr_42891_42951[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (18))){
var inst_42851 = (state_42868[(2)]);
var state_42868__$1 = state_42868;
var statearr_42892_42952 = state_42868__$1;
(statearr_42892_42952[(2)] = inst_42851);

(statearr_42892_42952[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42869 === (8))){
var inst_42837 = cljs.core.async.close_BANG_(to);
var state_42868__$1 = state_42868;
var statearr_42893_42953 = state_42868__$1;
(statearr_42893_42953[(2)] = inst_42837);

(statearr_42893_42953[(1)] = (10));


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
});})(c__40692__auto__,jobs,results,process,async))
;
return ((function (switch__40501__auto__,c__40692__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0 = (function (){
var statearr_42894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__);

(statearr_42894[(1)] = (1));

return statearr_42894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1 = (function (state_42868){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_42868);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e42895){if((e42895 instanceof Object)){
var ex__40505__auto__ = e42895;
var statearr_42896_42954 = state_42868;
(statearr_42896_42954[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42868);

return cljs.core.cst$kw$recur;
} else {
throw e42895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__42955 = state_42868;
state_42868 = G__42955;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__ = function(state_42868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1.call(this,state_42868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__,jobs,results,process,async))
})();
var state__40694__auto__ = (function (){var statearr_42897 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_42897[(6)] = c__40692__auto__);

return statearr_42897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__,jobs,results,process,async))
);

return c__40692__auto__;
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
var G__42957 = arguments.length;
switch (G__42957) {
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
var G__42960 = arguments.length;
switch (G__42960) {
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
var G__42963 = arguments.length;
switch (G__42963) {
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
var c__40692__auto___43012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___43012,tc,fc){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___43012,tc,fc){
return (function (state_42989){
var state_val_42990 = (state_42989[(1)]);
if((state_val_42990 === (7))){
var inst_42985 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
var statearr_42991_43013 = state_42989__$1;
(statearr_42991_43013[(2)] = inst_42985);

(statearr_42991_43013[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (1))){
var state_42989__$1 = state_42989;
var statearr_42992_43014 = state_42989__$1;
(statearr_42992_43014[(2)] = null);

(statearr_42992_43014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (4))){
var inst_42966 = (state_42989[(7)]);
var inst_42966__$1 = (state_42989[(2)]);
var inst_42967 = (inst_42966__$1 == null);
var state_42989__$1 = (function (){var statearr_42993 = state_42989;
(statearr_42993[(7)] = inst_42966__$1);

return statearr_42993;
})();
if(cljs.core.truth_(inst_42967)){
var statearr_42994_43015 = state_42989__$1;
(statearr_42994_43015[(1)] = (5));

} else {
var statearr_42995_43016 = state_42989__$1;
(statearr_42995_43016[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (13))){
var state_42989__$1 = state_42989;
var statearr_42996_43017 = state_42989__$1;
(statearr_42996_43017[(2)] = null);

(statearr_42996_43017[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (6))){
var inst_42966 = (state_42989[(7)]);
var inst_42972 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42966) : p.call(null,inst_42966));
var state_42989__$1 = state_42989;
if(cljs.core.truth_(inst_42972)){
var statearr_42997_43018 = state_42989__$1;
(statearr_42997_43018[(1)] = (9));

} else {
var statearr_42998_43019 = state_42989__$1;
(statearr_42998_43019[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (3))){
var inst_42987 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42989__$1,inst_42987);
} else {
if((state_val_42990 === (12))){
var state_42989__$1 = state_42989;
var statearr_42999_43020 = state_42989__$1;
(statearr_42999_43020[(2)] = null);

(statearr_42999_43020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (2))){
var state_42989__$1 = state_42989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42989__$1,(4),ch);
} else {
if((state_val_42990 === (11))){
var inst_42966 = (state_42989[(7)]);
var inst_42976 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42989__$1,(8),inst_42976,inst_42966);
} else {
if((state_val_42990 === (9))){
var state_42989__$1 = state_42989;
var statearr_43000_43021 = state_42989__$1;
(statearr_43000_43021[(2)] = tc);

(statearr_43000_43021[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (5))){
var inst_42969 = cljs.core.async.close_BANG_(tc);
var inst_42970 = cljs.core.async.close_BANG_(fc);
var state_42989__$1 = (function (){var statearr_43001 = state_42989;
(statearr_43001[(8)] = inst_42969);

return statearr_43001;
})();
var statearr_43002_43022 = state_42989__$1;
(statearr_43002_43022[(2)] = inst_42970);

(statearr_43002_43022[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (14))){
var inst_42983 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
var statearr_43003_43023 = state_42989__$1;
(statearr_43003_43023[(2)] = inst_42983);

(statearr_43003_43023[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (10))){
var state_42989__$1 = state_42989;
var statearr_43004_43024 = state_42989__$1;
(statearr_43004_43024[(2)] = fc);

(statearr_43004_43024[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42990 === (8))){
var inst_42978 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
if(cljs.core.truth_(inst_42978)){
var statearr_43005_43025 = state_42989__$1;
(statearr_43005_43025[(1)] = (12));

} else {
var statearr_43006_43026 = state_42989__$1;
(statearr_43006_43026[(1)] = (13));

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
});})(c__40692__auto___43012,tc,fc))
;
return ((function (switch__40501__auto__,c__40692__auto___43012,tc,fc){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_43007 = [null,null,null,null,null,null,null,null,null];
(statearr_43007[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_43007[(1)] = (1));

return statearr_43007;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_42989){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_42989);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43008){if((e43008 instanceof Object)){
var ex__40505__auto__ = e43008;
var statearr_43009_43027 = state_42989;
(statearr_43009_43027[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42989);

return cljs.core.cst$kw$recur;
} else {
throw e43008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43028 = state_42989;
state_42989 = G__43028;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_42989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_42989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___43012,tc,fc))
})();
var state__40694__auto__ = (function (){var statearr_43010 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43010[(6)] = c__40692__auto___43012);

return statearr_43010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___43012,tc,fc))
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
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__){
return (function (state_43049){
var state_val_43050 = (state_43049[(1)]);
if((state_val_43050 === (7))){
var inst_43045 = (state_43049[(2)]);
var state_43049__$1 = state_43049;
var statearr_43051_43069 = state_43049__$1;
(statearr_43051_43069[(2)] = inst_43045);

(statearr_43051_43069[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43050 === (1))){
var inst_43029 = init;
var state_43049__$1 = (function (){var statearr_43052 = state_43049;
(statearr_43052[(7)] = inst_43029);

return statearr_43052;
})();
var statearr_43053_43070 = state_43049__$1;
(statearr_43053_43070[(2)] = null);

(statearr_43053_43070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43050 === (4))){
var inst_43032 = (state_43049[(8)]);
var inst_43032__$1 = (state_43049[(2)]);
var inst_43033 = (inst_43032__$1 == null);
var state_43049__$1 = (function (){var statearr_43054 = state_43049;
(statearr_43054[(8)] = inst_43032__$1);

return statearr_43054;
})();
if(cljs.core.truth_(inst_43033)){
var statearr_43055_43071 = state_43049__$1;
(statearr_43055_43071[(1)] = (5));

} else {
var statearr_43056_43072 = state_43049__$1;
(statearr_43056_43072[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43050 === (6))){
var inst_43036 = (state_43049[(9)]);
var inst_43029 = (state_43049[(7)]);
var inst_43032 = (state_43049[(8)]);
var inst_43036__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43029,inst_43032) : f.call(null,inst_43029,inst_43032));
var inst_43037 = cljs.core.reduced_QMARK_(inst_43036__$1);
var state_43049__$1 = (function (){var statearr_43057 = state_43049;
(statearr_43057[(9)] = inst_43036__$1);

return statearr_43057;
})();
if(inst_43037){
var statearr_43058_43073 = state_43049__$1;
(statearr_43058_43073[(1)] = (8));

} else {
var statearr_43059_43074 = state_43049__$1;
(statearr_43059_43074[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43050 === (3))){
var inst_43047 = (state_43049[(2)]);
var state_43049__$1 = state_43049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43049__$1,inst_43047);
} else {
if((state_val_43050 === (2))){
var state_43049__$1 = state_43049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43049__$1,(4),ch);
} else {
if((state_val_43050 === (9))){
var inst_43036 = (state_43049[(9)]);
var inst_43029 = inst_43036;
var state_43049__$1 = (function (){var statearr_43060 = state_43049;
(statearr_43060[(7)] = inst_43029);

return statearr_43060;
})();
var statearr_43061_43075 = state_43049__$1;
(statearr_43061_43075[(2)] = null);

(statearr_43061_43075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43050 === (5))){
var inst_43029 = (state_43049[(7)]);
var state_43049__$1 = state_43049;
var statearr_43062_43076 = state_43049__$1;
(statearr_43062_43076[(2)] = inst_43029);

(statearr_43062_43076[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43050 === (10))){
var inst_43043 = (state_43049[(2)]);
var state_43049__$1 = state_43049;
var statearr_43063_43077 = state_43049__$1;
(statearr_43063_43077[(2)] = inst_43043);

(statearr_43063_43077[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43050 === (8))){
var inst_43036 = (state_43049[(9)]);
var inst_43039 = cljs.core.deref(inst_43036);
var state_43049__$1 = state_43049;
var statearr_43064_43078 = state_43049__$1;
(statearr_43064_43078[(2)] = inst_43039);

(statearr_43064_43078[(1)] = (10));


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
});})(c__40692__auto__))
;
return ((function (switch__40501__auto__,c__40692__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40502__auto____0 = (function (){
var statearr_43065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43065[(0)] = cljs$core$async$reduce_$_state_machine__40502__auto__);

(statearr_43065[(1)] = (1));

return statearr_43065;
});
var cljs$core$async$reduce_$_state_machine__40502__auto____1 = (function (state_43049){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43049);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43066){if((e43066 instanceof Object)){
var ex__40505__auto__ = e43066;
var statearr_43067_43079 = state_43049;
(statearr_43067_43079[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43049);

return cljs.core.cst$kw$recur;
} else {
throw e43066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43080 = state_43049;
state_43049 = G__43080;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40502__auto__ = function(state_43049){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40502__auto____1.call(this,state_43049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40502__auto____0;
cljs$core$async$reduce_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40502__auto____1;
return cljs$core$async$reduce_$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__))
})();
var state__40694__auto__ = (function (){var statearr_43068 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43068[(6)] = c__40692__auto__);

return statearr_43068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__))
);

return c__40692__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__,f__$1){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__,f__$1){
return (function (state_43086){
var state_val_43087 = (state_43086[(1)]);
if((state_val_43087 === (1))){
var inst_43081 = cljs.core.async.reduce(f__$1,init,ch);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43086__$1,(2),inst_43081);
} else {
if((state_val_43087 === (2))){
var inst_43083 = (state_43086[(2)]);
var inst_43084 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43083) : f__$1.call(null,inst_43083));
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43086__$1,inst_43084);
} else {
return null;
}
}
});})(c__40692__auto__,f__$1))
;
return ((function (switch__40501__auto__,c__40692__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40502__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40502__auto____0 = (function (){
var statearr_43088 = [null,null,null,null,null,null,null];
(statearr_43088[(0)] = cljs$core$async$transduce_$_state_machine__40502__auto__);

(statearr_43088[(1)] = (1));

return statearr_43088;
});
var cljs$core$async$transduce_$_state_machine__40502__auto____1 = (function (state_43086){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43086);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43089){if((e43089 instanceof Object)){
var ex__40505__auto__ = e43089;
var statearr_43090_43092 = state_43086;
(statearr_43090_43092[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43086);

return cljs.core.cst$kw$recur;
} else {
throw e43089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43093 = state_43086;
state_43086 = G__43093;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40502__auto__ = function(state_43086){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40502__auto____1.call(this,state_43086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40502__auto____0;
cljs$core$async$transduce_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40502__auto____1;
return cljs$core$async$transduce_$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__,f__$1))
})();
var state__40694__auto__ = (function (){var statearr_43091 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43091[(6)] = c__40692__auto__);

return statearr_43091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__,f__$1))
);

return c__40692__auto__;
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
var G__43095 = arguments.length;
switch (G__43095) {
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
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__){
return (function (state_43120){
var state_val_43121 = (state_43120[(1)]);
if((state_val_43121 === (7))){
var inst_43102 = (state_43120[(2)]);
var state_43120__$1 = state_43120;
var statearr_43122_43143 = state_43120__$1;
(statearr_43122_43143[(2)] = inst_43102);

(statearr_43122_43143[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (1))){
var inst_43096 = cljs.core.seq(coll);
var inst_43097 = inst_43096;
var state_43120__$1 = (function (){var statearr_43123 = state_43120;
(statearr_43123[(7)] = inst_43097);

return statearr_43123;
})();
var statearr_43124_43144 = state_43120__$1;
(statearr_43124_43144[(2)] = null);

(statearr_43124_43144[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (4))){
var inst_43097 = (state_43120[(7)]);
var inst_43100 = cljs.core.first(inst_43097);
var state_43120__$1 = state_43120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43120__$1,(7),ch,inst_43100);
} else {
if((state_val_43121 === (13))){
var inst_43114 = (state_43120[(2)]);
var state_43120__$1 = state_43120;
var statearr_43125_43145 = state_43120__$1;
(statearr_43125_43145[(2)] = inst_43114);

(statearr_43125_43145[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (6))){
var inst_43105 = (state_43120[(2)]);
var state_43120__$1 = state_43120;
if(cljs.core.truth_(inst_43105)){
var statearr_43126_43146 = state_43120__$1;
(statearr_43126_43146[(1)] = (8));

} else {
var statearr_43127_43147 = state_43120__$1;
(statearr_43127_43147[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (3))){
var inst_43118 = (state_43120[(2)]);
var state_43120__$1 = state_43120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43120__$1,inst_43118);
} else {
if((state_val_43121 === (12))){
var state_43120__$1 = state_43120;
var statearr_43128_43148 = state_43120__$1;
(statearr_43128_43148[(2)] = null);

(statearr_43128_43148[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (2))){
var inst_43097 = (state_43120[(7)]);
var state_43120__$1 = state_43120;
if(cljs.core.truth_(inst_43097)){
var statearr_43129_43149 = state_43120__$1;
(statearr_43129_43149[(1)] = (4));

} else {
var statearr_43130_43150 = state_43120__$1;
(statearr_43130_43150[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (11))){
var inst_43111 = cljs.core.async.close_BANG_(ch);
var state_43120__$1 = state_43120;
var statearr_43131_43151 = state_43120__$1;
(statearr_43131_43151[(2)] = inst_43111);

(statearr_43131_43151[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (9))){
var state_43120__$1 = state_43120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43132_43152 = state_43120__$1;
(statearr_43132_43152[(1)] = (11));

} else {
var statearr_43133_43153 = state_43120__$1;
(statearr_43133_43153[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (5))){
var inst_43097 = (state_43120[(7)]);
var state_43120__$1 = state_43120;
var statearr_43134_43154 = state_43120__$1;
(statearr_43134_43154[(2)] = inst_43097);

(statearr_43134_43154[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (10))){
var inst_43116 = (state_43120[(2)]);
var state_43120__$1 = state_43120;
var statearr_43135_43155 = state_43120__$1;
(statearr_43135_43155[(2)] = inst_43116);

(statearr_43135_43155[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43121 === (8))){
var inst_43097 = (state_43120[(7)]);
var inst_43107 = cljs.core.next(inst_43097);
var inst_43097__$1 = inst_43107;
var state_43120__$1 = (function (){var statearr_43136 = state_43120;
(statearr_43136[(7)] = inst_43097__$1);

return statearr_43136;
})();
var statearr_43137_43156 = state_43120__$1;
(statearr_43137_43156[(2)] = null);

(statearr_43137_43156[(1)] = (2));


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
});})(c__40692__auto__))
;
return ((function (switch__40501__auto__,c__40692__auto__){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_43138 = [null,null,null,null,null,null,null,null];
(statearr_43138[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_43138[(1)] = (1));

return statearr_43138;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_43120){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43120);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43139){if((e43139 instanceof Object)){
var ex__40505__auto__ = e43139;
var statearr_43140_43157 = state_43120;
(statearr_43140_43157[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43120);

return cljs.core.cst$kw$recur;
} else {
throw e43139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43158 = state_43120;
state_43120 = G__43158;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_43120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_43120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__))
})();
var state__40694__auto__ = (function (){var statearr_43141 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43141[(6)] = c__40692__auto__);

return statearr_43141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__))
);

return c__40692__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43159 = (function (ch,cs,meta43160){
this.ch = ch;
this.cs = cs;
this.meta43160 = meta43160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43161,meta43160__$1){
var self__ = this;
var _43161__$1 = this;
return (new cljs.core.async.t_cljs$core$async43159(self__.ch,self__.cs,meta43160__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43161){
var self__ = this;
var _43161__$1 = this;
return self__.meta43160;
});})(cs))
;

cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43159.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43159.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta43160], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43159";

cljs.core.async.t_cljs$core$async43159.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43159");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43159.
 */
cljs.core.async.__GT_t_cljs$core$async43159 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43159(ch__$1,cs__$1,meta43160){
return (new cljs.core.async.t_cljs$core$async43159(ch__$1,cs__$1,meta43160));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43159(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40692__auto___43381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___43381,cs,m,dchan,dctr,done){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___43381,cs,m,dchan,dctr,done){
return (function (state_43296){
var state_val_43297 = (state_43296[(1)]);
if((state_val_43297 === (7))){
var inst_43292 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43298_43382 = state_43296__$1;
(statearr_43298_43382[(2)] = inst_43292);

(statearr_43298_43382[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (20))){
var inst_43195 = (state_43296[(7)]);
var inst_43207 = cljs.core.first(inst_43195);
var inst_43208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43207,(0),null);
var inst_43209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43207,(1),null);
var state_43296__$1 = (function (){var statearr_43299 = state_43296;
(statearr_43299[(8)] = inst_43208);

return statearr_43299;
})();
if(cljs.core.truth_(inst_43209)){
var statearr_43300_43383 = state_43296__$1;
(statearr_43300_43383[(1)] = (22));

} else {
var statearr_43301_43384 = state_43296__$1;
(statearr_43301_43384[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (27))){
var inst_43164 = (state_43296[(9)]);
var inst_43237 = (state_43296[(10)]);
var inst_43239 = (state_43296[(11)]);
var inst_43244 = (state_43296[(12)]);
var inst_43244__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43237,inst_43239);
var inst_43245 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43244__$1,inst_43164,done);
var state_43296__$1 = (function (){var statearr_43302 = state_43296;
(statearr_43302[(12)] = inst_43244__$1);

return statearr_43302;
})();
if(cljs.core.truth_(inst_43245)){
var statearr_43303_43385 = state_43296__$1;
(statearr_43303_43385[(1)] = (30));

} else {
var statearr_43304_43386 = state_43296__$1;
(statearr_43304_43386[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (1))){
var state_43296__$1 = state_43296;
var statearr_43305_43387 = state_43296__$1;
(statearr_43305_43387[(2)] = null);

(statearr_43305_43387[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (24))){
var inst_43195 = (state_43296[(7)]);
var inst_43214 = (state_43296[(2)]);
var inst_43215 = cljs.core.next(inst_43195);
var inst_43173 = inst_43215;
var inst_43174 = null;
var inst_43175 = (0);
var inst_43176 = (0);
var state_43296__$1 = (function (){var statearr_43306 = state_43296;
(statearr_43306[(13)] = inst_43173);

(statearr_43306[(14)] = inst_43176);

(statearr_43306[(15)] = inst_43174);

(statearr_43306[(16)] = inst_43214);

(statearr_43306[(17)] = inst_43175);

return statearr_43306;
})();
var statearr_43307_43388 = state_43296__$1;
(statearr_43307_43388[(2)] = null);

(statearr_43307_43388[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (39))){
var state_43296__$1 = state_43296;
var statearr_43311_43389 = state_43296__$1;
(statearr_43311_43389[(2)] = null);

(statearr_43311_43389[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (4))){
var inst_43164 = (state_43296[(9)]);
var inst_43164__$1 = (state_43296[(2)]);
var inst_43165 = (inst_43164__$1 == null);
var state_43296__$1 = (function (){var statearr_43312 = state_43296;
(statearr_43312[(9)] = inst_43164__$1);

return statearr_43312;
})();
if(cljs.core.truth_(inst_43165)){
var statearr_43313_43390 = state_43296__$1;
(statearr_43313_43390[(1)] = (5));

} else {
var statearr_43314_43391 = state_43296__$1;
(statearr_43314_43391[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (15))){
var inst_43173 = (state_43296[(13)]);
var inst_43176 = (state_43296[(14)]);
var inst_43174 = (state_43296[(15)]);
var inst_43175 = (state_43296[(17)]);
var inst_43191 = (state_43296[(2)]);
var inst_43192 = (inst_43176 + (1));
var tmp43308 = inst_43173;
var tmp43309 = inst_43174;
var tmp43310 = inst_43175;
var inst_43173__$1 = tmp43308;
var inst_43174__$1 = tmp43309;
var inst_43175__$1 = tmp43310;
var inst_43176__$1 = inst_43192;
var state_43296__$1 = (function (){var statearr_43315 = state_43296;
(statearr_43315[(13)] = inst_43173__$1);

(statearr_43315[(14)] = inst_43176__$1);

(statearr_43315[(15)] = inst_43174__$1);

(statearr_43315[(18)] = inst_43191);

(statearr_43315[(17)] = inst_43175__$1);

return statearr_43315;
})();
var statearr_43316_43392 = state_43296__$1;
(statearr_43316_43392[(2)] = null);

(statearr_43316_43392[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (21))){
var inst_43218 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43320_43393 = state_43296__$1;
(statearr_43320_43393[(2)] = inst_43218);

(statearr_43320_43393[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (31))){
var inst_43244 = (state_43296[(12)]);
var inst_43248 = done(null);
var inst_43249 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43244);
var state_43296__$1 = (function (){var statearr_43321 = state_43296;
(statearr_43321[(19)] = inst_43248);

return statearr_43321;
})();
var statearr_43322_43394 = state_43296__$1;
(statearr_43322_43394[(2)] = inst_43249);

(statearr_43322_43394[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (32))){
var inst_43237 = (state_43296[(10)]);
var inst_43238 = (state_43296[(20)]);
var inst_43236 = (state_43296[(21)]);
var inst_43239 = (state_43296[(11)]);
var inst_43251 = (state_43296[(2)]);
var inst_43252 = (inst_43239 + (1));
var tmp43317 = inst_43237;
var tmp43318 = inst_43238;
var tmp43319 = inst_43236;
var inst_43236__$1 = tmp43319;
var inst_43237__$1 = tmp43317;
var inst_43238__$1 = tmp43318;
var inst_43239__$1 = inst_43252;
var state_43296__$1 = (function (){var statearr_43323 = state_43296;
(statearr_43323[(10)] = inst_43237__$1);

(statearr_43323[(20)] = inst_43238__$1);

(statearr_43323[(22)] = inst_43251);

(statearr_43323[(21)] = inst_43236__$1);

(statearr_43323[(11)] = inst_43239__$1);

return statearr_43323;
})();
var statearr_43324_43395 = state_43296__$1;
(statearr_43324_43395[(2)] = null);

(statearr_43324_43395[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (40))){
var inst_43264 = (state_43296[(23)]);
var inst_43268 = done(null);
var inst_43269 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43264);
var state_43296__$1 = (function (){var statearr_43325 = state_43296;
(statearr_43325[(24)] = inst_43268);

return statearr_43325;
})();
var statearr_43326_43396 = state_43296__$1;
(statearr_43326_43396[(2)] = inst_43269);

(statearr_43326_43396[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (33))){
var inst_43255 = (state_43296[(25)]);
var inst_43257 = cljs.core.chunked_seq_QMARK_(inst_43255);
var state_43296__$1 = state_43296;
if(inst_43257){
var statearr_43327_43397 = state_43296__$1;
(statearr_43327_43397[(1)] = (36));

} else {
var statearr_43328_43398 = state_43296__$1;
(statearr_43328_43398[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (13))){
var inst_43185 = (state_43296[(26)]);
var inst_43188 = cljs.core.async.close_BANG_(inst_43185);
var state_43296__$1 = state_43296;
var statearr_43329_43399 = state_43296__$1;
(statearr_43329_43399[(2)] = inst_43188);

(statearr_43329_43399[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (22))){
var inst_43208 = (state_43296[(8)]);
var inst_43211 = cljs.core.async.close_BANG_(inst_43208);
var state_43296__$1 = state_43296;
var statearr_43330_43400 = state_43296__$1;
(statearr_43330_43400[(2)] = inst_43211);

(statearr_43330_43400[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (36))){
var inst_43255 = (state_43296[(25)]);
var inst_43259 = cljs.core.chunk_first(inst_43255);
var inst_43260 = cljs.core.chunk_rest(inst_43255);
var inst_43261 = cljs.core.count(inst_43259);
var inst_43236 = inst_43260;
var inst_43237 = inst_43259;
var inst_43238 = inst_43261;
var inst_43239 = (0);
var state_43296__$1 = (function (){var statearr_43331 = state_43296;
(statearr_43331[(10)] = inst_43237);

(statearr_43331[(20)] = inst_43238);

(statearr_43331[(21)] = inst_43236);

(statearr_43331[(11)] = inst_43239);

return statearr_43331;
})();
var statearr_43332_43401 = state_43296__$1;
(statearr_43332_43401[(2)] = null);

(statearr_43332_43401[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (41))){
var inst_43255 = (state_43296[(25)]);
var inst_43271 = (state_43296[(2)]);
var inst_43272 = cljs.core.next(inst_43255);
var inst_43236 = inst_43272;
var inst_43237 = null;
var inst_43238 = (0);
var inst_43239 = (0);
var state_43296__$1 = (function (){var statearr_43333 = state_43296;
(statearr_43333[(10)] = inst_43237);

(statearr_43333[(20)] = inst_43238);

(statearr_43333[(21)] = inst_43236);

(statearr_43333[(11)] = inst_43239);

(statearr_43333[(27)] = inst_43271);

return statearr_43333;
})();
var statearr_43334_43402 = state_43296__$1;
(statearr_43334_43402[(2)] = null);

(statearr_43334_43402[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (43))){
var state_43296__$1 = state_43296;
var statearr_43335_43403 = state_43296__$1;
(statearr_43335_43403[(2)] = null);

(statearr_43335_43403[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (29))){
var inst_43280 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43336_43404 = state_43296__$1;
(statearr_43336_43404[(2)] = inst_43280);

(statearr_43336_43404[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (44))){
var inst_43289 = (state_43296[(2)]);
var state_43296__$1 = (function (){var statearr_43337 = state_43296;
(statearr_43337[(28)] = inst_43289);

return statearr_43337;
})();
var statearr_43338_43405 = state_43296__$1;
(statearr_43338_43405[(2)] = null);

(statearr_43338_43405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (6))){
var inst_43228 = (state_43296[(29)]);
var inst_43227 = cljs.core.deref(cs);
var inst_43228__$1 = cljs.core.keys(inst_43227);
var inst_43229 = cljs.core.count(inst_43228__$1);
var inst_43230 = cljs.core.reset_BANG_(dctr,inst_43229);
var inst_43235 = cljs.core.seq(inst_43228__$1);
var inst_43236 = inst_43235;
var inst_43237 = null;
var inst_43238 = (0);
var inst_43239 = (0);
var state_43296__$1 = (function (){var statearr_43339 = state_43296;
(statearr_43339[(29)] = inst_43228__$1);

(statearr_43339[(10)] = inst_43237);

(statearr_43339[(20)] = inst_43238);

(statearr_43339[(21)] = inst_43236);

(statearr_43339[(11)] = inst_43239);

(statearr_43339[(30)] = inst_43230);

return statearr_43339;
})();
var statearr_43340_43406 = state_43296__$1;
(statearr_43340_43406[(2)] = null);

(statearr_43340_43406[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (28))){
var inst_43236 = (state_43296[(21)]);
var inst_43255 = (state_43296[(25)]);
var inst_43255__$1 = cljs.core.seq(inst_43236);
var state_43296__$1 = (function (){var statearr_43341 = state_43296;
(statearr_43341[(25)] = inst_43255__$1);

return statearr_43341;
})();
if(inst_43255__$1){
var statearr_43342_43407 = state_43296__$1;
(statearr_43342_43407[(1)] = (33));

} else {
var statearr_43343_43408 = state_43296__$1;
(statearr_43343_43408[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (25))){
var inst_43238 = (state_43296[(20)]);
var inst_43239 = (state_43296[(11)]);
var inst_43241 = (inst_43239 < inst_43238);
var inst_43242 = inst_43241;
var state_43296__$1 = state_43296;
if(cljs.core.truth_(inst_43242)){
var statearr_43344_43409 = state_43296__$1;
(statearr_43344_43409[(1)] = (27));

} else {
var statearr_43345_43410 = state_43296__$1;
(statearr_43345_43410[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (34))){
var state_43296__$1 = state_43296;
var statearr_43346_43411 = state_43296__$1;
(statearr_43346_43411[(2)] = null);

(statearr_43346_43411[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (17))){
var state_43296__$1 = state_43296;
var statearr_43347_43412 = state_43296__$1;
(statearr_43347_43412[(2)] = null);

(statearr_43347_43412[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (3))){
var inst_43294 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43296__$1,inst_43294);
} else {
if((state_val_43297 === (12))){
var inst_43223 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43348_43413 = state_43296__$1;
(statearr_43348_43413[(2)] = inst_43223);

(statearr_43348_43413[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (2))){
var state_43296__$1 = state_43296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43296__$1,(4),ch);
} else {
if((state_val_43297 === (23))){
var state_43296__$1 = state_43296;
var statearr_43349_43414 = state_43296__$1;
(statearr_43349_43414[(2)] = null);

(statearr_43349_43414[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (35))){
var inst_43278 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43350_43415 = state_43296__$1;
(statearr_43350_43415[(2)] = inst_43278);

(statearr_43350_43415[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (19))){
var inst_43195 = (state_43296[(7)]);
var inst_43199 = cljs.core.chunk_first(inst_43195);
var inst_43200 = cljs.core.chunk_rest(inst_43195);
var inst_43201 = cljs.core.count(inst_43199);
var inst_43173 = inst_43200;
var inst_43174 = inst_43199;
var inst_43175 = inst_43201;
var inst_43176 = (0);
var state_43296__$1 = (function (){var statearr_43351 = state_43296;
(statearr_43351[(13)] = inst_43173);

(statearr_43351[(14)] = inst_43176);

(statearr_43351[(15)] = inst_43174);

(statearr_43351[(17)] = inst_43175);

return statearr_43351;
})();
var statearr_43352_43416 = state_43296__$1;
(statearr_43352_43416[(2)] = null);

(statearr_43352_43416[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (11))){
var inst_43173 = (state_43296[(13)]);
var inst_43195 = (state_43296[(7)]);
var inst_43195__$1 = cljs.core.seq(inst_43173);
var state_43296__$1 = (function (){var statearr_43353 = state_43296;
(statearr_43353[(7)] = inst_43195__$1);

return statearr_43353;
})();
if(inst_43195__$1){
var statearr_43354_43417 = state_43296__$1;
(statearr_43354_43417[(1)] = (16));

} else {
var statearr_43355_43418 = state_43296__$1;
(statearr_43355_43418[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (9))){
var inst_43225 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43356_43419 = state_43296__$1;
(statearr_43356_43419[(2)] = inst_43225);

(statearr_43356_43419[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (5))){
var inst_43171 = cljs.core.deref(cs);
var inst_43172 = cljs.core.seq(inst_43171);
var inst_43173 = inst_43172;
var inst_43174 = null;
var inst_43175 = (0);
var inst_43176 = (0);
var state_43296__$1 = (function (){var statearr_43357 = state_43296;
(statearr_43357[(13)] = inst_43173);

(statearr_43357[(14)] = inst_43176);

(statearr_43357[(15)] = inst_43174);

(statearr_43357[(17)] = inst_43175);

return statearr_43357;
})();
var statearr_43358_43420 = state_43296__$1;
(statearr_43358_43420[(2)] = null);

(statearr_43358_43420[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (14))){
var state_43296__$1 = state_43296;
var statearr_43359_43421 = state_43296__$1;
(statearr_43359_43421[(2)] = null);

(statearr_43359_43421[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (45))){
var inst_43286 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43360_43422 = state_43296__$1;
(statearr_43360_43422[(2)] = inst_43286);

(statearr_43360_43422[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (26))){
var inst_43228 = (state_43296[(29)]);
var inst_43282 = (state_43296[(2)]);
var inst_43283 = cljs.core.seq(inst_43228);
var state_43296__$1 = (function (){var statearr_43361 = state_43296;
(statearr_43361[(31)] = inst_43282);

return statearr_43361;
})();
if(inst_43283){
var statearr_43362_43423 = state_43296__$1;
(statearr_43362_43423[(1)] = (42));

} else {
var statearr_43363_43424 = state_43296__$1;
(statearr_43363_43424[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (16))){
var inst_43195 = (state_43296[(7)]);
var inst_43197 = cljs.core.chunked_seq_QMARK_(inst_43195);
var state_43296__$1 = state_43296;
if(inst_43197){
var statearr_43364_43425 = state_43296__$1;
(statearr_43364_43425[(1)] = (19));

} else {
var statearr_43365_43426 = state_43296__$1;
(statearr_43365_43426[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (38))){
var inst_43275 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43366_43427 = state_43296__$1;
(statearr_43366_43427[(2)] = inst_43275);

(statearr_43366_43427[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (30))){
var state_43296__$1 = state_43296;
var statearr_43367_43428 = state_43296__$1;
(statearr_43367_43428[(2)] = null);

(statearr_43367_43428[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (10))){
var inst_43176 = (state_43296[(14)]);
var inst_43174 = (state_43296[(15)]);
var inst_43184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43174,inst_43176);
var inst_43185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43184,(0),null);
var inst_43186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43184,(1),null);
var state_43296__$1 = (function (){var statearr_43368 = state_43296;
(statearr_43368[(26)] = inst_43185);

return statearr_43368;
})();
if(cljs.core.truth_(inst_43186)){
var statearr_43369_43429 = state_43296__$1;
(statearr_43369_43429[(1)] = (13));

} else {
var statearr_43370_43430 = state_43296__$1;
(statearr_43370_43430[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (18))){
var inst_43221 = (state_43296[(2)]);
var state_43296__$1 = state_43296;
var statearr_43371_43431 = state_43296__$1;
(statearr_43371_43431[(2)] = inst_43221);

(statearr_43371_43431[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (42))){
var state_43296__$1 = state_43296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43296__$1,(45),dchan);
} else {
if((state_val_43297 === (37))){
var inst_43164 = (state_43296[(9)]);
var inst_43255 = (state_43296[(25)]);
var inst_43264 = (state_43296[(23)]);
var inst_43264__$1 = cljs.core.first(inst_43255);
var inst_43265 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43264__$1,inst_43164,done);
var state_43296__$1 = (function (){var statearr_43372 = state_43296;
(statearr_43372[(23)] = inst_43264__$1);

return statearr_43372;
})();
if(cljs.core.truth_(inst_43265)){
var statearr_43373_43432 = state_43296__$1;
(statearr_43373_43432[(1)] = (39));

} else {
var statearr_43374_43433 = state_43296__$1;
(statearr_43374_43433[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43297 === (8))){
var inst_43176 = (state_43296[(14)]);
var inst_43175 = (state_43296[(17)]);
var inst_43178 = (inst_43176 < inst_43175);
var inst_43179 = inst_43178;
var state_43296__$1 = state_43296;
if(cljs.core.truth_(inst_43179)){
var statearr_43375_43434 = state_43296__$1;
(statearr_43375_43434[(1)] = (10));

} else {
var statearr_43376_43435 = state_43296__$1;
(statearr_43376_43435[(1)] = (11));

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
});})(c__40692__auto___43381,cs,m,dchan,dctr,done))
;
return ((function (switch__40501__auto__,c__40692__auto___43381,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40502__auto__ = null;
var cljs$core$async$mult_$_state_machine__40502__auto____0 = (function (){
var statearr_43377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43377[(0)] = cljs$core$async$mult_$_state_machine__40502__auto__);

(statearr_43377[(1)] = (1));

return statearr_43377;
});
var cljs$core$async$mult_$_state_machine__40502__auto____1 = (function (state_43296){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43296);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43378){if((e43378 instanceof Object)){
var ex__40505__auto__ = e43378;
var statearr_43379_43436 = state_43296;
(statearr_43379_43436[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43296);

return cljs.core.cst$kw$recur;
} else {
throw e43378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43437 = state_43296;
state_43296 = G__43437;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40502__auto__ = function(state_43296){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40502__auto____1.call(this,state_43296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40502__auto____0;
cljs$core$async$mult_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40502__auto____1;
return cljs$core$async$mult_$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___43381,cs,m,dchan,dctr,done))
})();
var state__40694__auto__ = (function (){var statearr_43380 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43380[(6)] = c__40692__auto___43381);

return statearr_43380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___43381,cs,m,dchan,dctr,done))
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
var G__43439 = arguments.length;
switch (G__43439) {
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
var len__4730__auto___43451 = arguments.length;
var i__4731__auto___43452 = (0);
while(true){
if((i__4731__auto___43452 < len__4730__auto___43451)){
args__4736__auto__.push((arguments[i__4731__auto___43452]));

var G__43453 = (i__4731__auto___43452 + (1));
i__4731__auto___43452 = G__43453;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43445){
var map__43446 = p__43445;
var map__43446__$1 = (((((!((map__43446 == null))))?(((((map__43446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43446):map__43446);
var opts = map__43446__$1;
var statearr_43448_43454 = state;
(statearr_43448_43454[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__43446,map__43446__$1,opts){
return (function (val){
var statearr_43449_43455 = state;
(statearr_43449_43455[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__43446,map__43446__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_43450_43456 = state;
(statearr_43450_43456[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43441){
var G__43442 = cljs.core.first(seq43441);
var seq43441__$1 = cljs.core.next(seq43441);
var G__43443 = cljs.core.first(seq43441__$1);
var seq43441__$2 = cljs.core.next(seq43441__$1);
var G__43444 = cljs.core.first(seq43441__$2);
var seq43441__$3 = cljs.core.next(seq43441__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43442,G__43443,G__43444,seq43441__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43457 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43458){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43458 = meta43458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43459,meta43458__$1){
var self__ = this;
var _43459__$1 = this;
return (new cljs.core.async.t_cljs$core$async43457(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43458__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43459){
var self__ = this;
var _43459__$1 = this;
return self__.meta43458;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43457.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta43458], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43457";

cljs.core.async.t_cljs$core$async43457.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43457");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43457.
 */
cljs.core.async.__GT_t_cljs$core$async43457 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43458){
return (new cljs.core.async.t_cljs$core$async43457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43458));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43457(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40692__auto___43621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___43621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___43621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43561){
var state_val_43562 = (state_43561[(1)]);
if((state_val_43562 === (7))){
var inst_43476 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
var statearr_43563_43622 = state_43561__$1;
(statearr_43563_43622[(2)] = inst_43476);

(statearr_43563_43622[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (20))){
var inst_43488 = (state_43561[(7)]);
var state_43561__$1 = state_43561;
var statearr_43564_43623 = state_43561__$1;
(statearr_43564_43623[(2)] = inst_43488);

(statearr_43564_43623[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (27))){
var state_43561__$1 = state_43561;
var statearr_43565_43624 = state_43561__$1;
(statearr_43565_43624[(2)] = null);

(statearr_43565_43624[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (1))){
var inst_43463 = (state_43561[(8)]);
var inst_43463__$1 = calc_state();
var inst_43465 = (inst_43463__$1 == null);
var inst_43466 = cljs.core.not(inst_43465);
var state_43561__$1 = (function (){var statearr_43566 = state_43561;
(statearr_43566[(8)] = inst_43463__$1);

return statearr_43566;
})();
if(inst_43466){
var statearr_43567_43625 = state_43561__$1;
(statearr_43567_43625[(1)] = (2));

} else {
var statearr_43568_43626 = state_43561__$1;
(statearr_43568_43626[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (24))){
var inst_43521 = (state_43561[(9)]);
var inst_43512 = (state_43561[(10)]);
var inst_43535 = (state_43561[(11)]);
var inst_43535__$1 = (inst_43512.cljs$core$IFn$_invoke$arity$1 ? inst_43512.cljs$core$IFn$_invoke$arity$1(inst_43521) : inst_43512.call(null,inst_43521));
var state_43561__$1 = (function (){var statearr_43569 = state_43561;
(statearr_43569[(11)] = inst_43535__$1);

return statearr_43569;
})();
if(cljs.core.truth_(inst_43535__$1)){
var statearr_43570_43627 = state_43561__$1;
(statearr_43570_43627[(1)] = (29));

} else {
var statearr_43571_43628 = state_43561__$1;
(statearr_43571_43628[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (4))){
var inst_43479 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
if(cljs.core.truth_(inst_43479)){
var statearr_43572_43629 = state_43561__$1;
(statearr_43572_43629[(1)] = (8));

} else {
var statearr_43573_43630 = state_43561__$1;
(statearr_43573_43630[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (15))){
var inst_43506 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
if(cljs.core.truth_(inst_43506)){
var statearr_43574_43631 = state_43561__$1;
(statearr_43574_43631[(1)] = (19));

} else {
var statearr_43575_43632 = state_43561__$1;
(statearr_43575_43632[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (21))){
var inst_43511 = (state_43561[(12)]);
var inst_43511__$1 = (state_43561[(2)]);
var inst_43512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43511__$1,cljs.core.cst$kw$solos);
var inst_43513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43511__$1,cljs.core.cst$kw$mutes);
var inst_43514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43511__$1,cljs.core.cst$kw$reads);
var state_43561__$1 = (function (){var statearr_43576 = state_43561;
(statearr_43576[(10)] = inst_43512);

(statearr_43576[(13)] = inst_43513);

(statearr_43576[(12)] = inst_43511__$1);

return statearr_43576;
})();
return cljs.core.async.ioc_alts_BANG_(state_43561__$1,(22),inst_43514);
} else {
if((state_val_43562 === (31))){
var inst_43543 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
if(cljs.core.truth_(inst_43543)){
var statearr_43577_43633 = state_43561__$1;
(statearr_43577_43633[(1)] = (32));

} else {
var statearr_43578_43634 = state_43561__$1;
(statearr_43578_43634[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (32))){
var inst_43520 = (state_43561[(14)]);
var state_43561__$1 = state_43561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43561__$1,(35),out,inst_43520);
} else {
if((state_val_43562 === (33))){
var inst_43511 = (state_43561[(12)]);
var inst_43488 = inst_43511;
var state_43561__$1 = (function (){var statearr_43579 = state_43561;
(statearr_43579[(7)] = inst_43488);

return statearr_43579;
})();
var statearr_43580_43635 = state_43561__$1;
(statearr_43580_43635[(2)] = null);

(statearr_43580_43635[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (13))){
var inst_43488 = (state_43561[(7)]);
var inst_43495 = inst_43488.cljs$lang$protocol_mask$partition0$;
var inst_43496 = (inst_43495 & (64));
var inst_43497 = inst_43488.cljs$core$ISeq$;
var inst_43498 = (cljs.core.PROTOCOL_SENTINEL === inst_43497);
var inst_43499 = ((inst_43496) || (inst_43498));
var state_43561__$1 = state_43561;
if(cljs.core.truth_(inst_43499)){
var statearr_43581_43636 = state_43561__$1;
(statearr_43581_43636[(1)] = (16));

} else {
var statearr_43582_43637 = state_43561__$1;
(statearr_43582_43637[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (22))){
var inst_43521 = (state_43561[(9)]);
var inst_43520 = (state_43561[(14)]);
var inst_43519 = (state_43561[(2)]);
var inst_43520__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43519,(0),null);
var inst_43521__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43519,(1),null);
var inst_43522 = (inst_43520__$1 == null);
var inst_43523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43521__$1,change);
var inst_43524 = ((inst_43522) || (inst_43523));
var state_43561__$1 = (function (){var statearr_43583 = state_43561;
(statearr_43583[(9)] = inst_43521__$1);

(statearr_43583[(14)] = inst_43520__$1);

return statearr_43583;
})();
if(cljs.core.truth_(inst_43524)){
var statearr_43584_43638 = state_43561__$1;
(statearr_43584_43638[(1)] = (23));

} else {
var statearr_43585_43639 = state_43561__$1;
(statearr_43585_43639[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (36))){
var inst_43511 = (state_43561[(12)]);
var inst_43488 = inst_43511;
var state_43561__$1 = (function (){var statearr_43586 = state_43561;
(statearr_43586[(7)] = inst_43488);

return statearr_43586;
})();
var statearr_43587_43640 = state_43561__$1;
(statearr_43587_43640[(2)] = null);

(statearr_43587_43640[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (29))){
var inst_43535 = (state_43561[(11)]);
var state_43561__$1 = state_43561;
var statearr_43588_43641 = state_43561__$1;
(statearr_43588_43641[(2)] = inst_43535);

(statearr_43588_43641[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (6))){
var state_43561__$1 = state_43561;
var statearr_43589_43642 = state_43561__$1;
(statearr_43589_43642[(2)] = false);

(statearr_43589_43642[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (28))){
var inst_43531 = (state_43561[(2)]);
var inst_43532 = calc_state();
var inst_43488 = inst_43532;
var state_43561__$1 = (function (){var statearr_43590 = state_43561;
(statearr_43590[(7)] = inst_43488);

(statearr_43590[(15)] = inst_43531);

return statearr_43590;
})();
var statearr_43591_43643 = state_43561__$1;
(statearr_43591_43643[(2)] = null);

(statearr_43591_43643[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (25))){
var inst_43557 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
var statearr_43592_43644 = state_43561__$1;
(statearr_43592_43644[(2)] = inst_43557);

(statearr_43592_43644[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (34))){
var inst_43555 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
var statearr_43593_43645 = state_43561__$1;
(statearr_43593_43645[(2)] = inst_43555);

(statearr_43593_43645[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (17))){
var state_43561__$1 = state_43561;
var statearr_43594_43646 = state_43561__$1;
(statearr_43594_43646[(2)] = false);

(statearr_43594_43646[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (3))){
var state_43561__$1 = state_43561;
var statearr_43595_43647 = state_43561__$1;
(statearr_43595_43647[(2)] = false);

(statearr_43595_43647[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (12))){
var inst_43559 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43561__$1,inst_43559);
} else {
if((state_val_43562 === (2))){
var inst_43463 = (state_43561[(8)]);
var inst_43468 = inst_43463.cljs$lang$protocol_mask$partition0$;
var inst_43469 = (inst_43468 & (64));
var inst_43470 = inst_43463.cljs$core$ISeq$;
var inst_43471 = (cljs.core.PROTOCOL_SENTINEL === inst_43470);
var inst_43472 = ((inst_43469) || (inst_43471));
var state_43561__$1 = state_43561;
if(cljs.core.truth_(inst_43472)){
var statearr_43596_43648 = state_43561__$1;
(statearr_43596_43648[(1)] = (5));

} else {
var statearr_43597_43649 = state_43561__$1;
(statearr_43597_43649[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (23))){
var inst_43520 = (state_43561[(14)]);
var inst_43526 = (inst_43520 == null);
var state_43561__$1 = state_43561;
if(cljs.core.truth_(inst_43526)){
var statearr_43598_43650 = state_43561__$1;
(statearr_43598_43650[(1)] = (26));

} else {
var statearr_43599_43651 = state_43561__$1;
(statearr_43599_43651[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (35))){
var inst_43546 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
if(cljs.core.truth_(inst_43546)){
var statearr_43600_43652 = state_43561__$1;
(statearr_43600_43652[(1)] = (36));

} else {
var statearr_43601_43653 = state_43561__$1;
(statearr_43601_43653[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (19))){
var inst_43488 = (state_43561[(7)]);
var inst_43508 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43488);
var state_43561__$1 = state_43561;
var statearr_43602_43654 = state_43561__$1;
(statearr_43602_43654[(2)] = inst_43508);

(statearr_43602_43654[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (11))){
var inst_43488 = (state_43561[(7)]);
var inst_43492 = (inst_43488 == null);
var inst_43493 = cljs.core.not(inst_43492);
var state_43561__$1 = state_43561;
if(inst_43493){
var statearr_43603_43655 = state_43561__$1;
(statearr_43603_43655[(1)] = (13));

} else {
var statearr_43604_43656 = state_43561__$1;
(statearr_43604_43656[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (9))){
var inst_43463 = (state_43561[(8)]);
var state_43561__$1 = state_43561;
var statearr_43605_43657 = state_43561__$1;
(statearr_43605_43657[(2)] = inst_43463);

(statearr_43605_43657[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (5))){
var state_43561__$1 = state_43561;
var statearr_43606_43658 = state_43561__$1;
(statearr_43606_43658[(2)] = true);

(statearr_43606_43658[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (14))){
var state_43561__$1 = state_43561;
var statearr_43607_43659 = state_43561__$1;
(statearr_43607_43659[(2)] = false);

(statearr_43607_43659[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (26))){
var inst_43521 = (state_43561[(9)]);
var inst_43528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43521);
var state_43561__$1 = state_43561;
var statearr_43608_43660 = state_43561__$1;
(statearr_43608_43660[(2)] = inst_43528);

(statearr_43608_43660[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (16))){
var state_43561__$1 = state_43561;
var statearr_43609_43661 = state_43561__$1;
(statearr_43609_43661[(2)] = true);

(statearr_43609_43661[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (38))){
var inst_43551 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
var statearr_43610_43662 = state_43561__$1;
(statearr_43610_43662[(2)] = inst_43551);

(statearr_43610_43662[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (30))){
var inst_43521 = (state_43561[(9)]);
var inst_43512 = (state_43561[(10)]);
var inst_43513 = (state_43561[(13)]);
var inst_43538 = cljs.core.empty_QMARK_(inst_43512);
var inst_43539 = (inst_43513.cljs$core$IFn$_invoke$arity$1 ? inst_43513.cljs$core$IFn$_invoke$arity$1(inst_43521) : inst_43513.call(null,inst_43521));
var inst_43540 = cljs.core.not(inst_43539);
var inst_43541 = ((inst_43538) && (inst_43540));
var state_43561__$1 = state_43561;
var statearr_43611_43663 = state_43561__$1;
(statearr_43611_43663[(2)] = inst_43541);

(statearr_43611_43663[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (10))){
var inst_43463 = (state_43561[(8)]);
var inst_43484 = (state_43561[(2)]);
var inst_43485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43484,cljs.core.cst$kw$solos);
var inst_43486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43484,cljs.core.cst$kw$mutes);
var inst_43487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43484,cljs.core.cst$kw$reads);
var inst_43488 = inst_43463;
var state_43561__$1 = (function (){var statearr_43612 = state_43561;
(statearr_43612[(7)] = inst_43488);

(statearr_43612[(16)] = inst_43487);

(statearr_43612[(17)] = inst_43486);

(statearr_43612[(18)] = inst_43485);

return statearr_43612;
})();
var statearr_43613_43664 = state_43561__$1;
(statearr_43613_43664[(2)] = null);

(statearr_43613_43664[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (18))){
var inst_43503 = (state_43561[(2)]);
var state_43561__$1 = state_43561;
var statearr_43614_43665 = state_43561__$1;
(statearr_43614_43665[(2)] = inst_43503);

(statearr_43614_43665[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (37))){
var state_43561__$1 = state_43561;
var statearr_43615_43666 = state_43561__$1;
(statearr_43615_43666[(2)] = null);

(statearr_43615_43666[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43562 === (8))){
var inst_43463 = (state_43561[(8)]);
var inst_43481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43463);
var state_43561__$1 = state_43561;
var statearr_43616_43667 = state_43561__$1;
(statearr_43616_43667[(2)] = inst_43481);

(statearr_43616_43667[(1)] = (10));


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
});})(c__40692__auto___43621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40501__auto__,c__40692__auto___43621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40502__auto__ = null;
var cljs$core$async$mix_$_state_machine__40502__auto____0 = (function (){
var statearr_43617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43617[(0)] = cljs$core$async$mix_$_state_machine__40502__auto__);

(statearr_43617[(1)] = (1));

return statearr_43617;
});
var cljs$core$async$mix_$_state_machine__40502__auto____1 = (function (state_43561){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43561);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43618){if((e43618 instanceof Object)){
var ex__40505__auto__ = e43618;
var statearr_43619_43668 = state_43561;
(statearr_43619_43668[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43561);

return cljs.core.cst$kw$recur;
} else {
throw e43618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43669 = state_43561;
state_43561 = G__43669;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40502__auto__ = function(state_43561){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40502__auto____1.call(this,state_43561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40502__auto____0;
cljs$core$async$mix_$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40502__auto____1;
return cljs$core$async$mix_$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___43621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40694__auto__ = (function (){var statearr_43620 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43620[(6)] = c__40692__auto___43621);

return statearr_43620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___43621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__43671 = arguments.length;
switch (G__43671) {
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
var G__43675 = arguments.length;
switch (G__43675) {
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
return (function (p1__43673_SHARP_){
if(cljs.core.truth_((p1__43673_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43673_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43673_SHARP_.call(null,topic)))){
return p1__43673_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43673_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43676 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43677){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43677 = meta43677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43678,meta43677__$1){
var self__ = this;
var _43678__$1 = this;
return (new cljs.core.async.t_cljs$core$async43676(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43677__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43678){
var self__ = this;
var _43678__$1 = this;
return self__.meta43677;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43676.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta43677], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43676";

cljs.core.async.t_cljs$core$async43676.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43676");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43676.
 */
cljs.core.async.__GT_t_cljs$core$async43676 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43676(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43677){
return (new cljs.core.async.t_cljs$core$async43676(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43677));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43676(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40692__auto___43796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___43796,mults,ensure_mult,p){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___43796,mults,ensure_mult,p){
return (function (state_43750){
var state_val_43751 = (state_43750[(1)]);
if((state_val_43751 === (7))){
var inst_43746 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43752_43797 = state_43750__$1;
(statearr_43752_43797[(2)] = inst_43746);

(statearr_43752_43797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (20))){
var state_43750__$1 = state_43750;
var statearr_43753_43798 = state_43750__$1;
(statearr_43753_43798[(2)] = null);

(statearr_43753_43798[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (1))){
var state_43750__$1 = state_43750;
var statearr_43754_43799 = state_43750__$1;
(statearr_43754_43799[(2)] = null);

(statearr_43754_43799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (24))){
var inst_43729 = (state_43750[(7)]);
var inst_43738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43729);
var state_43750__$1 = state_43750;
var statearr_43755_43800 = state_43750__$1;
(statearr_43755_43800[(2)] = inst_43738);

(statearr_43755_43800[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (4))){
var inst_43681 = (state_43750[(8)]);
var inst_43681__$1 = (state_43750[(2)]);
var inst_43682 = (inst_43681__$1 == null);
var state_43750__$1 = (function (){var statearr_43756 = state_43750;
(statearr_43756[(8)] = inst_43681__$1);

return statearr_43756;
})();
if(cljs.core.truth_(inst_43682)){
var statearr_43757_43801 = state_43750__$1;
(statearr_43757_43801[(1)] = (5));

} else {
var statearr_43758_43802 = state_43750__$1;
(statearr_43758_43802[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (15))){
var inst_43723 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43759_43803 = state_43750__$1;
(statearr_43759_43803[(2)] = inst_43723);

(statearr_43759_43803[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (21))){
var inst_43743 = (state_43750[(2)]);
var state_43750__$1 = (function (){var statearr_43760 = state_43750;
(statearr_43760[(9)] = inst_43743);

return statearr_43760;
})();
var statearr_43761_43804 = state_43750__$1;
(statearr_43761_43804[(2)] = null);

(statearr_43761_43804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (13))){
var inst_43705 = (state_43750[(10)]);
var inst_43707 = cljs.core.chunked_seq_QMARK_(inst_43705);
var state_43750__$1 = state_43750;
if(inst_43707){
var statearr_43762_43805 = state_43750__$1;
(statearr_43762_43805[(1)] = (16));

} else {
var statearr_43763_43806 = state_43750__$1;
(statearr_43763_43806[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (22))){
var inst_43735 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
if(cljs.core.truth_(inst_43735)){
var statearr_43764_43807 = state_43750__$1;
(statearr_43764_43807[(1)] = (23));

} else {
var statearr_43765_43808 = state_43750__$1;
(statearr_43765_43808[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (6))){
var inst_43731 = (state_43750[(11)]);
var inst_43729 = (state_43750[(7)]);
var inst_43681 = (state_43750[(8)]);
var inst_43729__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43681) : topic_fn.call(null,inst_43681));
var inst_43730 = cljs.core.deref(mults);
var inst_43731__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43730,inst_43729__$1);
var state_43750__$1 = (function (){var statearr_43766 = state_43750;
(statearr_43766[(11)] = inst_43731__$1);

(statearr_43766[(7)] = inst_43729__$1);

return statearr_43766;
})();
if(cljs.core.truth_(inst_43731__$1)){
var statearr_43767_43809 = state_43750__$1;
(statearr_43767_43809[(1)] = (19));

} else {
var statearr_43768_43810 = state_43750__$1;
(statearr_43768_43810[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (25))){
var inst_43740 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43769_43811 = state_43750__$1;
(statearr_43769_43811[(2)] = inst_43740);

(statearr_43769_43811[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (17))){
var inst_43705 = (state_43750[(10)]);
var inst_43714 = cljs.core.first(inst_43705);
var inst_43715 = cljs.core.async.muxch_STAR_(inst_43714);
var inst_43716 = cljs.core.async.close_BANG_(inst_43715);
var inst_43717 = cljs.core.next(inst_43705);
var inst_43691 = inst_43717;
var inst_43692 = null;
var inst_43693 = (0);
var inst_43694 = (0);
var state_43750__$1 = (function (){var statearr_43770 = state_43750;
(statearr_43770[(12)] = inst_43716);

(statearr_43770[(13)] = inst_43693);

(statearr_43770[(14)] = inst_43691);

(statearr_43770[(15)] = inst_43692);

(statearr_43770[(16)] = inst_43694);

return statearr_43770;
})();
var statearr_43771_43812 = state_43750__$1;
(statearr_43771_43812[(2)] = null);

(statearr_43771_43812[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (3))){
var inst_43748 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43750__$1,inst_43748);
} else {
if((state_val_43751 === (12))){
var inst_43725 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43772_43813 = state_43750__$1;
(statearr_43772_43813[(2)] = inst_43725);

(statearr_43772_43813[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (2))){
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43750__$1,(4),ch);
} else {
if((state_val_43751 === (23))){
var state_43750__$1 = state_43750;
var statearr_43773_43814 = state_43750__$1;
(statearr_43773_43814[(2)] = null);

(statearr_43773_43814[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (19))){
var inst_43731 = (state_43750[(11)]);
var inst_43681 = (state_43750[(8)]);
var inst_43733 = cljs.core.async.muxch_STAR_(inst_43731);
var state_43750__$1 = state_43750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43750__$1,(22),inst_43733,inst_43681);
} else {
if((state_val_43751 === (11))){
var inst_43705 = (state_43750[(10)]);
var inst_43691 = (state_43750[(14)]);
var inst_43705__$1 = cljs.core.seq(inst_43691);
var state_43750__$1 = (function (){var statearr_43774 = state_43750;
(statearr_43774[(10)] = inst_43705__$1);

return statearr_43774;
})();
if(inst_43705__$1){
var statearr_43775_43815 = state_43750__$1;
(statearr_43775_43815[(1)] = (13));

} else {
var statearr_43776_43816 = state_43750__$1;
(statearr_43776_43816[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (9))){
var inst_43727 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43777_43817 = state_43750__$1;
(statearr_43777_43817[(2)] = inst_43727);

(statearr_43777_43817[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (5))){
var inst_43688 = cljs.core.deref(mults);
var inst_43689 = cljs.core.vals(inst_43688);
var inst_43690 = cljs.core.seq(inst_43689);
var inst_43691 = inst_43690;
var inst_43692 = null;
var inst_43693 = (0);
var inst_43694 = (0);
var state_43750__$1 = (function (){var statearr_43778 = state_43750;
(statearr_43778[(13)] = inst_43693);

(statearr_43778[(14)] = inst_43691);

(statearr_43778[(15)] = inst_43692);

(statearr_43778[(16)] = inst_43694);

return statearr_43778;
})();
var statearr_43779_43818 = state_43750__$1;
(statearr_43779_43818[(2)] = null);

(statearr_43779_43818[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (14))){
var state_43750__$1 = state_43750;
var statearr_43783_43819 = state_43750__$1;
(statearr_43783_43819[(2)] = null);

(statearr_43783_43819[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (16))){
var inst_43705 = (state_43750[(10)]);
var inst_43709 = cljs.core.chunk_first(inst_43705);
var inst_43710 = cljs.core.chunk_rest(inst_43705);
var inst_43711 = cljs.core.count(inst_43709);
var inst_43691 = inst_43710;
var inst_43692 = inst_43709;
var inst_43693 = inst_43711;
var inst_43694 = (0);
var state_43750__$1 = (function (){var statearr_43784 = state_43750;
(statearr_43784[(13)] = inst_43693);

(statearr_43784[(14)] = inst_43691);

(statearr_43784[(15)] = inst_43692);

(statearr_43784[(16)] = inst_43694);

return statearr_43784;
})();
var statearr_43785_43820 = state_43750__$1;
(statearr_43785_43820[(2)] = null);

(statearr_43785_43820[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (10))){
var inst_43693 = (state_43750[(13)]);
var inst_43691 = (state_43750[(14)]);
var inst_43692 = (state_43750[(15)]);
var inst_43694 = (state_43750[(16)]);
var inst_43699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43692,inst_43694);
var inst_43700 = cljs.core.async.muxch_STAR_(inst_43699);
var inst_43701 = cljs.core.async.close_BANG_(inst_43700);
var inst_43702 = (inst_43694 + (1));
var tmp43780 = inst_43693;
var tmp43781 = inst_43691;
var tmp43782 = inst_43692;
var inst_43691__$1 = tmp43781;
var inst_43692__$1 = tmp43782;
var inst_43693__$1 = tmp43780;
var inst_43694__$1 = inst_43702;
var state_43750__$1 = (function (){var statearr_43786 = state_43750;
(statearr_43786[(13)] = inst_43693__$1);

(statearr_43786[(14)] = inst_43691__$1);

(statearr_43786[(17)] = inst_43701);

(statearr_43786[(15)] = inst_43692__$1);

(statearr_43786[(16)] = inst_43694__$1);

return statearr_43786;
})();
var statearr_43787_43821 = state_43750__$1;
(statearr_43787_43821[(2)] = null);

(statearr_43787_43821[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (18))){
var inst_43720 = (state_43750[(2)]);
var state_43750__$1 = state_43750;
var statearr_43788_43822 = state_43750__$1;
(statearr_43788_43822[(2)] = inst_43720);

(statearr_43788_43822[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43751 === (8))){
var inst_43693 = (state_43750[(13)]);
var inst_43694 = (state_43750[(16)]);
var inst_43696 = (inst_43694 < inst_43693);
var inst_43697 = inst_43696;
var state_43750__$1 = state_43750;
if(cljs.core.truth_(inst_43697)){
var statearr_43789_43823 = state_43750__$1;
(statearr_43789_43823[(1)] = (10));

} else {
var statearr_43790_43824 = state_43750__$1;
(statearr_43790_43824[(1)] = (11));

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
});})(c__40692__auto___43796,mults,ensure_mult,p))
;
return ((function (switch__40501__auto__,c__40692__auto___43796,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_43791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43791[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_43791[(1)] = (1));

return statearr_43791;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_43750){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43750);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43792){if((e43792 instanceof Object)){
var ex__40505__auto__ = e43792;
var statearr_43793_43825 = state_43750;
(statearr_43793_43825[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43750);

return cljs.core.cst$kw$recur;
} else {
throw e43792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43826 = state_43750;
state_43750 = G__43826;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_43750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_43750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___43796,mults,ensure_mult,p))
})();
var state__40694__auto__ = (function (){var statearr_43794 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43794[(6)] = c__40692__auto___43796);

return statearr_43794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___43796,mults,ensure_mult,p))
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
var G__43828 = arguments.length;
switch (G__43828) {
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
var G__43831 = arguments.length;
switch (G__43831) {
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
var G__43834 = arguments.length;
switch (G__43834) {
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
var c__40692__auto___43901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___43901,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___43901,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43873){
var state_val_43874 = (state_43873[(1)]);
if((state_val_43874 === (7))){
var state_43873__$1 = state_43873;
var statearr_43875_43902 = state_43873__$1;
(statearr_43875_43902[(2)] = null);

(statearr_43875_43902[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (1))){
var state_43873__$1 = state_43873;
var statearr_43876_43903 = state_43873__$1;
(statearr_43876_43903[(2)] = null);

(statearr_43876_43903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (4))){
var inst_43837 = (state_43873[(7)]);
var inst_43839 = (inst_43837 < cnt);
var state_43873__$1 = state_43873;
if(cljs.core.truth_(inst_43839)){
var statearr_43877_43904 = state_43873__$1;
(statearr_43877_43904[(1)] = (6));

} else {
var statearr_43878_43905 = state_43873__$1;
(statearr_43878_43905[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (15))){
var inst_43869 = (state_43873[(2)]);
var state_43873__$1 = state_43873;
var statearr_43879_43906 = state_43873__$1;
(statearr_43879_43906[(2)] = inst_43869);

(statearr_43879_43906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (13))){
var inst_43862 = cljs.core.async.close_BANG_(out);
var state_43873__$1 = state_43873;
var statearr_43880_43907 = state_43873__$1;
(statearr_43880_43907[(2)] = inst_43862);

(statearr_43880_43907[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (6))){
var state_43873__$1 = state_43873;
var statearr_43881_43908 = state_43873__$1;
(statearr_43881_43908[(2)] = null);

(statearr_43881_43908[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (3))){
var inst_43871 = (state_43873[(2)]);
var state_43873__$1 = state_43873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43873__$1,inst_43871);
} else {
if((state_val_43874 === (12))){
var inst_43859 = (state_43873[(8)]);
var inst_43859__$1 = (state_43873[(2)]);
var inst_43860 = cljs.core.some(cljs.core.nil_QMARK_,inst_43859__$1);
var state_43873__$1 = (function (){var statearr_43882 = state_43873;
(statearr_43882[(8)] = inst_43859__$1);

return statearr_43882;
})();
if(cljs.core.truth_(inst_43860)){
var statearr_43883_43909 = state_43873__$1;
(statearr_43883_43909[(1)] = (13));

} else {
var statearr_43884_43910 = state_43873__$1;
(statearr_43884_43910[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (2))){
var inst_43836 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43837 = (0);
var state_43873__$1 = (function (){var statearr_43885 = state_43873;
(statearr_43885[(7)] = inst_43837);

(statearr_43885[(9)] = inst_43836);

return statearr_43885;
})();
var statearr_43886_43911 = state_43873__$1;
(statearr_43886_43911[(2)] = null);

(statearr_43886_43911[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (11))){
var inst_43837 = (state_43873[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43873,(10),Object,null,(9));
var inst_43846 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43837) : chs__$1.call(null,inst_43837));
var inst_43847 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43837) : done.call(null,inst_43837));
var inst_43848 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43846,inst_43847);
var state_43873__$1 = state_43873;
var statearr_43887_43912 = state_43873__$1;
(statearr_43887_43912[(2)] = inst_43848);


cljs.core.async.impl.ioc_helpers.process_exception(state_43873__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (9))){
var inst_43837 = (state_43873[(7)]);
var inst_43850 = (state_43873[(2)]);
var inst_43851 = (inst_43837 + (1));
var inst_43837__$1 = inst_43851;
var state_43873__$1 = (function (){var statearr_43888 = state_43873;
(statearr_43888[(7)] = inst_43837__$1);

(statearr_43888[(10)] = inst_43850);

return statearr_43888;
})();
var statearr_43889_43913 = state_43873__$1;
(statearr_43889_43913[(2)] = null);

(statearr_43889_43913[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (5))){
var inst_43857 = (state_43873[(2)]);
var state_43873__$1 = (function (){var statearr_43890 = state_43873;
(statearr_43890[(11)] = inst_43857);

return statearr_43890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43873__$1,(12),dchan);
} else {
if((state_val_43874 === (14))){
var inst_43859 = (state_43873[(8)]);
var inst_43864 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43859);
var state_43873__$1 = state_43873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43873__$1,(16),out,inst_43864);
} else {
if((state_val_43874 === (16))){
var inst_43866 = (state_43873[(2)]);
var state_43873__$1 = (function (){var statearr_43891 = state_43873;
(statearr_43891[(12)] = inst_43866);

return statearr_43891;
})();
var statearr_43892_43914 = state_43873__$1;
(statearr_43892_43914[(2)] = null);

(statearr_43892_43914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (10))){
var inst_43841 = (state_43873[(2)]);
var inst_43842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43873__$1 = (function (){var statearr_43893 = state_43873;
(statearr_43893[(13)] = inst_43841);

return statearr_43893;
})();
var statearr_43894_43915 = state_43873__$1;
(statearr_43894_43915[(2)] = inst_43842);


cljs.core.async.impl.ioc_helpers.process_exception(state_43873__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_43874 === (8))){
var inst_43855 = (state_43873[(2)]);
var state_43873__$1 = state_43873;
var statearr_43895_43916 = state_43873__$1;
(statearr_43895_43916[(2)] = inst_43855);

(statearr_43895_43916[(1)] = (5));


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
});})(c__40692__auto___43901,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40501__auto__,c__40692__auto___43901,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_43896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43896[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_43896[(1)] = (1));

return statearr_43896;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_43873){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43873);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43897){if((e43897 instanceof Object)){
var ex__40505__auto__ = e43897;
var statearr_43898_43917 = state_43873;
(statearr_43898_43917[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43873);

return cljs.core.cst$kw$recur;
} else {
throw e43897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43918 = state_43873;
state_43873 = G__43918;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_43873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_43873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___43901,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40694__auto__ = (function (){var statearr_43899 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43899[(6)] = c__40692__auto___43901);

return statearr_43899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___43901,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43921 = arguments.length;
switch (G__43921) {
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
var c__40692__auto___43975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___43975,out){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___43975,out){
return (function (state_43953){
var state_val_43954 = (state_43953[(1)]);
if((state_val_43954 === (7))){
var inst_43933 = (state_43953[(7)]);
var inst_43932 = (state_43953[(8)]);
var inst_43932__$1 = (state_43953[(2)]);
var inst_43933__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43932__$1,(0),null);
var inst_43934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43932__$1,(1),null);
var inst_43935 = (inst_43933__$1 == null);
var state_43953__$1 = (function (){var statearr_43955 = state_43953;
(statearr_43955[(7)] = inst_43933__$1);

(statearr_43955[(9)] = inst_43934);

(statearr_43955[(8)] = inst_43932__$1);

return statearr_43955;
})();
if(cljs.core.truth_(inst_43935)){
var statearr_43956_43976 = state_43953__$1;
(statearr_43956_43976[(1)] = (8));

} else {
var statearr_43957_43977 = state_43953__$1;
(statearr_43957_43977[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43954 === (1))){
var inst_43922 = cljs.core.vec(chs);
var inst_43923 = inst_43922;
var state_43953__$1 = (function (){var statearr_43958 = state_43953;
(statearr_43958[(10)] = inst_43923);

return statearr_43958;
})();
var statearr_43959_43978 = state_43953__$1;
(statearr_43959_43978[(2)] = null);

(statearr_43959_43978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43954 === (4))){
var inst_43923 = (state_43953[(10)]);
var state_43953__$1 = state_43953;
return cljs.core.async.ioc_alts_BANG_(state_43953__$1,(7),inst_43923);
} else {
if((state_val_43954 === (6))){
var inst_43949 = (state_43953[(2)]);
var state_43953__$1 = state_43953;
var statearr_43960_43979 = state_43953__$1;
(statearr_43960_43979[(2)] = inst_43949);

(statearr_43960_43979[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43954 === (3))){
var inst_43951 = (state_43953[(2)]);
var state_43953__$1 = state_43953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43953__$1,inst_43951);
} else {
if((state_val_43954 === (2))){
var inst_43923 = (state_43953[(10)]);
var inst_43925 = cljs.core.count(inst_43923);
var inst_43926 = (inst_43925 > (0));
var state_43953__$1 = state_43953;
if(cljs.core.truth_(inst_43926)){
var statearr_43962_43980 = state_43953__$1;
(statearr_43962_43980[(1)] = (4));

} else {
var statearr_43963_43981 = state_43953__$1;
(statearr_43963_43981[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43954 === (11))){
var inst_43923 = (state_43953[(10)]);
var inst_43942 = (state_43953[(2)]);
var tmp43961 = inst_43923;
var inst_43923__$1 = tmp43961;
var state_43953__$1 = (function (){var statearr_43964 = state_43953;
(statearr_43964[(11)] = inst_43942);

(statearr_43964[(10)] = inst_43923__$1);

return statearr_43964;
})();
var statearr_43965_43982 = state_43953__$1;
(statearr_43965_43982[(2)] = null);

(statearr_43965_43982[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43954 === (9))){
var inst_43933 = (state_43953[(7)]);
var state_43953__$1 = state_43953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43953__$1,(11),out,inst_43933);
} else {
if((state_val_43954 === (5))){
var inst_43947 = cljs.core.async.close_BANG_(out);
var state_43953__$1 = state_43953;
var statearr_43966_43983 = state_43953__$1;
(statearr_43966_43983[(2)] = inst_43947);

(statearr_43966_43983[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43954 === (10))){
var inst_43945 = (state_43953[(2)]);
var state_43953__$1 = state_43953;
var statearr_43967_43984 = state_43953__$1;
(statearr_43967_43984[(2)] = inst_43945);

(statearr_43967_43984[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43954 === (8))){
var inst_43933 = (state_43953[(7)]);
var inst_43934 = (state_43953[(9)]);
var inst_43923 = (state_43953[(10)]);
var inst_43932 = (state_43953[(8)]);
var inst_43937 = (function (){var cs = inst_43923;
var vec__43928 = inst_43932;
var v = inst_43933;
var c = inst_43934;
return ((function (cs,vec__43928,v,c,inst_43933,inst_43934,inst_43923,inst_43932,state_val_43954,c__40692__auto___43975,out){
return (function (p1__43919_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43919_SHARP_);
});
;})(cs,vec__43928,v,c,inst_43933,inst_43934,inst_43923,inst_43932,state_val_43954,c__40692__auto___43975,out))
})();
var inst_43938 = cljs.core.filterv(inst_43937,inst_43923);
var inst_43923__$1 = inst_43938;
var state_43953__$1 = (function (){var statearr_43968 = state_43953;
(statearr_43968[(10)] = inst_43923__$1);

return statearr_43968;
})();
var statearr_43969_43985 = state_43953__$1;
(statearr_43969_43985[(2)] = null);

(statearr_43969_43985[(1)] = (2));


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
});})(c__40692__auto___43975,out))
;
return ((function (switch__40501__auto__,c__40692__auto___43975,out){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_43970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43970[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_43970[(1)] = (1));

return statearr_43970;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_43953){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_43953);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e43971){if((e43971 instanceof Object)){
var ex__40505__auto__ = e43971;
var statearr_43972_43986 = state_43953;
(statearr_43972_43986[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43953);

return cljs.core.cst$kw$recur;
} else {
throw e43971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__43987 = state_43953;
state_43953 = G__43987;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_43953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_43953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___43975,out))
})();
var state__40694__auto__ = (function (){var statearr_43973 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_43973[(6)] = c__40692__auto___43975);

return statearr_43973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___43975,out))
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
var G__43989 = arguments.length;
switch (G__43989) {
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
var c__40692__auto___44034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___44034,out){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___44034,out){
return (function (state_44013){
var state_val_44014 = (state_44013[(1)]);
if((state_val_44014 === (7))){
var inst_43995 = (state_44013[(7)]);
var inst_43995__$1 = (state_44013[(2)]);
var inst_43996 = (inst_43995__$1 == null);
var inst_43997 = cljs.core.not(inst_43996);
var state_44013__$1 = (function (){var statearr_44015 = state_44013;
(statearr_44015[(7)] = inst_43995__$1);

return statearr_44015;
})();
if(inst_43997){
var statearr_44016_44035 = state_44013__$1;
(statearr_44016_44035[(1)] = (8));

} else {
var statearr_44017_44036 = state_44013__$1;
(statearr_44017_44036[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (1))){
var inst_43990 = (0);
var state_44013__$1 = (function (){var statearr_44018 = state_44013;
(statearr_44018[(8)] = inst_43990);

return statearr_44018;
})();
var statearr_44019_44037 = state_44013__$1;
(statearr_44019_44037[(2)] = null);

(statearr_44019_44037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (4))){
var state_44013__$1 = state_44013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44013__$1,(7),ch);
} else {
if((state_val_44014 === (6))){
var inst_44008 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
var statearr_44020_44038 = state_44013__$1;
(statearr_44020_44038[(2)] = inst_44008);

(statearr_44020_44038[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (3))){
var inst_44010 = (state_44013[(2)]);
var inst_44011 = cljs.core.async.close_BANG_(out);
var state_44013__$1 = (function (){var statearr_44021 = state_44013;
(statearr_44021[(9)] = inst_44010);

return statearr_44021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44013__$1,inst_44011);
} else {
if((state_val_44014 === (2))){
var inst_43990 = (state_44013[(8)]);
var inst_43992 = (inst_43990 < n);
var state_44013__$1 = state_44013;
if(cljs.core.truth_(inst_43992)){
var statearr_44022_44039 = state_44013__$1;
(statearr_44022_44039[(1)] = (4));

} else {
var statearr_44023_44040 = state_44013__$1;
(statearr_44023_44040[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (11))){
var inst_43990 = (state_44013[(8)]);
var inst_44000 = (state_44013[(2)]);
var inst_44001 = (inst_43990 + (1));
var inst_43990__$1 = inst_44001;
var state_44013__$1 = (function (){var statearr_44024 = state_44013;
(statearr_44024[(10)] = inst_44000);

(statearr_44024[(8)] = inst_43990__$1);

return statearr_44024;
})();
var statearr_44025_44041 = state_44013__$1;
(statearr_44025_44041[(2)] = null);

(statearr_44025_44041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (9))){
var state_44013__$1 = state_44013;
var statearr_44026_44042 = state_44013__$1;
(statearr_44026_44042[(2)] = null);

(statearr_44026_44042[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (5))){
var state_44013__$1 = state_44013;
var statearr_44027_44043 = state_44013__$1;
(statearr_44027_44043[(2)] = null);

(statearr_44027_44043[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (10))){
var inst_44005 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
var statearr_44028_44044 = state_44013__$1;
(statearr_44028_44044[(2)] = inst_44005);

(statearr_44028_44044[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44014 === (8))){
var inst_43995 = (state_44013[(7)]);
var state_44013__$1 = state_44013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44013__$1,(11),out,inst_43995);
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
});})(c__40692__auto___44034,out))
;
return ((function (switch__40501__auto__,c__40692__auto___44034,out){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_44029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44029[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_44029[(1)] = (1));

return statearr_44029;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_44013){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_44013);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e44030){if((e44030 instanceof Object)){
var ex__40505__auto__ = e44030;
var statearr_44031_44045 = state_44013;
(statearr_44031_44045[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44013);

return cljs.core.cst$kw$recur;
} else {
throw e44030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__44046 = state_44013;
state_44013 = G__44046;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_44013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_44013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___44034,out))
})();
var state__40694__auto__ = (function (){var statearr_44032 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_44032[(6)] = c__40692__auto___44034);

return statearr_44032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___44034,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44048 = (function (f,ch,meta44049){
this.f = f;
this.ch = ch;
this.meta44049 = meta44049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44050,meta44049__$1){
var self__ = this;
var _44050__$1 = this;
return (new cljs.core.async.t_cljs$core$async44048(self__.f,self__.ch,meta44049__$1));
});

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44050){
var self__ = this;
var _44050__$1 = this;
return self__.meta44049;
});

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44051 = (function (f,ch,meta44049,_,fn1,meta44052){
this.f = f;
this.ch = ch;
this.meta44049 = meta44049;
this._ = _;
this.fn1 = fn1;
this.meta44052 = meta44052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44053,meta44052__$1){
var self__ = this;
var _44053__$1 = this;
return (new cljs.core.async.t_cljs$core$async44051(self__.f,self__.ch,self__.meta44049,self__._,self__.fn1,meta44052__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async44051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44053){
var self__ = this;
var _44053__$1 = this;
return self__.meta44052;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44047_SHARP_){
var G__44054 = (((p1__44047_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44047_SHARP_) : self__.f.call(null,p1__44047_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44054) : f1.call(null,G__44054));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async44051.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44049,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async44048], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta44052], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44051";

cljs.core.async.t_cljs$core$async44051.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44051");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44051.
 */
cljs.core.async.__GT_t_cljs$core$async44051 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44051(f__$1,ch__$1,meta44049__$1,___$2,fn1__$1,meta44052){
return (new cljs.core.async.t_cljs$core$async44051(f__$1,ch__$1,meta44049__$1,___$2,fn1__$1,meta44052));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async44051(self__.f,self__.ch,self__.meta44049,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44055 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44055) : self__.f.call(null,G__44055));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async44048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44049], null);
});

cljs.core.async.t_cljs$core$async44048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44048";

cljs.core.async.t_cljs$core$async44048.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44048");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44048.
 */
cljs.core.async.__GT_t_cljs$core$async44048 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44048(f__$1,ch__$1,meta44049){
return (new cljs.core.async.t_cljs$core$async44048(f__$1,ch__$1,meta44049));
});

}

return (new cljs.core.async.t_cljs$core$async44048(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44056 = (function (f,ch,meta44057){
this.f = f;
this.ch = ch;
this.meta44057 = meta44057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44058,meta44057__$1){
var self__ = this;
var _44058__$1 = this;
return (new cljs.core.async.t_cljs$core$async44056(self__.f,self__.ch,meta44057__$1));
});

cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44058){
var self__ = this;
var _44058__$1 = this;
return self__.meta44057;
});

cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async44056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44057], null);
});

cljs.core.async.t_cljs$core$async44056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44056";

cljs.core.async.t_cljs$core$async44056.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44056");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44056.
 */
cljs.core.async.__GT_t_cljs$core$async44056 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44056(f__$1,ch__$1,meta44057){
return (new cljs.core.async.t_cljs$core$async44056(f__$1,ch__$1,meta44057));
});

}

return (new cljs.core.async.t_cljs$core$async44056(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44059 = (function (p,ch,meta44060){
this.p = p;
this.ch = ch;
this.meta44060 = meta44060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44061,meta44060__$1){
var self__ = this;
var _44061__$1 = this;
return (new cljs.core.async.t_cljs$core$async44059(self__.p,self__.ch,meta44060__$1));
});

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44061){
var self__ = this;
var _44061__$1 = this;
return self__.meta44060;
});

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async44059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta44060], null);
});

cljs.core.async.t_cljs$core$async44059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44059";

cljs.core.async.t_cljs$core$async44059.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44059");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44059.
 */
cljs.core.async.__GT_t_cljs$core$async44059 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44059(p__$1,ch__$1,meta44060){
return (new cljs.core.async.t_cljs$core$async44059(p__$1,ch__$1,meta44060));
});

}

return (new cljs.core.async.t_cljs$core$async44059(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44063 = arguments.length;
switch (G__44063) {
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
var c__40692__auto___44103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___44103,out){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___44103,out){
return (function (state_44084){
var state_val_44085 = (state_44084[(1)]);
if((state_val_44085 === (7))){
var inst_44080 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
var statearr_44086_44104 = state_44084__$1;
(statearr_44086_44104[(2)] = inst_44080);

(statearr_44086_44104[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (1))){
var state_44084__$1 = state_44084;
var statearr_44087_44105 = state_44084__$1;
(statearr_44087_44105[(2)] = null);

(statearr_44087_44105[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (4))){
var inst_44066 = (state_44084[(7)]);
var inst_44066__$1 = (state_44084[(2)]);
var inst_44067 = (inst_44066__$1 == null);
var state_44084__$1 = (function (){var statearr_44088 = state_44084;
(statearr_44088[(7)] = inst_44066__$1);

return statearr_44088;
})();
if(cljs.core.truth_(inst_44067)){
var statearr_44089_44106 = state_44084__$1;
(statearr_44089_44106[(1)] = (5));

} else {
var statearr_44090_44107 = state_44084__$1;
(statearr_44090_44107[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (6))){
var inst_44066 = (state_44084[(7)]);
var inst_44071 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44066) : p.call(null,inst_44066));
var state_44084__$1 = state_44084;
if(cljs.core.truth_(inst_44071)){
var statearr_44091_44108 = state_44084__$1;
(statearr_44091_44108[(1)] = (8));

} else {
var statearr_44092_44109 = state_44084__$1;
(statearr_44092_44109[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (3))){
var inst_44082 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44084__$1,inst_44082);
} else {
if((state_val_44085 === (2))){
var state_44084__$1 = state_44084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44084__$1,(4),ch);
} else {
if((state_val_44085 === (11))){
var inst_44074 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
var statearr_44093_44110 = state_44084__$1;
(statearr_44093_44110[(2)] = inst_44074);

(statearr_44093_44110[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (9))){
var state_44084__$1 = state_44084;
var statearr_44094_44111 = state_44084__$1;
(statearr_44094_44111[(2)] = null);

(statearr_44094_44111[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (5))){
var inst_44069 = cljs.core.async.close_BANG_(out);
var state_44084__$1 = state_44084;
var statearr_44095_44112 = state_44084__$1;
(statearr_44095_44112[(2)] = inst_44069);

(statearr_44095_44112[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (10))){
var inst_44077 = (state_44084[(2)]);
var state_44084__$1 = (function (){var statearr_44096 = state_44084;
(statearr_44096[(8)] = inst_44077);

return statearr_44096;
})();
var statearr_44097_44113 = state_44084__$1;
(statearr_44097_44113[(2)] = null);

(statearr_44097_44113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44085 === (8))){
var inst_44066 = (state_44084[(7)]);
var state_44084__$1 = state_44084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44084__$1,(11),out,inst_44066);
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
});})(c__40692__auto___44103,out))
;
return ((function (switch__40501__auto__,c__40692__auto___44103,out){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_44098 = [null,null,null,null,null,null,null,null,null];
(statearr_44098[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_44098[(1)] = (1));

return statearr_44098;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_44084){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_44084);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e44099){if((e44099 instanceof Object)){
var ex__40505__auto__ = e44099;
var statearr_44100_44114 = state_44084;
(statearr_44100_44114[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44084);

return cljs.core.cst$kw$recur;
} else {
throw e44099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__44115 = state_44084;
state_44084 = G__44115;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_44084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_44084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___44103,out))
})();
var state__40694__auto__ = (function (){var statearr_44101 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_44101[(6)] = c__40692__auto___44103);

return statearr_44101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___44103,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44117 = arguments.length;
switch (G__44117) {
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
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__){
return (function (state_44180){
var state_val_44181 = (state_44180[(1)]);
if((state_val_44181 === (7))){
var inst_44176 = (state_44180[(2)]);
var state_44180__$1 = state_44180;
var statearr_44182_44220 = state_44180__$1;
(statearr_44182_44220[(2)] = inst_44176);

(statearr_44182_44220[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (20))){
var inst_44146 = (state_44180[(7)]);
var inst_44157 = (state_44180[(2)]);
var inst_44158 = cljs.core.next(inst_44146);
var inst_44132 = inst_44158;
var inst_44133 = null;
var inst_44134 = (0);
var inst_44135 = (0);
var state_44180__$1 = (function (){var statearr_44183 = state_44180;
(statearr_44183[(8)] = inst_44135);

(statearr_44183[(9)] = inst_44134);

(statearr_44183[(10)] = inst_44133);

(statearr_44183[(11)] = inst_44157);

(statearr_44183[(12)] = inst_44132);

return statearr_44183;
})();
var statearr_44184_44221 = state_44180__$1;
(statearr_44184_44221[(2)] = null);

(statearr_44184_44221[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (1))){
var state_44180__$1 = state_44180;
var statearr_44185_44222 = state_44180__$1;
(statearr_44185_44222[(2)] = null);

(statearr_44185_44222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (4))){
var inst_44121 = (state_44180[(13)]);
var inst_44121__$1 = (state_44180[(2)]);
var inst_44122 = (inst_44121__$1 == null);
var state_44180__$1 = (function (){var statearr_44186 = state_44180;
(statearr_44186[(13)] = inst_44121__$1);

return statearr_44186;
})();
if(cljs.core.truth_(inst_44122)){
var statearr_44187_44223 = state_44180__$1;
(statearr_44187_44223[(1)] = (5));

} else {
var statearr_44188_44224 = state_44180__$1;
(statearr_44188_44224[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (15))){
var state_44180__$1 = state_44180;
var statearr_44192_44225 = state_44180__$1;
(statearr_44192_44225[(2)] = null);

(statearr_44192_44225[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (21))){
var state_44180__$1 = state_44180;
var statearr_44193_44226 = state_44180__$1;
(statearr_44193_44226[(2)] = null);

(statearr_44193_44226[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (13))){
var inst_44135 = (state_44180[(8)]);
var inst_44134 = (state_44180[(9)]);
var inst_44133 = (state_44180[(10)]);
var inst_44132 = (state_44180[(12)]);
var inst_44142 = (state_44180[(2)]);
var inst_44143 = (inst_44135 + (1));
var tmp44189 = inst_44134;
var tmp44190 = inst_44133;
var tmp44191 = inst_44132;
var inst_44132__$1 = tmp44191;
var inst_44133__$1 = tmp44190;
var inst_44134__$1 = tmp44189;
var inst_44135__$1 = inst_44143;
var state_44180__$1 = (function (){var statearr_44194 = state_44180;
(statearr_44194[(8)] = inst_44135__$1);

(statearr_44194[(9)] = inst_44134__$1);

(statearr_44194[(10)] = inst_44133__$1);

(statearr_44194[(14)] = inst_44142);

(statearr_44194[(12)] = inst_44132__$1);

return statearr_44194;
})();
var statearr_44195_44227 = state_44180__$1;
(statearr_44195_44227[(2)] = null);

(statearr_44195_44227[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (22))){
var state_44180__$1 = state_44180;
var statearr_44196_44228 = state_44180__$1;
(statearr_44196_44228[(2)] = null);

(statearr_44196_44228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (6))){
var inst_44121 = (state_44180[(13)]);
var inst_44130 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44121) : f.call(null,inst_44121));
var inst_44131 = cljs.core.seq(inst_44130);
var inst_44132 = inst_44131;
var inst_44133 = null;
var inst_44134 = (0);
var inst_44135 = (0);
var state_44180__$1 = (function (){var statearr_44197 = state_44180;
(statearr_44197[(8)] = inst_44135);

(statearr_44197[(9)] = inst_44134);

(statearr_44197[(10)] = inst_44133);

(statearr_44197[(12)] = inst_44132);

return statearr_44197;
})();
var statearr_44198_44229 = state_44180__$1;
(statearr_44198_44229[(2)] = null);

(statearr_44198_44229[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (17))){
var inst_44146 = (state_44180[(7)]);
var inst_44150 = cljs.core.chunk_first(inst_44146);
var inst_44151 = cljs.core.chunk_rest(inst_44146);
var inst_44152 = cljs.core.count(inst_44150);
var inst_44132 = inst_44151;
var inst_44133 = inst_44150;
var inst_44134 = inst_44152;
var inst_44135 = (0);
var state_44180__$1 = (function (){var statearr_44199 = state_44180;
(statearr_44199[(8)] = inst_44135);

(statearr_44199[(9)] = inst_44134);

(statearr_44199[(10)] = inst_44133);

(statearr_44199[(12)] = inst_44132);

return statearr_44199;
})();
var statearr_44200_44230 = state_44180__$1;
(statearr_44200_44230[(2)] = null);

(statearr_44200_44230[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (3))){
var inst_44178 = (state_44180[(2)]);
var state_44180__$1 = state_44180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44180__$1,inst_44178);
} else {
if((state_val_44181 === (12))){
var inst_44166 = (state_44180[(2)]);
var state_44180__$1 = state_44180;
var statearr_44201_44231 = state_44180__$1;
(statearr_44201_44231[(2)] = inst_44166);

(statearr_44201_44231[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (2))){
var state_44180__$1 = state_44180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44180__$1,(4),in$);
} else {
if((state_val_44181 === (23))){
var inst_44174 = (state_44180[(2)]);
var state_44180__$1 = state_44180;
var statearr_44202_44232 = state_44180__$1;
(statearr_44202_44232[(2)] = inst_44174);

(statearr_44202_44232[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (19))){
var inst_44161 = (state_44180[(2)]);
var state_44180__$1 = state_44180;
var statearr_44203_44233 = state_44180__$1;
(statearr_44203_44233[(2)] = inst_44161);

(statearr_44203_44233[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (11))){
var inst_44146 = (state_44180[(7)]);
var inst_44132 = (state_44180[(12)]);
var inst_44146__$1 = cljs.core.seq(inst_44132);
var state_44180__$1 = (function (){var statearr_44204 = state_44180;
(statearr_44204[(7)] = inst_44146__$1);

return statearr_44204;
})();
if(inst_44146__$1){
var statearr_44205_44234 = state_44180__$1;
(statearr_44205_44234[(1)] = (14));

} else {
var statearr_44206_44235 = state_44180__$1;
(statearr_44206_44235[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (9))){
var inst_44168 = (state_44180[(2)]);
var inst_44169 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44180__$1 = (function (){var statearr_44207 = state_44180;
(statearr_44207[(15)] = inst_44168);

return statearr_44207;
})();
if(cljs.core.truth_(inst_44169)){
var statearr_44208_44236 = state_44180__$1;
(statearr_44208_44236[(1)] = (21));

} else {
var statearr_44209_44237 = state_44180__$1;
(statearr_44209_44237[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (5))){
var inst_44124 = cljs.core.async.close_BANG_(out);
var state_44180__$1 = state_44180;
var statearr_44210_44238 = state_44180__$1;
(statearr_44210_44238[(2)] = inst_44124);

(statearr_44210_44238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (14))){
var inst_44146 = (state_44180[(7)]);
var inst_44148 = cljs.core.chunked_seq_QMARK_(inst_44146);
var state_44180__$1 = state_44180;
if(inst_44148){
var statearr_44211_44239 = state_44180__$1;
(statearr_44211_44239[(1)] = (17));

} else {
var statearr_44212_44240 = state_44180__$1;
(statearr_44212_44240[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (16))){
var inst_44164 = (state_44180[(2)]);
var state_44180__$1 = state_44180;
var statearr_44213_44241 = state_44180__$1;
(statearr_44213_44241[(2)] = inst_44164);

(statearr_44213_44241[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44181 === (10))){
var inst_44135 = (state_44180[(8)]);
var inst_44133 = (state_44180[(10)]);
var inst_44140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44133,inst_44135);
var state_44180__$1 = state_44180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44180__$1,(13),out,inst_44140);
} else {
if((state_val_44181 === (18))){
var inst_44146 = (state_44180[(7)]);
var inst_44155 = cljs.core.first(inst_44146);
var state_44180__$1 = state_44180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44180__$1,(20),out,inst_44155);
} else {
if((state_val_44181 === (8))){
var inst_44135 = (state_44180[(8)]);
var inst_44134 = (state_44180[(9)]);
var inst_44137 = (inst_44135 < inst_44134);
var inst_44138 = inst_44137;
var state_44180__$1 = state_44180;
if(cljs.core.truth_(inst_44138)){
var statearr_44214_44242 = state_44180__$1;
(statearr_44214_44242[(1)] = (10));

} else {
var statearr_44215_44243 = state_44180__$1;
(statearr_44215_44243[(1)] = (11));

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
});})(c__40692__auto__))
;
return ((function (switch__40501__auto__,c__40692__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40502__auto____0 = (function (){
var statearr_44216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44216[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40502__auto__);

(statearr_44216[(1)] = (1));

return statearr_44216;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40502__auto____1 = (function (state_44180){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_44180);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e44217){if((e44217 instanceof Object)){
var ex__40505__auto__ = e44217;
var statearr_44218_44244 = state_44180;
(statearr_44218_44244[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44180);

return cljs.core.cst$kw$recur;
} else {
throw e44217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__44245 = state_44180;
state_44180 = G__44245;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40502__auto__ = function(state_44180){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40502__auto____1.call(this,state_44180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__))
})();
var state__40694__auto__ = (function (){var statearr_44219 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_44219[(6)] = c__40692__auto__);

return statearr_44219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__))
);

return c__40692__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44247 = arguments.length;
switch (G__44247) {
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
var G__44250 = arguments.length;
switch (G__44250) {
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
var G__44253 = arguments.length;
switch (G__44253) {
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
var c__40692__auto___44300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___44300,out){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___44300,out){
return (function (state_44277){
var state_val_44278 = (state_44277[(1)]);
if((state_val_44278 === (7))){
var inst_44272 = (state_44277[(2)]);
var state_44277__$1 = state_44277;
var statearr_44279_44301 = state_44277__$1;
(statearr_44279_44301[(2)] = inst_44272);

(statearr_44279_44301[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44278 === (1))){
var inst_44254 = null;
var state_44277__$1 = (function (){var statearr_44280 = state_44277;
(statearr_44280[(7)] = inst_44254);

return statearr_44280;
})();
var statearr_44281_44302 = state_44277__$1;
(statearr_44281_44302[(2)] = null);

(statearr_44281_44302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44278 === (4))){
var inst_44257 = (state_44277[(8)]);
var inst_44257__$1 = (state_44277[(2)]);
var inst_44258 = (inst_44257__$1 == null);
var inst_44259 = cljs.core.not(inst_44258);
var state_44277__$1 = (function (){var statearr_44282 = state_44277;
(statearr_44282[(8)] = inst_44257__$1);

return statearr_44282;
})();
if(inst_44259){
var statearr_44283_44303 = state_44277__$1;
(statearr_44283_44303[(1)] = (5));

} else {
var statearr_44284_44304 = state_44277__$1;
(statearr_44284_44304[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44278 === (6))){
var state_44277__$1 = state_44277;
var statearr_44285_44305 = state_44277__$1;
(statearr_44285_44305[(2)] = null);

(statearr_44285_44305[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44278 === (3))){
var inst_44274 = (state_44277[(2)]);
var inst_44275 = cljs.core.async.close_BANG_(out);
var state_44277__$1 = (function (){var statearr_44286 = state_44277;
(statearr_44286[(9)] = inst_44274);

return statearr_44286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44277__$1,inst_44275);
} else {
if((state_val_44278 === (2))){
var state_44277__$1 = state_44277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44277__$1,(4),ch);
} else {
if((state_val_44278 === (11))){
var inst_44257 = (state_44277[(8)]);
var inst_44266 = (state_44277[(2)]);
var inst_44254 = inst_44257;
var state_44277__$1 = (function (){var statearr_44287 = state_44277;
(statearr_44287[(7)] = inst_44254);

(statearr_44287[(10)] = inst_44266);

return statearr_44287;
})();
var statearr_44288_44306 = state_44277__$1;
(statearr_44288_44306[(2)] = null);

(statearr_44288_44306[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44278 === (9))){
var inst_44257 = (state_44277[(8)]);
var state_44277__$1 = state_44277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44277__$1,(11),out,inst_44257);
} else {
if((state_val_44278 === (5))){
var inst_44257 = (state_44277[(8)]);
var inst_44254 = (state_44277[(7)]);
var inst_44261 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44257,inst_44254);
var state_44277__$1 = state_44277;
if(inst_44261){
var statearr_44290_44307 = state_44277__$1;
(statearr_44290_44307[(1)] = (8));

} else {
var statearr_44291_44308 = state_44277__$1;
(statearr_44291_44308[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44278 === (10))){
var inst_44269 = (state_44277[(2)]);
var state_44277__$1 = state_44277;
var statearr_44292_44309 = state_44277__$1;
(statearr_44292_44309[(2)] = inst_44269);

(statearr_44292_44309[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44278 === (8))){
var inst_44254 = (state_44277[(7)]);
var tmp44289 = inst_44254;
var inst_44254__$1 = tmp44289;
var state_44277__$1 = (function (){var statearr_44293 = state_44277;
(statearr_44293[(7)] = inst_44254__$1);

return statearr_44293;
})();
var statearr_44294_44310 = state_44277__$1;
(statearr_44294_44310[(2)] = null);

(statearr_44294_44310[(1)] = (2));


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
});})(c__40692__auto___44300,out))
;
return ((function (switch__40501__auto__,c__40692__auto___44300,out){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_44295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44295[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_44295[(1)] = (1));

return statearr_44295;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_44277){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_44277);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e44296){if((e44296 instanceof Object)){
var ex__40505__auto__ = e44296;
var statearr_44297_44311 = state_44277;
(statearr_44297_44311[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44277);

return cljs.core.cst$kw$recur;
} else {
throw e44296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__44312 = state_44277;
state_44277 = G__44312;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_44277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_44277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___44300,out))
})();
var state__40694__auto__ = (function (){var statearr_44298 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_44298[(6)] = c__40692__auto___44300);

return statearr_44298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___44300,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44314 = arguments.length;
switch (G__44314) {
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
var c__40692__auto___44380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___44380,out){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___44380,out){
return (function (state_44352){
var state_val_44353 = (state_44352[(1)]);
if((state_val_44353 === (7))){
var inst_44348 = (state_44352[(2)]);
var state_44352__$1 = state_44352;
var statearr_44354_44381 = state_44352__$1;
(statearr_44354_44381[(2)] = inst_44348);

(statearr_44354_44381[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (1))){
var inst_44315 = (new Array(n));
var inst_44316 = inst_44315;
var inst_44317 = (0);
var state_44352__$1 = (function (){var statearr_44355 = state_44352;
(statearr_44355[(7)] = inst_44316);

(statearr_44355[(8)] = inst_44317);

return statearr_44355;
})();
var statearr_44356_44382 = state_44352__$1;
(statearr_44356_44382[(2)] = null);

(statearr_44356_44382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (4))){
var inst_44320 = (state_44352[(9)]);
var inst_44320__$1 = (state_44352[(2)]);
var inst_44321 = (inst_44320__$1 == null);
var inst_44322 = cljs.core.not(inst_44321);
var state_44352__$1 = (function (){var statearr_44357 = state_44352;
(statearr_44357[(9)] = inst_44320__$1);

return statearr_44357;
})();
if(inst_44322){
var statearr_44358_44383 = state_44352__$1;
(statearr_44358_44383[(1)] = (5));

} else {
var statearr_44359_44384 = state_44352__$1;
(statearr_44359_44384[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (15))){
var inst_44342 = (state_44352[(2)]);
var state_44352__$1 = state_44352;
var statearr_44360_44385 = state_44352__$1;
(statearr_44360_44385[(2)] = inst_44342);

(statearr_44360_44385[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (13))){
var state_44352__$1 = state_44352;
var statearr_44361_44386 = state_44352__$1;
(statearr_44361_44386[(2)] = null);

(statearr_44361_44386[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (6))){
var inst_44317 = (state_44352[(8)]);
var inst_44338 = (inst_44317 > (0));
var state_44352__$1 = state_44352;
if(cljs.core.truth_(inst_44338)){
var statearr_44362_44387 = state_44352__$1;
(statearr_44362_44387[(1)] = (12));

} else {
var statearr_44363_44388 = state_44352__$1;
(statearr_44363_44388[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (3))){
var inst_44350 = (state_44352[(2)]);
var state_44352__$1 = state_44352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44352__$1,inst_44350);
} else {
if((state_val_44353 === (12))){
var inst_44316 = (state_44352[(7)]);
var inst_44340 = cljs.core.vec(inst_44316);
var state_44352__$1 = state_44352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44352__$1,(15),out,inst_44340);
} else {
if((state_val_44353 === (2))){
var state_44352__$1 = state_44352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44352__$1,(4),ch);
} else {
if((state_val_44353 === (11))){
var inst_44332 = (state_44352[(2)]);
var inst_44333 = (new Array(n));
var inst_44316 = inst_44333;
var inst_44317 = (0);
var state_44352__$1 = (function (){var statearr_44364 = state_44352;
(statearr_44364[(10)] = inst_44332);

(statearr_44364[(7)] = inst_44316);

(statearr_44364[(8)] = inst_44317);

return statearr_44364;
})();
var statearr_44365_44389 = state_44352__$1;
(statearr_44365_44389[(2)] = null);

(statearr_44365_44389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (9))){
var inst_44316 = (state_44352[(7)]);
var inst_44330 = cljs.core.vec(inst_44316);
var state_44352__$1 = state_44352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44352__$1,(11),out,inst_44330);
} else {
if((state_val_44353 === (5))){
var inst_44325 = (state_44352[(11)]);
var inst_44316 = (state_44352[(7)]);
var inst_44320 = (state_44352[(9)]);
var inst_44317 = (state_44352[(8)]);
var inst_44324 = (inst_44316[inst_44317] = inst_44320);
var inst_44325__$1 = (inst_44317 + (1));
var inst_44326 = (inst_44325__$1 < n);
var state_44352__$1 = (function (){var statearr_44366 = state_44352;
(statearr_44366[(11)] = inst_44325__$1);

(statearr_44366[(12)] = inst_44324);

return statearr_44366;
})();
if(cljs.core.truth_(inst_44326)){
var statearr_44367_44390 = state_44352__$1;
(statearr_44367_44390[(1)] = (8));

} else {
var statearr_44368_44391 = state_44352__$1;
(statearr_44368_44391[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (14))){
var inst_44345 = (state_44352[(2)]);
var inst_44346 = cljs.core.async.close_BANG_(out);
var state_44352__$1 = (function (){var statearr_44370 = state_44352;
(statearr_44370[(13)] = inst_44345);

return statearr_44370;
})();
var statearr_44371_44392 = state_44352__$1;
(statearr_44371_44392[(2)] = inst_44346);

(statearr_44371_44392[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (10))){
var inst_44336 = (state_44352[(2)]);
var state_44352__$1 = state_44352;
var statearr_44372_44393 = state_44352__$1;
(statearr_44372_44393[(2)] = inst_44336);

(statearr_44372_44393[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44353 === (8))){
var inst_44325 = (state_44352[(11)]);
var inst_44316 = (state_44352[(7)]);
var tmp44369 = inst_44316;
var inst_44316__$1 = tmp44369;
var inst_44317 = inst_44325;
var state_44352__$1 = (function (){var statearr_44373 = state_44352;
(statearr_44373[(7)] = inst_44316__$1);

(statearr_44373[(8)] = inst_44317);

return statearr_44373;
})();
var statearr_44374_44394 = state_44352__$1;
(statearr_44374_44394[(2)] = null);

(statearr_44374_44394[(1)] = (2));


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
});})(c__40692__auto___44380,out))
;
return ((function (switch__40501__auto__,c__40692__auto___44380,out){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_44375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44375[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_44375[(1)] = (1));

return statearr_44375;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_44352){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_44352);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e44376){if((e44376 instanceof Object)){
var ex__40505__auto__ = e44376;
var statearr_44377_44395 = state_44352;
(statearr_44377_44395[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44352);

return cljs.core.cst$kw$recur;
} else {
throw e44376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__44396 = state_44352;
state_44352 = G__44396;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_44352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_44352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___44380,out))
})();
var state__40694__auto__ = (function (){var statearr_44378 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_44378[(6)] = c__40692__auto___44380);

return statearr_44378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___44380,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44398 = arguments.length;
switch (G__44398) {
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
var c__40692__auto___44468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___44468,out){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___44468,out){
return (function (state_44440){
var state_val_44441 = (state_44440[(1)]);
if((state_val_44441 === (7))){
var inst_44436 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44442_44469 = state_44440__$1;
(statearr_44442_44469[(2)] = inst_44436);

(statearr_44442_44469[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (1))){
var inst_44399 = [];
var inst_44400 = inst_44399;
var inst_44401 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_44440__$1 = (function (){var statearr_44443 = state_44440;
(statearr_44443[(7)] = inst_44401);

(statearr_44443[(8)] = inst_44400);

return statearr_44443;
})();
var statearr_44444_44470 = state_44440__$1;
(statearr_44444_44470[(2)] = null);

(statearr_44444_44470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (4))){
var inst_44404 = (state_44440[(9)]);
var inst_44404__$1 = (state_44440[(2)]);
var inst_44405 = (inst_44404__$1 == null);
var inst_44406 = cljs.core.not(inst_44405);
var state_44440__$1 = (function (){var statearr_44445 = state_44440;
(statearr_44445[(9)] = inst_44404__$1);

return statearr_44445;
})();
if(inst_44406){
var statearr_44446_44471 = state_44440__$1;
(statearr_44446_44471[(1)] = (5));

} else {
var statearr_44447_44472 = state_44440__$1;
(statearr_44447_44472[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (15))){
var inst_44430 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44448_44473 = state_44440__$1;
(statearr_44448_44473[(2)] = inst_44430);

(statearr_44448_44473[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (13))){
var state_44440__$1 = state_44440;
var statearr_44449_44474 = state_44440__$1;
(statearr_44449_44474[(2)] = null);

(statearr_44449_44474[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (6))){
var inst_44400 = (state_44440[(8)]);
var inst_44425 = inst_44400.length;
var inst_44426 = (inst_44425 > (0));
var state_44440__$1 = state_44440;
if(cljs.core.truth_(inst_44426)){
var statearr_44450_44475 = state_44440__$1;
(statearr_44450_44475[(1)] = (12));

} else {
var statearr_44451_44476 = state_44440__$1;
(statearr_44451_44476[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (3))){
var inst_44438 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44440__$1,inst_44438);
} else {
if((state_val_44441 === (12))){
var inst_44400 = (state_44440[(8)]);
var inst_44428 = cljs.core.vec(inst_44400);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44440__$1,(15),out,inst_44428);
} else {
if((state_val_44441 === (2))){
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44440__$1,(4),ch);
} else {
if((state_val_44441 === (11))){
var inst_44408 = (state_44440[(10)]);
var inst_44404 = (state_44440[(9)]);
var inst_44418 = (state_44440[(2)]);
var inst_44419 = [];
var inst_44420 = inst_44419.push(inst_44404);
var inst_44400 = inst_44419;
var inst_44401 = inst_44408;
var state_44440__$1 = (function (){var statearr_44452 = state_44440;
(statearr_44452[(11)] = inst_44420);

(statearr_44452[(7)] = inst_44401);

(statearr_44452[(8)] = inst_44400);

(statearr_44452[(12)] = inst_44418);

return statearr_44452;
})();
var statearr_44453_44477 = state_44440__$1;
(statearr_44453_44477[(2)] = null);

(statearr_44453_44477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (9))){
var inst_44400 = (state_44440[(8)]);
var inst_44416 = cljs.core.vec(inst_44400);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44440__$1,(11),out,inst_44416);
} else {
if((state_val_44441 === (5))){
var inst_44401 = (state_44440[(7)]);
var inst_44408 = (state_44440[(10)]);
var inst_44404 = (state_44440[(9)]);
var inst_44408__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44404) : f.call(null,inst_44404));
var inst_44409 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44408__$1,inst_44401);
var inst_44410 = cljs.core.keyword_identical_QMARK_(inst_44401,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_44411 = ((inst_44409) || (inst_44410));
var state_44440__$1 = (function (){var statearr_44454 = state_44440;
(statearr_44454[(10)] = inst_44408__$1);

return statearr_44454;
})();
if(cljs.core.truth_(inst_44411)){
var statearr_44455_44478 = state_44440__$1;
(statearr_44455_44478[(1)] = (8));

} else {
var statearr_44456_44479 = state_44440__$1;
(statearr_44456_44479[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (14))){
var inst_44433 = (state_44440[(2)]);
var inst_44434 = cljs.core.async.close_BANG_(out);
var state_44440__$1 = (function (){var statearr_44458 = state_44440;
(statearr_44458[(13)] = inst_44433);

return statearr_44458;
})();
var statearr_44459_44480 = state_44440__$1;
(statearr_44459_44480[(2)] = inst_44434);

(statearr_44459_44480[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (10))){
var inst_44423 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44460_44481 = state_44440__$1;
(statearr_44460_44481[(2)] = inst_44423);

(statearr_44460_44481[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44441 === (8))){
var inst_44400 = (state_44440[(8)]);
var inst_44408 = (state_44440[(10)]);
var inst_44404 = (state_44440[(9)]);
var inst_44413 = inst_44400.push(inst_44404);
var tmp44457 = inst_44400;
var inst_44400__$1 = tmp44457;
var inst_44401 = inst_44408;
var state_44440__$1 = (function (){var statearr_44461 = state_44440;
(statearr_44461[(7)] = inst_44401);

(statearr_44461[(8)] = inst_44400__$1);

(statearr_44461[(14)] = inst_44413);

return statearr_44461;
})();
var statearr_44462_44482 = state_44440__$1;
(statearr_44462_44482[(2)] = null);

(statearr_44462_44482[(1)] = (2));


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
});})(c__40692__auto___44468,out))
;
return ((function (switch__40501__auto__,c__40692__auto___44468,out){
return (function() {
var cljs$core$async$state_machine__40502__auto__ = null;
var cljs$core$async$state_machine__40502__auto____0 = (function (){
var statearr_44463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44463[(0)] = cljs$core$async$state_machine__40502__auto__);

(statearr_44463[(1)] = (1));

return statearr_44463;
});
var cljs$core$async$state_machine__40502__auto____1 = (function (state_44440){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_44440);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e44464){if((e44464 instanceof Object)){
var ex__40505__auto__ = e44464;
var statearr_44465_44483 = state_44440;
(statearr_44465_44483[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44440);

return cljs.core.cst$kw$recur;
} else {
throw e44464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__44484 = state_44440;
state_44440 = G__44484;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
cljs$core$async$state_machine__40502__auto__ = function(state_44440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40502__auto____1.call(this,state_44440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40502__auto____0;
cljs$core$async$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40502__auto____1;
return cljs$core$async$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___44468,out))
})();
var state__40694__auto__ = (function (){var statearr_44466 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_44466[(6)] = c__40692__auto___44468);

return statearr_44466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___44468,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

