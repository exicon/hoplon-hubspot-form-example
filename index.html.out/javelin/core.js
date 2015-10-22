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

var G__9231 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__9229_SHARP_,p2__9230_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9229_SHARP_,p2__9230_SHARP_,p2__9230_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__9231;
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
}catch (e9233){if((e9233 instanceof Error)){
var _ = e9233;
return null;
} else {
throw e9233;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__9236 = c;
javelin.core.add_sync_BANG_(G__9236);

return G__9236;
} else {
var G__9237 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__9237));

return G__9237;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___9246 = arguments.length;
var i__6093__auto___9247 = (0);
while(true){
if((i__6093__auto___9247 < len__6092__auto___9246)){
args__6099__auto__.push((arguments[i__6093__auto___9247]));

var G__9248 = (i__6093__auto___9247 + (1));
i__6093__auto___9247 = G__9248;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9240){
var vec__9241 = p__9240;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9241,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9242 = cljs.core.seq(srcs);
var chunk__9243 = null;
var count__9244 = (0);
var i__9245 = (0);
while(true){
if((i__9245 < count__9244)){
var src = chunk__9243.cljs$core$IIndexed$_nth$arity$2(null,i__9245);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9249 = seq__9242;
var G__9250 = chunk__9243;
var G__9251 = count__9244;
var G__9252 = (i__9245 + (1));
seq__9242 = G__9249;
chunk__9243 = G__9250;
count__9244 = G__9251;
i__9245 = G__9252;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9242);
if(temp__4425__auto__){
var seq__9242__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9242__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__9242__$1);
var G__9253 = cljs.core.chunk_rest(seq__9242__$1);
var G__9254 = c__5837__auto__;
var G__9255 = cljs.core.count(c__5837__auto__);
var G__9256 = (0);
seq__9242 = G__9253;
chunk__9243 = G__9254;
count__9244 = G__9255;
i__9245 = G__9256;
continue;
} else {
var src = cljs.core.first(seq__9242__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9257 = cljs.core.next(seq__9242__$1);
var G__9258 = null;
var G__9259 = (0);
var G__9260 = (0);
seq__9242 = G__9257;
chunk__9243 = G__9258;
count__9244 = G__9259;
i__9245 = G__9260;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9238){
var G__9239 = cljs.core.first(seq9238);
var seq9238__$1 = cljs.core.next(seq9238);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9239,seq9238__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___9279 = arguments.length;
var i__6093__auto___9280 = (0);
while(true){
if((i__6093__auto___9280 < len__6092__auto___9279)){
args__6099__auto__.push((arguments[i__6093__auto___9280]));

var G__9281 = (i__6093__auto___9280 + (1));
i__6093__auto___9280 = G__9281;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9265){
var vec__9266 = p__9265;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9266,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9266,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__9267_9282 = cljs.core.seq(this$.sources);
var chunk__9268_9283 = null;
var count__9269_9284 = (0);
var i__9270_9285 = (0);
while(true){
if((i__9270_9285 < count__9269_9284)){
var source_9286 = chunk__9268_9283.cljs$core$IIndexed$_nth$arity$2(null,i__9270_9285);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9286) : javelin.core.cell_QMARK_.call(null,source_9286)))){
source_9286.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9286.sinks,this$);

if((source_9286.rank > this$.rank)){
var seq__9271_9287 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__9267_9282,chunk__9268_9283,count__9269_9284,i__9270_9285,source_9286,vec__9266,f,sources){
return (function (p1__9261_SHARP_){
return p1__9261_SHARP_.sinks;
});})(seq__9267_9282,chunk__9268_9283,count__9269_9284,i__9270_9285,source_9286,vec__9266,f,sources))
,source_9286));
var chunk__9272_9288 = null;
var count__9273_9289 = (0);
var i__9274_9290 = (0);
while(true){
if((i__9274_9290 < count__9273_9289)){
var dep_9291 = chunk__9272_9288.cljs$core$IIndexed$_nth$arity$2(null,i__9274_9290);
dep_9291.rank = javelin.core.next_rank();

var G__9292 = seq__9271_9287;
var G__9293 = chunk__9272_9288;
var G__9294 = count__9273_9289;
var G__9295 = (i__9274_9290 + (1));
seq__9271_9287 = G__9292;
chunk__9272_9288 = G__9293;
count__9273_9289 = G__9294;
i__9274_9290 = G__9295;
continue;
} else {
var temp__4425__auto___9296 = cljs.core.seq(seq__9271_9287);
if(temp__4425__auto___9296){
var seq__9271_9297__$1 = temp__4425__auto___9296;
if(cljs.core.chunked_seq_QMARK_(seq__9271_9297__$1)){
var c__5837__auto___9298 = cljs.core.chunk_first(seq__9271_9297__$1);
var G__9299 = cljs.core.chunk_rest(seq__9271_9297__$1);
var G__9300 = c__5837__auto___9298;
var G__9301 = cljs.core.count(c__5837__auto___9298);
var G__9302 = (0);
seq__9271_9287 = G__9299;
chunk__9272_9288 = G__9300;
count__9273_9289 = G__9301;
i__9274_9290 = G__9302;
continue;
} else {
var dep_9303 = cljs.core.first(seq__9271_9297__$1);
dep_9303.rank = javelin.core.next_rank();

var G__9304 = cljs.core.next(seq__9271_9297__$1);
var G__9305 = null;
var G__9306 = (0);
var G__9307 = (0);
seq__9271_9287 = G__9304;
chunk__9272_9288 = G__9305;
count__9273_9289 = G__9306;
i__9274_9290 = G__9307;
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

var G__9308 = seq__9267_9282;
var G__9309 = chunk__9268_9283;
var G__9310 = count__9269_9284;
var G__9311 = (i__9270_9285 + (1));
seq__9267_9282 = G__9308;
chunk__9268_9283 = G__9309;
count__9269_9284 = G__9310;
i__9270_9285 = G__9311;
continue;
} else {
var temp__4425__auto___9312 = cljs.core.seq(seq__9267_9282);
if(temp__4425__auto___9312){
var seq__9267_9313__$1 = temp__4425__auto___9312;
if(cljs.core.chunked_seq_QMARK_(seq__9267_9313__$1)){
var c__5837__auto___9314 = cljs.core.chunk_first(seq__9267_9313__$1);
var G__9315 = cljs.core.chunk_rest(seq__9267_9313__$1);
var G__9316 = c__5837__auto___9314;
var G__9317 = cljs.core.count(c__5837__auto___9314);
var G__9318 = (0);
seq__9267_9282 = G__9315;
chunk__9268_9283 = G__9316;
count__9269_9284 = G__9317;
i__9270_9285 = G__9318;
continue;
} else {
var source_9319 = cljs.core.first(seq__9267_9313__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9319) : javelin.core.cell_QMARK_.call(null,source_9319)))){
source_9319.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9319.sinks,this$);

if((source_9319.rank > this$.rank)){
var seq__9275_9320 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__9267_9282,chunk__9268_9283,count__9269_9284,i__9270_9285,source_9319,seq__9267_9313__$1,temp__4425__auto___9312,vec__9266,f,sources){
return (function (p1__9261_SHARP_){
return p1__9261_SHARP_.sinks;
});})(seq__9267_9282,chunk__9268_9283,count__9269_9284,i__9270_9285,source_9319,seq__9267_9313__$1,temp__4425__auto___9312,vec__9266,f,sources))
,source_9319));
var chunk__9276_9321 = null;
var count__9277_9322 = (0);
var i__9278_9323 = (0);
while(true){
if((i__9278_9323 < count__9277_9322)){
var dep_9324 = chunk__9276_9321.cljs$core$IIndexed$_nth$arity$2(null,i__9278_9323);
dep_9324.rank = javelin.core.next_rank();

var G__9325 = seq__9275_9320;
var G__9326 = chunk__9276_9321;
var G__9327 = count__9277_9322;
var G__9328 = (i__9278_9323 + (1));
seq__9275_9320 = G__9325;
chunk__9276_9321 = G__9326;
count__9277_9322 = G__9327;
i__9278_9323 = G__9328;
continue;
} else {
var temp__4425__auto___9329__$1 = cljs.core.seq(seq__9275_9320);
if(temp__4425__auto___9329__$1){
var seq__9275_9330__$1 = temp__4425__auto___9329__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9275_9330__$1)){
var c__5837__auto___9331 = cljs.core.chunk_first(seq__9275_9330__$1);
var G__9332 = cljs.core.chunk_rest(seq__9275_9330__$1);
var G__9333 = c__5837__auto___9331;
var G__9334 = cljs.core.count(c__5837__auto___9331);
var G__9335 = (0);
seq__9275_9320 = G__9332;
chunk__9276_9321 = G__9333;
count__9277_9322 = G__9334;
i__9278_9323 = G__9335;
continue;
} else {
var dep_9336 = cljs.core.first(seq__9275_9330__$1);
dep_9336.rank = javelin.core.next_rank();

var G__9337 = cljs.core.next(seq__9275_9330__$1);
var G__9338 = null;
var G__9339 = (0);
var G__9340 = (0);
seq__9275_9320 = G__9337;
chunk__9276_9321 = G__9338;
count__9277_9322 = G__9339;
i__9278_9323 = G__9340;
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

var G__9341 = cljs.core.next(seq__9267_9313__$1);
var G__9342 = null;
var G__9343 = (0);
var G__9344 = (0);
seq__9267_9282 = G__9341;
chunk__9268_9283 = G__9342;
count__9269_9284 = G__9343;
i__9270_9285 = G__9344;
continue;
}
} else {
}
}
break;
}

