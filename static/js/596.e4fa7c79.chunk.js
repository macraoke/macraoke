/*! For license information please see 596.e4fa7c79.chunk.js.LICENSE.txt */
(self.webpackChunkmacraoke=self.webpackChunkmacraoke||[]).push([[596],{262:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!==o--;){var i=a[o];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}},102:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},888:function(e,t,r){"use strict";var n=r(47);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},457:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=t},364:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(439),a=(n=o)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},698:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(788)),o=u(r(506)),a=u(r(626)),i=u(r(364));function u(e){return e&&e.__esModule?e:{default:e}}var s=(0,n.default)("youtube-player"),c={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){s('event "%s"',n,t),e.trigger(r,t)}},n=!0,o=!1,i=void 0;try{for(var u,c=a.default[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){r(u.value)}}catch(l){o=!0,i=l}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&i.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=i.default[n],o=e.getPlayerState(),a=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(a),r())}))})).then((function(){return a})):a}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){return e[n].apply(e,r)}))}},a=!0,u=!1,s=void 0;try{for(var c,l=o.default[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=c.value;n(f)}}catch(p){u=!0,s=p}finally{try{!a&&l.return&&l.return()}finally{if(u)throw s}}return r}};t.default=c,e.exports=t.default},439:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},626:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},506:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},71:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=u(r(457)),a=u(r(642)),i=u(r(698));function u(e){return e&&e.__esModule?e:{default:e}}var s=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=(0,o.default)();if(s||(s=(0,a.default)(u)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(u);var c=new Promise((function(r){"object"===("undefined"===typeof e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):s.then((function(n){var o=new n.Player(e,t);return u.on("ready",(function(){r(o)})),null}))})),l=i.default.promisifyPlayer(c,r);return l.on=u.on,l.off=u.off,l},e.exports=t.default},642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(102),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,a.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},788:function(e,t,r){function n(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=r(572)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=n,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())},572:function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),u=0;u<i.length;u++)i[u]=arguments[u];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;s++;var o=t.formatters[n];if("function"===typeof o){var a=i[s];r=o.call(e,a),i.splice(s,1),s--}return r})),t.formatArgs.call(e,i);var c=r.log||t.log||console.log.bind(console);c.apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"===typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"===typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(426),t.names=[],t.skips=[],t.formatters={}},426:function(e){var t=1e3,r=60*t,n=60*r,o=24*n,a=365.25*o;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,u){u=u||{};var s,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var u=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return u*a;case"days":case"day":case"d":return u*o;case"hours":case"hour":case"hrs":case"hr":case"h":return u*n;case"minutes":case"minute":case"mins":case"min":case"m":return u*r;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}(e);if("number"===c&&!1===isNaN(e))return u.long?i(s=e,o,"day")||i(s,n,"hour")||i(s,r,"minute")||i(s,t,"second")||s+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},861:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var u=e[a](i),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function u(e){n(i,o,a,u,s,"next",e)}function s(e){n(i,o,a,u,s,"throw",e)}u(void 0)}))}}r.d(t,{Z:function(){return o}})},671:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:function(){return n}})},144:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r.d(t,{Z:function(){return o}})},882:function(e,t,r){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:function(){return i}});var o=r(2);function a(e,t){if(t&&("object"===(0,o.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=n(e);if(t){var i=n(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return a(this,r)}}},340:function(e,t,r){"use strict";function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}r.d(t,{Z:function(){return o}})},165:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2);function o(){o=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=E(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(A){return{type:"throw",arg:A}}}e.wrap=l;var p={};function d(){}function y(){}function h(){}var v={};c(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==t&&r.call(m,i)&&(v=m);var b=h.prototype=d.prototype=Object.create(v);function P(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(a,i,u,s){var c=f(e[a],e,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==(0,n.Z)(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){o("next",e,u,s)}),(function(e){o("throw",e,u,s)})):t.resolve(p).then((function(e){l.value=e,u(l)}),(function(e){return o("throw",e,u,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=h,c(b,"constructor",h),c(h,"constructor",y),y.displayName=c(h,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},P(w.prototype),c(w.prototype,u,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},P(b),c(b,s,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}},2:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:function(){return n}})},596:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var n=r(165),o=r(861),a=r(671),i=r(144),u=r(340),s=r(882);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}var f=r(7),p=r(791),d=r(262),y=r(71),h=Object.defineProperty,v=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,w=function(e,t,r){return t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},E=function(e,t){for(var r in t||(t={}))b.call(t,r)&&w(e,r,t[r]);if(m){var n,o=l(m(t));try{for(o.s();!(n=o.n()).done;){r=n.value;P.call(t,r)&&w(e,r,t[r])}}catch(a){o.e(a)}finally{o.f()}}return e},S=function(e,t){return v(e,g(t))};function O(e,t){var r,n;if(e.videoId!==t.videoId)return!0;var o=(null==(r=e.opts)?void 0:r.playerVars)||{},a=(null==(n=t.opts)?void 0:n.playerVars)||{};return o.start!==a.start||o.end!==a.end}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S(E({},e),{height:0,width:0,playerVars:S(E({},e.playerVars),{autoplay:0,start:0,end:0})})}function C(e,t){return e.videoId!==t.videoId||!d(x(e.opts),x(t.opts))}function _(e,t){var r,n,o,a;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(o=e.opts)?void 0:o.height)!==(null==(a=t.opts)?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var A={videoId:f.string,id:f.string,className:f.string,iframeClassName:f.string,style:f.object,title:f.string,loading:f.oneOf(["lazy","eager"]),opts:f.objectOf(f.any),onReady:f.func,onError:f.func,onPlay:f.func,onPause:f.func,onEnd:f.func,onStateChange:f.func,onPlaybackRateChange:f.func,onPlaybackQualityChange:f.func},k=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).destroyPlayerPromise=void 0,n.onPlayerReady=function(e){var t,r;return null==(r=(t=n.props).onReady)?void 0:r.call(t,e)},n.onPlayerError=function(e){var t,r;return null==(r=(t=n.props).onError)?void 0:r.call(t,e)},n.onPlayerStateChange=function(e){var t,o,a,i,u,s,c,l;switch(null==(o=(t=n.props).onStateChange)||o.call(t,e),e.data){case r.PlayerState.ENDED:null==(i=(a=n.props).onEnd)||i.call(a,e);break;case r.PlayerState.PLAYING:null==(s=(u=n.props).onPlay)||s.call(u,e);break;case r.PlayerState.PAUSED:null==(l=(c=n.props).onPause)||l.call(c,e)}},n.onPlayerPlaybackRateChange=function(e){var t,r;return null==(r=(t=n.props).onPlaybackRateChange)?void 0:r.call(t,e)},n.onPlayerPlaybackQualityChange=function(e){var t,r;return null==(r=(t=n.props).onPlaybackQualityChange)?void 0:r.call(t,e)},n.destroyPlayer=function(){return n.internalPlayer?(n.destroyPlayerPromise=n.internalPlayer.destroy().then((function(){return n.destroyPlayerPromise=void 0})),n.destroyPlayerPromise):Promise.resolve()},n.createPlayer=function(){if("undefined"!==typeof document)if(n.destroyPlayerPromise)n.destroyPlayerPromise.then(n.createPlayer);else{var e=S(E({},n.props.opts),{videoId:n.props.videoId});n.internalPlayer=y(n.container,e),n.internalPlayer.on("ready",n.onPlayerReady),n.internalPlayer.on("error",n.onPlayerError),n.internalPlayer.on("stateChange",n.onPlayerStateChange),n.internalPlayer.on("playbackRateChange",n.onPlayerPlaybackRateChange),n.internalPlayer.on("playbackQualityChange",n.onPlayerPlaybackQualityChange),(n.props.title||n.props.loading)&&n.internalPlayer.getIframe().then((function(e){n.props.title&&e.setAttribute("title",n.props.title),n.props.loading&&e.setAttribute("loading",n.props.loading)}))}},n.resetPlayer=function(){return n.destroyPlayer().then(n.createPlayer)},n.updatePlayer=function(){var e;null==(e=n.internalPlayer)||e.getIframe().then((function(e){n.props.id?e.setAttribute("id",n.props.id):e.removeAttribute("id"),n.props.iframeClassName?e.setAttribute("class",n.props.iframeClassName):e.removeAttribute("class"),n.props.opts&&n.props.opts.width?e.setAttribute("width",n.props.opts.width.toString()):e.removeAttribute("width"),n.props.opts&&n.props.opts.height?e.setAttribute("height",n.props.opts.height.toString()):e.removeAttribute("height"),n.props.title?e.setAttribute("title",n.props.title):e.setAttribute("title","YouTube video player"),n.props.loading?e.setAttribute("loading",n.props.loading):e.removeAttribute("loading")}))},n.getInternalPlayer=function(){return n.internalPlayer},n.updateVideo=function(){var e,t,r,o;if("undefined"!==typeof n.props.videoId&&null!==n.props.videoId){var a=!1,i={videoId:n.props.videoId};(null==(t=n.props.opts)?void 0:t.playerVars)&&(a=1===n.props.opts.playerVars.autoplay,"start"in n.props.opts.playerVars&&(i.startSeconds=n.props.opts.playerVars.start),"end"in n.props.opts.playerVars&&(i.endSeconds=n.props.opts.playerVars.end)),a?null==(r=n.internalPlayer)||r.loadVideoById(i):null==(o=n.internalPlayer)||o.cueVideoById(i)}else null==(e=n.internalPlayer)||e.stopVideo()},n.refContainer=function(e){n.container=e},n.container=null,n.internalPlayer=null,n}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(t,this.props)&&this.updatePlayer(),!C(t,this.props)){e.next=4;break}return e.next=4,this.resetPlayer();case 4:O(t,this.props)&&this.updateVideo();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"render",value:function(){return p.createElement("div",{className:this.props.className,style:this.props.style},p.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}}]),r}(p.Component),j=k;j.propTypes=A,j.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},j.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var I=j}}]);
//# sourceMappingURL=596.e4fa7c79.chunk.js.map