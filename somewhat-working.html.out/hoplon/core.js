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
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__11055_SHARP_,p2__11056_SHARP_){
return cljs.core.assoc.call(null,p1__11055_SHARP_,p2__11056_SHARP_.getAttribute("static-id"),p2__11056_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args11057 = [];
var len__6092__auto___11060 = arguments.length;
var i__6093__auto___11061 = (0);
while(true){
if((i__6093__auto___11061 < len__6092__auto___11060)){
args11057.push((arguments[i__6093__auto___11061]));

var G__11062 = (i__6093__auto___11061 + (1));
i__6093__auto___11061 = G__11062;
continue;
} else {
}
break;
}

var G__11059 = args11057.length;
switch (G__11059) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11057.length)].join('')));

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
var vec__11066 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__11066,(0),null);
var more = cljs.core.nthnext.call(null,vec__11066,(1));
var vec__11067 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__11067,(0),null);
var f2 = cljs.core.nth.call(null,vec__11067,(1),null);
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
var G__11068 = (i + (1));
var G__11069 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__11068;
ret = G__11069;
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
var G__11080 = new$__$1;
var vec__11082 = G__11080;
var x = cljs.core.nth.call(null,vec__11082,(0),null);
var xs = cljs.core.nthnext.call(null,vec__11082,(1));
var G__11081 = hoplon.core.child_vec.call(null,this$);
var vec__11083 = G__11081;
var k = cljs.core.nth.call(null,vec__11083,(0),null);
var ks = cljs.core.nthnext.call(null,vec__11083,(1));
var kids = vec__11083;
var G__11080__$1 = G__11080;
var G__11081__$1 = G__11081;
while(true){
var vec__11084 = G__11080__$1;
var x__$1 = cljs.core.nth.call(null,vec__11084,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__11084,(1));
var vec__11085 = G__11081__$1;
var k__$1 = cljs.core.nth.call(null,vec__11085,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__11085,(1));
var kids__$1 = vec__11085;
if(cljs.core.truth_((function (){var or__5053__auto__ = x__$1;
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return k__$1;
}
})())){
var G__11086 = xs__$1;
var G__11087 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
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
G__11080__$1 = G__11086;
G__11081__$1 = G__11087;
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
var kids_11088 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_11088;

hoplon.core.do_watch.call(null,kids_11088,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_11091 = kidfn.call(null,this$__$1);
var i_11092 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_11091));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_11091,i_11092,x__$1,this$__$1){
return (function (p1__11090_SHARP_,p2__11089_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_11091,cljs.core.assoc,i_11092,p2__11089_SHARP_);
});})(kids_11091,i_11092,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_11091,cljs.core.assoc,i_11092,x__$1);
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
return (function (p1__11093_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__11093_SHARP_));
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
return (function (p1__11094_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__11094_SHARP_));
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
return (function (p1__11095_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__11095_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_11096 = cljs.core.keyword.call(null,k);
var attr_11097 = attrfn.call(null,this$__$1);
var has_QMARK__11098 = (function (){var and__5041__auto__ = attr_11097;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_11097),kk_11096);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__11098)){
cljs.core.swap_BANG_.call(null,attr_11097,cljs.core.assoc,kk_11096,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__11099_SHARP_){
return p1__11099_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__11100_SHARP_){
return p1__11100_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__11101_SHARP_){
return p1__11101_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__11102_SHARP_){
return p1__11102_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__11105_SHARP_){
return (p1__11105_SHARP_ instanceof Node);
}):(function (p1__11106_SHARP_){
try{return p1__11106_SHARP_.nodeType;
}catch (e11107){if((e11107 instanceof Error)){
var _ = e11107;
return null;
} else {
throw e11107;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11108_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__11108_SHARP_);
}catch (e11109){if((e11109 instanceof Error)){
var _ = e11109;
return null;
} else {
throw e11109;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11110_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__11110_SHARP_);
}catch (e11111){if((e11111 instanceof Error)){
var _ = e11111;
return null;
} else {
throw e11111;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args11112 = [];
var len__6092__auto___11116 = arguments.length;
var i__6093__auto___11117 = (0);
while(true){
if((i__6093__auto___11117 < len__6092__auto___11116)){
args11112.push((arguments[i__6093__auto___11117]));

var G__11118 = (i__6093__auto___11117 + (1));
i__6093__auto___11117 = G__11118;
continue;
} else {
}
break;
}

var G__11114 = args11112.length;
switch (G__11114) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11112.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e11115){if((e11115 instanceof Error)){
var _ = e11115;
return not_found;
} else {
throw e11115;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args11120 = [];
var len__6092__auto___11123 = arguments.length;
var i__6093__auto___11124 = (0);
while(true){
if((i__6093__auto___11124 < len__6092__auto___11123)){
args11120.push((arguments[i__6093__auto___11124]));

var G__11125 = (i__6093__auto___11124 + (1));
i__6093__auto___11124 = G__11125;
continue;
} else {
}
break;
}

var G__11122 = args11120.length;
switch (G__11122) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11120.length)].join('')));

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
var G__11135 = args;
var vec__11136 = G__11135;
var arg = cljs.core.nth.call(null,vec__11136,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__11136,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__11135__$1 = G__11135;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__11137 = G__11135__$1;
var arg__$1 = cljs.core.nth.call(null,vec__11137,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__11137,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__11138 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__11135__$1,attr__$2,kids__$2,vec__11137,arg__$1,args__$2,attr,kids,G__11135,vec__11136,arg,args__$1){
return (function (p1__11127_SHARP_,p2__11128_SHARP_,p3__11129_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__11127_SHARP_,p2__11128_SHARP_,p3__11129_SHARP_);
});})(attr__$1,kids__$1,G__11135__$1,attr__$2,kids__$2,vec__11137,arg__$1,args__$2,attr,kids,G__11135,vec__11136,arg,args__$1))
,attr__$2,arg__$1);
var G__11139 = kids__$2;
var G__11140 = args__$2;
attr__$1 = G__11138;
kids__$1 = G__11139;
G__11135__$1 = G__11140;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__11141 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__11142 = kids__$2;
var G__11143 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__11141;
kids__$1 = G__11142;
G__11135__$1 = G__11143;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__11144 = attr__$2;
var G__11145 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__11146 = args__$2;
attr__$1 = G__11144;
kids__$1 = G__11145;
G__11135__$1 = G__11146;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__11147 = attr__$2;
var G__11148 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__11149 = args__$2;
attr__$1 = G__11147;
kids__$1 = G__11148;
G__11135__$1 = G__11149;
continue;
} else {
var G__11150 = attr__$2;
var G__11151 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__11152 = args__$2;
attr__$1 = G__11150;
kids__$1 = G__11151;
G__11135__$1 = G__11152;
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
return (function (p1__11154_SHARP_,p2__11153_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__11153_SHARP_);
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__11156){
var vec__11162 = p__11156;
var child_cell = cljs.core.nth.call(null,vec__11162,(0),null);
var _ = cljs.core.nthnext.call(null,vec__11162,(1));
var kids = vec__11162;
var this$__$1 = this$;
var node_11167 = ((function (this$__$1,vec__11162,child_cell,_,kids){
return (function (p1__11155_SHARP_){
if(typeof p1__11155_SHARP_ === 'string'){
return hoplon.core.$text.call(null,p1__11155_SHARP_);
} else {
if(typeof p1__11155_SHARP_ === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(p1__11155_SHARP_)].join(''));
} else {
return p1__11155_SHARP_;

}
}
});})(this$__$1,vec__11162,child_cell,_,kids))
;
var seq__11163_11168 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__11164_11169 = null;
var count__11165_11170 = (0);
var i__11166_11171 = (0);
while(true){
if((i__11166_11171 < count__11165_11170)){
var x_11172 = cljs.core._nth.call(null,chunk__11164_11169,i__11166_11171);
var temp__4425__auto___11173 = node_11167.call(null,x_11172);
if(cljs.core.truth_(temp__4425__auto___11173)){
var x_11174__$1 = temp__4425__auto___11173;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_11174__$1);
} else {
}

var G__11175 = seq__11163_11168;
var G__11176 = chunk__11164_11169;
var G__11177 = count__11165_11170;
var G__11178 = (i__11166_11171 + (1));
seq__11163_11168 = G__11175;
chunk__11164_11169 = G__11176;
count__11165_11170 = G__11177;
i__11166_11171 = G__11178;
continue;
} else {
var temp__4425__auto___11179 = cljs.core.seq.call(null,seq__11163_11168);
if(temp__4425__auto___11179){
var seq__11163_11180__$1 = temp__4425__auto___11179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11163_11180__$1)){
var c__5837__auto___11181 = cljs.core.chunk_first.call(null,seq__11163_11180__$1);
var G__11182 = cljs.core.chunk_rest.call(null,seq__11163_11180__$1);
var G__11183 = c__5837__auto___11181;
var G__11184 = cljs.core.count.call(null,c__5837__auto___11181);
var G__11185 = (0);
seq__11163_11168 = G__11182;
chunk__11164_11169 = G__11183;
count__11165_11170 = G__11184;
i__11166_11171 = G__11185;
continue;
} else {
var x_11186 = cljs.core.first.call(null,seq__11163_11180__$1);
var temp__4425__auto___11187__$1 = node_11167.call(null,x_11186);
if(cljs.core.truth_(temp__4425__auto___11187__$1)){
var x_11188__$1 = temp__4425__auto___11187__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_11188__$1);
} else {
}

