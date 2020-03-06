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

var G__52383 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__52383)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__52383)){
var G__52385 = (console["error"]);
var G__52386 = msg;
var G__52387 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52384 = oops.state.get_console_reporter();
return (fexpr__52384.cljs$core$IFn$_invoke$arity$3 ? fexpr__52384.cljs$core$IFn$_invoke$arity$3(G__52385,G__52386,G__52387) : fexpr__52384.call(null,G__52385,G__52386,G__52387));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52383)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52383)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__52388 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__52388)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__52388)){
var G__52390 = (console["warn"]);
var G__52391 = msg;
var G__52392 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52389 = oops.state.get_console_reporter();
return (fexpr__52389.cljs$core$IFn$_invoke$arity$3 ? fexpr__52389.cljs$core$IFn$_invoke$arity$3(G__52390,G__52391,G__52392) : fexpr__52389.call(null,G__52390,G__52391,G__52392));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52388)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52388)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52399 = arguments.length;
var i__4731__auto___52400 = (0);
while(true){
if((i__4731__auto___52400 < len__4730__auto___52399)){
args__4736__auto__.push((arguments[i__4731__auto___52400]));

var G__52401 = (i__4731__auto___52400 + (1));
i__4731__auto___52400 = G__52401;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__52395){
var vec__52396 = p__52395;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52396,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq52393){
var G__52394 = cljs.core.first(seq52393);
var seq52393__$1 = cljs.core.next(seq52393);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52394,seq52393__$1);
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
var descriptor_52402 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_52402);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_52403 = temp__5722__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_52403,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_52403,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_52405 = oops.config.get_child_factory();
var child_factory_52405__$1 = (function (){var G__52406 = child_factory_52405;
var G__52406__$1 = (((G__52406 instanceof cljs.core.Keyword))?G__52406.fqn:null);
switch (G__52406__$1) {
case "js-obj":
return ((function (G__52406,G__52406__$1,child_factory_52405){
return (function (){
return ({});
});
;})(G__52406,G__52406__$1,child_factory_52405))

break;
case "js-array":
return ((function (G__52406,G__52406__$1,child_factory_52405){
return (function (){
return [];
});
;})(G__52406,G__52406__$1,child_factory_52405))

break;
default:
return child_factory_52405;

}
})();

var child_obj_52404 = (child_factory_52405__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_52405__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_52405__$1.call(null,obj,key));
(obj[key] = child_obj_52404);

return child_obj_52404;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_52410 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_52410);

return selector_path_52410;
} else {
var selector_path_52411 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_52411);

