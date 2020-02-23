// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__52442 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__52442)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__52442)){
var G__52444 = (console["error"]);
var G__52445 = msg;
var G__52446 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52443 = oops.state.get_console_reporter();
return (fexpr__52443.cljs$core$IFn$_invoke$arity$3 ? fexpr__52443.cljs$core$IFn$_invoke$arity$3(G__52444,G__52445,G__52446) : fexpr__52443.call(null,G__52444,G__52445,G__52446));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52442)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52442)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__52447 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__52447)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__52447)){
var G__52449 = (console["warn"]);
var G__52450 = msg;
var G__52451 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52448 = oops.state.get_console_reporter();
return (fexpr__52448.cljs$core$IFn$_invoke$arity$3 ? fexpr__52448.cljs$core$IFn$_invoke$arity$3(G__52449,G__52450,G__52451) : fexpr__52448.call(null,G__52449,G__52450,G__52451));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52447)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52447)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52458 = arguments.length;
var i__4731__auto___52459 = (0);
while(true){
if((i__4731__auto___52459 < len__4730__auto___52458)){
args__4736__auto__.push((arguments[i__4731__auto___52459]));

var G__52460 = (i__4731__auto___52459 + (1));
i__4731__auto___52459 = G__52460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__52454){
var vec__52455 = p__52454;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52455,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq52452){
var G__52453 = cljs.core.first(seq52452);
var seq52452__$1 = cljs.core.next(seq52452);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52453,seq52452__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4120__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5722__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5722__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_52461 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_52461);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_52462 = temp__5722__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_52462,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_52462,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__4120__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_52464 = oops.config.get_child_factory();
var child_factory_52464__$1 = (function (){var G__52465 = child_factory_52464;
var G__52465__$1 = (((G__52465 instanceof cljs.core.Keyword))?G__52465.fqn:null);
switch (G__52465__$1) {
case "js-obj":
return ((function (G__52465,G__52465__$1,child_factory_52464){
return (function (){
return ({});
});
;})(G__52465,G__52465__$1,child_factory_52464))

break;
case "js-array":
return ((function (G__52465,G__52465__$1,child_factory_52464){
return (function (){
return [];
});
;})(G__52465,G__52465__$1,child_factory_52464))

break;
default:
return child_factory_52464;

}
})();

var child_obj_52463 = (child_factory_52464__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_52464__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_52464__$1.call(null,obj,key));
(obj[key] = child_obj_52463);

return child_obj_52463;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_52469 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_52469);

return selector_path_52469;
} else {
var selector_path_52470 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_52470);

