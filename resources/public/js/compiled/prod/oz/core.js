// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('oz.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
taoensso.timbre.set_level_BANG_(cljs.core.cst$kw$info);
cljs.core.enable_console_print_BANG_();
oz.core.log = (function oz$core$log(a_thing){
return console.log(a_thing);
});
oz.core.render_vega_lite = (function oz$core$render_vega_lite(spec,elem){
if(cljs.core.truth_(spec)){
var spec__$1 = cljs.core.clj__GT_js(spec);
var opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$renderer,"canvas",cljs.core.cst$kw$mode,"vega-lite"], null);
var vega_spec = vl.compile(spec__$1);
oz.core.log("Vega-lite translates to:");

oz.core.log(vega_spec);

return vegaEmbed(elem,spec__$1,cljs.core.clj__GT_js(opts)).then(((function (spec__$1,opts,vega_spec){
return (function (res){
return vegaTooltip.vegaLite(res.view,spec__$1);
});})(spec__$1,opts,vega_spec))
).catch(((function (spec__$1,opts,vega_spec){
return (function (err){
return oz.core.log(err);
});})(spec__$1,opts,vega_spec))
);
} else {
return null;
}
});
oz.core.render_vega = (function oz$core$render_vega(spec,elem){
if(cljs.core.truth_(spec)){
var spec__$1 = cljs.core.clj__GT_js(spec);
var opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$renderer,"canvas",cljs.core.cst$kw$mode,"vega"], null);
return vegaEmbed(elem,spec__$1,cljs.core.clj__GT_js(opts)).then(((function (spec__$1,opts){
return (function (res){
return vegaTooltip.vega(res.view,spec__$1);
});})(spec__$1,opts))
).catch(((function (spec__$1,opts){
return (function (err){
return oz.core.log(err);
});})(spec__$1,opts))
);
} else {
return null;
}
});
/**
 * Reagent component that renders vega-lite.
 */
oz.core.vega_lite = (function oz$core$vega_lite(spec){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"vega-lite",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return oz.core.render_vega_lite(spec,reagent.core.dom_node(this$));
}),cljs.core.cst$kw$component_DASH_will_DASH_update,(function (this$,p__49096){
var vec__49097 = p__49096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49097,(0),null);
var new_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49097,(1),null);
return oz.core.render_vega_lite(new_spec,reagent.core.dom_node(this$));
}),cljs.core.cst$kw$reagent_DASH_render,(function (spec__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_vis], null);
})], null));
});
/**
 * Reagent component that renders vega
 */
oz.core.vega = (function oz$core$vega(spec){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"vega",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return oz.core.render_vega(spec,reagent.core.dom_node(this$));
}),cljs.core.cst$kw$component_DASH_will_DASH_update,(function (this$,p__49100){
var vec__49101 = p__49100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(0),null);
var new_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(1),null);
return oz.core.render_vega(new_spec,reagent.core.dom_node(this$));
}),cljs.core.cst$kw$reagent_DASH_render,(function (spec__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_vis], null);
})], null));
});
oz.core.view_spec = (function oz$core$view_spec(spec){
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.coll_QMARK_(x);
if(and__4120__auto__){
var G__49107 = cljs.core.first(x);
var fexpr__49106 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vega,null,cljs.core.cst$kw$vega_DASH_lite,null], null), null);
return (fexpr__49106.cljs$core$IFn$_invoke$arity$1 ? fexpr__49106.cljs$core$IFn$_invoke$arity$1(G__49107) : fexpr__49106.call(null,G__49107));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49108 = cljs.core.first(x);
var G__49108__$1 = (((G__49108 instanceof cljs.core.Keyword))?G__49108.fqn:null);
switch (G__49108__$1) {
case "vega":
return oz.core.vega;

break;
case "vega-lite":
return oz.core.vega_lite;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49108__$1)].join('')));

}
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.rest(x))], null);
} else {
return x;
}
}),spec);
});
