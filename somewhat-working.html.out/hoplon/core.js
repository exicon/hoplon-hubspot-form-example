// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 * the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11790_SHARP_,p2__11791_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11790_SHARP_,p2__11791_SHARP_.getAttribute("static-id"),p2__11791_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args11792 = [];
var len__6092__auto___11797 = arguments.length;
var i__6093__auto___11798 = (0);
while(true){
if((i__6093__auto___11798 < len__6092__auto___11797)){
args11792.push((arguments[i__6093__auto___11798]));

var G__11799 = (i__6093__auto___11798 + (1));
i__6093__auto___11798 = G__11799;
continue;
} else {
}
break;
}

var G__11794 = args11792.length;
switch (G__11794) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11792.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__11795_11801 = init;
var G__11796_11802 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11795_11801,G__11796_11802) : f.call(null,G__11795_11801,G__11796_11802));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__11805 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11805,(0),null);
var more = cljs.core.nthnext(vec__11805,(1));
var vec__11806 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11806,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11806,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("69d0c34574f846378da24b8d6d4fe653")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__5053__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__5041__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__11807 = (i + (1));
var G__11808 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__11807;
ret = G__11808;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__11810 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11810) : hoplon.core.$text.call(null,G__11810));
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
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__11821 = new$__$1;
var vec__11823 = G__11821;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11823,(0),null);
var xs = cljs.core.nthnext(vec__11823,(1));
var G__11822 = hoplon.core.child_vec(this$);
var vec__11824 = G__11822;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11824,(0),null);
var ks = cljs.core.nthnext(vec__11824,(1));
var kids = vec__11824;
var G__11821__$1 = G__11821;
var G__11822__$1 = G__11822;
while(true){
var vec__11825 = G__11821__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825,(0),null);
var xs__$1 = cljs.core.nthnext(vec__11825,(1));
var vec__11826 = G__11822__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11826,(0),null);
var ks__$1 = cljs.core.nthnext(vec__11826,(1));
var kids__$1 = vec__11826;
if(cljs.core.truth_((function (){var or__5053__auto__ = x__$1;
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return k__$1;
}
})())){
var G__11827 = xs__$1;
var G__11828 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__11821__$1 = G__11827;
G__11822__$1 = G__11828;
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
var kids_11831 = (function (){var G__11830 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11830) : cljs.core.atom.call(null,G__11830));
})();
this$__$1.hoplonKids = kids_11831;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_11831,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_11834 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_11835 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_11834) : cljs.core.deref.call(null,kids_11834)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_11834,i_11835,x__$1,this$__$1){
return (function (p1__11833_SHARP_,p2__11832_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11834,cljs.core.assoc,i_11835,p2__11832_SHARP_);
});})(kids_11834,i_11835,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11834,cljs.core.assoc,i_11835,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__11836_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__11836_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__11837_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__11837_SHARP_], 0)));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__11838_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__11838_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_11839 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_11840 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__11841 = (function (){var and__5041__auto__ = attr_11840;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_11840) : cljs.core.deref.call(null,attr_11840)),kk_11839);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__11841)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_11840,cljs.core.assoc,kk_11839,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__11842_SHARP_){
return p1__11842_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__11843_SHARP_){
return p1__11843_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__11844_SHARP_){
return p1__11844_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__11845_SHARP_){
return p1__11845_SHARP_.hoplonKids;
}));

