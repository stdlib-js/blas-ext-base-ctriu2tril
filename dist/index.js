"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var R=p(function(er,F){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist'),_=require('@stdlib/strided-base-reinterpret-complex64/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist');function U(e,r,a,w,c,u,x,i,m,l,f){var v,s,n,o,j,y,d,h,b,g,t,q;if(v=_(w,0),s=_(i,0),n=c*2,o=u*2,j=m*2,y=l*2,d=x*2,h=f*2,K([c,u])){for(q=0;q<e;q++){for(t=P(0,q+a);t<r;t++)b=d+t*o,g=h+t*j,s[g]=v[b],s[g+1]=v[b+1];d+=n,h+=y}return i}for(q=0;q<r;q++){for(t=0;t<=Q(q-a,e-1);t++)b=d+t*n,g=h+t*y,s[g]=v[b],s[g+1]=v[b+1];d+=o,h+=j}return i}F.exports=U
});var T=p(function(ar,S){
var W=require('@stdlib/blas-base-assert-is-layout/dist'),X=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),O=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),Y=R();function Z(e,r,a,w,c,u,x,i){var m,l,f,v,s,n,o;if(!W(e))throw new TypeError(E('nullFx',e));if(m=X(e),m?(n=a,o=r):(n=r,o=a),u<O(1,n))throw new RangeError(E('nullJL',n,u));if(i<O(1,o))throw new RangeError(E('nullGM',o,i));return m?(l=u,f=1,v=i,s=1):(l=1,f=u,v=1,s=i),Y(r,a,w,c,l,f,0,x,v,s,0)}S.exports=Z
});var C=p(function(ir,z){
var $=R();function k(e,r,a,w,c,u,x,i,m,l,f){return $(e,r,a,w,c,u,x,i,m,l,f)}z.exports=k
});var I=p(function(tr,H){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=T(),N=C();M(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=I(),V,J=B(A(__dirname,"./native.js"));L(J)?V=D:V=J;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
