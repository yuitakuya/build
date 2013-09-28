goog.provide('pylon.classes');
goog.require('cljs.core');
pylon.classes.method_fn_name = (function method_fn_name(method_name){
return [cljs.core.str("__pylon$method$"),cljs.core.str(method_name)].join('');
});
pylon.classes.pylon_prop_QMARK_ = (function pylon_prop_QMARK_(prop){
return cljs.core._EQ_.call(null,"__pylon$",cljs.core.subs.call(null,prop,0,8));
});
pylon.classes.pylon_parent_proto = (function pylon_parent_proto(p){
var temp__4092__auto__ = (p["__pylon$superclass"]);
if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;
var temp__4092__auto____$1 = parent.prototype;
if(cljs.core.truth_(temp__4092__auto____$1))
{var proto = temp__4092__auto____$1;
if(cljs.core.truth_(proto.hasOwnProperty("__pylon$classname")))
{return proto;
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
pylon.classes.find_props = (function find_props(p){
var parent = pylon.classes.pylon_parent_proto.call(null,p);
var props = cljs.core.remove.call(null,pylon.classes.pylon_prop_QMARK_,Object.getOwnPropertyNames(p));
if(cljs.core.truth_(parent))
{return cljs.core.concat.call(null,props,find_props.call(null,parent));
} else
{return props;
}
});
pylon.classes.create_ctor = (function create_ctor(){
return (function() { 
var ctor__delegate = function (args){
var this$ = this;
var p_8516 = Object.getPrototypeOf(this$);
var superclass_8517 = (p_8516["__pylon$superclass"]);
var seq__8512_8518 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_set,pylon.classes.find_props.call(null,p_8516)));
var chunk__8513_8519 = null;
var count__8514_8520 = 0;
var i__8515_8521 = 0;
while(true){
if((i__8515_8521 < count__8514_8520))
{var bind_8522 = cljs.core._nth.call(null,chunk__8513_8519,i__8515_8521);
var func_8523 = (this$[bind_8522]);
if(cljs.core.fn_QMARK_.call(null,func_8523))
{(this$[bind_8522] = goog.bind(func_8523,this$));
} else
{}
{
var G__8524 = seq__8512_8518;
var G__8525 = chunk__8513_8519;
var G__8526 = count__8514_8520;
var G__8527 = (i__8515_8521 + 1);
seq__8512_8518 = G__8524;
chunk__8513_8519 = G__8525;
count__8514_8520 = G__8526;
i__8515_8521 = G__8527;
continue;
}
} else
{var temp__4092__auto___8528 = cljs.core.seq.call(null,seq__8512_8518);
if(temp__4092__auto___8528)
{var seq__8512_8529__$1 = temp__4092__auto___8528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8512_8529__$1))
{var c__8021__auto___8530 = cljs.core.chunk_first.call(null,seq__8512_8529__$1);
{
var G__8531 = cljs.core.chunk_rest.call(null,seq__8512_8529__$1);
var G__8532 = c__8021__auto___8530;
var G__8533 = cljs.core.count.call(null,c__8021__auto___8530);
var G__8534 = 0;
seq__8512_8518 = G__8531;
chunk__8513_8519 = G__8532;
count__8514_8520 = G__8533;
i__8515_8521 = G__8534;
continue;
}
} else
{var bind_8535 = cljs.core.first.call(null,seq__8512_8529__$1);
var func_8536 = (this$[bind_8535]);
if(cljs.core.fn_QMARK_.call(null,func_8536))
{(this$[bind_8535] = goog.bind(func_8536,this$));
} else
{}
{
var G__8537 = cljs.core.next.call(null,seq__8512_8529__$1);
var G__8538 = null;
var G__8539 = 0;
var G__8540 = 0;
seq__8512_8518 = G__8537;
chunk__8513_8519 = G__8538;
count__8514_8520 = G__8539;
i__8515_8521 = G__8540;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___8541 = this$.constructor;
if(cljs.core.truth_(temp__4092__auto___8541))
{var constructor_8542 = temp__4092__auto___8541;
constructor_8542.apply(this$,cljs.core.into_array.call(null,args));
} else
{}
return this$;
};
var ctor = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ctor__delegate.call(this, args);
};
ctor.cljs$lang$maxFixedArity = 0;
ctor.cljs$lang$applyTo = (function (arglist__8543){
var args = cljs.core.seq(arglist__8543);
return ctor__delegate(args);
});
ctor.cljs$core$IFn$_invoke$arity$variadic = ctor__delegate;
return ctor;
})()
;
});
pylon.classes.invoke_super = (function invoke_super(superclass,method,context,args){
var proto = superclass.prototype;
var foreign_QMARK_ = ((proto["__pylon$classname"]) == null);
var method_name = ((foreign_QMARK_)?method:pylon.classes.method_fn_name.call(null,method));
var args__$1 = ((foreign_QMARK_)?args:cljs.core.cons.call(null,context,args));
var super_method = (proto[method_name]);
var super_fn = (((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,method,"constructor");
if(and__3941__auto__)
{return cljs.core.not.call(null,super_method);
} else
{return and__3941__auto__;
}
})())?superclass:super_method);
var args__$2 = cljs.core.into_array.call(null,args__$1);
return super_fn.apply(context,args__$2);
});
pylon.classes.method_wrapper = (function method_wrapper(funcname){
return (function() { 
var G__8544__delegate = function (args){
var this$ = this;
return cljs.core.apply.call(null,(this$[funcname]),cljs.core.cons.call(null,this$,args));
};
var G__8544 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8544__delegate.call(this, args);
};
G__8544.cljs$lang$maxFixedArity = 0;
G__8544.cljs$lang$applyTo = (function (arglist__8545){
var args = cljs.core.seq(arglist__8545);
return G__8544__delegate(args);
});
G__8544.cljs$core$IFn$_invoke$arity$variadic = G__8544__delegate;
return G__8544;
})()
;
});