var compute_9345 = ((function (vec__9266,f,sources){
return (function (p1__9262_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__9262_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__9262_SHARP_)));
});})(vec__9266,f,sources))
;
this$.thunk = ((function (compute_9345,vec__9266,f,sources){
return (function (){
return this$.state = compute_9345(this$.sources);
});})(compute_9345,vec__9266,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq9263){
var G__9264 = cljs.core.first(seq9263);
var seq9263__$1 = cljs.core.next(seq9263);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9264,seq9263__$1);
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
var G__9347 = this$__$1;
var G__9348 = (function (){var G__9349 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9349) : f.call(null,G__9349));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9347,G__9348) : cljs.core.reset_BANG_.call(null,G__9347,G__9348));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__9352 = this$__$1;
var G__9353 = (function (){var G__9354 = this$__$1.state;
var G__9355 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9354,G__9355) : f.call(null,G__9354,G__9355));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9352,G__9353) : cljs.core.reset_BANG_.call(null,G__9352,G__9353));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__9359 = this$__$1;
var G__9360 = (function (){var G__9361 = this$__$1.state;
var G__9362 = a;
var G__9363 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9361,G__9362,G__9363) : f.call(null,G__9361,G__9362,G__9363));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9359,G__9360) : cljs.core.reset_BANG_.call(null,G__9359,G__9360));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__9364 = this$__$1;
var G__9365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9364,G__9365) : cljs.core.reset_BANG_.call(null,G__9364,G__9365));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9366 = cljs.core.seq(self__.watches);
var chunk__9367 = null;
var count__9368 = (0);
var i__9369 = (0);
while(true){
if((i__9369 < count__9368)){
var vec__9370 = chunk__9367.cljs$core$IIndexed$_nth$arity$2(null,i__9369);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9370,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9370,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9372 = seq__9366;
var G__9373 = chunk__9367;
var G__9374 = count__9368;
var G__9375 = (i__9369 + (1));
seq__9366 = G__9372;
chunk__9367 = G__9373;
count__9368 = G__9374;
i__9369 = G__9375;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9366);
if(temp__4425__auto__){
var seq__9366__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9366__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__9366__$1);
var G__9376 = cljs.core.chunk_rest(seq__9366__$1);
var G__9377 = c__5837__auto__;
var G__9378 = cljs.core.count(c__5837__auto__);
var G__9379 = (0);
seq__9366 = G__9376;
chunk__9367 = G__9377;
count__9368 = G__9378;
i__9369 = G__9379;
continue;
} else {
var vec__9371 = cljs.core.first(seq__9366__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9371,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9371,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9380 = cljs.core.next(seq__9366__$1);
var G__9381 = null;
var G__9382 = (0);
var G__9383 = (0);
seq__9366 = G__9380;
chunk__9367 = G__9381;
count__9368 = G__9382;
i__9369 = G__9383;
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
var G__9384__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__9384 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9385__i = 0, G__9385__a = new Array(arguments.length -  0);
while (G__9385__i < G__9385__a.length) {G__9385__a[G__9385__i] = arguments[G__9385__i + 0]; ++G__9385__i;}
  sources = new cljs.core.IndexedSeq(G__9385__a,0);
} 
return G__9384__delegate.call(this,sources);};
G__9384.cljs$lang$maxFixedArity = 0;
G__9384.cljs$lang$applyTo = (function (arglist__9386){
var sources = cljs.core.seq(arglist__9386);
return G__9384__delegate(sources);
});
G__9384.cljs$core$IFn$_invoke$arity$variadic = G__9384__delegate;
return G__9384;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args9387 = [];
var len__6092__auto___9395 = arguments.length;
var i__6093__auto___9396 = (0);
while(true){
if((i__6093__auto___9396 < len__6092__auto___9395)){
args9387.push((arguments[i__6093__auto___9396]));

var G__9397 = (i__6093__auto___9396 + (1));
i__6093__auto___9396 = G__9397;
continue;
} else {
}
break;
}

