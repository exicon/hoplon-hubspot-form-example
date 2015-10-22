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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8664_SHARP_,p2__8665_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8664_SHARP_,p2__8665_SHARP_.getAttribute("static-id"),p2__8665_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(){
var args8666 = [];
var len__6092__auto___8671 = arguments.length;
var i__6093__auto___8672 = (0);
while(true){
if((i__6093__auto___8672 < len__6092__auto___8671)){
args8666.push((arguments[i__6093__auto___8672]));

var G__8673 = (i__6093__auto___8672 + (1));
i__6093__auto___8672 = G__8673;
continue;
} else {
}
break;
}

var G__8668 = args8666.length;
switch (G__8668) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8666.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__8669_8675 = init;
var G__8670_8676 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8669_8675,G__8670_8676) : f.call(null,G__8669_8675,G__8670_8676));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8679 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(0),null);
var more = cljs.core.nthnext(vec__8679,(1));
var vec__8680 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8680,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8680,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("c52a34e12b80498ab689e353d5d0f204")].join(''),f2], null)))));
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
var G__8681 = (i + (1));
var G__8682 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__8681;
ret = G__8682;
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
var G__8684 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__8684) : hoplon.core.$text.call(null,G__8684));
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
var G__8695 = new$__$1;
var vec__8697 = G__8695;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8697,(0),null);
var xs = cljs.core.nthnext(vec__8697,(1));
var G__8696 = hoplon.core.child_vec(this$);
var vec__8698 = G__8696;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8698,(0),null);
var ks = cljs.core.nthnext(vec__8698,(1));
var kids = vec__8698;
var G__8695__$1 = G__8695;
var G__8696__$1 = G__8696;
while(true){
var vec__8699 = G__8695__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8699,(0),null);
var xs__$1 = cljs.core.nthnext(vec__8699,(1));
var vec__8700 = G__8696__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700,(0),null);
var ks__$1 = cljs.core.nthnext(vec__8700,(1));
var kids__$1 = vec__8700;
if(cljs.core.truth_((function (){var or__5053__auto__ = x__$1;
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return k__$1;
}
})())){
var G__8701 = xs__$1;
var G__8702 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__8695__$1 = G__8701;
G__8696__$1 = G__8702;
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
var kids_8705 = (function (){var G__8704 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8704) : cljs.core.atom.call(null,G__8704));
})();
this$__$1.hoplonKids = kids_8705;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_8705,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_8708 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_8709 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_8708) : cljs.core.deref.call(null,kids_8708)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_8708,i_8709,x__$1,this$__$1){
return (function (p1__8707_SHARP_,p2__8706_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_8708,cljs.core.assoc,i_8709,p2__8706_SHARP_);
});})(kids_8708,i_8709,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_8708,cljs.core.assoc,i_8709,x__$1);
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
return (function (p1__8710_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__8710_SHARP_));
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
return (function (p1__8711_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__8711_SHARP_], 0)));
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
return (function (p1__8712_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8712_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8713 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_8714 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__8715 = (function (){var and__5041__auto__ = attr_8714;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_8714) : cljs.core.deref.call(null,attr_8714)),kk_8713);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8715)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_8714,cljs.core.assoc,kk_8713,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__8716_SHARP_){
return p1__8716_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__8717_SHARP_){
return p1__8717_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__8718_SHARP_){
return p1__8718_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__8719_SHARP_){
return p1__8719_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__8722_SHARP_){
return (p1__8722_SHARP_ instanceof Node);
}):(function (p1__8723_SHARP_){
try{return p1__8723_SHARP_.nodeType;
}catch (e8724){if((e8724 instanceof Error)){
var _ = e8724;
return null;
} else {
throw e8724;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8725_SHARP_){
try{return cljs.core.vector_QMARK_(p1__8725_SHARP_);
}catch (e8726){if((e8726 instanceof Error)){
var _ = e8726;
return null;
} else {
throw e8726;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8727_SHARP_){
try{return cljs.core.seq_QMARK_(p1__8727_SHARP_);
}catch (e8728){if((e8728 instanceof Error)){
var _ = e8728;
return null;
} else {
throw e8728;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(){
var args8729 = [];
var len__6092__auto___8733 = arguments.length;
var i__6093__auto___8734 = (0);
while(true){
if((i__6093__auto___8734 < len__6092__auto___8733)){
args8729.push((arguments[i__6093__auto___8734]));

var G__8735 = (i__6093__auto___8734 + (1));
i__6093__auto___8734 = G__8735;
continue;
} else {
}
break;
}

var G__8731 = args8729.length;
switch (G__8731) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8729.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e8732){if((e8732 instanceof Error)){
var _ = e8732;
return not_found;
} else {
throw e8732;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(){
var args8737 = [];
var len__6092__auto___8740 = arguments.length;
var i__6093__auto___8741 = (0);
while(true){
if((i__6093__auto___8741 < len__6092__auto___8740)){
args8737.push((arguments[i__6093__auto___8741]));

var G__8742 = (i__6093__auto___8741 + (1));
i__6093__auto___8741 = G__8742;
continue;
} else {
}
break;
}

var G__8739 = args8737.length;
switch (G__8739) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8737.length)].join('')));

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
var G__8752 = args;
var vec__8753 = G__8752;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8753,(0),null);
var args__$1 = cljs.core.nthnext(vec__8753,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8752__$1 = G__8752;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8754 = G__8752__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8754,(0),null);
var args__$2 = cljs.core.nthnext(vec__8754,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__8755 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__8752__$1,attr__$2,kids__$2,vec__8754,arg__$1,args__$2,attr,kids,G__8752,vec__8753,arg,args__$1){
return (function (p1__8744_SHARP_,p2__8745_SHARP_,p3__8746_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__8744_SHARP_,p2__8745_SHARP_,p3__8746_SHARP_);
});})(attr__$1,kids__$1,G__8752__$1,attr__$2,kids__$2,vec__8754,arg__$1,args__$2,attr,kids,G__8752,vec__8753,arg,args__$1))
,attr__$2,arg__$1);
var G__8756 = kids__$2;
var G__8757 = args__$2;
attr__$1 = G__8755;
kids__$1 = G__8756;
G__8752__$1 = G__8757;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8758 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__8759 = kids__$2;
var G__8760 = cljs.core.rest(args__$2);
attr__$1 = G__8758;
kids__$1 = G__8759;
G__8752__$1 = G__8760;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__8761 = attr__$2;
var G__8762 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8763 = args__$2;
attr__$1 = G__8761;
kids__$1 = G__8762;
G__8752__$1 = G__8763;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__8764 = attr__$2;
var G__8765 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8766 = args__$2;
attr__$1 = G__8764;
kids__$1 = G__8765;
G__8752__$1 = G__8766;
continue;
} else {
var G__8767 = attr__$2;
var G__8768 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__8769 = args__$2;
attr__$1 = G__8767;
kids__$1 = G__8768;
G__8752__$1 = G__8769;
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
return (function (p1__8771_SHARP_,p2__8770_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__8770_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__8770_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__8773){
var vec__8780 = p__8773;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8780,(0),null);
var _ = cljs.core.nthnext(vec__8780,(1));
var kids = vec__8780;
var this$__$1 = this$;
var node_8786 = ((function (this$__$1,vec__8780,child_cell,_,kids){
return (function (p1__8772_SHARP_){
if(typeof p1__8772_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__8772_SHARP_) : hoplon.core.$text.call(null,p1__8772_SHARP_));
} else {
if(typeof p1__8772_SHARP_ === 'number'){
var G__8781 = [cljs.core.str(p1__8772_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__8781) : hoplon.core.$text.call(null,G__8781));
} else {
return p1__8772_SHARP_;

}
}
});})(this$__$1,vec__8780,child_cell,_,kids))
;
var seq__8782_8787 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__8783_8788 = null;
var count__8784_8789 = (0);
var i__8785_8790 = (0);
while(true){
if((i__8785_8790 < count__8784_8789)){
var x_8791 = chunk__8783_8788.cljs$core$IIndexed$_nth$arity$2(null,i__8785_8790);
var temp__4425__auto___8792 = node_8786(x_8791);
if(cljs.core.truth_(temp__4425__auto___8792)){
var x_8793__$1 = temp__4425__auto___8792;
hoplon.core.append_child_BANG_(this$__$1,x_8793__$1);
} else {
}

var G__8794 = seq__8782_8787;
var G__8795 = chunk__8783_8788;
var G__8796 = count__8784_8789;
var G__8797 = (i__8785_8790 + (1));
seq__8782_8787 = G__8794;
chunk__8783_8788 = G__8795;
count__8784_8789 = G__8796;
i__8785_8790 = G__8797;
continue;
} else {
var temp__4425__auto___8798 = cljs.core.seq(seq__8782_8787);
if(temp__4425__auto___8798){
var seq__8782_8799__$1 = temp__4425__auto___8798;
if(cljs.core.chunked_seq_QMARK_(seq__8782_8799__$1)){
var c__5837__auto___8800 = cljs.core.chunk_first(seq__8782_8799__$1);
var G__8801 = cljs.core.chunk_rest(seq__8782_8799__$1);
var G__8802 = c__5837__auto___8800;
var G__8803 = cljs.core.count(c__5837__auto___8800);
var G__8804 = (0);
seq__8782_8787 = G__8801;
chunk__8783_8788 = G__8802;
count__8784_8789 = G__8803;
i__8785_8790 = G__8804;
continue;
} else {
var x_8805 = cljs.core.first(seq__8782_8799__$1);
var temp__4425__auto___8806__$1 = node_8786(x_8805);
if(cljs.core.truth_(temp__4425__auto___8806__$1)){
var x_8807__$1 = temp__4425__auto___8806__$1;
hoplon.core.append_child_BANG_(this$__$1,x_8807__$1);
} else {
}

var G__8808 = cljs.core.next(seq__8782_8799__$1);
var G__8809 = null;
var G__8810 = (0);
var G__8811 = (0);
seq__8782_8787 = G__8808;
chunk__8783_8788 = G__8809;
count__8784_8789 = G__8810;
i__8785_8790 = G__8811;
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
var G__8818__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8813 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8813,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8813,(1),null);
var G__8814 = this$;
hoplon.core.add_attributes_BANG_(G__8814,attr);

hoplon.core.add_children_BANG_(G__8814,kids);

return G__8814;
};
var G__8818 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8819__i = 0, G__8819__a = new Array(arguments.length -  1);
while (G__8819__i < G__8819__a.length) {G__8819__a[G__8819__i] = arguments[G__8819__i + 1]; ++G__8819__i;}
  args = new cljs.core.IndexedSeq(G__8819__a,0);
} 
return G__8818__delegate.call(this,self__,args);};
G__8818.cljs$lang$maxFixedArity = 1;
G__8818.cljs$lang$applyTo = (function (arglist__8820){
var self__ = cljs.core.first(arglist__8820);
var args = cljs.core.rest(arglist__8820);
return G__8818__delegate(self__,args);
});
G__8818.cljs$core$IFn$_invoke$arity$variadic = G__8818__delegate;
return G__8818;
})()
;

