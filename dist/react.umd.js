!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).statedX={},e.React)}(this,function(e,t){"use strict";var r="default"in t?t.default:t;function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){u=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(u)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=r.createContext(null);e.Provider=function(e){var o=e.store,i=n(t.useState(o.getState()),2),a=i[0],f=i[1];function c(e){a!==e&&f(e)}return t.useEffect(function(){return o.subscribe(c)},[o]),r.createElement(u.Provider,{value:a},e.children)},e.useSelect=function(){return t.useContext(u)},Object.defineProperty(e,"__esModule",{value:!0})});