hoplon.core.ICustomElement = {};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5689__auto__ = (((this$ == null))?null:this$);
var m__5690__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__5689__auto__)]);
if(!((m__5690__auto__ == null))){
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5690__auto__.call(null,this$,k,v));
} else {
var m__5690__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5690__auto____$1.call(null,this$,k,v));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attribute!",this$);
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
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto__.call(null,this$,child));
} else {
var m__5690__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
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
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto__.call(null,this$,child));
} else {
var m__5690__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5690__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
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
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto__.call(null,this$,new$,existing));
} else {
var m__5690__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
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
return (m__5690__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto__.call(null,this$,new$,existing));
} else {
var m__5690__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5690__auto____$1 == null))){
return (m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5690__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5690__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_(this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__11848_SHARP_){
return (p1__11848_SHARP_ instanceof Node);
}):(function (p1__11849_SHARP_){
try{return p1__11849_SHARP_.nodeType;
}catch (e11850){if((e11850 instanceof Error)){
var _ = e11850;
return null;
} else {
throw e11850;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11851_SHARP_){
try{return cljs.core.vector_QMARK_(p1__11851_SHARP_);
}catch (e11852){if((e11852 instanceof Error)){
var _ = e11852;
return null;
} else {
throw e11852;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11853_SHARP_){
try{return cljs.core.seq_QMARK_(p1__11853_SHARP_);
}catch (e11854){if((e11854 instanceof Error)){
var _ = e11854;
return null;
} else {
throw e11854;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args11855 = [];
var len__6092__auto___11859 = arguments.length;
var i__6093__auto___11860 = (0);
while(true){
if((i__6093__auto___11860 < len__6092__auto___11859)){
args11855.push((arguments[i__6093__auto___11860]));

var G__11861 = (i__6093__auto___11860 + (1));
i__6093__auto___11860 = G__11861;
continue;
} else {
}
break;
}

var G__11857 = args11855.length;
switch (G__11857) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11855.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11858){if((e11858 instanceof Error)){
var _ = e11858;
return not_found;
} else {
throw e11858;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args11863 = [];
var len__6092__auto___11866 = arguments.length;
var i__6093__auto___11867 = (0);
while(true){
if((i__6093__auto___11867 < len__6092__auto___11866)){
args11863.push((arguments[i__6093__auto___11867]));

var G__11868 = (i__6093__auto___11867 + (1));
i__6093__auto___11867 = G__11868;
continue;
} else {
}
break;
}

var G__11865 = args11863.length;
switch (G__11865) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11863.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__11878 = args;
var vec__11879 = G__11878;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11879,(0),null);
var args__$1 = cljs.core.nthnext(vec__11879,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__11878__$1 = G__11878;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__11880 = G__11878__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11880,(0),null);
var args__$2 = cljs.core.nthnext(vec__11880,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__11881 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__11878__$1,attr__$2,kids__$2,vec__11880,arg__$1,args__$2,attr,kids,G__11878,vec__11879,arg,args__$1){
return (function (p1__11870_SHARP_,p2__11871_SHARP_,p3__11872_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__11870_SHARP_,p2__11871_SHARP_,p3__11872_SHARP_);
});})(attr__$1,kids__$1,G__11878__$1,attr__$2,kids__$2,vec__11880,arg__$1,args__$2,attr,kids,G__11878,vec__11879,arg,args__$1))
,attr__$2,arg__$1);
var G__11882 = kids__$2;
var G__11883 = args__$2;
attr__$1 = G__11881;
kids__$1 = G__11882;
G__11878__$1 = G__11883;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__11884 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__11885 = kids__$2;
var G__11886 = cljs.core.rest(args__$2);
attr__$1 = G__11884;
kids__$1 = G__11885;
G__11878__$1 = G__11886;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__11887 = attr__$2;
var G__11888 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11889 = args__$2;
attr__$1 = G__11887;
kids__$1 = G__11888;
G__11878__$1 = G__11889;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__11890 = attr__$2;
var G__11891 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11892 = args__$2;
attr__$1 = G__11890;
kids__$1 = G__11891;
G__11878__$1 = G__11892;
continue;
} else {
var G__11893 = attr__$2;
var G__11894 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__11895 = args__$2;
attr__$1 = G__11893;
kids__$1 = G__11894;
G__11878__$1 = G__11895;
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
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__11897_SHARP_,p2__11896_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__11896_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__11896_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__11899){
var vec__11906 = p__11899;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11906,(0),null);
var _ = cljs.core.nthnext(vec__11906,(1));
var kids = vec__11906;
var this$__$1 = this$;
var node_11912 = ((function (this$__$1,vec__11906,child_cell,_,kids){
return (function (p1__11898_SHARP_){
if(typeof p1__11898_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__11898_SHARP_) : hoplon.core.$text.call(null,p1__11898_SHARP_));
} else {
if(typeof p1__11898_SHARP_ === 'number'){
var G__11907 = [cljs.core.str(p1__11898_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11907) : hoplon.core.$text.call(null,G__11907));
} else {
return p1__11898_SHARP_;

}
}
});})(this$__$1,vec__11906,child_cell,_,kids))
;
var seq__11908_11913 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__11909_11914 = null;
var count__11910_11915 = (0);
var i__11911_11916 = (0);
while(true){
if((i__11911_11916 < count__11910_11915)){
var x_11917 = chunk__11909_11914.cljs$core$IIndexed$_nth$arity$2(null,i__11911_11916);
var temp__4425__auto___11918 = node_11912(x_11917);
if(cljs.core.truth_(temp__4425__auto___11918)){
var x_11919__$1 = temp__4425__auto___11918;
hoplon.core.append_child_BANG_(this$__$1,x_11919__$1);
} else {
}

var G__11920 = seq__11908_11913;
var G__11921 = chunk__11909_11914;
var G__11922 = count__11910_11915;
var G__11923 = (i__11911_11916 + (1));
seq__11908_11913 = G__11920;
chunk__11909_11914 = G__11921;
count__11910_11915 = G__11922;
i__11911_11916 = G__11923;
continue;
} else {
var temp__4425__auto___11924 = cljs.core.seq(seq__11908_11913);
if(temp__4425__auto___11924){
var seq__11908_11925__$1 = temp__4425__auto___11924;
if(cljs.core.chunked_seq_QMARK_(seq__11908_11925__$1)){
var c__5837__auto___11926 = cljs.core.chunk_first(seq__11908_11925__$1);
var G__11927 = cljs.core.chunk_rest(seq__11908_11925__$1);
var G__11928 = c__5837__auto___11926;
var G__11929 = cljs.core.count(c__5837__auto___11926);
var G__11930 = (0);
seq__11908_11913 = G__11927;
chunk__11909_11914 = G__11928;
count__11910_11915 = G__11929;
i__11911_11916 = G__11930;
continue;
} else {
var x_11931 = cljs.core.first(seq__11908_11925__$1);
var temp__4425__auto___11932__$1 = node_11912(x_11931);
if(cljs.core.truth_(temp__4425__auto___11932__$1)){
var x_11933__$1 = temp__4425__auto___11932__$1;
hoplon.core.append_child_BANG_(this$__$1,x_11933__$1);
} else {
}

var G__11934 = cljs.core.next(seq__11908_11925__$1);
var G__11935 = null;
var G__11936 = (0);
var G__11937 = (0);
seq__11908_11913 = G__11934;
chunk__11909_11914 = G__11935;
count__11910_11915 = G__11936;
i__11911_11916 = G__11937;
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
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__11944__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__11939 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11939,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11939,(1),null);
var G__11940 = this$;
hoplon.core.add_attributes_BANG_(G__11940,attr);

hoplon.core.add_children_BANG_(G__11940,kids);

return G__11940;
};
var G__11944 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__11945__i = 0, G__11945__a = new Array(arguments.length -  1);
while (G__11945__i < G__11945__a.length) {G__11945__a[G__11945__i] = arguments[G__11945__i + 1]; ++G__11945__i;}
  args = new cljs.core.IndexedSeq(G__11945__a,0);
} 
return G__11944__delegate.call(this,self__,args);};
G__11944.cljs$lang$maxFixedArity = 1;
G__11944.cljs$lang$applyTo = (function (arglist__11946){
var self__ = cljs.core.first(arglist__11946);
var args = cljs.core.rest(arglist__11946);
return G__11944__delegate(self__,args);
});
G__11944.cljs$core$IFn$_invoke$arity$variadic = G__11944__delegate;
return G__11944;
})()
;