Element.prototype.apply = (function (self__,args8812){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8812)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8821__delegate = function (args){
var this$ = this;
var vec__8815 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8815,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8815,(1),null);
var G__8816 = this$;
hoplon.core.add_attributes_BANG_(G__8816,attr);

hoplon.core.add_children_BANG_(G__8816,kids);

return G__8816;
};
var G__8821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8822__i = 0, G__8822__a = new Array(arguments.length -  0);
while (G__8822__i < G__8822__a.length) {G__8822__a[G__8822__i] = arguments[G__8822__i + 0]; ++G__8822__i;}
  args = new cljs.core.IndexedSeq(G__8822__a,0);
} 
return G__8821__delegate.call(this,args);};
G__8821.cljs$lang$maxFixedArity = 0;
G__8821.cljs$lang$applyTo = (function (arglist__8823){
var args = cljs.core.seq(arglist__8823);
return G__8821__delegate(args);
});
G__8821.cljs$core$IFn$_invoke$arity$variadic = G__8821__delegate;
return G__8821;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_8824__$1 = cljs.core.name(k);
var e_8825 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_8825.removeAttr(k_8824__$1);
} else {
e_8825.attr(k_8824__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8824__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e8817){if((e8817 instanceof Error)){
var _ = e8817;
return null;
} else {
throw e8817;

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
var G__8832__delegate = function (args){
var vec__8829 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8829,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8829,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__8830 = elem.hoplonKids;
var G__8831 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8830,G__8831) : cljs.core.reset_BANG_.call(null,G__8830,G__8831));
} else {
return null;
}
};
var G__8832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8833__i = 0, G__8833__a = new Array(arguments.length -  0);
while (G__8833__i < G__8833__a.length) {G__8833__a[G__8833__i] = arguments[G__8833__i + 0]; ++G__8833__i;}
  args = new cljs.core.IndexedSeq(G__8833__a,0);
} 
return G__8832__delegate.call(this,args);};
G__8832.cljs$lang$maxFixedArity = 0;
G__8832.cljs$lang$applyTo = (function (arglist__8834){
var args = cljs.core.seq(arglist__8834);
return G__8832__delegate(args);
});
G__8832.cljs$core$IFn$_invoke$arity$variadic = G__8832__delegate;
return G__8832;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__8835__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__8835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8836__i = 0, G__8836__a = new Array(arguments.length -  0);
while (G__8836__i < G__8836__a.length) {G__8836__a[G__8836__i] = arguments[G__8836__i + 0]; ++G__8836__i;}
  args = new cljs.core.IndexedSeq(G__8836__a,0);
} 
return G__8835__delegate.call(this,args);};
G__8835.cljs$lang$maxFixedArity = 0;
G__8835.cljs$lang$applyTo = (function (arglist__8837){
var args = cljs.core.seq(arglist__8837);
return G__8835__delegate(args);
});
G__8835.cljs$core$IFn$_invoke$arity$variadic = G__8835__delegate;
return G__8835;
})()
;
});
hoplon.core.html = (function hoplon$core$html(){
var args__6099__auto__ = [];
var len__6092__auto___8840 = arguments.length;
var i__6093__auto___8841 = (0);
while(true){
if((i__6093__auto___8841 < len__6092__auto___8840)){
args__6099__auto__.push((arguments[i__6093__auto___8841]));

var G__8842 = (i__6093__auto___8841 + (1));
i__6093__auto___8841 = G__8842;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8839 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq8838){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8838));
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
hoplon.core.$text = (function hoplon$core$$text(p1__8843_SHARP_){
return document.createTextNode(p1__8843_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__8844_SHARP_){
return document.createComment(p1__8844_SHARP_);
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
return jQuery("body").on("submit",(function (p1__8845_SHARP_){
var e = (function (){var G__8846 = p1__8845_SHARP_.target;
return jQuery(G__8846);
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
return p1__8845_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(){
var args8847 = [];
var len__6092__auto___8850 = arguments.length;
var i__6093__auto___8851 = (0);
while(true){
if((i__6093__auto___8851 < len__6092__auto___8850)){
args8847.push((arguments[i__6093__auto___8851]));

var G__8852 = (i__6093__auto___8851 + (1));
i__6093__auto___8851 = G__8852;
continue;
} else {
}
break;
}

var G__8849 = args8847.length;
switch (G__8849) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8847.length)].join('')));

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
var args8854 = [];
var len__6092__auto___8857 = arguments.length;
var i__6093__auto___8858 = (0);
while(true){
if((i__6093__auto___8858 < len__6092__auto___8857)){
args8854.push((arguments[i__6093__auto___8858]));

var G__8859 = (i__6093__auto___8858 + (1));
i__6093__auto___8858 = G__8859;
continue;
} else {
}
break;
}

var G__8856 = args8854.length;
switch (G__8856) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8854.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__5947__auto__ = (function (){var G__8861 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8861) : cljs.core.atom.call(null,G__8861));
})();
var prefer_table__5948__auto__ = (function (){var G__8862 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8862) : cljs.core.atom.call(null,G__8862));
})();
var method_cache__5949__auto__ = (function (){var G__8863 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8863) : cljs.core.atom.call(null,G__8863));
})();
var cached_hierarchy__5950__auto__ = (function (){var G__8864 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8864) : cljs.core.atom.call(null,G__8864));
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
var G__8865 = elem;
var G__8866 = cljs.core.cst$kw$attr;
var G__8867 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__8865,G__8866,G__8867) : hoplon.core.do_BANG_.call(null,G__8865,G__8866,G__8867));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__8868__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__8868 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8869__i = 0, G__8869__a = new Array(arguments.length -  2);
while (G__8869__i < G__8869__a.length) {G__8869__a[G__8869__i] = arguments[G__8869__i + 2]; ++G__8869__i;}
  args = new cljs.core.IndexedSeq(G__8869__a,0);
} 
return G__8868__delegate.call(this,elem,_,args);};
G__8868.cljs$lang$maxFixedArity = 2;
G__8868.cljs$lang$applyTo = (function (arglist__8870){
var elem = cljs.core.first(arglist__8870);
arglist__8870 = cljs.core.next(arglist__8870);
var _ = cljs.core.first(arglist__8870);
var args = cljs.core.rest(arglist__8870);
return G__8868__delegate(elem,_,args);
});
G__8868.cljs$core$IFn$_invoke$arity$variadic = G__8868__delegate;
return G__8868;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8871 = cljs.core.seq(kvs);
var chunk__8872 = null;
var count__8873 = (0);
var i__8874 = (0);
while(true){
if((i__8874 < count__8873)){
var vec__8875 = chunk__8872.cljs$core$IIndexed$_nth$arity$2(null,i__8874);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8875,(1),null);
var k_8877__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_8877__$1);
} else {
e.attr(k_8877__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8877__$1:v));
}

