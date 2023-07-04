/*!
* @license SoundJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2015 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/

/**!
 * SoundJS FlashAudioPlugin also includes swfobject (http://code.google.com/p/swfobject/)
 */

this.createjs=this.createjs||{},function(){var a=createjs.SoundJS=createjs.SoundJS||{};a.version="1.0.0",a.buildDate="Thu, 12 Oct 2017 16:34:05 GMT"}(),this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.deprecate=function(a,b){"use strict";return function(){var c="Deprecated property or method '"+b+"'. See docs for info.";return console&&(console.warn?console.warn(c):console.log(c)),a&&a.apply(this,arguments)}},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function BrowserDetect(){throw"BrowserDetect cannot be instantiated"}var a=BrowserDetect.agent=window.navigator.userAgent;BrowserDetect.isWindowPhone=a.indexOf("IEMobile")>-1||a.indexOf("Windows Phone")>-1,BrowserDetect.isFirefox=a.indexOf("Firefox")>-1,BrowserDetect.isOpera=null!=window.opera,BrowserDetect.isChrome=a.indexOf("Chrome")>-1,BrowserDetect.isIOS=(a.indexOf("iPod")>-1||a.indexOf("iPhone")>-1||a.indexOf("iPad")>-1)&&!BrowserDetect.isWindowPhone,BrowserDetect.isAndroid=a.indexOf("Android")>-1&&!BrowserDetect.isWindowPhone,BrowserDetect.isBlackberry=a.indexOf("Blackberry")>-1,createjs.BrowserDetect=BrowserDetect}(),this.createjs=this.createjs||{},function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var a=EventDispatcher.prototype;EventDispatcher.initialize=function(b){b.addEventListener=a.addEventListener,b.on=a.on,b.removeEventListener=b.off=a.removeEventListener,b.removeAllEventListeners=a.removeAllEventListeners,b.hasEventListener=a.hasEventListener,b.dispatchEvent=a.dispatchEvent,b._dispatchEvent=a._dispatchEvent,b.willTrigger=a.willTrigger},a.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},a.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},a.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},a.off=a.removeEventListener,a.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},a.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},a.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},a.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},a.toString=function(){return"[EventDispatcher]"},a._dispatchEvent=function(a,b){var c,d,e=2>=b?this._captureListeners:this._listeners;if(a&&e&&(d=e[a.type])&&(c=d.length)){try{a.currentTarget=this}catch(f){}try{a.eventPhase=0|b}catch(f){}a.removed=!1,d=d.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=d[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}2===b&&this._dispatchEvent(a,2.1)},createjs.EventDispatcher=EventDispatcher}(),this.createjs=this.createjs||{},function(){"use strict";function Event(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var a=Event.prototype;a.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},a.stopPropagation=function(){this.propagationStopped=!0},a.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},a.remove=function(){this.removed=!0},a.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},a.set=function(a){for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),this.createjs=this.createjs||{},function(){"use strict";function ErrorEvent(a,b,c){this.Event_constructor("error"),this.title=a,this.message=b,this.data=c}var a=createjs.extend(ErrorEvent,createjs.Event);a.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(ErrorEvent,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function ProgressEvent(a,b){this.Event_constructor("progress"),this.loaded=a,this.total=null==b?1:b,this.progress=0==b?0:this.loaded/this.total}var a=createjs.extend(ProgressEvent,createjs.Event);a.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(ProgressEvent,"Event")}(window),this.createjs=this.createjs||{},function(){"use strict";function LoadItem(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.Methods.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=b.LOAD_TIMEOUT_DEFAULT}var a=LoadItem.prototype={},b=LoadItem;b.LOAD_TIMEOUT_DEFAULT=8e3,b.create=function(a){if("string"==typeof a){var c=new LoadItem;return c.src=a,c}if(a instanceof b)return a;if(a instanceof Object&&a.src)return null==a.loadTimeout&&(a.loadTimeout=b.LOAD_TIMEOUT_DEFAULT),a;throw new Error("Type not recognized.")},a.set=function(a){for(var b in a)this[b]=a[b];return this},createjs.LoadItem=b}(),this.createjs=this.createjs||{},function(){var a={};a.POST="POST",a.GET="GET",createjs.Methods=a}(),this.createjs=this.createjs||{},function(){var a={};a.BINARY="binary",a.CSS="css",a.FONT="font",a.FONTCSS="fontcss",a.IMAGE="image",a.JAVASCRIPT="javascript",a.JSON="json",a.JSONP="jsonp",a.MANIFEST="manifest",a.SOUND="sound",a.VIDEO="video",a.SPRITESHEET="spritesheet",a.SVG="svg",a.TEXT="text",a.XML="xml",createjs.Types=a}(),function(){var a={};a.a=function(){return a.el("a")},a.svg=function(){return a.el("svg")},a.object=function(){return a.el("object")},a.image=function(){return a.el("image")},a.img=function(){return a.el("img")},a.style=function(){return a.el("style")},a.link=function(){return a.el("link")},a.script=function(){return a.el("script")},a.audio=function(){return a.el("audio")},a.video=function(){return a.el("video")},a.text=function(a){return document.createTextNode(a)},a.el=function(a){return document.createElement(a)},createjs.Elements=a}(),function(){var a={container:null};a.appendToHead=function(b){a.getHead().appendChild(b)},a.appendToBody=function(b){if(null==a.container){a.container=document.createElement("div"),a.container.id="preloadjs-container";var c=a.container.style;c.visibility="hidden",c.position="absolute",c.width=a.container.style.height="10px",c.overflow="hidden",c.transform=c.msTransform=c.webkitTransform=c.oTransform="translate(-10px, -10px)",a.getBody().appendChild(a.container)}a.container.appendChild(b)},a.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},a.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},a.removeChild=function(a){a.parent&&a.parent.removeChild(a)},a.isImageTag=function(a){return a instanceof HTMLImageElement},a.isAudioTag=function(a){return window.HTMLAudioElement?a instanceof HTMLAudioElement:!1},a.isVideoTag=function(a){return window.HTMLVideoElement?a instanceof HTMLVideoElement:!1},createjs.DomUtils=a}(),function(){var a={};a.isBinary=function(a){switch(a){case createjs.Types.IMAGE:case createjs.Types.BINARY:return!0;default:return!1}},a.isText=function(a){switch(a){case createjs.Types.TEXT:case createjs.Types.JSON:case createjs.Types.MANIFEST:case createjs.Types.XML:case createjs.Types.CSS:case createjs.Types.SVG:case createjs.Types.JAVASCRIPT:case createjs.Types.SPRITESHEET:return!0;default:return!1}},a.getTypeByExtension=function(a){if(null==a)return createjs.Types.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.Types.IMAGE;case"ogg":case"mp3":case"webm":return createjs.Types.SOUND;case"mp4":case"webm":case"ts":return createjs.Types.VIDEO;case"json":return createjs.Types.JSON;case"xml":return createjs.Types.XML;case"css":return createjs.Types.CSS;case"js":return createjs.Types.JAVASCRIPT;case"svg":return createjs.Types.SVG;default:return createjs.Types.TEXT}},createjs.RequestUtils=a}(),function(){var a={};a.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,a.RELATIVE_PATT=/^[.\/]*?\//i,a.EXTENSION_PATT=/\/?[^\/]+\.(\w{1,5})$/i,a.parseURI=function(b){var c={absolute:!1,relative:!1,protocol:null,hostname:null,port:null,pathname:null,search:null,hash:null,host:null};if(null==b)return c;var d=createjs.Elements.a();d.href=b;for(var e in c)e in d&&(c[e]=d[e]);var f=b.indexOf("?");f>-1&&(b=b.substr(0,f));var g;return a.ABSOLUTE_PATT.test(b)?c.absolute=!0:a.RELATIVE_PATT.test(b)&&(c.relative=!0),(g=b.match(a.EXTENSION_PATT))&&(c.extension=g[1].toLowerCase()),c},a.formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},a.buildURI=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this.formatQueryString(b,c):a+"?"+this.formatQueryString(b,c)},a.isCrossDomain=function(a){var b=createjs.Elements.a();b.href=a.src;var c=createjs.Elements.a();c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},a.isLocal=function(a){var b=createjs.Elements.a();return b.href=a.src,""==b.hostname&&"file:"==b.protocol},createjs.URLUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractLoader(a,b,c){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=c,this.resultFormatter=null,this._item=a?createjs.LoadItem.create(a):null,this._preferXHR=b,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var a=createjs.extend(AbstractLoader,createjs.EventDispatcher),b=AbstractLoader;try{Object.defineProperties(b,{POST:{get:createjs.deprecate(function(){return createjs.Methods.POST},"AbstractLoader.POST")},GET:{get:createjs.deprecate(function(){return createjs.Methods.GET},"AbstractLoader.GET")},BINARY:{get:createjs.deprecate(function(){return createjs.Types.BINARY},"AbstractLoader.BINARY")},CSS:{get:createjs.deprecate(function(){return createjs.Types.CSS},"AbstractLoader.CSS")},FONT:{get:createjs.deprecate(function(){return createjs.Types.FONT},"AbstractLoader.FONT")},FONTCSS:{get:createjs.deprecate(function(){return createjs.Types.FONTCSS},"AbstractLoader.FONTCSS")},IMAGE:{get:createjs.deprecate(function(){return createjs.Types.IMAGE},"AbstractLoader.IMAGE")},JAVASCRIPT:{get:createjs.deprecate(function(){return createjs.Types.JAVASCRIPT},"AbstractLoader.JAVASCRIPT")},JSON:{get:createjs.deprecate(function(){return createjs.Types.JSON},"AbstractLoader.JSON")},JSONP:{get:createjs.deprecate(function(){return createjs.Types.JSONP},"AbstractLoader.JSONP")},MANIFEST:{get:createjs.deprecate(function(){return createjs.Types.MANIFEST},"AbstractLoader.MANIFEST")},SOUND:{get:createjs.deprecate(function(){return createjs.Types.SOUND},"AbstractLoader.SOUND")},VIDEO:{get:createjs.deprecate(function(){return createjs.Types.VIDEO},"AbstractLoader.VIDEO")},SPRITESHEET:{get:createjs.deprecate(function(){return createjs.Types.SPRITESHEET},"AbstractLoader.SPRITESHEET")},SVG:{get:createjs.deprecate(function(){return createjs.Types.SVG},"AbstractLoader.SVG")},TEXT:{get:createjs.deprecate(function(){return createjs.Types.TEXT},"AbstractLoader.TEXT")},XML:{get:createjs.deprecate(function(){return createjs.Types.XML},"AbstractLoader.XML")}})}catch(c){}a.getItem=function(){return this._item},a.getResult=function(a){return a?this._rawResult:this._result},a.getTag=function(){return this._tag},a.setTag=function(a){this._tag=a},a.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var a=new createjs.Event("initialize");a.loader=this._request,this.dispatchEvent(a),this._request.load()},a.cancel=function(){this.canceled=!0,this.destroy()},a.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},a.getLoadedItems=function(){return this._loadedItems},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._createTag=function(){return null},a._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},a._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.ProgressEvent(this.progress)):(b=a,this.progress=a.loaded/a.total,b.progress=this.progress,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(b)}},a._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var a=new createjs.Event("complete");a.rawResult=this._rawResult,null!=this._result&&(a.result=this._result),this.dispatchEvent(a)}},a._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(a))},a._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},a.resultFormatter=null,a.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response;var b=this.resultFormatter&&this.resultFormatter(this);b instanceof Function?b.call(this,createjs.proxy(this._resultFormatSuccess,this),createjs.proxy(this._resultFormatFailed,this)):(this._result=b||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(a);break;case"error":this._sendError(a);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_"+a.type.toUpperCase()+"_ERROR"))}},a._resultFormatSuccess=function(a){this._result=a,this._sendComplete()},a._resultFormatFailed=function(a){this._sendError(a)},a.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(AbstractLoader,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractMediaLoader(a,b,c){this.AbstractLoader_constructor(a,b,c),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.on("initialize",this._updateXHR,this)}var a=createjs.extend(AbstractMediaLoader,createjs.AbstractLoader);a.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},a._createTag=function(){},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._updateXHR=function(a){a.loader.setResponseType&&a.loader.setResponseType("blob")},a._formatResult=function(a){if(this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR){var b=window.URL||window.webkitURL,c=a.getResult(!0);a.getTag().src=b.createObjectURL(c)}return a.getTag()},createjs.AbstractMediaLoader=createjs.promote(AbstractMediaLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var AbstractRequest=function(a){this._item=a},a=createjs.extend(AbstractRequest,createjs.EventDispatcher);a.load=function(){},a.destroy=function(){},a.cancel=function(){},createjs.AbstractRequest=createjs.promote(AbstractRequest,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function TagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1}var a=createjs.extend(TagRequest,createjs.AbstractRequest);a.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var a=new createjs.Event("initialize");a.loader=this._tag,this.dispatchEvent(a),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(createjs.DomUtils.appendToBody(this._tag),this._addedToDOM=!0)},a.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleError=function(){this._clean(),this.dispatchEvent("error")},a._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this.dispatchEvent("complete")},a._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},a._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},a._handleStalled=function(){},createjs.TagRequest=createjs.promote(TagRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function MediaTagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var a=createjs.extend(MediaTagRequest,createjs.TagRequest);a.load=function(){var a=createjs.proxy(this._handleStalled,this);this._stalledCallback=a;var b=createjs.proxy(this._handleProgress,this);this._handleProgress=b,this._tag.addEventListener("stalled",a),this._tag.addEventListener("progress",b),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleStalled=function(){},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(MediaTagRequest,"TagRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function XHRRequest(a){this.AbstractRequest_constructor(a),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(a)}var a=createjs.extend(XHRRequest,createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],a.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},a.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},a.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values?this._request.send(createjs.URLUtils.formatQueryString(this._item.values)):this._request.send()}catch(a){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,a))}},a.setResponseType=function(a){"blob"===a&&(a=window.URL?"blob":"arraybuffer",this._responseType=a),this._request.responseType=a},a.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},a.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._handleLoadStart=function(){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},a._handleAbort=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,a))},a._handleError=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(a.message))},a._handleReadyStateChange=function(){4==this._request.readyState&&this._handleLoad()},a._handleLoad=function(){if(!this.loaded){this.loaded=!0;var a=this._checkError();if(a)return void this._handleError(a);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(b){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===b.name&&window.BlobBuilder){var c=new BlobBuilder;c.append(this._response),this._response=c.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},a._handleTimeout=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,a))},a._checkError=function(){var a=parseInt(this._request.status);return a>=400&&599>=a?new Error(a):0==a&&/^https?:/.test(location.protocol)?new Error(0):null},a._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},a._createXHR=function(a){var b=createjs.URLUtils.isCrossDomain(a),c={},d=null;if(window.XMLHttpRequest)d=new XMLHttpRequest,b&&void 0===d.withCredentials&&window.XDomainRequest&&(d=new XDomainRequest);else{for(var e=0,f=s.ACTIVEX_VERSIONS.length;f>e;e++){var g=s.ACTIVEX_VERSIONS[e];try{d=new ActiveXObject(g);break}catch(h){}}if(null==d)return!1}null==a.mimeType&&createjs.RequestUtils.isText(a.type)&&(a.mimeType="text/plain; charset=utf-8"),a.mimeType&&d.overrideMimeType&&d.overrideMimeType(a.mimeType),this._xhrLevel="string"==typeof d.responseType?2:1;var i=null;if(i=a.method==createjs.Methods.GET?createjs.URLUtils.buildURI(a.src,a.values):a.src,d.open(a.method||createjs.Methods.GET,i,!0),b&&d instanceof XMLHttpRequest&&1==this._xhrLevel&&(c.Origin=location.origin),a.values&&a.method==createjs.Methods.POST&&(c["Content-Type"]="application/x-www-form-urlencoded"),b||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),a.headers)for(var j in a.headers)c[j]=a.headers[j];for(j in c)d.setRequestHeader(j,c[j]);return d instanceof XMLHttpRequest&&void 0!==a.withCredentials&&(d.withCredentials=a.withCredentials),this._request=d,!0},a._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},a.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(XHRRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function SoundLoader(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.Types.SOUND),createjs.DomUtils.isAudioTag(a)?this._tag=a:createjs.DomUtils.isAudioTag(a.src)?this._tag=a:createjs.DomUtils.isAudioTag(a.tag)&&(this._tag=createjs.DomUtils.isAudioTag(a)?a:a.src),null!=this._tag&&(this._preferXHR=!1)}var a=createjs.extend(SoundLoader,createjs.AbstractMediaLoader),b=SoundLoader;b.canLoadItem=function(a){return a.type==createjs.Types.SOUND},a._createTag=function(a){var b=createjs.Elements.audio();return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.SoundLoader=createjs.promote(SoundLoader,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var PlayPropsConfig=function(){this.interrupt=null,this.delay=null,this.offset=null,this.loop=null,this.volume=null,this.pan=null,this.startTime=null,this.duration=null},a=PlayPropsConfig.prototype={},b=PlayPropsConfig;b.create=function(a){if("string"==typeof a)return console&&(console.warn||console.log)("Deprecated behaviour. Sound.play takes a configuration object instead of individual arguments. See docs for info."),(new createjs.PlayPropsConfig).set({interrupt:a});if(null==a||a instanceof b||a instanceof Object)return(new createjs.PlayPropsConfig).set(a);if(null==a)throw new Error("PlayProps configuration not recognized.")},a.set=function(a){if(null!=a)for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[PlayPropsConfig]"},createjs.PlayPropsConfig=b}(),this.createjs=this.createjs||{},function(){"use strict";function Sound(){throw"Sound cannot be instantiated"}function a(a,b){this.init(a,b)}var b=Sound;b.INTERRUPT_ANY="any",b.INTERRUPT_EARLY="early",b.INTERRUPT_LATE="late",b.INTERRUPT_NONE="none",b.PLAY_INITED="playInited",b.PLAY_SUCCEEDED="playSucceeded",b.PLAY_INTERRUPTED="playInterrupted",b.PLAY_FINISHED="playFinished",b.PLAY_FAILED="playFailed",b.SUPPORTED_EXTENSIONS=["mp3","ogg","opus","mpeg","wav","m4a","mp4","aiff","wma","mid"],b.EXTENSION_MAP={m4a:"mp4"},b.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/,b.defaultInterruptBehavior=b.INTERRUPT_NONE,b.alternateExtensions=[],b.activePlugin=null,b._masterVolume=1,b._getMasterVolume=function(){return this._masterVolume},b.getVolume=createjs.deprecate(b._getMasterVolume,"Sound.getVolume"),b._setMasterVolume=function(a){if(null!=Number(a)&&(a=Math.max(0,Math.min(1,a)),b._masterVolume=a,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(a)))for(var c=this._instances,d=0,e=c.length;e>d;d++)c[d].setMasterVolume(a)},b.setVolume=createjs.deprecate(b._setMasterVolume,"Sound.setVolume"),b._masterMute=!1,b._getMute=function(){return this._masterMute},b.getMute=createjs.deprecate(b._getMute,"Sound.getMute"),b._setMute=function(a){if(null!=a&&(this._masterMute=a,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(a)))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterMute(a)},b.setMute=createjs.deprecate(b._setMute,"Sound.setMute"),b._getCapabilities=function(){return null==b.activePlugin?null:b.activePlugin._capabilities},b.getCapabilities=createjs.deprecate(b._getCapabilities,"Sound.getCapabilities"),Object.defineProperties(b,{volume:{get:b._getMasterVolume,set:b._setMasterVolume},muted:{get:b._getMute,set:b._setMute},capabilities:{get:b._getCapabilities}}),b._pluginsRegistered=!1,b._lastID=0,b._instances=[],b._idHash={},b._preloadHash={},b._defaultPlayPropsHash={},b.addEventListener=null,b.removeEventListener=null,b.removeAllEventListeners=null,b.dispatchEvent=null,b.hasEventListener=null,b._listeners=null,createjs.EventDispatcher.initialize(b),b.getPreloadHandlers=function(){return{callback:createjs.proxy(b.initLoad,b),types:["sound"],extensions:b.SUPPORTED_EXTENSIONS}},b._handleLoadComplete=function(a){var c=a.target.getItem().src;if(b._preloadHash[c])for(var d=0,e=b._preloadHash[c].length;e>d;d++){var f=b._preloadHash[c][d];if(b._preloadHash[c][d]=!0,b.hasEventListener("fileload")){var a=new createjs.Event("fileload");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,b.dispatchEvent(a)}}},b._handleLoadError=function(a){var c=a.target.getItem().src;if(b._preloadHash[c])for(var d=0,e=b._preloadHash[c].length;e>d;d++){var f=b._preloadHash[c][d];if(b._preloadHash[c][d]=!1,b.hasEventListener("fileerror")){var a=new createjs.Event("fileerror");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,b.dispatchEvent(a)}}},b._registerPlugin=function(a){return a.isSupported()?(b.activePlugin=new a,!0):!1},b.registerPlugins=function(a){b._pluginsRegistered=!0;for(var c=0,d=a.length;d>c;c++)if(b._registerPlugin(a[c]))return!0;return!1},b.initializeDefaultPlugins=function(){return null!=b.activePlugin?!0:b._pluginsRegistered?!1:b.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin])?!0:!1},b.isReady=function(){return null!=b.activePlugin},b.initLoad=function(a){return"video"==a.type?!0:b._registerSound(a)},b._registerSound=function(c){if(!b.initializeDefaultPlugins())return!1;var d;if(c.src instanceof Object?(d=b._parseSrc(c.src),d.src=c.path+d.src):d=b._parsePath(c.src),null==d)return!1;
c.src=d.src,c.type="sound";var e=c.data,f=null;if(null!=e&&(isNaN(e.channels)?isNaN(e)||(f=parseInt(e)):f=parseInt(e.channels),e.audioSprite))for(var g,h=e.audioSprite.length;h--;)g=e.audioSprite[h],b._idHash[g.id]={src:c.src,startTime:parseInt(g.startTime),duration:parseInt(g.duration)},g.defaultPlayProps&&(b._defaultPlayPropsHash[g.id]=createjs.PlayPropsConfig.create(g.defaultPlayProps));null!=c.id&&(b._idHash[c.id]={src:c.src});var i=b.activePlugin.register(c);return a.create(c.src,f),null!=e&&isNaN(e)?c.data.channels=f||a.maxPerChannel():c.data=f||a.maxPerChannel(),i.type&&(c.type=i.type),c.defaultPlayProps&&(b._defaultPlayPropsHash[c.src]=createjs.PlayPropsConfig.create(c.defaultPlayProps)),i},b.registerSound=function(a,c,d,e,f){var g={src:a,id:c,data:d,defaultPlayProps:f};a instanceof Object&&a.src&&(e=c,g=a),g=createjs.LoadItem.create(g),g.path=e,null==e||g.src instanceof Object||(g.src=e+g.src);var h=b._registerSound(g);if(!h)return!1;if(b._preloadHash[g.src]||(b._preloadHash[g.src]=[]),b._preloadHash[g.src].push(g),1==b._preloadHash[g.src].length)h.on("complete",this._handleLoadComplete,this),h.on("error",this._handleLoadError,this),b.activePlugin.preload(h);else if(1==b._preloadHash[g.src][0])return!0;return g},b.registerSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path,a=a.manifest);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.registerSound(a[d].src,a[d].id,a[d].data,b,a[d].defaultPlayProps);return c},b.removeSound=function(c,d){if(null==b.activePlugin)return!1;c instanceof Object&&c.src&&(c=c.src);var e;if(c instanceof Object?e=b._parseSrc(c):(c=b._getSrcById(c).src,e=b._parsePath(c)),null==e)return!1;c=e.src,null!=d&&(c=d+c);for(var f in b._idHash)b._idHash[f].src==c&&delete b._idHash[f];return a.removeSrc(c),delete b._preloadHash[c],b.activePlugin.removeSound(c),!0},b.removeSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path,a=a.manifest);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.removeSound(a[d].src,b);return c},b.removeAllSounds=function(){b._idHash={},b._preloadHash={},a.removeAll(),b.activePlugin&&b.activePlugin.removeAllSounds()},b.loadComplete=function(a){if(!b.isReady())return!1;var c=b._parsePath(a);return a=c?b._getSrcById(c.src).src:b._getSrcById(a).src,void 0==b._preloadHash[a]?!1:1==b._preloadHash[a][0]},b._parsePath=function(a){"string"!=typeof a&&(a=a.toString());var c=a.match(b.FILE_PATTERN);if(null==c)return!1;for(var d=c[4],e=c[5],f=b.capabilities,g=0;!f[e];)if(e=b.alternateExtensions[g++],g>b.alternateExtensions.length)return null;a=a.replace("."+c[5],"."+e);var h={name:d,src:a,extension:e};return h},b._parseSrc=function(a){var c={name:void 0,src:void 0,extension:void 0},d=b.capabilities;for(var e in a)if(a.hasOwnProperty(e)&&d[e]){c.src=a[e],c.extension=e;break}if(!c.src)return!1;var f=c.src.lastIndexOf("/");return c.name=-1!=f?c.src.slice(f+1):c.src,c},b.play=function(a,c){var d=createjs.PlayPropsConfig.create(c),e=b.createInstance(a,d.startTime,d.duration),f=b._playInstance(e,d);return f||e._playFailed(),e},b.createInstance=function(c,d,e){if(!b.initializeDefaultPlugins())return new createjs.DefaultSoundInstance(c,d,e);var f=b._defaultPlayPropsHash[c];c=b._getSrcById(c);var g=b._parsePath(c.src),h=null;return null!=g&&null!=g.src?(a.create(g.src),null==d&&(d=c.startTime),h=b.activePlugin.create(g.src,d,e||c.duration),f=f||b._defaultPlayPropsHash[g.src],f&&h.applyPlayProps(f)):h=new createjs.DefaultSoundInstance(c,d,e),h.uniqueId=b._lastID++,h},b.stop=function(){for(var a=this._instances,b=a.length;b--;)a[b].stop()},b.setDefaultPlayProps=function(a,c){a=b._getSrcById(a),b._defaultPlayPropsHash[b._parsePath(a.src).src]=createjs.PlayPropsConfig.create(c)},b.getDefaultPlayProps=function(a){return a=b._getSrcById(a),b._defaultPlayPropsHash[b._parsePath(a.src).src]},b._playInstance=function(a,c){var d=b._defaultPlayPropsHash[a.src]||{};if(null==c.interrupt&&(c.interrupt=d.interrupt||b.defaultInterruptBehavior),null==c.delay&&(c.delay=d.delay||0),null==c.offset&&(c.offset=a.position),null==c.loop&&(c.loop=a.loop),null==c.volume&&(c.volume=a.volume),null==c.pan&&(c.pan=a.pan),0==c.delay){var e=b._beginPlaying(a,c);if(!e)return!1}else{var f=setTimeout(function(){b._beginPlaying(a,c)},c.delay);a.delayTimeoutId=f}return this._instances.push(a),!0},b._beginPlaying=function(b,c){if(!a.add(b,c.interrupt))return!1;var d=b._beginPlaying(c);if(!d){var e=createjs.indexOf(this._instances,b);return e>-1&&this._instances.splice(e,1),!1}return!0},b._getSrcById=function(a){return b._idHash[a]||{src:a}},b._playFinished=function(b){a.remove(b);var c=createjs.indexOf(this._instances,b);c>-1&&this._instances.splice(c,1)},createjs.Sound=Sound,a.channels={},a.create=function(b,c){var d=a.get(b);return null==d?(a.channels[b]=new a(b,c),!0):!1},a.removeSrc=function(b){var c=a.get(b);return null==c?!1:(c._removeAll(),delete a.channels[b],!0)},a.removeAll=function(){for(var b in a.channels)a.channels[b]._removeAll();a.channels={}},a.add=function(b,c){var d=a.get(b.src);return null==d?!1:d._add(b,c)},a.remove=function(b){var c=a.get(b.src);return null==c?!1:(c._remove(b),!0)},a.maxPerChannel=function(){return c.maxDefault},a.get=function(b){return a.channels[b]};var c=a.prototype;c.constructor=a,c.src=null,c.max=null,c.maxDefault=100,c.length=0,c.init=function(a,b){this.src=a,this.max=b||this.maxDefault,-1==this.max&&(this.max=this.maxDefault),this._instances=[]},c._get=function(a){return this._instances[a]},c._add=function(a,b){return this._getSlot(b,a)?(this._instances.push(a),this.length++,!0):!1},c._remove=function(a){var b=createjs.indexOf(this._instances,a);return-1==b?!1:(this._instances.splice(b,1),this.length--,!0)},c._removeAll=function(){for(var a=this.length-1;a>=0;a--)this._instances[a].stop()},c._getSlot=function(a){var b,c;if(a!=Sound.INTERRUPT_NONE&&(c=this._get(0),null==c))return!0;for(var d=0,e=this.max;e>d;d++){if(b=this._get(d),null==b)return!0;if(b.playState==Sound.PLAY_FINISHED||b.playState==Sound.PLAY_INTERRUPTED||b.playState==Sound.PLAY_FAILED){c=b;break}a!=Sound.INTERRUPT_NONE&&(a==Sound.INTERRUPT_EARLY&&b.position<c.position||a==Sound.INTERRUPT_LATE&&b.position>c.position)&&(c=b)}return null!=c?(c._interrupt(),this._remove(c),!0):!1},c.toString=function(){return"[Sound SoundChannel]"}}(),this.createjs=this.createjs||{},function(){"use strict";var AbstractSoundInstance=function(a,b,c,d){this.EventDispatcher_constructor(),this.src=a,this.uniqueId=-1,this.playState=null,this.delayTimeoutId=null,this._volume=1,Object.defineProperty(this,"volume",{get:this._getVolume,set:this._setVolume}),this.getVolume=createjs.deprecate(this._getVolume,"AbstractSoundInstance.getVolume"),this.setVolume=createjs.deprecate(this._setVolume,"AbstractSoundInstance.setVolume"),this._pan=0,Object.defineProperty(this,"pan",{get:this._getPan,set:this._setPan}),this.getPan=createjs.deprecate(this._getPan,"AbstractSoundInstance.getPan"),this.setPan=createjs.deprecate(this._setPan,"AbstractSoundInstance.setPan"),this._startTime=Math.max(0,b||0),Object.defineProperty(this,"startTime",{get:this._getStartTime,set:this._setStartTime}),this.getStartTime=createjs.deprecate(this._getStartTime,"AbstractSoundInstance.getStartTime"),this.setStartTime=createjs.deprecate(this._setStartTime,"AbstractSoundInstance.setStartTime"),this._duration=Math.max(0,c||0),Object.defineProperty(this,"duration",{get:this._getDuration,set:this._setDuration}),this.getDuration=createjs.deprecate(this._getDuration,"AbstractSoundInstance.getDuration"),this.setDuration=createjs.deprecate(this._setDuration,"AbstractSoundInstance.setDuration"),this._playbackResource=null,Object.defineProperty(this,"playbackResource",{get:this._getPlaybackResource,set:this._setPlaybackResource}),d!==!1&&d!==!0&&this._setPlaybackResource(d),this.getPlaybackResource=createjs.deprecate(this._getPlaybackResource,"AbstractSoundInstance.getPlaybackResource"),this.setPlaybackResource=createjs.deprecate(this._setPlaybackResource,"AbstractSoundInstance.setPlaybackResource"),this._position=0,Object.defineProperty(this,"position",{get:this._getPosition,set:this._setPosition}),this.getPosition=createjs.deprecate(this._getPosition,"AbstractSoundInstance.getPosition"),this.setPosition=createjs.deprecate(this._setPosition,"AbstractSoundInstance.setPosition"),this._loop=0,Object.defineProperty(this,"loop",{get:this._getLoop,set:this._setLoop}),this.getLoop=createjs.deprecate(this._getLoop,"AbstractSoundInstance.getLoop"),this.setLoop=createjs.deprecate(this._setLoop,"AbstractSoundInstance.setLoop"),this._muted=!1,Object.defineProperty(this,"muted",{get:this._getMuted,set:this._setMuted}),this.getMuted=createjs.deprecate(this._getMuted,"AbstractSoundInstance.getMuted"),this.setMuted=createjs.deprecate(this._setMuted,"AbstractSoundInstance.setMuted"),this._paused=!1,Object.defineProperty(this,"paused",{get:this._getPaused,set:this._setPaused}),this.getPaused=createjs.deprecate(this._getPaused,"AbstractSoundInstance.getPaused"),this.setPaused=createjs.deprecate(this._setPaused,"AbstractSoundInstance.setPaused")},a=createjs.extend(AbstractSoundInstance,createjs.EventDispatcher);a.play=function(a){var b=createjs.PlayPropsConfig.create(a);return this.playState==createjs.Sound.PLAY_SUCCEEDED?(this.applyPlayProps(b),void(this._paused&&this._setPaused(!1))):(this._cleanUp(),createjs.Sound._playInstance(this,b),this)},a.stop=function(){return this._position=0,this._paused=!1,this._handleStop(),this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this},a.destroy=function(){this._cleanUp(),this.src=null,this.playbackResource=null,this.removeAllEventListeners()},a.applyPlayProps=function(a){return null!=a.offset&&this._setPosition(a.offset),null!=a.loop&&this._setLoop(a.loop),null!=a.volume&&this._setVolume(a.volume),null!=a.pan&&this._setPan(a.pan),null!=a.startTime&&(this._setStartTime(a.startTime),this._setDuration(a.duration)),this},a.toString=function(){return"[AbstractSoundInstance]"},a._getPaused=function(){return this._paused},a._setPaused=function(a){return a!==!0&&a!==!1||this._paused==a||1==a&&this.playState!=createjs.Sound.PLAY_SUCCEEDED?void 0:(this._paused=a,a?this._pause():this._resume(),clearTimeout(this.delayTimeoutId),this)},a._setVolume=function(a){return a==this._volume?this:(this._volume=Math.max(0,Math.min(1,a)),this._muted||this._updateVolume(),this)},a._getVolume=function(){return this._volume},a._setMuted=function(a){return a===!0||a===!1?(this._muted=a,this._updateVolume(),this):void 0},a._getMuted=function(){return this._muted},a._setPan=function(a){return a==this._pan?this:(this._pan=Math.max(-1,Math.min(1,a)),this._updatePan(),this)},a._getPan=function(){return this._pan},a._getPosition=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED||(this._position=this._calculateCurrentPosition()),this._position},a._setPosition=function(a){return this._position=Math.max(0,a),this.playState==createjs.Sound.PLAY_SUCCEEDED&&this._updatePosition(),this},a._getStartTime=function(){return this._startTime},a._setStartTime=function(a){return a==this._startTime?this:(this._startTime=Math.max(0,a||0),this._updateStartTime(),this)},a._getDuration=function(){return this._duration},a._setDuration=function(a){return a==this._duration?this:(this._duration=Math.max(0,a||0),this._updateDuration(),this)},a._setPlaybackResource=function(a){return this._playbackResource=a,0==this._duration&&this._playbackResource&&this._setDurationFromSource(),this},a._getPlaybackResource=function(){return this._playbackResource},a._getLoop=function(){return this._loop},a._setLoop=function(a){null!=this._playbackResource&&(0!=this._loop&&0==a?this._removeLooping(a):0==this._loop&&0!=a&&this._addLooping(a)),this._loop=a},a._sendEvent=function(a){var b=new createjs.Event(a);this.dispatchEvent(b)},a._cleanUp=function(){clearTimeout(this.delayTimeoutId),this._handleCleanUp(),this._paused=!1,createjs.Sound._playFinished(this)},a._interrupt=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_INTERRUPTED,this._sendEvent("interrupted")},a._beginPlaying=function(a){return this._setPosition(a.offset),this._setLoop(a.loop),this._setVolume(a.volume),this._setPan(a.pan),null!=a.startTime&&(this._setStartTime(a.startTime),this._setDuration(a.duration)),null!=this._playbackResource&&this._position<this._duration?(this._paused=!1,this._handleSoundReady(),this.playState=createjs.Sound.PLAY_SUCCEEDED,this._sendEvent("succeeded"),!0):(this._playFailed(),!1)},a._playFailed=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_FAILED,this._sendEvent("failed")},a._handleSoundComplete=function(){return this._position=0,0!=this._loop?(this._loop--,this._handleLoop(),void this._sendEvent("loop")):(this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,void this._sendEvent("complete"))},a._handleSoundReady=function(){},a._updateVolume=function(){},a._updatePan=function(){},a._updateStartTime=function(){},a._updateDuration=function(){},a._setDurationFromSource=function(){},a._calculateCurrentPosition=function(){},a._updatePosition=function(){},a._removeLooping=function(){},a._addLooping=function(){},a._pause=function(){},a._resume=function(){},a._handleStop=function(){},a._handleCleanUp=function(){},a._handleLoop=function(){},createjs.AbstractSoundInstance=createjs.promote(AbstractSoundInstance,"EventDispatcher"),createjs.DefaultSoundInstance=createjs.AbstractSoundInstance}(),this.createjs=this.createjs||{},function(){"use strict";var AbstractPlugin=function(){this._capabilities=null,this._loaders={},this._audioSources={},this._soundInstances={},this._volume=1,this._loaderClass,this._soundInstanceClass},a=AbstractPlugin.prototype;AbstractPlugin._capabilities=null,AbstractPlugin.isSupported=function(){return!0},a.register=function(a){var b=this._loaders[a.src];return b&&!b.canceled?this._loaders[a.src]:(this._audioSources[a.src]=!0,this._soundInstances[a.src]=[],b=new this._loaderClass(a),b.on("complete",this._handlePreloadComplete,this),this._loaders[a.src]=b,b)},a.preload=function(a){a.on("error",this._handlePreloadError,this),a.load()},a.isPreloadStarted=function(a){return null!=this._audioSources[a]},a.isPreloadComplete=function(a){return!(null==this._audioSources[a]||1==this._audioSources[a])},a.removeSound=function(a){if(this._soundInstances[a]){for(var b=this._soundInstances[a].length;b--;){var c=this._soundInstances[a][b];c.destroy()}delete this._soundInstances[a],delete this._audioSources[a],this._loaders[a]&&this._loaders[a].destroy(),delete this._loaders[a]}},a.removeAllSounds=function(){for(var a in this._audioSources)this.removeSound(a)},a.create=function(a,b,c){this.isPreloadStarted(a)||this.preload(this.register(a));var d=new this._soundInstanceClass(a,b,c,this._audioSources[a]);return this._soundInstances[a]&&this._soundInstances[a].push(d),d.setMasterVolume&&d.setMasterVolume(createjs.Sound.volume),d.setMasterMute&&d.setMasterMute(createjs.Sound.muted),d},a.setVolume=function(a){return this._volume=a,this._updateVolume(),!0},a.getVolume=function(){return this._volume},a.setMute=function(){return this._updateVolume(),!0},a.toString=function(){return"[AbstractPlugin]"},a._handlePreloadComplete=function(a){var b=a.target.getItem().src;this._audioSources[b]=a.result;for(var c=0,d=this._soundInstances[b].length;d>c;c++){var e=this._soundInstances[b][c];e.playbackResource=this._audioSources[b],this._soundInstances[b]=null}},a._handlePreloadError=function(){},a._updateVolume=function(){},createjs.AbstractPlugin=AbstractPlugin}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.Types.SOUND)}var b=createjs.extend(a,createjs.AbstractLoader);a.context=null,b.toString=function(){return"[WebAudioLoader]"},b._createRequest=function(){this._request=new createjs.XHRRequest(this._item,!1),this._request.setResponseType("arraybuffer")},b._sendComplete=function(){a.context.decodeAudioData(this._rawResult,createjs.proxy(this._handleAudioDecoded,this),createjs.proxy(this._sendError,this))},b._handleAudioDecoded=function(a){this._result=a,this.AbstractLoader__sendComplete()},createjs.WebAudioLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function WebAudioSoundInstance(a,c,d,e){this.AbstractSoundInstance_constructor(a,c,d,e),this.gainNode=b.context.createGain(),this.panNode=b.context.createPanner(),this.panNode.panningModel=b._panningModel,this.panNode.connect(this.gainNode),this._updatePan(),this.sourceNode=null,this._soundCompleteTimeout=null,this._sourceNodeNext=null,this._playbackStartTime=0,this._endedHandler=createjs.proxy(this._handleSoundComplete,this)}var a=createjs.extend(WebAudioSoundInstance,createjs.AbstractSoundInstance),b=WebAudioSoundInstance;b.context=null,b._scratchBuffer=null,b.destinationNode=null,b._panningModel="equalpower",a.destroy=function(){this.AbstractSoundInstance_destroy(),this.panNode.disconnect(0),this.panNode=null,this.gainNode.disconnect(0),this.gainNode=null},a.toString=function(){return"[WebAudioSoundInstance]"},a._updatePan=function(){this.panNode.setPosition(this._pan,0,-.5)},a._removeLooping=function(){this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)},a._addLooping=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},a._setDurationFromSource=function(){this._duration=1e3*this.playbackResource.duration},a._handleCleanUp=function(){this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout),this._playbackStartTime=0},a._cleanUpAudioNode=function(a){if(a){if(a.stop(0),a.disconnect(0),createjs.BrowserDetect.isIOS)try{a.buffer=b._scratchBuffer}catch(c){}a=null}return a},a._handleSoundReady=function(){this.gainNode.connect(b.destinationNode);var a=.001*this._duration,c=Math.min(.001*Math.max(0,this._position),a);this.sourceNode=this._createAndPlayAudioNode(b.context.currentTime-a,c),this._playbackStartTime=this.sourceNode.startTime-c,this._soundCompleteTimeout=setTimeout(this._endedHandler,1e3*(a-c)),0!=this._loop&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},a._createAndPlayAudioNode=function(a,c){var d=b.context.createBufferSource();d.buffer=this.playbackResource,d.connect(this.panNode);var e=.001*this._duration;return d.startTime=a+e,d.start(d.startTime,c+.001*this._startTime,e-c),d},a._pause=function(){this._position=1e3*(b.context.currentTime-this._playbackStartTime),this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout)},a._resume=function(){this._handleSoundReady()},a._updateVolume=function(){var a=this._muted?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},a._calculateCurrentPosition=function(){return 1e3*(b.context.currentTime-this._playbackStartTime)},a._updatePosition=function(){this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),clearTimeout(this._soundCompleteTimeout),this._paused||this._handleSoundReady()},a._handleLoop=function(){this._cleanUpAudioNode(this.sourceNode),this.sourceNode=this._sourceNodeNext,this._playbackStartTime=this.sourceNode.startTime,this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0),this._soundCompleteTimeout=setTimeout(this._endedHandler,this._duration)},a._updateDuration=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._pause(),this._resume())},createjs.WebAudioSoundInstance=createjs.promote(WebAudioSoundInstance,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function WebAudioPlugin(){this.AbstractPlugin_constructor(),this._panningModel=b._panningModel,this.context=b.context,this.dynamicsCompressorNode=this.context.createDynamicsCompressor(),this.dynamicsCompressorNode.connect(this.context.destination),this.gainNode=this.context.createGain(),this.gainNode.connect(this.dynamicsCompressorNode),createjs.WebAudioSoundInstance.destinationNode=this.gainNode,this._capabilities=b._capabilities,this._loaderClass=createjs.WebAudioLoader,this._soundInstanceClass=createjs.WebAudioSoundInstance,this._addPropsToClasses()}var a=createjs.extend(WebAudioPlugin,createjs.AbstractPlugin),b=WebAudioPlugin;b._capabilities=null,b._panningModel="equalpower",b.context=null,b._scratchBuffer=null,b._unlocked=!1,b.DEFAULT_SAMPLE_RATE=44100,b.isSupported=function(){var a=createjs.BrowserDetect.isIOS||createjs.BrowserDetect.isAndroid||createjs.BrowserDetect.isBlackberry;return"file:"!=location.protocol||a||this._isFileXHRSupported()?(b._generateCapabilities(),null==b.context?!1:!0):!1},b.playEmptySound=function(){if(null!=b.context){var a=b.context.createBufferSource();a.buffer=b._scratchBuffer,a.connect(b.context.destination),a.start(0,0,0)}},b._isFileXHRSupported=function(){var a=!0,b=new XMLHttpRequest;try{b.open("GET","WebAudioPluginTest.fail",!1)}catch(c){return a=!1}b.onerror=function(){a=!1},b.onload=function(){a=404==this.status||200==this.status||0==this.status&&""!=this.response};try{b.send()}catch(c){a=!1}return a},b._generateCapabilities=function(){if(null==b._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;if(null==b.context&&(b.context=b._createAudioContext(),null==b.context))return null;null==b._scratchBuffer&&(b._scratchBuffer=b.context.createBuffer(1,1,22050)),b._compatibilitySetUp(),"ontouchstart"in window&&"running"!=b.context.state&&(b._unlock(),document.addEventListener("mousedown",b._unlock,!0),document.addEventListener("touchstart",b._unlock,!0),document.addEventListener("touchend",b._unlock,!0)),b._capabilities={panning:!0,volume:!0,tracks:-1};for(var c=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=c.length;f>e;e++){var g=c[e],h=d[g]||g;b._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}b.context.destination.numberOfChannels<2&&(b._capabilities.panning=!1)}},b._createAudioContext=function(){var a=window.AudioContext||window.webkitAudioContext;if(null==a)return null;var c=new a;if(/(iPhone|iPad)/i.test(navigator.userAgent)&&c.sampleRate!==b.DEFAULT_SAMPLE_RATE){var d=c.createBuffer(1,1,b.DEFAULT_SAMPLE_RATE),e=c.createBufferSource();e.buffer=d,e.connect(c.destination),e.start(0),e.disconnect(),c.close(),c=new a}return c},b._compatibilitySetUp=function(){if(b._panningModel="equalpower",!b.context.createGain){b.context.createGain=b.context.createGainNode;var a=b.context.createBufferSource();a.__proto__.start=a.__proto__.noteGrainOn,a.__proto__.stop=a.__proto__.noteOff,b._panningModel=0}},b._unlock=function(){b._unlocked||(b.playEmptySound(),"running"==b.context.state&&(document.removeEventListener("mousedown",b._unlock,!0),document.removeEventListener("touchend",b._unlock,!0),document.removeEventListener("touchstart",b._unlock,!0),b._unlocked=!0))},a.toString=function(){return"[WebAudioPlugin]"},a._addPropsToClasses=function(){var a=this._soundInstanceClass;a.context=this.context,a._scratchBuffer=b._scratchBuffer,a.destinationNode=this.gainNode,a._panningModel=this._panningModel,this._loaderClass.context=this.context},a._updateVolume=function(){var a=createjs.Sound._masterMute?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},createjs.WebAudioPlugin=createjs.promote(WebAudioPlugin,"AbstractPlugin")}(),this.createjs=this.createjs||{},function(){"use strict";function HTMLAudioTagPool(){throw"HTMLAudioTagPool cannot be instantiated"}function a(){this._tags=[]}var b=HTMLAudioTagPool;b._tags={},b._tagPool=new a,b._tagUsed={},b.get=function(a){var c=b._tags[a];return null==c?(c=b._tags[a]=b._tagPool.get(),c.src=a):b._tagUsed[a]?(c=b._tagPool.get(),c.src=a):b._tagUsed[a]=!0,c},b.set=function(a,c){c==b._tags[a]?b._tagUsed[a]=!1:b._tagPool.set(c)},b.remove=function(a){var c=b._tags[a];return null==c?!1:(b._tagPool.set(c),delete b._tags[a],delete b._tagUsed[a],!0)},b.getDuration=function(a){var c=b._tags[a];return null!=c&&c.duration?1e3*c.duration:0},createjs.HTMLAudioTagPool=HTMLAudioTagPool;var c=a.prototype;c.constructor=a,c.get=function(){var a;return a=0==this._tags.length?this._createTag():this._tags.pop(),null==a.parentNode&&document.body.appendChild(a),a},c.set=function(a){var b=createjs.indexOf(this._tags,a);-1==b&&(this._tags.src=null,this._tags.push(a))},c.toString=function(){return"[TagPool]"},c._createTag=function(){var a=document.createElement("audio");return a.autoplay=!1,a.preload="none",a}}(),this.createjs=this.createjs||{},function(){"use strict";function HTMLAudioSoundInstance(a,b,c,d){this.AbstractSoundInstance_constructor(a,b,c,d),this._audioSpriteStopTime=null,this._delayTimeoutId=null,this._endedHandler=createjs.proxy(this._handleSoundComplete,this),this._readyHandler=createjs.proxy(this._handleTagReady,this),this._stalledHandler=createjs.proxy(this._playFailed,this),this._audioSpriteEndHandler=createjs.proxy(this._handleAudioSpriteLoop,this),this._loopHandler=createjs.proxy(this._handleSoundComplete,this),c?this._audioSpriteStopTime=.001*(b+c):this._duration=createjs.HTMLAudioTagPool.getDuration(this.src)}var a=createjs.extend(HTMLAudioSoundInstance,createjs.AbstractSoundInstance);a.setMasterVolume=function(){this._updateVolume()},a.setMasterMute=function(){this._updateVolume()},a.toString=function(){return"[HTMLAudioSoundInstance]"},a._removeLooping=function(){null!=this._playbackResource&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},a._addLooping=function(){null==this._playbackResource||this._audioSpriteStopTime||(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)},a._handleCleanUp=function(){var a=this._playbackResource;if(null!=a){a.pause(),a.loop=!1,a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1);try{a.currentTime=this._startTime}catch(b){}createjs.HTMLAudioTagPool.set(this.src,a),this._playbackResource=null}},a._beginPlaying=function(a){return this._playbackResource=createjs.HTMLAudioTagPool.get(this.src),this.AbstractSoundInstance__beginPlaying(a)},a._handleSoundReady=function(){if(4!==this._playbackResource.readyState){var a=this._playbackResource;return a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),a.preload="auto",void a.load()}this._updateVolume(),this._playbackResource.currentTime=.001*(this._startTime+this._position),this._audioSpriteStopTime?this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1):(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),0!=this._loop&&(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)),this._playbackResource.play()},a._handleTagReady=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),this._handleSoundReady()},a._pause=function(){this._playbackResource.pause()},a._resume=function(){this._playbackResource.play()},a._updateVolume=function(){if(null!=this._playbackResource){var a=this._muted||createjs.Sound._masterMute?0:this._volume*createjs.Sound._masterVolume;a!=this._playbackResource.volume&&(this._playbackResource.volume=a)}},a._calculateCurrentPosition=function(){return 1e3*this._playbackResource.currentTime-this._startTime},a._updatePosition=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1);try{this._playbackResource.currentTime=.001*(this._position+this._startTime)}catch(a){this._handleSetPositionSeek(null)}},a._handleSetPositionSeek=function(){null!=this._playbackResource&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},a._handleAudioSpriteLoop=function(){this._playbackResource.currentTime<=this._audioSpriteStopTime||(this._playbackResource.pause(),0==this._loop?this._handleSoundComplete(null):(this._position=0,this._loop--,this._playbackResource.currentTime=.001*this._startTime,this._paused||this._playbackResource.play(),this._sendEvent("loop")))},a._handleLoop=function(){0==this._loop&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},a._updateStartTime=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},a._updateDuration=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},a._setDurationFromSource=function(){this._duration=createjs.HTMLAudioTagPool.getDuration(this.src),this._playbackResource=null},createjs.HTMLAudioSoundInstance=createjs.promote(HTMLAudioSoundInstance,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function HTMLAudioPlugin(){this.AbstractPlugin_constructor(),this._capabilities=b._capabilities,this._loaderClass=createjs.SoundLoader,this._soundInstanceClass=createjs.HTMLAudioSoundInstance}var a=createjs.extend(HTMLAudioPlugin,createjs.AbstractPlugin),b=HTMLAudioPlugin;b.MAX_INSTANCES=30,b._AUDIO_READY="canplaythrough",b._AUDIO_ENDED="ended",b._AUDIO_SEEKED="seeked",b._AUDIO_STALLED="stalled",b._TIME_UPDATE="timeupdate",b._capabilities=null,b.isSupported=function(){return b._generateCapabilities(),null!=b._capabilities},b._generateCapabilities=function(){if(null==b._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;b._capabilities={panning:!1,volume:!0,tracks:-1};for(var c=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=c.length;f>e;e++){var g=c[e],h=d[g]||g;b._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}}},a.register=function(a){var b=createjs.HTMLAudioTagPool.get(a.src),c=this.AbstractPlugin_register(a);return c.setTag(b),c},a.removeSound=function(a){this.AbstractPlugin_removeSound(a),createjs.HTMLAudioTagPool.remove(a)},a.create=function(a,b,c){var d=this.AbstractPlugin_create(a,b,c);return d.playbackResource=null,d},a.toString=function(){return"[HTMLAudioPlugin]"},a.setVolume=a.getVolume=a.setMute=null,createjs.HTMLAudioPlugin=createjs.promote(HTMLAudioPlugin,"AbstractPlugin")
}();
var WaveformPlaylist;(()=>{var t={7135:(t,e,n)=>{t.exports=n(6248)},8098:t=>{t.exports=function(t){var e,n=String.prototype.split,r=/()??/.exec("")[1]===t;return e=function(e,i,a){if("[object RegExp]"!==Object.prototype.toString.call(i))return n.call(e,i,a);var o,s,u,c,l=[],h=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.extended?"x":"")+(i.sticky?"y":""),f=0;for(i=new RegExp(i.source,h+"g"),e+="",r||(o=new RegExp("^"+i.source+"$(?!\\s)",h)),a=a===t?-1>>>0:a>>>0;(s=i.exec(e))&&!((u=s.index+s[0].length)>f&&(l.push(e.slice(f,s.index)),!r&&s.length>1&&s[0].replace(o,(function(){for(var e=1;e<arguments.length-2;e++)arguments[e]===t&&(s[e]=t)})),s.length>1&&s.index<e.length&&Array.prototype.push.apply(l,s.slice(1)),c=s[0].length,f=u,l.length>=a));)i.lastIndex===s.index&&i.lastIndex++;return f===e.length?!c&&i.test("")||l.push(""):l.push(e.slice(f)),l.length>a?l.slice(0,a):l},e}()},7296:(t,e,n)=>{"use strict";var r=n(1102),i=n(2307),a=n(4339),o=n(3957),s=n(3246);(t.exports=function(t,e){var n,i,u,c,l;return arguments.length<2||"string"!=typeof t?(c=e,e=t,t=null):c=arguments[2],r(t)?(n=s.call(t,"c"),i=s.call(t,"e"),u=s.call(t,"w")):(n=u=!0,i=!1),l={value:e,configurable:n,enumerable:i,writable:u},c?a(o(c),l):l}).gs=function(t,e,n){var u,c,l,h;return"string"!=typeof t?(l=n,n=e,e=t,t=null):l=arguments[3],r(e)?i(e)?r(n)?i(n)||(l=n,n=void 0):n=void 0:(l=e,e=n=void 0):e=void 0,r(t)?(u=s.call(t,"c"),c=s.call(t,"e")):(u=!0,c=!1),h={get:e,set:n,configurable:u,enumerable:c},l?a(o(l),h):h}},817:t=>{"use strict";t.exports=function(){}},4339:(t,e,n)=>{"use strict";t.exports=n(1994)()?Object.assign:n(963)},1994:t=>{"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},963:(t,e,n)=>{"use strict";var r=n(3450),i=n(1836),a=Math.max;t.exports=function(t,e){var n,o,s,u=a(arguments.length,2);for(t=Object(i(t)),s=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},o=1;o<u;++o)r(e=arguments[o]).forEach(s);if(void 0!==n)throw n;return t}},8349:(t,e,n)=>{"use strict";var r=n(817)();t.exports=function(t){return t!==r&&null!==t}},3450:(t,e,n)=>{"use strict";t.exports=n(3446)()?Object.keys:n(9177)},3446:t=>{"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},9177:(t,e,n)=>{"use strict";var r=n(8349),i=Object.keys;t.exports=function(t){return i(r(t)?Object(t):t)}},3957:(t,e,n)=>{"use strict";var r=n(8349),i=Array.prototype.forEach,a=Object.create,o=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=a(null);return i.call(arguments,(function(t){r(t)&&o(Object(t),e)})),e}},79:t=>{"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},1836:(t,e,n)=>{"use strict";var r=n(8349);t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},3246:(t,e,n)=>{"use strict";t.exports=n(8711)()?String.prototype.contains:n(2370)},8711:t=>{"use strict";var e="razdwatrzy";t.exports=function(){return"function"==typeof e.contains&&!0===e.contains("dwa")&&!1===e.contains("foo")}},2370:t=>{"use strict";var e=String.prototype.indexOf;t.exports=function(t){return e.call(this,t,arguments[1])>-1}},9401:(t,e,n)=>{"use strict";n(8625)("ev-store","7");var r="__EV_STORE_KEY@7";t.exports=function(t){var e=t[r];return e||(e=t[r]={}),e}},8709:(t,e,n)=>{"use strict";var r,i,a,o,s,u,c,l=n(7296),h=n(79),f=Function.prototype.apply,p=Function.prototype.call,d=Object.create,v=Object.defineProperty,y=Object.defineProperties,m=Object.prototype.hasOwnProperty,g={configurable:!0,enumerable:!1,writable:!0};i=function(t,e){var n,i;return h(e),i=this,r.call(this,t,n=function(){a.call(i,t,n),f.call(e,this,arguments)}),n.__eeOnceListener__=e,this},s={on:r=function(t,e){var n;return h(e),m.call(this,"__ee__")?n=this.__ee__:(n=g.value=d(null),v(this,"__ee__",g),g.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},once:i,off:a=function(t,e){var n,r,i,a;if(h(e),!m.call(this,"__ee__"))return this;if(!(n=this.__ee__)[t])return this;if("object"==typeof(r=n[t]))for(a=0;i=r[a];++a)i!==e&&i.__eeOnceListener__!==e||(2===r.length?n[t]=r[a?0:1]:r.splice(a,1));else r!==e&&r.__eeOnceListener__!==e||delete n[t];return this},emit:o=function(t){var e,n,r,i,a;if(m.call(this,"__ee__")&&(i=this.__ee__[t]))if("object"==typeof i){for(n=arguments.length,a=new Array(n-1),e=1;e<n;++e)a[e-1]=arguments[e];for(i=i.slice(),e=0;r=i[e];++e)f.call(r,this,a)}else switch(arguments.length){case 1:p.call(i,this);break;case 2:p.call(i,this,arguments[1]);break;case 3:p.call(i,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,a=new Array(n-1),e=1;e<n;++e)a[e-1]=arguments[e];f.call(i,this,a)}}},u={on:l(r),once:l(i),off:l(a),emit:l(o)},c=y({},u),t.exports=e=function(t){return null==t?d(c):y(Object(t),u)},e.methods=s},4571:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.linear=function(t,e){var n,r,i=new Float32Array(t),a=t-1;for(n=0;n<t;n++)r=n/a,i[n]=e>0?r:1-r;return i},e.exponential=function(t,e){var n,r,i=new Float32Array(t),a=t-1;for(n=0;n<t;n++)r=n/a,i[e>0?n:t-1-n]=Math.exp(2*r-1)/Math.exp(1);return i},e.sCurve=function(t,e){var n,r=new Float32Array(t),i=e>0?Math.PI/2:-Math.PI/2;for(n=0;n<t;++n)r[n]=Math.sin(Math.PI*n/t-i)/2+.5;return r},e.logarithmic=function(t,e,n){var r,i=new Float32Array(t),a=0;for(r=0;r<t;r++)a=r/t,i[n>0?r:t-1-r]=Math.log(1+e*a)/Math.log(1+e);return i}},9304:(t,e,n)=>{"use strict";e.h7=e.Y1=e.Hp=e.Jl=e.t$=e._h=void 0,e.L7=function(t,e,n,r){switch(e){case i:u.call(t,n,r);break;case a:l.call(t,n,r);break;case o:f.call(t,n,r);break;case s:d.call(t,n,r);break;default:throw new Error("Unsupported Fade type")}},e.Mt=function(t,e,n,r){switch(e){case i:c.call(t,n,r);break;case a:h.call(t,n,r);break;case o:p.call(t,n,r);break;case s:v.call(t,n,r);break;default:throw new Error("Unsupported Fade type")}};var r=n(4571),i=e._h="sCurve",a=e.t$="linear",o=e.Jl="exponential",s=e.Hp="logarithmic";function u(t,e){var n=(0,r.sCurve)(1e4,1);this.setValueCurveAtTime(n,t,e)}function c(t,e){var n=(0,r.sCurve)(1e4,-1);this.setValueCurveAtTime(n,t,e)}function l(t,e){this.linearRampToValueAtTime(0,t),this.linearRampToValueAtTime(1,t+e)}function h(t,e){this.linearRampToValueAtTime(1,t),this.linearRampToValueAtTime(0,t+e)}function f(t,e){this.exponentialRampToValueAtTime(.01,t),this.exponentialRampToValueAtTime(1,t+e)}function p(t,e){this.exponentialRampToValueAtTime(1,t),this.exponentialRampToValueAtTime(.01,t+e)}function d(t,e){var n=(0,r.logarithmic)(1e4,10,1);this.setValueCurveAtTime(n,t,e)}function v(t,e){var n=(0,r.logarithmic)(1e4,10,-1);this.setValueCurveAtTime(n,t,e)}e.Y1="FadeIn",e.h7="FadeOut"},474:(t,e,n)=>{var r,i=void 0!==n.g?n.g:"undefined"!=typeof window?window:{},a=n(444);"undefined"!=typeof document?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"])||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a),t.exports=r},7051:(t,e,n)=>{"use strict";var r="undefined"!=typeof window?window:void 0!==n.g?n.g:{};t.exports=function(t,e){return t in r?r[t]:(r[t]=e,e)}},8625:(t,e,n)=>{"use strict";var r=n(7051);t.exports=function(t,e,n){var i="__INDIVIDUAL_ONE_VERSION_"+t,a=r(i+"_ENFORCE_SINGLETON",e);if(a!==e)throw new Error("Can only have one copy of "+t+".\nYou already have version "+a+" installed.\nThis means you cannot install version "+e);return r(i,n)}},1072:(t,e,n)=>{var r=!!(n.g===n.g.window&&n.g.URL&&n.g.Blob&&n.g.Worker);function i(t,e){var i,a=this;if(e=e||{},r)return i=t.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],new n.g.Worker(n.g.URL.createObjectURL(new n.g.Blob([i],{type:"text/javascript"})));this.self=e,this.self.postMessage=function(t){setTimeout((function(){a.onmessage({data:t})}),0)},setTimeout(t.bind(e,e),0)}i.prototype.postMessage=function(t){var e=this;setTimeout((function(){e.self.onmessage({data:t})}),0)},t.exports=i},4436:t=>{"use strict";t.exports=function(t){return"object"==typeof t&&null!==t}},2473:t=>{var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function r(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var i,a,o=Object.prototype,s=o.hasOwnProperty,u=o.toString,c=o.propertyIsEnumerable,l=(i=Object.keys,a=Object,function(t){return i(a(t))}),h=Math.max,f=!c.call({valueOf:1},"valueOf");function p(t,e,n){var r=t[e];s.call(t,e)&&y(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function d(t,r){return!!(r=null==r?e:r)&&("number"==typeof t||n.test(t))&&t>-1&&t%1==0&&t<r}function v(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||o)}function y(t,e){return t===e||t!=t&&e!=e}var m=Array.isArray;function g(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}(t.length)&&!function(t){var e=k(t)?u.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}function k(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var b,w=(b=function(t,e){if(f||v(e)||g(e))!function(t,e,n,r){n||(n={});for(var i=-1,a=e.length;++i<a;){var o=e[i];p(n,o,t[o])}}(e,function(t){return g(t)?function(t,e){var n=m(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&g(t)}(t)&&s.call(t,"callee")&&(!c.call(t,"callee")||"[object Arguments]"==u.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var a in t)!e&&!s.call(t,a)||i&&("length"==a||d(a,r))||n.push(a);return n}(t):function(t){if(!v(t))return l(t);var e=[];for(var n in Object(t))s.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}(e),t);else for(var n in e)s.call(e,n)&&p(t,n,e[n])},function(t,e){return e=h(void 0===e?t.length-1:e,0),function(){for(var n=arguments,i=-1,a=h(n.length-e,0),o=Array(a);++i<a;)o[i]=n[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=n[i];return s[e]=o,r(t,this,s)}}((function(t,e){var n=-1,r=e.length,i=r>1?e[r-1]:void 0,a=r>2?e[2]:void 0;for(i=b.length>3&&"function"==typeof i?(r--,i):void 0,a&&function(t,e,n){if(!k(n))return!1;var r=typeof e;return!!("number"==r?g(n)&&d(e,n.length):"string"==r&&e in n)&&y(n[e],t)}(e[0],e[1],a)&&(i=r<3?void 0:i,r=1),t=Object(t);++n<r;){var o=e[n];o&&b(t,o)}return t})));t.exports=w},6146:(t,e,n)=>{t=n.nmd(t);var r="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",o="[object Function]",s="[object Object]",u=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[a]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l[o]=l["[object Map]"]=l["[object Number]"]=l[s]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1;var h="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,p=h||f||Function("return this")(),d=e&&!e.nodeType&&e,v=d&&t&&!t.nodeType&&t,y=v&&v.exports===d,m=y&&h.process,g=function(){try{return v&&v.require&&v.require("util").types||m&&m.binding&&m.binding("util")}catch(t){}}(),k=g&&g.isTypedArray;function b(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var w,x,P,T=Array.prototype,S=Function.prototype,O=Object.prototype,_=p["__core-js_shared__"],E=S.toString,R=O.hasOwnProperty,j=(w=/[^.]+$/.exec(_&&_.keys&&_.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"",C=O.toString,A=E.call(Object),L=RegExp("^"+E.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=y?p.Buffer:void 0,F=p.Symbol,I=p.Uint8Array,D=(G&&G.allocUnsafe,x=Object.getPrototypeOf,P=Object,function(t){return x(P(t))}),M=Object.create,N=O.propertyIsEnumerable,z=T.splice,V=F?F.toStringTag:void 0,W=function(){try{var t=lt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),U=G?G.isBuffer:void 0,q=Math.max,B=Date.now,X=lt(p,"Map"),H=lt(Object,"create"),$=function(){function t(){}return function(e){if(!xt(e))return{};if(M)return M(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Y(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Z(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function J(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function K(t){var e=this.__data__=new Z(t);this.size=e.size}function Q(t,e,n){(void 0!==n&&!vt(t[e],n)||void 0===n&&!(e in t))&&nt(t,e,n)}function tt(t,e,n){var r=t[e];R.call(t,e)&&vt(r,n)&&(void 0!==n||e in t)||nt(t,e,n)}function et(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1}function nt(t,e,n){"__proto__"==e&&W?W(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}Y.prototype.clear=function(){this.__data__=H?H(null):{},this.size=0},Y.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Y.prototype.get=function(t){var e=this.__data__;if(H){var n=e[t];return n===r?void 0:n}return R.call(e,t)?e[t]:void 0},Y.prototype.has=function(t){var e=this.__data__;return H?void 0!==e[t]:R.call(e,t)},Y.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=H&&void 0===e?r:e,this},Z.prototype.clear=function(){this.__data__=[],this.size=0},Z.prototype.delete=function(t){var e=this.__data__,n=et(e,t);return!(n<0||(n==e.length-1?e.pop():z.call(e,n,1),--this.size,0))},Z.prototype.get=function(t){var e=this.__data__,n=et(e,t);return n<0?void 0:e[n][1]},Z.prototype.has=function(t){return et(this.__data__,t)>-1},Z.prototype.set=function(t,e){var n=this.__data__,r=et(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},J.prototype.clear=function(){this.size=0,this.__data__={hash:new Y,map:new(X||Z),string:new Y}},J.prototype.delete=function(t){var e=ct(this,t).delete(t);return this.size-=e?1:0,e},J.prototype.get=function(t){return ct(this,t).get(t)},J.prototype.has=function(t){return ct(this,t).has(t)},J.prototype.set=function(t,e){var n=ct(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},K.prototype.clear=function(){this.__data__=new Z,this.size=0},K.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},K.prototype.get=function(t){return this.__data__.get(t)},K.prototype.has=function(t){return this.__data__.has(t)},K.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Z){var r=n.__data__;if(!X||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new J(r)}return n.set(t,e),this.size=n.size,this};function rt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?function(t){var e=R.call(t,V),n=t[V];try{t[V]=void 0;var r=!0}catch(t){}var i=C.call(t);return r&&(e?t[V]=n:delete t[V]),i}(t):function(t){return C.call(t)}(t)}function it(t){return Pt(t)&&rt(t)==a}function at(t,e,n,r,i){t!==e&&function(t,e,n){for(var r=-1,i=Object(t),a=n(t),o=a.length;o--;){var s=a[++r];if(!1===e(i[s],s,i))break}}(e,(function(a,o){if(i||(i=new K),xt(a))!function(t,e,n,r,i,a,o){var u=pt(t,n),c=pt(e,n),l=o.get(c);if(l)Q(t,n,l);else{var h,f,p,d,v,y=a?a(u,c,n+"",t,e,o):void 0,m=void 0===y;if(m){var g=mt(c),k=!g&&kt(c),b=!g&&!k&&Tt(c);y=c,g||k||b?mt(u)?y=u:Pt(v=u)&&gt(v)?y=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(u):k?(m=!1,y=function(t,e){return t.slice()}(c)):b?(m=!1,d=new(p=(h=c).buffer).constructor(p.byteLength),new I(d).set(new I(p)),f=d,y=new h.constructor(f,h.byteOffset,h.length)):y=[]:function(t){if(!Pt(t)||rt(t)!=s)return!1;var e=D(t);if(null===e)return!0;var n=R.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&E.call(n)==A}(c)||yt(c)?(y=u,yt(u)?y=function(t){return function(t,e,n,r){var i=!n;n||(n={});for(var a=-1,o=e.length;++a<o;){var s=e[a],u=void 0;void 0===u&&(u=t[s]),i?nt(n,s,u):tt(n,s,u)}return n}(t,Ot(t))}(u):xt(u)&&!bt(u)||(y=function(t){return"function"!=typeof t.constructor||ft(t)?{}:$(D(t))}(c))):m=!1}m&&(o.set(c,y),i(y,c,r,a,o),o.delete(c)),Q(t,n,y)}}(t,e,o,n,at,r,i);else{var u=r?r(pt(t,o),a,o+"",t,e,i):void 0;void 0===u&&(u=a),Q(t,o,u)}}),Ot)}function ot(t,e){return dt(function(t,e,n){return e=q(void 0===e?t.length-1:e,0),function(){for(var r=arguments,i=-1,a=q(r.length-e,0),o=Array(a);++i<a;)o[i]=r[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=r[i];return s[e]=n(o),b(t,this,s)}}(t,e,Rt),t+"")}var st=W?function(t,e){return W(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:Rt;function ut(t,e,n,r,i,a){return xt(t)&&xt(e)&&(a.set(e,t),at(t,e,void 0,ut,a),a.delete(e)),t}function ct(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function lt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!xt(t)||function(t){return!!j&&j in t}(t))&&(bt(t)?L:u).test(function(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}(n)?n:void 0}function ht(t,e){var n=typeof t;return!!(e=null==e?i:e)&&("number"==n||"symbol"!=n&&c.test(t))&&t>-1&&t%1==0&&t<e}function ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||O)}function pt(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var dt=function(t){var e=0,n=0;return function(){var r=B(),i=16-(r-n);if(n=r,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(st);function vt(t,e){return t===e||t!=t&&e!=e}var yt=it(function(){return arguments}())?it:function(t){return Pt(t)&&R.call(t,"callee")&&!N.call(t,"callee")},mt=Array.isArray;function gt(t){return null!=t&&wt(t.length)&&!bt(t)}var kt=U||function(){return!1};function bt(t){if(!xt(t))return!1;var e=rt(t);return e==o||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function wt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function xt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Pt(t){return null!=t&&"object"==typeof t}var Tt=k?function(t){return function(e){return t(e)}}(k):function(t){return Pt(t)&&wt(t.length)&&!!l[rt(t)]},St=ot((function(t){return t.push(void 0,ut),b(Et,void 0,t)}));function Ot(t){return gt(t)?function(t,e){var n=mt(t),r=!n&&yt(t),i=!n&&!r&&kt(t),a=!n&&!r&&!i&&Tt(t),o=n||r||i||a,s=o?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],u=s.length;for(var c in t)!e&&!R.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ht(c,u))||s.push(c);return s}(t,!0):function(t){if(!xt(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=ft(t),n=[];for(var r in t)("constructor"!=r||!e&&R.call(t,r))&&n.push(r);return n}(t)}var _t,Et=(_t=function(t,e,n,r){at(t,e,n,r)},ot((function(t,e){var n=-1,r=e.length,i=r>1?e[r-1]:void 0,a=r>2?e[2]:void 0;for(i=_t.length>3&&"function"==typeof i?(r--,i):void 0,a&&function(t,e,n){if(!xt(n))return!1;var r=typeof e;return!!("number"==r?gt(n)&&ht(e,n.length):"string"==r&&e in n)&&vt(n[e],t)}(e[0],e[1],a)&&(i=r<3?void 0:i,r=1),t=Object(t);++n<r;){var o=e[n];o&&_t(t,o,n,i)}return t})));function Rt(t){return t}t.exports=St},9052:t=>{var e,n,r=9007199254740991,i=/^(?:0|[1-9]\d*)$/,a=Object.prototype,o=a.hasOwnProperty,s=a.toString,u=a.propertyIsEnumerable,c=(e=Object.keys,n=Object,function(t){return e(n(t))});function l(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||i.test(t))&&t>-1&&t%1==0&&t<e}var h=Array.isArray;function f(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!function(t){var e=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)?s.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}function p(t){return f(t)?function(t,e){var n=h(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&f(t)}(t)&&o.call(t,"callee")&&(!u.call(t,"callee")||"[object Arguments]"==s.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var a in t)!e&&!o.call(t,a)||i&&("length"==a||l(a,r))||n.push(a);return n}(t):function(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||a))return c(t);var e,n,r=[];for(var i in Object(t))o.call(t,i)&&"constructor"!=i&&r.push(i);return r}(t)}function d(t){return t}t.exports=function(t,e){return t&&function(t,e){return t&&function(t,e,n){for(var r=-1,i=Object(t),a=n(t),o=a.length;o--;){var s=a[++r];if(!1===e(i[s],s,i))break}return t}(t,e,p)}(t,"function"==typeof e?e:d)}},6248:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),o=new E(r||[]);return a._invoke=function(t,e,n){var r=h;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return j()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,o),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var k={};u(k,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(R([])));w&&w!==n&&r.call(w,a)&&(k=w);var x=g.prototype=y.prototype=Object.create(k);function P(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,a,o,s){var u=l(t[i],t,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(h).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},P(T.prototype),u(T.prototype,o,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new T(c(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=R,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;_(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},5111:(t,e,n)=>{"use strict";var r=n(9666);t.exports=function(t){if("function"!=typeof t)return!1;if(!hasOwnProperty.call(t,"length"))return!1;try{if("number"!=typeof t.length)return!1;if("function"!=typeof t.call)return!1;if("function"!=typeof t.apply)return!1}catch(t){return!1}return!r(t)}},4617:(t,e,n)=>{"use strict";var r=n(1102),i={object:!0,function:!0,undefined:!0};t.exports=function(t){return!!r(t)&&hasOwnProperty.call(i,typeof t)}},2307:(t,e,n)=>{"use strict";var r=n(5111),i=/^\s*class[\s{/}]/,a=Function.prototype.toString;t.exports=function(t){return!!r(t)&&!i.test(a.call(t))}},9666:(t,e,n)=>{"use strict";var r=n(4617);t.exports=function(t){if(!r(t))return!1;try{return!!t.constructor&&t.constructor.prototype===t}catch(t){return!1}}},1102:t=>{"use strict";t.exports=function(t){return null!=t}},1583:(t,e,n)=>{var r=n(5556);t.exports=r},3132:(t,e,n)=>{var r=n(7382);t.exports=r},542:(t,e,n)=>{var r=n(3123);t.exports=r},44:(t,e,n)=>{var r=n(2446);t.exports=r},8554:(t,e,n)=>{var r=n(4436),i=n(4270);function a(t,e,n,r){if(r){var a=r[e];if(i(a))a.unhook&&a.unhook(t,e,n);else if("attributes"===e)for(var o in a)t.removeAttribute(o);else if("style"===e)for(var s in a)t.style[s]="";else t[e]="string"==typeof a?"":null}}function o(t,e,n,i,a){var o=n?n[i]:void 0;if("attributes"!==i)if(o&&r(o)&&s(o)!==s(a))t[i]=a;else{r(t[i])||(t[i]={});var u="style"===i?"":void 0;for(var c in a){var l=a[c];t[i][c]=void 0===l?u:l}}else for(var h in a){var f=a[h];void 0===f?t.removeAttribute(h):t.setAttribute(h,f)}}function s(t){return Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__?t.__proto__:t.constructor?t.constructor.prototype:void 0}t.exports=function(t,e,n){for(var s in e){var u=e[s];void 0===u?a(t,s,u,n):i(u)?(a(t,s,u,n),u.hook&&u.hook(t,s,n?n[s]:void 0)):r(u)?o(t,0,n,s,u):t[s]=u}}},5556:(t,e,n)=>{var r=n(474),i=n(8554),a=n(9683),o=n(2592),s=n(7127),u=n(1575);t.exports=function t(e,n){var c=n&&n.document||r,l=n?n.warn:null;if(e=u(e).a,s(e))return e.init();if(o(e))return c.createTextNode(e.text);if(!a(e))return l&&l("Item is not a valid virtual dom node",e),null;var h=null===e.namespace?c.createElement(e.tagName):c.createElementNS(e.namespace,e.tagName),f=e.properties;i(h,f);for(var p=e.children,d=0;d<p.length;d++){var v=t(p[d],n);v&&h.appendChild(v)}return h}},476:t=>{var e={};function n(t,i,a,o,s){if(o=o||{},t){r(a,s,s)&&(o[s]=t);var u=i.children;if(u)for(var c=t.childNodes,l=0;l<i.children.length;l++){s+=1;var h=u[l]||e,f=s+(h.count||0);r(a,s,f)&&n(c[l],h,a,o,s),s=f}}return o}function r(t,e,n){if(0===t.length)return!1;for(var r,i,a=0,o=t.length-1;a<=o;){if(i=t[r=(o+a)/2>>0],a===o)return i>=e&&i<=n;if(i<e)a=r+1;else{if(!(i>n))return!0;o=r-1}}return!1}function i(t,e){return t>e?1:-1}t.exports=function(t,e,r,a){return r&&0!==r.length?(r.sort(i),n(t,e,r,a,0)):{}}},4345:(t,e,n)=>{var r=n(8554),i=n(7127),a=n(8248),o=n(9243);function s(t,e){"function"==typeof e.destroy&&i(e)&&e.destroy(t)}t.exports=function(t,e,n){var i,u,c=t.type,l=t.vNode,h=t.patch;switch(c){case a.REMOVE:return function(t,e){var n=t.parentNode;return n&&n.removeChild(t),s(t,e),null}(e,l);case a.INSERT:return function(t,e,n){var r=n.render(e,n);return t&&t.appendChild(r),t}(e,h,n);case a.VTEXT:return function(t,e,n,r){var i;if(3===t.nodeType)t.replaceData(0,t.length,n.text),i=t;else{var a=t.parentNode;i=r.render(n,r),a&&i!==t&&a.replaceChild(i,t)}return i}(e,0,h,n);case a.WIDGET:return function(t,e,n,r){var i,a=o(e,n);i=a?n.update(e,t)||t:r.render(n,r);var u=t.parentNode;return u&&i!==t&&u.replaceChild(i,t),a||s(t,e),i}(e,l,h,n);case a.VNODE:return function(t,e,n,r){var i=t.parentNode,a=r.render(n,r);return i&&a!==t&&i.replaceChild(a,t),a}(e,0,h,n);case a.ORDER:return function(t,e){for(var n,r,i,a=t.childNodes,o={},s=0;s<e.removes.length;s++)n=a[(r=e.removes[s]).from],r.key&&(o[r.key]=n),t.removeChild(n);for(var u=a.length,c=0;c<e.inserts.length;c++)n=o[(i=e.inserts[c]).key],t.insertBefore(n,i.to>=u++?null:a[i.to])}(e,h),e;case a.PROPS:return r(e,h,l.properties),e;case a.THUNK:return i=e,u=n.patch(e,h,n),i&&u&&i!==u&&i.parentNode&&i.parentNode.replaceChild(u,i),u;default:return e}}},2446:(t,e,n)=>{var r=n(474),i=n(8722),a=n(5556),o=n(476),s=n(4345);function u(t,e,n){var i=function(t){var e=[];for(var n in t)"a"!==n&&e.push(Number(n));return e}(e);if(0===i.length)return t;var a=o(t,e.a,i),s=t.ownerDocument;n.document||s===r||(n.document=s);for(var u=0;u<i.length;u++){var l=i[u];t=c(t,a[l],e[l],n)}return t}function c(t,e,n,r){if(!e)return t;var a;if(i(n))for(var o=0;o<n.length;o++)a=s(n[o],e,r),e===t&&(t=a);else a=s(n,e,r),e===t&&(t=a);return t}t.exports=function t(e,n,r){return(r=r||{}).patch=r.patch&&r.patch!==t?r.patch:u,r.render=r.render||a,r.patch(e,n,r)}},9243:(t,e,n)=>{var r=n(7127);t.exports=function(t,e){return!(!r(t)||!r(e))&&("name"in t&&"name"in e?t.id===e.id:t.init===e.init)}},2796:(t,e,n)=>{"use strict";var r=n(9401);function i(t){if(!(this instanceof i))return new i(t);this.value=t}t.exports=i,i.prototype.hook=function(t,e){r(t)[e.substr(3)]=this.value},i.prototype.unhook=function(t,e){r(t)[e.substr(3)]=void 0}},3726:t=>{"use strict";function e(t){if(!(this instanceof e))return new e(t);this.value=t}t.exports=e,e.prototype.hook=function(t,e){t[e]!==this.value&&(t[e]=this.value)}},3123:(t,e,n)=>{"use strict";var r=n(8722),i=n(9327),a=n(6181),o=n(9683),s=n(2592),u=n(7127),c=n(4270),l=n(5483),h=n(7303),f=n(3726),p=n(2796);function d(t,e,n,i){if("string"==typeof t)e.push(new a(t));else if("number"==typeof t)e.push(new a(String(t)));else if(v(t))e.push(t);else{if(!r(t)){if(null==t)return;throw s={foreignObject:t,parentVnode:{tagName:n,properties:i}},(u=new Error).type="virtual-hyperscript.unexpected.virtual-element",u.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+y(s.foreignObject)+".\nThe parent vnode is:\n"+y(s.parentVnode),u.foreignObject=s.foreignObject,u.parentVnode=s.parentVnode,u}for(var o=0;o<t.length;o++)d(t[o],e,n,i)}var s,u}function v(t){return o(t)||s(t)||u(t)||l(t)}function y(t){try{return JSON.stringify(t,null,"    ")}catch(e){return String(t)}}t.exports=function(t,e,n){var a,o,s,u,l,y=[];return!n&&("string"==typeof(l=e)||r(l)||v(l))&&(n=e,o={}),a=h(t,o=o||e||{}),o.hasOwnProperty("key")&&(s=o.key,o.key=void 0),o.hasOwnProperty("namespace")&&(u=o.namespace,o.namespace=void 0),"INPUT"!==a||u||!o.hasOwnProperty("value")||void 0===o.value||c(o.value)||(o.value=f(o.value)),function(t){for(var e in t)if(t.hasOwnProperty(e)){var n=t[e];if(c(n))continue;"ev-"===e.substr(0,3)&&(t[e]=p(n))}}(o),null!=n&&d(n,y,a,o),new i(a,o,y,s,u)}},7303:(t,e,n)=>{"use strict";var r=n(8098),i=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,a=/^\.|#/;t.exports=function(t,e){if(!t)return"DIV";var n,o,s,u,c=!e.hasOwnProperty("id"),l=r(t,i),h=null;for(a.test(l[1])&&(h="DIV"),u=0;u<l.length;u++)(o=l[u])&&(s=o.charAt(0),h?"."===s?(n=n||[]).push(o.substring(1,o.length)):"#"===s&&c&&(e.id=o.substring(1,o.length)):h=o);return n&&(e.className&&n.push(e.className),e.className=n.join(" ")),e.namespace?h:h.toUpperCase()}},1575:(t,e,n)=>{var r=n(9683),i=n(2592),a=n(7127),o=n(5483);function s(t,e){var n=t.vnode;if(n||(n=t.vnode=t.render(e)),!(r(n)||i(n)||a(n)))throw new Error("thunk did not return a valid node");return n}t.exports=function(t,e){var n=t,r=e;return o(e)&&(r=s(e,t)),o(t)&&(n=s(t,null)),{a:n,b:r}}},5483:t=>{t.exports=function(t){return t&&"Thunk"===t.type}},4270:t=>{t.exports=function(t){return t&&("function"==typeof t.hook&&!t.hasOwnProperty("hook")||"function"==typeof t.unhook&&!t.hasOwnProperty("unhook"))}},9683:(t,e,n)=>{var r=n(9289);t.exports=function(t){return t&&"VirtualNode"===t.type&&t.version===r}},2592:(t,e,n)=>{var r=n(9289);t.exports=function(t){return t&&"VirtualText"===t.type&&t.version===r}},7127:t=>{t.exports=function(t){return t&&"Widget"===t.type}},9289:t=>{t.exports="2"},9327:(t,e,n)=>{var r=n(9289),i=n(9683),a=n(7127),o=n(5483),s=n(4270);t.exports=l;var u={},c=[];function l(t,e,n,r,l){this.tagName=t,this.properties=e||u,this.children=n||c,this.key=null!=r?String(r):void 0,this.namespace="string"==typeof l?l:null;var h,f=n&&n.length||0,p=0,d=!1,v=!1,y=!1;for(var m in e)if(e.hasOwnProperty(m)){var g=e[m];s(g)&&g.unhook&&(h||(h={}),h[m]=g)}for(var k=0;k<f;k++){var b=n[k];i(b)?(p+=b.count||0,!d&&b.hasWidgets&&(d=!0),!v&&b.hasThunks&&(v=!0),y||!b.hooks&&!b.descendantHooks||(y=!0)):!d&&a(b)?"function"==typeof b.destroy&&(d=!0):!v&&o(b)&&(v=!0)}this.count=f+p,this.hasWidgets=d,this.hasThunks=v,this.hooks=h,this.descendantHooks=y}l.prototype.version=r,l.prototype.type="VirtualNode"},8248:(t,e,n)=>{var r=n(9289);function i(t,e,n){this.type=Number(t),this.vNode=e,this.patch=n}i.NONE=0,i.VTEXT=1,i.VNODE=2,i.WIDGET=3,i.PROPS=4,i.ORDER=5,i.INSERT=6,i.REMOVE=7,i.THUNK=8,t.exports=i,i.prototype.version=r,i.prototype.type="VirtualPatch"},6181:(t,e,n)=>{var r=n(9289);function i(t){this.text=String(t)}t.exports=i,i.prototype.version=r,i.prototype.type="VirtualText"},2416:(t,e,n)=>{var r=n(4436),i=n(4270);function a(t){return Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__?t.__proto__:t.constructor?t.constructor.prototype:void 0}t.exports=function t(e,n){var o;for(var s in e){s in n||((o=o||{})[s]=void 0);var u=e[s],c=n[s];if(u!==c)if(r(u)&&r(c))if(a(c)!==a(u))(o=o||{})[s]=c;else if(i(c))(o=o||{})[s]=c;else{var l=t(u,c);l&&((o=o||{})[s]=l)}else(o=o||{})[s]=c}for(var h in n)h in e||((o=o||{})[h]=n[h]);return o}},7382:(t,e,n)=>{var r=n(8722),i=n(8248),a=n(9683),o=n(2592),s=n(7127),u=n(5483),c=n(1575),l=n(2416);function h(t,e){var n={a:t};return f(t,e,n,0),n}function f(t,e,n,r){if(t!==e){var c=n[r],h=!1;if(u(t)||u(e))v(t,e,n,r);else if(null==e)s(t)||(p(t,n,r),c=n[r]),c=k(c,new i(i.REMOVE,t,e));else if(a(e))if(a(t))if(t.tagName===e.tagName&&t.namespace===e.namespace&&t.key===e.key){var d=l(t.properties,e.properties);d&&(c=k(c,new i(i.PROPS,t,d))),c=function(t,e,n,r,o){for(var s=t.children,u=function(t,e){var n=g(e),r=n.keys,i=n.free;if(i.length===e.length)return{children:e,moves:null};var a=g(t),o=a.keys;if(a.free.length===t.length)return{children:e,moves:null};for(var s=[],u=0,c=i.length,l=0,h=0;h<t.length;h++){var f,p=t[h];p.key?r.hasOwnProperty(p.key)?(f=r[p.key],s.push(e[f])):(f=h-l++,s.push(null)):u<c?(f=i[u++],s.push(e[f])):(f=h-l++,s.push(null))}for(var d=u>=i.length?e.length:i[u],v=0;v<e.length;v++){var y=e[v];y.key?o.hasOwnProperty(y.key)||s.push(y):v>=d&&s.push(y)}for(var k,b=s.slice(),w=0,x=[],P=[],T=0;T<e.length;){var S=e[T];for(k=b[w];null===k&&b.length;)x.push(m(b,w,null)),k=b[w];k&&k.key===S.key?(w++,T++):S.key?(k&&k.key&&r[k.key]!==T+1?(x.push(m(b,w,k.key)),(k=b[w])&&k.key===S.key?w++:P.push({key:S.key,to:T})):P.push({key:S.key,to:T}),T++):k&&k.key&&x.push(m(b,w,k.key))}for(;w<b.length;)k=b[w],x.push(m(b,w,k&&k.key));return x.length!==l||P.length?{children:s,moves:{removes:x,inserts:P}}:{children:s,moves:null}}(s,e.children),c=u.children,l=s.length,h=c.length,p=l>h?l:h,d=0;d<p;d++){var v=s[d],y=c[d];o+=1,v?f(v,y,n,o):y&&(r=k(r,new i(i.INSERT,null,y))),a(v)&&v.count&&(o+=v.count)}return u.moves&&(r=k(r,new i(i.ORDER,t,u.moves))),r}(t,e,n,c,r)}else c=k(c,new i(i.VNODE,t,e)),h=!0;else c=k(c,new i(i.VNODE,t,e)),h=!0;else o(e)?o(t)?t.text!==e.text&&(c=k(c,new i(i.VTEXT,t,e))):(c=k(c,new i(i.VTEXT,t,e)),h=!0):s(e)&&(s(t)||(h=!0),c=k(c,new i(i.WIDGET,t,e)));c&&(n[r]=c),h&&p(t,n,r)}}function p(t,e,n){y(t,e,n),d(t,e,n)}function d(t,e,n){if(s(t))"function"==typeof t.destroy&&(e[n]=k(e[n],new i(i.REMOVE,t,null)));else if(a(t)&&(t.hasWidgets||t.hasThunks))for(var r=t.children,o=r.length,c=0;c<o;c++){var l=r[c];d(l,e,n+=1),a(l)&&l.count&&(n+=l.count)}else u(t)&&v(t,null,e,n)}function v(t,e,n,r){var a=c(t,e),o=h(a.a,a.b);(function(t){for(var e in t)if("a"!==e)return!0;return!1})(o)&&(n[r]=new i(i.THUNK,null,o))}function y(t,e,n){if(a(t)){if(t.hooks&&(e[n]=k(e[n],new i(i.PROPS,t,function(t){var e={};for(var n in t)e[n]=void 0;return e}(t.hooks)))),t.descendantHooks||t.hasThunks)for(var r=t.children,o=r.length,s=0;s<o;s++){var c=r[s];y(c,e,n+=1),a(c)&&c.count&&(n+=c.count)}}else u(t)&&v(t,null,e,n)}function m(t,e,n){return t.splice(e,1),{from:e,key:n}}function g(t){for(var e={},n=[],r=t.length,i=0;i<r;i++){var a=t[i];a.key?e[a.key]=i:n.push(i)}return{keys:e,free:n}}function k(t,e){return t?(r(t)?t.push(e):t=[t,e],t):e}t.exports=h},6385:t=>{"use strict";function e(t){for(var e,n=1/0,r=-1/0,i=0,a=t.length;i<a;i++)n>(e=t[i])&&(n=e),r<e&&(r=e);return{min:n,max:r}}function n(t,e){var n=Math.pow(2,e-1),r=t<0?t*n:t*(n-1);return Math.max(-n,Math.min(n-1,r))}function r(t,r,a){var o,s,u,c,l,h,f=t.length,p=Math.ceil(f/r),d=i(a,2*p);for(o=0;o<p;o++)s=o*r,u=(o+1)*r>f?f:(o+1)*r,l=n((h=e(t.subarray(s,u))).min,a),c=n(h.max,a),d[2*o]=l,d[2*o+1]=c;return d}function i(t,e){return new(new Function(`return Int${t}Array`)())(e)}function a(t,e){return"number"==typeof t?t:e}t.exports=function(t,e,n,o,s,u){if(e=a(e,1e3),u=a(u,16),null==n&&(n=!0),[8,16,32].indexOf(u)<0)throw new Error("Invalid number of bits specified for peaks.");var c,l,h=t.numberOfChannels,f=[];if(o=a(o,0),s=a(s,t.length),void 0===t.subarray)for(c=0;c<h;c++)l=t.getChannelData(c).subarray(o,s),f.push(r(l,e,u));else f.push(r(t.subarray(o,s),e,u));return n&&f.length>1&&(f=function(t,e){var n,r,a=t.length,o=1/a,s=t[0].length/2,u=0,c=0,l=i(e,2*s);for(c=0;c<s;c++){for(n=0,r=0,u=0;u<a;u++)n+=o*t[u][2*c],r+=o*t[u][2*c+1];l[2*c]=n,l[2*c+1]=r}return[l]}(f,u)),{length:f[0].length/2,data:f,bits:u}}},8722:t=>{var e=Array.isArray,n=Object.prototype.toString;t.exports=e||function(t){return"[object Array]"===n.call(t)}},444:()=>{}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,loaded:!1,exports:{}};return t[r](a,a.exports,n),a.loaded=!0,a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.u=t=>t+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.p="/waveform-playlist/js/",n.b=document.baseURI||self.location.href;var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>xt,init:()=>wt});var t=n(6146),e=n.n(t),i=n(1583),a=n.n(i),o=n(8709),s=n.n(o);function u(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var f=n(7135),p=n.n(f),d=n(542),v=n.n(d),y=n(3132),m=n.n(y),g=n(44),k=n.n(g),b=n(1072),w=n.n(b);function x(t,e){return Math.ceil(t*e)}function P(t,e,n){return t*e/n}function T(t,e,n){return Math.ceil(t*n/e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=O(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},_.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},E(t,e)}function R(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var A=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s()();c(this,t),this.src=e,this.ac=n,this.audioRequestState=0,this.ee=r}return h(t,[{key:"setStateChange",value:function(t){this.audioRequestState=t,this.ee.emit("audiorequeststatechange",this.audioRequestState,this.src)}},{key:"fileProgress",value:function(t){var e=0;0===this.audioRequestState&&this.setStateChange(1),t.lengthComputable&&(e=t.loaded/t.total*100),this.ee.emit("loadprogress",e,this.src)}},{key:"fileLoad",value:function(t){var e=this,n=t.target.response||t.target.result;return this.setStateChange(2),new Promise((function(t,r){e.ac.decodeAudioData(n,(function(n){e.audioBuffer=n,e.setStateChange(3),t(n)}),(function(t){r(null===t?Error("MediaDecodeAudioDataUnknownContentType"):t)}))}))}}]),t}();var L=function(t){R(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=S(e);if(n){var i=S(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return C(this,t)});function i(){return c(this,i),r.apply(this,arguments)}return h(i,[{key:"load",value:function(){var t=this;return new Promise((function(e,n){if(t.src.type.match(/audio.*/)||t.src.type.match(/video\/ogg/)||t.src.type.match(/video\/webm/)){var r=new FileReader;r.readAsArrayBuffer(t.src),r.addEventListener("progress",(function(e){_(S(i.prototype),"fileProgress",t).call(t,e)})),r.addEventListener("load",(function(r){_(S(i.prototype),"fileLoad",t).call(t,r).then((function(t){e(t)})).catch(n)})),r.addEventListener("error",n)}else n(Error("Unsupported file type ".concat(t.src.type)))}))}}]),i}(A);var G=function(t){R(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=S(e);if(n){var i=S(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return C(this,t)});function i(){return c(this,i),r.apply(this,arguments)}return h(i,[{key:"load",value:function(){return Promise.resolve(this.src)}}]),i}(A);var F=function(t){R(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=S(e);if(n){var i=S(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return C(this,t)});function i(){return c(this,i),r.apply(this,arguments)}return h(i,[{key:"load",value:function(){var t=this;return new Promise((function(e,n){var r=new XMLHttpRequest;r.open("GET",t.src,!0),r.responseType="arraybuffer",r.send(),r.addEventListener("progress",(function(e){_(S(i.prototype),"fileProgress",t).call(t,e)})),r.addEventListener("load",(function(r){_(S(i.prototype),"fileLoad",t).call(t,r).then((function(t){e(t)})).catch(n)})),r.addEventListener("error",(function(){n(Error("Track ".concat(t.src," failed to load")))}))}))}}]),i}(A),I=function(){function t(){c(this,t)}return h(t,null,[{key:"createLoader",value:function(t,e,n){if(t instanceof Blob)return new L(t,e,n);if(t instanceof AudioBuffer)return new G(t,e,n);if("string"==typeof t)return new F(t,e,n);throw new Error("Unsupported src type")}}]),t}(),D=function(){function t(e){c(this,t),this.playlist=e}return h(t,[{key:"hook",value:function(t){var e=this.playlist;if(!e.isScrolling){var n=t;if(e.isAutomaticScroll){var r=t.getBoundingClientRect(),i=e.controls.show?e.controls.width:0,a=P(r.width-i,e.samplesPerPixel,e.sampleRate),o=e.isPlaying()?e.playbackSeconds:e.getTimeSelection().start;(o<e.scrollLeft||o>=e.scrollLeft+a)&&(e.scrollLeft=Math.min(o,e.duration-a))}var s=T(e.scrollLeft,e.samplesPerPixel,e.sampleRate);n.scrollLeft=s}}}]),t}(),M=function(){function t(e,n,r,i,a){c(this,t),this.tickInfo=e,this.offset=n,this.samplesPerPixel=r,this.duration=i,this.colors=a}return h(t,[{key:"hook",value:function(t,e,n){var r=this;if(void 0===n||n.offset!==this.offset||n.duration!==this.duration||n.samplesPerPixel!==this.samplesPerPixel){var i=t.width,a=t.height,o=t.getContext("2d");o.clearRect(0,0,i,a),o.fillStyle=this.colors.timeColor,Object.keys(this.tickInfo).forEach((function(t){var e=r.tickInfo[t],n=a-e;o.fillRect(t,n,1,e)}))}}}]),t}();const N=function(){function t(e,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5?arguments[5]:void 0;c(this,t),this.duration=e,this.offset=n,this.samplesPerPixel=r,this.sampleRate=i,this.marginLeft=a,this.colors=o,this.timeinfo={2e4:{marker:3e4,bigStep:1e4,smallStep:5e3,secondStep:5},12e3:{marker:15e3,bigStep:5e3,smallStep:1e3,secondStep:1},1e4:{marker:1e4,bigStep:5e3,smallStep:1e3,secondStep:1},5e3:{marker:5e3,bigStep:1e3,smallStep:500,secondStep:.5},2500:{marker:2e3,bigStep:1e3,smallStep:500,secondStep:.5},1500:{marker:2e3,bigStep:1e3,smallStep:200,secondStep:.2},700:{marker:1e3,bigStep:500,smallStep:100,secondStep:.1}}}return h(t,[{key:"getScaleInfo",value:function(t){var e=Object.keys(this.timeinfo).map((function(t){return parseInt(t,10)}));e=e.sort((function(t,e){return t-e}));for(var n=0;n<e.length;n+=1)if(t<=e[n])return this.timeinfo[e[n]];return this.timeinfo[e[0]]}},{key:"render",value:function(){for(var e=T(this.duration,this.samplesPerPixel,this.sampleRate),n=this.sampleRate/this.samplesPerPixel,r=T(this.offset,this.samplesPerPixel,this.sampleRate),i=this.getScaleInfo(this.samplesPerPixel),a={},o=[],s=e+r,u=0,c=0;c<s;c+=n*i.secondStep){var l=Math.floor(c),h=l-r;l>=r&&(i.marker&&u%i.marker==0?(o.push(v()("div.time",{attributes:{style:"position: absolute; left: ".concat(h,"px;")}},[t.formatTime(u)])),a[h]=10):i.bigStep&&u%i.bigStep==0?a[h]=5:i.smallStep&&u%i.smallStep==0&&(a[h]=2)),u+=1e3*i.secondStep}return v()("div.playlist-time-scale",{attributes:{style:"position: relative; left: 0; right: 0; margin-left: ".concat(this.marginLeft,"px;")}},[o,v()("canvas",{attributes:{width:e,height:30,style:"position: absolute; left: 0; right: 0; top: 0; bottom: 0;"},hook:new M(a,this.offset,this.samplesPerPixel,this.duration,this.colors)})])}}],[{key:"formatTime",value:function(t){var e=t/1e3,n=e%60,r=(e-n)/60;return n<10&&(n="0".concat(n)),"".concat(r,":").concat(n)}}]),t}();var z=n(2473),V=n.n(z),W=n(9052),U=n.n(W);const q={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let B;const X=new Uint8Array(16);function H(){if(!B&&(B="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!B))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return B(X)}const $=[];for(let t=0;t<256;++t)$.push((t+256).toString(16).slice(1));const Y=function(t,e,n){if(q.randomUUID&&!e&&!t)return q.randomUUID();const r=(t=t||{}).random||(t.rng||H)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return function(t,e=0){return($[t[e+0]]+$[t[e+1]]+$[t[e+2]]+$[t[e+3]]+"-"+$[t[e+4]]+$[t[e+5]]+"-"+$[t[e+6]]+$[t[e+7]]+"-"+$[t[e+8]]+$[t[e+9]]+"-"+$[t[e+10]]+$[t[e+11]]+$[t[e+12]]+$[t[e+13]]+$[t[e+14]]+$[t[e+15]]).toLowerCase()}(r)};var Z=n(6385),J=n.n(Z),K=n(9304),Q=function(){function t(e){c(this,t),this.track=e}return h(t,[{key:"setup",value:function(t,e){this.samplesPerPixel=t,this.sampleRate=e}},{key:"click",value:function(t){t.preventDefault();var e=P(t.offsetX,this.samplesPerPixel,this.sampleRate);this.track.ee.emit("select",e,e,this.track)}}],[{key:"getClass",value:function(){return".state-cursor"}},{key:"getEvents",value:function(){return["click"]}}]),t}();function tt(t){try{var e=t.target.getBoundingClientRect();return t.targetTouches[0].clientX-e.x}catch(t){return NaN}}var et=function(){function t(e){c(this,t),this.track=e,this.active=!1}return h(t,[{key:"setup",value:function(t,e){this.samplesPerPixel=t,this.sampleRate=e}},{key:"emitSelection",value:function(t){var e=Math.min(t,this.startX),n=Math.max(t,this.startX),r=P(e,this.samplesPerPixel,this.sampleRate),i=P(n,this.samplesPerPixel,this.sampleRate);this.track.ee.emit("select",r,i,this.track)}},{key:"complete",value:function(t){this.emitSelection(t),this.active=!1}},{key:"mousedown",value:function(t){t.preventDefault(),this.active=!0,this.startX=t.offsetX;var e=P(this.startX,this.samplesPerPixel,this.sampleRate);this.track.ee.emit("select",e,e,this.track)}},{key:"touchstart",value:function(t){t.preventDefault();var e=tt(t);if(e){this.active=!0,this.startX=e;var n=P(this.startX,this.samplesPerPixel,this.sampleRate);this.track.ee.emit("select",n,n,this.track)}}},{key:"mousemove",value:function(t){this.active&&(t.preventDefault(),this.emitSelection(t.offsetX))}},{key:"touchmove",value:function(t){if(this.active){t.preventDefault();var e=tt(t);e&&this.emitSelection(e)}}},{key:"mouseup",value:function(t){this.active&&(t.preventDefault(),this.complete(t.offsetX))}},{key:"mouseleave",value:function(t){this.active&&(t.preventDefault(),this.complete(t.offsetX))}},{key:"touchend",value:function(t){if(this.active){t.preventDefault();var e=tt(t);e&&this.complete(e)}}}],[{key:"getClass",value:function(){return".state-select"}},{key:"getEvents",value:function(){return["mousedown","mousemove","mouseup","mouseleave","touchstart","touchmove","touchend"]}}]),t}(),nt=function(){function t(e){c(this,t),this.track=e,this.active=!1}return h(t,[{key:"setup",value:function(t,e){this.samplesPerPixel=t,this.sampleRate=e}},{key:"emitShift",value:function(t){var e=P(t-this.prevX,this.samplesPerPixel,this.sampleRate);this.prevX=t,this.track.ee.emit("shift",e,this.track)}},{key:"complete",value:function(t){this.emitShift(t),this.active=!1}},{key:"mousedown",value:function(t){t.preventDefault(),this.active=!0,this.el=t.target,this.prevX=t.offsetX}},{key:"touchstart",value:function(t){t.preventDefault();var e=tt(t);e&&(this.active=!0,this.el=t.target,this.prevX=e)}},{key:"mousemove",value:function(t){this.active&&(t.preventDefault(),this.emitShift(t.offsetX))}},{key:"touchmove",value:function(t){if(this.active){t.preventDefault();var e=tt(t);e&&this.emitShift(e)}}},{key:"mouseup",value:function(t){this.active&&(t.preventDefault(),this.complete(t.offsetX))}},{key:"mouseleave",value:function(t){this.active&&(t.preventDefault(),this.complete(t.offsetX))}},{key:"touchend",value:function(t){if(this.active){t.preventDefault();var e=tt(t);e&&this.complete(e)}}}],[{key:"getClass",value:function(){return".state-shift"}},{key:"getEvents",value:function(){return["mousedown","mousemove","mouseup","mouseleave","touchstart","touchmove","touchend"]}}]),t}(),rt=function(){function t(e){c(this,t),this.track=e}return h(t,[{key:"setup",value:function(t,e){this.samplesPerPixel=t,this.sampleRate=e}},{key:"click",value:function(t){var e=P(t.offsetX,this.samplesPerPixel,this.sampleRate);e>this.track.getStartTime()&&e<this.track.getEndTime()&&this.track.ee.emit("fadein",e-this.track.getStartTime(),this.track)}}],[{key:"getClass",value:function(){return".state-fadein"}},{key:"getEvents",value:function(){return["click"]}}]),t}(),it=function(){function t(e){c(this,t),this.track=e}return h(t,[{key:"setup",value:function(t,e){this.samplesPerPixel=t,this.sampleRate=e}},{key:"click",value:function(t){var e=P(t.offsetX,this.samplesPerPixel,this.sampleRate);e>this.track.getStartTime()&&e<this.track.getEndTime()&&this.track.ee.emit("fadeout",this.track.getEndTime()-e,this.track)}}],[{key:"getClass",value:function(){return".state-fadeout"}},{key:"getEvents",value:function(){return["click"]}}]),t}();const at={cursor:Q,select:et,shift:nt,fadein:rt,fadeout:it},ot=function(){function t(e,n,r,i,a,o,s,u){c(this,t),this.peaks=e,this.offset=n,this.color=i,this.bits=r,this.scale=a,this.height=o,this.barWidth=s,this.barGap=u}return h(t,[{key:"hook",value:function(e,n,r){if(void 0===r||r.peaks!==this.peaks||r.scale!==this.scale||r.height!==this.height){var i=this.scale,a=e.width/i,o=e.getContext("2d"),s=e.height/i/2,u=Math.pow(2,this.bits-1),c=this.barWidth,l=this.barGap,h=c+l;o.clearRect(0,0,e.width,e.height),o.save(),o.fillStyle=this.color,o.scale(i,i);for(var f=0;f<a;f+=h){var p=this.peaks[2*(f+this.offset)]/u,d=this.peaks[2*(f+this.offset)+1]/u;t.drawFrame(o,s,f,p,d,c,l)}o.restore()}}}],[{key:"drawFrame",value:function(t,e,n,r,i,a,o){var s=Math.abs(r*e),u=Math.abs(i*e);t.fillRect(n,0,a,e-u),t.fillRect(n,e+s,a,e-s),0!==o&&t.fillRect(n+a,0,o,2*e)}}]),t}();var st=n(4571);const ut=function(){function t(e,n,r,i){c(this,t),this.type=e,this.shape=n,this.duration=r,this.samplesPerPixel=i}return h(t,[{key:"hook",value:function(e,n,r){if(void 0===r||r.shape!==this.shape||r.type!==this.type||r.duration!==this.duration||r.samplesPerPixel!==this.samplesPerPixel){var i=e.getContext("2d"),a=e.width,o=e.height,s=t.createCurve(this.shape,this.type,a),u=s.length,c=o-s[0]*o;i.clearRect(0,0,e.width,e.height),i.save(),i.strokeStyle="black",i.beginPath(),i.moveTo(0,c);for(var l=1;l<u;l+=1)c=o-s[l]*o,i.lineTo(l,c);i.stroke(),i.restore()}}}],[{key:"createCurve",value:function(t,e,n){var r,i;switch(e){case K.Y1:r=1;break;case K.h7:r=-1;break;default:throw new Error("Unsupported fade type.")}switch(t){case K._h:i=(0,st.sCurve)(n,r);break;case K.t$:i=(0,st.linear)(n,r);break;case K.Jl:i=(0,st.exponential)(n,r);break;case K.Hp:i=(0,st.logarithmic)(n,10,r);break;default:throw new Error("Unsupported fade shape")}return i}}]),t}();var ct=function(){function t(e){c(this,t),this.gain=e}return h(t,[{key:"hook",value:function(t){t.value=100*this.gain,t.title="".concat(Math.round(100*this.gain),"% volume")}}]),t}(),lt=function(){function t(e){c(this,t),this.stereoPan=e}return h(t,[{key:"hook",value:function(t){var e;t.value=100*this.stereoPan,e=0===this.stereoPan?"Center":this.stereoPan<0?"Left":"Right";var n="".concat(Math.abs(Math.round(100*this.stereoPan)),"% ");t.title="Pan: ".concat(0!==this.stereoPan?n:"").concat(e)}}]),t}(),ht=function(){function t(){c(this,t),this.name="Untitled",this.customClass=void 0,this.waveOutlineColor=void 0,this.gain=1,this.fades={},this.peakData={type:"WebAudio",mono:!1},this.cueIn=0,this.cueOut=0,this.duration=0,this.startTime=0,this.endTime=0,this.stereoPan=0}return h(t,[{key:"setEventEmitter",value:function(t){this.ee=t}},{key:"setName",value:function(t){this.name=t}},{key:"setCustomClass",value:function(t){this.customClass=t}},{key:"setWaveOutlineColor",value:function(t){this.waveOutlineColor=t}},{key:"setCues",value:function(t,e){if(e<t)throw new Error("cue out cannot be less than cue in");this.cueIn=t,this.cueOut=e,this.duration=this.cueOut-this.cueIn,this.endTime=this.startTime+this.duration}},{key:"trim",value:function(t,e){var n=this.getStartTime(),r=this.getEndTime(),i=this.cueIn-n;if(n<=t&&r>=t||n<=e&&r>=e){var a=t<n?n:t,o=e>r?r:e;this.setCues(a+i,o+i),t>n&&this.setStartTime(t)}}},{key:"createArrayBuffer",value:function(t,e,n){var r,i=this.getStartTime(),a=this.getEndTime(),o=t,s=e,u=o-this.getStartTime();u<0&&(u=0);var c=u/this.duration,l=s-this.getStartTime(),h=(this.duration-l)/this.duration;if(h<0&&(h=0),o<=a&&s>=i){var f=this.buffer.numberOfChannels,p=c*this.buffer.length,d=h*this.buffer.length;try{r=n.createBuffer(f,p+d,this.buffer.sampleRate);for(var v=new Float32Array(p),y=new Float32Array(d),m=0;m<f;m++)this.buffer.copyFromChannel(v,m,0),this.buffer.copyFromChannel(y,m,this.buffer.length-d),r.copyToChannel(v,m,0),r.copyToChannel(y,m,p)}catch(t){throw t}}return r}},{key:"razorCut",value:function(t,e,n){var r={Track:n,Point:t,buffer1:this.createArrayBuffer(t,n.endTime,e),buffer2:this.createArrayBuffer(n.startTime,t,e)};return this.ee.emit("razorCutFinished",r)}},{key:"removePart",value:function(t,e,n,r){this.ee.emit("saveCutManipulation",this.buffer,r);var i,a,o=this.getStartTime(),s=this.getEndTime();t<=e?(i=t,a=e):(i=e,a=t),i<=o&&(i=o),a>=s&&(a=s);var u=this.cueIn,c=this.cueOut-(a-i),l=2*this.buffer.length/(this.buffer.sampleRate*this.buffer.numberOfChannels),h=i-this.getStartTime()+this.cueIn;console.log("timeSplitOffset: "+h),h<0&&(h=0);var f=h/l,p=(l-(a-this.getStartTime()+this.cueIn))/l;if(p<0&&(p=0),i<=s&&a>=o){var d,v=this.buffer.numberOfChannels,y=f*this.buffer.length,m=p*this.buffer.length;try{d=n.createBuffer(v,y+m,this.buffer.sampleRate);for(var g=new Float32Array(y),k=new Float32Array(m),b=0;b<v;b++)this.buffer.copyFromChannel(g,b,0),this.buffer.copyFromChannel(k,b,this.buffer.length-m),d.copyToChannel(g,b,0),d.copyToChannel(k,b,y)}catch(t){throw t}var w=r.fades;if(void 0!==w&&Object.keys(w).length>0){var x=0,P=0;Object.keys(w).forEach((function(t){"FadeIn"===w[t].type?x=w[t].end-w[t].start:"FadeOut"===w[t].type&&(P=w[t].end-w[t].start)})),x+P>=d.duration&&(this.fadeIn&&(this.removeFade(this.fadeIn),this.fadeIn=void 0),this.fadeOut&&(this.removeFade(this.fadeOut),this.fadeOut=void 0))}this.buffer=d,this.setCues(u,c),this.playout.buffer=this.buffer}}},{key:"setStartTime",value:function(t){this.startTime=t,this.endTime=t+this.duration}},{key:"setPlayout",value:function(t){this.playout=t}},{key:"setOfflinePlayout",value:function(t){this.offlinePlayout=t}},{key:"setEnabledStates",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={cursor:!0,fadein:!0,fadeout:!0,select:!0,shift:!0};this.enabledStates=V()({},e,t)}},{key:"setFadeIn",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"logarithmic";if(t>this.duration)throw new Error("Invalid Fade In");var n={shape:e,start:0,end:t};this.fadeIn&&(this.removeFade(this.fadeIn),this.fadeIn=void 0),this.fadeIn=this.saveFade(K.Y1,n.shape,n.start,n.end)}},{key:"setFadeOut",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"logarithmic";if(t>this.duration)throw new Error("Invalid Fade Out");var n={shape:e,start:this.duration-t,end:this.duration};this.fadeOut&&(this.removeFade(this.fadeOut),this.fadeOut=void 0),this.fadeOut=this.saveFade(K.h7,n.shape,n.start,n.end)}},{key:"saveFade",value:function(t,e,n,r){var i=Y();return this.fades[i]={type:t,shape:e,start:n,end:r},i}},{key:"removeFade",value:function(t){delete this.fades[t]}},{key:"setBuffer",value:function(t){this.buffer=t}},{key:"setPeakData",value:function(t){this.peakData=t}},{key:"calculatePeaks",value:function(t,e){var n=x(this.cueIn,e),r=x(this.cueOut,e);this.setPeaks(J()(this.buffer,t,this.peakData.mono,n,r))}},{key:"setPeaks",value:function(t){this.peaks=t}},{key:"setState",value:function(t){if(this.state=t,this.state&&this.enabledStates[this.state]){var e=at[this.state];this.stateObj=new e(this)}else this.stateObj=void 0}},{key:"getStartTime",value:function(){return this.startTime}},{key:"getEndTime",value:function(){return this.endTime}},{key:"getDuration",value:function(){return this.duration}},{key:"isPlaying",value:function(){return this.playout.isPlaying()}},{key:"setShouldPlay",value:function(t){this.playout.setShouldPlay(t)}},{key:"setGainLevel",value:function(t){this.gain=t,this.playout.setVolumeGainLevel(t)}},{key:"setMasterGainLevel",value:function(t){this.playout.setMasterGainLevel(t)}},{key:"setStereoPanValue",value:function(t){this.stereoPan=t,this.playout.setStereoPanValue(t)}},{key:"setEffects",value:function(t){this.effectsGraph=t,this.playout.setEffects(t)}},{key:"schedulePlay",value:function(t,e,n,r){var i,a,o=t,s=n?n-e:void 0,u=V()({},{shouldPlay:!0,masterGain:1,isOffline:!1},r),c=u.isOffline?this.offlinePlayout:this.playout;if(this.endTime<=e||s&&e+s<this.startTime)return Promise.resolve();this.startTime>=e?(i=0,o+=this.startTime-e,n?(s-=this.startTime-e,a=Math.min(s,this.duration)):a=this.duration):(i=e-this.startTime,a=n?Math.min(s,this.duration-i):this.duration-i),i+=this.cueIn;var l=e-this.startTime,h=c.setUpSource();return U()(this.fades,(function(e){var n,r;if(l<e.end)switch(l<=e.start?(n=t+(e.start-l),r=e.end-e.start):l>e.start&&l<e.end&&(n=t-(l-e.start),r=e.end-e.start),e.type){case K.Y1:c.applyFadeIn(n,r,e.shape);break;case K.h7:c.applyFadeOut(n,r,e.shape);break;default:throw new Error("Invalid fade type saved on track.")}})),c.setVolumeGainLevel(this.gain),c.setShouldPlay(u.shouldPlay),c.setMasterGainLevel(u.masterGain),c.setStereoPanValue(this.stereoPan),c.play(o,i,a),h}},{key:"scheduleStop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.playout.stop(t)}},{key:"renderOverlay",value:function(t){var e=this,n=T(t.playlistLength,t.resolution,t.sampleRate),r={attributes:{style:"position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: ".concat(n,"px; z-index: 9;")}},i="";if(this.stateObj){this.stateObj.setup(t.resolution,t.sampleRate);var a=at[this.state];a.getEvents().forEach((function(t){r["on".concat(t)]=e.stateObj[t].bind(e.stateObj)})),i=a.getClass()}return v()("div.playlist-overlay".concat(i),r)}},{key:"renderControls",value:function(t){var e=this,n=t.muted?".active":"",r=t.soloed?".active":"",i=t.collapsed,a=this.peaks.data.length,o=t.controls.widgets,s=v()("button.btn.btn-danger.btn-xs.track-remove",{attributes:{type:"button",title:"Remove track"},onclick:function(){e.ee.emit("removeTrack",e)}},[v()("i.fas.fa-times")]),u=v()("span",[this.name]),c=v()("button.btn.btn-info.btn-xs.track-collapse",{attributes:{type:"button",title:i?"Expand track":"Collapse track"},onclick:function(){e.ee.emit("changeTrackView",e,{collapsed:!i})}},[v()("i.fas.".concat(i?"fa-caret-down":"fa-caret-up"))]),l=[];o.remove&&l.push(s),l.push(u),o.collapse&&l.push(c);var h=[v()("div.track-header",l)];return i||(o.muteOrSolo&&h.push(v()("div.btn-group",[v()("button.btn.btn-outline-dark.btn-xs.btn-mute".concat(n),{attributes:{type:"button"},onclick:function(){e.ee.emit("mute",e)}},["Mute"]),v()("button.btn.btn-outline-dark.btn-xs.btn-solo".concat(r),{onclick:function(){e.ee.emit("solo",e)}},["Solo"])])),o.volume&&h.push(v()("label.volume",[v()("input.volume-slider",{attributes:{"aria-label":"Track volume control",type:"range",min:0,max:100,value:100},hook:new ct(this.gain),oninput:function(t){e.ee.emit("volumechange",t.target.value,e)}})])),o.stereoPan&&h.push(v()("label.stereopan",[v()("input.stereopan-slider",{attributes:{"aria-label":"Track stereo pan control",type:"range",min:-100,max:100,value:100},hook:new lt(this.stereoPan),oninput:function(t){e.ee.emit("stereopan",t.target.value/100,e)}})]))),v()("div.controls",{attributes:{style:"height: ".concat(a*t.height,"px; width: ").concat(t.controls.width,"px; position: absolute; left: 0; z-index: 10;")}},h)}},{key:"render",value:function(t){var e=this,n=this.peaks.length,r=T(t.playbackSeconds,t.resolution,t.sampleRate),i=T(this.startTime,t.resolution,t.sampleRate),a=T(this.endTime,t.resolution,t.sampleRate),o=0,s=this.peaks.data.length,u=Math.ceil(window.devicePixelRatio);r>0&&r>i&&(o=r<a?r-i:n);var c=[v()("div.cursor",{attributes:{style:"position: absolute; width: 1px; margin: 0; padding: 0; top: 0; left: ".concat(r,"px; bottom: 0; z-index: 5;")}})],l=Object.keys(this.peaks.data).map((function(r){for(var a=[v()("div.channel-progress",{attributes:{style:"position: absolute; width: ".concat(o,"px; height: ").concat(t.height,"px; z-index: 2;")}})],s=0,c=n,l=e.peaks.data[r];c>0;){var h=Math.min(c,1e3),f=e.waveOutlineColor?e.waveOutlineColor:t.colors.waveOutlineColor;a.push(v()("canvas",{attributes:{width:h*u,height:t.height*u,style:"float: left; position: relative; margin: 0; padding: 0; z-index: 3; width: ".concat(h,"px; height: ").concat(t.height,"px;")},hook:new ot(l,s,e.peaks.bits,f,u,t.height,t.barWidth,t.barGap)})),c-=h,s+=1e3}if(e.fadeIn){var p=e.fades[e.fadeIn],d=T(p.end-p.start,t.resolution,t.sampleRate);a.push(v()("div.wp-fade.wp-fadein",{attributes:{style:"position: absolute; height: ".concat(t.height,"px; width: ").concat(d,"px; top: 0; left: 0; z-index: 4;")}},[v()("canvas",{attributes:{width:d,height:t.height},hook:new ut(p.type,p.shape,p.end-p.start,t.resolution)})]))}if(e.fadeOut){var y=e.fades[e.fadeOut],m=T(y.end-y.start,t.resolution,t.sampleRate);a.push(v()("div.wp-fade.wp-fadeout",{attributes:{style:"position: absolute; height: ".concat(t.height,"px; width: ").concat(m,"px; top: 0; right: 0; z-index: 4;")}},[v()("canvas",{attributes:{width:m,height:t.height},hook:new ut(y.type,y.shape,y.end-y.start,t.resolution)})]))}return v()("div.channel.channel-".concat(r),{attributes:{style:"height: ".concat(t.height,"px; width: ").concat(n,"px; top: ").concat(r*t.height,"px; left: ").concat(i,"px; position: absolute; margin: 0; padding: 0; z-index: 1;")}},a)}));if(c.push(l),c.push(this.renderOverlay(t)),!0===t.isActive){var h=T(t.timeSelection.start,t.resolution,t.sampleRate),f=T(t.timeSelection.end,t.resolution,t.sampleRate)-h+1,p=f>1?".segment":".point";c.push(v()("div.selection".concat(p),{attributes:{style:"position: absolute; width: ".concat(f,"px; bottom: 0; top: 0; left: ").concat(h,"px; z-index: 4;")}}))}var d=v()("div.waveform",{attributes:{style:"height: ".concat(s*t.height,"px; position: relative;")}},c),y=[],m=0;t.controls.show&&(y.push(this.renderControls(t)),m=t.controls.width),y.push(d);var g=t.shouldPlay?"":".silent",k=void 0===this.customClass?"":".".concat(this.customClass);return v()("div.channel-wrapper".concat(g).concat(k),{attributes:{style:"margin-left: ".concat(m,"px; height: ").concat(t.height*s,"px;")}},y)}},{key:"getTrackDetails",value:function(){var t={src:this.src,start:this.startTime,end:this.endTime,name:this.name,customClass:this.customClass,cuein:this.cueIn,cueout:this.cueOut,stereoPan:this.stereoPan,gain:this.gain,effects:this.effectsGraph};if(this.fadeIn){var e=this.fades[this.fadeIn];t.fadeIn={shape:e.shape,duration:e.end-e.start}}if(this.fadeOut){var n=this.fades[this.fadeOut];t.fadeOut={shape:n.shape,duration:n.end-n.start}}return t}}]),t}();function ft(t,e){t.connect(e)}var pt=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.createGain();c(this,t),this.ac=e,this.gain=1,this.effectsGraph=ft,this.masterEffectsGraph=ft,this.buffer=n,this.masterGain=r,this.destination=this.ac.destination}return h(t,[{key:"applyFade",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"logarithmic";if(t===K.Y1)(0,K.L7)(this.fadeGain.gain,r,e,n);else{if(t!==K.h7)throw new Error("Unsupported fade type");(0,K.Mt)(this.fadeGain.gain,r,e,n)}}},{key:"applyFadeIn",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"logarithmic";this.applyFade(K.Y1,t,e,n)}},{key:"applyFadeOut",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"logarithmic";this.applyFade(K.h7,t,e,n)}},{key:"isPlaying",value:function(){return void 0!==this.source}},{key:"getDuration",value:function(){return this.buffer.duration}},{key:"setAudioContext",value:function(t){this.ac=t,this.destination=this.ac.destination}},{key:"createStereoPanner",value:function(){return this.ac.createStereoPanner?this.ac.createStereoPanner():this.ac.createPanner()}},{key:"setUpSource",value:function(){var t,e,n=this;this.source=this.ac.createBufferSource(),this.source.buffer=this.buffer;var r=new Promise((function(r){n.source.onended=function(){n.source.disconnect(),n.fadeGain.disconnect(),n.volumeGain.disconnect(),n.shouldPlayGain.disconnect(),n.panner.disconnect(),t&&t(),e&&e(),n.source=void 0,n.fadeGain=void 0,n.volumeGain=void 0,n.shouldPlayGain=void 0,n.panner=void 0,r()}}));return this.fadeGain=this.ac.createGain(),this.volumeGain=this.ac.createGain(),this.shouldPlayGain=this.ac.createGain(),this.panner=this.createStereoPanner(),this.source.connect(this.fadeGain),this.fadeGain.connect(this.volumeGain),this.volumeGain.connect(this.shouldPlayGain),this.shouldPlayGain.connect(this.panner),t=this.effectsGraph(this.panner,this.masterGain,this.ac instanceof(window.OfflineAudioContext||window.webkitOfflineAudioContext)),e=this.masterEffectsGraph(this.masterGain,this.destination,this.ac instanceof(window.OfflineAudioContext||window.webkitOfflineAudioContext)),r}},{key:"setVolumeGainLevel",value:function(t){this.volumeGain&&(this.volumeGain.gain.value=t)}},{key:"setShouldPlay",value:function(t){this.shouldPlayGain&&(this.shouldPlayGain.gain.value=t?1:0)}},{key:"setMasterGainLevel",value:function(t){this.masterGain&&(this.masterGain.gain.value=t)}},{key:"setStereoPanValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.panner&&(void 0!==this.panner.pan?this.panner.pan.value=t:(this.panner.panningModel="equalpower",this.panner.setPosition(t,0,1-Math.abs(t))))}},{key:"setEffects",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft;this.effectsGraph=t}},{key:"setMasterEffects",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft;this.masterEffectsGraph=t}},{key:"play",value:function(t,e,n){this.source.start(t,e,n)}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.source&&this.source.stop(t)}}]),t}();function dt(t){return{id:t.id||Y(),start:Number(t.begin)||0,end:Number(t.end)||0,lines:t.lines||[""],lang:t.language||"en"}}var vt=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,t),this.playlist=e,this.data=r,this.active=!1,this.ondragover=function(t){n.active&&(t.preventDefault(),n.emitDrag(t.clientX))}}return h(t,[{key:"emitDrag",value:function(t){var e=t-this.prevX;if(e){var n=P(e,this.playlist.samplesPerPixel,this.playlist.sampleRate);this.prevX=t,this.playlist.ee.emit("dragged",n,this.data)}}},{key:"complete",value:function(){this.active=!1,document.removeEventListener("dragover",this.ondragover)}},{key:"dragstart",value:function(t){var e=t;this.active=!0,this.prevX=t.clientX,e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",""),document.addEventListener("dragover",this.ondragover)}},{key:"dragend",value:function(t){this.active&&(t.preventDefault(),this.complete())}}],[{key:"getClass",value:function(){return".shift"}},{key:"getEvents",value:function(){return["dragstart","dragend"]}}]),t}(),yt=function(){};yt.prototype.hook=function(t){var e=t.querySelector(".current");if(e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect().top-n.top;t.scrollTop+=r}};const mt=yt,gt=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;c(this,t),this.playlist=e,this.marginLeft=s,this.resizeHandlers=[],this.editable=i,this.annotations=n.map((function(t){return dt(t)})),this.setupInteractions(),this.controls=r,this.setupEE(e.ee),this.playlist.isContinuousPlay=o,this.playlist.linkEndpoints=a,this.length=this.annotations.length}return h(t,[{key:"setupInteractions",value:function(){var t=this;this.annotations.forEach((function(e,n){var r=new vt(t.playlist,{direction:"left",index:n}),i=new vt(t.playlist,{direction:"right",index:n});t.resizeHandlers.push(r),t.resizeHandlers.push(i)}))}},{key:"setupEE",value:function(t){var e=this;return t.on("dragged",(function(t,n){var r=n.index,i=e.annotations,a=i[r];if("left"===n.direction){var o=a.start;a.start+=t,a.start<0&&(a.start=0),r&&i[r-1].end>a.start&&(i[r-1].end=a.start),e.playlist.linkEndpoints&&r&&i[r-1].end===o&&(i[r-1].end=a.start)}else{var s=a.end;a.end+=t,a.end>e.playlist.duration&&(a.end=e.playlist.duration),r<i.length-1&&i[r+1].start<a.end&&(i[r+1].start=a.end),e.playlist.linkEndpoints&&r<i.length-1&&i[r+1].start===s&&(i[r+1].start=a.end)}e.playlist.drawRequest()})),t.on("continuousplay",(function(t){e.playlist.isContinuousPlay=t})),t.on("linkendpoints",(function(t){e.playlist.linkEndpoints=t})),t.on("annotationsrequest",(function(){e.export()})),t}},{key:"export",value:function(){var t=this.annotations.map((function(t){return e=t,{begin:String(e.start.toFixed(3)),end:String(e.end.toFixed(3)),id:String(e.id),language:e.lang,lines:e.lines};var e})),e="data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(t))),n=document.createElement("a");document.body.appendChild(n),n.href=e,n.download="annotations.json",n.click(),document.body.removeChild(n)}},{key:"renderResizeLeft",value:function(t){var e=vt.getEvents(),n={attributes:{style:"position: absolute; height: 30px; width: 10px; top: 0; left: -2px",draggable:!0}},r=this.resizeHandlers[2*t];return e.forEach((function(t){n["on".concat(t)]=r[t].bind(r)})),v()("div.resize-handle.resize-w",n)}},{key:"renderResizeRight",value:function(t){var e=vt.getEvents(),n={attributes:{style:"position: absolute; height: 30px; width: 10px; top: 0; right: -2px",draggable:!0}},r=this.resizeHandlers[2*t+1];return e.forEach((function(t){n["on".concat(t)]=r[t].bind(r)})),v()("div.resize-handle.resize-e",n)}},{key:"renderControls",value:function(t,e){var n=this,r=this;return this.controls.map((function(i){return v()("i.".concat(i.class),{attributes:{title:i.title},onclick:function(){i.action(t,e,r.annotations,{linkEndpoints:r.playlist.linkEndpoints}),n.setupInteractions(),r.playlist.drawRequest()}})}))}},{key:"render",value:function(){var t=this,e=v()("div.annotations-boxes",{attributes:{style:"height: 30px; position: relative; margin-left: ".concat(this.marginLeft,"px;")}},this.annotations.map((function(e,n){var r=t.playlist.samplesPerPixel,i=t.playlist.sampleRate,a=i/r,o=T(t.playlist.scrollLeft,r,i),s=Math.floor(e.start*a-o),u=Math.ceil(e.end*a-e.start*a);return v()("div.annotation-box",{attributes:{style:"position: absolute; height: 30px; width: ".concat(u,"px; left: ").concat(s,"px"),"data-id":e.id}},[t.renderResizeLeft(n),v()("span.id",{onclick:function(){var e=t.annotations[n].start,r=t.annotations[n].end;t.playlist.isContinuousPlay?(t.playlist.seek(e,e),t.playlist.ee.emit("play",e)):(t.playlist.seek(e,r),t.playlist.ee.emit("play",e,r))}},[e.id]),t.renderResizeRight(n)])}))),n=v()("div.annotations-boxes-wrapper",{attributes:{style:"overflow: hidden;"}},[e]),r=v()("div.annotations-text",{hook:new mt},this.annotations.map((function(e,n){var r=function(t){function e(t,e){var n=parseInt(t/3600,10)%24,r=parseInt(t/60,10)%60,i=(t%60).toFixed(e),a=n<10?"0".concat(n):n,o=r<10?"0".concat(r):r,s=i<10?"0".concat(i):i;return"".concat(a,":").concat(o,":").concat(s)}return{seconds:function(t){return t.toFixed(0)},thousandths:function(t){return t.toFixed(3)},"hh:mm:ss":function(t){return e(t,0)},"hh:mm:ss.u":function(t){return e(t,1)},"hh:mm:ss.uu":function(t){return e(t,2)},"hh:mm:ss.uuu":function(t){return e(t,3)}}[t]}(t.playlist.durationFormat),i=r(e.start),a=r(e.end),o="";t.playlist.isPlaying()&&t.playlist.playbackSeconds>=e.start&&t.playlist.playbackSeconds<=e.end&&(o=".current");var s={attributes:{contenteditable:!0},oninput:function(t){e.lines=[t.target.innerText]},onkeypress:function(t){13!==t.which&&13!==t.keyCode||(t.target.blur(),t.preventDefault())}},u=t.editable?s:{};return v()("div.annotation".concat(o),[v()("span.annotation-id",[e.id]),v()("span.annotation-start",[i]),v()("span.annotation-end",[a]),v()("span.annotation-lines",u,[e.lines]),v()("span.annotation-actions",t.renderControls(e,n))])})));return v()("div.annotations",[n,r])}}]),t}();function kt(){function t(t){for(var e,n=1/0,r=-1/0,i=0;i<t.length;i+=1)n>(e=t[i])&&(n=e),r<e&&(r=e);return{min:n,max:r}}function e(t,e){var n=Math.pow(2,e-1),r=t<0?t*n:t*n-1;return Math.max(-n,Math.min(n-1,r))}function n(n,r,i){for(var a,o,s,u,c,l=n.length,h=Math.ceil(l/r),f=new(self["Int".concat(i,"Array")])(2*h),p=0;p<h;p+=1)a=p*r,o=(p+1)*r>l?l:(p+1)*r,u=e((c=t(n.subarray(a,o))).min,i),s=e(c.max,i),f[2*p]=u,f[2*p+1]=s;return f}onmessage=function(t){var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;if([8,16,32].indexOf(r)<0)throw new Error("Invalid number of bits specified for peaks.");var i=[],a=0,o=t.length;i.push(n(t.subarray(a,o),e,r));var s=i[0].length/2;return{bits:r,length:s,data:i}}(t.data.samples,t.data.samplesPerPixel);postMessage(e)}}var bt=function(){function t(){c(this,t),this.tracks=[],this.soloedTracks=[],this.mutedTracks=[],this.collapsedTracks=[],this.playoutPromises=[],this.cursor=0,this.playbackSeconds=0,this.duration=0,this.scrollLeft=0,this.scrollTimer=void 0,this.showTimescale=!1,this.isScrolling=!1,this.fadeType="logarithmic",this.masterGain=1,this.annotations=[],this.durationFormat="hh:mm:ss.uuu",this.isAutomaticScroll=!1,this.resetDrawTimer=void 0}var r,i;return h(t,[{key:"initExporter",value:function(){this.exportWorker=new Worker(new URL(n.p+n.u(415),n.b),{type:void 0})}},{key:"initRecorder",value:function(t){var e=this;this.mediaRecorder=new MediaRecorder(t),this.mediaRecorder.onstart=function(){var t=new ht;t.setName("Recording"),t.setEnabledStates(),t.setEventEmitter(e.ee),e.recordingTrack=t,e.tracks.push(t),e.chunks=[],e.working=!1},this.mediaRecorder.ondataavailable=function(t){if(e.chunks.push(t.data),!e.working){var n=new Blob(e.chunks,{type:"audio/ogg; codecs=opus"});I.createLoader(n,e.ac).load().then((function(t){e.recorderWorker.postMessage({samples:t.getChannelData(0),samplesPerPixel:e.samplesPerPixel}),e.recordingTrack.setCues(0,t.duration),e.recordingTrack.setBuffer(t),e.recordingTrack.setPlayout(new pt(e.ac,t,e.masterGainNode)),e.adjustDuration()})).catch((function(){e.working=!1})),e.working=!0}},this.mediaRecorder.onstop=function(){e.chunks=[],e.working=!1},this.recorderWorker=new(w())(kt),this.recorderWorker.onmessage=function(t){e.recordingTrack.setPeaks(t.data),e.working=!1,e.drawRequest()}}},{key:"setShowTimeScale",value:function(t){this.showTimescale=t}},{key:"setMono",value:function(t){this.mono=t}},{key:"setExclSolo",value:function(t){this.exclSolo=t}},{key:"setSeekStyle",value:function(t){this.seekStyle=t}},{key:"getSeekStyle",value:function(){return this.seekStyle}},{key:"setSampleRate",value:function(t){this.sampleRate=t}},{key:"setSamplesPerPixel",value:function(t){this.samplesPerPixel=t}},{key:"setAudioContext",value:function(t){this.ac=t,this.masterGainNode=t.createGain()}},{key:"getAudioContext",value:function(){return this.ac}},{key:"setControlOptions",value:function(t){this.controls=t}},{key:"setWaveHeight",value:function(t){this.waveHeight=t}},{key:"setCollapsedWaveHeight",value:function(t){this.collapsedWaveHeight=t}},{key:"setColors",value:function(t){this.colors=t}},{key:"setBarWidth",value:function(t){this.barWidth=t}},{key:"setBarGap",value:function(t){this.barGap=t}},{key:"setAnnotations",value:function(t){var e=this.controls.show?this.controls.width:0;this.annotationList=new gt(this,t.annotations,t.controls,t.editable,t.linkEndpoints,t.isContinuousPlay,e)}},{key:"setEffects",value:function(t){this.effectsGraph=t}},{key:"setEventEmitter",value:function(t){this.ee=t}},{key:"getEventEmitter",value:function(){return this.ee}},{key:"setUpEventEmitter",value:function(){var t=this,e=this.ee;e.on("automaticscroll",(function(e){t.isAutomaticScroll=e})),e.on("durationformat",(function(e){t.durationFormat=e,t.drawRequest()})),e.on("select",(function(e,n,r){t.isPlaying()?(t.lastSeeked=e,t.pausedAt=void 0,t.restartPlayFrom(e)):(t.seek(e,n,r),t.ee.emit("timeupdate",e),t.drawRequest())})),e.on("startaudiorendering",(function(e){t.startOfflineRender(e)})),e.on("statechange",(function(e){t.setState(e),t.drawRequest()})),e.on("shift",(function(e,n){n.setStartTime(n.getStartTime()+e),t.adjustDuration(),t.drawRequest()})),e.on("record",(function(){t.record()})),e.on("play",(function(e,n){t.play(e,n)})),e.on("pause",(function(){t.pause()})),e.on("stop",(function(){t.stop()})),e.on("rewind",(function(){t.rewind()})),e.on("fastforward",(function(){t.fastForward()})),e.on("clear",(function(){t.clear().then((function(){t.drawRequest()}))})),e.on("solo",(function(e){t.soloTrack(e),t.adjustTrackPlayout(),t.drawRequest()})),e.on("mute",(function(e){t.muteTrack(e),t.adjustTrackPlayout(),t.drawRequest()})),e.on("removeTrack",(function(e){t.removeTrack(e),t.adjustTrackPlayout(),t.drawRequest()})),e.on("changeTrackView",(function(e,n){t.collapseTrack(e,n),t.drawRequest()})),e.on("volumechange",(function(e,n){n.setGainLevel(e/100),t.drawRequest()})),e.on("mastervolumechange",(function(e){t.masterGain=e/100,t.tracks.forEach((function(e){e.setMasterGainLevel(t.masterGain)}))})),e.on("fadein",(function(e,n){n.setFadeIn(e,t.fadeType),t.drawRequest()})),e.on("fadeout",(function(e,n){n.setFadeOut(e,t.fadeType),t.drawRequest()})),e.on("stereopan",(function(e,n){n.setStereoPanValue(e),t.drawRequest()})),e.on("fadetype",(function(e){t.fadeType=e})),e.on("newtrack",(function(e){t.load([{src:e,name:e.name}])})),e.on("cut",(function(){var e=t.getActiveTrack(),n=t.getTimeSelection();e.removePart(n.start,n.end,t.ac,e),e.calculatePeaks(t.samplesPerPixel,t.sampleRate),t.setTimeSelection(0,0),t.adjustDuration(),t.drawRequest(),t.ee.emit("cutfinished")})),e.on("razorCut",(function(){var e=t.getActiveTrack(),n=t.getTimeSelection();e.razorCut(n.start,t.ac,e)})),e.on("trim",(function(){var e=t.getActiveTrack(),n=t.getTimeSelection();e.trim(n.start,n.end),e.calculatePeaks(t.samplesPerPixel,t.sampleRate),t.setTimeSelection(0,0),t.adjustDuration(),t.drawRequest()})),e.on("split",(function(){var e=t.getActiveTrack(),n=t.getTimeSelection().start;t.createTrackFromSplit({trackToSplit:e,name:e.name+"_1",splitTime:n}),e.trim(e.startTime,n),e.fadeOut&&(e.removeFade(e.fadeOut),e.fadeOut=void 0),e.calculatePeaks(t.samplesPerPixel,t.sampleRate),t.drawRequest()})),e.on("zoomin",(function(){var e=Math.max(0,t.zoomIndex-1),n=t.zoomLevels[e];n!==t.samplesPerPixel&&(t.setZoom(n),t.drawRequest())})),e.on("zoomout",(function(){var e=Math.min(t.zoomLevels.length-1,t.zoomIndex+1),n=t.zoomLevels[e];n!==t.samplesPerPixel&&(t.setZoom(n),t.drawRequest())})),e.on("scroll",(function(){t.isScrolling=!0,t.drawRequest(),clearTimeout(t.scrollTimer),t.scrollTimer=setTimeout((function(){t.isScrolling=!1}),200)}))}},{key:"load",value:function(t){var e=this,n=t.map((function(t){return I.createLoader(t.src,e.ac,e.ee).load().then((function(t){return t.sampleRate===e.sampleRate?t:function(t,e){var n=Math.ceil(t.duration*e),r=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(t.numberOfChannels,n,e),i=r.createBufferSource();return i.buffer=t,i.connect(r.destination),i.start(),r.startRendering()}(t,e.sampleRate)}))}));return Promise.all(n).then((function(n){e.ee.emit("audiosourcesloaded");var r=n.map((function(n,r){var i=t[r],a=i.name||"Untitled",o=i.start||0,s=i.states||{},u=i.fadeIn,c=i.fadeOut,l=i.cuein||0,h=i.cueout||n.duration,f=i.gain||1,p=i.muted||!1,d=i.soloed||!1,v=i.selected,y=i.peaks||{type:"WebAudio",mono:e.mono},m=i.customClass||void 0,g=i.waveOutlineColor||void 0,k=i.stereoPan||0,b=i.effects||null,w=new pt(e.ac,n,e.masterGainNode),x=new ht;return x.src=i.src,x.setBuffer(n),x.setName(a),x.setEventEmitter(e.ee),x.setEnabledStates(s),x.setCues(l,h),x.setCustomClass(m),x.setWaveOutlineColor(g),void 0!==u&&x.setFadeIn(u.duration,u.shape),void 0!==c&&x.setFadeOut(c.duration,c.shape),void 0!==v&&(e.setActiveTrack(x),e.setTimeSelection(v.start,v.end)),void 0!==y&&x.setPeakData(y),x.setState(e.getState()),x.setStartTime(o),x.setPlayout(w),x.setGainLevel(f),x.setStereoPanValue(k),b&&x.setEffects(b),p&&e.muteTrack(x),d&&e.soloTrack(x),x.calculatePeaks(e.samplesPerPixel,e.sampleRate),x}));e.tracks=e.tracks.concat(r),e.adjustDuration(),e.draw(e.render()),e.ee.emit("audiosourcesrendered")})).catch((function(t){e.ee.emit("audiosourceserror",t)}))}},{key:"createTrackFromSplit",value:function(t){var e=t.trackToSplit,n=t.name,r=t.splitTime,i=e.enabledStates,a=e.buffer,o=e.fadeOut,s=e.cueIn,u=e.cueOut,c=e.gain||1,l=!1;-1!==this.mutedTracks.indexOf(e)&&(l=!0);var h=!1;-1!==this.soloedTracks.indexOf(e)&&(h=!0);var f=e.peakData,p=e.customClass,d=e.waveOutlineColor,v=e.stereoPan||0,y=e.effectsGraph||null,m=new pt(this.ac,a,this.masterGainNode),g=new ht;if(g.src=e.src,g.setBuffer(a),g.setName(n),g.setEventEmitter(this.ee),g.setEnabledStates(i),g.setCues(s,u),g.setCustomClass(p),g.setWaveOutlineColor(d),void 0!==o){var k=e.fades[o];g.setFadeOut(k.end-k.start,k.shape)}void 0!==f&&g.setPeakData(f),g.setState(this.getState()),g.setPlayout(m),g.setGainLevel(c),g.setStereoPanValue(v),y&&g.setEffects(y),l&&this.muteTrack(g),h&&this.soloTrack(g),g.setStartTime(e.startTime),g.trim(r,g.endTime),g.calculatePeaks(this.samplesPerPixel,this.sampleRate),this.tracks=this.tracks.concat([g]),this.adjustDuration(),this.draw(this.render()),this.setActiveTrack(g),this.ee.emit("audiosourcesrendered")}},{key:"setActiveTrack",value:function(t){this.activeTrack=t}},{key:"getActiveTrack",value:function(){return this.activeTrack}},{key:"isSegmentSelection",value:function(){return this.timeSelection.start!==this.timeSelection.end}},{key:"setTimeSelection",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;this.timeSelection={start:t,end:void 0===e?t:e},this.cursor=t}},{key:"startOfflineRender",value:(r=p().mark((function t(e){var n,r,i,a,o=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isRendering){t.next=2;break}return t.abrupt("return");case 2:return this.isRendering=!0,this.offlineAudioContext=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(2,48e3*this.duration,48e3),n=[],this.ee.emit("audiorenderingstarting",this.offlineAudioContext,n),r=this.offlineAudioContext.currentTime,i=this.offlineAudioContext.createGain(),this.tracks.forEach((function(t){var e=new pt(o.offlineAudioContext,t.buffer,i);e.setEffects(t.effectsGraph),e.setMasterEffects(o.effectsGraph),t.setOfflinePlayout(e),t.schedulePlay(r,0,0,{shouldPlay:o.shouldTrackPlay(t),masterGain:1,isOffline:!0})})),t.next=11,Promise.all(n);case 11:return t.next=13,this.offlineAudioContext.startRendering();case 13:a=t.sent,"buffer"===e?(this.ee.emit("audiorenderingfinished",e,a),this.isRendering=!1):["wav","mp3","opus","aac"].includes(e)&&(this.exportWorker.postMessage({command:"init",config:{sampleRate:48e3}}),this.exportWorker.onmessage=function(t){o.ee.emit("audiorenderingfinished",e,t.data),o.isRendering=!1,o.exportWorker.postMessage({command:"clear"})},this.exportWorker.postMessage({command:"record",buffer:[a.getChannelData(0),a.getChannelData(1)]}),"mp3"===e?this.exportWorker.postMessage({command:"exportMP3",type:"audio/mp3"}):"opus"===e?this.exportWorker.postMessage({command:"exportOpus",type:"audio/webm"}):"aac"===e?this.exportWorker.postMessage({command:"exportAAC",type:"audio/aac"}):this.exportWorker.postMessage({command:"exportWAV",type:"audio/wav"}));case 15:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(n,i){var a=r.apply(t,e);function o(t){u(a,n,i,o,s,"next",t)}function s(t){u(a,n,i,o,s,"throw",t)}o(void 0)}))},function(t){return i.apply(this,arguments)})},{key:"getTimeSelection",value:function(){return this.timeSelection}},{key:"setState",value:function(t){this.state=t,this.tracks.forEach((function(e){e.setState(t)}))}},{key:"getState",value:function(){return this.state}},{key:"setZoomIndex",value:function(t){this.zoomIndex=t}},{key:"setZoomLevels",value:function(t){this.zoomLevels=t}},{key:"setZoom",value:function(t){var e=this;this.samplesPerPixel=t,this.zoomIndex=this.zoomLevels.indexOf(t),this.tracks.forEach((function(n){n.calculatePeaks(t,e.sampleRate)}))}},{key:"muteTrack",value:function(t){var e=this.mutedTracks.indexOf(t);e>-1?this.mutedTracks.splice(e,1):this.mutedTracks.push(t)}},{key:"soloTrack",value:function(t){var e=this.soloedTracks.indexOf(t);e>-1?this.soloedTracks.splice(e,1):this.exclSolo?this.soloedTracks=[t]:this.soloedTracks.push(t)}},{key:"collapseTrack",value:function(t,e){if(e.collapsed)this.collapsedTracks.push(t);else{var n=this.collapsedTracks.indexOf(t);n>-1&&this.collapsedTracks.splice(n,1)}}},{key:"removeTrack",value:function(t){t.isPlaying()&&t.scheduleStop(),[this.mutedTracks,this.soloedTracks,this.collapsedTracks,this.tracks].forEach((function(e){var n=e.indexOf(t);n>-1&&e.splice(n,1)})),this.adjustDuration()}},{key:"adjustTrackPlayout",value:function(){var t=this;this.tracks.forEach((function(e){e.setShouldPlay(t.shouldTrackPlay(e))}))}},{key:"adjustDuration",value:function(){this.duration=this.tracks.reduce((function(t,e){return Math.max(t,e.getEndTime())}),0)}},{key:"shouldTrackPlay",value:function(t){var e;return this.soloedTracks.length>0?(e=!1,this.soloedTracks.indexOf(t)>-1&&(e=!0)):(e=!0,this.mutedTracks.indexOf(t)>-1&&(e=!1)),e}},{key:"isPlaying",value:function(){return this.tracks.reduce((function(t,e){return t||e.isPlaying()}),!1)}},{key:"getCurrentTime",value:function(){return(this.lastSeeked||this.pausedAt||this.cursor)+this.getElapsedTime()}},{key:"getElapsedTime",value:function(){return this.ac.currentTime-this.lastPlay}},{key:"setMasterGain",value:function(t){this.ee.emit("mastervolumechange",t)}},{key:"restartPlayFrom",value:function(t,e){return this.stopAnimation(),this.tracks.forEach((function(t){t.scheduleStop()})),Promise.all(this.playoutPromises).then(this.play.bind(this,t,e))}},{key:"play",value:function(t,e){var n=this;clearTimeout(this.resetDrawTimer);var r=this.ac.currentTime,i=this.getTimeSelection(),a=[],o=0===t?0:t||this.pausedAt||this.cursor,s=e;return!s&&i.end!==i.start&&i.end>o&&(s=i.end),this.isPlaying()?this.restartPlayFrom(o,s):(this.effectsGraph&&this.tracks&&this.tracks[0].playout.setMasterEffects(this.effectsGraph),this.tracks.forEach((function(t){t.setState("cursor"),a.push(t.schedulePlay(r,o,s,{shouldPlay:n.shouldTrackPlay(t),masterGain:n.masterGain}))})),this.lastPlay=r,this.playoutPromises=a,this.startAnimation(o),Promise.all(this.playoutPromises))}},{key:"pause",value:function(){return this.isPlaying()?(this.pausedAt=this.getCurrentTime(),this.playbackReset()):Promise.all(this.playoutPromises)}},{key:"stop",value:function(){return this.mediaRecorder&&"recording"===this.mediaRecorder.state&&this.mediaRecorder.stop(),this.pausedAt=void 0,this.playbackSeconds=0,this.playbackReset()}},{key:"playbackReset",value:function(){var t=this;return this.lastSeeked=void 0,this.stopAnimation(),this.tracks.forEach((function(e){e.scheduleStop(),e.setState(t.getState())})),this.masterGainNode.disconnect(),this.drawRequest(),Promise.all(this.playoutPromises)}},{key:"rewind",value:function(){var t=this;return this.stop().then((function(){t.scrollLeft=0,t.ee.emit("select",0,0)}))}},{key:"fastForward",value:function(){var t=this;return this.stop().then((function(){t.viewDuration<t.duration?t.scrollLeft=t.duration-t.viewDuration:t.scrollLeft=0,t.ee.emit("select",t.duration,t.duration)}))}},{key:"clear",value:function(){var t=this;return this.stop().then((function(){t.tracks=[],t.soloedTracks=[],t.mutedTracks=[],t.playoutPromises=[],t.cursor=0,t.playbackSeconds=0,t.duration=0,t.scrollLeft=0,t.seek(0,0,void 0)}))}},{key:"record",value:function(){var t=this,e=[];this.mediaRecorder.start(300),this.tracks.forEach((function(n){n.setState("none"),e.push(n.schedulePlay(t.ac.currentTime,0,void 0,{shouldPlay:t.shouldTrackPlay(n)}))})),this.playoutPromises=e}},{key:"startAnimation",value:function(t){var e=this;this.lastDraw=this.ac.currentTime,this.animationRequest=window.requestAnimationFrame((function(){e.updateEditor(t)}))}},{key:"stopAnimation",value:function(){window.cancelAnimationFrame(this.animationRequest),this.lastDraw=void 0}},{key:"seek",value:function(t,e,n){this.isPlaying()?(this.lastSeeked=t,this.pausedAt=void 0,this.restartPlayFrom(t)):(this.setActiveTrack(n||this.tracks[0]),this.pausedAt=t,this.setTimeSelection(t,e),"fill"===this.getSeekStyle()&&(this.playbackSeconds=t))}},{key:"updateEditor",value:function(t){var e=this,n=this.ac.currentTime,r=this.getTimeSelection(),i=t||this.cursor,a=n-this.lastDraw;if(this.isPlaying()){var o=i+a;this.ee.emit("timeupdate",o),this.animationRequest=window.requestAnimationFrame((function(){e.updateEditor(o)})),this.playbackSeconds=o,this.draw(this.render()),this.lastDraw=n}else i+a>=(this.isSegmentSelection()?r.end:this.duration)&&this.ee.emit("finished"),this.stopAnimation(),this.resetDrawTimer=setTimeout((function(){e.pausedAt=void 0,e.lastSeeked=void 0,e.setState(e.getState()),e.playbackSeconds=0,e.draw(e.render())}),0)}},{key:"drawRequest",value:function(){var t=this;window.requestAnimationFrame((function(){t.draw(t.render())}))}},{key:"draw",value:function(t){var e=m()(this.tree,t);this.rootNode=k()(this.rootNode,e),this.tree=t,this.viewDuration=P(this.rootNode.clientWidth-this.controls.width,this.samplesPerPixel,this.sampleRate)}},{key:"getTrackRenderData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={height:this.waveHeight,resolution:this.samplesPerPixel,sampleRate:this.sampleRate,controls:this.controls,isActive:!1,timeSelection:this.getTimeSelection(),playlistLength:this.duration,playbackSeconds:this.playbackSeconds,colors:this.colors,barWidth:this.barWidth,barGap:this.barGap};return e()({},t,n)}},{key:"isActiveTrack",value:function(t){var e=this.getActiveTrack();return!this.isSegmentSelection()||e===t}},{key:"renderAnnotations",value:function(){return this.annotationList.render()}},{key:"renderTimeScale",value:function(){var t=this.controls.show?this.controls.width:0;return new N(this.duration,this.scrollLeft,this.samplesPerPixel,this.sampleRate,t,this.colors).render()}},{key:"renderTrackSection",value:function(){var t=this,e=this.tracks.map((function(e){var n=t.collapsedTracks.indexOf(e)>-1;return e.render(t.getTrackRenderData({isActive:t.isActiveTrack(e),shouldPlay:t.shouldTrackPlay(e),soloed:t.soloedTracks.indexOf(e)>-1,muted:t.mutedTracks.indexOf(e)>-1,collapsed:n,height:n?t.collapsedWaveHeight:t.waveHeight,barGap:t.barGap,barWidth:t.barWidth}))}));return v()("div.playlist-tracks",{attributes:{style:"overflow: auto;"},onscroll:function(e){t.scrollLeft=P(e.target.scrollLeft,t.samplesPerPixel,t.sampleRate),t.ee.emit("scroll")},hook:new D(this)},e)}},{key:"render",value:function(){var t=[];return this.showTimescale&&t.push(this.renderTimeScale()),t.push(this.renderTrackSection()),this.annotationList.length&&t.push(this.renderAnnotations()),v()("div.playlist",{attributes:{style:"overflow: hidden; position: relative;"}},t)}},{key:"getInfo",value:function(){var t=[];return this.tracks.forEach((function(e){t.push(e.getTrackDetails())})),{tracks:t,effects:this.effectsGraph}}}]),t}();function wt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s()();if(void 0===t.container)throw new Error("DOM element container must be given.");var r={samplesPerPixel:4096,mono:!0,fadeType:"logarithmic",exclSolo:!1,timescale:!1,controls:{show:!1,width:150,widgets:{muteOrSolo:!0,volume:!0,stereoPan:!0,collapse:!0,remove:!0}},colors:{waveOutlineColor:"white",timeColor:"grey",fadeColor:"black"},seekStyle:"line",waveHeight:128,collapsedWaveHeight:30,barWidth:1,barGap:0,state:"cursor",zoomLevels:[512,1024,2048,4096],annotationList:{annotations:[],controls:[],editable:!1,linkEndpoints:!1,isContinuousPlay:!1},isAutomaticScroll:!1},i=e()({},t,r),o=i.zoomLevels.indexOf(i.samplesPerPixel);if(-1===o)throw new Error("initial samplesPerPixel must be included in array zoomLevels");var u=new bt,c=i.ac||new AudioContext;u.setAudioContext(c),u.setSampleRate(i.sampleRate||c.sampleRate),u.setSamplesPerPixel(i.samplesPerPixel),u.setEventEmitter(n),u.setUpEventEmitter(),u.setTimeSelection(0,0),u.setState(i.state),u.setControlOptions(i.controls),u.setWaveHeight(i.waveHeight),u.setCollapsedWaveHeight(i.collapsedWaveHeight),u.setColors(i.colors),u.setZoomLevels(i.zoomLevels),u.setZoomIndex(o),u.setMono(i.mono),u.setExclSolo(i.exclSolo),u.setShowTimeScale(i.timescale),u.setSeekStyle(i.seekStyle),u.setAnnotations(i.annotationList),u.setBarGap(i.barGap),u.setBarWidth(i.barWidth),u.isAutomaticScroll=i.isAutomaticScroll,u.isContinuousPlay=i.isContinuousPlay,u.linkedEndpoints=i.linkedEndpoints,i.effects&&u.setEffects(i.effects);var l=u.render(),h=a()(l);return i.container.appendChild(h),u.tree=l,u.rootNode=h,u}function xt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s()();return wt(t,e)}})(),WaveformPlaylist=r})();
/*!
 * wavesurfer.js 6.6.4 (2023-06-10)
 * https://wavesurfer-js.org
 * @license BSD-3-Clause
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("WaveSurfer", [], factory);
	else if(typeof exports === 'object')
		exports["WaveSurfer"] = factory();
	else
		root["WaveSurfer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drawer.canvasentry.js":
/*!***********************************!*\
  !*** ./src/drawer.canvasentry.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _style = _interopRequireDefault(__webpack_require__(/*! ./util/style */ "./src/util/style.js"));
var _getId = _interopRequireDefault(__webpack_require__(/*! ./util/get-id */ "./src/util/get-id.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The `CanvasEntry` class represents an element consisting of a wave `canvas`
 * and an (optional) progress wave `canvas`.
 *
 * The `MultiCanvas` renderer uses one or more `CanvasEntry` instances to
 * render a waveform, depending on the zoom level.
 */
var CanvasEntry = /*#__PURE__*/function () {
  function CanvasEntry() {
    _classCallCheck(this, CanvasEntry);
    /**
     * The wave node
     *
     * @type {HTMLCanvasElement}
     */
    this.wave = null;
    /**
     * The wave canvas rendering context
     *
     * @type {CanvasRenderingContext2D}
     */
    this.waveCtx = null;
    /**
     * The (optional) progress wave node
     *
     * @type {HTMLCanvasElement}
     */
    this.progress = null;
    /**
     * The (optional) progress wave canvas rendering context
     *
     * @type {CanvasRenderingContext2D}
     */
    this.progressCtx = null;
    /**
     * Start of the area the canvas should render, between 0 and 1
     *
     * @type {number}
     */
    this.start = 0;
    /**
     * End of the area the canvas should render, between 0 and 1
     *
     * @type {number}
     */
    this.end = 1;
    /**
     * Unique identifier for this entry
     *
     * @type {string}
     */
    this.id = (0, _getId.default)(typeof this.constructor.name !== 'undefined' ? this.constructor.name.toLowerCase() + '_' : 'canvasentry_');
    /**
     * Canvas 2d context attributes
     *
     * @type {object}
     */
    this.canvasContextAttributes = {};
  }

  /**
   * Store the wave canvas element and create the 2D rendering context
   *
   * @param {HTMLCanvasElement} element The wave `canvas` element.
   */
  _createClass(CanvasEntry, [{
    key: "initWave",
    value: function initWave(element) {
      this.wave = element;
      this.waveCtx = this.wave.getContext('2d', this.canvasContextAttributes);
    }

    /**
     * Store the progress wave canvas element and create the 2D rendering
     * context
     *
     * @param {HTMLCanvasElement} element The progress wave `canvas` element.
     */
  }, {
    key: "initProgress",
    value: function initProgress(element) {
      this.progress = element;
      this.progressCtx = this.progress.getContext('2d', this.canvasContextAttributes);
    }

    /**
     * Update the dimensions
     *
     * @param {number} elementWidth Width of the entry
     * @param {number} totalWidth Total width of the multi canvas renderer
     * @param {number} width The new width of the element
     * @param {number} height The new height of the element
     */
  }, {
    key: "updateDimensions",
    value: function updateDimensions(elementWidth, totalWidth, width, height) {
      // where the canvas starts and ends in the waveform, represented as a
      // decimal between 0 and 1
      this.start = this.wave.offsetLeft / totalWidth || 0;
      this.end = this.start + elementWidth / totalWidth;

      // set wave canvas dimensions
      this.wave.width = width;
      this.wave.height = height;
      var elementSize = {
        width: elementWidth + 'px'
      };
      (0, _style.default)(this.wave, elementSize);
      if (this.hasProgressCanvas) {
        // set progress canvas dimensions
        this.progress.width = width;
        this.progress.height = height;
        (0, _style.default)(this.progress, elementSize);
      }
    }

    /**
     * Clear the wave and progress rendering contexts
     */
  }, {
    key: "clearWave",
    value: function clearWave() {
      // wave
      this.waveCtx.clearRect(0, 0, this.waveCtx.canvas.width, this.waveCtx.canvas.height);

      // progress
      if (this.hasProgressCanvas) {
        this.progressCtx.clearRect(0, 0, this.progressCtx.canvas.width, this.progressCtx.canvas.height);
      }
    }

    /**
     * Set the fill styles for wave and progress
     * @param {string|string[]} waveColor Fill color for the wave canvas,
     * or an array of colors to apply as a gradient
     * @param {?string|string[]} progressColor Fill color for the progress canvas,
     * or an array of colors to apply as a gradient
     */
  }, {
    key: "setFillStyles",
    value: function setFillStyles(waveColor, progressColor) {
      this.waveCtx.fillStyle = this.getFillStyle(this.waveCtx, waveColor);
      if (this.hasProgressCanvas) {
        this.progressCtx.fillStyle = this.getFillStyle(this.progressCtx, progressColor);
      }
    }

    /**
     * Utility function to handle wave color arguments
     *
     * When the color argument type is a string or CanvasGradient instance,
     * it will be returned as is. Otherwise, it will be treated as an array,
     * and a new CanvasGradient will be returned
     *
     * @since 6.0.0
     * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
     * @param {string|string[]|CanvasGradient} color Either a single fill color
     *     for the wave canvas, an existing CanvasGradient instance, or an array
     *     of colors to apply as a gradient
     * @returns {string|CanvasGradient} Returns a string fillstyle value, or a
     *     canvas gradient
     */
  }, {
    key: "getFillStyle",
    value: function getFillStyle(ctx, color) {
      if (typeof color == 'string' || color instanceof CanvasGradient) {
        return color;
      }
      var waveGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      color.forEach(function (value, index) {
        return waveGradient.addColorStop(index / color.length, value);
      });
      return waveGradient;
    }

    /**
     * Set the canvas transforms for wave and progress
     *
     * @param {boolean} vertical Whether to render vertically
     */
  }, {
    key: "applyCanvasTransforms",
    value: function applyCanvasTransforms(vertical) {
      if (vertical) {
        // Reflect the waveform across the line y = -x
        this.waveCtx.setTransform(0, 1, 1, 0, 0, 0);
        if (this.hasProgressCanvas) {
          this.progressCtx.setTransform(0, 1, 1, 0, 0, 0);
        }
      }
    }

    /**
     * Draw a rectangle for wave and progress
     *
     * @param {number} x X start position
     * @param {number} y Y start position
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     */
  }, {
    key: "fillRects",
    value: function fillRects(x, y, width, height, radius) {
      this.fillRectToContext(this.waveCtx, x, y, width, height, radius);
      if (this.hasProgressCanvas) {
        this.fillRectToContext(this.progressCtx, x, y, width, height, radius);
      }
    }

    /**
     * Draw the actual rectangle on a `canvas` element
     *
     * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
     * @param {number} x X start position
     * @param {number} y Y start position
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     */
  }, {
    key: "fillRectToContext",
    value: function fillRectToContext(ctx, x, y, width, height, radius) {
      if (!ctx) {
        return;
      }
      if (radius) {
        this.drawRoundedRect(ctx, x, y, width, height, radius);
      } else {
        ctx.fillRect(x, y, width, height);
      }
    }

    /**
     * Draw a rounded rectangle on Canvas
     *
     * @param {CanvasRenderingContext2D} ctx Canvas context
     * @param {number} x X-position of the rectangle
     * @param {number} y Y-position of the rectangle
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     *
     * @return {void}
     * @example drawRoundedRect(ctx, 50, 50, 5, 10, 3)
     */
  }, {
    key: "drawRoundedRect",
    value: function drawRoundedRect(ctx, x, y, width, height, radius) {
      if (height === 0) {
        return;
      }
      // peaks are float values from -1 to 1. Use absolute height values in
      // order to correctly calculate rounded rectangle coordinates
      if (height < 0) {
        height *= -1;
        y -= height;
      }
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();
    }

    /**
     * Render the actual wave and progress lines
     *
     * @param {number[]} peaks Array with peaks data
     * @param {number} absmax Maximum peak value (absolute)
     * @param {number} halfH Half the height of the waveform
     * @param {number} offsetY Offset to the top
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that
     * should be rendered
     */
  }, {
    key: "drawLines",
    value: function drawLines(peaks, absmax, halfH, offsetY, start, end) {
      this.drawLineToContext(this.waveCtx, peaks, absmax, halfH, offsetY, start, end);
      if (this.hasProgressCanvas) {
        this.drawLineToContext(this.progressCtx, peaks, absmax, halfH, offsetY, start, end);
      }
    }

    /**
     * Render the actual waveform line on a `canvas` element
     *
     * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
     * @param {number[]} peaks Array with peaks data
     * @param {number} absmax Maximum peak value (absolute)
     * @param {number} halfH Half the height of the waveform
     * @param {number} offsetY Offset to the top
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that
     * should be rendered
     */
  }, {
    key: "drawLineToContext",
    value: function drawLineToContext(ctx, peaks, absmax, halfH, offsetY, start, end) {
      if (!ctx) {
        return;
      }
      var length = peaks.length / 2;
      var first = Math.round(length * this.start);

      // use one more peak value to make sure we join peaks at ends -- unless,
      // of course, this is the last canvas
      var last = Math.round(length * this.end) + 1;
      var canvasStart = first;
      var canvasEnd = last;
      var scale = this.wave.width / (canvasEnd - canvasStart - 1);

      // optimization
      var halfOffset = halfH + offsetY;
      var absmaxHalf = absmax / halfH;
      ctx.beginPath();
      ctx.moveTo((canvasStart - first) * scale, halfOffset);
      ctx.lineTo((canvasStart - first) * scale, halfOffset - Math.round((peaks[2 * canvasStart] || 0) / absmaxHalf));
      var i, peak, h;
      for (i = canvasStart; i < canvasEnd; i++) {
        peak = peaks[2 * i] || 0;
        h = Math.round(peak / absmaxHalf);
        ctx.lineTo((i - first) * scale + this.halfPixel, halfOffset - h);
      }

      // draw the bottom edge going backwards, to make a single
      // closed hull to fill
      var j = canvasEnd - 1;
      for (j; j >= canvasStart; j--) {
        peak = peaks[2 * j + 1] || 0;
        h = Math.round(peak / absmaxHalf);
        ctx.lineTo((j - first) * scale + this.halfPixel, halfOffset - h);
      }
      ctx.lineTo((canvasStart - first) * scale, halfOffset - Math.round((peaks[2 * canvasStart + 1] || 0) / absmaxHalf));
      ctx.closePath();
      ctx.fill();
    }

    /**
     * Destroys this entry
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.waveCtx = null;
      this.wave = null;
      this.progressCtx = null;
      this.progress = null;
    }

    /**
     * Return image data of the wave `canvas` element
     *
     * When using a `type` of `'blob'`, this will return a `Promise` that
     * resolves with a `Blob` instance.
     *
     * @param {string} format='image/png' An optional value of a format type.
     * @param {number} quality=0.92 An optional value between 0 and 1.
     * @param {string} type='dataURL' Either 'dataURL' or 'blob'.
     * @return {string|Promise} When using the default `'dataURL'` `type` this
     * returns a data URL. When using the `'blob'` `type` this returns a
     * `Promise` that resolves with a `Blob` instance.
     */
  }, {
    key: "getImage",
    value: function getImage(format, quality, type) {
      var _this = this;
      if (type === 'blob') {
        return new Promise(function (resolve) {
          _this.wave.toBlob(resolve, format, quality);
        });
      } else if (type === 'dataURL') {
        return this.wave.toDataURL(format, quality);
      }
    }
  }]);
  return CanvasEntry;
}();
exports["default"] = CanvasEntry;
module.exports = exports.default;

/***/ }),

/***/ "./src/drawer.js":
/*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Parent class for renderers
 *
 * @extends {Observer}
 */
var Drawer = /*#__PURE__*/function (_util$Observer) {
  _inherits(Drawer, _util$Observer);
  var _super = _createSuper(Drawer);
  /**
   * @param {HTMLElement} container The container node of the wavesurfer instance
   * @param {WavesurferParams} params The wavesurfer initialisation options
   */
  function Drawer(container, params) {
    var _this;
    _classCallCheck(this, Drawer);
    _this = _super.call(this);
    _this.container = util.withOrientation(container, params.vertical);
    /**
     * @type {WavesurferParams}
     */
    _this.params = params;
    /**
     * The width of the renderer
     * @type {number}
     */
    _this.width = 0;
    /**
     * The height of the renderer
     * @type {number}
     */
    _this.height = params.height * _this.params.pixelRatio;
    _this.lastPos = 0;
    /**
     * The `<wave>` element which is added to the container
     * @type {HTMLElement}
     */
    _this.wrapper = null;
    return _this;
  }

  /**
   * Alias of `util.style`
   *
   * @param {HTMLElement} el The element that the styles will be applied to
   * @param {Object} styles The map of propName: attribute, both are used as-is
   * @return {HTMLElement} el
   */
  _createClass(Drawer, [{
    key: "style",
    value: function style(el, styles) {
      return util.style(el, styles);
    }

    /**
     * Create the wrapper `<wave>` element, style it and set up the events for
     * interaction
     */
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      this.wrapper = util.withOrientation(this.container.appendChild(document.createElement('wave')), this.params.vertical);
      this.style(this.wrapper, {
        display: 'block',
        position: 'relative',
        userSelect: 'none',
        webkitUserSelect: 'none',
        height: this.params.height + 'px'
      });
      if (this.params.fillParent || this.params.scrollParent) {
        this.style(this.wrapper, {
          width: '100%',
          cursor: this.params.hideCursor ? 'none' : 'auto',
          overflowX: this.params.hideScrollbar ? 'hidden' : 'auto',
          overflowY: 'hidden'
        });
      }
      this.setupWrapperEvents();
    }

    /**
     * Handle click event
     *
     * @param {Event} e Click event
     * @param {?boolean} noPrevent Set to true to not call `e.preventDefault()`
     * @return {number} Playback position from 0 to 1
     */
  }, {
    key: "handleEvent",
    value: function handleEvent(e, noPrevent) {
      !noPrevent && e.preventDefault();
      var clientX = util.withOrientation(e.targetTouches ? e.targetTouches[0] : e, this.params.vertical).clientX;
      var bbox = this.wrapper.getBoundingClientRect();
      var nominalWidth = this.width;
      var parentWidth = this.getWidth();
      var progressPixels = this.getProgressPixels(bbox, clientX);
      var progress;
      if (!this.params.fillParent && nominalWidth < parentWidth) {
        progress = progressPixels * (this.params.pixelRatio / nominalWidth) || 0;
      } else {
        progress = (progressPixels + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0;
      }
      return util.clamp(progress, 0, 1);
    }
  }, {
    key: "getProgressPixels",
    value: function getProgressPixels(wrapperBbox, clientX) {
      if (this.params.rtl) {
        return wrapperBbox.right - clientX;
      } else {
        return clientX - wrapperBbox.left;
      }
    }
  }, {
    key: "setupWrapperEvents",
    value: function setupWrapperEvents() {
      var _this2 = this;
      this.wrapper.addEventListener('click', function (e) {
        var orientedEvent = util.withOrientation(e, _this2.params.vertical);
        var scrollbarHeight = _this2.wrapper.offsetHeight - _this2.wrapper.clientHeight;
        if (scrollbarHeight !== 0) {
          // scrollbar is visible.  Check if click was on it
          var bbox = _this2.wrapper.getBoundingClientRect();
          if (orientedEvent.clientY >= bbox.bottom - scrollbarHeight) {
            // ignore mousedown as it was on the scrollbar
            return;
          }
        }
        if (_this2.params.interact) {
          _this2.fireEvent('click', e, _this2.handleEvent(e));
        }
      });
      this.wrapper.addEventListener('dblclick', function (e) {
        if (_this2.params.interact) {
          _this2.fireEvent('dblclick', e, _this2.handleEvent(e));
        }
      });
      this.wrapper.addEventListener('scroll', function (e) {
        return _this2.fireEvent('scroll', e);
      });
    }

    /**
     * Draw peaks on the canvas
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
     * for split channel rendering
     * @param {number} length The width of the area that should be drawn
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     */
  }, {
    key: "drawPeaks",
    value: function drawPeaks(peaks, length, start, end) {
      if (!this.setWidth(length)) {
        this.clearWave();
      }
      this.params.barWidth ? this.drawBars(peaks, 0, start, end) : this.drawWave(peaks, 0, start, end);
    }

    /**
     * Scroll to the beginning
     */
  }, {
    key: "resetScroll",
    value: function resetScroll() {
      if (this.wrapper !== null) {
        this.wrapper.scrollLeft = 0;
      }
    }

    /**
     * Recenter the view-port at a certain percent of the waveform
     *
     * @param {number} percent Value from 0 to 1 on the waveform
     */
  }, {
    key: "recenter",
    value: function recenter(percent) {
      var position = this.wrapper.scrollWidth * percent;
      this.recenterOnPosition(position, true);
    }

    /**
     * Recenter the view-port on a position, either scroll there immediately or
     * in steps of 5 pixels
     *
     * @param {number} position X-offset in pixels
     * @param {boolean} immediate Set to true to immediately scroll somewhere
     */
  }, {
    key: "recenterOnPosition",
    value: function recenterOnPosition(position, immediate) {
      var scrollLeft = this.wrapper.scrollLeft;
      var half = ~~(this.wrapper.clientWidth / 2);
      var maxScroll = this.wrapper.scrollWidth - this.wrapper.clientWidth;
      var target = position - half;
      var offset = target - scrollLeft;
      if (maxScroll == 0) {
        // no need to continue if scrollbar is not there
        return;
      }

      // if the cursor is currently visible...
      if (!immediate && -half <= offset && offset < half) {
        // set rate at which waveform is centered
        var rate = this.params.autoCenterRate;

        // make rate depend on width of view and length of waveform
        rate /= half;
        rate *= maxScroll;
        offset = Math.max(-rate, Math.min(rate, offset));
        target = scrollLeft + offset;
      }

      // limit target to valid range (0 to maxScroll)
      target = Math.max(0, Math.min(maxScroll, target));
      // no use attempting to scroll if we're not moving
      if (target != scrollLeft) {
        this.wrapper.scrollLeft = target;
      }
    }

    /**
     * Get the current scroll position in pixels
     *
     * @return {number} Horizontal scroll position in pixels
     */
  }, {
    key: "getScrollX",
    value: function getScrollX() {
      var x = 0;
      if (this.wrapper) {
        var pixelRatio = this.params.pixelRatio;
        x = Math.round(this.wrapper.scrollLeft * pixelRatio);

        // In cases of elastic scroll (safari with mouse wheel) you can
        // scroll beyond the limits of the container
        // Calculate and floor the scrollable extent to make sure an out
        // of bounds value is not returned
        // Ticket #1312
        if (this.params.scrollParent) {
          var maxScroll = ~~(this.wrapper.scrollWidth * pixelRatio - this.getWidth());
          x = Math.min(maxScroll, Math.max(0, x));
        }
      }
      return x;
    }

    /**
     * Get the width of the container
     *
     * @return {number} The width of the container
     */
  }, {
    key: "getWidth",
    value: function getWidth() {
      return Math.round(this.container.clientWidth * this.params.pixelRatio);
    }

    /**
     * Set the width of the container
     *
     * @param {number} width The new width of the container
     * @return {boolean} Whether the width of the container was updated or not
     */
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      if (this.width == width) {
        return false;
      }
      this.width = width;
      if (this.params.fillParent || this.params.scrollParent) {
        this.style(this.wrapper, {
          width: ''
        });
      } else {
        var newWidth = ~~(this.width / this.params.pixelRatio) + 'px';
        this.style(this.wrapper, {
          width: newWidth
        });
      }
      this.updateSize();
      return true;
    }

    /**
     * Set the height of the container
     *
     * @param {number} height The new height of the container.
     * @return {boolean} Whether the height of the container was updated or not
     */
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      if (height == this.height) {
        return false;
      }
      this.height = height;
      this.style(this.wrapper, {
        height: ~~(this.height / this.params.pixelRatio) + 'px'
      });
      this.updateSize();
      return true;
    }

    /**
     * Called by wavesurfer when progress should be rendered
     *
     * @param {number} progress From 0 to 1
     */
  }, {
    key: "progress",
    value: function progress(_progress) {
      var minPxDelta = 1 / this.params.pixelRatio;
      var pos = Math.round(_progress * this.width) * minPxDelta;
      if (pos < this.lastPos || pos - this.lastPos >= minPxDelta) {
        this.lastPos = pos;
        if (this.params.scrollParent && this.params.autoCenter) {
          var newPos = ~~(this.wrapper.scrollWidth * _progress);
          this.recenterOnPosition(newPos, this.params.autoCenterImmediately);
        }
        this.updateProgress(pos);
      }
    }

    /**
     * This is called when wavesurfer is destroyed
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.unAll();
      if (this.wrapper) {
        if (this.wrapper.parentNode == this.container.domElement) {
          this.container.removeChild(this.wrapper.domElement);
        }
        this.wrapper = null;
      }
    }

    /* Renderer-specific methods */

    /**
     * Called after cursor related params have changed.
     *
     * @abstract
     */
  }, {
    key: "updateCursor",
    value: function updateCursor() {}

    /**
     * Called when the size of the container changes so the renderer can adjust
     *
     * @abstract
     */
  }, {
    key: "updateSize",
    value: function updateSize() {}

    /**
     * Draw a waveform with bars
     *
     * @abstract
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for split channel
     * rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     */
  }, {
    key: "drawBars",
    value: function drawBars(peaks, channelIndex, start, end) {}

    /**
     * Draw a waveform
     *
     * @abstract
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for split channel
     * rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     */
  }, {
    key: "drawWave",
    value: function drawWave(peaks, channelIndex, start, end) {}

    /**
     * Clear the waveform
     *
     * @abstract
     */
  }, {
    key: "clearWave",
    value: function clearWave() {}

    /**
     * Render the new progress
     *
     * @abstract
     * @param {number} position X-Offset of progress position in pixels
     */
  }, {
    key: "updateProgress",
    value: function updateProgress(position) {}
  }]);
  return Drawer;
}(util.Observer);
exports["default"] = Drawer;
module.exports = exports.default;

/***/ }),

/***/ "./src/drawer.multicanvas.js":
/*!***********************************!*\
  !*** ./src/drawer.multicanvas.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _drawer = _interopRequireDefault(__webpack_require__(/*! ./drawer */ "./src/drawer.js"));
var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
var _drawer2 = _interopRequireDefault(__webpack_require__(/*! ./drawer.canvasentry */ "./src/drawer.canvasentry.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * MultiCanvas renderer for wavesurfer. Is currently the default and sole
 * builtin renderer.
 *
 * A `MultiCanvas` consists of one or more `CanvasEntry` instances, depending
 * on the zoom level.
 */
var MultiCanvas = /*#__PURE__*/function (_Drawer) {
  _inherits(MultiCanvas, _Drawer);
  var _super = _createSuper(MultiCanvas);
  /**
   * @param {HTMLElement} container The container node of the wavesurfer instance
   * @param {WavesurferParams} params The wavesurfer initialisation options
   */
  function MultiCanvas(container, params) {
    var _this;
    _classCallCheck(this, MultiCanvas);
    _this = _super.call(this, container, params);

    /**
     * @type {number}
     */
    _this.maxCanvasWidth = params.maxCanvasWidth;

    /**
     * @type {number}
     */
    _this.maxCanvasElementWidth = Math.round(params.maxCanvasWidth / params.pixelRatio);

    /**
     * Whether or not the progress wave is rendered. If the `waveColor`
     * and `progressColor` are the same color it is not.
     *
     * @type {boolean}
     */
    _this.hasProgressCanvas = params.waveColor != params.progressColor;

    /**
     * @type {number}
     */
    _this.halfPixel = 0.5 / params.pixelRatio;

    /**
     * List of `CanvasEntry` instances.
     *
     * @type {Array}
     */
    _this.canvases = [];

    /**
     * @type {HTMLElement}
     */
    _this.progressWave = null;

    /**
     * Class used to generate entries.
     *
     * @type {function}
     */
    _this.EntryClass = _drawer2.default;

    /**
     * Canvas 2d context attributes.
     *
     * @type {object}
     */
    _this.canvasContextAttributes = params.drawingContextAttributes;

    /**
     * Overlap added between entries to prevent vertical white stripes
     * between `canvas` elements.
     *
     * @type {number}
     */
    _this.overlap = 2 * Math.ceil(params.pixelRatio / 2);

    /**
     * The radius of the wave bars. Makes bars rounded
     *
     * @type {number}
     */
    _this.barRadius = params.barRadius || 0;

    /**
     * Whether to render the waveform vertically. Defaults to false.
     *
     * @type {boolean}
     */
    _this.vertical = params.vertical;
    return _this;
  }

  /**
   * Initialize the drawer
   */
  _createClass(MultiCanvas, [{
    key: "init",
    value: function init() {
      this.createWrapper();
      this.createElements();
    }

    /**
     * Create the canvas elements and style them
     *
     */
  }, {
    key: "createElements",
    value: function createElements() {
      this.progressWave = util.withOrientation(this.wrapper.appendChild(document.createElement('wave')), this.params.vertical);
      this.style(this.progressWave, {
        position: 'absolute',
        zIndex: 3,
        left: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden',
        width: '0',
        display: 'none',
        boxSizing: 'border-box',
        borderRightStyle: 'solid',
        pointerEvents: 'none'
      });
      this.addCanvas();
      this.updateCursor();
    }

    /**
     * Update cursor style
     */
  }, {
    key: "updateCursor",
    value: function updateCursor() {
      this.style(this.progressWave, {
        borderRightWidth: this.params.cursorWidth + 'px',
        borderRightColor: this.params.cursorColor
      });
    }

    /**
     * Adjust to the updated size by adding or removing canvases
     */
  }, {
    key: "updateSize",
    value: function updateSize() {
      var _this2 = this;
      var totalWidth = Math.round(this.width / this.params.pixelRatio);
      var requiredCanvases = Math.ceil(totalWidth / (this.maxCanvasElementWidth + this.overlap));

      // add required canvases
      while (this.canvases.length < requiredCanvases) {
        this.addCanvas();
      }

      // remove older existing canvases, if any
      while (this.canvases.length > requiredCanvases) {
        this.removeCanvas();
      }
      var canvasWidth = this.maxCanvasWidth + this.overlap;
      var lastCanvas = this.canvases.length - 1;
      this.canvases.forEach(function (entry, i) {
        if (i == lastCanvas) {
          canvasWidth = _this2.width - _this2.maxCanvasWidth * lastCanvas;
        }
        _this2.updateDimensions(entry, canvasWidth, _this2.height);
        entry.clearWave();
      });
    }

    /**
     * Add a canvas to the canvas list
     *
     */
  }, {
    key: "addCanvas",
    value: function addCanvas() {
      var entry = new this.EntryClass();
      entry.canvasContextAttributes = this.canvasContextAttributes;
      entry.hasProgressCanvas = this.hasProgressCanvas;
      entry.halfPixel = this.halfPixel;
      var leftOffset = this.maxCanvasElementWidth * this.canvases.length;

      // wave
      var wave = util.withOrientation(this.wrapper.appendChild(document.createElement('canvas')), this.params.vertical);
      this.style(wave, {
        position: 'absolute',
        zIndex: 2,
        left: leftOffset + 'px',
        top: 0,
        bottom: 0,
        height: '100%',
        pointerEvents: 'none'
      });
      entry.initWave(wave);

      // progress
      if (this.hasProgressCanvas) {
        var progress = util.withOrientation(this.progressWave.appendChild(document.createElement('canvas')), this.params.vertical);
        this.style(progress, {
          position: 'absolute',
          left: leftOffset + 'px',
          top: 0,
          bottom: 0,
          height: '100%'
        });
        entry.initProgress(progress);
      }
      this.canvases.push(entry);
    }

    /**
     * Pop single canvas from the list
     *
     */
  }, {
    key: "removeCanvas",
    value: function removeCanvas() {
      var lastEntry = this.canvases[this.canvases.length - 1];

      // wave
      lastEntry.wave.parentElement.removeChild(lastEntry.wave.domElement);

      // progress
      if (this.hasProgressCanvas) {
        lastEntry.progress.parentElement.removeChild(lastEntry.progress.domElement);
      }

      // cleanup
      if (lastEntry) {
        lastEntry.destroy();
        lastEntry = null;
      }
      this.canvases.pop();
    }

    /**
     * Update the dimensions of a canvas element
     *
     * @param {CanvasEntry} entry Target entry
     * @param {number} width The new width of the element
     * @param {number} height The new height of the element
     */
  }, {
    key: "updateDimensions",
    value: function updateDimensions(entry, width, height) {
      var elementWidth = Math.round(width / this.params.pixelRatio);
      var totalWidth = Math.round(this.width / this.params.pixelRatio);

      // update canvas dimensions
      entry.updateDimensions(elementWidth, totalWidth, width, height);

      // style element
      this.style(this.progressWave, {
        display: 'block'
      });
    }

    /**
     * Clear the whole multi-canvas
     */
  }, {
    key: "clearWave",
    value: function clearWave() {
      var _this3 = this;
      util.frame(function () {
        _this3.canvases.forEach(function (entry) {
          return entry.clearWave();
        });
      })();
    }

    /**
     * Draw a waveform with bars
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
     * for split channel rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0. Must be an integer.
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     * @returns {void}
     */
  }, {
    key: "drawBars",
    value: function drawBars(peaks, channelIndex, start, end) {
      var _this4 = this;
      return this.prepareDraw(peaks, channelIndex, start, end, function (_ref) {
        var absmax = _ref.absmax,
          hasMinVals = _ref.hasMinVals,
          height = _ref.height,
          offsetY = _ref.offsetY,
          halfH = _ref.halfH,
          peaks = _ref.peaks,
          ch = _ref.channelIndex;
        // if drawBars was called within ws.empty we don't pass a start and
        // don't want anything to happen
        if (start === undefined) {
          return;
        }
        // Skip every other value if there are negatives.
        var peakIndexScale = hasMinVals ? 2 : 1;
        var length = peaks.length / peakIndexScale;
        var bar = _this4.params.barWidth * _this4.params.pixelRatio;
        var gap = _this4.params.barGap === null ? Math.max(_this4.params.pixelRatio, ~~(bar / 2)) : Math.max(_this4.params.pixelRatio, _this4.params.barGap * _this4.params.pixelRatio);
        var step = bar + gap;
        var scale = length / _this4.width;
        var first = start;
        var last = end;
        var peakIndex = first;
        for (peakIndex; peakIndex < last; peakIndex += step) {
          // search for the highest peak in the range this bar falls into
          var peak = 0;
          var peakIndexRange = Math.floor(peakIndex * scale) * peakIndexScale; // start index
          var peakIndexEnd = Math.floor((peakIndex + step) * scale) * peakIndexScale;
          do {
            // do..while makes sure at least one peak is always evaluated
            var newPeak = Math.abs(peaks[peakIndexRange]); // for arrays starting with negative values
            if (newPeak > peak) {
              peak = newPeak; // higher
            }

            peakIndexRange += peakIndexScale; // skip every other value for negatives
          } while (peakIndexRange < peakIndexEnd);

          // calculate the height of this bar according to the highest peak found
          var h = Math.round(peak / absmax * halfH);

          // raise the bar height to the specified minimum height
          // Math.max is used to replace any value smaller than barMinHeight (not just 0) with barMinHeight
          if (_this4.params.barMinHeight) {
            h = Math.max(h, _this4.params.barMinHeight);
          }
          _this4.fillRect(peakIndex + _this4.halfPixel, halfH - h + offsetY, bar + _this4.halfPixel, h * 2, _this4.barRadius, ch);
        }
      });
    }

    /**
     * Draw a waveform
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
     * for split channel rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number?} start The x-offset of the beginning of the area that
     * should be rendered (If this isn't set only a flat line is rendered)
     * @param {number?} end The x-offset of the end of the area that should be
     * rendered
     * @returns {void}
     */
  }, {
    key: "drawWave",
    value: function drawWave(peaks, channelIndex, start, end) {
      var _this5 = this;
      return this.prepareDraw(peaks, channelIndex, start, end, function (_ref2) {
        var absmax = _ref2.absmax,
          hasMinVals = _ref2.hasMinVals,
          height = _ref2.height,
          offsetY = _ref2.offsetY,
          halfH = _ref2.halfH,
          peaks = _ref2.peaks,
          channelIndex = _ref2.channelIndex;
        if (!hasMinVals) {
          var reflectedPeaks = [];
          var len = peaks.length;
          var i = 0;
          for (i; i < len; i++) {
            reflectedPeaks[2 * i] = peaks[i];
            reflectedPeaks[2 * i + 1] = -peaks[i];
          }
          peaks = reflectedPeaks;
        }

        // if drawWave was called within ws.empty we don't pass a start and
        // end and simply want a flat line
        if (start !== undefined) {
          _this5.drawLine(peaks, absmax, halfH, offsetY, start, end, channelIndex);
        }

        // always draw a median line
        _this5.fillRect(0, halfH + offsetY - _this5.halfPixel, _this5.width, _this5.halfPixel, _this5.barRadius, channelIndex);
      });
    }

    /**
     * Tell the canvas entries to render their portion of the waveform
     *
     * @param {number[]} peaks Peaks data
     * @param {number} absmax Maximum peak value (absolute)
     * @param {number} halfH Half the height of the waveform
     * @param {number} offsetY Offset to the top
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that
     * should be rendered
     * @param {channelIndex} channelIndex The channel index of the line drawn
     */
  }, {
    key: "drawLine",
    value: function drawLine(peaks, absmax, halfH, offsetY, start, end, channelIndex) {
      var _this6 = this;
      var _ref3 = this.params.splitChannelsOptions.channelColors[channelIndex] || {},
        waveColor = _ref3.waveColor,
        progressColor = _ref3.progressColor;
      this.canvases.forEach(function (entry, i) {
        _this6.setFillStyles(entry, waveColor, progressColor);
        _this6.applyCanvasTransforms(entry, _this6.params.vertical);
        entry.drawLines(peaks, absmax, halfH, offsetY, start, end);
      });
    }

    /**
     * Draw a rectangle on the multi-canvas
     *
     * @param {number} x X-position of the rectangle
     * @param {number} y Y-position of the rectangle
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     * @param {channelIndex} channelIndex The channel index of the bar drawn
     */
  }, {
    key: "fillRect",
    value: function fillRect(x, y, width, height, radius, channelIndex) {
      var startCanvas = Math.floor(x / this.maxCanvasWidth);
      var endCanvas = Math.min(Math.ceil((x + width) / this.maxCanvasWidth) + 1, this.canvases.length);
      var i = startCanvas;
      for (i; i < endCanvas; i++) {
        var entry = this.canvases[i];
        var leftOffset = i * this.maxCanvasWidth;
        var intersection = {
          x1: Math.max(x, i * this.maxCanvasWidth),
          y1: y,
          x2: Math.min(x + width, i * this.maxCanvasWidth + entry.wave.width),
          y2: y + height
        };
        if (intersection.x1 < intersection.x2) {
          var _ref4 = this.params.splitChannelsOptions.channelColors[channelIndex] || {},
            waveColor = _ref4.waveColor,
            progressColor = _ref4.progressColor;
          this.setFillStyles(entry, waveColor, progressColor);
          this.applyCanvasTransforms(entry, this.params.vertical);
          entry.fillRects(intersection.x1 - leftOffset, intersection.y1, intersection.x2 - intersection.x1, intersection.y2 - intersection.y1, radius);
        }
      }
    }

    /**
     * Returns whether to hide the channel from being drawn based on params.
     *
     * @param {number} channelIndex The index of the current channel.
     * @returns {bool} True to hide the channel, false to draw.
     */
  }, {
    key: "hideChannel",
    value: function hideChannel(channelIndex) {
      return this.params.splitChannels && this.params.splitChannelsOptions.filterChannels.includes(channelIndex);
    }

    /**
     * Performs preparation tasks and calculations which are shared by `drawBars`
     * and `drawWave`
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for
     * split channel rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number?} start The x-offset of the beginning of the area that
     * should be rendered. If this isn't set only a flat line is rendered
     * @param {number?} end The x-offset of the end of the area that should be
     * rendered
     * @param {function} fn The render function to call, e.g. `drawWave`
     * @param {number} drawIndex The index of the current channel after filtering.
     * @param {number?} normalizedMax Maximum modulation value across channels for use with relativeNormalization. Ignored when undefined
     * @returns {void}
     */
  }, {
    key: "prepareDraw",
    value: function prepareDraw(peaks, channelIndex, start, end, fn, drawIndex, normalizedMax) {
      var _this7 = this;
      return util.frame(function () {
        // Split channels and call this function with the channelIndex set
        if (peaks[0] instanceof Array) {
          var channels = peaks;
          if (_this7.params.splitChannels) {
            var filteredChannels = channels.filter(function (c, i) {
              return !_this7.hideChannel(i);
            });
            if (!_this7.params.splitChannelsOptions.overlay) {
              _this7.setHeight(Math.max(filteredChannels.length, 1) * _this7.params.height * _this7.params.pixelRatio);
            }
            var overallAbsMax;
            if (_this7.params.splitChannelsOptions && _this7.params.splitChannelsOptions.relativeNormalization) {
              // calculate maximum peak across channels to use for normalization
              overallAbsMax = util.max(channels.map(function (channelPeaks) {
                return util.absMax(channelPeaks);
              }));
            }
            return channels.forEach(function (channelPeaks, i) {
              return _this7.prepareDraw(channelPeaks, i, start, end, fn, filteredChannels.indexOf(channelPeaks), overallAbsMax);
            });
          }
          peaks = channels[0];
        }

        // Return and do not draw channel peaks if hidden.
        if (_this7.hideChannel(channelIndex)) {
          return;
        }

        // calculate maximum modulation value, either from the barHeight
        // parameter or if normalize=true from the largest value in the peak
        // set
        var absmax = 1 / _this7.params.barHeight;
        if (_this7.params.normalize) {
          absmax = normalizedMax === undefined ? util.absMax(peaks) : normalizedMax;
        }

        // Bar wave draws the bottom only as a reflection of the top,
        // so we don't need negative values
        var hasMinVals = [].some.call(peaks, function (val) {
          return val < 0;
        });
        var height = _this7.params.height * _this7.params.pixelRatio;
        var halfH = height / 2;
        var offsetY = height * drawIndex || 0;

        // Override offsetY if overlay is true
        if (_this7.params.splitChannelsOptions && _this7.params.splitChannelsOptions.overlay) {
          offsetY = 0;
        }
        return fn({
          absmax: absmax,
          hasMinVals: hasMinVals,
          height: height,
          offsetY: offsetY,
          halfH: halfH,
          peaks: peaks,
          channelIndex: channelIndex
        });
      })();
    }

    /**
     * Set the fill styles for a certain entry (wave and progress)
     *
     * @param {CanvasEntry} entry Target entry
     * @param {string} waveColor Wave color to draw this entry
     * @param {string} progressColor Progress color to draw this entry
     */
  }, {
    key: "setFillStyles",
    value: function setFillStyles(entry) {
      var waveColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.waveColor;
      var progressColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.params.progressColor;
      entry.setFillStyles(waveColor, progressColor);
    }

    /**
     * Set the canvas transforms for a certain entry (wave and progress)
     *
     * @param {CanvasEntry} entry Target entry
     * @param {boolean} vertical Whether to render the waveform vertically
     */
  }, {
    key: "applyCanvasTransforms",
    value: function applyCanvasTransforms(entry) {
      var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      entry.applyCanvasTransforms(vertical);
    }

    /**
     * Return image data of the multi-canvas
     *
     * When using a `type` of `'blob'`, this will return a `Promise`.
     *
     * @param {string} format='image/png' An optional value of a format type.
     * @param {number} quality=0.92 An optional value between 0 and 1.
     * @param {string} type='dataURL' Either 'dataURL' or 'blob'.
     * @return {string|string[]|Promise} When using the default `'dataURL'`
     * `type` this returns a single data URL or an array of data URLs,
     * one for each canvas. When using the `'blob'` `type` this returns a
     * `Promise` that resolves with an array of `Blob` instances, one for each
     * canvas.
     */
  }, {
    key: "getImage",
    value: function getImage(format, quality, type) {
      if (type === 'blob') {
        return Promise.all(this.canvases.map(function (entry) {
          return entry.getImage(format, quality, type);
        }));
      } else if (type === 'dataURL') {
        var images = this.canvases.map(function (entry) {
          return entry.getImage(format, quality, type);
        });
        return images.length > 1 ? images : images[0];
      }
    }

    /**
     * Render the new progress
     *
     * @param {number} position X-offset of progress position in pixels
     */
  }, {
    key: "updateProgress",
    value: function updateProgress(position) {
      this.style(this.progressWave, {
        width: position + 'px'
      });
    }
  }]);
  return MultiCanvas;
}(_drawer.default);
exports["default"] = MultiCanvas;
module.exports = exports.default;

/***/ }),

/***/ "./src/mediaelement-webaudio.js":
/*!**************************************!*\
  !*** ./src/mediaelement-webaudio.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _mediaelement = _interopRequireDefault(__webpack_require__(/*! ./mediaelement */ "./src/mediaelement.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * MediaElementWebAudio backend: load audio via an HTML5 audio tag, but playback with the WebAudio API.
 * The advantage here is that the html5 <audio> tag can perform range requests on the server and not
 * buffer the entire file in one request, and you still get the filtering and scripting functionality
 * of the webaudio API.
 * Note that in order to use range requests and prevent buffering, you must provide peak data.
 *
 * @since 3.2.0
 */
var MediaElementWebAudio = /*#__PURE__*/function (_MediaElement) {
  _inherits(MediaElementWebAudio, _MediaElement);
  var _super = _createSuper(MediaElementWebAudio);
  /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */
  function MediaElementWebAudio(params) {
    var _this;
    _classCallCheck(this, MediaElementWebAudio);
    _this = _super.call(this, params);
    /** @private */
    _this.params = params;
    /** @private */
    _this.sourceMediaElement = null;
    return _this;
  }

  /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */
  _createClass(MediaElementWebAudio, [{
    key: "init",
    value: function init() {
      this.setPlaybackRate(this.params.audioRate);
      this.createTimer();
      this.createVolumeNode();
      this.createScriptNode();
      this.createAnalyserNode();
    }
    /**
     * Private method called by both `load` (from url)
     * and `loadElt` (existing media element) methods.
     *
     * @param {HTMLMediaElement} media HTML5 Audio or Video element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     * @param {string} preload HTML 5 preload attribute value
     * @private
     */
  }, {
    key: "_load",
    value: function _load(media, peaks, preload) {
      _get(_getPrototypeOf(MediaElementWebAudio.prototype), "_load", this).call(this, media, peaks, preload);
      this.createMediaElementSource(media);
    }

    /**
     * Create MediaElementSource node
     *
     * @since 3.2.0
     * @param {HTMLMediaElement} mediaElement HTML5 Audio to load
     */
  }, {
    key: "createMediaElementSource",
    value: function createMediaElementSource(mediaElement) {
      this.sourceMediaElement = this.ac.createMediaElementSource(mediaElement);
      this.sourceMediaElement.connect(this.analyser);
    }
  }, {
    key: "play",
    value: function play(start, end) {
      this.resumeAudioContext();
      return _get(_getPrototypeOf(MediaElementWebAudio.prototype), "play", this).call(this, start, end);
    }

    /**
     * This is called when wavesurfer is destroyed
     *
     */
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(MediaElementWebAudio.prototype), "destroy", this).call(this);
      this.destroyWebAudio();
    }
  }]);
  return MediaElementWebAudio;
}(_mediaelement.default);
exports["default"] = MediaElementWebAudio;
module.exports = exports.default;

/***/ }),

/***/ "./src/mediaelement.js":
/*!*****************************!*\
  !*** ./src/mediaelement.js ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _webaudio = _interopRequireDefault(__webpack_require__(/*! ./webaudio */ "./src/webaudio.js"));
var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * MediaElement backend
 */
var MediaElement = /*#__PURE__*/function (_WebAudio) {
  _inherits(MediaElement, _WebAudio);
  var _super = _createSuper(MediaElement);
  /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */
  function MediaElement(params) {
    var _this;
    _classCallCheck(this, MediaElement);
    _this = _super.call(this, params);
    /** @private */
    _this.params = params;

    /**
     * Initially a dummy media element to catch errors. Once `_load` is
     * called, this will contain the actual `HTMLMediaElement`.
     * @private
     */
    _this.media = {
      currentTime: 0,
      duration: 0,
      paused: true,
      playbackRate: 1,
      play: function play() {},
      pause: function pause() {},
      volume: 0
    };

    /** @private */
    _this.mediaType = params.mediaType.toLowerCase();
    /** @private */
    _this.elementPosition = params.elementPosition;
    /** @private */
    _this.peaks = null;
    /** @private */
    _this.playbackRate = 1;
    /** @private */
    _this.volume = 1;
    /** @private */
    _this.isMuted = false;
    /** @private */
    _this.buffer = null;
    /** @private */
    _this.onPlayEnd = null;
    /** @private */
    _this.mediaListeners = {};
    return _this;
  }

  /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */
  _createClass(MediaElement, [{
    key: "init",
    value: function init() {
      this.setPlaybackRate(this.params.audioRate);
      this.createTimer();
    }

    /**
     * Attach event listeners to media element.
     */
  }, {
    key: "_setupMediaListeners",
    value: function _setupMediaListeners() {
      var _this2 = this;
      this.mediaListeners.error = function () {
        _this2.fireEvent('error', 'Error loading media element');
      };
      this.mediaListeners.waiting = function () {
        _this2.fireEvent('waiting');
      };
      this.mediaListeners.canplay = function () {
        _this2.fireEvent('canplay');
      };
      this.mediaListeners.ended = function () {
        _this2.fireEvent('finish');
      };
      // listen to and relay play, pause and seeked events to enable
      // playback control from the external media element
      this.mediaListeners.play = function () {
        _this2.fireEvent('play');
      };
      this.mediaListeners.pause = function () {
        _this2.fireEvent('pause');
      };
      this.mediaListeners.seeked = function (event) {
        _this2.fireEvent('seek');
      };
      this.mediaListeners.volumechange = function (event) {
        _this2.isMuted = _this2.media.muted;
        if (_this2.isMuted) {
          _this2.volume = 0;
        } else {
          _this2.volume = _this2.media.volume;
        }
        _this2.fireEvent('volume');
      };

      // reset event listeners
      Object.keys(this.mediaListeners).forEach(function (id) {
        _this2.media.removeEventListener(id, _this2.mediaListeners[id]);
        _this2.media.addEventListener(id, _this2.mediaListeners[id]);
      });
    }

    /**
     * Create a timer to provide a more precise `audioprocess` event.
     */
  }, {
    key: "createTimer",
    value: function createTimer() {
      var _this3 = this;
      var onAudioProcess = function onAudioProcess() {
        if (_this3.isPaused()) {
          return;
        }
        _this3.fireEvent('audioprocess', _this3.getCurrentTime());

        // Call again in the next frame
        util.frame(onAudioProcess)();
      };
      this.on('play', onAudioProcess);

      // Update the progress one more time to prevent it from being stuck in
      // case of lower framerates
      this.on('pause', function () {
        _this3.fireEvent('audioprocess', _this3.getCurrentTime());
      });
    }

    /**
     * Create media element with url as its source,
     * and append to container element.
     *
     * @param {string} url Path to media file
     * @param {HTMLElement} container HTML element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     * @param {string} preload HTML 5 preload attribute value
     * @throws Will throw an error if the `url` argument is not a valid media
     * element.
     */
  }, {
    key: "load",
    value: function load(url, container, peaks, preload) {
      var media = document.createElement(this.mediaType);
      media.controls = this.params.mediaControls;
      media.autoplay = this.params.autoplay || false;
      media.preload = preload == null ? 'auto' : preload;
      media.src = url;
      media.style.width = '100%';
      var prevMedia = container.querySelector(this.mediaType);
      if (prevMedia) {
        container.removeChild(prevMedia);
      }
      container.appendChild(media);
      this._load(media, peaks, preload);
    }

    /**
     * Load existing media element.
     *
     * @param {HTMLMediaElement} elt HTML5 Audio or Video element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     */
  }, {
    key: "loadElt",
    value: function loadElt(elt, peaks) {
      elt.controls = this.params.mediaControls;
      elt.autoplay = this.params.autoplay || false;
      this._load(elt, peaks, elt.preload);
    }

    /**
     * Method called by both `load` (from url)
     * and `loadElt` (existing media element) methods.
     *
     * @param {HTMLMediaElement} media HTML5 Audio or Video element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     * @param {string} preload HTML 5 preload attribute value
     * @throws Will throw an error if the `media` argument is not a valid media
     * element.
     * @private
     */
  }, {
    key: "_load",
    value: function _load(media, peaks, preload) {
      // verify media element is valid
      if (!(media instanceof HTMLMediaElement) || typeof media.addEventListener === 'undefined') {
        throw new Error('media parameter is not a valid media element');
      }

      // load must be called manually on iOS, otherwise peaks won't draw
      // until a user interaction triggers load --> 'ready' event
      //
      // note that we avoid calling media.load here when given peaks and preload == 'none'
      // as this almost always triggers some browser fetch of the media.
      if (typeof media.load == 'function' && !(peaks && preload == 'none')) {
        // Resets the media element and restarts the media resource. Any
        // pending events are discarded. How much media data is fetched is
        // still affected by the preload attribute.
        media.load();
      }
      this.media = media;
      this._setupMediaListeners();
      this.peaks = peaks;
      this.onPlayEnd = null;
      this.buffer = null;
      this.isMuted = media.muted;
      this.setPlaybackRate(this.playbackRate);
      this.setVolume(this.volume);
    }

    /**
     * Used by `wavesurfer.isPlaying()` and `wavesurfer.playPause()`
     *
     * @return {boolean} Media paused or not
     */
  }, {
    key: "isPaused",
    value: function isPaused() {
      return !this.media || this.media.paused;
    }

    /**
     * Used by `wavesurfer.getDuration()`
     *
     * @return {number} Duration
     */
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (this.explicitDuration) {
        return this.explicitDuration;
      }
      var duration = (this.buffer || this.media).duration;
      if (duration >= Infinity) {
        // streaming audio
        duration = this.media.seekable.end(0);
      }
      return duration;
    }

    /**
     * Returns the current time in seconds relative to the audio-clip's
     * duration.
     *
     * @return {number} Current time
     */
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.media && this.media.currentTime;
    }

    /**
     * Get the position from 0 to 1
     *
     * @return {number} Current position
     */
  }, {
    key: "getPlayedPercents",
    value: function getPlayedPercents() {
      return this.getCurrentTime() / this.getDuration() || 0;
    }

    /**
     * Get the audio source playback rate.
     *
     * @return {number} Playback rate
     */
  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.playbackRate || this.media.playbackRate;
    }

    /**
     * Set the audio source playback rate.
     *
     * @param {number} value Playback rate
     */
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(value) {
      this.playbackRate = value || 1;
      this.media.playbackRate = this.playbackRate;
    }

    /**
     * Used by `wavesurfer.seekTo()`
     *
     * @param {number} start Position to start at in seconds
     */
  }, {
    key: "seekTo",
    value: function seekTo(start) {
      if (start != null && !isNaN(start)) {
        this.media.currentTime = start;
      }
      this.clearPlayEnd();
    }

    /**
     * Plays the loaded audio region.
     *
     * @param {number} start Start offset in seconds, relative to the beginning
     * of a clip.
     * @param {number} end When to stop, relative to the beginning of a clip.
     * @emits MediaElement#play
     * @return {Promise} Result
     */
  }, {
    key: "play",
    value: function play(start, end) {
      this.seekTo(start);
      var promise = this.media.play();
      end && this.setPlayEnd(end);
      return promise;
    }

    /**
     * Pauses the loaded audio.
     *
     * @emits MediaElement#pause
     * @return {Promise} Result
     */
  }, {
    key: "pause",
    value: function pause() {
      var promise;
      if (this.media) {
        promise = this.media.pause();
      }
      this.clearPlayEnd();
      return promise;
    }

    /**
     * Set the play end
     *
     * @param {number} end Where to end
     */
  }, {
    key: "setPlayEnd",
    value: function setPlayEnd(end) {
      var _this4 = this;
      this.clearPlayEnd();
      this._onPlayEnd = function (time) {
        if (time >= end) {
          _this4.pause();
          _this4.seekTo(end);
        }
      };
      this.on('audioprocess', this._onPlayEnd);
    }

    /** @private */
  }, {
    key: "clearPlayEnd",
    value: function clearPlayEnd() {
      if (this._onPlayEnd) {
        this.un('audioprocess', this._onPlayEnd);
        this._onPlayEnd = null;
      }
    }

    /**
     * Compute the max and min value of the waveform when broken into
     * <length> subranges.
     *
     * @param {number} length How many subranges to break the waveform into.
     * @param {number} first First sample in the required range.
     * @param {number} last Last sample in the required range.
     * @return {number[]|Number.<Array[]>} Array of 2*<length> peaks or array of
     * arrays of peaks consisting of (max, min) values for each subrange.
     */
  }, {
    key: "getPeaks",
    value: function getPeaks(length, first, last) {
      if (this.buffer) {
        return _get(_getPrototypeOf(MediaElement.prototype), "getPeaks", this).call(this, length, first, last);
      }
      return this.peaks || [];
    }

    /**
     * Set the sink id for the media player
     *
     * @param {string} deviceId String value representing audio device id.
     * @returns {Promise} A Promise that resolves to `undefined` when there
     * are no errors.
     */
  }, {
    key: "setSinkId",
    value: function setSinkId(deviceId) {
      if (deviceId) {
        if (!this.media.setSinkId) {
          return Promise.reject(new Error('setSinkId is not supported in your browser'));
        }
        return this.media.setSinkId(deviceId);
      }
      return Promise.reject(new Error('Invalid deviceId: ' + deviceId));
    }

    /**
     * Get the current volume
     *
     * @return {number} value A floating point value between 0 and 1.
     */
  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.volume;
    }

    /**
     * Set the audio volume
     *
     * @param {number} value A floating point value between 0 and 1.
     */
  }, {
    key: "setVolume",
    value: function setVolume(value) {
      this.volume = value;
      // no need to change when it's already at that volume
      if (this.media.volume !== this.volume) {
        this.media.volume = this.volume;
      }
    }

    /**
     * Enable or disable muted audio
     *
     * @since 4.0.0
     * @param {boolean} muted Specify `true` to mute audio.
     */
  }, {
    key: "setMute",
    value: function setMute(muted) {
      // This causes a volume change to be emitted too through the
      // volumechange event listener.
      this.isMuted = this.media.muted = muted;
    }

    /**
     * This is called when wavesurfer is destroyed
     *
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;
      this.pause();
      this.unAll();
      this.destroyed = true;

      // cleanup media event listeners
      Object.keys(this.mediaListeners).forEach(function (id) {
        if (_this5.media) {
          _this5.media.removeEventListener(id, _this5.mediaListeners[id]);
        }
      });
      if (this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode) {
        this.media.parentNode.removeChild(this.media);
      }
      this.media = null;
    }
  }]);
  return MediaElement;
}(_webaudio.default);
exports["default"] = MediaElement;
module.exports = exports.default;

/***/ }),

/***/ "./src/peakcache.js":
/*!**************************!*\
  !*** ./src/peakcache.js ***!
  \**************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Caches the decoded peaks data to improve rendering speed for large audio
 *
 * Is used if the option parameter `partialRender` is set to `true`
 */
var PeakCache = /*#__PURE__*/function () {
  /**
   * Instantiate cache
   */
  function PeakCache() {
    _classCallCheck(this, PeakCache);
    this.clearPeakCache();
  }

  /**
   * Empty the cache
   */
  _createClass(PeakCache, [{
    key: "clearPeakCache",
    value: function clearPeakCache() {
      /**
       * Flat array with entries that are always in pairs to mark the
       * beginning and end of each subrange.  This is a convenience so we can
       * iterate over the pairs for easy set difference operations.
       * @private
       */
      this.peakCacheRanges = [];
      /**
       * Length of the entire cachable region, used for resetting the cache
       * when this changes (zoom events, for instance).
       * @private
       */
      this.peakCacheLength = -1;
    }

    /**
     * Add a range of peaks to the cache
     *
     * @param {number} length The length of the range
     * @param {number} start The x offset of the start of the range
     * @param {number} end The x offset of the end of the range
     * @return {Number.<Array[]>} Array with arrays of numbers
     */
  }, {
    key: "addRangeToPeakCache",
    value: function addRangeToPeakCache(length, start, end) {
      if (length != this.peakCacheLength) {
        this.clearPeakCache();
        this.peakCacheLength = length;
      }

      // Return ranges that weren't in the cache before the call.
      var uncachedRanges = [];
      var i = 0;
      // Skip ranges before the current start.
      while (i < this.peakCacheRanges.length && this.peakCacheRanges[i] < start) {
        i++;
      }
      // If |i| is even, |start| falls after an existing range.  Otherwise,
      // |start| falls between an existing range, and the uncached region
      // starts when we encounter the next node in |peakCacheRanges| or
      // |end|, whichever comes first.
      if (i % 2 == 0) {
        uncachedRanges.push(start);
      }
      while (i < this.peakCacheRanges.length && this.peakCacheRanges[i] <= end) {
        uncachedRanges.push(this.peakCacheRanges[i]);
        i++;
      }
      // If |i| is even, |end| is after all existing ranges.
      if (i % 2 == 0) {
        uncachedRanges.push(end);
      }

      // Filter out the 0-length ranges.
      uncachedRanges = uncachedRanges.filter(function (item, pos, arr) {
        if (pos == 0) {
          return item != arr[pos + 1];
        } else if (pos == arr.length - 1) {
          return item != arr[pos - 1];
        }
        return item != arr[pos - 1] && item != arr[pos + 1];
      });

      // Merge the two ranges together, uncachedRanges will either contain
      // wholly new points, or duplicates of points in peakCacheRanges.  If
      // duplicates are detected, remove both and extend the range.
      this.peakCacheRanges = this.peakCacheRanges.concat(uncachedRanges);
      this.peakCacheRanges = this.peakCacheRanges.sort(function (a, b) {
        return a - b;
      }).filter(function (item, pos, arr) {
        if (pos == 0) {
          return item != arr[pos + 1];
        } else if (pos == arr.length - 1) {
          return item != arr[pos - 1];
        }
        return item != arr[pos - 1] && item != arr[pos + 1];
      });

      // Push the uncached ranges into an array of arrays for ease of
      // iteration in the functions that call this.
      var uncachedRangePairs = [];
      for (i = 0; i < uncachedRanges.length; i += 2) {
        uncachedRangePairs.push([uncachedRanges[i], uncachedRanges[i + 1]]);
      }
      return uncachedRangePairs;
    }

    /**
     * For testing
     *
     * @return {Number.<Array[]>} Array with arrays of numbers
     */
  }, {
    key: "getCacheRanges",
    value: function getCacheRanges() {
      var peakCacheRangePairs = [];
      var i;
      for (i = 0; i < this.peakCacheRanges.length; i += 2) {
        peakCacheRangePairs.push([this.peakCacheRanges[i], this.peakCacheRanges[i + 1]]);
      }
      return peakCacheRangePairs;
    }
  }]);
  return PeakCache;
}();
exports["default"] = PeakCache;
module.exports = exports.default;

/***/ }),

/***/ "./src/util/absMax.js":
/*!****************************!*\
  !*** ./src/util/absMax.js ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = absMax;
var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "./src/util/max.js"));
var _min = _interopRequireDefault(__webpack_require__(/*! ./min */ "./src/util/min.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Get the largest absolute value in an array
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 * @example console.log(max([-3, 2, 1]), max([-3, 2, 4])); // logs 3 4
 * @since 4.3.0
 */
function absMax(values) {
  var max = (0, _max.default)(values);
  var min = (0, _min.default)(values);
  return -min > max ? -min : max;
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/clamp.js":
/*!***************************!*\
  !*** ./src/util/clamp.js ***!
  \***************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = clamp;
/**
 * Returns a number limited to the given range.
 *
 * @param {number} val The number to be limited to a range
 * @param {number} min The lower boundary of the limit range
 * @param {number} max The upper boundary of the limit range
 * @returns {number} A number in the range [min, max]
 */
function clamp(val, min, max) {
  return Math.min(Math.max(min, val), max);
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/fetch.js":
/*!***************************!*\
  !*** ./src/util/fetch.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = fetchFile;
var _observer = _interopRequireDefault(__webpack_require__(/*! ./observer */ "./src/util/observer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProgressHandler = /*#__PURE__*/function () {
  /**
   * Instantiate ProgressHandler
   *
   * @param {Observer} instance The `fetchFile` observer instance.
   * @param {Number} contentLength Content length.
   * @param {Response} response Response object.
   */
  function ProgressHandler(instance, contentLength, response) {
    _classCallCheck(this, ProgressHandler);
    this.instance = instance;
    this.instance._reader = response.body.getReader();
    this.total = parseInt(contentLength, 10);
    this.loaded = 0;
  }

  /**
   * A method that is called once, immediately after the `ReadableStream``
   * is constructed.
   *
   * @param {ReadableStreamDefaultController} controller Controller instance
   *     used to control the stream.
   */
  _createClass(ProgressHandler, [{
    key: "start",
    value: function start(controller) {
      var _this = this;
      var read = function read() {
        // instance._reader.read() returns a promise that resolves
        // when a value has been received
        _this.instance._reader.read().then(function (_ref) {
          var done = _ref.done,
            value = _ref.value;
          // result objects contain two properties:
          // done  - true if the stream has already given you all its data.
          // value - some data. Always undefined when done is true.
          if (done) {
            // ensure onProgress called when content-length=0
            if (_this.total === 0) {
              _this.instance.onProgress.call(_this.instance, {
                loaded: _this.loaded,
                total: _this.total,
                lengthComputable: false
              });
            }
            // no more data needs to be consumed, close the stream
            controller.close();
            return;
          }
          _this.loaded += value.byteLength;
          _this.instance.onProgress.call(_this.instance, {
            loaded: _this.loaded,
            total: _this.total,
            lengthComputable: !(_this.total === 0)
          });
          // enqueue the next data chunk into our target stream
          controller.enqueue(value);
          read();
        }).catch(function (error) {
          controller.error(error);
        });
      };
      read();
    }
  }]);
  return ProgressHandler;
}();
/**
 * Load a file using `fetch`.
 *
 * @param {object} options Request options to use. See example below.
 * @returns {Observer} Observer instance
 * @example
 * // default options
 * let options = {
 *     url: undefined,
 *     method: 'GET',
 *     mode: 'cors',
 *     credentials: 'same-origin',
 *     cache: 'default',
 *     responseType: 'json',
 *     requestHeaders: [],
 *     redirect: 'follow',
 *     referrer: 'client'
 * };
 *
 * // override some options
 * options.url = '../media/demo.wav';

 * // available types: 'arraybuffer', 'blob', 'json' or 'text'
 * options.responseType = 'arraybuffer';
 *
 * // make fetch call
 * let request = util.fetchFile(options);
 *
 * // listen for events
 * request.on('progress', e => {
 *     console.log('progress', e);
 * });
 *
 * request.on('success', data => {
 *     console.log('success!', data);
 * });
 *
 * request.on('error', e => {
 *     console.warn('fetchFile error: ', e);
 * });
 */
function fetchFile(options) {
  if (!options) {
    throw new Error('fetch options missing');
  } else if (!options.url) {
    throw new Error('fetch url missing');
  }
  var instance = new _observer.default();
  var fetchHeaders = new Headers();
  var fetchRequest = new Request(options.url);

  // add ability to abort
  instance.controller = new AbortController();

  // check if headers have to be added
  if (options && options.requestHeaders) {
    // add custom request headers
    options.requestHeaders.forEach(function (header) {
      fetchHeaders.append(header.key, header.value);
    });
  }

  // parse fetch options
  var responseType = options.responseType || 'json';
  var fetchOptions = {
    method: options.method || 'GET',
    headers: fetchHeaders,
    mode: options.mode || 'cors',
    credentials: options.credentials || 'same-origin',
    cache: options.cache || 'default',
    redirect: options.redirect || 'follow',
    referrer: options.referrer || 'client',
    signal: instance.controller.signal
  };
  fetch(fetchRequest, fetchOptions).then(function (response) {
    // store response reference
    instance.response = response;
    var progressAvailable = true;
    if (!response.body) {
      // ReadableStream is not yet supported in this browser
      // see https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
      progressAvailable = false;
    }

    // Server must send CORS header "Access-Control-Expose-Headers: content-length"
    var contentLength = response.headers.get('content-length');
    if (contentLength === null) {
      // Content-Length server response header missing.
      // Don't evaluate download progress if we can't compare against a total size
      // see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Access-Control-Expose-Headers
      progressAvailable = false;
    }
    if (!progressAvailable) {
      // not able to check download progress so skip it
      return response;
    }

    // fire progress event when during load
    instance.onProgress = function (e) {
      instance.fireEvent('progress', e);
    };
    return new Response(new ReadableStream(new ProgressHandler(instance, contentLength, response)), fetchOptions);
  }).then(function (response) {
    var errMsg;
    if (response.ok) {
      switch (responseType) {
        case 'arraybuffer':
          return response.arrayBuffer();
        case 'json':
          return response.json();
        case 'blob':
          return response.blob();
        case 'text':
          return response.text();
        default:
          errMsg = 'Unknown responseType: ' + responseType;
          break;
      }
    }
    if (!errMsg) {
      errMsg = 'HTTP error status: ' + response.status;
    }
    throw new Error(errMsg);
  }).then(function (response) {
    instance.fireEvent('success', response);
  }).catch(function (error) {
    instance.fireEvent('error', error);
  });

  // return the fetch request
  instance.fetchRequest = fetchRequest;
  return instance;
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/frame.js":
/*!***************************!*\
  !*** ./src/util/frame.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = frame;
var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! ./request-animation-frame */ "./src/util/request-animation-frame.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Create a function which will be called at the next requestAnimationFrame
 * cycle
 *
 * @param {function} func The function to call
 *
 * @return {func} The function wrapped within a requestAnimationFrame
 */
function frame(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (0, _requestAnimationFrame.default)(function () {
      return func.apply(void 0, args);
    });
  };
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/get-id.js":
/*!****************************!*\
  !*** ./src/util/get-id.js ***!
  \****************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getId;
/**
 * Get a random prefixed ID
 *
 * @param {String} prefix Prefix to use. Default is `'wavesurfer_'`.
 * @returns {String} Random prefixed ID
 * @example
 * console.log(getId()); // logs 'wavesurfer_b5pors4ru6g'
 *
 * let prefix = 'foo-';
 * console.log(getId(prefix)); // logs 'foo-b5pors4ru6g'
 */
function getId(prefix) {
  if (prefix === undefined) {
    prefix = 'wavesurfer_';
  }
  return prefix + Math.random().toString(32).substring(2);
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Observer", ({
  enumerable: true,
  get: function get() {
    return _observer.default;
  }
}));
Object.defineProperty(exports, "absMax", ({
  enumerable: true,
  get: function get() {
    return _absMax.default;
  }
}));
Object.defineProperty(exports, "clamp", ({
  enumerable: true,
  get: function get() {
    return _clamp.default;
  }
}));
Object.defineProperty(exports, "debounce", ({
  enumerable: true,
  get: function get() {
    return _debounce.default;
  }
}));
Object.defineProperty(exports, "fetchFile", ({
  enumerable: true,
  get: function get() {
    return _fetch.default;
  }
}));
Object.defineProperty(exports, "frame", ({
  enumerable: true,
  get: function get() {
    return _frame.default;
  }
}));
Object.defineProperty(exports, "getId", ({
  enumerable: true,
  get: function get() {
    return _getId.default;
  }
}));
Object.defineProperty(exports, "ignoreSilenceMode", ({
  enumerable: true,
  get: function get() {
    return _silenceMode.default;
  }
}));
Object.defineProperty(exports, "max", ({
  enumerable: true,
  get: function get() {
    return _max.default;
  }
}));
Object.defineProperty(exports, "min", ({
  enumerable: true,
  get: function get() {
    return _min.default;
  }
}));
Object.defineProperty(exports, "preventClick", ({
  enumerable: true,
  get: function get() {
    return _preventClick.default;
  }
}));
Object.defineProperty(exports, "requestAnimationFrame", ({
  enumerable: true,
  get: function get() {
    return _requestAnimationFrame.default;
  }
}));
Object.defineProperty(exports, "style", ({
  enumerable: true,
  get: function get() {
    return _style.default;
  }
}));
Object.defineProperty(exports, "withOrientation", ({
  enumerable: true,
  get: function get() {
    return _orientation.default;
  }
}));
var _getId = _interopRequireDefault(__webpack_require__(/*! ./get-id */ "./src/util/get-id.js"));
var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "./src/util/max.js"));
var _min = _interopRequireDefault(__webpack_require__(/*! ./min */ "./src/util/min.js"));
var _absMax = _interopRequireDefault(__webpack_require__(/*! ./absMax */ "./src/util/absMax.js"));
var _observer = _interopRequireDefault(__webpack_require__(/*! ./observer */ "./src/util/observer.js"));
var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./src/util/style.js"));
var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! ./request-animation-frame */ "./src/util/request-animation-frame.js"));
var _frame = _interopRequireDefault(__webpack_require__(/*! ./frame */ "./src/util/frame.js"));
var _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));
var _preventClick = _interopRequireDefault(__webpack_require__(/*! ./prevent-click */ "./src/util/prevent-click.js"));
var _fetch = _interopRequireDefault(__webpack_require__(/*! ./fetch */ "./src/util/fetch.js"));
var _clamp = _interopRequireDefault(__webpack_require__(/*! ./clamp */ "./src/util/clamp.js"));
var _orientation = _interopRequireDefault(__webpack_require__(/*! ./orientation */ "./src/util/orientation.js"));
var _silenceMode = _interopRequireDefault(__webpack_require__(/*! ./silence-mode */ "./src/util/silence-mode.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/util/max.js":
/*!*************************!*\
  !*** ./src/util/max.js ***!
  \*************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = max;
/**
 * Get the largest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 * @example console.log(max([1, 2, 3])); // logs 3
 */
function max(values) {
  var largest = -Infinity;
  Object.keys(values).forEach(function (i) {
    if (values[i] > largest) {
      largest = values[i];
    }
  });
  return largest;
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/min.js":
/*!*************************!*\
  !*** ./src/util/min.js ***!
  \*************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = min;
/**
 * Get the smallest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Smallest number found
 * @example console.log(min([1, 2, 3])); // logs 1
 */
function min(values) {
  var smallest = Number(Infinity);
  Object.keys(values).forEach(function (i) {
    if (values[i] < smallest) {
      smallest = values[i];
    }
  });
  return smallest;
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/observer.js":
/*!******************************!*\
  !*** ./src/util/observer.js ***!
  \******************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @typedef {Object} ListenerDescriptor
 * @property {string} name The name of the event
 * @property {function} callback The callback
 * @property {function} un The function to call to remove the listener
 */
/**
 * Observer class
 */
var Observer = /*#__PURE__*/function () {
  /**
   * Instantiate Observer
   */
  function Observer() {
    _classCallCheck(this, Observer);
    /**
     * @private
     * @todo Initialise the handlers here already and remove the conditional
     * assignment in `on()`
     */
    this._disabledEventEmissions = [];
    this.handlers = null;
  }
  /**
   * Attach a handler function for an event.
   *
   * @param {string} event Name of the event to listen to
   * @param {function} fn The callback to trigger when the event is fired
   * @return {ListenerDescriptor} The event descriptor
   */
  _createClass(Observer, [{
    key: "on",
    value: function on(event, fn) {
      var _this = this;
      if (!this.handlers) {
        this.handlers = {};
      }
      var handlers = this.handlers[event];
      if (!handlers) {
        handlers = this.handlers[event] = [];
      }
      handlers.push(fn);

      // Return an event descriptor
      return {
        name: event,
        callback: fn,
        un: function un(e, fn) {
          return _this.un(e, fn);
        }
      };
    }

    /**
     * Remove an event handler.
     *
     * @param {string} event Name of the event the listener that should be
     * removed listens to
     * @param {function} fn The callback that should be removed
     */
  }, {
    key: "un",
    value: function un(event, fn) {
      if (!this.handlers) {
        return;
      }
      var handlers = this.handlers[event];
      var i;
      if (handlers) {
        if (fn) {
          for (i = handlers.length - 1; i >= 0; i--) {
            if (handlers[i] == fn) {
              handlers.splice(i, 1);
            }
          }
        } else {
          handlers.length = 0;
        }
      }
    }

    /**
     * Remove all event handlers.
     */
  }, {
    key: "unAll",
    value: function unAll() {
      this.handlers = null;
    }

    /**
     * Attach a handler to an event. The handler is executed at most once per
     * event type.
     *
     * @param {string} event The event to listen to
     * @param {function} handler The callback that is only to be called once
     * @return {ListenerDescriptor} The event descriptor
     */
  }, {
    key: "once",
    value: function once(event, handler) {
      var _this2 = this;
      var fn = function fn() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        /*  eslint-disable no-invalid-this */
        handler.apply(_this2, args);
        /*  eslint-enable no-invalid-this */
        setTimeout(function () {
          _this2.un(event, fn);
        }, 0);
      };
      return this.on(event, fn);
    }

    /**
     * Disable firing a list of events by name. When specified, event handlers for any event type
     * passed in here will not be called.
     *
     * @since 4.0.0
     * @param {string[]} eventNames an array of event names to disable emissions for
     * @example
     * // disable seek and interaction events
     * wavesurfer.setDisabledEventEmissions(['seek', 'interaction']);
     */
  }, {
    key: "setDisabledEventEmissions",
    value: function setDisabledEventEmissions(eventNames) {
      this._disabledEventEmissions = eventNames;
    }

    /**
     * plugins borrow part of this class without calling the constructor,
     * so we have to be careful about _disabledEventEmissions
     */
  }, {
    key: "_isDisabledEventEmission",
    value: function _isDisabledEventEmission(event) {
      return this._disabledEventEmissions && this._disabledEventEmissions.includes(event);
    }

    /**
     * Manually fire an event
     *
     * @param {string} event The event to fire manually
     * @param {...any} args The arguments with which to call the listeners
     */
  }, {
    key: "fireEvent",
    value: function fireEvent(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      if (!this.handlers || this._isDisabledEventEmission(event)) {
        return;
      }
      var handlers = this.handlers[event];
      handlers && handlers.forEach(function (fn) {
        fn.apply(void 0, args);
      });
    }
  }]);
  return Observer;
}();
exports["default"] = Observer;
module.exports = exports.default;

/***/ }),

/***/ "./src/util/orientation.js":
/*!*********************************!*\
  !*** ./src/util/orientation.js ***!
  \*********************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = withOrientation;
var verticalPropMap = {
  width: 'height',
  height: 'width',
  overflowX: 'overflowY',
  overflowY: 'overflowX',
  clientWidth: 'clientHeight',
  clientHeight: 'clientWidth',
  clientX: 'clientY',
  clientY: 'clientX',
  scrollWidth: 'scrollHeight',
  scrollLeft: 'scrollTop',
  offsetLeft: 'offsetTop',
  offsetTop: 'offsetLeft',
  offsetHeight: 'offsetWidth',
  offsetWidth: 'offsetHeight',
  left: 'top',
  right: 'bottom',
  top: 'left',
  bottom: 'right',
  borderRightStyle: 'borderBottomStyle',
  borderRightWidth: 'borderBottomWidth',
  borderRightColor: 'borderBottomColor'
};

/**
 * Convert a horizontally-oriented property name to a vertical one.
 *
 * @param {string} prop A property name
 * @param {bool} vertical Whether the element is oriented vertically
 * @returns {string} prop, converted appropriately
 */
function mapProp(prop, vertical) {
  if (Object.prototype.hasOwnProperty.call(verticalPropMap, prop)) {
    return vertical ? verticalPropMap[prop] : prop;
  } else {
    return prop;
  }
}
var isProxy = Symbol("isProxy");

/**
 * Returns an appropriately oriented object based on vertical.
 * If vertical is true, attribute getting and setting will be mapped through
 * verticalPropMap, so that e.g. getting the object's .width will give its
 * .height instead.
 * Certain methods of an oriented object will return oriented objects as well.
 * Oriented objects can't be added to the DOM directly since they are Proxy objects
 * and thus fail typechecks. Use domElement to get the actual element for this.
 *
 * @param {object} target The object to be wrapped and oriented
 * @param {bool} vertical Whether the element is oriented vertically
 * @returns {Proxy} An oriented object with attr translation via verticalAttrMap
 * @since 5.0.0
 */
function withOrientation(target, vertical) {
  if (target[isProxy]) {
    return target;
  } else {
    return new Proxy(target, {
      get: function get(obj, prop, receiver) {
        if (prop === isProxy) {
          return true;
        } else if (prop === 'domElement') {
          return obj;
        } else if (prop === 'style') {
          return withOrientation(obj.style, vertical);
        } else if (prop === 'canvas') {
          return withOrientation(obj.canvas, vertical);
        } else if (prop === 'getBoundingClientRect') {
          return function () {
            return withOrientation(obj.getBoundingClientRect.apply(obj, arguments), vertical);
          };
        } else if (prop === 'getContext') {
          return function () {
            return withOrientation(obj.getContext.apply(obj, arguments), vertical);
          };
        } else {
          var value = obj[mapProp(prop, vertical)];
          return typeof value == 'function' ? value.bind(obj) : value;
        }
      },
      set: function set(obj, prop, value) {
        obj[mapProp(prop, vertical)] = value;
        return true;
      }
    });
  }
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/prevent-click.js":
/*!***********************************!*\
  !*** ./src/util/prevent-click.js ***!
  \***********************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = preventClick;
/**
 * Stops propagation of click event and removes event listener
 *
 * @private
 * @param {object} event The click event
 */
function preventClickHandler(event) {
  event.stopPropagation();
  document.body.removeEventListener('click', preventClickHandler, true);
}

/**
 * Starts listening for click event and prevent propagation
 *
 * @param {object} values Values
 */
function preventClick(values) {
  document.body.addEventListener('click', preventClickHandler, true);
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/request-animation-frame.js":
/*!*********************************************!*\
  !*** ./src/util/request-animation-frame.js ***!
  \*********************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/* eslint-disable valid-jsdoc */
/**
 * Returns the `requestAnimationFrame` function for the browser, or a shim with
 * `setTimeout` if the function is not found
 *
 * @return {function} Available `requestAnimationFrame` function for the browser
 */
var _default = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
  return setTimeout(callback, 1000 / 60);
}).bind(window);
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/util/silence-mode.js":
/*!**********************************!*\
  !*** ./src/util/silence-mode.js ***!
  \**********************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ignoreSilenceMode;
/**
 * Ignores device silence mode when using the `WebAudio` backend.
 *
 * Many mobile devices contain a hardware button to mute the ringtone for incoming
 * calls and messages. Unfortunately, on some platforms like iOS, this also mutes
 * wavesurfer's audio when using the `WebAudio` backend. This function creates a
 * temporary `<audio>` element that makes sure the WebAudio backend keeps playing
 * when muting the device ringer.
 *
 * @since 5.2.0
 */
function ignoreSilenceMode() {
  // Set webaudio context with 1 second silent audio 44100 bit rate buffer to allow playing audio even if silent switch is on the device
  var silentAC = new AudioContext();
  var silentBS = silentAC.createBufferSource();
  silentBS.buffer = silentAC.createBuffer(1, 1, 44100);
  silentBS.connect(silentAC.destination);
  silentBS.start();

  // Set the src to a short bit of url encoded as a silent mp3
  // NOTE The silence MP3 must be high quality, when web audio sounds are played
  // in parallel the web audio sound is mixed to match the bitrate of the html sound
  // 0.01 seconds of silence VBR220-260 Joint Stereo 859B
  var audioData = "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//////////////////////////////////////////////////////////////////8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADgnABGiAAQBCqgCRMAAgEAH///////////////7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq//////////////////9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==";

  // disable iOS Airplay (setting the attribute in js doesn't work)
  var tmp = document.createElement("div");
  tmp.innerHTML = '<audio x-webkit-airplay="deny"></audio>';
  var audioSilentMode = tmp.children.item(0);
  audioSilentMode.src = audioData;
  audioSilentMode.preload = "auto";
  audioSilentMode.type = "audio/mpeg";
  audioSilentMode.disableRemotePlayback = true;

  // play
  audioSilentMode.play();

  // cleanup
  audioSilentMode.remove();
  tmp.remove();
}
module.exports = exports.default;

/***/ }),

/***/ "./src/util/style.js":
/*!***************************!*\
  !*** ./src/util/style.js ***!
  \***************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = style;
/**
 * Apply a map of styles to an element
 *
 * @param {HTMLElement} el The element that the styles will be applied to
 * @param {Object} styles The map of propName: attribute, both are used as-is
 *
 * @return {HTMLElement} el
 */
function style(el, styles) {
  Object.keys(styles).forEach(function (prop) {
    if (el.style[prop] !== styles[prop]) {
      el.style[prop] = styles[prop];
    }
  });
  return el;
}
module.exports = exports.default;

/***/ }),

/***/ "./src/wavesurfer.js":
/*!***************************!*\
  !*** ./src/wavesurfer.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
var _drawer = _interopRequireDefault(__webpack_require__(/*! ./drawer.multicanvas */ "./src/drawer.multicanvas.js"));
var _webaudio = _interopRequireDefault(__webpack_require__(/*! ./webaudio */ "./src/webaudio.js"));
var _mediaelement = _interopRequireDefault(__webpack_require__(/*! ./mediaelement */ "./src/mediaelement.js"));
var _peakcache = _interopRequireDefault(__webpack_require__(/*! ./peakcache */ "./src/peakcache.js"));
var _mediaelementWebaudio = _interopRequireDefault(__webpack_require__(/*! ./mediaelement-webaudio */ "./src/mediaelement-webaudio.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * This work is licensed under a BSD-3-Clause License.
 */
/** @external {HTMLElement} https://developer.mozilla.org/en/docs/Web/API/HTMLElement */
/** @external {OfflineAudioContext} https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext */
/** @external {File} https://developer.mozilla.org/en-US/docs/Web/API/File */
/** @external {Blob} https://developer.mozilla.org/en-US/docs/Web/API/Blob */
/** @external {CanvasRenderingContext2D} https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D */
/** @external {MediaStreamConstraints} https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints */
/** @external {AudioNode} https://developer.mozilla.org/de/docs/Web/API/AudioNode */
/**
 * @typedef {Object} WavesurferParams
 * @property {AudioContext} audioContext=null Use your own previously
 * initialized AudioContext or leave blank.
 * @property {number} audioRate=1 Speed at which to play audio. Lower number is
 * slower.
 * @property {ScriptProcessorNode} audioScriptProcessor=null Use your own previously
 * initialized ScriptProcessorNode or leave blank.
 * @property {boolean} autoCenter=true If a scrollbar is present, center the
 * waveform on current progress
 * @property {number} autoCenterRate=5 If autoCenter is active, rate at which the
 * waveform is centered
 * @property {boolean} autoCenterImmediately=false If autoCenter is active, immediately
 * center waveform on current progress
 * @property {string} backend='WebAudio' `'WebAudio'|'MediaElement'|'MediaElementWebAudio'` In most cases
 * you don't have to set this manually. MediaElement is a fallback for unsupported browsers.
 * MediaElementWebAudio allows to use WebAudio API also with big audio files, loading audio like with
 * MediaElement backend (HTML5 audio tag). You have to use the same methods of MediaElement backend for loading and
 * playback, giving also peaks, so the audio data are not decoded. In this way you can use WebAudio features, like filters,
 * also with audio with big duration. For example:
 * ` wavesurfer.load(url | HTMLMediaElement, peaks, preload, duration);
 *   wavesurfer.play();
 *   wavesurfer.setFilter(customFilter);
 * `
 * @property {string} backgroundColor=null Change background color of the
 * waveform container.
 * @property {number} barHeight=1 The height of the wave bars.
 * @property {number} barRadius=0 The radius of the wave bars. Makes bars rounded
 * @property {number} barGap=null The optional spacing between bars of the wave,
 * if not provided will be calculated in legacy format.
 * @property {number} barWidth=null Draw the waveform using bars.
 * @property {number} barMinHeight=null If specified, draw at least a bar of this height,
 * eliminating waveform gaps
 * @property {boolean} closeAudioContext=false Close and nullify all audio
 * contexts when the destroy method is called.
 * @property {!string|HTMLElement} container CSS selector or HTML element where
 * the waveform should be drawn. This is the only required parameter.
 * @property {string} cursorColor='#333' The fill color of the cursor indicating
 * the playhead position.
 * @property {number} cursorWidth=1 Measured in pixels.
 * @property {object} drawingContextAttributes={desynchronized: false} Drawing context
 * attributes.
 * @property {number} duration=null Optional audio length so pre-rendered peaks
 * can be display immediately for example.
 * @property {boolean} fillParent=true Whether to fill the entire container or
 * draw only according to `minPxPerSec`.
 * @property {boolean} forceDecode=false Force decoding of audio using web audio
 * when zooming to get a more detailed waveform.
 * @property {number} height=128 The height of the waveform. Measured in
 * pixels.
 * @property {boolean} hideScrollbar=false Whether to hide the horizontal
 * scrollbar when one would normally be shown.
 * @property {boolean} hideCursor=false Whether to hide the mouse cursor
 * when one would normally be shown by default.
 * @property {boolean} ignoreSilenceMode=false If true, ignores device silence mode
 * when using the `WebAudio` backend.
 * @property {boolean} interact=true Whether the mouse interaction will be
 * enabled at initialization. You can switch this parameter at any time later
 * on.
 * @property {boolean} loopSelection=true (Use with regions plugin) Enable
 * looping of selected regions
 * @property {number} maxCanvasWidth=4000 Maximum width of a single canvas in
 * pixels, excluding a small overlap (2 * `pixelRatio`, rounded up to the next
 * even integer). If the waveform is longer than this value, additional canvases
 * will be used to render the waveform, which is useful for very large waveforms
 * that may be too wide for browsers to draw on a single canvas.
 * @property {boolean} mediaControls=false (Use with backend `MediaElement` or `MediaElementWebAudio`)
 * this enables the native controls for the media element
 * @property {string} mediaType='audio' (Use with backend `MediaElement` or `MediaElementWebAudio`)
 * `'audio'|'video'` ('video' only for `MediaElement`)
 * @property {number} minPxPerSec=20 Minimum number of pixels per second of
 * audio.
 * @property {boolean} normalize=false If true, normalize by the maximum peak
 * instead of 1.0.
 * @property {boolean} partialRender=false Use the PeakCache to improve
 * rendering speed of large waveforms
 * @property {number} pixelRatio=window.devicePixelRatio The pixel ratio used to
 * calculate display
 * @property {PluginDefinition[]} plugins=[] An array of plugin definitions to
 * register during instantiation, they will be directly initialised unless they
 * are added with the `deferInit` property set to true.
 * @property {string} progressColor='#555' The fill color of the part of the
 * waveform behind the cursor. When `progressColor` and `waveColor` are the same
 * the progress wave is not rendered at all.
 * @property {boolean} removeMediaElementOnDestroy=true Set to false to keep the
 * media element in the DOM when the player is destroyed. This is useful when
 * reusing an existing media element via the `loadMediaElement` method.
 * @property {Object} renderer=MultiCanvas Can be used to inject a custom
 * renderer.
 * @property {boolean|number} responsive=false If set to `true` resize the
 * waveform, when the window is resized. This is debounced with a `100ms`
 * timeout by default. If this parameter is a number it represents that timeout.
 * @property {boolean} rtl=false If set to `true`, renders waveform from
 * right-to-left.
 * @property {boolean} scrollParent=false Whether to scroll the container with a
 * lengthy waveform. Otherwise the waveform is shrunk to the container width
 * (see fillParent).
 * @property {number} skipLength=2 Number of seconds to skip with the
 * skipForward() and skipBackward() methods.
 * @property {boolean} splitChannels=false Render with separate waveforms for
 * the channels of the audio
 * @property {SplitChannelOptions} splitChannelsOptions={} Options for splitChannel rendering
 * @property {boolean} vertical=false Render the waveform vertically instead of horizontally.
 * @property {string} waveColor='#999' The fill color of the waveform after the
 * cursor.
 * @property {object} xhr={} XHR options. For example:
 * `let xhr = {
 *     cache: 'default',
 *     mode: 'cors',
 *     method: 'GET',
 *     credentials: 'same-origin',
 *     redirect: 'follow',
 *     referrer: 'client',
 *     requestHeaders: [
 *         {
 *             key: 'Authorization',
 *             value: 'my-token'
 *         }
 *     ]
 * };`
 */
/**
 * @typedef {Object} PluginDefinition
 * @desc The Object used to describe a plugin
 * @example wavesurfer.addPlugin(pluginDefinition);
 * @property {string} name The name of the plugin, the plugin instance will be
 * added as a property to the wavesurfer instance under this name
 * @property {?Object} staticProps The properties that should be added to the
 * wavesurfer instance as static properties
 * @property {?boolean} deferInit Don't initialise plugin
 * automatically
 * @property {Object} params={} The plugin parameters, they are the first parameter
 * passed to the plugin class constructor function
 * @property {PluginClass} instance The plugin instance factory, is called with
 * the dependency specified in extends. Returns the plugin class.
 */
/**
 * @typedef {Object} SplitChannelOptions
 * @desc parameters applied when splitChannels option is true
 * @property {boolean} overlay=false determines whether channels are rendered on top of each other or on separate tracks
 * @property {object} channelColors={} object describing color for each channel. Example:
 * {
 *     0: {
 *         progressColor: 'green',
 *         waveColor: 'pink'
 *     },
 *     1: {
 *         progressColor: 'orange',
 *         waveColor: 'purple'
 *     }
 * }
 * @property {number[]} filterChannels=[] indexes of channels to be hidden from rendering
 * @property {boolean} relativeNormalization=false determines whether
 * normalization is done per channel or maintains proportionality between
 * channels. Only applied when normalize and splitChannels are both true.
 * @property {boolean} splitDragSelection=false determines if drag selection in regions
 * plugin works separately on each channel or only one selection for all channels
 * @since 4.3.0
 */
/**
 * @interface PluginClass
 *
 * @desc This is the interface which is implemented by all plugin classes. Note
 * that this only turns into an observer after being passed through
 * `wavesurfer.addPlugin`.
 *
 * @extends {Observer}
 */
var PluginClass = /*#__PURE__*/function () {
  /**
   * Construct the plugin
   *
   * @param {Object} params={} The plugin params (specific to the plugin)
   * @param {Object} ws The wavesurfer instance
   */
  function PluginClass(params, ws) {
    _classCallCheck(this, PluginClass);
  }
  /**
   * Initialise the plugin
   *
   * Start doing something. This is called by
   * `wavesurfer.initPlugin(pluginName)`
   */
  _createClass(PluginClass, [{
    key: "create",
    value:
    /**
     * Plugin definition factory
     *
     * This function must be used to create a plugin definition which can be
     * used by wavesurfer to correctly instantiate the plugin.
     *
     * It returns a `PluginDefinition` object representing the plugin.
     *
     * @param {Object} params={} The plugin params (specific to the plugin)
     */
    function create(params) {}
  }, {
    key: "init",
    value: function init() {}
    /**
     * Destroy the plugin instance
     *
     * Stop doing something. This is called by
     * `wavesurfer.destroyPlugin(pluginName)`
     */
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);
  return PluginClass;
}();
/**
 * WaveSurfer core library class
 *
 * @extends {Observer}
 * @example
 * const params = {
 *   container: '#waveform',
 *   waveColor: 'violet',
 *   progressColor: 'purple'
 * };
 *
 * // initialise like this
 * const wavesurfer = WaveSurfer.create(params);
 *
 * // or like this ...
 * const wavesurfer = new WaveSurfer(params);
 * wavesurfer.init();
 *
 * // load audio file
 * wavesurfer.load('example/media/demo.wav');
 */
var WaveSurfer = /*#__PURE__*/function (_util$Observer) {
  _inherits(WaveSurfer, _util$Observer);
  var _super = _createSuper(WaveSurfer);
  /**
   * Initialise wavesurfer instance
   *
   * @param {WavesurferParams} params Instantiation options for wavesurfer
   * @example
   * const wavesurfer = new WaveSurfer(params);
   * @returns {this} Wavesurfer instance
   */
  function WaveSurfer(params) {
    var _this;
    _classCallCheck(this, WaveSurfer);
    _this = _super.call(this);
    /**
     * Extract relevant parameters (or defaults)
     * @private
     */
    /** @private */
    _defineProperty(_assertThisInitialized(_this), "defaultParams", {
      audioContext: null,
      audioScriptProcessor: null,
      audioRate: 1,
      autoCenter: true,
      autoCenterRate: 5,
      autoCenterImmediately: false,
      backend: 'WebAudio',
      backgroundColor: null,
      barHeight: 1,
      barRadius: 0,
      barGap: null,
      barMinHeight: null,
      container: null,
      cursorColor: '#333',
      cursorWidth: 1,
      dragSelection: true,
      drawingContextAttributes: {
        // Boolean that hints the user agent to reduce the latency
        // by desynchronizing the canvas paint cycle from the event
        // loop
        desynchronized: false
      },
      duration: null,
      fillParent: true,
      forceDecode: false,
      height: 128,
      hideScrollbar: false,
      hideCursor: false,
      ignoreSilenceMode: false,
      interact: true,
      loopSelection: true,
      maxCanvasWidth: 4000,
      mediaContainer: null,
      mediaControls: false,
      mediaType: 'audio',
      minPxPerSec: 20,
      normalize: false,
      partialRender: false,
      pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
      plugins: [],
      progressColor: '#555',
      removeMediaElementOnDestroy: true,
      renderer: _drawer.default,
      responsive: false,
      rtl: false,
      scrollParent: false,
      skipLength: 2,
      splitChannels: false,
      splitChannelsOptions: {
        overlay: false,
        channelColors: {},
        filterChannels: [],
        relativeNormalization: false,
        splitDragSelection: false
      },
      vertical: false,
      waveColor: '#999',
      xhr: {}
    });
    /** @private */
    _defineProperty(_assertThisInitialized(_this), "backends", {
      MediaElement: _mediaelement.default,
      WebAudio: _webaudio.default,
      MediaElementWebAudio: _mediaelementWebaudio.default
    });
    /**
     * Functions in the `util` property are available as a prototype property to
     * all instances
     *
     * @type {Object}
     * @example
     * const wavesurfer = WaveSurfer.create(params);
     * wavesurfer.util.style(myElement, { background: 'blue' });
     */
    _defineProperty(_assertThisInitialized(_this), "util", util);
    _this.params = Object.assign({}, _this.defaultParams, params);
    _this.params.splitChannelsOptions = Object.assign({}, _this.defaultParams.splitChannelsOptions, params.splitChannelsOptions);
    /** @private */
    _this.container = 'string' == typeof params.container ? document.querySelector(_this.params.container) : _this.params.container;
    if (!_this.container) {
      throw new Error('Container element not found');
    }
    if (_this.params.mediaContainer == null) {
      /** @private */
      _this.mediaContainer = _this.container;
    } else if (typeof _this.params.mediaContainer == 'string') {
      /** @private */
      _this.mediaContainer = document.querySelector(_this.params.mediaContainer);
    } else {
      /** @private */
      _this.mediaContainer = _this.params.mediaContainer;
    }
    if (!_this.mediaContainer) {
      throw new Error('Media Container element not found');
    }
    if (_this.params.maxCanvasWidth <= 1) {
      throw new Error('maxCanvasWidth must be greater than 1');
    } else if (_this.params.maxCanvasWidth % 2 == 1) {
      throw new Error('maxCanvasWidth must be an even number');
    }
    if (_this.params.rtl === true) {
      if (_this.params.vertical === true) {
        util.style(_this.container, {
          transform: 'rotateX(180deg)'
        });
      } else {
        util.style(_this.container, {
          transform: 'rotateY(180deg)'
        });
      }
    }
    if (_this.params.backgroundColor) {
      _this.setBackgroundColor(_this.params.backgroundColor);
    }

    /**
     * @private Used to save the current volume when muting so we can
     * restore once unmuted
     * @type {number}
     */
    _this.savedVolume = 0;

    /**
     * @private The current muted state
     * @type {boolean}
     */
    _this.isMuted = false;

    /**
     * @private Will hold a list of event descriptors that need to be
     * canceled on subsequent loads of audio
     * @type {Object[]}
     */
    _this.tmpEvents = [];

    /**
     * @private Holds any running audio downloads
     * @type {Observer}
     */
    _this.currentRequest = null;
    /** @private */
    _this.arraybuffer = null;
    /** @private */
    _this.drawer = null;
    /** @private */
    _this.backend = null;
    /** @private */
    _this.peakCache = null;

    // cache constructor objects
    if (typeof _this.params.renderer !== 'function') {
      throw new Error('Renderer parameter is invalid');
    }
    /**
     * @private The uninitialised Drawer class
     */
    _this.Drawer = _this.params.renderer;
    /**
     * @private The uninitialised Backend class
     */
    // Back compat
    if (_this.params.backend == 'AudioElement') {
      _this.params.backend = 'MediaElement';
    }
    if ((_this.params.backend == 'WebAudio' || _this.params.backend === 'MediaElementWebAudio') && !_webaudio.default.prototype.supportsWebAudio.call(null)) {
      _this.params.backend = 'MediaElement';
    }
    _this.Backend = _this.backends[_this.params.backend];

    /**
     * @private map of plugin names that are currently initialised
     */
    _this.initialisedPluginList = {};
    /** @private */
    _this.isDestroyed = false;

    /**
     * Get the current ready status.
     *
     * @example const isReady = wavesurfer.isReady;
     * @return {boolean}
     */
    _this.isReady = false;

    // responsive debounced event listener. If this.params.responsive is not
    // set, this is never called. Use 100ms or this.params.responsive as
    // timeout for the debounce function.
    var prevWidth = 0;
    _this._onResize = util.debounce(function () {
      if (_this.drawer.wrapper && prevWidth != _this.drawer.wrapper.clientWidth && !_this.params.scrollParent) {
        prevWidth = _this.drawer.wrapper.clientWidth;
        if (prevWidth) {
          // redraw only if waveform container is rendered and has a width
          _this.drawer.fireEvent('redraw');
        }
      }
    }, typeof _this.params.responsive === 'number' ? _this.params.responsive : 100);
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  /**
   * Initialise the wave
   *
   * @example
   * var wavesurfer = new WaveSurfer(params);
   * wavesurfer.init();
   * @return {this} The wavesurfer instance
   */
  _createClass(WaveSurfer, [{
    key: "init",
    value: function init() {
      this.registerPlugins(this.params.plugins);
      this.createDrawer();
      this.createBackend();
      this.createPeakCache();
      return this;
    }

    /**
     * Add and initialise array of plugins (if `plugin.deferInit` is falsey),
     * this function is called in the init function of wavesurfer
     *
     * @param {PluginDefinition[]} plugins An array of plugin definitions
     * @emits {WaveSurfer#plugins-registered} Called with the array of plugin definitions
     * @return {this} The wavesurfer instance
     */
  }, {
    key: "registerPlugins",
    value: function registerPlugins(plugins) {
      var _this2 = this;
      // first instantiate all the plugins
      plugins.forEach(function (plugin) {
        return _this2.addPlugin(plugin);
      });

      // now run the init functions
      plugins.forEach(function (plugin) {
        // call init function of the plugin if deferInit is falsey
        // in that case you would manually use initPlugins()
        if (!plugin.deferInit) {
          _this2.initPlugin(plugin.name);
        }
      });
      this.fireEvent('plugins-registered', plugins);
      return this;
    }

    /**
     * Get a map of plugin names that are currently initialised
     *
     * @example wavesurfer.getPlugins();
     * @return {Object} Object with plugin names
     */
  }, {
    key: "getActivePlugins",
    value: function getActivePlugins() {
      return this.initialisedPluginList;
    }

    /**
     * Add a plugin object to wavesurfer
     *
     * @param {PluginDefinition} plugin A plugin definition
     * @emits {WaveSurfer#plugin-added} Called with the name of the plugin that was added
     * @example wavesurfer.addPlugin(WaveSurfer.minimap());
     * @return {this} The wavesurfer instance
     */
  }, {
    key: "addPlugin",
    value: function addPlugin(plugin) {
      var _this3 = this;
      if (!plugin.name) {
        throw new Error('Plugin does not have a name!');
      }
      if (!plugin.instance) {
        throw new Error("Plugin ".concat(plugin.name, " does not have an instance property!"));
      }

      // staticProps properties are applied to wavesurfer instance
      if (plugin.staticProps) {
        Object.keys(plugin.staticProps).forEach(function (pluginStaticProp) {
          /**
           * Properties defined in a plugin definition's `staticProps` property are added as
           * staticProps properties of the WaveSurfer instance
           */
          _this3[pluginStaticProp] = plugin.staticProps[pluginStaticProp];
        });
      }
      var Instance = plugin.instance;

      // turn the plugin instance into an observer
      var observerPrototypeKeys = Object.getOwnPropertyNames(util.Observer.prototype);
      observerPrototypeKeys.forEach(function (key) {
        Instance.prototype[key] = util.Observer.prototype[key];
      });

      /**
       * Instantiated plugin classes are added as a property of the wavesurfer
       * instance
       * @type {Object}
       */
      this[plugin.name] = new Instance(plugin.params || {}, this);
      this.fireEvent('plugin-added', plugin.name);
      return this;
    }

    /**
     * Initialise a plugin
     *
     * @param {string} name A plugin name
     * @emits WaveSurfer#plugin-initialised
     * @example wavesurfer.initPlugin('minimap');
     * @return {this} The wavesurfer instance
     */
  }, {
    key: "initPlugin",
    value: function initPlugin(name) {
      if (!this[name]) {
        throw new Error("Plugin ".concat(name, " has not been added yet!"));
      }
      if (this.initialisedPluginList[name]) {
        // destroy any already initialised plugins
        this.destroyPlugin(name);
      }
      this[name].init();
      this.initialisedPluginList[name] = true;
      this.fireEvent('plugin-initialised', name);
      return this;
    }

    /**
     * Destroy a plugin
     *
     * @param {string} name A plugin name
     * @emits WaveSurfer#plugin-destroyed
     * @example wavesurfer.destroyPlugin('minimap');
     * @returns {this} The wavesurfer instance
     */
  }, {
    key: "destroyPlugin",
    value: function destroyPlugin(name) {
      if (!this[name]) {
        throw new Error("Plugin ".concat(name, " has not been added yet and cannot be destroyed!"));
      }
      if (!this.initialisedPluginList[name]) {
        throw new Error("Plugin ".concat(name, " is not active and cannot be destroyed!"));
      }
      if (typeof this[name].destroy !== 'function') {
        throw new Error("Plugin ".concat(name, " does not have a destroy function!"));
      }
      this[name].destroy();
      delete this.initialisedPluginList[name];
      this.fireEvent('plugin-destroyed', name);
      return this;
    }

    /**
     * Destroy all initialised plugins. Convenience function to use when
     * wavesurfer is removed
     *
     * @private
     */
  }, {
    key: "destroyAllPlugins",
    value: function destroyAllPlugins() {
      var _this4 = this;
      Object.keys(this.initialisedPluginList).forEach(function (name) {
        return _this4.destroyPlugin(name);
      });
    }

    /**
     * Create the drawer and draw the waveform
     *
     * @private
     * @emits WaveSurfer#drawer-created
     */
  }, {
    key: "createDrawer",
    value: function createDrawer() {
      var _this5 = this;
      this.drawer = new this.Drawer(this.container, this.params);
      this.drawer.init();
      this.fireEvent('drawer-created', this.drawer);
      if (this.params.responsive !== false) {
        window.addEventListener('resize', this._onResize, true);
        window.addEventListener('orientationchange', this._onResize, true);
      }
      this.drawer.on('redraw', function () {
        _this5.drawBuffer();
        _this5.drawer.progress(_this5.backend.getPlayedPercents());
      });

      // Click-to-seek
      this.drawer.on('click', function (e, progress) {
        setTimeout(function () {
          return _this5.seekTo(progress);
        }, 0);
      });

      // Relay the scroll event from the drawer
      this.drawer.on('scroll', function (e) {
        if (_this5.params.partialRender) {
          _this5.drawBuffer();
        }
        _this5.fireEvent('scroll', e);
      });

      // Relay the dblclick event from the drawer
      this.drawer.on('dblclick', function (e, progress) {
        _this5.fireEvent('dblclick', e, progress);
      });
    }

    /**
     * Create the backend
     *
     * @private
     * @emits WaveSurfer#backend-created
     */
  }, {
    key: "createBackend",
    value: function createBackend() {
      var _this6 = this;
      if (this.backend) {
        this.backend.destroy();
      }
      this.backend = new this.Backend(this.params);
      this.backend.init();
      this.fireEvent('backend-created', this.backend);
      this.backend.on('finish', function () {
        _this6.drawer.progress(_this6.backend.getPlayedPercents());
        _this6.fireEvent('finish');
      });
      this.backend.on('play', function () {
        return _this6.fireEvent('play');
      });
      this.backend.on('pause', function () {
        return _this6.fireEvent('pause');
      });
      this.backend.on('audioprocess', function (time) {
        _this6.drawer.progress(_this6.backend.getPlayedPercents());
        _this6.fireEvent('audioprocess', time);
      });

      // only needed for MediaElement and MediaElementWebAudio backend
      if (this.params.backend === 'MediaElement' || this.params.backend === 'MediaElementWebAudio') {
        this.backend.on('seek', function () {
          _this6.drawer.progress(_this6.backend.getPlayedPercents());
        });
        this.backend.on('volume', function () {
          var newVolume = _this6.getVolume();
          _this6.fireEvent('volume', newVolume);
          if (_this6.backend.isMuted !== _this6.isMuted) {
            _this6.isMuted = _this6.backend.isMuted;
            _this6.fireEvent('mute', _this6.isMuted);
          }
        });
      }
    }

    /**
     * Create the peak cache
     *
     * @private
     */
  }, {
    key: "createPeakCache",
    value: function createPeakCache() {
      if (this.params.partialRender) {
        this.peakCache = new _peakcache.default();
      }
    }

    /**
     * Get the duration of the audio clip
     *
     * @example const duration = wavesurfer.getDuration();
     * @return {number} Duration in seconds
     */
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.backend.getDuration();
    }

    /**
     * Get the current playback position
     *
     * @example const currentTime = wavesurfer.getCurrentTime();
     * @return {number} Playback position in seconds
     */
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.backend.getCurrentTime();
    }

    /**
     * Set the current play time in seconds.
     *
     * @param {number} seconds A positive number in seconds. E.g. 10 means 10
     * seconds, 60 means 1 minute
     */
  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(seconds) {
      if (seconds >= this.getDuration()) {
        this.seekTo(1);
      } else {
        this.seekTo(seconds / this.getDuration());
      }
    }

    /**
     * Starts playback from the current position. Optional start and end
     * measured in seconds can be used to set the range of audio to play.
     *
     * @param {?number} start Position to start at
     * @param {?number} end Position to end at
     * @emits WaveSurfer#interaction
     * @return {Promise} Result of the backend play method
     * @example
     * // play from second 1 to 5
     * wavesurfer.play(1, 5);
     */
  }, {
    key: "play",
    value: function play(start, end) {
      var _this7 = this;
      if (this.params.ignoreSilenceMode) {
        // ignores device hardware silence mode
        util.ignoreSilenceMode();
      }
      this.fireEvent('interaction', function () {
        return _this7.play(start, end);
      });
      return this.backend.play(start, end);
    }

    /**
     * Set a point in seconds for playback to stop at.
     *
     * @param {number} position Position (in seconds) to stop at
     * @version 3.3.0
     */
  }, {
    key: "setPlayEnd",
    value: function setPlayEnd(position) {
      this.backend.setPlayEnd(position);
    }

    /**
     * Stops and pauses playback
     *
     * @example wavesurfer.pause();
     * @return {Promise} Result of the backend pause method
     */
  }, {
    key: "pause",
    value: function pause() {
      if (!this.backend.isPaused()) {
        return this.backend.pause();
      }
    }

    /**
     * Toggle playback
     *
     * @example wavesurfer.playPause();
     * @return {Promise} Result of the backend play or pause method
     */
  }, {
    key: "playPause",
    value: function playPause() {
      return this.backend.isPaused() ? this.play() : this.pause();
    }

    /**
     * Get the current playback state
     *
     * @example const isPlaying = wavesurfer.isPlaying();
     * @return {boolean} False if paused, true if playing
     */
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return !this.backend.isPaused();
    }

    /**
     * Skip backward
     *
     * @param {?number} seconds Amount to skip back, if not specified `skipLength`
     * is used
     * @example wavesurfer.skipBackward();
     */
  }, {
    key: "skipBackward",
    value: function skipBackward(seconds) {
      this.skip(-seconds || -this.params.skipLength);
    }

    /**
     * Skip forward
     *
     * @param {?number} seconds Amount to skip back, if not specified `skipLength`
     * is used
     * @example wavesurfer.skipForward();
     */
  }, {
    key: "skipForward",
    value: function skipForward(seconds) {
      this.skip(seconds || this.params.skipLength);
    }

    /**
     * Skip a number of seconds from the current position (use a negative value
     * to go backwards).
     *
     * @param {number} offset Amount to skip back or forwards
     * @example
     * // go back 2 seconds
     * wavesurfer.skip(-2);
     */
  }, {
    key: "skip",
    value: function skip(offset) {
      var duration = this.getDuration() || 1;
      var position = this.getCurrentTime() || 0;
      position = Math.max(0, Math.min(duration, position + (offset || 0)));
      this.seekAndCenter(position / duration);
    }

    /**
     * Seeks to a position and centers the view
     *
     * @param {number} progress Between 0 (=beginning) and 1 (=end)
     * @example
     * // seek and go to the middle of the audio
     * wavesurfer.seekTo(0.5);
     */
  }, {
    key: "seekAndCenter",
    value: function seekAndCenter(progress) {
      this.seekTo(progress);
      this.drawer.recenter(progress);
    }

    /**
     * Seeks to a position
     *
     * @param {number} progress Between 0 (=beginning) and 1 (=end)
     * @emits WaveSurfer#interaction
     * @emits WaveSurfer#seek
     * @example
     * // seek to the middle of the audio
     * wavesurfer.seekTo(0.5);
     */
  }, {
    key: "seekTo",
    value: function seekTo(progress) {
      var _this8 = this;
      // return an error if progress is not a number between 0 and 1
      if (typeof progress !== 'number' || !isFinite(progress) || progress < 0 || progress > 1) {
        throw new Error('Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!');
      }
      this.fireEvent('interaction', function () {
        return _this8.seekTo(progress);
      });
      var isWebAudioBackend = this.params.backend === 'WebAudio';
      var paused = this.backend.isPaused();
      if (isWebAudioBackend && !paused) {
        this.backend.pause();
      }

      // avoid small scrolls while paused seeking
      var oldScrollParent = this.params.scrollParent;
      this.params.scrollParent = false;
      this.backend.seekTo(progress * this.getDuration());
      this.drawer.progress(progress);
      if (isWebAudioBackend && !paused) {
        this.backend.play();
      }
      this.params.scrollParent = oldScrollParent;
      this.fireEvent('seek', progress);
    }

    /**
     * Stops and goes to the beginning.
     *
     * @example wavesurfer.stop();
     */
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      this.seekTo(0);
      this.drawer.progress(0);
    }

    /**
     * Sets the ID of the audio device to use for output and returns a Promise.
     *
     * @param {string} deviceId String value representing underlying output
     * device
     * @returns {Promise} `Promise` that resolves to `undefined` when there are
     * no errors detected.
     */
  }, {
    key: "setSinkId",
    value: function setSinkId(deviceId) {
      return this.backend.setSinkId(deviceId);
    }

    /**
     * Set the playback volume.
     *
     * @param {number} newVolume A value between 0 and 1, 0 being no
     * volume and 1 being full volume.
     * @emits WaveSurfer#volume
     */
  }, {
    key: "setVolume",
    value: function setVolume(newVolume) {
      if (this.isMuted === true) {
        this.savedVolume = newVolume;
        return;
      }
      this.backend.setVolume(newVolume);
      this.fireEvent('volume', newVolume);
    }

    /**
     * Get the playback volume.
     *
     * @return {number} A value between 0 and 1, 0 being no
     * volume and 1 being full volume.
     */
  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.backend.getVolume();
    }

    /**
     * Set the playback rate.
     *
     * @param {number} rate A positive number. E.g. 0.5 means half the normal
     * speed, 2 means double speed and so on.
     * @example wavesurfer.setPlaybackRate(2);
     */
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.backend.setPlaybackRate(rate);
    }

    /**
     * Get the playback rate.
     *
     * @return {number} The current playback rate.
     */
  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.backend.getPlaybackRate();
    }

    /**
     * Toggle the volume on and off. If not currently muted it will save the
     * current volume value and turn the volume off. If currently muted then it
     * will restore the volume to the saved value, and then rest the saved
     * value.
     *
     * @example wavesurfer.toggleMute();
     */
  }, {
    key: "toggleMute",
    value: function toggleMute() {
      this.setMute(!this.isMuted);
    }

    /**
     * Enable or disable muted audio
     *
     * @param {boolean} mute Specify `true` to mute audio.
     * @emits WaveSurfer#volume
     * @emits WaveSurfer#mute
     * @example
     * // unmute
     * wavesurfer.setMute(false);
     * console.log(wavesurfer.getMute()) // logs false
     */
  }, {
    key: "setMute",
    value: function setMute(mute) {
      // ignore all muting requests if the audio is already in that state
      if (mute === this.isMuted) {
        this.fireEvent('mute', this.isMuted);
        return;
      }
      if (this.backend.setMute) {
        // Backends such as the MediaElement backend have their own handling
        // of mute, let them handle it.
        this.backend.setMute(mute);
        this.isMuted = mute;
      } else {
        if (mute) {
          // If currently not muted then save current volume,
          // turn off the volume and update the mute properties
          this.savedVolume = this.backend.getVolume();
          this.backend.setVolume(0);
          this.isMuted = true;
          this.fireEvent('volume', 0);
        } else {
          // If currently muted then restore to the saved volume
          // and update the mute properties
          this.backend.setVolume(this.savedVolume);
          this.isMuted = false;
          this.fireEvent('volume', this.savedVolume);
        }
      }
      this.fireEvent('mute', this.isMuted);
    }

    /**
     * Get the current mute status.
     *
     * @example const isMuted = wavesurfer.getMute();
     * @return {boolean} Current mute status
     */
  }, {
    key: "getMute",
    value: function getMute() {
      return this.isMuted;
    }

    /**
     * Get the list of current set filters as an array.
     *
     * Filters must be set with setFilters method first
     *
     * @return {array} List of enabled filters
     */
  }, {
    key: "getFilters",
    value: function getFilters() {
      return this.backend.filters || [];
    }

    /**
     * Toggles `scrollParent` and redraws
     *
     * @example wavesurfer.toggleScroll();
     */
  }, {
    key: "toggleScroll",
    value: function toggleScroll() {
      this.params.scrollParent = !this.params.scrollParent;
      this.drawBuffer();
    }

    /**
     * Toggle mouse interaction
     *
     * @example wavesurfer.toggleInteraction();
     */
  }, {
    key: "toggleInteraction",
    value: function toggleInteraction() {
      this.params.interact = !this.params.interact;
    }

    /**
     * Get the fill color of the waveform after the cursor.
     *
     * @param {?number} channelIdx Optional index of the channel to get its wave color if splitChannels is true
     * @return {string|object} A CSS color string, or an array of CSS color strings.
     */
  }, {
    key: "getWaveColor",
    value: function getWaveColor() {
      var channelIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        return this.params.splitChannelsOptions.channelColors[channelIdx].waveColor;
      }
      return this.params.waveColor;
    }

    /**
     * Set the fill color of the waveform after the cursor.
     *
     * @param {string|object} color A CSS color string, or an array of CSS color strings.
     * @param {?number} channelIdx Optional index of the channel to set its wave color if splitChannels is true
     * @example wavesurfer.setWaveColor('#ddd');
     */
  }, {
    key: "setWaveColor",
    value: function setWaveColor(color) {
      var channelIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        this.params.splitChannelsOptions.channelColors[channelIdx].waveColor = color;
      } else {
        this.params.waveColor = color;
      }
      this.drawBuffer();
    }

    /**
     * Get the fill color of the waveform behind the cursor.
     *
     * @param {?number} channelIdx Optional index of the channel to get its progress color if splitChannels is true
     * @return {string|object} A CSS color string, or an array of CSS color strings.
     */
  }, {
    key: "getProgressColor",
    value: function getProgressColor() {
      var channelIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        return this.params.splitChannelsOptions.channelColors[channelIdx].progressColor;
      }
      return this.params.progressColor;
    }

    /**
     * Set the fill color of the waveform behind the cursor.
     *
     * @param {string|object} color A CSS color string, or an array of CSS color strings.
     * @param {?number} channelIdx Optional index of the channel to set its progress color if splitChannels is true
     * @example wavesurfer.setProgressColor('#400');
     */
  }, {
    key: "setProgressColor",
    value: function setProgressColor(color, channelIdx) {
      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        this.params.splitChannelsOptions.channelColors[channelIdx].progressColor = color;
      } else {
        this.params.progressColor = color;
      }
      this.drawBuffer();
    }

    /**
     * Get the background color of the waveform container.
     *
     * @return {string} A CSS color string.
     */
  }, {
    key: "getBackgroundColor",
    value: function getBackgroundColor() {
      return this.params.backgroundColor;
    }

    /**
     * Set the background color of the waveform container.
     *
     * @param {string} color A CSS color string.
     * @example wavesurfer.setBackgroundColor('#FF00FF');
     */
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(color) {
      this.params.backgroundColor = color;
      util.style(this.container, {
        background: this.params.backgroundColor
      });
    }

    /**
     * Get the fill color of the cursor indicating the playhead
     * position.
     *
     * @return {string} A CSS color string.
     */
  }, {
    key: "getCursorColor",
    value: function getCursorColor() {
      return this.params.cursorColor;
    }

    /**
     * Set the fill color of the cursor indicating the playhead
     * position.
     *
     * @param {string} color A CSS color string.
     * @example wavesurfer.setCursorColor('#222');
     */
  }, {
    key: "setCursorColor",
    value: function setCursorColor(color) {
      this.params.cursorColor = color;
      this.drawer.updateCursor();
    }

    /**
     * Get the height of the waveform.
     *
     * @return {number} Height measured in pixels.
     */
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.params.height;
    }

    /**
     * Set the height of the waveform.
     *
     * @param {number} height Height measured in pixels.
     * @example wavesurfer.setHeight(200);
     */
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.params.height = height;
      this.drawer.setHeight(height * this.params.pixelRatio);
      this.drawBuffer();
    }

    /**
     * Hide channels from being drawn on the waveform if splitting channels.
     *
     * For example, if we want to draw only the peaks for the right stereo channel:
     *
     * const wavesurfer = new WaveSurfer.create({...splitChannels: true});
     * wavesurfer.load('stereo_audio.mp3');
     *
     * wavesurfer.setFilteredChannel([0]); <-- hide left channel peaks.
     *
     * @param {array} channelIndices Channels to be filtered out from drawing.
     * @version 4.0.0
     */
  }, {
    key: "setFilteredChannels",
    value: function setFilteredChannels(channelIndices) {
      this.params.splitChannelsOptions.filterChannels = channelIndices;
      this.drawBuffer();
    }

    /**
     * Get the correct peaks for current wave view-port and render wave
     *
     * @private
     * @emits WaveSurfer#redraw
     */
  }, {
    key: "drawBuffer",
    value: function drawBuffer() {
      var nominalWidth = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio);
      var parentWidth = this.drawer.getWidth();
      var width = nominalWidth;
      // always start at 0 after zooming for scrolling : issue redraw left part
      var start = 0;
      var end = Math.max(start + parentWidth, width);
      // Fill container
      if (this.params.fillParent && (!this.params.scrollParent || nominalWidth < parentWidth)) {
        width = parentWidth;
        start = 0;
        end = width;
      }
      var peaks;
      if (this.params.partialRender) {
        var newRanges = this.peakCache.addRangeToPeakCache(width, start, end);
        var i;
        for (i = 0; i < newRanges.length; i++) {
          peaks = this.backend.getPeaks(width, newRanges[i][0], newRanges[i][1]);
          this.drawer.drawPeaks(peaks, width, newRanges[i][0], newRanges[i][1]);
        }
      } else {
        peaks = this.backend.getPeaks(width, start, end);
        this.drawer.drawPeaks(peaks, width, start, end);
      }
      this.fireEvent('redraw', peaks, width);
    }

    /**
     * Horizontally zooms the waveform in and out. It also changes the parameter
     * `minPxPerSec` and enables the `scrollParent` option. Calling the function
     * with a falsey parameter will reset the zoom state.
     *
     * @param {?number} pxPerSec Number of horizontal pixels per second of
     * audio, if none is set the waveform returns to unzoomed state
     * @emits WaveSurfer#zoom
     * @example wavesurfer.zoom(20);
     */
  }, {
    key: "zoom",
    value: function zoom(pxPerSec) {
      if (!pxPerSec) {
        this.params.minPxPerSec = this.defaultParams.minPxPerSec;
        this.params.scrollParent = false;
      } else {
        this.params.minPxPerSec = pxPerSec;
        this.params.scrollParent = true;
      }
      this.drawBuffer();
      this.drawer.progress(this.backend.getPlayedPercents());
      this.drawer.recenter(this.getCurrentTime() / this.getDuration());
      this.fireEvent('zoom', pxPerSec);
    }

    /**
     * Decode buffer and load
     *
     * @private
     * @param {ArrayBuffer} arraybuffer Buffer to process
     */
  }, {
    key: "loadArrayBuffer",
    value: function loadArrayBuffer(arraybuffer) {
      var _this9 = this;
      this.decodeArrayBuffer(arraybuffer, function (data) {
        if (!_this9.isDestroyed) {
          _this9.loadDecodedBuffer(data);
        }
      });
    }

    /**
     * Directly load an externally decoded AudioBuffer
     *
     * @private
     * @param {AudioBuffer} buffer Buffer to process
     * @emits WaveSurfer#ready
     */
  }, {
    key: "loadDecodedBuffer",
    value: function loadDecodedBuffer(buffer) {
      this.backend.load(buffer);
      this.drawBuffer();
      this.isReady = true;
      this.fireEvent('ready');
    }

    /**
     * Loads audio data from a Blob or File object
     *
     * @param {Blob|File} blob Audio data
     * @example
     */
  }, {
    key: "loadBlob",
    value: function loadBlob(blob) {
      var _this10 = this;
      // Create file reader
      var reader = new FileReader();
      reader.addEventListener('progress', function (e) {
        return _this10.onProgress(e);
      });
      reader.addEventListener('load', function (e) {
        return _this10.loadArrayBuffer(e.target.result);
      });
      reader.addEventListener('error', function () {
        return _this10.fireEvent('error', 'Error reading file');
      });
      reader.readAsArrayBuffer(blob);
      this.empty();
    }

    /**
     * Loads audio and re-renders the waveform.
     *
     * @param {string|HTMLMediaElement} url The url of the audio file or the
     * audio element with the audio
     * @param {number[]|Number.<Array[]>} peaks Wavesurfer does not have to decode
     * the audio to render the waveform if this is specified
     * @param {?string} preload (Use with backend `MediaElement` and `MediaElementWebAudio`)
     * `'none'|'metadata'|'auto'` Preload attribute for the media element
     * @param {?number} duration The duration of the audio. This is used to
     * render the peaks data in the correct size for the audio duration (as
     * befits the current `minPxPerSec` and zoom value) without having to decode
     * the audio.
     * @returns {void}
     * @throws Will throw an error if the `url` argument is empty.
     * @example
     * // uses fetch or media element to load file (depending on backend)
     * wavesurfer.load('http://example.com/demo.wav');
     *
     * // setting preload attribute with media element backend and supplying
     * // peaks
     * wavesurfer.load(
     *   'http://example.com/demo.wav',
     *   [0.0218, 0.0183, 0.0165, 0.0198, 0.2137, 0.2888],
     *   true
     * );
     */
  }, {
    key: "load",
    value: function load(url, peaks, preload, duration) {
      if (!url) {
        throw new Error('url parameter cannot be empty');
      }
      this.empty();
      if (preload) {
        // check whether the preload attribute will be usable and if not log
        // a warning listing the reasons why not and nullify the variable
        var preloadIgnoreReasons = {
          "Preload is not 'auto', 'none' or 'metadata'": ['auto', 'metadata', 'none'].indexOf(preload) === -1,
          'Peaks are not provided': !peaks,
          "Backend is not of type 'MediaElement' or 'MediaElementWebAudio'": ['MediaElement', 'MediaElementWebAudio'].indexOf(this.params.backend) === -1,
          'Url is not of type string': typeof url !== 'string'
        };
        var activeReasons = Object.keys(preloadIgnoreReasons).filter(function (reason) {
          return preloadIgnoreReasons[reason];
        });
        if (activeReasons.length) {
          // eslint-disable-next-line no-console
          console.warn('Preload parameter of wavesurfer.load will be ignored because:\n\t- ' + activeReasons.join('\n\t- '));
          // stop invalid values from being used
          preload = null;
        }
      }

      // loadBuffer(url, peaks, duration) requires that url is a string
      // but users can pass in a HTMLMediaElement to WaveSurfer
      if (this.params.backend === 'WebAudio' && url instanceof HTMLMediaElement) {
        url = url.src;
      }
      switch (this.params.backend) {
        case 'WebAudio':
          return this.loadBuffer(url, peaks, duration);
        case 'MediaElement':
        case 'MediaElementWebAudio':
          return this.loadMediaElement(url, peaks, preload, duration);
      }
    }

    /**
     * Loads audio using Web Audio buffer backend.
     *
     * @private
     * @emits WaveSurfer#waveform-ready
     * @param {string} url URL of audio file
     * @param {number[]|Number.<Array[]>} peaks Peaks data
     * @param {?number} duration Optional duration of audio file
     * @returns {void}
     */
  }, {
    key: "loadBuffer",
    value: function loadBuffer(url, peaks, duration) {
      var _this11 = this;
      var load = function load(action) {
        if (action) {
          _this11.tmpEvents.push(_this11.once('ready', action));
        }
        return _this11.getArrayBuffer(url, function (data) {
          return _this11.loadArrayBuffer(data);
        });
      };
      if (peaks) {
        this.backend.setPeaks(peaks, duration);
        this.drawBuffer();
        this.fireEvent('waveform-ready');
        this.tmpEvents.push(this.once('interaction', load));
      } else {
        return load();
      }
    }

    /**
     * Either create a media element, or load an existing media element.
     *
     * @private
     * @emits WaveSurfer#waveform-ready
     * @param {string|HTMLMediaElement} urlOrElt Either a path to a media file, or an
     * existing HTML5 Audio/Video Element
     * @param {number[]|Number.<Array[]>} peaks Array of peaks. Required to bypass web audio
     * dependency
     * @param {?boolean} preload Set to true if the preload attribute of the
     * audio element should be enabled
     * @param {?number} duration Optional duration of audio file
     */
  }, {
    key: "loadMediaElement",
    value: function loadMediaElement(urlOrElt, peaks, preload, duration) {
      var _this12 = this;
      var url = urlOrElt;
      if (typeof urlOrElt === 'string') {
        this.backend.load(url, this.mediaContainer, peaks, preload);
      } else {
        var elt = urlOrElt;
        this.backend.loadElt(elt, peaks);

        // If peaks are not provided,
        // url = element.src so we can get peaks with web audio
        url = elt.src;
      }
      this.tmpEvents.push(this.backend.once('canplay', function () {
        // ignore when backend was already destroyed
        if (!_this12.backend.destroyed) {
          _this12.drawBuffer();
          _this12.isReady = true;
          _this12.fireEvent('ready');
        }
      }), this.backend.once('error', function (err) {
        return _this12.fireEvent('error', err);
      }));

      // If peaks are provided, render them and fire the `waveform-ready` event.
      if (peaks) {
        this.backend.setPeaks(peaks, duration);
        this.drawBuffer();
        this.fireEvent('waveform-ready');
      }

      // If no pre-decoded peaks are provided, or are provided with
      // forceDecode flag, attempt to download the audio file and decode it
      // with Web Audio.
      if ((!peaks || this.params.forceDecode) && this.backend.supportsWebAudio()) {
        this.getArrayBuffer(url, function (arraybuffer) {
          _this12.decodeArrayBuffer(arraybuffer, function (buffer) {
            _this12.backend.buffer = buffer;
            _this12.backend.setPeaks(null);
            _this12.drawBuffer();
            _this12.fireEvent('waveform-ready');
          });
        });
      }
    }

    /**
     * Decode an array buffer and pass data to a callback
     *
     * @private
     * @param {Object} arraybuffer The array buffer to decode
     * @param {function} callback The function to call on complete
     */
  }, {
    key: "decodeArrayBuffer",
    value: function decodeArrayBuffer(arraybuffer, callback) {
      var _this13 = this;
      if (!this.isDestroyed) {
        this.arraybuffer = arraybuffer;
        this.backend.decodeArrayBuffer(arraybuffer, function (data) {
          // Only use the decoded data if we haven't been destroyed or
          // another decode started in the meantime
          if (!_this13.isDestroyed && _this13.arraybuffer == arraybuffer) {
            callback(data);
            _this13.arraybuffer = null;
          }
        }, function () {
          return _this13.fireEvent('error', 'Error decoding audiobuffer');
        });
      }
    }

    /**
     * Load an array buffer using fetch and pass the result to a callback
     *
     * @param {string} url The URL of the file object
     * @param {function} callback The function to call on complete
     * @returns {util.fetchFile} fetch call
     * @private
     */
  }, {
    key: "getArrayBuffer",
    value: function getArrayBuffer(url, callback) {
      var _this14 = this;
      var options = Object.assign({
        url: url,
        responseType: 'arraybuffer'
      }, this.params.xhr);
      var request = util.fetchFile(options);
      this.currentRequest = request;
      this.tmpEvents.push(request.on('progress', function (e) {
        _this14.onProgress(e);
      }), request.on('success', function (data) {
        callback(data);
        _this14.currentRequest = null;
      }), request.on('error', function (e) {
        _this14.fireEvent('error', e);
        _this14.currentRequest = null;
      }));
      return request;
    }

    /**
     * Called while the audio file is loading
     *
     * @private
     * @param {Event} e Progress event
     * @emits WaveSurfer#loading
     */
  }, {
    key: "onProgress",
    value: function onProgress(e) {
      var percentComplete;
      if (e.lengthComputable) {
        percentComplete = e.loaded / e.total;
      } else {
        // Approximate progress with an asymptotic
        // function, and assume downloads in the 1-3 MB range.
        percentComplete = e.loaded / (e.loaded + 1000000);
      }
      this.fireEvent('loading', Math.round(percentComplete * 100), e.target);
    }

    /**
     * Exports PCM data into a JSON array and optionally opens in a new window
     * as valid JSON Blob instance.
     *
     * @param {number} length=1024 The scale in which to export the peaks
     * @param {number} accuracy=10000
     * @param {?boolean} noWindow Set to true to disable opening a new
     * window with the JSON
     * @param {number} start Start index
     * @param {number} end End index
     * @return {Promise} Promise that resolves with array of peaks
     */
  }, {
    key: "exportPCM",
    value: function exportPCM(length, accuracy, noWindow, start, end) {
      length = length || 1024;
      start = start || 0;
      accuracy = accuracy || 10000;
      noWindow = noWindow || false;
      var peaks = this.backend.getPeaks(length, start, end);
      var arr = [].map.call(peaks, function (val) {
        return Math.round(val * accuracy) / accuracy;
      });
      return new Promise(function (resolve, reject) {
        if (!noWindow) {
          var blobJSON = new Blob([JSON.stringify(arr)], {
            type: 'application/json;charset=utf-8'
          });
          var objURL = URL.createObjectURL(blobJSON);
          window.open(objURL);
          URL.revokeObjectURL(objURL);
        }
        resolve(arr);
      });
    }

    /**
     * Save waveform image as data URI.
     *
     * The default format is `image/png`. Other supported types are
     * `image/jpeg` and `image/webp`.
     *
     * @param {string} format='image/png' A string indicating the image format.
     * The default format type is `image/png`.
     * @param {number} quality=1 A number between 0 and 1 indicating the image
     * quality to use for image formats that use lossy compression such as
     * `image/jpeg` and `image/webp`.
     * @param {string} type Image data type to return. Either `dataURL` (default)
     * or `blob`.
     * @return {string|string[]|Promise} When using `dataURL` type this returns
     * a single data URL or an array of data URLs, one for each canvas. When using
     * `blob` type this returns a `Promise` resolving with an array of `Blob`
     * instances, one for each canvas.
     */
  }, {
    key: "exportImage",
    value: function exportImage(format, quality, type) {
      if (!format) {
        format = 'image/png';
      }
      if (!quality) {
        quality = 1;
      }
      if (!type) {
        type = 'dataURL';
      }
      return this.drawer.getImage(format, quality, type);
    }

    /**
     * Cancel any fetch request currently in progress
     */
  }, {
    key: "cancelAjax",
    value: function cancelAjax() {
      if (this.currentRequest && this.currentRequest.controller) {
        // If the current request has a ProgressHandler, then its ReadableStream might need to be cancelled too
        // See: Wavesurfer issue #2042
        // See Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1583815
        if (this.currentRequest._reader) {
          // Ignoring exceptions thrown by call to cancel()
          this.currentRequest._reader.cancel().catch(function (err) {});
        }
        this.currentRequest.controller.abort();
        this.currentRequest = null;
      }
    }

    /**
     * @private
     */
  }, {
    key: "clearTmpEvents",
    value: function clearTmpEvents() {
      this.tmpEvents.forEach(function (e) {
        return e.un();
      });
    }

    /**
     * Display empty waveform.
     */
  }, {
    key: "empty",
    value: function empty() {
      if (!this.backend.isPaused()) {
        this.stop();
        this.backend.disconnectSource();
      }
      this.isReady = false;
      this.cancelAjax();
      this.clearTmpEvents();

      // empty drawer
      this.drawer.progress(0);
      this.drawer.setWidth(0);
      this.drawer.drawPeaks({
        length: this.drawer.getWidth()
      }, 0);
    }

    /**
     * Remove events, elements and disconnect WebAudio nodes.
     *
     * @emits WaveSurfer#destroy
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyAllPlugins();
      this.fireEvent('destroy');
      this.cancelAjax();
      this.clearTmpEvents();
      this.unAll();
      if (this.params.responsive !== false) {
        window.removeEventListener('resize', this._onResize, true);
        window.removeEventListener('orientationchange', this._onResize, true);
      }
      if (this.backend) {
        this.backend.destroy();
        // clears memory usage
        this.backend = null;
      }
      if (this.drawer) {
        this.drawer.destroy();
      }
      this.isDestroyed = true;
      this.isReady = false;
      this.arraybuffer = null;
    }
  }], [{
    key: "create",
    value:
    /**
     * Instantiate this class, call its `init` function and returns it
     *
     * @param {WavesurferParams} params The wavesurfer parameters
     * @return {Object} WaveSurfer instance
     * @example const wavesurfer = WaveSurfer.create(params);
     */
    function create(params) {
      var wavesurfer = new WaveSurfer(params);
      return wavesurfer.init();
    }

    /**
     * The library version number is available as a static property of the
     * WaveSurfer class
     *
     * @type {String}
     * @example
     * console.log('Using wavesurfer.js ' + WaveSurfer.VERSION);
     */
  }]);
  return WaveSurfer;
}(util.Observer);
exports["default"] = WaveSurfer;
_defineProperty(WaveSurfer, "VERSION", "6.6.4");
/**
 * Functions in the `util` property are available as a static property of the
 * WaveSurfer class
 *
 * @type {Object}
 * @example
 * WaveSurfer.util.style(myElement, { background: 'blue' });
 */
_defineProperty(WaveSurfer, "util", util);
module.exports = exports.default;

/***/ }),

/***/ "./src/webaudio.js":
/*!*************************!*\
  !*** ./src/webaudio.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// using constants to prevent someone writing the string wrong
var PLAYING = 'playing';
var PAUSED = 'paused';
var FINISHED = 'finished';

/**
 * WebAudio backend
 *
 * @extends {util.Observer}
 */
var WebAudio = /*#__PURE__*/function (_util$Observer) {
  _inherits(WebAudio, _util$Observer);
  var _super = _createSuper(WebAudio);
  /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */
  function WebAudio(params) {
    var _defineProperty2, _this$states;
    var _this;
    _classCallCheck(this, WebAudio);
    _this = _super.call(this);
    /** @private */
    /** audioContext: allows to process audio with WebAudio API */
    _defineProperty(_assertThisInitialized(_this), "audioContext", null);
    /** @private */
    _defineProperty(_assertThisInitialized(_this), "stateBehaviors", (_defineProperty2 = {}, _defineProperty(_defineProperty2, PLAYING, {
      init: function init() {
        this.addOnAudioProcess();
      },
      getPlayedPercents: function getPlayedPercents() {
        var duration = this.getDuration();
        return this.getCurrentTime() / duration || 0;
      },
      getCurrentTime: function getCurrentTime() {
        return this.startPosition + this.getPlayedTime();
      }
    }), _defineProperty(_defineProperty2, PAUSED, {
      init: function init() {},
      getPlayedPercents: function getPlayedPercents() {
        var duration = this.getDuration();
        return this.getCurrentTime() / duration || 0;
      },
      getCurrentTime: function getCurrentTime() {
        return this.startPosition;
      }
    }), _defineProperty(_defineProperty2, FINISHED, {
      init: function init() {
        this.fireEvent('finish');
      },
      getPlayedPercents: function getPlayedPercents() {
        return 1;
      },
      getCurrentTime: function getCurrentTime() {
        return this.getDuration();
      }
    }), _defineProperty2));
    _this.params = params;
    /** ac: Audio Context instance */
    _this.ac = params.audioContext || (_this.supportsWebAudio() ? _this.getAudioContext() : {});
    /**@private */
    _this.lastPlay = _this.ac.currentTime;
    /** @private */
    _this.startPosition = 0;
    /** @private */
    _this.scheduledPause = null;
    /** @private */
    _this.states = (_this$states = {}, _defineProperty(_this$states, PLAYING, Object.create(_this.stateBehaviors[PLAYING])), _defineProperty(_this$states, PAUSED, Object.create(_this.stateBehaviors[PAUSED])), _defineProperty(_this$states, FINISHED, Object.create(_this.stateBehaviors[FINISHED])), _this$states);
    /** @private */
    _this.buffer = null;
    /** @private */
    _this.filters = [];
    /** gainNode: allows to control audio volume */
    _this.gainNode = null;
    /** @private */
    _this.mergedPeaks = null;
    /** @private */
    _this.offlineAc = null;
    /** @private */
    _this.peaks = null;
    /** @private */
    _this.playbackRate = 1;
    /** analyser: provides audio analysis information */
    _this.analyser = null;
    /** scriptNode: allows processing audio */
    _this.scriptNode = null;
    /** @private */
    _this.source = null;
    /** @private */
    _this.splitPeaks = [];
    /** @private */
    _this.state = null;
    /** @private */
    _this.explicitDuration = params.duration;
    /** @private */
    _this.sinkStreamDestination = null;
    /** @private */
    _this.sinkAudioElement = null;
    /**
     * Boolean indicating if the backend was destroyed.
     */
    _this.destroyed = false;
    return _this;
  }

  /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */
  _createClass(WebAudio, [{
    key: "supportsWebAudio",
    value:
    /**
     * Does the browser support this backend
     *
     * @return {boolean} Whether or not this browser supports this backend
     */
    function supportsWebAudio() {
      return !!(window.AudioContext || window.webkitAudioContext);
    }

    /**
     * Get the audio context used by this backend or create one
     *
     * @return {AudioContext} Existing audio context, or creates a new one
     */
  }, {
    key: "getAudioContext",
    value: function getAudioContext() {
      if (!window.WaveSurferAudioContext) {
        window.WaveSurferAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      return window.WaveSurferAudioContext;
    }

    /**
     * Get the offline audio context used by this backend or create one
     *
     * @param {number} sampleRate The sample rate to use
     * @return {OfflineAudioContext} Existing offline audio context, or creates
     * a new one
     */
  }, {
    key: "getOfflineAudioContext",
    value: function getOfflineAudioContext(sampleRate) {
      if (!window.WaveSurferOfflineAudioContext) {
        window.WaveSurferOfflineAudioContext = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, sampleRate);
      }
      return window.WaveSurferOfflineAudioContext;
    }
  }, {
    key: "init",
    value: function init() {
      this.createVolumeNode();
      this.createScriptNode();
      this.createAnalyserNode();
      this.setState(PAUSED);
      this.setPlaybackRate(this.params.audioRate);
      this.setLength(0);
    }

    /** @private */
  }, {
    key: "disconnectFilters",
    value: function disconnectFilters() {
      if (this.filters) {
        this.filters.forEach(function (filter) {
          filter && filter.disconnect();
        });
        this.filters = null;
        // Reconnect direct path
        this.analyser.connect(this.gainNode);
      }
    }

    /**
     * @private
     *
     * @param {string} state The new state
     */
  }, {
    key: "setState",
    value: function setState(state) {
      if (this.state !== this.states[state]) {
        this.state = this.states[state];
        this.state.init.call(this);
      }
    }

    /**
     * Unpacked `setFilters()`
     *
     * @param {...AudioNode} filters One or more filters to set
     */
  }, {
    key: "setFilter",
    value: function setFilter() {
      for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
        filters[_key] = arguments[_key];
      }
      this.setFilters(filters);
    }

    /**
     * Insert custom Web Audio nodes into the graph
     *
     * @param {AudioNode[]} filters Packed filters array
     * @example
     * const lowpass = wavesurfer.backend.ac.createBiquadFilter();
     * wavesurfer.backend.setFilter(lowpass);
     */
  }, {
    key: "setFilters",
    value: function setFilters(filters) {
      // Remove existing filters
      this.disconnectFilters();

      // Insert filters if filter array not empty
      if (filters && filters.length) {
        this.filters = filters;

        // Disconnect direct path before inserting filters
        this.analyser.disconnect();

        // Connect each filter in turn
        filters.reduce(function (prev, curr) {
          prev.connect(curr);
          return curr;
        }, this.analyser).connect(this.gainNode);
      }
    }
    /** Create ScriptProcessorNode to process audio */
  }, {
    key: "createScriptNode",
    value: function createScriptNode() {
      if (this.params.audioScriptProcessor) {
        this.scriptNode = this.params.audioScriptProcessor;
        this.scriptNode.connect(this.ac.destination);
      }
    }

    /** @private */
  }, {
    key: "addOnAudioProcess",
    value: function addOnAudioProcess() {
      var _this2 = this;
      var loop = function loop() {
        var time = _this2.getCurrentTime();
        if (time >= _this2.getDuration() && _this2.state !== _this2.states[FINISHED]) {
          _this2.setState(FINISHED);
          _this2.fireEvent('pause');
        } else if (time >= _this2.scheduledPause && _this2.state !== _this2.states[PAUSED]) {
          _this2.pause();
        } else if (_this2.state === _this2.states[PLAYING]) {
          _this2.fireEvent('audioprocess', time);
          util.frame(loop)();
        }
      };
      loop();
    }

    /** Create analyser node to perform audio analysis */
  }, {
    key: "createAnalyserNode",
    value: function createAnalyserNode() {
      this.analyser = this.ac.createAnalyser();
      this.analyser.connect(this.gainNode);
    }

    /**
     * Create the gain node needed to control the playback volume.
     *
     */
  }, {
    key: "createVolumeNode",
    value: function createVolumeNode() {
      // Create gain node using the AudioContext
      if (this.ac.createGain) {
        this.gainNode = this.ac.createGain();
      } else {
        this.gainNode = this.ac.createGainNode();
      }
      // Add the gain node to the graph
      this.gainNode.connect(this.ac.destination);
    }

    /**
     * Set the sink id for the media player
     *
     * @param {string} deviceId String value representing audio device id.
     * @returns {Promise} A Promise that resolves to `undefined` when there
     * are no errors.
     */
  }, {
    key: "setSinkId",
    value: function setSinkId(deviceId) {
      if (deviceId) {
        /**
         * The webaudio API doesn't currently support setting the device
         * output. Here we create an HTMLAudioElement, connect the
         * webaudio stream to that element and setSinkId there.
         */
        if (!this.sinkAudioElement) {
          this.sinkAudioElement = new window.Audio();
          // autoplay is necessary since we're not invoking .play()
          this.sinkAudioElement.autoplay = true;
        }
        if (!this.sinkAudioElement.setSinkId) {
          return Promise.reject(new Error('setSinkId is not supported in your browser'));
        }
        if (!this.sinkStreamDestination) {
          this.sinkStreamDestination = this.ac.createMediaStreamDestination();
        }
        this.gainNode.disconnect();
        this.gainNode.connect(this.sinkStreamDestination);
        this.sinkAudioElement.srcObject = this.sinkStreamDestination.stream;
        return this.sinkAudioElement.setSinkId(deviceId);
      } else {
        return Promise.reject(new Error('Invalid deviceId: ' + deviceId));
      }
    }

    /**
     * Set the audio volume
     *
     * @param {number} value A floating point value between 0 and 1.
     */
  }, {
    key: "setVolume",
    value: function setVolume(value) {
      this.gainNode.gain.setValueAtTime(value, this.ac.currentTime);
    }

    /**
     * Get the current volume
     *
     * @return {number} value A floating point value between 0 and 1.
     */
  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.gainNode.gain.value;
    }

    /**
     * Decode an array buffer and pass data to a callback
     *
     * @private
     * @param {ArrayBuffer} arraybuffer The array buffer to decode
     * @param {function} callback The function to call on complete.
     * @param {function} errback The function to call on error.
     */
  }, {
    key: "decodeArrayBuffer",
    value: function decodeArrayBuffer(arraybuffer, callback, errback) {
      if (!this.offlineAc) {
        this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate : 44100);
      }
      if ('webkitAudioContext' in window) {
        // Safari: no support for Promise-based decodeAudioData enabled
        // Enable it in Safari using the Experimental Features > Modern WebAudio API option
        this.offlineAc.decodeAudioData(arraybuffer, function (data) {
          return callback(data);
        }, errback);
      } else {
        this.offlineAc.decodeAudioData(arraybuffer).then(function (data) {
          return callback(data);
        }).catch(function (err) {
          return errback(err);
        });
      }
    }

    /**
     * Set pre-decoded peaks
     *
     * @param {number[]|Number.<Array[]>} peaks Peaks data
     * @param {?number} duration Explicit duration
     */
  }, {
    key: "setPeaks",
    value: function setPeaks(peaks, duration) {
      if (duration != null) {
        this.explicitDuration = duration;
      }
      this.peaks = peaks;
    }

    /**
     * Set the rendered length (different from the length of the audio)
     *
     * @param {number} length The rendered length
     */
  }, {
    key: "setLength",
    value: function setLength(length) {
      // No resize, we can preserve the cached peaks.
      if (this.mergedPeaks && length == 2 * this.mergedPeaks.length - 1 + 2) {
        return;
      }
      this.splitPeaks = [];
      this.mergedPeaks = [];
      // Set the last element of the sparse array so the peak arrays are
      // appropriately sized for other calculations.
      var channels = this.buffer ? this.buffer.numberOfChannels : 1;
      var c;
      for (c = 0; c < channels; c++) {
        this.splitPeaks[c] = [];
        this.splitPeaks[c][2 * (length - 1)] = 0;
        this.splitPeaks[c][2 * (length - 1) + 1] = 0;
      }
      this.mergedPeaks[2 * (length - 1)] = 0;
      this.mergedPeaks[2 * (length - 1) + 1] = 0;
    }

    /**
     * Compute the max and min value of the waveform when broken into <length> subranges.
     *
     * @param {number} length How many subranges to break the waveform into.
     * @param {number} first First sample in the required range.
     * @param {number} last Last sample in the required range.
     * @return {number[]|Number.<Array[]>} Array of 2*<length> peaks or array of arrays of
     * peaks consisting of (max, min) values for each subrange.
     */
  }, {
    key: "getPeaks",
    value: function getPeaks(length, first, last) {
      if (this.peaks) {
        return this.peaks;
      }
      if (!this.buffer) {
        return [];
      }
      first = first || 0;
      last = last || length - 1;
      this.setLength(length);
      if (!this.buffer) {
        return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
      }

      /**
       * The following snippet fixes a buffering data issue on the Safari
       * browser which returned undefined It creates the missing buffer based
       * on 1 channel, 4096 samples and the sampleRate from the current
       * webaudio context 4096 samples seemed to be the best fit for rendering
       * will review this code once a stable version of Safari TP is out
       */
      if (!this.buffer.length) {
        var newBuffer = this.createBuffer(1, 4096, this.sampleRate);
        this.buffer = newBuffer.buffer;
      }
      var sampleSize = this.buffer.length / length;
      var sampleStep = ~~(sampleSize / 10) || 1;
      var channels = this.buffer.numberOfChannels;
      var c;
      for (c = 0; c < channels; c++) {
        var peaks = this.splitPeaks[c];
        var chan = this.buffer.getChannelData(c);
        var i = void 0;
        for (i = first; i <= last; i++) {
          var start = ~~(i * sampleSize);
          var end = ~~(start + sampleSize);
          /**
           * Initialize the max and min to the first sample of this
           * subrange, so that even if the samples are entirely
           * on one side of zero, we still return the true max and
           * min values in the subrange.
           */
          var min = chan[start];
          var max = min;
          var j = void 0;
          for (j = start; j < end; j += sampleStep) {
            var value = chan[j];
            if (value > max) {
              max = value;
            }
            if (value < min) {
              min = value;
            }
          }
          peaks[2 * i] = max;
          peaks[2 * i + 1] = min;
          if (c == 0 || max > this.mergedPeaks[2 * i]) {
            this.mergedPeaks[2 * i] = max;
          }
          if (c == 0 || min < this.mergedPeaks[2 * i + 1]) {
            this.mergedPeaks[2 * i + 1] = min;
          }
        }
      }
      return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
    }

    /**
     * Get the position from 0 to 1
     *
     * @return {number} Position
     */
  }, {
    key: "getPlayedPercents",
    value: function getPlayedPercents() {
      return this.state.getPlayedPercents.call(this);
    }

    /** @private */
  }, {
    key: "disconnectSource",
    value: function disconnectSource() {
      if (this.source) {
        this.source.disconnect();
      }
    }
    /**
     * Destroy all references with WebAudio, disconnecting audio nodes and closing Audio Context
     */
  }, {
    key: "destroyWebAudio",
    value: function destroyWebAudio() {
      this.disconnectFilters();
      this.disconnectSource();
      this.gainNode.disconnect();
      this.scriptNode && this.scriptNode.disconnect();
      this.analyser.disconnect();

      // close the audioContext if closeAudioContext option is set to true
      if (this.params.closeAudioContext) {
        // check if browser supports AudioContext.close()
        if (typeof this.ac.close === 'function' && this.ac.state != 'closed') {
          this.ac.close();
        }
        // clear the reference to the audiocontext
        this.ac = null;
        // clear the actual audiocontext, either passed as param or the
        // global singleton
        if (!this.params.audioContext) {
          window.WaveSurferAudioContext = null;
        } else {
          this.params.audioContext = null;
        }
        // clear the offlineAudioContext
        window.WaveSurferOfflineAudioContext = null;
      }

      // disconnect resources used by setSinkId
      if (this.sinkStreamDestination) {
        this.sinkAudioElement.pause();
        this.sinkAudioElement.srcObject = null;
        this.sinkStreamDestination.disconnect();
        this.sinkStreamDestination = null;
      }
    }
    /**
     * This is called when wavesurfer is destroyed
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.isPaused()) {
        this.pause();
      }
      this.unAll();
      this.buffer = null;
      this.destroyed = true;
      this.destroyWebAudio();
    }

    /**
     * Loaded a decoded audio buffer
     *
     * @param {Object} buffer Decoded audio buffer to load
     */
  }, {
    key: "load",
    value: function load(buffer) {
      this.startPosition = 0;
      this.lastPlay = this.ac.currentTime;
      this.buffer = buffer;
      this.createSource();
    }

    /** @private */
  }, {
    key: "createSource",
    value: function createSource() {
      this.disconnectSource();
      this.source = this.ac.createBufferSource();

      // adjust for old browsers
      this.source.start = this.source.start || this.source.noteGrainOn;
      this.source.stop = this.source.stop || this.source.noteOff;
      this.setPlaybackRate(this.playbackRate);
      this.source.buffer = this.buffer;
      this.source.connect(this.analyser);
    }

    /**
     * @private
     *
     * some browsers require an explicit call to #resume before they will play back audio
     */
  }, {
    key: "resumeAudioContext",
    value: function resumeAudioContext() {
      if (this.ac.state == 'suspended') {
        this.ac.resume && this.ac.resume();
      }
    }

    /**
     * Used by `wavesurfer.isPlaying()` and `wavesurfer.playPause()`
     *
     * @return {boolean} Whether or not this backend is currently paused
     */
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.state !== this.states[PLAYING];
    }

    /**
     * Used by `wavesurfer.getDuration()`
     *
     * @return {number} Duration of loaded buffer
     */
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (this.explicitDuration) {
        return this.explicitDuration;
      }
      if (!this.buffer) {
        return 0;
      }
      return this.buffer.duration;
    }

    /**
     * Used by `wavesurfer.seekTo()`
     *
     * @param {number} start Position to start at in seconds
     * @param {number} end Position to end at in seconds
     * @return {{start: number, end: number}} Object containing start and end
     * positions
     */
  }, {
    key: "seekTo",
    value: function seekTo(start, end) {
      if (!this.buffer) {
        return;
      }
      this.scheduledPause = null;
      if (start == null) {
        start = this.getCurrentTime();
        if (start >= this.getDuration()) {
          start = 0;
        }
      }
      if (end == null) {
        end = this.getDuration();
      }
      this.startPosition = start;
      this.lastPlay = this.ac.currentTime;
      if (this.state === this.states[FINISHED]) {
        this.setState(PAUSED);
      }
      return {
        start: start,
        end: end
      };
    }

    /**
     * Get the playback position in seconds
     *
     * @return {number} The playback position in seconds
     */
  }, {
    key: "getPlayedTime",
    value: function getPlayedTime() {
      return (this.ac.currentTime - this.lastPlay) * this.playbackRate;
    }

    /**
     * Plays the loaded audio region.
     *
     * @param {number} start Start offset in seconds, relative to the beginning
     * of a clip.
     * @param {number} end When to stop relative to the beginning of a clip.
     */
  }, {
    key: "play",
    value: function play(start, end) {
      if (!this.buffer) {
        return;
      }

      // need to re-create source on each playback
      this.createSource();
      var adjustedTime = this.seekTo(start, end);
      start = adjustedTime.start;
      end = adjustedTime.end;
      this.scheduledPause = end;
      this.source.start(0, start);
      this.resumeAudioContext();
      this.setState(PLAYING);
      this.fireEvent('play');
    }

    /**
     * Pauses the loaded audio.
     */
  }, {
    key: "pause",
    value: function pause() {
      this.scheduledPause = null;
      this.startPosition += this.getPlayedTime();
      try {
        this.source && this.source.stop(0);
      } catch (err) {
        // Calling stop can throw the following 2 errors:
        // - RangeError (The value specified for when is negative.)
        // - InvalidStateNode (The node has not been started by calling start().)
        // We can safely ignore both errors, because:
        // - The range is surely correct
        // - The node might not have been started yet, in which case we just want to carry on without causing any trouble.
      }
      this.setState(PAUSED);
      this.fireEvent('pause');
    }

    /**
     * Returns the current time in seconds relative to the audio-clip's
     * duration.
     *
     * @return {number} The current time in seconds
     */
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.state.getCurrentTime.call(this);
    }

    /**
     * Returns the current playback rate. (0=no playback, 1=normal playback)
     *
     * @return {number} The current playback rate
     */
  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.playbackRate;
    }

    /**
     * Set the audio source playback rate.
     *
     * @param {number} value The playback rate to use
     */
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(value) {
      this.playbackRate = value || 1;
      this.source && this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime);
    }

    /**
     * Set a point in seconds for playback to stop at.
     *
     * @param {number} end Position to end at
     * @version 3.3.0
     */
  }, {
    key: "setPlayEnd",
    value: function setPlayEnd(end) {
      this.scheduledPause = end;
    }
  }]);
  return WebAudio;
}(util.Observer);
exports["default"] = WebAudio;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/wavesurfer.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=wavesurfer.js.map