return selector_path_52411;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_52412 = temp__5724__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_52412);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_52414 = (function (){var path_52413 = oops.core.build_path_dynamically(selector);

return path_52413;
})();
var len_52415 = path_52414.length;
var i_52416 = (0);
var obj_52417 = obj;
while(true){
if((i_52416 < len_52415)){
var mode_52418 = (path_52414[i_52416]);
var key_52419 = (path_52414[(i_52416 + (1))]);
var next_obj_52420 = oops.core.get_key_dynamically(obj_52417,key_52419,mode_52418);
var G__52421 = mode_52418;
switch (G__52421) {
case (0):
var G__52423 = (i_52416 + (2));
var G__52424 = next_obj_52420;
i_52416 = G__52423;
obj_52417 = G__52424;
continue;

break;
case (1):
if((!((next_obj_52420 == null)))){
var G__52425 = (i_52416 + (2));
var G__52426 = next_obj_52420;
i_52416 = G__52425;
obj_52417 = G__52426;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52420 == null)))){
var G__52427 = (i_52416 + (2));
var G__52428 = next_obj_52420;
i_52416 = G__52427;
obj_52417 = G__52428;
continue;
} else {
var G__52429 = (i_52416 + (2));
var G__52430 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52417,key_52419) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52417,key_52419));
i_52416 = G__52429;
obj_52417 = G__52430;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52421)].join('')));

}
} else {
return obj_52417;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_52432 = (function (){var path_52431 = oops.core.build_path_dynamically(selector);

return path_52431;
})();
var len_52433 = path_52432.length;
if((len_52433 < (4))){
return [obj,(function (){var path_52435 = path_52432;
var len_52436 = path_52435.length;
var i_52437 = (0);
var obj_52438 = obj;
while(true){
if((i_52437 < len_52436)){
var mode_52439 = (path_52435[i_52437]);
var key_52440 = (path_52435[(i_52437 + (1))]);
var next_obj_52441 = oops.core.get_key_dynamically(obj_52438,key_52440,mode_52439);
var G__52456 = mode_52439;
switch (G__52456) {
case (0):
var G__52460 = (i_52437 + (2));
var G__52461 = next_obj_52441;
i_52437 = G__52460;
obj_52438 = G__52461;
continue;

break;
case (1):
if((!((next_obj_52441 == null)))){
var G__52462 = (i_52437 + (2));
var G__52463 = next_obj_52441;
i_52437 = G__52462;
obj_52438 = G__52463;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52441 == null)))){
var G__52464 = (i_52437 + (2));
var G__52465 = next_obj_52441;
i_52437 = G__52464;
obj_52438 = G__52465;
continue;
} else {
var G__52466 = (i_52437 + (2));
var G__52467 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52438,key_52440) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52438,key_52440));
i_52437 = G__52466;
obj_52438 = G__52467;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52456)].join('')));

}
} else {
return obj_52438;
}
break;
}
})()];
} else {
var target_obj_52434 = (function (){var path_52442 = path_52432.slice((0),(len_52433 - (2)));
var len_52443 = path_52442.length;
var i_52444 = (0);
var obj_52445 = obj;
while(true){
if((i_52444 < len_52443)){
var mode_52446 = (path_52442[i_52444]);
var key_52447 = (path_52442[(i_52444 + (1))]);
var next_obj_52448 = oops.core.get_key_dynamically(obj_52445,key_52447,mode_52446);
var G__52457 = mode_52446;
switch (G__52457) {
case (0):
var G__52469 = (i_52444 + (2));
var G__52470 = next_obj_52448;
i_52444 = G__52469;
obj_52445 = G__52470;
continue;

break;
case (1):
if((!((next_obj_52448 == null)))){
var G__52471 = (i_52444 + (2));
var G__52472 = next_obj_52448;
i_52444 = G__52471;
obj_52445 = G__52472;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52448 == null)))){
var G__52473 = (i_52444 + (2));
var G__52474 = next_obj_52448;
i_52444 = G__52473;
obj_52445 = G__52474;
continue;
} else {
var G__52475 = (i_52444 + (2));
var G__52476 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52445,key_52447) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52445,key_52447));
i_52444 = G__52475;
obj_52445 = G__52476;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52457)].join('')));

}
} else {
return obj_52445;
}
break;
}
})();
return [target_obj_52434,(function (){var path_52449 = [(path_52432[(len_52433 - (2))]),(path_52432[(len_52433 - (1))])];
var len_52450 = path_52449.length;
var i_52451 = (0);
var obj_52452 = target_obj_52434;
while(true){
if((i_52451 < len_52450)){
var mode_52453 = (path_52449[i_52451]);
var key_52454 = (path_52449[(i_52451 + (1))]);
var next_obj_52455 = oops.core.get_key_dynamically(obj_52452,key_52454,mode_52453);
var G__52458 = mode_52453;
switch (G__52458) {
case (0):
var G__52478 = (i_52451 + (2));
var G__52479 = next_obj_52455;
i_52451 = G__52478;
obj_52452 = G__52479;
continue;

break;
case (1):
if((!((next_obj_52455 == null)))){
var G__52480 = (i_52451 + (2));
var G__52481 = next_obj_52455;
i_52451 = G__52480;
obj_52452 = G__52481;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52455 == null)))){
var G__52482 = (i_52451 + (2));
var G__52483 = next_obj_52455;
i_52451 = G__52482;
obj_52452 = G__52483;
continue;
} else {
var G__52484 = (i_52451 + (2));
var G__52485 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52452,key_52454) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52452,key_52454));
i_52451 = G__52484;
obj_52452 = G__52485;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52458)].join('')));

}
} else {
return obj_52452;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_52487 = (function (){var path_52486 = oops.core.build_path_dynamically(selector);

return path_52486;
})();
var len_52490 = path_52487.length;
var parent_obj_path_52491 = path_52487.slice((0),(len_52490 - (2)));
var key_52488 = (path_52487[(len_52490 - (1))]);
var mode_52489 = (path_52487[(len_52490 - (2))]);
var parent_obj_52492 = (function (){var path_52493 = parent_obj_path_52491;
var len_52494 = path_52493.length;
var i_52495 = (0);
var obj_52496 = obj;
while(true){
if((i_52495 < len_52494)){
var mode_52497 = (path_52493[i_52495]);
var key_52498 = (path_52493[(i_52495 + (1))]);
var next_obj_52499 = oops.core.get_key_dynamically(obj_52496,key_52498,mode_52497);
var G__52500 = mode_52497;
switch (G__52500) {
case (0):
var G__52502 = (i_52495 + (2));
var G__52503 = next_obj_52499;
i_52495 = G__52502;
obj_52496 = G__52503;
continue;

break;
case (1):
if((!((next_obj_52499 == null)))){
var G__52504 = (i_52495 + (2));
var G__52505 = next_obj_52499;
i_52495 = G__52504;
obj_52496 = G__52505;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52499 == null)))){
var G__52506 = (i_52495 + (2));
var G__52507 = next_obj_52499;
i_52495 = G__52506;
obj_52496 = G__52507;
continue;
} else {
var G__52508 = (i_52495 + (2));
var G__52509 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_52496,key_52498) : oops.core.punch_key_dynamically_BANG_.call(null,obj_52496,key_52498));
i_52495 = G__52508;
obj_52496 = G__52509;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52500)].join('')));

}
} else {
return obj_52496;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_52492,key_52488,val,mode_52489);
});
