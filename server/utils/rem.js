!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i(i.s=596)}({596:function(e,t,n){"use strict";!function(n,e){var t=n.document,r=t.documentElement,i=t.querySelector('meta[name="viewport"]'),a=t.querySelector('meta[name="flexible"]'),o=0,l=0,u=void 0,d=e.flexible||(e.flexible={});if(i){var c=i.getAttribute("content").match(/initial\-scale=([\d\.]+)/);c&&(l=parseFloat(c[1]),o=parseInt(1/l))}else if(a){var s=a.getAttribute("content");if(s){var p=s.match(/initial\-dpr=([\d\.]+)/),f=s.match(/maximum\-dpr=([\d\.]+)/);p&&(o=parseFloat(p[1]),l=parseFloat((1/o).toFixed(2))),f&&(o=parseFloat(f[1]),l=parseFloat((1/o).toFixed(2)))}}if(!o&&!l){n.navigator.appVersion.match(/android/gi);var m=n.navigator.appVersion.match(/iphone/gi),v=n.devicePixelRatio;l=1/(o=m?3<=v&&(!o||3<=o)?3:2<=v&&(!o||2<=o)?2:1:1)}if(r.setAttribute("data-dpr",o),!i)if((i=t.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(i);else{var b=t.createElement("div");b.appendChild(i),t.write(b.innerHTML)}function h(){var e=r.getBoundingClientRect().width,t=void 0;t=n.navigator.userAgent.match(/(Android)|(iPhone)/)?(750<e/o&&(e=750*o),e/750*100):(1200<e/o&&(e=1200*o),e/1200*50),r.style.fontSize=t+"px",d.rem=n.rem=t}n.addEventListener("resize",function(){clearTimeout(u),u=setTimeout(h,300)},!1),n.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(u),u=setTimeout(h,300))},!1),"complete"===t.readyState?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",function(e){t.body.style.fontSize=12*o+"px"},!1),h(),d.dpr=n.dpr=o,d.refreshRem=h,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t},t.addEventListener("touchstart",function(e){1<e.touches.length&&e.preventDefault()},{passive:!1});var y=0;t.addEventListener("touchend",function(e){var t=(new Date).getTime();t-y<=300&&e.preventDefault(),y=t},!1)}(window,window.lib||(window.lib={}))}});