Element.prototype.apply = (function (self__,args11938){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11938)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11947__delegate = function (args){
var this$ = this;
var vec__11941 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(1),null);
var G__11942 = this$;
hoplon.core.add_attributes_BANG_(G__11942,attr);

hoplon.core.add_children_BANG_(G__11942,kids);

return G__11942;
};
var G__11947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11948__i = 0, G__11948__a = new Array(arguments.length -  0);
while (G__11948__i < G__11948__a.length) {G__11948__a[G__11948__i] = arguments[G__11948__i + 0]; ++G__11948__i;}
  args = new cljs.core.IndexedSeq(G__11948__a,0);
} 
return G__11947__delegate.call(this,args);};
G__11947.cljs$lang$maxFixedArity = 0;
G__11947.cljs$lang$applyTo = (function (arglist__11949){
var args = cljs.core.seq(arglist__11949);
return G__11947__delegate(args);
});
G__11947.cljs$core$IFn$_invoke$arity$variadic = G__11947__delegate;
return G__11947;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_11950__$1 = cljs.core.name(k);
var e_11951 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_11951.removeAttr(k_11950__$1);
} else {
e_11951.attr(k_11950__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11950__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e11943){if((e11943 instanceof Error)){
var _ = e11943;
return null;
} else {
throw e11943;

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
var G__11958__delegate = function (args){
var vec__11955 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11955,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11955,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__11956 = elem.hoplonKids;
var G__11957 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11956,G__11957) : cljs.core.reset_BANG_.call(null,G__11956,G__11957));
} else {
return null;
}
};
var G__11958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11959__i = 0, G__11959__a = new Array(arguments.length -  0);
while (G__11959__i < G__11959__a.length) {G__11959__a[G__11959__i] = arguments[G__11959__i + 0]; ++G__11959__i;}
  args = new cljs.core.IndexedSeq(G__11959__a,0);
} 
return G__11958__delegate.call(this,args);};
G__11958.cljs$lang$maxFixedArity = 0;
G__11958.cljs$lang$applyTo = (function (arglist__11960){
var args = cljs.core.seq(arglist__11960);
return G__11958__delegate(args);
});
G__11958.cljs$core$IFn$_invoke$arity$variadic = G__11958__delegate;
return G__11958;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__11961__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__11961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11962__i = 0, G__11962__a = new Array(arguments.length -  0);
while (G__11962__i < G__11962__a.length) {G__11962__a[G__11962__i] = arguments[G__11962__i + 0]; ++G__11962__i;}
  args = new cljs.core.IndexedSeq(G__11962__a,0);
} 
return G__11961__delegate.call(this,args);};
G__11961.cljs$lang$maxFixedArity = 0;
G__11961.cljs$lang$applyTo = (function (arglist__11963){
var args = cljs.core.seq(arglist__11963);
return G__11961__delegate(args);
});
G__11961.cljs$core$IFn$_invoke$arity$variadic = G__11961__delegate;
return G__11961;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6099__auto__ = [];
var len__6092__auto___11966 = arguments.length;
var i__6093__auto___11967 = (0);
while(true){
if((i__6093__auto___11967 < len__6092__auto___11966)){
args__6099__auto__.push((arguments[i__6093__auto___11967]));

var G__11968 = (i__6093__auto___11967 + (1));
i__6093__auto___11967 = G__11968;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__11965 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq11964){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11964));
});
hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__11969_SHARP_){
return document.createTextNode(p1__11969_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__11970_SHARP_){
return document.createComment(p1__11970_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__11971_SHARP_){
var e = (function (){var G__11972 = p1__11971_SHARP_.target;
return jQuery(G__11972);
})();
if(cljs.core.truth_((function (){var or__5053__auto__ = e.attr("action");
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__11971_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args11973 = [];
var len__6092__auto___11976 = arguments.length;
var i__6093__auto___11977 = (0);
while(true){
if((i__6093__auto___11977 < len__6092__auto___11976)){
args11973.push((arguments[i__6093__auto___11977]));

var G__11978 = (i__6093__auto___11977 + (1));
i__6093__auto___11977 = G__11978;
continue;
} else {
}
break;
}

var G__11975 = args11973.length;
switch (G__11975) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11973.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(){
var args11980 = [];
var len__6092__auto___11983 = arguments.length;
var i__6093__auto___11984 = (0);
while(true){
if((i__6093__auto___11984 < len__6092__auto___11983)){
args11980.push((arguments[i__6093__auto___11984]));

var G__11985 = (i__6093__auto___11984 + (1));
i__6093__auto___11984 = G__11985;
continue;
} else {
}
break;
}

var G__11982 = args11980.length;
switch (G__11982) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11980.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__5947__auto__ = (function (){var G__11987 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11987) : cljs.core.atom.call(null,G__11987));
})();
var prefer_table__5948__auto__ = (function (){var G__11988 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11988) : cljs.core.atom.call(null,G__11988));
})();
var method_cache__5949__auto__ = (function (){var G__11989 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11989) : cljs.core.atom.call(null,G__11989));
})();
var cached_hierarchy__5950__auto__ = (function (){var G__11990 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11990) : cljs.core.atom.call(null,G__11990));
})();
var hierarchy__5951__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5951__auto__,method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__11991 = elem;
var G__11992 = cljs.core.cst$kw$attr;
var G__11993 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11991,G__11992,G__11993) : hoplon.core.do_BANG_.call(null,G__11991,G__11992,G__11993));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__11994__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__11994 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__11995__i = 0, G__11995__a = new Array(arguments.length -  2);
while (G__11995__i < G__11995__a.length) {G__11995__a[G__11995__i] = arguments[G__11995__i + 2]; ++G__11995__i;}
  args = new cljs.core.IndexedSeq(G__11995__a,0);
} 
return G__11994__delegate.call(this,elem,_,args);};
G__11994.cljs$lang$maxFixedArity = 2;
G__11994.cljs$lang$applyTo = (function (arglist__11996){
var elem = cljs.core.first(arglist__11996);
arglist__11996 = cljs.core.next(arglist__11996);
var _ = cljs.core.first(arglist__11996);
var args = cljs.core.rest(arglist__11996);
return G__11994__delegate(elem,_,args);
});
G__11994.cljs$core$IFn$_invoke$arity$variadic = G__11994__delegate;
return G__11994;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__11997 = cljs.core.seq(kvs);
var chunk__11998 = null;
var count__11999 = (0);
var i__12000 = (0);
while(true){
if((i__12000 < count__11999)){
var vec__12001 = chunk__11998.cljs$core$IIndexed$_nth$arity$2(null,i__12000);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12001,(1),null);
var k_12003__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12003__$1);
} else {
e.attr(k_12003__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12003__$1:v));
}

