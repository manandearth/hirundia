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

var G__52575 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__52575)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__52575)){
var G__52577 = (console["error"]);
var G__52578 = msg;
var G__52579 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52576 = oops.state.get_console_reporter();
return (fexpr__52576.cljs$core$IFn$_invoke$arity$3 ? fexpr__52576.cljs$core$IFn$_invoke$arity$3(G__52577,G__52578,G__52579) : fexpr__52576.call(null,G__52577,G__52578,G__52579));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52575)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52575)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__52580 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__52580)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__52580)){
var G__52582 = (console["warn"]);
var G__52583 = msg;
var G__52584 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52581 = oops.state.get_console_reporter();
return (fexpr__52581.cljs$core$IFn$_invoke$arity$3 ? fexpr__52581.cljs$core$IFn$_invoke$arity$3(G__52582,G__52583,G__52584) : fexpr__52581.call(null,G__52582,G__52583,G__52584));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52580)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52580)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52591 = arguments.length;
var i__4731__auto___52592 = (0);
while(true){
if((i__4731__auto___52592 < len__4730__auto___52591)){
args__4736__auto__.push((arguments[i__4731__auto___52592]));

var G__52593 = (i__4731__auto___52592 + (1));
i__4731__auto___52592 = G__52593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__52587){
var vec__52588 = p__52587;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52588,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq52585){
var G__52586 = cljs.core.first(seq52585);
var seq52585__$1 = cljs.core.next(seq52585);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52586,seq52585__$1);
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
var descriptor_52594 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_52594);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_52595 = temp__5722__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_52595,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_52595,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_52597 = oops.config.get_child_factory();
var child_factory_52597__$1 = (function (){var G__52598 = child_factory_52597;
var G__52598__$1 = (((G__52598 instanceof cljs.core.Keyword))?G__52598.fqn:null);
switch (G__52598__$1) {
case "js-obj":
return ((function (G__52598,G__52598__$1,child_factory_52597){
return (function (){
return ({});
});
;})(G__52598,G__52598__$1,child_factory_52597))

break;
case "js-array":
return ((function (G__52598,G__52598__$1,child_factory_52597){
return (function (){
return [];
});
;})(G__52598,G__52598__$1,child_factory_52597))

break;
default:
return child_factory_52597;

}
})();

var child_obj_52596 = (child_factory_52597__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_52597__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_52597__$1.call(null,obj,key));
(obj[key] = child_obj_52596);

return child_obj_52596;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_52602 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_52602);

return selector_path_52602;
} else {
var selector_path_52603 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_52603);

