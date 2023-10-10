// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,i){var m,a,l,u,d,o,h,f,g,j,p,v;if(m=0,a=0,p=0,v=0,arguments.length){if(!t(s))throw new TypeError(n("invalid argument. First argument must be a number. Value: `%s`.",s));if(!t(i))throw new TypeError(n("invalid argument. Second argument must be a number. Value: `%s`.",i));return h=s,f=i,c}return h=0,f=0,b;function b(t,n){var s;return 0===arguments.length?0===v?null:1===v?e(m)||e(a)?NaN:0:p/(v-1)/(g*j):(m+=(o=t-h)*(t-(h+=o/(v+=1))),a+=(u=n-(f+=(l=n-f)/v))*l,p+=o*u,v<2?e(m)||e(a)?NaN:0:(g=r(m/(s=v-1)),j=r(a/s),p/s/(g*j)))}function c(t,e){return 0===arguments.length?0===v?null:p/v/(g*j):(a+=(d=e-f)*d,p+=(o=t-h)*d,g=r((m+=o*o)/(v+=1)),j=r(a/v),p/v/(g*j))}}export{s as default};
//# sourceMappingURL=index.mjs.map