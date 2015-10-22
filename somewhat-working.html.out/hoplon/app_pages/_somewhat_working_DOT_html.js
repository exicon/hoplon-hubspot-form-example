// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._somewhat_working_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms_to_load = (function (){var G__11722 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11722) : cljs.core.atom.call(null,G__11722));
})();
hoplon.app_pages._somewhat_working_DOT_html.load_hubspot_form = (function hoplon$app_pages$_somewhat_working_DOT_html$load_hubspot_form(opts){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms_to_load,cljs.core.conj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$css,""], null),opts], 0)));
});
/**
 * Load hubspot form API, then create forms registered by `load-hubspot-form`.
 */
hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms = (function hoplon$app_pages$_somewhat_working_DOT_html$hubspot_forms(){
return hoplon.core.add_initfn_BANG_((function (){
var G__11755 = "//js.hsforms.net/forms/v2.js";
var G__11756 = ((function (G__11755){
return (function (){
var seq__11757 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms_to_load) : cljs.core.deref.call(null,hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms_to_load)));
var chunk__11758 = null;
var count__11759 = (0);
var i__11760 = (0);
while(true){
if((i__11760 < count__11759)){
var map__11761 = chunk__11758.cljs$core$IIndexed$_nth$arity$2(null,i__11760);
var map__11761__$1 = ((((!((map__11761 == null)))?((((map__11761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11761):map__11761);
var opts = map__11761__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11761__$1,cljs.core.cst$kw$target);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading HubSpot form",target], 0));

var G__11763_11767 = cljs.core.clj__GT_js(opts);
hbspt.forms.create(G__11763_11767);

var G__11768 = seq__11757;
var G__11769 = chunk__11758;
var G__11770 = count__11759;
var G__11771 = (i__11760 + (1));
seq__11757 = G__11768;
chunk__11758 = G__11769;
count__11759 = G__11770;
i__11760 = G__11771;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11757);
if(temp__4425__auto__){
var seq__11757__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11757__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__11757__$1);
var G__11772 = cljs.core.chunk_rest(seq__11757__$1);
var G__11773 = c__5837__auto__;
var G__11774 = cljs.core.count(c__5837__auto__);
var G__11775 = (0);
seq__11757 = G__11772;
chunk__11758 = G__11773;
count__11759 = G__11774;
i__11760 = G__11775;
continue;
} else {
var map__11764 = cljs.core.first(seq__11757__$1);
var map__11764__$1 = ((((!((map__11764 == null)))?((((map__11764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11764):map__11764);
var opts = map__11764__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11764__$1,cljs.core.cst$kw$target);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading HubSpot form",target], 0));

var G__11766_11776 = cljs.core.clj__GT_js(opts);
hbspt.forms.create(G__11766_11776);

var G__11777 = cljs.core.next(seq__11757__$1);
var G__11778 = null;
var G__11779 = (0);
var G__11780 = (0);
seq__11757 = G__11777;
chunk__11758 = G__11778;
count__11759 = G__11779;
i__11760 = G__11780;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__11755))
;
return jQuery.getScript(G__11755,G__11756);
}));
});
hoplon.app_pages._somewhat_working_DOT_html.load_hubspot_form(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,"#hs-newsletter-form",cljs.core.cst$kw$portalId,(511335),cljs.core.cst$kw$formId,"1492e5ad-c59f-4cb7-aa33-1375cffa1722"], null));
if(cljs.core.truth_(hoplon.core.prerendering_QMARK_)){
} else {
hoplon.app_pages._somewhat_working_DOT_html.hubspot_forms();
}
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__11781 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"app.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"app.css",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__11781) : hoplon.core.head.call(null,G__11781));
})(),(function (){var G__11782 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Hello, HubSpot!") : hoplon.core.h1.call(null,"Hello, HubSpot!"));
var G__11783 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("No thank-you message after submit") : hoplon.core.h2.call(null,"No thank-you message after submit"));
var G__11784 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,"hs-newsletter-form","Loading HubSpot form...") : hoplon.core.div.call(null,cljs.core.cst$kw$id,"hs-newsletter-form","Loading HubSpot form..."));
var G__11785 = (function (){var G__11786 = "Also see: ";
var G__11787 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/","Minified error") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"/","Minified error"));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__11786,G__11787) : hoplon.core.p.call(null,G__11786,G__11787));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$4(G__11782,G__11783,G__11784,G__11785) : hoplon.core.body.call(null,G__11782,G__11783,G__11784,G__11785));
})()], 0));
