!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core"),require("cyano-mithril"),require("polythene-core-drawer"),require("polythene-mithril-dialog")):"function"==typeof define&&define.amd?define(["exports","polythene-core","cyano-mithril","polythene-core-drawer","polythene-mithril-dialog"],r):r((e=e||self).polythene={},e["polythene-core"],e["cyano-mithril"],e["polythene-core-drawer"],e["polythene-mithril-dialog"])}(this,function(e,r,t,n,o){"use strict";function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var p={component:"pe-dialog pe-drawer",cover:"pe-drawer--cover",push:"pe-drawer--push",mini:"pe-drawer--mini",permanent:"pe-drawer--permanent",border:"pe-drawer--border",floating:"pe-drawer--floating",fixed:"pe-drawer--fixed",anchorEnd:"pe-drawer--anchor-end",visible:"pe-dialog--visible"},l=t.cast(n._Drawer,{h:t.h,Dialog:o.DialogInstance,openDialogsSelector:n.openDialogsSelector});l.displayName="DrawerInstance";var c=t.cast(r._Conditional,{h:t.h,useState:t.useState,useEffect:t.useEffect});c.displayName="DrawerToggle";var s={view:function(e){return t.h(c,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(t,!0).forEach(function(r){i(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},e.attrs,{placeholderClassName:p.placeholder,instance:l,permanent:e.attrs.permanent||e.attrs.mini}))},displayName:"Drawer"};e.Drawer=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-drawer.js.map
