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

var G__8498 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8496_SHARP_,p2__8497_SHARP_){
return cljs.core.assoc.call(null,p1__8496_SHARP_,p2__8497_SHARP_,p2__8497_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8498;
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
}catch (e8500){if((e8500 instanceof Error)){
var _ = e8500;
return null;
} else {
throw e8500;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8503 = c;
javelin.core.add_sync_BANG_.call(null,G__8503);

return G__8503;
} else {
var G__8504 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8504));

return G__8504;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___8513 = arguments.length;
var i__6093__auto___8514 = (0);
while(true){
if((i__6093__auto___8514 < len__6092__auto___8513)){
args__6099__auto__.push((arguments[i__6093__auto___8514]));

var G__8515 = (i__6093__auto___8514 + (1));
i__6093__auto___8514 = G__8515;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8507){
var vec__8508 = p__8507;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8508,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8509 = cljs.core.seq.call(null,srcs);
var chunk__8510 = null;
var count__8511 = (0);
var i__8512 = (0);
while(true){
if((i__8512 < count__8511)){
var src = cljs.core._nth.call(null,chunk__8510,i__8512);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8516 = seq__8509;
var G__8517 = chunk__8510;
var G__8518 = count__8511;
var G__8519 = (i__8512 + (1));
seq__8509 = G__8516;
chunk__8510 = G__8517;
count__8511 = G__8518;
i__8512 = G__8519;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8509);
if(temp__4425__auto__){
var seq__8509__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8509__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__8509__$1);
var G__8520 = cljs.core.chunk_rest.call(null,seq__8509__$1);
var G__8521 = c__5837__auto__;
var G__8522 = cljs.core.count.call(null,c__5837__auto__);
var G__8523 = (0);
seq__8509 = G__8520;
chunk__8510 = G__8521;
count__8511 = G__8522;
i__8512 = G__8523;
continue;
} else {
var src = cljs.core.first.call(null,seq__8509__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8524 = cljs.core.next.call(null,seq__8509__$1);
var G__8525 = null;
var G__8526 = (0);
var G__8527 = (0);
seq__8509 = G__8524;
chunk__8510 = G__8525;
count__8511 = G__8526;
i__8512 = G__8527;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8505){
var G__8506 = cljs.core.first.call(null,seq8505);
var seq8505__$1 = cljs.core.next.call(null,seq8505);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8506,seq8505__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___8546 = arguments.length;
var i__6093__auto___8547 = (0);
while(true){
if((i__6093__auto___8547 < len__6092__auto___8546)){
args__6099__auto__.push((arguments[i__6093__auto___8547]));

var G__8548 = (i__6093__auto___8547 + (1));
i__6093__auto___8547 = G__8548;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8532){
var vec__8533 = p__8532;
var f = cljs.core.nth.call(null,vec__8533,(0),null);
var sources = cljs.core.nth.call(null,vec__8533,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8534_8549 = cljs.core.seq.call(null,this$.sources);
var chunk__8535_8550 = null;
var count__8536_8551 = (0);
var i__8537_8552 = (0);
while(true){
if((i__8537_8552 < count__8536_8551)){
var source_8553 = cljs.core._nth.call(null,chunk__8535_8550,i__8537_8552);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8553))){
source_8553.sinks = cljs.core.conj.call(null,source_8553.sinks,this$);

if((source_8553.rank > this$.rank)){
var seq__8538_8554 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8534_8549,chunk__8535_8550,count__8536_8551,i__8537_8552,source_8553,vec__8533,f,sources){
return (function (p1__8528_SHARP_){
return p1__8528_SHARP_.sinks;
});})(seq__8534_8549,chunk__8535_8550,count__8536_8551,i__8537_8552,source_8553,vec__8533,f,sources))
,source_8553));
var chunk__8539_8555 = null;
var count__8540_8556 = (0);
var i__8541_8557 = (0);
while(true){
if((i__8541_8557 < count__8540_8556)){
var dep_8558 = cljs.core._nth.call(null,chunk__8539_8555,i__8541_8557);
dep_8558.rank = javelin.core.next_rank.call(null);

var G__8559 = seq__8538_8554;
var G__8560 = chunk__8539_8555;
var G__8561 = count__8540_8556;
var G__8562 = (i__8541_8557 + (1));
seq__8538_8554 = G__8559;
chunk__8539_8555 = G__8560;
count__8540_8556 = G__8561;
i__8541_8557 = G__8562;
continue;
} else {
var temp__4425__auto___8563 = cljs.core.seq.call(null,seq__8538_8554);
if(temp__4425__auto___8563){
var seq__8538_8564__$1 = temp__4425__auto___8563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8538_8564__$1)){
var c__5837__auto___8565 = cljs.core.chunk_first.call(null,seq__8538_8564__$1);
var G__8566 = cljs.core.chunk_rest.call(null,seq__8538_8564__$1);
var G__8567 = c__5837__auto___8565;
var G__8568 = cljs.core.count.call(null,c__5837__auto___8565);
var G__8569 = (0);
seq__8538_8554 = G__8566;
chunk__8539_8555 = G__8567;
count__8540_8556 = G__8568;
i__8541_8557 = G__8569;
continue;
} else {
var dep_8570 = cljs.core.first.call(null,seq__8538_8564__$1);
dep_8570.rank = javelin.core.next_rank.call(null);

var G__8571 = cljs.core.next.call(null,seq__8538_8564__$1);
var G__8572 = null;
var G__8573 = (0);
var G__8574 = (0);
seq__8538_8554 = G__8571;
chunk__8539_8555 = G__8572;
count__8540_8556 = G__8573;
i__8541_8557 = G__8574;
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

var G__8575 = seq__8534_8549;
var G__8576 = chunk__8535_8550;
var G__8577 = count__8536_8551;
var G__8578 = (i__8537_8552 + (1));
seq__8534_8549 = G__8575;
chunk__8535_8550 = G__8576;
count__8536_8551 = G__8577;
i__8537_8552 = G__8578;
continue;
} else {
var temp__4425__auto___8579 = cljs.core.seq.call(null,seq__8534_8549);
if(temp__4425__auto___8579){
var seq__8534_8580__$1 = temp__4425__auto___8579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8534_8580__$1)){
var c__5837__auto___8581 = cljs.core.chunk_first.call(null,seq__8534_8580__$1);
var G__8582 = cljs.core.chunk_rest.call(null,seq__8534_8580__$1);
var G__8583 = c__5837__auto___8581;
var G__8584 = cljs.core.count.call(null,c__5837__auto___8581);
var G__8585 = (0);
seq__8534_8549 = G__8582;
chunk__8535_8550 = G__8583;
count__8536_8551 = G__8584;
i__8537_8552 = G__8585;
continue;
} else {
var source_8586 = cljs.core.first.call(null,seq__8534_8580__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8586))){
source_8586.sinks = cljs.core.conj.call(null,source_8586.sinks,this$);

if((source_8586.rank > this$.rank)){
var seq__8542_8587 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8534_8549,chunk__8535_8550,count__8536_8551,i__8537_8552,source_8586,seq__8534_8580__$1,temp__4425__auto___8579,vec__8533,f,sources){
return (function (p1__8528_SHARP_){
return p1__8528_SHARP_.sinks;
});})(seq__8534_8549,chunk__8535_8550,count__8536_8551,i__8537_8552,source_8586,seq__8534_8580__$1,temp__4425__auto___8579,vec__8533,f,sources))
,source_8586));
var chunk__8543_8588 = null;
var count__8544_8589 = (0);
var i__8545_8590 = (0);
while(true){
if((i__8545_8590 < count__8544_8589)){
var dep_8591 = cljs.core._nth.call(null,chunk__8543_8588,i__8545_8590);
dep_8591.rank = javelin.core.next_rank.call(null);

var G__8592 = seq__8542_8587;
var G__8593 = chunk__8543_8588;
var G__8594 = count__8544_8589;
var G__8595 = (i__8545_8590 + (1));
seq__8542_8587 = G__8592;
chunk__8543_8588 = G__8593;
count__8544_8589 = G__8594;
i__8545_8590 = G__8595;
continue;
} else {
var temp__4425__auto___8596__$1 = cljs.core.seq.call(null,seq__8542_8587);
if(temp__4425__auto___8596__$1){
var seq__8542_8597__$1 = temp__4425__auto___8596__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8542_8597__$1)){
var c__5837__auto___8598 = cljs.core.chunk_first.call(null,seq__8542_8597__$1);
var G__8599 = cljs.core.chunk_rest.call(null,seq__8542_8597__$1);
var G__8600 = c__5837__auto___8598;
var G__8601 = cljs.core.count.call(null,c__5837__auto___8598);
var G__8602 = (0);
seq__8542_8587 = G__8599;
chunk__8543_8588 = G__8600;
count__8544_8589 = G__8601;
i__8545_8590 = G__8602;
continue;
} else {
var dep_8603 = cljs.core.first.call(null,seq__8542_8597__$1);
dep_8603.rank = javelin.core.next_rank.call(null);

var G__8604 = cljs.core.next.call(null,seq__8542_8597__$1);
var G__8605 = null;
var G__8606 = (0);
var G__8607 = (0);
seq__8542_8587 = G__8604;
chunk__8543_8588 = G__8605;
count__8544_8589 = G__8606;
i__8545_8590 = G__8607;
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

var G__8608 = cljs.core.next.call(null,seq__8534_8580__$1);
var G__8609 = null;
var G__8610 = (0);
var G__8611 = (0);
seq__8534_8549 = G__8608;
chunk__8535_8550 = G__8609;
count__8536_8551 = G__8610;
i__8537_8552 = G__8611;
continue;
}
} else {
}
}
break;
}

