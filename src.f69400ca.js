parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aSor":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=M,exports.hydrate=F,exports.h=exports.createElement=f,exports.Fragment=h,exports.createRef=d,exports.Component=v,exports.cloneElement=R,exports.createContext=V,exports.toChildArray=b,exports.__u=W,exports.options=exports.isValidElement=void 0;var e,t,n,o,l,_,r,u={},i=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var o,l=arguments,_={};for(o in t)"key"!==o&&"ref"!==o&&(_[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(_.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===_[o]&&(_[o]=e.defaultProps[o]);return a(e,_,t&&t.key,t&&t.ref,null)}function a(t,n,o,l,_){var r={type:t,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_};return null==_&&(r.__v=r),e.vnode&&e.vnode(r),r}function d(){return{current:null}}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(t){(!t.__d&&(t.__d=!0)&&n.push(t)&&!k.__r++||l!==e.debounceRendering)&&((l=e.debounceRendering)||o)(k)}function k(){for(var e;k.__r=n.length;)e=n.sort(function(e,t){return e.__v.__b-t.__v.__b}),n=[],e.some(function(e){var t,n,o,l,_,r,u;e.__d&&(r=(_=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=c({},_)).__v=o,l=U(u,_,o,t.__n,void 0!==u.ownerSVGElement,null,n,null==r?y(_):r),A(n,_),l!=r&&m(_)))})}function x(e,t,n,o,l,_,r,s,c,f){var d,v,m,g,k,x,b,w=o&&o.__k||i,S=w.length;for(c==u&&(c=null!=r?r[0]:S?y(o,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(g=n.__k[d]=null==(g=t[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?a(null,g,null,null,g):Array.isArray(g)?a(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?a(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=w[d])||m&&g.key==m.key&&g.type===m.type)w[d]=void 0;else for(v=0;v<S;v++){if((m=w[v])&&g.key==m.key&&g.type===m.type){w[v]=void 0;break}m=null}k=U(e,g,m=m||u,l,_,r,s,c,f),(v=g.ref)&&m.ref!=v&&(b||(b=[]),m.ref&&b.push(m.ref,null,g),b.push(v,g.__c||k,g)),null!=k?(null==x&&(x=k),c=C(e,g,m,w,r,k,c),f||"option"!=n.type?"function"==typeof n.type&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=y(m))}if(n.__e=x,null!=r&&"function"!=typeof n.type)for(d=r.length;d--;)null!=r[d]&&p(r[d]);for(d=S;d--;)null!=w[d]&&W(w[d],w[d]);if(b)for(d=0;d<b.length;d++)T(b[d],b[++d],b[++d])}function b(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?i.concat.apply([],e.map(b)):[e]}function C(e,t,n,o,l,_,r){var u,i,s;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(l==n||_!=r||null==_.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(_),u=null;else{for(i=r,s=0;(i=i.nextSibling)&&s<o.length;s+=2)if(i==_)break e;e.insertBefore(_,r),u=r}return void 0!==u?u:_.nextSibling}function w(e,t,n,o,l){var _;for(_ in n)"children"===_||"key"===_||_ in t||P(e,_,null,n[_],o);for(_ in t)l&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||P(e,_,t[_],n[_],o)}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===s.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,l){var _,r,u,i,s;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(_=e.style,"string"==typeof n)_.cssText=n;else{if("string"==typeof o&&(_.cssText="",o=null),o)for(i in o)n&&i in n||S(_,i,"");if(n)for(s in n)o&&n[s]===o[s]||S(_,s,n[s])}else"o"===t[0]&&"n"===t[1]?(r=t!==(t=t.replace(/Capture$/,"")),u=t.toLowerCase(),t=(u in e?u:t).slice(2),n?(o||e.addEventListener(t,E,r),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,E,r)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function E(t){this.l[t.type](e.event?e.event(t):t)}function N(e,t,n){var o,l;for(o=0;o<e.__k.length;o++)(l=e.__k[o])&&(l.__=e,l.__e&&("function"==typeof l.type&&l.__k.length>1&&N(l,t,n),t=C(n,l,l,e.__k,null,l.__e,t),"function"==typeof e.type&&(e.__d=t)))}function U(t,n,o,l,_,r,u,i,s){var p,f,a,d,y,m,g,k,b,C,w,S=n.type;if(void 0!==n.constructor)return null;(p=e.__b)&&p(n);try{e:if("function"==typeof S){if(k=n.props,b=(p=S.contextType)&&l[p.__c],C=p?b?b.props.value:p.__:l,o.__c?g=(f=n.__c=o.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S(k,C):(n.__c=f=new v(k,C),f.constructor=S,f.render=L),b&&b.sub(f),f.props=k,f.state||(f.state={}),f.context=C,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,S.getDerivedStateFromProps(k,f.__s))),d=f.props,y=f.state,a)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,C)||n.__v===o.__v){f.props=k,f.state=f.__s,n.__v!==o.__v&&(f.__d=!1),f.__v=n,n.__e=o.__e,n.__k=o.__k,f.__h.length&&u.push(f),N(n,i,t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,y,m)})}f.context=C,f.props=k,f.state=f.__s,(p=e.__r)&&p(n),f.__d=!1,f.__v=n,f.__P=t,p=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(l=c(c({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,y)),w=null!=p&&p.type==h&&null==p.key?p.props.children:p,x(t,Array.isArray(w)?w:[w],n,o,l,_,r,u,i,s),f.base=n.__e,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==r&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=D(o.__e,n,o,l,_,r,u,s);(p=e.diffed)&&p(n)}catch(t){n.__v=null,e.__e(t,n,o)}return n.__e}function A(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function D(e,t,n,o,l,_,r,s){var c,p,f,a,d,h=n.props,v=t.props;if(l="svg"===t.type||l,null!=_)for(c=0;c<_.length;c++)if(null!=(p=_[c])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,_[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),_=null,s=!1}if(null===t.type)h!==v&&e.data!==v&&(e.data=v);else{if(null!=_&&(_=i.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(null!=_)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}w(e,v,h,l,s),a?t.__k=[]:(c=t.props.children,x(e,Array.isArray(c)?c:[c],t,n,o,"foreignObject"!==t.type&&l,_,r,u,s)),s||("value"in v&&void 0!==(c=v.value)&&c!==e.value&&P(e,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==e.checked&&P(e,"checked",c,h.checked,!1))}return e}function T(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,o)}}function W(t,n,o){var l,_,r;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||T(l,null,n)),o||"function"==typeof t.type||(o=null!=(_=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&W(l[r],n,o);null!=_&&p(_)}function L(e,t,n){return this.constructor(e,n)}function M(t,n,o){var l,r,s;e.__&&e.__(t,n),r=(l=o===_)?null:o&&o.__k||n.__k,t=f(h,null,[t]),s=[],U(n,(l?n:o||n).__k=t,r||u,u,void 0!==n.ownerSVGElement,o&&!l?[o]:r?null:n.childNodes.length?i.slice.call(n.childNodes):null,s,o||u,l),A(s,t)}function F(e,t){M(e,t,_)}function R(e,t){var n,o;for(o in t=c(c({},e.props),t),arguments.length>2&&(t.children=i.slice.call(arguments,2)),n={},t)"key"!==o&&"ref"!==o&&(n[o]=t[o]);return a(e.type,n,t.key||e.key,t.ref||e.ref,null)}function V(e){var t={},n={__c:"__cC"+r++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var o,l=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(e){l.props.value!==e.value&&o.some(function(t){t.context=e.value,g(t)})},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}exports.isValidElement=t,exports.options=e,exports.options=e={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return g(n.__E=n)}catch(t){e=t}throw e}},exports.isValidElement=t=function(e){return null!=e&&void 0===e.constructor},v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,_=u,r=0;
},{}],"OUZ9":[function(require,module,exports) {
function r(r){if(Array.isArray(r))return r}module.exports=r;
},{}],"vKPt":[function(require,module,exports) {
function r(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(a){o=!0,l=a}finally{try{n||null==u.return||u.return()}finally{if(o)throw l}}return e}}module.exports=r;
},{}],"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"Rom6":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"HETk":[function(require,module,exports) {
var r=require("./arrayWithHoles"),e=require("./iterableToArrayLimit"),t=require("./unsupportedIterableToArray"),i=require("./nonIterableRest");function u(u,a){return r(u)||e(u,a)||t(u,a)||i()}module.exports=u;
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"vKPt","./unsupportedIterableToArray":"UyFj","./nonIterableRest":"Rom6"}],"aVoE":[function(require,module,exports) {

},{}],"rhUS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BtnItem=void 0;var e=require("preact");require("./index.scss");var t=function(t){var r=t.value,n=t.name;return(0,e.h)("button",{class:"form__button",name:n},r)};exports.BtnItem=t;
},{"preact":"aSor","./index.scss":"aVoE"}],"Gkuk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Question=void 0;var e=require("preact");require("./index.scss");var r=function(r){var t=r.id,n=r.type,s=r.name,a=r.text,i=r.onChange;r.typeProgress;return(0,e.h)("span",{class:"form__inner"},(0,e.h)("input",{class:"input",id:t,type:n,name:s,onChange:function(e){e.target.checked&&i(s)}}),(0,e.h)("label",{class:"label",for:t},a))};exports.Question=r;
},{"preact":"aSor","./index.scss":"aVoE"}],"hsK2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Fieldset=void 0;var e=require("preact");require("./index.scss");var r=require("../Question"),s=function(s){var t=s.answers,o=s.question,n=s.type,a=s.onChange,i=s.typeProgress;return(0,e.h)("fieldset",{class:"form__block"},(0,e.h)("legend",{class:"form__block-legend"},(0,e.h)("h4",{class:"form__block-legend__text"},o)),(0,e.h)("div",{class:"form__block-data"},t.map(function(s,t){var o=s.text,l=s.name;return(0,e.h)(r.Question,{key:l+t+o,id:n+t+l,type:n,text:o,name:l,onChange:a,typeProgress:i})})))};exports.Fieldset=s;
},{"preact":"aSor","./index.scss":"aVoE","../Question":"Gkuk"}],"xSR6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Form=void 0;var e=require("preact"),r=require("../BtnItem"),t=require("../Fieldset");require("./index.scss");var s=function(s){var n=s.onChange,o=s.questions,u=s.typeProgress;return(0,e.h)("form",{class:"form",onSubmit:function(e){return e.preventDefault()}},o&&o.map(function(r){return(0,e.h)(t.Fieldset,{answers:r.answers,question:r.question,type:r.type,onChange:n,typeProgress:u})}),(0,e.h)(r.BtnItem,{name:"submit",value:"Отправить"}))};exports.Form=s;
},{"preact":"aSor","../BtnItem":"rhUS","../Fieldset":"hsK2","./index.scss":"aVoE"}],"K2H1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Progress=void 0;var r=require("preact");require("./index.scss");var s=function(s){var e=s.progress,o=s.length;return(0,r.h)("div",{class:"progress"},(0,r.h)("div",{class:"progress__length"},"".concat(e," / ").concat(o)),(0,r.h)("progress",{class:"progress__bar",value:e,max:o}))};exports.Progress=s;
},{"preact":"aSor","./index.scss":"aVoE"}],"MwGB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useState=a,exports.useReducer=p,exports.useEffect=h,exports.useLayoutEffect=m,exports.useRef=v,exports.useImperativeHandle=l,exports.useMemo=H,exports.useCallback=d,exports.useContext=x,exports.useDebugValue=y,exports.useErrorBoundary=E;var _,n,t,o=require("preact"),e=0,u=[],r=o.options.__r,i=o.options.diffed,c=o.options.__c,s=o.options.unmount;function f(_,t){o.options.__h&&o.options.__h(n,_,e||t),e=0;var u=n.__H||(n.__H={__:[],__h:[]});return _>=u.__.length&&u.__.push({}),u.__[_]}function a(_){return e=1,p(F,_)}function p(t,o,e){var u=f(_++,2);return u.t=t,u.__c||(u.__c=n,u.__=[e?e(o):F(void 0,o),function(_){var n=u.t(u.__[0],_);u.__[0]!==n&&(u.__=[n,u.__[1]],u.__c.setState({}))}]),u.__}function h(t,e){var u=f(_++,3);!o.options.__s&&D(u.__H,e)&&(u.__=t,u.__H=e,n.__H.__h.push(u))}function m(t,e){var u=f(_++,4);!o.options.__s&&D(u.__H,e)&&(u.__=t,u.__H=e,n.__h.push(u))}function v(_){return e=5,H(function(){return{current:void 0===_?null:_}},[])}function l(_,n,t){e=6,m(function(){"function"==typeof _?_(n()):_&&(_.current=n())},null==t?t:t.concat(_))}function H(n,t){var o=f(_++,7);return D(o.__H,t)?(o.__H=t,o.__h=n,o.__=n()):o.__}function d(_,n){return e=8,H(function(){return _},n)}function x(t){var o=n.context[t.__c],e=f(_++,9);return e.__c=t,o?(null==e.__&&(e.__=!0,o.sub(n)),o.props.value):t.__}function y(_,n){o.options.useDebugValue&&o.options.useDebugValue(n?n(_):_)}function E(t){var o=f(_++,10),e=a();return o.__=t,n.componentDidCatch||(n.componentDidCatch=function(_){o.__&&o.__(_),e[1](_)}),[e[0],function(){e[1](void 0)}]}function b(){u.some(function(_){if(_.__P)try{_.__H.__h.forEach(q),_.__H.__h.forEach(A),_.__H.__h=[]}catch(n){return _.__H.__h=[],o.options.__e(n,_.__v),!0}}),u=[]}o.options.__r=function(t){r&&r(t),_=0;var o=(n=t.__c).__H;o&&(o.__h.forEach(q),o.__h.forEach(A),o.__h=[])},o.options.diffed=function(_){i&&i(_);var n=_.__c;n&&n.__H&&n.__H.__h.length&&(1!==u.push(n)&&t===o.options.requestAnimationFrame||((t=o.options.requestAnimationFrame)||function(_){var n,t=function(){clearTimeout(o),g&&cancelAnimationFrame(n),setTimeout(_)},o=setTimeout(t,100);g&&(n=requestAnimationFrame(t))})(b))},o.options.__c=function(_,n){n.some(function(_){try{_.__h.forEach(q),_.__h=_.__h.filter(function(_){return!_.__||A(_)})}catch(t){n.some(function(_){_.__h&&(_.__h=[])}),n=[],o.options.__e(t,_.__v)}}),c&&c(_,n)},o.options.unmount=function(_){s&&s(_);var n=_.__c;if(n&&n.__H)try{n.__H.__.forEach(q)}catch(_){o.options.__e(_,n.__v)}};var g="function"==typeof requestAnimationFrame;function q(_){"function"==typeof _.u&&_.u()}function A(_){_.u=_.__()}function D(_,n){return!_||n.some(function(n,t){return n!==_[t]})}function F(_,n){return"function"==typeof n?n(_):n}
},{"preact":"aSor"}],"RVoD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Title=void 0;var e=require("preact"),t=function(t){var r=t.text;return(0,e.h)("h1",null,r)};exports.Title=t;
},{"preact":"aSor"}],"NHn6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=o(require("@babel/runtime/helpers/slicedToArray")),t=require("preact"),a=require("./components/Form"),n=require("./components/Progress"),r=require("preact/hooks"),s=require("./components/Title");function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){var o=(0,r.useState)([{question:"Насколько вы в целом довольны или недовольны нашей компанией?",type:"radio",answers:[{text:"Очень доволен",name:"12"},{text:"Частично удовлетворен",name:"12"},{text:"Нет ни удовлетворения, ни неудовлетворенности",name:"12"},{text:"Несколько Неудовлетворенный",name:"12"},{text:"Очень недовольны",name:"12"}]},{question:"Насколько вы в целом довольны или недовольны нашей компанией?",type:"radio",answers:[{text:"Очень доволен",name:"87654"},{text:"Частично удовлетворен",name:"87654"},{text:"Нет ни удовлетворения, ни неудовлетворенности",name:"87654"},{text:"Несколько Неудовлетворенный",name:"87654"},{text:"Очень недовольны",name:"87654"}]},{question:"Насколько вы в целом довольны или недовольны нашей компанией?",type:"radio",answers:[{text:"Очень доволен",name:"656"},{text:"Очень недовольны",name:"656"},{text:"Нет ни удовлетворения, ни неудовлетворенности",name:"656"},{text:"Частично удовлетворен",name:"656"},{text:"Несколько Неудовлетворенный",name:"656"}]},{question:"Насколько вы в целом довольны или недовольны нашей компанией?",type:"radio",answers:[{text:"Очень доволен",name:"65"},{text:"Частично удовлетворен",name:"65"},{text:"Нет ни удовлетворения, ни неудовлетворенности",name:"65"},{text:"Несколько Неудовлетворенный",name:"65"},{text:"Очень недовольны",name:"65"}]}]),i=(0,e.default)(o,2),m=i[0],p=(i[1],(0,r.useState)(new Set)),u=(0,e.default)(p,2),x=u[0],l=u[1];return(0,t.h)("section",{class:"app"},(0,t.h)("div",{class:"container"},(0,t.h)("div",{className:"app__title"},(0,t.h)(s.Title,{text:"Опрос об удовлетворенности клиентов"})),(0,t.h)("div",{className:"app__form"},(0,t.h)(a.Form,{onChange:function(e){!x.has(e)&&x.add(e),l(new Set(x))},questions:m,typeProgress:x}),(0,t.h)(n.Progress,{progress:x.size,length:m.length}))))};exports.App=i;
},{"@babel/runtime/helpers/slicedToArray":"HETk","preact":"aSor","./components/Form":"xSR6","./components/Progress":"K2H1","preact/hooks":"MwGB","./components/Title":"RVoD"}],"zbzq":[function(require,module,exports) {

},{"C:\\Users\\Candela\\Desktop\\projects-preact\\service-evaluation\\node_modules\\normalize.css\\normalize.css":"aVoE"}],"zo2T":[function(require,module,exports) {
"use strict";var e=require("preact"),r=require("./App");require("./style.scss"),(0,e.render)((0,e.h)(r.App,null),document.getElementById("root"));
},{"preact":"aSor","./App":"NHn6","./style.scss":"zbzq"}]},{},["zo2T"], null)
//# sourceMappingURL=src.f69400ca.js.map