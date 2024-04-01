// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n,i){var m,o,d,l,f,h,a,u,p,j,v,c;if(m=0,o=0,v=0,c=0,arguments.length){if(!r(n))throw new TypeError(s("1JX49",n));if(!r(i))throw new TypeError(s("1JX4A",i));return a=n,u=i,function(r,t){if(0===arguments.length)return 0===c?null:v/c/(p*j);return o+=(f=t-u)*f,v+=(h=r-a)*f,p=e((m+=h*h)/(c+=1)),j=e(o/c),v/c/(p*j)}}return a=0,u=0,function(r,s){var n;if(0===arguments.length)return 0===c?null:1===c?t(m)||t(o)?NaN:0:v/(c-1)/(p*j);if(m+=(h=r-a)*(r-(a+=h/(c+=1))),o+=(l=s-(u+=(d=s-u)/c))*d,v+=h*l,c<2)return t(m)||t(o)?NaN:0;return p=e(m/(n=c-1)),j=e(o/n),v/n/(p*j)}}export{n as default};
//# sourceMappingURL=index.mjs.map