var G__11189 = cljs.core.next.call(null,seq__11163_11180__$1);
var G__11190 = null;
var G__11191 = (0);
var G__11192 = (0);
seq__11163_11168 = G__11189;
chunk__11164_11169 = G__11190;
count__11165_11170 = G__11191;
i__11166_11171 = G__11192;
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
var G__11199__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__11194 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__11194,(0),null);
var kids = cljs.core.nth.call(null,vec__11194,(1),null);
var G__11195 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__11195,attr);

hoplon.core.add_children_BANG_.call(null,G__11195,kids);

return G__11195;
};
var G__11199 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__11200__i = 0, G__11200__a = new Array(arguments.length -  1);
while (G__11200__i < G__11200__a.length) {G__11200__a[G__11200__i] = arguments[G__11200__i + 1]; ++G__11200__i;}
  args = new cljs.core.IndexedSeq(G__11200__a,0);
} 
return G__11199__delegate.call(this,self__,args);};
G__11199.cljs$lang$maxFixedArity = 1;
G__11199.cljs$lang$applyTo = (function (arglist__11201){
var self__ = cljs.core.first(arglist__11201);
var args = cljs.core.rest(arglist__11201);
return G__11199__delegate(self__,args);
});
G__11199.cljs$core$IFn$_invoke$arity$variadic = G__11199__delegate;
return G__11199;
})()
;

