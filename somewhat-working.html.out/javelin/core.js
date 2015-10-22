// Compiled by ClojureScript 1.7.48 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__11556 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__11554_SHARP_,p2__11555_SHARP_){
return cljs.core.assoc.call(null,p1__11554_SHARP_,p2__11555_SHARP_,p2__11555_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__11556;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e11558){if((e11558 instanceof Error)){
var _ = e11558;
return null;
} else {
throw e11558;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__11561 = c;
javelin.core.add_sync_BANG_.call(null,G__11561);

return G__11561;
} else {
var G__11562 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__11562));

return G__11562;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___11571 = arguments.length;
var i__6093__auto___11572 = (0);
while(true){
if((i__6093__auto___11572 < len__6092__auto___11571)){
args__6099__auto__.push((arguments[i__6093__auto___11572]));

var G__11573 = (i__6093__auto___11572 + (1));
i__6093__auto___11572 = G__11573;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11565){
var vec__11566 = p__11565;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__11566,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__11567 = cljs.core.seq.call(null,srcs);
var chunk__11568 = null;
var count__11569 = (0);
var i__11570 = (0);
while(true){
if((i__11570 < count__11569)){
var src = cljs.core._nth.call(null,chunk__11568,i__11570);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__11574 = seq__11567;
var G__11575 = chunk__11568;
var G__11576 = count__11569;
var G__11577 = (i__11570 + (1));
seq__11567 = G__11574;
chunk__11568 = G__11575;
count__11569 = G__11576;
i__11570 = G__11577;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11567);
if(temp__4425__auto__){
var seq__11567__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11567__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__11567__$1);
var G__11578 = cljs.core.chunk_rest.call(null,seq__11567__$1);
var G__11579 = c__5837__auto__;
var G__11580 = cljs.core.count.call(null,c__5837__auto__);
var G__11581 = (0);
seq__11567 = G__11578;
chunk__11568 = G__11579;
count__11569 = G__11580;
i__11570 = G__11581;
continue;
} else {
var src = cljs.core.first.call(null,seq__11567__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__11582 = cljs.core.next.call(null,seq__11567__$1);
var G__11583 = null;
var G__11584 = (0);
var G__11585 = (0);
seq__11567 = G__11582;
chunk__11568 = G__11583;
count__11569 = G__11584;
i__11570 = G__11585;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq11563){
var G__11564 = cljs.core.first.call(null,seq11563);
var seq11563__$1 = cljs.core.next.call(null,seq11563);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11564,seq11563__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___11604 = arguments.length;
var i__6093__auto___11605 = (0);
while(true){
if((i__6093__auto___11605 < len__6092__auto___11604)){
args__6099__auto__.push((arguments[i__6093__auto___11605]));

var G__11606 = (i__6093__auto___11605 + (1));
i__6093__auto___11605 = G__11606;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11590){
var vec__11591 = p__11590;
var f = cljs.core.nth.call(null,vec__11591,(0),null);
var sources = cljs.core.nth.call(null,vec__11591,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__11592_11607 = cljs.core.seq.call(null,this$.sources);
var chunk__11593_11608 = null;
var count__11594_11609 = (0);
var i__11595_11610 = (0);
while(true){
if((i__11595_11610 < count__11594_11609)){
var source_11611 = cljs.core._nth.call(null,chunk__11593_11608,i__11595_11610);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_11611))){
source_11611.sinks = cljs.core.conj.call(null,source_11611.sinks,this$);

if((source_11611.rank > this$.rank)){
var seq__11596_11612 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__11592_11607,chunk__11593_11608,count__11594_11609,i__11595_11610,source_11611,vec__11591,f,sources){
return (function (p1__11586_SHARP_){
return p1__11586_SHARP_.sinks;
});})(seq__11592_11607,chunk__11593_11608,count__11594_11609,i__11595_11610,source_11611,vec__11591,f,sources))
,source_11611));
var chunk__11597_11613 = null;
var count__11598_11614 = (0);
var i__11599_11615 = (0);
while(true){
if((i__11599_11615 < count__11598_11614)){
var dep_11616 = cljs.core._nth.call(null,chunk__11597_11613,i__11599_11615);
dep_11616.rank = javelin.core.next_rank.call(null);

var G__11617 = seq__11596_11612;
var G__11618 = chunk__11597_11613;
var G__11619 = count__11598_11614;
var G__11620 = (i__11599_11615 + (1));
seq__11596_11612 = G__11617;
chunk__11597_11613 = G__11618;
count__11598_11614 = G__11619;
i__11599_11615 = G__11620;
continue;
} else {
var temp__4425__auto___11621 = cljs.core.seq.call(null,seq__11596_11612);
if(temp__4425__auto___11621){
var seq__11596_11622__$1 = temp__4425__auto___11621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11596_11622__$1)){
var c__5837__auto___11623 = cljs.core.chunk_first.call(null,seq__11596_11622__$1);
var G__11624 = cljs.core.chunk_rest.call(null,seq__11596_11622__$1);
var G__11625 = c__5837__auto___11623;
var G__11626 = cljs.core.count.call(null,c__5837__auto___11623);
var G__11627 = (0);
seq__11596_11612 = G__11624;
chunk__11597_11613 = G__11625;
count__11598_11614 = G__11626;
i__11599_11615 = G__11627;
continue;
} else {
var dep_11628 = cljs.core.first.call(null,seq__11596_11622__$1);
dep_11628.rank = javelin.core.next_rank.call(null);

var G__11629 = cljs.core.next.call(null,seq__11596_11622__$1);
var G__11630 = null;
var G__11631 = (0);
var G__11632 = (0);
seq__11596_11612 = G__11629;
chunk__11597_11613 = G__11630;
count__11598_11614 = G__11631;
i__11599_11615 = G__11632;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__11633 = seq__11592_11607;
var G__11634 = chunk__11593_11608;
var G__11635 = count__11594_11609;
var G__11636 = (i__11595_11610 + (1));
seq__11592_11607 = G__11633;
chunk__11593_11608 = G__11634;
count__11594_11609 = G__11635;
i__11595_11610 = G__11636;
continue;
} else {
var temp__4425__auto___11637 = cljs.core.seq.call(null,seq__11592_11607);
if(temp__4425__auto___11637){
var seq__11592_11638__$1 = temp__4425__auto___11637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11592_11638__$1)){
var c__5837__auto___11639 = cljs.core.chunk_first.call(null,seq__11592_11638__$1);
var G__11640 = cljs.core.chunk_rest.call(null,seq__11592_11638__$1);
var G__11641 = c__5837__auto___11639;
var G__11642 = cljs.core.count.call(null,c__5837__auto___11639);
var G__11643 = (0);
seq__11592_11607 = G__11640;
chunk__11593_11608 = G__11641;
count__11594_11609 = G__11642;
i__11595_11610 = G__11643;
continue;
} else {
var source_11644 = cljs.core.first.call(null,seq__11592_11638__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_11644))){
source_11644.sinks = cljs.core.conj.call(null,source_11644.sinks,this$);

if((source_11644.rank > this$.rank)){
var seq__11600_11645 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__11592_11607,chunk__11593_11608,count__11594_11609,i__11595_11610,source_11644,seq__11592_11638__$1,temp__4425__auto___11637,vec__11591,f,sources){
return (function (p1__11586_SHARP_){
return p1__11586_SHARP_.sinks;
});})(seq__11592_11607,chunk__11593_11608,count__11594_11609,i__11595_11610,source_11644,seq__11592_11638__$1,temp__4425__auto___11637,vec__11591,f,sources))
,source_11644));
var chunk__11601_11646 = null;
var count__11602_11647 = (0);
var i__11603_11648 = (0);
while(true){
if((i__11603_11648 < count__11602_11647)){
var dep_11649 = cljs.core._nth.call(null,chunk__11601_11646,i__11603_11648);
dep_11649.rank = javelin.core.next_rank.call(null);

var G__11650 = seq__11600_11645;
var G__11651 = chunk__11601_11646;
var G__11652 = count__11602_11647;
var G__11653 = (i__11603_11648 + (1));
seq__11600_11645 = G__11650;
chunk__11601_11646 = G__11651;
count__11602_11647 = G__11652;
i__11603_11648 = G__11653;
continue;
} else {
var temp__4425__auto___11654__$1 = cljs.core.seq.call(null,seq__11600_11645);
if(temp__4425__auto___11654__$1){
var seq__11600_11655__$1 = temp__4425__auto___11654__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11600_11655__$1)){
var c__5837__auto___11656 = cljs.core.chunk_first.call(null,seq__11600_11655__$1);
var G__11657 = cljs.core.chunk_rest.call(null,seq__11600_11655__$1);
var G__11658 = c__5837__auto___11656;
var G__11659 = cljs.core.count.call(null,c__5837__auto___11656);
var G__11660 = (0);
seq__11600_11645 = G__11657;
chunk__11601_11646 = G__11658;
count__11602_11647 = G__11659;
i__11603_11648 = G__11660;
continue;
} else {
var dep_11661 = cljs.core.first.call(null,seq__11600_11655__$1);
dep_11661.rank = javelin.core.next_rank.call(null);

var G__11662 = cljs.core.next.call(null,seq__11600_11655__$1);
var G__11663 = null;
var G__11664 = (0);
var G__11665 = (0);
seq__11600_11645 = G__11662;
chunk__11601_11646 = G__11663;
count__11602_11647 = G__11664;
i__11603_11648 = G__11665;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__11666 = cljs.core.next.call(null,seq__11592_11638__$1);
var G__11667 = null;
var G__11668 = (0);
var G__11669 = (0);
seq__11592_11607 = G__11666;
chunk__11593_11608 = G__11667;
count__11594_11609 = G__11668;
i__11595_11610 = G__11669;
continue;
}
} else {
}
}
break;
}