var G__12004 = seq__11997;
var G__12005 = chunk__11998;
var G__12006 = count__11999;
var G__12007 = (i__12000 + (1));
seq__11997 = G__12004;
chunk__11998 = G__12005;
count__11999 = G__12006;
i__12000 = G__12007;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11997);
if(temp__4425__auto__){
var seq__11997__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11997__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__11997__$1);
var G__12008 = cljs.core.chunk_rest(seq__11997__$1);
var G__12009 = c__5837__auto__;
var G__12010 = cljs.core.count(c__5837__auto__);
var G__12011 = (0);
seq__11997 = G__12008;
chunk__11998 = G__12009;
count__11999 = G__12010;
i__12000 = G__12011;
continue;
} else {
var vec__12002 = cljs.core.first(seq__11997__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12002,(1),null);
var k_12012__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12012__$1);
} else {
e.attr(k_12012__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12012__$1:v));
}

var G__12013 = cljs.core.next(seq__11997__$1);
var G__12014 = null;
var G__12015 = (0);
var G__12016 = (0);
seq__11997 = G__12013;
chunk__11998 = G__12014;
count__11999 = G__12015;
i__12000 = G__12016;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__12017_SHARP_){
return cljs.core.zipmap(p1__12017_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__12018 = cljs.core.seq(clmap);
var chunk__12019 = null;
var count__12020 = (0);
var i__12021 = (0);
while(true){
if((i__12021 < count__12020)){
var vec__12022 = chunk__12019.cljs$core$IIndexed$_nth$arity$2(null,i__12021);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12024 = seq__12018;
var G__12025 = chunk__12019;
var G__12026 = count__12020;
var G__12027 = (i__12021 + (1));
seq__12018 = G__12024;
chunk__12019 = G__12025;
count__12020 = G__12026;
i__12021 = G__12027;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12018);
if(temp__4425__auto__){
var seq__12018__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12018__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__12018__$1);
var G__12028 = cljs.core.chunk_rest(seq__12018__$1);
var G__12029 = c__5837__auto__;
var G__12030 = cljs.core.count(c__5837__auto__);
var G__12031 = (0);
seq__12018 = G__12028;
chunk__12019 = G__12029;
count__12020 = G__12030;
i__12021 = G__12031;
continue;
} else {
var vec__12023 = cljs.core.first(seq__12018__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12023,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12023,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12032 = cljs.core.next(seq__12018__$1);
var G__12033 = null;
var G__12034 = (0);
var G__12035 = (0);
seq__12018 = G__12032;
chunk__12019 = G__12033;
count__12020 = G__12034;
i__12021 = G__12035;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12036 = cljs.core.seq(kvs);
var chunk__12037 = null;
var count__12038 = (0);
var i__12039 = (0);
while(true){
if((i__12039 < count__12038)){
var vec__12040 = chunk__12037.cljs$core$IIndexed$_nth$arity$2(null,i__12039);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12040,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12042 = seq__12036;
var G__12043 = chunk__12037;
var G__12044 = count__12038;
var G__12045 = (i__12039 + (1));
seq__12036 = G__12042;
chunk__12037 = G__12043;
count__12038 = G__12044;
i__12039 = G__12045;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12036);
if(temp__4425__auto__){
var seq__12036__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12036__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__12036__$1);
var G__12046 = cljs.core.chunk_rest(seq__12036__$1);
var G__12047 = c__5837__auto__;
var G__12048 = cljs.core.count(c__5837__auto__);
var G__12049 = (0);
seq__12036 = G__12046;
chunk__12037 = G__12047;
count__12038 = G__12048;
i__12039 = G__12049;
continue;
} else {
var vec__12041 = cljs.core.first(seq__12036__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12041,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12050 = cljs.core.next(seq__12036__$1);
var G__12051 = null;
var G__12052 = (0);
var G__12053 = (0);
seq__12036 = G__12050;
chunk__12037 = G__12051;
count__12038 = G__12052;
i__12039 = G__12053;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__12054 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__12055 = (0);
return setTimeout(G__12054,G__12055);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__5947__auto__ = (function (){var G__12056 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12056) : cljs.core.atom.call(null,G__12056));
})();
var prefer_table__5948__auto__ = (function (){var G__12057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12057) : cljs.core.atom.call(null,G__12057));
})();
var method_cache__5949__auto__ = (function (){var G__12058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12058) : cljs.core.atom.call(null,G__12058));
})();
var cached_hierarchy__5950__auto__ = (function (){var G__12059 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12059) : cljs.core.atom.call(null,G__12059));
})();
var hierarchy__5951__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__,hierarchy__5951__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5951__auto__,method_table__5947__auto__,prefer_table__5948__auto__,method_cache__5949__auto__,cached_hierarchy__5950__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__12060 = this$__$1.target;
return jQuery(G__12060);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__12075 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12075) : cljs.core.atom.call(null,G__12075));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__12076,G__12077){
return (G__12076.cljs$core$IFn$_invoke$arity$1 ? G__12076.cljs$core$IFn$_invoke$arity$1(G__12077) : G__12076.call(null,G__12077));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__12061_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__12080,G__12079,G__12078){
return (G__12078.cljs$core$IFn$_invoke$arity$2 ? G__12078.cljs$core$IFn$_invoke$arity$2(G__12079,G__12080) : G__12078.call(null,G__12079,G__12080));
});})(on_deck,items_seq))
).call(null,p1__12061_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__12062_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__12062_SHARP_) : cljs.core.deref.call(null,p1__12062_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__12062_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__12081 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__12082 = null;
var count__12083 = (0);
var i__12084 = (0);
while(true){
if((i__12084 < count__12083)){
var i = chunk__12082.cljs$core$IIndexed$_nth$arity$2(null,i__12084);
var e_12087 = (function (){var or__5053__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__12085 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12085) : tpl.call(null,G__12085));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12087);

var G__12088 = seq__12081;
var G__12089 = chunk__12082;
var G__12090 = count__12083;
var G__12091 = (i__12084 + (1));
seq__12081 = G__12088;
chunk__12082 = G__12089;
count__12083 = G__12090;
i__12084 = G__12091;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12081);
if(temp__4425__auto__){
var seq__12081__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12081__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__12081__$1);
var G__12092 = cljs.core.chunk_rest(seq__12081__$1);
var G__12093 = c__5837__auto__;
var G__12094 = cljs.core.count(c__5837__auto__);
var G__12095 = (0);
seq__12081 = G__12092;
chunk__12082 = G__12093;
count__12083 = G__12094;
i__12084 = G__12095;
continue;
} else {
var i = cljs.core.first(seq__12081__$1);
var e_12096 = (function (){var or__5053__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__12086 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12086) : tpl.call(null,G__12086));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12096);

