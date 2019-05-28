// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version(2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expected,expected,cljs.core.cst$kw$actual,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$value,x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$vector,x)], null);
} else {
if(cljs.core.not((function (){var G__41590 = cljs.core.count(x);
var fexpr__41589 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__41589.cljs$core$IFn$_invoke$arity$1 ? fexpr__41589.cljs$core$IFn$_invoke$arity$1(G__41590) : fexpr__41589.call(null,G__41590));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__41591 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41591,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41591,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_id_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$keyword,ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$unnamespaced_DASH_id,taoensso.sente.expected(cljs.core.cst$kw$namespaced_DASH_keyword,ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5720__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5720__auto__)){
var errs = temp__5720__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$errors,errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5718__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5718__auto__)){
var errs = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_event,x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__4120__auto__ = cljs.core.map_QMARK_(x);
if(and__4120__auto__){
var and__4120__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__4120__auto____$1){
var map__41598 = x;
var map__41598__$1 = (((((!((map__41598 == null))))?(((((map__41598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41598):map__41598);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41598__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41598__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41598__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41598__$1,cljs.core.cst$kw$event);
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__4120__auto__ = cljs.core.map_QMARK_(x);
if(and__4120__auto__){
var and__4120__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$_QMARK_reply_DASH_fn,null,cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$connected_DASH_uids,null,cljs.core.cst$kw$uid,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$ring_DASH_req,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__4120__auto____$1){
var map__41604 = x;
var map__41604__$1 = (((((!((map__41604 == null))))?(((((map__41604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41604):map__41604);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(connected_uids)) && (cljs.core.map_QMARK_(ring_req)) && (taoensso.encore.nblank_str_QMARK_(client_id)) && (taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__41606){
var map__41607 = p__41606;
var map__41607__$1 = (((((!((map__41607 == null))))?(((((map__41607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41607):map__41607);
var ev_msg = map__41607__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41607__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41607__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__41609 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41609,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41609,(1),null);
var valid_event = vec__41609;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__41609,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__41607,map__41607__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__41609,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__41607,map__41607__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,752904955);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__41612 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null);
return (fexpr__41612.cljs$core$IFn$_invoke$arity$1 ? fexpr__41612.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__41612.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e41616){var t = e41616;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init1953444919575323557.clj",208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,649535206);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__41613 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41613,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41613,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__41613,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__41613,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,2020377194);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__41618 = arguments.length;
switch (G__41618) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,113998948);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",230,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1048929420);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.sente/EdnPacker");
});

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$edn)){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (){var fexpr__41623 = (function (p1__41620_SHARP_){
if((!((p1__41620_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__41620_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__41620_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__41620_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__41620_SHARP_);
}
});
return fexpr__41623(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41621){if((e41621 instanceof Error)){
var e = e41621;
return e;
} else {
throw e41621;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__41620#] (satisfies? interfaces/IPacker p1__41620#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41937 = arguments.length;
var i__4731__auto___41938 = (0);
while(true){
if((i__4731__auto___41938 < len__4730__auto___41937)){
args__4736__auto__.push((arguments[i__4731__auto___41938]));

var G__41939 = (i__4731__auto___41938 + (1));
i__4731__auto___41938 = G__41939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__41628){
var vec__41629 = p__41628;
var map__41632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41629,(0),null);
var map__41632__$1 = (((((!((map__41632 == null))))?(((((map__41632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41632):map__41632);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms){
return (function (ring_req){
var or__4131__auto__ = cljs.core.cst$kw$anti_DASH_forgery_DASH_token.cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$csrf_DASH_token], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$ring$middleware$anti_DASH_forgery_SLASH_anti_DASH_forgery_DASH_token], null));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,"__anti-forgery-token"], null));
}
}
}
});})(vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax){
return (function (ring_req){
return null;
});})(vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax))
);
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn))
);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41632__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41634){if((e41634 instanceof Error)){
var e = e41634;
return e;
} else {
throw e41634;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41635){if((e41635 instanceof Error)){
var e = e41635;
return e;
} else {
throw e41635;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_41940 = (function (){try{if((function (){var fexpr__41638 = ((function (vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p1__41625_SHARP_){
if((!((p1__41625_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__41625_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__41625_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__41625_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__41625_SHARP_);
}
});})(vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return fexpr__41638(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41636){if((e41636 instanceof Error)){
var e = e41636;
return e;
} else {
throw e41636;

}
}})();
if((e_41940 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",315,"((fn* [p1__41625#] (satisfies? interfaces/IServerChanAdapter p1__41625#)) web-server-ch-adapter)",web_server_ch_adapter,e_41940,null);
}

var max_ms_41941 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_41941)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_41941)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_41941], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req,client_id){
var or__4131__auto__ = (function (){var G__41641 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__41641) : user_id_fn.call(null,G__41641));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var G__41942 = null;
var G__41942__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var vec__41642 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41642,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41642,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
var G__41942__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
G__41942 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__41942__3.call(this,conn_type,uid,client_id);
case 4:
return G__41942__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41942.cljs$core$IFn$_invoke$arity$3 = G__41942__3;
G__41942.cljs$core$IFn$_invoke$arity$4 = G__41942__4;
return G__41942;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41645){if((e41645 instanceof Error)){
var e = e41645;
return e;
} else {
throw e41645;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",359,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__41646){
var map__41647 = p__41646;
var map__41647__$1 = (((((!((map__41647 == null))))?(((((map__41647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41647):map__41647);
var old_m = map__41647__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__41649 = conn_type;
var G__41649__$1 = (((G__41649 instanceof cljs.core.Keyword))?G__41649.fqn:null);
switch (G__41649__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41649__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return cljs.core.cst$kw$newly_DASH_connected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41650){if((e41650 instanceof Error)){
var e = e41650;
return e;
} else {
throw e41650;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",376,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__41651){
var map__41652 = p__41651;
var map__41652__$1 = (((((!((map__41652 == null))))?(((((map__41652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41652):map__41652);
var old_m = map__41652__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41652__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41652__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41652__$1,cljs.core.cst$kw$any);
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ws.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ajax.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),cljs.core.cst$kw$ajax,((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),cljs.core.cst$kw$any,((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return cljs.core.cst$kw$newly_DASH_disconnected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() { 
var G__41944__delegate = function (user_id,ev,p__41654){
var vec__41655 = p__41654;
var map__41658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41655,(0),null);
var map__41658__$1 = (((((!((map__41658 == null))))?(((((map__41658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41658):map__41658);
var opts = map__41658__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41658__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_41945 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __41946 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",402,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_41945,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_41945,ev], null);
});})(uid_41945,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1923657685);
var __41947__$1 = (cljs.core.truth_(uid_41945)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __41948__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_41949 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__41950 = ((function (uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type){
var temp__5720__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (m){
var vec__41660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_41945);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_41949)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_41945),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_41945));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
if(cljs.core.truth_(temp__5720__auto__)){
var pulled = temp__5720__auto__;
var vec__41663 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41663,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41663,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",430,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",433,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__41663,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__41663,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-828763773);

var G__41666 = conn_type;
var G__41666__$1 = (((G__41666 instanceof cljs.core.Keyword))?G__41666.fqn:null);
switch (G__41666__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_41945,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_41945,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_41945,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_41945,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41666__$1)].join('')));

}
} else {
return null;
}
});})(uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init1953444919575323557.clj",442,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_41945], null);
});})(uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1204496405);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__41950(cljs.core.cst$kw$ws);

flush_buffer_BANG__41950(cljs.core.cst$kw$ajax);
} else {
}

var seq__41667_41952 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_41945], null))));
var chunk__41668_41953 = null;
var count__41669_41954 = (0);
var i__41670_41955 = (0);
while(true){
if((i__41670_41955 < count__41669_41954)){
var vec__41677_41956 = chunk__41668_41953.cljs$core$IIndexed$_nth$arity$2(null,i__41670_41955);
var _QMARK_sch_41957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41677_41956,(0),null);
var _udt_41958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41677_41956,(1),null);
var temp__5720__auto___41959 = _QMARK_sch_41957;
if(cljs.core.truth_(temp__5720__auto___41959)){
var sch_41960 = temp__5720__auto___41959;
taoensso.sente.interfaces.sch_close_BANG_(sch_41960);
} else {
}


var G__41961 = seq__41667_41952;
var G__41962 = chunk__41668_41953;
var G__41963 = count__41669_41954;
var G__41964 = (i__41670_41955 + (1));
seq__41667_41952 = G__41961;
chunk__41668_41953 = G__41962;
count__41669_41954 = G__41963;
i__41670_41955 = G__41964;
continue;
} else {
var temp__5720__auto___41965 = cljs.core.seq(seq__41667_41952);
if(temp__5720__auto___41965){
var seq__41667_41966__$1 = temp__5720__auto___41965;
if(cljs.core.chunked_seq_QMARK_(seq__41667_41966__$1)){
var c__4550__auto___41967 = cljs.core.chunk_first(seq__41667_41966__$1);
var G__41968 = cljs.core.chunk_rest(seq__41667_41966__$1);
var G__41969 = c__4550__auto___41967;
var G__41970 = cljs.core.count(c__4550__auto___41967);
var G__41971 = (0);
seq__41667_41952 = G__41968;
chunk__41668_41953 = G__41969;
count__41669_41954 = G__41970;
i__41670_41955 = G__41971;
continue;
} else {
var vec__41680_41972 = cljs.core.first(seq__41667_41966__$1);
var _QMARK_sch_41973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41680_41972,(0),null);
var _udt_41974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41680_41972,(1),null);
var temp__5720__auto___41975__$1 = _QMARK_sch_41973;
if(cljs.core.truth_(temp__5720__auto___41975__$1)){
var sch_41976 = temp__5720__auto___41975__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_41976);
} else {
}


var G__41977 = cljs.core.next(seq__41667_41966__$1);
var G__41978 = null;
var G__41979 = (0);
var G__41980 = (0);
seq__41667_41952 = G__41977;
chunk__41668_41953 = G__41978;
count__41669_41954 = G__41979;
i__41670_41955 = G__41980;
continue;
}
} else {
}
}
break;
}

var seq__41683_41981 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_41945], null))));
var chunk__41684_41982 = null;
var count__41685_41983 = (0);
var i__41686_41984 = (0);
while(true){
if((i__41686_41984 < count__41685_41983)){
var vec__41693_41985 = chunk__41684_41982.cljs$core$IIndexed$_nth$arity$2(null,i__41686_41984);
var _QMARK_sch_41986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41693_41985,(0),null);
var _udt_41987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41693_41985,(1),null);
var temp__5720__auto___41988 = _QMARK_sch_41986;
if(cljs.core.truth_(temp__5720__auto___41988)){
var sch_41989 = temp__5720__auto___41988;
taoensso.sente.interfaces.sch_close_BANG_(sch_41989);
} else {
}


var G__41990 = seq__41683_41981;
var G__41991 = chunk__41684_41982;
var G__41992 = count__41685_41983;
var G__41993 = (i__41686_41984 + (1));
seq__41683_41981 = G__41990;
chunk__41684_41982 = G__41991;
count__41685_41983 = G__41992;
i__41686_41984 = G__41993;
continue;
} else {
var temp__5720__auto___41994 = cljs.core.seq(seq__41683_41981);
if(temp__5720__auto___41994){
var seq__41683_41995__$1 = temp__5720__auto___41994;
if(cljs.core.chunked_seq_QMARK_(seq__41683_41995__$1)){
var c__4550__auto___41996 = cljs.core.chunk_first(seq__41683_41995__$1);
var G__41997 = cljs.core.chunk_rest(seq__41683_41995__$1);
var G__41998 = c__4550__auto___41996;
var G__41999 = cljs.core.count(c__4550__auto___41996);
var G__42000 = (0);
seq__41683_41981 = G__41997;
chunk__41684_41982 = G__41998;
count__41685_41983 = G__41999;
i__41686_41984 = G__42000;
continue;
} else {
var vec__41696_42001 = cljs.core.first(seq__41683_41995__$1);
var _QMARK_sch_42002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41696_42001,(0),null);
var _udt_42003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41696_42001,(1),null);
var temp__5720__auto___42004__$1 = _QMARK_sch_42002;
if(cljs.core.truth_(temp__5720__auto___42004__$1)){
var sch_42005 = temp__5720__auto___42004__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_42005);
} else {
}


var G__42006 = cljs.core.next(seq__41683_41995__$1);
var G__42007 = null;
var G__42008 = (0);
var G__42009 = (0);
seq__41683_41981 = G__42006;
chunk__41684_41982 = G__42007;
count__41685_41983 = G__42008;
i__41686_41984 = G__42009;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41699_42010 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__41700_42011 = null;
var count__41701_42012 = (0);
var i__41702_42013 = (0);
while(true){
if((i__41702_42013 < count__41701_42012)){
var conn_type_42014 = chunk__41700_42011.cljs$core$IIndexed$_nth$arity$2(null,i__41702_42013);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_42014,uid_41945], null),((function (seq__41699_42010,chunk__41700_42011,count__41701_42012,i__41702_42013,conn_type_42014,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_41949])], null);
} else {
var vec__41709 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41709,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41709,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_41949)], null);
}
});})(seq__41699_42010,chunk__41700_42011,count__41701_42012,i__41702_42013,conn_type_42014,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__42015 = seq__41699_42010;
var G__42016 = chunk__41700_42011;
var G__42017 = count__41701_42012;
var G__42018 = (i__41702_42013 + (1));
seq__41699_42010 = G__42015;
chunk__41700_42011 = G__42016;
count__41701_42012 = G__42017;
i__41702_42013 = G__42018;
continue;
} else {
var temp__5720__auto___42019 = cljs.core.seq(seq__41699_42010);
if(temp__5720__auto___42019){
var seq__41699_42020__$1 = temp__5720__auto___42019;
if(cljs.core.chunked_seq_QMARK_(seq__41699_42020__$1)){
var c__4550__auto___42021 = cljs.core.chunk_first(seq__41699_42020__$1);
var G__42022 = cljs.core.chunk_rest(seq__41699_42020__$1);
var G__42023 = c__4550__auto___42021;
var G__42024 = cljs.core.count(c__4550__auto___42021);
var G__42025 = (0);
seq__41699_42010 = G__42022;
chunk__41700_42011 = G__42023;
count__41701_42012 = G__42024;
i__41702_42013 = G__42025;
continue;
} else {
var conn_type_42026 = cljs.core.first(seq__41699_42020__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_42026,uid_41945], null),((function (seq__41699_42010,chunk__41700_42011,count__41701_42012,i__41702_42013,conn_type_42026,seq__41699_42020__$1,temp__5720__auto___42019,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_41949])], null);
} else {
var vec__41712 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41712,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41712,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_41949)], null);
}
});})(seq__41699_42010,chunk__41700_42011,count__41701_42012,i__41702_42013,conn_type_42026,seq__41699_42020__$1,temp__5720__auto___42019,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__42027 = cljs.core.next(seq__41699_42020__$1);
var G__42028 = null;
var G__42029 = (0);
var G__42030 = (0);
seq__41699_42010 = G__42027;
chunk__41700_42011 = G__42028;
count__41701_42012 = G__42029;
i__41702_42013 = G__42030;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__41950(cljs.core.cst$kw$ws);

flush_buffer_BANG__41950(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_42031 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_42032 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__38518__auto___42033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___42033,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___42033,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_41719){
var state_val_41720 = (state_41719[(1)]);
if((state_val_41720 === (1))){
var state_41719__$1 = state_41719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41719__$1,(2),ws_timeout_42031);
} else {
if((state_val_41720 === (2))){
var inst_41716 = (state_41719[(2)]);
var inst_41717 = flush_buffer_BANG__41950(cljs.core.cst$kw$ws);
var state_41719__$1 = (function (){var statearr_41721 = state_41719;
(statearr_41721[(7)] = inst_41716);

return statearr_41721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41719__$1,inst_41717);
} else {
return null;
}
}
});})(c__38518__auto___42033,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38411__auto__,c__38518__auto___42033,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_41722 = [null,null,null,null,null,null,null,null];
(statearr_41722[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_41722[(1)] = (1));

return statearr_41722;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_41719){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_41719);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e41723){if((e41723 instanceof Object)){
var ex__38415__auto__ = e41723;
var statearr_41724_42034 = state_41719;
(statearr_41724_42034[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41719);

return cljs.core.cst$kw$recur;
} else {
throw e41723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42035 = state_41719;
state_41719 = G__42035;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_41719){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_41719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___42033,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38520__auto__ = (function (){var statearr_41725 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_41725[(6)] = c__38518__auto___42033);

return statearr_41725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___42033,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var c__38518__auto___42036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___42036,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___42036,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_41730){
var state_val_41731 = (state_41730[(1)]);
if((state_val_41731 === (1))){
var state_41730__$1 = state_41730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41730__$1,(2),ajax_timeout_42032);
} else {
if((state_val_41731 === (2))){
var inst_41727 = (state_41730[(2)]);
var inst_41728 = flush_buffer_BANG__41950(cljs.core.cst$kw$ajax);
var state_41730__$1 = (function (){var statearr_41732 = state_41730;
(statearr_41732[(7)] = inst_41727);

return statearr_41732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41730__$1,inst_41728);
} else {
return null;
}
}
});})(c__38518__auto___42036,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38411__auto__,c__38518__auto___42036,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_41733 = [null,null,null,null,null,null,null,null];
(statearr_41733[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_41733[(1)] = (1));

return statearr_41733;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_41730){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_41730);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e41734){if((e41734 instanceof Object)){
var ex__38415__auto__ = e41734;
var statearr_41735_42037 = state_41730;
(statearr_41735_42037[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41730);

return cljs.core.cst$kw$recur;
} else {
throw e41734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42038 = state_41730;
state_41730 = G__42038;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_41730){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_41730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___42036,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38520__auto__ = (function (){var statearr_41736 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_41736[(6)] = c__38518__auto___42036);

return statearr_41736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___42036,ws_timeout_42031,ajax_timeout_42032,uid_41945,__41946,__41947__$1,__41948__$2,ev_uuid_41949,flush_buffer_BANG__41950,vec__41655,map__41658,map__41658__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

}
}

return null;
};
var G__41944 = function (user_id,ev,var_args){
var p__41654 = null;
if (arguments.length > 2) {
var G__42039__i = 0, G__42039__a = new Array(arguments.length -  2);
while (G__42039__i < G__42039__a.length) {G__42039__a[G__42039__i] = arguments[G__42039__i + 2]; ++G__42039__i;}
  p__41654 = new cljs.core.IndexedSeq(G__42039__a,0,null);
} 
return G__41944__delegate.call(this,user_id,ev,p__41654);};
G__41944.cljs$lang$maxFixedArity = 2;
G__41944.cljs$lang$applyTo = (function (arglist__42040){
var user_id = cljs.core.first(arglist__42040);
arglist__42040 = cljs.core.next(arglist__42040);
var ev = cljs.core.first(arglist__42040);
var p__41654 = cljs.core.rest(arglist__42040);
return G__41944__delegate(user_id,ev,p__41654);
});
G__41944.cljs$core$IFn$_invoke$arity$variadic = G__41944__delegate;
return G__41944;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__41737 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41737,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41737,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",511,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-368321807);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5720__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5720__auto__)){
var ms = temp__5720__auto__;
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_41745){
var state_val_41746 = (state_41745[(1)]);
if((state_val_41746 === (1))){
var inst_41740 = cljs.core.async.timeout(ms);
var state_41745__$1 = state_41745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41745__$1,(2),inst_41740);
} else {
if((state_val_41746 === (2))){
var inst_41742 = (state_41745[(2)]);
var inst_41743 = (function (){var G__41747 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__41747) : reply_fn.call(null,G__41747));
})();
var state_41745__$1 = (function (){var statearr_41748 = state_41745;
(statearr_41748[(7)] = inst_41742);

return statearr_41748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41745__$1,inst_41743);
} else {
return null;
}
}
});})(c__38518__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38411__auto__,c__38518__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_41749 = [null,null,null,null,null,null,null,null];
(statearr_41749[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_41749[(1)] = (1));

return statearr_41749;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_41745){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_41745);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e41750){if((e41750 instanceof Object)){
var ex__38415__auto__ = e41750;
var statearr_41751_42041 = state_41745;
(statearr_41751_42041[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41745);

return cljs.core.cst$kw$recur;
} else {
throw e41750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42042 = state_41745;
state_41745 = G__42042;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_41745){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_41745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38520__auto__ = (function (){var statearr_41752 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_41752[(6)] = c__38518__auto__);

return statearr_41752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__41737,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38518__auto__;
} else {
return null;
}
} else {
var G__41753 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__41753) : reply_fn.call(null,G__41753));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$uid,uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",556,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,516102230);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init1953444919575323557.clj",567,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-864676685);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",576,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-171147349);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ws,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ws,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5720__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5720__auto__)){
var ms = temp__5720__auto__;
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_41789){
var state_val_41790 = (state_41789[(1)]);
if((state_val_41790 === (7))){
var inst_41785 = (state_41789[(2)]);
var state_41789__$1 = state_41789;
var statearr_41791_42043 = state_41789__$1;
(statearr_41791_42043[(2)] = inst_41785);

(statearr_41791_42043[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (1))){
var inst_41754 = udt_open;
var state_41789__$1 = (function (){var statearr_41792 = state_41789;
(statearr_41792[(7)] = inst_41754);

return statearr_41792;
})();
var statearr_41793_42044 = state_41789__$1;
(statearr_41793_42044[(2)] = null);

(statearr_41793_42044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (4))){
var inst_41763 = (state_41789[(8)]);
var inst_41758 = (state_41789[(2)]);
var inst_41759 = cljs.core.deref(conns_);
var inst_41760 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41761 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_41762 = (new cljs.core.PersistentVector(null,3,(5),inst_41760,inst_41761,null));
var inst_41763__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_41759,inst_41762);
var state_41789__$1 = (function (){var statearr_41794 = state_41789;
(statearr_41794[(8)] = inst_41763__$1);

(statearr_41794[(9)] = inst_41758);

return statearr_41794;
})();
if(cljs.core.truth_(inst_41763__$1)){
var statearr_41795_42045 = state_41789__$1;
(statearr_41795_42045[(1)] = (5));

} else {
var statearr_41796_42046 = state_41789__$1;
(statearr_41796_42046[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (13))){
var inst_41769 = (state_41789[(10)]);
var inst_41778 = (state_41789[(2)]);
var inst_41754 = inst_41769;
var state_41789__$1 = (function (){var statearr_41797 = state_41789;
(statearr_41797[(11)] = inst_41778);

(statearr_41797[(7)] = inst_41754);

return statearr_41797;
})();
var statearr_41798_42047 = state_41789__$1;
(statearr_41798_42047[(2)] = null);

(statearr_41798_42047[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (6))){
var state_41789__$1 = state_41789;
var statearr_41799_42048 = state_41789__$1;
(statearr_41799_42048[(2)] = null);

(statearr_41799_42048[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (3))){
var inst_41787 = (state_41789[(2)]);
var state_41789__$1 = state_41789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41789__$1,inst_41787);
} else {
if((state_val_41790 === (12))){
var state_41789__$1 = state_41789;
var statearr_41800_42049 = state_41789__$1;
(statearr_41800_42049[(2)] = null);

(statearr_41800_42049[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (2))){
var inst_41756 = cljs.core.async.timeout(ms);
var state_41789__$1 = state_41789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41789__$1,(4),inst_41756);
} else {
if((state_val_41790 === (11))){
var inst_41774 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_41775 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_41774);
var state_41789__$1 = state_41789;
var statearr_41801_42050 = state_41789__$1;
(statearr_41801_42050[(2)] = inst_41775);

(statearr_41801_42050[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (9))){
var state_41789__$1 = state_41789;
var statearr_41802_42051 = state_41789__$1;
(statearr_41802_42051[(2)] = null);

(statearr_41802_42051[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (5))){
var inst_41763 = (state_41789[(8)]);
var inst_41768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41763,(0),null);
var inst_41769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41763,(1),null);
var inst_41770 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_41789__$1 = (function (){var statearr_41803 = state_41789;
(statearr_41803[(12)] = inst_41768);

(statearr_41803[(10)] = inst_41769);

return statearr_41803;
})();
if(cljs.core.truth_(inst_41770)){
var statearr_41804_42052 = state_41789__$1;
(statearr_41804_42052[(1)] = (8));

} else {
var statearr_41805_42053 = state_41789__$1;
(statearr_41805_42053[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (10))){
var inst_41782 = (state_41789[(2)]);
var state_41789__$1 = state_41789;
var statearr_41806_42054 = state_41789__$1;
(statearr_41806_42054[(2)] = inst_41782);

(statearr_41806_42054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41790 === (8))){
var inst_41754 = (state_41789[(7)]);
var inst_41769 = (state_41789[(10)]);
var inst_41772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41769,inst_41754);
var state_41789__$1 = state_41789;
if(inst_41772){
var statearr_41807_42055 = state_41789__$1;
(statearr_41807_42055[(1)] = (11));

} else {
var statearr_41808_42056 = state_41789__$1;
(statearr_41808_42056[(1)] = (12));

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
});})(c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38411__auto__,c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_41809 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41809[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_41809[(1)] = (1));

return statearr_41809;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_41789){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_41789);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e41810){if((e41810 instanceof Object)){
var ex__38415__auto__ = e41810;
var statearr_41811_42057 = state_41789;
(statearr_41811_42057[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41789);

return cljs.core.cst$kw$recur;
} else {
throw e41810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42058 = state_41789;
state_41789 = G__42058;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_41789){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_41789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38520__auto__ = (function (){var statearr_41812 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_41812[(6)] = c__38518__auto__);

return statearr_41812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38518__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",605,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,435702268);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ajax,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4131__auto__ = cljs.core.cst$kw$init_QMARK_.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$handshake_QMARK_.cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ajax,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5720__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5720__auto__)){
var ms = temp__5720__auto__;
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_41838){
var state_val_41839 = (state_41838[(1)]);
if((state_val_41839 === (1))){
var inst_41813 = cljs.core.async.timeout(ms);
var state_41838__$1 = state_41838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41838__$1,(2),inst_41813);
} else {
if((state_val_41839 === (2))){
var inst_41820 = (state_41838[(7)]);
var inst_41815 = (state_41838[(2)]);
var inst_41816 = cljs.core.deref(conns_);
var inst_41817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41818 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_41819 = (new cljs.core.PersistentVector(null,3,(5),inst_41817,inst_41818,null));
var inst_41820__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_41816,inst_41819);
var state_41838__$1 = (function (){var statearr_41840 = state_41838;
(statearr_41840[(7)] = inst_41820__$1);

(statearr_41840[(8)] = inst_41815);

return statearr_41840;
})();
if(cljs.core.truth_(inst_41820__$1)){
var statearr_41841_42059 = state_41838__$1;
(statearr_41841_42059[(1)] = (3));

} else {
var statearr_41842_42060 = state_41838__$1;
(statearr_41842_42060[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41839 === (3))){
var inst_41820 = (state_41838[(7)]);
var inst_41825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41820,(0),null);
var inst_41826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41820,(1),null);
var inst_41827 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41826,udt_open);
var state_41838__$1 = (function (){var statearr_41843 = state_41838;
(statearr_41843[(9)] = inst_41825);

return statearr_41843;
})();
if(inst_41827){
var statearr_41844_42061 = state_41838__$1;
(statearr_41844_42061[(1)] = (6));

} else {
var statearr_41845_42062 = state_41838__$1;
(statearr_41845_42062[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41839 === (4))){
var state_41838__$1 = state_41838;
var statearr_41846_42063 = state_41838__$1;
(statearr_41846_42063[(2)] = null);

(statearr_41846_42063[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41839 === (5))){
var inst_41836 = (state_41838[(2)]);
var state_41838__$1 = state_41838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41838__$1,inst_41836);
} else {
if((state_val_41839 === (6))){
var inst_41829 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_41830 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_41829);
var state_41838__$1 = state_41838;
var statearr_41847_42064 = state_41838__$1;
(statearr_41847_42064[(2)] = inst_41830);

(statearr_41847_42064[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41839 === (7))){
var state_41838__$1 = state_41838;
var statearr_41848_42065 = state_41838__$1;
(statearr_41848_42065[(2)] = null);

(statearr_41848_42065[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41839 === (8))){
var inst_41833 = (state_41838[(2)]);
var state_41838__$1 = state_41838;
var statearr_41849_42066 = state_41838__$1;
(statearr_41849_42066[(2)] = inst_41833);

(statearr_41849_42066[(1)] = (5));


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
});})(c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38411__auto__,c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_41850 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41850[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_41850[(1)] = (1));

return statearr_41850;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_41838){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_41838);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e41851){if((e41851 instanceof Object)){
var ex__38415__auto__ = e41851;
var statearr_41852_42067 = state_41838;
(statearr_41852_42067[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41838);

return cljs.core.cst$kw$recur;
} else {
throw e41851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42068 = state_41838;
state_41838 = G__42068;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_41838){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_41838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38520__auto__ = (function (){var statearr_41853 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_41853[(6)] = c__38518__auto__);

return statearr_41853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38518__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__41854 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41854,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41854,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__41854,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",635,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__41854,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__41854,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-797086317);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__41854,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",644,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1264390782);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_41908){
var state_val_41909 = (state_41908[(1)]);
if((state_val_41909 === (7))){
var state_41908__$1 = state_41908;
var statearr_41910_42069 = state_41908__$1;
(statearr_41910_42069[(2)] = null);

(statearr_41910_42069[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (1))){
var inst_41857 = cljs.core.async.timeout((5000));
var state_41908__$1 = state_41908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41908__$1,(2),inst_41857);
} else {
if((state_val_41909 === (4))){
var state_41908__$1 = state_41908;
var statearr_41911_42070 = state_41908__$1;
(statearr_41911_42070[(2)] = null);

(statearr_41911_42070[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (13))){
var state_41908__$1 = state_41908;
var statearr_41912_42071 = state_41908__$1;
(statearr_41912_42071[(2)] = null);

(statearr_41912_42071[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (6))){
var inst_41869 = (state_41908[(7)]);
var inst_41867 = (state_41908[(8)]);
var inst_41885 = (state_41908[(9)]);
var inst_41868 = (state_41908[(10)]);
var inst_41880 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41881 = [conn_type,uid,client_id];
var inst_41882 = (new cljs.core.PersistentVector(null,3,(5),inst_41880,inst_41881,null));
var inst_41884 = (function (){var vec__41860 = inst_41867;
var __QMARK_sch = inst_41868;
var udt_t1 = inst_41869;
return ((function (vec__41860,__QMARK_sch,udt_t1,inst_41869,inst_41867,inst_41885,inst_41868,inst_41880,inst_41881,inst_41882,state_val_41909,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__41883){
var vec__41913 = p__41883;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41913,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41913,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__41860,__QMARK_sch,udt_t1,inst_41869,inst_41867,inst_41885,inst_41868,inst_41880,inst_41881,inst_41882,state_val_41909,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_41885__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_41882,inst_41884);
var state_41908__$1 = (function (){var statearr_41916 = state_41908;
(statearr_41916[(9)] = inst_41885__$1);

return statearr_41916;
})();
if(cljs.core.truth_(inst_41885__$1)){
var statearr_41917_42072 = state_41908__$1;
(statearr_41917_42072[(1)] = (9));

} else {
var statearr_41918_42073 = state_41908__$1;
(statearr_41918_42073[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (3))){
var inst_41869 = (state_41908[(7)]);
var inst_41867 = (state_41908[(8)]);
var inst_41868 = (state_41908[(10)]);
var inst_41872 = (function (){var vec__41860 = inst_41867;
var __QMARK_sch = inst_41868;
var udt_t1 = inst_41869;
return ((function (vec__41860,__QMARK_sch,udt_t1,inst_41869,inst_41867,inst_41868,state_val_41909,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__41860,__QMARK_sch,udt_t1,inst_41869,inst_41867,inst_41868,state_val_41909,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_41873 = (new cljs.core.Delay(inst_41872,null));
var inst_41874 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init1953444919575323557.clj",658,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_41873,null,668424885);
var state_41908__$1 = state_41908;
var statearr_41919_42074 = state_41908__$1;
(statearr_41919_42074[(2)] = inst_41874);

(statearr_41919_42074[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (12))){
var inst_41894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41895 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_41896 = (new cljs.core.PersistentVector(null,2,(5),inst_41894,inst_41895,null));
var inst_41897 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_41896);
var state_41908__$1 = state_41908;
var statearr_41920_42075 = state_41908__$1;
(statearr_41920_42075[(2)] = inst_41897);

(statearr_41920_42075[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (2))){
var inst_41867 = (state_41908[(8)]);
var inst_41859 = (state_41908[(2)]);
var inst_41863 = cljs.core.deref(conns_);
var inst_41864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41865 = [conn_type,uid,client_id];
var inst_41866 = (new cljs.core.PersistentVector(null,3,(5),inst_41864,inst_41865,null));
var inst_41867__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_41863,inst_41866);
var inst_41868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41867__$1,(0),null);
var inst_41869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41867__$1,(1),null);
var inst_41870 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_41908__$1 = (function (){var statearr_41921 = state_41908;
(statearr_41921[(7)] = inst_41869);

(statearr_41921[(8)] = inst_41867__$1);

(statearr_41921[(11)] = inst_41859);

(statearr_41921[(10)] = inst_41868);

return statearr_41921;
})();
if(cljs.core.truth_(inst_41870)){
var statearr_41922_42076 = state_41908__$1;
(statearr_41922_42076[(1)] = (3));

} else {
var statearr_41923_42077 = state_41908__$1;
(statearr_41923_42077[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (11))){
var inst_41903 = (state_41908[(2)]);
var state_41908__$1 = state_41908;
var statearr_41924_42078 = state_41908__$1;
(statearr_41924_42078[(2)] = inst_41903);

(statearr_41924_42078[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (9))){
var inst_41869 = (state_41908[(7)]);
var inst_41867 = (state_41908[(8)]);
var inst_41885 = (state_41908[(9)]);
var inst_41868 = (state_41908[(10)]);
var inst_41887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41888 = [conn_type,uid];
var inst_41889 = (new cljs.core.PersistentVector(null,2,(5),inst_41887,inst_41888,null));
var inst_41890 = (function (){var vec__41860 = inst_41867;
var __QMARK_sch = inst_41868;
var udt_t1 = inst_41869;
var disconnect_QMARK_ = inst_41885;
return ((function (vec__41860,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_41869,inst_41867,inst_41885,inst_41868,inst_41887,inst_41888,inst_41889,state_val_41909,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__41860,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_41869,inst_41867,inst_41885,inst_41868,inst_41887,inst_41888,inst_41889,state_val_41909,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_41891 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_41889,inst_41890);
var inst_41892 = upd_connected_uid_BANG_(uid);
var state_41908__$1 = (function (){var statearr_41925 = state_41908;
(statearr_41925[(12)] = inst_41891);

return statearr_41925;
})();
if(cljs.core.truth_(inst_41892)){
var statearr_41926_42079 = state_41908__$1;
(statearr_41926_42079[(1)] = (12));

} else {
var statearr_41927_42080 = state_41908__$1;
(statearr_41927_42080[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (5))){
var inst_41869 = (state_41908[(7)]);
var inst_41877 = (state_41908[(2)]);
var inst_41878 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41869,udt_close);
var state_41908__$1 = (function (){var statearr_41928 = state_41908;
(statearr_41928[(13)] = inst_41877);

return statearr_41928;
})();
if(inst_41878){
var statearr_41929_42081 = state_41908__$1;
(statearr_41929_42081[(1)] = (6));

} else {
var statearr_41930_42082 = state_41908__$1;
(statearr_41930_42082[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (14))){
var inst_41900 = (state_41908[(2)]);
var state_41908__$1 = state_41908;
var statearr_41931_42083 = state_41908__$1;
(statearr_41931_42083[(2)] = inst_41900);

(statearr_41931_42083[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (10))){
var state_41908__$1 = state_41908;
var statearr_41932_42084 = state_41908__$1;
(statearr_41932_42084[(2)] = null);

(statearr_41932_42084[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41909 === (8))){
var inst_41906 = (state_41908[(2)]);
var state_41908__$1 = state_41908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41908__$1,inst_41906);
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
});})(c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38411__auto__,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_41933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41933[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_41933[(1)] = (1));

return statearr_41933;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_41908){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_41908);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e41934){if((e41934 instanceof Object)){
var ex__38415__auto__ = e41934;
var statearr_41935_42085 = state_41908;
(statearr_41935_42085[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41908);

return cljs.core.cst$kw$recur;
} else {
throw e41934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42086 = state_41908;
state_41908 = G__42086;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_41908){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_41908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38520__auto__ = (function (){var statearr_41936 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_41936[(6)] = c__38518__auto__);

return statearr_41936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38518__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init1953444919575323557.clj",680,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1601060876);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41629,map__41632,map__41632__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq41626){
var G__41627 = cljs.core.first(seq41626);
var seq41626__$1 = cljs.core.next(seq41626);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41627,seq41626__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",686,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1773856301);

var seq__42087 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__42088 = null;
var count__42089 = (0);
var i__42090 = (0);
while(true){
if((i__42090 < count__42089)){
var vec__42109 = chunk__42088.cljs$core$IIndexed$_nth$arity$2(null,i__42090);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42109,(0),null);
var vec__42112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42109,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42112,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42112,(1),null);
var temp__5720__auto___42127 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___42127)){
var sch_42128 = temp__5720__auto___42127;
var G__42115_42129 = cljs.core.cst$kw$ws;
var G__42116_42130 = uid;
var G__42117_42131 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__42115_42129,G__42116_42130,G__42117_42131) : upd_conn_BANG_.call(null,G__42115_42129,G__42116_42130,G__42117_42131));

taoensso.sente.interfaces.sch_send_BANG_(sch_42128,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__42132 = seq__42087;
var G__42133 = chunk__42088;
var G__42134 = count__42089;
var G__42135 = (i__42090 + (1));
seq__42087 = G__42132;
chunk__42088 = G__42133;
count__42089 = G__42134;
i__42090 = G__42135;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42087);
if(temp__5720__auto__){
var seq__42087__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42087__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42087__$1);
var G__42136 = cljs.core.chunk_rest(seq__42087__$1);
var G__42137 = c__4550__auto__;
var G__42138 = cljs.core.count(c__4550__auto__);
var G__42139 = (0);
seq__42087 = G__42136;
chunk__42088 = G__42137;
count__42089 = G__42138;
i__42090 = G__42139;
continue;
} else {
var vec__42118 = cljs.core.first(seq__42087__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42118,(0),null);
var vec__42121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42118,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42121,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42121,(1),null);
var temp__5720__auto___42140__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___42140__$1)){
var sch_42141 = temp__5720__auto___42140__$1;
var G__42124_42142 = cljs.core.cst$kw$ws;
var G__42125_42143 = uid;
var G__42126_42144 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__42124_42142,G__42125_42143,G__42126_42144) : upd_conn_BANG_.call(null,G__42124_42142,G__42125_42143,G__42126_42144));

taoensso.sente.interfaces.sch_send_BANG_(sch_42141,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__42145 = cljs.core.next(seq__42087__$1);
var G__42146 = null;
var G__42147 = (0);
var G__42148 = (0);
seq__42087 = G__42145;
chunk__42088 = G__42146;
count__42089 = G__42147;
i__42090 = G__42148;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",696,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-845002515);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__38518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_42195){
var state_val_42196 = (state_42195[(1)]);
if((state_val_42196 === (7))){
var inst_42157 = (state_42195[(7)]);
var inst_42151 = (state_42195[(8)]);
var inst_42150 = (state_42195[(9)]);
var inst_42167 = (function (){var n = inst_42150;
var client_ids_satisfied = inst_42151;
var _QMARK_pulled = inst_42157;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_42157,inst_42151,inst_42150,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__42166){
var vec__42197 = p__42166;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42197,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42197,(1),null);
var sent_QMARK_ = (function (){var temp__5720__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto__)){
var sch = temp__5720__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(cljs.core.cst$kw$websocket),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_42157,inst_42151,inst_42150,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_42168 = cljs.core.PersistentHashSet.EMPTY;
var inst_42169 = cljs.core.reduce_kv(inst_42167,inst_42168,inst_42157);
var state_42195__$1 = state_42195;
var statearr_42200_42232 = state_42195__$1;
(statearr_42200_42232[(2)] = inst_42169);

(statearr_42200_42232[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (1))){
var inst_42149 = cljs.core.PersistentHashSet.EMPTY;
var inst_42150 = (0);
var inst_42151 = inst_42149;
var state_42195__$1 = (function (){var statearr_42201 = state_42195;
(statearr_42201[(8)] = inst_42151);

(statearr_42201[(9)] = inst_42150);

return statearr_42201;
})();
var statearr_42202_42233 = state_42195__$1;
(statearr_42202_42233[(2)] = null);

(statearr_42202_42233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (4))){
var state_42195__$1 = state_42195;
var statearr_42203_42234 = state_42195__$1;
(statearr_42203_42234[(2)] = true);

(statearr_42203_42234[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (15))){
var inst_42188 = (state_42195[(2)]);
var state_42195__$1 = state_42195;
var statearr_42204_42235 = state_42195__$1;
(statearr_42204_42235[(2)] = inst_42188);

(statearr_42204_42235[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (13))){
var inst_42174 = (state_42195[(10)]);
var inst_42179 = cljs.core.rand_int(inst_42174);
var inst_42180 = (inst_42174 + inst_42179);
var inst_42181 = cljs.core.async.timeout(inst_42180);
var state_42195__$1 = state_42195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42195__$1,(16),inst_42181);
} else {
if((state_val_42196 === (6))){
var inst_42157 = (state_42195[(7)]);
var inst_42164 = (state_42195[(2)]);
var state_42195__$1 = (function (){var statearr_42205 = state_42195;
(statearr_42205[(11)] = inst_42164);

return statearr_42205;
})();
if(cljs.core.truth_(inst_42157)){
var statearr_42206_42236 = state_42195__$1;
(statearr_42206_42236[(1)] = (7));

} else {
var statearr_42207_42237 = state_42195__$1;
(statearr_42207_42237[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (3))){
var inst_42193 = (state_42195[(2)]);
var state_42195__$1 = state_42195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42195__$1,inst_42193);
} else {
if((state_val_42196 === (12))){
var inst_42191 = (state_42195[(2)]);
var state_42195__$1 = state_42195;
var statearr_42208_42238 = state_42195__$1;
(statearr_42208_42238[(2)] = inst_42191);

(statearr_42208_42238[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (2))){
var inst_42157 = (state_42195[(7)]);
var inst_42151 = (state_42195[(8)]);
var inst_42150 = (state_42195[(9)]);
var inst_42153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42154 = [cljs.core.cst$kw$ajax,uid];
var inst_42155 = (new cljs.core.PersistentVector(null,2,(5),inst_42153,inst_42154,null));
var inst_42156 = (function (){var n = inst_42150;
var client_ids_satisfied = inst_42151;
return ((function (n,client_ids_satisfied,inst_42157,inst_42151,inst_42150,inst_42153,inst_42154,inst_42155,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_42157,inst_42151,inst_42150,inst_42153,inst_42154,inst_42155,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__42209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42209,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42209,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_42157,inst_42151,inst_42150,inst_42153,inst_42154,inst_42155,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_42157,inst_42151,inst_42150,inst_42153,inst_42154,inst_42155,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_42157__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_42155,inst_42156);
var inst_42158 = (function (){var n = inst_42150;
var client_ids_satisfied = inst_42151;
var _QMARK_pulled = inst_42157__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_42157,inst_42151,inst_42150,inst_42153,inst_42154,inst_42155,inst_42156,inst_42157__$1,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__42213 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__42213.cljs$core$IFn$_invoke$arity$1 ? fexpr__42213.cljs$core$IFn$_invoke$arity$1(x) : fexpr__42213.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_42157,inst_42151,inst_42150,inst_42153,inst_42154,inst_42155,inst_42156,inst_42157__$1,state_val_42196,c__38518__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_42159 = (inst_42158.cljs$core$IFn$_invoke$arity$1 ? inst_42158.cljs$core$IFn$_invoke$arity$1(inst_42157__$1) : inst_42158.call(null,inst_42157__$1));
var state_42195__$1 = (function (){var statearr_42214 = state_42195;
(statearr_42214[(7)] = inst_42157__$1);

return statearr_42214;
})();
if(cljs.core.truth_(inst_42159)){
var statearr_42215_42239 = state_42195__$1;
(statearr_42215_42239[(1)] = (4));

} else {
var statearr_42216_42240 = state_42195__$1;
(statearr_42216_42240[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (11))){
var state_42195__$1 = state_42195;
var statearr_42217_42241 = state_42195__$1;
(statearr_42217_42241[(2)] = null);

(statearr_42217_42241[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (9))){
var inst_42151 = (state_42195[(8)]);
var inst_42174 = (state_42195[(10)]);
var inst_42150 = (state_42195[(9)]);
var inst_42172 = (state_42195[(2)]);
var inst_42173 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_42151,inst_42172);
var inst_42174__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_42150);
var state_42195__$1 = (function (){var statearr_42218 = state_42195;
(statearr_42218[(12)] = inst_42173);

(statearr_42218[(10)] = inst_42174__$1);

return statearr_42218;
})();
if(cljs.core.truth_(inst_42174__$1)){
var statearr_42219_42242 = state_42195__$1;
(statearr_42219_42242[(1)] = (10));

} else {
var statearr_42220_42243 = state_42195__$1;
(statearr_42220_42243[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (5))){
var inst_42157 = (state_42195[(7)]);
var inst_42162 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",723,"([:or nil? map?] ?pulled)",inst_42157,null,null);
var state_42195__$1 = state_42195;
var statearr_42221_42244 = state_42195__$1;
(statearr_42221_42244[(2)] = inst_42162);

(statearr_42221_42244[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (14))){
var state_42195__$1 = state_42195;
var statearr_42222_42245 = state_42195__$1;
(statearr_42222_42245[(2)] = null);

(statearr_42222_42245[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (16))){
var inst_42173 = (state_42195[(12)]);
var inst_42150 = (state_42195[(9)]);
var inst_42183 = (state_42195[(2)]);
var inst_42184 = (inst_42150 + (1));
var inst_42150__$1 = inst_42184;
var inst_42151 = inst_42173;
var state_42195__$1 = (function (){var statearr_42223 = state_42195;
(statearr_42223[(8)] = inst_42151);

(statearr_42223[(13)] = inst_42183);

(statearr_42223[(9)] = inst_42150__$1);

return statearr_42223;
})();
var statearr_42224_42246 = state_42195__$1;
(statearr_42224_42246[(2)] = null);

(statearr_42224_42246[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (10))){
var inst_42173 = (state_42195[(12)]);
var inst_42176 = cljs.core.complement(inst_42173);
var inst_42177 = taoensso.encore.rsome(inst_42176,client_ids_unsatisfied);
var state_42195__$1 = state_42195;
if(cljs.core.truth_(inst_42177)){
var statearr_42225_42247 = state_42195__$1;
(statearr_42225_42247[(1)] = (13));

} else {
var statearr_42226_42248 = state_42195__$1;
(statearr_42226_42248[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42196 === (8))){
var state_42195__$1 = state_42195;
var statearr_42227_42249 = state_42195__$1;
(statearr_42227_42249[(2)] = null);

(statearr_42227_42249[(1)] = (9));


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
});})(c__38518__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__38411__auto__,c__38518__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto____0 = (function (){
var statearr_42228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42228[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto__);

(statearr_42228[(1)] = (1));

return statearr_42228;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto____1 = (function (state_42195){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_42195);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e42229){if((e42229 instanceof Object)){
var ex__38415__auto__ = e42229;
var statearr_42230_42250 = state_42195;
(statearr_42230_42250[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42195);

return cljs.core.cst$kw$recur;
} else {
throw e42229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42251 = state_42195;
state_42195 = G__42251;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto__ = function(state_42195){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto____1.call(this,state_42195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__38520__auto__ = (function (){var statearr_42231 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_42231[(6)] = c__38518__auto__);

return statearr_42231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__38518__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4434__auto__.call(null,chsk));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4431__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4434__auto__.call(null,chsk,reason));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4431__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4434__auto__.call(null,chsk));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4431__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4434__auto__.call(null,chsk,ev,opts));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4431__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,cljs.core.cst$kw$requested_DASH_disconnect);
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__42253 = arguments.length;
switch (G__42253) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timeout_DASH_ms,_QMARK_timeout_ms,cljs.core.cst$kw$cb,_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",773,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-388305623);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",778,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,788473028);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__42255_42256 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__42255_42256) : _QMARK_cb_fn.call(null,G__42255_42256));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5720__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto__)){
var cb_uuid = temp__5720__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__5720__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,_QMARK_f);
});})(cb_uuid,temp__5720__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__42257 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42257,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42257,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_42265 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42260){if((e42260 instanceof Error)){
var e = e42260;
return e;
} else {
throw e42260;

}
}})();
if((e_42265 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"(map? state)",state,e_42265,null);
}

var e_42266 = (function (){try{if((function (){var fexpr__42263 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__42264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42264) : taoensso.truss.impl.set_STAR_.call(null,G__42264));
})(),x);
});
return fexpr__42263(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42261){if((e42261 instanceof Error)){
var e = e42261;
return e;
} else {
throw e42261;

}
}})();
if((e_42266 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",826,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_42266,null);
}

if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,cljs.core.cst$kw$unexpected);
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect),cljs.core.cst$kw$open_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$last_DASH_close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$reason,reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_42271 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42267){if((e42267 instanceof Error)){
var e = e42267;
return e;
} else {
throw e42267;

}
}})();
if((e_42271 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",847,"(enc/chan? ?cb)",_QMARK_cb,e_42271,null);
}

taoensso.sente.assert_event(ev);

var vec__42268 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42268,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42268,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__42268,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
;})(vec__42268,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",858,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-1404802817);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",859,"(vector? clj)",clj,null,null));
var seq__42272 = cljs.core.seq(buffered_evs);
var chunk__42273 = null;
var count__42274 = (0);
var i__42275 = (0);
while(true){
if((i__42275 < count__42274)){
var ev = chunk__42273.cljs$core$IIndexed$_nth$arity$2(null,i__42275);
taoensso.sente.assert_event(ev);

var vec__42282_42288 = ev;
var id_42289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42282_42288,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_42289),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__42290 = seq__42272;
var G__42291 = chunk__42273;
var G__42292 = count__42274;
var G__42293 = (i__42275 + (1));
seq__42272 = G__42290;
chunk__42273 = G__42291;
count__42274 = G__42292;
i__42275 = G__42293;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42272);
if(temp__5720__auto__){
var seq__42272__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42272__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42272__$1);
var G__42294 = cljs.core.chunk_rest(seq__42272__$1);
var G__42295 = c__4550__auto__;
var G__42296 = cljs.core.count(c__4550__auto__);
var G__42297 = (0);
seq__42272 = G__42294;
chunk__42273 = G__42295;
count__42274 = G__42296;
i__42275 = G__42297;
continue;
} else {
var ev = cljs.core.first(seq__42272__$1);
taoensso.sente.assert_event(ev);

var vec__42285_42298 = ev;
var id_42299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42285_42298,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_42299),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__42300 = cljs.core.next(seq__42272__$1);
var G__42301 = null;
var G__42302 = (0);
var G__42303 = (0);
seq__42272 = G__42300;
chunk__42273 = G__42301;
count__42274 = G__42302;
i__42275 = G__42303;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__4120__auto__ = cljs.core.vector_QMARK_(x);
if(and__4120__auto__){
var vec__42307 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42307,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__4120__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_42324 = (function (){try{if((function (){var fexpr__42313 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__42314 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42314) : taoensso.truss.impl.set_STAR_.call(null,G__42314));
})(),x);
});
return fexpr__42313(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42311){if((e42311 instanceof Error)){
var e = e42311;
return e;
} else {
throw e42311;

}
}})();
if((e_42324 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_42324,null);
}

var e_42325 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42315){if((e42315 instanceof Error)){
var e = e42315;
return e;
} else {
throw e42315;

}
}})();
if((e_42325 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",874,"(handshake? clj)",clj,e_42325,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",875,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1055023914);

var vec__42316 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42316,(0),null);
var vec__42319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42316,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42319,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42319,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42319,(2),null);
var map__42322 = chsk;
var map__42322__$1 = (((((!((map__42322 == null))))?(((((map__42322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42322):map__42322);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42322__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42322__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",894,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42316,_,vec__42319,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42322,map__42322__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__42316,_,vec__42319,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42322,map__42322__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1280879016);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__42316,_,vec__42319,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42322,map__42322__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__42310_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42310_SHARP_,new_state], 0));
});})(vec__42316,_,vec__42319,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42322,map__42322__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return cljs.core.cst$kw$handled;
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{return require("websocket");
}catch (e42326){var e = e42326;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k42333,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__42337 = k42333;
var G__42337__$1 = (((G__42337 instanceof cljs.core.Keyword))?G__42337.fqn:null);
switch (G__42337__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42333,else__4388__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__42338){
var vec__42339 = p__42338;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42339,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42339,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42332){
var self__ = this;
var G__42332__$1 = this;
return (new cljs.core.RecordIter((0),G__42332__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__42342 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__42342(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42334,other42335){
var self__ = this;
var this42334__$1 = this;
return (((!((other42335 == null)))) && ((this42334__$1.constructor === other42335.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.client_id,other42335.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.chs,other42335.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.params,other42335.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.packer,other42335.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.url,other42335.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.ws_kalive_ms,other42335.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.state_,other42335.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.instance_handle_,other42335.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.retry_count_,other42335.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.ever_opened_QMARK__,other42335.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.backoff_ms_fn,other42335.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.cbs_waiting_,other42335.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.socket_,other42335.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.udt_last_comms_,other42335.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42334__$1.__extmap,other42335.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$udt_DASH_last_DASH_comms_,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$retry_DASH_count_,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$socket_,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$cbs_DASH_waiting_,null,cljs.core.cst$kw$state_,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__42332){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__42343 = cljs.core.keyword_identical_QMARK_;
var expr__42344 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__42346 = cljs.core.cst$kw$client_DASH_id;
var G__42347 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42346,G__42347) : pred__42343.call(null,G__42346,G__42347));
})())){
return (new taoensso.sente.ChWebSocket(G__42332,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42348 = cljs.core.cst$kw$chs;
var G__42349 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42348,G__42349) : pred__42343.call(null,G__42348,G__42349));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__42332,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42350 = cljs.core.cst$kw$params;
var G__42351 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42350,G__42351) : pred__42343.call(null,G__42350,G__42351));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__42332,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42352 = cljs.core.cst$kw$packer;
var G__42353 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42352,G__42353) : pred__42343.call(null,G__42352,G__42353));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__42332,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42354 = cljs.core.cst$kw$url;
var G__42355 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42354,G__42355) : pred__42343.call(null,G__42354,G__42355));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__42332,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42356 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__42357 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42356,G__42357) : pred__42343.call(null,G__42356,G__42357));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__42332,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42358 = cljs.core.cst$kw$state_;
var G__42359 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42358,G__42359) : pred__42343.call(null,G__42358,G__42359));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__42332,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42360 = cljs.core.cst$kw$instance_DASH_handle_;
var G__42361 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42360,G__42361) : pred__42343.call(null,G__42360,G__42361));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__42332,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42362 = cljs.core.cst$kw$retry_DASH_count_;
var G__42363 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42362,G__42363) : pred__42343.call(null,G__42362,G__42363));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__42332,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42364 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__42365 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42364,G__42365) : pred__42343.call(null,G__42364,G__42365));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__42332,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42366 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__42367 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42366,G__42367) : pred__42343.call(null,G__42366,G__42367));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__42332,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42368 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__42369 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42368,G__42369) : pred__42343.call(null,G__42368,G__42369));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__42332,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42370 = cljs.core.cst$kw$socket_;
var G__42371 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42370,G__42371) : pred__42343.call(null,G__42370,G__42371));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__42332,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42372 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__42373 = expr__42344;
return (pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(G__42372,G__42373) : pred__42343.call(null,G__42372,G__42373));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__42332,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__42332),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$client_DASH_id,self__.client_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$chs,self__.chs,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$packer,self__.packer,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$url,self__.url,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$state_,self__.state_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$socket_,self__.socket_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_,null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__42332){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__42332,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__42327_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42327_SHARP_,reason);
});})(chsk__$1))
);

