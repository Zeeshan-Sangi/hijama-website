import{L as t,q as e,F as n,t as r,u as s,e as i,v as o,l as a,w as u,i as c,S as l,h,C as d,r as f,x as m,y as g,z as p}from"./index.esm2017-4c4fc609.js";var y,v,w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=n+(o<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(e=n+((o=e+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(e^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function r(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var r=e-this.blockSize,s=this.B,i=this.h,o=0;o<e;){if(0==i)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(s[i++]=t.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<e;)if(s[i++]=t[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var s={};function i(t){return-128<=t&&128>t?function(t,e){var n=s;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new r([0|t],0>t?-1:0)}):new r([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=4294967296;return new r(e,0)}var a=i(0),u=i(1),c=i(16777216);function l(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function h(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new r(n,~t.h).add(u)}function f(t,e){return t.add(d(e))}function m(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function p(t,e){if(l(e))throw Error("division by zero");if(l(t))return new g(a,a);if(h(t))return e=p(d(t),e),new g(d(e.g),d(e.h));if(h(e))return e=p(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(h(t)||h(e))throw Error("slowDivide_ only works with positive integers.");for(var n=u,r=e;0>=r.l(t);)n=w(n),r=w(r);var s=I(n,1),i=I(r,1);for(r=I(r,2),n=I(n,2);!l(r);){var c=i.add(r);0>=c.l(t)&&(s=s.add(n),i=c),r=I(r,1),n=I(n,1)}return e=f(t,s.j(e)),new g(s,e)}for(s=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(i=o(n)).j(e);h(c)||0<c.l(t);)c=(i=o(n-=r)).j(e);l(i)&&(i=u),s=s.add(i),t=f(t,c)}return new g(s,t)}function w(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.i(s)<<1|t.i(s-1)>>>31;return new r(n,t.h)}function I(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],o=0;o<s;o++)i[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new r(i,t.h)}(t=r.prototype).m=function(){if(h(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(l(this))return"0";if(h(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,r="";;){var s=p(n,e).g,i=((0<(n=f(n,s.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(l(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return h(t=f(this,t))?-1:l(t)?0:1},t.abs=function(){return h(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var o=s+(65535&this.i(i))+(65535&t.i(i)),a=(o>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);s=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(l(this)||l(t))return a;if(h(this))return h(t)?d(this).j(d(t)):d(d(this).j(t));if(h(t))return d(this.j(d(t)));if(0>this.l(c)&&0>t.l(c))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var u=this.i(s)>>>16,f=65535&this.i(s),g=t.i(i)>>>16,p=65535&t.i(i);n[2*s+2*i]+=f*p,m(n,2*s+2*i),n[2*s+2*i+1]+=u*p,m(n,2*s+2*i+1),n[2*s+2*i+1]+=f*g,m(n,2*s+2*i+1),n[2*s+2*i+2]+=u*g,m(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new r(n,0)},t.A=function(t){return p(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.i(s)&t.i(s);return new r(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.i(s)|t.i(s);return new r(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.i(s)^t.i(s);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,v=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),s=a,i=0;i<e.length;i+=8){var u=Math.min(8,e.length-i),c=parseInt(e.substring(i,i+u),n);8>u?(u=o(Math.pow(n,u)),s=s.j(u).add(o(c))):s=(s=s.j(r)).add(o(c))}return s},y=r}).apply(void 0!==w?w:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var I,b,_,T,E,S,x,C,D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof D&&D];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,r){if(r)t:{var s=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}(r=r(i=s[t=t[t.length-1]]))!=i&&null!=r&&e(s,t,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,s={next:function(){if(!r&&n<t.length){var s=n++;return{value:e(s,t[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}(this,function(t,e){return e})}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},s=this||self;function i(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function c(t,e,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:u).apply(null,arguments)}function l(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(i(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function m(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=s.navigator;return t&&(t=t.userAgent)?t:""}function p(t){return p[" "](t),t}p[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<A.length;e++)n=A[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function k(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function R(t){s.setTimeout(()=>{throw t},0)}function M(){var t=V;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var O=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new P,t=>t.reset());class P{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let L,F=!1,V=new class{constructor(){this.h=this.g=null}add(t,e){const n=O.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},U=()=>{const t=s.Promise.resolve(void 0);L=()=>{t.then(q)}};var q=()=>{for(var t;t=M();){try{t.h.call(t.g)}catch(n){R(n)}var e=O;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}F=!1};function B(){this.s=this.s,this.C=this.C}function z(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},z.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};s.addEventListener("test",t,e),s.removeEventListener("test",t,e)}catch(n){}return t}();function K(t,e){if(z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{p(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:G[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&K.aa.h.call(this)}}h(K,z);var G={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),Q=0;function H(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++Q,this.da=this.fa=!1}function W(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function J(t){this.src=t,this.g={},this.h=0}function Y(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(W(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function X(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}J.prototype.add=function(t,e,n,r,s){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=X(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new H(e,this.src,i,!!r,s)).fa=n,t.push(e)),e};var Z="closure_lm_"+(1e6*Math.random()|0),tt={};function et(t,e,n,r,s){if(r&&r.once)return rt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)et(t,e[i],n,r,s);return null}return n=lt(n),t&&t[$]?t.K(e,n,o(r)?!!r.capture:!!r,s):nt(t,e,n,!1,r,s)}function nt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var a=o(s)?!!s.capture:!!s,u=ut(t);if(u||(t[Z]=u=new J(t)),(n=u.add(e,n,r,a,i)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=at;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)j||(s=a),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ot(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function rt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rt(t,e[i],n,r,s);return null}return n=lt(n),t&&t[$]?t.L(e,n,o(r)?!!r.capture:!!r,s):nt(t,e,n,!0,r,s)}function st(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)st(t,e[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=lt(n),t&&t[$]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=X(i=t.g[e],n,r,s))&&(W(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=ut(t))&&(e=t.g[e.toString()],t=-1,e&&(t=X(e,n,r,s)),(n=-1<t?e[t]:null)&&it(n))}function it(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[$])Y(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ot(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ut(e))?(Y(n,t),0==n.h&&(n.src=null,e[Z]=null)):W(t)}}}function ot(t){return t in tt?tt[t]:tt[t]="on"+t}function at(t,e){if(t.da)t=!0;else{e=new K(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&it(t),t=n.call(r,e)}return t}function ut(t){return(t=t[Z])instanceof J?t:null}var ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function lt(t){return"function"==typeof t?t:(t[ct]||(t[ct]=function(e){return t.handleEvent(e)}),t[ct])}function ht(){B.call(this),this.i=new J(this),this.M=this,this.F=null}function dt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new z(e,t);else if(e instanceof z)e.target=e.target||t;else{var s=e;N(e=new z(r,t),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ft(o,r,!0,e)&&s}if(s=ft(o=e.g=t,r,!0,e)&&s,s=ft(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)s=ft(o=e.g=n[i],r,!1,e)&&s}function ft(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.da&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.fa&&Y(t.i,o),s=!1!==a.call(u,r)&&s}}return s&&!r.defaultPrevented}function mt(t,e,n){if("function"==typeof t)n&&(t=c(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return 2147483647<Number(e)?-1:s.setTimeout(t,e||0)}function gt(t){t.g=mt(()=>{t.g=null,t.i&&(t.i=!1,gt(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(ht,B),ht.prototype[$]=!0,ht.prototype.removeEventListener=function(t,e,n,r){st(this,t,e,n,r)},ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)W(n[r]);delete e.g[t],e.h--}}this.F=null},ht.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ht.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class pt extends B{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(t){B.call(this),this.h=t,this.g={}}h(yt,B);var vt=[];function wt(t){v(t.g,function(t,e){this.g.hasOwnProperty(e)&&it(t)},t),t.g={}}yt.prototype.N=function(){yt.aa.N.call(this),wt(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var It=s.JSON.stringify,bt=s.JSON.parse,_t=class{stringify(t){return s.JSON.stringify(t,void 0)}parse(t){return s.JSON.parse(t,void 0)}};function Tt(){}function Et(t){return t.h||(t.h=t.i())}function St(){}Tt.prototype.h=null;var xt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ct(){z.call(this,"d")}function Dt(){z.call(this,"c")}h(Ct,z),h(Dt,z);var At={},Nt=null;function kt(){return Nt=Nt||new ht}function Rt(t){z.call(this,At.La,t)}function Mt(t){const e=kt();dt(e,new Rt(e))}function Ot(t,e){z.call(this,At.STAT_EVENT,t),this.stat=e}function Pt(t){const e=kt();dt(e,new Ot(e,t))}function Lt(t,e){z.call(this,At.Ma,t),this.size=e}function Ft(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){t()},e)}function Vt(){this.g=!0}function Ut(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return It(n)}catch(a){return e}}(t,n)+(r?" "+r:"")})}At.La="serverreachability",h(Rt,z),At.STAT_EVENT="statevent",h(Ot,z),At.Ma="timingevent",h(Lt,z),Vt.prototype.xa=function(){this.g=!1},Vt.prototype.info=function(){};var qt,Bt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function jt(){}function Kt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gt}function Gt(){this.i=null,this.g="",this.h=!1}h(jt,Tt),jt.prototype.g=function(){return new XMLHttpRequest},jt.prototype.i=function(){return{}},qt=new jt;var $t={},Qt={};function Ht(t,e,n){t.L=1,t.v=Ie(ge(e)),t.m=n,t.P=!0,Wt(t,null)}function Wt(t,e){t.F=Date.now(),Xt(t),t.A=ge(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Oe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Gt,t.g=_n(t.j,n?e:null,!t.m),0<t.O&&(t.M=new pt(c(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(vt[0]=s.toString()),s=vt);for(var i=0;i<s.length;i++){var o=et(n,s[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Mt(),function(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.u,t.A,t.l,t.R,t.m)}function Jt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function Yt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Qt:(n=Number(e.substring(n,r)),isNaN(n)?$t:(r+=1)+n>e.length?Qt:(e=e.slice(r,r+n),t.C=r+n,e))}function Xt(t){t.S=Date.now()+t.I,Zt(t,t.I)}function Zt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ft(c(t.ba,t),e)}function te(t){t.B&&(s.clearTimeout(t.B),t.B=null)}function ee(t){0==t.j.G||t.J||yn(t.j,t)}function ne(t){te(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,wt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function re(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||ue(n.h,t)))if(!t.K&&ue(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;pn(n),on(n)}fn(n),Pt(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ft(c(n.Za,n),6e3));if(1>=ae(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else wn(n,11)}else if((t.K||n.g==t)&&pn(n),!m(e))for(s=n.Da.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const e=c[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const s=c[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ce(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,we(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((r=n).qa=bn(r,r.J?r.ia:null,r.W),o.K){le(r.h,o);var a=o,u=r.L;u&&(a.I=u),a.B&&(te(a),Xt(a)),r.g=o}else dn(r);0<n.i.length&&un(n)}else"stop"!=c[0]&&"close"!=c[0]||wn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?wn(n,7):sn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Mt()}catch(l){}}Kt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==tn(t)?e.j():this.Y(t)},Kt.prototype.Y=function(t){try{if(t==this.g)t:{const d=tn(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||en(this.g)))){this.J||4!=d||7==e||Mt(),te(this);var n=this.g.Z();this.X=n;e:if(Jt(this)){var r=en(this.g);t="";var i=r.length,o=4==tn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ne(this),ee(this);var a="";break e}this.h.i=new s.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o})}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(u)){var l=u;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,Pt(12),ne(this),ee(this);break t}Ut(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,re(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=Yt(this,a),t==Qt){4==d&&(this.s=4,Pt(14),n=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}if(t==$t){this.s=4,Pt(15),Ut(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ut(this.i,this.l,t,null),re(this,t)}if(Jt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Pt(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),mn(h),h.M=!0,Pt(11))}}else Ut(this.i,this.l,a,"[Invalid Chunked Response]"),ne(this),ee(this)}else Ut(this.i,this.l,a,null),re(this,a);4==d&&ne(this),this.o&&!this.J&&(4==d?yn(this.j,this):(this.o=!1,Xt(this)))}else(function(t){const e={};t=(t.g&&2<=tn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(m(t[r]))continue;var n=k(t[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),ne(this),ee(this)}}}catch(d){}},Kt.prototype.cancel=function(){this.J=!0,ne(this)},Kt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.A),2!=this.L&&(Mt(),Pt(17)),ne(this),this.s=2,ee(this)):Zt(this,this.S-t)};var se=class{constructor(t,e){this.g=t,this.map=e}};function ie(t){this.l=t||10,s.PerformanceNavigationTiming?t=0<(t=s.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ae(t){return t.h?1:t.g?t.g.size:0}function ue(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ce(t,e){t.g?t.g.add(e):t.h=e}function le(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function he(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function de(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(i(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(i(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(i(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),s=r.length,o=0;o<s;o++)e.call(void 0,r[o],n&&n[o],t)}ie.prototype.cancel=function(){if(this.i=he(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function me(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof me){this.h=t.h,pe(this,t.j),this.o=t.o,this.g=t.g,ye(this,t.s),this.l=t.l;var e=t.i,n=new Ne;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ve(this,n),this.m=t.m}else t&&(e=String(t).match(fe))?(this.h=!1,pe(this,e[1]||"",!0),this.o=be(e[2]||""),this.g=be(e[3]||"",!0),ye(this,e[4]),this.l=be(e[5]||"",!0),ve(this,e[6]||"",!0),this.m=be(e[7]||"")):(this.h=!1,this.i=new Ne(null,this.h))}function ge(t){return new me(t)}function pe(t,e,n){t.j=n?be(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function ve(t,e,n){e instanceof Ne?(t.i=e,function(t,e){e&&!t.j&&(ke(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(Re(this,e),Oe(this,n,t))},t)),t.j=e}(t.i,t.h)):(n||(e=_e(e,De)),t.i=new Ne(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Ie(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function be(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _e(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Te),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Te(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}me.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_e(e,Se,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(_e(e,Se,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(_e(n,"/"==n.charAt(0)?Ce:xe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",_e(n,Ae)),t.join("")};var Ee,Se=/[#\/\?@]/g,xe=/[#\?:]/g,Ce=/[#\?]/g,De=/[#\?@]/g,Ae=/#/g;function Ne(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ke(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Re(t,e){ke(t),e=Pe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Me(t,e){return ke(t),e=Pe(t,e),t.g.has(e)}function Oe(t,e,n){Re(t,e),0<n.length&&(t.i=null,t.g.set(Pe(t,e),d(n)),t.h+=n.length)}function Pe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Le(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function Fe(){this.g=new _t}function Ve(t,e,n){const r=n||"";try{de(t,function(t,n){let s=t;o(t)&&(s=It(t)),e.push(r+n+"="+encodeURIComponent(s))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Ue(t){this.l=t.Ub||null,this.j=t.eb||!1}function qe(t,e){ht.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Be(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function ze(t){t.readyState=4,t.l=null,t.j=null,t.v=null,je(t)}function je(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Ke(t){let e="";return v(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Ge(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ke(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):we(t,e,n))}function $e(t){ht.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=Ne.prototype).add=function(t,e){ke(this),this.i=null,t=Pe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){ke(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.na=function(){ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},t.V=function(t){ke(this);let e=[];if("string"==typeof t)Me(this,t)&&(e=e.concat(this.g.get(Pe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return ke(this),this.i=null,Me(this,t=Pe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")},h(Ue,Tt),Ue.prototype.g=function(){return new qe(this.l,this.j)},Ue.prototype.i=(Ee={},function(){return Ee}),h(qe,ht),(t=qe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,je(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||s).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ze(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Be(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ze(this):je(this),3==this.readyState&&Be(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,ze(this))},t.Qa=function(t){this.g&&(this.response=t,ze(this))},t.ga=function(){this.g&&ze(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(qe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h($e,ht);var Qe=/^https?$/i,He=["POST","PUT"];function We(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Je(t),Xe(t)}function Je(t){t.A||(t.A=!0,dt(t,"complete"),dt(t,"error"))}function Ye(t){if(t.h&&void 0!==r&&(!t.v[1]||4!=tn(t)||2!=t.Z()))if(t.u&&4==tn(t))mt(t.Ea,0,t);else if(dt(t,"readystatechange"),4==tn(t)){t.h=!1;try{const r=t.Z();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===r){var o=String(t.D).match(fe)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),i=!Qe.test(o?o.toLowerCase():"")}n=i}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var a=2<tn(t)?t.g.statusText:""}catch(u){a=""}t.l=a+" ["+t.Z()+"]",Je(t)}}finally{Xe(t)}}}function Xe(t,e){if(t.g){Ze(t);const r=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||dt(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Ze(t){t.I&&(s.clearTimeout(t.I),t.I=null)}function tn(t){return t.g?t.g.readyState:0}function en(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rn(t){this.Aa=0,this.i=[],this.j=new Vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,t),this.cb=nn("retryDelaySeedMs",1e4,t),this.Wa=nn("forwardChannelMaxRetries",2,t),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ie(t&&t.concurrentRequestLimit),this.Da=new Fe,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function sn(t){if(an(t),3==t.G){var e=t.U++,n=ge(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),ln(t,n),(e=new Kt(t,t.j,e)).L=2,e.v=Ie(ge(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=e.v,n=!0),n||(e.g=_n(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Xt(e)}In(t)}function on(t){t.g&&(mn(t),t.g.cancel(),t.g=null)}function an(t){on(t),t.u&&(s.clearTimeout(t.u),t.u=null),pn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&s.clearTimeout(t.s),t.s=null)}function un(t){if(!oe(t.h)&&!t.s){t.s=!0;var e=t.Ga;L||U(),F||(L(),F=!0),V.add(e,t),t.B=0}}function cn(t,e){var n;n=e?e.l:t.U++;const r=ge(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.T),ln(t,r),t.m&&t.o&&Ge(r,t.m,t.o),n=new Kt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=hn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),ce(t.h,n),Ht(n,r,e)}function ln(t,e){t.H&&v(t.H,function(t,n){we(e,n,t)}),t.l&&de({},function(t,n){we(e,n,t)})}function hn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?c(t.l.Na,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const u=s[a].map;if(n-=e,0>n)e=Math.max(0,s[a].g-100),o=!1;else try{Ve(u,t,"req"+n+"_")}catch(i){r&&r(u)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function dn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;L||U(),F||(L(),F=!0),V.add(e,t),t.v=0}}function fn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ft(c(t.Fa,t),vn(t,t.v)),t.v++,!0)}function mn(t){null!=t.A&&(s.clearTimeout(t.A),t.A=null)}function gn(t){t.g=new Kt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ge(t.qa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.T),we(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&we(e,"TO",t.ja),we(e,"TYPE","xmlhttp"),ln(t,e),t.m&&t.o&&Ge(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Ie(ge(e)),n.m=null,n.P=!0,Wt(n,t)}function pn(t){null!=t.C&&(s.clearTimeout(t.C),t.C=null)}function yn(t,e){var n=null;if(t.g==e){pn(t),mn(t),t.g=null;var r=2}else{if(!ue(t.h,e))return;n=e.D,le(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var s=t.B;dt(r=kt(),new Lt(r,n)),un(t)}else dn(t);else if(3==(s=e.s)||0==s&&0<e.X||!(1==r&&function(t,e){return!(ae(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=Ft(c(t.Ga,t,e),vn(t,t.B)),t.B++,0)))}(t,e)||2==r&&fn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:wn(t,5);break;case 4:wn(t,10);break;case 3:wn(t,6);break;default:wn(t,2)}}function vn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function wn(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.fb,t),r=t.Xa;const e=!r;r=new me(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||pe(r,"https"),Ie(r),e?function(t,e){const n=new Vt;if(s.Image){const r=new Image;r.onload=l(Le,n,"TestLoadImage: loaded",!0,e,r),r.onerror=l(Le,n,"TestLoadImage: error",!1,e,r),r.onabort=l(Le,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=l(Le,n,"TestLoadImage: timeout",!1,e,r),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new Vt;const n=new AbortController,r=setTimeout(()=>{n.abort(),Le(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(r),t.ok?Le(0,0,!0,e):Le(0,0,!1,e)}).catch(()=>{clearTimeout(r),Le(0,0,!1,e)})}(r.toString(),n)}else Pt(2);t.G=0,t.l&&t.l.sa(e),In(t),an(t)}function In(t){if(t.G=0,t.ka=[],t.l){const e=he(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function bn(t,e,n){var r=n instanceof me?ge(n):new me(n);if(""!=r.g)e&&(r.g=e+"."+r.g),ye(r,r.s);else{var i=s.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new me(null);r&&pe(o,r),e&&(o.g=e),i&&ye(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&we(r,n,e),we(r,"VER",t.la),ln(t,r),r}function _n(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new $e(new Ue({eb:n})):new $e(t.pa)).Ha(t.J),e}function Tn(){}function En(){}function Sn(t,e){ht.call(this),this.g=new rn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!m(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!m(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Dn(this)}function xn(t){Ct.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Cn(){Dt.call(this),this.status=1}function Dn(t){this.g=t}(t=$e.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qt.g(),this.v=this.o?Et(this.o):Et(qt),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void We(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=s.FormData&&t instanceof s.FormData,!(0<=Array.prototype.indexOf.call(He,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ze(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){We(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),Xe(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xe(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ye(this):this.bb())},t.bb=function(){Ye(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch(Ee){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(Ee){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),bt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=rn.prototype).la=8,t.G=1,t.connect=function(t,e,n,r){Pt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=bn(this,null,this.W),un(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Kt(this,this.j,t);let i=this.o;if(this.S&&(i?(i=w(i),N(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=hn(this,s,e),we(n=ge(this.I),"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),ln(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ke(i)))+"&"+e:this.m&&Ge(n,this.m,i)),ce(this.h,s),this.Ua&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),s.T=!0,Ht(s,n,null)):Ht(s,n,e),this.G=2}}else 3==this.G&&(t?cn(this,t):0==this.i.length||oe(this.h)||cn(this))},t.Fa=function(){if(this.u=null,gn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ft(c(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),on(this),gn(this))},t.Za=function(){null!=this.C&&(this.C=null,on(this),fn(this),Pt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=Tn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},En.prototype.g=function(t,e){return new Sn(t,e)},h(Sn,ht),Sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){sn(this.g)},Sn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=It(t),t=n);e.i.push(new se(e.Ya++,t)),3==e.G&&un(e)},Sn.prototype.N=function(){this.g.l=null,delete this.j,sn(this.g),delete this.g,Sn.aa.N.call(this)},h(xn,Ct),h(Cn,Dt),h(Dn,Tn),Dn.prototype.ua=function(){dt(this.g,"a")},Dn.prototype.ta=function(t){dt(this.g,new xn(t))},Dn.prototype.sa=function(t){dt(this.g,new Cn)},Dn.prototype.ra=function(){dt(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,C=function(){return new En},x=function(){return kt()},S=At,E={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bt.NO_ERROR=0,Bt.TIMEOUT=8,Bt.HTTP_ERROR=6,T=Bt,zt.COMPLETE="complete",_=zt,St.EventType=xt,xt.OPEN="a",xt.CLOSE="b",xt.ERROR="c",xt.MESSAGE="d",ht.prototype.listen=ht.prototype.K,b=St,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,I=$e}).apply(void 0!==D?D:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const A="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}N.UNAUTHENTICATED=new N(null),N.GOOGLE_CREDENTIALS=new N("google-credentials-uid"),N.FIRST_PARTY=new N("first-party-uid"),N.MOCK_USER=new N("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let k="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new t("@firebase/firestore");function M(){return R.logLevel}function O(t){R.setLogLevel(t)}function P(t,...n){if(R.logLevel<=e.DEBUG){const e=n.map(V);R.debug(`Firestore (${k}): ${t}`,...e)}}function L(t,...n){if(R.logLevel<=e.ERROR){const e=n.map(V);R.error(`Firestore (${k}): ${t}`,...e)}}function F(t,...n){if(R.logLevel<=e.WARN){const e=n.map(V);R.warn(`Firestore (${k}): ${t}`,...e)}}function V(t){if("string"==typeof t)return t;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${k}) INTERNAL ASSERTION FAILED: `+t;throw L(e),new Error(e)}function q(t,e){t||U()}function B(t,e){t||U()}function z(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends n{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Q{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(N.UNAUTHENTICATED))}shutdown(){}}class H{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class W{constructor(t){this.t=t,this.currentUser=N.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){q(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new G;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new G,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new G)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(q("string"==typeof e.accessToken),new $(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return q(null===t||"string"==typeof t),new N(t)}}class J{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=N.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Y{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new J(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(N.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class X{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){q(void 0===this.o);const n=t=>{null!=t.error&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,P("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(q("string"==typeof t.token),this.R=t.token,new X(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class tt{getToken(){return Promise.resolve(new X(""))}invalidateToken(){}start(t,e){}shutdown(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=et(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function rt(t,e){return t<e?-1:t>e?1:0}function st(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function it(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ot(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.timestamp=t}static fromTimestamp(t){return new at(t)}static min(){return new at(new ot(0,0))}static max(){return new at(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n){void 0===e?e=0:e>t.length&&U(),void 0===n?n=t.length-e:n>t.length-e&&U(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ut.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ut?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ct extends ut{construct(t,e,n){return new ct(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new ct(e)}static emptyPath(){return new ct([])}}const lt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends ut{construct(t,e,n){return new ht(t,e,n)}static isValidIdentifier(t){return lt.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ht(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(ct.fromString(t))}static fromName(t){return new dt(ct.fromString(t).popFirst(5))}static empty(){return new dt(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ct.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new ct(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}function mt(t){return t.fields.find(t=>2===t.kind)}function gt(t){return t.fields.filter(t=>2!==t.kind)}function pt(t,e){let n=rt(t.collectionGroup,e.collectionGroup);if(0!==n)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=vt(t.fields[r],e.fields[r]),0!==n)return n;return rt(t.fields.length,e.fields.length)}ft.UNKNOWN_ID=-1;class yt{constructor(t,e){this.fieldPath=t,this.kind=e}}function vt(t,e){const n=ht.comparator(t.fieldPath,e.fieldPath);return 0!==n?n:rt(t.kind,e.kind)}class wt{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new wt(0,_t.min())}}function It(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=at.fromTimestamp(1e9===r?new ot(n+1,0):new ot(n,r));return new _t(s,dt.empty(),e)}function bt(t){return new _t(t.readTime,t.key,-1)}class _t{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new _t(at.min(),dt.empty(),-1)}static max(){return new _t(at.max(),dt.empty(),-1)}}function Tt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=dt.comparator(t.documentKey,e.documentKey),0!==n?n:rt(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Et="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class St{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==Et)throw t;P("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ct((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Ct?e:Ct.resolve(e)}catch(e){return Ct.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Ct.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Ct.reject(e)}static resolve(t){return new Ct((e,n)=>{e(t)})}static reject(t){return new Ct((e,n)=>{n(t)})}static waitFor(t){return new Ct((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=Ct.resolve(!1);for(const n of t)e=e.next(t=>t?Ct.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new Ct((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const u=a;e(t[u]).next(t=>{i[u]=t,++o,o===s&&n(i)},t=>r(t))}})}static doWhile(t,e){return new Ct((n,r)=>{const s=()=>{!0===t()?e().next(()=>{s()},r):n()};s()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new G,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Rt(t,e.error)):this.V.resolve()},this.transaction.onerror=e=>{const n=Ft(e.target.error);this.V.reject(new Rt(t,n))}}static open(t,e,n,r){try{return new Dt(e,t.transaction(r,n))}catch(s){throw new Rt(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(P("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ot(e)}}class At{constructor(t,e,n){this.name=t,this.version=e,this.p=n,12.2===At.S(m())&&L("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return P("SimpleDb","Removing database:",t),Pt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!g())return!1;if(At.v())return!0;const t=m(),e=At.S(t),n=0<e&&e<10,r=Nt(t),s=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static v(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.__PRIVATE_env)||void 0===t?void 0:t.C)}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Rt(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new K(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new K(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Rt(t,r))},r.onupgradeneeded=t=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.p.O(e,r.transaction,t.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const s="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.M(t);const e=Dt.open(this.db,t,s?"readonly":"readwrite",n),i=r(e).next(t=>(e.g(),t)).catch(t=>(e.abort(t),Ct.reject(t))).toPromise();return i.catch(()=>{}),await e.m,i}catch(o){const t=o,e="FirebaseError"!==t.name&&i<3;if(P("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Nt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class kt{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return Pt(this.B.delete())}}class Rt extends K{constructor(t,e){super(j.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Mt(t){return"IndexedDbTransactionError"===t.name}class Ot{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(P("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Pt(n)}add(t){return P("SimpleDb","ADD",this.store.name,t,t),Pt(this.store.add(t))}get(t){return Pt(this.store.get(t)).next(e=>(void 0===e&&(e=null),P("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return P("SimpleDb","DELETE",this.store.name,t),Pt(this.store.delete(t))}count(){return P("SimpleDb","COUNT",this.store.name),Pt(this.store.count())}U(t,e){const n=this.options(t,e),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const t=r.getAll(n.range);return new Ct((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}})}{const t=this.cursor(n),e=[];return this.W(t,(t,n)=>{e.push(n)}).next(()=>e)}}G(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new Ct((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}})}j(t,e){P("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const r=this.cursor(n);return this.W(r,(t,e,n)=>n.delete())}J(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.W(r,e)}Y(t){const e=this.cursor({});return new Ct((n,r)=>{e.onerror=t=>{const e=Ft(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}W(t,e){const n=[];return new Ct((r,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void r();const i=new kt(s),o=e(s.primaryKey,s.value,i);if(o instanceof Ct){const t=o.catch(t=>(i.done(),Ct.reject(t)));n.push(t)}i.isDone?r():null===i.K?s.continue():s.continue(i.K)}}).next(()=>Ct.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Pt(t){return new Ct((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Ft(t.target.error);n(e)}})}let Lt=!1;function Ft(t){const e=At.S(m());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new K("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Lt||(Lt=!0,setTimeout(()=>{throw t},0)),t}}return t}class Vt{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}X(t){P("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{P("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Mt(t)?P("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await xt(t)}await this.X(6e4)})}}class Ut{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let r=e,s=!0;return Ct.doWhile(()=>!0===s&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(e=>{if(null!==e&&!n.has(e))return P("IndexBackfiller",`Processing collection: ${e}`),this.ne(t,e,r).next(t=>{r-=t,n.add(e)});s=!1})).next(()=>e-r)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(r=>this.localStore.localDocuments.getNextDocuments(t,e,r,n).next(n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(t,s).next(()=>this.re(r,n)).next(n=>(P("IndexBackfiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(t,e,n))).next(()=>s.size)}))}re(t,e){let n=t;return e.changes.forEach((t,e)=>{const r=bt(e);Tt(r,n)>0&&(n=r)}),new _t(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function Bt(t){return null==t}function zt(t){return 0===t&&1/t==-1/0}function jt(t){return"number"==typeof t&&Number.isInteger(t)&&!zt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$t(e)),e=Gt(t.get(n),e);return $t(e)}function Gt(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function $t(t){return t+""}function Qt(t){const e=t.length;if(q(e>=2),2===e)return q(""===t.charAt(0)&&""===t.charAt(1)),ct.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const e=t.indexOf("",i);switch((e<0||e>n)&&U(),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=t.substring(i,e),s+="\0";break;case"":s+=t.substring(i,e+1);break;default:U()}i=e+2}return new ct(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.oe=-1;const Ht=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){return[t,Kt(e)]}function Jt(t,e,n){return[t,Kt(e),n]}const Yt={},Xt=["prefixPath","collectionGroup","readTime","documentId"],Zt=["prefixPath","collectionGroup","documentId"],te=["collectionGroup","readTime","prefixPath","documentId"],ee=["canonicalId","targetId"],ne=["targetId","path"],re=["path","targetId"],se=["collectionId","parent"],ie=["indexId","uid"],oe=["uid","sequenceNumber"],ae=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ue=["indexId","uid","orderedDocumentKey"],ce=["userId","collectionPath","documentId"],le=["userId","collectionPath","largestBatchId"],he=["userId","collectionGroup","largestBatchId"],de=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],fe=[...de,"documentOverlays"],me=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ge=me,pe=[...ge,"indexConfiguration","indexState","indexEntries"],ye=pe,ve=[...pe,"globals"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends St{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function Ie(t,e){const n=z(t);return At.F(n._e,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _e(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Te(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function Ee(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e){this.comparator=t,this.root=e||Ce.EMPTY}insert(t,e){return new Se(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(t){return new Se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xe(this.root,t,this.comparator,!1)}getReverseIterator(){return new xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xe(this.root,t,this.comparator,!0)}}class xe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ce{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Ce.RED,this.left=null!=r?r:Ce.EMPTY,this.right=null!=s?s:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ce(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ce.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U();if(this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1,Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(t){this.comparator=t,this.data=new Se(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ae(this.data.getIterator())}getIteratorFrom(t){return new Ae(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof De))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new De(this.comparator);return e.data=t,e}}class Ae{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ne(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new ke([])}unionWith(t){let e=new De(ht.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ke(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return st(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Re("Invalid base64 string: "+e):e}}(t);return new Oe(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Oe(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Pe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Le(t){if(q(!!t),"string"==typeof t){let e=0;const n=Pe.exec(t);if(q(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ve(t){return"string"==typeof t?Oe.fromBase64String(t):Oe.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function qe(t){const e=t.mapValue.fields.__previous_value__;return Ue(e)?qe(e):e}function Be(t){const e=Le(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,n,r,s,i,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class je{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof je&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ge={nullValue:"NULL_VALUE"};function $e(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ue(t)?4:ln(t)?9007199254740991:un(t)?10:11:U()}function Qe(t,e){if(t===e)return!0;const n=$e(t);if(n!==$e(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Be(t).isEqual(Be(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Le(t.timestampValue),r=Le(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Ve(t.bytesValue).isEqual(Ve(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Fe(t.geoPointValue.latitude)===Fe(e.geoPointValue.latitude)&&Fe(t.geoPointValue.longitude)===Fe(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Fe(t.integerValue)===Fe(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Fe(t.doubleValue),r=Fe(e.doubleValue);return n===r?zt(n)===zt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return st(t.arrayValue.values||[],e.arrayValue.values||[],Qe);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(be(n)!==be(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Qe(n[s],r[s])))return!1;return!0}(t,e);default:return U()}var r}function He(t,e){return void 0!==(t.values||[]).find(t=>Qe(t,e))}function We(t,e){if(t===e)return 0;const n=$e(t),r=$e(e);if(n!==r)return rt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return rt(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Fe(t.integerValue||t.doubleValue),r=Fe(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Je(t.timestampValue,e.timestampValue);case 4:return Je(Be(t),Be(e));case 5:return rt(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ve(t),r=Ve(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=rt(n[s],r[s]);if(0!==t)return t}return rt(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=rt(Fe(t.latitude),Fe(e.latitude));return 0!==n?n:rt(Fe(t.longitude),Fe(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ye(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,s,i;const o=t.fields||{},a=e.fields||{},u=null===(n=o.value)||void 0===n?void 0:n.arrayValue,c=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=rt((null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0,(null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0);return 0!==l?l:Ye(u,c)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Ke.mapValue&&e===Ke.mapValue)return 0;if(t===Ke.mapValue)return 1;if(e===Ke.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=rt(r[o],i[o]);if(0!==t)return t;const e=We(n[r[o]],s[i[o]]);if(0!==e)return e}return rt(r.length,i.length)}(t.mapValue,e.mapValue);default:throw U()}}function Je(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rt(t,e);const n=Le(t),r=Le(e),s=rt(n.seconds,r.seconds);return 0!==s?s:rt(n.nanos,r.nanos)}function Ye(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=We(n[s],r[s]);if(t)return t}return rt(n.length,r.length)}function Xe(t){return Ze(t)}function Ze(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Le(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ve(t.bytesValue).toBase64():"referenceValue"in t?function(t){return dt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ze(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Ze(t.fields[s])}`;return n+"}"}(t.mapValue):U()}function tn(t){switch($e(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qe(t);return e?16+tn(e):16;case 5:return 2*t.stringValue.length;case 6:return Ve(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,e)=>t+tn(e),0);case 10:case 11:return function(t){let e=0;return _e(t.fields,(t,n)=>{e+=t.length+tn(n)}),e}(t.mapValue);default:throw U()}}function en(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nn(t){return!!t&&"integerValue"in t}function rn(t){return!!t&&"arrayValue"in t}function sn(t){return!!t&&"nullValue"in t}function on(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function an(t){return!!t&&"mapValue"in t}function un(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function cn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _e(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=cn(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ln(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}const hn={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function dn(t){return"nullValue"in t?Ge:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?en(je.empty(),dt.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?un(t)?hn:{mapValue:{}}:U()}function fn(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?en(je.empty(),dt.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?hn:"mapValue"in t?un(t)?{mapValue:{}}:Ke:U()}function mn(t,e){const n=We(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function gn(t,e){const n=We(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.value=t}static empty(){return new pn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!an(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=ht.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=cn(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());an(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];an(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){_e(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new pn(cn(this.value))}}function yn(t){const e=[];return _e(t.fields,(t,n)=>{const r=new ht([t]);if(an(n)){const t=yn(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new ke(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vn{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new vn(t,0,at.min(),at.min(),at.min(),pn.empty(),0)}static newFoundDocument(t,e,n,r){return new vn(t,1,e,at.min(),n,r,0)}static newNoDocument(t,e){return new vn(t,2,e,at.min(),at.min(),pn.empty(),0)}static newUnknownDocument(t,e){return new vn(t,3,e,at.min(),at.min(),pn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(at.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=at.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof vn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e){this.position=t,this.inclusive=e}}function In(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?dt.comparator(dt.fromName(o.referenceValue),n.key):We(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function bn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qe(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e="asc"){this.field=t,this.dir=e}}function Tn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{}class Sn extends En{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Pn(t,e,n):"array-contains"===e?new Un(t,n):"in"===e?new qn(t,n):"not-in"===e?new Bn(t,n):"array-contains-any"===e?new zn(t,n):new Sn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ln(t,n):new Fn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(We(e,this.value)):null!==e&&$e(this.value)===$e(e)&&this.matchesComparison(We(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends En{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new xn(t,e)}matches(t){return Cn(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Cn(t){return"and"===t.op}function Dn(t){return"or"===t.op}function An(t){return Nn(t)&&Cn(t)}function Nn(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function kn(t){if(t instanceof Sn)return t.field.canonicalString()+t.op.toString()+Xe(t.value);if(An(t))return t.filters.map(t=>kn(t)).join(",");{const e=t.filters.map(t=>kn(t)).join(",");return`${t.op}(${e})`}}function Rn(t,e){return t instanceof Sn?(n=t,(r=e)instanceof Sn&&n.op===r.op&&n.field.isEqual(r.field)&&Qe(n.value,r.value)):t instanceof xn?function(t,e){return e instanceof xn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&Rn(n,e.filters[r]),!0)}(t,e):void U();var n,r}function Mn(t,e){const n=t.filters.concat(e);return xn.create(n,t.op)}function On(t){return t instanceof Sn?`${(e=t).field.canonicalString()} ${e.op} ${Xe(e.value)}`:t instanceof xn?function(t){return t.op.toString()+" {"+t.getFilters().map(On).join(" ,")+"}"}(t):"Filter";var e}class Pn extends Sn{constructor(t,e,n){super(t,e,n),this.key=dt.fromName(n.referenceValue)}matches(t){const e=dt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ln extends Sn{constructor(t,e){super(t,"in",e),this.keys=Vn("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Fn extends Sn{constructor(t,e){super(t,"not-in",e),this.keys=Vn("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Vn(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>dt.fromName(t.referenceValue))}class Un extends Sn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return rn(e)&&He(e.arrayValue,this.value)}}class qn extends Sn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&He(this.value.arrayValue,e)}}class Bn extends Sn{constructor(t,e){super(t,"not-in",e)}matches(t){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!He(this.value.arrayValue,e)}}class zn extends Sn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!rn(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>He(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ue=null}}function Kn(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jn(t,e,n,r,s,i,o)}function Gn(t){const e=z(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>kn(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>{return(e=t).field.canonicalString()+e.dir;var e}).join(","),Bt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Xe(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Xe(t)).join(",")),e.ue=t}return e.ue}function $n(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Tn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bn(t.startAt,e.startAt)&&bn(t.endAt,e.endAt)}function Qn(t){return dt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Hn(t,e){return t.filters.filter(t=>t instanceof Sn&&t.field.isEqual(e))}function Wn(t,e,n){let r=Ge,s=!0;for(const i of Hn(t,e)){let t=Ge,e=!0;switch(i.op){case"<":case"<=":t=dn(i.value);break;case"==":case"in":case">=":t=i.value;break;case">":t=i.value,e=!1;break;case"!=":case"not-in":t=Ge}mn({value:r,inclusive:s},{value:t,inclusive:e})<0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];mn({value:r,inclusive:s},{value:t,inclusive:n.inclusive})<0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}function Jn(t,e,n){let r=Ke,s=!0;for(const i of Hn(t,e)){let t=Ke,e=!0;switch(i.op){case">=":case">":t=fn(i.value),e=!1;break;case"==":case"in":case"<=":t=i.value;break;case"<":t=i.value,e=!1;break;case"!=":case"not-in":t=Ke}gn({value:r,inclusive:s},{value:t,inclusive:e})>0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];gn({value:r,inclusive:s},{value:t,inclusive:n.inclusive})>0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Xn(t,e,n,r,s,i,o,a){return new Yn(t,e,n,r,s,i,o,a)}function Zn(t){return new Yn(t)}function tr(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function er(t){return null!==t.collectionGroup}function nr(t){const e=z(t);if(null===e.ce){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new De(ht.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new _n(r,n))}),t.has(ht.keyField().canonicalString())||e.ce.push(new _n(ht.keyField(),n))}return e.ce}function rr(t){const e=z(t);return e.le||(e.le=ir(e,nr(t))),e.le}function sr(t){const e=z(t);return e.he||(e.he=ir(e,t.explicitOrderBy)),e.he}function ir(t,e){if("F"===t.limitType)return Kn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new _n(t.field,e)});const n=t.endAt?new wn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wn(t.startAt.position,t.startAt.inclusive):null;return Kn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function or(t,e){const n=t.filters.concat([e]);return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ar(t,e,n){return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ur(t,e){return $n(rr(t),rr(e))&&t.limitType===e.limitType}function cr(t){return`${Gn(rr(t))}|lt:${t.limitType}`}function lr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>On(t)).join(", ")}]`),Bt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e}).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Xe(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Xe(t)).join(",")),`Target(${e})`}(rr(t))}; limitType=${t.limitType})`}function hr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):dt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of nr(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=In(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,nr(n),r)||n.endAt&&!function(t,e,n){const r=In(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,nr(n),r)));var n,r}function dr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fr(t){return(e,n)=>{let r=!1;for(const s of nr(t)){const t=mr(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function mr(t,e,n){const r=t.field.isKeyField()?dt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?We(r,s):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return Ee(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Se(dt.comparator);function yr(){return pr}const vr=new Se(dt.comparator);function wr(...t){let e=vr;for(const n of t)e=e.insert(n.key,n);return e}function Ir(t){let e=vr;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function br(){return Tr()}function _r(){return Tr()}function Tr(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Er=new Se(dt.comparator),Sr=new De(dt.comparator);function xr(...t){let e=Sr;for(const n of t)e=e.add(n);return e}const Cr=new De(rt);function Dr(){return Cr}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zt(e)?"-0":e}}function Nr(t){return{integerValue:""+t}}function kr(t,e){return jt(e)?Nr(e):Ar(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this._=void 0}}function Mr(t,e,n){return t instanceof Lr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ue(e)&&(e=qe(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Fr?Vr(t,e):t instanceof Ur?qr(t,e):function(t,e){const n=Pr(t,e),r=zr(n)+zr(t.Pe);return nn(n)&&nn(t.Pe)?Nr(r):Ar(t.serializer,r)}(t,e)}function Or(t,e,n){return t instanceof Fr?Vr(t,e):t instanceof Ur?qr(t,e):n}function Pr(t,e){return t instanceof Br?nn(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null;var n,r}class Lr extends Rr{}class Fr extends Rr{constructor(t){super(),this.elements=t}}function Vr(t,e){const n=jr(e);for(const r of t.elements)n.some(t=>Qe(t,r))||n.push(r);return{arrayValue:{values:n}}}class Ur extends Rr{constructor(t){super(),this.elements=t}}function qr(t,e){let n=jr(e);for(const r of t.elements)n=n.filter(t=>!Qe(t,r));return{arrayValue:{values:n}}}class Br extends Rr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function zr(t){return Fe(t.integerValue||t.doubleValue)}function jr(t){return rn(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e){this.field=t,this.transform=e}}class Gr{constructor(t,e){this.version=t,this.transformResults=e}}class $r{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new $r}static exists(t){return new $r(void 0,t)}static updateTime(t){return new $r(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Hr{}function Wr(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new is(t.key,$r.none()):new ts(t.key,t.data,$r.none());{const n=t.data,r=pn.empty();let s=new De(ht.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new es(t.key,r,new ke(s.toArray()),$r.none())}}function Jr(t,e,n){var r;t instanceof ts?function(t,e,n){const r=t.value.clone(),s=rs(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof es?function(t,e,n){if(!Qr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=rs(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ns(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Yr(t,e,n,r){return t instanceof ts?function(t,e,n,r){if(!Qr(t.precondition,e))return n;const s=t.value.clone(),i=ss(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof es?function(t,e,n,r){if(!Qr(t.precondition,e))return n;const s=ss(t.fieldTransforms,r,e),i=e.data;return i.setAll(ns(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):(s=e,i=n,Qr(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function Xr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Pr(r.transform,t||null);null!=s&&(null===n&&(n=pn.empty()),n.set(r.field,s))}return n||null}function Zr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&st(n,r,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Fr&&r instanceof Fr||n instanceof Ur&&r instanceof Ur?st(n.elements,r.elements,Qe):n instanceof Br&&r instanceof Br?Qe(n.Pe,r.Pe):n instanceof Lr&&r instanceof Lr);var n,r}(t,e)))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}class ts extends Hr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class es extends Hr{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ns(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rs(t,e,n){const r=new Map;q(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Or(o,a,n[s]))}return r}function ss(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Mr(t,i,e))}return r}class is extends Hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class os extends Hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Jr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Yr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Yr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=_r();return this.mutations.forEach(r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Wr(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(at.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),xr())}isEqual(t){return this.batchId===t.batchId&&st(this.mutations,t.mutations,(t,e)=>Zr(t,e))&&st(this.baseMutations,t.baseMutations,(t,e)=>Zr(t,e))}}class us{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){q(t.mutations.length===n.length);let r=Er;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new us(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds,fs;function ms(t){switch(t){default:return U();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function gs(t){if(void 0===t)return L("GRPC error has no .code"),j.UNKNOWN;switch(t){case ds.OK:return j.OK;case ds.CANCELLED:return j.CANCELLED;case ds.UNKNOWN:return j.UNKNOWN;case ds.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ds.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ds.INTERNAL:return j.INTERNAL;case ds.UNAVAILABLE:return j.UNAVAILABLE;case ds.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ds.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ds.NOT_FOUND:return j.NOT_FOUND;case ds.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ds.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ds.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ds.ABORTED:return j.ABORTED;case ds.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ds.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ds.DATA_LOSS:return j.DATA_LOSS;default:return U()}}(fs=ds||(ds={}))[fs.OK=0]="OK",fs[fs.CANCELLED=1]="CANCELLED",fs[fs.UNKNOWN=2]="UNKNOWN",fs[fs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fs[fs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fs[fs.NOT_FOUND=5]="NOT_FOUND",fs[fs.ALREADY_EXISTS=6]="ALREADY_EXISTS",fs[fs.PERMISSION_DENIED=7]="PERMISSION_DENIED",fs[fs.UNAUTHENTICATED=16]="UNAUTHENTICATED",fs[fs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fs[fs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fs[fs.ABORTED=10]="ABORTED",fs[fs.OUT_OF_RANGE=11]="OUT_OF_RANGE",fs[fs.UNIMPLEMENTED=12]="UNIMPLEMENTED",fs[fs.INTERNAL=13]="INTERNAL",fs[fs.UNAVAILABLE=14]="UNAVAILABLE",fs[fs.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ps=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new y([4294967295,4294967295],0);function ws(t){const e=ys().encode(t),n=new v;return n.update(e),new Uint8Array(n.digest())}function Is(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new y([n,r],0),new y([s,i],0)]}class bs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new _s(`Invalid padding: ${e}`);if(n<0)throw new _s(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new _s(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new _s(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=y.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(y.fromNumber(n)));return 1===r.compare(vs)&&(r=new y([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=ws(t),[n,r]=Is(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);if(!this.de(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new bs(s,r,e);return n.forEach(t=>i.insert(t)),i}insert(t){if(0===this.Ie)return;const e=ws(t),[n,r]=Is(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class _s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Es.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ts(at.min(),r,new Se(rt),yr(),xr())}}class Es{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Es(n,e,xr(),xr(),xr())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class xs{constructor(t,e){this.targetId=t,this.me=e}}class Cs{constructor(t,e,n=Oe.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ds{constructor(){this.fe=0,this.ge=ks(),this.pe=Oe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=xr(),e=xr(),n=xr();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:U()}}),new Es(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=ks()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class As{constructor(t){this.Le=t,this.Be=new Map,this.ke=yr(),this.qe=Ns(),this.Qe=new Se(rt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:U()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((t,n)=>{this.ze(n)&&e(n)})}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const s=r.target;if(Qn(s))if(0===n){const t=new dt(s.path);this.Ue(e,t,vn.newNoDocument(t,at.min()))}else q(1===n);else{const r=this.Ye(e);if(r!==n){const n=this.Ze(t),s=n?this.Xe(n,t,r):1;if(0!==s){this.je(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}null==ps||ps.et(function(t,e,n,r,s){var i,o,a,u,c,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===s,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(u=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==d?void 0:d.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}(r,t.me,this.Le.tt(),n,s))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Ve(n).toUint8Array()}catch(a){if(a instanceof Re)return F("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new bs(i,r,s)}catch(a){return F(a instanceof _s?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const s=this.Le.tt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.Ue(e,n,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((n,r)=>{const s=this.Je(r);if(s){if(n.current&&Qn(s.target)){const e=new dt(s.target.path);null!==this.ke.get(e)||this.it(r,e)||this.Ue(r,e,vn.newNoDocument(e,t))}n.be&&(e.set(r,n.ve()),n.Ce())}});let n=xr();this.qe.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.ke.forEach((e,n)=>n.setReadTime(t));const r=new Ts(t,e,this.Qe,this.ke,n);return this.ke=yr(),this.qe=Ns(),this.Qe=new Se(rt),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ds,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new De(rt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||P("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ds),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ns(){return new Se(dt.comparator)}function ks(){return new Se(dt.comparator)}const Rs={asc:"ASCENDING",desc:"DESCENDING"},Ms={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Os={and:"AND",or:"OR"};class Ps{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ls(t,e){return t.useProto3Json||Bt(e)?e:{value:e}}function Fs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vs(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Us(t,e){return Fs(t,e.toTimestamp())}function qs(t){return q(!!t),at.fromTimestamp(function(t){const e=Le(t);return new ot(e.seconds,e.nanos)}(t))}function Bs(t,e){return zs(t,e).canonicalString()}function zs(t,e){const n=(r=t,new ct(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===e?n:n.child(e)}function js(t){const e=ct.fromString(t);return q(di(e)),e}function Ks(t,e){return Bs(t.databaseId,e.path)}function Gs(t,e){const n=js(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new dt(Ws(n))}function $s(t,e){return Bs(t.databaseId,e)}function Qs(t){const e=js(t);return 4===e.length?ct.emptyPath():Ws(e)}function Hs(t){return new ct(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ws(t){return q(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Js(t,e,n){return{name:Ks(t,e),fields:n.value.mapValue.fields}}function Ys(t,e,n){const r=Gs(t,e.name),s=qs(e.updateTime),i=e.createTime?qs(e.createTime):at.min(),o=new pn({mapValue:{fields:e.fields}}),a=vn.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Xs(t,e){let n;if(e instanceof ts)n={update:Js(t,e.key,e.value)};else if(e instanceof is)n={delete:Ks(t,e.key)};else if(e instanceof es)n={update:Js(t,e.key,e.data),updateMask:hi(e.fieldMask)};else{if(!(e instanceof os))return U();n={verify:Ks(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof Lr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ur)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Br)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw U()}(0,t))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(s=e.precondition).updateTime?{updateTime:Us(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:U())),n;var r,s}function Zs(t,e){const n=e.currentDocument?void 0!==(s=e.currentDocument).updateTime?$r.updateTime(qs(s.updateTime)):void 0!==s.exists?$r.exists(s.exists):$r.none():$r.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)q("REQUEST_TIME"===e.setToServerValue),n=new Lr;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new Fr(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new Ur(t)}else"increment"in e?n=new Br(t,e.increment):U();const r=ht.fromServerFormat(e.fieldPath);return new Kr(r,n)}(t,e)):[];var s;if(e.update){e.update.name;const s=Gs(t,e.update.name),i=new pn({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new ke(e.map(t=>ht.fromServerFormat(t)))}(e.updateMask);return new es(s,i,t,n,r)}return new ts(s,i,n,r)}if(e.delete){const r=Gs(t,e.delete);return new is(r,n)}if(e.verify){const r=Gs(t,e.verify);return new os(r,n)}return U()}function ti(t,e){return{documents:[$s(t,e.path)]}}function ei(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$s(t,s);const i=function(t){if(0!==t.length)return li(xn.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>{return{field:ui((e=t).field),direction:ii(e.dir)};var e})}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ls(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:s};var u}function ni(t,e,n,r){const{_t:s,parent:i}=ei(t,e),o={},a=[];let u=0;return n.forEach(t=>{const e=r?t.alias:"aggregate_"+u++;o[e]=t.alias,"count"===t.aggregateType?a.push({alias:e,count:{}}):"avg"===t.aggregateType?a.push({alias:e,avg:{field:ui(t.fieldPath)}}):"sum"===t.aggregateType&&a.push({alias:e,sum:{field:ui(t.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ut:o,parent:i}}function ri(t){let e=Qs(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){q(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=si(t);return e instanceof xn&&An(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>{return new _n(ci((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e}));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Bt(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new wn(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new wn(n,e)}(n.endAt)),Xn(e,s,o,i,a,"F",u,c)}function si(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ci(t.unaryFilter.field);return Sn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ci(t.unaryFilter.field);return Sn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ci(t.unaryFilter.field);return Sn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ci(t.unaryFilter.field);return Sn.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):void 0!==t.fieldFilter?(e=t,Sn.create(ci(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return xn.create(t.compositeFilter.filters.map(t=>si(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(t):U();var e}function ii(t){return Rs[t]}function oi(t){return Ms[t]}function ai(t){return Os[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return ht.fromServerFormat(t.fieldPath)}function li(t){return t instanceof Sn?function(t){if("=="===t.op){if(on(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NAN"}};if(sn(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(on(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NOT_NAN"}};if(sn(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(t.field),op:oi(t.op),value:t.value}}}(t):t instanceof xn?function(t){const e=t.getFilters().map(t=>li(t));return 1===e.length?e[0]:{compositeFilter:{op:ai(t.op),filters:e}}}(t):U()}function hi(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function di(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,n,r,s=at.min(),i=at.min(),o=Oe.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new fi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this.ct=t}}function gi(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document={name:Ks(s=t.ct,(i=e).key),fields:i.data.value.mapValue.fields,updateTime:Fs(s,i.version.toTimestamp()),createTime:Fs(s,i.createTime.toTimestamp())};else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:yi(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:n.path.toArray(),version:yi(e.version)}}var s,i;return r}function pi(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function yi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vi(t){const e=new ot(t.seconds,t.nanoseconds);return at.fromTimestamp(e)}function wi(t,e){const n=(e.baseMutations||[]).map(e=>Zs(t.ct,e));for(let i=0;i<e.mutations.length-1;++i){const t=e.mutations[i];if(i+1<e.mutations.length&&void 0!==e.mutations[i+1].transform){const n=e.mutations[i+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(e=>Zs(t.ct,e)),s=ot.fromMillis(e.localWriteTimeMs);return new as(e.batchId,s,n,r)}function Ii(t){const e=vi(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?vi(t.lastLimboFreeSnapshotVersion):at.min();let r;return r=void 0!==t.query.documents?function(t){return q(1===t.documents.length),rr(Zn(Qs(t.documents[0])))}(t.query):function(t){return rr(ri(t))}(t.query),new fi(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Oe.fromBase64String(t.resumeToken))}function bi(t,e){const n=yi(e.snapshotVersion),r=yi(e.lastLimboFreeSnapshotVersion);let s;s=Qn(e.target)?ti(t.ct,e.target):ei(t.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Gn(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function _i(t){const e=ri({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ar(e,e.limit,"L"):e}function Ti(t,e){return new cs(e.largestBatchId,Zs(t.ct,e.overlayMutation))}function Ei(t,e){const n=e.path.lastSegment();return[t,Kt(e.path.popLast()),n]}function Si(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:yi(r.readTime),documentKey:Kt(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{getBundleMetadata(t,e){return Ci(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:vi(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Ci(t).put({bundleId:(n=e).id,createTime:yi(qs(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Di(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:_i(e.bundledQuery),readTime:vi(e.readTime)};var e})}saveNamedQuery(t,e){return Di(t).put({name:(n=e).name,readTime:yi(qs(n.readTime)),bundledQuery:n.bundledQuery});var n}}function Ci(t){return Ie(t,"bundles")}function Di(t){return Ie(t,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new Ai(t,n)}getOverlay(t,e){return Ni(t).get(Ei(this.userId,e)).next(t=>t?Ti(this.serializer,t):null)}getOverlays(t,e){const n=br();return Ct.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){const r=[];return n.forEach((n,s)=>{const i=new cs(e,s);r.push(this.ht(t,i))}),Ct.waitFor(r)}removeOverlaysForBatchId(t,e,n){const r=new Set;e.forEach(t=>r.add(Kt(t.getCollectionPath())));const s=[];return r.forEach(e=>{const r=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);s.push(Ni(t).j("collectionPathOverlayIndex",r))}),Ct.waitFor(s)}getOverlaysForCollection(t,e,n){const r=br(),s=Kt(e),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ni(t).U("collectionPathOverlayIndex",i).next(t=>{for(const e of t){const t=Ti(this.serializer,e);r.set(t.getKey(),t)}return r})}getOverlaysForCollectionGroup(t,e,n,r){const s=br();let i;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Ni(t).J({index:"collectionGroupOverlayIndex",range:o},(t,e,n)=>{const o=Ti(this.serializer,e);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()}).next(()=>s)}ht(t,e){return Ni(t).put(function(t,e,n){const[r,s,i]=Ei(e,n.mutation.key);return{userId:e,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Xs(t.ct,n.mutation)}}(this.serializer,this.userId,e))}}function Ni(t){return Ie(t,"documentOverlays")}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{Pt(t){return Ie(t,"globals")}getSessionToken(t){return this.Pt(t).get("sessionToken").next(t=>{const e=null==t?void 0:t.value;return e?Oe.fromUint8Array(e):Oe.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Pt(t).put({name:"sessionToken",value:e.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(Fe(t.integerValue));else if("doubleValue"in t){const n=Fe(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),zt(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),"string"==typeof n&&(n=Le(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(Ve(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?ln(t)?this.dt(e,Number.MAX_SAFE_INTEGER):un(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):U()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const r of Object.keys(n))this.Vt(r,e),this.Tt(n[r],e)}wt(t,e){var n,r;const s=t.fields||{};this.dt(e,53);const i="value",o=(null===(r=null===(n=s[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(e,15),e.At(Fe(o)),this.Vt(i,e),this.Tt(s[i],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const r of n)this.Tt(r,e)}yt(t,e){this.dt(e,37),dt.fromName(t).path.forEach(t=>{this.dt(e,60),this.Dt(t,e)})}dt(t,e){t.At(e)}ft(t){t.At(2)}}function Mi(t){if(0===t)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Oi(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const r=Mi(255&t[n]);if(e+=r,8!==r)break}return e}(t);return Math.ceil(e/8)}Ri.vt=new Ri;class Pi{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ft(n.value),n=e.next();this.Mt()}xt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ot(n.value),n=e.next();this.Nt()}Lt(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ft(t);else if(t<2048)this.Ft(960|t>>>6),this.Ft(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ft(480|t>>>12),this.Ft(128|63&t>>>6),this.Ft(128|63&t);else{const t=e.codePointAt(0);this.Ft(240|t>>>18),this.Ft(128|63&t>>>12),this.Ft(128|63&t>>>6),this.Ft(128|63&t)}}this.Mt()}Bt(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ot(t);else if(t<2048)this.Ot(960|t>>>6),this.Ot(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ot(480|t>>>12),this.Ot(128|63&t>>>6),this.Ot(128|63&t);else{const t=e.codePointAt(0);this.Ot(240|t>>>18),this.Ot(128|63&t>>>12),this.Ot(128|63&t>>>6),this.Ot(128|63&t)}}this.Nt()}kt(t){const e=this.qt(t),n=Oi(e);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=255&e[r]}Kt(t){const e=this.qt(t),n=Oi(e);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=~(255&e[r])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(t){this.Qt(t.length),this.buffer.set(t,this.position),this.position+=t.length}zt(){return this.buffer.slice(0,this.position)}qt(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let r=1;r<e.length;++r)e[r]^=n?255:0;return e}Ft(t){const e=255&t;0===e?(this.Ut(0),this.Ut(255)):255===e?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ot(t){const e=255&t;0===e?(this.Gt(0),this.Gt(255)):255===e?(this.Gt(255),this.Gt(0)):this.Gt(t)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(t){this.Qt(1),this.buffer[this.position++]=t}Gt(t){this.Qt(1),this.buffer[this.position++]=~t}Qt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Li{constructor(t){this.jt=t}gt(t){this.jt.Ct(t)}Rt(t){this.jt.Lt(t)}At(t){this.jt.kt(t)}Et(){this.jt.$t()}}class Fi{constructor(t){this.jt=t}gt(t){this.jt.xt(t)}Rt(t){this.jt.Bt(t)}At(t){this.jt.Kt(t)}Et(){this.jt.Wt()}}class Vi{constructor(){this.jt=new Pi,this.Ht=new Li(this.jt),this.Jt=new Fi(this.jt)}seed(t){this.jt.seed(t)}Yt(t){return 0===t?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,n,r){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=r}Zt(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Ui(this.indexId,this.documentKey,this.arrayValue,n)}}function qi(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=Bi(t.arrayValue,e.arrayValue),0!==n?n:(n=Bi(t.directionalValue,e.directionalValue),0!==n?n:dt.comparator(t.documentKey,e.documentKey)))}function Bi(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(0!==r)return r}return t.length-e.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t){this.Xt=new De((t,e)=>ht.comparator(t.field,e.field)),this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.en=t.orderBy,this.tn=[];for(const e of t.filters){const t=e;t.isInequality()?this.Xt=this.Xt.add(t):this.tn.push(t)}}get nn(){return this.Xt.size>1}rn(t){if(q(t.collectionGroup===this.collectionId),this.nn)return!1;const e=mt(t);if(void 0!==e&&!this.sn(e))return!1;const n=gt(t);let r=new Set,s=0,i=0;for(;s<n.length&&this.sn(n[s]);++s)r=r.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const t=this.Xt.getIterator().getNext();if(!r.has(t.field.canonicalString())){const e=n[s];if(!this.on(t,e)||!this._n(this.en[i++],e))return!1}++s}for(;s<n.length;++s){const t=n[s];if(i>=this.en.length||!this._n(this.en[i++],t))return!1}return!0}an(){if(this.nn)return null;let t=new De(ht.comparator);const e=[];for(const n of this.tn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)e.push(new yt(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new yt(n.field,0))}for(const n of this.en)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new yt(n.field,"asc"===n.dir?0:1)));return new ft(ft.UNKNOWN_ID,this.collectionId,e,wt.empty())}sn(t){for(const e of this.tn)if(this.on(e,t))return!0;return!1}on(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}_n(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){var e,n;if(q(t instanceof Sn||t instanceof xn),t instanceof Sn){if(t instanceof qn){const r=(null===(n=null===(e=t.value.arrayValue)||void 0===e?void 0:e.values)||void 0===n?void 0:n.map(e=>Sn.create(t.field,"==",e)))||[];return xn.create(r,"or")}return t}const r=t.filters.map(t=>ji(t));return xn.create(r,t.op)}function Ki(t){if(0===t.getFilters().length)return[];const e=Hi(ji(t));return q(Qi(e)),Gi(e)||$i(e)?[e]:e.getFilters()}function Gi(t){return t instanceof Sn}function $i(t){return t instanceof xn&&An(t)}function Qi(t){return Gi(t)||$i(t)||function(t){if(t instanceof xn&&Dn(t)){for(const e of t.getFilters())if(!Gi(e)&&!$i(e))return!1;return!0}return!1}(t)}function Hi(t){if(q(t instanceof Sn||t instanceof xn),t instanceof Sn)return t;if(1===t.filters.length)return Hi(t.filters[0]);const e=t.filters.map(t=>Hi(t));let n=xn.create(e,t.op);return n=Yi(n),Qi(n)?n:(q(n instanceof xn),q(Cn(n)),q(n.filters.length>1),n.filters.reduce((t,e)=>Wi(t,e)))}function Wi(t,e){let n;return q(t instanceof Sn||t instanceof xn),q(e instanceof Sn||e instanceof xn),n=t instanceof Sn?e instanceof Sn?(r=t,s=e,xn.create([r,s],"and")):Ji(t,e):e instanceof Sn?Ji(e,t):function(t,e){if(q(t.filters.length>0&&e.filters.length>0),Cn(t)&&Cn(e))return Mn(t,e.getFilters());const n=Dn(t)?t:e,r=Dn(t)?e:t,s=n.filters.map(t=>Wi(t,r));return xn.create(s,"or")}(t,e),Yi(n);var r,s}function Ji(t,e){if(Cn(e))return Mn(e,t.getFilters());{const n=e.filters.map(e=>Wi(t,e));return xn.create(n,"or")}}function Yi(t){if(q(t instanceof Sn||t instanceof xn),t instanceof Sn)return t;const e=t.getFilters();if(1===e.length)return Yi(e[0]);if(Nn(t))return t;const n=e.map(t=>Yi(t)),r=[];return n.forEach(e=>{e instanceof Sn?r.push(e):e instanceof xn&&(e.op===t.op?r.push(...e.filters):r.push(e))}),1===r.length?r[0]:xn.create(r,t.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xi{constructor(){this.un=new Zi}addToCollectionParentIndex(t,e){return this.un.add(e),Ct.resolve()}getCollectionParents(t,e){return Ct.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return Ct.resolve()}deleteFieldIndex(t,e){return Ct.resolve()}deleteAllFieldIndexes(t){return Ct.resolve()}createTargetIndexes(t,e){return Ct.resolve()}getDocumentsMatchingTarget(t,e){return Ct.resolve(null)}getIndexType(t,e){return Ct.resolve(0)}getFieldIndexes(t,e){return Ct.resolve([])}getNextCollectionGroupToUpdate(t){return Ct.resolve(null)}getMinOffset(t,e){return Ct.resolve(_t.min())}getMinOffsetFromCollectionGroup(t,e){return Ct.resolve(_t.min())}updateCollectionGroup(t,e,n){return Ct.resolve()}updateIndexEntries(t,e){return Ct.resolve()}}class Zi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new De(ct.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new De(ct.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Uint8Array(0);class eo{constructor(t,e){this.databaseId=e,this.cn=new Zi,this.ln=new gr(t=>Gn(t),(t,e)=>$n(t,e)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.cn.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.cn.add(e)});const s={collectionId:n,parent:Kt(r)};return no(t).put(s)}return Ct.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[it(e),""],!1,!0);return no(t).U(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(Qt(r.parent))}return n})}addFieldIndex(t,e){const n=so(t),r={indexId:(s=e).indexId,collectionGroup:s.collectionGroup,fields:s.fields.map(t=>[t.fieldPath.canonicalString(),t.kind])};var s;delete r.indexId;const i=n.add(r);if(e.indexState){const n=io(t);return i.next(t=>{n.put(Si(t,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=so(t),r=io(t),s=ro(t);return n.delete(e.indexId).next(()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=so(t),n=ro(t),r=io(t);return e.j().next(()=>n.j()).next(()=>r.j())}createTargetIndexes(t,e){return Ct.forEach(this.hn(e),e=>this.getIndexType(t,e).next(n=>{if(0===n||1===n){const n=new zi(e).an();if(null!=n)return this.addFieldIndex(t,n)}}))}getDocumentsMatchingTarget(t,e){const n=ro(t);let r=!0;const s=new Map;return Ct.forEach(this.hn(e),e=>this.Pn(t,e).next(t=>{r&&(r=!!t),s.set(e,t)})).next(()=>{if(r){let t=xr();const r=[];return Ct.forEach(s,(s,i)=>{var o;P("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(t=>`${t.fieldPath}:${t.kind}`).join(",")}`} to execute ${Gn(e)}`);const a=function(t,e){const n=mt(e);if(void 0===n)return null;for(const r of Hn(t,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),u=function(t,e){const n=new Map;for(const r of gt(e))for(const e of Hn(t,r.fieldPath))switch(e.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(i,s),c=function(t,e){const n=[];let r=!0;for(const s of gt(e)){const e=0===s.kind?Wn(t,s.fieldPath,t.startAt):Jn(t,s.fieldPath,t.startAt);n.push(e.value),r&&(r=e.inclusive)}return new wn(n,r)}(i,s),l=function(t,e){const n=[];let r=!0;for(const s of gt(e)){const e=0===s.kind?Jn(t,s.fieldPath,t.endAt):Wn(t,s.fieldPath,t.endAt);n.push(e.value),r&&(r=e.inclusive)}return new wn(n,r)}(i,s),h=this.In(s,i,c),d=this.In(s,i,l),f=this.Tn(s,i,u),m=this.En(s.indexId,a,h,c.inclusive,d,l.inclusive,f);return Ct.forEach(m,s=>n.G(s,e.limit).next(e=>{e.forEach(e=>{const n=dt.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),r.push(n))})}))}).next(()=>r)}return Ct.resolve(null)})}hn(t){let e=this.ln.get(t);return e||(e=0===t.filters.length?[t]:Ki(xn.create(t.filters,"and")).map(e=>Kn(t.path,t.collectionGroup,t.orderBy,e.getFilters(),t.limit,t.startAt,t.endAt)),this.ln.set(t,e),e)}En(t,e,n,r,s,i,o){const a=(null!=e?e.length:1)*Math.max(n.length,s.length),u=a/(null!=e?e.length:1),c=[];for(let l=0;l<a;++l){const a=e?this.dn(e[l/u]):to,h=this.An(t,a,n[l%u],r),d=this.Rn(t,a,s[l%u],i),f=o.map(e=>this.An(t,a,e,!0));c.push(...this.createRange(h,d,f))}return c}An(t,e,n,r){const s=new Ui(t,dt.empty(),e,n);return r?s:s.Zt()}Rn(t,e,n,r){const s=new Ui(t,dt.empty(),e,n);return r?s.Zt():s}Pn(t,e){const n=new zi(e),r=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next(t=>{let e=null;for(const r of t)n.rn(r)&&(!e||r.fields.length>e.fields.length)&&(e=r);return e})}getIndexType(t,e){let n=2;const r=this.hn(e);return Ct.forEach(r,e=>this.Pn(t,e).next(t=>{t?0!==n&&t.fields.length<function(t){let e=new De(ht.comparator),n=!1;for(const r of t.filters)for(const t of r.getFlattenedFilters())t.field.isKeyField()||("array-contains"===t.op||"array-contains-any"===t.op?n=!0:e=e.add(t.field));for(const r of t.orderBy)r.field.isKeyField()||(e=e.add(r.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})).next(()=>null!==e.limit&&r.length>1&&2===n?1:n)}Vn(t,e){const n=new Vi;for(const r of gt(t)){const t=e.data.field(r.fieldPath);if(null==t)return null;const s=n.Yt(r.kind);Ri.vt.It(t,s)}return n.zt()}dn(t){const e=new Vi;return Ri.vt.It(t,e.Yt(0)),e.zt()}mn(t,e){const n=new Vi;return Ri.vt.It(en(this.databaseId,e),n.Yt(function(t){const e=gt(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.zt()}Tn(t,e,n){if(null===n)return[];let r=[];r.push(new Vi);let s=0;for(const i of gt(t)){const t=n[s++];for(const n of r)if(this.fn(e,i.fieldPath)&&rn(t))r=this.gn(r,i,t);else{const e=n.Yt(i.kind);Ri.vt.It(t,e)}}return this.pn(r)}In(t,e,n){return this.Tn(t,e,n.position)}pn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].zt();return e}gn(t,e,n){const r=[...t],s=[];for(const i of n.arrayValue.values||[])for(const t of r){const n=new Vi;n.seed(t.zt()),Ri.vt.It(i,n.Yt(e.kind)),s.push(n)}return s}fn(t,e){return!!t.filters.find(t=>t instanceof Sn&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op))}getFieldIndexes(t,e){const n=so(t),r=io(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(t=>{const e=[];return Ct.forEach(t,t=>r.get([t.indexId,this.uid]).next(n=>{e.push(function(t,e){const n=e?new wt(e.sequenceNumber,new _t(vi(e.readTime),new dt(Qt(e.documentKey)),e.largestBatchId)):wt.empty(),r=t.fields.map(([t,e])=>new yt(ht.fromServerFormat(t),e));return new ft(t.indexId,t.collectionGroup,r,n)}(t,n))})).next(()=>e)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(t=>0===t.length?null:(t.sort((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:rt(t.collectionGroup,e.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(t,e,n){const r=so(t),s=io(t);return this.yn(t).next(t=>r.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(e=>Ct.forEach(e,e=>s.put(Si(e.indexId,this.uid,t,n)))))}updateIndexEntries(t,e){const n=new Map;return Ct.forEach(e,(e,r)=>{const s=n.get(e.collectionGroup);return(s?Ct.resolve(s):this.getFieldIndexes(t,e.collectionGroup)).next(s=>(n.set(e.collectionGroup,s),Ct.forEach(s,n=>this.wn(t,e,n).next(e=>{const s=this.Sn(r,n);return e.isEqual(s)?Ct.resolve():this.bn(t,r,n,e,s)}))))})}Dn(t,e,n,r){return ro(t).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.mn(n,e.key),documentKey:e.key.path.toArray()})}vn(t,e,n,r){return ro(t).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.mn(n,e.key),e.key.path.toArray()])}wn(t,e,n){const r=ro(t);let s=new De(qi);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,e)])},(t,r)=>{s=s.add(new Ui(n.indexId,e,r.arrayValue,r.directionalValue))}).next(()=>s)}Sn(t,e){let n=new De(qi);const r=this.Vn(e,t);if(null==r)return n;const s=mt(e);if(null!=s){const i=t.data.field(s.fieldPath);if(rn(i))for(const s of i.arrayValue.values||[])n=n.add(new Ui(e.indexId,t.key,this.dn(s),r))}else n=n.add(new Ui(e.indexId,t.key,to,r));return n}bn(t,e,n,r,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const i=[];return function(t,e,n,r,s){const i=t.getIterator(),o=e.getIterator();let a=Ne(i),u=Ne(o);for(;a||u;){let t=!1,e=!1;if(a&&u){const r=n(a,u);r<0?e=!0:r>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(r(u),u=Ne(o)):e?(s(a),a=Ne(i)):(a=Ne(i),u=Ne(o))}}(r,s,qi,r=>{i.push(this.Dn(t,e,n,r))},r=>{i.push(this.vn(t,e,n,r))}),Ct.waitFor(i)}yn(t){let e=1;return io(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(t,n,r)=>{r.done(),e=n.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((t,e)=>qi(t,e)).filter((t,e,n)=>!e||0!==qi(t,n[e-1]));const r=[];r.push(t);for(const i of n){const n=qi(i,t),s=qi(i,e);if(0===n)r[0]=t.Zt();else if(n>0&&s<0)r.push(i),r.push(i.Zt());else if(s>0)break}r.push(e);const s=[];for(let i=0;i<r.length;i+=2){if(this.Cn(r[i],r[i+1]))return[];const t=[r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,to,[]],e=[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,to,[]];s.push(IDBKeyRange.bound(t,e))}return s}Cn(t,e){return qi(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(oo)}getMinOffset(t,e){return Ct.mapArray(this.hn(e),e=>this.Pn(t,e).next(t=>t||U())).next(oo)}}function no(t){return Ie(t,"collectionParents")}function ro(t){return Ie(t,"indexEntries")}function so(t){return Ie(t,"indexConfiguration")}function io(t){return Ie(t,"indexState")}function oo(t){q(0!==t.length);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Tt(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new _t(e.readTime,e.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class uo{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new uo(t,uo.DEFAULT_COLLECTION_PERCENTILE,uo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(t,e,n)=>(a++,n.delete()));i.push(u.next(()=>{q(1===a)}));const c=[];for(const l of n.mutations){const t=Jt(e,l.key.path,n.batchId);i.push(s.delete(t)),c.push(l.key)}return Ct.waitFor(i).next(()=>c)}function lo(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uo.DEFAULT_COLLECTION_PERCENTILE=10,uo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,uo.DEFAULT=new uo(41943040,uo.DEFAULT_COLLECTION_PERCENTILE,uo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),uo.DISABLED=new uo(-1,0,0);class ho{constructor(t,e,n,r){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=r,this.Fn={}}static lt(t,e,n,r){q(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new ho(s,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mo(t).J({index:"userMutationsIndex",range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const s=go(t),i=mo(t);return i.add({}).next(o=>{q("number"==typeof o);const a=new as(o,e,n,r),u=function(t,e,n){const r=n.baseMutations.map(e=>Xs(t.ct,e)),s=n.mutations.map(e=>Xs(t.ct,e));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.serializer,this.userId,a),c=[];let l=new De((t,e)=>rt(t.canonicalString(),e.canonicalString()));for(const t of r){const e=Jt(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),c.push(i.put(u)),c.push(s.put(e,Yt))}return l.forEach(e=>{c.push(this.indexManager.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Fn[o]=a.keys()}),Ct.waitFor(c).next(()=>a)})}lookupMutationBatch(t,e){return mo(t).get(e).next(t=>t?(q(t.userId===this.userId),wi(this.serializer,t)):null)}Mn(t,e){return this.Fn[e]?Ct.resolve(this.Fn[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Fn[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return mo(t).J({index:"userMutationsIndex",range:r},(t,e,r)=>{e.userId===this.userId&&(q(e.batchId>=n),s=wi(this.serializer,e)),r.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return mo(t).J({index:"userMutationsIndex",range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mo(t).U("userMutationsIndex",e).next(t=>t.map(t=>wi(this.serializer,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Wt(this.userId,e.path),r=IDBKeyRange.lowerBound(n),s=[];return go(t).J({range:r},(n,r,i)=>{const[o,a,u]=n,c=Qt(a);if(o===this.userId&&e.path.isEqual(c))return mo(t).get(u).next(t=>{if(!t)throw U();q(t.userId===this.userId),s.push(wi(this.serializer,t))});i.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new De(rt);const r=[];return e.forEach(e=>{const s=Wt(this.userId,e.path),i=IDBKeyRange.lowerBound(s),o=go(t).J({range:i},(t,r,s)=>{const[i,o,a]=t,u=Qt(o);i===this.userId&&e.path.isEqual(u)?n=n.add(a):s.done()});r.push(o)}),Ct.waitFor(r).next(()=>this.xn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,s=Wt(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new De(rt);return go(t).J({range:i},(t,e,s)=>{const[i,a,u]=t,c=Qt(a);i===this.userId&&n.isPrefixOf(c)?c.length===r&&(o=o.add(u)):s.done()}).next(()=>this.xn(t,o))}xn(t,e){const n=[],r=[];return e.forEach(e=>{r.push(mo(t).get(e).next(t=>{if(null===t)throw U();q(t.userId===this.userId),n.push(wi(this.serializer,t))}))}),Ct.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return co(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.On(e.batchId)}),Ct.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}On(t){delete this.Fn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Ct.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return go(t).J({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=Qt(t[1]);r.push(e)}else n.done()}).next(()=>{q(0===r.length)})})}containsKey(t,e){return fo(t,this.userId,e)}Nn(t){return po(t).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function fo(t,e,n){const r=Wt(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return go(t).J({range:i,H:!0},(t,n,r)=>{const[i,a,u]=t;i===e&&a===s&&(o=!0),r.done()}).next(()=>o)}function mo(t){return Ie(t,"mutations")}function go(t){return Ie(t,"documentMutations")}function po(t){return Ie(t,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new yo(0)}static kn(){return new yo(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.qn(t).next(e=>{const n=new yo(e.highestTargetId);return e.highestTargetId=n.next(),this.Qn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.qn(t).next(t=>at.fromTimestamp(new ot(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.qn(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.qn(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.Qn(t,r)))}addTargetData(t,e){return this.Kn(t,e).next(()=>this.qn(t).next(n=>(n.targetCount+=1,this.$n(e,n),this.Qn(t,n))))}updateTargetData(t,e){return this.Kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>wo(t).delete(e.targetId)).next(()=>this.qn(t)).next(e=>(q(e.targetCount>0),e.targetCount-=1,this.Qn(t,e)))}removeTargets(t,e,n){let r=0;const s=[];return wo(t).J((i,o)=>{const a=Ii(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(t,a)))}).next(()=>Ct.waitFor(s)).next(()=>r)}forEachTarget(t,e){return wo(t).J((t,n)=>{const r=Ii(n);e(r)})}qn(t){return Io(t).get("targetGlobalKey").next(t=>(q(null!==t),t))}Qn(t,e){return Io(t).put("targetGlobalKey",e)}Kn(t,e){return wo(t).put(bi(this.serializer,e))}$n(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.qn(t).next(t=>t.targetCount)}getTargetData(t,e){const n=Gn(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return wo(t).J({range:r,index:"queryTargetsIndex"},(t,n,r)=>{const i=Ii(n);$n(e,i.target)&&(s=i,r.done())}).next(()=>s)}addMatchingKeys(t,e,n){const r=[],s=bo(t);return e.forEach(e=>{const i=Kt(e.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(t,n,e))}),Ct.waitFor(r)}removeMatchingKeys(t,e,n){const r=bo(t);return Ct.forEach(e,e=>{const s=Kt(e.path);return Ct.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=bo(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=bo(t);let s=xr();return r.J({range:n,H:!0},(t,e,n)=>{const r=Qt(t[1]),i=new dt(r);s=s.add(i)}).next(()=>s)}containsKey(t,e){const n=Kt(e.path),r=IDBKeyRange.bound([n],[it(n)],!1,!0);let s=0;return bo(t).J({index:"documentTargetsIndex",H:!0,range:r},([t,e],n,r)=>{0!==t&&(s++,r.done())}).next(()=>s>0)}ot(t,e){return wo(t).get(e).next(t=>t?Ii(t):null)}}function wo(t){return Ie(t,"targets")}function Io(t){return Ie(t,"targetGlobal")}function bo(t){return Ie(t,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o([t,e],[n,r]){const s=rt(t,n);return 0===s?rt(e,r):s}class To{constructor(t){this.Un=t,this.buffer=new De(_o),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();_o(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Eo{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return null!==this.jn}Hn(t){P("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mt(t)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await xt(t)}await this.Hn(3e5)})}}class So{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Ct.resolve(qt.oe);const n=new To(e);return this.Jn.forEachTarget(t,t=>n.zn(t.sequenceNumber)).next(()=>this.Jn.Zn(t,t=>n.zn(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector","Garbage collection skipped; disabled"),Ct.resolve(ao)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ao):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,n){let r,s,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),s=this.params.maximumSequenceNumbersToCollect):s=e,o=Date.now(),this.nthSequenceNumber(t,s))).next(e=>(r=e,a=Date.now(),this.removeTargets(t,r,n))).next(e=>(i=e,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(t=>(c=Date.now(),M()<=e.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${s} in `+(a-o)+`ms\n\tRemoved ${i} targets in `+(u-a)+`ms\n\tRemoved ${t} documents in `+(c-u)+`ms\nTotal Duration: ${c-l}ms`),Ct.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:t})))}}function xo(t,e){return new So(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e){this.db=t,this.garbageCollector=xo(this,e)}Yn(t){const e=this.er(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}er(t){let e=0;return this.Zn(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Zn(t,e){return this.tr(t,(t,n)=>e(n))}addReference(t,e,n){return Do(t,n)}removeReference(t,e,n){return Do(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Do(t,e)}nr(t,e){return function(t,e){let n=!1;return po(t).Y(r=>fo(t,r,e).next(t=>(t&&(n=!0),Ct.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.tr(t,(i,o)=>{if(o<=e){const e=this.nr(t,i).next(e=>{if(!e)return s++,n.getEntry(t,i).next(()=>(n.removeEntry(i,at.min()),bo(t).delete([0,Kt(i.path)])))});r.push(e)}}).next(()=>Ct.waitFor(r)).next(()=>n.apply(t)).next(()=>s)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Do(t,e)}tr(t,e){const n=bo(t);let r,s=qt.oe;return n.J({index:"documentTargetsIndex"},([t,n],{path:i,sequenceNumber:o})=>{0===t?(s!==qt.oe&&e(new dt(Qt(r)),s),s=o,r=i):s=qt.oe}).next(()=>{s!==qt.oe&&e(new dt(Qt(r)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Do(t,e){return bo(t).put((n=e,r=t.currentSequenceNumber,{targetId:0,path:Kt(n.path),sequenceNumber:r}));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.changes=new gr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ct.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Oo(t).put(n)}removeEntry(t,e,n){return Oo(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],pi(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.rr(t,n)))}getEntry(t,e){let n=vn.newInvalidDocument(e);return Oo(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(Po(e))},(t,r)=>{n=this.ir(e,r)}).next(()=>n)}sr(t,e){let n={size:0,document:vn.newInvalidDocument(e)};return Oo(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(Po(e))},(t,r)=>{n={document:this.ir(e,r),size:lo(r)}}).next(()=>n)}getEntries(t,e){let n=yr();return this._r(t,e,(t,e)=>{const r=this.ir(t,e);n=n.insert(t,r)}).next(()=>n)}ar(t,e){let n=yr(),r=new Se(dt.comparator);return this._r(t,e,(t,e)=>{const s=this.ir(t,e);n=n.insert(t,s),r=r.insert(t,lo(e))}).next(()=>({documents:n,ur:r}))}_r(t,e,n){if(e.isEmpty())return Ct.resolve();let r=new De(Fo);e.forEach(t=>r=r.add(t));const s=IDBKeyRange.bound(Po(r.first()),Po(r.last())),i=r.getIterator();let o=i.getNext();return Oo(t).J({index:"documentKeyIndex",range:s},(t,e,r)=>{const s=dt.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&Fo(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.$(Po(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n,r,s){const i=e.path,o=[i.popLast().toArray(),i.lastSegment(),pi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Oo(t).U(IDBKeyRange.bound(o,a,!0)).next(t=>{null==s||s.incrementDocumentReadCount(t.length);let n=yr();for(const s of t){const t=this.ir(dt.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);t.isFoundDocument()&&(hr(e,t)||r.has(t.key))&&(n=n.insert(t.key,t))}return n})}getAllFromCollectionGroup(t,e,n,r){let s=yr();const i=Lo(e,n),o=Lo(e,_t.max());return Oo(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},(t,e,n)=>{const i=this.ir(dt.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);s=s.insert(i.key,i),s.size===r&&n.done()}).next(()=>s)}newChangeBuffer(t){return new Ro(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Mo(t).get("remoteDocumentGlobalKey").next(t=>(q(!!t),t))}rr(t,e){return Mo(t).put("remoteDocumentGlobalKey",e)}ir(t,e){if(e){const t=function(t,e){let n;if(e.document)n=Ys(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=dt.fromSegments(e.noDocument.path),r=vi(e.noDocument.readTime);n=vn.newNoDocument(t,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const t=dt.fromSegments(e.unknownDocument.path),r=vi(e.unknownDocument.version);n=vn.newUnknownDocument(t,r)}}return e.readTime&&n.setReadTime(function(t){const e=new ot(t[0],t[1]);return at.fromTimestamp(e)}(e.readTime)),n}(this.serializer,e);if(!t.isNoDocument()||!t.version.isEqual(at.min()))return t}return vn.newInvalidDocument(t)}}function ko(t){return new No(t)}class Ro extends Ao{constructor(t,e){super(),this.cr=t,this.trackRemovals=e,this.lr=new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new De((t,e)=>rt(t.canonicalString(),e.canonicalString()));return this.changes.forEach((s,i)=>{const o=this.lr.get(s);if(e.push(this.cr.removeEntry(t,s,o.readTime)),i.isValidDocument()){const a=gi(this.cr.serializer,i);r=r.add(s.path.popLast());const u=lo(a);n+=u-o.size,e.push(this.cr.addEntry(t,s,a))}else if(n-=o.size,this.trackRemovals){const n=gi(this.cr.serializer,i.convertToNoDocument(at.min()));e.push(this.cr.addEntry(t,s,n))}}),r.forEach(n=>{e.push(this.cr.indexManager.addToCollectionParentIndex(t,n))}),e.push(this.cr.updateMetadata(t,n)),Ct.waitFor(e)}getFromCache(t,e){return this.cr.sr(t,e).next(t=>(this.lr.set(e,{size:t.size,readTime:t.document.readTime}),t.document))}getAllFromCache(t,e){return this.cr.ar(t,e).next(({documents:t,ur:e})=>(e.forEach((e,n)=>{this.lr.set(e,{size:n,readTime:t.get(e).readTime})}),t))}}function Mo(t){return Ie(t,"remoteDocumentGlobal")}function Oo(t){return Ie(t,"remoteDocumentsV14")}function Po(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Lo(t,e){const n=e.documentKey.path.toArray();return[t,pi(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Fo(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=rt(n[i],r[i]),s)return s;return s=rt(n.length,r.length),s||(s=rt(n[n.length-2],r[r.length-2]),s||rt(n[n.length-1],r[r.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Vo{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Yr(n.mutation,t,ke.empty(),ot.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,xr()).next(()=>e))}getLocalViewOfDocuments(t,e,n=xr()){const r=br();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=wr();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=br();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,xr()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let s=yr();const i=Tr(),o=Tr();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof es)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Yr(o.mutation,e,o.mutation.getFieldMask(),ot.now())):i.set(e.key,ke.empty())}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new Vo(e,null!==(n=i.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=Tr();let r=new Se((t,e)=>t-e),s=xr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const s of t)s.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||ke.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||xr()).add(t);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=_r();u.forEach(t=>{if(!s.has(t)){const r=Wr(e.get(t),n.get(t));null!==r&&c.set(t,r),s=s.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Ct.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return s=e,dt.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):er(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r);var s}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Ct.resolve(br());let o=-1,a=s;return i.next(e=>Ct.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Ct.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,s)).next(()=>this.computeViews(t,a,e,xr())).next(t=>({batchId:o,changes:Ir(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new dt(e)).next(t=>{let e=wr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=wr();return this.indexManager.getCollectionParents(t,s).next(o=>Ct.forEach(o,o=>{const a=(u=e,c=o.child(s),new Yn(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt));var u,c;return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(t=>{s.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,vn.newInvalidDocument(r)))});let n=wr();return t.forEach((t,r)=>{const i=s.get(t);void 0!==i&&Yr(i.mutation,r,ke.empty(),ot.now()),hr(e,r)&&(n=n.insert(t,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return Ct.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,{id:(n=e).id,version:n.version,createTime:qs(n.createTime)}),Ct.resolve();var n}getNamedQuery(t,e){return Ct.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,{name:(n=e).name,query:_i(n.bundledQuery),readTime:qs(n.readTime)}),Ct.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.overlays=new Se(dt.comparator),this.Ir=new Map}getOverlay(t,e){return Ct.resolve(this.overlays.get(e))}getOverlays(t,e){const n=br();return Ct.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.ht(t,e,r)}),Ct.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Ir.delete(n)),Ct.resolve()}getOverlaysForCollection(t,e,n){const r=br(),s=e.length+1,i=new dt(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ct.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Se((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=br(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=br(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=r)););return Ct.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new cs(e,n));let s=this.Ir.get(e);void 0===s&&(s=xr(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(t){return Ct.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Ct.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.Tr=new De(Ko.Er),this.dr=new De(Ko.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new Ko(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Vr(new Ko(t,e))}mr(t,e){t.forEach(t=>this.removeReference(t,e))}gr(t){const e=new dt(new ct([])),n=new Ko(e,t),r=new Ko(e,t+1),s=[];return this.dr.forEachInRange([n,r],t=>{this.Vr(t),s.push(t.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new dt(new ct([])),n=new Ko(e,t),r=new Ko(e,t+1);let s=xr();return this.dr.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new Ko(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ko{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return dt.comparator(t.key,e.key)||rt(t.wr,e.wr)}static Ar(t,e){return rt(t.wr,e.wr)||dt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new De(Ko.Er)}checkEmpty(t){return Ct.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new as(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.br=this.br.add(new Ko(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ct.resolve(i)}lookupMutationBatch(t,e){return Ct.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),s=r<0?0:r;return Ct.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ct.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return Ct.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ko(e,0),r=new Ko(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,r],t=>{const e=this.Dr(t.wr);s.push(e)}),Ct.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new De(rt);return e.forEach(t=>{const e=new Ko(t,0),r=new Ko(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,r],t=>{n=n.add(t.wr)})}),Ct.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;dt.isDocumentKey(s)||(s=s.child(""));const i=new Ko(new dt(s),0);let o=new De(rt);return this.br.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.wr)),!0)},i),Ct.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach(t=>{const n=this.Dr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){q(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Ct.forEach(e.mutations,r=>{const s=new Ko(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new Ko(e,0),r=this.br.firstAfterOrEqual(n);return Ct.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ct.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t){this.Mr=t,this.docs=new Se(dt.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ct.resolve(n?n.document.mutableCopy():vn.newInvalidDocument(e))}getEntries(t,e){let n=yr();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():vn.newInvalidDocument(t))}),Ct.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=yr();const i=e.path,o=new dt(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Tt(bt(o),n)<=0||(r.has(o.key)||hr(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ct.resolve(s)}getAllFromCollectionGroup(t,e,n,r){U()}Or(t,e){return Ct.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Qo(this)}getSize(t){return Ct.resolve(this.size)}}class Qo extends Ao{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)}),Ct.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t){this.persistence=t,this.Nr=new gr(t=>Gn(t),$n),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jo,this.targetCount=0,this.kr=yo.Bn()}forEachTarget(t,e){return this.Nr.forEach((t,n)=>e(n)),Ct.resolve()}getLastRemoteSnapshotVersion(t){return Ct.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ct.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),Ct.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),Ct.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new yo(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,Ct.resolve()}updateTargetData(t,e){return this.Kn(e),Ct.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,Ct.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Nr.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Ct.waitFor(s).next(()=>r)}getTargetCount(t){return Ct.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return Ct.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),Ct.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),Ct.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),Ct.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return Ct.resolve(n)}containsKey(t,e){return Ct.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e){this.qr={},this.overlays={},this.Qr=new qt(0),this.Kr=!1,this.Kr=!0,this.$r=new zo,this.referenceDelegate=t(this),this.Ur=new Ho(this),this.indexManager=new Xi,this.remoteDocumentCache=new $o(t=>this.referenceDelegate.Wr(t)),this.serializer=new mi(e),this.Gr=new qo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Bo,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Go(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){P("MemoryPersistence","Starting transaction:",t);const r=new Jo(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(t=>this.referenceDelegate.jr(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Hr(t,e){return Ct.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Jo extends St{constructor(t){super(),this.currentSequenceNumber=t}}class Yo{constructor(t){this.persistence=t,this.Jr=new jo,this.Yr=null}static Zr(t){return new Yo(t)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),Ct.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),Ct.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),Ct.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(t=>this.Xr.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Xr.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ct.forEach(this.Xr,n=>{const r=dt.fromPath(n);return this.ei(t,r).next(t=>{t||e.removeEntry(r,at.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return Ct.or([()=>Ct.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}class Xo{constructor(t,e){this.persistence=t,this.ti=new gr(t=>Kt(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=xo(this,e)}static Zr(t,e){return new Xo(t,e)}zr(){}jr(t){return Ct.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Yn(t){const e=this.er(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}er(t){let e=0;return this.Zn(t,t=>{e++}).next(()=>e)}Zn(t,e){return Ct.forEach(this.ti,(n,r)=>this.nr(t,n,r).next(t=>t?Ct.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Or(t,r=>this.nr(t,r,e).next(t=>{t||(n++,s.removeEntry(r,at.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ti.set(e,t.currentSequenceNumber),Ct.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),Ct.resolve()}removeReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),Ct.resolve()}updateLimboDocument(t,e){return this.ti.set(e,t.currentSequenceNumber),Ct.resolve()}Wr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=tn(t.data.value)),e}nr(t,e,n){return Ct.or([()=>this.persistence.Hr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.ti.get(e);return Ct.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t){this.serializer=t}O(t,e,n,r){const s=new Dt("createOrUpgrade",e);n<1&&r>=1&&(t.createObjectStore("owner"),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ht,{unique:!0}),t.createObjectStore("documentMutations")}(t),ta(t),function(t){t.createObjectStore("remoteDocuments")}(t));let i=Ct.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),ta(t)),i=i.next(()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:at.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(s))),n<4&&r>=4&&(0!==n&&(i=i.next(()=>function(t,e){return e.store("mutations").U().next(n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ht,{unique:!0});const r=e.store("mutations"),s=n.map(t=>r.put(t));return Ct.waitFor(s)})}(t,s))),i=i.next(()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)})),n<5&&r>=5&&(i=i.next(()=>this.ni(s))),n<6&&r>=6&&(i=i.next(()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.ri(s)))),n<7&&r>=7&&(i=i.next(()=>this.ii(s))),n<8&&r>=8&&(i=i.next(()=>this.si(t,s))),n<9&&r>=9&&(i=i.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)})),n<10&&r>=10&&(i=i.next(()=>this.oi(s))),n<11&&r>=11&&(i=i.next(()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&r>=12&&(i=i.next(()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:ce});e.createIndex("collectionPathOverlayIndex",le,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",he,{unique:!1})}(t)})),n<13&&r>=13&&(i=i.next(()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:Xt});e.createIndex("documentKeyIndex",Zt),e.createIndex("collectionGroupIndex",te)}(t)).next(()=>this._i(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(i=i.next(()=>this.ai(t,s))),n<15&&r>=15&&(i=i.next(()=>function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:ie}).createIndex("sequenceNumberIndex",oe,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:ae}).createIndex("documentKeyIndex",ue,{unique:!1})}(t))),n<16&&r>=16&&(i=i.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),n<17&&r>=17&&(i=i.next(()=>{!function(t){t.createObjectStore("globals",{keyPath:"name"})}(t)})),i}ri(t){let e=0;return t.store("remoteDocuments").J((t,n)=>{e+=lo(n)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(e=>Ct.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",r).next(n=>Ct.forEach(n,n=>{q(n.userId===e.userId);const r=wi(this.serializer,n);return co(t,e.userId,r).next(()=>{})}))}))}ii(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(t=>{const r=[];return n.J((n,s)=>{const i=new ct(n),o=[0,Kt(i)];r.push(e.get(o).next(n=>{return n?Ct.resolve():(r=i,e.put({targetId:0,path:Kt(r),sequenceNumber:t.highestListenSequenceNumber}));var r}))}).next(()=>Ct.waitFor(r))})}si(t,e){t.createObjectStore("collectionParents",{keyPath:se});const n=e.store("collectionParents"),r=new Zi,s=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:Kt(r)})}};return e.store("remoteDocuments").J({H:!0},(t,e)=>{const n=new ct(t);return s(n.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([t,e,n],r)=>{const i=Qt(e);return s(i.popLast())}))}oi(t){const e=t.store("targets");return e.J((t,n)=>{const r=Ii(n),s=bi(this.serializer,r);return e.put(s)})}_i(t,e){const n=e.store("remoteDocuments"),r=[];return n.J((t,n)=>{const s=e.store("remoteDocumentsV14"),i=(a=n,a.document?new dt(ct.fromString(a.document.name).popFirst(5)):a.noDocument?dt.fromSegments(a.noDocument.path):a.unknownDocument?dt.fromSegments(a.unknownDocument.path):U()).path.toArray(),o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};var a;r.push(s.put(o))}).next(()=>Ct.waitFor(r))}ai(t,e){const n=e.store("mutations"),r=ko(this.serializer),s=new Wo(Yo.Zr,this.serializer.ct);return n.U().next(t=>{const n=new Map;return t.forEach(t=>{var e;let r=null!==(e=n.get(t.userId))&&void 0!==e?e:xr();wi(this.serializer,t).keys().forEach(t=>r=r.add(t)),n.set(t.userId,r)}),Ct.forEach(n,(t,n)=>{const i=new N(n),o=Ai.lt(this.serializer,i),a=s.getIndexManager(i),u=ho.lt(i,this.serializer,a,s.referenceDelegate);return new Uo(r,u,o,a).recalculateAndSaveOverlaysForDocumentKeys(new we(e,qt.oe),t).next()})})}}function ta(t){t.createObjectStore("targetDocuments",{keyPath:ne}).createIndex("documentTargetsIndex",re,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ee,{unique:!0}),t.createObjectStore("targetGlobal")}const ea="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class na{constructor(t,e,n,r,s,i,o,a,u,c,l=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.ui=s,this.window=i,this.document=o,this.ci=u,this.li=c,this.hi=l,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=t=>Promise.resolve(),!na.D())throw new K(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Co(this,r),this.Ai=e+"main",this.serializer=new mi(a),this.Ri=new At(this.Ai,this.hi,new Zo(this.serializer)),this.$r=new ki,this.Ur=new vo(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ko(this.serializer),this.Gr=new xi,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,!1===c&&L("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new K(j.FAILED_PRECONDITION,ea);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Ur.getHighestSequenceNumber(t))}).then(t=>{this.Qr=new qt(t,this.ci)}).then(()=>{this.Kr=!0}).catch(t=>(this.Ri&&this.Ri.close(),Promise.reject(t)))}yi(t){return this.di=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ri.L(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>sa(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(t).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(t)).next(e=>this.isPrimary&&!e?this.bi(t).next(()=>!1):!!e&&this.Di(t).next(()=>!0))).catch(t=>{if(Mt(t))return P("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.ui.enqueueRetryable(()=>this.di(t)),this.isPrimary=t})}wi(t){return ra(t).get("owner").next(t=>Ct.resolve(this.vi(t)))}Ci(t){return sa(t).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Ie(t,"clientMetadata");return e.U().next(t=>{const n=this.xi(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return Ct.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Vi)for(const e of t)this.Vi.removeItem(this.Oi(e.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(t){return!!t&&t.ownerId===this.clientId}Si(t){return this.li?Ct.resolve(!0):ra(t).get("owner").next(e=>{if(null!==e&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)){if(this.vi(e)&&this.networkEnabled)return!0;if(!this.vi(e)){if(!e.allowTabSynchronization)throw new K(j.FAILED_PRECONDITION,ea);return!1}}return!(!this.networkEnabled||!this.inForeground)||sa(t).U().next(t=>void 0===this.xi(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&P("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new we(t,qt.oe);return this.bi(e).next(()=>this.Ci(e))}),this.Ri.close(),this.qi()}xi(t,e){return t.filter(t=>this.Mi(t.updateTimeMs,e)&&!this.Ni(t.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",t=>sa(t).U().next(t=>this.xi(t,18e5).map(t=>t.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(t,e){return ho.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new eo(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return Ai.lt(this.serializer,t)}getBundleCache(){return this.Gr}runTransaction(t,e,n){P("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite",s=17===(i=this.hi)?ve:16===i?ye:15===i?pe:14===i?ge:13===i?me:12===i?fe:11===i?de:void U();var i;let o;return this.Ri.runTransaction(t,r,s,r=>(o=new we(r,this.Qr?this.Qr.next():qt.oe),"readwrite-primary"===e?this.wi(o).next(t=>!!t||this.Si(o)).next(e=>{if(!e)throw L(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new K(j.FAILED_PRECONDITION,Et);return n(o)}).next(t=>this.Di(o).next(()=>t)):this.Ki(o).next(()=>n(o)))).then(t=>(o.raiseOnCommittedEvent(),t))}Ki(t){return ra(t).get("owner").next(t=>{if(null!==t&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new K(j.FAILED_PRECONDITION,ea)})}Di(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ra(t).put("owner",e)}static D(){return At.D()}bi(t){const e=ra(t);return e.get("owner").next(t=>this.vi(t)?(P("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):Ct.resolve())}Mi(t,e){const n=Date.now();return!(t<n-e||t>n&&(L(`Detected an update time that is in the future: ${t} > ${n}`),1))}fi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground="visible"===this.document.visibilityState)}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;p()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(t){var e;try{const n=null!==(null===(e=this.Vi)||void 0===e?void 0:e.getItem(this.Oi(t)));return P("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return L("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(t){L("Failed to set zombie client id.",t)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch(t){}}Oi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ra(t){return Ie(t,"owner")}function sa(t){return Ie(t,"clientMetadata")}function ia(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class oa{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=xr(),r=xr();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new oa(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=p()?8:Nt(m())>0?6:4}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Yi(t,e).next(t=>{s.result=t}).next(()=>{if(!s.result)return this.Zi(t,e,r,n).next(t=>{s.result=t})}).next(()=>{if(s.result)return;const n=new aa;return this.Xi(t,e,n).next(r=>{if(s.result=r,this.zi)return this.es(t,e,n,r.size)})}).next(()=>s.result)}es(t,n,r,s){return r.documentReadCount<this.ji?(M()<=e.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Ct.resolve()):(M()<=e.DEBUG&&P("QueryEngine","Query:",lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(M()<=e.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,rr(n))):Ct.resolve())}Yi(t,e){if(tr(e))return Ct.resolve(null);let n=rr(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=ar(e,null,"F"),n=rr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const s=xr(...r);return this.Ji.getDocuments(t,s).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.ts(e,r);return this.ns(e,i,s,n.readTime)?this.Yi(t,ar(e,null,"F")):this.rs(t,i,e,n)}))})))}Zi(t,n,r,s){return tr(n)||s.isEqual(at.min())?Ct.resolve(null):this.Ji.getDocuments(t,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?Ct.resolve(null):(M()<=e.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),lr(n)),this.rs(t,o,n,It(s,-1)).next(t=>t))})}ts(t,e){let n=new De(fr(t));return e.forEach((e,r)=>{hr(t,r)&&(n=n.add(r))}),n}ns(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,n,r){return M()<=e.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",lr(n)),this.Ji.getDocumentsMatchingQuery(t,n,_t.min(),r)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Se(rt),this._s=new gr(t=>Gn(t),$n),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Uo(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function la(t,e,n,r){return new ca(t,e,n,r)}async function ha(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(s=>(r=s,n.ls(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const s=[],i=[];let o=xr();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({hs:t,removedBatchIds:s,addedBatchIds:i}))})})}function da(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function fa(t,e,n){let r=xr(),s=xr();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=yr();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(at.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):P("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Ps:r,Is:s}})}function ma(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function ga(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Ur.getTargetData(t,e).next(s=>s?(r=s,Ct.resolve(r)):n.Ur.allocateTargetId(t).next(s=>(r=new fi(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.os.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t})}async function pa(t,e,n){const r=z(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(o){if(!Mt(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ya(t,e,n){const r=z(t);let s=at.min(),i=xr();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=z(t),s=r._s.get(n);return void 0!==s?Ct.resolve(r.os.get(s)):r.Ur.getTargetData(e,n)}(r,t,rr(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.ss.getDocumentsMatchingQuery(t,e,n?s:at.min(),n?i:xr())).next(t=>(Ia(r,dr(e),t),{documents:t,Ts:i})))}function va(t,e){const n=z(t),r=z(n.Ur),s=n.os.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",t=>r.ot(t,e).next(t=>t?t.target:null))}function wa(t,e){const n=z(t),r=n.us.get(e)||at.min();return n.persistence.runTransaction("Get new document changes","readonly",t=>n.cs.getAllFromCollectionGroup(t,e,It(r,-1),Number.MAX_SAFE_INTEGER)).then(t=>(Ia(n,e,t),t))}function Ia(t,e,n){let r=t.us.get(e)||at.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.us.set(e,r)}async function ba(t,e,n=xr()){const r=await ga(t,rr(_i(e.bundledQuery))),s=z(t);return s.persistence.runTransaction("Save named query","readwrite",t=>{const i=qs(e.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Gr.saveNamedQuery(t,e);const o=r.withResumeToken(Oe.EMPTY_BYTE_STRING,i);return s.os=s.os.insert(o.targetId,o),s.Ur.updateTargetData(t,o).next(()=>s.Ur.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>s.Ur.addMatchingKeys(t,n,r.targetId)).next(()=>s.Gr.saveNamedQuery(t,e))})}function _a(t,e){return`firestore_clients_${t}_${e}`}function Ta(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ea(t,e){return`firestore_targets_${t}_${e}`}class Sa{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Rs(t,e,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new K(r.error.code,r.error.message))),i?new Sa(t,e,r.state,s):(L("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Vs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class xa{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Rs(t,e){const n=JSON.parse(e);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new K(n.error.code,n.error.message))),s?new xa(t,n.state,r):(L("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Vs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Ca{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Rs(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Dr();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=jt(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Ca(t,s):(L("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Da{constructor(t,e){this.clientId=t,this.onlineState=e}static Rs(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Da(e.clientId,e.onlineState):(L("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Aa{constructor(){this.activeTargetIds=Dr()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Na{constructor(t,e,n,r,s){this.window=t,this.ui=e,this.persistenceKey=n,this.ps=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Se(rt),this.started=!1,this.bs=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=_a(this.persistenceKey,this.ps),this.vs=`firestore_sequence_number_${this.persistenceKey}`,this.Ss=this.Ss.insert(this.ps,new Aa),this.Cs=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.xs=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.Os=function(t){return`firestore_bundle_loaded_v2_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Qi();for(const n of t){if(n===this.ps)continue;const t=this.getItem(_a(this.persistenceKey,n));if(t){const e=Ca.Rs(n,t);e&&(this.Ss=this.Ss.insert(e.clientId,e))}}this.Ns();const e=this.storage.getItem(this.xs);if(e){const t=this.Ls(e);t&&this.Bs(t)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.vs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(t){let e=!1;return this.Ss.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.qs(t,"pending")}updateMutationState(t,e,n){this.qs(t,e,n),this.Qs(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const e=this.storage.getItem(Ea(this.persistenceKey,t));if(e){const r=xa.Rs(t,e);r&&(n=r.state)}}return e&&this.Ks.fs(t),this.Ns(),n}removeLocalQueryTarget(t){this.Ks.gs(t),this.Ns()}isLocalQueryTarget(t){return this.Ks.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Ea(this.persistenceKey,t))}updateQueryState(t,e,n){this.$s(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.Qs(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.Us(t)}notifyBundleLoaded(t){this.Ws(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return P("SharedClientState","READ",t,e),e}setItem(t,e){P("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){P("SharedClientState","REMOVE",t),this.storage.removeItem(t)}ws(t){const e=t;if(e.storageArea===this.storage){if(P("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Ds)return void L("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Cs.test(e.key)){if(null==e.newValue){const t=this.Gs(e.key);return this.zs(t,null)}{const t=this.js(e.key,e.newValue);if(t)return this.zs(t.clientId,t)}}else if(this.Fs.test(e.key)){if(null!==e.newValue){const t=this.Hs(e.key,e.newValue);if(t)return this.Js(t)}}else if(this.Ms.test(e.key)){if(null!==e.newValue){const t=this.Ys(e.key,e.newValue);if(t)return this.Zs(t)}}else if(e.key===this.xs){if(null!==e.newValue){const t=this.Ls(e.newValue);if(t)return this.Bs(t)}}else if(e.key===this.vs){const t=function(t){let e=qt.oe;if(null!=t)try{const n=JSON.parse(t);q("number"==typeof n),e=n}catch(n){L("SharedClientState","Failed to read sequence number from WebStorage",n)}return e}(e.newValue);t!==qt.oe&&this.sequenceNumberHandler(t)}else if(e.key===this.Os){const t=this.Xs(e.newValue);await Promise.all(t.map(t=>this.syncEngine.eo(t)))}}else this.bs.push(e)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(t,e,n){const r=new Sa(this.currentUser,t,e,n),s=Ta(this.persistenceKey,this.currentUser,t);this.setItem(s,r.Vs())}Qs(t){const e=Ta(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Us(t){const e={clientId:this.ps,onlineState:t};this.storage.setItem(this.xs,JSON.stringify(e))}$s(t,e,n){const r=Ea(this.persistenceKey,t),s=new xa(t,e,n);this.setItem(r,s.Vs())}Ws(t){const e=JSON.stringify(Array.from(t));this.setItem(this.Os,e)}Gs(t){const e=this.Cs.exec(t);return e?e[1]:null}js(t,e){const n=this.Gs(t);return Ca.Rs(n,e)}Hs(t,e){const n=this.Fs.exec(t),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Sa.Rs(new N(s),r,e)}Ys(t,e){const n=this.Ms.exec(t),r=Number(n[1]);return xa.Rs(r,e)}Ls(t){return Da.Rs(t)}Xs(t){return JSON.parse(t)}async Js(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.no(t.batchId,t.state,t.error);P("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Zs(t){return this.syncEngine.ro(t.targetId,t.state,t.error)}zs(t,e){const n=e?this.Ss.insert(t,e):this.Ss.remove(t),r=this.ks(this.Ss),s=this.ks(n),i=[],o=[];return s.forEach(t=>{r.has(t)||i.push(t)}),r.forEach(t=>{s.has(t)||o.push(t)}),this.syncEngine.io(i,o).then(()=>{this.Ss=n})}Bs(t){this.Ss.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ks(t){let e=Dr();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class ka{constructor(){this.so=new Aa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Aa,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{_o(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa=null;function Pa(){return null===Oa?Oa=268435456+Math.round(2147483648*Math.random()):Oa++,"0x"+Oa.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const La={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="WebChannelConnection";class Ua extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(t,e,n,r,s){const i=Pa(),o=this.xo(t,e.toUriEncodedString());P("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,s),this.No(t,o,a,n).then(e=>(P("RestConnection",`Received RPC '${t}' ${i}: `,e),e),e=>{throw F("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e})}Lo(t,e,n,r,s,i){return this.Mo(t,e,n,r,s)}Oo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+k,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}xo(t,e){const n=La[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const s=Pa();return new Promise((i,o)=>{const a=new I;a.setWithCredentials(!0),a.listenOnce(_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case T.NO_ERROR:const e=a.getResponseJson();P(Va,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case T.TIMEOUT:P(Va,`RPC '${t}' ${s} timed out`),o(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case T.HTTP_ERROR:const n=a.getStatus();if(P(Va,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(e)>=0?e:j.UNKNOWN}(e.status);o(new K(t,e.message))}else o(new K(j.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(j.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{P(Va,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);P(Va,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",u,n,15)})}Bo(t,e,n){const r=Pa(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=C(),o=x(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=s.join("");P(Va,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=i.createWebChannel(c,a);let h=!1,d=!1;const f=new Fa({Io:e=>{d?P(Va,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(P(Va,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),P(Va,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},To:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,b.EventType.OPEN,()=>{d||(P(Va,`RPC '${t}' stream ${r} transport opened.`),f.yo())}),m(l,b.EventType.CLOSE,()=>{d||(d=!0,P(Va,`RPC '${t}' stream ${r} transport closed`),f.So())}),m(l,b.EventType.ERROR,e=>{d||(d=!0,F(Va,`RPC '${t}' stream ${r} transport errored:`,e),f.So(new K(j.UNAVAILABLE,"The operation could not be completed")))}),m(l,b.EventType.MESSAGE,e=>{var n;if(!d){const s=e.data[0];q(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){P(Va,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ds[t];if(void 0!==e)return gs(e)}(e),s=o.message;void 0===n&&(n=j.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),d=!0,f.So(new K(n,s)),l.close()}else P(Va,`RPC '${t}' stream ${r} received:`,s),f.bo(s)}}),m(o,S.STAT_EVENT,e=>{e.stat===E.PROXY?P(Va,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===E.NOPROXY&&P(Va,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.wo()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(){return"undefined"!=typeof window?window:null}function Ba(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return new Ps(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&P("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,e,n,r,s,i,o,a){this.ui=t,this.Ho=n,this.Jo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ja(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===j.RESOURCE_EXHAUSTED?(L(e.toString()),L("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===j.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Yo===e&&this.P_(t,n)},e=>{t(()=>{const t=new K(j.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(t=>{n(()=>this.I_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.e_?this.E_(t):this.onNext(t))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return P("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ga extends Ka{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:U(),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(q(void 0===e||"string"==typeof e),Oe.fromBase64String(e||"")):(q(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Oe.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(t){const e=void 0===t.code?j.UNKNOWN:gs(t.code);return new K(e,t.message||"")}(a);n=new Cs(s,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gs(t,r.document.name),i=qs(r.document.updateTime),o=r.document.createTime?qs(r.document.createTime):at.min(),a=new pn({mapValue:{fields:r.document.fields}}),u=vn.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ss(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gs(t,r.document),i=r.readTime?qs(r.readTime):at.min(),o=vn.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ss([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gs(t,r.document),i=r.removedTargetIds||[];n=new Ss([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new hs(r,s),o=t.targetId;n=new xs(o,i)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return at.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?at.min():e.readTime?qs(e.readTime):at.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Hs(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Qn(r)?{documents:ti(t,r)}:{query:ei(t,r)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Vs(t,e.resumeToken);const r=Ls(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(at.min())>0){n.readTime=Fs(t,e.snapshotVersion.toTimestamp());const r=Ls(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Hs(this.serializer),e.removeTarget=t,this.a_(e)}}class $a extends Ka{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return q(!!t.streamToken),this.lastStreamToken=t.streamToken,q(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=function(t,e){return t&&t.length>0?(q(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?qs(t.updateTime):qs(e);return n.isEqual(at.min())&&(n=qs(e)),new Gr(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=qs(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Hs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Xs(this.serializer,t))};this.a_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Mo(t,zs(e,n),r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new K(j.UNKNOWN,t.toString())})}Lo(t,e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Lo(t,zs(e,n),r,i,o,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new K(j.UNKNOWN,t.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ha{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(L(e),this.D_=!1):P("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(t=>{n.enqueueAndForget(async()=>{su(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=z(t);e.L_.add(4),await Ya(e),e.q_.set("Unknown"),e.L_.delete(4),await Ja(e)}(this))})}),this.q_=new Ha(n,r)}}async function Ja(t){if(su(t))for(const e of t.B_)await e(!0)}async function Ya(t){for(const e of t.B_)await e(!1)}function Xa(t,e){const n=z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ru(n)?nu(n):Tu(n).r_()&&tu(n,e))}function Za(t,e){const n=z(t),r=Tu(n);n.N_.delete(e),r.r_()&&eu(n,e),0===n.N_.size&&(r.r_()?r.o_():su(n)&&n.q_.set("Unknown"))}function tu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(at.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Tu(t).A_(e)}function eu(t,e){t.Q_.xe(e),Tu(t).R_(e)}function nu(t){t.Q_=new As({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Tu(t).start(),t.q_.v_()}function ru(t){return su(t)&&!Tu(t).n_()&&t.N_.size>0}function su(t){return 0===z(t).L_.size}function iu(t){t.Q_=void 0}async function ou(t){t.q_.set("Online")}async function au(t){t.N_.forEach((e,n)=>{tu(t,e)})}async function uu(t,e){iu(t),ru(t)?(t.q_.M_(e),nu(t)):t.q_.set("Unknown")}async function cu(t,e,n){if(t.q_.set("Online"),e instanceof Cs&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.N_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.N_.delete(r),t.Q_.removeTarget(r))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lu(t,r)}else if(e instanceof Ss?t.Q_.Ke(e):e instanceof xs?t.Q_.He(e):t.Q_.We(e),!n.isEqual(at.min()))try{const e=await da(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.N_.get(r);s&&t.N_.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.N_.get(e);if(!r)return;t.N_.set(e,r.withResumeToken(Oe.EMPTY_BYTE_STRING,r.snapshotVersion)),eu(t,e);const s=new fi(r.target,e,n,r.sequenceNumber);tu(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(s){P("RemoteStore","Failed to raise snapshot:",s),await lu(t,s)}}async function lu(t,e,n){if(!Mt(e))throw e;t.L_.add(1),await Ya(t),t.q_.set("Offline"),n||(n=()=>da(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ja(t)})}function hu(t,e){return e().catch(n=>lu(t,n,e))}async function du(t){const e=z(t),n=Eu(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fu(e);)try{const t=await ma(e.localStore,r);if(null===t){0===e.O_.length&&n.o_();break}r=t.batchId,mu(e,t)}catch(s){await lu(e,s)}gu(e)&&pu(e)}function fu(t){return su(t)&&t.O_.length<10}function mu(t,e){t.O_.push(e);const n=Eu(t);n.r_()&&n.V_&&n.m_(e.mutations)}function gu(t){return su(t)&&!Eu(t).n_()&&t.O_.length>0}function pu(t){Eu(t).start()}async function yu(t){Eu(t).p_()}async function vu(t){const e=Eu(t);for(const n of t.O_)e.m_(n.mutations)}async function wu(t,e,n){const r=t.O_.shift(),s=us.from(r,e,n);await hu(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await du(t)}async function Iu(t,e){e&&Eu(t).V_&&await async function(t,e){if(ms(n=e.code)&&n!==j.ABORTED){const n=t.O_.shift();Eu(t).s_(),await hu(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await du(t)}var n}(t,e),gu(t)&&pu(t)}async function bu(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=su(n);n.L_.add(3),await Ya(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ja(n)}async function _u(t,e){const n=z(t);e?(n.L_.delete(2),await Ja(n)):e||(n.L_.add(2),await Ya(n),n.q_.set("Unknown"))}function Tu(t){return t.K_||(t.K_=function(t,e,n){const r=z(t);return r.w_(),new Ga(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Eo:ou.bind(null,t),Ro:au.bind(null,t),mo:uu.bind(null,t),d_:cu.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ru(t)?nu(t):t.q_.set("Unknown")):(await t.K_.stop(),iu(t))})),t.K_}function Eu(t){return t.U_||(t.U_=function(t,e,n){const r=z(t);return r.w_(),new $a(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yu.bind(null,t),mo:Iu.bind(null,t),f_:vu.bind(null,t),g_:wu.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await du(t)):(await t.U_.stop(),t.O_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Su{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new G,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Su(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xu(t,e){if(L("AsyncQueue",`${e}: ${t}`),Mt(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||dt.comparator(e.key,n.key):(t,e)=>dt.comparator(t.key,e.key),this.keyedMap=wr(),this.sortedSet=new Se(this.comparator)}static emptySet(t){return new Cu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Cu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Cu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.W_=new Se(dt.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):U():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Au{constructor(t,e,n,r,s,i,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Au(t,e,Cu.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ur(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class ku{constructor(){this.queries=Ru(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=z(t),r=n.queries;n.queries=Ru(),r.forEach((t,n)=>{for(const r of n.j_)r.onError(e)})}(this,new K(j.ABORTED,"Firestore shutting down"))}}function Ru(){return new gr(t=>cr(t),ur)}async function Mu(t,e){const n=z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Nu,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const t=xu(o,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(t)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Fu(n)}async function Ou(t,e){const n=z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.j_.indexOf(e);t>=0&&(i.j_.splice(t,1),0===i.j_.length?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Pu(t,e){const n=z(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(s)&&(r=!0);e.z_=s}}r&&Fu(n)}function Lu(t,e,n){const r=z(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Fu(t){t.Y_.forEach(t=>{t.next()})}var Vu,Uu;(Uu=Vu||(Vu={})).ea="default",Uu.Cache="cache";class qu{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Au(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=Au.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Vu.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,e){this.aa=t,this.byteLength=e}ua(){return"metadata"in this.aa}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.serializer=t}Es(t){return Gs(this.serializer,t)}ds(t){return t.metadata.exists?Ys(this.serializer,t.document,!1):vn.newNoDocument(this.Es(t.metadata.name),this.As(t.metadata.readTime))}As(t){return qs(t)}}class ju{constructor(t,e,n){this.ca=t,this.localStore=e,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Ku(t)}la(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.aa.namedQuery)this.queries.push(t.aa.namedQuery);else if(t.aa.documentMetadata){this.documents.push({metadata:t.aa.documentMetadata}),t.aa.documentMetadata.exists||++e;const n=ct.fromString(t.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.aa.document&&(this.documents[this.documents.length-1].document=t.aa.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ha(t){const e=new Map,n=new zu(this.serializer);for(const r of t)if(r.metadata.queries){const t=n.Es(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||xr()).add(t);e.set(n,r)}}return e}async complete(){const t=await async function(t,e,n,r){const s=z(t);let i=xr(),o=yr();for(const l of n){const t=e.Es(l.metadata.name);l.document&&(i=i.add(t));const n=e.ds(l);n.setReadTime(e.As(l.metadata.readTime)),o=o.insert(t,n)}const a=s.cs.newChangeBuffer({trackRemovals:!0}),u=await ga(s,(c=r,rr(Zn(ct.fromString(`__bundle__/docs/${c}`)))));var c;return s.persistence.runTransaction("Apply bundle documents","readwrite",t=>fa(t,a,o).next(e=>(a.apply(t),e)).next(e=>s.Ur.removeMatchingKeysForTargetId(t,u.targetId).next(()=>s.Ur.addMatchingKeys(t,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(t,e.Ps,e.Is)).next(()=>e.Ps)))}(this.localStore,new zu(this.serializer),this.documents,this.ca.id),e=this.ha(this.documents);for(const n of this.queries)await ba(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:t}}}function Ku(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t){this.key=t}}class $u{constructor(t){this.key=t}}class Qu{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=xr(),this.mutatedKeys=xr(),this.Aa=fr(t),this.Ra=new Cu(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Du,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const c=r.get(t),l=hr(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Aa(l,a)>0||u&&this.Aa(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ra:i,fa:n,ns:o,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const i=t.fa.G_();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return n(t)-n(e)}(t.type,e.type)||this.Aa(t.doc,e.doc)),this.pa(n),r=null!=r&&r;const o=e&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,u=a!==this.Ea;return this.Ea=a,0!==i.length||u?{snapshot:new Au(this.query,t.Ra,s,i,t.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Du,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=xr(),this.Ra.forEach(t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))});const e=[];return t.forEach(t=>{this.da.has(t)||e.push(new $u(t))}),this.da.forEach(n=>{t.has(n)||e.push(new Gu(n))}),e}ba(t){this.Ta=t.Ts,this.da=xr();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Au.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Hu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wu{constructor(t){this.key=t,this.va=!1}}class Ju{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new gr(t=>cr(t),ur),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(dt.comparator),this.Na=new Map,this.La=new jo,this.Ba={},this.ka=new Map,this.qa=yo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Yu(t,e,n=!0){const r=xc(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Zu(r,e,n,!0),s}async function Xu(t,e){const n=xc(t);await Zu(n,e,!0,!1)}async function Zu(t,e,n,r){const s=await ga(t.localStore,rr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await tc(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&Xa(t.remoteStore,s),a}async function tc(t,e,n,r,s){t.Ka=(e,n,r)=>async function(t,e,n,r){let s=e.view.ma(n);s.ns&&(s=await ya(t.localStore,e.query,!1).then(({documents:t})=>e.view.ma(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return dc(t,e.targetId,a.wa),a.snapshot}(t,e,n,r);const i=await ya(t.localStore,e,!0),o=new Qu(e,i.Ts),a=o.ma(i.documents),u=Es.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),c=o.applyChanges(a,t.isPrimaryClient,u);dc(t,n,c.wa);const l=new Hu(e,n,o);return t.Fa.set(e,l),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function ec(t,e,n){const r=z(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(t=>!ur(t,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Za(r.remoteStore,s.targetId),lc(r,s.targetId)}).catch(xt)):(lc(r,s.targetId),await pa(r.localStore,s.targetId,!0))}async function nc(t,e){const n=z(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Za(n.remoteStore,r.targetId))}async function rc(t,e){const n=z(t);try{const t=await function(t,e){const n=z(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const o=[];e.targetChanges.forEach((i,a)=>{const u=s.get(a);if(!u)return;o.push(n.Ur.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.Ur.addMatchingKeys(t,i.addedDocuments,a)));let c=u.withSequenceNumber(t.currentSequenceNumber);var l,h,d;null!==e.targetMismatches.get(a)?c=c.withResumeToken(Oe.EMPTY_BYTE_STRING,at.min()).withLastLimboFreeSnapshotVersion(at.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),h=c,d=i,(0===(l=u).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(t,c))});let a=yr(),u=xr();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(fa(t,i,e.documentUpdates).next(t=>{a=t.Ps,u=t.Is})),!r.isEqual(at.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next(e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Ct.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,u)).next(()=>a)}).then(t=>(n.os=s,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Na.get(e);r&&(q(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.va=!0:t.modifiedDocuments.size>0?q(r.va):t.removedDocuments.size>0&&(q(r.va),r.va=!1))}),await gc(n,t,e)}catch(r){await xt(r)}}function sc(t,e,n){const r=z(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Fa.forEach((n,r)=>{const s=r.view.Z_(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=z(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.j_)s.Z_(e)&&(r=!0)}),r&&Fu(n)}(r.eventManager,e),t.length&&r.Ca.d_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ic(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let t=new Se(dt.comparator);t=t.insert(i,vn.newNoDocument(i,at.min()));const n=xr().add(i),s=new Ts(at.min(),new Map,new Se(rt),t,n);await rc(r,s),r.Oa=r.Oa.remove(i),r.Na.delete(e),mc(r)}else await pa(r.localStore,e,!1).then(()=>lc(r,e,n)).catch(xt)}async function oc(t,e){const n=z(t),r=e.batch.batchId;try{const t=await function(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Ct.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);q(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=xr();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);cc(n,r,null),uc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gc(n,t)}catch(s){await xt(s)}}async function ac(t,e,n){const r=z(t);try{const t=await function(t,e){const n=z(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(q(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);cc(r,e,n),uc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gc(r,t)}catch(s){await xt(s)}}function uc(t,e){(t.ka.get(e)||[]).forEach(t=>{t.resolve()}),t.ka.delete(e)}function cc(t,e,n){const r=z(t);let s=r.Ba[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function lc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(e=>{t.La.containsKey(e)||hc(t,e)})}function hc(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(Za(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mc(t))}function dc(t,e,n){for(const r of n)r instanceof Gu?(t.La.addReference(r.key,e),fc(t,r)):r instanceof $u?(P("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||hc(t,r.key)):U()}function fc(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(P("SyncEngine","New document in limbo: "+n),t.xa.add(r),mc(t))}function mc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new dt(ct.fromString(e)),r=t.qa.next();t.Na.set(r,new Wu(n)),t.Oa=t.Oa.insert(n,r),Xa(t.remoteStore,new fi(rr(Zn(n.path)),r,"TargetPurposeLimboResolution",qt.oe))}}async function gc(t,e,n){const r=z(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((t,a)=>{o.push(r.Ka(a,e,n).then(t=>{var e;if((t||n)&&r.isPrimaryClient){const s=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=oa.Wi(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(t,e){const n=z(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Ct.forEach(e,e=>Ct.forEach(e.$i,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Ct.forEach(e.Ui,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(r){if(!Mt(r))throw r;P("LocalStore","Failed to update sequence numbers: "+r)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.os.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(t,s)}}}(r.localStore,i))}async function pc(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const t=await ha(n.localStore,e);n.currentUser=e,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach(t=>{t.forEach(t=>{t.reject(new K(j.CANCELLED,s))})}),r.ka.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await gc(n,t.hs)}var r,s}function yc(t,e){const n=z(t),r=n.Na.get(e);if(r&&r.va)return xr().add(r.key);{let t=xr();const r=n.Ma.get(e);if(!r)return t;for(const e of r){const r=n.Fa.get(e);t=t.unionWith(r.view.Va)}return t}}async function vc(t,e){const n=z(t),r=await ya(n.localStore,e.query,!0),s=e.view.ba(r);return n.isPrimaryClient&&dc(n,e.targetId,s.wa),s}async function wc(t,e){const n=z(t);return wa(n.localStore,e).then(t=>gc(n,t))}async function Ic(t,e,n,r){const s=z(t),i=await function(t,e){const n=z(t),r=z(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Mn(t,e).next(e=>e?n.localDocuments.getDocuments(t,e):Ct.resolve(null)))}(s.localStore,e);var o,a;null!==i?("pending"===n?await du(s.remoteStore):"acknowledged"===n||"rejected"===n?(cc(s,e,r||null),uc(s,e),o=s.localStore,a=e,z(z(o).mutationQueue).On(a)):U(),await gc(s,i)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function bc(t,e,n){const r=z(t),s=[],i=[];for(const o of e){let t;const e=r.Ma.get(o);if(e&&0!==e.length){t=await ga(r.localStore,rr(e[0]));for(const t of e){const e=r.Fa.get(t),n=await vc(r,e);n.snapshot&&i.push(n.snapshot)}}else{const e=await va(r.localStore,o);t=await ga(r.localStore,e),await tc(r,_c(e),o,!1,t.resumeToken)}s.push(t)}return r.Ca.d_(i),s}function _c(t){return Xn(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Tc(t){return e=z(t).localStore,z(z(e).persistence).Qi();var e}async function Ec(t,e,n,r){const s=z(t);if(s.Qa)return void P("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const t=await wa(s.localStore,dr(i[0])),r=Ts.createSynthesizedRemoteEventForCurrentChange(e,"current"===n,Oe.EMPTY_BYTE_STRING);await gc(s,t,r);break}case"rejected":await pa(s.localStore,e,!0),lc(s,e,r);break;default:U()}}async function Sc(t,e,n){const r=xc(t);if(r.Qa){for(const t of e){if(r.Ma.has(t)&&r.sharedClientState.isActiveQueryTarget(t)){P("SyncEngine","Adding an already active target "+t);continue}const e=await va(r.localStore,t),n=await ga(r.localStore,e);await tc(r,_c(e),n.targetId,!1,n.resumeToken),Xa(r.remoteStore,n)}for(const t of n)r.Ma.has(t)&&await pa(r.localStore,t,!1).then(()=>{Za(r.remoteStore,t),lc(r,t)}).catch(xt)}}function xc(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ic.bind(null,e),e.Ca.d_=Pu.bind(null,e.eventManager),e.Ca.$a=Lu.bind(null,e.eventManager),e}function Cc(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ac.bind(null,e),e}class Dc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=za(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return la(this.persistence,new ua,t.initialUser,this.serializer)}Ga(t){return new Wo(Yo.Zr,this.serializer)}Wa(t){return new ka}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dc.provider={build:()=>new Dc};class Ac extends Dc{constructor(t){super(),this.cacheSizeBytes=t}ja(t,e){q(this.persistence.referenceDelegate instanceof Xo);const n=this.persistence.referenceDelegate.garbageCollector;return new Eo(n,t.asyncQueue,e)}Ga(t){const e=void 0!==this.cacheSizeBytes?uo.withCacheSize(this.cacheSizeBytes):uo.DEFAULT;return new Wo(t=>Xo.Zr(t,e),this.serializer)}}class Nc extends Dc{constructor(t,e,n){super(),this.Ja=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ja.initialize(this,t),await Cc(this.Ja.syncEngine),await du(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(t){return la(this.persistence,new ua,t.initialUser,this.serializer)}ja(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Eo(n,t.asyncQueue,e)}Ha(t,e){const n=new Ut(e,this.persistence);return new Vt(t.asyncQueue,n)}Ga(t){const e=ia(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?uo.withCacheSize(this.cacheSizeBytes):uo.DEFAULT;return new na(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,qa(),Ba(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(t){return new ka}}class kc extends Nc{constructor(t,e){super(t,e,!1),this.Ja=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Ja.syncEngine;this.sharedClientState instanceof Na&&(this.sharedClientState.syncEngine={no:Ic.bind(null,e),ro:Ec.bind(null,e),io:Sc.bind(null,e),Qi:Tc.bind(null,e),eo:wc.bind(null,e)},await this.sharedClientState.start()),await this.persistence.yi(async t=>{await async function(t,e){const n=z(t);if(xc(n),Cc(n),!0===e&&!0!==n.Qa){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await bc(n,t.toArray());n.Qa=!0,await _u(n.remoteStore,!0);for(const r of e)Xa(n.remoteStore,r)}else if(!1===e&&!1!==n.Qa){const t=[];let e=Promise.resolve();n.Ma.forEach((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?t.push(s):e=e.then(()=>(lc(n,s),pa(n.localStore,s,!0))),Za(n.remoteStore,s)}),await e,await bc(n,t),function(t){const e=z(t);e.Na.forEach((t,n)=>{Za(e.remoteStore,n)}),e.La.pr(),e.Na=new Map,e.Oa=new Se(dt.comparator)}(n),n.Qa=!1,await _u(n.remoteStore,!1)}}(this.Ja.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start():t||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(t&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():t||this.indexBackfillerScheduler.stop())})}Wa(t){const e=qa();if(!Na.D(e))throw new K(j.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ia(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Na(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Rc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>sc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=pc.bind(null,this.syncEngine),await _u(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ku}createDatastore(t){const e=za(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ua(r));var r;return function(t,e,n,r){return new Qa(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>sc(this.syncEngine,t,0),i=Ma.D()?new Ma:new Ra,new Wa(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Ju(t,e,n,r,s,i);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=z(t);P("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await Ya(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}function Mc(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rc.provider={build:()=>new Rc};class Oc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):L("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,e){this.Xa=t,this.serializer=e,this.metadata=new G,this.buffer=new Uint8Array,this.eu=new TextDecoder("utf-8"),this.tu().then(t=>{t&&t.ua()?this.metadata.resolve(t.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.aa)}`))},t=>this.metadata.reject(t))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const t=await this.nu();if(null===t)return null;const e=this.eu.decode(t),n=Number(e);isNaN(n)&&this.ru(`length string (${e}) is not valid number`);const r=await this.iu(n);return new Bu(JSON.parse(r),t.length+n)}su(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async nu(){for(;this.su()<0&&!(await this.ou()););if(0===this.buffer.length)return null;const t=this.su();t<0&&this.ru("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async iu(t){for(;this.buffer.length<t;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const e=this.eu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}ru(t){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${t}`)}async ou(){const t=await this.Xa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(j.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(t,e){const n=z(t),r={documents:e.map(t=>Ks(n.serializer,t))},s=await n.Lo("BatchGetDocuments",n.serializer.databaseId,ct.emptyPath(),r,e.length),i=new Map;s.forEach(t=>{const e=function(t,e){return"found"in e?function(t,e){q(!!e.found),e.found.name,e.found.updateTime;const n=Gs(t,e.found.name),r=qs(e.found.updateTime),s=e.found.createTime?qs(e.found.createTime):at.min(),i=new pn({mapValue:{fields:e.found.fields}});return vn.newFoundDocument(n,r,s,i)}(t,e):"missing"in e?function(t,e){q(!!e.missing),q(!!e.readTime);const n=Gs(t,e.missing),r=qs(e.readTime);return vn.newNoDocument(n,r)}(t,e):U()}(n.serializer,t);i.set(e.key.toString(),e)});const o=[];return e.forEach(t=>{const e=i.get(t.toString());q(!!e),o.push(e)}),o}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new is(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=dt.fromPath(e);this.mutations.push(new os(n,this.precondition(n)))}),await async function(t,e){const n=z(t),r={writes:e.map(t=>Xs(n.serializer,t))};await n.Mo("Commit",n.serializer.databaseId,ct.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw U();e=at.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new K(j.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(at.min())?$r.exists(!1):$r.updateTime(e):$r.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(at.min()))throw new K(j.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $r.updateTime(e)}return $r.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e,n,r,s){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=s,this._u=n.maxAttempts,this.t_=new ja(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new Lc(this.datastore),e=this.cu(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.lu(t)}))}).catch(t=>{this.lu(t)})})}cu(t){try{const e=this.updateFunction(t);return!Bt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||"already-exists"===e||!ms(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=N.UNAUTHENTICATED,this.clientId=nt.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async t=>{P("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(P("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new G;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=xu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await ha(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bc(t);P("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>bu(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>bu(e.remoteStore,n)),t._onlineComponents=e}async function Bc(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(n){const r=n;if(!("FirebaseError"===(e=r).name?e.code===j.FAILED_PRECONDITION||e.code===j.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code))throw r;F("Error using user provided cache. Falling back to memory cache: "+r),await Uc(t,new Dc)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new Dc);var e;return t._offlineComponents}async function zc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await qc(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await qc(t,new Rc))),t._onlineComponents}function jc(t){return Bc(t).then(t=>t.persistence)}function Kc(t){return Bc(t).then(t=>t.localStore)}function Gc(t){return zc(t).then(t=>t.remoteStore)}function $c(t){return zc(t).then(t=>t.syncEngine)}function Qc(t){return zc(t).then(t=>t.datastore)}async function Hc(t){const e=await zc(t),n=e.eventManager;return n.onListen=Yu.bind(null,e.syncEngine),n.onUnlisten=ec.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Xu.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nc.bind(null,e.syncEngine),n}function Wc(t,e,n={}){const r=new G;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Oc({next:a=>{i.Za(),e.enqueueAndForget(()=>Ou(t,o));const u=a.docs.has(n);!u&&a.fromCache?s.reject(new K(j.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&a.fromCache&&r&&"server"===r.source?s.reject(new K(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:t=>s.reject(t)}),o=new qu(Zn(n.path),i,{includeMetadataChanges:!0,_a:!0});return Mu(t,o)}(await Hc(t),t.asyncQueue,e,n,r)),r.promise}function Jc(t,e,n={}){const r=new G;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Oc({next:n=>{i.Za(),e.enqueueAndForget(()=>Ou(t,o)),n.fromCache&&"server"===r.source?s.reject(new K(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new qu(n,i,{includeMetadataChanges:!0,_a:!0});return Mu(t,o)}(await Hc(t),t.asyncQueue,e,n,r)),r.promise}function Yc(t,e,n,r){const s=function(t,e){let n;return n="string"==typeof t?ys().encode(t):t,r=function(t,e){if(t instanceof Uint8Array)return Mc(t,e);if(t instanceof ArrayBuffer)return Mc(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new Pc(r,e);var r}(n,za(e));t.asyncQueue.enqueueAndForget(async()=>{!function(t,e,n){const r=z(t);(async function(t,e,n){try{const s=await e.getMetadata();if(await function(t,e){const n=z(t),r=qs(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Gr.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,s))return await e.close(),n._completeWith({taskState:"Success",documentsLoaded:(r=s).totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}),Promise.resolve(new Set);n._updateProgress(Ku(s));const i=new ju(s,t.localStore,e.serializer);let o=await e.Ua();for(;o;){const t=await i.la(o);t&&n._updateProgress(t),o=await e.Ua()}const a=await i.complete();return await gc(t,a.Ia,void 0),await function(t,e){const n=z(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Gr.saveBundleMetadata(t,e))}(t.localStore,s),n._completeWith(a.progress),Promise.resolve(a.Pa)}catch(r){return F("SyncEngine",`Loading bundle failed with ${r}`),n._failWith(r),Promise.resolve(new Set)}var r})(r,e,n).then(t=>{r.sharedClientState.notifyBundleLoaded(t)})}(await $c(t),s,r)})}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Zc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function el(t,e,n,r){if(!0===e&&!0===r)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nl(t){if(!dt.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rl(t){if(dt.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":U()}function il(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sl(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ol(t,e){if(e<=0)throw new K(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}el("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xc(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class ul{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Q;switch(t.type){case"firstParty":return new Y(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zc.get(t);e&&(P("ComponentProvider","Removing Datastore"),Zc.delete(t),e.terminate())}(this),Promise.resolve()}}function cl(t,e,n,s={}){var i;const o=(t=il(t,ul))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&F("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=N.MOCK_USER;else{e=r(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new N(o)}t._authCredentials=new H(new $(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ll(this.firestore,t,this._query)}}class hl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new hl(this.firestore,t,this._key)}}class dl extends ll{constructor(t,e,n){super(t,e,Zn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new hl(this.firestore,null,new dt(t))}withConverter(t){return new dl(this.firestore,t,this._path)}}function fl(t,e,...n){if(t=s(t),tl("collection","path",e),t instanceof ul){const r=ct.fromString(e,...n);return rl(r),new dl(t,null,r)}{if(!(t instanceof hl||t instanceof dl))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ct.fromString(e,...n));return rl(r),new dl(t.firestore,null,r)}}function ml(t,e){if(t=il(t,ul),tl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ll(t,null,(n=e,new Yn(ct.emptyPath(),n)));var n}function gl(t,e,...n){if(t=s(t),1===arguments.length&&(e=nt.newId()),tl("doc","path",e),t instanceof ul){const r=ct.fromString(e,...n);return nl(r),new hl(t,null,new dt(r))}{if(!(t instanceof hl||t instanceof dl))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ct.fromString(e,...n));return nl(r),new hl(t.firestore,t instanceof dl?t.converter:null,new dt(r))}}function pl(t,e){return t=s(t),e=s(e),(t instanceof hl||t instanceof dl)&&(e instanceof hl||e instanceof dl)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function yl(t,e){return t=s(t),e=s(e),t instanceof ll&&e instanceof ll&&t.firestore===e.firestore&&ur(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ja(this,"async_queue_retry"),this.Vu=()=>{const t=Ba();t&&P("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()},this.mu=t;const e=Ba();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ba();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new G;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Mt(t))throw t;P("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(t=>{this.Eu=t,this.du=!1;throw L("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t}).then(t=>(this.du=!1,t))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Su.createAndSchedule(this,t,e,n,t=>this.yu(t));return this.Tu.push(r),r}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let t;do{t=this.mu,await t}while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function wl(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}(t,["next","error","complete"])}class Il{constructor(){this._progressObserver={},this._taskCompletionResolver=new G,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=-1;class _l extends ul{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new vl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vl(t),this._firestoreClient=void 0,await t}}}function Tl(t,e,n){n||(n="(default)");const r=i(t,"firestore");if(r.isInitialized(n)){const t=r.getImmediate({identifier:n}),s=r.getOptions(n);if(o(s,e))return t;throw new K(j.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==e.cacheSizeBytes&&void 0!==e.localCache)throw new K(j.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==e.cacheSizeBytes&&-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function El(t,e){const n="object"==typeof t?t:a(),r="string"==typeof t?t:e||"(default)",s=i(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=u("firestore");t&&cl(s,...t)}return s}function Sl(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xl(t),t._firestoreClient}function xl(t){var e,n,r;const s=t._freezeSettings(),i=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",u=t._persistenceKey,new ze(o,a,u,(c=s).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Xc(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,u,c;t._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Vc(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}function Cl(t,e){F("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return Al(t,Rc.provider,{build:t=>new Nc(t,n.cacheSizeBytes,null==e?void 0:e.forceOwnership)}),Promise.resolve()}async function Dl(t){F("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();Al(t,Rc.provider,{build:t=>new kc(t,e.cacheSizeBytes)})}function Al(t,e,n){if((t=il(t,_l))._firestoreClient||t._terminated)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new K(j.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},xl(t)}function Nl(t){if(t._initialized&&!t._terminated)throw new K(j.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new G;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!At.D())return Promise.resolve();const e=t+"main";await At.delete(e)}(ia(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function kl(t){return function(t){const e=new G;return t.asyncQueue.enqueueAndForget(async()=>async function(e,n){const r=z(e);su(r.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=z(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.mutationQueue.getHighestUnacknowledgedBatchId(t))}(r.localStore);if(-1===t)return void n.resolve();const e=r.ka.get(t)||[];e.push(n),r.ka.set(t,e)}catch(t){const r=xu(t,"Initialization of waitForPendingWrites() operation failed");n.reject(r)}}(await $c(t),e)),e.promise}(Sl(t=il(t,_l)))}function Rl(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await jc(t),n=await Gc(t);return e.setNetworkEnabled(!0),function(t){const e=z(t);return e.L_.delete(0),Ja(e)}(n)})}(Sl(t=il(t,_l)))}function Ml(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await jc(t),n=await Gc(t);return e.setNetworkEnabled(!1),async function(t){const e=z(t);e.L_.add(0),await Ya(e),e.q_.set("Offline")}(n)})}(Sl(t=il(t,_l)))}function Ol(t){return c(t.app,"firestore",t._databaseId.database),t._delete()}function Pl(t,e){const n=Sl(t=il(t,_l)),r=new Il;return Yc(n,t._databaseId,e,r),r}function Ll(t,e){return function(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=z(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Gr.getNamedQuery(t,e))}(await Kc(t),e))}(Sl(t=il(t,_l)),e).then(e=>e?new ll(t,null,e.query):null)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Vl{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ul(Oe.fromBase64String(t))}catch(e){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ul(Oe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Bl(){return new ql("__name__")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=/^__.*__$/;class $l{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new es(t,this.data,this.fieldMask,e,this.fieldTransforms):new ts(t,this.data,e,this.fieldTransforms)}}class Ql{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new es(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Wl{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Wl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.Ou(t),r}Nu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return gh(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(0===t.length)throw this.Bu("Document fields must not be empty");if(Hl(this.Cu)&&Gl.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||za(t)}Qu(t,e,n,r=!1){return new Wl({Cu:t,methodName:e,qu:n,path:ht.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yl(t){const e=t._freezeSettings(),n=za(t._databaseId);return new Jl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xl(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);hh("Data must be an object, but it was:",o,r);const a=ch(r,o);let u,c;if(i.merge)u=new ke(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=dh(e,r,n);if(!o.contains(s))throw new K(j.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);ph(t,s)||t.push(s)}u=new ke(t),c=o.fieldTransforms.filter(t=>u.covers(t.field))}else u=null,c=o.fieldTransforms;return new $l(new pn(a),u,c)}class Zl extends zl{_toFieldTransform(t){if(2!==t.Cu)throw 1===t.Cu?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zl}}function th(t,e,n){return new Wl({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class eh extends zl{_toFieldTransform(t){return new Kr(t.path,new Lr)}isEqual(t){return t instanceof eh}}class nh extends zl{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=th(this,t,!0),n=this.Ku.map(t=>uh(t,e)),r=new Fr(n);return new Kr(t.path,r)}isEqual(t){return t instanceof nh&&o(this.Ku,t.Ku)}}class rh extends zl{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=th(this,t,!0),n=this.Ku.map(t=>uh(t,e)),r=new Ur(n);return new Kr(t.path,r)}isEqual(t){return t instanceof rh&&o(this.Ku,t.Ku)}}class sh extends zl{constructor(t,e){super(t),this.$u=e}_toFieldTransform(t){const e=new Br(t.serializer,kr(t.serializer,this.$u));return new Kr(t.path,e)}isEqual(t){return t instanceof sh&&this.$u===t.$u}}function ih(t,e,n,r){const i=t.Qu(1,e,n);hh("Data must be an object, but it was:",i,r);const o=[],a=pn.empty();_e(r,(t,r)=>{const u=mh(e,t,n);r=s(r);const c=i.Nu(u);if(r instanceof Zl)o.push(u);else{const t=uh(r,c);null!=t&&(o.push(u),a.set(u,t))}});const u=new ke(o);return new Ql(a,u,i.fieldTransforms)}function oh(t,e,n,r,i,o){const a=t.Qu(1,e,n),u=[dh(e,r,n)],c=[i];if(o.length%2!=0)throw new K(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)u.push(dh(e,o[s])),c.push(o[s+1]);const l=[],h=pn.empty();for(let f=u.length-1;f>=0;--f)if(!ph(l,u[f])){const t=u[f];let e=c[f];e=s(e);const n=a.Nu(t);if(e instanceof Zl)l.push(t);else{const r=uh(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new ke(l);return new Ql(h,d,a.fieldTransforms)}function ah(t,e,n,r=!1){return uh(n,t.Qu(r?4:3,e))}function uh(t,e){if(lh(t=s(t)))return hh("Unsupported field value:",e,t),ch(t,e);if(t instanceof zl)return function(t,e){if(!Hl(e.Cu))throw e.Bu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Bu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&4!==e.Cu)throw e.Bu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=uh(s,e.Lu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=s(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return kr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ot.fromDate(t);return{timestampValue:Fs(e.serializer,n)}}if(t instanceof ot){const n=new ot(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Fs(e.serializer,n)}}if(t instanceof jl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ul)return{bytesValue:Vs(e.serializer,t._byteString)};if(t instanceof hl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Bs(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Kl)return n=e,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map(t=>{if("number"!=typeof t)throw n.Bu("VectorValues must only contain numeric values.");return Ar(n.serializer,t)})}}}}};var n;throw e.Bu(`Unsupported field value: ${sl(t)}`)}(t,e)}function ch(t,e){const n={};return Ee(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_e(t,(t,r)=>{const s=uh(r,e.Mu(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function lh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof jl||t instanceof Ul||t instanceof hl||t instanceof zl||t instanceof Kl)}function hh(t,e,n){if(!lh(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=sl(n);throw"an object"===r?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}var r}function dh(t,e,n){if((e=s(e))instanceof ql)return e._internalPath;if("string"==typeof e)return mh(t,e);throw gh("Field path arguments must be of type string or ",t,!1,void 0,n)}const fh=new RegExp("[~\\*/\\[\\]]");function mh(t,e,n){if(e.search(fh)>=0)throw gh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ql(...e.split("."))._internalPath}catch(r){throw gh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gh(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(j.INVALID_ARGUMENT,a+t+u)}function ph(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new vh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(wh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class vh extends yh{data(){return super.data()}}function wh(t,e){return"string"==typeof e?mh(t,e):e instanceof ql?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bh{}class _h extends bh{}function Th(t,e,...n){let r=[];e instanceof bh&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof xh).length,n=t.filter(t=>t instanceof Eh).length;if(e>1||e>0&&n>0)throw new K(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Eh extends _h{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Eh(t,e,n)}_apply(t){const e=this._parse(t);return jh(t._query,e),new ll(t.firestore,t.converter,or(t._query,e))}_parse(t){const e=Yl(t.firestore);return function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new K(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){zh(o,i);const e=[];for(const n of o)e.push(Bh(r,t,n));a={arrayValue:{values:e}}}else a=Bh(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||zh(o,i),a=ah(n,e,o,"in"===i||"not-in"===i);return Sn.create(s,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Sh(t,e,n){const r=e,s=wh("where",t);return Eh._create(s,r,n)}class xh extends bh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xh(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:xn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)jh(n,s),n=or(n,s)}(t._query,e),new ll(t.firestore,t.converter,or(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Ch(...t){return t.forEach(t=>Kh("or",t)),xh._create("or",t)}function Dh(...t){return t.forEach(t=>Kh("and",t)),xh._create("and",t)}class Ah extends _h{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ah(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new K(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new K(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _n(e,n)}(t._query,this._field,this._direction);return new ll(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Yn(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Nh(t,e="asc"){const n=e,r=wh("orderBy",t);return Ah._create(r,n)}class kh extends _h{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new kh(t,e,n)}_apply(t){return new ll(t.firestore,t.converter,ar(t._query,this._limit,this._limitType))}}function Rh(t){return ol("limit",t),kh._create("limit",t,"F")}function Mh(t){return ol("limitToLast",t),kh._create("limitToLast",t,"L")}class Oh extends _h{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Oh(t,e,n)}_apply(t){const e=qh(t,this.type,this._docOrFields,this._inclusive);return new ll(t.firestore,t.converter,(n=t._query,r=e,new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}function Ph(...t){return Oh._create("startAt",t,!0)}function Lh(...t){return Oh._create("startAfter",t,!1)}class Fh extends _h{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Fh(t,e,n)}_apply(t){const e=qh(t,this.type,this._docOrFields,this._inclusive);return new ll(t.firestore,t.converter,(n=t._query,r=e,new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}}function Vh(...t){return Fh._create("endBefore",t,!1)}function Uh(...t){return Fh._create("endAt",t,!0)}function qh(t,e,n,r){if(n[0]=s(n[0]),n[0]instanceof yh)return function(t,e,n,r,s){if(!r)throw new K(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of nr(t))if(o.field.isKeyField())i.push(en(e,r.key));else{const t=r.data.field(o.field);if(Ue(t))throw new K(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new K(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new wn(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Yl(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new K(j.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let u=0;u<s.length;u++){const i=s[u];if(o[u].field.isKeyField()){if("string"!=typeof i)throw new K(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!er(t)&&-1!==i.indexOf("/"))throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(ct.fromString(i));if(!dt.isDocumentKey(n))throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new dt(n);a.push(en(e,s))}else{const t=ah(n,r,i);a.push(t)}}return new wn(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Bh(t,e,n){if("string"==typeof(n=s(n))){if(""===n)throw new K(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!er(e)&&-1!==n.indexOf("/"))throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ct.fromString(n));if(!dt.isDocumentKey(r))throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return en(t,new dt(r))}if(n instanceof hl)return en(t,n._key);throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sl(n)}.`)}function zh(t,e){if(!Array.isArray(t)||0===t.length)throw new K(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jh(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new K(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Kh(t,e){if(!(e instanceof Eh||e instanceof xh))throw new K(j.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Gh{convertValue(t,e="none"){switch($e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ve(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw U()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return _e(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){var e,n,r;const s=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(t=>Fe(t.doubleValue));return new Kl(s)}convertGeoPoint(t){return new jl(Fe(t.latitude),Fe(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=qe(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Be(t));default:return null}}convertTimestamp(t){const e=Le(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ct.fromString(t);q(di(n));const r=new je(n.get(1),n.get(3)),s=new dt(n.popFirst(5));return r.isEqual(e)||L(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Qh extends Gh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ul(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new hl(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){return new Fl("sum",dh("sum",t))}function Wh(t){return new Fl("avg",dh("average",t))}function Jh(){return new Fl("count")}function Yh(t,e){var n,r;return t instanceof Fl&&e instanceof Fl&&t.aggregateType===e.aggregateType&&(null===(n=t._internalFieldPath)||void 0===n?void 0:n.canonicalString())===(null===(r=e._internalFieldPath)||void 0===r?void 0:r.canonicalString())}function Xh(t,e){return yl(t.query,e.query)&&o(t.data(),e.data())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class td extends yh{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ed(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(wh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ed extends td{data(t={}){return super.data(t)}}class nd{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Zh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ed(this._firestore,this._userDataWriter,n.key,n,new Zh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new ed(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Zh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new ed(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Zh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:rd(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function rd(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function sd(t,e){return t instanceof td&&e instanceof td?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof nd&&e instanceof nd&&t._firestore===e._firestore&&yl(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){t=il(t,hl);const e=il(t.firestore,_l);return Wc(Sl(e),t._key).then(n=>wd(e,t,n))}class od extends Gh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ul(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new hl(this.firestore,null,e)}}function ad(t){t=il(t,hl);const e=il(t.firestore,_l),n=Sl(e),r=new od(e);return function(t,e){const n=new G;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=z(t);return n.persistence.runTransaction("read document","readonly",t=>n.localDocuments.getDocument(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new K(j.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){const t=xu(r,`Failed to get document '${e} from cache`);n.reject(t)}}(await Kc(t),e,n)),n.promise}(n,t._key).then(n=>new td(e,r,t._key,n,new Zh(null!==n&&n.hasLocalMutations,!0),t.converter))}function ud(t){t=il(t,hl);const e=il(t.firestore,_l);return Wc(Sl(e),t._key,{source:"server"}).then(n=>wd(e,t,n))}function cd(t){t=il(t,ll);const e=il(t.firestore,_l),n=Sl(e),r=new od(e);return Ih(t._query),Jc(n,t._query).then(n=>new nd(e,r,t,n))}function ld(t){t=il(t,ll);const e=il(t.firestore,_l),n=Sl(e),r=new od(e);return function(t,e){const n=new G;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await ya(t,e,!0),s=new Qu(e,r.Ts),i=s.ma(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(r){const t=xu(r,`Failed to execute query '${e} against cache`);n.reject(t)}}(await Kc(t),e,n)),n.promise}(n,t._query).then(n=>new nd(e,r,t,n))}function hd(t){t=il(t,ll);const e=il(t.firestore,_l),n=Sl(e),r=new od(e);return Jc(n,t._query,{source:"server"}).then(n=>new nd(e,r,t,n))}function dd(t,e,n){t=il(t,hl);const r=il(t.firestore,_l),s=$h(t.converter,e,n);return vd(r,[Xl(Yl(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,$r.none())])}function fd(t,e,n,...r){t=il(t,hl);const i=il(t.firestore,_l),o=Yl(i);let a;return a="string"==typeof(e=s(e))||e instanceof ql?oh(o,"updateDoc",t._key,e,n,r):ih(o,"updateDoc",t._key,e),vd(i,[a.toMutation(t._key,$r.exists(!0))])}function md(t){return vd(il(t.firestore,_l),[new is(t._key,$r.none())])}function gd(t,e){const n=il(t.firestore,_l),r=gl(t),s=$h(t.converter,e);return vd(n,[Xl(Yl(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,$r.exists(!1))]).then(()=>r)}function pd(t,...e){var n,r,i;t=s(t);let o={includeMetadataChanges:!1,source:"default"},a=0;"object"!=typeof e[a]||wl(e[a])||(o=e[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(wl(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,l,h;if(t instanceof hl)l=il(t.firestore,_l),h=Zn(t._key.path),c={next:n=>{e[a]&&e[a](wd(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=il(t,ll);l=il(n.firestore,_l),h=n._query;const r=new od(l);c={next:t=>{e[a]&&e[a](new nd(l,r,n,t))},error:e[a+1],complete:e[a+2]},Ih(t._query)}return function(t,e,n,r){const s=new Oc(r),i=new qu(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Mu(await Hc(t),i)),()=>{s.Za(),t.asyncQueue.enqueueAndForget(async()=>Ou(await Hc(t),i))}}(Sl(l),h,u,c)}function yd(t,e){return function(t,e){const n=new Oc(e);return t.asyncQueue.enqueueAndForget(async()=>{return e=await Hc(t),r=n,z(e).Y_.add(r),void r.next();var e,r}),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>{return e=await Hc(t),r=n,void z(e).Y_.delete(r);var e,r})}}(Sl(t=il(t,_l)),wl(e)?e:{next:e})}function vd(t,e){return function(t,e){const n=new G;return t.asyncQueue.enqueueAndForget(async()=>async function(e,n,r){const s=Cc(e);try{const t=await function(t,e){const n=z(t),r=ot.now(),s=e.reduce((t,e)=>t.add(e.key),xr());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=yr(),u=xr();return n.cs.getEntries(t,s).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(u=u.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(s=>{i=s;const o=[];for(const t of e){const e=Xr(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new es(t.key,e,yn(e.value.mapValue),$r.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Ir(i)}))}(s.localStore,n);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ba[t.currentUser.toKey()];r||(r=new Se(rt)),r=r.insert(e,n),t.Ba[t.currentUser.toKey()]=r}(s,t.batchId,r),await gc(s,t.changes),await du(s.remoteStore)}catch(t){const n=xu(t,"Failed to persist write");r.reject(n)}}(await $c(t),e,n)),n.promise}(Sl(t),e)}function wd(t,e,n){const r=n.docs.get(e._key),s=new od(t);return new td(t,s,e._key,r,new Zh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t){return bd(t,{count:Jh()})}function bd(t,e){const n=il(t.firestore,_l),r=Sl(n),s=Te(e,(t,e)=>new ls(e,t.aggregateType,t._internalFieldPath));return function(t,e,n){const r=new G;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await Qc(t);r.resolve(async function(t,e,n){var r;const s=z(t),{request:i,ut:o,parent:a}=ni(s.serializer,sr(e),n);s.connection.Fo||delete i.parent;const u=(await s.Lo("RunAggregationQuery",s.serializer.databaseId,a,i,1)).filter(t=>!!t.result);q(1===u.length);const c=null===(r=u[0].result)||void 0===r?void 0:r.aggregateFields;return Object.keys(c).reduce((t,e)=>(t[o[e]]=c[e],t),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}(r,t._query,s).then(e=>function(t,e,n){const r=new od(t);return new Vl(e,r,n)}(n,t,e))}class _d{constructor(t){this.kind="memory",this._onlineComponentProvider=Rc.provider,(null==t?void 0:t.garbageCollector)?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=Dc.provider}toJSON(){return{kind:this.kind}}}class Td{constructor(t){let e;this.kind="persistent",(null==t?void 0:t.tabManager)?(t.tabManager._initialize(t),e=t.tabManager):(e=Rd(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Ed{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Dc.provider}toJSON(){return{kind:this.kind}}}class Sd{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Ac(t)}}toJSON(){return{kind:this.kind}}}function xd(){return new Ed}function Cd(t){return new Sd(null==t?void 0:t.cacheSizeBytes)}function Dd(t){return new _d(t)}function Ad(t){return new Td(t)}class Nd{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Rc.provider,this._offlineComponentProvider={build:e=>new Nc(e,null==t?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class kd{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Rc.provider,this._offlineComponentProvider={build:e=>new kc(e,null==t?void 0:t.cacheSizeBytes)}}}function Rd(t){return new Nd(null==t?void 0:t.forceOwnership)}function Md(){return new kd}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Yl(t)}set(t,e,n){this._verifyNotCommitted();const r=Ld(t,this._firestore),s=$h(r.converter,e,n),i=Xl(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,$r.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Ld(t,this._firestore);let o;return o="string"==typeof(e=s(e))||e instanceof ql?oh(this._dataReader,"WriteBatch.update",i._key,e,n,r):ih(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,$r.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Ld(t,this._firestore);return this._mutations=this._mutations.concat(new is(e._key,$r.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ld(t,e){if((t=s(t)).firestore!==e)throw new K(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Yl(t)}get(t){const e=Ld(t,this._firestore),n=new Qh(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return U();const r=t[0];if(r.isFoundDocument())return new yh(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new yh(this._firestore,n,e._key,null,e.converter);throw U()})}set(t,e,n){const r=Ld(t,this._firestore),s=$h(r.converter,e,n),i=Xl(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(t,e,n,...r){const i=Ld(t,this._firestore);let o;return o="string"==typeof(e=s(e))||e instanceof ql?oh(this._dataReader,"Transaction.update",i._key,e,n,r):ih(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=Ld(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Ld(t,this._firestore),n=new od(this._firestore);return super.get(t).then(t=>new td(this._firestore,n,e._key,t._document,new Zh(!1,!1),e.converter))}}function Vd(t,e,n){t=il(t,_l);const r=Object.assign(Object.assign({},Od),n);return function(t){if(t.maxAttempts<1)throw new K(j.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(t,e,n){const r=new G;return t.asyncQueue.enqueueAndForget(async()=>{const s=await Qc(t);new Fc(t.asyncQueue,s,n,e,r).au()}),r.promise}(Sl(t),n=>e(new Fd(t,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){return new Zl("deleteField")}function qd(){return new eh("serverTimestamp")}function Bd(...t){return new nh("arrayUnion",t)}function zd(...t){return new rh("arrayRemove",t)}function jd(t){return new sh("increment",t)}function Kd(t){return new Kl(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t){return Sl(t=il(t,_l)),new Pd(t,e=>vd(t,e))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function $d(t,e){const n=Sl(t=il(t,_l));if(!n._uninitializedComponentsProvider||"memory"===n._uninitializedComponentsProvider._offline.kind)return F("Cannot enable indexes when persistence is disabled"),Promise.resolve();return function(t,e){return t.asyncQueue.enqueue(async()=>async function(t,e){const n=z(t),r=n.indexManager,s=[];return n.persistence.runTransaction("Configure indexes","readwrite",t=>r.getFieldIndexes(t).next(n=>
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function(t,e,n,r,s){t=[...t],e=[...e],t.sort(n),e.sort(n);const i=t.length,o=e.length;let a=0,u=0;for(;a<o&&u<i;){const i=n(t[u],e[a]);i<0?s(t[u++]):i>0?r(e[a++]):(a++,u++)}for(;a<o;)r(e[a++]);for(;u<i;)s(t[u++])}(n,e,pt,e=>{s.push(r.addFieldIndex(t,e))},e=>{s.push(r.deleteFieldIndex(t,e))})).next(()=>Ct.waitFor(s)))}(await Kc(t),e))}(n,function(t){const e="string"==typeof t?function(t){try{return JSON.parse(t)}catch(e){throw new K(j.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==e?void 0:e.message))}}(t):t,n=[];if(Array.isArray(e.indexes))for(const r of e.indexes){const t=Qd(r,"collectionGroup"),e=[];if(Array.isArray(r.fields))for(const n of r.fields){const t=mh("setIndexConfiguration",Qd(n,"fieldPath"));"CONTAINS"===n.arrayConfig?e.push(new yt(t,2)):"ASCENDING"===n.order?e.push(new yt(t,0)):"DESCENDING"===n.order&&e.push(new yt(t,1))}n.push(new ft(ft.UNKNOWN_ID,t,e,wt.empty()))}return n}(e))}function Qd(t,e){if("string"!=typeof t[e])throw new K(j.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function Wd(t){var e;t=il(t,_l);const n=tf.get(t);if(n)return n;if("persistent"!==(null===(e=Sl(t)._uninitializedComponentsProvider)||void 0===e?void 0:e._offline.kind))return null;const r=new Hd(t);return tf.set(t,r),r}function Jd(t){Zd(t,!0)}function Yd(t){Zd(t,!1)}function Xd(t){(function(t){return t.asyncQueue.enqueue(async()=>function(t){const e=z(t),n=e.indexManager;return e.persistence.runTransaction("Delete All Indexes","readwrite",t=>n.deleteAllFieldIndexes(t))}(await Kc(t)))})(Sl(t._firestore)).then(t=>P("deleting all persistent cache indexes succeeded")).catch(t=>F("deleting all persistent cache indexes failed",t))}function Zd(t,e){(function(t,e){return t.asyncQueue.enqueue(async()=>{return n=await Kc(t),r=e,void(z(n).ss.zi=r);var n,r})})(Sl(t._firestore),e).then(t=>P(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(t=>F(`setting persistent cache index auto creation isEnabled=${e} failed`,t))}const tf=new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){var e;const n=null===(e=Sl(il(t.firestore,_l))._onlineComponents)||void 0===e?void 0:e.datastore.serializer;return void 0===n?null:ei(n,rr(t._query))._t}function nf(t,e){var n;const r=Te(e,(t,e)=>new ls(e,t.aggregateType,t._internalFieldPath)),s=null===(n=Sl(il(t.firestore,_l))._onlineComponents)||void 0===n?void 0:n.datastore.serializer;return void 0===s?null:ni(s,sr(t._query),r,!0).request}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return sf.instance.onExistenceFilterMismatch(t)}}class sf{constructor(){this.Uu=new Map}static get instance(){return of||(of=new sf,function(t){if(ps)throw new Error("a TestingHooksSpi instance is already set");ps=t}(of)),of}et(t){this.Uu.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.Uu;return n.set(e,t),()=>n.delete(e)}}let of=null;!function(t,e=!0){k=l,h(new d("firestore",(t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new _l(new W(t.getProvider("auth-internal")),new Z(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),f(A,"4.7.3",t),f(A,"4.7.3","esm2017")}();export{Gh as AbstractUserDataWriter,Fl as AggregateField,Vl as AggregateQuerySnapshot,Ul as Bytes,bl as CACHE_SIZE_UNLIMITED,dl as CollectionReference,hl as DocumentReference,td as DocumentSnapshot,ql as FieldPath,zl as FieldValue,_l as Firestore,K as FirestoreError,jl as GeoPoint,Il as LoadBundleTask,Hd as PersistentCacheIndexManager,ll as Query,xh as QueryCompositeFilterConstraint,_h as QueryConstraint,ed as QueryDocumentSnapshot,Fh as QueryEndAtConstraint,Eh as QueryFieldFilterConstraint,kh as QueryLimitConstraint,Ah as QueryOrderByConstraint,nd as QuerySnapshot,Oh as QueryStartAtConstraint,Zh as SnapshotMetadata,ot as Timestamp,Fd as Transaction,Kl as VectorValue,Pd as WriteBatch,nt as _AutoId,Oe as _ByteString,je as _DatabaseId,dt as _DocumentKey,tt as _EmptyAppCheckTokenProvider,Q as _EmptyAuthCredentialsProvider,ht as _FieldPath,rf as _TestingHooks,il as _cast,B as _debugAssert,nf as _internalAggregationQueryToProtoRunAggregationQueryRequest,ef as _internalQueryToProtoQueryTarget,Me as _isBase64Available,F as _logWarn,el as _validateIsNotUsedTogether,gd as addDoc,Yh as aggregateFieldEqual,Xh as aggregateQuerySnapshotEqual,Dh as and,zd as arrayRemove,Bd as arrayUnion,Wh as average,Nl as clearIndexedDbPersistence,fl as collection,ml as collectionGroup,cl as connectFirestoreEmulator,Jh as count,Xd as deleteAllPersistentCacheIndexes,md as deleteDoc,Ud as deleteField,Ml as disableNetwork,Yd as disablePersistentCacheIndexAutoCreation,gl as doc,Bl as documentId,Cl as enableIndexedDbPersistence,Dl as enableMultiTabIndexedDbPersistence,Rl as enableNetwork,Jd as enablePersistentCacheIndexAutoCreation,Uh as endAt,Vh as endBefore,Sl as ensureFirestoreConfigured,vd as executeWrite,bd as getAggregateFromServer,Id as getCountFromServer,id as getDoc,ad as getDocFromCache,ud as getDocFromServer,cd as getDocs,ld as getDocsFromCache,hd as getDocsFromServer,El as getFirestore,Wd as getPersistentCacheIndexManager,jd as increment,Tl as initializeFirestore,Rh as limit,Mh as limitToLast,Pl as loadBundle,xd as memoryEagerGarbageCollector,Dd as memoryLocalCache,Cd as memoryLruGarbageCollector,Ll as namedQuery,pd as onSnapshot,yd as onSnapshotsInSync,Ch as or,Nh as orderBy,Ad as persistentLocalCache,Md as persistentMultipleTabManager,Rd as persistentSingleTabManager,Th as query,yl as queryEqual,pl as refEqual,Vd as runTransaction,qd as serverTimestamp,dd as setDoc,$d as setIndexConfiguration,O as setLogLevel,sd as snapshotEqual,Lh as startAfter,Ph as startAt,Hh as sum,Ol as terminate,fd as updateDoc,Kd as vector,kl as waitForPendingWrites,Sh as where,Gd as writeBatch};
