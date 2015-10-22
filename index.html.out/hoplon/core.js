// Compiled by ClojureScript 1.7.48 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 * the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__7997_SHARP_,p2__7998_SHARP_){
return cljs.core.assoc.call(null,p1__7997_SHARP_,p2__7998_SHARP_.getAttribute("static-id"),p2__7998_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args7999 = [];
var len__6092__auto___8002 = arguments.length;
var i__6093__auto___8003 = (0);
while(true){
if((i__6093__auto___8003 < len__6092__auto___8002)){
args7999.push((arguments[i__6093__auto___8003]));

var G__8004 = (i__6093__auto___8003 + (1));
i__6093__auto___8003 = G__8004;
continue;
} else {
}
break;
}

var G__8001 = args7999.length;
switch (G__8001) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7999.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.call(null,atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,atom));

cljs.core.add_watch.call(null,atom,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8008 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__8008,(0),null);
var more = cljs.core.nthnext.call(null,vec__8008,(1));
var vec__8009 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8009,(0),null);
var f2 = cljs.core.nth.call(null,vec__8009,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("d388ae8a28064be1bee96b2430ccd3ec")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__5053__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__5041__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__8010 = (i + (1));
var G__8011 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8010;
ret = G__8011;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return hoplon.core.$text.call(null,x);
} else {
if(typeof x === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(x)].join(''));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8022 = new$__$1;
var vec__8024 = G__8022;
var x = cljs.core.nth.call(null,vec__8024,(0),null);
var xs = cljs.core.nthnext.call(null,vec__8024,(1));
var G__8023 = hoplon.core.child_vec.call(null,this$);
var vec__8025 = G__8023;
var k = cljs.core.nth.call(null,vec__8025,(0),null);
var ks = cljs.core.nthnext.call(null,vec__8025,(1));
var kids = vec__8025;
var G__8022__$1 = G__8022;
var G__8023__$1 = G__8023;
while(true){
var vec__8026 = G__8022__$1;
var x__$1 = cljs.core.nth.call(null,vec__8026,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__8026,(1));
var vec__8027 = G__8023__$1;
var k__$1 = cljs.core.nth.call(null,vec__8027,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__8027,(1));
var kids__$1 = vec__8027;
if(cljs.core.truth_((function (){var or__5053__auto__ = x__$1;
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return k__$1;
}
})())){
var G__8028 = xs__$1;
var G__8029 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node.call(null,x__$1));

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node.call(null,k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node.call(null,x__$1),hoplon.core.__GT_node.call(null,k__$1));

return kids__$2;
})()
)));
G__8022__$1 = G__8028;
G__8023__$1 = G__8029;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_8030 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8030;

hoplon.core.do_watch.call(null,kids_8030,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_8033 = kidfn.call(null,this$__$1);
var i_8034 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8033));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_8033,i_8034,x__$1,this$__$1){
return (function (p1__8032_SHARP_,p2__8031_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_8033,cljs.core.assoc,i_8034,p2__8031_SHARP_);
});})(kids_8033,i_8034,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8033,cljs.core.assoc,i_8034,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8035_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8035_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8036_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8036_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__8037_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8037_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8038 = cljs.core.keyword.call(null,k);
var attr_8039 = attrfn.call(null,this$__$1);
var has_QMARK__8040 = (function (){var and__5041__auto__ = attr_8039;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8039),kk_8038);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8040)){
cljs.core.swap_BANG_.call(null,attr_8039,cljs.core.assoc,kk_8038,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8041_SHARP_){
return p1__8041_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8042_SHARP_){
return p1__8042_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8043_SHARP_){
return p1__8043_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8044_SHARP_){
return p1__8044_SHARP_.hoplonKids;
}));

