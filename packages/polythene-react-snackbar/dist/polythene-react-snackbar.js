!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("cyano-react"),require("polythene-react-base"),require("polythene-core"),require("polythene-core-snackbar")):"function"==typeof define&&define.amd?define(["exports","cyano-react","polythene-react-base","polythene-core","polythene-core-snackbar"],t):t((e=e||self).polythene={},e["cyano-react"],e["polythene-react-base"],e["polythene-core"],e["polythene-core-snackbar"])}(this,function(e,t,n,o,a){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},{component:"pe-notification",action:"pe-notification__action",content:"pe-notification__content",holder:"pe-notification__holder",placeholder:"pe-notification__placeholder",title:"pe-notification__title",hasContainer:"pe-notification--container",horizontal:"pe-notification--horizontal",multilineTitle:"pe-notification__title--multi-line",vertical:"pe-notification--vertical",visible:"pe-notification--visible"},{component:"pe-notification pe-snackbar",holder:"pe-snackbar__holder",placeholder:"pe-snackbar__placeholder",open:"pe-snackbar--open"}),i=t.cast(a._Snackbar,{h:t.h,a:t.a,useState:t.useState,useEffect:t.useEffect,useRef:t.useRef,getRef:t.getRef,useReducer:t.useReducer});i.displayName="SnackbarInstance";var l={name:"snackbar",className:c.component,htmlShowClass:c.open,defaultId:"default_snackbar",holderSelector:".".concat(c.holder),instance:i,placeholder:"span.".concat(c.placeholder),queue:!0,transitions:a.transitions},p=o.Multi({options:l,renderer:n.renderer}),s=n.ComponentCreator(p);Object.getOwnPropertyNames(p).forEach(function(e){return s[e]=p[e]}),s.displayName="Snackbar",e.SnackbarInstance=i,e.Snackbar=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-snackbar.js.map
