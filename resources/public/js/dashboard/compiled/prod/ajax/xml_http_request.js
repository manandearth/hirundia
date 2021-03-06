// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__37530 = e.target.readyState;
var fexpr__37529 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__37529.cljs$core$IFn$_invoke$arity$1 ? fexpr__37529.cljs$core$IFn$_invoke$arity$1(G__37530) : fexpr__37529.call(null,G__37530));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37532,handler){
var map__37533 = p__37532;
var map__37533__$1 = (((((!((map__37533 == null))))?(((((map__37533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37533):map__37533);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37533__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37533__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__37533,map__37533__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__37531_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__37531_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__37533,map__37533__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___37551 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___37551)){
var response_type_37552 = temp__5720__auto___37551;
this$__$1.responseType = cljs.core.name(response_type_37552);
} else {
}

var seq__37535_37553 = cljs.core.seq(headers);
var chunk__37536_37554 = null;
var count__37537_37555 = (0);
var i__37538_37556 = (0);
while(true){
if((i__37538_37556 < count__37537_37555)){
var vec__37545_37557 = chunk__37536_37554.cljs$core$IIndexed$_nth$arity$2(null,i__37538_37556);
var k_37558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37545_37557,(0),null);
var v_37559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37545_37557,(1),null);
this$__$1.setRequestHeader(k_37558,v_37559);


var G__37560 = seq__37535_37553;
var G__37561 = chunk__37536_37554;
var G__37562 = count__37537_37555;
var G__37563 = (i__37538_37556 + (1));
seq__37535_37553 = G__37560;
chunk__37536_37554 = G__37561;
count__37537_37555 = G__37562;
i__37538_37556 = G__37563;
continue;
} else {
var temp__5720__auto___37564 = cljs.core.seq(seq__37535_37553);
if(temp__5720__auto___37564){
var seq__37535_37565__$1 = temp__5720__auto___37564;
if(cljs.core.chunked_seq_QMARK_(seq__37535_37565__$1)){
var c__4550__auto___37566 = cljs.core.chunk_first(seq__37535_37565__$1);
var G__37567 = cljs.core.chunk_rest(seq__37535_37565__$1);
var G__37568 = c__4550__auto___37566;
var G__37569 = cljs.core.count(c__4550__auto___37566);
var G__37570 = (0);
seq__37535_37553 = G__37567;
chunk__37536_37554 = G__37568;
count__37537_37555 = G__37569;
i__37538_37556 = G__37570;
continue;
} else {
var vec__37548_37571 = cljs.core.first(seq__37535_37565__$1);
var k_37572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37548_37571,(0),null);
var v_37573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37548_37571,(1),null);
this$__$1.setRequestHeader(k_37572,v_37573);


var G__37574 = cljs.core.next(seq__37535_37565__$1);
var G__37575 = null;
var G__37576 = (0);
var G__37577 = (0);
seq__37535_37553 = G__37574;
chunk__37536_37554 = G__37575;
count__37537_37555 = G__37576;
i__37538_37556 = G__37577;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
