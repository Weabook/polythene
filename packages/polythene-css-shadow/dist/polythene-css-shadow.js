!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],e):e((t=t||self).polythene={},t["polythene-core-css"],t["polythene-theme"])}(this,function(t,e,o){"use strict";function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}var p=function(t,e){return function(o,n){return[s(t,e,o,n),c(t,e,o,n)]}},s=function(t,o,r,a){return e.sel(r,n({},".pe-shadow--depth-".concat(o," .pe-shadow__").concat(t),{boxShadow:a["shadow_".concat(t,"_depth_").concat(o)]}))},c=function(t,o,r,a){if(5===o)return[];var p=o+1,s=".pe-with-active-shadow.pe-shadow--depth-".concat(p);return[e.sel("".concat(s,":focus ").concat(r,", ").concat(s,":active ").concat(r),n({}," .pe-shadow__".concat(t),{boxShadow:a["shadow_".concat(t,"_depth_").concat(p)]}))]},d=function(t,o){return e.sel(".pe-with-active-shadow ".concat(t),{" .pe-shadow__bottom, .pe-shadow__top":{transition:o.transition}})},h=function(t,o,r,a){return e.sel(t,n({}," .pe-shadow__".concat(a),{boxShadow:o["shadow_".concat(a,"_depth_").concat(r)]}))},i=function(t,e,o){return[h(t,e,o,"top"),h(t,e,o,"bottom")]},_=function(t,e){return void 0!==e.shadow_depth?i(t,e,e.shadow_depth):null},u={shadow_depth:_},l=r({},{general_styles:function(t,o){return[e.sel(t,[e.mixin.fit(),i(t,o,1),{borderRadius:"inherit",pointerEvents:"none"," .pe-shadow__bottom, .pe-shadow__top":[e.mixin.fit(),{borderRadius:"inherit"}]}])]},transition:function(t,o){return[e.sel(t,{".pe-shadow--animated":{" .pe-shadow__bottom, .pe-shadow__top":{transition:o.transition}}}),d(t,o)]},shadow_depth:_},[0,1,2,3,4,5].reduce(function(t,e){return t["shadow_top_depth_".concat(e)]=p("top",e),t["shadow_bottom_depth_".concat(e)]=p("bottom",e),t},{})),w=e.createLayout({varFns:l}),f={shadow_top_depth_0:"none",shadow_bottom_depth_0:"none",shadow_top_depth_1:"none",shadow_bottom_depth_1:"0 1px 4px 0 rgba(0, 0, 0, 0.37)",shadow_top_depth_2:"0 2px 2px 0 rgba(0, 0, 0, 0.2)",shadow_bottom_depth_2:"0 6px 10px 0 rgba(0, 0, 0, 0.3)",shadow_top_depth_3:"0 11px 7px 0 rgba(0, 0, 0, 0.19)",shadow_bottom_depth_3:"0 13px 25px 0 rgba(0, 0, 0, 0.3)",shadow_top_depth_4:"0 14px 12px 0 rgba(0, 0, 0, 0.17)",shadow_bottom_depth_4:"0 20px 40px 0 rgba(0, 0, 0, 0.3)",shadow_top_depth_5:"0 17px 17px 0 rgba(0, 0, 0, 0.15)",shadow_bottom_depth_5:"0 27px 55px 0 rgba(0, 0, 0, 0.3)",shadow_depth:void 0},b=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(o,!0).forEach(function(e){n(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}({general_styles:!0,transition:"box-shadow ".concat(o.vars.animation_duration," ease-out")},f),y=[w],x=".".concat("pe-shadow"),m=e.styler.createAddStyle(x,y,b),g=e.styler.createGetStyle(x,y,b);t.addGeneralStyleToHead=function(){return e.styler.addStyle({selectors:[x],fns:y,vars:b})},t.addStyle=m,t.getStyle=g,t.layout=w,t.sharedVarFns=u,t.sharedVars=f,t.vars=b,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-shadow.js.map
