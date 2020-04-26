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

var G__45149 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__45149)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__45149)){
var G__45151 = (console["error"]);
var G__45152 = msg;
var G__45153 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__45150 = oops.state.get_console_reporter();
return (fexpr__45150.cljs$core$IFn$_invoke$arity$3 ? fexpr__45150.cljs$core$IFn$_invoke$arity$3(G__45151,G__45152,G__45153) : fexpr__45150.call(null,G__45151,G__45152,G__45153));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__45149)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45149)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__45154 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__45154)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__45154)){
var G__45156 = (console["warn"]);
var G__45157 = msg;
var G__45158 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__45155 = oops.state.get_console_reporter();
return (fexpr__45155.cljs$core$IFn$_invoke$arity$3 ? fexpr__45155.cljs$core$IFn$_invoke$arity$3(G__45156,G__45157,G__45158) : fexpr__45155.call(null,G__45156,G__45157,G__45158));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__45154)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45154)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45165 = arguments.length;
var i__4731__auto___45166 = (0);
while(true){
if((i__4731__auto___45166 < len__4730__auto___45165)){
args__4736__auto__.push((arguments[i__4731__auto___45166]));

var G__45167 = (i__4731__auto___45166 + (1));
i__4731__auto___45166 = G__45167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__45161){
var vec__45162 = p__45161;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45162,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq45159){
var G__45160 = cljs.core.first(seq45159);
var seq45159__$1 = cljs.core.next(seq45159);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45160,seq45159__$1);
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
var descriptor_45168 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_45168);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_45169 = temp__5722__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_45169,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_45169,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_45171 = oops.config.get_child_factory();
var child_factory_45171__$1 = (function (){var G__45172 = child_factory_45171;
var G__45172__$1 = (((G__45172 instanceof cljs.core.Keyword))?G__45172.fqn:null);
switch (G__45172__$1) {
case "js-obj":
return ((function (G__45172,G__45172__$1,child_factory_45171){
return (function (){
return ({});
});
;})(G__45172,G__45172__$1,child_factory_45171))

break;
case "js-array":
return ((function (G__45172,G__45172__$1,child_factory_45171){
return (function (){
return [];
});
;})(G__45172,G__45172__$1,child_factory_45171))

break;
default:
return child_factory_45171;

}
})();

var child_obj_45170 = (child_factory_45171__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_45171__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_45171__$1.call(null,obj,key));
(obj[key] = child_obj_45170);

return child_obj_45170;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_45176 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_45176);

return selector_path_45176;
} else {
var selector_path_45177 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_45177);

