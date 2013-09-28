goog.provide('build.core');
goog.require('cljs.core');
goog.require('pylon.classes');
var ctor8496_8497 = pylon.classes.create_ctor.call(null);
build.core.Hello = ctor8496_8497;
(ctor8496_8497.prototype["__pylon$classname"] = "build.core.Hello");
var func__8452__auto___8498 = (function constructor(this$,name){
var __pylon_method_name = "constructor";
var __pylon_prototype = build.core.Hello.prototype;
return this$.name = name;
});
(build.core.Hello.prototype["__pylon$method$constructor"] = func__8452__auto___8498);
build.core.Hello.prototype.constructor = pylon.classes.method_wrapper.call(null,"__pylon$method$constructor");
goog.exportProperty(build.core.Hello.prototype,"constructor",build.core.Hello.prototype.constructor);
var func__8452__auto___8499 = (function hello(this$){
var __pylon_method_name = "hello";
var __pylon_prototype = build.core.Hello.prototype;
return console.log.call(null,[cljs.core.str("Hello "),cljs.core.str(this$.name),cljs.core.str("!")].join(''));
});
(build.core.Hello.prototype["__pylon$method$hello"] = func__8452__auto___8499);
build.core.Hello.prototype.hello = pylon.classes.method_wrapper.call(null,"__pylon$method$hello");
goog.exportProperty(build.core.Hello.prototype,"hello",build.core.Hello.prototype.hello);
goog.exportSymbol("build.core.Hello",build.core.Hello);
(new build.core.Hello("Kitty")).hello();
