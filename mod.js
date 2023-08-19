// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,l=e.__defineSetter__,a=e.__lookupGetter__,u=e.__lookupSetter__;var i=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,i){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((f="value"in i)&&(a.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=i.value,t.__proto__=c):t[r]=i.value),p="get"in i,y="set"in i,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,i.get),y&&l&&l.call(t,r,i.set),t};function c(t,r,e){i(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var r,e,n,o,l;if(null==t)return b.call(t);e=t[v],l=v,r=null!=(o=t)&&_.call(o,l);try{t[v]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[v]=e:delete t[v],n}:function(t){return b.call(t)},m=Number,g=m.prototype.toString;var d=y();function h(t){return"object"==typeof t&&(t instanceof m||(d?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function j(t){return f(t)||h(t)}function w(t){return t!=t}c(j,"isPrimitive",f),c(j,"isObject",h);var S=Math.sqrt;function O(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function N(t,r){var e,n,o,l,a,u,i,c,p,y,b,_;if(e=0,n=0,b=0,_=0,arguments.length){if(!f(t))throw new TypeError(O("1JX49,Hq",t));if(!f(r))throw new TypeError(O("1JX4A,Hr",r));return i=t,c=r,s}return i=0,c=0,v;function v(t,r){var a;return 0===arguments.length?0===_?null:1===_?w(e)||w(n)?NaN:0:b/(_-1)/(p*y):(e+=(u=t-i)*(t-(i+=u/(_+=1))),n+=(l=r-(c+=(o=r-c)/_))*o,b+=u*l,_<2?w(e)||w(n)?NaN:0:(p=S(e/(a=_-1)),y=S(n/a),b/a/(p*y)))}function s(t,r){return 0===arguments.length?0===_?null:b/_/(p*y):(n+=(a=r-c)*a,b+=(u=t-i)*a,p=S((e+=u*u)/(_+=1)),y=S(n/_),b/_/(p*y))}}export{N as default};
//# sourceMappingURL=mod.js.map
