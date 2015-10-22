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

var G__9223 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__9221_SHARP_,p2__9222_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9221_SHARP_,p2__9222_SHARP_,p2__9222_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__9223;
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
}catch (e9225){if((e9225 instanceof Error)){
var _ = e9225;
return null;
} else {
throw e9225;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__9228 = c;
javelin.core.add_sync_BANG_(G__9228);

return G__9228;
} else {
var G__9229 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__9229));

return G__9229;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___9238 = arguments.length;
var i__6093__auto___9239 = (0);
while(true){
if((i__6093__auto___9239 < len__6092__auto___9238)){
args__6099__auto__.push((arguments[i__6093__auto___9239]));

var G__9240 = (i__6093__auto___9239 + (1));
i__6093__auto___9239 = G__9240;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9232){
var vec__9233 = p__9232;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9233,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9234 = cljs.core.seq(srcs);
var chunk__9235 = null;
var count__9236 = (0);
var i__9237 = (0);
while(true){
if((i__9237 < count__9236)){
var src = chunk__9235.cljs$core$IIndexed$_nth$arity$2(null,i__9237);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9241 = seq__9234;
var G__9242 = chunk__9235;
var G__9243 = count__9236;
var G__9244 = (i__9237 + (1));
seq__9234 = G__9241;
chunk__9235 = G__9242;
count__9236 = G__9243;
i__9237 = G__9244;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9234);
if(temp__4425__auto__){
var seq__9234__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9234__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__9234__$1);
var G__9245 = cljs.core.chunk_rest(seq__9234__$1);
var G__9246 = c__5837__auto__;
var G__9247 = cljs.core.count(c__5837__auto__);
var G__9248 = (0);
seq__9234 = G__9245;
chunk__9235 = G__9246;
count__9236 = G__9247;
i__9237 = G__9248;
continue;
} else {
var src = cljs.core.first(seq__9234__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9249 = cljs.core.next(seq__9234__$1);
var G__9250 = null;
var G__9251 = (0);
var G__9252 = (0);
seq__9234 = G__9249;
chunk__9235 = G__9250;
count__9236 = G__9251;
i__9237 = G__9252;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9230){
var G__9231 = cljs.core.first(seq9230);
var seq9230__$1 = cljs.core.next(seq9230);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9231,seq9230__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(){
var args__6099__auto__ = [];
var len__6092__auto___9271 = arguments.length;
var i__6093__auto___9272 = (0);
while(true){
if((i__6093__auto___9272 < len__6092__auto___9271)){
args__6099__auto__.push((arguments[i__6093__auto___9272]));

var G__9273 = (i__6093__auto___9272 + (1));
i__6093__auto___9272 = G__9273;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((1) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6100__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9257){
var vec__9258 = p__9257;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9258,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9258,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__9259_9274 = cljs.core.seq(this$.sources);
var chunk__9260_9275 = null;
var count__9261_9276 = (0);
var i__9262_9277 = (0);
while(true){
if((i__9262_9277 < count__9261_9276)){
var source_9278 = chunk__9260_9275.cljs$core$IIndexed$_nth$arity$2(null,i__9262_9277);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9278) : javelin.core.cell_QMARK_.call(null,source_9278)))){
source_9278.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9278.sinks,this$);

if((source_9278.rank > this$.rank)){
var seq__9263_9279 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__9259_9274,chunk__9260_9275,count__9261_9276,i__9262_9277,source_9278,vec__9258,f,sources){
return (function (p1__9253_SHARP_){
return p1__9253_SHARP_.sinks;
});})(seq__9259_9274,chunk__9260_9275,count__9261_9276,i__9262_9277,source_9278,vec__9258,f,sources))
,source_9278));
var chunk__9264_9280 = null;
var count__9265_9281 = (0);
var i__9266_9282 = (0);
while(true){
if((i__9266_9282 < count__9265_9281)){
var dep_9283 = chunk__9264_9280.cljs$core$IIndexed$_nth$arity$2(null,i__9266_9282);
dep_9283.rank = javelin.core.next_rank();

var G__9284 = seq__9263_9279;
var G__9285 = chunk__9264_9280;
var G__9286 = count__9265_9281;
var G__9287 = (i__9266_9282 + (1));
seq__9263_9279 = G__9284;
chunk__9264_9280 = G__9285;
count__9265_9281 = G__9286;
i__9266_9282 = G__9287;
continue;
} else {
var temp__4425__auto___9288 = cljs.core.seq(seq__9263_9279);
if(temp__4425__auto___9288){
var seq__9263_9289__$1 = temp__4425__auto___9288;
if(cljs.core.chunked_seq_QMARK_(seq__9263_9289__$1)){
var c__5837__auto___9290 = cljs.core.chunk_first(seq__9263_9289__$1);
var G__9291 = cljs.core.chunk_rest(seq__9263_9289__$1);
var G__9292 = c__5837__auto___9290;
var G__9293 = cljs.core.count(c__5837__auto___9290);
var G__9294 = (0);
seq__9263_9279 = G__9291;
chunk__9264_9280 = G__9292;
count__9265_9281 = G__9293;
i__9266_9282 = G__9294;
continue;
} else {
var dep_9295 = cljs.core.first(seq__9263_9289__$1);
dep_9295.rank = javelin.core.next_rank();

var G__9296 = cljs.core.next(seq__9263_9289__$1);
var G__9297 = null;
var G__9298 = (0);
var G__9299 = (0);
seq__9263_9279 = G__9296;
chunk__9264_9280 = G__9297;
count__9265_9281 = G__9298;
i__9266_9282 = G__9299;
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

var G__9300 = seq__9259_9274;
var G__9301 = chunk__9260_9275;
var G__9302 = count__9261_9276;
var G__9303 = (i__9262_9277 + (1));
seq__9259_9274 = G__9300;
chunk__9260_9275 = G__9301;
count__9261_9276 = G__9302;
i__9262_9277 = G__9303;
continue;
} else {
var temp__4425__auto___9304 = cljs.core.seq(seq__9259_9274);
if(temp__4425__auto___9304){
var seq__9259_9305__$1 = temp__4425__auto___9304;
if(cljs.core.chunked_seq_QMARK_(seq__9259_9305__$1)){
var c__5837__auto___9306 = cljs.core.chunk_first(seq__9259_9305__$1);
var G__9307 = cljs.core.chunk_rest(seq__9259_9305__$1);
var G__9308 = c__5837__auto___9306;
var G__9309 = cljs.core.count(c__5837__auto___9306);
var G__9310 = (0);
seq__9259_9274 = G__9307;
chunk__9260_9275 = G__9308;
count__9261_9276 = G__9309;
i__9262_9277 = G__9310;
continue;
} else {
var source_9311 = cljs.core.first(seq__9259_9305__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9311) : javelin.core.cell_QMARK_.call(null,source_9311)))){
source_9311.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9311.sinks,this$);

if((source_9311.rank > this$.rank)){
var seq__9267_9312 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__9259_9274,chunk__9260_9275,count__9261_9276,i__9262_9277,source_9311,seq__9259_9305__$1,temp__4425__auto___9304,vec__9258,f,sources){
return (function (p1__9253_SHARP_){
return p1__9253_SHARP_.sinks;
});})(seq__9259_9274,chunk__9260_9275,count__9261_9276,i__9262_9277,source_9311,seq__9259_9305__$1,temp__4425__auto___9304,vec__9258,f,sources))
,source_9311));
var chunk__9268_9313 = null;
var count__9269_9314 = (0);
var i__9270_9315 = (0);
while(true){
if((i__9270_9315 < count__9269_9314)){
var dep_9316 = chunk__9268_9313.cljs$core$IIndexed$_nth$arity$2(null,i__9270_9315);
dep_9316.rank = javelin.core.next_rank();

var G__9317 = seq__9267_9312;
var G__9318 = chunk__9268_9313;
var G__9319 = count__9269_9314;
var G__9320 = (i__9270_9315 + (1));
seq__9267_9312 = G__9317;
chunk__9268_9313 = G__9318;
count__9269_9314 = G__9319;
i__9270_9315 = G__9320;
continue;
} else {
var temp__4425__auto___9321__$1 = cljs.core.seq(seq__9267_9312);
if(temp__4425__auto___9321__$1){
var seq__9267_9322__$1 = temp__4425__auto___9321__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9267_9322__$1)){
var c__5837__auto___9323 = cljs.core.chunk_first(seq__9267_9322__$1);
var G__9324 = cljs.core.chunk_rest(seq__9267_9322__$1);
var G__9325 = c__5837__auto___9323;
var G__9326 = cljs.core.count(c__5837__auto___9323);
var G__9327 = (0);
seq__9267_9312 = G__9324;
chunk__9268_9313 = G__9325;
count__9269_9314 = G__9326;
i__9270_9315 = G__9327;
continue;
} else {
var dep_9328 = cljs.core.first(seq__9267_9322__$1);
dep_9328.rank = javelin.core.next_rank();

var G__9329 = cljs.core.next(seq__9267_9322__$1);
var G__9330 = null;
var G__9331 = (0);
var G__9332 = (0);
seq__9267_9312 = G__9329;
chunk__9268_9313 = G__9330;
count__9269_9314 = G__9331;
i__9270_9315 = G__9332;
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

var G__9333 = cljs.core.next(seq__9259_9305__$1);
var G__9334 = null;
var G__9335 = (0);
var G__9336 = (0);
seq__9259_9274 = G__9333;
chunk__9260_9275 = G__9334;
count__9261_9276 = G__9335;
i__9262_9277 = G__9336;
continue;
}
} else {
}
}
break;
}