var compute_8612 = ((function (vec__8533,f,sources){
return (function (p1__8529_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8529_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8529_SHARP_)));
});})(vec__8533,f,sources))
;
this$.thunk = ((function (compute_8612,vec__8533,f,sources){
return (function (){
return this$.state = compute_8612.call(null,this$.sources);
});})(compute_8612,vec__8533,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8530){
var G__8531 = cljs.core.first.call(null,seq8530);
var seq8530__$1 = cljs.core.next.call(null,seq8530);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8531,seq8530__$1);
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
var seq__8613 = cljs.core.seq.call(null,self__.watches);
var chunk__8614 = null;
var count__8615 = (0);
var i__8616 = (0);
while(true){
if((i__8616 < count__8615)){
var vec__8617 = cljs.core._nth.call(null,chunk__8614,i__8616);
var key = cljs.core.nth.call(null,vec__8617,(0),null);
var f = cljs.core.nth.call(null,vec__8617,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8619 = seq__8613;
var G__8620 = chunk__8614;
var G__8621 = count__8615;
var G__8622 = (i__8616 + (1));
seq__8613 = G__8619;
chunk__8614 = G__8620;
count__8615 = G__8621;
i__8616 = G__8622;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8613);
if(temp__4425__auto__){
var seq__8613__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8613__$1)){
var c__5837__auto__ = cljs.core.chunk_first.call(null,seq__8613__$1);
var G__8623 = cljs.core.chunk_rest.call(null,seq__8613__$1);
var G__8624 = c__5837__auto__;
var G__8625 = cljs.core.count.call(null,c__5837__auto__);
var G__8626 = (0);
seq__8613 = G__8623;
chunk__8614 = G__8624;
count__8615 = G__8625;
i__8616 = G__8626;
continue;
} else {
var vec__8618 = cljs.core.first.call(null,seq__8613__$1);
var key = cljs.core.nth.call(null,vec__8618,(0),null);
var f = cljs.core.nth.call(null,vec__8618,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8627 = cljs.core.next.call(null,seq__8613__$1);
var G__8628 = null;
var G__8629 = (0);
var G__8630 = (0);
seq__8613 = G__8627;
chunk__8614 = G__8628;
count__8615 = G__8629;
i__8616 = G__8630;
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
var G__8631__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__8631 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8632__i = 0, G__8632__a = new Array(arguments.length -  0);
while (G__8632__i < G__8632__a.length) {G__8632__a[G__8632__i] = arguments[G__8632__i + 0]; ++G__8632__i;}
  sources = new cljs.core.IndexedSeq(G__8632__a,0);
} 
return G__8631__delegate.call(this,sources);};
G__8631.cljs$lang$maxFixedArity = 0;
G__8631.cljs$lang$applyTo = (function (arglist__8633){
var sources = cljs.core.seq(arglist__8633);
return G__8631__delegate(sources);
});
G__8631.cljs$core$IFn$_invoke$arity$variadic = G__8631__delegate;
return G__8631;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args8634 = [];
var len__6092__auto___8642 = arguments.length;
var i__6093__auto___8643 = (0);
while(true){
if((i__6093__auto___8643 < len__6092__auto___8642)){
args8634.push((arguments[i__6093__auto___8643]));

var G__8644 = (i__6093__auto___8643 + (1));
i__6093__auto___8643 = G__8644;
continue;
} else {
}
break;
}

var G__8638 = args8634.length;
switch (G__8638) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6111__auto__ = (new cljs.core.IndexedSeq(args8634.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6111__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8639){
var map__8640 = p__8639;
var map__8640__$1 = ((((!((map__8640 == null)))?((((map__8640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8640):map__8640);
var meta = cljs.core.get.call(null,map__8640__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8635){
var G__8636 = cljs.core.first.call(null,seq8635);
var seq8635__$1 = cljs.core.next.call(null,seq8635);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8636,seq8635__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__8646_SHARP_){
var _STAR_tx_STAR_8649 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8646_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8649;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_8650 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8650;
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
var len__6092__auto___8657 = arguments.length;
var i__6093__auto___8658 = (0);
while(true){
if((i__6093__auto___8658 < len__6092__auto___8657)){
args__6099__auto__.push((arguments[i__6093__auto___8658]));

var G__8659 = (i__6093__auto___8658 + (1));
i__6093__auto___8658 = G__8659;
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
return (function (p1__8651_SHARP_,p2__8652_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8651_SHARP_,p2__8652_SHARP_),p2__8652_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8654_SHARP_,p2__8653_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8654_SHARP_,p2__8653_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8660__delegate = function (rest__8655_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8655_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8655_SHARP_);

return news;
};
var G__8660 = function (var_args){
var rest__8655_SHARP_ = null;
if (arguments.length > 0) {
var G__8661__i = 0, G__8661__a = new Array(arguments.length -  0);
while (G__8661__i < G__8661__a.length) {G__8661__a[G__8661__i] = arguments[G__8661__i + 0]; ++G__8661__i;}
  rest__8655_SHARP_ = new cljs.core.IndexedSeq(G__8661__a,0);
} 
return G__8660__delegate.call(this,rest__8655_SHARP_);};
G__8660.cljs$lang$maxFixedArity = 0;
G__8660.cljs$lang$applyTo = (function (arglist__8662){
var rest__8655_SHARP_ = cljs.core.seq(arglist__8662);
return G__8660__delegate(rest__8655_SHARP_);
});
G__8660.cljs$core$IFn$_invoke$arity$variadic = G__8660__delegate;
return G__8660;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8656){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8656));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8663_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8663_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8664_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__8664_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8669_8673 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8670_8674 = null;
var count__8671_8675 = (0);
var i__8672_8676 = (0);
while(true){
if((i__8672_8676 < count__8671_8675)){
var i_8677 = cljs.core._nth.call(null,chunk__8670_8674,i__8672_8676);
f__$1.call(null,ith_item__$1.call(null,i_8677));

var G__8678 = seq__8669_8673;
var G__8679 = chunk__8670_8674;
var G__8680 = count__8671_8675;
var G__8681 = (i__8672_8676 + (1));
seq__8669_8673 = G__8678;
chunk__8670_8674 = G__8679;
count__8671_8675 = G__8680;
i__8672_8676 = G__8681;
continue;
} else {
var temp__4425__auto___8682 = cljs.core.seq.call(null,seq__8669_8673);
if(temp__4425__auto___8682){
var seq__8669_8683__$1 = temp__4425__auto___8682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8669_8683__$1)){
var c__5837__auto___8684 = cljs.core.chunk_first.call(null,seq__8669_8683__$1);
var G__8685 = cljs.core.chunk_rest.call(null,seq__8669_8683__$1);
var G__8686 = c__5837__auto___8684;
var G__8687 = cljs.core.count.call(null,c__5837__auto___8684);
var G__8688 = (0);
seq__8669_8673 = G__8685;
chunk__8670_8674 = G__8686;
count__8671_8675 = G__8687;
i__8672_8676 = G__8688;
continue;
} else {
var i_8689 = cljs.core.first.call(null,seq__8669_8683__$1);
f__$1.call(null,ith_item__$1.call(null,i_8689));

var G__8690 = cljs.core.next.call(null,seq__8669_8683__$1);
var G__8691 = null;
var G__8692 = (0);
var G__8693 = (0);
seq__8669_8673 = G__8690;
chunk__8670_8674 = G__8691;
count__8671_8675 = G__8692;
i__8672_8676 = G__8693;
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
