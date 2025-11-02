import{F as e,u as t,e as n,w as s,l as r,t as o,h as i,C as a,r as c,S as u}from"./index.esm2017-4c4fc609.js";
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
 */const l="firebasestorage.googleapis.com",h="storageBucket";
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
class _ extends e{constructor(e,t,n=0){super(g(e),`Firebase Storage: ${t} (${g(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return g(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,p,f,m;function g(e){return"storage/"+e}function b(){return new _(d.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function T(){return new _(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function R(){return new _(d.CANCELED,"User canceled the upload/download.")}function w(){return new _(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function v(e){return new _(d.INVALID_ARGUMENT,e)}function k(){return new _(d.APP_DELETED,"The Firebase app was deleted.")}function E(e){return new _(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function y(e,t){return new _(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function U(e){throw new _(d.INTERNAL_ERROR,"Internal error: "+e)}
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
 */(p=d||(d={})).UNKNOWN="unknown",p.OBJECT_NOT_FOUND="object-not-found",p.BUCKET_NOT_FOUND="bucket-not-found",p.PROJECT_NOT_FOUND="project-not-found",p.QUOTA_EXCEEDED="quota-exceeded",p.UNAUTHENTICATED="unauthenticated",p.UNAUTHORIZED="unauthorized",p.UNAUTHORIZED_APP="unauthorized-app",p.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",p.INVALID_CHECKSUM="invalid-checksum",p.CANCELED="canceled",p.INVALID_EVENT_NAME="invalid-event-name",p.INVALID_URL="invalid-url",p.INVALID_DEFAULT_BUCKET="invalid-default-bucket",p.NO_DEFAULT_BUCKET="no-default-bucket",p.CANNOT_SLICE_BLOB="cannot-slice-blob",p.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",p.NO_DOWNLOAD_URL="no-download-url",p.INVALID_ARGUMENT="invalid-argument",p.INVALID_ARGUMENT_COUNT="invalid-argument-count",p.APP_DELETED="app-deleted",p.INVALID_ROOT_OPERATION="invalid-root-operation",p.INVALID_FORMAT="invalid-format",p.INTERNAL_ERROR="internal-error",p.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class O{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=O.makeFromUrl(e,t)}catch(r){return new O(e,"")}if(""===n.path)return n;throw s=e,new _(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.");var s}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+s+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let c=0;c<a.length;c++){const t=a[c],s=t.regex.exec(e);if(s){const e=s[t.indices.bucket];let r=s[t.indices.path];r||(r=""),n=new O(e,r),t.postModify(n);break}}if(null==n)throw function(e){return new _(d.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class A{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function C(e){return"string"==typeof e||e instanceof String}function x(e){return N()&&e instanceof Blob}function N(){return"undefined"!=typeof Blob}function S(e,t,n,s){if(s<t)throw v(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw v(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function I(e,t,n){let s=t;return null==n&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function P(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){n=n+(t(s)+"="+t(e[s]))+"&"}return n=n.slice(0,-1),n}
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
 */
function D(e,t){const n=e>=500&&e<600,s=-1!==[408,429].indexOf(e),r=-1!==t.indexOf(e);return n||s||r}
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
 */(m=f||(f={}))[m.NO_ERROR=0]="NO_ERROR",m[m.NETWORK_ERROR=1]="NETWORK_ERROR",m[m.ABORT=2]="ABORT";class L{constructor(e,t,n,s,r,o,i,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new B(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const t=n.getErrorCode()===f.NO_ERROR,r=n.getStatus();if(!t||D(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===f.ABORT;return void e(!1,new B(!1,null,t))}const o=-1!==this.successCodes_.indexOf(r);e(!0,new B(o,n))})},t=(e,t)=>{const n=this.resolve_,s=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());void 0!==e?n(e):n()}catch(o){s(o)}else if(null!==r){const e=b();e.serverResponse=r.getErrorText(),this.errorCallback_?s(this.errorCallback_(r,e)):s(e)}else if(t.canceled){s(this.appDelete_?k():R())}else{s(T())}};this.canceled_?t(0,new B(!1,null,!0)):this.backoffId_=function(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){r=setTimeout(()=>{r=null,e(d,c())},t)}function _(){o&&clearTimeout(o)}function d(e,...t){if(u)return void _();if(e)return _(),void l.call(null,e,...t);if(c()||i)return _(),void l.call(null,e,...t);let n;s<64&&(s*=2),1===a?(a=2,n=0):n=1e3*(s+Math.random()),h(n)}let p=!1;function f(e){p||(p=!0,_(),u||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),o=setTimeout(()=>{i=!0,f(!0)},n),f}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class B{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function q(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(N())return new Blob(e);throw new _(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
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
 */
function M(e){if("undefined"==typeof atob)throw t="base-64",new _(d.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
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
 */const F={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class H{constructor(e,t){this.data=e,this.contentType=t||null}}function z(e,t){switch(e){case F.RAW:return new H(j(t));case F.BASE64:case F.BASE64URL:return new H(G(e,t));case F.DATA_URL:return new H(function(e){const t=new $(e);return t.base64?G(F.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw y(F.DATA_URL,"Malformed data URL.")}return j(t)}(t.rest)}(t),new $(t).contentType)}throw b()}function j(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|63&s);else if(55296==(64512&s)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){s=65536|(1023&s)<<10|1023&e.charCodeAt(++n),t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else t.push(239,191,189)}else 56320==(64512&s)?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(t)}function G(e,t){switch(e){case F.BASE64:{const n=-1!==t.indexOf("-"),s=-1!==t.indexOf("_");if(n||s){throw y(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case F.BASE64URL:{const n=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(n||s){throw y(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=M(t)}catch(r){if(r.message.includes("polyfill"))throw r;throw y(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class ${constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw y(F.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class V{constructor(e,t){let n=0,s="";x(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(x(this.data_)){const o=this.data_,i=(s=e,r=t,(n=o).webkitSlice?n.webkitSlice(s,r):n.mozSlice?n.mozSlice(s,r):n.slice?n.slice(s,r):null);return null===i?null:new V(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new V(n,!0)}var n,s,r}static getBlob(...e){if(N()){const t=e.map(e=>e instanceof V?e.data_:e);return new V(q.apply(null,t))}{const t=e.map(e=>C(e)?z(F.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const s=new Uint8Array(n);let r=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)s[r++]=e[t]}),new V(s,!0)}}uploadData(){return this.data_}}
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
 */function W(e){let t;try{t=JSON.parse(e)}catch(s){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
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
 */function X(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function K(e,t){return t}class Z{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||K}}let J=null;function Y(){if(J)return J;const e=[];e.push(new Z("bucket")),e.push(new Z("generation")),e.push(new Z("metageneration")),e.push(new Z("name","fullPath",!0));const t=new Z("name");t.xform=function(e,t){return function(e){return!C(e)||e.length<2?e:X(e)}(t)},e.push(t);const n=new Z("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Z("timeCreated")),e.push(new Z("updated")),e.push(new Z("md5Hash",null,!0)),e.push(new Z("cacheControl",null,!0)),e.push(new Z("contentDisposition",null,!0)),e.push(new Z("contentEncoding",null,!0)),e.push(new Z("contentLanguage",null,!0)),e.push(new Z("contentType",null,!0)),e.push(new Z("metadata","customMetadata",!0)),J=e,J}function Q(e,t,n){const s={type:"file"},r=n.length;for(let o=0;o<r;o++){const e=n[o];s[e.local]=e.xform(s,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,s=e.fullPath,r=new O(n,s);return t._makeStorageReference(r)}})}(s,e),s}function ee(e,t,n){const s=W(t);if(null===s)return null;return Q(e,s,n)}function te(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const s=t[r];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}
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
 */const ne="prefixes",se="items";function re(e,t,n){const s=W(n);if(null===s)return null;return function(e,t,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ne])for(const r of n[ne]){const n=r.replace(/\/$/,""),o=e._makeStorageReference(new O(t,n));s.prefixes.push(o)}if(n[se])for(const r of n[se]){const n=e._makeStorageReference(new O(t,r.name));s.items.push(n)}return s}(e,t,s)}class oe{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function ie(e){if(!e)throw b()}function ae(e,t){return function(n,s){const r=ee(e,s,t);return ie(null!==r),r}}function ce(e,t){return function(n,s){const r=ee(e,s,t);return ie(null!==r),function(e,t,n,s){const r=W(t);if(null===r)return null;if(!C(r.downloadTokens))return null;const o=r.downloadTokens;if(0===o.length)return null;const i=encodeURIComponent;return o.split(",").map(t=>{const r=e.bucket,o=e.fullPath;return I("/b/"+i(r)+"/o/"+i(o),n,s)+P({alt:"media",token:t})})[0]}(r,s,e.host,e._protocol)}}function ue(e){return function(t,n){let s;var r,o;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new _(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new _(d.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,s=new _(d.QUOTA_EXCEEDED,"Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(r=e.path,s=new _(d.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}}function le(e){const t=ue(e);return function(n,s){let r=t(n,s);var o;return 404===n.getStatus()&&(o=e.path,r=new _(d.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")),r.serverResponse=s.serverResponse,r}}function he(e,t,n){const s=I(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,o=new oe(s,"GET",ae(e,n),r);return o.errorHandler=le(t),o}function _e(e,t,n,s,r){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),s&&(o.pageToken=s),r&&(o.maxResults=r);const i=I(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,c=new oe(i,"GET",function(e,t){return function(n,s){const r=re(e,t,s);return ie(null!==r),r}}(e,t.bucket),a);return c.urlParams=o,c.errorHandler=ue(t),c}function de(e,t,n){const s=I(t.fullServerUrl(),e.host,e._protocol)+"?alt=media",r=e.maxOperationRetryTime,o=new oe(s,"GET",(e,t)=>t,r);return o.errorHandler=le(t),void 0!==n&&(o.headers.Range=`bytes=0-${n}`,o.successCodes=[200,206]),o}function pe(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),s}function fe(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const c=pe(t,s,r),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+te(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=V.getBlob(u,s,l);if(null===h)throw w();const _={name:c.fullPath},d=I(o,e.host,e._protocol),p=e.maxUploadRetryTime,f=new oe(d,"POST",ae(e,n),p);return f.urlParams=_,f.headers=i,f.body=h.uploadData(),f.errorHandler=ue(t),f}class me{constructor(e,t,n,s){this.current=e,this.total=t,this.finalized=!!n,this.metadata=s||null}}function ge(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(s){ie(!1)}return ie(!!n&&-1!==(t||["active"]).indexOf(n)),n}const be=262144;function Te(e,t,n,s,r,o,i,a){const c=new me(0,0);if(i?(c.current=i.current,c.total=i.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw new _(d.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const u=c.total-c.current;let l=u;r>0&&(l=Math.min(l,r));const h=c.current,p=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},g=s.slice(h,p);if(null===g)throw w();const b=t.maxUploadRetryTime,T=new oe(n,"POST",function(e,n){const r=ge(e,["active","final"]),i=c.current+l,a=s.size();let u;return u="final"===r?ae(t,o)(e,n):null,new me(i,a,"final"===r,u)},b);return T.headers=m,T.body=g.uploadData(),T.progressCallback=a||null,T.errorHandler=ue(e),T}
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
 */const Re={STATE_CHANGED:"state_changed"},we={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ve(e){switch(e){case"running":case"pausing":case"canceling":return we.RUNNING;case"paused":return we.PAUSED;case"success":return we.SUCCESS;case"canceled":return we.CANCELED;default:return we.ERROR}}
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
 */class ke{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function Ee(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class ye{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=f.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=f.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,s){if(this.sent_)throw U("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==s)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw U("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw U("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw U("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw U("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ue extends ye{initXhr(){this.xhr_.responseType="text"}}function Oe(){return new Ue}class Ae extends ye{initXhr(){this.xhr_.responseType="arraybuffer"}}function Ce(){return new Ae}class xe extends ye{initXhr(){this.xhr_.responseType="blob"}}function Ne(){return new xe}
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
 */class Se{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Y(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(d.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(D(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=T()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(d.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{const n=function(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i=pe(t,s,r),a={name:i.fullPath},c=I(o,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},l=te(i,n),h=e.maxUploadRetryTime,_=new oe(c,"POST",function(e){let t;ge(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){ie(!1)}return ie(C(t)),t},h);return _.urlParams=a,_.headers=u,_.body=l,_.errorHandler=ue(t),_}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,Oe,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const s=function(e,t,n,s){const r=e.maxUploadRetryTime,o=new oe(n,"POST",function(e){const t=ge(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){ie(!1)}n||ie(!1);const r=Number(n);return ie(!isNaN(r)),new me(r,s.size(),"final"===t)},r);return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=ue(t),o}(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(s,Oe,t,n);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=be*this._chunkMultiplier,t=new me(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((s,r)=>{let o;try{o=Te(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const i=this._ref.storage._makeRequest(o,Oe,s,r,!1);this._request=i,i.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){2*(be*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=he(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(n,Oe,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=fe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,Oe,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=R(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=ve(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,s){const r=new ke(t||void 0,n||void 0,s||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ve(this._state)){case we.SUCCESS:Ee(this._resolve.bind(null,this.snapshot))();break;case we.CANCELED:case we.ERROR:Ee(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ve(this._state)){case we.RUNNING:case we.PAUSED:e.next&&Ee(e.next.bind(e,this.snapshot))();break;case we.SUCCESS:e.complete&&Ee(e.complete.bind(e))();break;default:e.error&&Ee(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class Ie{constructor(e,t){this._service=e,this._location=t instanceof O?t:O.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ie(e,t)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new O(this._location.bucket,e);return new Ie(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw E(e)}}function Pe(e,t,n){e._throwIfRoot("uploadBytes");const s=fe(e.storage,e._location,Y(),new V(t,!0),n);return e.storage.makeRequestWithTokens(s,Oe).then(t=>({metadata:t,ref:e}))}function De(e){const t={prefixes:[],items:[]};return Le(e,t).then(()=>t)}async function Le(e,t,n){const s={pageToken:n},r=await Be(e,s);t.prefixes.push(...r.prefixes),t.items.push(...r.items),null!=r.nextPageToken&&await Le(e,t,r.nextPageToken)}function Be(e,t){null!=t&&"number"==typeof t.maxResults&&S("options.maxResults",1,1e3,t.maxResults);const n=t||{},s=_e(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,Oe)}function qe(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,s){const r=I(t.fullServerUrl(),e.host,e._protocol),o=te(n,s),i=e.maxOperationRetryTime,a=new oe(r,"PATCH",ae(e,s),i);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=o,a.errorHandler=le(t),a}(e.storage,e._location,t,Y());return e.storage.makeRequestWithTokens(n,Oe)}function Me(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const s=I(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,o=new oe(s,"GET",ce(e,n),r);return o.errorHandler=le(t),o}(e.storage,e._location,Y());return e.storage.makeRequestWithTokens(t,Oe).then(e=>{if(null===e)throw new _(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}function Fe(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=I(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,r=new oe(n,"DELETE",function(e,t){},s);return r.successCodes=[200,204],r.errorHandler=le(t),r}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Oe)}function He(e,t){const n=function(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),s=new O(e._location.bucket,n);return new Ie(e.storage,s)}
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
 */function ze(e,t){if(e instanceof $e){const n=e;if(null==n._bucket)throw new _(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");const s=new Ie(n,n._bucket);return null!=t?ze(s,t):s}return void 0!==t?He(e,t):e}function je(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof $e)return new Ie(e,t);throw v("To use ref(service, url), the first argument must be a Storage instance.")}return ze(e,t)}function Ge(e,t){const n=null==t?void 0:t[h];return null==n?null:O.makeFromBucketSpec(n,e)}class $e{constructor(e,t,n,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?O.makeFromBucketSpec(s,this._host):Ge(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=Ge(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){S("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){S("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ie(this,e)}_makeRequest(e,t,n,s,r=!0){if(this._deleted)return new A(k());{const o=function(e,t,n,s,r,o,i=!0){const a=P(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,s),new L(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}
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
 */(e,this._appId,n,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const Ve="@firebase/storage",We="0.13.2",Xe="storage";
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
function Ke(e,n){return function(e,t){e._throwIfRoot("getBytes");const n=de(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,Ce).then(e=>void 0!==t?e.slice(0,t):e)}(e=t(e),n)}function Ze(e,n,s){return Pe(e=t(e),n,s)}function Je(e,n,s,r){return function(e,t,n=F.RAW,s){e._throwIfRoot("uploadString");const r=z(n,t),o=Object.assign({},s);return null==o.contentType&&null!=r.contentType&&(o.contentType=r.contentType),Pe(e,r.data,o)}(e=t(e),n,s,r)}function Ye(e,n,s){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Se(e,new V(t),n)}(e=t(e),n,s)}function Qe(e){return function(e){e._throwIfRoot("getMetadata");const t=he(e.storage,e._location,Y());return e.storage.makeRequestWithTokens(t,Oe)}(e=t(e))}function et(e,n){return qe(e=t(e),n)}function tt(e,n){return Be(e=t(e),n)}function nt(e){return De(e=t(e))}function st(e){return Me(e=t(e))}function rt(e){return Fe(e=t(e))}function ot(e,n){return je(e=t(e),n)}function it(e,t){return He(e,t)}function at(e=r(),o){e=t(e);const i=n(e,Xe).getImmediate({identifier:o}),a=s("storage");return a&&ct(i,...a),i}function ct(e,t,n,s={}){!function(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken="string"==typeof r?r:o(r,e.app.options.projectId))}(e,t,n,s)}
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
 */function ut(e,n){return function(e,t){e._throwIfRoot("getBlob");const n=de(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,Ne).then(e=>void 0!==t?e.slice(0,t):e)}(e=t(e),n)}function lt(e,t){throw new Error("getStream() is only supported by NodeJS builds")}function ht(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new $e(n,s,r,t,u)}i(new a(Xe,ht,"PUBLIC").setMultipleInstances(!0)),c(Ve,We,""),c(Ve,We,"esm2017");export{_ as StorageError,d as StorageErrorCode,F as StringFormat,V as _FbsBlob,O as _Location,Re as _TaskEvent,we as _TaskState,Se as _UploadTask,z as _dataFromString,it as _getChild,v as _invalidArgument,E as _invalidRootOperation,ct as connectStorageEmulator,rt as deleteObject,ut as getBlob,Ke as getBytes,st as getDownloadURL,Qe as getMetadata,at as getStorage,lt as getStream,tt as list,nt as listAll,ot as ref,et as updateMetadata,Ze as uploadBytes,Ye as uploadBytesResumable,Je as uploadString};
