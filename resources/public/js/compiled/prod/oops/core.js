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

var G__44776 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__44776)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__44523__auto__ = data;
var or__4131__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5718__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var devtools__44524__auto__ = temp__5718__auto__;
var temp__5718__auto____$1 = (devtools__44524__auto__["toolbox"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var toolbox__44525__auto__ = temp__5718__auto____$1;
var temp__5718__auto____$2 = (toolbox__44525__auto__["envelope"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var envelope__44526__auto__ = temp__5718__auto____$2;
if(cljs.core.fn_QMARK_(envelope__44526__auto__)){
return (envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2(data__44523__auto__,"details") : envelope__44526__auto__.call(null,data__44523__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data__44523__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__44776)){
var G__44778 = (console["error"]);
var G__44779 = msg;
var G__44780 = (function (){var data__44523__auto__ = data;
var or__4131__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5718__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var devtools__44524__auto__ = temp__5718__auto__;
var temp__5718__auto____$1 = (devtools__44524__auto__["toolbox"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var toolbox__44525__auto__ = temp__5718__auto____$1;
var temp__5718__auto____$2 = (toolbox__44525__auto__["envelope"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var envelope__44526__auto__ = temp__5718__auto____$2;
if(cljs.core.fn_QMARK_(envelope__44526__auto__)){
return (envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2(data__44523__auto__,"details") : envelope__44526__auto__.call(null,data__44523__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data__44523__auto__;
}
})();
var fexpr__44777 = oops.state.get_console_reporter();
return (fexpr__44777.cljs$core$IFn$_invoke$arity$3 ? fexpr__44777.cljs$core$IFn$_invoke$arity$3(G__44778,G__44779,G__44780) : fexpr__44777.call(null,G__44778,G__44779,G__44780));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44776)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44776)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__44781 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__44781)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__44523__auto__ = data;
var or__4131__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5718__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var devtools__44524__auto__ = temp__5718__auto__;
var temp__5718__auto____$1 = (devtools__44524__auto__["toolbox"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var toolbox__44525__auto__ = temp__5718__auto____$1;
var temp__5718__auto____$2 = (toolbox__44525__auto__["envelope"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var envelope__44526__auto__ = temp__5718__auto____$2;
if(cljs.core.fn_QMARK_(envelope__44526__auto__)){
return (envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2(data__44523__auto__,"details") : envelope__44526__auto__.call(null,data__44523__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data__44523__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__44781)){
var G__44783 = (console["warn"]);
var G__44784 = msg;
var G__44785 = (function (){var data__44523__auto__ = data;
var or__4131__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5718__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var devtools__44524__auto__ = temp__5718__auto__;
var temp__5718__auto____$1 = (devtools__44524__auto__["toolbox"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var toolbox__44525__auto__ = temp__5718__auto____$1;
var temp__5718__auto____$2 = (toolbox__44525__auto__["envelope"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var envelope__44526__auto__ = temp__5718__auto____$2;
if(cljs.core.fn_QMARK_(envelope__44526__auto__)){
return (envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__44526__auto__.cljs$core$IFn$_invoke$arity$2(data__44523__auto__,"details") : envelope__44526__auto__.call(null,data__44523__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data__44523__auto__;
}
})();
var fexpr__44782 = oops.state.get_console_reporter();
return (fexpr__44782.cljs$core$IFn$_invoke$arity$3 ? fexpr__44782.cljs$core$IFn$_invoke$arity$3(G__44783,G__44784,G__44785) : fexpr__44782.call(null,G__44783,G__44784,G__44785));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44781)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44781)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44792 = arguments.length;
var i__4731__auto___44793 = (0);
while(true){
if((i__4731__auto___44793 < len__4730__auto___44792)){
args__4736__auto__.push((arguments[i__4731__auto___44793]));

var G__44794 = (i__4731__auto___44793 + (1));
i__4731__auto___44793 = G__44794;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__44788){
var vec__44789 = p__44788;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44789,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq44786){
var G__44787 = cljs.core.first(seq44786);
var seq44786__$1 = cljs.core.next(seq44786);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44787,seq44786__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_44796 = oops.config.get_child_factory();
var child_factory_44796__$1 = (function (){var G__44797 = child_factory_44796;
var G__44797__$1 = (((G__44797 instanceof cljs.core.Keyword))?G__44797.fqn:null);
switch (G__44797__$1) {
case "js-obj":
return ((function (G__44797,G__44797__$1,child_factory_44796){
return (function (){
return ({});
});
;})(G__44797,G__44797__$1,child_factory_44796))

break;
case "js-array":
return ((function (G__44797,G__44797__$1,child_factory_44796){
return (function (){
return [];
});
;})(G__44797,G__44797__$1,child_factory_44796))

break;
default:
return child_factory_44796;

}
})();

var child_obj_44795 = (child_factory_44796__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_44796__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_44796__$1.call(null,obj,key));
(obj[key] = child_obj_44795);

return child_obj_44795;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
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
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);

if(cljs.core.truth_(check_key_QMARK_)){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key))))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;
}
} else {
return true;
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
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_44801 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_44801);

return selector_path_44801;
} else {
var selector_path_44802 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_44802);

return selector_path_44802;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5718__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5718__auto__)){
var issue_44803 = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_44803);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_44805 = (function (){var path_44804 = oops.core.build_path_dynamically(selector);

return path_44804;
})();
var len_44806 = path_44805.length;
var i_44807 = (0);
var obj_44808 = obj;
while(true){
if((i_44807 < len_44806)){
var mode_44809 = (path_44805[i_44807]);
var key_44810 = (path_44805[(i_44807 + (1))]);
var next_obj_44811 = oops.core.get_key_dynamically(obj_44808,key_44810,mode_44809);
var G__44812 = mode_44809;
switch (G__44812) {
case (0):
var G__44814 = (i_44807 + (2));
var G__44815 = next_obj_44811;
i_44807 = G__44814;
obj_44808 = G__44815;
continue;

break;
case (1):
if((!((next_obj_44811 == null)))){
var G__44816 = (i_44807 + (2));
var G__44817 = next_obj_44811;
i_44807 = G__44816;
obj_44808 = G__44817;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44811 == null)))){
var G__44818 = (i_44807 + (2));
var G__44819 = next_obj_44811;
i_44807 = G__44818;
obj_44808 = G__44819;
continue;
} else {
var G__44820 = (i_44807 + (2));
var G__44821 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_44808,key_44810) : oops.core.punch_key_dynamically_BANG_.call(null,obj_44808,key_44810));
i_44807 = G__44820;
obj_44808 = G__44821;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44812)].join('')));

}
} else {
return obj_44808;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_44823 = (function (){var path_44822 = oops.core.build_path_dynamically(selector);

return path_44822;
})();
var len_44824 = path_44823.length;
if((len_44824 < (4))){
return [obj,(function (){var path_44826 = path_44823;
var len_44827 = path_44826.length;
var i_44828 = (0);
var obj_44829 = obj;
while(true){
if((i_44828 < len_44827)){
var mode_44830 = (path_44826[i_44828]);
var key_44831 = (path_44826[(i_44828 + (1))]);
var next_obj_44832 = oops.core.get_key_dynamically(obj_44829,key_44831,mode_44830);
var G__44847 = mode_44830;
switch (G__44847) {
case (0):
var G__44851 = (i_44828 + (2));
var G__44852 = next_obj_44832;
i_44828 = G__44851;
obj_44829 = G__44852;
continue;

break;
case (1):
if((!((next_obj_44832 == null)))){
var G__44853 = (i_44828 + (2));
var G__44854 = next_obj_44832;
i_44828 = G__44853;
obj_44829 = G__44854;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44832 == null)))){
var G__44855 = (i_44828 + (2));
var G__44856 = next_obj_44832;
i_44828 = G__44855;
obj_44829 = G__44856;
continue;
} else {
var G__44857 = (i_44828 + (2));
var G__44858 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_44829,key_44831) : oops.core.punch_key_dynamically_BANG_.call(null,obj_44829,key_44831));
i_44828 = G__44857;
obj_44829 = G__44858;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44847)].join('')));

}
} else {
return obj_44829;
}
break;
}
})()];
} else {
var target_obj_44825 = (function (){var path_44833 = path_44823.slice((0),(len_44824 - (2)));
var len_44834 = path_44833.length;
var i_44835 = (0);
var obj_44836 = obj;
while(true){
if((i_44835 < len_44834)){
var mode_44837 = (path_44833[i_44835]);
var key_44838 = (path_44833[(i_44835 + (1))]);
var next_obj_44839 = oops.core.get_key_dynamically(obj_44836,key_44838,mode_44837);
var G__44848 = mode_44837;
switch (G__44848) {
case (0):
var G__44860 = (i_44835 + (2));
var G__44861 = next_obj_44839;
i_44835 = G__44860;
obj_44836 = G__44861;
continue;

break;
case (1):
if((!((next_obj_44839 == null)))){
var G__44862 = (i_44835 + (2));
var G__44863 = next_obj_44839;
i_44835 = G__44862;
obj_44836 = G__44863;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44839 == null)))){
var G__44864 = (i_44835 + (2));
var G__44865 = next_obj_44839;
i_44835 = G__44864;
obj_44836 = G__44865;
continue;
} else {
var G__44866 = (i_44835 + (2));
var G__44867 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_44836,key_44838) : oops.core.punch_key_dynamically_BANG_.call(null,obj_44836,key_44838));
i_44835 = G__44866;
obj_44836 = G__44867;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44848)].join('')));

}
} else {
return obj_44836;
}
break;
}
})();
return [target_obj_44825,(function (){var path_44840 = [(path_44823[(len_44824 - (2))]),(path_44823[(len_44824 - (1))])];
var len_44841 = path_44840.length;
var i_44842 = (0);
var obj_44843 = target_obj_44825;
while(true){
if((i_44842 < len_44841)){
var mode_44844 = (path_44840[i_44842]);
var key_44845 = (path_44840[(i_44842 + (1))]);
var next_obj_44846 = oops.core.get_key_dynamically(obj_44843,key_44845,mode_44844);
var G__44849 = mode_44844;
switch (G__44849) {
case (0):
var G__44869 = (i_44842 + (2));
var G__44870 = next_obj_44846;
i_44842 = G__44869;
obj_44843 = G__44870;
continue;

break;
case (1):
if((!((next_obj_44846 == null)))){
var G__44871 = (i_44842 + (2));
var G__44872 = next_obj_44846;
i_44842 = G__44871;
obj_44843 = G__44872;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44846 == null)))){
var G__44873 = (i_44842 + (2));
var G__44874 = next_obj_44846;
i_44842 = G__44873;
obj_44843 = G__44874;
continue;
} else {
var G__44875 = (i_44842 + (2));
var G__44876 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_44843,key_44845) : oops.core.punch_key_dynamically_BANG_.call(null,obj_44843,key_44845));
i_44842 = G__44875;
obj_44843 = G__44876;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44849)].join('')));

}
} else {
return obj_44843;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_44878 = (function (){var path_44877 = oops.core.build_path_dynamically(selector);

return path_44877;
})();
var len_44881 = path_44878.length;
var parent_obj_path_44882 = path_44878.slice((0),(len_44881 - (2)));
var key_44879 = (path_44878[(len_44881 - (1))]);
var mode_44880 = (path_44878[(len_44881 - (2))]);
var parent_obj_44883 = (function (){var path_44884 = parent_obj_path_44882;
var len_44885 = path_44884.length;
var i_44886 = (0);
var obj_44887 = obj;
while(true){
if((i_44886 < len_44885)){
var mode_44888 = (path_44884[i_44886]);
var key_44889 = (path_44884[(i_44886 + (1))]);
var next_obj_44890 = oops.core.get_key_dynamically(obj_44887,key_44889,mode_44888);
var G__44891 = mode_44888;
switch (G__44891) {
case (0):
var G__44893 = (i_44886 + (2));
var G__44894 = next_obj_44890;
i_44886 = G__44893;
obj_44887 = G__44894;
continue;

break;
case (1):
if((!((next_obj_44890 == null)))){
var G__44895 = (i_44886 + (2));
var G__44896 = next_obj_44890;
i_44886 = G__44895;
obj_44887 = G__44896;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44890 == null)))){
var G__44897 = (i_44886 + (2));
var G__44898 = next_obj_44890;
i_44886 = G__44897;
obj_44887 = G__44898;
continue;
} else {
var G__44899 = (i_44886 + (2));
var G__44900 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_44887,key_44889) : oops.core.punch_key_dynamically_BANG_.call(null,obj_44887,key_44889));
i_44886 = G__44899;
obj_44887 = G__44900;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44891)].join('')));

}
} else {
return obj_44887;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_44883,key_44879,val,mode_44880);
});