return selector_path_52470;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_52471 = temp__5724__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_52471);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_52473 = (function (){var path_52472 = oops.core.build_path_dynamically(selector);

return path_52472;
})();
var len_52474 = path_52473.length;
var i_52475 = (0);
var obj_52476 = obj;
while(true){
if((i_52475 < len_52474)){
var mode_52477 = (path_52473[i_52475]);
var key_52478 = (path_52473[(i_52475 + (1))]);
var next_obj_52479 = oops.core.get_key_dynamically(obj_52476,key_52478,mode_52477);
var G__52480 = mode_52477;
switch (G__52480) {
case (0):
var G__52482 = (i_52475 + (2));
var G__52483 = next_obj_52479;
i_52475 = G__52482;
obj_52476 = G__52483;
continue;

break;
case (1):
if((!((next_obj_52479 == null)))){
var G__52484 = (i_52475 + (2));
var G__52485 = next_obj_52479;
i_52475 = G__52484;
obj_52476 = G__52485;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52479 == null)))){
var G__52486 = (i_52475 + (2));
var G__52487 = next_obj_52479;
i_52475 = G__52486;
obj_52476 = G__52487;
continue;
} else {
var G__52488 = (i_52475 + (2));
var G__52489 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52476,key_52478) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52476,key_52478));
i_52475 = G__52488;
obj_52476 = G__52489;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52480)].join('')));

}
} else {
return obj_52476;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_52491 = (function (){var path_52490 = oops.core.build_path_dynamically(selector);

return path_52490;
})();
var len_52492 = path_52491.length;
if((len_52492 < (4))){
return [obj,(function (){var path_52494 = path_52491;
var len_52495 = path_52494.length;
var i_52496 = (0);
var obj_52497 = obj;
while(true){
if((i_52496 < len_52495)){
var mode_52498 = (path_52494[i_52496]);
var key_52499 = (path_52494[(i_52496 + (1))]);
var next_obj_52500 = oops.core.get_key_dynamically(obj_52497,key_52499,mode_52498);
var G__52515 = mode_52498;
switch (G__52515) {
case (0):
var G__52519 = (i_52496 + (2));
var G__52520 = next_obj_52500;
i_52496 = G__52519;
obj_52497 = G__52520;
continue;

break;
case (1):
if((!((next_obj_52500 == null)))){
var G__52521 = (i_52496 + (2));
var G__52522 = next_obj_52500;
i_52496 = G__52521;
obj_52497 = G__52522;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52500 == null)))){
var G__52523 = (i_52496 + (2));
var G__52524 = next_obj_52500;
i_52496 = G__52523;
obj_52497 = G__52524;
continue;
} else {
var G__52525 = (i_52496 + (2));
var G__52526 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52497,key_52499) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52497,key_52499));
i_52496 = G__52525;
obj_52497 = G__52526;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52515)].join('')));

}
} else {
return obj_52497;
}
break;
}
})()];
} else {
var target_obj_52493 = (function (){var path_52501 = path_52491.slice((0),(len_52492 - (2)));
var len_52502 = path_52501.length;
var i_52503 = (0);
var obj_52504 = obj;
while(true){
if((i_52503 < len_52502)){
var mode_52505 = (path_52501[i_52503]);
var key_52506 = (path_52501[(i_52503 + (1))]);
var next_obj_52507 = oops.core.get_key_dynamically(obj_52504,key_52506,mode_52505);
var G__52516 = mode_52505;
switch (G__52516) {
case (0):
var G__52528 = (i_52503 + (2));
var G__52529 = next_obj_52507;
i_52503 = G__52528;
obj_52504 = G__52529;
continue;

break;
case (1):
if((!((next_obj_52507 == null)))){
var G__52530 = (i_52503 + (2));
var G__52531 = next_obj_52507;
i_52503 = G__52530;
obj_52504 = G__52531;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52507 == null)))){
var G__52532 = (i_52503 + (2));
var G__52533 = next_obj_52507;
i_52503 = G__52532;
obj_52504 = G__52533;
continue;
} else {
var G__52534 = (i_52503 + (2));
var G__52535 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52504,key_52506) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52504,key_52506));
i_52503 = G__52534;
obj_52504 = G__52535;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52516)].join('')));

}
} else {
return obj_52504;
}
break;
}
})();
return [target_obj_52493,(function (){var path_52508 = [(path_52491[(len_52492 - (2))]),(path_52491[(len_52492 - (1))])];
var len_52509 = path_52508.length;
var i_52510 = (0);
var obj_52511 = target_obj_52493;
while(true){
if((i_52510 < len_52509)){
var mode_52512 = (path_52508[i_52510]);
var key_52513 = (path_52508[(i_52510 + (1))]);
var next_obj_52514 = oops.core.get_key_dynamically(obj_52511,key_52513,mode_52512);
var G__52517 = mode_52512;
switch (G__52517) {
case (0):
var G__52537 = (i_52510 + (2));
var G__52538 = next_obj_52514;
i_52510 = G__52537;
obj_52511 = G__52538;
continue;

break;
case (1):
if((!((next_obj_52514 == null)))){
var G__52539 = (i_52510 + (2));
var G__52540 = next_obj_52514;
i_52510 = G__52539;
obj_52511 = G__52540;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52514 == null)))){
var G__52541 = (i_52510 + (2));
var G__52542 = next_obj_52514;
i_52510 = G__52541;
obj_52511 = G__52542;
continue;
} else {
var G__52543 = (i_52510 + (2));
var G__52544 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52511,key_52513) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52511,key_52513));
i_52510 = G__52543;
obj_52511 = G__52544;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52517)].join('')));

}
} else {
return obj_52511;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_52546 = (function (){var path_52545 = oops.core.build_path_dynamically(selector);

return path_52545;
})();
var len_52549 = path_52546.length;
var parent_obj_path_52550 = path_52546.slice((0),(len_52549 - (2)));
var key_52547 = (path_52546[(len_52549 - (1))]);
var mode_52548 = (path_52546[(len_52549 - (2))]);
var parent_obj_52551 = (function (){var path_52552 = parent_obj_path_52550;
var len_52553 = path_52552.length;
var i_52554 = (0);
var obj_52555 = obj;
while(true){
if((i_52554 < len_52553)){
var mode_52556 = (path_52552[i_52554]);
var key_52557 = (path_52552[(i_52554 + (1))]);
var next_obj_52558 = oops.core.get_key_dynamically(obj_52555,key_52557,mode_52556);
var G__52559 = mode_52556;
switch (G__52559) {
case (0):
var G__52561 = (i_52554 + (2));
var G__52562 = next_obj_52558;
i_52554 = G__52561;
obj_52555 = G__52562;
continue;

break;
case (1):
if((!((next_obj_52558 == null)))){
var G__52563 = (i_52554 + (2));
var G__52564 = next_obj_52558;
i_52554 = G__52563;
obj_52555 = G__52564;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52558 == null)))){
var G__52565 = (i_52554 + (2));
var G__52566 = next_obj_52558;
i_52554 = G__52565;
obj_52555 = G__52566;
continue;
} else {
var G__52567 = (i_52554 + (2));
var G__52568 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52555,key_52557) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52555,key_52557));
i_52554 = G__52567;
obj_52555 = G__52568;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52559)].join('')));

}
} else {
return obj_52555;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_52551,key_52547,val,mode_52548);
});
