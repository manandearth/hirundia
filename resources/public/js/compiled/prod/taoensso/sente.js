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
if(cljs.core.not((function (){var G__47961 = cljs.core.count(x);
var fexpr__47960 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__47960.cljs$core$IFn$_invoke$arity$1 ? fexpr__47960.cljs$core$IFn$_invoke$arity$1(G__47961) : fexpr__47960.call(null,G__47961));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__47962 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962,(1),null);
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
var map__47969 = x;
var map__47969__$1 = (((((!((map__47969 == null))))?(((((map__47969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47969):map__47969);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47969__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47969__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47969__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47969__$1,cljs.core.cst$kw$event);
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
var map__47975 = x;
var map__47975__$1 = (((((!((map__47975 == null))))?(((((map__47975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47975):map__47975);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__47977){
var map__47978 = p__47977;
var map__47978__$1 = (((((!((map__47978 == null))))?(((((map__47978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47978):map__47978);
var ev_msg = map__47978__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__47980 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47980,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47980,(1),null);
var valid_event = vec__47980;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__47980,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__47978,map__47978__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__47980,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__47978,map__47978__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-13646053);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__47983 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null);
return (fexpr__47983.cljs$core$IFn$_invoke$arity$1 ? fexpr__47983.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__47983.call(null,cb_reply_clj));
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
}catch (e47987){var t = e47987;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init5041265418616416588.clj",208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,1887172688);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__47984 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__47984,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__47984,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1013260340);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__47989 = arguments.length;
switch (G__47989) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,-2036225803);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",230,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,93487436);

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
var e = (function (){try{if((function (){var fexpr__47994 = (function (p1__47991_SHARP_){
if((!((p1__47991_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__47991_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__47991_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__47991_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__47991_SHARP_);
}
});
return fexpr__47994(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47992){if((e47992 instanceof Error)){
var e = e47992;
return e;
} else {
throw e47992;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__47991#] (satisfies? interfaces/IPacker p1__47991#)) x)",x,e,null);
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
var len__4730__auto___48308 = arguments.length;
var i__4731__auto___48309 = (0);
while(true){
if((i__4731__auto___48309 < len__4730__auto___48308)){
args__4736__auto__.push((arguments[i__4731__auto___48309]));

var G__48310 = (i__4731__auto___48309 + (1));
i__4731__auto___48309 = G__48310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__47999){
var vec__48000 = p__47999;
var map__48003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48000,(0),null);
var map__48003__$1 = (((((!((map__48003 == null))))?(((((map__48003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48003):map__48003);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms){
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
});})(vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax){
return (function (ring_req){
return null;
});})(vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax))
);
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn))
);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48003__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48005){if((e48005 instanceof Error)){
var e = e48005;
return e;
} else {
throw e48005;

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
}catch (e48006){if((e48006 instanceof Error)){
var e = e48006;
return e;
} else {
throw e48006;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_48311 = (function (){try{if((function (){var fexpr__48009 = ((function (vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p1__47996_SHARP_){
if((!((p1__47996_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__47996_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__47996_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__47996_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__47996_SHARP_);
}
});})(vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return fexpr__48009(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48007){if((e48007 instanceof Error)){
var e = e48007;
return e;
} else {
throw e48007;

}
}})();
if((e_48311 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",315,"((fn* [p1__47996#] (satisfies? interfaces/IServerChanAdapter p1__47996#)) web-server-ch-adapter)",web_server_ch_adapter,e_48311,null);
}

var max_ms_48312 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_48312)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_48312)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_48312], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req,client_id){
var or__4131__auto__ = (function (){var G__48012 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__48012) : user_id_fn.call(null,G__48012));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var G__48313 = null;
var G__48313__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var vec__48013 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48013,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48013,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
var G__48313__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
G__48313 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__48313__3.call(this,conn_type,uid,client_id);
case 4:
return G__48313__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48313.cljs$core$IFn$_invoke$arity$3 = G__48313__3;
G__48313.cljs$core$IFn$_invoke$arity$4 = G__48313__4;
return G__48313;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48016){if((e48016 instanceof Error)){
var e = e48016;
return e;
} else {
throw e48016;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__48017){
var map__48018 = p__48017;
var map__48018__$1 = (((((!((map__48018 == null))))?(((((map__48018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48018):map__48018);
var old_m = map__48018__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__48020 = conn_type;
var G__48020__$1 = (((G__48020 instanceof cljs.core.Keyword))?G__48020.fqn:null);
switch (G__48020__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48020__$1)].join('')));

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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48021){if((e48021 instanceof Error)){
var e = e48021;
return e;
} else {
throw e48021;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__48022){
var map__48023 = p__48022;
var map__48023__$1 = (((((!((map__48023 == null))))?(((((map__48023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48023):map__48023);
var old_m = map__48023__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,cljs.core.cst$kw$any);
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() { 
var G__48315__delegate = function (user_id,ev,p__48025){
var vec__48026 = p__48025;
var map__48029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48026,(0),null);
var map__48029__$1 = (((((!((map__48029 == null))))?(((((map__48029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48029):map__48029);
var opts = map__48029__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48029__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_48316 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __48317 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",402,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_48316,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_48316,ev], null);
});})(uid_48316,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1050410323);
var __48318__$1 = (cljs.core.truth_(uid_48316)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __48319__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_48320 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__48321 = ((function (uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type){
var temp__5720__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (m){
var vec__48031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_48316);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48031,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48031,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_48320)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_48316),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_48316));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
if(cljs.core.truth_(temp__5720__auto__)){
var pulled = temp__5720__auto__;
var vec__48034 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48034,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48034,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",430,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",433,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__48034,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__48034,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-2140526682);

var G__48037 = conn_type;
var G__48037__$1 = (((G__48037 instanceof cljs.core.Keyword))?G__48037.fqn:null);
switch (G__48037__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_48316,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_48316,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_48316,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_48316,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48037__$1)].join('')));

}
} else {
return null;
}
});})(uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init5041265418616416588.clj",442,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_48316], null);
});})(uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,2064205199);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48321(cljs.core.cst$kw$ws);

flush_buffer_BANG__48321(cljs.core.cst$kw$ajax);
} else {
}

var seq__48038_48323 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_48316], null))));
var chunk__48039_48324 = null;
var count__48040_48325 = (0);
var i__48041_48326 = (0);
while(true){
if((i__48041_48326 < count__48040_48325)){
var vec__48048_48327 = chunk__48039_48324.cljs$core$IIndexed$_nth$arity$2(null,i__48041_48326);
var _QMARK_sch_48328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48048_48327,(0),null);
var _udt_48329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48048_48327,(1),null);
var temp__5720__auto___48330 = _QMARK_sch_48328;
if(cljs.core.truth_(temp__5720__auto___48330)){
var sch_48331 = temp__5720__auto___48330;
taoensso.sente.interfaces.sch_close_BANG_(sch_48331);
} else {
}


var G__48332 = seq__48038_48323;
var G__48333 = chunk__48039_48324;
var G__48334 = count__48040_48325;
var G__48335 = (i__48041_48326 + (1));
seq__48038_48323 = G__48332;
chunk__48039_48324 = G__48333;
count__48040_48325 = G__48334;
i__48041_48326 = G__48335;
continue;
} else {
var temp__5720__auto___48336 = cljs.core.seq(seq__48038_48323);
if(temp__5720__auto___48336){
var seq__48038_48337__$1 = temp__5720__auto___48336;
if(cljs.core.chunked_seq_QMARK_(seq__48038_48337__$1)){
var c__4550__auto___48338 = cljs.core.chunk_first(seq__48038_48337__$1);
var G__48339 = cljs.core.chunk_rest(seq__48038_48337__$1);
var G__48340 = c__4550__auto___48338;
var G__48341 = cljs.core.count(c__4550__auto___48338);
var G__48342 = (0);
seq__48038_48323 = G__48339;
chunk__48039_48324 = G__48340;
count__48040_48325 = G__48341;
i__48041_48326 = G__48342;
continue;
} else {
var vec__48051_48343 = cljs.core.first(seq__48038_48337__$1);
var _QMARK_sch_48344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48051_48343,(0),null);
var _udt_48345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48051_48343,(1),null);
var temp__5720__auto___48346__$1 = _QMARK_sch_48344;
if(cljs.core.truth_(temp__5720__auto___48346__$1)){
var sch_48347 = temp__5720__auto___48346__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_48347);
} else {
}


var G__48348 = cljs.core.next(seq__48038_48337__$1);
var G__48349 = null;
var G__48350 = (0);
var G__48351 = (0);
seq__48038_48323 = G__48348;
chunk__48039_48324 = G__48349;
count__48040_48325 = G__48350;
i__48041_48326 = G__48351;
continue;
}
} else {
}
}
break;
}

var seq__48054_48352 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_48316], null))));
var chunk__48055_48353 = null;
var count__48056_48354 = (0);
var i__48057_48355 = (0);
while(true){
if((i__48057_48355 < count__48056_48354)){
var vec__48064_48356 = chunk__48055_48353.cljs$core$IIndexed$_nth$arity$2(null,i__48057_48355);
var _QMARK_sch_48357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48064_48356,(0),null);
var _udt_48358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48064_48356,(1),null);
var temp__5720__auto___48359 = _QMARK_sch_48357;
if(cljs.core.truth_(temp__5720__auto___48359)){
var sch_48360 = temp__5720__auto___48359;
taoensso.sente.interfaces.sch_close_BANG_(sch_48360);
} else {
}


var G__48361 = seq__48054_48352;
var G__48362 = chunk__48055_48353;
var G__48363 = count__48056_48354;
var G__48364 = (i__48057_48355 + (1));
seq__48054_48352 = G__48361;
chunk__48055_48353 = G__48362;
count__48056_48354 = G__48363;
i__48057_48355 = G__48364;
continue;
} else {
var temp__5720__auto___48365 = cljs.core.seq(seq__48054_48352);
if(temp__5720__auto___48365){
var seq__48054_48366__$1 = temp__5720__auto___48365;
if(cljs.core.chunked_seq_QMARK_(seq__48054_48366__$1)){
var c__4550__auto___48367 = cljs.core.chunk_first(seq__48054_48366__$1);
var G__48368 = cljs.core.chunk_rest(seq__48054_48366__$1);
var G__48369 = c__4550__auto___48367;
var G__48370 = cljs.core.count(c__4550__auto___48367);
var G__48371 = (0);
seq__48054_48352 = G__48368;
chunk__48055_48353 = G__48369;
count__48056_48354 = G__48370;
i__48057_48355 = G__48371;
continue;
} else {
var vec__48067_48372 = cljs.core.first(seq__48054_48366__$1);
var _QMARK_sch_48373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48067_48372,(0),null);
var _udt_48374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48067_48372,(1),null);
var temp__5720__auto___48375__$1 = _QMARK_sch_48373;
if(cljs.core.truth_(temp__5720__auto___48375__$1)){
var sch_48376 = temp__5720__auto___48375__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_48376);
} else {
}


var G__48377 = cljs.core.next(seq__48054_48366__$1);
var G__48378 = null;
var G__48379 = (0);
var G__48380 = (0);
seq__48054_48352 = G__48377;
chunk__48055_48353 = G__48378;
count__48056_48354 = G__48379;
i__48057_48355 = G__48380;
continue;
}
} else {
}
}
break;
}
} else {
var seq__48070_48381 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__48071_48382 = null;
var count__48072_48383 = (0);
var i__48073_48384 = (0);
while(true){
if((i__48073_48384 < count__48072_48383)){
var conn_type_48385 = chunk__48071_48382.cljs$core$IIndexed$_nth$arity$2(null,i__48073_48384);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48385,uid_48316], null),((function (seq__48070_48381,chunk__48071_48382,count__48072_48383,i__48073_48384,conn_type_48385,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_48320])], null);
} else {
var vec__48080 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_48320)], null);
}
});})(seq__48070_48381,chunk__48071_48382,count__48072_48383,i__48073_48384,conn_type_48385,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__48386 = seq__48070_48381;
var G__48387 = chunk__48071_48382;
var G__48388 = count__48072_48383;
var G__48389 = (i__48073_48384 + (1));
seq__48070_48381 = G__48386;
chunk__48071_48382 = G__48387;
count__48072_48383 = G__48388;
i__48073_48384 = G__48389;
continue;
} else {
var temp__5720__auto___48390 = cljs.core.seq(seq__48070_48381);
if(temp__5720__auto___48390){
var seq__48070_48391__$1 = temp__5720__auto___48390;
if(cljs.core.chunked_seq_QMARK_(seq__48070_48391__$1)){
var c__4550__auto___48392 = cljs.core.chunk_first(seq__48070_48391__$1);
var G__48393 = cljs.core.chunk_rest(seq__48070_48391__$1);
var G__48394 = c__4550__auto___48392;
var G__48395 = cljs.core.count(c__4550__auto___48392);
var G__48396 = (0);
seq__48070_48381 = G__48393;
chunk__48071_48382 = G__48394;
count__48072_48383 = G__48395;
i__48073_48384 = G__48396;
continue;
} else {
var conn_type_48397 = cljs.core.first(seq__48070_48391__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48397,uid_48316], null),((function (seq__48070_48381,chunk__48071_48382,count__48072_48383,i__48073_48384,conn_type_48397,seq__48070_48391__$1,temp__5720__auto___48390,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_48320])], null);
} else {
var vec__48083 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_48320)], null);
}
});})(seq__48070_48381,chunk__48071_48382,count__48072_48383,i__48073_48384,conn_type_48397,seq__48070_48391__$1,temp__5720__auto___48390,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__48398 = cljs.core.next(seq__48070_48391__$1);
var G__48399 = null;
var G__48400 = (0);
var G__48401 = (0);
seq__48070_48381 = G__48398;
chunk__48071_48382 = G__48399;
count__48072_48383 = G__48400;
i__48073_48384 = G__48401;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48321(cljs.core.cst$kw$ws);

flush_buffer_BANG__48321(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_48402 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_48403 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__40751__auto___48404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___48404,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___48404,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48090){
var state_val_48091 = (state_48090[(1)]);
if((state_val_48091 === (1))){
var state_48090__$1 = state_48090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48090__$1,(2),ws_timeout_48402);
} else {
if((state_val_48091 === (2))){
var inst_48087 = (state_48090[(2)]);
var inst_48088 = flush_buffer_BANG__48321(cljs.core.cst$kw$ws);
var state_48090__$1 = (function (){var statearr_48092 = state_48090;
(statearr_48092[(7)] = inst_48087);

return statearr_48092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48090__$1,inst_48088);
} else {
return null;
}
}
});})(c__40751__auto___48404,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40560__auto__,c__40751__auto___48404,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48093 = [null,null,null,null,null,null,null,null];
(statearr_48093[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48093[(1)] = (1));

return statearr_48093;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48090){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48090);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48094){if((e48094 instanceof Object)){
var ex__40564__auto__ = e48094;
var statearr_48095_48405 = state_48090;
(statearr_48095_48405[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48090);

return cljs.core.cst$kw$recur;
} else {
throw e48094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48406 = state_48090;
state_48090 = G__48406;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48090){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___48404,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40753__auto__ = (function (){var statearr_48096 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48096[(6)] = c__40751__auto___48404);

return statearr_48096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___48404,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var c__40751__auto___48407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___48407,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___48407,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48101){
var state_val_48102 = (state_48101[(1)]);
if((state_val_48102 === (1))){
var state_48101__$1 = state_48101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48101__$1,(2),ajax_timeout_48403);
} else {
if((state_val_48102 === (2))){
var inst_48098 = (state_48101[(2)]);
var inst_48099 = flush_buffer_BANG__48321(cljs.core.cst$kw$ajax);
var state_48101__$1 = (function (){var statearr_48103 = state_48101;
(statearr_48103[(7)] = inst_48098);

return statearr_48103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48101__$1,inst_48099);
} else {
return null;
}
}
});})(c__40751__auto___48407,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40560__auto__,c__40751__auto___48407,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48104 = [null,null,null,null,null,null,null,null];
(statearr_48104[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48104[(1)] = (1));

return statearr_48104;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48101){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48101);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48105){if((e48105 instanceof Object)){
var ex__40564__auto__ = e48105;
var statearr_48106_48408 = state_48101;
(statearr_48106_48408[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48101);

return cljs.core.cst$kw$recur;
} else {
throw e48105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48409 = state_48101;
state_48101 = G__48409;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48101){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___48407,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40753__auto__ = (function (){var statearr_48107 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48107[(6)] = c__40751__auto___48407);

return statearr_48107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___48407,ws_timeout_48402,ajax_timeout_48403,uid_48316,__48317,__48318__$1,__48319__$2,ev_uuid_48320,flush_buffer_BANG__48321,vec__48026,map__48029,map__48029__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

}
}

return null;
};
var G__48315 = function (user_id,ev,var_args){
var p__48025 = null;
if (arguments.length > 2) {
var G__48410__i = 0, G__48410__a = new Array(arguments.length -  2);
while (G__48410__i < G__48410__a.length) {G__48410__a[G__48410__i] = arguments[G__48410__i + 2]; ++G__48410__i;}
  p__48025 = new cljs.core.IndexedSeq(G__48410__a,0,null);
} 
return G__48315__delegate.call(this,user_id,ev,p__48025);};
G__48315.cljs$lang$maxFixedArity = 2;
G__48315.cljs$lang$applyTo = (function (arglist__48411){
var user_id = cljs.core.first(arglist__48411);
arglist__48411 = cljs.core.next(arglist__48411);
var ev = cljs.core.first(arglist__48411);
var p__48025 = cljs.core.rest(arglist__48411);
return G__48315__delegate(user_id,ev,p__48025);
});
G__48315.cljs$core$IFn$_invoke$arity$variadic = G__48315__delegate;
return G__48315;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__48108 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48108,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48108,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",511,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1542759829);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5720__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5720__auto__)){
var ms = temp__5720__auto__;
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48116){
var state_val_48117 = (state_48116[(1)]);
if((state_val_48117 === (1))){
var inst_48111 = cljs.core.async.timeout(ms);
var state_48116__$1 = state_48116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48116__$1,(2),inst_48111);
} else {
if((state_val_48117 === (2))){
var inst_48113 = (state_48116[(2)]);
var inst_48114 = (function (){var G__48118 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__48118) : reply_fn.call(null,G__48118));
})();
var state_48116__$1 = (function (){var statearr_48119 = state_48116;
(statearr_48119[(7)] = inst_48113);

return statearr_48119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48116__$1,inst_48114);
} else {
return null;
}
}
});})(c__40751__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40560__auto__,c__40751__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48120 = [null,null,null,null,null,null,null,null];
(statearr_48120[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48120[(1)] = (1));

return statearr_48120;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48116){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48116);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48121){if((e48121 instanceof Object)){
var ex__40564__auto__ = e48121;
var statearr_48122_48412 = state_48116;
(statearr_48122_48412[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48116);

return cljs.core.cst$kw$recur;
} else {
throw e48121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48413 = state_48116;
state_48116 = G__48413;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48116){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40753__auto__ = (function (){var statearr_48123 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48123[(6)] = c__40751__auto__);

return statearr_48123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48108,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40751__auto__;
} else {
return null;
}
} else {
var G__48124 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__48124) : reply_fn.call(null,G__48124));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",556,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,2062267788);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init5041265418616416588.clj",567,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-379574629);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",576,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,458036198);
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
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48160){
var state_val_48161 = (state_48160[(1)]);
if((state_val_48161 === (7))){
var inst_48156 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
var statearr_48162_48414 = state_48160__$1;
(statearr_48162_48414[(2)] = inst_48156);

(statearr_48162_48414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (1))){
var inst_48125 = udt_open;
var state_48160__$1 = (function (){var statearr_48163 = state_48160;
(statearr_48163[(7)] = inst_48125);

return statearr_48163;
})();
var statearr_48164_48415 = state_48160__$1;
(statearr_48164_48415[(2)] = null);

(statearr_48164_48415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (4))){
var inst_48134 = (state_48160[(8)]);
var inst_48129 = (state_48160[(2)]);
var inst_48130 = cljs.core.deref(conns_);
var inst_48131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48132 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_48133 = (new cljs.core.PersistentVector(null,3,(5),inst_48131,inst_48132,null));
var inst_48134__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48130,inst_48133);
var state_48160__$1 = (function (){var statearr_48165 = state_48160;
(statearr_48165[(8)] = inst_48134__$1);

(statearr_48165[(9)] = inst_48129);

return statearr_48165;
})();
if(cljs.core.truth_(inst_48134__$1)){
var statearr_48166_48416 = state_48160__$1;
(statearr_48166_48416[(1)] = (5));

} else {
var statearr_48167_48417 = state_48160__$1;
(statearr_48167_48417[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (13))){
var inst_48140 = (state_48160[(10)]);
var inst_48149 = (state_48160[(2)]);
var inst_48125 = inst_48140;
var state_48160__$1 = (function (){var statearr_48168 = state_48160;
(statearr_48168[(7)] = inst_48125);

(statearr_48168[(11)] = inst_48149);

return statearr_48168;
})();
var statearr_48169_48418 = state_48160__$1;
(statearr_48169_48418[(2)] = null);

(statearr_48169_48418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (6))){
var state_48160__$1 = state_48160;
var statearr_48170_48419 = state_48160__$1;
(statearr_48170_48419[(2)] = null);

(statearr_48170_48419[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (3))){
var inst_48158 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48160__$1,inst_48158);
} else {
if((state_val_48161 === (12))){
var state_48160__$1 = state_48160;
var statearr_48171_48420 = state_48160__$1;
(statearr_48171_48420[(2)] = null);

(statearr_48171_48420[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (2))){
var inst_48127 = cljs.core.async.timeout(ms);
var state_48160__$1 = state_48160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48160__$1,(4),inst_48127);
} else {
if((state_val_48161 === (11))){
var inst_48145 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_48146 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_48145);
var state_48160__$1 = state_48160;
var statearr_48172_48421 = state_48160__$1;
(statearr_48172_48421[(2)] = inst_48146);

(statearr_48172_48421[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (9))){
var state_48160__$1 = state_48160;
var statearr_48173_48422 = state_48160__$1;
(statearr_48173_48422[(2)] = null);

(statearr_48173_48422[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (5))){
var inst_48134 = (state_48160[(8)]);
var inst_48139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48134,(0),null);
var inst_48140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48134,(1),null);
var inst_48141 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_48160__$1 = (function (){var statearr_48174 = state_48160;
(statearr_48174[(10)] = inst_48140);

(statearr_48174[(12)] = inst_48139);

return statearr_48174;
})();
if(cljs.core.truth_(inst_48141)){
var statearr_48175_48423 = state_48160__$1;
(statearr_48175_48423[(1)] = (8));

} else {
var statearr_48176_48424 = state_48160__$1;
(statearr_48176_48424[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (10))){
var inst_48153 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
var statearr_48177_48425 = state_48160__$1;
(statearr_48177_48425[(2)] = inst_48153);

(statearr_48177_48425[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48161 === (8))){
var inst_48140 = (state_48160[(10)]);
var inst_48125 = (state_48160[(7)]);
var inst_48143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48140,inst_48125);
var state_48160__$1 = state_48160;
if(inst_48143){
var statearr_48178_48426 = state_48160__$1;
(statearr_48178_48426[(1)] = (11));

} else {
var statearr_48179_48427 = state_48160__$1;
(statearr_48179_48427[(1)] = (12));

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
});})(c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40560__auto__,c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48180 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48180[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48180[(1)] = (1));

return statearr_48180;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48160){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48160);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48181){if((e48181 instanceof Object)){
var ex__40564__auto__ = e48181;
var statearr_48182_48428 = state_48160;
(statearr_48182_48428[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48160);

return cljs.core.cst$kw$recur;
} else {
throw e48181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48429 = state_48160;
state_48160 = G__48429;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48160){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40753__auto__ = (function (){var statearr_48183 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48183[(6)] = c__40751__auto__);

return statearr_48183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40751__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",605,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-371633286);
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
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48209){
var state_val_48210 = (state_48209[(1)]);
if((state_val_48210 === (1))){
var inst_48184 = cljs.core.async.timeout(ms);
var state_48209__$1 = state_48209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48209__$1,(2),inst_48184);
} else {
if((state_val_48210 === (2))){
var inst_48191 = (state_48209[(7)]);
var inst_48186 = (state_48209[(2)]);
var inst_48187 = cljs.core.deref(conns_);
var inst_48188 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48189 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_48190 = (new cljs.core.PersistentVector(null,3,(5),inst_48188,inst_48189,null));
var inst_48191__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48187,inst_48190);
var state_48209__$1 = (function (){var statearr_48211 = state_48209;
(statearr_48211[(8)] = inst_48186);

(statearr_48211[(7)] = inst_48191__$1);

return statearr_48211;
})();
if(cljs.core.truth_(inst_48191__$1)){
var statearr_48212_48430 = state_48209__$1;
(statearr_48212_48430[(1)] = (3));

} else {
var statearr_48213_48431 = state_48209__$1;
(statearr_48213_48431[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48210 === (3))){
var inst_48191 = (state_48209[(7)]);
var inst_48196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48191,(0),null);
var inst_48197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48191,(1),null);
var inst_48198 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48197,udt_open);
var state_48209__$1 = (function (){var statearr_48214 = state_48209;
(statearr_48214[(9)] = inst_48196);

return statearr_48214;
})();
if(inst_48198){
var statearr_48215_48432 = state_48209__$1;
(statearr_48215_48432[(1)] = (6));

} else {
var statearr_48216_48433 = state_48209__$1;
(statearr_48216_48433[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48210 === (4))){
var state_48209__$1 = state_48209;
var statearr_48217_48434 = state_48209__$1;
(statearr_48217_48434[(2)] = null);

(statearr_48217_48434[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48210 === (5))){
var inst_48207 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48209__$1,inst_48207);
} else {
if((state_val_48210 === (6))){
var inst_48200 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_48201 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_48200);
var state_48209__$1 = state_48209;
var statearr_48218_48435 = state_48209__$1;
(statearr_48218_48435[(2)] = inst_48201);

(statearr_48218_48435[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48210 === (7))){
var state_48209__$1 = state_48209;
var statearr_48219_48436 = state_48209__$1;
(statearr_48219_48436[(2)] = null);

(statearr_48219_48436[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48210 === (8))){
var inst_48204 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48220_48437 = state_48209__$1;
(statearr_48220_48437[(2)] = inst_48204);

(statearr_48220_48437[(1)] = (5));


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
});})(c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40560__auto__,c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48221 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48221[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48221[(1)] = (1));

return statearr_48221;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48209){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48209);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48222){if((e48222 instanceof Object)){
var ex__40564__auto__ = e48222;
var statearr_48223_48438 = state_48209;
(statearr_48223_48438[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48209);

return cljs.core.cst$kw$recur;
} else {
throw e48222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48439 = state_48209;
state_48209 = G__48439;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48209){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40753__auto__ = (function (){var statearr_48224 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48224[(6)] = c__40751__auto__);

return statearr_48224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40751__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__48225 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__48225,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",635,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48225,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__48225,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-176533594);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__48225,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",644,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1411045358);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48279){
var state_val_48280 = (state_48279[(1)]);
if((state_val_48280 === (7))){
var state_48279__$1 = state_48279;
var statearr_48281_48440 = state_48279__$1;
(statearr_48281_48440[(2)] = null);

(statearr_48281_48440[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (1))){
var inst_48228 = cljs.core.async.timeout((5000));
var state_48279__$1 = state_48279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48279__$1,(2),inst_48228);
} else {
if((state_val_48280 === (4))){
var state_48279__$1 = state_48279;
var statearr_48282_48441 = state_48279__$1;
(statearr_48282_48441[(2)] = null);

(statearr_48282_48441[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (13))){
var state_48279__$1 = state_48279;
var statearr_48283_48442 = state_48279__$1;
(statearr_48283_48442[(2)] = null);

(statearr_48283_48442[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (6))){
var inst_48240 = (state_48279[(7)]);
var inst_48256 = (state_48279[(8)]);
var inst_48239 = (state_48279[(9)]);
var inst_48238 = (state_48279[(10)]);
var inst_48251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48252 = [conn_type,uid,client_id];
var inst_48253 = (new cljs.core.PersistentVector(null,3,(5),inst_48251,inst_48252,null));
var inst_48255 = (function (){var vec__48231 = inst_48238;
var __QMARK_sch = inst_48239;
var udt_t1 = inst_48240;
return ((function (vec__48231,__QMARK_sch,udt_t1,inst_48240,inst_48256,inst_48239,inst_48238,inst_48251,inst_48252,inst_48253,state_val_48280,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__48254){
var vec__48284 = p__48254;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48284,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48284,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__48231,__QMARK_sch,udt_t1,inst_48240,inst_48256,inst_48239,inst_48238,inst_48251,inst_48252,inst_48253,state_val_48280,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48256__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48253,inst_48255);
var state_48279__$1 = (function (){var statearr_48287 = state_48279;
(statearr_48287[(8)] = inst_48256__$1);

return statearr_48287;
})();
if(cljs.core.truth_(inst_48256__$1)){
var statearr_48288_48443 = state_48279__$1;
(statearr_48288_48443[(1)] = (9));

} else {
var statearr_48289_48444 = state_48279__$1;
(statearr_48289_48444[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (3))){
var inst_48240 = (state_48279[(7)]);
var inst_48239 = (state_48279[(9)]);
var inst_48238 = (state_48279[(10)]);
var inst_48243 = (function (){var vec__48231 = inst_48238;
var __QMARK_sch = inst_48239;
var udt_t1 = inst_48240;
return ((function (vec__48231,__QMARK_sch,udt_t1,inst_48240,inst_48239,inst_48238,state_val_48280,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__48231,__QMARK_sch,udt_t1,inst_48240,inst_48239,inst_48238,state_val_48280,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48244 = (new cljs.core.Delay(inst_48243,null));
var inst_48245 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init5041265418616416588.clj",658,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_48244,null,-912018927);
var state_48279__$1 = state_48279;
var statearr_48290_48445 = state_48279__$1;
(statearr_48290_48445[(2)] = inst_48245);

(statearr_48290_48445[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (12))){
var inst_48265 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48266 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_48267 = (new cljs.core.PersistentVector(null,2,(5),inst_48265,inst_48266,null));
var inst_48268 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_48267);
var state_48279__$1 = state_48279;
var statearr_48291_48446 = state_48279__$1;
(statearr_48291_48446[(2)] = inst_48268);

(statearr_48291_48446[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (2))){
var inst_48238 = (state_48279[(10)]);
var inst_48230 = (state_48279[(2)]);
var inst_48234 = cljs.core.deref(conns_);
var inst_48235 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48236 = [conn_type,uid,client_id];
var inst_48237 = (new cljs.core.PersistentVector(null,3,(5),inst_48235,inst_48236,null));
var inst_48238__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48234,inst_48237);
var inst_48239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48238__$1,(0),null);
var inst_48240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48238__$1,(1),null);
var inst_48241 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_48279__$1 = (function (){var statearr_48292 = state_48279;
(statearr_48292[(11)] = inst_48230);

(statearr_48292[(7)] = inst_48240);

(statearr_48292[(9)] = inst_48239);

(statearr_48292[(10)] = inst_48238__$1);

return statearr_48292;
})();
if(cljs.core.truth_(inst_48241)){
var statearr_48293_48447 = state_48279__$1;
(statearr_48293_48447[(1)] = (3));

} else {
var statearr_48294_48448 = state_48279__$1;
(statearr_48294_48448[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (11))){
var inst_48274 = (state_48279[(2)]);
var state_48279__$1 = state_48279;
var statearr_48295_48449 = state_48279__$1;
(statearr_48295_48449[(2)] = inst_48274);

(statearr_48295_48449[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (9))){
var inst_48240 = (state_48279[(7)]);
var inst_48256 = (state_48279[(8)]);
var inst_48239 = (state_48279[(9)]);
var inst_48238 = (state_48279[(10)]);
var inst_48258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48259 = [conn_type,uid];
var inst_48260 = (new cljs.core.PersistentVector(null,2,(5),inst_48258,inst_48259,null));
var inst_48261 = (function (){var vec__48231 = inst_48238;
var __QMARK_sch = inst_48239;
var udt_t1 = inst_48240;
var disconnect_QMARK_ = inst_48256;
return ((function (vec__48231,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48240,inst_48256,inst_48239,inst_48238,inst_48258,inst_48259,inst_48260,state_val_48280,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__48231,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48240,inst_48256,inst_48239,inst_48238,inst_48258,inst_48259,inst_48260,state_val_48280,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48262 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48260,inst_48261);
var inst_48263 = upd_connected_uid_BANG_(uid);
var state_48279__$1 = (function (){var statearr_48296 = state_48279;
(statearr_48296[(12)] = inst_48262);

return statearr_48296;
})();
if(cljs.core.truth_(inst_48263)){
var statearr_48297_48450 = state_48279__$1;
(statearr_48297_48450[(1)] = (12));

} else {
var statearr_48298_48451 = state_48279__$1;
(statearr_48298_48451[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (5))){
var inst_48240 = (state_48279[(7)]);
var inst_48248 = (state_48279[(2)]);
var inst_48249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48240,udt_close);
var state_48279__$1 = (function (){var statearr_48299 = state_48279;
(statearr_48299[(13)] = inst_48248);

return statearr_48299;
})();
if(inst_48249){
var statearr_48300_48452 = state_48279__$1;
(statearr_48300_48452[(1)] = (6));

} else {
var statearr_48301_48453 = state_48279__$1;
(statearr_48301_48453[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (14))){
var inst_48271 = (state_48279[(2)]);
var state_48279__$1 = state_48279;
var statearr_48302_48454 = state_48279__$1;
(statearr_48302_48454[(2)] = inst_48271);

(statearr_48302_48454[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (10))){
var state_48279__$1 = state_48279;
var statearr_48303_48455 = state_48279__$1;
(statearr_48303_48455[(2)] = null);

(statearr_48303_48455[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48280 === (8))){
var inst_48277 = (state_48279[(2)]);
var state_48279__$1 = state_48279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48279__$1,inst_48277);
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
});})(c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40560__auto__,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48304[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48304[(1)] = (1));

return statearr_48304;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48279){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48279);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48305){if((e48305 instanceof Object)){
var ex__40564__auto__ = e48305;
var statearr_48306_48456 = state_48279;
(statearr_48306_48456[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48279);

return cljs.core.cst$kw$recur;
} else {
throw e48305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48457 = state_48279;
state_48279 = G__48457;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48279){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40753__auto__ = (function (){var statearr_48307 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48307[(6)] = c__40751__auto__);

return statearr_48307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40751__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init5041265418616416588.clj",680,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-801380016);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48000,map__48003,map__48003__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq47997){
var G__47998 = cljs.core.first(seq47997);
var seq47997__$1 = cljs.core.next(seq47997);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47998,seq47997__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",686,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-480615407);

var seq__48458 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__48459 = null;
var count__48460 = (0);
var i__48461 = (0);
while(true){
if((i__48461 < count__48460)){
var vec__48480 = chunk__48459.cljs$core$IIndexed$_nth$arity$2(null,i__48461);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(0),null);
var vec__48483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48483,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48483,(1),null);
var temp__5720__auto___48498 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___48498)){
var sch_48499 = temp__5720__auto___48498;
var G__48486_48500 = cljs.core.cst$kw$ws;
var G__48487_48501 = uid;
var G__48488_48502 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__48486_48500,G__48487_48501,G__48488_48502) : upd_conn_BANG_.call(null,G__48486_48500,G__48487_48501,G__48488_48502));

taoensso.sente.interfaces.sch_send_BANG_(sch_48499,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__48503 = seq__48458;
var G__48504 = chunk__48459;
var G__48505 = count__48460;
var G__48506 = (i__48461 + (1));
seq__48458 = G__48503;
chunk__48459 = G__48504;
count__48460 = G__48505;
i__48461 = G__48506;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48458);
if(temp__5720__auto__){
var seq__48458__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48458__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48458__$1);
var G__48507 = cljs.core.chunk_rest(seq__48458__$1);
var G__48508 = c__4550__auto__;
var G__48509 = cljs.core.count(c__4550__auto__);
var G__48510 = (0);
seq__48458 = G__48507;
chunk__48459 = G__48508;
count__48460 = G__48509;
i__48461 = G__48510;
continue;
} else {
var vec__48489 = cljs.core.first(seq__48458__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(0),null);
var vec__48492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48492,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48492,(1),null);
var temp__5720__auto___48511__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___48511__$1)){
var sch_48512 = temp__5720__auto___48511__$1;
var G__48495_48513 = cljs.core.cst$kw$ws;
var G__48496_48514 = uid;
var G__48497_48515 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__48495_48513,G__48496_48514,G__48497_48515) : upd_conn_BANG_.call(null,G__48495_48513,G__48496_48514,G__48497_48515));

taoensso.sente.interfaces.sch_send_BANG_(sch_48512,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__48516 = cljs.core.next(seq__48458__$1);
var G__48517 = null;
var G__48518 = (0);
var G__48519 = (0);
seq__48458 = G__48516;
chunk__48459 = G__48517;
count__48460 = G__48518;
i__48461 = G__48519;
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",696,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1627611655);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__40751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_48566){
var state_val_48567 = (state_48566[(1)]);
if((state_val_48567 === (7))){
var inst_48521 = (state_48566[(7)]);
var inst_48528 = (state_48566[(8)]);
var inst_48522 = (state_48566[(9)]);
var inst_48538 = (function (){var n = inst_48521;
var client_ids_satisfied = inst_48522;
var _QMARK_pulled = inst_48528;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48521,inst_48528,inst_48522,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__48537){
var vec__48568 = p__48537;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48568,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48568,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48521,inst_48528,inst_48522,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48539 = cljs.core.PersistentHashSet.EMPTY;
var inst_48540 = cljs.core.reduce_kv(inst_48538,inst_48539,inst_48528);
var state_48566__$1 = state_48566;
var statearr_48571_48603 = state_48566__$1;
(statearr_48571_48603[(2)] = inst_48540);

(statearr_48571_48603[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (1))){
var inst_48520 = cljs.core.PersistentHashSet.EMPTY;
var inst_48521 = (0);
var inst_48522 = inst_48520;
var state_48566__$1 = (function (){var statearr_48572 = state_48566;
(statearr_48572[(7)] = inst_48521);

(statearr_48572[(9)] = inst_48522);

return statearr_48572;
})();
var statearr_48573_48604 = state_48566__$1;
(statearr_48573_48604[(2)] = null);

(statearr_48573_48604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (4))){
var state_48566__$1 = state_48566;
var statearr_48574_48605 = state_48566__$1;
(statearr_48574_48605[(2)] = true);

(statearr_48574_48605[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (15))){
var inst_48559 = (state_48566[(2)]);
var state_48566__$1 = state_48566;
var statearr_48575_48606 = state_48566__$1;
(statearr_48575_48606[(2)] = inst_48559);

(statearr_48575_48606[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (13))){
var inst_48545 = (state_48566[(10)]);
var inst_48550 = cljs.core.rand_int(inst_48545);
var inst_48551 = (inst_48545 + inst_48550);
var inst_48552 = cljs.core.async.timeout(inst_48551);
var state_48566__$1 = state_48566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48566__$1,(16),inst_48552);
} else {
if((state_val_48567 === (6))){
var inst_48528 = (state_48566[(8)]);
var inst_48535 = (state_48566[(2)]);
var state_48566__$1 = (function (){var statearr_48576 = state_48566;
(statearr_48576[(11)] = inst_48535);

return statearr_48576;
})();
if(cljs.core.truth_(inst_48528)){
var statearr_48577_48607 = state_48566__$1;
(statearr_48577_48607[(1)] = (7));

} else {
var statearr_48578_48608 = state_48566__$1;
(statearr_48578_48608[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (3))){
var inst_48564 = (state_48566[(2)]);
var state_48566__$1 = state_48566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48566__$1,inst_48564);
} else {
if((state_val_48567 === (12))){
var inst_48562 = (state_48566[(2)]);
var state_48566__$1 = state_48566;
var statearr_48579_48609 = state_48566__$1;
(statearr_48579_48609[(2)] = inst_48562);

(statearr_48579_48609[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (2))){
var inst_48521 = (state_48566[(7)]);
var inst_48528 = (state_48566[(8)]);
var inst_48522 = (state_48566[(9)]);
var inst_48524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48525 = [cljs.core.cst$kw$ajax,uid];
var inst_48526 = (new cljs.core.PersistentVector(null,2,(5),inst_48524,inst_48525,null));
var inst_48527 = (function (){var n = inst_48521;
var client_ids_satisfied = inst_48522;
return ((function (n,client_ids_satisfied,inst_48521,inst_48528,inst_48522,inst_48524,inst_48525,inst_48526,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_48521,inst_48528,inst_48522,inst_48524,inst_48525,inst_48526,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__48580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48580,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48580,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_48521,inst_48528,inst_48522,inst_48524,inst_48525,inst_48526,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_48521,inst_48528,inst_48522,inst_48524,inst_48525,inst_48526,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48528__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48526,inst_48527);
var inst_48529 = (function (){var n = inst_48521;
var client_ids_satisfied = inst_48522;
var _QMARK_pulled = inst_48528__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48521,inst_48528,inst_48522,inst_48524,inst_48525,inst_48526,inst_48527,inst_48528__$1,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__48584 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__48584.cljs$core$IFn$_invoke$arity$1 ? fexpr__48584.cljs$core$IFn$_invoke$arity$1(x) : fexpr__48584.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48521,inst_48528,inst_48522,inst_48524,inst_48525,inst_48526,inst_48527,inst_48528__$1,state_val_48567,c__40751__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48530 = (inst_48529.cljs$core$IFn$_invoke$arity$1 ? inst_48529.cljs$core$IFn$_invoke$arity$1(inst_48528__$1) : inst_48529.call(null,inst_48528__$1));
var state_48566__$1 = (function (){var statearr_48585 = state_48566;
(statearr_48585[(8)] = inst_48528__$1);

return statearr_48585;
})();
if(cljs.core.truth_(inst_48530)){
var statearr_48586_48610 = state_48566__$1;
(statearr_48586_48610[(1)] = (4));

} else {
var statearr_48587_48611 = state_48566__$1;
(statearr_48587_48611[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (11))){
var state_48566__$1 = state_48566;
var statearr_48588_48612 = state_48566__$1;
(statearr_48588_48612[(2)] = null);

(statearr_48588_48612[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (9))){
var inst_48521 = (state_48566[(7)]);
var inst_48522 = (state_48566[(9)]);
var inst_48545 = (state_48566[(10)]);
var inst_48543 = (state_48566[(2)]);
var inst_48544 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_48522,inst_48543);
var inst_48545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_48521);
var state_48566__$1 = (function (){var statearr_48589 = state_48566;
(statearr_48589[(10)] = inst_48545__$1);

(statearr_48589[(12)] = inst_48544);

return statearr_48589;
})();
if(cljs.core.truth_(inst_48545__$1)){
var statearr_48590_48613 = state_48566__$1;
(statearr_48590_48613[(1)] = (10));

} else {
var statearr_48591_48614 = state_48566__$1;
(statearr_48591_48614[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (5))){
var inst_48528 = (state_48566[(8)]);
var inst_48533 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",723,"([:or nil? map?] ?pulled)",inst_48528,null,null);
var state_48566__$1 = state_48566;
var statearr_48592_48615 = state_48566__$1;
(statearr_48592_48615[(2)] = inst_48533);

(statearr_48592_48615[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (14))){
var state_48566__$1 = state_48566;
var statearr_48593_48616 = state_48566__$1;
(statearr_48593_48616[(2)] = null);

(statearr_48593_48616[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (16))){
var inst_48521 = (state_48566[(7)]);
var inst_48544 = (state_48566[(12)]);
var inst_48554 = (state_48566[(2)]);
var inst_48555 = (inst_48521 + (1));
var inst_48521__$1 = inst_48555;
var inst_48522 = inst_48544;
var state_48566__$1 = (function (){var statearr_48594 = state_48566;
(statearr_48594[(7)] = inst_48521__$1);

(statearr_48594[(9)] = inst_48522);

(statearr_48594[(13)] = inst_48554);

return statearr_48594;
})();
var statearr_48595_48617 = state_48566__$1;
(statearr_48595_48617[(2)] = null);

(statearr_48595_48617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (10))){
var inst_48544 = (state_48566[(12)]);
var inst_48547 = cljs.core.complement(inst_48544);
var inst_48548 = taoensso.encore.rsome(inst_48547,client_ids_unsatisfied);
var state_48566__$1 = state_48566;
if(cljs.core.truth_(inst_48548)){
var statearr_48596_48618 = state_48566__$1;
(statearr_48596_48618[(1)] = (13));

} else {
var statearr_48597_48619 = state_48566__$1;
(statearr_48597_48619[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48567 === (8))){
var state_48566__$1 = state_48566;
var statearr_48598_48620 = state_48566__$1;
(statearr_48598_48620[(2)] = null);

(statearr_48598_48620[(1)] = (9));


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
});})(c__40751__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__40560__auto__,c__40751__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto____0 = (function (){
var statearr_48599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48599[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto__);

(statearr_48599[(1)] = (1));

return statearr_48599;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto____1 = (function (state_48566){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48566);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48600){if((e48600 instanceof Object)){
var ex__40564__auto__ = e48600;
var statearr_48601_48621 = state_48566;
(statearr_48601_48621[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48566);

return cljs.core.cst$kw$recur;
} else {
throw e48600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48622 = state_48566;
state_48566 = G__48622;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto__ = function(state_48566){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto____1.call(this,state_48566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__40753__auto__ = (function (){var statearr_48602 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48602[(6)] = c__40751__auto__);

return statearr_48602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__40751__auto__;
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
var G__48624 = arguments.length;
switch (G__48624) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",773,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,69828692);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",778,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,2084451888);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__48626_48627 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__48626_48627) : _QMARK_cb_fn.call(null,G__48626_48627));
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
var vec__48628 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48628,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48628,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_48636 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48631){if((e48631 instanceof Error)){
var e = e48631;
return e;
} else {
throw e48631;

}
}})();
if((e_48636 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"(map? state)",state,e_48636,null);
}

var e_48637 = (function (){try{if((function (){var fexpr__48634 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__48635 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48635) : taoensso.truss.impl.set_STAR_.call(null,G__48635));
})(),x);
});
return fexpr__48634(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48632){if((e48632 instanceof Error)){
var e = e48632;
return e;
} else {
throw e48632;

}
}})();
if((e_48637 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",826,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_48637,null);
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
var e_48642 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48638){if((e48638 instanceof Error)){
var e = e48638;
return e;
} else {
throw e48638;

}
}})();
if((e_48642 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",847,"(enc/chan? ?cb)",_QMARK_cb,e_48642,null);
}

taoensso.sente.assert_event(ev);

var vec__48639 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48639,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48639,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__48639,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
;})(vec__48639,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",858,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,943125435);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",859,"(vector? clj)",clj,null,null));
var seq__48643 = cljs.core.seq(buffered_evs);
var chunk__48644 = null;
var count__48645 = (0);
var i__48646 = (0);
while(true){
if((i__48646 < count__48645)){
var ev = chunk__48644.cljs$core$IIndexed$_nth$arity$2(null,i__48646);
taoensso.sente.assert_event(ev);

var vec__48653_48659 = ev;
var id_48660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48653_48659,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_48660),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__48661 = seq__48643;
var G__48662 = chunk__48644;
var G__48663 = count__48645;
var G__48664 = (i__48646 + (1));
seq__48643 = G__48661;
chunk__48644 = G__48662;
count__48645 = G__48663;
i__48646 = G__48664;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48643);
if(temp__5720__auto__){
var seq__48643__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48643__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48643__$1);
var G__48665 = cljs.core.chunk_rest(seq__48643__$1);
var G__48666 = c__4550__auto__;
var G__48667 = cljs.core.count(c__4550__auto__);
var G__48668 = (0);
seq__48643 = G__48665;
chunk__48644 = G__48666;
count__48645 = G__48667;
i__48646 = G__48668;
continue;
} else {
var ev = cljs.core.first(seq__48643__$1);
taoensso.sente.assert_event(ev);

var vec__48656_48669 = ev;
var id_48670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48656_48669,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_48670),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__48671 = cljs.core.next(seq__48643__$1);
var G__48672 = null;
var G__48673 = (0);
var G__48674 = (0);
seq__48643 = G__48671;
chunk__48644 = G__48672;
count__48645 = G__48673;
i__48646 = G__48674;
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
var vec__48678 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48678,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__4120__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_48695 = (function (){try{if((function (){var fexpr__48684 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__48685 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48685) : taoensso.truss.impl.set_STAR_.call(null,G__48685));
})(),x);
});
return fexpr__48684(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48682){if((e48682 instanceof Error)){
var e = e48682;
return e;
} else {
throw e48682;

}
}})();
if((e_48695 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_48695,null);
}

var e_48696 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48686){if((e48686 instanceof Error)){
var e = e48686;
return e;
} else {
throw e48686;

}
}})();
if((e_48696 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",874,"(handshake? clj)",clj,e_48696,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",875,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-907438974);

var vec__48687 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48687,(0),null);
var vec__48690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48687,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48690,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48690,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48690,(2),null);
var map__48693 = chsk;
var map__48693__$1 = (((((!((map__48693 == null))))?(((((map__48693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48693):map__48693);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",894,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48687,_,vec__48690,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48693,map__48693__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__48687,_,vec__48690,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48693,map__48693__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,818057005);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__48687,_,vec__48690,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48693,map__48693__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__48681_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__48681_SHARP_,new_state], 0));
});})(vec__48687,_,vec__48690,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48693,map__48693__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
}catch (e48697){var e = e48697;
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48704,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48708 = k48704;
var G__48708__$1 = (((G__48708 instanceof cljs.core.Keyword))?G__48708.fqn:null);
switch (G__48708__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48704,else__4388__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48709){
var vec__48710 = p__48709;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48710,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48710,(1),null);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48703){
var self__ = this;
var G__48703__$1 = this;
return (new cljs.core.RecordIter((0),G__48703__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48713 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48713(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48705,other48706){
var self__ = this;
var this48705__$1 = this;
return (((!((other48706 == null)))) && ((this48705__$1.constructor === other48706.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.client_id,other48706.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.chs,other48706.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.params,other48706.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.packer,other48706.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.url,other48706.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.ws_kalive_ms,other48706.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.state_,other48706.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.instance_handle_,other48706.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.retry_count_,other48706.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.ever_opened_QMARK__,other48706.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.backoff_ms_fn,other48706.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.cbs_waiting_,other48706.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.socket_,other48706.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.udt_last_comms_,other48706.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48705__$1.__extmap,other48706.__extmap)));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48703){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48714 = cljs.core.keyword_identical_QMARK_;
var expr__48715 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48717 = cljs.core.cst$kw$client_DASH_id;
var G__48718 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48717,G__48718) : pred__48714.call(null,G__48717,G__48718));
})())){
return (new taoensso.sente.ChWebSocket(G__48703,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48719 = cljs.core.cst$kw$chs;
var G__48720 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48719,G__48720) : pred__48714.call(null,G__48719,G__48720));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__48703,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48721 = cljs.core.cst$kw$params;
var G__48722 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48721,G__48722) : pred__48714.call(null,G__48721,G__48722));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__48703,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48723 = cljs.core.cst$kw$packer;
var G__48724 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48723,G__48724) : pred__48714.call(null,G__48723,G__48724));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__48703,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48725 = cljs.core.cst$kw$url;
var G__48726 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48725,G__48726) : pred__48714.call(null,G__48725,G__48726));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48703,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48727 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__48728 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48727,G__48728) : pred__48714.call(null,G__48727,G__48728));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48703,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48729 = cljs.core.cst$kw$state_;
var G__48730 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48729,G__48730) : pred__48714.call(null,G__48729,G__48730));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__48703,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48731 = cljs.core.cst$kw$instance_DASH_handle_;
var G__48732 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48731,G__48732) : pred__48714.call(null,G__48731,G__48732));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__48703,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48733 = cljs.core.cst$kw$retry_DASH_count_;
var G__48734 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48733,G__48734) : pred__48714.call(null,G__48733,G__48734));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__48703,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48735 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__48736 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48735,G__48736) : pred__48714.call(null,G__48735,G__48736));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__48703,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48737 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__48738 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48737,G__48738) : pred__48714.call(null,G__48737,G__48738));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__48703,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48739 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__48740 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48739,G__48740) : pred__48714.call(null,G__48739,G__48740));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48703,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48741 = cljs.core.cst$kw$socket_;
var G__48742 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48741,G__48742) : pred__48714.call(null,G__48741,G__48742));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__48703,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48743 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__48744 = expr__48715;
return (pred__48714.cljs$core$IFn$_invoke$arity$2 ? pred__48714.cljs$core$IFn$_invoke$arity$2(G__48743,G__48744) : pred__48714.call(null,G__48743,G__48744));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__48703,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48703),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48703){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__48703,self__.__extmap,self__.__hash));
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
return (function (p1__48698_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48698_SHARP_,reason);
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
var map__48745 = opts;
var map__48745__$1 = (((((!((map__48745 == null))))?(((((map__48745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48745):map__48745);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5720__auto___48827 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___48827)){
var cb_uuid_48828 = temp__5720__auto___48827;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_48828], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48747){if((e48747 instanceof Error)){
var e = e48747;
return e;
} else {
throw e48747;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",964,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5720__auto___48829__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5720__auto___48829__$1)){
var timeout_ms_48830 = temp__5720__auto___48829__$1;
var c__40751__auto___48831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___48831,timeout_ms_48830,temp__5720__auto___48829__$1,cb_uuid_48828,temp__5720__auto___48827,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___48831,timeout_ms_48830,temp__5720__auto___48829__$1,cb_uuid_48828,temp__5720__auto___48827,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_48758){
var state_val_48759 = (state_48758[(1)]);
if((state_val_48759 === (1))){
var inst_48748 = cljs.core.async.timeout(timeout_ms_48830);
var state_48758__$1 = state_48758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48758__$1,(2),inst_48748);
} else {
if((state_val_48759 === (2))){
var inst_48751 = (state_48758[(7)]);
var inst_48750 = (state_48758[(2)]);
var inst_48751__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_48758__$1 = (function (){var statearr_48760 = state_48758;
(statearr_48760[(8)] = inst_48750);

(statearr_48760[(7)] = inst_48751__$1);

return statearr_48760;
})();
if(cljs.core.truth_(inst_48751__$1)){
var statearr_48761_48832 = state_48758__$1;
(statearr_48761_48832[(1)] = (3));

} else {
var statearr_48762_48833 = state_48758__$1;
(statearr_48762_48833[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48759 === (3))){
var inst_48751 = (state_48758[(7)]);
var inst_48753 = (function (){var G__48763 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_48751.cljs$core$IFn$_invoke$arity$1 ? inst_48751.cljs$core$IFn$_invoke$arity$1(G__48763) : inst_48751.call(null,G__48763));
})();
var state_48758__$1 = state_48758;
var statearr_48764_48834 = state_48758__$1;
(statearr_48764_48834[(2)] = inst_48753);

(statearr_48764_48834[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48759 === (4))){
var state_48758__$1 = state_48758;
var statearr_48765_48835 = state_48758__$1;
(statearr_48765_48835[(2)] = null);

(statearr_48765_48835[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48759 === (5))){
var inst_48756 = (state_48758[(2)]);
var state_48758__$1 = state_48758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48758__$1,inst_48756);
} else {
return null;
}
}
}
}
}
});})(c__40751__auto___48831,timeout_ms_48830,temp__5720__auto___48829__$1,cb_uuid_48828,temp__5720__auto___48827,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__40560__auto__,c__40751__auto___48831,timeout_ms_48830,temp__5720__auto___48829__$1,cb_uuid_48828,temp__5720__auto___48827,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48766 = [null,null,null,null,null,null,null,null,null];
(statearr_48766[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48766[(1)] = (1));

return statearr_48766;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48758){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48758);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48767){if((e48767 instanceof Object)){
var ex__40564__auto__ = e48767;
var statearr_48768_48836 = state_48758;
(statearr_48768_48836[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48758);

return cljs.core.cst$kw$recur;
} else {
throw e48767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48837 = state_48758;
state_48758 = G__48837;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48758){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___48831,timeout_ms_48830,temp__5720__auto___48829__$1,cb_uuid_48828,temp__5720__auto___48827,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__40753__auto__ = (function (){var statearr_48769 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48769[(6)] = c__40751__auto___48831);

return statearr_48769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___48831,timeout_ms_48830,temp__5720__auto___48829__$1,cb_uuid_48828,temp__5720__auto___48827,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e48770){var e = e48770;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init5041265418616416588.clj",976,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__48745,map__48745__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,291691033);

var temp__5720__auto___48838 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___48838)){
var cb_uuid_48839 = temp__5720__auto___48838;
var cb_fn_STAR__48840 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_48839);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48771){if((e48771 instanceof Error)){
var e__$1 = e48771;
return e__$1;
} else {
throw e48771;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",979,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__48772_48841 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__48840.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__48840.cljs$core$IFn$_invoke$arity$1(G__48772_48841) : cb_fn_STAR__48840.call(null,G__48772_48841));
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1001,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-698978686);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48699_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48699_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e48773){var e = e48773;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1015,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-869020200);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__48774 = _QMARK_socket;
(G__48774["onerror"] = ((function (G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1025,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e48775){var _ = e48775;
return ws_ev;
}})()], null);
});})(G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1045727912);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48700_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48700_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
});})(G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__48774["onmessage"] = ((function (G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__48776 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48776,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48776,(1),null);
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
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1061,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__48776,clj,_QMARK_cb_uuid,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__48776,clj,_QMARK_cb_uuid,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,1833767962);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__48774["onclose"] = ((function (G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1083,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-780774722);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48701_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48701_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48702_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__48702_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__48774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return G__48774;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var temp__5720__auto___48842__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5720__auto___48842__$1)){
var ms_48843 = temp__5720__auto___48842__$1;
var c__40751__auto___48844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___48844,ms_48843,temp__5720__auto___48842__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___48844,ms_48843,temp__5720__auto___48842__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (state_48806){
var state_val_48807 = (state_48806[(1)]);
if((state_val_48807 === (7))){
var inst_48802 = (state_48806[(2)]);
var state_48806__$1 = state_48806;
var statearr_48808_48845 = state_48806__$1;
(statearr_48808_48845[(2)] = inst_48802);

(statearr_48808_48845[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48807 === (1))){
var state_48806__$1 = state_48806;
var statearr_48809_48846 = state_48806__$1;
(statearr_48809_48846[(2)] = null);

(statearr_48809_48846[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48807 === (4))){
var inst_48783 = (state_48806[(2)]);
var inst_48784 = have_handle_QMARK_();
var state_48806__$1 = (function (){var statearr_48810 = state_48806;
(statearr_48810[(7)] = inst_48783);

return statearr_48810;
})();
if(inst_48784){
var statearr_48811_48847 = state_48806__$1;
(statearr_48811_48847[(1)] = (5));

} else {
var statearr_48812_48848 = state_48806__$1;
(statearr_48812_48848[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48807 === (6))){
var state_48806__$1 = state_48806;
var statearr_48813_48849 = state_48806__$1;
(statearr_48813_48849[(2)] = null);

(statearr_48813_48849[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48807 === (3))){
var inst_48804 = (state_48806[(2)]);
var state_48806__$1 = state_48806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48806__$1,inst_48804);
} else {
if((state_val_48807 === (2))){
var inst_48780 = cljs.core.deref(self__.udt_last_comms_);
var inst_48781 = cljs.core.async.timeout(ms_48843);
var state_48806__$1 = (function (){var statearr_48814 = state_48806;
(statearr_48814[(8)] = inst_48780);

return statearr_48814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48806__$1,(4),inst_48781);
} else {
if((state_val_48807 === (9))){
var state_48806__$1 = state_48806;
var statearr_48815_48850 = state_48806__$1;
(statearr_48815_48850[(2)] = null);

(statearr_48815_48850[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48807 === (5))){
var inst_48780 = (state_48806[(8)]);
var inst_48786 = cljs.core.deref(self__.udt_last_comms_);
var inst_48787 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48780,inst_48786);
var state_48806__$1 = state_48806;
if(inst_48787){
var statearr_48816_48851 = state_48806__$1;
(statearr_48816_48851[(1)] = (8));

} else {
var statearr_48817_48852 = state_48806__$1;
(statearr_48817_48852[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48807 === (10))){
var inst_48798 = (state_48806[(2)]);
var state_48806__$1 = (function (){var statearr_48818 = state_48806;
(statearr_48818[(9)] = inst_48798);

return statearr_48818;
})();
var statearr_48819_48853 = state_48806__$1;
(statearr_48819_48853[(2)] = null);

(statearr_48819_48853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48807 === (8))){
var inst_48789 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48790 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_48791 = (new cljs.core.PersistentVector(null,1,(5),inst_48789,inst_48790,null));
var inst_48792 = [cljs.core.cst$kw$flush_QMARK_];
var inst_48793 = [true];
var inst_48794 = cljs.core.PersistentHashMap.fromArrays(inst_48792,inst_48793);
var inst_48795 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_48791,inst_48794);
var state_48806__$1 = state_48806;
var statearr_48820_48854 = state_48806__$1;
(statearr_48820_48854[(2)] = inst_48795);

(statearr_48820_48854[(1)] = (10));


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
});})(c__40751__auto___48844,ms_48843,temp__5720__auto___48842__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
;
return ((function (switch__40560__auto__,c__40751__auto___48844,ms_48843,temp__5720__auto___48842__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40561__auto__ = null;
var taoensso$sente$state_machine__40561__auto____0 = (function (){
var statearr_48821 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48821[(0)] = taoensso$sente$state_machine__40561__auto__);

(statearr_48821[(1)] = (1));

return statearr_48821;
});
var taoensso$sente$state_machine__40561__auto____1 = (function (state_48806){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_48806);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e48822){if((e48822 instanceof Object)){
var ex__40564__auto__ = e48822;
var statearr_48823_48855 = state_48806;
(statearr_48823_48855[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48806);

return cljs.core.cst$kw$recur;
} else {
throw e48822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__48856 = state_48806;
state_48806 = G__48856;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$state_machine__40561__auto__ = function(state_48806){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40561__auto____1.call(this,state_48806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40561__auto____0;
taoensso$sente$state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40561__auto____1;
return taoensso$sente$state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___48844,ms_48843,temp__5720__auto___48842__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
})();
var state__40753__auto__ = (function (){var statearr_48824 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_48824[(6)] = c__40751__auto___48844);

return statearr_48824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___48844,ms_48843,temp__5720__auto___48842__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
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
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__48707){
var extmap__4424__auto__ = (function (){var G__48825 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48707,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0));
if(cljs.core.record_QMARK_(G__48707)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48825);
} else {
return G__48825;
}
})();
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__48707),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__48707),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48864,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48868 = k48864;
var G__48868__$1 = (((G__48868 instanceof cljs.core.Keyword))?G__48868.fqn:null);
switch (G__48868__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48864,else__4388__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48869){
var vec__48870 = p__48869;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48870,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48870,(1),null);
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48863){
var self__ = this;
var G__48863__$1 = this;
return (new cljs.core.RecordIter((0),G__48863__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48873 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48873(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48865,other48866){
var self__ = this;
var this48865__$1 = this;
return (((!((other48866 == null)))) && ((this48865__$1.constructor === other48866.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.client_id,other48866.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.chs,other48866.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.params,other48866.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.packer,other48866.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.url,other48866.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.state_,other48866.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.instance_handle_,other48866.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.ever_opened_QMARK__,other48866.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.backoff_ms_fn,other48866.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.ajax_opts,other48866.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.curr_xhr_,other48866.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48865__$1.__extmap,other48866.__extmap)));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48863){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48874 = cljs.core.keyword_identical_QMARK_;
var expr__48875 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48877 = cljs.core.cst$kw$client_DASH_id;
var G__48878 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48877,G__48878) : pred__48874.call(null,G__48877,G__48878));
})())){
return (new taoensso.sente.ChAjaxSocket(G__48863,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48879 = cljs.core.cst$kw$chs;
var G__48880 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48879,G__48880) : pred__48874.call(null,G__48879,G__48880));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__48863,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48881 = cljs.core.cst$kw$params;
var G__48882 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48881,G__48882) : pred__48874.call(null,G__48881,G__48882));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__48863,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48883 = cljs.core.cst$kw$packer;
var G__48884 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48883,G__48884) : pred__48874.call(null,G__48883,G__48884));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__48863,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48885 = cljs.core.cst$kw$url;
var G__48886 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48885,G__48886) : pred__48874.call(null,G__48885,G__48886));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48863,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48887 = cljs.core.cst$kw$state_;
var G__48888 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48887,G__48888) : pred__48874.call(null,G__48887,G__48888));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48863,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48889 = cljs.core.cst$kw$instance_DASH_handle_;
var G__48890 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48889,G__48890) : pred__48874.call(null,G__48889,G__48890));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__48863,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48891 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__48892 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48891,G__48892) : pred__48874.call(null,G__48891,G__48892));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__48863,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48893 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__48894 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48893,G__48894) : pred__48874.call(null,G__48893,G__48894));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__48863,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48895 = cljs.core.cst$kw$ajax_DASH_opts;
var G__48896 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48895,G__48896) : pred__48874.call(null,G__48895,G__48896));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48863,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48897 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__48898 = expr__48875;
return (pred__48874.cljs$core$IFn$_invoke$arity$2 ? pred__48874.cljs$core$IFn$_invoke$arity$2(G__48897,G__48898) : pred__48874.call(null,G__48897,G__48898));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__48863,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48863),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48863){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__48863,self__.__extmap,self__.__hash));
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
return (function (p1__48857_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48857_SHARP_,reason);
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
var map__48899 = opts;
var map__48899__$1 = (((((!((map__48899 == null))))?(((((map__48899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48899):map__48899);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__48901_48923 = self__.url;
var G__48902_48924 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = _QMARK_timeout_ms;
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
var G__48903_48925 = ((function (G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__48904){
var map__48905 = p__48904;
var map__48905__$1 = (((((!((map__48905 == null))))?(((((map__48905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48905):map__48905);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__48907 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__48907) : _QMARK_cb_fn.call(null,G__48907));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__48905,map__48905__$1,_QMARK_error,_QMARK_content,G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48858_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48858_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__48905,map__48905__$1,_QMARK_error,_QMARK_content,G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__48908 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__48908) : _QMARK_cb_fn.call(null,G__48908));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__48909 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48909,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48909,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1203,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__48909,resp_clj,___$1,map__48905,map__48905__$1,_QMARK_error,_QMARK_content,G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__48909,resp_clj,___$1,map__48905,map__48905__$1,_QMARK_error,_QMARK_content,G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,692783516);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__48909,resp_clj,___$1,map__48905,map__48905__$1,_QMARK_error,_QMARK_content,G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48859_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48859_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__48909,resp_clj,___$1,map__48905,map__48905__$1,_QMARK_error,_QMARK_content,G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__48901_48923,G__48902_48924,csrf_token,map__48899,map__48899__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__48901_48923,G__48902_48924,G__48903_48925) : taoensso.sente.ajax_lite.call(null,G__48901_48923,G__48902_48924,G__48903_48925));

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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1213,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,55120004);

if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,802962324);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48860_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48860_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__48912 = self__.url;
var G__48913 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__48914 = ((function (G__48912,G__48913,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__48915){
var map__48916 = p__48915;
var map__48916__$1 = (((((!((map__48916 == null))))?(((((map__48916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48916):map__48916);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__48916,map__48916__$1,_QMARK_error,_QMARK_content,G__48912,G__48913,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48861_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48861_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__48916,map__48916__$1,_QMARK_error,_QMARK_content,G__48912,G__48913,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__48918 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__48918,clj,handshake_QMARK_,map__48916,map__48916__$1,_QMARK_error,_QMARK_content,G__48912,G__48913,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48862_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48862_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__48918,clj,handshake_QMARK_,map__48916,map__48916__$1,_QMARK_error,_QMARK_content,G__48912,G__48913,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
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
});})(G__48912,G__48913,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__48912,G__48913,G__48914) : taoensso.sente.ajax_lite.call(null,G__48912,G__48913,G__48914));
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
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__48867){
var extmap__4424__auto__ = (function (){var G__48921 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48867,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0));
if(cljs.core.record_QMARK_(G__48867)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48921);
} else {
return G__48921;
}
})();
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__48867),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__48867),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48927,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48931 = k48927;
var G__48931__$1 = (((G__48931 instanceof cljs.core.Keyword))?G__48931.fqn:null);
switch (G__48931__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48927,else__4388__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48932){
var vec__48933 = p__48932;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48933,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48933,(1),null);
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48926){
var self__ = this;
var G__48926__$1 = this;
return (new cljs.core.RecordIter((0),G__48926__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48936 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48936(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48928,other48929){
var self__ = this;
var this48928__$1 = this;
return (((!((other48929 == null)))) && ((this48928__$1.constructor === other48929.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48928__$1.ws_chsk_opts,other48929.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48928__$1.ajax_chsk_opts,other48929.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48928__$1.state_,other48929.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48928__$1.impl_,other48929.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48928__$1.__extmap,other48929.__extmap)));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48926){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48937 = cljs.core.keyword_identical_QMARK_;
var expr__48938 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48940 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__48941 = expr__48938;
return (pred__48937.cljs$core$IFn$_invoke$arity$2 ? pred__48937.cljs$core$IFn$_invoke$arity$2(G__48940,G__48941) : pred__48937.call(null,G__48940,G__48941));
})())){
return (new taoensso.sente.ChAutoSocket(G__48926,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48942 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__48943 = expr__48938;
return (pred__48937.cljs$core$IFn$_invoke$arity$2 ? pred__48937.cljs$core$IFn$_invoke$arity$2(G__48942,G__48943) : pred__48937.call(null,G__48942,G__48943));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__48926,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48944 = cljs.core.cst$kw$state_;
var G__48945 = expr__48938;
return (pred__48937.cljs$core$IFn$_invoke$arity$2 ? pred__48937.cljs$core$IFn$_invoke$arity$2(G__48944,G__48945) : pred__48937.call(null,G__48944,G__48945));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__48926,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48946 = cljs.core.cst$kw$impl_;
var G__48947 = expr__48938;
return (pred__48937.cljs$core$IFn$_invoke$arity$2 ? pred__48937.cljs$core$IFn$_invoke$arity$2(G__48946,G__48947) : pred__48937.call(null,G__48946,G__48947));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__48926,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48926),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48926){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__48926,self__.__extmap,self__.__hash));
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
var map__48948 = opts;
var map__48948__$1 = (((((!((map__48948 == null))))?(((((map__48948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48948):map__48948);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48948__$1,cljs.core.cst$kw$cb);
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
var downgraded_QMARK___48952 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___48952,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___48952,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1349,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___48952,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___48952,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,2055911315);

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
});})(downgraded_QMARK___48952,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
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
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__48930){
var extmap__4424__auto__ = (function (){var G__48950 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48930,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0));
if(cljs.core.record_QMARK_(G__48930)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48950);
} else {
return G__48950;
}
})();
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__48930),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__48930),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__48930),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__48930),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$impl_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__48953 = protocol;
var G__48953__$1 = (((G__48953 instanceof cljs.core.Keyword))?G__48953.fqn:null);
switch (G__48953__$1) {
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
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__48956 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__48957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48957) : taoensso.truss.impl.set_STAR_.call(null,G__48957));
})(),x);
});})(protocol__$1))
;
return fexpr__48956(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48954){if((e48954 instanceof Error)){
var e = e48954;
return e;
} else {
throw e48954;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1369,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__48958 = type;
var G__48958__$1 = (((G__48958 instanceof cljs.core.Keyword))?G__48958.fqn:null);
switch (G__48958__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__48959 = protocol__$2;
switch (G__48959) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48959)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48958__$1)].join('')));

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
var len__4730__auto___48989 = arguments.length;
var i__4731__auto___48990 = (0);
while(true){
if((i__4731__auto___48990 < len__4730__auto___48989)){
args__4736__auto__.push((arguments[i__4731__auto___48990]));

var G__48991 = (i__4731__auto___48990 + (1));
i__4731__auto___48990 = G__48991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__48965){
var vec__48966 = p__48965;
var map__48969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48966,(0),null);
var map__48969__$1 = (((((!((map__48969 == null))))?(((((map__48969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48969):map__48969);
var opts = map__48969__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__4131__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48966,(1),null);
var e_48992 = (function (){try{if((function (){var fexpr__48973 = ((function (vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__48974 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48974) : taoensso.truss.impl.set_STAR_.call(null,G__48974));
})(),x);
});})(vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__48973(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48971){if((e48971 instanceof Error)){
var e = e48971;
return e;
} else {
throw e48971;

}
}})();
if((e_48992 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"([:in #{:ws :ajax :auto}] type)",type,e_48992,null);
}

var e_48993 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48975){if((e48975 instanceof Error)){
var e = e48975;
return e;
} else {
throw e48975;

}
}})();
if((e_48993 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1412,"(enc/nblank-str? client-id)",client_id,e_48993,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1414,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-239928016);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1415,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,166668655);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__48976 = (function (){var win_loc = taoensso.encore.get_win_loc();
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48979 = path__$1;
var G__48980 = win_loc;
var G__48981 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48979,G__48980,G__48981) : f.call(null,G__48979,G__48980,G__48981));
})(),(function (){var G__48982 = path__$1;
var G__48983 = win_loc;
var G__48984 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48982,G__48983,G__48984) : f.call(null,G__48982,G__48983,G__48984));
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
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48976,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48976,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__48976,ws_url,ajax_url,vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__48976,ws_url,ajax_url,vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__48985 = type;
var G__48985__$1 = (((G__48985 instanceof cljs.core.Keyword))?G__48985.fqn:null);
switch (G__48985__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48985__$1)].join('')));

}
})());
var temp__5718__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5718__auto__)){
var chsk = temp__5718__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__48976,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__48986 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48986,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48986,(1),null);
var ev__$1 = vec__48986;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__48976,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1503,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,packer__$1,vec__48976,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5718__auto__,packer__$1,vec__48976,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48966,map__48969,map__48969__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1449924569);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq48963){
var G__48964 = cljs.core.first(seq48963);
var seq48963__$1 = cljs.core.next(seq48963);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48964,seq48963__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__48995 = opts;
var map__48995__$1 = (((((!((map__48995 == null))))?(((((map__48995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48995):map__48995);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48995__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48995__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48995__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__40751__auto___49075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__40752__auto__ = (function (){var switch__40560__auto__ = ((function (c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_49044){
var state_val_49045 = (state_49044[(1)]);
if((state_val_49045 === (7))){
var inst_49040 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
var statearr_49046_49076 = state_49044__$1;
(statearr_49046_49076[(2)] = inst_49040);

(statearr_49046_49076[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (1))){
var state_49044__$1 = state_49044;
var statearr_49047_49077 = state_49044__$1;
(statearr_49047_49077[(2)] = null);

(statearr_49047_49077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (4))){
var inst_49007 = (state_49044[(7)]);
var inst_49005 = (state_49044[(8)]);
var inst_49006 = (state_49044[(9)]);
var inst_49010 = (state_49044[(10)]);
var inst_49005__$1 = (state_49044[(2)]);
var inst_49006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49005__$1,(0),null);
var inst_49007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49005__$1,(1),null);
var inst_49008 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49007__$1,ch_ctrl);
var inst_49009 = (inst_49006__$1 == null);
var inst_49010__$1 = ((inst_49008) || (inst_49009));
var state_49044__$1 = (function (){var statearr_49048 = state_49044;
(statearr_49048[(7)] = inst_49007__$1);

(statearr_49048[(8)] = inst_49005__$1);

(statearr_49048[(9)] = inst_49006__$1);

(statearr_49048[(10)] = inst_49010__$1);

return statearr_49048;
})();
if(cljs.core.truth_(inst_49010__$1)){
var statearr_49049_49078 = state_49044__$1;
(statearr_49049_49078[(1)] = (5));

} else {
var statearr_49050_49079 = state_49044__$1;
(statearr_49050_49079[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (15))){
var inst_49006 = (state_49044[(9)]);
var state_49044__$1 = state_49044;
var statearr_49051_49080 = state_49044__$1;
(statearr_49051_49080[(2)] = inst_49006);

(statearr_49051_49080[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (13))){
var inst_49026 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
var statearr_49052_49081 = state_49044__$1;
(statearr_49052_49081[(2)] = inst_49026);

(statearr_49052_49081[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (6))){
var inst_49006 = (state_49044[(9)]);
var inst_49015 = (inst_49006 == null);
var inst_49016 = cljs.core.not(inst_49015);
var state_49044__$1 = state_49044;
if(inst_49016){
var statearr_49053_49082 = state_49044__$1;
(statearr_49053_49082[(1)] = (8));

} else {
var statearr_49054_49083 = state_49044__$1;
(statearr_49054_49083[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (3))){
var inst_49042 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49044__$1,inst_49042);
} else {
if((state_val_49045 === (12))){
var state_49044__$1 = state_49044;
var statearr_49055_49084 = state_49044__$1;
(statearr_49055_49084[(2)] = false);

(statearr_49055_49084[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (2))){
var inst_49001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49002 = [ch_recv,ch_ctrl];
var inst_49003 = (new cljs.core.PersistentVector(null,2,(5),inst_49001,inst_49002,null));
var state_49044__$1 = state_49044;
return cljs.core.async.ioc_alts_BANG_(state_49044__$1,(4),inst_49003);
} else {
if((state_val_49045 === (11))){
var state_49044__$1 = state_49044;
var statearr_49056_49085 = state_49044__$1;
(statearr_49056_49085[(2)] = true);

(statearr_49056_49085[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (9))){
var state_49044__$1 = state_49044;
var statearr_49057_49086 = state_49044__$1;
(statearr_49057_49086[(2)] = false);

(statearr_49057_49086[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (5))){
var state_49044__$1 = state_49044;
var statearr_49058_49087 = state_49044__$1;
(statearr_49058_49087[(2)] = null);

(statearr_49058_49087[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (14))){
var inst_49006 = (state_49044[(9)]);
var inst_49031 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49006);
var state_49044__$1 = state_49044;
var statearr_49059_49088 = state_49044__$1;
(statearr_49059_49088[(2)] = inst_49031);

(statearr_49059_49088[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (16))){
var inst_49007 = (state_49044[(7)]);
var inst_49005 = (state_49044[(8)]);
var inst_49006 = (state_49044[(9)]);
var inst_49010 = (state_49044[(10)]);
var inst_49034 = (state_49044[(2)]);
var inst_49035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49034,cljs.core.cst$kw$event);
var inst_49036 = (function (){var vec__48998 = inst_49005;
var v = inst_49006;
var p = inst_49007;
var stop_QMARK_ = inst_49010;
var map__49013 = inst_49034;
var event_msg = inst_49034;
var event = inst_49035;
return ((function (vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1530,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-671002638);
} else {
}

var G__49062 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49063){if((e49063 instanceof Error)){
var e = e49063;
return e;
} else {
throw e49063;

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
}catch (e49064){if((e49064 instanceof Error)){
var e = e49064;
return e;
} else {
throw e49064;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1534,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__49062) : event_msg_handler.call(null,G__49062));
}catch (e49060){if((e49060 instanceof Error)){
var e1 = e49060;
try{var temp__5718__auto__ = error_handler;
if(cljs.core.truth_(temp__5718__auto__)){
var eh = temp__5718__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1539,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,e1,vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5718__auto__,e1,vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,343878624);
}
}catch (e49061){if((e49061 instanceof Error)){
var e2 = e49061;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init5041265418616416588.clj",1540,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1945784600);
} else {
throw e49061;

}
}} else {
throw e49060;

}
}});
;})(vec__48998,v,p,stop_QMARK_,map__49013,event_msg,event,inst_49007,inst_49005,inst_49006,inst_49010,inst_49034,inst_49035,state_val_49045,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_49037 = execute1(inst_49036);
var state_49044__$1 = (function (){var statearr_49065 = state_49044;
(statearr_49065[(11)] = inst_49037);

return statearr_49065;
})();
var statearr_49066_49089 = state_49044__$1;
(statearr_49066_49089[(2)] = null);

(statearr_49066_49089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (10))){
var inst_49029 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
if(cljs.core.truth_(inst_49029)){
var statearr_49067_49090 = state_49044__$1;
(statearr_49067_49090[(1)] = (14));

} else {
var statearr_49068_49091 = state_49044__$1;
(statearr_49068_49091[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49045 === (8))){
var inst_49006 = (state_49044[(9)]);
var inst_49018 = inst_49006.cljs$lang$protocol_mask$partition0$;
var inst_49019 = (inst_49018 & (64));
var inst_49020 = inst_49006.cljs$core$ISeq$;
var inst_49021 = (cljs.core.PROTOCOL_SENTINEL === inst_49020);
var inst_49022 = ((inst_49019) || (inst_49021));
var state_49044__$1 = state_49044;
if(cljs.core.truth_(inst_49022)){
var statearr_49069_49092 = state_49044__$1;
(statearr_49069_49092[(1)] = (11));

} else {
var statearr_49070_49093 = state_49044__$1;
(statearr_49070_49093[(1)] = (12));

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
});})(c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__40560__auto__,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto____0 = (function (){
var statearr_49071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49071[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto__);

(statearr_49071[(1)] = (1));

return statearr_49071;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto____1 = (function (state_49044){
while(true){
var ret_value__40562__auto__ = (function (){try{while(true){
var result__40563__auto__ = switch__40560__auto__(state_49044);
if(cljs.core.keyword_identical_QMARK_(result__40563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40563__auto__;
}
break;
}
}catch (e49072){if((e49072 instanceof Object)){
var ex__40564__auto__ = e49072;
var statearr_49073_49094 = state_49044;
(statearr_49073_49094[(5)] = ex__40564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49044);

return cljs.core.cst$kw$recur;
} else {
throw e49072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40562__auto__,cljs.core.cst$kw$recur)){
var G__49095 = state_49044;
state_49044 = G__49095;
continue;
} else {
return ret_value__40562__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto__ = function(state_49044){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto____1.call(this,state_49044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40561__auto__;
})()
;})(switch__40560__auto__,c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__40753__auto__ = (function (){var statearr_49074 = (f__40752__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40752__auto__.cljs$core$IFn$_invoke$arity$0() : f__40752__auto__.call(null));
(statearr_49074[(6)] = c__40751__auto___49075);

return statearr_49074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40753__auto__);
});})(c__40751__auto___49075,map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__48995,map__48995__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var len__4730__auto___49105 = arguments.length;
var i__4731__auto___49106 = (0);
while(true){
if((i__4731__auto___49106 < len__4730__auto___49105)){
args__4736__auto__.push((arguments[i__4731__auto___49106]));

var G__49107 = (i__4731__auto___49106 + (1));
i__4731__auto___49106 = G__49107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49099){
var vec__49100 = p__49099;
var map__49103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49100,(0),null);
var map__49103__$1 = (((((!((map__49103 == null))))?(((((map__49103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49103):map__49103);
var opts = map__49103__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49103__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49103__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49103__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49096){
var G__49097 = cljs.core.first(seq49096);
var seq49096__$1 = cljs.core.next(seq49096);
var G__49098 = cljs.core.first(seq49096__$1);
var seq49096__$2 = cljs.core.next(seq49096__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49097,G__49098,seq49096__$2);
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
var len__4730__auto___49117 = arguments.length;
var i__4731__auto___49118 = (0);
while(true){
if((i__4731__auto___49118 < len__4730__auto___49117)){
args__4736__auto__.push((arguments[i__4731__auto___49118]));

var G__49119 = (i__4731__auto___49118 + (1));
i__4731__auto___49118 = G__49119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49111){
var vec__49112 = p__49111;
var map__49115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49112,(0),null);
var map__49115__$1 = (((((!((map__49115 == null))))?(((((map__49115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49115):map__49115);
var opts = map__49115__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49115__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49115__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49108){
var G__49109 = cljs.core.first(seq49108);
var seq49108__$1 = cljs.core.next(seq49108);
var G__49110 = cljs.core.first(seq49108__$1);
var seq49108__$2 = cljs.core.next(seq49108__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49109,G__49110,seq49108__$2);
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
var G__49120 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__49121 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__49120,G__49121) : event_handler.call(null,G__49120,G__49121));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__49122,websocket_QMARK_){
var map__49123 = p__49122;
var map__49123__$1 = (((((!((map__49123 == null))))?(((((map__49123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49123):map__49123);
var location = map__49123__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49123__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49123__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49123__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pathname;
}
})())].join('');
});
