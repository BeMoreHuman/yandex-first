!function t(e,o,r){function i(s,p){if(!o[s]){if(!e[s]){var f="function"==typeof require&&require;if(!p&&f)return f(s,!0);if(n)return n(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var l=o[s]={exports:{}};e[s][0].call(l.exports,function(t){var o=e[s][1][t];return i(o?o:t)},l,l.exports,t,e,o,r)}return o[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,o){"use strict";function r(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return[].slice.call(t,0)}function i(t,e){n.forEach(function(o){t.addEventListener(o,function r(){t.removeEventListener(o,r),e()})})}Object.defineProperty(o,"__esModule",{value:!0}),o.nodesToArray=r,o.onceTransitionEnd=i;var n=["transitionend","webkitTransitionEnd","oTransitionEnd","otransitionend"]},{}],2:[function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=t("./modules/popups"),n=r(i);document.addEventListener("DOMContentLoaded",function(){(0,n["default"])()})},{"./modules/popups":3}],3:[function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t){var e=null,o=!1,r=(0,p.nodesToArray)(document.querySelectorAll(".channel-program"));r.forEach(function(t){var r=t.querySelector(".channel-program__popup");t.addEventListener("mouseenter",function(){e=setTimeout(function(){t.popper=new s["default"](t,r,{placement:"left"}),t.popper.onCreate(function(){return r.classList.add("channel-program__popup--visible")}),o=!0},600)}),t.addEventListener("mouseleave",function(){e&&clearTimeout(e),e&&o&&((0,p.onceTransitionEnd)(r,function(){t.popper&&t.popper.destroy()}),r.classList.remove("channel-program__popup--visible")),e=null,o=!1})})}Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=i;var n=t("popper.js"),s=r(n),p=t("../helpers")},{"../helpers":1,"popper.js":4}],4:[function(t,e,o){!function(t,o){"function"==typeof define&&define.amd?define(o):"object"==typeof e&&e.exports?e.exports=o():t.Popper=o()}(this,function(){"use strict";function t(t,e,o){this._reference=t.jquery?t[0]:t,this.state={};var r="undefined"==typeof e||null===e,i=e&&"Object"===e.constructor.name;r||i?this._popper=this.parse(i?e:{}):this._popper=e.jquery?e[0]:e,this._options=Object.assign({},v,o),this._options.modifiers=this._options.modifiers.map(function(t){if("string"==typeof t){if(-1!==this._options.modifiersIgnored.indexOf(t))return;return this.modifiers[t]}return t}.bind(this)),-1!==this._options.modifiers.indexOf("applyStyle")&&this._popper.setAttribute("x-placement",this._options.placement),this.update(),this._setupEventListeners()}function e(t){var e=m.getComputedStyle(t),o=parseFloat(e.marginTop)+parseFloat(e.marginBottom),r=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+r,height:t.offsetHeight+o}}function o(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function r(t){var e=Object.assign({},t);return e.right=e.left+e.width,e.bottom=e.top+e.height,e}function i(t,e){var o,r=0;for(o in t){if(t[o]===e)return r;r++}return null}function n(t,e){var o=m.getComputedStyle(t,null);return o[e]}function s(t){var e=t.offsetParent;return e!==m.document.body&&e?e:m.document.documentElement}function p(t){return t===m.document?m.document.body.scrollTop?m.document.body:m.document.documentElement:-1!==["scroll","auto"].indexOf(n(t,"overflow"))||-1!==["scroll","auto"].indexOf(n(t,"overflow-x"))||-1!==["scroll","auto"].indexOf(n(t,"overflow-y"))?t:t.parentNode?p(t.parentNode):t}function f(t){return t===m.document.body?!1:"fixed"===n(t,"position")?!0:t.parentNode?f(t.parentNode):t}function a(t,e){function o(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}Object.keys(e).forEach(function(r){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(r)&&o(e[r])&&(i="px"),t.style[r]=e[r]+i})}function l(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function u(t){var e={width:t.offsetWidth,height:t.offsetHeight,left:t.offsetLeft,top:t.offsetTop};return e.right=e.left+e.width,e.bottom=e.top+e.height,e}function d(t){var e=t.getBoundingClientRect();return{left:e.left,top:e.top,right:e.right,bottom:e.bottom,width:e.right-e.left,height:e.bottom-e.top}}function h(t,e,o){var r=d(t),i=d(e);if(o){var n=p(e);i.top+=n.scrollTop,i.bottom+=n.scrollTop,i.left+=n.scrollLeft,i.right+=n.scrollLeft}var s={top:r.top-i.top,left:r.left-i.left,bottom:r.top-i.top+r.height,right:r.left-i.left+r.width,width:r.width,height:r.height};return s}function c(t){for(var e=["","ms","webkit","moz","o"],o=0;o<e.length;o++){var r=e[o]?e[o]+t.charAt(0).toUpperCase()+t.slice(1):t;if("undefined"!=typeof m.document.body.style[r])return r}return null}var m=window,v={placement:"bottom",gpuAcceleration:!0,offset:0,boundariesElement:"viewport",boundariesPadding:5,preventOverflowOrder:["left","right","top","bottom"],flipBehavior:"flip",arrowElement:"[x-arrow]",modifiers:["shift","offset","preventOverflow","keepTogether","arrow","flip","applyStyle"],modifiersIgnored:[]};return t.prototype.destroy=function(){this._popper.removeAttribute("x-placement"),this._popper.style.left="",this._popper.style.position="",this._popper.style.top="",this._popper.style[c("transform")]="",this._removeEventListeners(),this._options.removeOnDestroy&&this._popper.remove()},t.prototype.update=function(){var t={instance:this};t.placement=this._options.placement,t._originalPlacement=this._options.placement,t.offsets=this._getOffsets(this._popper,this._reference,t.placement),t.boundaries=this._getBoundaries(t,this._options.boundariesPadding,this._options.boundariesElement),t=this.runModifiers(t,this._options.modifiers),"function"==typeof this.state.updateCallback&&this.state.updateCallback(t)},t.prototype.onCreate=function(t){t(this)},t.prototype.onUpdate=function(t){this.state.updateCallback=t},t.prototype.parse=function(t){function e(t,e){e.forEach(function(e){t.classList.add(e)})}function o(t,e){e.forEach(function(e){t.setAttribute(e.split(":")[0],e.split(":")[1])})}var r={tagName:"div",classNames:["popper"],attributes:[],parent:m.document.body,content:"",allowHtml:!1,arrowTagName:"div",arrowClassNames:["popper__arrow"],arrowAttributes:["x-arrow"]};t=Object.assign({},r,t);var i=m.document,n=i.createElement(t.tagName);if(e(n,t.classNames),o(n,t.attributes),t.allowHtml?n.innerHTML=t.content:n.textContent=t.content,t.arrowTagName){var s=i.createElement(t.arrowTagName);e(s,t.arrowClassNames),o(s,t.arrowAttributes),n.appendChild(s)}var p=t.parent;if("string"==typeof p){if(p=i.querySelectorAll(t.parent),p.length>1&&console.warn("WARNING: the given `parent` query("+t.parent+") matched more than one element, the first one will be used"),0===p.length)throw"ERROR: the given `parent` doesn't exists!";p=p[0]}return p.length>1&&p instanceof Element==!1&&(console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"),p=p[0]),p.appendChild(n),n},t.prototype._getOffsets=function(t,o,r){r=r.split("-")[0];var i={},n=s(o),p=f(o,n);i.position=p?"fixed":"absolute",this.state.position=i.position;var a=h(o,s(t),p),l=e(t);return-1!==["right","left"].indexOf(r)?(i.top=a.top+a.height/2-l.height/2,"left"===r?i.left=a.left-l.width:i.left=a.right):(i.left=a.left+a.width/2-l.width/2,"top"===r?i.top=a.top-l.height:i.top=a.bottom),i.width=l.width,i.height=l.height,{popper:i,reference:a}},t.prototype._setupEventListeners=function(){if(this.state.updateBound=this.update.bind(this),m.addEventListener("resize",this.state.updateBound),"window"!==this._options.boundariesElement){var t=p(this._reference);t!==m.document.body&&t!==m.document.documentElement||(t=m),t.addEventListener("scroll",this.state.updateBound)}},t.prototype._removeEventListeners=function(){if(m.removeEventListener("resize",this.state.updateBound),"window"!==this._options.boundariesElement){var t=p(this._reference);t!==m.document.body&&t!==m.document.documentElement||(t=m),t.removeEventListener("scroll",this.state.updateBound)}this.state.updateBound=null},t.prototype._getBoundaries=function(t,e,o){var r,i,n={};if("window"===o){var f=m.document.body,a=m.document.documentElement;i=Math.max(f.scrollHeight,f.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight),r=Math.max(f.scrollWidth,f.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth),n={top:0,right:r,bottom:i,left:0}}else if("viewport"===o){var l=s(this._popper),d=p(this._popper),h=u(l),c="fixed"===t.offsets.popper.position?0:d.scrollTop,v="fixed"===t.offsets.popper.position?0:d.scrollLeft;n={top:0-(h.top-c),right:m.document.documentElement.clientWidth-(h.left-v),bottom:m.document.documentElement.clientHeight-(h.top-c),left:0-(h.left-v)}}else n=s(this._popper)===o?{top:0,left:0,right:o.clientWidth,bottom:o.clientHeight}:u(o);return n.left+=e,n.right-=e,n.top=n.top+e,n.bottom=n.bottom-e,n},t.prototype.runModifiers=function(t,e,o){var r=e.slice();return void 0!==o&&(r=this._options.modifiers.slice(0,i(this._options.modifiers,o))),r.forEach(function(e){l(e)&&(t=e.call(this,t))}.bind(this)),t},t.prototype.isModifierRequired=function(t,e){var o=i(this._options.modifiers,t);return!!this._options.modifiers.slice(0,o).filter(function(t){return t===e}).length},t.prototype.modifiers={},t.prototype.modifiers.applyStyle=function(t){var e,o={position:t.offsets.popper.position},r=Math.round(t.offsets.popper.left),i=Math.round(t.offsets.popper.top);return this._options.gpuAcceleration&&(e=c("transform"))?(o[e]="translate3d("+r+"px, "+i+"px, 0)",o.top=0,o.left=0):(o.left=r,o.top=i),a(this._popper,o),this._popper.setAttribute("x-placement",t.placement),this.isModifierRequired(this.modifiers.applyStyle,this.modifiers.arrow)&&t.offsets.arrow&&a(t.arrowElement,t.offsets.arrow),t},t.prototype.modifiers.shift=function(t){var e=t.placement,o=e.split("-")[0],i=e.split("-")[1];if(i){var n=t.offsets.reference,s=r(t.offsets.popper),p={y:{start:{top:n.top},end:{top:n.top+n.height-s.height}},x:{start:{left:n.left},end:{left:n.left+n.width-s.width}}},f=-1!==["bottom","top"].indexOf(o)?"x":"y";t.offsets.popper=Object.assign(s,p[f][i])}return t},t.prototype.modifiers.preventOverflow=function(t){var e=this._options.preventOverflowOrder,o=r(t.offsets.popper),i={left:function(){var e=o.left;return o.left<t.boundaries.left&&(e=Math.max(o.left,t.boundaries.left)),{left:e}},right:function(){var e=o.left;return o.right>t.boundaries.right&&(e=Math.min(o.left,t.boundaries.right-o.width)),{left:e}},top:function(){var e=o.top;return o.top<t.boundaries.top&&(e=Math.max(o.top,t.boundaries.top)),{top:e}},bottom:function(){var e=o.top;return o.bottom>t.boundaries.bottom&&(e=Math.min(o.top,t.boundaries.bottom-o.height)),{top:e}}};return e.forEach(function(e){t.offsets.popper=Object.assign(o,i[e]())}),t},t.prototype.modifiers.keepTogether=function(t){var e=r(t.offsets.popper),o=t.offsets.reference,i=Math.floor;return e.right<i(o.left)&&(t.offsets.popper.left=i(o.left)-e.width),e.left>i(o.right)&&(t.offsets.popper.left=i(o.right)),e.bottom<i(o.top)&&(t.offsets.popper.top=i(o.top)-e.height),e.top>i(o.bottom)&&(t.offsets.popper.top=i(o.bottom)),t},t.prototype.modifiers.flip=function(t){if(!this.isModifierRequired(this.modifiers.flip,this.modifiers.preventOverflow))return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"),t;if(t.flipped&&t.placement===t._originalPlacement)return t;var e=t.placement.split("-")[0],i=o(e),n=t.placement.split("-")[1]||"",s=[];return s="flip"===this._options.flipBehavior?[e,i]:this._options.flipBehavior,s.forEach(function(p,f){if(e===p&&s.length!==f+1){e=t.placement.split("-")[0],i=o(e);var a=r(t.offsets.popper),l=-1!==["right","bottom"].indexOf(e);(l&&Math.floor(t.offsets.reference[e])>Math.floor(a[i])||!l&&Math.floor(t.offsets.reference[e])<Math.floor(a[i]))&&(t.flipped=!0,t.placement=s[f+1],n&&(t.placement+="-"+n),t.offsets.popper=this._getOffsets(this._popper,this._reference,t.placement).popper,t=this.runModifiers(t,this._options.modifiers,this._flip))}}.bind(this)),t},t.prototype.modifiers.offset=function(t){var e=this._options.offset,o=t.offsets.popper;return-1!==t.placement.indexOf("left")?o.top-=e:-1!==t.placement.indexOf("right")?o.top+=e:-1!==t.placement.indexOf("top")?o.left-=e:-1!==t.placement.indexOf("bottom")&&(o.left+=e),t},t.prototype.modifiers.arrow=function(t){var o=this._options.arrowElement;if("string"==typeof o&&(o=this._popper.querySelector(o)),!o)return t;if(!this._popper.contains(o))return console.warn("WARNING: `arrowElement` must be child of its popper element!"),t;if(!this.isModifierRequired(this.modifiers.arrow,this.modifiers.keepTogether))return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"),t;var i={},n=t.placement.split("-")[0],s=r(t.offsets.popper),p=t.offsets.reference,f=-1!==["left","right"].indexOf(n),a=f?"height":"width",l=f?"top":"left",u=f?"left":"top",d=f?"bottom":"right",h=e(o)[a];p[d]-h<s[l]&&(t.offsets.popper[l]-=s[l]-(p[d]-h)),p[l]+h>s[d]&&(t.offsets.popper[l]+=p[l]+h-s[d]);var c=p[l]+p[a]/2-h/2,m=c-s[l];return m=Math.max(Math.min(s[a]-h,m),0),i[l]=m,i[u]="",t.offsets.arrow=i,t.arrowElement=o,t},Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r){r=Object(r);for(var i=Object.keys(r),n=0,s=i.length;s>n;n++){var p=i[n],f=Object.getOwnPropertyDescriptor(r,p);void 0!==f&&f.enumerable&&(e[p]=r[p])}}}return e}}),t})},{}]},{},[2]);