var G__9391 = args9387.length;
switch (G__9391) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6111__auto__ = (new cljs.core.IndexedSeq(args9387.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6111__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9392){
var map__9393 = p__9392;
var map__9393__$1 = ((((!((map__9393 == null)))?((((map__9393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9393):map__9393);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9393__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq9388){
var G__9389 = cljs.core.first(seq9388);
var seq9388__$1 = cljs.core.next(seq9388);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__9389,seq9388__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__9399_SHARP_){
var _STAR_tx_STAR_9403 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__9404 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9404) : cljs.core.atom.call(null,G__9404));
})();

try{return (p1__9399_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__9399_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__9399_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9403;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_9405 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9405;
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
var len__6092__auto___9413 = arguments.length;
var i__6093__auto___9414 = (0);
while(true){
if((i__6093__auto___9414 < len__6092__auto___9413)){
args__6099__auto__.push((arguments[i__6093__auto___9414]));

var G__9415 = (i__6093__auto___9414 + (1));
i__6093__auto___9414 = G__9415;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__9412 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9412) : cljs.core.atom.call(null,G__9412));
})();
var tag_neq = ((function (olds){
return (function (p1__9406_SHARP_,p2__9407_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9406_SHARP_,p2__9407_SHARP_),p2__9407_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9409_SHARP_,p2__9408_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9409_SHARP_,p2__9408_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9416__delegate = function (rest__9410_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__9410_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__9410_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__9410_SHARP_));

return news;
};
var G__9416 = function (var_args){
var rest__9410_SHARP_ = null;
if (arguments.length > 0) {
var G__9417__i = 0, G__9417__a = new Array(arguments.length -  0);
while (G__9417__i < G__9417__a.length) {G__9417__a[G__9417__i] = arguments[G__9417__i + 0]; ++G__9417__i;}
  rest__9410_SHARP_ = new cljs.core.IndexedSeq(G__9417__a,0);
} 
return G__9416__delegate.call(this,rest__9410_SHARP_);};
G__9416.cljs$lang$maxFixedArity = 0;
G__9416.cljs$lang$applyTo = (function (arglist__9418){
var rest__9410_SHARP_ = cljs.core.seq(arglist__9418);
return G__9416__delegate(rest__9410_SHARP_);
});
G__9416.cljs$core$IFn$_invoke$arity$variadic = G__9416__delegate;
return G__9416;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq9411){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9411));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9419_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__9419_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9420_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__9420_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9427_9433 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__9428_9434 = null;
var count__9429_9435 = (0);
var i__9430_9436 = (0);
while(true){
if((i__9430_9436 < count__9429_9435)){
var i_9437 = chunk__9428_9434.cljs$core$IIndexed$_nth$arity$2(null,i__9430_9436);
var G__9431_9438 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9437) : ith_item__$1.call(null,i_9437));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9431_9438) : f__$1.call(null,G__9431_9438));

var G__9439 = seq__9427_9433;
var G__9440 = chunk__9428_9434;
var G__9441 = count__9429_9435;
var G__9442 = (i__9430_9436 + (1));
seq__9427_9433 = G__9439;
chunk__9428_9434 = G__9440;
count__9429_9435 = G__9441;
i__9430_9436 = G__9442;
continue;
} else {
var temp__4425__auto___9443 = cljs.core.seq(seq__9427_9433);
if(temp__4425__auto___9443){
var seq__9427_9444__$1 = temp__4425__auto___9443;
if(cljs.core.chunked_seq_QMARK_(seq__9427_9444__$1)){
var c__5837__auto___9445 = cljs.core.chunk_first(seq__9427_9444__$1);
var G__9446 = cljs.core.chunk_rest(seq__9427_9444__$1);
var G__9447 = c__5837__auto___9445;
var G__9448 = cljs.core.count(c__5837__auto___9445);
var G__9449 = (0);
seq__9427_9433 = G__9446;
chunk__9428_9434 = G__9447;
count__9429_9435 = G__9448;
i__9430_9436 = G__9449;
continue;
} else {
var i_9450 = cljs.core.first(seq__9427_9444__$1);
var G__9432_9451 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9450) : ith_item__$1.call(null,i_9450));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9432_9451) : f__$1.call(null,G__9432_9451));

var G__9452 = cljs.core.next(seq__9427_9444__$1);
var G__9453 = null;
var G__9454 = (0);
var G__9455 = (0);
seq__9427_9433 = G__9452;
chunk__9428_9434 = G__9453;
count__9429_9435 = G__9454;
i__9430_9436 = G__9455;
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
