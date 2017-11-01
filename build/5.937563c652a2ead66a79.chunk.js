webpackJsonp([5],{"./app/constants-api.js":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r={SPOTERS:"spoters",SPOTS:"spots",USERS:"users"},o="https://creativecaco.com/api/wadl",i=(r.SPOTS,o+"/"+r.USERS)},"./app/containers/Login/actions.js":function(e,t,n){"use strict";function r(e){return{type:l.a,count:e}}function o(e,t){return{type:l.b,error:e,code:t}}function i(e,t){return{type:l.d,error:e,code:t}}function a(e){return{type:l.j,user:e}}function s(){return{type:l.k}}function u(e){return{type:l.l,user:e}}function c(){return{type:l.m}}function f(e){return{type:l.n,register:e}}var l=n("./app/containers/Login/constants.js");n("./app/containers/App/constants.js");t.c=r,t.f=o,t.h=i,t.e=a,t.b=s,t.g=u,t.d=c,t.a=f},"./app/containers/Login/sagas.js":function(e,t,n){"use strict";function r(){var e,t,r,o,i,s,u,p;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.i(a.select)(n.i(f.f)());case 2:return e=h.sent,t=e.get("values"),console.log(e),r=t.get("username"),o=t.get("password"),i=d.a,s=r+":"+o,u={method:"GET",headers:{Accept:"application/json",Authorization:"Basic "+btoa(s),"Content-Type":"application/json",Origin:"http://localhost:3000",Host:"creativecaco.com"}},console.log("username",r,"password",o),console.log("url",i,"head",u),h.prev=12,h.next=15,n.i(a.call)(l.a,d.a,u);case 15:if(p=h.sent,console.log("serverUser:",p),!(p&&p.length>0)){h.next=22;break}return h.next=20,n.i(a.put)(n.i(c.e)(p[0]));case 20:h.next=24;break;case 22:return h.next=24,n.i(a.put)(n.i(c.f)(!1,0));case 24:h.next=29;break;case 26:h.prev=26,h.t0=h.catch(12),console.log("SERVERERROR:",h.t0);case 29:case"end":return h.stop()}},h[0],this,[[12,26]])}function o(){var e,t,r,o,i,s,u,p,y;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.i(a.select)(n.i(f.f)());case 2:return e=h.sent,t=e.get("first_name"),r=e.get("first_name"),o=e.get("username"),i=e.get("password"),s=d.a,u=o+":"+i,p={method:"GET",headers:{Accept:"application/json",Authorization:"Basic "+btoa(u),"Content-Type":"application/json"},body:{first_name:t,last_name:r,username:o,password:i}},h.prev=10,h.next=13,n.i(a.call)(l.a,s,p);case 13:if(y=h.sent,console.log(y),!(y&&y.length>0)){h.next=20;break}return h.next=18,n.i(a.put)(n.i(c.g)(y[0]));case 18:h.next=22;break;case 20:return h.next=22,n.i(a.put)(n.i(c.h)(!1,0));case 22:h.next=26;break;case 24:h.prev=24,h.t0=h.catch(10);case 26:case"end":return h.stop()}},h[1],this,[[10,24]])}function i(){var e,t;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.i(a.takeLatest)(u.k,r);case 2:return e=i.sent,i.next=5,n.i(a.takeLatest)(u.m,o);case 5:return t=i.sent,i.next=8,n.i(a.take)(s.LOCATION_CHANGE);case 8:return i.next=10,n.i(a.cancel)(e);case 10:return i.next=12,n.i(a.cancel)(t);case 12:case"end":return i.stop()}},h[2],this)}Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/redux-saga/effects.js"),s=(n.n(a),n("./node_modules/react-router-redux/lib/index.js")),u=(n.n(s),n("./app/containers/Login/constants.js")),c=n("./app/containers/Login/actions.js"),f=n("./app/containers/Login/selectors.js"),l=n("./app/utils/request.js"),d=n("./app/constants-api.js");t.getUser=r,t.registerUser=o,t.loginData=i;var h=[r,o,i].map(regeneratorRuntime.mark);t.default=[i]},"./app/utils/request.js":function(e,t,n){"use strict";(function(e){function r(e){return console.log(e.json()),e.json()}function o(e){if(console.log("response",e),e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function i(t,n){return e(t,n).then(o).then(r)}var a=n("./node_modules/whatwg-fetch/fetch.js");n.n(a);t.a=i}).call(t,n("./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/fetch.js"))},"./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/fetch.js":function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=a(t);return t.readAsArrayBuffer(e),n}function u(e){var t=new FileReader,n=a(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&g(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!w(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var n=t.body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split("\r\n").forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},w=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];this.map[e]=o?o+","+r:r},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=n(r)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];b.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=h,e.Response=b,e.fetch=function(e,t){return new Promise(function(n,r){var o=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;n(new b(t,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),e.exports=self.fetch},"./node_modules/redux-saga/effects.js":function(e,t,n){e.exports=n("./node_modules/redux-saga/lib/effects.js")},"./node_modules/redux-saga/lib/effects.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/redux-saga/lib/internal/io.js");Object.defineProperty(t,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(t,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(t,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(t,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(t,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(t,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(t,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(t,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(t,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(t,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(t,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(t,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(t,"cancelled",{enumerable:!0,get:function(){return r.cancelled}}),Object.defineProperty(t,"flush",{enumerable:!0,get:function(){return r.flush}}),Object.defineProperty(t,"takeEvery",{enumerable:!0,get:function(){return r.takeEvery}}),Object.defineProperty(t,"takeLatest",{enumerable:!0,get:function(){return r.takeLatest}}),Object.defineProperty(t,"throttle",{enumerable:!0,get:function(){return r.throttle}})},"./node_modules/redux-saga/lib/internal/buffers.js":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments[1],n=new Array(e),r=0,o=0,s=0,f=function(t){n[o]=t,o=(o+1)%e,r++},l=function(){if(0!=r){var t=n[s];return n[s]=null,r--,s=(s+1)%e,t}},d=function(){for(var e=[];r;)e.push(l());return e};return{isEmpty:function(){return 0==r},put:function(l){if(r<e)f(l);else{var h=void 0;switch(t){case a:throw new Error(i);case u:n[o]=l,o=(o+1)%e,s=o;break;case c:h=2*e,n=d(),r=n.length,o=n.length,s=0,n.length=h,e=h,f(l)}}},take:l,flush:d}}Object.defineProperty(t,"__esModule",{value:!0}),t.buffers=t.BUFFER_OVERFLOW=void 0;var o=n("./node_modules/redux-saga/lib/internal/utils.js"),i=t.BUFFER_OVERFLOW="Channel's Buffer overflow!",a=1,s=2,u=3,c=4,f={isEmpty:o.kTrue,put:o.noop,take:o.noop};t.buffers={none:function(){return f},fixed:function(e){return r(e,a)},dropping:function(e){return r(e,s)},sliding:function(e){return r(e,u)},expanding:function(e){return r(e,c)}}},"./node_modules/redux-saga/lib/internal/channel.js":function(e,t,n){"use strict";function r(){function e(e){return n.push(e),function(){return(0,u.remove)(n,e)}}function t(e){for(var t=n.slice(),r=0,o=t.length;r<o;r++)t[r](e)}var n=[];return{subscribe:e,emit:t}}function o(){function e(){if(a&&s.length)throw(0,u.internalErr)("Cannot have a closed channel with pending takers");if(s.length&&!i.isEmpty())throw(0,u.internalErr)("Cannot have pending takers with non empty buffer")}function t(t){if(e(),(0,u.check)(t,u.is.notUndef,y),!a){if(!s.length)return i.put(t);for(var n=0;n<s.length;n++){var r=s[n];if(!r[u.MATCH]||r[u.MATCH](t))return s.splice(n,1),r(t)}}}function n(t){e(),(0,u.check)(t,u.is.func,"channel.take's callback must be a function"),a&&i.isEmpty()?t(d):i.isEmpty()?(s.push(t),t.cancel=function(){return(0,u.remove)(s,t)}):t(i.take())}function r(t){if(e(),(0,u.check)(t,u.is.func,"channel.flush' callback must be a function"),a&&i.isEmpty())return void t(d);t(i.flush())}function o(){if(e(),!a&&(a=!0,s.length)){var t=s;s=[];for(var n=0,r=t.length;n<r;n++)t[n](d)}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.buffers.fixed(),a=!1,s=[];return(0,u.check)(i,u.is.buffer,p),{take:n,put:t,flush:r,close:o,get __takers__(){return s},get __closed__(){return a}}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.buffers.none(),n=arguments[2];arguments.length>2&&(0,u.check)(n,u.is.func,"Invalid match function passed to eventChannel");var r=o(t),i=e(function(e){if(h(e))return void r.close();n&&!n(e)||r.put(e)});if(!u.is.func(i))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:function(){r.__closed__||(r.close(),i())}}}function a(e){var t=i(function(t){return e(function(e){if(e[u.SAGA_ACTION])return void t(e);(0,f.asap)(function(){return t(e)})})});return s({},t,{take:function(e,n){arguments.length>1&&((0,u.check)(n,u.is.func,"channel.take's matcher argument must be a function"),e[u.MATCH]=n),t.take(e)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.UNDEFINED_INPUT_ERROR=t.INVALID_BUFFER=t.isEnd=t.END=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.emitter=r,t.channel=o,t.eventChannel=i,t.stdChannel=a;var u=n("./node_modules/redux-saga/lib/internal/utils.js"),c=n("./node_modules/redux-saga/lib/internal/buffers.js"),f=n("./node_modules/redux-saga/lib/internal/scheduler.js"),l="@@redux-saga/CHANNEL_END",d=t.END={type:l},h=t.isEnd=function(e){return e&&e.type===l},p=t.INVALID_BUFFER="invalid buffer passed to channel factory function",y=t.UNDEFINED_INPUT_ERROR="Saga was provided with an undefined action"},"./node_modules/redux-saga/lib/internal/io.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,k.check)(arguments[0],k.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),k.is.pattern(e))return N(A,{pattern:e});if(k.is.channel(e))return N(A,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}function i(e,t){return arguments.length>1?((0,k.check)(e,k.is.notUndef,"put(channel, action): argument channel is undefined"),(0,k.check)(e,k.is.channel,"put(channel, action): argument "+e+" is not a valid channel"),(0,k.check)(t,k.is.notUndef,"put(channel, action): argument action is undefined")):((0,k.check)(e,k.is.notUndef,"put(action): argument action is undefined"),t=e,e=null),N(T,{channel:e,action:t})}function a(e){return N(O,e)}function s(e,t,n){(0,k.check)(t,k.is.notUndef,e+": argument fn is undefined");var r=null;if(k.is.array(t)){var o=t,i=E(o,2);r=i[0],t=i[1]}else if(t.fn){var a=t;r=a.context,t=a.fn}return(0,k.check)(t,k.is.func,e+": argument "+t+" is not a function"),{context:r,fn:t,args:n}}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return N(P,s("call",e,n))}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return N(P,s("apply",{context:e,fn:t},n))}function f(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return N(B,s("cps",e,n))}function l(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return N(U,s("fork",e,n))}function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=l.apply(void 0,[e].concat(n));return o[U].detached=!0,o}function h(e){if((0,k.check)(e,k.is.notUndef,"join(task): argument task is undefined"),!q(e))throw new Error("join(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return N(R,e)}function p(e){if((0,k.check)(e,k.is.notUndef,"cancel(task): argument task is undefined"),!q(e))throw new Error("cancel(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return N(S,e)}function y(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return 0===arguments.length?e=k.ident:((0,k.check)(e,k.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,k.check)(e,k.is.func,"select(selector,[...]): argument "+e+" is not a function")),N(C,{selector:e,args:n})}function b(e,t){return(0,k.check)(e,k.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,k.check)(t,k.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,k.check)(t,k.is.notUndef,"actionChannel(pattern, buffer): argument "+t+" is not a valid buffer")),N(I,{pattern:e,buffer:t})}function m(){return N(L,{})}function v(e){return(0,k.check)(e,k.is.channel,"flush(channel): argument "+e+" is not valid channel"),N(D,e)}function g(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return l.apply(void 0,[j.takeEveryHelper,e,t].concat(r))}function w(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return l.apply(void 0,[j.takeLatestHelper,e,t].concat(r))}function _(e,t,n){for(var r=arguments.length,o=Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return l.apply(void 0,[j.throttleHelper,e,t,n].concat(o))}Object.defineProperty(t,"__esModule",{value:!0}),t.asEffect=t.takem=void 0;var E=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.take=o,t.put=i,t.race=a,t.call=u,t.apply=c,t.cps=f,t.fork=l,t.spawn=d,t.join=h,t.cancel=p,t.select=y,t.actionChannel=b,t.cancelled=m,t.flush=v,t.takeEvery=g,t.takeLatest=w,t.throttle=_;var k=n("./node_modules/redux-saga/lib/internal/utils.js"),j=n("./node_modules/redux-saga/lib/internal/sagaHelpers.js"),x=(0,k.sym)("IO"),A="TAKE",T="PUT",O="RACE",P="CALL",B="CPS",U="FORK",R="JOIN",S="CANCEL",C="SELECT",I="ACTION_CHANNEL",L="CANCELLED",D="FLUSH",F=function(e,t){return e+" has been deprecated in favor of "+t+", please update your code"},N=function(e,t){var n;return n={},r(n,x,!0),r(n,e,t),n};o.maybe=function(){var e=o.apply(void 0,arguments);return e[A].maybe=!0,e};t.takem=(0,k.deprecate)(o.maybe,F("takem","take.maybe"));i.resolve=function(){var e=i.apply(void 0,arguments);return e[T].resolve=!0,e},i.sync=(0,k.deprecate)(i.resolve,F("put.sync","put.resolve"));var q=function(e){return e[k.TASK]},H=function(e){return function(t){return t&&t[x]&&t[e]}};t.asEffect={take:H(A),put:H(T),race:H(O),call:H(P),cps:H(B),fork:H(U),join:H(R),cancel:H(S),select:H(C),actionChannel:H(I),cancelled:H(L),flush:H(D)}},"./node_modules/redux-saga/lib/internal/sagaHelpers.js":function(e,t,n){"use strict";function r(e,t){function n(t,n){if(i===p)return h;if(n)throw i=p,n;o&&o(t);var r=e[i](),a=u(r,3),s=a[0],c=a[1],f=a[2];return i=s,o=f,i===p?h:c}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",o=void 0,i=t;return(0,f.makeIterator)(n,function(e){return n(null,e)},r,!0)}function o(e){return f.is.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function i(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var s={done:!1,value:(0,l.take)(e)},u=function(e){return{done:!1,value:l.fork.apply(void 0,[t].concat(i,[e]))}},f=void 0,d=function(e){return f=e};return r({q1:function(){return["q2",s,d]},q2:function(){return f===c.END?[p]:["q1",u(f)]}},"q1","takeEvery("+o(e)+", "+t.name+")")}function a(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var s={done:!1,value:(0,l.take)(e)},u=function(e){return{done:!1,value:l.fork.apply(void 0,[t].concat(i,[e]))}},f=function(e){return{done:!1,value:(0,l.cancel)(e)}},d=void 0,h=void 0,y=function(e){return d=e},b=function(e){return h=e};return r({q1:function(){return["q2",s,b]},q2:function(){return h===c.END?[p]:d?["q3",f(d)]:["q1",u(h),y]},q3:function(){return["q1",u(h),y]}},"q1","takeLatest("+o(e)+", "+t.name+")")}function s(e,t,n){for(var i=arguments.length,a=Array(i>3?i-3:0),s=3;s<i;s++)a[s-3]=arguments[s];var u=void 0,h=void 0,y={done:!1,value:(0,l.actionChannel)(t,d.buffers.sliding(1))},b=function(){return{done:!1,value:(0,l.take)(h,t)}},m=function(e){return{done:!1,value:l.fork.apply(void 0,[n].concat(a,[e]))}},v={done:!1,value:(0,l.call)(f.delay,e)},g=function(e){return u=e},w=function(e){return h=e};return r({q1:function(){return["q2",y,w]},q2:function(){return["q3",b(),g]},q3:function(){return u===c.END?[p]:["q4",m(u)]},q4:function(){return["q2",v]}},"q1","throttle("+o(t)+", "+n.name+")")}Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=t.takeLatest=t.takeEvery=void 0;var u=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.takeEveryHelper=i,t.takeLatestHelper=a,t.throttleHelper=s;var c=n("./node_modules/redux-saga/lib/internal/channel.js"),f=n("./node_modules/redux-saga/lib/internal/utils.js"),l=n("./node_modules/redux-saga/lib/internal/io.js"),d=n("./node_modules/redux-saga/lib/internal/buffers.js"),h={done:!0,value:void 0},p={},y=function(e){return"import "+e+" from 'redux-saga' has been deprecated in favor of import "+e+" from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."};t.takeEvery=(0,f.deprecate)(i,y("takeEvery")),t.takeLatest=(0,f.deprecate)(a,y("takeLatest")),t.throttle=(0,f.deprecate)(s,y("throttle"))},"./node_modules/redux-saga/lib/internal/scheduler.js":function(e,t,n){"use strict";function r(e){try{i(),e()}finally{a()}}function o(e){u?s.push(e):r(e)}function i(){u++}function a(){!--u&&s.length&&r(s.shift())}Object.defineProperty(t,"__esModule",{value:!0}),t.asap=o,t.suspend=i,t.flush=a;var s=[],u=0},"./node_modules/redux-saga/lib/internal/utils.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){if(!t(e))throw d("error","uncaught at check",n),new Error(n)}function i(e,t){var n=e.indexOf(t);n>=0&&e.splice(n,1)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=y({},e),n=new Promise(function(e,n){t.resolve=e,t.reject=n});return t.promise=n,t}function s(e){for(var t=[],n=0;n<e;n++)t.push(a());return t}function u(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=void 0,r=new Promise(function(r){n=setTimeout(function(){return r(t)},e)});return r[w]=function(){return clearTimeout(n)},r}function c(){var e,t=!0,n=void 0,o=void 0;return e={},r(e,v,!0),r(e,"isRunning",function(){return t}),r(e,"result",function(){return n}),r(e,"error",function(){return o}),r(e,"setRunning",function(e){return t=e}),r(e,"setResult",function(e){return n=e}),r(e,"setError",function(e){return o=e}),e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++e}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],o={name:n,next:e,throw:t,return:A};return r&&(o[g]=!0),"undefined"!=typeof Symbol&&(o[Symbol.iterator]=function(){return o}),o}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+e+": "+t+"\n"+(n&&n.stack||n)):console[e](t,n)}function h(e,t){return function(){return k&&d("warn",t),e.apply(void 0,arguments)}}function p(e){return function(t){var n=Object.defineProperty(t,_,{value:!0});return e(n)}}Object.defineProperty(t,"__esModule",{value:!0});var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.check=o,t.remove=i,t.deferred=a,t.arrayOfDeffered=s,t.delay=u,t.createMockTask=c,t.autoInc=f,t.makeIterator=l,t.log=d,t.deprecate=h,t.wrapSagaDispatch=p;var m=t.sym=function(e){return"@@redux-saga/"+e},v=t.TASK=m("TASK"),g=t.HELPER=m("HELPER"),w=(t.MATCH=m("MATCH"),t.CANCEL=m("cancelPromise")),_=t.SAGA_ACTION=m("SAGA_ACTION"),E=t.konst=function(e){return function(){return e}},k=(t.kTrue=E(!0),t.kFalse=E(!1),t.noop=function(){},t.ident=function(e){return e},t.isDev=!1),j=t.is={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},array:Array.isArray,promise:function(e){return e&&j.func(e.then)},iterator:function(e){return e&&j.func(e.next)&&j.func(e.throw)},task:function(e){return e&&e[v]},observable:function(e){return e&&j.func(e.subscribe)},buffer:function(e){return e&&j.func(e.isEmpty)&&j.func(e.take)&&j.func(e.put)},pattern:function(e){return e&&("string"==typeof e||"symbol"===(void 0===e?"undefined":b(e))||j.func(e)||j.array(e))},channel:function(e){return e&&j.func(e.take)&&j.func(e.close)},helper:function(e){return e&&e[g]}},x=(t.uid=f(),function(e){throw e}),A=function(e){return{value:e,done:!0}};t.internalErr=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}},"./node_modules/whatwg-fetch/fetch.js":function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=a(t);return t.readAsArrayBuffer(e),n}function u(e){var t=new FileReader,n=a(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&g(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!w(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var n=t.body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split("\r\n").forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},w=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];this.map[e]=o?o+","+r:r},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=n(r)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];b.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=h,e.Response=b,e.fetch=function(e,t){return new Promise(function(n,r){var o=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;n(new b(t,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});