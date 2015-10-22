// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__12349 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__12347_SHARP_,p2__12348_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12347_SHARP_,p2__12348_SHARP_,p2__12348_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__12349;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e12351){if((e12351 instanceof Error)){
var _ = e12351;
return null;
} else {
throw e12351;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__12354 = c;
javelin.core.add_sync_BANG_(G__12354);

return G__12354;
} else {
var G__12355 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__12355));

return G__12355;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___12364 = arguments.length;
var i__6093__auto___12365 = (0);
while(true){
if((i__6093__auto___12365 < len__6092__auto___12364)){
args__6099__auto__.push((arguments[i__6093__auto___12365]));

var G__12366 = (i__6093__auto___12365 + (1));
i__6093__auto___12365 = G__12366;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12358){
var vec__12359 = p__12358;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12359,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12360 = cljs.core.seq(srcs);
var chunk__12361 = null;
var count__12362 = (0);
var i__12363 = (0);
while(true){
if((i__12363 < count__12362)){
var src = chunk__12361.cljs$core$IIndexed$_nth$arity$2(null,i__12363);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12367 = seq__12360;
var G__12368 = chunk__12361;
var G__12369 = count__12362;
var G__12370 = (i__12363 + (1));
seq__12360 = G__12367;
chunk__12361 = G__12368;
count__12362 = G__12369;
i__12363 = G__12370;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12360);
if(temp__4425__auto__){
var seq__12360__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12360__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__12360__$1);
var G__12371 = cljs.core.chunk_rest(seq__12360__$1);
var G__12372 = c__5837__auto__;
var G__12373 = cljs.core.count(c__5837__auto__);
var G__12374 = (0);
seq__12360 = G__12371;
chunk__12361 = G__12372;
count__12362 = G__12373;
i__12363 = G__12374;
continue;
} else {
var src = cljs.core.first(seq__12360__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12375 = cljs.core.next(seq__12360__$1);
var G__12376 = null;
var G__12377 = (0);
var G__12378 = (0);
seq__12360 = G__12375;
chunk__12361 = G__12376;
count__12362 = G__12377;
i__12363 = G__12378;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq12356){
var G__12357 = cljs.core.first(seq12356);
var seq12356__$1 = cljs.core.next(seq12356);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12357,seq12356__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___12397 = arguments.length;
var i__6093__auto___12398 = (0);
while(true){
if((i__6093__auto___12398 < len__6092__auto___12397)){
args__6099__auto__.push((arguments[i__6093__auto___12398]));

var G__12399 = (i__6093__auto___12398 + (1));
i__6093__auto___12398 = G__12399;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12383){
var vec__12384 = p__12383;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12384,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12384,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__12385_12400 = cljs.core.seq(this$.sources);
var chunk__12386_12401 = null;
var count__12387_12402 = (0);
var i__12388_12403 = (0);
while(true){
if((i__12388_12403 < count__12387_12402)){
var source_12404 = chunk__12386_12401.cljs$core$IIndexed$_nth$arity$2(null,i__12388_12403);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12404) : javelin.core.cell_QMARK_.call(null,source_12404)))){
source_12404.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12404.sinks,this$);

if((source_12404.rank > this$.rank)){
var seq__12389_12405 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12385_12400,chunk__12386_12401,count__12387_12402,i__12388_12403,source_12404,vec__12384,f,sources){
return (function (p1__12379_SHARP_){
return p1__12379_SHARP_.sinks;
});})(seq__12385_12400,chunk__12386_12401,count__12387_12402,i__12388_12403,source_12404,vec__12384,f,sources))
,source_12404));
var chunk__12390_12406 = null;
var count__12391_12407 = (0);
var i__12392_12408 = (0);
while(true){
if((i__12392_12408 < count__12391_12407)){
var dep_12409 = chunk__12390_12406.cljs$core$IIndexed$_nth$arity$2(null,i__12392_12408);
dep_12409.rank = javelin.core.next_rank();

var G__12410 = seq__12389_12405;
var G__12411 = chunk__12390_12406;
var G__12412 = count__12391_12407;
var G__12413 = (i__12392_12408 + (1));
seq__12389_12405 = G__12410;
chunk__12390_12406 = G__12411;
count__12391_12407 = G__12412;
i__12392_12408 = G__12413;
continue;
} else {
var temp__4425__auto___12414 = cljs.core.seq(seq__12389_12405);
if(temp__4425__auto___12414){
var seq__12389_12415__$1 = temp__4425__auto___12414;
if(cljs.core.chunked_seq_QMARK_(seq__12389_12415__$1)){
var c__5837__auto___12416 = cljs.core.chunk_first(seq__12389_12415__$1);
var G__12417 = cljs.core.chunk_rest(seq__12389_12415__$1);
var G__12418 = c__5837__auto___12416;
var G__12419 = cljs.core.count(c__5837__auto___12416);
var G__12420 = (0);
seq__12389_12405 = G__12417;
chunk__12390_12406 = G__12418;
count__12391_12407 = G__12419;
i__12392_12408 = G__12420;
continue;
} else {
var dep_12421 = cljs.core.first(seq__12389_12415__$1);
dep_12421.rank = javelin.core.next_rank();

var G__12422 = cljs.core.next(seq__12389_12415__$1);
var G__12423 = null;
var G__12424 = (0);
var G__12425 = (0);
seq__12389_12405 = G__12422;
chunk__12390_12406 = G__12423;
count__12391_12407 = G__12424;
i__12392_12408 = G__12425;
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

var G__12426 = seq__12385_12400;
var G__12427 = chunk__12386_12401;
var G__12428 = count__12387_12402;
var G__12429 = (i__12388_12403 + (1));
seq__12385_12400 = G__12426;
chunk__12386_12401 = G__12427;
count__12387_12402 = G__12428;
i__12388_12403 = G__12429;
continue;
} else {
var temp__4425__auto___12430 = cljs.core.seq(seq__12385_12400);
if(temp__4425__auto___12430){
var seq__12385_12431__$1 = temp__4425__auto___12430;
if(cljs.core.chunked_seq_QMARK_(seq__12385_12431__$1)){
var c__5837__auto___12432 = cljs.core.chunk_first(seq__12385_12431__$1);
var G__12433 = cljs.core.chunk_rest(seq__12385_12431__$1);
var G__12434 = c__5837__auto___12432;
var G__12435 = cljs.core.count(c__5837__auto___12432);
var G__12436 = (0);
seq__12385_12400 = G__12433;
chunk__12386_12401 = G__12434;
count__12387_12402 = G__12435;
i__12388_12403 = G__12436;
continue;
} else {
var source_12437 = cljs.core.first(seq__12385_12431__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12437) : javelin.core.cell_QMARK_.call(null,source_12437)))){
source_12437.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12437.sinks,this$);

if((source_12437.rank > this$.rank)){
var seq__12393_12438 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12385_12400,chunk__12386_12401,count__12387_12402,i__12388_12403,source_12437,seq__12385_12431__$1,temp__4425__auto___12430,vec__12384,f,sources){
return (function (p1__12379_SHARP_){
return p1__12379_SHARP_.sinks;
});})(seq__12385_12400,chunk__12386_12401,count__12387_12402,i__12388_12403,source_12437,seq__12385_12431__$1,temp__4425__auto___12430,vec__12384,f,sources))
,source_12437));
var chunk__12394_12439 = null;
var count__12395_12440 = (0);
var i__12396_12441 = (0);
while(true){
if((i__12396_12441 < count__12395_12440)){
var dep_12442 = chunk__12394_12439.cljs$core$IIndexed$_nth$arity$2(null,i__12396_12441);
dep_12442.rank = javelin.core.next_rank();

var G__12443 = seq__12393_12438;
var G__12444 = chunk__12394_12439;
var G__12445 = count__12395_12440;
var G__12446 = (i__12396_12441 + (1));
seq__12393_12438 = G__12443;
chunk__12394_12439 = G__12444;
count__12395_12440 = G__12445;
i__12396_12441 = G__12446;
continue;
} else {
var temp__4425__auto___12447__$1 = cljs.core.seq(seq__12393_12438);
if(temp__4425__auto___12447__$1){
var seq__12393_12448__$1 = temp__4425__auto___12447__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12393_12448__$1)){
var c__5837__auto___12449 = cljs.core.chunk_first(seq__12393_12448__$1);
var G__12450 = cljs.core.chunk_rest(seq__12393_12448__$1);
var G__12451 = c__5837__auto___12449;
var G__12452 = cljs.core.count(c__5837__auto___12449);
var G__12453 = (0);
seq__12393_12438 = G__12450;
chunk__12394_12439 = G__12451;
count__12395_12440 = G__12452;
i__12396_12441 = G__12453;
continue;
} else {
var dep_12454 = cljs.core.first(seq__12393_12448__$1);
dep_12454.rank = javelin.core.next_rank();

var G__12455 = cljs.core.next(seq__12393_12448__$1);
var G__12456 = null;
var G__12457 = (0);
var G__12458 = (0);
seq__12393_12438 = G__12455;
chunk__12394_12439 = G__12456;
count__12395_12440 = G__12457;
i__12396_12441 = G__12458;
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

var G__12459 = cljs.core.next(seq__12385_12431__$1);
var G__12460 = null;
var G__12461 = (0);
var G__12462 = (0);
seq__12385_12400 = G__12459;
chunk__12386_12401 = G__12460;
count__12387_12402 = G__12461;
i__12388_12403 = G__12462;
continue;
}
} else {
}
}
break;
}