var G__8878 = seq__8871;
var G__8879 = chunk__8872;
var G__8880 = count__8873;
var G__8881 = (i__8874 + (1));
seq__8871 = G__8878;
chunk__8872 = G__8879;
count__8873 = G__8880;
i__8874 = G__8881;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8871);
if(temp__4425__auto__){
var seq__8871__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8871__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8871__$1);
var G__8882 = cljs.core.chunk_rest(seq__8871__$1);
var G__8883 = c__5837__auto__;
var G__8884 = cljs.core.count(c__5837__auto__);
var G__8885 = (0);
seq__8871 = G__8882;
chunk__8872 = G__8883;
count__8873 = G__8884;
i__8874 = G__8885;
continue;
} else {
var vec__8876 = cljs.core.first(seq__8871__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(1),null);
var k_8886__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_8886__$1);
} else {
e.attr(k_8886__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8886__$1:v));
}

var G__8887 = cljs.core.next(seq__8871__$1);
var G__8888 = null;
var G__8889 = (0);
var G__8890 = (0);
seq__8871 = G__8887;
chunk__8872 = G__8888;
count__8873 = G__8889;
i__8874 = G__8890;
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
return (function (p1__8891_SHARP_){
return cljs.core.zipmap(p1__8891_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__8892 = cljs.core.seq(clmap);
var chunk__8893 = null;
var count__8894 = (0);
var i__8895 = (0);
while(true){
if((i__8895 < count__8894)){
var vec__8896 = chunk__8893.cljs$core$IIndexed$_nth$arity$2(null,i__8895);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8896,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8896,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__8898 = seq__8892;
var G__8899 = chunk__8893;
var G__8900 = count__8894;
var G__8901 = (i__8895 + (1));
seq__8892 = G__8898;
chunk__8893 = G__8899;
count__8894 = G__8900;
i__8895 = G__8901;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8892);
if(temp__4425__auto__){
var seq__8892__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8892__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8892__$1);
var G__8902 = cljs.core.chunk_rest(seq__8892__$1);
var G__8903 = c__5837__auto__;
var G__8904 = cljs.core.count(c__5837__auto__);
var G__8905 = (0);
seq__8892 = G__8902;
chunk__8893 = G__8903;
count__8894 = G__8904;
i__8895 = G__8905;
continue;
} else {
var vec__8897 = cljs.core.first(seq__8892__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8897,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8897,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__8906 = cljs.core.next(seq__8892__$1);
var G__8907 = null;
var G__8908 = (0);
var G__8909 = (0);
seq__8892 = G__8906;
chunk__8893 = G__8907;
count__8894 = G__8908;
i__8895 = G__8909;
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
var seq__8910 = cljs.core.seq(kvs);
var chunk__8911 = null;
var count__8912 = (0);
var i__8913 = (0);
while(true){
if((i__8913 < count__8912)){
var vec__8914 = chunk__8911.cljs$core$IIndexed$_nth$arity$2(null,i__8913);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8914,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__8916 = seq__8910;
var G__8917 = chunk__8911;
var G__8918 = count__8912;
var G__8919 = (i__8913 + (1));
seq__8910 = G__8916;
chunk__8911 = G__8917;
count__8912 = G__8918;
i__8913 = G__8919;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8910);
if(temp__4425__auto__){
var seq__8910__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8910__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8910__$1);
var G__8920 = cljs.core.chunk_rest(seq__8910__$1);
var G__8921 = c__5837__auto__;
var G__8922 = cljs.core.count(c__5837__auto__);
var G__8923 = (0);
seq__8910 = G__8920;
chunk__8911 = G__8921;
count__8912 = G__8922;
i__8913 = G__8923;
continue;
} else {
var vec__8915 = cljs.core.first(seq__8910__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8915,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__8924 = cljs.core.next(seq__8910__$1);
var G__8925 = null;
var G__8926 = (0);
var G__8927 = (0);
seq__8910 = G__8924;
chunk__8911 = G__8925;
count__8912 = G__8926;
i__8913 = G__8927;
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
var G__8928 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__8929 = (0);
return setTimeout(G__8928,G__8929);
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
hoplon.core.on_BANG_ = (function (){var method_table__5947__auto__ = (function (){var G__8930 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8930) : cljs.core.atom.call(null,G__8930));
})();
var prefer_table__5948__auto__ = (function (){var G__8931 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8931) : cljs.core.atom.call(null,G__8931));
})();
var method_cache__5949__auto__ = (function (){var G__8932 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8932) : cljs.core.atom.call(null,G__8932));
})();
var cached_hierarchy__5950__auto__ = (function (){var G__8933 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8933) : cljs.core.atom.call(null,G__8933));
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
return (function (){var G__8934 = this$__$1.target;
return jQuery(G__8934);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__8949 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8949) : cljs.core.atom.call(null,G__8949));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__8950,G__8951){
return (G__8950.cljs$core$IFn$_invoke$arity$1 ? G__8950.cljs$core$IFn$_invoke$arity$1(G__8951) : G__8950.call(null,G__8951));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__8935_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__8953,G__8954,G__8952){
return (G__8952.cljs$core$IFn$_invoke$arity$2 ? G__8952.cljs$core$IFn$_invoke$arity$2(G__8953,G__8954) : G__8952.call(null,G__8953,G__8954));
});})(on_deck,items_seq))
).call(null,items_seq,p1__8935_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__8936_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__8936_SHARP_) : cljs.core.deref.call(null,p1__8936_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__8936_SHARP_,cljs.core.rest);

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
var seq__8955 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__8956 = null;
var count__8957 = (0);
var i__8958 = (0);
while(true){
if((i__8958 < count__8957)){
var i = chunk__8956.cljs$core$IIndexed$_nth$arity$2(null,i__8958);
var e_8961 = (function (){var or__5053__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__8959 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__8959) : tpl.call(null,G__8959));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_8961);

var G__8962 = seq__8955;
var G__8963 = chunk__8956;
var G__8964 = count__8957;
var G__8965 = (i__8958 + (1));
seq__8955 = G__8962;
chunk__8956 = G__8963;
count__8957 = G__8964;
i__8958 = G__8965;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8955);
if(temp__4425__auto__){
var seq__8955__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8955__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__8955__$1);
var G__8966 = cljs.core.chunk_rest(seq__8955__$1);
var G__8967 = c__5837__auto__;
var G__8968 = cljs.core.count(c__5837__auto__);
var G__8969 = (0);
seq__8955 = G__8966;
chunk__8956 = G__8967;
count__8957 = G__8968;
i__8958 = G__8969;
continue;
} else {
var i = cljs.core.first(seq__8955__$1);
var e_8970 = (function (){var or__5053__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
var G__8960 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__8960) : tpl.call(null,G__8960));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_8970);