Element.prototype.apply = (function (self__,args11193){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11193)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11202__delegate = function (args){
var this$ = this;
var vec__11196 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__11196,(0),null);
var kids = cljs.core.nth.call(null,vec__11196,(1),null);
var G__11197 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__11197,attr);

hoplon.core.add_children_BANG_.call(null,G__11197,kids);

return G__11197;
};
var G__11202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11203__i = 0, G__11203__a = new Array(arguments.length -  0);
while (G__11203__i < G__11203__a.length) {G__11203__a[G__11203__i] = arguments[G__11203__i + 0]; ++G__11203__i;}
  args = new cljs.core.IndexedSeq(G__11203__a,0);
} 
return G__11202__delegate.call(this,args);};
G__11202.cljs$lang$maxFixedArity = 0;
G__11202.cljs$lang$applyTo = (function (arglist__11204){
var args = cljs.core.seq(arglist__11204);
return G__11202__delegate(args);
});
G__11202.cljs$core$IFn$_invoke$arity$variadic = G__11202__delegate;
return G__11202;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_11205__$1 = cljs.core.name.call(null,k);
var e_11206 = jQuery(this$__$1);
if(cljs.core._EQ_.call(null,false,v)){
e_11206.removeAttr(k_11205__$1);
} else {
e_11206.attr(k_11205__$1,((cljs.core._EQ_.call(null,true,v))?k_11205__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e11198){if((e11198 instanceof Error)){
var _ = e11198;
return null;
} else {
throw e11198;

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
var G__11209__delegate = function (args){
var vec__11208 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__11208,(0),null);
var kids = cljs.core.nth.call(null,vec__11208,(1),null);
var elem = hoplon.core.ensure_kids_BANG_.call(null,(document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.reset_BANG_.call(null,elem.hoplonKids,cljs.core.vec.call(null,kids));
} else {
return null;
}
};
var G__11209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11210__i = 0, G__11210__a = new Array(arguments.length -  0);
while (G__11210__i < G__11210__a.length) {G__11210__a[G__11210__i] = arguments[G__11210__i + 0]; ++G__11210__i;}
  args = new cljs.core.IndexedSeq(G__11210__a,0);
} 
return G__11209__delegate.call(this,args);};
G__11209.cljs$lang$maxFixedArity = 0;
G__11209.cljs$lang$applyTo = (function (arglist__11211){
var args = cljs.core.seq(arglist__11211);
return G__11209__delegate(args);
});
G__11209.cljs$core$IFn$_invoke$arity$variadic = G__11209__delegate;
return G__11209;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__11212__delegate = function (args){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),args);
};
var G__11212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11213__i = 0, G__11213__a = new Array(arguments.length -  0);
while (G__11213__i < G__11213__a.length) {G__11213__a[G__11213__i] = arguments[G__11213__i + 0]; ++G__11213__i;}
  args = new cljs.core.IndexedSeq(G__11213__a,0);
} 
return G__11212__delegate.call(this,args);};
G__11212.cljs$lang$maxFixedArity = 0;
G__11212.cljs$lang$applyTo = (function (arglist__11214){
var args = cljs.core.seq(arglist__11214);
return G__11212__delegate(args);
});
G__11212.cljs$core$IFn$_invoke$arity$variadic = G__11212__delegate;
return G__11212;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6099__auto__ = [];
var len__6092__auto___11217 = arguments.length;
var i__6093__auto___11218 = (0);
while(true){
if((i__6093__auto___11218 < len__6092__auto___11217)){
args__6099__auto__.push((arguments[i__6093__auto___11218]));

var G__11219 = (i__6093__auto___11218 + (1));
i__6093__auto___11218 = G__11219;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__11216 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__11216,(0),null);
var _ = cljs.core.nth.call(null,vec__11216,(1),null);
return hoplon.core.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq11215){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11215));
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
hoplon.core.$text = (function hoplon$core$$text(p1__11220_SHARP_){
return document.createTextNode(p1__11220_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__11221_SHARP_){
return document.createComment(p1__11221_SHARP_);
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
return jQuery("body").on("submit",(function (p1__11222_SHARP_){
var e = jQuery(p1__11222_SHARP_.target);
if(cljs.core.truth_((function (){var or__5053__auto__ = e.attr("action");
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__11222_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args11223 = [];
var len__6092__auto___11226 = arguments.length;
var i__6093__auto___11227 = (0);
while(true){
if((i__6093__auto___11227 < len__6092__auto___11226)){
args11223.push((arguments[i__6093__auto___11227]));

var G__11228 = (i__6093__auto___11227 + (1));
i__6093__auto___11227 = G__11228;
continue;
} else {
}
break;
}

var G__11225 = args11223.length;
switch (G__11225) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11223.length)].join('')));

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
var args11230 = [];
var len__6092__auto___11233 = arguments.length;
var i__6093__auto___11234 = (0);
while(true){
if((i__6093__auto___11234 < len__6092__auto___11233)){
args11230.push((arguments[i__6093__auto___11234]));

var G__11235 = (i__6093__auto___11234 + (1));
i__6093__auto___11234 = G__11235;
continue;
} else {
}
break;
}

var G__11232 = args11230.length;
switch (G__11232) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11230.length)].join('')));

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
var G__11237__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__11237 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__11238__i = 0, G__11238__a = new Array(arguments.length -  2);
while (G__11238__i < G__11238__a.length) {G__11238__a[G__11238__i] = arguments[G__11238__i + 2]; ++G__11238__i;}
  args = new cljs.core.IndexedSeq(G__11238__a,0);
} 
return G__11237__delegate.call(this,elem,_,args);};
G__11237.cljs$lang$maxFixedArity = 2;
G__11237.cljs$lang$applyTo = (function (arglist__11239){
var elem = cljs.core.first(arglist__11239);
arglist__11239 = cljs.core.next(arglist__11239);
var _ = cljs.core.first(arglist__11239);
var args = cljs.core.rest(arglist__11239);
return G__11237__delegate(elem,_,args);
});
G__11237.cljs$core$IFn$_invoke$arity$variadic = G__11237__delegate;
return G__11237;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__11240 = cljs.core.seq.call(null,kvs);
var chunk__11241 = null;
var count__11242 = (0);
var i__11243 = (0);
while(true){
if((i__11243 < count__11242)){
var vec__11244 = cljs.core._nth.call(null,chunk__11241,i__11243);
var k = cljs.core.nth.call(null,vec__11244,(0),null);
var v = cljs.core.nth.call(null,vec__11244,(1),null);
var k_11246__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_11246__$1);
} else {
e.attr(k_11246__$1,((cljs.core._EQ_.call(null,true,v))?k_11246__$1:v));
}

