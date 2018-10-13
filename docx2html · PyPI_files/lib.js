/**
 * Fastly Insights.js
 * Build generated: 2018-10-05
 * https://github.com/fastly/insights.js
 *
 * Copyright (c) 2018, Fastly, Inc. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

!function(){"use strict";function t(t){for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}function n(t,e){return g?navigator.sendBeacon(t,e):fetch(t,{method:"POST",body:e,keepalive:!0})}function r(e){return t({},e,{client_asn:parseInt(e.client_asn,10),resolver_asn:parseInt(e.resolver_asn,10)})}function i(t){return b[t]?b[t]:(b[t]=fetch(t).then(function(t){return t.json()}).then(r),b[t])}function o(t){return function(e){return{id:e,type:"pop",host:e+"-v4."+t}}}function u(t){return t[Math.floor(Math.random()*t.length)]}function s(t,e,n){for(var r=e||4,i=n||0,s=t.pops,c=t.hosts.pop,a=o(c),f=s.slice(0,r),l=s.slice(r),h=f.map(a),v=[].concat(l),y=[],p=l.length<i?l.length:i,d=0;d<p;d++){var g=u(v);v.splice(v.indexOf(g),1),y.push(a(g))}return h.concat(y)}function c(t){return t.replace(/(?:^|\.?)([A-Z])/g,function(t,e){return"_"+e.toLowerCase()}).replace(/^_/,"")}function a(t,e){return e={exports:{}},t(e,e.exports),e.exports}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return new Promise(function(n,r){var i=void 0,o=new le(function(e,r){var o=e.getEntriesByName(t);(i=o.shift())&&(r.disconnect(),n(i))});setTimeout(function(){i||(o.disconnect(),r(new Error("Timed out observing resource timing")))},e);try{o.observe({entryTypes:["resource"]})}catch(t){r(t)}})}function l(t){var e={};for(var n in t){var r=m(t[n]);"number"!==r&&"string"!==r||(e[n]=t[n])}return e}function h(t,e){return Object.keys(t).reduce(function(n,r){return e.indexOf(r)<0&&(n[r]=t[r]),n},{})}function v(t){return Object.keys(t).reduce(function(e,n){return e[c(n)]=t[n],e},{})}function y(t){return t.reduce(function(t,e){return t.then(function(t){return e().then(function(e){return[].concat(S(t),[e])})})},Promise.resolve([]))}var p=function(t,e){return Object.keys(t).reduce(function(n,r){return n[e+r]=t[r],n},{})},d=e(),g="sendBeacon"in navigator&&"function"==typeof navigator.sendBeacon,b={},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),k=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},_=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},j=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),S=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},T=function(){function e(n){O(this,e),this.config=t({},n),this.config.testId=d,this.result={},this.state={hasRan:!1}}return w(e,[{key:"encode",value:function(t){return JSON.stringify(t)}},{key:"send",value:function(t){var e=this.config,r=e.apiKey,i=e.session;n("https://"+e.hosts.host+"/b?k="+r+"&s="+i,t)}},{key:"generateResult",value:function(e,n,r){var i=e.testId,o=e.apiKey,u=e.server,s=e.type,c=e.id;return t({test_id:i,test_api_key:o,test_lib_version:"1.8.2",test_server:JSON.stringify(u),test_timestamp:Math.floor(Date.now()/1e3),task_type:s,task_id:c,task_schema_version:"0.0.0",task_client_data:JSON.stringify(n),task_server_data:"<% SERVER_DATA %>"},r)}},{key:"execute",value:function(){var t=this;return Promise.all([this.run(),i("https://"+this.config.testId+"."+this.config.hosts.lookup+"/l")]).then(function(e){return t.generateResult.apply(t,[t.config].concat(S(e)))}).then(function(e){return t.result=e}).then(this.encode).then(function(e){return t.send(e)}).then(function(){return t.result}).catch(function(){return Promise.resolve(t.result)})}}],[{key:"hasCustomConfiguration",get:function(){return!1}}]),e}(),E=Math.ceil,P=Math.floor,A=function(t){return isNaN(t=+t)?0:(t>0?P:E)(t)},I=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},C=a(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),x=a(function(t){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)}),F=(x.version,function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}),R=function(t,e,n){if(F(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},M=function(t){return"object"===(void 0===t?"undefined":m(t))?null!==t:"function"==typeof t},N=function(t){if(!M(t))throw TypeError(t+" is not an object!");return t},z=function(t){try{return!!t()}catch(t){return!0}},B=!z(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),L=C.document,Q=M(L)&&M(L.createElement),D=function(t){return Q?L.createElement(t):{}},K=!B&&!z(function(){return 7!=Object.defineProperty(D("div"),"a",{get:function(){return 7}}).a}),Y=function(t,e){if(!M(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!M(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!M(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!M(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},q=Object.defineProperty,J=B?Object.defineProperty:function(t,e,n){if(N(t),e=Y(e,!0),N(n),K)try{return q(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t},U={f:J},V=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},W=B?function(t,e,n){return U.f(t,e,V(1,n))}:function(t,e,n){return t[e]=n,t},G=function t(e,n,r){var i,o,u,s=e&t.F,c=e&t.G,a=e&t.S,f=e&t.P,l=e&t.B,h=e&t.W,v=c?x:x[n]||(x[n]={}),y=v.prototype,p=c?C:a?C[n]:(C[n]||{}).prototype;c&&(r=n);for(i in r)(o=!s&&p&&void 0!==p[i])&&i in v||(u=o?p[i]:r[i],v[i]=c&&"function"!=typeof p[i]?r[i]:l&&o?R(u,C):h&&p[i]==u?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):f&&"function"==typeof u?R(Function.call,u):u,f&&((v.virtual||(v.virtual={}))[i]=u,e&t.R&&y&&!y[i]&&W(y,i,u)))};G.F=1,G.G=2,G.S=4,G.P=8,G.B=16,G.W=32,G.U=64,G.R=128;var X=G,Z=W,H={}.hasOwnProperty,$=function(t,e){return H.call(t,e)},tt={},et={}.toString,nt=function(t){return et.call(t).slice(8,-1)},rt=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==nt(t)?t.split(""):Object(t)},it=function(t){return rt(I(t))},ot=Math.min,ut=function(t){return t>0?ot(A(t),9007199254740991):0},st=Math.max,ct=Math.min,at=function(t,e){return t=A(t),t<0?st(t+e,0):ct(t,e)},ft=C["__core-js_shared__"]||(C["__core-js_shared__"]={}),lt=function(t){return ft[t]||(ft[t]={})},ht=0,vt=Math.random(),yt=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++ht+vt).toString(36))},pt=lt("keys"),dt=function(t){return pt[t]||(pt[t]=yt(t))},gt=function(t){return function(e,n,r){var i,o=it(e),u=ut(o.length),s=at(r,u);if(t&&n!=n){for(;u>s;)if((i=o[s++])!=i)return!0}else for(;u>s;s++)if((t||s in o)&&o[s]===n)return t||s||0;return!t&&-1}}(!1),bt=dt("IE_PROTO"),mt=function(t,e){var n,r=it(t),i=0,o=[];for(n in r)n!=bt&&$(r,n)&&o.push(n);for(;e.length>i;)$(r,n=e[i++])&&(~gt(o,n)||o.push(n));return o},Ot="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),wt=Object.keys||function(t){return mt(t,Ot)},kt=B?Object.defineProperties:function(t,e){N(t);for(var n,r=wt(e),i=r.length,o=0;i>o;)U.f(t,n=r[o++],e[n]);return t},_t=C.document,jt=_t&&_t.documentElement,St=dt("IE_PROTO"),Tt=function(){},Et=function(){var t,e=D("iframe"),n=Ot.length;for(e.style.display="none",jt.appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),Et=t.F;n--;)delete Et.prototype[Ot[n]];return Et()},Pt=Object.create||function(t,e){var n;return null!==t?(Tt.prototype=N(t),n=new Tt,Tt.prototype=null,n[St]=t):n=Et(),void 0===e?n:kt(n,e)},At=a(function(t){var e=lt("wks"),n=C.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:yt)("Symbol."+t))}).store=e}),It=U.f,Ct=At("toStringTag"),xt=function(t,e,n){t&&!$(t=n?t:t.prototype,Ct)&&It(t,Ct,{configurable:!0,value:e})},Ft={};W(Ft,At("iterator"),function(){return this});var Rt=function(t,e,n){t.prototype=Pt(Ft,{next:V(1,n)}),xt(t,e+" Iterator")},Mt=function(t){return Object(I(t))},Nt=dt("IE_PROTO"),zt=Object.prototype,Bt=Object.getPrototypeOf||function(t){return t=Mt(t),$(t,Nt)?t[Nt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?zt:null},Lt=At("iterator"),Qt=!([].keys&&"next"in[].keys()),Dt=function(){return this},Kt=function(t){return function(e,n){var r,i,o=String(I(e)),u=A(n),s=o.length;return u<0||u>=s?t?"":void 0:(r=o.charCodeAt(u),r<55296||r>56319||u+1===s||(i=o.charCodeAt(u+1))<56320||i>57343?t?o.charAt(u):r:t?o.slice(u,u+2):i-56320+(r-55296<<10)+65536)}}(!0);!function(t,e,n,r,i,o,u){Rt(n,e,r);var s,c,a,f=function(t){if(!Qt&&t in y)return y[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",h="values"==i,v=!1,y=t.prototype,p=y[Lt]||y["@@iterator"]||i&&y[i],d=p||f(i),g=i?h?f("entries"):d:void 0,b="Array"==e?y.entries||p:p;if(b&&(a=Bt(b.call(new t)))!==Object.prototype&&a.next&&xt(a,l,!0),h&&p&&"values"!==p.name&&(v=!0,d=function(){return p.call(this)}),u&&(Qt||v||!y[Lt])&&W(y,Lt,d),tt[e]=d,tt[l]=Dt,i)if(s={values:h?d:f("values"),keys:o?d:f("keys"),entries:g},u)for(c in s)c in y||Z(y,c,s[c]);else X(X.P+X.F*(Qt||v),e,s)}(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=Kt(e,n),this._i+=t.length,{value:t,done:!1})});var Yt=function(t,e,n,r){try{return r?e(N(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&N(i.call(t)),e}},qt=At("iterator"),Jt=Array.prototype,Ut=function(t){return void 0!==t&&(tt.Array===t||Jt[qt]===t)},Vt=function(t,e,n){e in t?U.f(t,e,V(0,n)):t[e]=n},Wt=At("toStringTag"),Gt="Arguments"==nt(function(){return arguments}()),Xt=function(t,e){try{return t[e]}catch(t){}},Zt=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=Xt(e=Object(t),Wt))?n:Gt?nt(e):"Object"==(r=nt(e))&&"function"==typeof e.callee?"Arguments":r},Ht=At("iterator"),$t=x.getIteratorMethod=function(t){if(void 0!=t)return t[Ht]||t["@@iterator"]||tt[Zt(t)]},te=At("iterator"),ee=!1;try{[7][te]().return=function(){ee=!0}}catch(t){}X(X.S+X.F*!function(t,e){if(!e&&!ee)return!1;var n=!1;try{var r=[7],i=r[te]();i.next=function(){return{done:n=!0}},r[te]=function(){return i},t(r)}catch(t){}return n}(function(t){}),"Array",{from:function(t){var e,n,r,i,o=Mt(t),u="function"==typeof this?this:Array,s=arguments.length,c=s>1?arguments[1]:void 0,a=void 0!==c,f=0,l=$t(o);if(a&&(c=R(c,s>2?arguments[2]:void 0,2)),void 0==l||u==Array&&Ut(l))for(e=ut(o.length),n=new u(e);e>f;f++)Vt(n,f,a?c(o[f],f):o[f]);else for(i=l.call(o),n=new u;!(r=i.next()).done;f++)Vt(n,f,a?Yt(i,c,[r.value,f],!0):r.value);return n.length=f,n}});var ne=x.Array.from,re=function(){function t(e){O(this,t),this.list=e}return w(t,[{key:"getEntries",value:function(){return this.list}},{key:"getEntriesByType",value:function(t){return this.list.filter(function(e){return e.type===t})}},{key:"getEntriesByName",value:function(t,e){return this.list.filter(function(e){return e.name===t}).filter(function(t){return!e||t.type===e})}}]),t}(),ie=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.registeredObservers,r=void 0===n?new Set:n,i=e.processedEntries,o=void 0===i?new Set:i,u=e.interval,s=void 0===u?100:u,c=e.validTypes,a=void 0===c?["mark","measure","navigation","resource"]:c,f=e.context,l=void 0===f?window||self:f;O(this,t),this.registeredObservers=r,this.processedEntries=o,this.interval=s,this.validTypes=a,this.context=l,this.intervalId=null}return w(t,[{key:"getNewEntries",value:function(){var t=this;return this.context.performance.getEntries().filter(function(e){return!t.processedEntries.has(e)})}},{key:"getObserversForType",value:function(t,e){return ne(t).filter(function(t){return t.entryTypes.some(function(t){return t===e})})}},{key:"processBuffer",value:function(t){var e=ne(t.buffer),n=new re(e);t.buffer.clear(),e.length&&t.callback.call(void 0,n,t)}},{key:"processEntries",value:function(){var t=this;this.getNewEntries().forEach(function(e){var n=e.entryType;t.getObserversForType(t.registeredObservers,n).forEach(function(t){t.buffer.add(e)}),t.processedEntries.add(e)}),requestAnimationFrame(function(){t.registeredObservers.forEach(t.processBuffer)})}},{key:"add",value:function(t){this.registeredObservers.add(t),1===this.registeredObservers.size&&this.observe()}},{key:"remove",value:function(t){this.registeredObservers.delete(t),this.registeredObservers.size||this.disconnect()}},{key:"observe",value:function(){this.intervalId=setInterval(this.processEntries.bind(this),this.interval)}},{key:"disconnect",value:function(){this.intervalId=clearInterval(this.intervalId)}}]),t}(),oe=["mark","measure","navigation","resource"],ue={"no-entry-types":"Failed to execute 'observe' on 'PerformanceObserver': required member entryTypes is undefined.","invalid-entry-types":"Failed to execute 'observe' on 'PerformanceObserver': A Performance Observer MUST have at least one valid entryType in its entryTypes attribute."},se=function(t){return oe.some(function(e){return t===e})},ce=new ie,ae=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce;O(this,t),this.callback=e,this.entryTypes=[],this.buffer=new Set,this.taskQueue=n}return w(t,[{key:"observe",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.entryTypes;if(!e)throw new Error(ue["no-entry-types"]);if(e=e.filter(se),!e.length)throw new Error(ue["invalid-entry-types"]);this.entryTypes=e,this.taskQueue.add(this)}},{key:"disconnect",value:function(){this.taskQueue.remove(this)}}]),t}(),fe="PerformanceObserver"in window&&"function"==typeof PerformanceObserver,le=fe?PerformanceObserver:ae,he=["name","initiatorType","entryType"],ve=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}(v,function(t){return function(e){return h(e,t)}}(he),l),ye=function(e){function n(t){O(this,n);var e=_(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.url="https://"+e.config.host+"/o.svg?u="+e.config.testId,e.url=e.url.toLowerCase(),e}return k(n,e),w(n,[{key:"fetchObjectAndId",value:function(){return fetch(this.url).then(function(t){return t.headers.get("X-Datacenter")})}},{key:"run",value:function(){var e=this,n=void 0;return Promise.all([this.fetchObjectAndId(),f(this.url)]).then(function(t){var e=j(t,2),r=e[0],i=e[1];return(n=r)&&i}).then(ve).then(function(r){var i={id:n,attempted_id:e.config.id};return p(t(i,r),"subject_")})}}],[{key:"configure",value:function(t){return s(t,4,4)}},{key:"hasCustomConfiguration",get:function(){return!0}}]),n}(T),pe=function(e){function n(t){O(this,n);var e=_(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.url="https://"+e.config.host+"/o.svg?u="+e.config.testId,e.url=e.url.toLowerCase(),e}return k(n,e),w(n,[{key:"fetchObjectAndId",value:function(){return fetch(this.url).then(function(t){return t.headers.get("X-Datacenter")})}},{key:"run",value:function(){var e=void 0;return Promise.all([this.fetchObjectAndId(),f(this.url)]).then(function(t){var n=j(t,2),r=n[0],i=n[1];return(e=r)&&i}).then(ve).then(function(n){return p(t({id:e},n),"subject_")})}}]),n}(T),de=Object.freeze({pop:ye,fetch:pe}),ge=function(){function e(t){O(this,e),this.version="1.8.2",this.state={initialized:!1,running:!1,hasRan:!1},this.tasks=t,this.taskQueue=[]}return w(e,[{key:"getCustomTaskConfiguration",value:function(t,e){return Object.keys(t).filter(function(e){return t[e].hasCustomConfiguration}).map(function(n){return t[n].configure(e)}).reduce(function(t,e){return t.concat(e)},[])}},{key:"composeTaskConfig",value:function(e,n){return t({},n,{apiKey:e.apiKey,session:e.session,server:e.server,hosts:e.hosts})}},{key:"init",value:function(t){var e=this;if(!t)return Promise.reject("Config required to initialize");if(this.state.initialized)return Promise.reject("Already initialized");this.state.initialized=!0;var n=this.tasks;this.config=t,this.config.hosts=t.settings.hosts;var r=t.tasks||[],i=this.getCustomTaskConfiguration(n,t),o=this.taskConfig=[].concat(r,i),u=this.taskConfig=o.map(function(n){return e.composeTaskConfig(t,n)}),s=u.map(function(t){return new n[t.type](t)});return this.taskQueue=s.map(function(t){return function(){return t.execute()}}),this.run()}},{key:"run",value:function(){var t=this;return this.state.initialized?this.state.hasRan||this.state.running?Promise.reject("Already ran"):(this.state.running=!0,this.results=this.results||[],y(this.taskQueue).then(function(e){return Array.prototype.push.apply(t.results,e)}).then(function(){return t.state.running=!1,t.state.hasRan=!0})):Promise.reject("Runner must be initialized before running")}}]),e}();window.FASTLY=window.FASTLY||{},window.FASTLY=t(new ge(de),window.FASTLY)}();