var compute_11670 = ((function (vec__11591,f,sources){
return (function (p1__11587_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__11587_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__11587_SHARP_)));
});})(vec__11591,f,sources))
;
this$.thunk = ((function (compute_11670,vec__11591,f,sources){
return (function (){
return this$.state = compute_11670.call(null,this$.sources);
});})(compute_11670,vec__11591,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq11588){
var G__11589 = cljs.core.first.call(null,seq11588);
var seq11588__$1 = cljs.core.next.call(null,seq11588);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11589,seq11588__$1);
});

/**
* @constructor
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__11671 = cljs.core.seq.call(null,self__.watches);
var chunk__11672 = null;
var count__11673 = (0);
var i__11674 = (0);
while(true){
if((i__11674 < count__11673)){
var vec__11675 = cljs.core._nth.call(null,chunk__11672,i__11674);
var key = cljs.core.nth.call(null,vec__11675,(0),null);
var f = cljs.core.nth.call(null,vec__11675,(1),null);
f.call(null,key,this$__$1,o,n);

var G__11677 = seq__11671;
var G__11678 = chunk__11672;
var G__11679 = count__11673;
var G__11680 = (i__11674 + (1));
seq__11671 = G__11677;
chunk__11672 = G__11678;
count__11673 = G__11679;
i__11674 = G__11680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11671);
if(temp__4425__auto__){
var seq__11671__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11671__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__11671__$1);
var G__11681 = cljs.core.chunk_rest.call(null,seq__11671__$1);
var G__11682 = c__5837__auto__;
var G__11683 = cljs.core.count.call(null,c__5837__auto__);
var G__11684 = (0);
seq__11671 = G__11681;
chunk__11672 = G__11682;
count__11673 = G__11683;
i__11674 = G__11684;
continue;
} else {
var vec__11676 = cljs.core.first.call(null,seq__11671__$1);
var key = cljs.core.nth.call(null,vec__11676,(0),null);
var f = cljs.core.nth.call(null,vec__11676,(1),null);
f.call(null,key,this$__$1,o,n);

var G__11685 = cljs.core.next.call(null,seq__11671__$1);
var G__11686 = null;
var G__11687 = (0);
var G__11688 = (0);
seq__11671 = G__11685;
chunk__11672 = G__11686;
count__11673 = G__11687;
i__11674 = G__11688;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5632__auto__,writer__5633__auto__,opt__5634__auto__){
return cljs.core._write.call(null,writer__5633__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5041__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5041__auto__)){
return c.thunk;
} else {
return and__5041__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__5041__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5041__auto__)){
return c.update;
} else {
return and__5041__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__5041__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__5041__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__11689__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__11689 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__11690__i = 0, G__11690__a = new Array(arguments.length -  0);
while (G__11690__i < G__11690__a.length) {G__11690__a[G__11690__i] = arguments[G__11690__i + 0]; ++G__11690__i;}
  sources = new cljs.core.IndexedSeq(G__11690__a,0);
} 
return G__11689__delegate.call(this,sources);};
G__11689.cljs$lang$maxFixedArity = 0;
G__11689.cljs$lang$applyTo = (function (arglist__11691){
var sources = cljs.core.seq(arglist__11691);
return G__11689__delegate(sources);
});
G__11689.cljs$core$IFn$_invoke$arity$variadic = G__11689__delegate;
return G__11689;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args11692 = [];
var len__6092__auto___11700 = arguments.length;
var i__6093__auto___11701 = (0);
while(true){
if((i__6093__auto___11701 < len__6092__auto___11700)){
args11692.push((arguments[i__6093__auto___11701]));

var G__11702 = (i__6093__auto___11701 + (1));
i__6093__auto___11701 = G__11702;
continue;
} else {
}
break;
}

var G__11696 = args11692.length;
switch (G__11696) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6111__auto__ = (new cljs.core.IndexedSeq(args11692.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6111__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__11697){
var map__11698 = p__11697;
var map__11698__$1 = ((((!((map__11698 == null)))?((((map__11698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11698):map__11698);
var meta = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq11693){
var G__11694 = cljs.core.first.call(null,seq11693);
var seq11693__$1 = cljs.core.next.call(null,seq11693);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__11694,seq11693__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__11704_SHARP_){
var _STAR_tx_STAR_11707 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__11704_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_11707;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_11708 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_11708;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___11715 = arguments.length;
var i__6093__auto___11716 = (0);
while(true){
if((i__6093__auto___11716 < len__6092__auto___11715)){
args__6099__auto__.push((arguments[i__6093__auto___11716]));

var G__11717 = (i__6093__auto___11716 + (1));
i__6093__auto___11716 = G__11717;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__11709_SHARP_,p2__11710_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__11709_SHARP_,p2__11710_SHARP_),p2__11710_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__11712_SHARP_,p2__11711_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__11712_SHARP_,p2__11711_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__11718__delegate = function (rest__11713_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__11713_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__11713_SHARP_);

return news;
};
var G__11718 = function (var_args){
var rest__11713_SHARP_ = null;
if (arguments.length > 0) {
var G__11719__i = 0, G__11719__a = new Array(arguments.length -  0);
while (G__11719__i < G__11719__a.length) {G__11719__a[G__11719__i] = arguments[G__11719__i + 0]; ++G__11719__i;}
  rest__11713_SHARP_ = new cljs.core.IndexedSeq(G__11719__a,0);
} 
return G__11718__delegate.call(this,rest__11713_SHARP_);};
G__11718.cljs$lang$maxFixedArity = 0;
G__11718.cljs$lang$applyTo = (function (arglist__11720){
var rest__11713_SHARP_ = cljs.core.seq(arglist__11720);
return G__11718__delegate(rest__11713_SHARP_);
});
G__11718.cljs$core$IFn$_invoke$arity$variadic = G__11718__delegate;
return G__11718;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq11714){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11714));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__11721_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__11721_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__11722_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__11722_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__11727_11731 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__11728_11732 = null;
var count__11729_11733 = (0);
var i__11730_11734 = (0);
while(true){
if((i__11730_11734 < count__11729_11733)){
var i_11735 = cljs.core._nth.call(null,chunk__11728_11732,i__11730_11734);
f__$1.call(null,ith_item__$1.call(null,i_11735));

var G__11736 = seq__11727_11731;
var G__11737 = chunk__11728_11732;
var G__11738 = count__11729_11733;
var G__11739 = (i__11730_11734 + (1));
seq__11727_11731 = G__11736;
chunk__11728_11732 = G__11737;
count__11729_11733 = G__11738;
i__11730_11734 = G__11739;
continue;
} else {
var temp__4425__auto___11740 = cljs.core.seq.call(null,seq__11727_11731);
if(temp__4425__auto___11740){
var seq__11727_11741__$1 = temp__4425__auto___11740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11727_11741__$1)){
var c__5837__auto___11742 = cljs.core.chunk_first.call(null,seq__11727_11741__$1);
var G__11743 = cljs.core.chunk_rest.call(null,seq__11727_11741__$1);
var G__11744 = c__5837__auto___11742;
var G__11745 = cljs.core.count.call(null,c__5837__auto___11742);
var G__11746 = (0);
seq__11727_11731 = G__11743;
chunk__11728_11732 = G__11744;
count__11729_11733 = G__11745;
i__11730_11734 = G__11746;
continue;
} else {
var i_11747 = cljs.core.first.call(null,seq__11727_11741__$1);
f__$1.call(null,ith_item__$1.call(null,i_11747));

var G__11748 = cljs.core.next.call(null,seq__11727_11741__$1);
var G__11749 = null;
var G__11750 = (0);
var G__11751 = (0);
seq__11727_11731 = G__11748;
chunk__11728_11732 = G__11749;
count__11729_11733 = G__11750;
i__11730_11734 = G__11751;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});
