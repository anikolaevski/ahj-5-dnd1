!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=78)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(43))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(0),o=n(22).f,i=n(7),c=n(45),a=n(16),u=n(49),f=n(54);t.exports=function(t,e){var n,s,l,p,d,v=t.target,g=t.global,h=t.stat;if(n=g?r:h?r[v]||a(v,{}):(r[v]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(d=o(n,s))&&d.value:n[s],!f(g?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(0),o=n(28),i=n(3),c=n(29),a=n(37),u=n(58),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(a&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e,n){var r=n(5),o=n(8),i=n(12);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(5),o=n(24),i=n(10),c=n(15),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(23),o=n(14);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(5),o=n(1),i=n(3),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,s,l)}))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(7);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(16),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e){t.exports={}},function(t,e,n){var r=n(51),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(32),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(5),o=n(44),i=n(12),c=n(9),a=n(15),u=n(3),f=n(24),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,!0),f)try{return s(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(1),o=n(13),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(5),o=n(1),i=n(25);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(2),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(17),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(28),o=n(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(48),o=n(17);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(3),o=n(9),i=n(31).indexOf,c=n(18);t.exports=function(t,e){var n,a=o(t),u=0,f=[];for(n in a)!r(c,n)&&r(a,n)&&f.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(9),o=n(20),i=n(33),c=function(t){return function(e,n,c){var a,u=r(e),f=o(u.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(32),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(55),o=n(23),i=n(35),c=n(20),a=n(57),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=7==t,d=5==t||l;return function(v,g,h,y){for(var m,E,x=i(v),S=o(x),b=r(g,h,3),L=c(S.length),O=0,w=y||a,j=e?w(v,L):n||p?w(v,0):void 0;L>O;O++)if((d||O in S)&&(E=b(m=S[O],O,x),t))if(e)j[O]=E;else if(E)switch(t){case 3:return!0;case 5:return m;case 6:return O;case 2:u.call(j,m)}else switch(t){case 4:return!1;case 7:u.call(j,m)}return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(6),o=n(59),i=n(8),c=r("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},function(t,e,n){var r=n(30),o=n(21);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(34).forEach,o=n(63),i=n(11),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){},function(t,e,n){"use strict";var r=n(4),o=n(34).find,i=n(38),c=n(11),a=!0,u=c("find");"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(7),i=n(3),c=n(16),a=n(26),u=n(46),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u,f=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=s(n)).source||(u.source=l.join("string"==typeof e?e:""))),t!==r?(f?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},function(t,e,n){var r,o,i,c=n(47),a=n(0),u=n(2),f=n(7),s=n(3),l=n(17),p=n(27),d=n(18),v=a.WeakMap;if(c){var g=l.state||(l.state=new v),h=g.get,y=g.has,m=g.set;r=function(t,e){return e.facade=t,m.call(g,t,e),e},o=function(t){return h.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var E=p("state");d[E]=!0,r=function(t,e){return e.facade=t,f(t,E,e),e},o=function(t){return s(t,E)?t[E]:{}},i=function(t){return s(t,E)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(26),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports=!1},function(t,e,n){var r=n(3),o=n(50),i=n(22),c=n(8);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||a(t,s,u(e,s))}}},function(t,e,n){var r=n(19),o=n(52),i=n(53),c=n(10);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(30),o=n(21).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==f||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(56);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(2),o=n(36),i=n(6)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(37);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r,o=n(10),i=n(60),c=n(21),a=n(18),u=n(61),f=n(25),s=n(27),l=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=f("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete v.prototype[c[n]];return v()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),o=n(8),i=n(10),c=n(39);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(19);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(4),o=n(40);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r=n(4),o=n(31).includes,i=n(38);r({target:"Array",proto:!0,forced:!n(11)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,e,n){"use strict";var r=n(4),o=n(2),i=n(36),c=n(33),a=n(20),u=n(9),f=n(66),s=n(6),l=n(67),p=n(11),d=l("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),g=s("species"),h=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,e){var n,r,s,l=u(this),p=a(l.length),d=c(t,p),v=c(void 0===e?p:e,p);if(i(l)&&("function"!=typeof(n=l.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[g])&&(n=void 0):n=void 0,n===Array||void 0===n))return h.call(l,d,v);for(r=new(void 0===n?Array:n)(y(v-d,0)),s=0;d<v;d++,s++)d in l&&f(r,s,l[d]);return r.length=s,r}})},function(t,e,n){"use strict";var r=n(15),o=n(8),i=n(12);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(1),o=n(6),i=n(68),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,i=n(0),c=n(69),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(19);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(4),o=n(35),i=n(39);r({target:"Object",stat:!0,forced:n(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,n){"use strict";var r=n(4),o=n(72),i=n(14);r({target:"String",proto:!0,forced:!n(74)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(73);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,n){var r=n(2),o=n(13),i=n(6)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(6)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e,n){var r=n(0),o=n(76),i=n(40),c=n(7);for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){t.exports=n.p+"b0559cb6c5989b03bdeef37b95157f26.png"},function(t,e,n){"use strict";n.r(e);n(41),n(42),n(62),n(64),n(65),n(70),n(71),n(75);var r=document.querySelector("[data-id=Folder1]"),o=document.querySelector("[data-id=Folder2]"),i=document.querySelector("[data-id=Folder3]"),c=document.querySelector("[data-id=Col1_add]"),a=document.querySelector("[data-id=Col2_add]"),u=document.querySelector("[data-id=Col3_add]"),f={ghostEl:null,dragEl:null,keepReserveEl:document.createElement("div"),keepReserveParent:null};function s(){for(var t=!0;t;){var e=document.querySelector(".dragged");if(e)e.parentNode.removeChild(e);else t=!1}}function l(t,e){s();var n=[];Array.prototype.slice.call(e.childNodes).forEach((function(t){void 0!==t.classList&&(Array.prototype.slice.call(t.classList).includes("Subfolder-Item")&&n.push(JSON.stringify({item:t.innerHTML})))})),localStorage.setItem(t,n)}function p(t){var e;t.preventDefault(),e=t.target.classList.contains("Subfolder-Item")?t.target:t.target.parentElement;var n=Array.prototype.slice.call(e.childNodes).find((function(t){return"P"===t.nodeName.toUpperCase()})),c="";n&&(c=' "'.concat(n.innerText,'"')),confirm("Delete element".concat(c,"?"))&&(e.parentElement.removeChild(e),l("Folder1",r),l("Folder2",o),l("Folder3",i))}function d(t){var e;e=t.target.classList.contains("Subfolder-Item")?t.target:t.target.parentElement;var n=document.createElement("div");e.appendChild(n),n.classList.add("delete-box"),n.style.top="".concat(e.offsetTop+10,"px"),n.addEventListener("click",p)}function v(t){for(var e=t.target.querySelector(".delete-box");e;)t.target.removeChild(e),e=t.target.querySelector(".delete-box")}function g(t){if(t.preventDefault(),f.ghostEl=t.target,f.ghostEl){f.ghostEl.style.left="".concat(t.pageX-f.ghostEl.offsetWidth/2,"px"),f.ghostEl.style.top="".concat(t.pageY-f.ghostEl.offsetHeight/2,"px");var e=document.elementsFromPoint(t.clientX,t.clientY),n=e.find((function(t){return"DIV"===t.nodeName.toUpperCase()&&t.classList.contains("Subfolder-Item")&&!t.classList.contains("dragged")}));if(f.keepReserveParent=e.find((function(t){return"DIV"===t.nodeName.toUpperCase()&&t.classList.contains("Subfolder")&&!t.classList.contains("dragged")})),n)n.parentElement.insertBefore(f.keepReserveEl,n),f.keepReserveEl.style.width="".concat(f.dragEl.offsetWidth,"px"),f.keepReserveEl.style.height="".concat(f.dragEl.offsetHeight,"px");else f.keepReserveParent&&f.keepReserveEl&&(f.keepReserveParent.appendChild(f.keepReserveEl),f.keepReserveEl.style.width="".concat(f.dragEl.offsetWidth,"px"),f.keepReserveEl.style.height="".concat(f.dragEl.offsetHeight,"px"))}}function h(){if(f.dragEl){if(s(),f.keepReserveEl)f.keepReserveEl.parentElement.insertBefore(f.dragEl,f.keepReserveEl);else f.keepReserveParent&&f.keepReserveParent.appendChild(f.dragEl);if(f.keepReserveEl)f.keepReserveEl.parentNode.removeChild(f.keepReserveEl);f.ghostEl=null,f.dragEl=null,l("Folder1",r),l("Folder2",o),l("Folder3",i)}}function y(t){if(t.preventDefault(),t.target.classList.contains("Subfolder-Item")){t.pageX&&(f.pageX=t.pageX),t.pageY&&(f.pageY=t.pageY),f.dragEl=t.target,f.ghostEl=f.dragEl.cloneNode(!0),f.ghostEl.classList.add("dragged");for(var e=f.ghostEl.querySelector(".delete-box");e;)f.ghostEl.removeChild(e),e=f.ghostEl.querySelector(".delete-box");document.body.appendChild(f.ghostEl),f.ghostEl.style.left="".concat(f.pageX-f.ghostEl.offsetWidth/2,"px"),f.ghostEl.style.top="".concat(f.pageY-f.ghostEl.offsetHeight/2,"px"),f.ghostEl.addEventListener("mousemove",g),f.ghostEl.addEventListener("mouseup",h)}else t.target.classList.contains("delete-box")?t.target.dispatchEvent(new Event("click")):(f.pageX=t.pageX,f.pageY=t.pageY,t.target.parentNode.dispatchEvent(new Event("mousedown")))}function m(t){t.addEventListener("mouseover",d),t.addEventListener("mouseout",v),t.addEventListener("mousedown",y)}function E(t,e){JSON.parse("[".concat(localStorage.getItem(t),"]")).forEach((function(t){if(t&&Object.keys(t).includes("item")){var n=document.createElement("div");n.innerHTML=t.item,e.appendChild(n),n.classList.add("Subfolder-Item"),m(n)}}))}function x(t){t.preventDefault();var e=document.querySelector("[data-id=Item_Enter_Form]"),n=document.querySelector("[data-id=Form_Data_Title]"),c=e.parentNode,a=n.value;if(a){var u=document.createElement("div");u.innerHTML='<p class="Item-Content">'.concat(a,"</p>"),c.appendChild(u),u.classList.add("Subfolder-Item"),m(u)}e.classList.add("invisible"),l("Folder1",r),l("Folder2",o),l("Folder3",i)}function S(t){var e=t.target.parentNode;if(e){var n=document.querySelector("[data-id=Item_Enter_Form]"),r=document.querySelector("[data-id=Form_Data_Title]");document.querySelector("[data-id=Form_Data_Button]").addEventListener("click",x),n.classList.remove("invisible"),e.appendChild(n),r.value=""}}document.addEventListener("DOMContentLoaded",(function(){console.log("Module started!"),E("Folder1",r),E("Folder2",o),E("Folder3",i),c.addEventListener("click",S),a.addEventListener("click",S),u.addEventListener("click",S)}));n(77)}]);
//# sourceMappingURL=main.js.map