var compute_12463 = ((function (vec__12384,f,sources){
return (function (p1__12380_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__12380_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__12380_SHARP_)));
});})(vec__12384,f,sources))
;
this$.thunk = ((function (compute_12463,vec__12384,f,sources){
return (function (){
return this$.state = compute_12463(this$.sources);
});})(compute_12463,vec__12384,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq12381){
var G__12382 = cljs.core.first(seq12381);
var seq12381__$1 = cljs.core.next(seq12381);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12382,seq12381__$1);
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
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
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
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__12465 = this$__$1;
var G__12466 = (function (){var G__12467 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12467) : f.call(null,G__12467));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12465,G__12466) : cljs.core.reset_BANG_.call(null,G__12465,G__12466));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__12470 = this$__$1;
var G__12471 = (function (){var G__12472 = this$__$1.state;
var G__12473 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12472,G__12473) : f.call(null,G__12472,G__12473));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12470,G__12471) : cljs.core.reset_BANG_.call(null,G__12470,G__12471));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__12477 = this$__$1;
var G__12478 = (function (){var G__12479 = this$__$1.state;
var G__12480 = a;
var G__12481 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12479,G__12480,G__12481) : f.call(null,G__12479,G__12480,G__12481));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12477,G__12478) : cljs.core.reset_BANG_.call(null,G__12477,G__12478));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__12482 = this$__$1;
var G__12483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12482,G__12483) : cljs.core.reset_BANG_.call(null,G__12482,G__12483));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__12484 = cljs.core.seq(self__.watches);
var chunk__12485 = null;
var count__12486 = (0);
var i__12487 = (0);
while(true){
if((i__12487 < count__12486)){
var vec__12488 = chunk__12485.cljs$core$IIndexed$_nth$arity$2(null,i__12487);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12488,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12488,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__12490 = seq__12484;
var G__12491 = chunk__12485;
var G__12492 = count__12486;
var G__12493 = (i__12487 + (1));
seq__12484 = G__12490;
chunk__12485 = G__12491;
count__12486 = G__12492;
i__12487 = G__12493;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12484);
if(temp__4425__auto__){
var seq__12484__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12484__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__12484__$1);
var G__12494 = cljs.core.chunk_rest(seq__12484__$1);
var G__12495 = c__5837__auto__;
var G__12496 = cljs.core.count(c__5837__auto__);
var G__12497 = (0);
seq__12484 = G__12494;
chunk__12485 = G__12495;
count__12486 = G__12496;
i__12487 = G__12497;
continue;
} else {
var vec__12489 = cljs.core.first(seq__12484__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12489,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12489,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__12498 = cljs.core.next(seq__12484__$1);
var G__12499 = null;
var G__12500 = (0);
var G__12501 = (0);
seq__12484 = G__12498;
chunk__12485 = G__12499;
count__12486 = G__12500;
i__12487 = G__12501;
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
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5632__auto__,writer__5633__auto__,opt__5634__auto__){
return cljs.core._write(writer__5633__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5041__auto__ = javelin.core.cell_QMARK_(c);
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
if(cljs.core.truth_((function (){var and__5041__auto__ = javelin.core.cell_QMARK_(c);
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
if(cljs.core.truth_((function (){var and__5041__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
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

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__12502__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__12502 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__12503__i = 0, G__12503__a = new Array(arguments.length -  0);
while (G__12503__i < G__12503__a.length) {G__12503__a[G__12503__i] = arguments[G__12503__i + 0]; ++G__12503__i;}
  sources = new cljs.core.IndexedSeq(G__12503__a,0);
} 
return G__12502__delegate.call(this,sources);};
G__12502.cljs$lang$maxFixedArity = 0;
G__12502.cljs$lang$applyTo = (function (arglist__12504){
var sources = cljs.core.seq(arglist__12504);
return G__12502__delegate(sources);
});
G__12502.cljs$core$IFn$_invoke$arity$variadic = G__12502__delegate;
return G__12502;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args12505 = [];
var len__6092__auto___12513 = arguments.length;
var i__6093__auto___12514 = (0);
while(true){
if((i__6093__auto___12514 < len__6092__auto___12513)){
args12505.push((arguments[i__6093__auto___12514]));

var G__12515 = (i__6093__auto___12514 + (1));
i__6093__auto___12514 = G__12515;
continue;
} else {
}
break;
}

var G__12509 = args12505.length;
switch (G__12509) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6111__auto__ = (new cljs.core.IndexedSeq(args12505.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6111__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__12510){
var map__12511 = p__12510;
var map__12511__$1 = ((((!((map__12511 == null)))?((((map__12511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12511):map__12511);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12511__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq12506){
var G__12507 = cljs.core.first(seq12506);
var seq12506__$1 = cljs.core.next(seq12506);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__12507,seq12506__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__12517_SHARP_){
var _STAR_tx_STAR_12521 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__12522 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12522) : cljs.core.atom.call(null,G__12522));
})();

try{return (p1__12517_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__12517_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__12517_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_12521;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_12523 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_12523;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___12531 = arguments.length;
var i__6093__auto___12532 = (0);
while(true){
if((i__6093__auto___12532 < len__6092__auto___12531)){
args__6099__auto__.push((arguments[i__6093__auto___12532]));

var G__12533 = (i__6093__auto___12532 + (1));
i__6093__auto___12532 = G__12533;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__12530 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12530) : cljs.core.atom.call(null,G__12530));
})();
var tag_neq = ((function (olds){
return (function (p1__12524_SHARP_,p2__12525_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__12524_SHARP_,p2__12525_SHARP_),p2__12525_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__12527_SHARP_,p2__12526_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__12527_SHARP_,p2__12526_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12534__delegate = function (rest__12528_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__12528_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__12528_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__12528_SHARP_));

return news;
};
var G__12534 = function (var_args){
var rest__12528_SHARP_ = null;
if (arguments.length > 0) {
var G__12535__i = 0, G__12535__a = new Array(arguments.length -  0);
while (G__12535__i < G__12535__a.length) {G__12535__a[G__12535__i] = arguments[G__12535__i + 0]; ++G__12535__i;}
  rest__12528_SHARP_ = new cljs.core.IndexedSeq(G__12535__a,0);
} 
return G__12534__delegate.call(this,rest__12528_SHARP_);};
G__12534.cljs$lang$maxFixedArity = 0;
G__12534.cljs$lang$applyTo = (function (arglist__12536){
var rest__12528_SHARP_ = cljs.core.seq(arglist__12536);
return G__12534__delegate(rest__12528_SHARP_);
});
G__12534.cljs$core$IFn$_invoke$arity$variadic = G__12534__delegate;
return G__12534;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq12529){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12529));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__12537_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__12537_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__12538_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__12538_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__12545_12551 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__12546_12552 = null;
var count__12547_12553 = (0);
var i__12548_12554 = (0);
while(true){
if((i__12548_12554 < count__12547_12553)){
var i_12555 = chunk__12546_12552.cljs$core$IIndexed$_nth$arity$2(null,i__12548_12554);
var G__12549_12556 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_12555) : ith_item__$1.call(null,i_12555));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12549_12556) : f__$1.call(null,G__12549_12556));

var G__12557 = seq__12545_12551;
var G__12558 = chunk__12546_12552;
var G__12559 = count__12547_12553;
var G__12560 = (i__12548_12554 + (1));
seq__12545_12551 = G__12557;
chunk__12546_12552 = G__12558;
count__12547_12553 = G__12559;
i__12548_12554 = G__12560;
continue;
} else {
var temp__4425__auto___12561 = cljs.core.seq(seq__12545_12551);
if(temp__4425__auto___12561){
var seq__12545_12562__$1 = temp__4425__auto___12561;
if(cljs.core.chunked_seq_QMARK_(seq__12545_12562__$1)){
var c__5837__auto___12563 = cljs.core.chunk_first(seq__12545_12562__$1);
var G__12564 = cljs.core.chunk_rest(seq__12545_12562__$1);
var G__12565 = c__5837__auto___12563;
var G__12566 = cljs.core.count(c__5837__auto___12563);
var G__12567 = (0);
seq__12545_12551 = G__12564;
chunk__12546_12552 = G__12565;
count__12547_12553 = G__12566;
i__12548_12554 = G__12567;
continue;
} else {
var i_12568 = cljs.core.first(seq__12545_12562__$1);
var G__12550_12569 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_12568) : ith_item__$1.call(null,i_12568));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12550_12569) : f__$1.call(null,G__12550_12569));

var G__12570 = cljs.core.next(seq__12545_12562__$1);
var G__12571 = null;
var G__12572 = (0);
var G__12573 = (0);
seq__12545_12551 = G__12570;
chunk__12546_12552 = G__12571;
count__12547_12553 = G__12572;
i__12548_12554 = G__12573;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
