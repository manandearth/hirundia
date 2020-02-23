// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('oops.schema');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.schema.escaped_dot_marker = "####ESCAPED-DOT####";
oops.schema.re_all_escaped_dots = (new RegExp("\\\\\\.","g"));
oops.schema.re_all_escaped_dot_markers = (new RegExp("####ESCAPED-DOT####","g"));
oops.schema.unescape_modifiers = (function oops$schema$unescape_modifiers(s){
return s.replace(/^\\([?!])/,"$1");
});
oops.schema.parse_selector_element_BANG_ = (function oops$schema$parse_selector_element_BANG_(element_str,arr){
if(cljs.core.empty_QMARK_(element_str)){
return null;
} else {
var G__49647 = cljs.core.first(element_str);
switch (G__49647) {
case "?":
arr.push((1));

return arr.push(element_str.substring((1)));

break;
case "!":
arr.push((2));

return arr.push(element_str.substring((1)));

break;
default:
arr.push((0));

return arr.push(oops.schema.unescape_modifiers(element_str));

}
}
});
oops.schema.unescape_dots = (function oops$schema$unescape_dots(s){
return s.replace(oops.schema.re_all_escaped_dot_markers,".");
});
oops.schema.parse_selector_string_BANG_ = (function oops$schema$parse_selector_string_BANG_(selector_str,arr){
var elements_arr = selector_str.replace(oops.schema.re_all_escaped_dots,oops.schema.escaped_dot_marker).split(".");
var items = cljs.core.seq(elements_arr);
while(true){
if(items){
oops.schema.parse_selector_element_BANG_(oops.schema.unescape_dots(cljs.core.first(items)),arr);

var G__49649 = cljs.core.next(items);
items = G__49649;
continue;
} else {
return null;
}
break;
}
});
oops.schema.coerce_key_dynamically_BANG_ = (function oops$schema$coerce_key_dynamically_BANG_(key,arr){
var selector_str = cljs.core.name(key);
return oops.schema.parse_selector_string_BANG_(selector_str,arr);
});
oops.schema.collect_coerced_keys_into_array_BANG_ = (function oops$schema$collect_coerced_keys_into_array_BANG_(coll,arr){
var items = cljs.core.seq(coll);
while(true){
if((!((items == null)))){
var item = cljs.core._first(items);
if(cljs.core.sequential_QMARK_(item)){
(oops.schema.collect_coerced_keys_into_array_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.schema.collect_coerced_keys_into_array_BANG_.cljs$core$IFn$_invoke$arity$2(item,arr) : oops.schema.collect_coerced_keys_into_array_BANG_.call(null,item,arr));
} else {
oops.schema.coerce_key_dynamically_BANG_(item,arr);
}

var G__49650 = cljs.core.next(items);
items = G__49650;
continue;
} else {
return null;
}
break;
}
});
oops.schema.standalone_modifier_QMARK_ = (function oops$schema$standalone_modifier_QMARK_(arr,i){
return ((((arr[i]) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",(arr[(i + (1))]))));
});
oops.schema.merge_standalone_modifier_BANG_ = (function oops$schema$merge_standalone_modifier_BANG_(arr,i){
(arr[(i + (2))] = (arr[i]));

return arr.splice(i,(2));
});
oops.schema.merge_standalone_modifiers_BANG_ = (function oops$schema$merge_standalone_modifiers_BANG_(arr){
var len = arr.length;
var i = (len - (2));
while(true){
var finger = (i - (2));
if((finger < (0))){
return arr;
} else {
if(oops.schema.standalone_modifier_QMARK_(arr,finger)){
oops.schema.merge_standalone_modifier_BANG_(arr,finger);
} else {
}

var G__49651 = finger;
i = G__49651;
continue;
}
break;
}
});
oops.schema.prepare_path_BANG_ = (function oops$schema$prepare_path_BANG_(selector,arr){
oops.schema.collect_coerced_keys_into_array_BANG_(selector,arr);

return oops.schema.merge_standalone_modifiers_BANG_(arr);
});
oops.schema.prepare_simple_path_BANG_ = (function oops$schema$prepare_simple_path_BANG_(key,arr){
return oops.schema.coerce_key_dynamically_BANG_(key,arr);
});
oops.schema.has_invalid_path_access_mode_QMARK_ = (function oops$schema$has_invalid_path_access_mode_QMARK_(path,is_valid_QMARK_){
var items = cljs.core.seq(path);
while(true){
if(items){
if(cljs.core.truth_((function (){var G__49652 = cljs.core.first(items);
return (is_valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? is_valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49652) : is_valid_QMARK_.call(null,G__49652));
})())){
var G__49653 = cljs.core.next(cljs.core.next(items));
items = G__49653;
continue;
} else {
return true;
}
} else {
return null;
}
break;
}
});
oops.schema.check_dynamic_path_BANG_ = (function oops$schema$check_dynamic_path_BANG_(path,op){


if(cljs.core.empty_QMARK_(path)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector], null);
} else {
var G__49656 = op;
switch (G__49656) {
case (0):
if(cljs.core.truth_(oops.schema.has_invalid_path_access_mode_QMARK_(path,((function (G__49656){
return (function (p1__49654_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__49654_SHARP_,(2));
});})(G__49656))
))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector], null);
} else {
return null;
}

break;
case (1):
if(cljs.core.truth_(oops.schema.has_invalid_path_access_mode_QMARK_(path,((function (G__49656){
return (function (p1__49655_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__49655_SHARP_,(1));
});})(G__49656))
))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49656)].join('')));

}
}
});
