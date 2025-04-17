(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:le}=Object,X=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:q}=Array,I=G("undefined");function rt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fe=x("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fe(e.buffer),t}const ot=G("string"),C=G("function"),Le=G("number"),Q=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,J=e=>{if(X(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=x("Date"),ct=x("File"),ut=x("Blob"),lt=x("FileList"),ft=e=>Q(e)&&C(e.pipe),dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=X(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},pt=x("URLSearchParams"),[mt,ht,yt,wt]=["ReadableStream","Request","Response","Headers"].map(x),bt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),q(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const D=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,De=e=>!I(e)&&e!==D;function se(){const{caseless:e}=De(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ue(t,s)||s;J(t[o])&&J(r)?t[o]=se(t[o],r):J(r)?t[o]=se({},r):q(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&C(s)?e[o]=Pe(s,n):e[o]=s},{allOwnKeys:r}),e),Et=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),St=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Rt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ot=e=>{if(!e)return null;if(q(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},At=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),_t=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xt=x("HTMLFormElement"),Nt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Pt=x("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ft=e=>{Be(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return q(e)?r(e):r(String(e).split(t)),n},Ut=()=>{},Dt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Bt(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kt=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=q(r)?[]:{};return M(r,(i,c)=>{const f=n(i,s+1);!I(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},qt=x("AsyncFunction"),jt=e=>e&&(Q(e)||C(e))&&C(e.then)&&C(e.catch),ke=((e,t)=>e?setImmediate:t?((n,r)=>(D.addEventListener("message",({source:s,data:o})=>{s===D&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),D.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",C(D.postMessage)),Ht=typeof queueMicrotask<"u"?queueMicrotask.bind(D):typeof process<"u"&&process.nextTick||ke,a={isArray:q,isArrayBuffer:Fe,isBuffer:rt,isFormData:dt,isArrayBufferView:st,isString:ot,isNumber:Le,isBoolean:it,isObject:Q,isPlainObject:J,isReadableStream:mt,isRequest:ht,isResponse:yt,isHeaders:wt,isUndefined:I,isDate:at,isFile:ct,isBlob:ut,isRegExp:Pt,isFunction:C,isStream:ft,isURLSearchParams:pt,isTypedArray:At,isFileList:lt,forEach:M,merge:se,extend:gt,trim:bt,stripBOM:Et,inherits:St,toFlatObject:Rt,kindOf:X,kindOfTest:x,endsWith:Tt,toArray:Ot,forEachEntry:_t,matchAll:Ct,isHTMLForm:xt,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:Be,freezeMethods:Ft,toObjectSet:Lt,toCamelCase:Nt,noop:Ut,toFiniteNumber:Dt,findKey:Ue,global:D,isContextDefined:De,isSpecCompliantForm:Bt,toJSONObject:kt,isAsyncFn:qt,isThenable:jt,setImmediate:ke,asap:Ht};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const qe=h.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(h,je);Object.defineProperty(qe,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(qe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const It=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=He(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Mt(e){return a.isArray(e)&&!e.some(oe)}const $t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,m){return!a.isUndefined(m[y])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,y,m){let g=p;if(p&&!m&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Mt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(g=a.toArray(p)))return y=He(y),g.forEach(function(T,P){!(a.isUndefined(T)||T===null)&&t.append(i===!0?ye([y],P,o):i===null?y:y+"[]",u(T))}),!1}return oe(p)?!0:(t.append(ye(m,y,o),u(p)),!1)}const d=[],w=Object.assign($t,{defaultVisitor:l,convertValue:u,isVisitable:oe});function E(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(g,S){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(S)?S.trim():S,y,w))===!0&&E(g,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fe(e,t){this._pairs=[],e&&Z(e,this,t)}const Ie=fe.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function zt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||zt;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new fe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class be{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const $e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jt=typeof URLSearchParams<"u"?URLSearchParams:fe,vt=typeof FormData<"u"?FormData:null,Wt=typeof Blob<"u"?Blob:null,Vt={isBrowser:!0,classes:{URLSearchParams:Jt,FormData:vt,Blob:Wt},protocols:["http","https","file","blob","url","data"]},de=typeof window<"u"&&typeof document<"u",ie=typeof navigator=="object"&&navigator||void 0,Kt=de&&(!ie||["ReactNative","NativeScript","NS"].indexOf(ie.product)<0),Xt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Gt=de&&window.location.href||"http://localhost",Qt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:de,hasStandardBrowserEnv:Kt,hasStandardBrowserWebWorkerEnv:Xt,navigator:ie,origin:Gt},Symbol.toStringTag,{value:"Module"})),O={...Qt,...Vt};function Zt(e,t){return Z(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Yt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function en(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ze(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=en(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Yt(r),s,n,0)}),n}return null}function tn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $={transitional:$e,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Zt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),tn(t)):t}],transformResponse:[function(t){const n=this.transitional||$.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{$.headers[e]={}});const nn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&nn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ge=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const on=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function an(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let _=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=H(f);if(!l)throw new Error("header name must be a non-empty string");const d=a.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||f]=v(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!on(t))i(rn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return sn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=H(i),i){const c=a.findKey(r,i);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const c=t?an(o):String(o).trim();c!==o&&delete n[o],n[c]=v(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ge]=this[ge]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=H(i);r[c]||(cn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};_.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(_.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(_);function ne(e,t){const n=this||$,r=t||n,s=_.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Je(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,h,{__CANCEL__:!0});function ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function un(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let d=o,w=0;for(;d!==s;)w+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const E=l&&u-l;return E?Math.round(w*1e3/E):void 0}}function fn(e,t){let n=0,r=1e3/t,s,o;const i=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),d=l-n;d>=r?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const V=(e,t,n=3)=>{let r=0;const s=ln(50,250);return fn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Ee=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Se=e=>(...t)=>a.asap(()=>e(...t)),dn=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,pn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t,n){let r=!mn(t);return e&&(r||n==!1)?hn(e,t):t}const Re=e=>e instanceof _?{...e}:e;function k(e,t){t=t||{};const n={};function r(u,l,d,w){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:w},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,d,w){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,d,w)}else return r(u,l,d,w)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,d){if(d in t)return r(u,l);if(d in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l,d)=>s(Re(u),Re(l),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=f[l]||s,w=d(e[l],t[l],l);a.isUndefined(w)&&d!==c||(n[l]=w)}),n}const Ve=e=>{const t=k({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=_.from(i),t.url=Me(We(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&dn(t.url))){const u=s&&o&&pn.read(o);u&&i.set(s,u)}return t},yn=typeof XMLHttpRequest<"u",wn=yn&&function(e){return new Promise(function(n,r){const s=Ve(e);let o=s.data;const i=_.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=s,l,d,w,E,p;function y(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function g(){if(!m)return;const T=_.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!c||c==="text"||c==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:T,config:e,request:m};ve(function(U){n(U),y()},function(U){r(U),y()},A),m=null}"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(g)},m.onabort=function(){m&&(r(new h("Request aborted",h.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||$e;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new h(P,A.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,m)),m=null},o===void 0&&i.setContentType(null),"setRequestHeader"in m&&a.forEach(i.toJSON(),function(P,A){m.setRequestHeader(A,P)}),a.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),c&&c!=="json"&&(m.responseType=s.responseType),u&&([w,p]=V(u,!0),m.addEventListener("progress",w)),f&&m.upload&&([d,E]=V(f),m.upload.addEventListener("progress",d),m.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(l=T=>{m&&(r(!T||T.type?new j(null,e,m):T),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const S=un(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new h("Unsupported protocol "+S+":",h.ERR_BAD_REQUEST,e));return}m.send(o||null)})},bn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(u){if(!s){s=!0,c();const l=u instanceof Error?u:this.reason;r.abort(l instanceof h?l:new j(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{i=null,o(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},gn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},En=async function*(e,t){for await(const n of Sn(e))yield*gn(n,t)},Sn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Te=(e,t,n,r)=>{const s=En(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:u,value:l}=await s.next();if(u){c(),f.close();return}let d=l.byteLength;if(n){let w=o+=d;n(w)}f.enqueue(new Uint8Array(l))}catch(u){throw c(u),u}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ke=Y&&typeof ReadableStream=="function",Rn=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Xe=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Tn=Ke&&Xe(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Oe=64*1024,ae=Ke&&Xe(()=>a.isReadableStream(new Response("").body)),K={stream:ae&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!K[t]&&(K[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const On=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Rn(e)).byteLength},An=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??On(t)},_n=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:d="same-origin",fetchOptions:w}=Ve(e);u=u?(u+"").toLowerCase():"text";let E=bn([s,o&&o.toAbortSignal()],i),p;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let m;try{if(f&&Tn&&n!=="get"&&n!=="head"&&(m=await An(l,r))!==0){let A=new Request(t,{method:"POST",body:r,duplex:"half"}),L;if(a.isFormData(r)&&(L=A.headers.get("content-type"))&&l.setContentType(L),A.body){const[U,z]=Ee(m,V(Se(f)));r=Te(A.body,Oe,U,z)}}a.isString(d)||(d=d?"include":"omit");const g="credentials"in Request.prototype;p=new Request(t,{...w,signal:E,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:g?d:void 0});let S=await fetch(p);const T=ae&&(u==="stream"||u==="response");if(ae&&(c||T&&y)){const A={};["status","statusText","headers"].forEach(me=>{A[me]=S[me]});const L=a.toFiniteNumber(S.headers.get("content-length")),[U,z]=c&&Ee(L,V(Se(c),!0))||[];S=new Response(Te(S.body,Oe,U,()=>{z&&z(),y&&y()}),A)}u=u||"text";let P=await K[a.findKey(K,u)||"text"](S,e);return!T&&y&&y(),await new Promise((A,L)=>{ve(A,L,{data:P,headers:_.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(g){throw y&&y(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,p),{cause:g.cause||g}):h.from(g,g&&g.code,e,p)}}),ce={http:It,xhr:wn,fetch:_n};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,Cn=e=>a.isFunction(e)||e===null||e===!1,Ge={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Cn(n)&&(r=ce[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ae).join(`
`):" "+Ae(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ce};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function _e(e){return re(e),e.headers=_.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ge.getAdapter(e.adapter||$.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=_.from(r.headers),r},function(r){return Je(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=_.from(r.response.headers))),Promise.reject(r)})}const Qe="1.8.4",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ce={};ee.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Ce[i]&&(Ce[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};ee.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function xn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const W={assertOptions:xn,validators:ee},N=W.validators;let B=class{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&W.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:W.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),W.assertOptions(n,{baseUrl:N.spelling("baseURL"),withXsrfToken:N.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=_.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,d=0,w;if(!f){const p=[_e.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,u),w=p.length,l=Promise.resolve(n);d<w;)l=l.then(p[d++],p[d++]);return l}w=c.length;let E=n;for(d=0;d<w;){const p=c[d++],y=c[d++];try{E=p(E)}catch(m){y.call(this,m);break}}try{l=_e.call(this,E)}catch(p){return Promise.reject(p)}for(d=0,w=u.length;d<w;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=k(this.defaults,t);const n=We(t.baseURL,t.url,t.allowAbsoluteUrls);return Me(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(k(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});let Nn=class Ze{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new j(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ze(function(s){t=s}),cancel:t}}};function Pn(e){return function(n){return e.apply(null,n)}}function Fn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function Ye(e){const t=new B(e),n=Pe(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ye(k(e,s))},n}const b=Ye($);b.Axios=B;b.CanceledError=j;b.CancelToken=Nn;b.isCancel=Je;b.VERSION=Qe;b.toFormData=Z;b.AxiosError=h;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Pn;b.isAxiosError=Fn;b.mergeConfig=k;b.AxiosHeaders=_;b.formToJSON=e=>ze(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Ge.getAdapter;b.HttpStatusCode=ue;b.default=b;const{Axios:Zn,AxiosError:Yn,CanceledError:er,isCancel:tr,CancelToken:nr,VERSION:rr,all:sr,Cancel:or,isAxiosError:ir,spread:ar,toFormData:cr,AxiosHeaders:ur,HttpStatusCode:lr,formToJSON:fr,getAdapter:dr,mergeConfig:pr}=b;function Ln(e,t,n){return console.log(e),console.log("asdfd"),console.log(t),b.get("https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,precipitation_sum,apparent_temperature_max,precipitation_sum,temperature_2m_min,apparent_temperature_min&hourly=temperature_2m,apparent_temperature,weather_code,precipitation,wind_speed_10m,precipitation_probability&current_weather=true&timeformat=unixtime",{params:{latitude:e,longitude:t,timezone:n}}).then(({data:r})=>({data:r,current:Un(r),daily:Dn(r),hourly:Bn(r)}))}function Un({current_weather:e,daily:t}){const{temperature:n,windspeed:r,weathercode:s}=e,{temperature_2m_max:[o],temperature_2m_min:[i],apparent_temperature_max:[c],apparent_temperature_min:[f],precipitation_sum:[u]}=t;return{currentTemp:n,highTemp:o,lowTemp:i,highFeelsLike:c,lowFeelsLike:f,windSpeed:r,precip:u,iconCode:s}}function Dn({daily:e}){return e.time.map((t,n)=>({timestamp:t*1e3,iconCode:e.weather_code[n],maxTemp:e.temperature_2m_max[n],maxTemp:e.temperature_2m_max[n],precipitation:e.precipitation_sum[n]}))}function Bn({hourly:e,current_weather:t}){return e.time.map((n,r)=>({timestamp:n*1e3,iconCode:e.weather_code[r],temp:e.temperature_2m[r],feelsLike:e.apparent_temperature[r],windSpeed:e.wind_speed_10m[r],precip:e.precipitation[r],precip_chance:e.precipitation_probability[r]})).filter(({timestamp:n})=>n>=t.time*1e3)}const et=new Map;F([0,1],"sun");F([2],"cloud-sun");F([3],"cloud");F([28,40,41,42,43,44,45,46,47,48,49],"smog");F([20,21,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,64,65,66,67,68,69],"cloud-showers-heavy");F([22,31,32,33,34,35,36,37,38,39,71,72,73,74,75,76,77,78,79],"snowflake");F([29,95,96,97,98,99],"cloud-bolt");F([1e3,1001],"moon-clear");F([1002,1003],"moon-cloud");function F(e,t){e.forEach(n=>{et.set(n,t)})}function kn(e,t){return b.get("https://api.sunrisesunset.io/json?",{params:{lat:e,lng:t}})}navigator.geolocation.getCurrentPosition(qn,jn);function qn(e){const t=e.coords.latitude,n=e.coords.longitude,r=Intl.DateTimeFormat().resolvedOptions().timezone;kn(e.coords.latitude,e.coords.longitude).then(In),Ln(t,n,r).then(Hn).catch(s=>{console.error(s),alert(s)})}function jn(){alert("we couldn't find you")}function Hn({current:e,daily:t,hourly:n}){$n(e),Jn(t),Kn(n),Xn(e),document.body.classList.remove("blurred")}function R(e,t,{parent:n=document}={}){n.querySelector(`[data-${e}]`).textContent=t}function In(e){console.log(e),R("day-sunrise",e.data.results.sunrise),R("day-sunset",e.data.results.sunset)}function pe(e){return`/weather-app//icons/${et.get(e)}.svg`}const Mn=document.querySelector("[data-current-icon]");function $n(e){let t=0;const r=new Date().getHours();(r>=21||r<=5)&&e.iconCode<=3&&(t=1e3),Mn.src=pe(e.iconCode+t),R("current-temp",e.currentTemp),R("current-high",e.highTemp),R("current-low",e.lowTemp),R("current-fl-high",e.highFeelsLike),R("current-fl-low",e.lowFeelsLike),R("current-wind",e.windSpeed),R("current-precipitation",e.precip)}const tt=new Intl.DateTimeFormat(void 0,{weekday:"long"}),xe=document.querySelector("[data-day-section]"),zn=document.getElementById("day-card-template");function Jn(e){xe.innerHTML="",e.forEach(t=>{const n=zn.content.cloneNode(!0);R("temp",t.maxTemp,{parent:n}),R("day",tt.format(t.timestamp),{parent:n}),R("precip",t.precipitation,{parent:n}),n.querySelector("[data-icon]").src=pe(t.iconCode),xe.append(n)})}const vn=new Intl.DateTimeFormat(void 0,{hour:"numeric",hour12:!0}),Wn=new Intl.DateTimeFormat(void 0,{hour:"numeric",hour12:!1}),Ne=document.querySelector("[data-hour-section]"),Vn=document.getElementById("hour-row-template");function Kn(e){Ne.innerHTML="",e.forEach(t=>{const n=Vn.content.cloneNode(!0);R("temp",t.temp,{parent:n}),R("fl-temp",t.feelsLike,{parent:n}),R("wind",t.windSpeed,{parent:n}),R("precip",t.precip,{parent:n}),R("precip-chance",t.precip_chance,{parent:n}),R("day",tt.format(t.timestamp),{parent:n}),R("time",vn.format(t.timestamp),{parent:n});let r=0;const s=Wn.format(t.timestamp);(s>=21||s<=5)&&t.iconCode<=3&&(r=1e3),n.querySelector("[data-icon]").src=pe(t.iconCode+r),Ne.append(n)})}function Xn(e){let t,n=e.iconCode;return n==0||n==1||n==2?t=40:t=200,document.documentElement.style.setProperty("--pageHue",t),document.documentElement.style.setProperty("--iconHue",`${160+t}deg`),t}
