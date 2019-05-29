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

var G__39708 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__39708)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__39708)){
var G__39710 = (console["error"]);
var G__39711 = msg;
var G__39712 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__39709 = oops.state.get_console_reporter();
return (fexpr__39709.cljs$core$IFn$_invoke$arity$3 ? fexpr__39709.cljs$core$IFn$_invoke$arity$3(G__39710,G__39711,G__39712) : fexpr__39709.call(null,G__39710,G__39711,G__39712));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__39708)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39708)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__39713 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__39713)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__39713)){
var G__39715 = (console["warn"]);
var G__39716 = msg;
var G__39717 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__39714 = oops.state.get_console_reporter();
return (fexpr__39714.cljs$core$IFn$_invoke$arity$3 ? fexpr__39714.cljs$core$IFn$_invoke$arity$3(G__39715,G__39716,G__39717) : fexpr__39714.call(null,G__39715,G__39716,G__39717));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__39713)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39713)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39724 = arguments.length;
var i__4731__auto___39725 = (0);
while(true){
if((i__4731__auto___39725 < len__4730__auto___39724)){
args__4736__auto__.push((arguments[i__4731__auto___39725]));

var G__39726 = (i__4731__auto___39725 + (1));
i__4731__auto___39725 = G__39726;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__39720){
var vec__39721 = p__39720;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39721,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq39718){
var G__39719 = cljs.core.first(seq39718);
var seq39718__$1 = cljs.core.next(seq39718);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39719,seq39718__$1);
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
var descriptor_39727 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_39727);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_39728 = temp__5722__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_39728,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_39728,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_39730 = oops.config.get_child_factory();
var child_factory_39730__$1 = (function (){var G__39731 = child_factory_39730;
var G__39731__$1 = (((G__39731 instanceof cljs.core.Keyword))?G__39731.fqn:null);
switch (G__39731__$1) {
case "js-obj":
return ((function (G__39731,G__39731__$1,child_factory_39730){
return (function (){
return ({});
});
;})(G__39731,G__39731__$1,child_factory_39730))

break;
case "js-array":
return ((function (G__39731,G__39731__$1,child_factory_39730){
return (function (){
return [];
});
;})(G__39731,G__39731__$1,child_factory_39730))

break;
default:
return child_factory_39730;

}
})();

var child_obj_39729 = (child_factory_39730__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_39730__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_39730__$1.call(null,obj,key));
(obj[key] = child_obj_39729);

return child_obj_39729;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_39735 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_39735);

return selector_path_39735;
} else {
var selector_path_39736 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_39736);

