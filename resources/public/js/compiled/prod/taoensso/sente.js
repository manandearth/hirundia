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
if(cljs.core.not((function (){var G__47902 = cljs.core.count(x);
var fexpr__47901 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__47901.cljs$core$IFn$_invoke$arity$1 ? fexpr__47901.cljs$core$IFn$_invoke$arity$1(G__47902) : fexpr__47901.call(null,G__47902));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__47903 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47903,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47903,(1),null);
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
var map__47910 = x;
var map__47910__$1 = (((((!((map__47910 == null))))?(((((map__47910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47910):map__47910);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47910__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47910__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47910__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47910__$1,cljs.core.cst$kw$event);
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
var map__47916 = x;
var map__47916__$1 = (((((!((map__47916 == null))))?(((((map__47916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47916):map__47916);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47916__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__47918){
var map__47919 = p__47918;
var map__47919__$1 = (((((!((map__47919 == null))))?(((((map__47919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47919):map__47919);
var ev_msg = map__47919__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47919__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47919__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__47921 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47921,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47921,(1),null);
var valid_event = vec__47921;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__47921,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__47919,map__47919__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__47921,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__47919,map__47919__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,1241857213);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__47924 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null);
return (fexpr__47924.cljs$core$IFn$_invoke$arity$1 ? fexpr__47924.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__47924.call(null,cb_reply_clj));
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
}catch (e47928){var t = e47928;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3380024122365337506.clj",208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-165658244);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__47925 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__47925,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__47925,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-385458191);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__47930 = arguments.length;
switch (G__47930) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,-1445424259);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",230,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,374337784);

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
var e = (function (){try{if((function (){var fexpr__47935 = (function (p1__47932_SHARP_){
if((!((p1__47932_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__47932_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__47932_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__47932_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__47932_SHARP_);
}
});
return fexpr__47935(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47933){if((e47933 instanceof Error)){
var e = e47933;
return e;
} else {
throw e47933;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__47932#] (satisfies? interfaces/IPacker p1__47932#)) x)",x,e,null);
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
var len__4730__auto___48249 = arguments.length;
var i__4731__auto___48250 = (0);
while(true){
if((i__4731__auto___48250 < len__4730__auto___48249)){
args__4736__auto__.push((arguments[i__4731__auto___48250]));

var G__48251 = (i__4731__auto___48250 + (1));
i__4731__auto___48250 = G__48251;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__47940){
var vec__47941 = p__47940;
var map__47944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47941,(0),null);
var map__47944__$1 = (((((!((map__47944 == null))))?(((((map__47944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47944):map__47944);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms){
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
});})(vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax){
return (function (ring_req){
return null;
});})(vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax))
);
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn))
);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47944__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47946){if((e47946 instanceof Error)){
var e = e47946;
return e;
} else {
throw e47946;

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
}catch (e47947){if((e47947 instanceof Error)){
var e = e47947;
return e;
} else {
throw e47947;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_48252 = (function (){try{if((function (){var fexpr__47950 = ((function (vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p1__47937_SHARP_){
if((!((p1__47937_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__47937_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__47937_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__47937_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__47937_SHARP_);
}
});})(vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return fexpr__47950(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47948){if((e47948 instanceof Error)){
var e = e47948;
return e;
} else {
throw e47948;

}
}})();
if((e_48252 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",315,"((fn* [p1__47937#] (satisfies? interfaces/IServerChanAdapter p1__47937#)) web-server-ch-adapter)",web_server_ch_adapter,e_48252,null);
}

var max_ms_48253 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_48253)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_48253)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_48253], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req,client_id){
var or__4131__auto__ = (function (){var G__47953 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__47953) : user_id_fn.call(null,G__47953));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var G__48254 = null;
var G__48254__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var vec__47954 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47954,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47954,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
var G__48254__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
});
G__48254 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__48254__3.call(this,conn_type,uid,client_id);
case 4:
return G__48254__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48254.cljs$core$IFn$_invoke$arity$3 = G__48254__3;
G__48254.cljs$core$IFn$_invoke$arity$4 = G__48254__4;
return G__48254;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47957){if((e47957 instanceof Error)){
var e = e47957;
return e;
} else {
throw e47957;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__47958){
var map__47959 = p__47958;
var map__47959__$1 = (((((!((map__47959 == null))))?(((((map__47959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47959):map__47959);
var old_m = map__47959__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47959__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47959__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47959__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__47961 = conn_type;
var G__47961__$1 = (((G__47961 instanceof cljs.core.Keyword))?G__47961.fqn:null);
switch (G__47961__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47961__$1)].join('')));

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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e47962){if((e47962 instanceof Error)){
var e = e47962;
return e;
} else {
throw e47962;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__47963){
var map__47964 = p__47963;
var map__47964__$1 = (((((!((map__47964 == null))))?(((((map__47964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47964):map__47964);
var old_m = map__47964__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47964__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47964__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47964__$1,cljs.core.cst$kw$any);
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() { 
var G__48256__delegate = function (user_id,ev,p__47966){
var vec__47967 = p__47966;
var map__47970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47967,(0),null);
var map__47970__$1 = (((((!((map__47970 == null))))?(((((map__47970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47970):map__47970);
var opts = map__47970__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_48257 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __48258 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",402,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_48257,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_48257,ev], null);
});})(uid_48257,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-996032267);
var __48259__$1 = (cljs.core.truth_(uid_48257)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __48260__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_48261 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__48262 = ((function (uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (conn_type){
var temp__5720__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (m){
var vec__47972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_48257);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47972,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47972,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_48261)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_48257),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_48257));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
if(cljs.core.truth_(temp__5720__auto__)){
var pulled = temp__5720__auto__;
var vec__47975 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",430,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",433,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__47975,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__47975,buffered_evs,ev_uuids,pulled,temp__5720__auto__,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-981603833);

var G__47978 = conn_type;
var G__47978__$1 = (((G__47978 instanceof cljs.core.Keyword))?G__47978.fqn:null);
switch (G__47978__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_48257,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_48257,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_48257,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_48257,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47978__$1)].join('')));

}
} else {
return null;
}
});})(uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3380024122365337506.clj",442,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_48257], null);
});})(uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1358582835);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48262(cljs.core.cst$kw$ws);

flush_buffer_BANG__48262(cljs.core.cst$kw$ajax);
} else {
}

var seq__47979_48264 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_48257], null))));
var chunk__47980_48265 = null;
var count__47981_48266 = (0);
var i__47982_48267 = (0);
while(true){
if((i__47982_48267 < count__47981_48266)){
var vec__47989_48268 = chunk__47980_48265.cljs$core$IIndexed$_nth$arity$2(null,i__47982_48267);
var _QMARK_sch_48269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47989_48268,(0),null);
var _udt_48270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47989_48268,(1),null);
var temp__5720__auto___48271 = _QMARK_sch_48269;
if(cljs.core.truth_(temp__5720__auto___48271)){
var sch_48272 = temp__5720__auto___48271;
taoensso.sente.interfaces.sch_close_BANG_(sch_48272);
} else {
}


var G__48273 = seq__47979_48264;
var G__48274 = chunk__47980_48265;
var G__48275 = count__47981_48266;
var G__48276 = (i__47982_48267 + (1));
seq__47979_48264 = G__48273;
chunk__47980_48265 = G__48274;
count__47981_48266 = G__48275;
i__47982_48267 = G__48276;
continue;
} else {
var temp__5720__auto___48277 = cljs.core.seq(seq__47979_48264);
if(temp__5720__auto___48277){
var seq__47979_48278__$1 = temp__5720__auto___48277;
if(cljs.core.chunked_seq_QMARK_(seq__47979_48278__$1)){
var c__4550__auto___48279 = cljs.core.chunk_first(seq__47979_48278__$1);
var G__48280 = cljs.core.chunk_rest(seq__47979_48278__$1);
var G__48281 = c__4550__auto___48279;
var G__48282 = cljs.core.count(c__4550__auto___48279);
var G__48283 = (0);
seq__47979_48264 = G__48280;
chunk__47980_48265 = G__48281;
count__47981_48266 = G__48282;
i__47982_48267 = G__48283;
continue;
} else {
var vec__47992_48284 = cljs.core.first(seq__47979_48278__$1);
var _QMARK_sch_48285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992_48284,(0),null);
var _udt_48286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992_48284,(1),null);
var temp__5720__auto___48287__$1 = _QMARK_sch_48285;
if(cljs.core.truth_(temp__5720__auto___48287__$1)){
var sch_48288 = temp__5720__auto___48287__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_48288);
} else {
}


var G__48289 = cljs.core.next(seq__47979_48278__$1);
var G__48290 = null;
var G__48291 = (0);
var G__48292 = (0);
seq__47979_48264 = G__48289;
chunk__47980_48265 = G__48290;
count__47981_48266 = G__48291;
i__47982_48267 = G__48292;
continue;
}
} else {
}
}
break;
}

var seq__47995_48293 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_48257], null))));
var chunk__47996_48294 = null;
var count__47997_48295 = (0);
var i__47998_48296 = (0);
while(true){
if((i__47998_48296 < count__47997_48295)){
var vec__48005_48297 = chunk__47996_48294.cljs$core$IIndexed$_nth$arity$2(null,i__47998_48296);
var _QMARK_sch_48298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48005_48297,(0),null);
var _udt_48299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48005_48297,(1),null);
var temp__5720__auto___48300 = _QMARK_sch_48298;
if(cljs.core.truth_(temp__5720__auto___48300)){
var sch_48301 = temp__5720__auto___48300;
taoensso.sente.interfaces.sch_close_BANG_(sch_48301);
} else {
}


var G__48302 = seq__47995_48293;
var G__48303 = chunk__47996_48294;
var G__48304 = count__47997_48295;
var G__48305 = (i__47998_48296 + (1));
seq__47995_48293 = G__48302;
chunk__47996_48294 = G__48303;
count__47997_48295 = G__48304;
i__47998_48296 = G__48305;
continue;
} else {
var temp__5720__auto___48306 = cljs.core.seq(seq__47995_48293);
if(temp__5720__auto___48306){
var seq__47995_48307__$1 = temp__5720__auto___48306;
if(cljs.core.chunked_seq_QMARK_(seq__47995_48307__$1)){
var c__4550__auto___48308 = cljs.core.chunk_first(seq__47995_48307__$1);
var G__48309 = cljs.core.chunk_rest(seq__47995_48307__$1);
var G__48310 = c__4550__auto___48308;
var G__48311 = cljs.core.count(c__4550__auto___48308);
var G__48312 = (0);
seq__47995_48293 = G__48309;
chunk__47996_48294 = G__48310;
count__47997_48295 = G__48311;
i__47998_48296 = G__48312;
continue;
} else {
var vec__48008_48313 = cljs.core.first(seq__47995_48307__$1);
var _QMARK_sch_48314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48008_48313,(0),null);
var _udt_48315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48008_48313,(1),null);
var temp__5720__auto___48316__$1 = _QMARK_sch_48314;
if(cljs.core.truth_(temp__5720__auto___48316__$1)){
var sch_48317 = temp__5720__auto___48316__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_48317);
} else {
}


var G__48318 = cljs.core.next(seq__47995_48307__$1);
var G__48319 = null;
var G__48320 = (0);
var G__48321 = (0);
seq__47995_48293 = G__48318;
chunk__47996_48294 = G__48319;
count__47997_48295 = G__48320;
i__47998_48296 = G__48321;
continue;
}
} else {
}
}
break;
}
} else {
var seq__48011_48322 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__48012_48323 = null;
var count__48013_48324 = (0);
var i__48014_48325 = (0);
while(true){
if((i__48014_48325 < count__48013_48324)){
var conn_type_48326 = chunk__48012_48323.cljs$core$IIndexed$_nth$arity$2(null,i__48014_48325);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48326,uid_48257], null),((function (seq__48011_48322,chunk__48012_48323,count__48013_48324,i__48014_48325,conn_type_48326,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_48261])], null);
} else {
var vec__48021 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48021,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_48261)], null);
}
});})(seq__48011_48322,chunk__48012_48323,count__48013_48324,i__48014_48325,conn_type_48326,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__48327 = seq__48011_48322;
var G__48328 = chunk__48012_48323;
var G__48329 = count__48013_48324;
var G__48330 = (i__48014_48325 + (1));
seq__48011_48322 = G__48327;
chunk__48012_48323 = G__48328;
count__48013_48324 = G__48329;
i__48014_48325 = G__48330;
continue;
} else {
var temp__5720__auto___48331 = cljs.core.seq(seq__48011_48322);
if(temp__5720__auto___48331){
var seq__48011_48332__$1 = temp__5720__auto___48331;
if(cljs.core.chunked_seq_QMARK_(seq__48011_48332__$1)){
var c__4550__auto___48333 = cljs.core.chunk_first(seq__48011_48332__$1);
var G__48334 = cljs.core.chunk_rest(seq__48011_48332__$1);
var G__48335 = c__4550__auto___48333;
var G__48336 = cljs.core.count(c__4550__auto___48333);
var G__48337 = (0);
seq__48011_48322 = G__48334;
chunk__48012_48323 = G__48335;
count__48013_48324 = G__48336;
i__48014_48325 = G__48337;
continue;
} else {
var conn_type_48338 = cljs.core.first(seq__48011_48332__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_48338,uid_48257], null),((function (seq__48011_48322,chunk__48012_48323,count__48013_48324,i__48014_48325,conn_type_48338,seq__48011_48332__$1,temp__5720__auto___48331,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_48261])], null);
} else {
var vec__48024 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48024,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48024,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_48261)], null);
}
});})(seq__48011_48322,chunk__48012_48323,count__48013_48324,i__48014_48325,conn_type_48338,seq__48011_48332__$1,temp__5720__auto___48331,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var G__48339 = cljs.core.next(seq__48011_48332__$1);
var G__48340 = null;
var G__48341 = (0);
var G__48342 = (0);
seq__48011_48322 = G__48339;
chunk__48012_48323 = G__48340;
count__48013_48324 = G__48341;
i__48014_48325 = G__48342;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__48262(cljs.core.cst$kw$ws);

flush_buffer_BANG__48262(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_48343 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_48344 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__40692__auto___48345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___48345,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___48345,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48031){
var state_val_48032 = (state_48031[(1)]);
if((state_val_48032 === (1))){
var state_48031__$1 = state_48031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48031__$1,(2),ws_timeout_48343);
} else {
if((state_val_48032 === (2))){
var inst_48028 = (state_48031[(2)]);
var inst_48029 = flush_buffer_BANG__48262(cljs.core.cst$kw$ws);
var state_48031__$1 = (function (){var statearr_48033 = state_48031;
(statearr_48033[(7)] = inst_48028);

return statearr_48033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48031__$1,inst_48029);
} else {
return null;
}
}
});})(c__40692__auto___48345,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40501__auto__,c__40692__auto___48345,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48034 = [null,null,null,null,null,null,null,null];
(statearr_48034[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48034[(1)] = (1));

return statearr_48034;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48031){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48031);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48035){if((e48035 instanceof Object)){
var ex__40505__auto__ = e48035;
var statearr_48036_48346 = state_48031;
(statearr_48036_48346[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48031);

return cljs.core.cst$kw$recur;
} else {
throw e48035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48347 = state_48031;
state_48031 = G__48347;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48031){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___48345,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40694__auto__ = (function (){var statearr_48037 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48037[(6)] = c__40692__auto___48345);

return statearr_48037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___48345,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);


var c__40692__auto___48348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___48348,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___48348,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48042){
var state_val_48043 = (state_48042[(1)]);
if((state_val_48043 === (1))){
var state_48042__$1 = state_48042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48042__$1,(2),ajax_timeout_48344);
} else {
if((state_val_48043 === (2))){
var inst_48039 = (state_48042[(2)]);
var inst_48040 = flush_buffer_BANG__48262(cljs.core.cst$kw$ajax);
var state_48042__$1 = (function (){var statearr_48044 = state_48042;
(statearr_48044[(7)] = inst_48039);

return statearr_48044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48042__$1,inst_48040);
} else {
return null;
}
}
});})(c__40692__auto___48348,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40501__auto__,c__40692__auto___48348,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48045 = [null,null,null,null,null,null,null,null];
(statearr_48045[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48045[(1)] = (1));

return statearr_48045;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48042){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48042);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48046){if((e48046 instanceof Object)){
var ex__40505__auto__ = e48046;
var statearr_48047_48349 = state_48042;
(statearr_48047_48349[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48042);

return cljs.core.cst$kw$recur;
} else {
throw e48046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48350 = state_48042;
state_48042 = G__48350;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48042){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___48348,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40694__auto__ = (function (){var statearr_48048 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48048[(6)] = c__40692__auto___48348);

return statearr_48048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___48348,ws_timeout_48343,ajax_timeout_48344,uid_48257,__48258,__48259__$1,__48260__$2,ev_uuid_48261,flush_buffer_BANG__48262,vec__47967,map__47970,map__47970__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

}
}

return null;
};
var G__48256 = function (user_id,ev,var_args){
var p__47966 = null;
if (arguments.length > 2) {
var G__48351__i = 0, G__48351__a = new Array(arguments.length -  2);
while (G__48351__i < G__48351__a.length) {G__48351__a[G__48351__i] = arguments[G__48351__i + 2]; ++G__48351__i;}
  p__47966 = new cljs.core.IndexedSeq(G__48351__a,0,null);
} 
return G__48256__delegate.call(this,user_id,ev,p__47966);};
G__48256.cljs$lang$maxFixedArity = 2;
G__48256.cljs$lang$applyTo = (function (arglist__48352){
var user_id = cljs.core.first(arglist__48352);
arglist__48352 = cljs.core.next(arglist__48352);
var ev = cljs.core.first(arglist__48352);
var p__47966 = cljs.core.rest(arglist__48352);
return G__48256__delegate(user_id,ev,p__47966);
});
G__48256.cljs$core$IFn$_invoke$arity$variadic = G__48256__delegate;
return G__48256;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__48049 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",511,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-146040677);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5720__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5720__auto__)){
var ms = temp__5720__auto__;
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48057){
var state_val_48058 = (state_48057[(1)]);
if((state_val_48058 === (1))){
var inst_48052 = cljs.core.async.timeout(ms);
var state_48057__$1 = state_48057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48057__$1,(2),inst_48052);
} else {
if((state_val_48058 === (2))){
var inst_48054 = (state_48057[(2)]);
var inst_48055 = (function (){var G__48059 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__48059) : reply_fn.call(null,G__48059));
})();
var state_48057__$1 = (function (){var statearr_48060 = state_48057;
(statearr_48060[(7)] = inst_48054);

return statearr_48060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48057__$1,inst_48055);
} else {
return null;
}
}
});})(c__40692__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40501__auto__,c__40692__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48061 = [null,null,null,null,null,null,null,null];
(statearr_48061[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48061[(1)] = (1));

return statearr_48061;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48057){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48057);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48062){if((e48062 instanceof Object)){
var ex__40505__auto__ = e48062;
var statearr_48063_48353 = state_48057;
(statearr_48063_48353[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48057);

return cljs.core.cst$kw$recur;
} else {
throw e48062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48354 = state_48057;
state_48057 = G__48354;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48057){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40694__auto__ = (function (){var statearr_48064 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48064[(6)] = c__40692__auto__);

return statearr_48064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__,ms,temp__5720__auto__,params,ppstr,client_id,vec__48049,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40692__auto__;
} else {
return null;
}
} else {
var G__48065 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__48065) : reply_fn.call(null,G__48065));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",556,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1098072661);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3380024122365337506.clj",567,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,123279507);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",576,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,1711086912);
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
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48101){
var state_val_48102 = (state_48101[(1)]);
if((state_val_48102 === (7))){
var inst_48097 = (state_48101[(2)]);
var state_48101__$1 = state_48101;
var statearr_48103_48355 = state_48101__$1;
(statearr_48103_48355[(2)] = inst_48097);

(statearr_48103_48355[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (1))){
var inst_48066 = udt_open;
var state_48101__$1 = (function (){var statearr_48104 = state_48101;
(statearr_48104[(7)] = inst_48066);

return statearr_48104;
})();
var statearr_48105_48356 = state_48101__$1;
(statearr_48105_48356[(2)] = null);

(statearr_48105_48356[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (4))){
var inst_48075 = (state_48101[(8)]);
var inst_48070 = (state_48101[(2)]);
var inst_48071 = cljs.core.deref(conns_);
var inst_48072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48073 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_48074 = (new cljs.core.PersistentVector(null,3,(5),inst_48072,inst_48073,null));
var inst_48075__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48071,inst_48074);
var state_48101__$1 = (function (){var statearr_48106 = state_48101;
(statearr_48106[(9)] = inst_48070);

(statearr_48106[(8)] = inst_48075__$1);

return statearr_48106;
})();
if(cljs.core.truth_(inst_48075__$1)){
var statearr_48107_48357 = state_48101__$1;
(statearr_48107_48357[(1)] = (5));

} else {
var statearr_48108_48358 = state_48101__$1;
(statearr_48108_48358[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (13))){
var inst_48081 = (state_48101[(10)]);
var inst_48090 = (state_48101[(2)]);
var inst_48066 = inst_48081;
var state_48101__$1 = (function (){var statearr_48109 = state_48101;
(statearr_48109[(7)] = inst_48066);

(statearr_48109[(11)] = inst_48090);

return statearr_48109;
})();
var statearr_48110_48359 = state_48101__$1;
(statearr_48110_48359[(2)] = null);

(statearr_48110_48359[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (6))){
var state_48101__$1 = state_48101;
var statearr_48111_48360 = state_48101__$1;
(statearr_48111_48360[(2)] = null);

(statearr_48111_48360[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (3))){
var inst_48099 = (state_48101[(2)]);
var state_48101__$1 = state_48101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48101__$1,inst_48099);
} else {
if((state_val_48102 === (12))){
var state_48101__$1 = state_48101;
var statearr_48112_48361 = state_48101__$1;
(statearr_48112_48361[(2)] = null);

(statearr_48112_48361[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (2))){
var inst_48068 = cljs.core.async.timeout(ms);
var state_48101__$1 = state_48101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48101__$1,(4),inst_48068);
} else {
if((state_val_48102 === (11))){
var inst_48086 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_48087 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_48086);
var state_48101__$1 = state_48101;
var statearr_48113_48362 = state_48101__$1;
(statearr_48113_48362[(2)] = inst_48087);

(statearr_48113_48362[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (9))){
var state_48101__$1 = state_48101;
var statearr_48114_48363 = state_48101__$1;
(statearr_48114_48363[(2)] = null);

(statearr_48114_48363[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (5))){
var inst_48075 = (state_48101[(8)]);
var inst_48080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48075,(0),null);
var inst_48081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48075,(1),null);
var inst_48082 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_48101__$1 = (function (){var statearr_48115 = state_48101;
(statearr_48115[(10)] = inst_48081);

(statearr_48115[(12)] = inst_48080);

return statearr_48115;
})();
if(cljs.core.truth_(inst_48082)){
var statearr_48116_48364 = state_48101__$1;
(statearr_48116_48364[(1)] = (8));

} else {
var statearr_48117_48365 = state_48101__$1;
(statearr_48117_48365[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (10))){
var inst_48094 = (state_48101[(2)]);
var state_48101__$1 = state_48101;
var statearr_48118_48366 = state_48101__$1;
(statearr_48118_48366[(2)] = inst_48094);

(statearr_48118_48366[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48102 === (8))){
var inst_48081 = (state_48101[(10)]);
var inst_48066 = (state_48101[(7)]);
var inst_48084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48081,inst_48066);
var state_48101__$1 = state_48101;
if(inst_48084){
var statearr_48119_48367 = state_48101__$1;
(statearr_48119_48367[(1)] = (11));

} else {
var statearr_48120_48368 = state_48101__$1;
(statearr_48120_48368[(1)] = (12));

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
});})(c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40501__auto__,c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48121 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48121[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48121[(1)] = (1));

return statearr_48121;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48101){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48101);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48122){if((e48122 instanceof Object)){
var ex__40505__auto__ = e48122;
var statearr_48123_48369 = state_48101;
(statearr_48123_48369[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48101);

return cljs.core.cst$kw$recur;
} else {
throw e48122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48370 = state_48101;
state_48101 = G__48370;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48101){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40694__auto__ = (function (){var statearr_48124 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48124[(6)] = c__40692__auto__);

return statearr_48124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40692__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",605,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-1317091106);
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
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48150){
var state_val_48151 = (state_48150[(1)]);
if((state_val_48151 === (1))){
var inst_48125 = cljs.core.async.timeout(ms);
var state_48150__$1 = state_48150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48150__$1,(2),inst_48125);
} else {
if((state_val_48151 === (2))){
var inst_48132 = (state_48150[(7)]);
var inst_48127 = (state_48150[(2)]);
var inst_48128 = cljs.core.deref(conns_);
var inst_48129 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48130 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_48131 = (new cljs.core.PersistentVector(null,3,(5),inst_48129,inst_48130,null));
var inst_48132__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48128,inst_48131);
var state_48150__$1 = (function (){var statearr_48152 = state_48150;
(statearr_48152[(7)] = inst_48132__$1);

(statearr_48152[(8)] = inst_48127);

return statearr_48152;
})();
if(cljs.core.truth_(inst_48132__$1)){
var statearr_48153_48371 = state_48150__$1;
(statearr_48153_48371[(1)] = (3));

} else {
var statearr_48154_48372 = state_48150__$1;
(statearr_48154_48372[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48151 === (3))){
var inst_48132 = (state_48150[(7)]);
var inst_48137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48132,(0),null);
var inst_48138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48132,(1),null);
var inst_48139 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48138,udt_open);
var state_48150__$1 = (function (){var statearr_48155 = state_48150;
(statearr_48155[(9)] = inst_48137);

return statearr_48155;
})();
if(inst_48139){
var statearr_48156_48373 = state_48150__$1;
(statearr_48156_48373[(1)] = (6));

} else {
var statearr_48157_48374 = state_48150__$1;
(statearr_48157_48374[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48151 === (4))){
var state_48150__$1 = state_48150;
var statearr_48158_48375 = state_48150__$1;
(statearr_48158_48375[(2)] = null);

(statearr_48158_48375[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48151 === (5))){
var inst_48148 = (state_48150[(2)]);
var state_48150__$1 = state_48150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48150__$1,inst_48148);
} else {
if((state_val_48151 === (6))){
var inst_48141 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_48142 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_48141);
var state_48150__$1 = state_48150;
var statearr_48159_48376 = state_48150__$1;
(statearr_48159_48376[(2)] = inst_48142);

(statearr_48159_48376[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48151 === (7))){
var state_48150__$1 = state_48150;
var statearr_48160_48377 = state_48150__$1;
(statearr_48160_48377[(2)] = null);

(statearr_48160_48377[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48151 === (8))){
var inst_48145 = (state_48150[(2)]);
var state_48150__$1 = state_48150;
var statearr_48161_48378 = state_48150__$1;
(statearr_48161_48378[(2)] = inst_48145);

(statearr_48161_48378[(1)] = (5));


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
});})(c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40501__auto__,c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48162 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48162[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48162[(1)] = (1));

return statearr_48162;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48150){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48150);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48163){if((e48163 instanceof Object)){
var ex__40505__auto__ = e48163;
var statearr_48164_48379 = state_48150;
(statearr_48164_48379[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48150);

return cljs.core.cst$kw$recur;
} else {
throw e48163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48380 = state_48150;
state_48150 = G__48380;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48150){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40694__auto__ = (function (){var statearr_48165 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48165[(6)] = c__40692__auto__);

return statearr_48165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__,ms,temp__5720__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40692__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__48166 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__48166,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",635,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48166,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__48166,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,827377094);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__48166,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",644,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,2033526683);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (state_48220){
var state_val_48221 = (state_48220[(1)]);
if((state_val_48221 === (7))){
var state_48220__$1 = state_48220;
var statearr_48222_48381 = state_48220__$1;
(statearr_48222_48381[(2)] = null);

(statearr_48222_48381[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (1))){
var inst_48169 = cljs.core.async.timeout((5000));
var state_48220__$1 = state_48220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48220__$1,(2),inst_48169);
} else {
if((state_val_48221 === (4))){
var state_48220__$1 = state_48220;
var statearr_48223_48382 = state_48220__$1;
(statearr_48223_48382[(2)] = null);

(statearr_48223_48382[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (13))){
var state_48220__$1 = state_48220;
var statearr_48224_48383 = state_48220__$1;
(statearr_48224_48383[(2)] = null);

(statearr_48224_48383[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (6))){
var inst_48179 = (state_48220[(7)]);
var inst_48197 = (state_48220[(8)]);
var inst_48180 = (state_48220[(9)]);
var inst_48181 = (state_48220[(10)]);
var inst_48192 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48193 = [conn_type,uid,client_id];
var inst_48194 = (new cljs.core.PersistentVector(null,3,(5),inst_48192,inst_48193,null));
var inst_48196 = (function (){var vec__48172 = inst_48179;
var __QMARK_sch = inst_48180;
var udt_t1 = inst_48181;
return ((function (vec__48172,__QMARK_sch,udt_t1,inst_48179,inst_48197,inst_48180,inst_48181,inst_48192,inst_48193,inst_48194,state_val_48221,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (p__48195){
var vec__48225 = p__48195;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__48172,__QMARK_sch,udt_t1,inst_48179,inst_48197,inst_48180,inst_48181,inst_48192,inst_48193,inst_48194,state_val_48221,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48197__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48194,inst_48196);
var state_48220__$1 = (function (){var statearr_48228 = state_48220;
(statearr_48228[(8)] = inst_48197__$1);

return statearr_48228;
})();
if(cljs.core.truth_(inst_48197__$1)){
var statearr_48229_48384 = state_48220__$1;
(statearr_48229_48384[(1)] = (9));

} else {
var statearr_48230_48385 = state_48220__$1;
(statearr_48230_48385[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (3))){
var inst_48179 = (state_48220[(7)]);
var inst_48180 = (state_48220[(9)]);
var inst_48181 = (state_48220[(10)]);
var inst_48184 = (function (){var vec__48172 = inst_48179;
var __QMARK_sch = inst_48180;
var udt_t1 = inst_48181;
return ((function (vec__48172,__QMARK_sch,udt_t1,inst_48179,inst_48180,inst_48181,state_val_48221,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__48172,__QMARK_sch,udt_t1,inst_48179,inst_48180,inst_48181,state_val_48221,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48185 = (new cljs.core.Delay(inst_48184,null));
var inst_48186 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3380024122365337506.clj",658,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_48185,null,-1939230230);
var state_48220__$1 = state_48220;
var statearr_48231_48386 = state_48220__$1;
(statearr_48231_48386[(2)] = inst_48186);

(statearr_48231_48386[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (12))){
var inst_48206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48207 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_48208 = (new cljs.core.PersistentVector(null,2,(5),inst_48206,inst_48207,null));
var inst_48209 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_48208);
var state_48220__$1 = state_48220;
var statearr_48232_48387 = state_48220__$1;
(statearr_48232_48387[(2)] = inst_48209);

(statearr_48232_48387[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (2))){
var inst_48179 = (state_48220[(7)]);
var inst_48171 = (state_48220[(2)]);
var inst_48175 = cljs.core.deref(conns_);
var inst_48176 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48177 = [conn_type,uid,client_id];
var inst_48178 = (new cljs.core.PersistentVector(null,3,(5),inst_48176,inst_48177,null));
var inst_48179__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48175,inst_48178);
var inst_48180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48179__$1,(0),null);
var inst_48181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48179__$1,(1),null);
var inst_48182 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_48220__$1 = (function (){var statearr_48233 = state_48220;
(statearr_48233[(7)] = inst_48179__$1);

(statearr_48233[(11)] = inst_48171);

(statearr_48233[(9)] = inst_48180);

(statearr_48233[(10)] = inst_48181);

return statearr_48233;
})();
if(cljs.core.truth_(inst_48182)){
var statearr_48234_48388 = state_48220__$1;
(statearr_48234_48388[(1)] = (3));

} else {
var statearr_48235_48389 = state_48220__$1;
(statearr_48235_48389[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (11))){
var inst_48215 = (state_48220[(2)]);
var state_48220__$1 = state_48220;
var statearr_48236_48390 = state_48220__$1;
(statearr_48236_48390[(2)] = inst_48215);

(statearr_48236_48390[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (9))){
var inst_48179 = (state_48220[(7)]);
var inst_48197 = (state_48220[(8)]);
var inst_48180 = (state_48220[(9)]);
var inst_48181 = (state_48220[(10)]);
var inst_48199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48200 = [conn_type,uid];
var inst_48201 = (new cljs.core.PersistentVector(null,2,(5),inst_48199,inst_48200,null));
var inst_48202 = (function (){var vec__48172 = inst_48179;
var __QMARK_sch = inst_48180;
var udt_t1 = inst_48181;
var disconnect_QMARK_ = inst_48197;
return ((function (vec__48172,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48179,inst_48197,inst_48180,inst_48181,inst_48199,inst_48200,inst_48201,state_val_48221,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__48172,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_48179,inst_48197,inst_48180,inst_48181,inst_48199,inst_48200,inst_48201,state_val_48221,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var inst_48203 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48201,inst_48202);
var inst_48204 = upd_connected_uid_BANG_(uid);
var state_48220__$1 = (function (){var statearr_48237 = state_48220;
(statearr_48237[(12)] = inst_48203);

return statearr_48237;
})();
if(cljs.core.truth_(inst_48204)){
var statearr_48238_48391 = state_48220__$1;
(statearr_48238_48391[(1)] = (12));

} else {
var statearr_48239_48392 = state_48220__$1;
(statearr_48239_48392[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (5))){
var inst_48181 = (state_48220[(10)]);
var inst_48189 = (state_48220[(2)]);
var inst_48190 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48181,udt_close);
var state_48220__$1 = (function (){var statearr_48240 = state_48220;
(statearr_48240[(13)] = inst_48189);

return statearr_48240;
})();
if(inst_48190){
var statearr_48241_48393 = state_48220__$1;
(statearr_48241_48393[(1)] = (6));

} else {
var statearr_48242_48394 = state_48220__$1;
(statearr_48242_48394[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (14))){
var inst_48212 = (state_48220[(2)]);
var state_48220__$1 = state_48220;
var statearr_48243_48395 = state_48220__$1;
(statearr_48243_48395[(2)] = inst_48212);

(statearr_48243_48395[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (10))){
var state_48220__$1 = state_48220;
var statearr_48244_48396 = state_48220__$1;
(statearr_48244_48396[(2)] = null);

(statearr_48244_48396[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48221 === (8))){
var inst_48218 = (state_48220[(2)]);
var state_48220__$1 = state_48220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48220__$1,inst_48218);
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
});})(c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
;
return ((function (switch__40501__auto__,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48245[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48245[(1)] = (1));

return statearr_48245;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48220){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48220);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48246){if((e48246 instanceof Object)){
var ex__40505__auto__ = e48246;
var statearr_48247_48397 = state_48220;
(statearr_48247_48397[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48220);

return cljs.core.cst$kw$recur;
} else {
throw e48246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48398 = state_48220;
state_48220 = G__48398;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48220){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
})();
var state__40694__auto__ = (function (){var statearr_48248 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48248[(6)] = c__40692__auto__);

return statearr_48248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);

return c__40692__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3380024122365337506.clj",680,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
,null)),null,-23402019);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__47941,map__47944,map__47944__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq47938){
var G__47939 = cljs.core.first(seq47938);
var seq47938__$1 = cljs.core.next(seq47938);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47939,seq47938__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",686,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1088079935);

var seq__48399 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__48400 = null;
var count__48401 = (0);
var i__48402 = (0);
while(true){
if((i__48402 < count__48401)){
var vec__48421 = chunk__48400.cljs$core$IIndexed$_nth$arity$2(null,i__48402);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48421,(0),null);
var vec__48424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48421,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48424,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48424,(1),null);
var temp__5720__auto___48439 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___48439)){
var sch_48440 = temp__5720__auto___48439;
var G__48427_48441 = cljs.core.cst$kw$ws;
var G__48428_48442 = uid;
var G__48429_48443 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__48427_48441,G__48428_48442,G__48429_48443) : upd_conn_BANG_.call(null,G__48427_48441,G__48428_48442,G__48429_48443));

taoensso.sente.interfaces.sch_send_BANG_(sch_48440,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__48444 = seq__48399;
var G__48445 = chunk__48400;
var G__48446 = count__48401;
var G__48447 = (i__48402 + (1));
seq__48399 = G__48444;
chunk__48400 = G__48445;
count__48401 = G__48446;
i__48402 = G__48447;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48399);
if(temp__5720__auto__){
var seq__48399__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48399__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48399__$1);
var G__48448 = cljs.core.chunk_rest(seq__48399__$1);
var G__48449 = c__4550__auto__;
var G__48450 = cljs.core.count(c__4550__auto__);
var G__48451 = (0);
seq__48399 = G__48448;
chunk__48400 = G__48449;
count__48401 = G__48450;
i__48402 = G__48451;
continue;
} else {
var vec__48430 = cljs.core.first(seq__48399__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48430,(0),null);
var vec__48433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48430,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48433,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48433,(1),null);
var temp__5720__auto___48452__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5720__auto___48452__$1)){
var sch_48453 = temp__5720__auto___48452__$1;
var G__48436_48454 = cljs.core.cst$kw$ws;
var G__48437_48455 = uid;
var G__48438_48456 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__48436_48454,G__48437_48455,G__48438_48456) : upd_conn_BANG_.call(null,G__48436_48454,G__48437_48455,G__48438_48456));

taoensso.sente.interfaces.sch_send_BANG_(sch_48453,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}


var G__48457 = cljs.core.next(seq__48399__$1);
var G__48458 = null;
var G__48459 = (0);
var G__48460 = (0);
seq__48399 = G__48457;
chunk__48400 = G__48458;
count__48401 = G__48459;
i__48402 = G__48460;
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",696,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-926960869);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__40692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_48507){
var state_val_48508 = (state_48507[(1)]);
if((state_val_48508 === (7))){
var inst_48462 = (state_48507[(7)]);
var inst_48469 = (state_48507[(8)]);
var inst_48463 = (state_48507[(9)]);
var inst_48479 = (function (){var n = inst_48462;
var client_ids_satisfied = inst_48463;
var _QMARK_pulled = inst_48469;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48462,inst_48469,inst_48463,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__48478){
var vec__48509 = p__48478;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48509,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48509,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48462,inst_48469,inst_48463,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48480 = cljs.core.PersistentHashSet.EMPTY;
var inst_48481 = cljs.core.reduce_kv(inst_48479,inst_48480,inst_48469);
var state_48507__$1 = state_48507;
var statearr_48512_48544 = state_48507__$1;
(statearr_48512_48544[(2)] = inst_48481);

(statearr_48512_48544[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (1))){
var inst_48461 = cljs.core.PersistentHashSet.EMPTY;
var inst_48462 = (0);
var inst_48463 = inst_48461;
var state_48507__$1 = (function (){var statearr_48513 = state_48507;
(statearr_48513[(7)] = inst_48462);

(statearr_48513[(9)] = inst_48463);

return statearr_48513;
})();
var statearr_48514_48545 = state_48507__$1;
(statearr_48514_48545[(2)] = null);

(statearr_48514_48545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (4))){
var state_48507__$1 = state_48507;
var statearr_48515_48546 = state_48507__$1;
(statearr_48515_48546[(2)] = true);

(statearr_48515_48546[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (15))){
var inst_48500 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48516_48547 = state_48507__$1;
(statearr_48516_48547[(2)] = inst_48500);

(statearr_48516_48547[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (13))){
var inst_48486 = (state_48507[(10)]);
var inst_48491 = cljs.core.rand_int(inst_48486);
var inst_48492 = (inst_48486 + inst_48491);
var inst_48493 = cljs.core.async.timeout(inst_48492);
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48507__$1,(16),inst_48493);
} else {
if((state_val_48508 === (6))){
var inst_48469 = (state_48507[(8)]);
var inst_48476 = (state_48507[(2)]);
var state_48507__$1 = (function (){var statearr_48517 = state_48507;
(statearr_48517[(11)] = inst_48476);

return statearr_48517;
})();
if(cljs.core.truth_(inst_48469)){
var statearr_48518_48548 = state_48507__$1;
(statearr_48518_48548[(1)] = (7));

} else {
var statearr_48519_48549 = state_48507__$1;
(statearr_48519_48549[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (3))){
var inst_48505 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48507__$1,inst_48505);
} else {
if((state_val_48508 === (12))){
var inst_48503 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48520_48550 = state_48507__$1;
(statearr_48520_48550[(2)] = inst_48503);

(statearr_48520_48550[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (2))){
var inst_48462 = (state_48507[(7)]);
var inst_48469 = (state_48507[(8)]);
var inst_48463 = (state_48507[(9)]);
var inst_48465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48466 = [cljs.core.cst$kw$ajax,uid];
var inst_48467 = (new cljs.core.PersistentVector(null,2,(5),inst_48465,inst_48466,null));
var inst_48468 = (function (){var n = inst_48462;
var client_ids_satisfied = inst_48463;
return ((function (n,client_ids_satisfied,inst_48462,inst_48469,inst_48463,inst_48465,inst_48466,inst_48467,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_48462,inst_48469,inst_48463,inst_48465,inst_48466,inst_48467,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__48521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48521,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48521,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_48462,inst_48469,inst_48463,inst_48465,inst_48466,inst_48467,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_48462,inst_48469,inst_48463,inst_48465,inst_48466,inst_48467,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48469__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_48467,inst_48468);
var inst_48470 = (function (){var n = inst_48462;
var client_ids_satisfied = inst_48463;
var _QMARK_pulled = inst_48469__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_48462,inst_48469,inst_48463,inst_48465,inst_48466,inst_48467,inst_48468,inst_48469__$1,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__48525 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__48525.cljs$core$IFn$_invoke$arity$1 ? fexpr__48525.cljs$core$IFn$_invoke$arity$1(x) : fexpr__48525.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_48462,inst_48469,inst_48463,inst_48465,inst_48466,inst_48467,inst_48468,inst_48469__$1,state_val_48508,c__40692__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_48471 = (inst_48470.cljs$core$IFn$_invoke$arity$1 ? inst_48470.cljs$core$IFn$_invoke$arity$1(inst_48469__$1) : inst_48470.call(null,inst_48469__$1));
var state_48507__$1 = (function (){var statearr_48526 = state_48507;
(statearr_48526[(8)] = inst_48469__$1);

return statearr_48526;
})();
if(cljs.core.truth_(inst_48471)){
var statearr_48527_48551 = state_48507__$1;
(statearr_48527_48551[(1)] = (4));

} else {
var statearr_48528_48552 = state_48507__$1;
(statearr_48528_48552[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (11))){
var state_48507__$1 = state_48507;
var statearr_48529_48553 = state_48507__$1;
(statearr_48529_48553[(2)] = null);

(statearr_48529_48553[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (9))){
var inst_48486 = (state_48507[(10)]);
var inst_48462 = (state_48507[(7)]);
var inst_48463 = (state_48507[(9)]);
var inst_48484 = (state_48507[(2)]);
var inst_48485 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_48463,inst_48484);
var inst_48486__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_48462);
var state_48507__$1 = (function (){var statearr_48530 = state_48507;
(statearr_48530[(10)] = inst_48486__$1);

(statearr_48530[(12)] = inst_48485);

return statearr_48530;
})();
if(cljs.core.truth_(inst_48486__$1)){
var statearr_48531_48554 = state_48507__$1;
(statearr_48531_48554[(1)] = (10));

} else {
var statearr_48532_48555 = state_48507__$1;
(statearr_48532_48555[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (5))){
var inst_48469 = (state_48507[(8)]);
var inst_48474 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",723,"([:or nil? map?] ?pulled)",inst_48469,null,null);
var state_48507__$1 = state_48507;
var statearr_48533_48556 = state_48507__$1;
(statearr_48533_48556[(2)] = inst_48474);

(statearr_48533_48556[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (14))){
var state_48507__$1 = state_48507;
var statearr_48534_48557 = state_48507__$1;
(statearr_48534_48557[(2)] = null);

(statearr_48534_48557[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (16))){
var inst_48485 = (state_48507[(12)]);
var inst_48462 = (state_48507[(7)]);
var inst_48495 = (state_48507[(2)]);
var inst_48496 = (inst_48462 + (1));
var inst_48462__$1 = inst_48496;
var inst_48463 = inst_48485;
var state_48507__$1 = (function (){var statearr_48535 = state_48507;
(statearr_48535[(13)] = inst_48495);

(statearr_48535[(7)] = inst_48462__$1);

(statearr_48535[(9)] = inst_48463);

return statearr_48535;
})();
var statearr_48536_48558 = state_48507__$1;
(statearr_48536_48558[(2)] = null);

(statearr_48536_48558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (10))){
var inst_48485 = (state_48507[(12)]);
var inst_48488 = cljs.core.complement(inst_48485);
var inst_48489 = taoensso.encore.rsome(inst_48488,client_ids_unsatisfied);
var state_48507__$1 = state_48507;
if(cljs.core.truth_(inst_48489)){
var statearr_48537_48559 = state_48507__$1;
(statearr_48537_48559[(1)] = (13));

} else {
var statearr_48538_48560 = state_48507__$1;
(statearr_48538_48560[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48508 === (8))){
var state_48507__$1 = state_48507;
var statearr_48539_48561 = state_48507__$1;
(statearr_48539_48561[(2)] = null);

(statearr_48539_48561[(1)] = (9));


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
});})(c__40692__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__40501__auto__,c__40692__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto____0 = (function (){
var statearr_48540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48540[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto__);

(statearr_48540[(1)] = (1));

return statearr_48540;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto____1 = (function (state_48507){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48507);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48541){if((e48541 instanceof Object)){
var ex__40505__auto__ = e48541;
var statearr_48542_48562 = state_48507;
(statearr_48542_48562[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48507);

return cljs.core.cst$kw$recur;
} else {
throw e48541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48563 = state_48507;
state_48507 = G__48563;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto__ = function(state_48507){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto____1.call(this,state_48507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__40694__auto__ = (function (){var statearr_48543 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48543[(6)] = c__40692__auto__);

return statearr_48543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__40692__auto__;
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
var G__48565 = arguments.length;
switch (G__48565) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",773,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,500825299);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",778,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1779944322);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__48567_48568 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__48567_48568) : _QMARK_cb_fn.call(null,G__48567_48568));
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
var vec__48569 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48569,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48569,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_48577 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48572){if((e48572 instanceof Error)){
var e = e48572;
return e;
} else {
throw e48572;

}
}})();
if((e_48577 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"(map? state)",state,e_48577,null);
}

var e_48578 = (function (){try{if((function (){var fexpr__48575 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__48576 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48576) : taoensso.truss.impl.set_STAR_.call(null,G__48576));
})(),x);
});
return fexpr__48575(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48573){if((e48573 instanceof Error)){
var e = e48573;
return e;
} else {
throw e48573;

}
}})();
if((e_48578 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",826,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_48578,null);
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
var e_48583 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48579){if((e48579 instanceof Error)){
var e = e48579;
return e;
} else {
throw e48579;

}
}})();
if((e_48583 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",847,"(enc/chan? ?cb)",_QMARK_cb,e_48583,null);
}

taoensso.sente.assert_event(ev);

var vec__48580 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48580,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48580,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__48580,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
;})(vec__48580,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",858,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-1406713325);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",859,"(vector? clj)",clj,null,null));
var seq__48584 = cljs.core.seq(buffered_evs);
var chunk__48585 = null;
var count__48586 = (0);
var i__48587 = (0);
while(true){
if((i__48587 < count__48586)){
var ev = chunk__48585.cljs$core$IIndexed$_nth$arity$2(null,i__48587);
taoensso.sente.assert_event(ev);

var vec__48594_48600 = ev;
var id_48601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48594_48600,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_48601),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__48602 = seq__48584;
var G__48603 = chunk__48585;
var G__48604 = count__48586;
var G__48605 = (i__48587 + (1));
seq__48584 = G__48602;
chunk__48585 = G__48603;
count__48586 = G__48604;
i__48587 = G__48605;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48584);
if(temp__5720__auto__){
var seq__48584__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48584__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48584__$1);
var G__48606 = cljs.core.chunk_rest(seq__48584__$1);
var G__48607 = c__4550__auto__;
var G__48608 = cljs.core.count(c__4550__auto__);
var G__48609 = (0);
seq__48584 = G__48606;
chunk__48585 = G__48607;
count__48586 = G__48608;
i__48587 = G__48609;
continue;
} else {
var ev = cljs.core.first(seq__48584__$1);
taoensso.sente.assert_event(ev);

var vec__48597_48610 = ev;
var id_48611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48597_48610,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_48611),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__48612 = cljs.core.next(seq__48584__$1);
var G__48613 = null;
var G__48614 = (0);
var G__48615 = (0);
seq__48584 = G__48612;
chunk__48585 = G__48613;
count__48586 = G__48614;
i__48587 = G__48615;
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
var vec__48619 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48619,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__4120__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_48636 = (function (){try{if((function (){var fexpr__48625 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__48626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48626) : taoensso.truss.impl.set_STAR_.call(null,G__48626));
})(),x);
});
return fexpr__48625(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48623){if((e48623 instanceof Error)){
var e = e48623;
return e;
} else {
throw e48623;

}
}})();
if((e_48636 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_48636,null);
}

var e_48637 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48627){if((e48627 instanceof Error)){
var e = e48627;
return e;
} else {
throw e48627;

}
}})();
if((e_48637 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",874,"(handshake? clj)",clj,e_48637,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",875,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-576629075);

var vec__48628 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48628,(0),null);
var vec__48631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48628,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48631,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48631,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48631,(2),null);
var map__48634 = chsk;
var map__48634__$1 = (((((!((map__48634 == null))))?(((((map__48634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48634):map__48634);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48634__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48634__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",894,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48628,_,vec__48631,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48634,map__48634__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__48628,_,vec__48631,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48634,map__48634__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,2056378326);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__48628,_,vec__48631,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48634,map__48634__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__48622_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__48622_SHARP_,new_state], 0));
});})(vec__48628,_,vec__48631,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__48634,map__48634__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
}catch (e48638){var e = e48638;
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48645,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48649 = k48645;
var G__48649__$1 = (((G__48649 instanceof cljs.core.Keyword))?G__48649.fqn:null);
switch (G__48649__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48645,else__4388__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48650){
var vec__48651 = p__48650;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48651,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48651,(1),null);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48644){
var self__ = this;
var G__48644__$1 = this;
return (new cljs.core.RecordIter((0),G__48644__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48654 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48654(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48646,other48647){
var self__ = this;
var this48646__$1 = this;
return (((!((other48647 == null)))) && ((this48646__$1.constructor === other48647.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.client_id,other48647.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.chs,other48647.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.params,other48647.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.packer,other48647.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.url,other48647.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.ws_kalive_ms,other48647.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.state_,other48647.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.instance_handle_,other48647.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.retry_count_,other48647.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.ever_opened_QMARK__,other48647.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.backoff_ms_fn,other48647.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.cbs_waiting_,other48647.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.socket_,other48647.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.udt_last_comms_,other48647.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48646__$1.__extmap,other48647.__extmap)));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48644){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48655 = cljs.core.keyword_identical_QMARK_;
var expr__48656 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48658 = cljs.core.cst$kw$client_DASH_id;
var G__48659 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48658,G__48659) : pred__48655.call(null,G__48658,G__48659));
})())){
return (new taoensso.sente.ChWebSocket(G__48644,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48660 = cljs.core.cst$kw$chs;
var G__48661 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48660,G__48661) : pred__48655.call(null,G__48660,G__48661));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__48644,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48662 = cljs.core.cst$kw$params;
var G__48663 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48662,G__48663) : pred__48655.call(null,G__48662,G__48663));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__48644,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48664 = cljs.core.cst$kw$packer;
var G__48665 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48664,G__48665) : pred__48655.call(null,G__48664,G__48665));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__48644,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48666 = cljs.core.cst$kw$url;
var G__48667 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48666,G__48667) : pred__48655.call(null,G__48666,G__48667));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48644,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48668 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__48669 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48668,G__48669) : pred__48655.call(null,G__48668,G__48669));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48644,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48670 = cljs.core.cst$kw$state_;
var G__48671 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48670,G__48671) : pred__48655.call(null,G__48670,G__48671));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__48644,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48672 = cljs.core.cst$kw$instance_DASH_handle_;
var G__48673 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48672,G__48673) : pred__48655.call(null,G__48672,G__48673));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__48644,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48674 = cljs.core.cst$kw$retry_DASH_count_;
var G__48675 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48674,G__48675) : pred__48655.call(null,G__48674,G__48675));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__48644,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48676 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__48677 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48676,G__48677) : pred__48655.call(null,G__48676,G__48677));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__48644,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48678 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__48679 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48678,G__48679) : pred__48655.call(null,G__48678,G__48679));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__48644,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48680 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__48681 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48680,G__48681) : pred__48655.call(null,G__48680,G__48681));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48644,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48682 = cljs.core.cst$kw$socket_;
var G__48683 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48682,G__48683) : pred__48655.call(null,G__48682,G__48683));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__48644,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48684 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__48685 = expr__48656;
return (pred__48655.cljs$core$IFn$_invoke$arity$2 ? pred__48655.cljs$core$IFn$_invoke$arity$2(G__48684,G__48685) : pred__48655.call(null,G__48684,G__48685));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__48644,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48644),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48644){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__48644,self__.__extmap,self__.__hash));
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
return (function (p1__48639_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48639_SHARP_,reason);
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
var map__48686 = opts;
var map__48686__$1 = (((((!((map__48686 == null))))?(((((map__48686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48686):map__48686);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48686__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48686__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48686__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5720__auto___48768 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___48768)){
var cb_uuid_48769 = temp__5720__auto___48768;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_48769], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48688){if((e48688 instanceof Error)){
var e = e48688;
return e;
} else {
throw e48688;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",964,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5720__auto___48770__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5720__auto___48770__$1)){
var timeout_ms_48771 = temp__5720__auto___48770__$1;
var c__40692__auto___48772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___48772,timeout_ms_48771,temp__5720__auto___48770__$1,cb_uuid_48769,temp__5720__auto___48768,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___48772,timeout_ms_48771,temp__5720__auto___48770__$1,cb_uuid_48769,temp__5720__auto___48768,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_48699){
var state_val_48700 = (state_48699[(1)]);
if((state_val_48700 === (1))){
var inst_48689 = cljs.core.async.timeout(timeout_ms_48771);
var state_48699__$1 = state_48699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48699__$1,(2),inst_48689);
} else {
if((state_val_48700 === (2))){
var inst_48692 = (state_48699[(7)]);
var inst_48691 = (state_48699[(2)]);
var inst_48692__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_48699__$1 = (function (){var statearr_48701 = state_48699;
(statearr_48701[(8)] = inst_48691);

(statearr_48701[(7)] = inst_48692__$1);

return statearr_48701;
})();
if(cljs.core.truth_(inst_48692__$1)){
var statearr_48702_48773 = state_48699__$1;
(statearr_48702_48773[(1)] = (3));

} else {
var statearr_48703_48774 = state_48699__$1;
(statearr_48703_48774[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (3))){
var inst_48692 = (state_48699[(7)]);
var inst_48694 = (function (){var G__48704 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_48692.cljs$core$IFn$_invoke$arity$1 ? inst_48692.cljs$core$IFn$_invoke$arity$1(G__48704) : inst_48692.call(null,G__48704));
})();
var state_48699__$1 = state_48699;
var statearr_48705_48775 = state_48699__$1;
(statearr_48705_48775[(2)] = inst_48694);

(statearr_48705_48775[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (4))){
var state_48699__$1 = state_48699;
var statearr_48706_48776 = state_48699__$1;
(statearr_48706_48776[(2)] = null);

(statearr_48706_48776[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48700 === (5))){
var inst_48697 = (state_48699[(2)]);
var state_48699__$1 = state_48699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48699__$1,inst_48697);
} else {
return null;
}
}
}
}
}
});})(c__40692__auto___48772,timeout_ms_48771,temp__5720__auto___48770__$1,cb_uuid_48769,temp__5720__auto___48768,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__40501__auto__,c__40692__auto___48772,timeout_ms_48771,temp__5720__auto___48770__$1,cb_uuid_48769,temp__5720__auto___48768,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48707 = [null,null,null,null,null,null,null,null,null];
(statearr_48707[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48707[(1)] = (1));

return statearr_48707;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48699){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48699);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48708){if((e48708 instanceof Object)){
var ex__40505__auto__ = e48708;
var statearr_48709_48777 = state_48699;
(statearr_48709_48777[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48699);

return cljs.core.cst$kw$recur;
} else {
throw e48708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48778 = state_48699;
state_48699 = G__48778;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48699){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___48772,timeout_ms_48771,temp__5720__auto___48770__$1,cb_uuid_48769,temp__5720__auto___48768,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__40694__auto__ = (function (){var statearr_48710 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48710[(6)] = c__40692__auto___48772);

return statearr_48710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___48772,timeout_ms_48771,temp__5720__auto___48770__$1,cb_uuid_48769,temp__5720__auto___48768,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e48711){var e = e48711;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3380024122365337506.clj",976,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__48686,map__48686__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1398795074);

var temp__5720__auto___48779 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5720__auto___48779)){
var cb_uuid_48780 = temp__5720__auto___48779;
var cb_fn_STAR__48781 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_48780);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48712){if((e48712 instanceof Error)){
var e__$1 = e48712;
return e__$1;
} else {
throw e48712;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",979,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__48713_48782 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__48781.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__48781.cljs$core$IFn$_invoke$arity$1(G__48713_48782) : cb_fn_STAR__48781.call(null,G__48713_48782));
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1001,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,1403720936);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48640_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48640_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e48714){var e = e48714;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1015,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1531002007);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__48715 = _QMARK_socket;
(G__48715["onerror"] = ((function (G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1025,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e48716){var _ = e48716;
return ws_ev;
}})()], null);
});})(G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-317484957);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48641_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48641_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
});})(G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__48715["onmessage"] = ((function (G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__48717 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48717,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48717,(1),null);
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
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1061,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__48717,clj,_QMARK_cb_uuid,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5718__auto____$1,cb_uuid,temp__5718__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__48717,clj,_QMARK_cb_uuid,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-850459589);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

(G__48715["onclose"] = ((function (G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1083,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
,null)),null,-1506630672);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48642_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48642_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1){
return (function (p1__48643_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__48643_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__48715,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
);

return G__48715;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5720__auto__,chsk__$1))
;
var temp__5720__auto___48783__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5720__auto___48783__$1)){
var ms_48784 = temp__5720__auto___48783__$1;
var c__40692__auto___48785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___48785,ms_48784,temp__5720__auto___48783__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___48785,ms_48784,temp__5720__auto___48783__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function (state_48747){
var state_val_48748 = (state_48747[(1)]);
if((state_val_48748 === (7))){
var inst_48743 = (state_48747[(2)]);
var state_48747__$1 = state_48747;
var statearr_48749_48786 = state_48747__$1;
(statearr_48749_48786[(2)] = inst_48743);

(statearr_48749_48786[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48748 === (1))){
var state_48747__$1 = state_48747;
var statearr_48750_48787 = state_48747__$1;
(statearr_48750_48787[(2)] = null);

(statearr_48750_48787[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48748 === (4))){
var inst_48724 = (state_48747[(2)]);
var inst_48725 = have_handle_QMARK_();
var state_48747__$1 = (function (){var statearr_48751 = state_48747;
(statearr_48751[(7)] = inst_48724);

return statearr_48751;
})();
if(inst_48725){
var statearr_48752_48788 = state_48747__$1;
(statearr_48752_48788[(1)] = (5));

} else {
var statearr_48753_48789 = state_48747__$1;
(statearr_48753_48789[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48748 === (6))){
var state_48747__$1 = state_48747;
var statearr_48754_48790 = state_48747__$1;
(statearr_48754_48790[(2)] = null);

(statearr_48754_48790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48748 === (3))){
var inst_48745 = (state_48747[(2)]);
var state_48747__$1 = state_48747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48747__$1,inst_48745);
} else {
if((state_val_48748 === (2))){
var inst_48721 = cljs.core.deref(self__.udt_last_comms_);
var inst_48722 = cljs.core.async.timeout(ms_48784);
var state_48747__$1 = (function (){var statearr_48755 = state_48747;
(statearr_48755[(8)] = inst_48721);

return statearr_48755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48747__$1,(4),inst_48722);
} else {
if((state_val_48748 === (9))){
var state_48747__$1 = state_48747;
var statearr_48756_48791 = state_48747__$1;
(statearr_48756_48791[(2)] = null);

(statearr_48756_48791[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48748 === (5))){
var inst_48721 = (state_48747[(8)]);
var inst_48727 = cljs.core.deref(self__.udt_last_comms_);
var inst_48728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48721,inst_48727);
var state_48747__$1 = state_48747;
if(inst_48728){
var statearr_48757_48792 = state_48747__$1;
(statearr_48757_48792[(1)] = (8));

} else {
var statearr_48758_48793 = state_48747__$1;
(statearr_48758_48793[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48748 === (10))){
var inst_48739 = (state_48747[(2)]);
var state_48747__$1 = (function (){var statearr_48759 = state_48747;
(statearr_48759[(9)] = inst_48739);

return statearr_48759;
})();
var statearr_48760_48794 = state_48747__$1;
(statearr_48760_48794[(2)] = null);

(statearr_48760_48794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48748 === (8))){
var inst_48730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48731 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_48732 = (new cljs.core.PersistentVector(null,1,(5),inst_48730,inst_48731,null));
var inst_48733 = [cljs.core.cst$kw$flush_QMARK_];
var inst_48734 = [true];
var inst_48735 = cljs.core.PersistentHashMap.fromArrays(inst_48733,inst_48734);
var inst_48736 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_48732,inst_48735);
var state_48747__$1 = state_48747;
var statearr_48761_48795 = state_48747__$1;
(statearr_48761_48795[(2)] = inst_48736);

(statearr_48761_48795[(1)] = (10));


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
});})(c__40692__auto___48785,ms_48784,temp__5720__auto___48783__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
;
return ((function (switch__40501__auto__,c__40692__auto___48785,ms_48784,temp__5720__auto___48783__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__40502__auto__ = null;
var taoensso$sente$state_machine__40502__auto____0 = (function (){
var statearr_48762 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48762[(0)] = taoensso$sente$state_machine__40502__auto__);

(statearr_48762[(1)] = (1));

return statearr_48762;
});
var taoensso$sente$state_machine__40502__auto____1 = (function (state_48747){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48747);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e48763){if((e48763 instanceof Object)){
var ex__40505__auto__ = e48763;
var statearr_48764_48796 = state_48747;
(statearr_48764_48796[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48747);

return cljs.core.cst$kw$recur;
} else {
throw e48763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__48797 = state_48747;
state_48747 = G__48797;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$state_machine__40502__auto__ = function(state_48747){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__40502__auto____1.call(this,state_48747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__40502__auto____0;
taoensso$sente$state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__40502__auto____1;
return taoensso$sente$state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___48785,ms_48784,temp__5720__auto___48783__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
})();
var state__40694__auto__ = (function (){var statearr_48765 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_48765[(6)] = c__40692__auto___48785);

return statearr_48765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___48785,ms_48784,temp__5720__auto___48783__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5720__auto__,chsk__$1))
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
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__48648){
var extmap__4424__auto__ = (function (){var G__48766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48648,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0));
if(cljs.core.record_QMARK_(G__48648)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48766);
} else {
return G__48766;
}
})();
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__48648),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__48648),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48805,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48809 = k48805;
var G__48809__$1 = (((G__48809 instanceof cljs.core.Keyword))?G__48809.fqn:null);
switch (G__48809__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48805,else__4388__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48810){
var vec__48811 = p__48810;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48811,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48811,(1),null);
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48804){
var self__ = this;
var G__48804__$1 = this;
return (new cljs.core.RecordIter((0),G__48804__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48814 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48814(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48806,other48807){
var self__ = this;
var this48806__$1 = this;
return (((!((other48807 == null)))) && ((this48806__$1.constructor === other48807.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.client_id,other48807.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.chs,other48807.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.params,other48807.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.packer,other48807.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.url,other48807.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.state_,other48807.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.instance_handle_,other48807.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.ever_opened_QMARK__,other48807.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.backoff_ms_fn,other48807.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.ajax_opts,other48807.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.curr_xhr_,other48807.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48806__$1.__extmap,other48807.__extmap)));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48804){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48815 = cljs.core.keyword_identical_QMARK_;
var expr__48816 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48818 = cljs.core.cst$kw$client_DASH_id;
var G__48819 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48818,G__48819) : pred__48815.call(null,G__48818,G__48819));
})())){
return (new taoensso.sente.ChAjaxSocket(G__48804,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48820 = cljs.core.cst$kw$chs;
var G__48821 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48820,G__48821) : pred__48815.call(null,G__48820,G__48821));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__48804,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48822 = cljs.core.cst$kw$params;
var G__48823 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48822,G__48823) : pred__48815.call(null,G__48822,G__48823));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__48804,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48824 = cljs.core.cst$kw$packer;
var G__48825 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48824,G__48825) : pred__48815.call(null,G__48824,G__48825));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__48804,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48826 = cljs.core.cst$kw$url;
var G__48827 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48826,G__48827) : pred__48815.call(null,G__48826,G__48827));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__48804,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48828 = cljs.core.cst$kw$state_;
var G__48829 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48828,G__48829) : pred__48815.call(null,G__48828,G__48829));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__48804,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48830 = cljs.core.cst$kw$instance_DASH_handle_;
var G__48831 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48830,G__48831) : pred__48815.call(null,G__48830,G__48831));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__48804,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48832 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__48833 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48832,G__48833) : pred__48815.call(null,G__48832,G__48833));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__48804,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48834 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__48835 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48834,G__48835) : pred__48815.call(null,G__48834,G__48835));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__48804,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48836 = cljs.core.cst$kw$ajax_DASH_opts;
var G__48837 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48836,G__48837) : pred__48815.call(null,G__48836,G__48837));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__48804,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48838 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__48839 = expr__48816;
return (pred__48815.cljs$core$IFn$_invoke$arity$2 ? pred__48815.cljs$core$IFn$_invoke$arity$2(G__48838,G__48839) : pred__48815.call(null,G__48838,G__48839));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__48804,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48804),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48804){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__48804,self__.__extmap,self__.__hash));
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
return (function (p1__48798_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48798_SHARP_,reason);
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
var map__48840 = opts;
var map__48840__$1 = (((((!((map__48840 == null))))?(((((map__48840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48840):map__48840);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48840__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48840__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48840__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__48842_48864 = self__.url;
var G__48843_48865 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = _QMARK_timeout_ms;
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
var G__48844_48866 = ((function (G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__48845){
var map__48846 = p__48845;
var map__48846__$1 = (((((!((map__48846 == null))))?(((((map__48846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48846):map__48846);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__48848 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__48848) : _QMARK_cb_fn.call(null,G__48848));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__48846,map__48846__$1,_QMARK_error,_QMARK_content,G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48799_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48799_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__48846,map__48846__$1,_QMARK_error,_QMARK_content,G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__48849 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__48849) : _QMARK_cb_fn.call(null,G__48849));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__48850 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48850,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48850,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1203,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__48850,resp_clj,___$1,map__48846,map__48846__$1,_QMARK_error,_QMARK_content,G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__48850,resp_clj,___$1,map__48846,map__48846__$1,_QMARK_error,_QMARK_content,G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,489537426);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__48850,resp_clj,___$1,map__48846,map__48846__$1,_QMARK_error,_QMARK_content,G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__48800_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48800_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__48850,resp_clj,___$1,map__48846,map__48846__$1,_QMARK_error,_QMARK_content,G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__48842_48864,G__48843_48865,csrf_token,map__48840,map__48840__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__48842_48864,G__48843_48865,G__48844_48866) : taoensso.sente.ajax_lite.call(null,G__48842_48864,G__48843_48865,G__48844_48866));

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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1213,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1472963934);

if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-15122705);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48801_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48801_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__48853 = self__.url;
var G__48854 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__4131__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__48855 = ((function (G__48853,G__48854,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__48856){
var map__48857 = p__48856;
var map__48857__$1 = (((((!((map__48857 == null))))?(((((map__48857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48857):map__48857);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48857__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48857__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__48857,map__48857__$1,_QMARK_error,_QMARK_content,G__48853,G__48854,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48802_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__48802_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__48857,map__48857__$1,_QMARK_error,_QMARK_content,G__48853,G__48854,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__48859 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48859,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__48859,clj,handshake_QMARK_,map__48857,map__48857__$1,_QMARK_error,_QMARK_content,G__48853,G__48854,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__48803_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48803_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__48859,clj,handshake_QMARK_,map__48857,map__48857__$1,_QMARK_error,_QMARK_content,G__48853,G__48854,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
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
});})(G__48853,G__48854,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__48853,G__48854,G__48855) : taoensso.sente.ajax_lite.call(null,G__48853,G__48854,G__48855));
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
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__48808){
var extmap__4424__auto__ = (function (){var G__48862 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48808,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0));
if(cljs.core.record_QMARK_(G__48808)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48862);
} else {
return G__48862;
}
})();
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__48808),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__48808),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48868,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48872 = k48868;
var G__48872__$1 = (((G__48872 instanceof cljs.core.Keyword))?G__48872.fqn:null);
switch (G__48872__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48868,else__4388__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48873){
var vec__48874 = p__48873;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48874,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48874,(1),null);
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48867){
var self__ = this;
var G__48867__$1 = this;
return (new cljs.core.RecordIter((0),G__48867__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48877 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48877(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48869,other48870){
var self__ = this;
var this48869__$1 = this;
return (((!((other48870 == null)))) && ((this48869__$1.constructor === other48870.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48869__$1.ws_chsk_opts,other48870.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48869__$1.ajax_chsk_opts,other48870.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48869__$1.state_,other48870.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48869__$1.impl_,other48870.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48869__$1.__extmap,other48870.__extmap)));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48867){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48878 = cljs.core.keyword_identical_QMARK_;
var expr__48879 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48881 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__48882 = expr__48879;
return (pred__48878.cljs$core$IFn$_invoke$arity$2 ? pred__48878.cljs$core$IFn$_invoke$arity$2(G__48881,G__48882) : pred__48878.call(null,G__48881,G__48882));
})())){
return (new taoensso.sente.ChAutoSocket(G__48867,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48883 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__48884 = expr__48879;
return (pred__48878.cljs$core$IFn$_invoke$arity$2 ? pred__48878.cljs$core$IFn$_invoke$arity$2(G__48883,G__48884) : pred__48878.call(null,G__48883,G__48884));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__48867,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48885 = cljs.core.cst$kw$state_;
var G__48886 = expr__48879;
return (pred__48878.cljs$core$IFn$_invoke$arity$2 ? pred__48878.cljs$core$IFn$_invoke$arity$2(G__48885,G__48886) : pred__48878.call(null,G__48885,G__48886));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__48867,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48887 = cljs.core.cst$kw$impl_;
var G__48888 = expr__48879;
return (pred__48878.cljs$core$IFn$_invoke$arity$2 ? pred__48878.cljs$core$IFn$_invoke$arity$2(G__48887,G__48888) : pred__48878.call(null,G__48887,G__48888));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__48867,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48867),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48867){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__48867,self__.__extmap,self__.__hash));
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
var map__48889 = opts;
var map__48889__$1 = (((((!((map__48889 == null))))?(((((map__48889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48889):map__48889);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48889__$1,cljs.core.cst$kw$cb);
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
var downgraded_QMARK___48893 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___48893,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___48893,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1349,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___48893,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5720__auto____$1,impl,temp__5720__auto__,downgraded_QMARK___48893,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-415933519);

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
});})(downgraded_QMARK___48893,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
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
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__48871){
var extmap__4424__auto__ = (function (){var G__48891 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48871,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0));
if(cljs.core.record_QMARK_(G__48871)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48891);
} else {
return G__48891;
}
})();
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__48871),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__48871),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__48871),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__48871),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$impl_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__48894 = protocol;
var G__48894__$1 = (((G__48894 instanceof cljs.core.Keyword))?G__48894.fqn:null);
switch (G__48894__$1) {
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
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__48897 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__48898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48898) : taoensso.truss.impl.set_STAR_.call(null,G__48898));
})(),x);
});})(protocol__$1))
;
return fexpr__48897(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48895){if((e48895 instanceof Error)){
var e = e48895;
return e;
} else {
throw e48895;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1369,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__48899 = type;
var G__48899__$1 = (((G__48899 instanceof cljs.core.Keyword))?G__48899.fqn:null);
switch (G__48899__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__48900 = protocol__$2;
switch (G__48900) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48900)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48899__$1)].join('')));

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
var len__4730__auto___48930 = arguments.length;
var i__4731__auto___48931 = (0);
while(true){
if((i__4731__auto___48931 < len__4730__auto___48930)){
args__4736__auto__.push((arguments[i__4731__auto___48931]));

var G__48932 = (i__4731__auto___48931 + (1));
i__4731__auto___48931 = G__48932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__48906){
var vec__48907 = p__48906;
var map__48910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48907,(0),null);
var map__48910__$1 = (((((!((map__48910 == null))))?(((((map__48910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48910):map__48910);
var opts = map__48910__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48910__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48910__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48910__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__4131__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48910__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48910__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48910__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48910__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48910__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48910__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48910__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48910__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48907,(1),null);
var e_48933 = (function (){try{if((function (){var fexpr__48914 = ((function (vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__48915 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__48915) : taoensso.truss.impl.set_STAR_.call(null,G__48915));
})(),x);
});})(vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__48914(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48912){if((e48912 instanceof Error)){
var e = e48912;
return e;
} else {
throw e48912;

}
}})();
if((e_48933 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"([:in #{:ws :ajax :auto}] type)",type,e_48933,null);
}

var e_48934 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48916){if((e48916 instanceof Error)){
var e = e48916;
return e;
} else {
throw e48916;

}
}})();
if((e_48934 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1412,"(enc/nblank-str? client-id)",client_id,e_48934,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1414,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1763012642);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1415,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-129258019);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__48917 = (function (){var win_loc = taoensso.encore.get_win_loc();
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48920 = path__$1;
var G__48921 = win_loc;
var G__48922 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48920,G__48921,G__48922) : f.call(null,G__48920,G__48921,G__48922));
})(),(function (){var G__48923 = path__$1;
var G__48924 = win_loc;
var G__48925 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48923,G__48924,G__48925) : f.call(null,G__48923,G__48924,G__48925));
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
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48917,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48917,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__48917,ws_url,ajax_url,vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__48917,ws_url,ajax_url,vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__48926 = type;
var G__48926__$1 = (((G__48926 instanceof cljs.core.Keyword))?G__48926.fqn:null);
switch (G__48926__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48926__$1)].join('')));

}
})());
var temp__5718__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5718__auto__)){
var chsk = temp__5718__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__48917,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__48927 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48927,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48927,(1),null);
var ev__$1 = vec__48927;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5718__auto__,packer__$1,vec__48917,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1503,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,packer__$1,vec__48917,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5718__auto__,packer__$1,vec__48917,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__48907,map__48910,map__48910__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1764280415);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq48904){
var G__48905 = cljs.core.first(seq48904);
var seq48904__$1 = cljs.core.next(seq48904);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48905,seq48904__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__48936 = opts;
var map__48936__$1 = (((((!((map__48936 == null))))?(((((map__48936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48936):map__48936);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__40692__auto___49016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__40693__auto__ = (function (){var switch__40501__auto__ = ((function (c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_48985){
var state_val_48986 = (state_48985[(1)]);
if((state_val_48986 === (7))){
var inst_48981 = (state_48985[(2)]);
var state_48985__$1 = state_48985;
var statearr_48987_49017 = state_48985__$1;
(statearr_48987_49017[(2)] = inst_48981);

(statearr_48987_49017[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (1))){
var state_48985__$1 = state_48985;
var statearr_48988_49018 = state_48985__$1;
(statearr_48988_49018[(2)] = null);

(statearr_48988_49018[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (4))){
var inst_48951 = (state_48985[(7)]);
var inst_48946 = (state_48985[(8)]);
var inst_48948 = (state_48985[(9)]);
var inst_48947 = (state_48985[(10)]);
var inst_48946__$1 = (state_48985[(2)]);
var inst_48947__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48946__$1,(0),null);
var inst_48948__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48946__$1,(1),null);
var inst_48949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48948__$1,ch_ctrl);
var inst_48950 = (inst_48947__$1 == null);
var inst_48951__$1 = ((inst_48949) || (inst_48950));
var state_48985__$1 = (function (){var statearr_48989 = state_48985;
(statearr_48989[(7)] = inst_48951__$1);

(statearr_48989[(8)] = inst_48946__$1);

(statearr_48989[(9)] = inst_48948__$1);

(statearr_48989[(10)] = inst_48947__$1);

return statearr_48989;
})();
if(cljs.core.truth_(inst_48951__$1)){
var statearr_48990_49019 = state_48985__$1;
(statearr_48990_49019[(1)] = (5));

} else {
var statearr_48991_49020 = state_48985__$1;
(statearr_48991_49020[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (15))){
var inst_48947 = (state_48985[(10)]);
var state_48985__$1 = state_48985;
var statearr_48992_49021 = state_48985__$1;
(statearr_48992_49021[(2)] = inst_48947);

(statearr_48992_49021[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (13))){
var inst_48967 = (state_48985[(2)]);
var state_48985__$1 = state_48985;
var statearr_48993_49022 = state_48985__$1;
(statearr_48993_49022[(2)] = inst_48967);

(statearr_48993_49022[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (6))){
var inst_48947 = (state_48985[(10)]);
var inst_48956 = (inst_48947 == null);
var inst_48957 = cljs.core.not(inst_48956);
var state_48985__$1 = state_48985;
if(inst_48957){
var statearr_48994_49023 = state_48985__$1;
(statearr_48994_49023[(1)] = (8));

} else {
var statearr_48995_49024 = state_48985__$1;
(statearr_48995_49024[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (3))){
var inst_48983 = (state_48985[(2)]);
var state_48985__$1 = state_48985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48985__$1,inst_48983);
} else {
if((state_val_48986 === (12))){
var state_48985__$1 = state_48985;
var statearr_48996_49025 = state_48985__$1;
(statearr_48996_49025[(2)] = false);

(statearr_48996_49025[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (2))){
var inst_48942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48943 = [ch_recv,ch_ctrl];
var inst_48944 = (new cljs.core.PersistentVector(null,2,(5),inst_48942,inst_48943,null));
var state_48985__$1 = state_48985;
return cljs.core.async.ioc_alts_BANG_(state_48985__$1,(4),inst_48944);
} else {
if((state_val_48986 === (11))){
var state_48985__$1 = state_48985;
var statearr_48997_49026 = state_48985__$1;
(statearr_48997_49026[(2)] = true);

(statearr_48997_49026[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (9))){
var state_48985__$1 = state_48985;
var statearr_48998_49027 = state_48985__$1;
(statearr_48998_49027[(2)] = false);

(statearr_48998_49027[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (5))){
var state_48985__$1 = state_48985;
var statearr_48999_49028 = state_48985__$1;
(statearr_48999_49028[(2)] = null);

(statearr_48999_49028[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (14))){
var inst_48947 = (state_48985[(10)]);
var inst_48972 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48947);
var state_48985__$1 = state_48985;
var statearr_49000_49029 = state_48985__$1;
(statearr_49000_49029[(2)] = inst_48972);

(statearr_49000_49029[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (16))){
var inst_48951 = (state_48985[(7)]);
var inst_48946 = (state_48985[(8)]);
var inst_48948 = (state_48985[(9)]);
var inst_48947 = (state_48985[(10)]);
var inst_48975 = (state_48985[(2)]);
var inst_48976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48975,cljs.core.cst$kw$event);
var inst_48977 = (function (){var vec__48939 = inst_48946;
var v = inst_48947;
var p = inst_48948;
var stop_QMARK_ = inst_48951;
var map__48954 = inst_48975;
var event_msg = inst_48975;
var event = inst_48976;
return ((function (vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1530,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1156149911);
} else {
}

var G__49003 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49004){if((e49004 instanceof Error)){
var e = e49004;
return e;
} else {
throw e49004;

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
}catch (e49005){if((e49005 instanceof Error)){
var e = e49005;
return e;
} else {
throw e49005;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1534,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__49003) : event_msg_handler.call(null,G__49003));
}catch (e49001){if((e49001 instanceof Error)){
var e1 = e49001;
try{var temp__5718__auto__ = error_handler;
if(cljs.core.truth_(temp__5718__auto__)){
var eh = temp__5718__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1539,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5718__auto__,e1,vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5718__auto__,e1,vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1990161171);
}
}catch (e49002){if((e49002 instanceof Error)){
var e2 = e49002;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init3380024122365337506.clj",1540,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,338924737);
} else {
throw e49002;

}
}} else {
throw e49001;

}
}});
;})(vec__48939,v,p,stop_QMARK_,map__48954,event_msg,event,inst_48951,inst_48946,inst_48948,inst_48947,inst_48975,inst_48976,state_val_48986,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_48978 = execute1(inst_48977);
var state_48985__$1 = (function (){var statearr_49006 = state_48985;
(statearr_49006[(11)] = inst_48978);

return statearr_49006;
})();
var statearr_49007_49030 = state_48985__$1;
(statearr_49007_49030[(2)] = null);

(statearr_49007_49030[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (10))){
var inst_48970 = (state_48985[(2)]);
var state_48985__$1 = state_48985;
if(cljs.core.truth_(inst_48970)){
var statearr_49008_49031 = state_48985__$1;
(statearr_49008_49031[(1)] = (14));

} else {
var statearr_49009_49032 = state_48985__$1;
(statearr_49009_49032[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_48986 === (8))){
var inst_48947 = (state_48985[(10)]);
var inst_48959 = inst_48947.cljs$lang$protocol_mask$partition0$;
var inst_48960 = (inst_48959 & (64));
var inst_48961 = inst_48947.cljs$core$ISeq$;
var inst_48962 = (cljs.core.PROTOCOL_SENTINEL === inst_48961);
var inst_48963 = ((inst_48960) || (inst_48962));
var state_48985__$1 = state_48985;
if(cljs.core.truth_(inst_48963)){
var statearr_49010_49033 = state_48985__$1;
(statearr_49010_49033[(1)] = (11));

} else {
var statearr_49011_49034 = state_48985__$1;
(statearr_49011_49034[(1)] = (12));

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
});})(c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__40501__auto__,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto____0 = (function (){
var statearr_49012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49012[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto__);

(statearr_49012[(1)] = (1));

return statearr_49012;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto____1 = (function (state_48985){
while(true){
var ret_value__40503__auto__ = (function (){try{while(true){
var result__40504__auto__ = switch__40501__auto__(state_48985);
if(cljs.core.keyword_identical_QMARK_(result__40504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40504__auto__;
}
break;
}
}catch (e49013){if((e49013 instanceof Object)){
var ex__40505__auto__ = e49013;
var statearr_49014_49035 = state_48985;
(statearr_49014_49035[(5)] = ex__40505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48985);

return cljs.core.cst$kw$recur;
} else {
throw e49013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40503__auto__,cljs.core.cst$kw$recur)){
var G__49036 = state_48985;
state_48985 = G__49036;
continue;
} else {
return ret_value__40503__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto__ = function(state_48985){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto____1.call(this,state_48985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__40502__auto__;
})()
;})(switch__40501__auto__,c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__40694__auto__ = (function (){var statearr_49015 = (f__40693__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40693__auto__.cljs$core$IFn$_invoke$arity$0() : f__40693__auto__.call(null));
(statearr_49015[(6)] = c__40692__auto___49016);

return statearr_49015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40694__auto__);
});})(c__40692__auto___49016,map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__48936,map__48936__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var len__4730__auto___49046 = arguments.length;
var i__4731__auto___49047 = (0);
while(true){
if((i__4731__auto___49047 < len__4730__auto___49046)){
args__4736__auto__.push((arguments[i__4731__auto___49047]));

var G__49048 = (i__4731__auto___49047 + (1));
i__4731__auto___49047 = G__49048;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49040){
var vec__49041 = p__49040;
var map__49044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49041,(0),null);
var map__49044__$1 = (((((!((map__49044 == null))))?(((((map__49044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49044):map__49044);
var opts = map__49044__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49044__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49044__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49044__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49037){
var G__49038 = cljs.core.first(seq49037);
var seq49037__$1 = cljs.core.next(seq49037);
var G__49039 = cljs.core.first(seq49037__$1);
var seq49037__$2 = cljs.core.next(seq49037__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49038,G__49039,seq49037__$2);
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
var len__4730__auto___49058 = arguments.length;
var i__4731__auto___49059 = (0);
while(true){
if((i__4731__auto___49059 < len__4730__auto___49058)){
args__4736__auto__.push((arguments[i__4731__auto___49059]));

var G__49060 = (i__4731__auto___49059 + (1));
i__4731__auto___49059 = G__49060;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__49052){
var vec__49053 = p__49052;
var map__49056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49053,(0),null);
var map__49056__$1 = (((((!((map__49056 == null))))?(((((map__49056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49056):map__49056);
var opts = map__49056__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49056__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49056__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq49049){
var G__49050 = cljs.core.first(seq49049);
var seq49049__$1 = cljs.core.next(seq49049);
var G__49051 = cljs.core.first(seq49049__$1);
var seq49049__$2 = cljs.core.next(seq49049__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49050,G__49051,seq49049__$2);
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
var G__49061 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__49062 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__49061,G__49062) : event_handler.call(null,G__49061,G__49062));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__49063,websocket_QMARK_){
var map__49064 = p__49063;
var map__49064__$1 = (((((!((map__49064 == null))))?(((((map__49064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49064):map__49064);
var location = map__49064__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49064__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49064__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49064__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pathname;
}
})())].join('');
});
