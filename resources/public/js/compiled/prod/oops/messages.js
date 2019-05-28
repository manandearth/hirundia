// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('oops.messages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return ["Oops",", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if((typeof oops !== 'undefined') && (typeof oops.messages !== 'undefined') && (typeof oops.messages.runtime_message !== 'undefined')){
} else {
oops.messages.runtime_message = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__43160 = cljs.core.get_global_hierarchy;
return (fexpr__43160.cljs$core$IFn$_invoke$arity$0 ? fexpr__43160.cljs$core$IFn$_invoke$arity$0() : fexpr__43160.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("oops.messages","runtime-message"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function() { 
var G__43161__delegate = function (type,_){
return type;
};
var G__43161 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__43162__i = 0, G__43162__a = new Array(arguments.length -  1);
while (G__43162__i < G__43162__a.length) {G__43162__a[G__43162__i] = arguments[G__43162__i + 1]; ++G__43162__i;}
  _ = new cljs.core.IndexedSeq(G__43162__a,0,null);
} 
return G__43161__delegate.call(this,type,_);};
G__43161.cljs$lang$maxFixedArity = 1;
G__43161.cljs$lang$applyTo = (function (arglist__43163){
var type = cljs.core.first(arglist__43163);
var _ = cljs.core.rest(arglist__43163);
return G__43161__delegate(type,_);
});
G__43161.cljs$core$IFn$_invoke$arity$variadic = G__43161__delegate;
return G__43161;
})()
;})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,(function (_type,info){
var map__43164 = info;
var map__43164__$1 = (((((!((map__43164 == null))))?(((((map__43164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43164):map__43164);
var flavor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,cljs.core.cst$kw$flavor);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",(((!(cljs.core.empty_QMARK_(path))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null)].join('')) : oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",(((!(cljs.core.empty_QMARK_(path))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null)].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,(function (_type,info){
var map__43166 = info;
var map__43166__$1 = (((((!((map__43166 == null))))?(((((map__43166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43166):map__43166);
var soft_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43166__$1,cljs.core.cst$kw$soft_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43166__$1,cljs.core.cst$kw$path);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43166__$1,cljs.core.cst$kw$fn);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Expected a function",(cljs.core.truth_(soft_QMARK_)?" or nil":null),(((!(cljs.core.empty_QMARK_(path))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')) : oops.messages.post_process_message.call(null,["Expected a function",(cljs.core.truth_(soft_QMARK_)?" or nil":null),(((!(cljs.core.empty_QMARK_(path))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,(function (_type,info){
var map__43168 = info;
var map__43168__$1 = (((((!((map__43168 == null))))?(((((map__43168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43168):map__43168);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43168__$1,cljs.core.cst$kw$key);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43168__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",(((!(((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null)].join('')) : oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",(((!(((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null)].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Invalid selector") : oops.messages.post_process_message.call(null,"Invalid selector"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Unexpected empty selector") : oops.messages.post_process_message.call(null,"Unexpected empty selector"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Unexpected punching selector (\"!\" makes sense only with oset!)") : oops.messages.post_process_message.call(null,"Unexpected punching selector (\"!\" makes sense only with oset!)"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Unexpected soft selector (\"?\" does not make sense with oset!)") : oops.messages.post_process_message.call(null,"Unexpected soft selector (\"?\" does not make sense with oset!)"));
}));
