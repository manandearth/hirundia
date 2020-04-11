// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('hirundia.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
hirundia.db.df = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hirundia.db.my_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
hirundia.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"nests",cljs.core.cst$kw$data,cljs.core.deref(hirundia.db.df),cljs.core.cst$kw$selected_DASH_attr,cljs.core.cst$kw$gps], null);