var G__12097 = cljs.core.next(seq__12081__$1);
var G__12098 = null;
var G__12099 = (0);
var G__12100 = (0);
seq__12081 = G__12097;
chunk__12082 = G__12098;
count__12083 = G__12099;
i__12084 = G__12100;
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
var e_12101 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_12101);

var G__12102 = (_ + (1));
_ = G__12102;
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
var len__6092__auto___12111 = arguments.length;
var i__6093__auto___12112 = (0);
while(true){
if((i__6093__auto___12112 < len__6092__auto___12111)){
args__6099__auto__.push((arguments[i__6093__auto___12112]));

var G__12113 = (i__6093__auto___12112 + (1));
i__6093__auto___12112 = G__12113;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__12104){
var vec__12105 = p__12104;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__12105,default$){
return (function (G__12106,G__12108,G__12107){
var or__5053__auto__ = (function (){var and__5041__auto__ = (G__12106.cljs$core$IFn$_invoke$arity$1 ? G__12106.cljs$core$IFn$_invoke$arity$1(G__12107) : G__12106.call(null,G__12107));
if(cljs.core.truth_(and__5041__auto__)){
return G__12107;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return G__12108;
}
});})(c,vec__12105,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__12105,default$){
return (function (){
var G__12109 = c;
var G__12110 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12109,G__12110) : cljs.core.reset_BANG_.call(null,G__12109,G__12110));
});})(_,c,vec__12105,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq12103){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12103));
});
