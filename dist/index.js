"use strict";var M=function(o,e){return function(){return e||o((e={exports:{}}).exports,e),e.exports}};var w=M(function(F,y){
var h=require('@stdlib/assert-is-number/dist').isPrimitive,d=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function T(o,e){var t,a,N,b,f,u,i,v,s,m,n,r;if(t=0,a=0,n=0,r=0,arguments.length){if(!h(o))throw new TypeError(p('1JX49',o));if(!h(e))throw new TypeError(p('1JX4A',e));return i=o,v=e,E}return i=0,v=0,x;function x(l,c){var g;return arguments.length===0?r===0?null:r===1?d(t)||d(a)?NaN:0:n/(r-1)/(s*m):(r+=1,u=l-i,i+=u/r,t+=u*(l-i),N=c-v,v+=N/r,b=c-v,a+=b*N,n+=u*b,r<2?d(t)||d(a)?NaN:0:(g=r-1,s=q(t/g),m=q(a/g),n/g/(s*m)))}function E(l,c){return arguments.length===0?r===0?null:n/r/(s*m):(r+=1,u=l-i,t+=u*u,f=c-v,a+=f*f,n+=u*f,s=q(t/r),m=q(a/r),n/r/(s*m))}}y.exports=T
});var V=w();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