var G__11247 = seq__11240;
var G__11248 = chunk__11241;
var G__11249 = count__11242;
var G__11250 = (i__11243 + (1));
seq__11240 = G__11247;
chunk__11241 = G__11248;
count__11242 = G__11249;
i__11243 = G__11250;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11240);
if(temp__4425__auto__){
var seq__11240__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11240__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__11240__$1);
var G__11251 = cljs.core.chunk_rest.call(null,seq__11240__$1);
var G__11252 = c__5837__auto__;
var G__11253 = cljs.core.count.call(null,c__5837__auto__);
var G__11254 = (0);
seq__11240 = G__11251;
chunk__11241 = G__11252;
count__11242 = G__11253;
i__11243 = G__11254;
continue;
} else {
var vec__11245 = cljs.core.first.call(null,seq__11240__$1);
var k = cljs.core.nth.call(null,vec__11245,(0),null);
var v = cljs.core.nth.call(null,vec__11245,(1),null);
var k_11255__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_11255__$1);
} else {
e.attr(k_11255__$1,((cljs.core._EQ_.call(null,true,v))?k_11255__$1:v));
}

var G__11256 = cljs.core.next.call(null,seq__11240__$1);
var G__11257 = null;
var G__11258 = (0);
var G__11259 = (0);
seq__11240 = G__11256;
chunk__11241 = G__11257;
count__11242 = G__11258;
i__11243 = G__11259;
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
return (function (p1__11260_SHARP_){
return cljs.core.zipmap.call(null,p1__11260_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__11261 = cljs.core.seq.call(null,clmap);
var chunk__11262 = null;
var count__11263 = (0);
var i__11264 = (0);
while(true){
if((i__11264 < count__11263)){
var vec__11265 = cljs.core._nth.call(null,chunk__11262,i__11264);
var c = cljs.core.nth.call(null,vec__11265,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__11265,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__11267 = seq__11261;
var G__11268 = chunk__11262;
var G__11269 = count__11263;
var G__11270 = (i__11264 + (1));
seq__11261 = G__11267;
chunk__11262 = G__11268;
count__11263 = G__11269;
i__11264 = G__11270;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11261);
if(temp__4425__auto__){
var seq__11261__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11261__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__11261__$1);
var G__11271 = cljs.core.chunk_rest.call(null,seq__11261__$1);
var G__11272 = c__5837__auto__;
var G__11273 = cljs.core.count.call(null,c__5837__auto__);
var G__11274 = (0);
seq__11261 = G__11271;
chunk__11262 = G__11272;
count__11263 = G__11273;
i__11264 = G__11274;
continue;
} else {
var vec__11266 = cljs.core.first.call(null,seq__11261__$1);
var c = cljs.core.nth.call(null,vec__11266,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__11266,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__11275 = cljs.core.next.call(null,seq__11261__$1);
var G__11276 = null;
var G__11277 = (0);
var G__11278 = (0);
seq__11261 = G__11275;
chunk__11262 = G__11276;
count__11263 = G__11277;
i__11264 = G__11278;
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
var seq__11279 = cljs.core.seq.call(null,kvs);
var chunk__11280 = null;
var count__11281 = (0);
var i__11282 = (0);
while(true){
if((i__11282 < count__11281)){
var vec__11283 = cljs.core._nth.call(null,chunk__11280,i__11282);
var k = cljs.core.nth.call(null,vec__11283,(0),null);
var v = cljs.core.nth.call(null,vec__11283,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__11285 = seq__11279;
var G__11286 = chunk__11280;
var G__11287 = count__11281;
var G__11288 = (i__11282 + (1));
seq__11279 = G__11285;
chunk__11280 = G__11286;
count__11281 = G__11287;
i__11282 = G__11288;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11279);
if(temp__4425__auto__){
var seq__11279__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11279__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__11279__$1);
var G__11289 = cljs.core.chunk_rest.call(null,seq__11279__$1);
var G__11290 = c__5837__auto__;
var G__11291 = cljs.core.count.call(null,c__5837__auto__);
var G__11292 = (0);
seq__11279 = G__11289;
chunk__11280 = G__11290;
count__11281 = G__11291;
i__11282 = G__11292;
continue;
} else {
var vec__11284 = cljs.core.first.call(null,seq__11279__$1);
var k = cljs.core.nth.call(null,vec__11284,(0),null);
var v = cljs.core.nth.call(null,vec__11284,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__11293 = cljs.core.next.call(null,seq__11279__$1);
var G__11294 = null;
var G__11295 = (0);
var G__11296 = (0);
seq__11279 = G__11293;
chunk__11280 = G__11294;
count__11281 = G__11295;
i__11282 = G__11296;
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
return (function (G__11308,G__11309){
return G__11308.call(null,G__11309);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__11297_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__11311,G__11312,G__11310){
return G__11310.call(null,G__11311,G__11312);
});})(on_deck,items_seq))
).call(null,items_seq,p1__11297_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__11298_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__11298_SHARP_));
cljs.core.swap_BANG_.call(null,p1__11298_SHARP_,cljs.core.rest);

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
var seq__11313 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__11314 = null;
var count__11315 = (0);
var i__11316 = (0);
while(true){
if((i__11316 < count__11315)){
var i = cljs.core._nth.call(null,chunk__11314,i__11316);
var e_11317 = (function (){var or__5053__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11317);

var G__11318 = seq__11313;
var G__11319 = chunk__11314;
var G__11320 = count__11315;
var G__11321 = (i__11316 + (1));
seq__11313 = G__11318;
chunk__11314 = G__11319;
count__11315 = G__11320;
i__11316 = G__11321;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11313);
if(temp__4425__auto__){
var seq__11313__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11313__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__11313__$1);
var G__11322 = cljs.core.chunk_rest.call(null,seq__11313__$1);
var G__11323 = c__5837__auto__;
var G__11324 = cljs.core.count.call(null,c__5837__auto__);
var G__11325 = (0);
seq__11313 = G__11322;
chunk__11314 = G__11323;
count__11315 = G__11324;
i__11316 = G__11325;
continue;
} else {
var i = cljs.core.first.call(null,seq__11313__$1);
var e_11326 = (function (){var or__5053__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11326);

var G__11327 = cljs.core.next.call(null,seq__11313__$1);
var G__11328 = null;
var G__11329 = (0);
var G__11330 = (0);
seq__11313 = G__11327;
chunk__11314 = G__11328;
count__11315 = G__11329;
i__11316 = G__11330;
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
var e_11331 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_11331);

var G__11332 = (_ + (1));
_ = G__11332;
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
var len__6092__auto___11339 = arguments.length;
var i__6093__auto___11340 = (0);
while(true){
if((i__6093__auto___11340 < len__6092__auto___11339)){
args__6099__auto__.push((arguments[i__6093__auto___11340]));

var G__11341 = (i__6093__auto___11340 + (1));
i__6093__auto___11340 = G__11341;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11334){
var vec__11335 = p__11334;
var default$ = cljs.core.nth.call(null,vec__11335,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__11335,default$){
return (function (G__11336,G__11338,G__11337){
var or__5053__auto__ = (function (){var and__5041__auto__ = G__11336.call(null,G__11337);
if(cljs.core.truth_(and__5041__auto__)){
return G__11337;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return G__11338;
}
});})(c,vec__11335,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__11335,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__11335,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq11333){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11333));
});
