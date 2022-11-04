// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,l=r.__defineSetter__,i=r.__lookupGetter__,u=r.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var a,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(i.call(e,t)||u.call(e,t)?(a=e.__proto__,e.__proto__=r,delete e[t],e[t]=c.value,e.__proto__=a):e[t]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,c.get),y&&l&&l.call(e,t,c.set),e};function a(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(e){var t,r,n,o,l;if(null==e)return b.call(e);r=e[_],l=_,t=null!=(o=e)&&s.call(o,l);try{e[_]=void 0}catch(t){return b.call(e)}return n=b.call(e),t?e[_]=r:delete e[_],n}:function(e){return b.call(e)},m=Number,g=m.prototype.toString,v=y();function h(e){return"object"==typeof e&&(e instanceof m||(v?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function j(e){return f(e)||h(e)}function w(e){return e!=e}a(j,"isPrimitive",f),a(j,"isObject",h);var S=Math.sqrt;function O(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,t){var r,n,o,l,i,u,c,a,p,y,b,s;if(r=0,n=0,b=0,s=0,arguments.length){if(!f(e))throw new TypeError(O("0ef4M",e));if(!f(t))throw new TypeError(O("0ef4N",t));return c=e,a=t,d}return c=0,a=0,_;function _(e,t){var i;return 0===arguments.length?0===s?null:1===s?w(r)||w(n)?NaN:0:b/(s-1)/(p*y):(r+=(u=e-c)*(e-(c+=u/(s+=1))),n+=(l=t-(a+=(o=t-a)/s))*o,b+=u*l,s<2?w(r)||w(n)?NaN:0:(p=S(r/(i=s-1)),y=S(n/i),b/i/(p*y)))}function d(e,t){return 0===arguments.length?0===s?null:b/s/(p*y):(n+=(i=t-a)*i,b+=(u=e-c)*i,p=S((r+=u*u)/(s+=1)),y=S(n/s),b/s/(p*y))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).incrpcorr=t();
//# sourceMappingURL=index.js.map
