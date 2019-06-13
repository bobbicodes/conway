// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9500__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9501__i = 0, G__9501__a = new Array(arguments.length -  0);
while (G__9501__i < G__9501__a.length) {G__9501__a[G__9501__i] = arguments[G__9501__i + 0]; ++G__9501__i;}
  args = new cljs.core.IndexedSeq(G__9501__a,0,null);
} 
return G__9500__delegate.call(this,args);};
G__9500.cljs$lang$maxFixedArity = 0;
G__9500.cljs$lang$applyTo = (function (arglist__9502){
var args = cljs.core.seq(arglist__9502);
return G__9500__delegate(args);
});
G__9500.cljs$core$IFn$_invoke$arity$variadic = G__9500__delegate;
return G__9500;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9503__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9504__i = 0, G__9504__a = new Array(arguments.length -  0);
while (G__9504__i < G__9504__a.length) {G__9504__a[G__9504__i] = arguments[G__9504__i + 0]; ++G__9504__i;}
  args = new cljs.core.IndexedSeq(G__9504__a,0,null);
} 
return G__9503__delegate.call(this,args);};
G__9503.cljs$lang$maxFixedArity = 0;
G__9503.cljs$lang$applyTo = (function (arglist__9505){
var args = cljs.core.seq(arglist__9505);
return G__9503__delegate(args);
});
G__9503.cljs$core$IFn$_invoke$arity$variadic = G__9503__delegate;
return G__9503;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