return selector_path_45177;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_45178 = temp__5724__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_45178);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_45180 = (function (){var path_45179 = oops.core.build_path_dynamically(selector);

return path_45179;
})();
var len_45181 = path_45180.length;
var i_45182 = (0);
var obj_45183 = obj;
while(true){
if((i_45182 < len_45181)){
var mode_45184 = (path_45180[i_45182]);
var key_45185 = (path_45180[(i_45182 + (1))]);
var next_obj_45186 = oops.core.get_key_dynamically(obj_45183,key_45185,mode_45184);
var G__45187 = mode_45184;
switch (G__45187) {
case (0):
var G__45189 = (i_45182 + (2));
var G__45190 = next_obj_45186;
i_45182 = G__45189;
obj_45183 = G__45190;
continue;

break;
case (1):
if((!((next_obj_45186 == null)))){
var G__45191 = (i_45182 + (2));
var G__45192 = next_obj_45186;
i_45182 = G__45191;
obj_45183 = G__45192;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_45186 == null)))){
var G__45193 = (i_45182 + (2));
var G__45194 = next_obj_45186;
i_45182 = G__45193;
obj_45183 = G__45194;
continue;
} else {
var G__45195 = (i_45182 + (2));
var G__45196 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_45183,key_45185) : oops.core.punch_key_dynamically_BANG_.call(null,obj_45183,key_45185));
i_45182 = G__45195;
obj_45183 = G__45196;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45187)].join('')));

}
} else {
return obj_45183;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_45198 = (function (){var path_45197 = oops.core.build_path_dynamically(selector);

return path_45197;
})();
var len_45199 = path_45198.length;
if((len_45199 < (4))){
return [obj,(function (){var path_45201 = path_45198;
var len_45202 = path_45201.length;
var i_45203 = (0);
var obj_45204 = obj;
while(true){
if((i_45203 < len_45202)){
var mode_45205 = (path_45201[i_45203]);
var key_45206 = (path_45201[(i_45203 + (1))]);
var next_obj_45207 = oops.core.get_key_dynamically(obj_45204,key_45206,mode_45205);
var G__45222 = mode_45205;
switch (G__45222) {
case (0):
var G__45226 = (i_45203 + (2));
var G__45227 = next_obj_45207;
i_45203 = G__45226;
obj_45204 = G__45227;
continue;

break;
case (1):
if((!((next_obj_45207 == null)))){
var G__45228 = (i_45203 + (2));
var G__45229 = next_obj_45207;
i_45203 = G__45228;
obj_45204 = G__45229;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_45207 == null)))){
var G__45230 = (i_45203 + (2));
var G__45231 = next_obj_45207;
i_45203 = G__45230;
obj_45204 = G__45231;
continue;
} else {
var G__45232 = (i_45203 + (2));
var G__45233 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_45204,key_45206) : oops.core.punch_key_dynamically_BANG_.call(null,obj_45204,key_45206));
i_45203 = G__45232;
obj_45204 = G__45233;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45222)].join('')));

}
} else {
return obj_45204;
}
break;
}
})()];
} else {
var target_obj_45200 = (function (){var path_45208 = path_45198.slice((0),(len_45199 - (2)));
var len_45209 = path_45208.length;
var i_45210 = (0);
var obj_45211 = obj;
while(true){
if((i_45210 < len_45209)){
var mode_45212 = (path_45208[i_45210]);
var key_45213 = (path_45208[(i_45210 + (1))]);
var next_obj_45214 = oops.core.get_key_dynamically(obj_45211,key_45213,mode_45212);
var G__45223 = mode_45212;
switch (G__45223) {
case (0):
var G__45235 = (i_45210 + (2));
var G__45236 = next_obj_45214;
i_45210 = G__45235;
obj_45211 = G__45236;
continue;

break;
case (1):
if((!((next_obj_45214 == null)))){
var G__45237 = (i_45210 + (2));
var G__45238 = next_obj_45214;
i_45210 = G__45237;
obj_45211 = G__45238;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_45214 == null)))){
var G__45239 = (i_45210 + (2));
var G__45240 = next_obj_45214;
i_45210 = G__45239;
obj_45211 = G__45240;
continue;
} else {
var G__45241 = (i_45210 + (2));
var G__45242 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_45211,key_45213) : oops.core.punch_key_dynamically_BANG_.call(null,obj_45211,key_45213));
i_45210 = G__45241;
obj_45211 = G__45242;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45223)].join('')));

}
} else {
return obj_45211;
}
break;
}
})();
return [target_obj_45200,(function (){var path_45215 = [(path_45198[(len_45199 - (2))]),(path_45198[(len_45199 - (1))])];
var len_45216 = path_45215.length;
var i_45217 = (0);
var obj_45218 = target_obj_45200;
while(true){
if((i_45217 < len_45216)){
var mode_45219 = (path_45215[i_45217]);
var key_45220 = (path_45215[(i_45217 + (1))]);
var next_obj_45221 = oops.core.get_key_dynamically(obj_45218,key_45220,mode_45219);
var G__45224 = mode_45219;
switch (G__45224) {
case (0):
var G__45244 = (i_45217 + (2));
var G__45245 = next_obj_45221;
i_45217 = G__45244;
obj_45218 = G__45245;
continue;

break;
case (1):
if((!((next_obj_45221 == null)))){
var G__45246 = (i_45217 + (2));
var G__45247 = next_obj_45221;
i_45217 = G__45246;
obj_45218 = G__45247;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_45221 == null)))){
var G__45248 = (i_45217 + (2));
var G__45249 = next_obj_45221;
i_45217 = G__45248;
obj_45218 = G__45249;
continue;
} else {
var G__45250 = (i_45217 + (2));
var G__45251 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_45218,key_45220) : oops.core.punch_key_dynamically_BANG_.call(null,obj_45218,key_45220));
i_45217 = G__45250;
obj_45218 = G__45251;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45224)].join('')));

}
} else {
return obj_45218;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_45253 = (function (){var path_45252 = oops.core.build_path_dynamically(selector);

return path_45252;
})();
var len_45256 = path_45253.length;
var parent_obj_path_45257 = path_45253.slice((0),(len_45256 - (2)));
var key_45254 = (path_45253[(len_45256 - (1))]);
var mode_45255 = (path_45253[(len_45256 - (2))]);
var parent_obj_45258 = (function (){var path_45259 = parent_obj_path_45257;
var len_45260 = path_45259.length;
var i_45261 = (0);
var obj_45262 = obj;
while(true){
if((i_45261 < len_45260)){
var mode_45263 = (path_45259[i_45261]);
var key_45264 = (path_45259[(i_45261 + (1))]);
var next_obj_45265 = oops.core.get_key_dynamically(obj_45262,key_45264,mode_45263);
var G__45266 = mode_45263;
switch (G__45266) {
case (0):
var G__45268 = (i_45261 + (2));
var G__45269 = next_obj_45265;
i_45261 = G__45268;
obj_45262 = G__45269;
continue;

break;
case (1):
if((!((next_obj_45265 == null)))){
var G__45270 = (i_45261 + (2));
var G__45271 = next_obj_45265;
i_45261 = G__45270;
obj_45262 = G__45271;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_45265 == null)))){
var G__45272 = (i_45261 + (2));
var G__45273 = next_obj_45265;
i_45261 = G__45272;
obj_45262 = G__45273;
continue;
} else {
var G__45274 = (i_45261 + (2));
var G__45275 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_45262,key_45264) : oops.core.punch_key_dynamically_BANG_.call(null,obj_45262,key_45264));
i_45261 = G__45274;
obj_45262 = G__45275;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45266)].join('')));

}
} else {
return obj_45262;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_45258,key_45254,val,mode_45255);
});