var temp__5720__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__42374 = opts;
var map__42374__$1 = (((((!((map__42374 == null))))?(((((map__42374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42374):map__42374);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42374__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42374__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42374__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5720__auto___42456 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___42456)){
var cb_uuid_42457 = temp__5720__auto___42456;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_42457], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42376){if((e42376 instanceof Error)){
var e = e42376;
return e;
} else {
throw e42376;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",964,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5720__auto___42458__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5720__auto___42458__$1)){
var timeout_ms_42459 = temp__5720__auto___42458__$1;
var c__38518__auto___42460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___42460,timeout_ms_42459,temp__5720__auto___42458__$1,cb_uuid_42457,temp__5720__auto___42456,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___42460,timeout_ms_42459,temp__5720__auto___42458__$1,cb_uuid_42457,temp__5720__auto___42456,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_42387){
var state_val_42388 = (state_42387[(1)]);
if((state_val_42388 === (1))){
var inst_42377 = cljs.core.async.timeout(timeout_ms_42459);
var state_42387__$1 = state_42387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42387__$1,(2),inst_42377);
} else {
if((state_val_42388 === (2))){
var inst_42380 = (state_42387[(7)]);
var inst_42379 = (state_42387[(2)]);
var inst_42380__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_42387__$1 = (function (){var statearr_42389 = state_42387;
(statearr_42389[(8)] = inst_42379);

(statearr_42389[(7)] = inst_42380__$1);

return statearr_42389;
})();
if(cljs.core.truth_(inst_42380__$1)){
var statearr_42390_42461 = state_42387__$1;
(statearr_42390_42461[(1)] = (3));

} else {
var statearr_42391_42462 = state_42387__$1;
(statearr_42391_42462[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42388 === (3))){
var inst_42380 = (state_42387[(7)]);
var inst_42382 = (function (){var G__42392 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_42380.cljs$core$IFn$_invoke$arity$1 ? inst_42380.cljs$core$IFn$_invoke$arity$1(G__42392) : inst_42380.call(null,G__42392));
})();
var state_42387__$1 = state_42387;
var statearr_42393_42463 = state_42387__$1;
(statearr_42393_42463[(2)] = inst_42382);

(statearr_42393_42463[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42388 === (4))){
var state_42387__$1 = state_42387;
var statearr_42394_42464 = state_42387__$1;
(statearr_42394_42464[(2)] = null);

(statearr_42394_42464[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42388 === (5))){
var inst_42385 = (state_42387[(2)]);
var state_42387__$1 = state_42387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42387__$1,inst_42385);
} else {
return null;
}
}
}
}
}
});})(c__38518__auto___42460,timeout_ms_42459,temp__5720__auto___42458__$1,cb_uuid_42457,temp__5720__auto___42456,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__38411__auto__,c__38518__auto___42460,timeout_ms_42459,temp__5720__auto___42458__$1,cb_uuid_42457,temp__5720__auto___42456,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_42395 = [null,null,null,null,null,null,null,null,null];
(statearr_42395[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_42395[(1)] = (1));

return statearr_42395;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_42387){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_42387);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e42396){if((e42396 instanceof Object)){
var ex__38415__auto__ = e42396;
var statearr_42397_42465 = state_42387;
(statearr_42397_42465[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42387);

return cljs.core.cst$kw$recur;
} else {
throw e42396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42466 = state_42387;
state_42387 = G__42466;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_42387){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_42387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___42460,timeout_ms_42459,temp__5720__auto___42458__$1,cb_uuid_42457,temp__5720__auto___42456,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__38520__auto__ = (function (){var statearr_42398 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_42398[(6)] = c__38518__auto___42460);

return statearr_42398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___42460,timeout_ms_42459,temp__5720__auto___42458__$1,cb_uuid_42457,temp__5720__auto___42456,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e42399){var e = e42399;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init1953444919575323557.clj",976,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__42374,map__42374__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1513328905);

var temp__5720__auto___42467 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___42467)){
var cb_uuid_42468 = temp__5720__auto___42467;
var cb_fn_STAR__42469 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_42468);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42400){if((e42400 instanceof Error)){
var e__$1 = e42400;
return e__$1;
} else {
throw e42400;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",979,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__42401_42470 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__42469.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__42469.cljs$core$IFn$_invoke$arity$1(G__42401_42470) : cb_fn_STAR__42469.call(null,G__42401_42470));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5720__auto__ = (function (){var or__4131__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var WebSocket = temp__5720__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__5720__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1001,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,1830549726);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42328_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42328_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e42402){var e = e42402;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1015,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,1178138080);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__42403 = _QMARK_socket;
(G__42403["onerror"] = ((function (G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1025,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e42404){var _ = e42404;
return ws_ev;
}})()], null);
});})(G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,2051939565);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42329_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42329_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
});})(G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__42403["onmessage"] = ((function (G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__42405 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42405,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42405,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__4131__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ws,chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return cljs.core.cst$kw$handshake;
})()
:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping], null));

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var temp__5718__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5718__auto__)){
var cb_uuid = temp__5718__auto__;
var temp__5718__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5718__auto____$1)){
var cb_fn = temp__5718__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1061,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__42405,clj,_QMARK_cb_uuid,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__42405,clj,_QMARK_cb_uuid,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,1046785828);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__42403["onclose"] = ((function (G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1083,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1941672700);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42330_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42330_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42331_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__42331_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__42403,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return G__42403;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var temp__5720__auto___42471__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5720__auto___42471__$1)){
var ms_42472 = temp__5720__auto___42471__$1;
var c__38518__auto___42473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___42473,ms_42472,temp__5720__auto___42471__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___42473,ms_42472,temp__5720__auto___42471__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (state_42435){
var state_val_42436 = (state_42435[(1)]);
if((state_val_42436 === (7))){
var inst_42431 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
var statearr_42437_42474 = state_42435__$1;
(statearr_42437_42474[(2)] = inst_42431);

(statearr_42437_42474[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42436 === (1))){
var state_42435__$1 = state_42435;
var statearr_42438_42475 = state_42435__$1;
(statearr_42438_42475[(2)] = null);

(statearr_42438_42475[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42436 === (4))){
var inst_42412 = (state_42435[(2)]);
var inst_42413 = have_handle_QMARK_();
var state_42435__$1 = (function (){var statearr_42439 = state_42435;
(statearr_42439[(7)] = inst_42412);

return statearr_42439;
})();
if(inst_42413){
var statearr_42440_42476 = state_42435__$1;
(statearr_42440_42476[(1)] = (5));

} else {
var statearr_42441_42477 = state_42435__$1;
(statearr_42441_42477[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42436 === (6))){
var state_42435__$1 = state_42435;
var statearr_42442_42478 = state_42435__$1;
(statearr_42442_42478[(2)] = null);

(statearr_42442_42478[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42436 === (3))){
var inst_42433 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42435__$1,inst_42433);
} else {
if((state_val_42436 === (2))){
var inst_42409 = cljs.core.deref(self__.udt_last_comms_);
var inst_42410 = cljs.core.async.timeout(ms_42472);
var state_42435__$1 = (function (){var statearr_42443 = state_42435;
(statearr_42443[(8)] = inst_42409);

return statearr_42443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42435__$1,(4),inst_42410);
} else {
if((state_val_42436 === (9))){
var state_42435__$1 = state_42435;
var statearr_42444_42479 = state_42435__$1;
(statearr_42444_42479[(2)] = null);

(statearr_42444_42479[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42436 === (5))){
var inst_42409 = (state_42435[(8)]);
var inst_42415 = cljs.core.deref(self__.udt_last_comms_);
var inst_42416 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42409,inst_42415);
var state_42435__$1 = state_42435;
if(inst_42416){
var statearr_42445_42480 = state_42435__$1;
(statearr_42445_42480[(1)] = (8));

} else {
var statearr_42446_42481 = state_42435__$1;
(statearr_42446_42481[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42436 === (10))){
var inst_42427 = (state_42435[(2)]);
var state_42435__$1 = (function (){var statearr_42447 = state_42435;
(statearr_42447[(9)] = inst_42427);

return statearr_42447;
})();
var statearr_42448_42482 = state_42435__$1;
(statearr_42448_42482[(2)] = null);

(statearr_42448_42482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42436 === (8))){
var inst_42418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42419 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_42420 = (new cljs.core.PersistentVector(null,1,(5),inst_42418,inst_42419,null));
var inst_42421 = [cljs.core.cst$kw$flush_QMARK_];
var inst_42422 = [true];
var inst_42423 = cljs.core.PersistentHashMap.fromArrays(inst_42421,inst_42422);
var inst_42424 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_42420,inst_42423);
var state_42435__$1 = state_42435;
var statearr_42449_42483 = state_42435__$1;
(statearr_42449_42483[(2)] = inst_42424);

(statearr_42449_42483[(1)] = (10));


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
});})(c__38518__auto___42473,ms_42472,temp__5720__auto___42471__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
;
return ((function (switch__38411__auto__,c__38518__auto___42473,ms_42472,temp__5720__auto___42471__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__38412__auto__ = null;
var taoensso$sente$state_machine__38412__auto____0 = (function (){
var statearr_42450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42450[(0)] = taoensso$sente$state_machine__38412__auto__);

(statearr_42450[(1)] = (1));

return statearr_42450;
});
var taoensso$sente$state_machine__38412__auto____1 = (function (state_42435){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_42435);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e42451){if((e42451 instanceof Object)){
var ex__38415__auto__ = e42451;
var statearr_42452_42484 = state_42435;
(statearr_42452_42484[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42435);

return cljs.core.cst$kw$recur;
} else {
throw e42451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42485 = state_42435;
state_42435 = G__42485;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$state_machine__38412__auto__ = function(state_42435){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38412__auto____1.call(this,state_42435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38412__auto____0;
taoensso$sente$state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38412__auto____1;
return taoensso$sente$state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___42473,ms_42472,temp__5720__auto___42471__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
})();
var state__38520__auto__ = (function (){var statearr_42453 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_42453[(6)] = c__38518__auto___42473);

return statearr_42453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___42473,ms_42472,temp__5720__auto___42471__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$ws_DASH_kalive_DASH_ms,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$retry_DASH_count_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$cbs_DASH_waiting_,cljs.core.cst$sym$socket_,cljs.core.cst$sym$udt_DASH_last_DASH_comms_], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.sente/ChWebSocket");
});

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__42336){
var extmap__4424__auto__ = (function (){var G__42454 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42336,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0));
if(cljs.core.record_QMARK_(G__42336)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42454);
} else {
return G__42454;
}
})();
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__42336),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__42336),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ws,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$instance_DASH_handle_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$retry_DASH_count_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$socket_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$udt_DASH_last_DASH_comms_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k42493,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__42497 = k42493;
var G__42497__$1 = (((G__42497 instanceof cljs.core.Keyword))?G__42497.fqn:null);
switch (G__42497__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42493,else__4388__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__42498){
var vec__42499 = p__42498;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42499,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42499,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42492){
var self__ = this;
var G__42492__$1 = this;
return (new cljs.core.RecordIter((0),G__42492__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__42502 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__42502(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42494,other42495){
var self__ = this;
var this42494__$1 = this;
return (((!((other42495 == null)))) && ((this42494__$1.constructor === other42495.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.client_id,other42495.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.chs,other42495.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.params,other42495.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.packer,other42495.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.url,other42495.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.state_,other42495.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.instance_handle_,other42495.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.ever_opened_QMARK__,other42495.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.backoff_ms_fn,other42495.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.ajax_opts,other42495.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.curr_xhr_,other42495.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42494__$1.__extmap,other42495.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$curr_DASH_xhr_,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$ajax_DASH_opts,null,cljs.core.cst$kw$state_,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__42492){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__42503 = cljs.core.keyword_identical_QMARK_;
var expr__42504 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__42506 = cljs.core.cst$kw$client_DASH_id;
var G__42507 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42506,G__42507) : pred__42503.call(null,G__42506,G__42507));
})())){
return (new taoensso.sente.ChAjaxSocket(G__42492,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42508 = cljs.core.cst$kw$chs;
var G__42509 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42508,G__42509) : pred__42503.call(null,G__42508,G__42509));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__42492,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42510 = cljs.core.cst$kw$params;
var G__42511 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42510,G__42511) : pred__42503.call(null,G__42510,G__42511));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__42492,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42512 = cljs.core.cst$kw$packer;
var G__42513 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42512,G__42513) : pred__42503.call(null,G__42512,G__42513));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__42492,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42514 = cljs.core.cst$kw$url;
var G__42515 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42514,G__42515) : pred__42503.call(null,G__42514,G__42515));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__42492,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42516 = cljs.core.cst$kw$state_;
var G__42517 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42516,G__42517) : pred__42503.call(null,G__42516,G__42517));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__42492,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42518 = cljs.core.cst$kw$instance_DASH_handle_;
var G__42519 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42518,G__42519) : pred__42503.call(null,G__42518,G__42519));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__42492,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42520 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__42521 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42520,G__42521) : pred__42503.call(null,G__42520,G__42521));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__42492,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42522 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__42523 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42522,G__42523) : pred__42503.call(null,G__42522,G__42523));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__42492,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42524 = cljs.core.cst$kw$ajax_DASH_opts;
var G__42525 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42524,G__42525) : pred__42503.call(null,G__42524,G__42525));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__42492,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42526 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__42527 = expr__42504;
return (pred__42503.cljs$core$IFn$_invoke$arity$2 ? pred__42503.cljs$core$IFn$_invoke$arity$2(G__42526,G__42527) : pred__42503.call(null,G__42526,G__42527));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__42492,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__42492),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$client_DASH_id,self__.client_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$chs,self__.chs,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$packer,self__.packer,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$url,self__.url,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$state_,self__.state_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_,null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__42492){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__42492,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__42486_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42486_SHARP_,reason);
});})(chsk__$1))
);

