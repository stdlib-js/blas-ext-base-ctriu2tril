"use strict";var j=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var R=j(function(er,F){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist'),_=require('@stdlib/strided-base-reinterpret-complex64/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist');function U(t,r,e,w,b,u,x,a,q,m,f){var v,s,n,o,c,y,h,p,g,d,i,l;if(v=_(w,0),s=_(a,0),n=b*2,o=u*2,c=q*2,y=m*2,h=x*2,p=f*2,K([b,u])){for(l=0;l<t;l++){for(i=P(0,l+e);i<r;i++)g=h+i*o,d=p+i*c,s[d]=v[g],s[d+1]=v[g+1];h+=n,p+=y}return a}for(l=0;l<r;l++){for(i=0;i<=Q(l-e,t-1);i++)g=h+i*n,d=p+i*y,s[d]=v[g],s[d+1]=v[g+1];h+=o,p+=c}return a}F.exports=U
});var T=j(function(ar,S){
var W=require('@stdlib/blas-base-layout-resolve-str/dist'),X=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),O=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),Y=R();function Z(t,r,e,w,b,u,x,a){var q,m,f,v,s,n,o,c;if(c=W(t),c===null)throw new TypeError(E('nullFx',t));if(q=X(c),q?(n=e,o=r):(n=r,o=e),u<O(1,n))throw new RangeError(E('nullJL',n,u));if(a<O(1,o))throw new RangeError(E('nullGM',o,a));return q?(m=u,f=1,v=a,s=1):(m=1,f=u,v=1,s=a),Y(r,e,w,b,m,f,0,x,v,s,0)}S.exports=Z
});var C=j(function(ir,z){
var $=R();function k(t,r,e,w,b,u,x,a,q,m,f){return $(t,r,e,w,b,u,x,a,q,m,f)}z.exports=k
});var I=j(function(tr,H){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=T(),N=C();M(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=I(),V,J=B(A(__dirname,"./native.js"));L(J)?V=D:V=J;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