hoplon.core.ICustomElement = {};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return m__5690__auto__.call(null,this$,k,v);
} else {
var m__5690__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return m__5690__auto____$1.call(null,this$,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attribute!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return m__5690__auto__.call(null,this$,child);
} else {
var m__5690__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return m__5690__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return m__5690__auto__.call(null,this$,child);
} else {
var m__5690__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return m__5690__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return m__5690__auto__.call(null,this$,new$,existing);
} else {
var m__5690__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return m__5690__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return m__5690__auto__.call(null,this$,new$,existing);
} else {
var m__5690__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return m__5690__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_.call(null,this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not.call(null,(window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8047_SHARP_){
return (p1__8047_SHARP_ instanceof Node);
}):(function (p1__8048_SHARP_){
try{return p1__8048_SHARP_.nodeType;
}catch (e8049){if((e8049 instanceof Error)){
var _ = e8049;
return null;
} else {
throw e8049;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8050_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8050_SHARP_);
}catch (e8051){if((e8051 instanceof Error)){
var _ = e8051;
return null;
} else {
throw e8051;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8052_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8052_SHARP_);
}catch (e8053){if((e8053 instanceof Error)){
var _ = e8053;
return null;
} else {
throw e8053;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args8054 = [];
var len__6092__auto___8058 = arguments.length;
var i__6093__auto___8059 = (0);
while(true){
if((i__6093__auto___8059 < len__6092__auto___8058)){
args8054.push((arguments[i__6093__auto___8059]));

var G__8060 = (i__6093__auto___8059 + (1));
i__6093__auto___8059 = G__8060;
continue;
} else {
}
break;
}

var G__8056 = args8054.length;
switch (G__8056) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8054.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8057){if((e8057 instanceof Error)){
var _ = e8057;
return not_found;
} else {
throw e8057;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args8062 = [];
var len__6092__auto___8065 = arguments.length;
var i__6093__auto___8066 = (0);
while(true){
if((i__6093__auto___8066 < len__6092__auto___8065)){
args8062.push((arguments[i__6093__auto___8066]));

var G__8067 = (i__6093__auto___8066 + (1));
i__6093__auto___8066 = G__8067;
continue;
} else {
}
break;
}

var G__8064 = args8062.length;
switch (G__8064) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8062.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,(function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__8077 = args;
var vec__8078 = G__8077;
var arg = cljs.core.nth.call(null,vec__8078,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__8078,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8077__$1 = G__8077;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8079 = G__8077__$1;
var arg__$1 = cljs.core.nth.call(null,vec__8079,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__8079,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__8080 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__8077__$1,attr__$2,kids__$2,vec__8079,arg__$1,args__$2,attr,kids,G__8077,vec__8078,arg,args__$1){
return (function (p1__8069_SHARP_,p2__8070_SHARP_,p3__8071_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__8069_SHARP_,p2__8070_SHARP_,p3__8071_SHARP_);
});})(attr__$1,kids__$1,G__8077__$1,attr__$2,kids__$2,vec__8079,arg__$1,args__$2,attr,kids,G__8077,vec__8078,arg,args__$1))
,attr__$2,arg__$1);
var G__8081 = kids__$2;
var G__8082 = args__$2;
attr__$1 = G__8080;
kids__$1 = G__8081;
G__8077__$1 = G__8082;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8083 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__8084 = kids__$2;
var G__8085 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__8083;
kids__$1 = G__8084;
G__8077__$1 = G__8085;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__8086 = attr__$2;
var G__8087 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8088 = args__$2;
attr__$1 = G__8086;
kids__$1 = G__8087;
G__8077__$1 = G__8088;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__8089 = attr__$2;
var G__8090 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8091 = args__$2;
attr__$1 = G__8089;
kids__$1 = G__8090;
G__8077__$1 = G__8091;
continue;
} else {
var G__8092 = attr__$2;
var G__8093 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__8094 = args__$2;
attr__$1 = G__8092;
kids__$1 = G__8093;
G__8077__$1 = G__8094;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,v))){
hoplon.core.do_watch.call(null,v,((function (this$__$3,this$__$1){
return (function (p1__8096_SHARP_,p2__8095_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__8095_SHARP_);
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
hoplon.core.on_BANG_.call(null,this$__$3,k,v);
} else {
hoplon.core.do_BANG_.call(null,this$__$3,k,v);

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__8098){
var vec__8104 = p__8098;
var child_cell = cljs.core.nth.call(null,vec__8104,(0),null);
var _ = cljs.core.nthnext.call(null,vec__8104,(1));
var kids = vec__8104;
var this$__$1 = this$;
var node_8109 = ((function (this$__$1,vec__8104,child_cell,_,kids){
return (function (p1__8097_SHARP_){
if(typeof p1__8097_SHARP_ === 'string'){
return hoplon.core.$text.call(null,p1__8097_SHARP_);
} else {
if(typeof p1__8097_SHARP_ === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(p1__8097_SHARP_)].join(''));
} else {
return p1__8097_SHARP_;

}
}
});})(this$__$1,vec__8104,child_cell,_,kids))
;
var seq__8105_8110 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__8106_8111 = null;
var count__8107_8112 = (0);
var i__8108_8113 = (0);
while(true){
if((i__8108_8113 < count__8107_8112)){
var x_8114 = cljs.core._nth.call(null,chunk__8106_8111,i__8108_8113);
var temp__4425__auto___8115 = node_8109.call(null,x_8114);
if(cljs.core.truth_(temp__4425__auto___8115)){
var x_8116__$1 = temp__4425__auto___8115;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8116__$1);
} else {
}

var G__8117 = seq__8105_8110;
var G__8118 = chunk__8106_8111;
var G__8119 = count__8107_8112;
var G__8120 = (i__8108_8113 + (1));
seq__8105_8110 = G__8117;
chunk__8106_8111 = G__8118;
count__8107_8112 = G__8119;
i__8108_8113 = G__8120;
continue;
} else {
var temp__4425__auto___8121 = cljs.core.seq.call(null,seq__8105_8110);
if(temp__4425__auto___8121){
var seq__8105_8122__$1 = temp__4425__auto___8121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8105_8122__$1)){
var c__5837__auto___8123 = cljs.core.chunk_first.call(null,seq__8105_8122__$1);
var G__8124 = cljs.core.chunk_rest.call(null,seq__8105_8122__$1);
var G__8125 = c__5837__auto___8123;
var G__8126 = cljs.core.count.call(null,c__5837__auto___8123);
var G__8127 = (0);
seq__8105_8110 = G__8124;
chunk__8106_8111 = G__8125;
count__8107_8112 = G__8126;
i__8108_8113 = G__8127;
continue;
} else {
var x_8128 = cljs.core.first.call(null,seq__8105_8122__$1);
var temp__4425__auto___8129__$1 = node_8109.call(null,x_8128);
if(cljs.core.truth_(temp__4425__auto___8129__$1)){
var x_8130__$1 = temp__4425__auto___8129__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8130__$1);
} else {
}

var G__8131 = cljs.core.next.call(null,seq__8105_8122__$1);
var G__8132 = null;
var G__8133 = (0);
var G__8134 = (0);
seq__8105_8110 = G__8131;
chunk__8106_8111 = G__8132;
count__8107_8112 = G__8133;
i__8108_8113 = G__8134;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__8141__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8136 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8136,(0),null);
var kids = cljs.core.nth.call(null,vec__8136,(1),null);
var G__8137 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8137,attr);

hoplon.core.add_children_BANG_.call(null,G__8137,kids);

return G__8137;
};
var G__8141 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8142__i = 0, G__8142__a = new Array(arguments.length -  1);
while (G__8142__i < G__8142__a.length) {G__8142__a[G__8142__i] = arguments[G__8142__i + 1]; ++G__8142__i;}
  args = new cljs.core.IndexedSeq(G__8142__a,0);
} 
return G__8141__delegate.call(this,self__,args);};
G__8141.cljs$lang$maxFixedArity = 1;
G__8141.cljs$lang$applyTo = (function (arglist__8143){
var self__ = cljs.core.first(arglist__8143);
var args = cljs.core.rest(arglist__8143);
return G__8141__delegate(self__,args);
});
G__8141.cljs$core$IFn$_invoke$arity$variadic = G__8141__delegate;
return G__8141;
})()
;

