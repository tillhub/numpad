parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"wRU+":[function(require,module,exports) {
"use strict";var e=function(e){};function n(n,r,i,o,t,a,f,s){if(e(r),!n){var u;if(void 0===r)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[i,o,t,a,f,s],l=0;(u=new Error(r.replace(/%s/g,function(){return d[l++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}module.exports=n;
},{}],"+CtU":[function(require,module,exports) {
"use strict";var e={};module.exports=e;
},{}],"UQex":[function(require,module,exports) {
"use strict";function t(t){return function(){return t}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(t){return t},module.exports=n;
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),t=require("fbjs/lib/invariant"),r=require("fbjs/lib/emptyObject"),n=require("fbjs/lib/emptyFunction"),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112;o&&Symbol.for("react.timeout");var d="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<r;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);t(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function m(e,t,n){this.props=e,this.context=t,this.refs=r,this.updater=n||h}function b(){}function _(e,t,n){this.props=e,this.context=t,this.refs=r,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var S=_.prototype=new b;S.constructor=_,e(S,m.prototype),S.isPureReactComponent=!0;var g={current:null},k=Object.prototype.hasOwnProperty,$={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n=void 0,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,n)&&!$.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var c=Array(f),a=0;a<f;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:u,type:e,key:l,ref:i,props:o,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}function x(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}var P=/\/+/g,R=[];function C(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function O(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case l:i=!0}}if(i)return r(n,e,""===t?"."+E(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var f=0;f<e.length;f++){var c=t+E(o=e[f],f);i+=A(o,c,r,n)}else if(null==e?c=null:c="function"==typeof(c=d&&e[d]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),f=0;!(o=e.next()).done;)i+=A(o=o.value,c=t+E(o,f++),r,n);else"object"===o&&v("31","[object Object]"===(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return i}function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?x(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var o=e.result,l=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,o,r,n.thatReturnsArgument):null!=e&&(w(e)&&(t=l+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r,e={$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),o.push(e))}function F(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(P,"$&/")+"/"),t=C(t,u,n,o),null==e||A(e,"",U,t),O(t)}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=C(null,null,t,r),null==e||A(e,"",q,t),O(t)},count:function(e){return null==e?0:A(e,"",n.thatReturnsNull,null)},toArray:function(e){var t=[];return F(e,t,null,n.thatReturnsArgument),t},only:function(e){return w(e)||v("143"),e}},createRef:function(){return{current:null}},Component:m,PureComponent:_,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},Fragment:i,StrictMode:f,unstable_AsyncMode:p,unstable_Profiler:c,createElement:j,cloneElement:function(t,r,n){null==t&&v("267",t);var o=void 0,l=e({},t.props),i=t.key,f=t.ref,c=t._owner;if(null!=r){void 0!==r.ref&&(f=r.ref,c=g.current),void 0!==r.key&&(i=""+r.key);var a=void 0;for(o in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),r)k.call(r,o)&&!$.hasOwnProperty(o)&&(l[o]=void 0===r[o]&&void 0!==a?a[o]:r[o])}if(1===(o=arguments.length-2))l.children=n;else if(1<o){a=Array(o);for(var s=0;s<o;s++)a[s]=arguments[s+2];l.children=a}return{$$typeof:u,type:t.type,key:i,ref:f,props:l,_owner:c}},createFactory:function(e){var t=j.bind(null,e);return t.type=e,t},isValidElement:w,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:g,assign:e}},I={default:B},M=I&&B||I;module.exports=M.default?M.default:M;
},{"object-assign":"J4Nk","fbjs/lib/invariant":"wRU+","fbjs/lib/emptyObject":"+CtU","fbjs/lib/emptyFunction":"UQex"}],"1n8/":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"Asjh":[function(require,module,exports) {
"use strict";var _="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=_;
},{}],"wVGV":[function(require,module,exports) {
"use strict";var e=require("./lib/ReactPropTypesSecret");function r(){}module.exports=function(){function t(r,t,o,n,p,a){if(a!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o};return n.checkPropTypes=r,n.PropTypes=n,n};
},{"./lib/ReactPropTypesSecret":"Asjh"}],"5D9O":[function(require,module,exports) {
var r,e,i;module.exports=require("./factoryWithThrowingShims")();
},{"./factoryWithThrowingShims":"wVGV"}],"9qb7":[function(require,module,exports) {
var define;
var e;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var s=n.apply(null,o);s&&e.push(s)}else if("object"===a)for(var u in o)r.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}"undefined"!=typeof module&&module.exports?(n.default=n,module.exports=n):"function"==typeof e&&"object"==typeof e.amd&&e.amd?e("classnames",[],function(){return n}):window.classNames=n}();
},{}],"Tnu0":[function(require,module,exports) {

},{}],"ztv6":[function(require,module,exports) {
module.exports="/backspace-icon.8fe40460.svg";
},{}],"VgR5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d;var e=r(require("react")),l=r(require("prop-types")),t=r(require("classnames")),s=r(require("../styles.css"));function r(e){return e&&e.__esModule?e:{default:e}}function d(l){var r=l.text,d=l.clickHandler,u=l.klass,a=l.children,i=l.disabled;return e.default.createElement("span",{className:(0,t.default)(s.default.button,u,i&&s.default.disabled),disabled:i,onClick:function(){i||d(r)}},a)}d.propTypes={text:l.default.string.isRequired,clickHandler:l.default.func.isRequired,klass:l.default.string,children:l.default.node.isRequired,disabled:l.default.bool.isRequired},d.defaultProps={klass:null};
},{"react":"1n8/","prop-types":"5D9O","classnames":"9qb7","../styles.css":"Tnu0"}],"Fst2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c;var e=d(require("react")),a=d(require("prop-types")),t=d(require("../images/backspace-icon.svg")),l=d(require("./Button")),r=d(require("../styles.css"));function d(e){return e&&e.__esModule?e:{default:e}}var u=["C","7","8","9","4","5","6","1","2","3"];function c(a){var d=a.clickHandler,c=a.disabled,i=a.decimalSeparator,s=u.map(function(a){return e.default.createElement(l.default,{text:a,clickHandler:d,key:a,disabled:c},a)});return e.default.createElement("div",{className:r.default.keypad},e.default.createElement(l.default,{text:"back",klass:r.default.back,clickHandler:d,disabled:c},e.default.createElement("img",{src:t.default})),s,e.default.createElement(l.default,{text:"0",klass:r.default.zero,clickHandler:d,disabled:c},"0"),e.default.createElement(l.default,{text:i,clickHandler:d,disabled:c},i))}c.propTypes={clickHandler:a.default.func.isRequired,disabled:a.default.bool.isRequired,decimalSeparator:a.default.string.isRequired};
},{"react":"1n8/","prop-types":"5D9O","../images/backspace-icon.svg":"ztv6","./Button":"VgR5","../styles.css":"Tnu0"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),t=o(require("prop-types")),r=o(require("classnames")),n=o(require("./styles.css")),a=o(require("./Keypad"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b="400px",v=function(t){function o(){var e,t,r;l(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return p(t,(r=t=p(this,(e=d(o)).call.apply(e,[this].concat(a))),t.state={input:t.props.startValue||"0"},t.setDisplayText=function(e){var r=t.removeLeadingZero(e);return t.validate(r)?t.setState({input:r},function(){t.props.handleChange(t.state.input)}):null},t.handleKeypadPress=function(e){var r,n=t.state.input;r="back"===e?t.removeLastCharacter(n&&n.toString()):"C"===e?"0":n?"".concat(n.toString()).concat(e):e,t.setDisplayText(r)},r))}return y(o,e.Component),c(o,[{key:"componentDidUpdate",value:function(e){this.props.startValue!==e.startValue&&this.setState({input:this.props.startValue})}},{key:"validate",value:function(e){return""===e||(","===this.props.decimalSeparator?/^$|^-?(0|[1-9][0-9]*)(,?|,[0-9][0-9]?)$|^-$/g:/^$|^-?(0|[1-9][0-9]*)(\.?|\.[0-9][0-9]?)$|^-$/g).test(e)}},{key:"removeLeadingZero",value:function(e){return e?e.replace(/^0(?=[0-9-])/g,""):""}},{key:"removeLastCharacter",value:function(e){return e?e.trim().slice(0,-1):e}},{key:"render",value:function(){var t=this,o=this.props,i=o.disabled,u=o.withoutInputField,l=o.decimalSeparator,s=o.width,c=o.children,p=this.state.input;return e.default.createElement("div",{className:n.default.wrapper,style:{width:s}},e.default.createElement("input",{className:(0,r.default)(n.default.inputField),value:p||"0",onChange:function(e){return t.setDisplayText(e.target.value)},disabled:i||u}),c,e.default.createElement(a.default,{disabled:i,clickHandler:this.handleKeypadPress,decimalSeparator:l}))}}]),o}();exports.default=v,v.propTypes={handleChange:t.default.func,startValue:t.default.string,disabled:t.default.bool,withoutInputField:t.default.bool,decimalSeparator:t.default.string,width:t.default.string,children:t.default.node},v.defaultProps={handleChange:function(){},startValue:null,disabled:!1,withoutInputField:!1,decimalSeparator:".",width:b,children:null};
},{"react":"1n8/","prop-types":"5D9O","classnames":"9qb7","./styles.css":"Tnu0","./Keypad":"Fst2"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map