return selector_path_52603;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_52604 = temp__5724__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_52604);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_52606 = (function (){var path_52605 = oops.core.build_path_dynamically(selector);

return path_52605;
})();
var len_52607 = path_52606.length;
var i_52608 = (0);
var obj_52609 = obj;
while(true){
if((i_52608 < len_52607)){
var mode_52610 = (path_52606[i_52608]);
var key_52611 = (path_52606[(i_52608 + (1))]);
var next_obj_52612 = oops.core.get_key_dynamically(obj_52609,key_52611,mode_52610);
var G__52613 = mode_52610;
switch (G__52613) {
case (0):
var G__52615 = (i_52608 + (2));
var G__52616 = next_obj_52612;
i_52608 = G__52615;
obj_52609 = G__52616;
continue;

break;
case (1):
if((!((next_obj_52612 == null)))){
var G__52617 = (i_52608 + (2));
var G__52618 = next_obj_52612;
i_52608 = G__52617;
obj_52609 = G__52618;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52612 == null)))){
var G__52619 = (i_52608 + (2));
var G__52620 = next_obj_52612;
i_52608 = G__52619;
obj_52609 = G__52620;
continue;
} else {
var G__52621 = (i_52608 + (2));
var G__52622 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52609,key_52611) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52609,key_52611));
i_52608 = G__52621;
obj_52609 = G__52622;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52613)].join('')));

}
} else {
return obj_52609;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_52624 = (function (){var path_52623 = oops.core.build_path_dynamically(selector);

return path_52623;
})();
var len_52625 = path_52624.length;
if((len_52625 < (4))){
return [obj,(function (){var path_52627 = path_52624;
var len_52628 = path_52627.length;
var i_52629 = (0);
var obj_52630 = obj;
while(true){
if((i_52629 < len_52628)){
var mode_52631 = (path_52627[i_52629]);
var key_52632 = (path_52627[(i_52629 + (1))]);
var next_obj_52633 = oops.core.get_key_dynamically(obj_52630,key_52632,mode_52631);
var G__52648 = mode_52631;
switch (G__52648) {
case (0):
var G__52652 = (i_52629 + (2));
var G__52653 = next_obj_52633;
i_52629 = G__52652;
obj_52630 = G__52653;
continue;

break;
case (1):
if((!((next_obj_52633 == null)))){
var G__52654 = (i_52629 + (2));
var G__52655 = next_obj_52633;
i_52629 = G__52654;
obj_52630 = G__52655;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52633 == null)))){
var G__52656 = (i_52629 + (2));
var G__52657 = next_obj_52633;
i_52629 = G__52656;
obj_52630 = G__52657;
continue;
} else {
var G__52658 = (i_52629 + (2));
var G__52659 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52630,key_52632) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52630,key_52632));
i_52629 = G__52658;
obj_52630 = G__52659;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52648)].join('')));

}
} else {
return obj_52630;
}
break;
}
})()];
} else {
var target_obj_52626 = (function (){var path_52634 = path_52624.slice((0),(len_52625 - (2)));
var len_52635 = path_52634.length;
var i_52636 = (0);
var obj_52637 = obj;
while(true){
if((i_52636 < len_52635)){
var mode_52638 = (path_52634[i_52636]);
var key_52639 = (path_52634[(i_52636 + (1))]);
var next_obj_52640 = oops.core.get_key_dynamically(obj_52637,key_52639,mode_52638);
var G__52649 = mode_52638;
switch (G__52649) {
case (0):
var G__52661 = (i_52636 + (2));
var G__52662 = next_obj_52640;
i_52636 = G__52661;
obj_52637 = G__52662;
continue;

break;
case (1):
if((!((next_obj_52640 == null)))){
var G__52663 = (i_52636 + (2));
var G__52664 = next_obj_52640;
i_52636 = G__52663;
obj_52637 = G__52664;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52640 == null)))){
var G__52665 = (i_52636 + (2));
var G__52666 = next_obj_52640;
i_52636 = G__52665;
obj_52637 = G__52666;
continue;
} else {
var G__52667 = (i_52636 + (2));
var G__52668 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52637,key_52639) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52637,key_52639));
i_52636 = G__52667;
obj_52637 = G__52668;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52649)].join('')));

}
} else {
return obj_52637;
}
break;
}
})();
return [target_obj_52626,(function (){var path_52641 = [(path_52624[(len_52625 - (2))]),(path_52624[(len_52625 - (1))])];
var len_52642 = path_52641.length;
var i_52643 = (0);
var obj_52644 = target_obj_52626;
while(true){
if((i_52643 < len_52642)){
var mode_52645 = (path_52641[i_52643]);
var key_52646 = (path_52641[(i_52643 + (1))]);
var next_obj_52647 = oops.core.get_key_dynamically(obj_52644,key_52646,mode_52645);
var G__52650 = mode_52645;
switch (G__52650) {
case (0):
var G__52670 = (i_52643 + (2));
var G__52671 = next_obj_52647;
i_52643 = G__52670;
obj_52644 = G__52671;
continue;

break;
case (1):
if((!((next_obj_52647 == null)))){
var G__52672 = (i_52643 + (2));
var G__52673 = next_obj_52647;
i_52643 = G__52672;
obj_52644 = G__52673;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52647 == null)))){
var G__52674 = (i_52643 + (2));
var G__52675 = next_obj_52647;
i_52643 = G__52674;
obj_52644 = G__52675;
continue;
} else {
var G__52676 = (i_52643 + (2));
var G__52677 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52644,key_52646) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52644,key_52646));
i_52643 = G__52676;
obj_52644 = G__52677;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52650)].join('')));

}
} else {
return obj_52644;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_52679 = (function (){var path_52678 = oops.core.build_path_dynamically(selector);

return path_52678;
})();
var len_52682 = path_52679.length;
var parent_obj_path_52683 = path_52679.slice((0),(len_52682 - (2)));
var key_52680 = (path_52679[(len_52682 - (1))]);
var mode_52681 = (path_52679[(len_52682 - (2))]);
var parent_obj_52684 = (function (){var path_52685 = parent_obj_path_52683;
var len_52686 = path_52685.length;
var i_52687 = (0);
var obj_52688 = obj;
while(true){
if((i_52687 < len_52686)){
var mode_52689 = (path_52685[i_52687]);
var key_52690 = (path_52685[(i_52687 + (1))]);
var next_obj_52691 = oops.core.get_key_dynamically(obj_52688,key_52690,mode_52689);
var G__52692 = mode_52689;
switch (G__52692) {
case (0):
var G__52694 = (i_52687 + (2));
var G__52695 = next_obj_52691;
i_52687 = G__52694;
obj_52688 = G__52695;
continue;

break;
case (1):
if((!((next_obj_52691 == null)))){
var G__52696 = (i_52687 + (2));
var G__52697 = next_obj_52691;
i_52687 = G__52696;
obj_52688 = G__52697;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52691 == null)))){
var G__52698 = (i_52687 + (2));
var G__52699 = next_obj_52691;
i_52687 = G__52698;
obj_52688 = G__52699;
continue;
} else {
var G__52700 = (i_52687 + (2));
var G__52701 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52688,key_52690) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52688,key_52690));
i_52687 = G__52700;
obj_52688 = G__52701;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52692)].join('')));

}
} else {
return obj_52688;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_52684,key_52680,val,mode_52681);
});
