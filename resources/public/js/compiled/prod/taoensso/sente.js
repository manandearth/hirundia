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
if(cljs.core.not((function (){var G__41959 = cljs.core.count(x);
var fexpr__41958 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__41958.cljs$core$IFn$_invoke$arity$1 ? fexpr__41958.cljs$core$IFn$_invoke$arity$1(G__41959) : fexpr__41958.call(null,G__41959));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__41960 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41960,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41960,(1),null);
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
var map__41967 = x;
var map__41967__$1 = (((((!((map__41967 == null))))?(((((map__41967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41967):map__41967);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,cljs.core.cst$kw$event);
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
var map__41973 = x;
var map__41973__$1 = (((((!((map__41973 == null))))?(((((map__41973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41973):map__41973);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41973__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__41975){
var map__41976 = p__41975;
var map__41976__$1 = (((((!((map__41976 == null))))?(((((map__41976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41976):map__41976);
var ev_msg = map__41976__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41976__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41976__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__41978 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(1),null);
var valid_event = vec__41978;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__41978,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__41976,map__41976__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__41978,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__41976,map__41976__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,940742695);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__41981 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null);
return (fexpr__41981.cljs$core$IFn$_invoke$arity$1 ? fexpr__41981.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__41981.call(null,cb_reply_clj));
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
}catch (e41985){var t = e41985;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init6643717838126997613.clj",208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-774026560);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__41982 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41982,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41982,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__41982,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__41982,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1565565279);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__41987 = arguments.length;
switch (G__41987) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,1136006392);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",230,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1949123520);

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
var e = (function (){try{if((function (){var fexpr__41992 = (function (p1__41989_SHARP_){
if((!((p1__41989_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__41989_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__41989_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__41989_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__41989_SHARP_);
}
});
return fexpr__41992(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41990){if((e41990 instanceof Error)){
var e = e41990;
return e;
} else {
throw e41990;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__41989#] (satisfies? interfaces/IPacker p1__41989#)) x)",x,e,null);
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
var len__4730__auto___42306 = arguments.length;
var i__4731__auto___42307 = (0);
while(true){
if((i__4731__auto___42307 < len__4730__auto___42306)){
args__4736__auto__.push((arguments[i__4731__auto___42307]));

var G__42308 = (i__4731__auto___42307 + (1));
i__4731__auto___42307 = G__42308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__41997){
var vec__41998 = p__41997;
var map__42001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41998,(0),null);
var map__42001__$1 = (((((!((map__42001 == null))))?(((((map__42001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42001):map__42001);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms){
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
});})(vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax){
return (function (ring_req){
return null;
});})(vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax))
);
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn))
);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42001__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42003){if((e42003 instanceof Error)){
var e = e42003;
return e;
} else {
throw e42003;

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
}catch (e42004){if((e42004 instanceof Error)){
var e = e42004;
return e;
} else {
throw e42004;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_42309 = (function (){try{if((function (){var fexpr__42007 = ((function (vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p1__41994_SHARP_){
if((!((p1__41994_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__41994_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__41994_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__41994_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__41994_SHARP_);
}
});})(vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return fexpr__42007(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42005){if((e42005 instanceof Error)){
var e = e42005;
return e;
} else {
throw e42005;

}
}})();
if((e_42309 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",315,"((fn* [p1__41994#] (satisfies? interfaces/IServerChanAdapter p1__41994#)) web-server-ch-adapter)",web_server_ch_adapter,e_42309,null);
}

var max_ms_42310 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_42310)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_42310)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_42310], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req,client_id){
var or__4131__auto__ = (function (){var G__42010 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__42010) : user_id_fn.call(null,G__42010));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var G__42311 = null;
var G__42311__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var vec__42011 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42011,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42011,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
var G__42311__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
G__42311 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__42311__3.call(this,conn_type,uid,client_id);
case 4:
return G__42311__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42311.cljs$core$IFn$_invoke$arity$3 = G__42311__3;
G__42311.cljs$core$IFn$_invoke$arity$4 = G__42311__4;
return G__42311;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42014){if((e42014 instanceof Error)){
var e = e42014;
return e;
} else {
throw e42014;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__42015){
var map__42016 = p__42015;
var map__42016__$1 = (((((!((map__42016 == null))))?(((((map__42016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42016):map__42016);
var old_m = map__42016__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__42018 = conn_type;
var G__42018__$1 = (((G__42018 instanceof cljs.core.Keyword))?G__42018.fqn:null);
switch (G__42018__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42018__$1)].join('')));

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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42019){if((e42019 instanceof Error)){
var e = e42019;
return e;
} else {
throw e42019;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__42020){
var map__42021 = p__42020;
var map__42021__$1 = (((((!((map__42021 == null))))?(((((map__42021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42021):map__42021);
var old_m = map__42021__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42021__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42021__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42021__$1,cljs.core.cst$kw$any);
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() { 
var G__42313__delegate = function (user_id,ev,p__42023){
var vec__42024 = p__42023;
var map__42027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024,(0),null);
var map__42027__$1 = (((((!((map__42027 == null))))?(((((map__42027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42027):map__42027);
var opts = map__42027__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42027__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_42314 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __42315 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",402,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_42314,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_42314,ev], null);
});})(uid_42314,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1419954365);
var __42316__$1 = (cljs.core.truth_(uid_42314)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __42317__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_42318 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__42319 = ((function (uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type){
var temp__5720__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (m){
var vec__42029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_42314);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42029,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42029,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_42318)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_42314),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_42314));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
if(cljs.core.truth_(temp__5720__auto__)){
var pulled = temp__5720__auto__;
var vec__42032 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42032,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42032,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",430,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",433,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__42032,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__42032,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1562265086);

var G__42035 = conn_type;
var G__42035__$1 = (((G__42035 instanceof cljs.core.Keyword))?G__42035.fqn:null);
switch (G__42035__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_42314,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_42314,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_42314,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_42314,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42035__$1)].join('')));

}
} else {
return null;
}
});})(uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init6643717838126997613.clj",442,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_42314], null);
});})(uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-719242552);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__42319(cljs.core.cst$kw$ws);

flush_buffer_BANG__42319(cljs.core.cst$kw$ajax);
} else {
}

var seq__42036_42321 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_42314], null))));
var chunk__42037_42322 = null;
var count__42038_42323 = (0);
var i__42039_42324 = (0);
while(true){
if((i__42039_42324 < count__42038_42323)){
var vec__42046_42325 = chunk__42037_42322.cljs$core$IIndexed$_nth$arity$2(null,i__42039_42324);
var _QMARK_sch_42326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42046_42325,(0),null);
var _udt_42327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42046_42325,(1),null);
var temp__5720__auto___42328 = _QMARK_sch_42326;
if(cljs.core.truth_(temp__5720__auto___42328)){
var sch_42329 = temp__5720__auto___42328;
taoensso.sente.interfaces.sch_close_BANG_(sch_42329);
} else {
}


var G__42330 = seq__42036_42321;
var G__42331 = chunk__42037_42322;
var G__42332 = count__42038_42323;
var G__42333 = (i__42039_42324 + (1));
seq__42036_42321 = G__42330;
chunk__42037_42322 = G__42331;
count__42038_42323 = G__42332;
i__42039_42324 = G__42333;
continue;
} else {
var temp__5720__auto___42334 = cljs.core.seq(seq__42036_42321);
if(temp__5720__auto___42334){
var seq__42036_42335__$1 = temp__5720__auto___42334;
if(cljs.core.chunked_seq_QMARK_(seq__42036_42335__$1)){
var c__4550__auto___42336 = cljs.core.chunk_first(seq__42036_42335__$1);
var G__42337 = cljs.core.chunk_rest(seq__42036_42335__$1);
var G__42338 = c__4550__auto___42336;
var G__42339 = cljs.core.count(c__4550__auto___42336);
var G__42340 = (0);
seq__42036_42321 = G__42337;
chunk__42037_42322 = G__42338;
count__42038_42323 = G__42339;
i__42039_42324 = G__42340;
continue;
} else {
var vec__42049_42341 = cljs.core.first(seq__42036_42335__$1);
var _QMARK_sch_42342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42049_42341,(0),null);
var _udt_42343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42049_42341,(1),null);
var temp__5720__auto___42344__$1 = _QMARK_sch_42342;
if(cljs.core.truth_(temp__5720__auto___42344__$1)){
var sch_42345 = temp__5720__auto___42344__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_42345);
} else {
}


var G__42346 = cljs.core.next(seq__42036_42335__$1);
var G__42347 = null;
var G__42348 = (0);
var G__42349 = (0);
seq__42036_42321 = G__42346;
chunk__42037_42322 = G__42347;
count__42038_42323 = G__42348;
i__42039_42324 = G__42349;
continue;
}
} else {
}
}
break;
}

var seq__42052_42350 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_42314], null))));
var chunk__42053_42351 = null;
var count__42054_42352 = (0);
var i__42055_42353 = (0);
while(true){
if((i__42055_42353 < count__42054_42352)){
var vec__42062_42354 = chunk__42053_42351.cljs$core$IIndexed$_nth$arity$2(null,i__42055_42353);
var _QMARK_sch_42355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42062_42354,(0),null);
var _udt_42356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42062_42354,(1),null);
var temp__5720__auto___42357 = _QMARK_sch_42355;
if(cljs.core.truth_(temp__5720__auto___42357)){
var sch_42358 = temp__5720__auto___42357;
taoensso.sente.interfaces.sch_close_BANG_(sch_42358);
} else {
}


var G__42359 = seq__42052_42350;
var G__42360 = chunk__42053_42351;
var G__42361 = count__42054_42352;
var G__42362 = (i__42055_42353 + (1));
seq__42052_42350 = G__42359;
chunk__42053_42351 = G__42360;
count__42054_42352 = G__42361;
i__42055_42353 = G__42362;
continue;
} else {
var temp__5720__auto___42363 = cljs.core.seq(seq__42052_42350);
if(temp__5720__auto___42363){
var seq__42052_42364__$1 = temp__5720__auto___42363;
if(cljs.core.chunked_seq_QMARK_(seq__42052_42364__$1)){
var c__4550__auto___42365 = cljs.core.chunk_first(seq__42052_42364__$1);
var G__42366 = cljs.core.chunk_rest(seq__42052_42364__$1);
var G__42367 = c__4550__auto___42365;
var G__42368 = cljs.core.count(c__4550__auto___42365);
var G__42369 = (0);
seq__42052_42350 = G__42366;
chunk__42053_42351 = G__42367;
count__42054_42352 = G__42368;
i__42055_42353 = G__42369;
continue;
} else {
var vec__42065_42370 = cljs.core.first(seq__42052_42364__$1);
var _QMARK_sch_42371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42065_42370,(0),null);
var _udt_42372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42065_42370,(1),null);
var temp__5720__auto___42373__$1 = _QMARK_sch_42371;
if(cljs.core.truth_(temp__5720__auto___42373__$1)){
var sch_42374 = temp__5720__auto___42373__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_42374);
} else {
}


var G__42375 = cljs.core.next(seq__42052_42364__$1);
var G__42376 = null;
var G__42377 = (0);
var G__42378 = (0);
seq__42052_42350 = G__42375;
chunk__42053_42351 = G__42376;
count__42054_42352 = G__42377;
i__42055_42353 = G__42378;
continue;
}
} else {
}
}
break;
}
} else {
var seq__42068_42379 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__42069_42380 = null;
var count__42070_42381 = (0);
var i__42071_42382 = (0);
while(true){
if((i__42071_42382 < count__42070_42381)){
var conn_type_42383 = chunk__42069_42380.cljs$core$IIndexed$_nth$arity$2(null,i__42071_42382);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_42383,uid_42314], null),((function (seq__42068_42379,chunk__42069_42380,count__42070_42381,i__42071_42382,conn_type_42383,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_42318])], null);
} else {
var vec__42078 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42078,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42078,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_42318)], null);
}
});})(seq__42068_42379,chunk__42069_42380,count__42070_42381,i__42071_42382,conn_type_42383,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__42384 = seq__42068_42379;
var G__42385 = chunk__42069_42380;
var G__42386 = count__42070_42381;
var G__42387 = (i__42071_42382 + (1));
seq__42068_42379 = G__42384;
chunk__42069_42380 = G__42385;
count__42070_42381 = G__42386;
i__42071_42382 = G__42387;
continue;
} else {
var temp__5720__auto___42388 = cljs.core.seq(seq__42068_42379);
if(temp__5720__auto___42388){
var seq__42068_42389__$1 = temp__5720__auto___42388;
if(cljs.core.chunked_seq_QMARK_(seq__42068_42389__$1)){
var c__4550__auto___42390 = cljs.core.chunk_first(seq__42068_42389__$1);
var G__42391 = cljs.core.chunk_rest(seq__42068_42389__$1);
var G__42392 = c__4550__auto___42390;
var G__42393 = cljs.core.count(c__4550__auto___42390);
var G__42394 = (0);
seq__42068_42379 = G__42391;
chunk__42069_42380 = G__42392;
count__42070_42381 = G__42393;
i__42071_42382 = G__42394;
continue;
} else {
var conn_type_42395 = cljs.core.first(seq__42068_42389__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_42395,uid_42314], null),((function (seq__42068_42379,chunk__42069_42380,count__42070_42381,i__42071_42382,conn_type_42395,seq__42068_42389__$1,temp__5720__auto___42388,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_42318])], null);
} else {
var vec__42081 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42081,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42081,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_42318)], null);
}
});})(seq__42068_42379,chunk__42069_42380,count__42070_42381,i__42071_42382,conn_type_42395,seq__42068_42389__$1,temp__5720__auto___42388,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__42396 = cljs.core.next(seq__42068_42389__$1);
var G__42397 = null;
var G__42398 = (0);
var G__42399 = (0);
seq__42068_42379 = G__42396;
chunk__42069_42380 = G__42397;
count__42070_42381 = G__42398;
i__42071_42382 = G__42399;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__42319(cljs.core.cst$kw$ws);

flush_buffer_BANG__42319(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_42400 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_42401 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__38887__auto___42402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___42402,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___42402,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_42088){
var state_val_42089 = (state_42088[(1)]);
if((state_val_42089 === (1))){
var state_42088__$1 = state_42088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42088__$1,(2),ws_timeout_42400);
} else {
if((state_val_42089 === (2))){
var inst_42085 = (state_42088[(2)]);
var inst_42086 = flush_buffer_BANG__42319(cljs.core.cst$kw$ws);
var state_42088__$1 = (function (){var statearr_42090 = state_42088;
(statearr_42090[(7)] = inst_42085);

return statearr_42090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42088__$1,inst_42086);
} else {
return null;
}
}
});})(c__38887__auto___42402,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38780__auto__,c__38887__auto___42402,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42091 = [null,null,null,null,null,null,null,null];
(statearr_42091[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42091[(1)] = (1));

return statearr_42091;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42088){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42088);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42092){if((e42092 instanceof Object)){
var ex__38784__auto__ = e42092;
var statearr_42093_42403 = state_42088;
(statearr_42093_42403[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42088);

return cljs.core.cst$kw$recur;
} else {
throw e42092;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42404 = state_42088;
state_42088 = G__42404;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42088){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___42402,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38889__auto__ = (function (){var statearr_42094 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42094[(6)] = c__38887__auto___42402);

return statearr_42094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___42402,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var c__38887__auto___42405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___42405,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___42405,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_42099){
var state_val_42100 = (state_42099[(1)]);
if((state_val_42100 === (1))){
var state_42099__$1 = state_42099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42099__$1,(2),ajax_timeout_42401);
} else {
if((state_val_42100 === (2))){
var inst_42096 = (state_42099[(2)]);
var inst_42097 = flush_buffer_BANG__42319(cljs.core.cst$kw$ajax);
var state_42099__$1 = (function (){var statearr_42101 = state_42099;
(statearr_42101[(7)] = inst_42096);

return statearr_42101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42099__$1,inst_42097);
} else {
return null;
}
}
});})(c__38887__auto___42405,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38780__auto__,c__38887__auto___42405,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42102 = [null,null,null,null,null,null,null,null];
(statearr_42102[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42102[(1)] = (1));

return statearr_42102;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42099){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42099);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42103){if((e42103 instanceof Object)){
var ex__38784__auto__ = e42103;
var statearr_42104_42406 = state_42099;
(statearr_42104_42406[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42099);

return cljs.core.cst$kw$recur;
} else {
throw e42103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42407 = state_42099;
state_42099 = G__42407;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42099){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___42405,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38889__auto__ = (function (){var statearr_42105 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42105[(6)] = c__38887__auto___42405);

return statearr_42105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___42405,ws_timeout_42400,ajax_timeout_42401,uid_42314,__42315,__42316__$1,__42317__$2,ev_uuid_42318,flush_buffer_BANG__42319,vec__42024,map__42027,map__42027__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

}
}

return null;
};
var G__42313 = function (user_id,ev,var_args){
var p__42023 = null;
if (arguments.length > 2) {
var G__42408__i = 0, G__42408__a = new Array(arguments.length -  2);
while (G__42408__i < G__42408__a.length) {G__42408__a[G__42408__i] = arguments[G__42408__i + 2]; ++G__42408__i;}
  p__42023 = new cljs.core.IndexedSeq(G__42408__a,0,null);
} 
return G__42313__delegate.call(this,user_id,ev,p__42023);};
G__42313.cljs$lang$maxFixedArity = 2;
G__42313.cljs$lang$applyTo = (function (arglist__42409){
var user_id = cljs.core.first(arglist__42409);
arglist__42409 = cljs.core.next(arglist__42409);
var ev = cljs.core.first(arglist__42409);
var p__42023 = cljs.core.rest(arglist__42409);
return G__42313__delegate(user_id,ev,p__42023);
});
G__42313.cljs$core$IFn$_invoke$arity$variadic = G__42313__delegate;
return G__42313;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__42106 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42106,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42106,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",511,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-575212764);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5720__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5720__auto__)){
var ms = temp__5720__auto__;
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_42114){
var state_val_42115 = (state_42114[(1)]);
if((state_val_42115 === (1))){
var inst_42109 = cljs.core.async.timeout(ms);
var state_42114__$1 = state_42114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42114__$1,(2),inst_42109);
} else {
if((state_val_42115 === (2))){
var inst_42111 = (state_42114[(2)]);
var inst_42112 = (function (){var G__42116 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__42116) : reply_fn.call(null,G__42116));
})();
var state_42114__$1 = (function (){var statearr_42117 = state_42114;
(statearr_42117[(7)] = inst_42111);

return statearr_42117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42114__$1,inst_42112);
} else {
return null;
}
}
});})(c__38887__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38780__auto__,c__38887__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42118 = [null,null,null,null,null,null,null,null];
(statearr_42118[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42118[(1)] = (1));

return statearr_42118;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42114){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42114);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42119){if((e42119 instanceof Object)){
var ex__38784__auto__ = e42119;
var statearr_42120_42410 = state_42114;
(statearr_42120_42410[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42114);

return cljs.core.cst$kw$recur;
} else {
throw e42119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42411 = state_42114;
state_42114 = G__42411;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42114){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38889__auto__ = (function (){var statearr_42121 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42121[(6)] = c__38887__auto__);

return statearr_42121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__42106,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38887__auto__;
} else {
return null;
}
} else {
var G__42122 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__42122) : reply_fn.call(null,G__42122));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",556,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,843499428);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init6643717838126997613.clj",567,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1550973101);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",576,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-325102579);
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
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_42158){
var state_val_42159 = (state_42158[(1)]);
if((state_val_42159 === (7))){
var inst_42154 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
var statearr_42160_42412 = state_42158__$1;
(statearr_42160_42412[(2)] = inst_42154);

(statearr_42160_42412[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (1))){
var inst_42123 = udt_open;
var state_42158__$1 = (function (){var statearr_42161 = state_42158;
(statearr_42161[(7)] = inst_42123);

return statearr_42161;
})();
var statearr_42162_42413 = state_42158__$1;
(statearr_42162_42413[(2)] = null);

(statearr_42162_42413[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (4))){
var inst_42132 = (state_42158[(8)]);
var inst_42127 = (state_42158[(2)]);
var inst_42128 = cljs.core.deref(conns_);
var inst_42129 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42130 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_42131 = (new cljs.core.PersistentVector(null,3,(5),inst_42129,inst_42130,null));
var inst_42132__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_42128,inst_42131);
var state_42158__$1 = (function (){var statearr_42163 = state_42158;
(statearr_42163[(8)] = inst_42132__$1);

(statearr_42163[(9)] = inst_42127);

return statearr_42163;
})();
if(cljs.core.truth_(inst_42132__$1)){
var statearr_42164_42414 = state_42158__$1;
(statearr_42164_42414[(1)] = (5));

} else {
var statearr_42165_42415 = state_42158__$1;
(statearr_42165_42415[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (13))){
var inst_42138 = (state_42158[(10)]);
var inst_42147 = (state_42158[(2)]);
var inst_42123 = inst_42138;
var state_42158__$1 = (function (){var statearr_42166 = state_42158;
(statearr_42166[(11)] = inst_42147);

(statearr_42166[(7)] = inst_42123);

return statearr_42166;
})();
var statearr_42167_42416 = state_42158__$1;
(statearr_42167_42416[(2)] = null);

(statearr_42167_42416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (6))){
var state_42158__$1 = state_42158;
var statearr_42168_42417 = state_42158__$1;
(statearr_42168_42417[(2)] = null);

(statearr_42168_42417[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (3))){
var inst_42156 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42158__$1,inst_42156);
} else {
if((state_val_42159 === (12))){
var state_42158__$1 = state_42158;
var statearr_42169_42418 = state_42158__$1;
(statearr_42169_42418[(2)] = null);

(statearr_42169_42418[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (2))){
var inst_42125 = cljs.core.async.timeout(ms);
var state_42158__$1 = state_42158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42158__$1,(4),inst_42125);
} else {
if((state_val_42159 === (11))){
var inst_42143 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_42144 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_42143);
var state_42158__$1 = state_42158;
var statearr_42170_42419 = state_42158__$1;
(statearr_42170_42419[(2)] = inst_42144);

(statearr_42170_42419[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (9))){
var state_42158__$1 = state_42158;
var statearr_42171_42420 = state_42158__$1;
(statearr_42171_42420[(2)] = null);

(statearr_42171_42420[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (5))){
var inst_42132 = (state_42158[(8)]);
var inst_42137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42132,(0),null);
var inst_42138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42132,(1),null);
var inst_42139 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_42158__$1 = (function (){var statearr_42172 = state_42158;
(statearr_42172[(10)] = inst_42138);

(statearr_42172[(12)] = inst_42137);

return statearr_42172;
})();
if(cljs.core.truth_(inst_42139)){
var statearr_42173_42421 = state_42158__$1;
(statearr_42173_42421[(1)] = (8));

} else {
var statearr_42174_42422 = state_42158__$1;
(statearr_42174_42422[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (10))){
var inst_42151 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
var statearr_42175_42423 = state_42158__$1;
(statearr_42175_42423[(2)] = inst_42151);

(statearr_42175_42423[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42159 === (8))){
var inst_42138 = (state_42158[(10)]);
var inst_42123 = (state_42158[(7)]);
var inst_42141 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42138,inst_42123);
var state_42158__$1 = state_42158;
if(inst_42141){
var statearr_42176_42424 = state_42158__$1;
(statearr_42176_42424[(1)] = (11));

} else {
var statearr_42177_42425 = state_42158__$1;
(statearr_42177_42425[(1)] = (12));

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
});})(c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38780__auto__,c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42178 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42178[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42178[(1)] = (1));

return statearr_42178;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42158){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42158);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42179){if((e42179 instanceof Object)){
var ex__38784__auto__ = e42179;
var statearr_42180_42426 = state_42158;
(statearr_42180_42426[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42158);

return cljs.core.cst$kw$recur;
} else {
throw e42179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42427 = state_42158;
state_42158 = G__42427;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42158){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38889__auto__ = (function (){var statearr_42181 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42181[(6)] = c__38887__auto__);

return statearr_42181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38887__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",605,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1174896312);
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
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_42207){
var state_val_42208 = (state_42207[(1)]);
if((state_val_42208 === (1))){
var inst_42182 = cljs.core.async.timeout(ms);
var state_42207__$1 = state_42207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42207__$1,(2),inst_42182);
} else {
if((state_val_42208 === (2))){
var inst_42189 = (state_42207[(7)]);
var inst_42184 = (state_42207[(2)]);
var inst_42185 = cljs.core.deref(conns_);
var inst_42186 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42187 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_42188 = (new cljs.core.PersistentVector(null,3,(5),inst_42186,inst_42187,null));
var inst_42189__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_42185,inst_42188);
var state_42207__$1 = (function (){var statearr_42209 = state_42207;
(statearr_42209[(7)] = inst_42189__$1);

(statearr_42209[(8)] = inst_42184);

return statearr_42209;
})();
if(cljs.core.truth_(inst_42189__$1)){
var statearr_42210_42428 = state_42207__$1;
(statearr_42210_42428[(1)] = (3));

} else {
var statearr_42211_42429 = state_42207__$1;
(statearr_42211_42429[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42208 === (3))){
var inst_42189 = (state_42207[(7)]);
var inst_42194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42189,(0),null);
var inst_42195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42189,(1),null);
var inst_42196 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42195,udt_open);
var state_42207__$1 = (function (){var statearr_42212 = state_42207;
(statearr_42212[(9)] = inst_42194);

return statearr_42212;
})();
if(inst_42196){
var statearr_42213_42430 = state_42207__$1;
(statearr_42213_42430[(1)] = (6));

} else {
var statearr_42214_42431 = state_42207__$1;
(statearr_42214_42431[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42208 === (4))){
var state_42207__$1 = state_42207;
var statearr_42215_42432 = state_42207__$1;
(statearr_42215_42432[(2)] = null);

(statearr_42215_42432[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42208 === (5))){
var inst_42205 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42207__$1,inst_42205);
} else {
if((state_val_42208 === (6))){
var inst_42198 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_42199 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_42198);
var state_42207__$1 = state_42207;
var statearr_42216_42433 = state_42207__$1;
(statearr_42216_42433[(2)] = inst_42199);

(statearr_42216_42433[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42208 === (7))){
var state_42207__$1 = state_42207;
var statearr_42217_42434 = state_42207__$1;
(statearr_42217_42434[(2)] = null);

(statearr_42217_42434[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42208 === (8))){
var inst_42202 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
var statearr_42218_42435 = state_42207__$1;
(statearr_42218_42435[(2)] = inst_42202);

(statearr_42218_42435[(1)] = (5));


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
});})(c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38780__auto__,c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42219 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42219[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42219[(1)] = (1));

return statearr_42219;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42207){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42207);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42220){if((e42220 instanceof Object)){
var ex__38784__auto__ = e42220;
var statearr_42221_42436 = state_42207;
(statearr_42221_42436[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42207);

return cljs.core.cst$kw$recur;
} else {
throw e42220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42437 = state_42207;
state_42207 = G__42437;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42207){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38889__auto__ = (function (){var statearr_42222 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42222[(6)] = c__38887__auto__);

return statearr_42222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38887__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__42223 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42223,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42223,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__42223,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",635,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42223,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__42223,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1937209164);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__42223,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",644,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1559261523);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_42277){
var state_val_42278 = (state_42277[(1)]);
if((state_val_42278 === (7))){
var state_42277__$1 = state_42277;
var statearr_42279_42438 = state_42277__$1;
(statearr_42279_42438[(2)] = null);

(statearr_42279_42438[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (1))){
var inst_42226 = cljs.core.async.timeout((5000));
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(2),inst_42226);
} else {
if((state_val_42278 === (4))){
var state_42277__$1 = state_42277;
var statearr_42280_42439 = state_42277__$1;
(statearr_42280_42439[(2)] = null);

(statearr_42280_42439[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (13))){
var state_42277__$1 = state_42277;
var statearr_42281_42440 = state_42277__$1;
(statearr_42281_42440[(2)] = null);

(statearr_42281_42440[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (6))){
var inst_42236 = (state_42277[(7)]);
var inst_42238 = (state_42277[(8)]);
var inst_42254 = (state_42277[(9)]);
var inst_42237 = (state_42277[(10)]);
var inst_42249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42250 = [conn_type,uid,client_id];
var inst_42251 = (new cljs.core.PersistentVector(null,3,(5),inst_42249,inst_42250,null));
var inst_42253 = (function (){var vec__42229 = inst_42236;
var __QMARK_sch = inst_42237;
var udt_t1 = inst_42238;
return ((function (vec__42229,__QMARK_sch,udt_t1,inst_42236,inst_42238,inst_42254,inst_42237,inst_42249,inst_42250,inst_42251,state_val_42278,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__42252){
var vec__42282 = p__42252;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42282,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42282,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__42229,__QMARK_sch,udt_t1,inst_42236,inst_42238,inst_42254,inst_42237,inst_42249,inst_42250,inst_42251,state_val_42278,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_42254__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_42251,inst_42253);
var state_42277__$1 = (function (){var statearr_42285 = state_42277;
(statearr_42285[(9)] = inst_42254__$1);

return statearr_42285;
})();
if(cljs.core.truth_(inst_42254__$1)){
var statearr_42286_42441 = state_42277__$1;
(statearr_42286_42441[(1)] = (9));

} else {
var statearr_42287_42442 = state_42277__$1;
(statearr_42287_42442[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (3))){
var inst_42236 = (state_42277[(7)]);
var inst_42238 = (state_42277[(8)]);
var inst_42237 = (state_42277[(10)]);
var inst_42241 = (function (){var vec__42229 = inst_42236;
var __QMARK_sch = inst_42237;
var udt_t1 = inst_42238;
return ((function (vec__42229,__QMARK_sch,udt_t1,inst_42236,inst_42238,inst_42237,state_val_42278,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__42229,__QMARK_sch,udt_t1,inst_42236,inst_42238,inst_42237,state_val_42278,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_42242 = (new cljs.core.Delay(inst_42241,null));
var inst_42243 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init6643717838126997613.clj",658,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_42242,null,-971838433);
var state_42277__$1 = state_42277;
var statearr_42288_42443 = state_42277__$1;
(statearr_42288_42443[(2)] = inst_42243);

(statearr_42288_42443[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (12))){
var inst_42263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42264 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_42265 = (new cljs.core.PersistentVector(null,2,(5),inst_42263,inst_42264,null));
var inst_42266 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_42265);
var state_42277__$1 = state_42277;
var statearr_42289_42444 = state_42277__$1;
(statearr_42289_42444[(2)] = inst_42266);

(statearr_42289_42444[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (2))){
var inst_42236 = (state_42277[(7)]);
var inst_42228 = (state_42277[(2)]);
var inst_42232 = cljs.core.deref(conns_);
var inst_42233 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42234 = [conn_type,uid,client_id];
var inst_42235 = (new cljs.core.PersistentVector(null,3,(5),inst_42233,inst_42234,null));
var inst_42236__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_42232,inst_42235);
var inst_42237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42236__$1,(0),null);
var inst_42238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42236__$1,(1),null);
var inst_42239 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_42277__$1 = (function (){var statearr_42290 = state_42277;
(statearr_42290[(11)] = inst_42228);

(statearr_42290[(7)] = inst_42236__$1);

(statearr_42290[(8)] = inst_42238);

(statearr_42290[(10)] = inst_42237);

return statearr_42290;
})();
if(cljs.core.truth_(inst_42239)){
var statearr_42291_42445 = state_42277__$1;
(statearr_42291_42445[(1)] = (3));

} else {
var statearr_42292_42446 = state_42277__$1;
(statearr_42292_42446[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (11))){
var inst_42272 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
var statearr_42293_42447 = state_42277__$1;
(statearr_42293_42447[(2)] = inst_42272);

(statearr_42293_42447[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (9))){
var inst_42236 = (state_42277[(7)]);
var inst_42238 = (state_42277[(8)]);
var inst_42254 = (state_42277[(9)]);
var inst_42237 = (state_42277[(10)]);
var inst_42256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42257 = [conn_type,uid];
var inst_42258 = (new cljs.core.PersistentVector(null,2,(5),inst_42256,inst_42257,null));
var inst_42259 = (function (){var vec__42229 = inst_42236;
var __QMARK_sch = inst_42237;
var udt_t1 = inst_42238;
var disconnect_QMARK_ = inst_42254;
return ((function (vec__42229,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_42236,inst_42238,inst_42254,inst_42237,inst_42256,inst_42257,inst_42258,state_val_42278,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__42229,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_42236,inst_42238,inst_42254,inst_42237,inst_42256,inst_42257,inst_42258,state_val_42278,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_42260 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_42258,inst_42259);
var inst_42261 = upd_connected_uid_BANG_(uid);
var state_42277__$1 = (function (){var statearr_42294 = state_42277;
(statearr_42294[(12)] = inst_42260);

return statearr_42294;
})();
if(cljs.core.truth_(inst_42261)){
var statearr_42295_42448 = state_42277__$1;
(statearr_42295_42448[(1)] = (12));

} else {
var statearr_42296_42449 = state_42277__$1;
(statearr_42296_42449[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (5))){
var inst_42238 = (state_42277[(8)]);
var inst_42246 = (state_42277[(2)]);
var inst_42247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42238,udt_close);
var state_42277__$1 = (function (){var statearr_42297 = state_42277;
(statearr_42297[(13)] = inst_42246);

return statearr_42297;
})();
if(inst_42247){
var statearr_42298_42450 = state_42277__$1;
(statearr_42298_42450[(1)] = (6));

} else {
var statearr_42299_42451 = state_42277__$1;
(statearr_42299_42451[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (14))){
var inst_42269 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
var statearr_42300_42452 = state_42277__$1;
(statearr_42300_42452[(2)] = inst_42269);

(statearr_42300_42452[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (10))){
var state_42277__$1 = state_42277;
var statearr_42301_42453 = state_42277__$1;
(statearr_42301_42453[(2)] = null);

(statearr_42301_42453[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42278 === (8))){
var inst_42275 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42277__$1,inst_42275);
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
});})(c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__38780__auto__,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42302[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42302[(1)] = (1));

return statearr_42302;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42277){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42277);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42303){if((e42303 instanceof Object)){
var ex__38784__auto__ = e42303;
var statearr_42304_42454 = state_42277;
(statearr_42304_42454[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42277);

return cljs.core.cst$kw$recur;
} else {
throw e42303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42455 = state_42277;
state_42277 = G__42455;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42277){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__38889__auto__ = (function (){var statearr_42305 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42305[(6)] = c__38887__auto__);

return statearr_42305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__38887__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init6643717838126997613.clj",680,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1123965249);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41998,map__42001,map__42001__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq41995){
var G__41996 = cljs.core.first(seq41995);
var seq41995__$1 = cljs.core.next(seq41995);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41996,seq41995__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",686,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1099457183);

var seq__42456 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__42457 = null;
var count__42458 = (0);
var i__42459 = (0);
while(true){
if((i__42459 < count__42458)){
var vec__42478 = chunk__42457.cljs$core$IIndexed$_nth$arity$2(null,i__42459);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42478,(0),null);
var vec__42481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42478,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42481,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42481,(1),null);
var temp__5720__auto___42496 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___42496)){
var sch_42497 = temp__5720__auto___42496;
var G__42484_42498 = cljs.core.cst$kw$ws;
var G__42485_42499 = uid;
var G__42486_42500 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__42484_42498,G__42485_42499,G__42486_42500) : upd_conn_BANG_.call(null,G__42484_42498,G__42485_42499,G__42486_42500));

taoensso.sente.interfaces.sch_send_BANG_(sch_42497,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__42501 = seq__42456;
var G__42502 = chunk__42457;
var G__42503 = count__42458;
var G__42504 = (i__42459 + (1));
seq__42456 = G__42501;
chunk__42457 = G__42502;
count__42458 = G__42503;
i__42459 = G__42504;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42456);
if(temp__5720__auto__){
var seq__42456__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42456__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42456__$1);
var G__42505 = cljs.core.chunk_rest(seq__42456__$1);
var G__42506 = c__4550__auto__;
var G__42507 = cljs.core.count(c__4550__auto__);
var G__42508 = (0);
seq__42456 = G__42505;
chunk__42457 = G__42506;
count__42458 = G__42507;
i__42459 = G__42508;
continue;
} else {
var vec__42487 = cljs.core.first(seq__42456__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42487,(0),null);
var vec__42490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42487,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42490,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42490,(1),null);
var temp__5720__auto___42509__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___42509__$1)){
var sch_42510 = temp__5720__auto___42509__$1;
var G__42493_42511 = cljs.core.cst$kw$ws;
var G__42494_42512 = uid;
var G__42495_42513 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__42493_42511,G__42494_42512,G__42495_42513) : upd_conn_BANG_.call(null,G__42493_42511,G__42494_42512,G__42495_42513));

taoensso.sente.interfaces.sch_send_BANG_(sch_42510,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__42514 = cljs.core.next(seq__42456__$1);
var G__42515 = null;
var G__42516 = (0);
var G__42517 = (0);
seq__42456 = G__42514;
chunk__42457 = G__42515;
count__42458 = G__42516;
i__42459 = G__42517;
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",696,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1568285471);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__38887__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_42564){
var state_val_42565 = (state_42564[(1)]);
if((state_val_42565 === (7))){
var inst_42526 = (state_42564[(7)]);
var inst_42520 = (state_42564[(8)]);
var inst_42519 = (state_42564[(9)]);
var inst_42536 = (function (){var n = inst_42519;
var client_ids_satisfied = inst_42520;
var _QMARK_pulled = inst_42526;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_42526,inst_42520,inst_42519,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__42535){
var vec__42566 = p__42535;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42566,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42566,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_42526,inst_42520,inst_42519,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_42537 = cljs.core.PersistentHashSet.EMPTY;
var inst_42538 = cljs.core.reduce_kv(inst_42536,inst_42537,inst_42526);
var state_42564__$1 = state_42564;
var statearr_42569_42601 = state_42564__$1;
(statearr_42569_42601[(2)] = inst_42538);

(statearr_42569_42601[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (1))){
var inst_42518 = cljs.core.PersistentHashSet.EMPTY;
var inst_42519 = (0);
var inst_42520 = inst_42518;
var state_42564__$1 = (function (){var statearr_42570 = state_42564;
(statearr_42570[(8)] = inst_42520);

(statearr_42570[(9)] = inst_42519);

return statearr_42570;
})();
var statearr_42571_42602 = state_42564__$1;
(statearr_42571_42602[(2)] = null);

(statearr_42571_42602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (4))){
var state_42564__$1 = state_42564;
var statearr_42572_42603 = state_42564__$1;
(statearr_42572_42603[(2)] = true);

(statearr_42572_42603[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (15))){
var inst_42557 = (state_42564[(2)]);
var state_42564__$1 = state_42564;
var statearr_42573_42604 = state_42564__$1;
(statearr_42573_42604[(2)] = inst_42557);

(statearr_42573_42604[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (13))){
var inst_42543 = (state_42564[(10)]);
var inst_42548 = cljs.core.rand_int(inst_42543);
var inst_42549 = (inst_42543 + inst_42548);
var inst_42550 = cljs.core.async.timeout(inst_42549);
var state_42564__$1 = state_42564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42564__$1,(16),inst_42550);
} else {
if((state_val_42565 === (6))){
var inst_42526 = (state_42564[(7)]);
var inst_42533 = (state_42564[(2)]);
var state_42564__$1 = (function (){var statearr_42574 = state_42564;
(statearr_42574[(11)] = inst_42533);

return statearr_42574;
})();
if(cljs.core.truth_(inst_42526)){
var statearr_42575_42605 = state_42564__$1;
(statearr_42575_42605[(1)] = (7));

} else {
var statearr_42576_42606 = state_42564__$1;
(statearr_42576_42606[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (3))){
var inst_42562 = (state_42564[(2)]);
var state_42564__$1 = state_42564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42564__$1,inst_42562);
} else {
if((state_val_42565 === (12))){
var inst_42560 = (state_42564[(2)]);
var state_42564__$1 = state_42564;
var statearr_42577_42607 = state_42564__$1;
(statearr_42577_42607[(2)] = inst_42560);

(statearr_42577_42607[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (2))){
var inst_42526 = (state_42564[(7)]);
var inst_42520 = (state_42564[(8)]);
var inst_42519 = (state_42564[(9)]);
var inst_42522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42523 = [cljs.core.cst$kw$ajax,uid];
var inst_42524 = (new cljs.core.PersistentVector(null,2,(5),inst_42522,inst_42523,null));
var inst_42525 = (function (){var n = inst_42519;
var client_ids_satisfied = inst_42520;
return ((function (n,client_ids_satisfied,inst_42526,inst_42520,inst_42519,inst_42522,inst_42523,inst_42524,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_42526,inst_42520,inst_42519,inst_42522,inst_42523,inst_42524,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__42578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42578,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42578,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_42526,inst_42520,inst_42519,inst_42522,inst_42523,inst_42524,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_42526,inst_42520,inst_42519,inst_42522,inst_42523,inst_42524,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_42526__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_42524,inst_42525);
var inst_42527 = (function (){var n = inst_42519;
var client_ids_satisfied = inst_42520;
var _QMARK_pulled = inst_42526__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_42526,inst_42520,inst_42519,inst_42522,inst_42523,inst_42524,inst_42525,inst_42526__$1,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__42582 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__42582.cljs$core$IFn$_invoke$arity$1 ? fexpr__42582.cljs$core$IFn$_invoke$arity$1(x) : fexpr__42582.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_42526,inst_42520,inst_42519,inst_42522,inst_42523,inst_42524,inst_42525,inst_42526__$1,state_val_42565,c__38887__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_42528 = (inst_42527.cljs$core$IFn$_invoke$arity$1 ? inst_42527.cljs$core$IFn$_invoke$arity$1(inst_42526__$1) : inst_42527.call(null,inst_42526__$1));
var state_42564__$1 = (function (){var statearr_42583 = state_42564;
(statearr_42583[(7)] = inst_42526__$1);

return statearr_42583;
})();
if(cljs.core.truth_(inst_42528)){
var statearr_42584_42608 = state_42564__$1;
(statearr_42584_42608[(1)] = (4));

} else {
var statearr_42585_42609 = state_42564__$1;
(statearr_42585_42609[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (11))){
var state_42564__$1 = state_42564;
var statearr_42586_42610 = state_42564__$1;
(statearr_42586_42610[(2)] = null);

(statearr_42586_42610[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (9))){
var inst_42543 = (state_42564[(10)]);
var inst_42520 = (state_42564[(8)]);
var inst_42519 = (state_42564[(9)]);
var inst_42541 = (state_42564[(2)]);
var inst_42542 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_42520,inst_42541);
var inst_42543__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_42519);
var state_42564__$1 = (function (){var statearr_42587 = state_42564;
(statearr_42587[(12)] = inst_42542);

(statearr_42587[(10)] = inst_42543__$1);

return statearr_42587;
})();
if(cljs.core.truth_(inst_42543__$1)){
var statearr_42588_42611 = state_42564__$1;
(statearr_42588_42611[(1)] = (10));

} else {
var statearr_42589_42612 = state_42564__$1;
(statearr_42589_42612[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (5))){
var inst_42526 = (state_42564[(7)]);
var inst_42531 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",723,"([:or nil? map?] ?pulled)",inst_42526,null,null);
var state_42564__$1 = state_42564;
var statearr_42590_42613 = state_42564__$1;
(statearr_42590_42613[(2)] = inst_42531);

(statearr_42590_42613[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (14))){
var state_42564__$1 = state_42564;
var statearr_42591_42614 = state_42564__$1;
(statearr_42591_42614[(2)] = null);

(statearr_42591_42614[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (16))){
var inst_42542 = (state_42564[(12)]);
var inst_42519 = (state_42564[(9)]);
var inst_42552 = (state_42564[(2)]);
var inst_42553 = (inst_42519 + (1));
var inst_42519__$1 = inst_42553;
var inst_42520 = inst_42542;
var state_42564__$1 = (function (){var statearr_42592 = state_42564;
(statearr_42592[(8)] = inst_42520);

(statearr_42592[(9)] = inst_42519__$1);

(statearr_42592[(13)] = inst_42552);

return statearr_42592;
})();
var statearr_42593_42615 = state_42564__$1;
(statearr_42593_42615[(2)] = null);

(statearr_42593_42615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (10))){
var inst_42542 = (state_42564[(12)]);
var inst_42545 = cljs.core.complement(inst_42542);
var inst_42546 = taoensso.encore.rsome(inst_42545,client_ids_unsatisfied);
var state_42564__$1 = state_42564;
if(cljs.core.truth_(inst_42546)){
var statearr_42594_42616 = state_42564__$1;
(statearr_42594_42616[(1)] = (13));

} else {
var statearr_42595_42617 = state_42564__$1;
(statearr_42595_42617[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42565 === (8))){
var state_42564__$1 = state_42564;
var statearr_42596_42618 = state_42564__$1;
(statearr_42596_42618[(2)] = null);

(statearr_42596_42618[(1)] = (9));


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
});})(c__38887__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__38780__auto__,c__38887__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto____0 = (function (){
var statearr_42597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42597[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto__);

(statearr_42597[(1)] = (1));

return statearr_42597;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto____1 = (function (state_42564){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42564);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42598){if((e42598 instanceof Object)){
var ex__38784__auto__ = e42598;
var statearr_42599_42619 = state_42564;
(statearr_42599_42619[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42564);

return cljs.core.cst$kw$recur;
} else {
throw e42598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42620 = state_42564;
state_42564 = G__42620;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto__ = function(state_42564){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto____1.call(this,state_42564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__38889__auto__ = (function (){var statearr_42600 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42600[(6)] = c__38887__auto__);

return statearr_42600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__38887__auto__;
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
var G__42622 = arguments.length;
switch (G__42622) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",773,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,91908427);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",778,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-920045419);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__42624_42625 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__42624_42625) : _QMARK_cb_fn.call(null,G__42624_42625));
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
var vec__42626 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42626,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42626,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_42634 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42629){if((e42629 instanceof Error)){
var e = e42629;
return e;
} else {
throw e42629;

}
}})();
if((e_42634 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"(map? state)",state,e_42634,null);
}

var e_42635 = (function (){try{if((function (){var fexpr__42632 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__42633 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42633) : taoensso.truss.impl.set_STAR_.call(null,G__42633));
})(),x);
});
return fexpr__42632(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42630){if((e42630 instanceof Error)){
var e = e42630;
return e;
} else {
throw e42630;

}
}})();
if((e_42635 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",826,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_42635,null);
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
var e_42640 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42636){if((e42636 instanceof Error)){
var e = e42636;
return e;
} else {
throw e42636;

}
}})();
if((e_42640 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",847,"(enc/chan? ?cb)",_QMARK_cb,e_42640,null);
}

taoensso.sente.assert_event(ev);

var vec__42637 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42637,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42637,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__42637,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
;})(vec__42637,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",858,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,678073220);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",859,"(vector? clj)",clj,null,null));
var seq__42641 = cljs.core.seq(buffered_evs);
var chunk__42642 = null;
var count__42643 = (0);
var i__42644 = (0);
while(true){
if((i__42644 < count__42643)){
var ev = chunk__42642.cljs$core$IIndexed$_nth$arity$2(null,i__42644);
taoensso.sente.assert_event(ev);

var vec__42651_42657 = ev;
var id_42658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42651_42657,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_42658),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__42659 = seq__42641;
var G__42660 = chunk__42642;
var G__42661 = count__42643;
var G__42662 = (i__42644 + (1));
seq__42641 = G__42659;
chunk__42642 = G__42660;
count__42643 = G__42661;
i__42644 = G__42662;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42641);
if(temp__5720__auto__){
var seq__42641__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42641__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42641__$1);
var G__42663 = cljs.core.chunk_rest(seq__42641__$1);
var G__42664 = c__4550__auto__;
var G__42665 = cljs.core.count(c__4550__auto__);
var G__42666 = (0);
seq__42641 = G__42663;
chunk__42642 = G__42664;
count__42643 = G__42665;
i__42644 = G__42666;
continue;
} else {
var ev = cljs.core.first(seq__42641__$1);
taoensso.sente.assert_event(ev);

var vec__42654_42667 = ev;
var id_42668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42654_42667,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_42668),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__42669 = cljs.core.next(seq__42641__$1);
var G__42670 = null;
var G__42671 = (0);
var G__42672 = (0);
seq__42641 = G__42669;
chunk__42642 = G__42670;
count__42643 = G__42671;
i__42644 = G__42672;
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
var vec__42676 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42676,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__4120__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_42693 = (function (){try{if((function (){var fexpr__42682 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__42683 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42683) : taoensso.truss.impl.set_STAR_.call(null,G__42683));
})(),x);
});
return fexpr__42682(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42680){if((e42680 instanceof Error)){
var e = e42680;
return e;
} else {
throw e42680;

}
}})();
if((e_42693 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_42693,null);
}

var e_42694 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42684){if((e42684 instanceof Error)){
var e = e42684;
return e;
} else {
throw e42684;

}
}})();
if((e_42694 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",874,"(handshake? clj)",clj,e_42694,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",875,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-962325109);

var vec__42685 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42685,(0),null);
var vec__42688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42685,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42688,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42688,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42688,(2),null);
var map__42691 = chsk;
var map__42691__$1 = (((((!((map__42691 == null))))?(((((map__42691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42691):map__42691);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42691__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42691__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",894,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42685,_,vec__42688,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42691,map__42691__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__42685,_,vec__42688,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42691,map__42691__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1866760212);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__42685,_,vec__42688,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42691,map__42691__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__42679_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42679_SHARP_,new_state], 0));
});})(vec__42685,_,vec__42688,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__42691,map__42691__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
}catch (e42695){var e = e42695;
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k42702,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__42706 = k42702;
var G__42706__$1 = (((G__42706 instanceof cljs.core.Keyword))?G__42706.fqn:null);
switch (G__42706__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42702,else__4388__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__42707){
var vec__42708 = p__42707;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42708,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42708,(1),null);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42701){
var self__ = this;
var G__42701__$1 = this;
return (new cljs.core.RecordIter((0),G__42701__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__42711 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__42711(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42703,other42704){
var self__ = this;
var this42703__$1 = this;
return (((!((other42704 == null)))) && ((this42703__$1.constructor === other42704.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.client_id,other42704.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.chs,other42704.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.params,other42704.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.packer,other42704.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.url,other42704.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.ws_kalive_ms,other42704.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.state_,other42704.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.instance_handle_,other42704.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.retry_count_,other42704.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.ever_opened_QMARK__,other42704.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.backoff_ms_fn,other42704.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.cbs_waiting_,other42704.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.socket_,other42704.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.udt_last_comms_,other42704.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42703__$1.__extmap,other42704.__extmap)));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__42701){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__42712 = cljs.core.keyword_identical_QMARK_;
var expr__42713 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__42715 = cljs.core.cst$kw$client_DASH_id;
var G__42716 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42715,G__42716) : pred__42712.call(null,G__42715,G__42716));
})())){
return (new taoensso.sente.ChWebSocket(G__42701,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42717 = cljs.core.cst$kw$chs;
var G__42718 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42717,G__42718) : pred__42712.call(null,G__42717,G__42718));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__42701,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42719 = cljs.core.cst$kw$params;
var G__42720 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42719,G__42720) : pred__42712.call(null,G__42719,G__42720));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__42701,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42721 = cljs.core.cst$kw$packer;
var G__42722 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42721,G__42722) : pred__42712.call(null,G__42721,G__42722));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__42701,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42723 = cljs.core.cst$kw$url;
var G__42724 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42723,G__42724) : pred__42712.call(null,G__42723,G__42724));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__42701,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42725 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__42726 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42725,G__42726) : pred__42712.call(null,G__42725,G__42726));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__42701,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42727 = cljs.core.cst$kw$state_;
var G__42728 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42727,G__42728) : pred__42712.call(null,G__42727,G__42728));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__42701,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42729 = cljs.core.cst$kw$instance_DASH_handle_;
var G__42730 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42729,G__42730) : pred__42712.call(null,G__42729,G__42730));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__42701,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42731 = cljs.core.cst$kw$retry_DASH_count_;
var G__42732 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42731,G__42732) : pred__42712.call(null,G__42731,G__42732));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__42701,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42733 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__42734 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42733,G__42734) : pred__42712.call(null,G__42733,G__42734));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__42701,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42735 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__42736 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42735,G__42736) : pred__42712.call(null,G__42735,G__42736));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__42701,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42737 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__42738 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42737,G__42738) : pred__42712.call(null,G__42737,G__42738));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__42701,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42739 = cljs.core.cst$kw$socket_;
var G__42740 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42739,G__42740) : pred__42712.call(null,G__42739,G__42740));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__42701,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42741 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__42742 = expr__42713;
return (pred__42712.cljs$core$IFn$_invoke$arity$2 ? pred__42712.cljs$core$IFn$_invoke$arity$2(G__42741,G__42742) : pred__42712.call(null,G__42741,G__42742));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__42701,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__42701),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__42701){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__42701,self__.__extmap,self__.__hash));
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
return (function (p1__42696_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42696_SHARP_,reason);
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
var map__42743 = opts;
var map__42743__$1 = (((((!((map__42743 == null))))?(((((map__42743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42743):map__42743);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42743__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42743__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42743__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5720__auto___42825 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___42825)){
var cb_uuid_42826 = temp__5720__auto___42825;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_42826], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42745){if((e42745 instanceof Error)){
var e = e42745;
return e;
} else {
throw e42745;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",964,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5720__auto___42827__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5720__auto___42827__$1)){
var timeout_ms_42828 = temp__5720__auto___42827__$1;
var c__38887__auto___42829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___42829,timeout_ms_42828,temp__5720__auto___42827__$1,cb_uuid_42826,temp__5720__auto___42825,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___42829,timeout_ms_42828,temp__5720__auto___42827__$1,cb_uuid_42826,temp__5720__auto___42825,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_42756){
var state_val_42757 = (state_42756[(1)]);
if((state_val_42757 === (1))){
var inst_42746 = cljs.core.async.timeout(timeout_ms_42828);
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42756__$1,(2),inst_42746);
} else {
if((state_val_42757 === (2))){
var inst_42749 = (state_42756[(7)]);
var inst_42748 = (state_42756[(2)]);
var inst_42749__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_42756__$1 = (function (){var statearr_42758 = state_42756;
(statearr_42758[(7)] = inst_42749__$1);

(statearr_42758[(8)] = inst_42748);

return statearr_42758;
})();
if(cljs.core.truth_(inst_42749__$1)){
var statearr_42759_42830 = state_42756__$1;
(statearr_42759_42830[(1)] = (3));

} else {
var statearr_42760_42831 = state_42756__$1;
(statearr_42760_42831[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42757 === (3))){
var inst_42749 = (state_42756[(7)]);
var inst_42751 = (function (){var G__42761 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_42749.cljs$core$IFn$_invoke$arity$1 ? inst_42749.cljs$core$IFn$_invoke$arity$1(G__42761) : inst_42749.call(null,G__42761));
})();
var state_42756__$1 = state_42756;
var statearr_42762_42832 = state_42756__$1;
(statearr_42762_42832[(2)] = inst_42751);

(statearr_42762_42832[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42757 === (4))){
var state_42756__$1 = state_42756;
var statearr_42763_42833 = state_42756__$1;
(statearr_42763_42833[(2)] = null);

(statearr_42763_42833[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42757 === (5))){
var inst_42754 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42756__$1,inst_42754);
} else {
return null;
}
}
}
}
}
});})(c__38887__auto___42829,timeout_ms_42828,temp__5720__auto___42827__$1,cb_uuid_42826,temp__5720__auto___42825,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__38780__auto__,c__38887__auto___42829,timeout_ms_42828,temp__5720__auto___42827__$1,cb_uuid_42826,temp__5720__auto___42825,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42764 = [null,null,null,null,null,null,null,null,null];
(statearr_42764[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42764[(1)] = (1));

return statearr_42764;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42756){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42756);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42765){if((e42765 instanceof Object)){
var ex__38784__auto__ = e42765;
var statearr_42766_42834 = state_42756;
(statearr_42766_42834[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42756);

return cljs.core.cst$kw$recur;
} else {
throw e42765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42835 = state_42756;
state_42756 = G__42835;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42756){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___42829,timeout_ms_42828,temp__5720__auto___42827__$1,cb_uuid_42826,temp__5720__auto___42825,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__38889__auto__ = (function (){var statearr_42767 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42767[(6)] = c__38887__auto___42829);

return statearr_42767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___42829,timeout_ms_42828,temp__5720__auto___42827__$1,cb_uuid_42826,temp__5720__auto___42825,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e42768){var e = e42768;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init6643717838126997613.clj",976,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__42743,map__42743__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-531110110);

var temp__5720__auto___42836 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___42836)){
var cb_uuid_42837 = temp__5720__auto___42836;
var cb_fn_STAR__42838 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_42837);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42769){if((e42769 instanceof Error)){
var e__$1 = e42769;
return e__$1;
} else {
throw e42769;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",979,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__42770_42839 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__42838.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__42838.cljs$core$IFn$_invoke$arity$1(G__42770_42839) : cb_fn_STAR__42838.call(null,G__42770_42839));
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1001,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,2112517818);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42697_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42697_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e42771){var e = e42771;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1015,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-33153420);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__42772 = _QMARK_socket;
(G__42772["onerror"] = ((function (G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1025,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e42773){var _ = e42773;
return ws_ev;
}})()], null);
});})(G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,75093468);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42698_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42698_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
});})(G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__42772["onmessage"] = ((function (G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__42774 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(1),null);
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
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1061,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__42774,clj,_QMARK_cb_uuid,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__42774,clj,_QMARK_cb_uuid,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1548894413);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__42772["onclose"] = ((function (G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1083,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1902472756);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42699_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42699_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__42700_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__42700_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__42772,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return G__42772;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var temp__5720__auto___42840__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5720__auto___42840__$1)){
var ms_42841 = temp__5720__auto___42840__$1;
var c__38887__auto___42842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___42842,ms_42841,temp__5720__auto___42840__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___42842,ms_42841,temp__5720__auto___42840__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (state_42804){
var state_val_42805 = (state_42804[(1)]);
if((state_val_42805 === (7))){
var inst_42800 = (state_42804[(2)]);
var state_42804__$1 = state_42804;
var statearr_42806_42843 = state_42804__$1;
(statearr_42806_42843[(2)] = inst_42800);

(statearr_42806_42843[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42805 === (1))){
var state_42804__$1 = state_42804;
var statearr_42807_42844 = state_42804__$1;
(statearr_42807_42844[(2)] = null);

(statearr_42807_42844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42805 === (4))){
var inst_42781 = (state_42804[(2)]);
var inst_42782 = have_handle_QMARK_();
var state_42804__$1 = (function (){var statearr_42808 = state_42804;
(statearr_42808[(7)] = inst_42781);

return statearr_42808;
})();
if(inst_42782){
var statearr_42809_42845 = state_42804__$1;
(statearr_42809_42845[(1)] = (5));

} else {
var statearr_42810_42846 = state_42804__$1;
(statearr_42810_42846[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42805 === (6))){
var state_42804__$1 = state_42804;
var statearr_42811_42847 = state_42804__$1;
(statearr_42811_42847[(2)] = null);

(statearr_42811_42847[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42805 === (3))){
var inst_42802 = (state_42804[(2)]);
var state_42804__$1 = state_42804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42804__$1,inst_42802);
} else {
if((state_val_42805 === (2))){
var inst_42778 = cljs.core.deref(self__.udt_last_comms_);
var inst_42779 = cljs.core.async.timeout(ms_42841);
var state_42804__$1 = (function (){var statearr_42812 = state_42804;
(statearr_42812[(8)] = inst_42778);

return statearr_42812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42804__$1,(4),inst_42779);
} else {
if((state_val_42805 === (9))){
var state_42804__$1 = state_42804;
var statearr_42813_42848 = state_42804__$1;
(statearr_42813_42848[(2)] = null);

(statearr_42813_42848[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42805 === (5))){
var inst_42778 = (state_42804[(8)]);
var inst_42784 = cljs.core.deref(self__.udt_last_comms_);
var inst_42785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42778,inst_42784);
var state_42804__$1 = state_42804;
if(inst_42785){
var statearr_42814_42849 = state_42804__$1;
(statearr_42814_42849[(1)] = (8));

} else {
var statearr_42815_42850 = state_42804__$1;
(statearr_42815_42850[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42805 === (10))){
var inst_42796 = (state_42804[(2)]);
var state_42804__$1 = (function (){var statearr_42816 = state_42804;
(statearr_42816[(9)] = inst_42796);

return statearr_42816;
})();
var statearr_42817_42851 = state_42804__$1;
(statearr_42817_42851[(2)] = null);

(statearr_42817_42851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42805 === (8))){
var inst_42787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42788 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_42789 = (new cljs.core.PersistentVector(null,1,(5),inst_42787,inst_42788,null));
var inst_42790 = [cljs.core.cst$kw$flush_QMARK_];
var inst_42791 = [true];
var inst_42792 = cljs.core.PersistentHashMap.fromArrays(inst_42790,inst_42791);
var inst_42793 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_42789,inst_42792);
var state_42804__$1 = state_42804;
var statearr_42818_42852 = state_42804__$1;
(statearr_42818_42852[(2)] = inst_42793);

(statearr_42818_42852[(1)] = (10));


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
});})(c__38887__auto___42842,ms_42841,temp__5720__auto___42840__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
;
return ((function (switch__38780__auto__,c__38887__auto___42842,ms_42841,temp__5720__auto___42840__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__38781__auto__ = null;
var taoensso$sente$state_machine__38781__auto____0 = (function (){
var statearr_42819 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42819[(0)] = taoensso$sente$state_machine__38781__auto__);

(statearr_42819[(1)] = (1));

return statearr_42819;
});
var taoensso$sente$state_machine__38781__auto____1 = (function (state_42804){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_42804);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e42820){if((e42820 instanceof Object)){
var ex__38784__auto__ = e42820;
var statearr_42821_42853 = state_42804;
(statearr_42821_42853[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42804);

return cljs.core.cst$kw$recur;
} else {
throw e42820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__42854 = state_42804;
state_42804 = G__42854;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$state_machine__38781__auto__ = function(state_42804){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__38781__auto____1.call(this,state_42804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__38781__auto____0;
taoensso$sente$state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__38781__auto____1;
return taoensso$sente$state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___42842,ms_42841,temp__5720__auto___42840__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
})();
var state__38889__auto__ = (function (){var statearr_42822 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_42822[(6)] = c__38887__auto___42842);

return statearr_42822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___42842,ms_42841,temp__5720__auto___42840__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
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
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__42705){
var extmap__4424__auto__ = (function (){var G__42823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42705,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0));
if(cljs.core.record_QMARK_(G__42705)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42823);
} else {
return G__42823;
}
})();
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__42705),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__42705),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k42862,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__42866 = k42862;
var G__42866__$1 = (((G__42866 instanceof cljs.core.Keyword))?G__42866.fqn:null);
switch (G__42866__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42862,else__4388__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__42867){
var vec__42868 = p__42867;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868,(1),null);
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42861){
var self__ = this;
var G__42861__$1 = this;
return (new cljs.core.RecordIter((0),G__42861__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__42871 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__42871(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42863,other42864){
var self__ = this;
var this42863__$1 = this;
return (((!((other42864 == null)))) && ((this42863__$1.constructor === other42864.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.client_id,other42864.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.chs,other42864.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.params,other42864.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.packer,other42864.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.url,other42864.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.state_,other42864.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.instance_handle_,other42864.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.ever_opened_QMARK__,other42864.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.backoff_ms_fn,other42864.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.ajax_opts,other42864.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.curr_xhr_,other42864.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42863__$1.__extmap,other42864.__extmap)));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__42861){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__42872 = cljs.core.keyword_identical_QMARK_;
var expr__42873 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__42875 = cljs.core.cst$kw$client_DASH_id;
var G__42876 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42875,G__42876) : pred__42872.call(null,G__42875,G__42876));
})())){
return (new taoensso.sente.ChAjaxSocket(G__42861,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42877 = cljs.core.cst$kw$chs;
var G__42878 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42877,G__42878) : pred__42872.call(null,G__42877,G__42878));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__42861,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42879 = cljs.core.cst$kw$params;
var G__42880 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42879,G__42880) : pred__42872.call(null,G__42879,G__42880));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__42861,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42881 = cljs.core.cst$kw$packer;
var G__42882 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42881,G__42882) : pred__42872.call(null,G__42881,G__42882));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__42861,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42883 = cljs.core.cst$kw$url;
var G__42884 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42883,G__42884) : pred__42872.call(null,G__42883,G__42884));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__42861,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42885 = cljs.core.cst$kw$state_;
var G__42886 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42885,G__42886) : pred__42872.call(null,G__42885,G__42886));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__42861,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42887 = cljs.core.cst$kw$instance_DASH_handle_;
var G__42888 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42887,G__42888) : pred__42872.call(null,G__42887,G__42888));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__42861,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42889 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__42890 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42889,G__42890) : pred__42872.call(null,G__42889,G__42890));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__42861,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42891 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__42892 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42891,G__42892) : pred__42872.call(null,G__42891,G__42892));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__42861,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42893 = cljs.core.cst$kw$ajax_DASH_opts;
var G__42894 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42893,G__42894) : pred__42872.call(null,G__42893,G__42894));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__42861,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42895 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__42896 = expr__42873;
return (pred__42872.cljs$core$IFn$_invoke$arity$2 ? pred__42872.cljs$core$IFn$_invoke$arity$2(G__42895,G__42896) : pred__42872.call(null,G__42895,G__42896));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__42861,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__42861),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__42861){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__42861,self__.__extmap,self__.__hash));
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
return (function (p1__42855_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42855_SHARP_,reason);
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
var map__42897 = opts;
var map__42897__$1 = (((((!((map__42897 == null))))?(((((map__42897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42897):map__42897);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__42899_42921 = self__.url;
var G__42900_42922 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = _QMARK_timeout_ms;
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
var G__42901_42923 = ((function (G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__42902){
var map__42903 = p__42902;
var map__42903__$1 = (((((!((map__42903 == null))))?(((((map__42903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42903):map__42903);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42903__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42903__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__42905 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__42905) : _QMARK_cb_fn.call(null,G__42905));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__42903,map__42903__$1,_QMARK_error,_QMARK_content,G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__42856_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42856_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__42903,map__42903__$1,_QMARK_error,_QMARK_content,G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__42906 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__42906) : _QMARK_cb_fn.call(null,G__42906));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__42907 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42907,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42907,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1203,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__42907,resp_clj,___$1,map__42903,map__42903__$1,_QMARK_error,_QMARK_content,G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__42907,resp_clj,___$1,map__42903,map__42903__$1,_QMARK_error,_QMARK_content,G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1909282008);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__42907,resp_clj,___$1,map__42903,map__42903__$1,_QMARK_error,_QMARK_content,G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__42857_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42857_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__42907,resp_clj,___$1,map__42903,map__42903__$1,_QMARK_error,_QMARK_content,G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__42899_42921,G__42900_42922,csrf_token,map__42897,map__42897__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__42899_42921,G__42900_42922,G__42901_42923) : taoensso.sente.ajax_lite.call(null,G__42899_42921,G__42900_42922,G__42901_42923));

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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1213,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-2072301825);

if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1804990282);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__42858_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42858_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__42910 = self__.url;
var G__42911 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__42912 = ((function (G__42910,G__42911,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__42913){
var map__42914 = p__42913;
var map__42914__$1 = (((((!((map__42914 == null))))?(((((map__42914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42914):map__42914);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42914__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42914__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__42914,map__42914__$1,_QMARK_error,_QMARK_content,G__42910,G__42911,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__42859_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__42859_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__42914,map__42914__$1,_QMARK_error,_QMARK_content,G__42910,G__42911,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__42916 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42916,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__42916,clj,handshake_QMARK_,map__42914,map__42914__$1,_QMARK_error,_QMARK_content,G__42910,G__42911,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__42860_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42860_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__42916,clj,handshake_QMARK_,map__42914,map__42914__$1,_QMARK_error,_QMARK_content,G__42910,G__42911,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
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
});})(G__42910,G__42911,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__42910,G__42911,G__42912) : taoensso.sente.ajax_lite.call(null,G__42910,G__42911,G__42912));
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
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__42865){
var extmap__4424__auto__ = (function (){var G__42919 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42865,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0));
if(cljs.core.record_QMARK_(G__42865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42919);
} else {
return G__42919;
}
})();
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__42865),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__42865),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k42925,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__42929 = k42925;
var G__42929__$1 = (((G__42929 instanceof cljs.core.Keyword))?G__42929.fqn:null);
switch (G__42929__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42925,else__4388__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__42930){
var vec__42931 = p__42930;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42931,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42931,(1),null);
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42924){
var self__ = this;
var G__42924__$1 = this;
return (new cljs.core.RecordIter((0),G__42924__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__42934 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__42934(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42926,other42927){
var self__ = this;
var this42926__$1 = this;
return (((!((other42927 == null)))) && ((this42926__$1.constructor === other42927.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42926__$1.ws_chsk_opts,other42927.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42926__$1.ajax_chsk_opts,other42927.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42926__$1.state_,other42927.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42926__$1.impl_,other42927.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42926__$1.__extmap,other42927.__extmap)));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__42924){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__42935 = cljs.core.keyword_identical_QMARK_;
var expr__42936 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__42938 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__42939 = expr__42936;
return (pred__42935.cljs$core$IFn$_invoke$arity$2 ? pred__42935.cljs$core$IFn$_invoke$arity$2(G__42938,G__42939) : pred__42935.call(null,G__42938,G__42939));
})())){
return (new taoensso.sente.ChAutoSocket(G__42924,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42940 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__42941 = expr__42936;
return (pred__42935.cljs$core$IFn$_invoke$arity$2 ? pred__42935.cljs$core$IFn$_invoke$arity$2(G__42940,G__42941) : pred__42935.call(null,G__42940,G__42941));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__42924,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42942 = cljs.core.cst$kw$state_;
var G__42943 = expr__42936;
return (pred__42935.cljs$core$IFn$_invoke$arity$2 ? pred__42935.cljs$core$IFn$_invoke$arity$2(G__42942,G__42943) : pred__42935.call(null,G__42942,G__42943));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__42924,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42944 = cljs.core.cst$kw$impl_;
var G__42945 = expr__42936;
return (pred__42935.cljs$core$IFn$_invoke$arity$2 ? pred__42935.cljs$core$IFn$_invoke$arity$2(G__42944,G__42945) : pred__42935.call(null,G__42944,G__42945));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__42924,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__42924),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__42924){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__42924,self__.__extmap,self__.__hash));
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
var map__42946 = opts;
var map__42946__$1 = (((((!((map__42946 == null))))?(((((map__42946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42946):map__42946);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42946__$1,cljs.core.cst$kw$cb);
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
var downgraded_QMARK___42950 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___42950,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___42950,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1349,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___42950,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___42950,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1364439988);

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
});})(downgraded_QMARK___42950,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
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
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__42928){
var extmap__4424__auto__ = (function (){var G__42948 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42928,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0));
if(cljs.core.record_QMARK_(G__42928)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42948);
} else {
return G__42948;
}
})();
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__42928),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__42928),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__42928),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__42928),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$impl_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__42951 = protocol;
var G__42951__$1 = (((G__42951 instanceof cljs.core.Keyword))?G__42951.fqn:null);
switch (G__42951__$1) {
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
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__42954 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__42955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42955) : taoensso.truss.impl.set_STAR_.call(null,G__42955));
})(),x);
});})(protocol__$1))
;
return fexpr__42954(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42952){if((e42952 instanceof Error)){
var e = e42952;
return e;
} else {
throw e42952;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1369,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__42956 = type;
var G__42956__$1 = (((G__42956 instanceof cljs.core.Keyword))?G__42956.fqn:null);
switch (G__42956__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__42957 = protocol__$2;
switch (G__42957) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42957)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42956__$1)].join('')));

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
var len__4730__auto___42987 = arguments.length;
var i__4731__auto___42988 = (0);
while(true){
if((i__4731__auto___42988 < len__4730__auto___42987)){
args__4736__auto__.push((arguments[i__4731__auto___42988]));

var G__42989 = (i__4731__auto___42988 + (1));
i__4731__auto___42988 = G__42989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__42963){
var vec__42964 = p__42963;
var map__42967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42964,(0),null);
var map__42967__$1 = (((((!((map__42967 == null))))?(((((map__42967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42967):map__42967);
var opts = map__42967__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42967__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42967__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42967__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__4131__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42967__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42967__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42967__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42967__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42967__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42967__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42967__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42967__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42964,(1),null);
var e_42990 = (function (){try{if((function (){var fexpr__42971 = ((function (vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__42972 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__42972) : taoensso.truss.impl.set_STAR_.call(null,G__42972));
})(),x);
});})(vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__42971(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42969){if((e42969 instanceof Error)){
var e = e42969;
return e;
} else {
throw e42969;

}
}})();
if((e_42990 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"([:in #{:ws :ajax :auto}] type)",type,e_42990,null);
}

var e_42991 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e42973){if((e42973 instanceof Error)){
var e = e42973;
return e;
} else {
throw e42973;

}
}})();
if((e_42991 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1412,"(enc/nblank-str? client-id)",client_id,e_42991,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1414,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1057406320);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1415,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1936113440);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__42974 = (function (){var win_loc = taoensso.encore.get_win_loc();
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42977 = path__$1;
var G__42978 = win_loc;
var G__42979 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42977,G__42978,G__42979) : f.call(null,G__42977,G__42978,G__42979));
})(),(function (){var G__42980 = path__$1;
var G__42981 = win_loc;
var G__42982 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42980,G__42981,G__42982) : f.call(null,G__42980,G__42981,G__42982));
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
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42974,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42974,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__42974,ws_url,ajax_url,vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__42974,ws_url,ajax_url,vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__42983 = type;
var G__42983__$1 = (((G__42983 instanceof cljs.core.Keyword))?G__42983.fqn:null);
switch (G__42983__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42983__$1)].join('')));

}
})());
var temp__5718__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5718__auto__)){
var chsk = temp__5718__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__42974,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__42984 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42984,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42984,(1),null);
var ev__$1 = vec__42984;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__42974,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1503,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,packer__$1,vec__42974,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5718__auto__,packer__$1,vec__42974,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__42964,map__42967,map__42967__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,24208755);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq42961){
var G__42962 = cljs.core.first(seq42961);
var seq42961__$1 = cljs.core.next(seq42961);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42962,seq42961__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__42993 = opts;
var map__42993__$1 = (((((!((map__42993 == null))))?(((((map__42993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42993):map__42993);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42993__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42993__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42993__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__38887__auto___43073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__38888__auto__ = (function (){var switch__38780__auto__ = ((function (c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_43042){
var state_val_43043 = (state_43042[(1)]);
if((state_val_43043 === (7))){
var inst_43038 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
var statearr_43044_43074 = state_43042__$1;
(statearr_43044_43074[(2)] = inst_43038);

(statearr_43044_43074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (1))){
var state_43042__$1 = state_43042;
var statearr_43045_43075 = state_43042__$1;
(statearr_43045_43075[(2)] = null);

(statearr_43045_43075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (4))){
var inst_43004 = (state_43042[(7)]);
var inst_43008 = (state_43042[(8)]);
var inst_43003 = (state_43042[(9)]);
var inst_43005 = (state_43042[(10)]);
var inst_43003__$1 = (state_43042[(2)]);
var inst_43004__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43003__$1,(0),null);
var inst_43005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43003__$1,(1),null);
var inst_43006 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43005__$1,ch_ctrl);
var inst_43007 = (inst_43004__$1 == null);
var inst_43008__$1 = ((inst_43006) || (inst_43007));
var state_43042__$1 = (function (){var statearr_43046 = state_43042;
(statearr_43046[(7)] = inst_43004__$1);

(statearr_43046[(8)] = inst_43008__$1);

(statearr_43046[(9)] = inst_43003__$1);

(statearr_43046[(10)] = inst_43005__$1);

return statearr_43046;
})();
if(cljs.core.truth_(inst_43008__$1)){
var statearr_43047_43076 = state_43042__$1;
(statearr_43047_43076[(1)] = (5));

} else {
var statearr_43048_43077 = state_43042__$1;
(statearr_43048_43077[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (15))){
var inst_43004 = (state_43042[(7)]);
var state_43042__$1 = state_43042;
var statearr_43049_43078 = state_43042__$1;
(statearr_43049_43078[(2)] = inst_43004);

(statearr_43049_43078[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (13))){
var inst_43024 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
var statearr_43050_43079 = state_43042__$1;
(statearr_43050_43079[(2)] = inst_43024);

(statearr_43050_43079[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (6))){
var inst_43004 = (state_43042[(7)]);
var inst_43013 = (inst_43004 == null);
var inst_43014 = cljs.core.not(inst_43013);
var state_43042__$1 = state_43042;
if(inst_43014){
var statearr_43051_43080 = state_43042__$1;
(statearr_43051_43080[(1)] = (8));

} else {
var statearr_43052_43081 = state_43042__$1;
(statearr_43052_43081[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (3))){
var inst_43040 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43042__$1,inst_43040);
} else {
if((state_val_43043 === (12))){
var state_43042__$1 = state_43042;
var statearr_43053_43082 = state_43042__$1;
(statearr_43053_43082[(2)] = false);

(statearr_43053_43082[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (2))){
var inst_42999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43000 = [ch_recv,ch_ctrl];
var inst_43001 = (new cljs.core.PersistentVector(null,2,(5),inst_42999,inst_43000,null));
var state_43042__$1 = state_43042;
return cljs.core.async.ioc_alts_BANG_(state_43042__$1,(4),inst_43001);
} else {
if((state_val_43043 === (11))){
var state_43042__$1 = state_43042;
var statearr_43054_43083 = state_43042__$1;
(statearr_43054_43083[(2)] = true);

(statearr_43054_43083[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (9))){
var state_43042__$1 = state_43042;
var statearr_43055_43084 = state_43042__$1;
(statearr_43055_43084[(2)] = false);

(statearr_43055_43084[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (5))){
var state_43042__$1 = state_43042;
var statearr_43056_43085 = state_43042__$1;
(statearr_43056_43085[(2)] = null);

(statearr_43056_43085[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (14))){
var inst_43004 = (state_43042[(7)]);
var inst_43029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43004);
var state_43042__$1 = state_43042;
var statearr_43057_43086 = state_43042__$1;
(statearr_43057_43086[(2)] = inst_43029);

(statearr_43057_43086[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (16))){
var inst_43004 = (state_43042[(7)]);
var inst_43008 = (state_43042[(8)]);
var inst_43003 = (state_43042[(9)]);
var inst_43005 = (state_43042[(10)]);
var inst_43032 = (state_43042[(2)]);
var inst_43033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43032,cljs.core.cst$kw$event);
var inst_43034 = (function (){var vec__42996 = inst_43003;
var v = inst_43004;
var p = inst_43005;
var stop_QMARK_ = inst_43008;
var map__43011 = inst_43032;
var event_msg = inst_43032;
var event = inst_43033;
return ((function (vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1530,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1785478689);
} else {
}

var G__43060 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43061){if((e43061 instanceof Error)){
var e = e43061;
return e;
} else {
throw e43061;

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
}catch (e43062){if((e43062 instanceof Error)){
var e = e43062;
return e;
} else {
throw e43062;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1534,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__43060) : event_msg_handler.call(null,G__43060));
}catch (e43058){if((e43058 instanceof Error)){
var e1 = e43058;
try{var temp__5718__auto__ = error_handler;
if(cljs.core.truth_(temp__5718__auto__)){
var eh = temp__5718__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1539,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,e1,vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5718__auto__,e1,vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-319162861);
}
}catch (e43059){if((e43059 instanceof Error)){
var e2 = e43059;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init6643717838126997613.clj",1540,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1681510277);
} else {
throw e43059;

}
}} else {
throw e43058;

}
}});
;})(vec__42996,v,p,stop_QMARK_,map__43011,event_msg,event,inst_43004,inst_43008,inst_43003,inst_43005,inst_43032,inst_43033,state_val_43043,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_43035 = execute1(inst_43034);
var state_43042__$1 = (function (){var statearr_43063 = state_43042;
(statearr_43063[(11)] = inst_43035);

return statearr_43063;
})();
var statearr_43064_43087 = state_43042__$1;
(statearr_43064_43087[(2)] = null);

(statearr_43064_43087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (10))){
var inst_43027 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
if(cljs.core.truth_(inst_43027)){
var statearr_43065_43088 = state_43042__$1;
(statearr_43065_43088[(1)] = (14));

} else {
var statearr_43066_43089 = state_43042__$1;
(statearr_43066_43089[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43043 === (8))){
var inst_43004 = (state_43042[(7)]);
var inst_43016 = inst_43004.cljs$lang$protocol_mask$partition0$;
var inst_43017 = (inst_43016 & (64));
var inst_43018 = inst_43004.cljs$core$ISeq$;
var inst_43019 = (cljs.core.PROTOCOL_SENTINEL === inst_43018);
var inst_43020 = ((inst_43017) || (inst_43019));
var state_43042__$1 = state_43042;
if(cljs.core.truth_(inst_43020)){
var statearr_43067_43090 = state_43042__$1;
(statearr_43067_43090[(1)] = (11));

} else {
var statearr_43068_43091 = state_43042__$1;
(statearr_43068_43091[(1)] = (12));

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
});})(c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__38780__auto__,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto____0 = (function (){
var statearr_43069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43069[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto__);

(statearr_43069[(1)] = (1));

return statearr_43069;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto____1 = (function (state_43042){
while(true){
var ret_value__38782__auto__ = (function (){try{while(true){
var result__38783__auto__ = switch__38780__auto__(state_43042);
if(cljs.core.keyword_identical_QMARK_(result__38783__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__38783__auto__;
}
break;
}
}catch (e43070){if((e43070 instanceof Object)){
var ex__38784__auto__ = e43070;
var statearr_43071_43092 = state_43042;
(statearr_43071_43092[(5)] = ex__38784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43042);

return cljs.core.cst$kw$recur;
} else {
throw e43070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38782__auto__,cljs.core.cst$kw$recur)){
var G__43093 = state_43042;
state_43042 = G__43093;
continue;
} else {
return ret_value__38782__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto__ = function(state_43042){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto____1.call(this,state_43042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__38781__auto__;
})()
;})(switch__38780__auto__,c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__38889__auto__ = (function (){var statearr_43072 = (f__38888__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38888__auto__.cljs$core$IFn$_invoke$arity$0() : f__38888__auto__.call(null));
(statearr_43072[(6)] = c__38887__auto___43073);

return statearr_43072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38889__auto__);
});})(c__38887__auto___43073,map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__42993,map__42993__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var len__4730__auto___43103 = arguments.length;
var i__4731__auto___43104 = (0);
while(true){
if((i__4731__auto___43104 < len__4730__auto___43103)){
args__4736__auto__.push((arguments[i__4731__auto___43104]));

var G__43105 = (i__4731__auto___43104 + (1));
i__4731__auto___43104 = G__43105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__43097){
var vec__43098 = p__43097;
var map__43101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098,(0),null);
var map__43101__$1 = (((((!((map__43101 == null))))?(((((map__43101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43101):map__43101);
var opts = map__43101__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43101__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43101__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43101__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq43094){
var G__43095 = cljs.core.first(seq43094);
var seq43094__$1 = cljs.core.next(seq43094);
var G__43096 = cljs.core.first(seq43094__$1);
var seq43094__$2 = cljs.core.next(seq43094__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43095,G__43096,seq43094__$2);
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
var len__4730__auto___43115 = arguments.length;
var i__4731__auto___43116 = (0);
while(true){
if((i__4731__auto___43116 < len__4730__auto___43115)){
args__4736__auto__.push((arguments[i__4731__auto___43116]));

var G__43117 = (i__4731__auto___43116 + (1));
i__4731__auto___43116 = G__43117;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__43109){
var vec__43110 = p__43109;
var map__43113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43110,(0),null);
var map__43113__$1 = (((((!((map__43113 == null))))?(((((map__43113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43113):map__43113);
var opts = map__43113__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43113__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43113__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq43106){
var G__43107 = cljs.core.first(seq43106);
var seq43106__$1 = cljs.core.next(seq43106);
var G__43108 = cljs.core.first(seq43106__$1);
var seq43106__$2 = cljs.core.next(seq43106__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43107,G__43108,seq43106__$2);
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
var G__43118 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__43119 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__43118,G__43119) : event_handler.call(null,G__43118,G__43119));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__43120,websocket_QMARK_){
var map__43121 = p__43120;
var map__43121__$1 = (((((!((map__43121 == null))))?(((((map__43121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43121):map__43121);
var location = map__43121__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pathname;
}
})())].join('');
});
