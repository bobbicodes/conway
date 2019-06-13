// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('conway.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/conway/core.cljs. Go ahead and edit it and see reloading in action."], 0));
conway.core.multiply = (function conway$core$multiply(a,b){
return (a * b);
});
if((typeof conway !== 'undefined') && (typeof conway.core !== 'undefined') && (typeof conway.core.app_state !== 'undefined')){
} else {
conway.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Hello world!"], null));
}
conway.core.get_app_element = (function conway$core$get_app_element(){
return goog.dom.getElement("app");
});
conway.core.world_size = (10);
conway.core.lives = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)]));
conway.core.neighbors = (function conway$core$neighbors(p__10408){
var vec__10409 = p__10408;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10409,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10409,(1),null);
var iter__4324__auto__ = ((function (vec__10409,x,y){
return (function conway$core$neighbors_$_iter__10412(s__10413){
return (new cljs.core.LazySeq(null,((function (vec__10409,x,y){
return (function (){
var s__10413__$1 = s__10413;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10413__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var dx = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10413__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10409,x,y){
return (function conway$core$neighbors_$_iter__10412_$_iter__10414(s__10415){
return (new cljs.core.LazySeq(null,((function (s__10413__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10409,x,y){
return (function (){
var s__10415__$1 = s__10415;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10415__$1);
if(temp__5457__auto____$1){
var s__10415__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10415__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10415__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10417 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10416 = (0);
while(true){
if((i__10416 < size__4323__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10416);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),dx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dy], 0)))){
cljs.core.chunk_append(b__10417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));

var G__10418 = (i__10416 + (1));
i__10416 = G__10418;
continue;
} else {
var G__10419 = (i__10416 + (1));
i__10416 = G__10419;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10417),conway$core$neighbors_$_iter__10412_$_iter__10414(cljs.core.chunk_rest(s__10415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10417),null);
}
} else {
var dy = cljs.core.first(s__10415__$2);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),dx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dy], 0)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),conway$core$neighbors_$_iter__10412_$_iter__10414(cljs.core.rest(s__10415__$2)));
} else {
var G__10420 = cljs.core.rest(s__10415__$2);
s__10415__$1 = G__10420;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__10413__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10409,x,y))
,null,null));
});})(s__10413__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10409,x,y))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,conway$core$neighbors_$_iter__10412(cljs.core.rest(s__10413__$1)));
} else {
var G__10421 = cljs.core.rest(s__10413__$1);
s__10413__$1 = G__10421;
continue;
}
} else {
return null;
}
break;
}
});})(vec__10409,x,y))
,null,null));
});})(vec__10409,x,y))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
});
conway.core.step = (function conway$core$step(lives){
return cljs.core.set((function (){var iter__4324__auto__ = (function conway$core$step_$_iter__10422(s__10423){
return (new cljs.core.LazySeq(null,(function (){
var s__10423__$1 = s__10423;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10423__$1);
if(temp__5457__auto__){
var s__10423__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10423__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10423__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10425 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10424 = (0);
while(true){
if((i__10424 < size__4323__auto__)){
var vec__10426 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10424);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10426,(0),null);
var live_neighbors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10426,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),live_neighbors)) || (((cljs.core.contains_QMARK_(lives,pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),live_neighbors)))))){
cljs.core.chunk_append(b__10425,pos);

var G__10432 = (i__10424 + (1));
i__10424 = G__10432;
continue;
} else {
var G__10433 = (i__10424 + (1));
i__10424 = G__10433;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10425),conway$core$step_$_iter__10422(cljs.core.chunk_rest(s__10423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10425),null);
}
} else {
var vec__10429 = cljs.core.first(s__10423__$2);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10429,(0),null);
var live_neighbors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10429,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),live_neighbors)) || (((cljs.core.contains_QMARK_(lives,pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),live_neighbors)))))){
return cljs.core.cons(pos,conway$core$step_$_iter__10422(cljs.core.rest(s__10423__$2)));
} else {
var G__10434 = cljs.core.rest(s__10423__$2);
s__10423__$1 = G__10434;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(conway.core.neighbors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lives], 0))));
})());
});
conway.core.step_BANG_ = (function conway$core$step_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conway.core.lives,conway.core.step);
});
conway.core.rect_cell = (function conway$core$rect_cell(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect$cell,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x,(0.05 + x),cljs.core.cst$kw$width,0.9,cljs.core.cst$kw$y,(0.05 + y),cljs.core.cst$kw$height,0.9,cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$stroke_DASH_width,0.025,cljs.core.cst$kw$stroke,"black"], null)], null);
});
conway.core.dead = (function conway$core$dead(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,0.9,cljs.core.cst$kw$height,0.9,cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$x,(0.05 + x),cljs.core.cst$kw$y,(0.05 + y),cljs.core.cst$kw$on_DASH_click,(function conway$core$dead_$_click_square(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conway.core.lives,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null)], null);
});
conway.core.life = (function conway$core$life(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,0.9,cljs.core.cst$kw$height,0.9,cljs.core.cst$kw$fill,"purple",cljs.core.cst$kw$x,(0.05 + x),cljs.core.cst$kw$y,(0.05 + y),cljs.core.cst$kw$on_DASH_click,(function conway$core$life_$_click_square(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conway.core.lives,cljs.core.disj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null)], null);
});
conway.core.render_board = (function conway$core$render_board(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$board,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(conway.core.world_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(conway.core.world_size)].join(''),cljs.core.cst$kw$shape_DASH_rendering,"auto",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function conway$core$render_board_$_iter__10435(s__10436){
return (new cljs.core.LazySeq(null,(function (){
var s__10436__$1 = s__10436;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10436__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10436__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function conway$core$render_board_$_iter__10435_$_iter__10437(s__10438){
return (new cljs.core.LazySeq(null,((function (s__10436__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10438__$1 = s__10438;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10438__$1);
if(temp__5457__auto____$1){
var s__10438__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10438__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10438__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10440 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10439 = (0);
while(true){
if((i__10439 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10439);
cljs.core.chunk_append(b__10440,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.rect_cell,x,y], null),(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),cljs.core.deref(conway.core.lives)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.life,x,y], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.dead,x,y], null))], null));

var G__10441 = (i__10439 + (1));
i__10439 = G__10441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10440),conway$core$render_board_$_iter__10435_$_iter__10437(cljs.core.chunk_rest(s__10438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10440),null);
}
} else {
var y = cljs.core.first(s__10438__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.rect_cell,x,y], null),(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),cljs.core.deref(conway.core.lives)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.life,x,y], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.dead,x,y], null))], null),conway$core$render_board_$_iter__10435_$_iter__10437(cljs.core.rest(s__10438__$2)));
}
} else {
return null;
}
break;
}
});})(s__10436__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10436__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(conway.core.world_size)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,conway$core$render_board_$_iter__10435(cljs.core.rest(s__10436__$1)));
} else {
var G__10442 = cljs.core.rest(s__10436__$1);
s__10436__$1 = G__10442;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(conway.core.world_size));
})());
});
conway.core.game = (function conway$core$game(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Conway's Game of Life"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function conway$core$game_$_step_click(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conway.core.lives,conway.core.step);
})], null),"Step"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.render_board], null)], null)], null);
});
conway.core.mount = (function conway$core$mount(el){
var G__10443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conway.core.game], null);
var G__10444 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10443,G__10444) : reagent.core.render_component.call(null,G__10443,G__10444));
});
conway.core.mount_app_element = (function conway$core$mount_app_element(){
var temp__5457__auto__ = conway.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return conway.core.mount(el);
} else {
return null;
}
});
conway.core.mount_app_element();
conway.core.on_reload = (function conway$core$on_reload(){
return conway.core.mount_app_element();
});
