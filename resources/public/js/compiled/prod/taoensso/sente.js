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
if(cljs.core.not((function (){var G__48094 = cljs.core.count(x);
var fexpr__48093 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__48093.cljs$core$IFn$_invoke$arity$1 ? fexpr__48093.cljs$core$IFn$_invoke$arity$1(G__48094) : fexpr__48093.call(null,G__48094));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__48095 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48095,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48095,(1),null);
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
var map__48102 = x;
var map__48102__$1 = (((((!((map__48102 == null))))?(((((map__48102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48102):map__48102);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48102__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48102__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48102__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48102__$1,cljs.core.cst$kw$event);
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
var map__48108 = x;
var map__48108__$1 = (((((!((map__48108 == null))))?(((((map__48108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48108):map__48108);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48108__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48108__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48108__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48108__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48108__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48108__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48108__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__48110){
var map__48111 = p__48110;
var map__48111__$1 = (((((!((map__48111 == null))))?(((((map__48111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48111):map__48111);
var ev_msg = map__48111__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48111__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48111__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__48113 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48113,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48113,(1),null);
var valid_event = vec__48113;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48113,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__48111,map__48111__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__48113,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__48111,map__48111__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-191622758);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__48116 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null);
return (fexpr__48116.cljs$core$IFn$_invoke$arity$1 ? fexpr__48116.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__48116.call(null,cb_reply_clj));
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
}catch (e48120){var t = e48120;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3001701682594866843.clj",208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,718200603);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__48117 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__48117,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__48117,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-1949567656);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__48122 = arguments.length;
switch (G__48122) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,1484770155);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",230,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-834120160);

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
var e = (function (){try{if((function (){var fexpr__48127 = (function (p1__48124_SHARP_){
if((!((p1__48124_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__48124_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__48124_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__48124_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__48124_SHARP_);
}
});
return fexpr__48127(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48125){if((e48125 instanceof Error)){
var e = e48125;
return e;
} else {
throw e48125;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__48124#] (satisfies? interfaces/IPacker p1__48124#)) x)",x,e,null);
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
var len__4730__auto___48441 = arguments.length;
var i__4731__auto___48442 = (0);
while(true){
if((i__4731__auto___48442 < len__4730__auto___48441)){
args__4736__auto__.push((arguments[i__4731__auto___48442]));

var G__48443 = (i__4731__auto___48442 + (1));
i__4731__auto___48442 = G__48443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__48132){
var vec__48133 = p__48132;
var map__48136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48133,(0),null);
var map__48136__$1 = (((((!((map__48136 == null))))?(((((map__48136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48136):map__48136);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms){
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
});})(vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax){
return (function (ring_req){
return null;
});})(vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax))
);
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn))
);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48136__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48138){if((e48138 instanceof Error)){
var e = e48138;
return e;
} else {
throw e48138;

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
}catch (e48139){if((e48139 instanceof Error)){
var e = e48139;
return e;
} else {
throw e48139;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_48444 = (function (){try{if((function (){var fexpr__48142 = ((function (vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p1__48129_SHARP_){
if((!((p1__48129_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__48129_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__48129_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__48129_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__48129_SHARP_);
}
});})(vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return fexpr__48142(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48140){if((e48140 instanceof Error)){
var e = e48140;
return e;
} else {
throw e48140;

}
}})();
if((e_48444 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",315,"((fn* [p1__48129#] (satisfies? interfaces/IServerChanAdapter p1__48129#)) web-server-ch-adapter)",web_server_ch_adapter,e_48444,null);
}

var max_ms_48445 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_48445)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_48445)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_48445], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req,client_id){
var or__4131__auto__ = (function (){var G__48145 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__48145) : user_id_fn.call(null,G__48145));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var G__48446 = null;
var G__48446__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var vec__48146 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48146,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48146,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
var G__48446__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
G__48446 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__48446__3.call(this,conn_type,uid,client_id);
case 4:
return G__48446__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48446.cljs$core$IFn$_invoke$arity$3 = G__48446__3;
G__48446.cljs$core$IFn$_invoke$arity$4 = G__48446__4;
return G__48446;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48149){if((e48149 instanceof Error)){
var e = e48149;
return e;
} else {
throw e48149;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__48150){
var map__48151 = p__48150;
var map__48151__$1 = (((((!((map__48151 == null))))?(((((map__48151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48151):map__48151);
var old_m = map__48151__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48151__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48151__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48151__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__48153 = conn_type;
var G__48153__$1 = (((G__48153 instanceof cljs.core.Keyword))?G__48153.fqn:null);
switch (G__48153__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48153__$1)].join('')));

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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48154){if((e48154 instanceof Error)){
var e = e48154;
return e;
} else {
throw e48154;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__48155){
var map__48156 = p__48155;
var map__48156__$1 = (((((!((map__48156 == null))))?(((((map__48156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48156):map__48156);
var old_m = map__48156__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48156__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48156__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48156__$1,cljs.core.cst$kw$any);
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() { 
var G__48448__delegate = function (user_id,ev,p__48158){
var vec__48159 = p__48158;
var map__48162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48159,(0),null);
var map__48162__$1 = (((((!((map__48162 == null))))?(((((map__48162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48162):map__48162);
var opts = map__48162__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48162__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_48449 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __48450 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",402,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_48449,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_48449,ev], null);
});})(uid_48449,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1502511930);
var __48451__$1 = (cljs.core.truth_(uid_48449)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __48452__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_48453 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__48454 = ((function (uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type){
var temp__5720__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (m){
var vec__48164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_48449);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48164,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48164,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_48453)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_48449),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_48449));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
if(cljs.core.truth_(temp__5720__auto__)){
var pulled = temp__5720__auto__;
var vec__48167 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",430,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",433,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__48167,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__48167,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,557119994);

var G__48170 = conn_type;
var G__48170__$1 = (((G__48170 instanceof cljs.core.Keyword))?G__48170.fqn:null);
switch (G__48170__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_48449,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_48449,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_48449,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_48449,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48170__$1)].join('')));

}
} else {
return null;
}
});})(uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3001701682594866843.clj",442,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_48449], null);
});})(uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1831755731);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48454(cljs.core.cst$kw$ws);

flush_buffer_BANG__48454(cljs.core.cst$kw$ajax);
} else {
}

var seq__48171_48456 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_48449], null))));
var chunk__48172_48457 = null;
var count__48173_48458 = (0);
var i__48174_48459 = (0);
while(true){
if((i__48174_48459 < count__48173_48458)){
var vec__48181_48460 = chunk__48172_48457.cljs$core$IIndexed$_nth$arity$2(null,i__48174_48459);
var _QMARK_sch_48461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48181_48460,(0),null);
var _udt_48462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48181_48460,(1),null);
var temp__5720__auto___48463 = _QMARK_sch_48461;
if(cljs.core.truth_(temp__5720__auto___48463)){
var sch_48464 = temp__5720__auto___48463;
taoensso.sente.interfaces.sch_close_BANG_(sch_48464);
} else {
}


var G__48465 = seq__48171_48456;
var G__48466 = chunk__48172_48457;
var G__48467 = count__48173_48458;
var G__48468 = (i__48174_48459 + (1));
seq__48171_48456 = G__48465;
chunk__48172_48457 = G__48466;
count__48173_48458 = G__48467;
i__48174_48459 = G__48468;
continue;
} else {
var temp__5720__auto___48469 = cljs.core.seq(seq__48171_48456);
if(temp__5720__auto___48469){
var seq__48171_48470__$1 = temp__5720__auto___48469;
if(cljs.core.chunked_seq_QMARK_(seq__48171_48470__$1)){
var c__4550__auto___48471 = cljs.core.chunk_first(seq__48171_48470__$1);
var G__48472 = cljs.core.chunk_rest(seq__48171_48470__$1);
var G__48473 = c__4550__auto___48471;
var G__48474 = cljs.core.count(c__4550__auto___48471);
var G__48475 = (0);
seq__48171_48456 = G__48472;
chunk__48172_48457 = G__48473;
count__48173_48458 = G__48474;
i__48174_48459 = G__48475;
continue;
} else {
var vec__48184_48476 = cljs.core.first(seq__48171_48470__$1);
var _QMARK_sch_48477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48184_48476,(0),null);
var _udt_48478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48184_48476,(1),null);
var temp__5720__auto___48479__$1 = _QMARK_sch_48477;
if(cljs.core.truth_(temp__5720__auto___48479__$1)){
var sch_48480 = temp__5720__auto___48479__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_48480);
} else {
}


var G__48481 = cljs.core.next(seq__48171_48470__$1);
var G__48482 = null;
var G__48483 = (0);
var G__48484 = (0);
seq__48171_48456 = G__48481;
chunk__48172_48457 = G__48482;
count__48173_48458 = G__48483;
i__48174_48459 = G__48484;
continue;
}
} else {
}
}
break;
}

var seq__48187_48485 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_48449], null))));
var chunk__48188_48486 = null;
var count__48189_48487 = (0);
var i__48190_48488 = (0);
while(true){
if((i__48190_48488 < count__48189_48487)){
var vec__48197_48489 = chunk__48188_48486.cljs$core$IIndexed$_nth$arity$2(null,i__48190_48488);
var _QMARK_sch_48490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48197_48489,(0),null);
var _udt_48491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48197_48489,(1),null);
var temp__5720__auto___48492 = _QMARK_sch_48490;
if(cljs.core.truth_(temp__5720__auto___48492)){
var sch_48493 = temp__5720__auto___48492;
taoensso.sente.interfaces.sch_close_BANG_(sch_48493);
} else {
}


var G__48494 = seq__48187_48485;
var G__48495 = chunk__48188_48486;
var G__48496 = count__48189_48487;
var G__48497 = (i__48190_48488 + (1));
seq__48187_48485 = G__48494;
chunk__48188_48486 = G__48495;
count__48189_48487 = G__48496;
i__48190_48488 = G__48497;
continue;
} else {
var temp__5720__auto___48498 = cljs.core.seq(seq__48187_48485);
if(temp__5720__auto___48498){
var seq__48187_48499__$1 = temp__5720__auto___48498;
if(cljs.core.chunked_seq_QMARK_(seq__48187_48499__$1)){
var c__4550__auto___48500 = cljs.core.chunk_first(seq__48187_48499__$1);
var G__48501 = cljs.core.chunk_rest(seq__48187_48499__$1);
var G__48502 = c__4550__auto___48500;
var G__48503 = cljs.core.count(c__4550__auto___48500);
var G__48504 = (0);
seq__48187_48485 = G__48501;
chunk__48188_48486 = G__48502;
count__48189_48487 = G__48503;
i__48190_48488 = G__48504;
continue;
} else {
var vec__48200_48505 = cljs.core.first(seq__48187_48499__$1);
var _QMARK_sch_48506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48200_48505,(0),null);
var _udt_48507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48200_48505,(1),null);
var temp__5720__auto___48508__$1 = _QMARK_sch_48506;
if(cljs.core.truth_(temp__5720__auto___48508__$1)){
var sch_48509 = temp__5720__auto___48508__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_48509);
} else {
}


var G__48510 = cljs.core.next(seq__48187_48499__$1);
var G__48511 = null;
var G__48512 = (0);
var G__48513 = (0);
seq__48187_48485 = G__48510;
chunk__48188_48486 = G__48511;
count__48189_48487 = G__48512;
i__48190_48488 = G__48513;
continue;
}
} else {
}
}
break;
}
} else {
var seq__48203_48514 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__48204_48515 = null;
var count__48205_48516 = (0);
var i__48206_48517 = (0);
while(true){
if((i__48206_48517 < count__48205_48516)){
var conn_type_48518 = chunk__48204_48515.cljs$core$IIndexed$_nth$arity$2(null,i__48206_48517);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48518,uid_48449], null),((function (seq__48203_48514,chunk__48204_48515,count__48205_48516,i__48206_48517,conn_type_48518,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_48453])], null);
} else {
var vec__48213 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48213,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48213,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_48453)], null);
}
});})(seq__48203_48514,chunk__48204_48515,count__48205_48516,i__48206_48517,conn_type_48518,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__48519 = seq__48203_48514;
var G__48520 = chunk__48204_48515;
var G__48521 = count__48205_48516;
var G__48522 = (i__48206_48517 + (1));
seq__48203_48514 = G__48519;
chunk__48204_48515 = G__48520;
count__48205_48516 = G__48521;
i__48206_48517 = G__48522;
continue;
} else {
var temp__5720__auto___48523 = cljs.core.seq(seq__48203_48514);
if(temp__5720__auto___48523){
var seq__48203_48524__$1 = temp__5720__auto___48523;
if(cljs.core.chunked_seq_QMARK_(seq__48203_48524__$1)){
var c__4550__auto___48525 = cljs.core.chunk_first(seq__48203_48524__$1);
var G__48526 = cljs.core.chunk_rest(seq__48203_48524__$1);
var G__48527 = c__4550__auto___48525;
var G__48528 = cljs.core.count(c__4550__auto___48525);
var G__48529 = (0);
seq__48203_48514 = G__48526;
chunk__48204_48515 = G__48527;
count__48205_48516 = G__48528;
i__48206_48517 = G__48529;
continue;
} else {
var conn_type_48530 = cljs.core.first(seq__48203_48524__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48530,uid_48449], null),((function (seq__48203_48514,chunk__48204_48515,count__48205_48516,i__48206_48517,conn_type_48530,seq__48203_48524__$1,temp__5720__auto___48523,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_48453])], null);
} else {
var vec__48216 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48216,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48216,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_48453)], null);
}
});})(seq__48203_48514,chunk__48204_48515,count__48205_48516,i__48206_48517,conn_type_48530,seq__48203_48524__$1,temp__5720__auto___48523,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__48531 = cljs.core.next(seq__48203_48524__$1);
var G__48532 = null;
var G__48533 = (0);
var G__48534 = (0);
seq__48203_48514 = G__48531;
chunk__48204_48515 = G__48532;
count__48205_48516 = G__48533;
i__48206_48517 = G__48534;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48454(cljs.core.cst$kw$ws);

flush_buffer_BANG__48454(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_48535 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_48536 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__40884__auto___48537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___48537,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___48537,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48223){
var state_val_48224 = (state_48223[(1)]);
if((state_val_48224 === (1))){
var state_48223__$1 = state_48223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48223__$1,(2),ws_timeout_48535);
} else {
if((state_val_48224 === (2))){
var inst_48220 = (state_48223[(2)]);
var inst_48221 = flush_buffer_BANG__48454(cljs.core.cst$kw$ws);
var state_48223__$1 = (function (){var statearr_48225 = state_48223;
(statearr_48225[(7)] = inst_48220);

return statearr_48225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48223__$1,inst_48221);
} else {
return null;
}
}
});})(c__40884__auto___48537,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40693__auto__,c__40884__auto___48537,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48226 = [null,null,null,null,null,null,null,null];
(statearr_48226[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48226[(1)] = (1));

return statearr_48226;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48223){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48223);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48227){if((e48227 instanceof Object)){
var ex__40697__auto__ = e48227;
var statearr_48228_48538 = state_48223;
(statearr_48228_48538[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48223);

return cljs.core.cst$kw$recur;
} else {
throw e48227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48539 = state_48223;
state_48223 = G__48539;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48223){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___48537,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40886__auto__ = (function (){var statearr_48229 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48229[(6)] = c__40884__auto___48537);

return statearr_48229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___48537,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var c__40884__auto___48540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___48540,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___48540,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48234){
var state_val_48235 = (state_48234[(1)]);
if((state_val_48235 === (1))){
var state_48234__$1 = state_48234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48234__$1,(2),ajax_timeout_48536);
} else {
if((state_val_48235 === (2))){
var inst_48231 = (state_48234[(2)]);
var inst_48232 = flush_buffer_BANG__48454(cljs.core.cst$kw$ajax);
var state_48234__$1 = (function (){var statearr_48236 = state_48234;
(statearr_48236[(7)] = inst_48231);

return statearr_48236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48234__$1,inst_48232);
} else {
return null;
}
}
});})(c__40884__auto___48540,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40693__auto__,c__40884__auto___48540,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48237 = [null,null,null,null,null,null,null,null];
(statearr_48237[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48237[(1)] = (1));

return statearr_48237;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48234){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48234);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48238){if((e48238 instanceof Object)){
var ex__40697__auto__ = e48238;
var statearr_48239_48541 = state_48234;
(statearr_48239_48541[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48234);

return cljs.core.cst$kw$recur;
} else {
throw e48238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48542 = state_48234;
state_48234 = G__48542;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48234){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___48540,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40886__auto__ = (function (){var statearr_48240 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48240[(6)] = c__40884__auto___48540);

return statearr_48240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___48540,ws_timeout_48535,ajax_timeout_48536,uid_48449,__48450,__48451__$1,__48452__$2,ev_uuid_48453,flush_buffer_BANG__48454,vec__48159,map__48162,map__48162__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

}
}

return null;
};
var G__48448 = function (user_id,ev,var_args){
var p__48158 = null;
if (arguments.length > 2) {
var G__48543__i = 0, G__48543__a = new Array(arguments.length -  2);
while (G__48543__i < G__48543__a.length) {G__48543__a[G__48543__i] = arguments[G__48543__i + 2]; ++G__48543__i;}
  p__48158 = new cljs.core.IndexedSeq(G__48543__a,0,null);
} 
return G__48448__delegate.call(this,user_id,ev,p__48158);};
G__48448.cljs$lang$maxFixedArity = 2;
G__48448.cljs$lang$applyTo = (function (arglist__48544){
var user_id = cljs.core.first(arglist__48544);
arglist__48544 = cljs.core.next(arglist__48544);
var ev = cljs.core.first(arglist__48544);
var p__48158 = cljs.core.rest(arglist__48544);
return G__48448__delegate(user_id,ev,p__48158);
});
G__48448.cljs$core$IFn$_invoke$arity$variadic = G__48448__delegate;
return G__48448;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__48241 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",511,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-389946830);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5720__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5720__auto__)){
var ms = temp__5720__auto__;
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48249){
var state_val_48250 = (state_48249[(1)]);
if((state_val_48250 === (1))){
var inst_48244 = cljs.core.async.timeout(ms);
var state_48249__$1 = state_48249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48249__$1,(2),inst_48244);
} else {
if((state_val_48250 === (2))){
var inst_48246 = (state_48249[(2)]);
var inst_48247 = (function (){var G__48251 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__48251) : reply_fn.call(null,G__48251));
})();
var state_48249__$1 = (function (){var statearr_48252 = state_48249;
(statearr_48252[(7)] = inst_48246);

return statearr_48252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48249__$1,inst_48247);
} else {
return null;
}
}
});})(c__40884__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40693__auto__,c__40884__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48253 = [null,null,null,null,null,null,null,null];
(statearr_48253[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48253[(1)] = (1));

return statearr_48253;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48249){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48249);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48254){if((e48254 instanceof Object)){
var ex__40697__auto__ = e48254;
var statearr_48255_48545 = state_48249;
(statearr_48255_48545[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48249);

return cljs.core.cst$kw$recur;
} else {
throw e48254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48546 = state_48249;
state_48249 = G__48546;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48249){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40886__auto__ = (function (){var statearr_48256 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48256[(6)] = c__40884__auto__);

return statearr_48256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48241,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40884__auto__;
} else {
return null;
}
} else {
var G__48257 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__48257) : reply_fn.call(null,G__48257));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",556,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,351635340);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3001701682594866843.clj",567,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1091138986);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",576,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-2036472526);
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
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48293){
var state_val_48294 = (state_48293[(1)]);
if((state_val_48294 === (7))){
var inst_48289 = (state_48293[(2)]);
var state_48293__$1 = state_48293;
var statearr_48295_48547 = state_48293__$1;
(statearr_48295_48547[(2)] = inst_48289);

(statearr_48295_48547[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (1))){
var inst_48258 = udt_open;
var state_48293__$1 = (function (){var statearr_48296 = state_48293;
(statearr_48296[(7)] = inst_48258);

return statearr_48296;
})();
var statearr_48297_48548 = state_48293__$1;
(statearr_48297_48548[(2)] = null);

(statearr_48297_48548[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (4))){
var inst_48267 = (state_48293[(8)]);
var inst_48262 = (state_48293[(2)]);
var inst_48263 = cljs.core.deref(conns_);
var inst_48264 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48265 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_48266 = (new cljs.core.PersistentVector(null,3,(5),inst_48264,inst_48265,null));
var inst_48267__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48263,inst_48266);
var state_48293__$1 = (function (){var statearr_48298 = state_48293;
(statearr_48298[(9)] = inst_48262);

(statearr_48298[(8)] = inst_48267__$1);

return statearr_48298;
})();
if(cljs.core.truth_(inst_48267__$1)){
var statearr_48299_48549 = state_48293__$1;
(statearr_48299_48549[(1)] = (5));

} else {
var statearr_48300_48550 = state_48293__$1;
(statearr_48300_48550[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (13))){
var inst_48273 = (state_48293[(10)]);
var inst_48282 = (state_48293[(2)]);
var inst_48258 = inst_48273;
var state_48293__$1 = (function (){var statearr_48301 = state_48293;
(statearr_48301[(11)] = inst_48282);

(statearr_48301[(7)] = inst_48258);

return statearr_48301;
})();
var statearr_48302_48551 = state_48293__$1;
(statearr_48302_48551[(2)] = null);

(statearr_48302_48551[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (6))){
var state_48293__$1 = state_48293;
var statearr_48303_48552 = state_48293__$1;
(statearr_48303_48552[(2)] = null);

(statearr_48303_48552[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (3))){
var inst_48291 = (state_48293[(2)]);
var state_48293__$1 = state_48293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48293__$1,inst_48291);
} else {
if((state_val_48294 === (12))){
var state_48293__$1 = state_48293;
var statearr_48304_48553 = state_48293__$1;
(statearr_48304_48553[(2)] = null);

(statearr_48304_48553[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (2))){
var inst_48260 = cljs.core.async.timeout(ms);
var state_48293__$1 = state_48293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48293__$1,(4),inst_48260);
} else {
if((state_val_48294 === (11))){
var inst_48278 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_48279 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_48278);
var state_48293__$1 = state_48293;
var statearr_48305_48554 = state_48293__$1;
(statearr_48305_48554[(2)] = inst_48279);

(statearr_48305_48554[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (9))){
var state_48293__$1 = state_48293;
var statearr_48306_48555 = state_48293__$1;
(statearr_48306_48555[(2)] = null);

(statearr_48306_48555[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (5))){
var inst_48267 = (state_48293[(8)]);
var inst_48272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48267,(0),null);
var inst_48273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48267,(1),null);
var inst_48274 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_48293__$1 = (function (){var statearr_48307 = state_48293;
(statearr_48307[(12)] = inst_48272);

(statearr_48307[(10)] = inst_48273);

return statearr_48307;
})();
if(cljs.core.truth_(inst_48274)){
var statearr_48308_48556 = state_48293__$1;
(statearr_48308_48556[(1)] = (8));

} else {
var statearr_48309_48557 = state_48293__$1;
(statearr_48309_48557[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (10))){
var inst_48286 = (state_48293[(2)]);
var state_48293__$1 = state_48293;
var statearr_48310_48558 = state_48293__$1;
(statearr_48310_48558[(2)] = inst_48286);

(statearr_48310_48558[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48294 === (8))){
var inst_48273 = (state_48293[(10)]);
var inst_48258 = (state_48293[(7)]);
var inst_48276 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48273,inst_48258);
var state_48293__$1 = state_48293;
if(inst_48276){
var statearr_48311_48559 = state_48293__$1;
(statearr_48311_48559[(1)] = (11));

} else {
var statearr_48312_48560 = state_48293__$1;
(statearr_48312_48560[(1)] = (12));

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
});})(c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40693__auto__,c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48313 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48313[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48313[(1)] = (1));

return statearr_48313;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48293){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48293);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48314){if((e48314 instanceof Object)){
var ex__40697__auto__ = e48314;
var statearr_48315_48561 = state_48293;
(statearr_48315_48561[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48293);

return cljs.core.cst$kw$recur;
} else {
throw e48314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48562 = state_48293;
state_48293 = G__48562;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48293){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40886__auto__ = (function (){var statearr_48316 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48316[(6)] = c__40884__auto__);

return statearr_48316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40884__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",605,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-2125705815);
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
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48342){
var state_val_48343 = (state_48342[(1)]);
if((state_val_48343 === (1))){
var inst_48317 = cljs.core.async.timeout(ms);
var state_48342__$1 = state_48342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48342__$1,(2),inst_48317);
} else {
if((state_val_48343 === (2))){
var inst_48324 = (state_48342[(7)]);
var inst_48319 = (state_48342[(2)]);
var inst_48320 = cljs.core.deref(conns_);
var inst_48321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48322 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_48323 = (new cljs.core.PersistentVector(null,3,(5),inst_48321,inst_48322,null));
var inst_48324__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48320,inst_48323);
var state_48342__$1 = (function (){var statearr_48344 = state_48342;
(statearr_48344[(7)] = inst_48324__$1);

(statearr_48344[(8)] = inst_48319);

return statearr_48344;
})();
if(cljs.core.truth_(inst_48324__$1)){
var statearr_48345_48563 = state_48342__$1;
(statearr_48345_48563[(1)] = (3));

} else {
var statearr_48346_48564 = state_48342__$1;
(statearr_48346_48564[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48343 === (3))){
var inst_48324 = (state_48342[(7)]);
var inst_48329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48324,(0),null);
var inst_48330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48324,(1),null);
var inst_48331 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48330,udt_open);
var state_48342__$1 = (function (){var statearr_48347 = state_48342;
(statearr_48347[(9)] = inst_48329);

return statearr_48347;
})();
if(inst_48331){
var statearr_48348_48565 = state_48342__$1;
(statearr_48348_48565[(1)] = (6));

} else {
var statearr_48349_48566 = state_48342__$1;
(statearr_48349_48566[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48343 === (4))){
var state_48342__$1 = state_48342;
var statearr_48350_48567 = state_48342__$1;
(statearr_48350_48567[(2)] = null);

(statearr_48350_48567[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48343 === (5))){
var inst_48340 = (state_48342[(2)]);
var state_48342__$1 = state_48342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48342__$1,inst_48340);
} else {
if((state_val_48343 === (6))){
var inst_48333 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_48334 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_48333);
var state_48342__$1 = state_48342;
var statearr_48351_48568 = state_48342__$1;
(statearr_48351_48568[(2)] = inst_48334);

(statearr_48351_48568[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48343 === (7))){
var state_48342__$1 = state_48342;
var statearr_48352_48569 = state_48342__$1;
(statearr_48352_48569[(2)] = null);

(statearr_48352_48569[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48343 === (8))){
var inst_48337 = (state_48342[(2)]);
var state_48342__$1 = state_48342;
var statearr_48353_48570 = state_48342__$1;
(statearr_48353_48570[(2)] = inst_48337);

(statearr_48353_48570[(1)] = (5));


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
});})(c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40693__auto__,c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48354 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48354[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48354[(1)] = (1));

return statearr_48354;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48342){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48342);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48355){if((e48355 instanceof Object)){
var ex__40697__auto__ = e48355;
var statearr_48356_48571 = state_48342;
(statearr_48356_48571[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48342);

return cljs.core.cst$kw$recur;
} else {
throw e48355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48572 = state_48342;
state_48342 = G__48572;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48342){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40886__auto__ = (function (){var statearr_48357 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48357[(6)] = c__40884__auto__);

return statearr_48357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40884__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__48358 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__48358,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",635,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48358,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__48358,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,774292763);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__48358,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",644,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1635536397);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48412){
var state_val_48413 = (state_48412[(1)]);
if((state_val_48413 === (7))){
var state_48412__$1 = state_48412;
var statearr_48414_48573 = state_48412__$1;
(statearr_48414_48573[(2)] = null);

(statearr_48414_48573[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (1))){
var inst_48361 = cljs.core.async.timeout((5000));
var state_48412__$1 = state_48412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48412__$1,(2),inst_48361);
} else {
if((state_val_48413 === (4))){
var state_48412__$1 = state_48412;
var statearr_48415_48574 = state_48412__$1;
(statearr_48415_48574[(2)] = null);

(statearr_48415_48574[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (13))){
var state_48412__$1 = state_48412;
var statearr_48416_48575 = state_48412__$1;
(statearr_48416_48575[(2)] = null);

(statearr_48416_48575[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (6))){
var inst_48373 = (state_48412[(7)]);
var inst_48372 = (state_48412[(8)]);
var inst_48371 = (state_48412[(9)]);
var inst_48389 = (state_48412[(10)]);
var inst_48384 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48385 = [conn_type,uid,client_id];
var inst_48386 = (new cljs.core.PersistentVector(null,3,(5),inst_48384,inst_48385,null));
var inst_48388 = (function (){var vec__48364 = inst_48371;
var __QMARK_sch = inst_48372;
var udt_t1 = inst_48373;
return ((function (vec__48364,__QMARK_sch,udt_t1,inst_48373,inst_48372,inst_48371,inst_48389,inst_48384,inst_48385,inst_48386,state_val_48413,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__48387){
var vec__48417 = p__48387;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48417,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48417,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__48364,__QMARK_sch,udt_t1,inst_48373,inst_48372,inst_48371,inst_48389,inst_48384,inst_48385,inst_48386,state_val_48413,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48389__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48386,inst_48388);
var state_48412__$1 = (function (){var statearr_48420 = state_48412;
(statearr_48420[(10)] = inst_48389__$1);

return statearr_48420;
})();
if(cljs.core.truth_(inst_48389__$1)){
var statearr_48421_48576 = state_48412__$1;
(statearr_48421_48576[(1)] = (9));

} else {
var statearr_48422_48577 = state_48412__$1;
(statearr_48422_48577[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (3))){
var inst_48373 = (state_48412[(7)]);
var inst_48372 = (state_48412[(8)]);
var inst_48371 = (state_48412[(9)]);
var inst_48376 = (function (){var vec__48364 = inst_48371;
var __QMARK_sch = inst_48372;
var udt_t1 = inst_48373;
return ((function (vec__48364,__QMARK_sch,udt_t1,inst_48373,inst_48372,inst_48371,state_val_48413,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__48364,__QMARK_sch,udt_t1,inst_48373,inst_48372,inst_48371,state_val_48413,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48377 = (new cljs.core.Delay(inst_48376,null));
var inst_48378 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3001701682594866843.clj",658,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_48377,null,1539870450);
var state_48412__$1 = state_48412;
var statearr_48423_48578 = state_48412__$1;
(statearr_48423_48578[(2)] = inst_48378);

(statearr_48423_48578[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (12))){
var inst_48398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48399 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_48400 = (new cljs.core.PersistentVector(null,2,(5),inst_48398,inst_48399,null));
var inst_48401 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_48400);
var state_48412__$1 = state_48412;
var statearr_48424_48579 = state_48412__$1;
(statearr_48424_48579[(2)] = inst_48401);

(statearr_48424_48579[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (2))){
var inst_48371 = (state_48412[(9)]);
var inst_48363 = (state_48412[(2)]);
var inst_48367 = cljs.core.deref(conns_);
var inst_48368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48369 = [conn_type,uid,client_id];
var inst_48370 = (new cljs.core.PersistentVector(null,3,(5),inst_48368,inst_48369,null));
var inst_48371__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48367,inst_48370);
var inst_48372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48371__$1,(0),null);
var inst_48373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48371__$1,(1),null);
var inst_48374 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_48412__$1 = (function (){var statearr_48425 = state_48412;
(statearr_48425[(7)] = inst_48373);

(statearr_48425[(8)] = inst_48372);

(statearr_48425[(9)] = inst_48371__$1);

(statearr_48425[(11)] = inst_48363);

return statearr_48425;
})();
if(cljs.core.truth_(inst_48374)){
var statearr_48426_48580 = state_48412__$1;
(statearr_48426_48580[(1)] = (3));

} else {
var statearr_48427_48581 = state_48412__$1;
(statearr_48427_48581[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (11))){
var inst_48407 = (state_48412[(2)]);
var state_48412__$1 = state_48412;
var statearr_48428_48582 = state_48412__$1;
(statearr_48428_48582[(2)] = inst_48407);

(statearr_48428_48582[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (9))){
var inst_48373 = (state_48412[(7)]);
var inst_48372 = (state_48412[(8)]);
var inst_48371 = (state_48412[(9)]);
var inst_48389 = (state_48412[(10)]);
var inst_48391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48392 = [conn_type,uid];
var inst_48393 = (new cljs.core.PersistentVector(null,2,(5),inst_48391,inst_48392,null));
var inst_48394 = (function (){var vec__48364 = inst_48371;
var __QMARK_sch = inst_48372;
var udt_t1 = inst_48373;
var disconnect_QMARK_ = inst_48389;
return ((function (vec__48364,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48373,inst_48372,inst_48371,inst_48389,inst_48391,inst_48392,inst_48393,state_val_48413,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__48364,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48373,inst_48372,inst_48371,inst_48389,inst_48391,inst_48392,inst_48393,state_val_48413,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48395 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48393,inst_48394);
var inst_48396 = upd_connected_uid_BANG_(uid);
var state_48412__$1 = (function (){var statearr_48429 = state_48412;
(statearr_48429[(12)] = inst_48395);

return statearr_48429;
})();
if(cljs.core.truth_(inst_48396)){
var statearr_48430_48583 = state_48412__$1;
(statearr_48430_48583[(1)] = (12));

} else {
var statearr_48431_48584 = state_48412__$1;
(statearr_48431_48584[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (5))){
var inst_48373 = (state_48412[(7)]);
var inst_48381 = (state_48412[(2)]);
var inst_48382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48373,udt_close);
var state_48412__$1 = (function (){var statearr_48432 = state_48412;
(statearr_48432[(13)] = inst_48381);

return statearr_48432;
})();
if(inst_48382){
var statearr_48433_48585 = state_48412__$1;
(statearr_48433_48585[(1)] = (6));

} else {
var statearr_48434_48586 = state_48412__$1;
(statearr_48434_48586[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (14))){
var inst_48404 = (state_48412[(2)]);
var state_48412__$1 = state_48412;
var statearr_48435_48587 = state_48412__$1;
(statearr_48435_48587[(2)] = inst_48404);

(statearr_48435_48587[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (10))){
var state_48412__$1 = state_48412;
var statearr_48436_48588 = state_48412__$1;
(statearr_48436_48588[(2)] = null);

(statearr_48436_48588[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48413 === (8))){
var inst_48410 = (state_48412[(2)]);
var state_48412__$1 = state_48412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48412__$1,inst_48410);
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
});})(c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40693__auto__,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48437[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48437[(1)] = (1));

return statearr_48437;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48412){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48412);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48438){if((e48438 instanceof Object)){
var ex__40697__auto__ = e48438;
var statearr_48439_48589 = state_48412;
(statearr_48439_48589[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48412);

return cljs.core.cst$kw$recur;
} else {
throw e48438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48590 = state_48412;
state_48412 = G__48590;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48412){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40886__auto__ = (function (){var statearr_48440 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48440[(6)] = c__40884__auto__);

return statearr_48440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40884__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3001701682594866843.clj",680,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1688765827);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__48133,map__48136,map__48136__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq48130){
var G__48131 = cljs.core.first(seq48130);
var seq48130__$1 = cljs.core.next(seq48130);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48131,seq48130__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",686,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,811286319);

var seq__48591 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__48592 = null;
var count__48593 = (0);
var i__48594 = (0);
while(true){
if((i__48594 < count__48593)){
var vec__48613 = chunk__48592.cljs$core$IIndexed$_nth$arity$2(null,i__48594);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48613,(0),null);
var vec__48616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48613,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48616,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48616,(1),null);
var temp__5720__auto___48631 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___48631)){
var sch_48632 = temp__5720__auto___48631;
var G__48619_48633 = cljs.core.cst$kw$ws;
var G__48620_48634 = uid;
var G__48621_48635 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__48619_48633,G__48620_48634,G__48621_48635) : upd_conn_BANG_.call(null,G__48619_48633,G__48620_48634,G__48621_48635));

taoensso.sente.interfaces.sch_send_BANG_(sch_48632,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__48636 = seq__48591;
var G__48637 = chunk__48592;
var G__48638 = count__48593;
var G__48639 = (i__48594 + (1));
seq__48591 = G__48636;
chunk__48592 = G__48637;
count__48593 = G__48638;
i__48594 = G__48639;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48591);
if(temp__5720__auto__){
var seq__48591__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48591__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48591__$1);
var G__48640 = cljs.core.chunk_rest(seq__48591__$1);
var G__48641 = c__4550__auto__;
var G__48642 = cljs.core.count(c__4550__auto__);
var G__48643 = (0);
seq__48591 = G__48640;
chunk__48592 = G__48641;
count__48593 = G__48642;
i__48594 = G__48643;
continue;
} else {
var vec__48622 = cljs.core.first(seq__48591__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622,(0),null);
var vec__48625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48625,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48625,(1),null);
var temp__5720__auto___48644__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___48644__$1)){
var sch_48645 = temp__5720__auto___48644__$1;
var G__48628_48646 = cljs.core.cst$kw$ws;
var G__48629_48647 = uid;
var G__48630_48648 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__48628_48646,G__48629_48647,G__48630_48648) : upd_conn_BANG_.call(null,G__48628_48646,G__48629_48647,G__48630_48648));

taoensso.sente.interfaces.sch_send_BANG_(sch_48645,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__48649 = cljs.core.next(seq__48591__$1);
var G__48650 = null;
var G__48651 = (0);
var G__48652 = (0);
seq__48591 = G__48649;
chunk__48592 = G__48650;
count__48593 = G__48651;
i__48594 = G__48652;
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",696,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-859717548);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__40884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_48699){
var state_val_48700 = (state_48699[(1)]);
if((state_val_48700 === (7))){
var inst_48655 = (state_48699[(7)]);
var inst_48661 = (state_48699[(8)]);
var inst_48654 = (state_48699[(9)]);
var inst_48671 = (function (){var n = inst_48654;
var client_ids_satisfied = inst_48655;
var _QMARK_pulled = inst_48661;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48655,inst_48661,inst_48654,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__48670){
var vec__48701 = p__48670;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48701,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48701,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48655,inst_48661,inst_48654,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48672 = cljs.core.PersistentHashSet.EMPTY;
var inst_48673 = cljs.core.reduce_kv(inst_48671,inst_48672,inst_48661);
var state_48699__$1 = state_48699;
var statearr_48704_48736 = state_48699__$1;
(statearr_48704_48736[(2)] = inst_48673);

(statearr_48704_48736[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (1))){
var inst_48653 = cljs.core.PersistentHashSet.EMPTY;
var inst_48654 = (0);
var inst_48655 = inst_48653;
var state_48699__$1 = (function (){var statearr_48705 = state_48699;
(statearr_48705[(7)] = inst_48655);

(statearr_48705[(9)] = inst_48654);

return statearr_48705;
})();
var statearr_48706_48737 = state_48699__$1;
(statearr_48706_48737[(2)] = null);

(statearr_48706_48737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (4))){
var state_48699__$1 = state_48699;
var statearr_48707_48738 = state_48699__$1;
(statearr_48707_48738[(2)] = true);

(statearr_48707_48738[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (15))){
var inst_48692 = (state_48699[(2)]);
var state_48699__$1 = state_48699;
var statearr_48708_48739 = state_48699__$1;
(statearr_48708_48739[(2)] = inst_48692);

(statearr_48708_48739[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (13))){
var inst_48678 = (state_48699[(10)]);
var inst_48683 = cljs.core.rand_int(inst_48678);
var inst_48684 = (inst_48678 + inst_48683);
var inst_48685 = cljs.core.async.timeout(inst_48684);
var state_48699__$1 = state_48699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48699__$1,(16),inst_48685);
} else {
if((state_val_48700 === (6))){
var inst_48661 = (state_48699[(8)]);
var inst_48668 = (state_48699[(2)]);
var state_48699__$1 = (function (){var statearr_48709 = state_48699;
(statearr_48709[(11)] = inst_48668);

return statearr_48709;
})();
if(cljs.core.truth_(inst_48661)){
var statearr_48710_48740 = state_48699__$1;
(statearr_48710_48740[(1)] = (7));

} else {
var statearr_48711_48741 = state_48699__$1;
(statearr_48711_48741[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (3))){
var inst_48697 = (state_48699[(2)]);
var state_48699__$1 = state_48699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48699__$1,inst_48697);
} else {
if((state_val_48700 === (12))){
var inst_48695 = (state_48699[(2)]);
var state_48699__$1 = state_48699;
var statearr_48712_48742 = state_48699__$1;
(statearr_48712_48742[(2)] = inst_48695);

(statearr_48712_48742[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (2))){
var inst_48655 = (state_48699[(7)]);
var inst_48661 = (state_48699[(8)]);
var inst_48654 = (state_48699[(9)]);
var inst_48657 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48658 = [cljs.core.cst$kw$ajax,uid];
var inst_48659 = (new cljs.core.PersistentVector(null,2,(5),inst_48657,inst_48658,null));
var inst_48660 = (function (){var n = inst_48654;
var client_ids_satisfied = inst_48655;
return ((function (n,client_ids_satisfied,inst_48655,inst_48661,inst_48654,inst_48657,inst_48658,inst_48659,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_48655,inst_48661,inst_48654,inst_48657,inst_48658,inst_48659,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__48713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_48655,inst_48661,inst_48654,inst_48657,inst_48658,inst_48659,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_48655,inst_48661,inst_48654,inst_48657,inst_48658,inst_48659,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48661__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48659,inst_48660);
var inst_48662 = (function (){var n = inst_48654;
var client_ids_satisfied = inst_48655;
var _QMARK_pulled = inst_48661__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48655,inst_48661,inst_48654,inst_48657,inst_48658,inst_48659,inst_48660,inst_48661__$1,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__48717 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__48717.cljs$core$IFn$_invoke$arity$1 ? fexpr__48717.cljs$core$IFn$_invoke$arity$1(x) : fexpr__48717.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48655,inst_48661,inst_48654,inst_48657,inst_48658,inst_48659,inst_48660,inst_48661__$1,state_val_48700,c__40884__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48663 = (inst_48662.cljs$core$IFn$_invoke$arity$1 ? inst_48662.cljs$core$IFn$_invoke$arity$1(inst_48661__$1) : inst_48662.call(null,inst_48661__$1));
var state_48699__$1 = (function (){var statearr_48718 = state_48699;
(statearr_48718[(8)] = inst_48661__$1);

return statearr_48718;
})();
if(cljs.core.truth_(inst_48663)){
var statearr_48719_48743 = state_48699__$1;
(statearr_48719_48743[(1)] = (4));

} else {
var statearr_48720_48744 = state_48699__$1;
(statearr_48720_48744[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (11))){
var state_48699__$1 = state_48699;
var statearr_48721_48745 = state_48699__$1;
(statearr_48721_48745[(2)] = null);

(statearr_48721_48745[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (9))){
var inst_48655 = (state_48699[(7)]);
var inst_48654 = (state_48699[(9)]);
var inst_48678 = (state_48699[(10)]);
var inst_48676 = (state_48699[(2)]);
var inst_48677 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_48655,inst_48676);
var inst_48678__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_48654);
var state_48699__$1 = (function (){var statearr_48722 = state_48699;
(statearr_48722[(10)] = inst_48678__$1);

(statearr_48722[(12)] = inst_48677);

return statearr_48722;
})();
if(cljs.core.truth_(inst_48678__$1)){
var statearr_48723_48746 = state_48699__$1;
(statearr_48723_48746[(1)] = (10));

} else {
var statearr_48724_48747 = state_48699__$1;
(statearr_48724_48747[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (5))){
var inst_48661 = (state_48699[(8)]);
var inst_48666 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",723,"([:or nil? map?] ?pulled)",inst_48661,null,null);
var state_48699__$1 = state_48699;
var statearr_48725_48748 = state_48699__$1;
(statearr_48725_48748[(2)] = inst_48666);

(statearr_48725_48748[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (14))){
var state_48699__$1 = state_48699;
var statearr_48726_48749 = state_48699__$1;
(statearr_48726_48749[(2)] = null);

(statearr_48726_48749[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (16))){
var inst_48654 = (state_48699[(9)]);
var inst_48677 = (state_48699[(12)]);
var inst_48687 = (state_48699[(2)]);
var inst_48688 = (inst_48654 + (1));
var inst_48654__$1 = inst_48688;
var inst_48655 = inst_48677;
var state_48699__$1 = (function (){var statearr_48727 = state_48699;
(statearr_48727[(7)] = inst_48655);

(statearr_48727[(13)] = inst_48687);

(statearr_48727[(9)] = inst_48654__$1);

return statearr_48727;
})();
var statearr_48728_48750 = state_48699__$1;
(statearr_48728_48750[(2)] = null);

(statearr_48728_48750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (10))){
var inst_48677 = (state_48699[(12)]);
var inst_48680 = cljs.core.complement(inst_48677);
var inst_48681 = taoensso.encore.rsome(inst_48680,client_ids_unsatisfied);
var state_48699__$1 = state_48699;
if(cljs.core.truth_(inst_48681)){
var statearr_48729_48751 = state_48699__$1;
(statearr_48729_48751[(1)] = (13));

} else {
var statearr_48730_48752 = state_48699__$1;
(statearr_48730_48752[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (8))){
var state_48699__$1 = state_48699;
var statearr_48731_48753 = state_48699__$1;
(statearr_48731_48753[(2)] = null);

(statearr_48731_48753[(1)] = (9));


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
});})(c__40884__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__40693__auto__,c__40884__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto____0 = (function (){
var statearr_48732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48732[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto__);

(statearr_48732[(1)] = (1));

return statearr_48732;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto____1 = (function (state_48699){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48699);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48733){if((e48733 instanceof Object)){
var ex__40697__auto__ = e48733;
var statearr_48734_48754 = state_48699;
(statearr_48734_48754[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48699);

return cljs.core.cst$kw$recur;
} else {
throw e48733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48755 = state_48699;
state_48699 = G__48755;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto__ = function(state_48699){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto____1.call(this,state_48699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__40886__auto__ = (function (){var statearr_48735 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48735[(6)] = c__40884__auto__);

return statearr_48735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__40884__auto__;
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
var G__48757 = arguments.length;
switch (G__48757) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",773,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,169797030);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",778,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1105629112);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__48759_48760 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__48759_48760) : _QMARK_cb_fn.call(null,G__48759_48760));
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
var vec__48761 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48761,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48761,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_48769 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48764){if((e48764 instanceof Error)){
var e = e48764;
return e;
} else {
throw e48764;

}
}})();
if((e_48769 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"(map? state)",state,e_48769,null);
}

var e_48770 = (function (){try{if((function (){var fexpr__48767 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__48768 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48768) : taoensso.truss.impl.set_STAR_.call(null,G__48768));
})(),x);
});
return fexpr__48767(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48765){if((e48765 instanceof Error)){
var e = e48765;
return e;
} else {
throw e48765;

}
}})();
if((e_48770 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",826,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_48770,null);
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
var e_48775 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48771){if((e48771 instanceof Error)){
var e = e48771;
return e;
} else {
throw e48771;

}
}})();
if((e_48775 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",847,"(enc/chan? ?cb)",_QMARK_cb,e_48775,null);
}

taoensso.sente.assert_event(ev);

var vec__48772 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48772,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48772,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__48772,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
;})(vec__48772,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",858,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-200555410);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",859,"(vector? clj)",clj,null,null));
var seq__48776 = cljs.core.seq(buffered_evs);
var chunk__48777 = null;
var count__48778 = (0);
var i__48779 = (0);
while(true){
if((i__48779 < count__48778)){
var ev = chunk__48777.cljs$core$IIndexed$_nth$arity$2(null,i__48779);
taoensso.sente.assert_event(ev);

var vec__48786_48792 = ev;
var id_48793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48786_48792,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_48793),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__48794 = seq__48776;
var G__48795 = chunk__48777;
var G__48796 = count__48778;
var G__48797 = (i__48779 + (1));
seq__48776 = G__48794;
chunk__48777 = G__48795;
count__48778 = G__48796;
i__48779 = G__48797;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48776);
if(temp__5720__auto__){
var seq__48776__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48776__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48776__$1);
var G__48798 = cljs.core.chunk_rest(seq__48776__$1);
var G__48799 = c__4550__auto__;
var G__48800 = cljs.core.count(c__4550__auto__);
var G__48801 = (0);
seq__48776 = G__48798;
chunk__48777 = G__48799;
count__48778 = G__48800;
i__48779 = G__48801;
continue;
} else {
var ev = cljs.core.first(seq__48776__$1);
taoensso.sente.assert_event(ev);

var vec__48789_48802 = ev;
var id_48803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48789_48802,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_48803),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__48804 = cljs.core.next(seq__48776__$1);
var G__48805 = null;
var G__48806 = (0);
var G__48807 = (0);
seq__48776 = G__48804;
chunk__48777 = G__48805;
count__48778 = G__48806;
i__48779 = G__48807;
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
var vec__48811 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48811,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__4120__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_48828 = (function (){try{if((function (){var fexpr__48817 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__48818 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48818) : taoensso.truss.impl.set_STAR_.call(null,G__48818));
})(),x);
});
return fexpr__48817(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48815){if((e48815 instanceof Error)){
var e = e48815;
return e;
} else {
throw e48815;

}
}})();
if((e_48828 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_48828,null);
}

var e_48829 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48819){if((e48819 instanceof Error)){
var e = e48819;
return e;
} else {
throw e48819;

}
}})();
if((e_48829 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",874,"(handshake? clj)",clj,e_48829,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",875,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,185879991);

var vec__48820 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48820,(0),null);
var vec__48823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48820,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48823,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48823,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48823,(2),null);
var map__48826 = chsk;
var map__48826__$1 = (((((!((map__48826 == null))))?(((((map__48826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48826):map__48826);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48826__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48826__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",894,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48820,_,vec__48823,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48826,map__48826__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__48820,_,vec__48823,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48826,map__48826__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-954207060);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__48820,_,vec__48823,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48826,map__48826__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__48814_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__48814_SHARP_,new_state], 0));
});})(vec__48820,_,vec__48823,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48826,map__48826__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
}catch (e48830){var e = e48830;
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48837,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48841 = k48837;
var G__48841__$1 = (((G__48841 instanceof cljs.core.Keyword))?G__48841.fqn:null);
switch (G__48841__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48837,else__4388__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48842){
var vec__48843 = p__48842;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48843,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48843,(1),null);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48836){
var self__ = this;
var G__48836__$1 = this;
return (new cljs.core.RecordIter((0),G__48836__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48846 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48846(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48838,other48839){
var self__ = this;
var this48838__$1 = this;
return (((!((other48839 == null)))) && ((this48838__$1.constructor === other48839.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.client_id,other48839.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.chs,other48839.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.params,other48839.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.packer,other48839.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.url,other48839.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.ws_kalive_ms,other48839.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.state_,other48839.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.instance_handle_,other48839.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.retry_count_,other48839.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.ever_opened_QMARK__,other48839.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.backoff_ms_fn,other48839.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.cbs_waiting_,other48839.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.socket_,other48839.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.udt_last_comms_,other48839.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48838__$1.__extmap,other48839.__extmap)));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48836){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48847 = cljs.core.keyword_identical_QMARK_;
var expr__48848 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48850 = cljs.core.cst$kw$client_DASH_id;
var G__48851 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48850,G__48851) : pred__48847.call(null,G__48850,G__48851));
})())){
return (new taoensso.sente.ChWebSocket(G__48836,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48852 = cljs.core.cst$kw$chs;
var G__48853 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48852,G__48853) : pred__48847.call(null,G__48852,G__48853));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__48836,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48854 = cljs.core.cst$kw$params;
var G__48855 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48854,G__48855) : pred__48847.call(null,G__48854,G__48855));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__48836,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48856 = cljs.core.cst$kw$packer;
var G__48857 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48856,G__48857) : pred__48847.call(null,G__48856,G__48857));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__48836,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48858 = cljs.core.cst$kw$url;
var G__48859 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48858,G__48859) : pred__48847.call(null,G__48858,G__48859));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48836,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48860 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__48861 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48860,G__48861) : pred__48847.call(null,G__48860,G__48861));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48836,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48862 = cljs.core.cst$kw$state_;
var G__48863 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48862,G__48863) : pred__48847.call(null,G__48862,G__48863));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__48836,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48864 = cljs.core.cst$kw$instance_DASH_handle_;
var G__48865 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48864,G__48865) : pred__48847.call(null,G__48864,G__48865));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__48836,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48866 = cljs.core.cst$kw$retry_DASH_count_;
var G__48867 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48866,G__48867) : pred__48847.call(null,G__48866,G__48867));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__48836,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48868 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__48869 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48868,G__48869) : pred__48847.call(null,G__48868,G__48869));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__48836,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48870 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__48871 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48870,G__48871) : pred__48847.call(null,G__48870,G__48871));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__48836,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48872 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__48873 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48872,G__48873) : pred__48847.call(null,G__48872,G__48873));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48836,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48874 = cljs.core.cst$kw$socket_;
var G__48875 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48874,G__48875) : pred__48847.call(null,G__48874,G__48875));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__48836,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48876 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__48877 = expr__48848;
return (pred__48847.cljs$core$IFn$_invoke$arity$2 ? pred__48847.cljs$core$IFn$_invoke$arity$2(G__48876,G__48877) : pred__48847.call(null,G__48876,G__48877));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__48836,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48836),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48836){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__48836,self__.__extmap,self__.__hash));
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
return (function (p1__48831_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48831_SHARP_,reason);
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
var map__48878 = opts;
var map__48878__$1 = (((((!((map__48878 == null))))?(((((map__48878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48878):map__48878);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48878__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48878__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48878__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5720__auto___48960 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___48960)){
var cb_uuid_48961 = temp__5720__auto___48960;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_48961], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48880){if((e48880 instanceof Error)){
var e = e48880;
return e;
} else {
throw e48880;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",964,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5720__auto___48962__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5720__auto___48962__$1)){
var timeout_ms_48963 = temp__5720__auto___48962__$1;
var c__40884__auto___48964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___48964,timeout_ms_48963,temp__5720__auto___48962__$1,cb_uuid_48961,temp__5720__auto___48960,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___48964,timeout_ms_48963,temp__5720__auto___48962__$1,cb_uuid_48961,temp__5720__auto___48960,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_48891){
var state_val_48892 = (state_48891[(1)]);
if((state_val_48892 === (1))){
var inst_48881 = cljs.core.async.timeout(timeout_ms_48963);
var state_48891__$1 = state_48891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48891__$1,(2),inst_48881);
} else {
if((state_val_48892 === (2))){
var inst_48884 = (state_48891[(7)]);
var inst_48883 = (state_48891[(2)]);
var inst_48884__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_48891__$1 = (function (){var statearr_48893 = state_48891;
(statearr_48893[(7)] = inst_48884__$1);

(statearr_48893[(8)] = inst_48883);

return statearr_48893;
})();
if(cljs.core.truth_(inst_48884__$1)){
var statearr_48894_48965 = state_48891__$1;
(statearr_48894_48965[(1)] = (3));

} else {
var statearr_48895_48966 = state_48891__$1;
(statearr_48895_48966[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48892 === (3))){
var inst_48884 = (state_48891[(7)]);
var inst_48886 = (function (){var G__48896 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_48884.cljs$core$IFn$_invoke$arity$1 ? inst_48884.cljs$core$IFn$_invoke$arity$1(G__48896) : inst_48884.call(null,G__48896));
})();
var state_48891__$1 = state_48891;
var statearr_48897_48967 = state_48891__$1;
(statearr_48897_48967[(2)] = inst_48886);

(statearr_48897_48967[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48892 === (4))){
var state_48891__$1 = state_48891;
var statearr_48898_48968 = state_48891__$1;
(statearr_48898_48968[(2)] = null);

(statearr_48898_48968[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48892 === (5))){
var inst_48889 = (state_48891[(2)]);
var state_48891__$1 = state_48891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48891__$1,inst_48889);
} else {
return null;
}
}
}
}
}
});})(c__40884__auto___48964,timeout_ms_48963,temp__5720__auto___48962__$1,cb_uuid_48961,temp__5720__auto___48960,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__40693__auto__,c__40884__auto___48964,timeout_ms_48963,temp__5720__auto___48962__$1,cb_uuid_48961,temp__5720__auto___48960,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48899 = [null,null,null,null,null,null,null,null,null];
(statearr_48899[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48899[(1)] = (1));

return statearr_48899;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48891){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48891);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48900){if((e48900 instanceof Object)){
var ex__40697__auto__ = e48900;
var statearr_48901_48969 = state_48891;
(statearr_48901_48969[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48891);

return cljs.core.cst$kw$recur;
} else {
throw e48900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48970 = state_48891;
state_48891 = G__48970;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48891){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___48964,timeout_ms_48963,temp__5720__auto___48962__$1,cb_uuid_48961,temp__5720__auto___48960,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__40886__auto__ = (function (){var statearr_48902 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48902[(6)] = c__40884__auto___48964);

return statearr_48902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___48964,timeout_ms_48963,temp__5720__auto___48962__$1,cb_uuid_48961,temp__5720__auto___48960,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e48903){var e = e48903;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3001701682594866843.clj",976,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__48878,map__48878__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-870828604);

var temp__5720__auto___48971 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___48971)){
var cb_uuid_48972 = temp__5720__auto___48971;
var cb_fn_STAR__48973 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_48972);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48904){if((e48904 instanceof Error)){
var e__$1 = e48904;
return e__$1;
} else {
throw e48904;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",979,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__48905_48974 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__48973.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__48973.cljs$core$IFn$_invoke$arity$1(G__48905_48974) : cb_fn_STAR__48973.call(null,G__48905_48974));
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1001,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,441522864);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48832_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48832_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e48906){var e = e48906;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1015,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,740041305);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__48907 = _QMARK_socket;
(G__48907["onerror"] = ((function (G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1025,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e48908){var _ = e48908;
return ws_ev;
}})()], null);
});})(G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1691037894);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48833_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48833_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
});})(G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__48907["onmessage"] = ((function (G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__48909 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48909,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48909,(1),null);
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
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1061,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__48909,clj,_QMARK_cb_uuid,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__48909,clj,_QMARK_cb_uuid,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1717231970);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__48907["onclose"] = ((function (G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1083,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1344936050);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48834_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48834_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48835_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__48835_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__48907,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return G__48907;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var temp__5720__auto___48975__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5720__auto___48975__$1)){
var ms_48976 = temp__5720__auto___48975__$1;
var c__40884__auto___48977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___48977,ms_48976,temp__5720__auto___48975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___48977,ms_48976,temp__5720__auto___48975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (state_48939){
var state_val_48940 = (state_48939[(1)]);
if((state_val_48940 === (7))){
var inst_48935 = (state_48939[(2)]);
var state_48939__$1 = state_48939;
var statearr_48941_48978 = state_48939__$1;
(statearr_48941_48978[(2)] = inst_48935);

(statearr_48941_48978[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48940 === (1))){
var state_48939__$1 = state_48939;
var statearr_48942_48979 = state_48939__$1;
(statearr_48942_48979[(2)] = null);

(statearr_48942_48979[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48940 === (4))){
var inst_48916 = (state_48939[(2)]);
var inst_48917 = have_handle_QMARK_();
var state_48939__$1 = (function (){var statearr_48943 = state_48939;
(statearr_48943[(7)] = inst_48916);

return statearr_48943;
})();
if(inst_48917){
var statearr_48944_48980 = state_48939__$1;
(statearr_48944_48980[(1)] = (5));

} else {
var statearr_48945_48981 = state_48939__$1;
(statearr_48945_48981[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48940 === (6))){
var state_48939__$1 = state_48939;
var statearr_48946_48982 = state_48939__$1;
(statearr_48946_48982[(2)] = null);

(statearr_48946_48982[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48940 === (3))){
var inst_48937 = (state_48939[(2)]);
var state_48939__$1 = state_48939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48939__$1,inst_48937);
} else {
if((state_val_48940 === (2))){
var inst_48913 = cljs.core.deref(self__.udt_last_comms_);
var inst_48914 = cljs.core.async.timeout(ms_48976);
var state_48939__$1 = (function (){var statearr_48947 = state_48939;
(statearr_48947[(8)] = inst_48913);

return statearr_48947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48939__$1,(4),inst_48914);
} else {
if((state_val_48940 === (9))){
var state_48939__$1 = state_48939;
var statearr_48948_48983 = state_48939__$1;
(statearr_48948_48983[(2)] = null);

(statearr_48948_48983[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48940 === (5))){
var inst_48913 = (state_48939[(8)]);
var inst_48919 = cljs.core.deref(self__.udt_last_comms_);
var inst_48920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48913,inst_48919);
var state_48939__$1 = state_48939;
if(inst_48920){
var statearr_48949_48984 = state_48939__$1;
(statearr_48949_48984[(1)] = (8));

} else {
var statearr_48950_48985 = state_48939__$1;
(statearr_48950_48985[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48940 === (10))){
var inst_48931 = (state_48939[(2)]);
var state_48939__$1 = (function (){var statearr_48951 = state_48939;
(statearr_48951[(9)] = inst_48931);

return statearr_48951;
})();
var statearr_48952_48986 = state_48939__$1;
(statearr_48952_48986[(2)] = null);

(statearr_48952_48986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48940 === (8))){
var inst_48922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48923 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_48924 = (new cljs.core.PersistentVector(null,1,(5),inst_48922,inst_48923,null));
var inst_48925 = [cljs.core.cst$kw$flush_QMARK_];
var inst_48926 = [true];
var inst_48927 = cljs.core.PersistentHashMap.fromArrays(inst_48925,inst_48926);
var inst_48928 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_48924,inst_48927);
var state_48939__$1 = state_48939;
var statearr_48953_48987 = state_48939__$1;
(statearr_48953_48987[(2)] = inst_48928);

(statearr_48953_48987[(1)] = (10));


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
});})(c__40884__auto___48977,ms_48976,temp__5720__auto___48975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
;
return ((function (switch__40693__auto__,c__40884__auto___48977,ms_48976,temp__5720__auto___48975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40694__auto__ = null;
var taoensso$sente$state_machine__40694__auto____0 = (function (){
var statearr_48954 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48954[(0)] = taoensso$sente$state_machine__40694__auto__);

(statearr_48954[(1)] = (1));

return statearr_48954;
});
var taoensso$sente$state_machine__40694__auto____1 = (function (state_48939){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_48939);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e48955){if((e48955 instanceof Object)){
var ex__40697__auto__ = e48955;
var statearr_48956_48988 = state_48939;
(statearr_48956_48988[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48939);

return cljs.core.cst$kw$recur;
} else {
throw e48955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__48989 = state_48939;
state_48939 = G__48989;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$state_machine__40694__auto__ = function(state_48939){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40694__auto____1.call(this,state_48939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40694__auto____0;
taoensso$sente$state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40694__auto____1;
return taoensso$sente$state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___48977,ms_48976,temp__5720__auto___48975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
})();
var state__40886__auto__ = (function (){var statearr_48957 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_48957[(6)] = c__40884__auto___48977);

return statearr_48957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___48977,ms_48976,temp__5720__auto___48975__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
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
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__48840){
var extmap__4424__auto__ = (function (){var G__48958 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48840,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0));
if(cljs.core.record_QMARK_(G__48840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48958);
} else {
return G__48958;
}
})();
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__48840),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__48840),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48997,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49001 = k48997;
var G__49001__$1 = (((G__49001 instanceof cljs.core.Keyword))?G__49001.fqn:null);
switch (G__49001__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48997,else__4388__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49002){
var vec__49003 = p__49002;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49003,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49003,(1),null);
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48996){
var self__ = this;
var G__48996__$1 = this;
return (new cljs.core.RecordIter((0),G__48996__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49006 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49006(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48998,other48999){
var self__ = this;
var this48998__$1 = this;
return (((!((other48999 == null)))) && ((this48998__$1.constructor === other48999.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.client_id,other48999.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.chs,other48999.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.params,other48999.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.packer,other48999.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.url,other48999.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.state_,other48999.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.instance_handle_,other48999.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.ever_opened_QMARK__,other48999.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.backoff_ms_fn,other48999.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.ajax_opts,other48999.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.curr_xhr_,other48999.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48998__$1.__extmap,other48999.__extmap)));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48996){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49007 = cljs.core.keyword_identical_QMARK_;
var expr__49008 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49010 = cljs.core.cst$kw$client_DASH_id;
var G__49011 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49010,G__49011) : pred__49007.call(null,G__49010,G__49011));
})())){
return (new taoensso.sente.ChAjaxSocket(G__48996,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49012 = cljs.core.cst$kw$chs;
var G__49013 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49012,G__49013) : pred__49007.call(null,G__49012,G__49013));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__48996,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49014 = cljs.core.cst$kw$params;
var G__49015 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49014,G__49015) : pred__49007.call(null,G__49014,G__49015));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__48996,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49016 = cljs.core.cst$kw$packer;
var G__49017 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49016,G__49017) : pred__49007.call(null,G__49016,G__49017));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__48996,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49018 = cljs.core.cst$kw$url;
var G__49019 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49018,G__49019) : pred__49007.call(null,G__49018,G__49019));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48996,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49020 = cljs.core.cst$kw$state_;
var G__49021 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49020,G__49021) : pred__49007.call(null,G__49020,G__49021));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48996,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49022 = cljs.core.cst$kw$instance_DASH_handle_;
var G__49023 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49022,G__49023) : pred__49007.call(null,G__49022,G__49023));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__48996,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49024 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__49025 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49024,G__49025) : pred__49007.call(null,G__49024,G__49025));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__48996,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49026 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__49027 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49026,G__49027) : pred__49007.call(null,G__49026,G__49027));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__48996,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49028 = cljs.core.cst$kw$ajax_DASH_opts;
var G__49029 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49028,G__49029) : pred__49007.call(null,G__49028,G__49029));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48996,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49030 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__49031 = expr__49008;
return (pred__49007.cljs$core$IFn$_invoke$arity$2 ? pred__49007.cljs$core$IFn$_invoke$arity$2(G__49030,G__49031) : pred__49007.call(null,G__49030,G__49031));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__48996,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48996),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48996){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__48996,self__.__extmap,self__.__hash));
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
return (function (p1__48990_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48990_SHARP_,reason);
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
var map__49032 = opts;
var map__49032__$1 = (((((!((map__49032 == null))))?(((((map__49032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49032):map__49032);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49032__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49032__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49032__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__49034_49056 = self__.url;
var G__49035_49057 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = _QMARK_timeout_ms;
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
var G__49036_49058 = ((function (G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__49037){
var map__49038 = p__49037;
var map__49038__$1 = (((((!((map__49038 == null))))?(((((map__49038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49038):map__49038);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__49040 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__49040) : _QMARK_cb_fn.call(null,G__49040));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__49038,map__49038__$1,_QMARK_error,_QMARK_content,G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48991_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48991_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__49038,map__49038__$1,_QMARK_error,_QMARK_content,G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__49041 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__49041) : _QMARK_cb_fn.call(null,G__49041));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__49042 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49042,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49042,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1203,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__49042,resp_clj,___$1,map__49038,map__49038__$1,_QMARK_error,_QMARK_content,G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__49042,resp_clj,___$1,map__49038,map__49038__$1,_QMARK_error,_QMARK_content,G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-955171535);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__49042,resp_clj,___$1,map__49038,map__49038__$1,_QMARK_error,_QMARK_content,G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48992_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48992_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__49042,resp_clj,___$1,map__49038,map__49038__$1,_QMARK_error,_QMARK_content,G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__49034_49056,G__49035_49057,csrf_token,map__49032,map__49032__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__49034_49056,G__49035_49057,G__49036_49058) : taoensso.sente.ajax_lite.call(null,G__49034_49056,G__49035_49057,G__49036_49058));

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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1213,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,456045213);

if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1610981222);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48993_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48993_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__49045 = self__.url;
var G__49046 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__49047 = ((function (G__49045,G__49046,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__49048){
var map__49049 = p__49048;
var map__49049__$1 = (((((!((map__49049 == null))))?(((((map__49049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49049):map__49049);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49049__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49049__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__49049,map__49049__$1,_QMARK_error,_QMARK_content,G__49045,G__49046,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48994_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48994_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__49049,map__49049__$1,_QMARK_error,_QMARK_content,G__49045,G__49046,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__49051 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49051,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__49051,clj,handshake_QMARK_,map__49049,map__49049__$1,_QMARK_error,_QMARK_content,G__49045,G__49046,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48995_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48995_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__49051,clj,handshake_QMARK_,map__49049,map__49049__$1,_QMARK_error,_QMARK_content,G__49045,G__49046,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
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
});})(G__49045,G__49046,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__49045,G__49046,G__49047) : taoensso.sente.ajax_lite.call(null,G__49045,G__49046,G__49047));
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
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__49000){
var extmap__4424__auto__ = (function (){var G__49054 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49000,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0));
if(cljs.core.record_QMARK_(G__49000)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49054);
} else {
return G__49054;
}
})();
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__49000),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__49000),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49060,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49064 = k49060;
var G__49064__$1 = (((G__49064 instanceof cljs.core.Keyword))?G__49064.fqn:null);
switch (G__49064__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49060,else__4388__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49065){
var vec__49066 = p__49065;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49066,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49066,(1),null);
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49059){
var self__ = this;
var G__49059__$1 = this;
return (new cljs.core.RecordIter((0),G__49059__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49069 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49069(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49061,other49062){
var self__ = this;
var this49061__$1 = this;
return (((!((other49062 == null)))) && ((this49061__$1.constructor === other49062.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49061__$1.ws_chsk_opts,other49062.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49061__$1.ajax_chsk_opts,other49062.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49061__$1.state_,other49062.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49061__$1.impl_,other49062.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49061__$1.__extmap,other49062.__extmap)));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49059){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49070 = cljs.core.keyword_identical_QMARK_;
var expr__49071 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49073 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__49074 = expr__49071;
return (pred__49070.cljs$core$IFn$_invoke$arity$2 ? pred__49070.cljs$core$IFn$_invoke$arity$2(G__49073,G__49074) : pred__49070.call(null,G__49073,G__49074));
})())){
return (new taoensso.sente.ChAutoSocket(G__49059,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49075 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__49076 = expr__49071;
return (pred__49070.cljs$core$IFn$_invoke$arity$2 ? pred__49070.cljs$core$IFn$_invoke$arity$2(G__49075,G__49076) : pred__49070.call(null,G__49075,G__49076));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__49059,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49077 = cljs.core.cst$kw$state_;
var G__49078 = expr__49071;
return (pred__49070.cljs$core$IFn$_invoke$arity$2 ? pred__49070.cljs$core$IFn$_invoke$arity$2(G__49077,G__49078) : pred__49070.call(null,G__49077,G__49078));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__49059,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49079 = cljs.core.cst$kw$impl_;
var G__49080 = expr__49071;
return (pred__49070.cljs$core$IFn$_invoke$arity$2 ? pred__49070.cljs$core$IFn$_invoke$arity$2(G__49079,G__49080) : pred__49070.call(null,G__49079,G__49080));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__49059,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49059),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49059){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__49059,self__.__extmap,self__.__hash));
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
var map__49081 = opts;
var map__49081__$1 = (((((!((map__49081 == null))))?(((((map__49081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49081):map__49081);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49081__$1,cljs.core.cst$kw$cb);
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
var downgraded_QMARK___49085 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___49085,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___49085,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1349,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___49085,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___49085,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1200838130);

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
});})(downgraded_QMARK___49085,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
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
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__49063){
var extmap__4424__auto__ = (function (){var G__49083 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49063,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0));
if(cljs.core.record_QMARK_(G__49063)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49083);
} else {
return G__49083;
}
})();
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__49063),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__49063),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__49063),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__49063),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$impl_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__49086 = protocol;
var G__49086__$1 = (((G__49086 instanceof cljs.core.Keyword))?G__49086.fqn:null);
switch (G__49086__$1) {
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
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__49089 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__49090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__49090) : taoensso.truss.impl.set_STAR_.call(null,G__49090));
})(),x);
});})(protocol__$1))
;
return fexpr__49089(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49087){if((e49087 instanceof Error)){
var e = e49087;
return e;
} else {
throw e49087;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1369,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__49091 = type;
var G__49091__$1 = (((G__49091 instanceof cljs.core.Keyword))?G__49091.fqn:null);
switch (G__49091__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__49092 = protocol__$2;
switch (G__49092) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49092)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49091__$1)].join('')));

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
var len__4730__auto___49122 = arguments.length;
var i__4731__auto___49123 = (0);
while(true){
if((i__4731__auto___49123 < len__4730__auto___49122)){
args__4736__auto__.push((arguments[i__4731__auto___49123]));

var G__49124 = (i__4731__auto___49123 + (1));
i__4731__auto___49123 = G__49124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__49098){
var vec__49099 = p__49098;
var map__49102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49099,(0),null);
var map__49102__$1 = (((((!((map__49102 == null))))?(((((map__49102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49102):map__49102);
var opts = map__49102__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49102__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49102__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__4131__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49102__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49102__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49102__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49102__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49102__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49099,(1),null);
var e_49125 = (function (){try{if((function (){var fexpr__49106 = ((function (vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__49107 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__49107) : taoensso.truss.impl.set_STAR_.call(null,G__49107));
})(),x);
});})(vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__49106(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49104){if((e49104 instanceof Error)){
var e = e49104;
return e;
} else {
throw e49104;

}
}})();
if((e_49125 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"([:in #{:ws :ajax :auto}] type)",type,e_49125,null);
}

var e_49126 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49108){if((e49108 instanceof Error)){
var e = e49108;
return e;
} else {
throw e49108;

}
}})();
if((e_49126 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1412,"(enc/nblank-str? client-id)",client_id,e_49126,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1414,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1028494230);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1415,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,751612876);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__49109 = (function (){var win_loc = taoensso.encore.get_win_loc();
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49112 = path__$1;
var G__49113 = win_loc;
var G__49114 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__49112,G__49113,G__49114) : f.call(null,G__49112,G__49113,G__49114));
})(),(function (){var G__49115 = path__$1;
var G__49116 = win_loc;
var G__49117 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__49115,G__49116,G__49117) : f.call(null,G__49115,G__49116,G__49117));
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
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49109,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49109,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__49109,ws_url,ajax_url,vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__49109,ws_url,ajax_url,vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__49118 = type;
var G__49118__$1 = (((G__49118 instanceof cljs.core.Keyword))?G__49118.fqn:null);
switch (G__49118__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49118__$1)].join('')));

}
})());
var temp__5718__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5718__auto__)){
var chsk = temp__5718__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__49109,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__49119 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49119,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49119,(1),null);
var ev__$1 = vec__49119;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__49109,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1503,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,packer__$1,vec__49109,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5718__auto__,packer__$1,vec__49109,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__49099,map__49102,map__49102__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,698062563);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq49096){
var G__49097 = cljs.core.first(seq49096);
var seq49096__$1 = cljs.core.next(seq49096);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49097,seq49096__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__49128 = opts;
var map__49128__$1 = (((((!((map__49128 == null))))?(((((map__49128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49128):map__49128);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49128__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49128__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49128__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__40884__auto___49208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__40885__auto__ = (function (){var switch__40693__auto__ = ((function (c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_49177){
var state_val_49178 = (state_49177[(1)]);
if((state_val_49178 === (7))){
var inst_49173 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
var statearr_49179_49209 = state_49177__$1;
(statearr_49179_49209[(2)] = inst_49173);

(statearr_49179_49209[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (1))){
var state_49177__$1 = state_49177;
var statearr_49180_49210 = state_49177__$1;
(statearr_49180_49210[(2)] = null);

(statearr_49180_49210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (4))){
var inst_49143 = (state_49177[(7)]);
var inst_49138 = (state_49177[(8)]);
var inst_49139 = (state_49177[(9)]);
var inst_49140 = (state_49177[(10)]);
var inst_49138__$1 = (state_49177[(2)]);
var inst_49139__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49138__$1,(0),null);
var inst_49140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49138__$1,(1),null);
var inst_49141 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49140__$1,ch_ctrl);
var inst_49142 = (inst_49139__$1 == null);
var inst_49143__$1 = ((inst_49141) || (inst_49142));
var state_49177__$1 = (function (){var statearr_49181 = state_49177;
(statearr_49181[(7)] = inst_49143__$1);

(statearr_49181[(8)] = inst_49138__$1);

(statearr_49181[(9)] = inst_49139__$1);

(statearr_49181[(10)] = inst_49140__$1);

return statearr_49181;
})();
if(cljs.core.truth_(inst_49143__$1)){
var statearr_49182_49211 = state_49177__$1;
(statearr_49182_49211[(1)] = (5));

} else {
var statearr_49183_49212 = state_49177__$1;
(statearr_49183_49212[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (15))){
var inst_49139 = (state_49177[(9)]);
var state_49177__$1 = state_49177;
var statearr_49184_49213 = state_49177__$1;
(statearr_49184_49213[(2)] = inst_49139);

(statearr_49184_49213[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (13))){
var inst_49159 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
var statearr_49185_49214 = state_49177__$1;
(statearr_49185_49214[(2)] = inst_49159);

(statearr_49185_49214[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (6))){
var inst_49139 = (state_49177[(9)]);
var inst_49148 = (inst_49139 == null);
var inst_49149 = cljs.core.not(inst_49148);
var state_49177__$1 = state_49177;
if(inst_49149){
var statearr_49186_49215 = state_49177__$1;
(statearr_49186_49215[(1)] = (8));

} else {
var statearr_49187_49216 = state_49177__$1;
(statearr_49187_49216[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (3))){
var inst_49175 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49177__$1,inst_49175);
} else {
if((state_val_49178 === (12))){
var state_49177__$1 = state_49177;
var statearr_49188_49217 = state_49177__$1;
(statearr_49188_49217[(2)] = false);

(statearr_49188_49217[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (2))){
var inst_49134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49135 = [ch_recv,ch_ctrl];
var inst_49136 = (new cljs.core.PersistentVector(null,2,(5),inst_49134,inst_49135,null));
var state_49177__$1 = state_49177;
return cljs.core.async.ioc_alts_BANG_(state_49177__$1,(4),inst_49136);
} else {
if((state_val_49178 === (11))){
var state_49177__$1 = state_49177;
var statearr_49189_49218 = state_49177__$1;
(statearr_49189_49218[(2)] = true);

(statearr_49189_49218[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (9))){
var state_49177__$1 = state_49177;
var statearr_49190_49219 = state_49177__$1;
(statearr_49190_49219[(2)] = false);

(statearr_49190_49219[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (5))){
var state_49177__$1 = state_49177;
var statearr_49191_49220 = state_49177__$1;
(statearr_49191_49220[(2)] = null);

(statearr_49191_49220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (14))){
var inst_49139 = (state_49177[(9)]);
var inst_49164 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49139);
var state_49177__$1 = state_49177;
var statearr_49192_49221 = state_49177__$1;
(statearr_49192_49221[(2)] = inst_49164);

(statearr_49192_49221[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (16))){
var inst_49143 = (state_49177[(7)]);
var inst_49138 = (state_49177[(8)]);
var inst_49139 = (state_49177[(9)]);
var inst_49140 = (state_49177[(10)]);
var inst_49167 = (state_49177[(2)]);
var inst_49168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49167,cljs.core.cst$kw$event);
var inst_49169 = (function (){var vec__49131 = inst_49138;
var v = inst_49139;
var p = inst_49140;
var stop_QMARK_ = inst_49143;
var map__49146 = inst_49167;
var event_msg = inst_49167;
var event = inst_49168;
return ((function (vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1530,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-646083365);
} else {
}

var G__49195 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49196){if((e49196 instanceof Error)){
var e = e49196;
return e;
} else {
throw e49196;

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
}catch (e49197){if((e49197 instanceof Error)){
var e = e49197;
return e;
} else {
throw e49197;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1534,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__49195) : event_msg_handler.call(null,G__49195));
}catch (e49193){if((e49193 instanceof Error)){
var e1 = e49193;
try{var temp__5718__auto__ = error_handler;
if(cljs.core.truth_(temp__5718__auto__)){
var eh = temp__5718__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1539,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,e1,vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5718__auto__,e1,vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1918516272);
}
}catch (e49194){if((e49194 instanceof Error)){
var e2 = e49194;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3001701682594866843.clj",1540,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-349935794);
} else {
throw e49194;

}
}} else {
throw e49193;

}
}});
;})(vec__49131,v,p,stop_QMARK_,map__49146,event_msg,event,inst_49143,inst_49138,inst_49139,inst_49140,inst_49167,inst_49168,state_val_49178,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_49170 = execute1(inst_49169);
var state_49177__$1 = (function (){var statearr_49198 = state_49177;
(statearr_49198[(11)] = inst_49170);

return statearr_49198;
})();
var statearr_49199_49222 = state_49177__$1;
(statearr_49199_49222[(2)] = null);

(statearr_49199_49222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (10))){
var inst_49162 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49162)){
var statearr_49200_49223 = state_49177__$1;
(statearr_49200_49223[(1)] = (14));

} else {
var statearr_49201_49224 = state_49177__$1;
(statearr_49201_49224[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49178 === (8))){
var inst_49139 = (state_49177[(9)]);
var inst_49151 = inst_49139.cljs$lang$protocol_mask$partition0$;
var inst_49152 = (inst_49151 & (64));
var inst_49153 = inst_49139.cljs$core$ISeq$;
var inst_49154 = (cljs.core.PROTOCOL_SENTINEL === inst_49153);
var inst_49155 = ((inst_49152) || (inst_49154));
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49155)){
var statearr_49202_49225 = state_49177__$1;
(statearr_49202_49225[(1)] = (11));

} else {
var statearr_49203_49226 = state_49177__$1;
(statearr_49203_49226[(1)] = (12));

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
});})(c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__40693__auto__,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto____0 = (function (){
var statearr_49204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49204[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto__);

(statearr_49204[(1)] = (1));

return statearr_49204;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto____1 = (function (state_49177){
while(true){
var ret_value__40695__auto__ = (function (){try{while(true){
var result__40696__auto__ = switch__40693__auto__(state_49177);
if(cljs.core.keyword_identical_QMARK_(result__40696__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40696__auto__;
}
break;
}
}catch (e49205){if((e49205 instanceof Object)){
var ex__40697__auto__ = e49205;
var statearr_49206_49227 = state_49177;
(statearr_49206_49227[(5)] = ex__40697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49177);

return cljs.core.cst$kw$recur;
} else {
throw e49205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40695__auto__,cljs.core.cst$kw$recur)){
var G__49228 = state_49177;
state_49177 = G__49228;
continue;
} else {
return ret_value__40695__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto__ = function(state_49177){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto____1.call(this,state_49177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40694__auto__;
})()
;})(switch__40693__auto__,c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__40886__auto__ = (function (){var statearr_49207 = (f__40885__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40885__auto__.cljs$core$IFn$_invoke$arity$0() : f__40885__auto__.call(null));
(statearr_49207[(6)] = c__40884__auto___49208);

return statearr_49207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40886__auto__);
});})(c__40884__auto___49208,map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__49128,map__49128__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var len__4730__auto___49238 = arguments.length;
var i__4731__auto___49239 = (0);
while(true){
if((i__4731__auto___49239 < len__4730__auto___49238)){
args__4736__auto__.push((arguments[i__4731__auto___49239]));

var G__49240 = (i__4731__auto___49239 + (1));
i__4731__auto___49239 = G__49240;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49232){
var vec__49233 = p__49232;
var map__49236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(0),null);
var map__49236__$1 = (((((!((map__49236 == null))))?(((((map__49236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49236):map__49236);
var opts = map__49236__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49236__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49236__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49236__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49229){
var G__49230 = cljs.core.first(seq49229);
var seq49229__$1 = cljs.core.next(seq49229);
var G__49231 = cljs.core.first(seq49229__$1);
var seq49229__$2 = cljs.core.next(seq49229__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49230,G__49231,seq49229__$2);
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
var len__4730__auto___49250 = arguments.length;
var i__4731__auto___49251 = (0);
while(true){
if((i__4731__auto___49251 < len__4730__auto___49250)){
args__4736__auto__.push((arguments[i__4731__auto___49251]));

var G__49252 = (i__4731__auto___49251 + (1));
i__4731__auto___49251 = G__49252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49244){
var vec__49245 = p__49244;
var map__49248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49245,(0),null);
var map__49248__$1 = (((((!((map__49248 == null))))?(((((map__49248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49248):map__49248);
var opts = map__49248__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49248__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49248__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49241){
var G__49242 = cljs.core.first(seq49241);
var seq49241__$1 = cljs.core.next(seq49241);
var G__49243 = cljs.core.first(seq49241__$1);
var seq49241__$2 = cljs.core.next(seq49241__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49242,G__49243,seq49241__$2);
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
var G__49253 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__49254 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__49253,G__49254) : event_handler.call(null,G__49253,G__49254));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__49255,websocket_QMARK_){
var map__49256 = p__49255;
var map__49256__$1 = (((((!((map__49256 == null))))?(((((map__49256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49256):map__49256);
var location = map__49256__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49256__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49256__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49256__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pathname;
}
})())].join('');
});
