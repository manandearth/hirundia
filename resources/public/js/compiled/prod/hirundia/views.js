// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('hirundia.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('hirundia.subs');
goog.require('hirundia.events');
goog.require('reagent.core');
hirundia.views.main_panel = (function hirundia$views$main_panel(){
var title = (function (){var G__45305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hirundia$subs_SLASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45305) : re_frame.core.subscribe.call(null,G__45305));
})();
var data = (function (){var G__45306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hirundia$subs_SLASH_data], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45306) : re_frame.core.subscribe.call(null,G__45306));
})();
var selected_attr = (function (){var G__45307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hirundia$subs_SLASH_selected_DASH_attr], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45307) : re_frame.core.subscribe.call(null,G__45307));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.deref(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["selected attribure is: ",cljs.core.name(cljs.core.deref(selected_attr))].join('')], null)], null);
});