!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("j2c"),require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","j2c","polythene-core"],t):t((e=e||self).polythene={},e.j2c,e["polythene-core"])}(this,function(e,t,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n=[{display:"-webkit-box"},{display:"-moz-box"},{display:"-ms-flexbox"},{display:"-webkit-flex"},{display:"flex"}],i=[n,{"-ms-flex-align":"center","-webkit-align-items":"center","align-items":"center"}],o=[n,{"-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center"}],l={flex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return[{"-webkit-box-flex":e},{"-moz-box-flex":e},{"-webkit-flex":e},{"-ms-flex":e},{flex:e},1===e?{"-webkit-flex-basis":"0.000000001px"}:{},1===e?{"flex-basis":"0.000000001px"}:{}]},flexAuto:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexAutoVertical:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexIndex:function(e){return{"-ms-flex":e,"-webkit-flex":e,flex:e}},flexGrow:function(e){return{"-webkit-flex-grow":e,"flex-grow":e}},flexShrink:function(e){return{"-webkit-flex-shrink":e,"flex-shrink":e}},layout:n,layoutAroundJustified:[n,{"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around","justify-content":"space-around"}],layoutCenter:i,layoutCenterCenter:[o,i],layoutCenterJustified:o,layoutEnd:[n,{"-ms-flex-align":"end","-webkit-align-items":"flex-end","align-items":"flex-end"}],layoutEndJustified:[n,{"-ms-flex-pack":"end","-webkit-justify-content":"flex-end","justify-content":"flex-end"}],layoutHorizontal:[n,{"-ms-flex-direction":"row","-webkit-flex-direction":"row","flex-direction":"row"}],layoutHorizontalReverse:[n,{"-ms-flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse","flex-direction":"row-reverse"}],layoutInline:[n,{display:"-ms-inline-flexbox"},{display:"-webkit-inline-flex"},{display:"inline-flex"}],layoutJustified:[n,{"-ms-flex-pack":"justify","-webkit-justify-content":"space-between","justify-content":"space-between"}],layoutStart:[n,{"-ms-flex-align":"start","-webkit-align-items":"flex-start","align-items":"flex-start"}],layoutStartJustified:[n,{"-ms-flex-pack":"start","-webkit-justify-content":"flex-start","justify-content":"flex-start"}],layoutVertical:[n,{"-ms-flex-direction":"column","-webkit-flex-direction":"column","flex-direction":"column"}],layoutVerticalReverse:[n,{"-ms-flex-direction":"column-reverse","-webkit-flex-direction":"column-reverse","flex-direction":"column-reverse"}],layoutWrap:[n,{"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap","flex-wrap":"wrap"}],layoutWrapReverse:[n,{"-ms-flex-wrap":"wrap-reverse","-webkit-flex-wrap":"wrap-reverse","flex-wrap":"wrap-reverse"}],selfCenter:{"-ms-align-self":"center","-webkit-align-self":"center","align-self":"center"},selfEnd:{"-ms-align-self":"flex-end","-webkit-align-self":"flex-end","align-self":"flex-end"},selfStart:{"-ms-align-self":"flex-start","-webkit-align-self":"flex-start","align-self":"flex-start"},selfStretch:{"-ms-align-self":"stretch","-webkit-align-self":"stretch","align-self":"stretch"}};function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c={clearfix:function(){return{"&:after":{content:'""',display:"table",clear:"both"}}},defaultTransition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".18s",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ease-out";return{transitionDelay:"0ms",transitionDuration:t,transitionTimingFunction:r,transitionProperty:e}},ellipsis:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return"none"===e?{textOverflow:"initial",overflow:"initial",display:"block",height:"auto",maxHeight:"none",whiteSpace:"normal"}:[{"@supports (-webkit-line-clamp: 2)":void 0!==e?{"-webkit-line-clamp":e,"-webkit-box-orient":"vertical",display:"-webkit-box",wordBreak:"break-word"}:void 0},f({overflow:"hidden",textOverflow:"ellipsis",textRendering:"auto"},void 0!==t?{maxHeight:e*t+r}:void 0,{},1===t?{wordWrap:"nowrap"}:void 0)]},fit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e+"px";return{position:"absolute",top:t,right:t,bottom:t,left:t}},sticky:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{position:"sticky",top:0,zIndex:e}}};var p,d=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){var r,n,i,o,l;function a(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")}function s(e,t){return n[e]="",n[e]=t,!!n[e]}function f(e,t){return i.textContent="@media ("+e+":"+t+"){}",!!~i.sheet.cssRules[0].cssText.indexOf(t)}function u(e){return e in n}function c(e){return i.textContent=e+"{}",!!i.sheet.cssRules.length}Object.defineProperty(t,"__esModule",{value:!0});var p=[{props:["cursor"],values:["grab","grabbing","zoom-in","zoom-out"]},{props:["display"],values:["box","inline-box","flexbox","inline-flexbox","flex","inline-flex","grid","inline-grid"]},{props:["position"],values:["sticky"]},{props:["width","column-width","height","max-height","max-width","min-height","min-width"],values:["contain-floats","fill-available","fit-content","max-content","min-content"]}],d={"align-items":"box-align",flex:"box-flex","box-direction":"box-direction","box-orient":"box-orient","flex-grow":"box-flex","flex-wrap":"box-lines","justify-content":"box-pack",order:"box-ordinal-group"},x={"flex-end":"end","flex-start":"start",nowrap:"single","space-around":"justify","space-between":"justify",wrap:"multiple","wrap-reverse":"multiple"},y={"align-content":"-ms-flex-line-pack","align-items":"-ms-flex-align","align-self":"-ms-flex-item-align","flex-basis":"-ms-preferred-size","flex-grow":"-ms-flex-positive","flex-shrink":"-ms-flex-negative","justify-content":"-ms-flex-pack",order:"-ms-flex-order"},v={"flex-end":"end","flex-start":"start","space-around":"distribute","space-between":"justify"};function m(e){r=getComputedStyle(document.documentElement,null),n=document.createElement("div").style,i=document.documentElement.appendChild(document.createElement("style")),l=s,o=u,"zIndex"in n&&!("z-index"in n)&&(l=function(e,t){return s(a(e),t)},o=function(e){return u(a(e))}),function(e){var t={};function n(e){if("-"===e.charAt(0)){var r=e.split("-")[1];t[r]=++t[r]||1}}if(r&&r.length>0)for(var i=0;i<r.length;i++)n(r[i]);else for(var o in r)n(o.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}));var l=[];for(var s in t)l.push(s);l.sort(function(e,r){return t[r]-t[e]}),e.prefixes=l.map(function(e){return"-"+e+"-"}),e.prefix=e.prefixes[0]||"",c("_:-ms-lang(x), _:-webkit-full-screen")&&e.prefixes.push("-ms-"),e.Prefix=a(e.prefix)}(e),function(e){var t,r;function n(t){return t.replace(/^::?/,function(t){return t+e.prefix})}if(""!==e.prefix){var i={":any-link":null,"::backdrop":null,":fullscreen":null,":full-screen":":fullscreen","::placeholder":null,":placeholder":"::placeholder","::input-placeholder":"::placeholder",":input-placeholder":"::placeholder",":read-only":null,":read-write":null,"::selection":null};for(t in i)r=n(t),!c(i[t]||t)&&c(r)&&(e.hasSelectors=!0,e.selectorList.push(i[t]||t),e.selectorMap[i[t]||t]=r)}}(e),function(e){if(""!==e.prefix){var t={keyframes:"name",viewport:null,document:'regexp(".")'};for(var r in t)for(var n=r+" "+(t[r]||""),i=e.prefixes.length;i--;)!c("@"+n)&&c("@"+e.prefixes[i]+n)&&(e.hasAtrules=!0,e.atrules["@"+r]="@"+e.prefixes[i]+r);e.hasDppx=f("resolution","1dppx"),e.hasPixelRatio=f(e.prefix+"device-pixel-ratio","1"),e.hasPixelRatioFraction=f(e.prefix+"device-pixel-ratio","1/1"),(e.hasPixelRatio||e.hasPixelRatioFraction)&&(e.properties.resolution=e.prefix+"device-pixel-ratio",e.properties["min-resolution"]=e.prefix+"min-device-pixel-ratio",e.properties["max-resolution"]=e.prefix+"max-device-pixel-ratio",f("min-"+e.prefix+"device-pixel-ratio","1")&&(e.properties["min-resolution"]="min-"+e.prefix+"device-pixel-ratio",e.properties["max-resolution"]="max-"+e.prefix+"device-pixel-ratio"))}}(e),function(e){if(0!==e.prefixes.length){for(var t=0;t<p.length;t++){for(var r,n={},i=p[t].props[0],o=0;r=p[t].values[o];o++)for(var a=e.prefixes.length;a--;)!l(i,r)&&l(i,e.prefixes[a]+r)&&(e.hasKeywords=!0,n[r]=e.prefixes[a]+r);for(o=0;i=p[t].props[o];o++)e.keywords[i]=n}if(e.keywords.display&&e.keywords.display.flexbox&&!l("display","flex"))for(a in e.keywords.display.flex=e.keywords.display.flexbox,e.keywords.display["inline-flex"]=e.keywords.display["inline-flexbox"],e.flexbox2012=!0,y)e.properties[a]=y[a],e.keywords[a]=v;else if(e.keywords.display&&e.keywords.display.box&&!l("display","flex")&&!l("display",e.prefix+"flex"))for(a in e.keywords.display.flex=e.keywords.display.box,e.keywords.display["inline-flex"]=e.keywords.display["inline-box"],e.flexbox2009=!0,d)e.properties[a]=e.prefix+d[a],e.keywords[a]=x;else!e.keywords.display||e.keywords.display.box||e.keywords.display.flex||e.keywords.display.flexbox||l("display","flex")||(e.jsFlex=!0);!l("color","initial")&&l("color",e.prefix+"initial")&&(e.initial=e.prefix+"initial")}}(e),function(e){if(""!==e.prefix){var t={"linear-gradient":{property:"background-image",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"background-image",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};for(var r in t["repeating-linear-gradient"]=t["repeating-radial-gradient"]=t["radial-gradient"]=t["linear-gradient"],t){var n=t[r],i=n.property,o=r+"("+n.params+")";!l(i,o)&&l(i,e.prefix+o)&&e.functions.push(r)}}}(e),function(e){!l("background-clip","text")&&l("-webkit-background-clip","text")&&(e.WkBCTxt=!0),["background-clip","text-fill-color","text-stroke-color","text-stroke-width","text-stroke"].forEach(function(t){!o(t)&&o("-webkit-"+t)&&(e.properties[t]="-webkit-"+t)})}(e),"undefined"!=typeof document&&document.documentElement.removeChild(i),r=i=null}var b,h={},g=/[(),]|\/\*[\s\S]*?\*\//g;function w(e,t,r){return new RegExp(e+"(?:"+t.join("|")+")"+r)}function k(e,t,r){return new RegExp("\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|"+e+"((?:"+t.join("|")+"))"+r,"gi")}function S(e,t,r,n){if("string"!=typeof r||"-"===r.charAt(0))return t(r,n);if("string"!=typeof n&&"number"!=typeof n)return t(e.properties[r]||e.fixProperty(r),n);if(n+="",e.jsFlex){if("display"===r&&("flex"===n||"inline-flex"===n))return void t("-js-display",n)}else if(e.flexbox2009){if("flex-flow"===r)return void n.split(/\s+/).forEach(function(r){r.indexOf("wrap")>-1?S(e,t,"flex-wrap",r):""!==r&&S(e,t,"flex-direction",r)});if("flex-direction"===r)return t(e.properties["box-orient"],n.indexOf("column")>-1?"block-axis":"inline-axis"),void t(e.properties["box-direction"],n.indexOf("-reverse")>-1?"reverse":"normal")}e.WkBCTxt&&"background-clip"===r&&"text"===n?t("-webkit-background-clip",n):t(e.properties[r]||e.fixProperty(r),e.fixValue(n,r))}function j(e){var t=e.prefix;e.fixProperty=e.fixProperty||function(r){var n;return e.properties[r]=o(r)||!o(n=t+r)?r:n};var r=w("",e.selectorList,"(?:\\b|$|[^-])"),n=k("",e.selectorList,"(?:\\b|$|[^-])"),i=function(t,r){return null!=r?e.selectorMap[r]:t};e.fixSelector=function(e){return r.test(e)?e.replace(n,i):e};var l=e.functions.indexOf("linear-gradient")>-1,a=/\blinear-gradient\(/,s=/(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/gi,f=function(e,t,r,n){return t+r+(90-n)+"deg"},u=!!e.functions.length,c=w("(?:^|\\s|,|\\()",e.functions,"\\s*\\("),p=k("(^|\\s|,|\\()",e.functions,"(?=\\s*\\()");function d(e,r,n){return r+t+n}var x=/^\s*([-\w]+)/gi,y=function(t,r){return e.properties[r]||e.fixProperty(r)};e.fixValue=function(t,r){var n;return null!=e.initial&&"initial"===t?e.initial:e.hasKeywords&&(n=(e.keywords[r]||h)[t])?n:(n=t,e.valueProperties.hasOwnProperty(r)&&(n=-1===t.indexOf(",")?t.replace(x,y):function(e){for(var t,r=[],n=[],i=0;t=g.exec(e);)switch(t[0]){case"(":i++;break;case")":i--;break;case",":if(i)break;r.push(t.index)}for(t=r.length;t--;)n.unshift(e.slice(r[t]+1)),e=e.slice(0,r[t]);return n.unshift(e),n}(t).map(function(e){return e.replace(x,y)}).join(",")),u&&c.test(t)&&(l&&a.test(t)&&(n=n.replace(s,f)),n=n.replace(p,d)),n)};var v,m,b=/((?:min-|max-)?resolution)\s*:\s*((?:\d*\.)?\d+)dppx/g,j=e.hasPixelRatio?function(t,r,n){return e.properties[r]+":"+n}:e.hasPixelRatioFraction?function(t,r,n){return e.properties[r]+":"+Math.round(10*n)+"/10"}:function(e,t,r){return t+":"+Math.round(96*r)+"dpi"};e.fixAtMediaParams=!1!==e.hasDppx?function(e){return e}:function(e){return-1!==e.indexOf("reso")?e.replace(b,j):e};var P=function(e,t){v=e,m=t},O=/\(\s*([-\w]+)\s*:\s*((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;function F(t,r,n){return S(e,P,r,n),"("+v+":"+m}e.fixAtSupportsParams=function(e){return e.replace(O,F)}}b={atrules:{},hasAtrules:!1,hasDppx:null,hasKeywords:!1,hasPixelRatio:!1,hasPixelRatioFraction:!1,hasSelectors:!1,hasValues:!1,fixAtMediaParams:null,fixAtSupportsParams:null,fixProperty:null,fixSelector:null,fixValue:null,flexbox2009:!1,flexbox2012:!1,functions:[],initial:null,jsFlex:!1,keywords:{},placeholder:null,prefix:"",prefixes:[],Prefix:"",properties:{},selectorList:[],selectorMap:{},valueProperties:{transition:1,"transition-property":1,"will-change":1},WkBCTxt:!1},"function"==typeof getComputedStyle&&m(b),j(b),t.prefixPlugin=function e(){var t=b,r=[];return{set:{setPrefixDb:function(n){return-1===r.indexOf(n)&&(j(n),r.push(n)),t=n,e}},filter:function(e){return{atrule:function(r,n,i,o){e.atrule(t.hasAtrules&&t.atrules[r]||r,n,"@media"===r?t.fixAtMediaParams(i):"@supports"===r?t.fixAtSupportsParams(i):i,o)},decl:function(r,n){S(t,e.decl,r,n)},rule:function(r){e.rule(t.hasSelectors?t.fixSelector(r):r)}}}}}});(p=d)&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")&&p.default;var x=new t(d.prefixPlugin),y=/[^a-z0-9\\-]/g,v=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return b.apply(void 0,[{id:e}].concat(r))},m=function(e){if(!r.isServer&&e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)}},b=function(e){var t=e.id,n=e.document;if(!r.isServer){var i=t.replace(y,"_");m(i);var o=n||window.document,l=o.createElement("style");i&&l.setAttribute("id",i);for(var a=arguments.length,s=new Array(a>1?a-1:0),f=1;f<a;f++)s[f-1]=arguments[f];s.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var t={"@global":e},r=x.sheet(t);l.appendChild(o.createTextNode(r))})}),o.head.appendChild(l)}},h=function(e){var t=e.styles,r=e.scope;return r?[a({},r,t)]:t},g=function(e){var t=e.selectors,r=e.fns,n=e.vars,i=e.customVars,o=e.mediaQuery,l=e.scope,a=e.identifier,s=(l?" ":"")+t.join(""),f=r.map(function(e){return e(s,n,i)}).filter(function(e){return e.length>0});if(0!==f.length){var u=a||s.trim().replace(/^[^a-z]?(.*)/,"$1");v(u,h({styles:h({styles:f,scope:l}),scope:o}))}},w=function(e){var t=e.selectors,r=e.fns,n=e.vars,i=e.customVars,o=e.mediaQuery,l=e.scope,a=(l?" ":"")+t.join(""),s=r.map(function(e){return e(a,n,i)});return h({styles:h({styles:s,scope:l}),scope:o})},k={add:v,addStyle:g,addToDocument:b,createAddStyle:function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=o.mediaQuery,a=o.scope;return g({selectors:[e,n],fns:t,vars:r,customVars:i,mediaQuery:l,scope:a})}},createGetStyle:function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=o.mediaQuery,a=o.scope;return[w({selectors:[e,n],fns:t,vars:r,customVars:i,mediaQuery:l,scope:a})]}},getStyle:w,remove:m},S=function(e){var t=e.varFns,r=e.customVarFns,n=e.superStyle,i=e.varMixin,o=e.selector,l=e.scopedSelector,a=e.componentVars,s=void 0===a?{}:a,c=e.customVars,p=f({},s,{},c),d=c||p,x=(s.general_styles,u(s,["general_styles"])),y=void 0!==n?void 0!==c?n(o,s,c):n(o,x):[],v=f({},c?r:{},{},t);return y.concat(Object.keys(i(d)).map(function(e){return v&&void 0!==v[e]?v[e](l,p):null}).filter(function(e){return e}))},j=function(e){var t=e.scopes,r=e.selector,n=e.isNoTouch,i=void 0!==n&&n;return r.split(/\s*,\s*/).map(function(e){return function(e){var t=e.scopes,r=e.selector;return e.isNoTouch?t.map(function(e){return e+r+":hover"}).join(","):t.map(function(e){return e+r}).join(",")}({scopes:t,selector:e,isNoTouch:i})}).join("")},P=[{scopes:[".pe-dark-tone",".pe-dark-tone "],varFnName:"darkTintFns",isNoTouch:!1},{scopes:["",".pe-light-tone",".pe-light-tone "],varFnName:"lightTintFns",isNoTouch:!1},{scopes:[".pe-no-touch .pe-dark-tone "],varFnName:"darkTintHoverFns",isNoTouch:!0},{scopes:[".pe-no-touch ",".pe-no-touch .pe-light-tone "],varFnName:"lightTintHoverFns",isNoTouch:!0}],O=[{".layout, .layout.horizontal":l.layout,".layout.horizontal.inline, .layout.vertical.inline":l.layoutInline,".layout.horizontal":l.layoutHorizontal,".layout.horizontal.reverse":l.layoutHorizontalReverse,".layout.vertical":l.layoutVertical,".layout.vertical.reverse":l.layoutVerticalReverse,".layout.wrap":l.layoutWrap,".layout.wrap.reverse":l.layoutWrapReverse,".flex":l.flex(1),".span.flex":{display:"block"},".flex.auto-vertical":l.flexAutoVertical,".flex.auto":l.flexAuto,".flex.none":l.flexIndex("none"),".flex.one":l.flexIndex(1),".flex.two":l.flexIndex(2),".flex.three":l.flexIndex(3),".flex.four":l.flexIndex(4),".flex.five":l.flexIndex(5),".flex.six":l.flexIndex(6),".flex.seven":l.flexIndex(7),".flex.eight":l.flexIndex(8),".flex.nine":l.flexIndex(9),".flex.ten":l.flexIndex(10),".flex.eleven":l.flexIndex(11),".flex.twelve":l.flexIndex(12),".layout.start":l.layoutStart,".layout.center, .layout.center-center":l.layoutCenter,".layout.end":l.layoutEnd,".layout.start-justified":l.layoutStartJustified,".layout.center-justified, .layout.center-center":l.layoutCenterJustified,".layout.end-justified":l.layoutEndJustified,".layout.around-justified":l.layoutAroundJustified,".layout.justified":l.layoutJustified,".self-start":l.selfStart,".self-center":l.selfCenter,".self-end":l.selfEnd,".self-stretch":l.selfStretch}],F=[{".pe-block":{display:"block"},".pe-inline-block":{display:"inline-block"},".pe-hidden":{display:"none !important"},".pe-relative":{position:"relative"},".pe-absolute":{position:"absolute"},".pe-fit":{position:"absolute",top:0,right:0,bottom:0,left:0},".pe-fullbleed":{margin:0,height:"100vh"},".pe-rtl":{direction:"rtl"},"*[dir=rtl], .pe-rtl ":{" .pe-rtl--flip":{transform:"scaleX(-1)"}}}],V=[O,F];e.addLayoutStyles=function(){return k.add("pe-layout",O,F)},e.createColor=function(e){var t=e.varFns,r=void 0===t?{}:t,n=e.superColor,i=e.varMixin,o=void 0===i?function(e){return e}:i;return function(e,t,i){return P.map(function(l){var a=l.scopes,s=l.varFnName,f=l.isNoTouch;return function(e){var t=e.selector,r=e.scopedSelector,n=e.componentVars,i=e.customVars,o=e.varFns,l=e.superColor,a=e.varMixin;return S({varFns:o,superStyle:l,varMixin:a,selector:t,scopedSelector:r,componentVars:n,customVars:i})}({selector:e,scopedSelector:j({scopes:a,selector:e,isNoTouch:f}),componentVars:t,customVars:i,varFns:r[s],superColor:n,varMixin:o})})}},e.createLayout=function(e){var t=e.varFns,r=e.customVarFns,n=e.superLayout,i=e.varMixin,o=void 0===i?function(e){return e}:i;return function(e,i,l){return S({varFns:t,customVarFns:r,superStyle:n,varMixin:o,selector:e,scopedSelector:e,componentVars:i,customVars:l})}},e.createMarker=function(e,t){e||console.error("createMarker requires param `vars`");var r=function(e,t){var r=Object.keys(t).filter(function(t){return!0===e[t]}).join(".");return r?'"'.concat(r,'"'):void 0}(e,t);return r?{":before":{content:r,display:"none"}}:void 0},e.flex=l,e.layoutStyles=V,e.mixin=c,e.rgba=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"rgba(".concat(e,", ").concat(t,")")},e.sel=function(e,t){return a({},e,t)},e.selectorRTL=function(e){return"*[dir=rtl] ".concat(e,", .pe-rtl ").concat(e)},e.styler=k,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-css.js.map