Element.prototype.apply = (function (self__,args8135){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8135)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8144__delegate = function (args){
var this$ = this;
var vec__8138 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8138,(0),null);
var kids = cljs.core.nth.call(null,vec__8138,(1),null);
var G__8139 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8139,attr);

hoplon.core.add_children_BANG_.call(null,G__8139,kids);

return G__8139;
};
var G__8144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8145__i = 0, G__8145__a = new Array(arguments.length -  0);
while (G__8145__i < G__8145__a.length) {G__8145__a[G__8145__i] = arguments[G__8145__i + 0]; ++G__8145__i;}
  args = new cljs.core.IndexedSeq(G__8145__a,0);
} 
return G__8144__delegate.call(this,args);};
G__8144.cljs$lang$maxFixedArity = 0;
G__8144.cljs$lang$applyTo = (function (arglist__8146){
var args = cljs.core.seq(arglist__8146);
return G__8144__delegate(args);
});
G__8144.cljs$core$IFn$_invoke$arity$variadic = G__8144__delegate;
return G__8144;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_8147__$1 = cljs.core.name.call(null,k);
var e_8148 = jQuery(this$__$1);
if(cljs.core._EQ_.call(null,false,v)){
e_8148.removeAttr(k_8147__$1);
} else {
e_8148.attr(k_8147__$1,((cljs.core._EQ_.call(null,true,v))?k_8147__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e8140){if((e8140 instanceof Error)){
var _ = e8140;
return null;
} else {
throw e8140;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__8151__delegate = function (args){
var vec__8150 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8150,(0),null);
var kids = cljs.core.nth.call(null,vec__8150,(1),null);
var elem = hoplon.core.ensure_kids_BANG_.call(null,(document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.reset_BANG_.call(null,elem.hoplonKids,cljs.core.vec.call(null,kids));
} else {
return null;
}
};
var G__8151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8152__i = 0, G__8152__a = new Array(arguments.length -  0);
while (G__8152__i < G__8152__a.length) {G__8152__a[G__8152__i] = arguments[G__8152__i + 0]; ++G__8152__i;}
  args = new cljs.core.IndexedSeq(G__8152__a,0);
} 
return G__8151__delegate.call(this,args);};
G__8151.cljs$lang$maxFixedArity = 0;
G__8151.cljs$lang$applyTo = (function (arglist__8153){
var args = cljs.core.seq(arglist__8153);
return G__8151__delegate(args);
});
G__8151.cljs$core$IFn$_invoke$arity$variadic = G__8151__delegate;
return G__8151;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__8154__delegate = function (args){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),args);
};
var G__8154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8155__i = 0, G__8155__a = new Array(arguments.length -  0);
while (G__8155__i < G__8155__a.length) {G__8155__a[G__8155__i] = arguments[G__8155__i + 0]; ++G__8155__i;}
  args = new cljs.core.IndexedSeq(G__8155__a,0);
} 
return G__8154__delegate.call(this,args);};
G__8154.cljs$lang$maxFixedArity = 0;
G__8154.cljs$lang$applyTo = (function (arglist__8156){
var args = cljs.core.seq(arglist__8156);
return G__8154__delegate(args);
});
G__8154.cljs$core$IFn$_invoke$arity$variadic = G__8154__delegate;
return G__8154;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6099__auto__ = [];
var len__6092__auto___8159 = arguments.length;
var i__6093__auto___8160 = (0);
while(true){
if((i__6093__auto___8160 < len__6092__auto___8159)){
args__6099__auto__.push((arguments[i__6093__auto___8160]));

var G__8161 = (i__6093__auto___8160 + (1));
i__6093__auto___8160 = G__8161;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8158 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8158,(0),null);
var _ = cljs.core.nth.call(null,vec__8158,(1),null);
return hoplon.core.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq8157){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8157));
});
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,"body");
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,"head");
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor.call(null,"acronym");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.applet = hoplon.core.make_elem_ctor.call(null,"applet");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.basefont = hoplon.core.make_elem_ctor.call(null,"basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.big = hoplon.core.make_elem_ctor.call(null,"big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.center = hoplon.core.make_elem_ctor.call(null,"center");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor.call(null,"command");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor.call(null,"dir");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor.call(null,"eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.font = hoplon.core.make_elem_ctor.call(null,"font");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.frame = hoplon.core.make_elem_ctor.call(null,"frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor.call(null,"frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor.call(null,"isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strike = hoplon.core.make_elem_ctor.call(null,"strike");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.tt = hoplon.core.make_elem_ctor.call(null,"tt");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__8162_SHARP_){
return document.createTextNode(p1__8162_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__8163_SHARP_){
return document.createComment(p1__8163_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__8164_SHARP_){
var e = jQuery(p1__8164_SHARP_.target);
if(cljs.core.truth_((function (){var or__5053__auto__ = e.attr("action");
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8164_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args8165 = [];
var len__6092__auto___8168 = arguments.length;
var i__6093__auto___8169 = (0);
while(true){
if((i__6093__auto___8169 < len__6092__auto___8168)){
args8165.push((arguments[i__6093__auto___8169]));

var G__8170 = (i__6093__auto___8169 + (1));
i__6093__auto___8169 = G__8170;
continue;
} else {
}
break;
}

var G__8167 = args8165.length;
switch (G__8167) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8165.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.core.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(){
var args8172 = [];
var len__6092__auto___8175 = arguments.length;
var i__6093__auto___8176 = (0);
while(true){
if((i__6093__auto___8176 < len__6092__auto___8175)){
args8172.push((arguments[i__6093__auto___8176]));

var G__8177 = (i__6093__auto___8176 + (1));
i__6093__auto___8176 = G__8177;
continue;
} else {
}
break;
}

var G__8174 = args8172.length;
switch (G__8174) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8172.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__5947__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5948__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5949__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5950__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5951__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__5951__auto__,method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__8179__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__8179 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8180__i = 0, G__8180__a = new Array(arguments.length -  2);
while (G__8180__i < G__8180__a.length) {G__8180__a[G__8180__i] = arguments[G__8180__i + 2]; ++G__8180__i;}
  args = new cljs.core.IndexedSeq(G__8180__a,0);
} 
return G__8179__delegate.call(this,elem,_,args);};
G__8179.cljs$lang$maxFixedArity = 2;
G__8179.cljs$lang$applyTo = (function (arglist__8181){
var elem = cljs.core.first(arglist__8181);
arglist__8181 = cljs.core.next(arglist__8181);
var _ = cljs.core.first(arglist__8181);
var args = cljs.core.rest(arglist__8181);
return G__8179__delegate(elem,_,args);
});
G__8179.cljs$core$IFn$_invoke$arity$variadic = G__8179__delegate;
return G__8179;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8182 = cljs.core.seq.call(null,kvs);
var chunk__8183 = null;
var count__8184 = (0);
var i__8185 = (0);
while(true){
if((i__8185 < count__8184)){
var vec__8186 = cljs.core._nth.call(null,chunk__8183,i__8185);
var k = cljs.core.nth.call(null,vec__8186,(0),null);
var v = cljs.core.nth.call(null,vec__8186,(1),null);
var k_8188__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8188__$1);
} else {
e.attr(k_8188__$1,((cljs.core._EQ_.call(null,true,v))?k_8188__$1:v));
}

var G__8189 = seq__8182;
var G__8190 = chunk__8183;
var G__8191 = count__8184;
var G__8192 = (i__8185 + (1));
seq__8182 = G__8189;
chunk__8183 = G__8190;
count__8184 = G__8191;
i__8185 = G__8192;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8182);
if(temp__4425__auto__){
var seq__8182__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8182__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__8182__$1);
var G__8193 = cljs.core.chunk_rest.call(null,seq__8182__$1);
var G__8194 = c__5837__auto__;
var G__8195 = cljs.core.count.call(null,c__5837__auto__);
var G__8196 = (0);
seq__8182 = G__8193;
chunk__8183 = G__8194;
count__8184 = G__8195;
i__8185 = G__8196;
continue;
} else {
var vec__8187 = cljs.core.first.call(null,seq__8182__$1);
var k = cljs.core.nth.call(null,vec__8187,(0),null);
var v = cljs.core.nth.call(null,vec__8187,(1),null);
var k_8197__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8197__$1);
} else {
e.attr(k_8197__$1,((cljs.core._EQ_.call(null,true,v))?k_8197__$1:v));
}

var G__8198 = cljs.core.next.call(null,seq__8182__$1);
var G__8199 = null;
var G__8200 = (0);
var G__8201 = (0);
seq__8182 = G__8198;
chunk__8183 = G__8199;
count__8184 = G__8200;
i__8185 = G__8201;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__8202_SHARP_){
return cljs.core.zipmap.call(null,p1__8202_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__8203 = cljs.core.seq.call(null,clmap);
var chunk__8204 = null;
var count__8205 = (0);
var i__8206 = (0);
while(true){
if((i__8206 < count__8205)){
var vec__8207 = cljs.core._nth.call(null,chunk__8204,i__8206);
var c = cljs.core.nth.call(null,vec__8207,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8207,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8209 = seq__8203;
var G__8210 = chunk__8204;
var G__8211 = count__8205;
var G__8212 = (i__8206 + (1));
seq__8203 = G__8209;
chunk__8204 = G__8210;
count__8205 = G__8211;
i__8206 = G__8212;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8203);
if(temp__4425__auto__){
var seq__8203__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8203__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__8203__$1);
var G__8213 = cljs.core.chunk_rest.call(null,seq__8203__$1);
var G__8214 = c__5837__auto__;
var G__8215 = cljs.core.count.call(null,c__5837__auto__);
var G__8216 = (0);
seq__8203 = G__8213;
chunk__8204 = G__8214;
count__8205 = G__8215;
i__8206 = G__8216;
continue;
} else {
var vec__8208 = cljs.core.first.call(null,seq__8203__$1);
var c = cljs.core.nth.call(null,vec__8208,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8208,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8217 = cljs.core.next.call(null,seq__8203__$1);
var G__8218 = null;
var G__8219 = (0);
var G__8220 = (0);
seq__8203 = G__8217;
chunk__8204 = G__8218;
count__8205 = G__8219;
i__8206 = G__8220;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8221 = cljs.core.seq.call(null,kvs);
var chunk__8222 = null;
var count__8223 = (0);
var i__8224 = (0);
while(true){
if((i__8224 < count__8223)){
var vec__8225 = cljs.core._nth.call(null,chunk__8222,i__8224);
var k = cljs.core.nth.call(null,vec__8225,(0),null);
var v = cljs.core.nth.call(null,vec__8225,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8227 = seq__8221;
var G__8228 = chunk__8222;
var G__8229 = count__8223;
var G__8230 = (i__8224 + (1));
seq__8221 = G__8227;
chunk__8222 = G__8228;
count__8223 = G__8229;
i__8224 = G__8230;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8221);
if(temp__4425__auto__){
var seq__8221__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8221__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__8221__$1);
var G__8231 = cljs.core.chunk_rest.call(null,seq__8221__$1);
var G__8232 = c__5837__auto__;
var G__8233 = cljs.core.count.call(null,c__5837__auto__);
var G__8234 = (0);
seq__8221 = G__8231;
chunk__8222 = G__8232;
count__8223 = G__8233;
i__8224 = G__8234;
continue;
} else {
var vec__8226 = cljs.core.first.call(null,seq__8221__$1);
var k = cljs.core.nth.call(null,vec__8226,(0),null);
var v = cljs.core.nth.call(null,vec__8226,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8235 = cljs.core.next.call(null,seq__8221__$1);
var G__8236 = null;
var G__8237 = (0);
var G__8238 = (0);
seq__8221 = G__8235;
chunk__8222 = G__8236;
count__8223 = G__8237;
i__8224 = G__8238;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__5947__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5948__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5949__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5950__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5951__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__5951__auto__,method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__8250,G__8251){
return G__8250.call(null,G__8251);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__8239_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__8254,G__8253,G__8252){
return G__8252.call(null,G__8253,G__8254);
});})(on_deck,items_seq))
).call(null,p1__8239_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__8240_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__8240_SHARP_));
cljs.core.swap_BANG_.call(null,p1__8240_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__8255 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__8256 = null;
var count__8257 = (0);
var i__8258 = (0);
while(true){
if((i__8258 < count__8257)){
var i = cljs.core._nth.call(null,chunk__8256,i__8258);
var e_8259 = (function (){var or__5053__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8259);

var G__8260 = seq__8255;
var G__8261 = chunk__8256;
var G__8262 = count__8257;
var G__8263 = (i__8258 + (1));
seq__8255 = G__8260;
chunk__8256 = G__8261;
count__8257 = G__8262;
i__8258 = G__8263;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8255);
if(temp__4425__auto__){
var seq__8255__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8255__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__8255__$1);
var G__8264 = cljs.core.chunk_rest.call(null,seq__8255__$1);
var G__8265 = c__5837__auto__;
var G__8266 = cljs.core.count.call(null,c__5837__auto__);
var G__8267 = (0);
seq__8255 = G__8264;
chunk__8256 = G__8265;
count__8257 = G__8266;
i__8258 = G__8267;
continue;
} else {
var i = cljs.core.first.call(null,seq__8255__$1);
var e_8268 = (function (){var or__5053__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8268);

var G__8269 = cljs.core.next.call(null,seq__8255__$1);
var G__8270 = null;
var G__8271 = (0);
var G__8272 = (0);
seq__8255 = G__8269;
chunk__8256 = G__8270;
count__8257 = G__8271;
i__8258 = G__8272;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__5937__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__5937__auto__)){
var e_8273 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_8273);

var G__8274 = (_ + (1));
_ = G__8274;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
hoplon.core.route_cell = (function hoplon$core$route_cell(){
var args__6099__auto__ = [];
var len__6092__auto___8281 = arguments.length;
var i__6093__auto___8282 = (0);
while(true){
if((i__6093__auto___8282 < len__6092__auto___8281)){
args__6099__auto__.push((arguments[i__6093__auto___8282]));

var G__8283 = (i__6093__auto___8282 + (1));
i__6093__auto___8282 = G__8283;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8276){
var vec__8277 = p__8276;
var default$ = cljs.core.nth.call(null,vec__8277,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__8277,default$){
return (function (G__8278,G__8280,G__8279){
var or__5053__auto__ = (function (){var and__5041__auto__ = G__8278.call(null,G__8279);
if(cljs.core.truth_(and__5041__auto__)){
return G__8279;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return G__8280;
}
});})(c,vec__8277,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8277,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__8277,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq8275){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8275));
});