var compute_9337 = ((function (vec__9258,f,sources){
return (function (p1__9254_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__9254_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__9254_SHARP_)));
});})(vec__9258,f,sources))
;
this$.thunk = ((function (compute_9337,vec__9258,f,sources){
return (function (){
return this$.state = compute_9337(this$.sources);
});})(compute_9337,vec__9258,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq9255){
var G__9256 = cljs.core.first(seq9255);
var seq9255__$1 = cljs.core.next(seq9255);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9256,seq9255__$1);
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
var G__9339 = this$__$1;
var G__9340 = (function (){var G__9341 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9341) : f.call(null,G__9341));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9339,G__9340) : cljs.core.reset_BANG_.call(null,G__9339,G__9340));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__9344 = this$__$1;
var G__9345 = (function (){var G__9346 = this$__$1.state;
var G__9347 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9346,G__9347) : f.call(null,G__9346,G__9347));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9344,G__9345) : cljs.core.reset_BANG_.call(null,G__9344,G__9345));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__9351 = this$__$1;
var G__9352 = (function (){var G__9353 = this$__$1.state;
var G__9354 = a;
var G__9355 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9353,G__9354,G__9355) : f.call(null,G__9353,G__9354,G__9355));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9351,G__9352) : cljs.core.reset_BANG_.call(null,G__9351,G__9352));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__9356 = this$__$1;
var G__9357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9356,G__9357) : cljs.core.reset_BANG_.call(null,G__9356,G__9357));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9358 = cljs.core.seq(self__.watches);
var chunk__9359 = null;
var count__9360 = (0);
var i__9361 = (0);
while(true){
if((i__9361 < count__9360)){
var vec__9362 = chunk__9359.cljs$core$IIndexed$_nth$arity$2(null,i__9361);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9362,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9362,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9364 = seq__9358;
var G__9365 = chunk__9359;
var G__9366 = count__9360;
var G__9367 = (i__9361 + (1));
seq__9358 = G__9364;
chunk__9359 = G__9365;
count__9360 = G__9366;
i__9361 = G__9367;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9358);
if(temp__4425__auto__){
var seq__9358__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9358__$1)){
var c__5837__auto__ = cljs.core.chunk_first(seq__9358__$1);
var G__9368 = cljs.core.chunk_rest(seq__9358__$1);
var G__9369 = c__5837__auto__;
var G__9370 = cljs.core.count(c__5837__auto__);
var G__9371 = (0);
seq__9358 = G__9368;
chunk__9359 = G__9369;
count__9360 = G__9370;
i__9361 = G__9371;
continue;
} else {
var vec__9363 = cljs.core.first(seq__9358__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9363,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9363,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9372 = cljs.core.next(seq__9358__$1);
var G__9373 = null;
var G__9374 = (0);
var G__9375 = (0);
seq__9358 = G__9372;
chunk__9359 = G__9373;
count__9360 = G__9374;
i__9361 = G__9375;
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
var G__9376__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__9376 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9377__i = 0, G__9377__a = new Array(arguments.length -  0);
while (G__9377__i < G__9377__a.length) {G__9377__a[G__9377__i] = arguments[G__9377__i + 0]; ++G__9377__i;}
  sources = new cljs.core.IndexedSeq(G__9377__a,0);
} 
return G__9376__delegate.call(this,sources);};
G__9376.cljs$lang$maxFixedArity = 0;
G__9376.cljs$lang$applyTo = (function (arglist__9378){
var sources = cljs.core.seq(arglist__9378);
return G__9376__delegate(sources);
});
G__9376.cljs$core$IFn$_invoke$arity$variadic = G__9376__delegate;
return G__9376;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(){
var args9379 = [];
var len__6092__auto___9387 = arguments.length;
var i__6093__auto___9388 = (0);
while(true){
if((i__6093__auto___9388 < len__6092__auto___9387)){
args9379.push((arguments[i__6093__auto___9388]));

var G__9389 = (i__6093__auto___9388 + (1));
i__6093__auto___9388 = G__9389;
continue;
} else {
}
break;
}

var G__9383 = args9379.length;
switch (G__9383) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6111__auto__ = (new cljs.core.IndexedSeq(args9379.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6111__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9384){
var map__9385 = p__9384;
var map__9385__$1 = ((((!((map__9385 == null)))?((((map__9385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9385):map__9385);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9385__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq9380){
var G__9381 = cljs.core.first(seq9380);
var seq9380__$1 = cljs.core.next(seq9380);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__9381,seq9380__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__9391_SHARP_){
var _STAR_tx_STAR_9395 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__9396 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9396) : cljs.core.atom.call(null,G__9396));
})();

try{return (p1__9391_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__9391_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__9391_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9395;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_9397 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9397;
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
var len__6092__auto___9405 = arguments.length;
var i__6093__auto___9406 = (0);
while(true){
if((i__6093__auto___9406 < len__6092__auto___9405)){
args__6099__auto__.push((arguments[i__6093__auto___9406]));

var G__9407 = (i__6093__auto___9406 + (1));
i__6093__auto___9406 = G__9407;
continue;
} else {
}
break;
}

var argseq__6100__auto__ = ((((0) < args__6099__auto__.length))?(new cljs.core.IndexedSeq(args__6099__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6100__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__9404 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9404) : cljs.core.atom.call(null,G__9404));
})();
var tag_neq = ((function (olds){
return (function (p1__9398_SHARP_,p2__9399_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9398_SHARP_,p2__9399_SHARP_),p2__9399_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9401_SHARP_,p2__9400_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9401_SHARP_,p2__9400_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9408__delegate = function (rest__9402_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__9402_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__9402_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__9402_SHARP_));

return news;
};
var G__9408 = function (var_args){
var rest__9402_SHARP_ = null;
if (arguments.length > 0) {
var G__9409__i = 0, G__9409__a = new Array(arguments.length -  0);
while (G__9409__i < G__9409__a.length) {G__9409__a[G__9409__i] = arguments[G__9409__i + 0]; ++G__9409__i;}
  rest__9402_SHARP_ = new cljs.core.IndexedSeq(G__9409__a,0);
} 
return G__9408__delegate.call(this,rest__9402_SHARP_);};
G__9408.cljs$lang$maxFixedArity = 0;
G__9408.cljs$lang$applyTo = (function (arglist__9410){
var rest__9402_SHARP_ = cljs.core.seq(arglist__9410);
return G__9408__delegate(rest__9402_SHARP_);
});
G__9408.cljs$core$IFn$_invoke$arity$variadic = G__9408__delegate;
return G__9408;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq9403){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9403));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9411_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__9411_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9412_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__9412_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9419_9425 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__9420_9426 = null;
var count__9421_9427 = (0);
var i__9422_9428 = (0);
while(true){
if((i__9422_9428 < count__9421_9427)){
var i_9429 = chunk__9420_9426.cljs$core$IIndexed$_nth$arity$2(null,i__9422_9428);
var G__9423_9430 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9429) : ith_item__$1.call(null,i_9429));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9423_9430) : f__$1.call(null,G__9423_9430));

var G__9431 = seq__9419_9425;
var G__9432 = chunk__9420_9426;
var G__9433 = count__9421_9427;
var G__9434 = (i__9422_9428 + (1));
seq__9419_9425 = G__9431;
chunk__9420_9426 = G__9432;
count__9421_9427 = G__9433;
i__9422_9428 = G__9434;
continue;
} else {
var temp__4425__auto___9435 = cljs.core.seq(seq__9419_9425);
if(temp__4425__auto___9435){
var seq__9419_9436__$1 = temp__4425__auto___9435;
if(cljs.core.chunked_seq_QMARK_(seq__9419_9436__$1)){
var c__5837__auto___9437 = cljs.core.chunk_first(seq__9419_9436__$1);
var G__9438 = cljs.core.chunk_rest(seq__9419_9436__$1);
var G__9439 = c__5837__auto___9437;
var G__9440 = cljs.core.count(c__5837__auto___9437);
var G__9441 = (0);
seq__9419_9425 = G__9438;
chunk__9420_9426 = G__9439;
count__9421_9427 = G__9440;
i__9422_9428 = G__9441;
continue;
} else {
var i_9442 = cljs.core.first(seq__9419_9436__$1);
var G__9424_9443 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9442) : ith_item__$1.call(null,i_9442));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9424_9443) : f__$1.call(null,G__9424_9443));

var G__9444 = cljs.core.next(seq__9419_9436__$1);
var G__9445 = null;
var G__9446 = (0);
var G__9447 = (0);
seq__9419_9425 = G__9444;
chunk__9420_9426 = G__9445;
count__9421_9427 = G__9446;
i__9422_9428 = G__9447;
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