var temp__5720__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5720__auto__)){
var x = temp__5720__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__42528 = opts;
var map__42528__$1 = (((((!((map__42528 == null))))?(((((map__42528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42528):map__42528);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42528__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42528__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42528__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__42530_42552 = self__.url;
var G__42531_42553 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,csrf_token], null)], 0)),cljs.core.cst$kw$params,(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?cljs.core.cst$kw$ajax_DASH_cb:null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$csrf_DASH_token,csrf_token,cljs.core.cst$kw$client_DASH_id,self__.client_id,cljs.core.cst$kw$ppstr,ppstr], null)], 0));
})()], null)], 0));
var G__42532_42554 = ((function (G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__42533){
var map__42534 = p__42533;
var map__42534__$1 = (((((!((map__42534 == null))))?(((((map__42534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42534):map__42534);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__42536 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__42536) : _QMARK_cb_fn.call(null,G__42536));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__42534,map__42534__$1,_QMARK_error,_QMARK_content,G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__42487_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42487_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__42534,map__42534__$1,_QMARK_error,_QMARK_content,G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__42537 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__42537) : _QMARK_cb_fn.call(null,G__42537));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__42538 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42538,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42538,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1203,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__42538,resp_clj,___$1,map__42534,map__42534__$1,_QMARK_error,_QMARK_content,G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__42538,resp_clj,___$1,map__42534,map__42534__$1,_QMARK_error,_QMARK_content,G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-864493777);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__42538,resp_clj,___$1,map__42534,map__42534__$1,_QMARK_error,_QMARK_content,G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__42488_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42488_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__42538,resp_clj,___$1,map__42534,map__42534__$1,_QMARK_error,_QMARK_content,G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__42530_42552,G__42531_42553,csrf_token,map__42528,map__42528__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__42530_42552,G__42531_42553,G__42532_42554) : taoensso.sente.ajax_lite.call(null,G__42530_42552,G__42531_42553,G__42532_42554));

return cljs.core.cst$kw$apparent_DASH_success;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1213,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1389917111);

if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1733013034);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__42489_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42489_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__42541 = self__.url;
var G__42542 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__42543 = ((function (G__42541,G__42542,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__42544){
var map__42545 = p__42544;
var map__42545__$1 = (((((!((map__42545 == null))))?(((((map__42545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42545):map__42545);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42545__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42545__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__42545,map__42545__$1,_QMARK_error,_QMARK_content,G__42541,G__42542,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__42490_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42490_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__42545,map__42545__$1,_QMARK_error,_QMARK_content,G__42541,G__42542,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__42547 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42547,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__42547,clj,handshake_QMARK_,map__42545,map__42545__$1,_QMARK_error,_QMARK_content,G__42541,G__42542,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__42491_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42491_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__42547,clj,handshake_QMARK_,map__42545,map__42545__$1,_QMARK_error,_QMARK_content,G__42541,G__42542,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__4131__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_timeout))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$debug_SLASH_timeout], null)], null));
} else {
}

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__42541,G__42542,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__42541,G__42542,G__42543) : taoensso.sente.ajax_lite.call(null,G__42541,G__42542,G__42543));
})());
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn((0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$ajax_DASH_opts,cljs.core.cst$sym$curr_DASH_xhr_], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.sente/ChAjaxSocket");
});

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__42496){
var extmap__4424__auto__ = (function (){var G__42550 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42496,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0));
if(cljs.core.record_QMARK_(G__42496)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42550);
} else {
return G__42550;
}
})();
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__42496),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__42496),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ajax,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$instance_DASH_handle_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$curr_DASH_xhr_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k42556,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__42560 = k42556;
var G__42560__$1 = (((G__42560 instanceof cljs.core.Keyword))?G__42560.fqn:null);
switch (G__42560__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42556,else__4388__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__42561){
var vec__42562 = p__42561;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42562,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42562,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42555){
var self__ = this;
var G__42555__$1 = this;
return (new cljs.core.RecordIter((0),G__42555__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__42565 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__42565(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42557,other42558){
var self__ = this;
var this42557__$1 = this;
return (((!((other42558 == null)))) && ((this42557__$1.constructor === other42558.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42557__$1.ws_chsk_opts,other42558.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42557__$1.ajax_chsk_opts,other42558.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42557__$1.state_,other42558.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42557__$1.impl_,other42558.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42557__$1.__extmap,other42558.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$impl_,null,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,null,cljs.core.cst$kw$state_,null,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__42555){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__42566 = cljs.core.keyword_identical_QMARK_;
var expr__42567 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__42569 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__42570 = expr__42567;
return (pred__42566.cljs$core$IFn$_invoke$arity$2 ? pred__42566.cljs$core$IFn$_invoke$arity$2(G__42569,G__42570) : pred__42566.call(null,G__42569,G__42570));
})())){
return (new taoensso.sente.ChAutoSocket(G__42555,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42571 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__42572 = expr__42567;
return (pred__42566.cljs$core$IFn$_invoke$arity$2 ? pred__42566.cljs$core$IFn$_invoke$arity$2(G__42571,G__42572) : pred__42566.call(null,G__42571,G__42572));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__42555,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42573 = cljs.core.cst$kw$state_;
var G__42574 = expr__42567;
return (pred__42566.cljs$core$IFn$_invoke$arity$2 ? pred__42566.cljs$core$IFn$_invoke$arity$2(G__42573,G__42574) : pred__42566.call(null,G__42573,G__42574));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__42555,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42575 = cljs.core.cst$kw$impl_;
var G__42576 = expr__42567;
return (pred__42566.cljs$core$IFn$_invoke$arity$2 ? pred__42566.cljs$core$IFn$_invoke$arity$2(G__42575,G__42576) : pred__42566.call(null,G__42575,G__42576));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__42555,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__42555),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$state_,self__.state_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$impl_,self__.impl_,null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__42555){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__42555,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5720__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5720__auto__)){
var impl = temp__5720__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5720__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5720__auto__)){
var impl = temp__5720__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5718__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5718__auto__)){
var impl = temp__5718__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__42577 = opts;
var map__42577__$1 = (((((!((map__42577 == null))))?(((((map__42577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42577):map__42577);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42577__$1,cljs.core.cst$kw$cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade);

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___42581 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___42581,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__5720__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5720__auto__)){
var impl = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ever_opened_QMARK__ = temp__5720__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$last_DASH_ws_DASH_error.cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___42581,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1349,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___42581,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___42581,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,741929739);

taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax);

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___42581,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_(self__.impl_,(function (){var or__4131__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ws_DASH_chsk_DASH_opts,cljs.core.cst$sym$ajax_DASH_chsk_DASH_opts,cljs.core.cst$sym$state_,cljs.core.cst$sym$impl_], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.sente/ChAutoSocket");
});

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__42559){
var extmap__4424__auto__ = (function (){var G__42579 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42559,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0));
if(cljs.core.record_QMARK_(G__42559)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42579);
} else {
return G__42579;
}
})();
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__42559),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__42559),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__42559),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__42559),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$impl_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__42582 = protocol;
var G__42582__$1 = (((G__42582 instanceof cljs.core.Keyword))?G__42582.fqn:null);
switch (G__42582__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__42585 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__42586 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42586) : taoensso.truss.impl.set_STAR_.call(null,G__42586));
})(),x);
});})(protocol__$1))
;
return fexpr__42585(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42583){if((e42583 instanceof Error)){
var e = e42583;
return e;
} else {
throw e42583;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1369,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__42587 = type;
var G__42587__$1 = (((G__42587 instanceof cljs.core.Keyword))?G__42587.fqn:null);
switch (G__42587__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__42588 = protocol__$2;
switch (G__42588) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42588)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42587__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42618 = arguments.length;
var i__4731__auto___42619 = (0);
while(true){
if((i__4731__auto___42619 < len__4730__auto___42618)){
args__4736__auto__.push((arguments[i__4731__auto___42619]));

var G__42620 = (i__4731__auto___42619 + (1));
i__4731__auto___42619 = G__42620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__42594){
var vec__42595 = p__42594;
var map__42598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42595,(0),null);
var map__42598__$1 = (((((!((map__42598 == null))))?(((((map__42598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42598):map__42598);
var opts = map__42598__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42598__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42598__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__4131__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42598__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42598__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42598__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42598__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42598__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42595,(1),null);
var e_42621 = (function (){try{if((function (){var fexpr__42602 = ((function (vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__42603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42603) : taoensso.truss.impl.set_STAR_.call(null,G__42603));
})(),x);
});})(vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__42602(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42600){if((e42600 instanceof Error)){
var e = e42600;
return e;
} else {
throw e42600;

}
}})();
if((e_42621 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"([:in #{:ws :ajax :auto}] type)",type,e_42621,null);
}

var e_42622 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42604){if((e42604 instanceof Error)){
var e = e42604;
return e;
} else {
throw e42604;

}
}})();
if((e_42622 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1412,"(enc/nblank-str? client-id)",client_id,e_42622,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1414,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,18570392);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1415,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-105996973);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__42605 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$pathname.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5718__auto__ = cljs.core.cst$kw$chsk_DASH_url_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42608 = path__$1;
var G__42609 = win_loc;
var G__42610 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42608,G__42609,G__42610) : f.call(null,G__42608,G__42609,G__42610));
})(),(function (){var G__42611 = path__$1;
var G__42612 = win_loc;
var G__42613 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42611,G__42612,G__42613) : f.call(null,G__42611,G__42612,G__42613));
})()], null);
} else {
var protocol__$1 = (function (){var or__4131__auto__ = protocol;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.cst$kw$http;
}
}
})();
var host__$1 = (function (){var or__4131__auto__ = host;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ws),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ajax)], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42605,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42605,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__42605,ws_url,ajax_url,vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__42605,ws_url,ajax_url,vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__42614 = type;
var G__42614__$1 = (((G__42614 instanceof cljs.core.Keyword))?G__42614.fqn:null);
switch (G__42614__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42614__$1)].join('')));

}
})());
var temp__5718__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5718__auto__)){
var chsk = temp__5718__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__42605,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__42615 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42615,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42615,(1),null);
var ev__$1 = vec__42615;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__42605,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1503,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,packer__$1,vec__42605,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5718__auto__,packer__$1,vec__42605,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42595,map__42598,map__42598__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-2126807688);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq42592){
var G__42593 = cljs.core.first(seq42592);
var seq42592__$1 = cljs.core.next(seq42592);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42593,seq42592__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__42624 = opts;
var map__42624__$1 = (((((!((map__42624 == null))))?(((((map__42624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42624):map__42624);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42624__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42624__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42624__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__38518__auto___42704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__38519__auto__ = (function (){var switch__38411__auto__ = ((function (c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_42673){
var state_val_42674 = (state_42673[(1)]);
if((state_val_42674 === (7))){
var inst_42669 = (state_42673[(2)]);
var state_42673__$1 = state_42673;
var statearr_42675_42705 = state_42673__$1;
(statearr_42675_42705[(2)] = inst_42669);

(statearr_42675_42705[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (1))){
var state_42673__$1 = state_42673;
var statearr_42676_42706 = state_42673__$1;
(statearr_42676_42706[(2)] = null);

(statearr_42676_42706[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (4))){
var inst_42636 = (state_42673[(7)]);
var inst_42635 = (state_42673[(8)]);
var inst_42639 = (state_42673[(9)]);
var inst_42634 = (state_42673[(10)]);
var inst_42634__$1 = (state_42673[(2)]);
var inst_42635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42634__$1,(0),null);
var inst_42636__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42634__$1,(1),null);
var inst_42637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42636__$1,ch_ctrl);
var inst_42638 = (inst_42635__$1 == null);
var inst_42639__$1 = ((inst_42637) || (inst_42638));
var state_42673__$1 = (function (){var statearr_42677 = state_42673;
(statearr_42677[(7)] = inst_42636__$1);

(statearr_42677[(8)] = inst_42635__$1);

(statearr_42677[(9)] = inst_42639__$1);

(statearr_42677[(10)] = inst_42634__$1);

return statearr_42677;
})();
if(cljs.core.truth_(inst_42639__$1)){
var statearr_42678_42707 = state_42673__$1;
(statearr_42678_42707[(1)] = (5));

} else {
var statearr_42679_42708 = state_42673__$1;
(statearr_42679_42708[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (15))){
var inst_42635 = (state_42673[(8)]);
var state_42673__$1 = state_42673;
var statearr_42680_42709 = state_42673__$1;
(statearr_42680_42709[(2)] = inst_42635);

(statearr_42680_42709[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (13))){
var inst_42655 = (state_42673[(2)]);
var state_42673__$1 = state_42673;
var statearr_42681_42710 = state_42673__$1;
(statearr_42681_42710[(2)] = inst_42655);

(statearr_42681_42710[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (6))){
var inst_42635 = (state_42673[(8)]);
var inst_42644 = (inst_42635 == null);
var inst_42645 = cljs.core.not(inst_42644);
var state_42673__$1 = state_42673;
if(inst_42645){
var statearr_42682_42711 = state_42673__$1;
(statearr_42682_42711[(1)] = (8));

} else {
var statearr_42683_42712 = state_42673__$1;
(statearr_42683_42712[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (3))){
var inst_42671 = (state_42673[(2)]);
var state_42673__$1 = state_42673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42673__$1,inst_42671);
} else {
if((state_val_42674 === (12))){
var state_42673__$1 = state_42673;
var statearr_42684_42713 = state_42673__$1;
(statearr_42684_42713[(2)] = false);

(statearr_42684_42713[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (2))){
var inst_42630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42631 = [ch_recv,ch_ctrl];
var inst_42632 = (new cljs.core.PersistentVector(null,2,(5),inst_42630,inst_42631,null));
var state_42673__$1 = state_42673;
return cljs.core.async.ioc_alts_BANG_(state_42673__$1,(4),inst_42632);
} else {
if((state_val_42674 === (11))){
var state_42673__$1 = state_42673;
var statearr_42685_42714 = state_42673__$1;
(statearr_42685_42714[(2)] = true);

(statearr_42685_42714[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (9))){
var state_42673__$1 = state_42673;
var statearr_42686_42715 = state_42673__$1;
(statearr_42686_42715[(2)] = false);

(statearr_42686_42715[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (5))){
var state_42673__$1 = state_42673;
var statearr_42687_42716 = state_42673__$1;
(statearr_42687_42716[(2)] = null);

(statearr_42687_42716[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (14))){
var inst_42635 = (state_42673[(8)]);
var inst_42660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42635);
var state_42673__$1 = state_42673;
var statearr_42688_42717 = state_42673__$1;
(statearr_42688_42717[(2)] = inst_42660);

(statearr_42688_42717[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (16))){
var inst_42636 = (state_42673[(7)]);
var inst_42635 = (state_42673[(8)]);
var inst_42639 = (state_42673[(9)]);
var inst_42634 = (state_42673[(10)]);
var inst_42663 = (state_42673[(2)]);
var inst_42664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42663,cljs.core.cst$kw$event);
var inst_42665 = (function (){var vec__42627 = inst_42634;
var v = inst_42635;
var p = inst_42636;
var stop_QMARK_ = inst_42639;
var map__42642 = inst_42663;
var event_msg = inst_42663;
var event = inst_42664;
return ((function (vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1530,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1490594275);
} else {
}

var G__42691 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42692){if((e42692 instanceof Error)){
var e = e42692;
return e;
} else {
throw e42692;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1533,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42693){if((e42693 instanceof Error)){
var e = e42693;
return e;
} else {
throw e42693;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1534,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__42691) : event_msg_handler.call(null,G__42691));
}catch (e42689){if((e42689 instanceof Error)){
var e1 = e42689;
try{var temp__5718__auto__ = error_handler;
if(cljs.core.truth_(temp__5718__auto__)){
var eh = temp__5718__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1539,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,e1,vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5718__auto__,e1,vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,514089122);
}
}catch (e42690){if((e42690 instanceof Error)){
var e2 = e42690;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init1953444919575323557.clj",1540,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,464444562);
} else {
throw e42690;

}
}} else {
throw e42689;

}
}});
;})(vec__42627,v,p,stop_QMARK_,map__42642,event_msg,event,inst_42636,inst_42635,inst_42639,inst_42634,inst_42663,inst_42664,state_val_42674,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_42666 = execute1(inst_42665);
var state_42673__$1 = (function (){var statearr_42694 = state_42673;
(statearr_42694[(11)] = inst_42666);

return statearr_42694;
})();
var statearr_42695_42718 = state_42673__$1;
(statearr_42695_42718[(2)] = null);

(statearr_42695_42718[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (10))){
var inst_42658 = (state_42673[(2)]);
var state_42673__$1 = state_42673;
if(cljs.core.truth_(inst_42658)){
var statearr_42696_42719 = state_42673__$1;
(statearr_42696_42719[(1)] = (14));

} else {
var statearr_42697_42720 = state_42673__$1;
(statearr_42697_42720[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42674 === (8))){
var inst_42635 = (state_42673[(8)]);
var inst_42647 = inst_42635.cljs$lang$protocol_mask$partition0$;
var inst_42648 = (inst_42647 & (64));
var inst_42649 = inst_42635.cljs$core$ISeq$;
var inst_42650 = (cljs.core.PROTOCOL_SENTINEL === inst_42649);
var inst_42651 = ((inst_42648) || (inst_42650));
var state_42673__$1 = state_42673;
if(cljs.core.truth_(inst_42651)){
var statearr_42698_42721 = state_42673__$1;
(statearr_42698_42721[(1)] = (11));

} else {
var statearr_42699_42722 = state_42673__$1;
(statearr_42699_42722[(1)] = (12));

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
});})(c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__38411__auto__,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto____0 = (function (){
var statearr_42700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42700[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto__);

(statearr_42700[(1)] = (1));

return statearr_42700;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto____1 = (function (state_42673){
while(true){
var ret_value__38413__auto__ = (function (){try{while(true){
var result__38414__auto__ = switch__38411__auto__(state_42673);
if(cljs.core.keyword_identical_QMARK_(result__38414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38414__auto__;
}
break;
}
}catch (e42701){if((e42701 instanceof Object)){
var ex__38415__auto__ = e42701;
var statearr_42702_42723 = state_42673;
(statearr_42702_42723[(5)] = ex__38415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42673);

return cljs.core.cst$kw$recur;
} else {
throw e42701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38413__auto__,cljs.core.cst$kw$recur)){
var G__42724 = state_42673;
state_42673 = G__42724;
continue;
} else {
return ret_value__38413__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto__ = function(state_42673){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto____1.call(this,state_42673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__38412__auto__;
})()
;})(switch__38411__auto__,c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__38520__auto__ = (function (){var statearr_42703 = (f__38519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38519__auto__.cljs$core$IFn$_invoke$arity$0() : f__38519__auto__.call(null));
(statearr_42703[(6)] = c__38518__auto___42704);

return statearr_42703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38520__auto__);
});})(c__38518__auto___42704,map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__42624,map__42624__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42734 = arguments.length;
var i__4731__auto___42735 = (0);
while(true){
if((i__4731__auto___42735 < len__4730__auto___42734)){
args__4736__auto__.push((arguments[i__4731__auto___42735]));

var G__42736 = (i__4731__auto___42735 + (1));
i__4731__auto___42735 = G__42736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__42728){
var vec__42729 = p__42728;
var map__42732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42729,(0),null);
var map__42732__$1 = (((((!((map__42732 == null))))?(((((map__42732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42732):map__42732);
var opts = map__42732__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42732__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42732__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42732__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq42725){
var G__42726 = cljs.core.first(seq42725);
var seq42725__$1 = cljs.core.next(seq42725);
var G__42727 = cljs.core.first(seq42725__$1);
var seq42725__$2 = cljs.core.next(seq42725__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42726,G__42727,seq42725__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42746 = arguments.length;
var i__4731__auto___42747 = (0);
while(true){
if((i__4731__auto___42747 < len__4730__auto___42746)){
args__4736__auto__.push((arguments[i__4731__auto___42747]));

var G__42748 = (i__4731__auto___42747 + (1));
i__4731__auto___42747 = G__42748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__42740){
var vec__42741 = p__42740;
var map__42744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42741,(0),null);
var map__42744__$1 = (((((!((map__42744 == null))))?(((((map__42744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42744):map__42744);
var opts = map__42744__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42744__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42744__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq42737){
var G__42738 = cljs.core.first(seq42737);
var seq42737__$1 = cljs.core.next(seq42737);
var G__42739 = cljs.core.first(seq42737__$1);
var seq42737__$2 = cljs.core.next(seq42737__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42738,G__42739,seq42737__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__42749 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__42750 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__42749,G__42750) : event_handler.call(null,G__42749,G__42750));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__42751,websocket_QMARK_){
var map__42752 = p__42751;
var map__42752__$1 = (((((!((map__42752 == null))))?(((((map__42752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42752):map__42752);
var location = map__42752__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42752__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42752__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42752__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pathname;
}
})())].join('');
});
