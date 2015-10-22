// Compiled by ClojureScript 1.7.48 {}
goog.provide('hoplon.app_pages._somewhat_working_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms_to_load = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.app_pages._somewhat_working_DOT_html.load_hubspot_form = (function hoplon$app_pages$_somewhat_working_DOT_html$load_hubspot_form(opts){
return cljs.core.swap_BANG_.call(null,hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms_to_load,cljs.core.conj,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),""], null),opts));
});
/**
 * Load hubspot form API, then create forms registered by `load-hubspot-form`.
 */
hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms = (function hoplon$app_pages$_somewhat_working_DOT_html$hubspot_forms(){
return hoplon.core.add_initfn_BANG_.call(null,(function (){
return jQuery.getScript("//js.hsforms.net/forms/v2.js",(function (){
var seq__11033 = cljs.core.seq.call(null,cljs.core.deref.call(null,hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms_to_load));
var chunk__11034 = null;
var count__11035 = (0);
var i__11036 = (0);
while(true){
if((i__11036 < count__11035)){
var map__11037 = cljs.core._nth.call(null,chunk__11034,i__11036);
var map__11037__$1 = ((((!((map__11037 == null)))?((((map__11037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11037):map__11037);
var opts = map__11037__$1;
var target = cljs.core.get.call(null,map__11037__$1,new cljs.core.Keyword(null,"target","target",253001721));
cljs.core.print.call(null,"Loading HubSpot form",target);

hbspt.forms.create(cljs.core.clj__GT_js.call(null,opts));

var G__11041 = seq__11033;
var G__11042 = chunk__11034;
var G__11043 = count__11035;
var G__11044 = (i__11036 + (1));
seq__11033 = G__11041;
chunk__11034 = G__11042;
count__11035 = G__11043;
i__11036 = G__11044;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11033);
if(temp__4425__auto__){
var seq__11033__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11033__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__11033__$1);
var G__11045 = cljs.core.chunk_rest.call(null,seq__11033__$1);
var G__11046 = c__5837__auto__;
var G__11047 = cljs.core.count.call(null,c__5837__auto__);
var G__11048 = (0);
seq__11033 = G__11045;
chunk__11034 = G__11046;
count__11035 = G__11047;
i__11036 = G__11048;
continue;
} else {
var map__11039 = cljs.core.first.call(null,seq__11033__$1);
var map__11039__$1 = ((((!((map__11039 == null)))?((((map__11039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11039):map__11039);
var opts = map__11039__$1;
var target = cljs.core.get.call(null,map__11039__$1,new cljs.core.Keyword(null,"target","target",253001721));
cljs.core.print.call(null,"Loading HubSpot form",target);

hbspt.forms.create(cljs.core.clj__GT_js.call(null,opts));

var G__11049 = cljs.core.next.call(null,seq__11033__$1);
var G__11050 = null;
var G__11051 = (0);
var G__11052 = (0);
seq__11033 = G__11049;
chunk__11034 = G__11050;
count__11035 = G__11051;
i__11036 = G__11052;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
hoplon.app_pages._somewhat_working_DOT_html.load_hubspot_form.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),"#hs-newsletter-form",new cljs.core.Keyword(null,"portalId","portalId",430381352),(511335),new cljs.core.Keyword(null,"formId","formId",-1463809395),"1492e5ad-c59f-4cb7-aa33-1375cffa1722"], null));
if(cljs.core.truth_(hoplon.core.prerendering_QMARK_)){
} else {
hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms.call(null);
}
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.title.call(null,[cljs.core.str("somewhat-working"),cljs.core.str((cljs.core.truth_(hoplon.core.prerendering_QMARK_)?" (prerendered)":null))].join('')),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"app.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet")),hoplon.core.body.call(null,hoplon.core.h1.call(null,"Hello, HubSpot!"),hoplon.core.h2.call(null,"No thank-you message after submit"),hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"hs-newsletter-form","Loading HubSpot form..."),hoplon.core.p.call(null,"Also see: ",hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"./","Minified error"))));