var G__8971 = cljs.core.next(seq__8955__$1);
var G__8972 = null;
var G__8973 = (0);
var G__8974 = (0);
seq__8955 = G__8971;
chunk__8956 = G__8972;
count__8957 = G__8973;
i__8958 = G__8974;
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
var e_8975 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_8975);

var G__8976 = (_ + (1));
_ = G__8976;
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
var len__6092__auto___8985 = arguments.length;
var i__6093__auto___8986 = (0);
while(true){
if((i__6093__auto___8986 < len__6092__auto___8985)){
args__6099__auto__.push((arguments[i__6093__auto___8986]));

var G__8987 = (i__6093__auto___8986 + (1));
i__6093__auto___8986 = G__8987;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8978){
var vec__8979 = p__8978;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8979,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__8979,default$){
return (function (G__8980,G__8982,G__8981){
var or__5053__auto__ = (function (){var and__5041__auto__ = (G__8980.cljs$core$IFn$_invoke$arity$1 ? G__8980.cljs$core$IFn$_invoke$arity$1(G__8981) : G__8980.call(null,G__8981));
if(cljs.core.truth_(and__5041__auto__)){
return G__8981;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5053__auto__)){
return or__5053__auto__;
} else {
return G__8982;
}
});})(c,vec__8979,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8979,default$){
return (function (){
var G__8983 = c;
var G__8984 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8983,G__8984) : cljs.core.reset_BANG_.call(null,G__8983,G__8984));
});})(_,c,vec__8979,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq8977){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8977));
});