return selector_path_39736;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_39737 = temp__5724__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_39737);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_39739 = (function (){var path_39738 = oops.core.build_path_dynamically(selector);

return path_39738;
})();
var len_39740 = path_39739.length;
var i_39741 = (0);
var obj_39742 = obj;
while(true){
if((i_39741 < len_39740)){
var mode_39743 = (path_39739[i_39741]);
var key_39744 = (path_39739[(i_39741 + (1))]);
var next_obj_39745 = oops.core.get_key_dynamically(obj_39742,key_39744,mode_39743);
var G__39746 = mode_39743;
switch (G__39746) {
case (0):
var G__39748 = (i_39741 + (2));
var G__39749 = next_obj_39745;
i_39741 = G__39748;
obj_39742 = G__39749;
continue;

break;
case (1):
if((!((next_obj_39745 == null)))){
var G__39750 = (i_39741 + (2));
var G__39751 = next_obj_39745;
i_39741 = G__39750;
obj_39742 = G__39751;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_39745 == null)))){
var G__39752 = (i_39741 + (2));
var G__39753 = next_obj_39745;
i_39741 = G__39752;
obj_39742 = G__39753;
continue;
} else {
var G__39754 = (i_39741 + (2));
var G__39755 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_39742,key_39744) : oops.core.punch_key_dynamically_BANG_.call(null,obj_39742,key_39744));
i_39741 = G__39754;
obj_39742 = G__39755;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39746)].join('')));

}
} else {
return obj_39742;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_39757 = (function (){var path_39756 = oops.core.build_path_dynamically(selector);

return path_39756;
})();
var len_39758 = path_39757.length;
if((len_39758 < (4))){
return [obj,(function (){var path_39760 = path_39757;
var len_39761 = path_39760.length;
var i_39762 = (0);
var obj_39763 = obj;
while(true){
if((i_39762 < len_39761)){
var mode_39764 = (path_39760[i_39762]);
var key_39765 = (path_39760[(i_39762 + (1))]);
var next_obj_39766 = oops.core.get_key_dynamically(obj_39763,key_39765,mode_39764);
var G__39781 = mode_39764;
switch (G__39781) {
case (0):
var G__39785 = (i_39762 + (2));
var G__39786 = next_obj_39766;
i_39762 = G__39785;
obj_39763 = G__39786;
continue;

break;
case (1):
if((!((next_obj_39766 == null)))){
var G__39787 = (i_39762 + (2));
var G__39788 = next_obj_39766;
i_39762 = G__39787;
obj_39763 = G__39788;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_39766 == null)))){
var G__39789 = (i_39762 + (2));
var G__39790 = next_obj_39766;
i_39762 = G__39789;
obj_39763 = G__39790;
continue;
} else {
var G__39791 = (i_39762 + (2));
var G__39792 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_39763,key_39765) : oops.core.punch_key_dynamically_BANG_.call(null,obj_39763,key_39765));
i_39762 = G__39791;
obj_39763 = G__39792;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39781)].join('')));

}
} else {
return obj_39763;
}
break;
}
})()];
} else {
var target_obj_39759 = (function (){var path_39767 = path_39757.slice((0),(len_39758 - (2)));
var len_39768 = path_39767.length;
var i_39769 = (0);
var obj_39770 = obj;
while(true){
if((i_39769 < len_39768)){
var mode_39771 = (path_39767[i_39769]);
var key_39772 = (path_39767[(i_39769 + (1))]);
var next_obj_39773 = oops.core.get_key_dynamically(obj_39770,key_39772,mode_39771);
var G__39782 = mode_39771;
switch (G__39782) {
case (0):
var G__39794 = (i_39769 + (2));
var G__39795 = next_obj_39773;
i_39769 = G__39794;
obj_39770 = G__39795;
continue;

break;
case (1):
if((!((next_obj_39773 == null)))){
var G__39796 = (i_39769 + (2));
var G__39797 = next_obj_39773;
i_39769 = G__39796;
obj_39770 = G__39797;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_39773 == null)))){
var G__39798 = (i_39769 + (2));
var G__39799 = next_obj_39773;
i_39769 = G__39798;
obj_39770 = G__39799;
continue;
} else {
var G__39800 = (i_39769 + (2));
var G__39801 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_39770,key_39772) : oops.core.punch_key_dynamically_BANG_.call(null,obj_39770,key_39772));
i_39769 = G__39800;
obj_39770 = G__39801;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39782)].join('')));

}
} else {
return obj_39770;
}
break;
}
})();
return [target_obj_39759,(function (){var path_39774 = [(path_39757[(len_39758 - (2))]),(path_39757[(len_39758 - (1))])];
var len_39775 = path_39774.length;
var i_39776 = (0);
var obj_39777 = target_obj_39759;
while(true){
if((i_39776 < len_39775)){
var mode_39778 = (path_39774[i_39776]);
var key_39779 = (path_39774[(i_39776 + (1))]);
var next_obj_39780 = oops.core.get_key_dynamically(obj_39777,key_39779,mode_39778);
var G__39783 = mode_39778;
switch (G__39783) {
case (0):
var G__39803 = (i_39776 + (2));
var G__39804 = next_obj_39780;
i_39776 = G__39803;
obj_39777 = G__39804;
continue;

break;
case (1):
if((!((next_obj_39780 == null)))){
var G__39805 = (i_39776 + (2));
var G__39806 = next_obj_39780;
i_39776 = G__39805;
obj_39777 = G__39806;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_39780 == null)))){
var G__39807 = (i_39776 + (2));
var G__39808 = next_obj_39780;
i_39776 = G__39807;
obj_39777 = G__39808;
continue;
} else {
var G__39809 = (i_39776 + (2));
var G__39810 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_39777,key_39779) : oops.core.punch_key_dynamically_BANG_.call(null,obj_39777,key_39779));
i_39776 = G__39809;
obj_39777 = G__39810;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39783)].join('')));

}
} else {
return obj_39777;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_39812 = (function (){var path_39811 = oops.core.build_path_dynamically(selector);

return path_39811;
})();
var len_39815 = path_39812.length;
var parent_obj_path_39816 = path_39812.slice((0),(len_39815 - (2)));
var key_39813 = (path_39812[(len_39815 - (1))]);
var mode_39814 = (path_39812[(len_39815 - (2))]);
var parent_obj_39817 = (function (){var path_39818 = parent_obj_path_39816;
var len_39819 = path_39818.length;
var i_39820 = (0);
var obj_39821 = obj;
while(true){
if((i_39820 < len_39819)){
var mode_39822 = (path_39818[i_39820]);
var key_39823 = (path_39818[(i_39820 + (1))]);
var next_obj_39824 = oops.core.get_key_dynamically(obj_39821,key_39823,mode_39822);
var G__39825 = mode_39822;
switch (G__39825) {
case (0):
var G__39827 = (i_39820 + (2));
var G__39828 = next_obj_39824;
i_39820 = G__39827;
obj_39821 = G__39828;
continue;

break;
case (1):
if((!((next_obj_39824 == null)))){
var G__39829 = (i_39820 + (2));
var G__39830 = next_obj_39824;
i_39820 = G__39829;
obj_39821 = G__39830;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_39824 == null)))){
var G__39831 = (i_39820 + (2));
var G__39832 = next_obj_39824;
i_39820 = G__39831;
obj_39821 = G__39832;
continue;
} else {
var G__39833 = (i_39820 + (2));
var G__39834 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_39821,key_39823) : oops.core.punch_key_dynamically_BANG_.call(null,obj_39821,key_39823));
i_39820 = G__39833;
obj_39821 = G__39834;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39825)].join('')));

}
} else {
return obj_39821;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_39817,key_39813,val,mode_39814);
});
