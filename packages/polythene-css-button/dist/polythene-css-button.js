!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-css"),require("polythene-css-shadow"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-css-shadow","polythene-theme"],e):e((o=o||self).polythene={},o["polythene-core-css"],o["polythene-css-shadow"],o["polythene-theme"])}(this,function(o,e,t,r){"use strict";var n={component:"pe-text-button",super:"pe-button",row:"pe-button-row",content:"pe-button__content",label:"pe-button__label",textLabel:"pe-button__text-label",wash:"pe-button__wash",dropdown:"pe-button__dropdown",border:"pe-button--border",contained:"pe-button--contained",disabled:"pe-button--disabled",dropdownClosed:"pe-button--dropdown-closed",dropdownOpen:"pe-button--dropdown-open",extraWide:"pe-button--extra-wide",hasDropdown:"pe-button--dropdown",focus:"pe-button--focus",highLabel:"pe-button--high-label",inactive:"pe-button--inactive",raised:"pe-button--raised",selected:"pe-button--selected",separatorAtStart:"pe-button--separator-start"};function d(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function a(){return(a=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o}).apply(this,arguments)}function i(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(e){d(o,e,t[e])})}return o}var _={general_styles:function(o){return[e.sel(o,{userSelect:"none","-moz-user-select":"none",outline:"none",padding:0,textDecoration:"none",textAlign:"center",cursor:"pointer",".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive":{cursor:"default",pointerEvents:"none"}," .pe-button__content":{position:"relative",borderRadius:"inherit"}," .pe-button__label":{position:"relative",display:"block",borderRadius:"inherit",pointerEvents:"none"}," .pe-button__wash":[e.mixin.fit(),{zIndex:0,borderRadius:"inherit",pointerEvents:"none"}]}),{".pe-button-row":{fontSize:0,lineHeight:0}}]},row_margin_h:function(o,e){return[{".pe-button-row":d({margin:"0 -".concat(e.row_margin_h,"px")}," ".concat(o),{margin:"0 ".concat(e.row_margin_h,"px")})}]}},l=e.createLayout({varFns:_}),u=function(o,t,r){return e.sel(o,{":not(.pe-button--disabled)":{" .pe-button__content":{borderColor:t["color_"+r+"_border"]}}})},c={general_styles:function(){return[]}},s=function(o){var t;return d(t={},"color_"+o+"_text",function(t,r){return[e.sel(t,{":not(.pe-button--disabled)":{"&, &:link, &:visited":{color:r["color_"+o+"_text"]}}})]}),d(t,"color_"+o+"_disabled_text",function(t,r){return[e.sel(t,{".pe-button--disabled":{color:r["color_"+o+"_disabled_text"]}})]}),d(t,"color_"+o+"_background",function(t,r){return[e.sel(t,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__content":{backgroundColor:r["color_"+o+"_background"]}}})]}),d(t,"color_"+o+"_active_background",function(t,r){return[e.sel(t,{":not(.pe-button--disabled)":{".pe-button--selected":{" .pe-button__content":{backgroundColor:r["color_"+o+"_active_background"]}}}})]}),d(t,"color_"+o+"_disabled_background",function(t,r){return[e.sel(t,{".pe-button--disabled":{" .pe-button__content":{backgroundColor:r["color_"+o+"_disabled_background"]}}})]}),d(t,"color_"+o+"_wash_background",function(t,r){return[e.sel(t,{".pe-button--focus":{" .pe-button__wash":{backgroundColor:r["color_"+o+"_wash_background"]}}})]}),d(t,"color_"+o+"_border",function(e,t){return[u("".concat(e,".pe-button--border"),t,o)]}),d(t,"border",function(e,t){return[u(e,t,o)]}),d(t,"color_"+o+"_active_border",function(t,r){return[e.sel(t,{".pe-button--border.pe-button--selected":{" .pe-button__content":{borderColor:r["color_"+o+"_active_border"]}}})]}),d(t,"color_"+o+"_disabled_border",function(t,r){return[e.sel(t,{".pe-button--border.pe-button--disabled":{" .pe-button__content":{borderColor:r["color_"+o+"_disabled_border"]}}})]}),d(t,"color_"+o+"_icon",function(t,r){return[e.sel(t,{" .pe-button__dropdown":{color:r["color_"+o+"_icon"]}})]}),d(t,"color_"+o+"_separator",function(t,r){return[e.sel(t,{".pe-button--separator-start":{" .pe-button__content":{borderColor:r["color_"+o+"_separator"]}}})]}),t},b=function(o){var t;return d(t={},"color_"+o+"_hover",function(t,r){return[e.sel(t,{":not(.pe-button--disabled):not(.pe-button--selected)":{color:r["color_"+o+"_hover"]}})]}),d(t,"color_"+o+"_hover_border",function(t,r){return[e.sel(t,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__content":{borderColor:r["color_"+o+"_hover_border"]}}})]}),d(t,"color_"+o+"_wash_background",function(t,r){return[e.sel(t,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__wash":{backgroundColor:r["color_"+o+"_wash_background"]}}})]}),d(t,"color_"+o+"_hover_background",function(t,r){return[e.sel(t,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__content":{backgroundColor:r["color_"+o+"_hover_background"]}}})]}),d(t,"color_"+o+"_hover_icon",function(t,r){return[e.sel(t,{" .pe-button__dropdown":{color:r["color_"+o+"_hover_icon"]}})]}),t},p=i({},c,s("light")),g=i({},c,s("dark")),h=b("light"),v=b("dark"),f=e.createColor({varFns:{lightTintFns:p,darkTintFns:g,lightTintHoverFns:h,darkTintHoverFns:v}}),w=function(o){return function(){return{".pe-button--separator-start .pe-button__content":{borderStyle:o?"none solid none none":"none none none solid"}}}},m=w(!1),y=w(!0),k=function(o,t){return e.sel(o,{" .pe-button__dropdown":{minHeight:"calc((1em * ".concat(t.line_height,") + 2 * ").concat(t.label_padding_v,"px)")}})},x=function(o,t){return e.sel(o,{".pe-button--high-label":{padding:0," .pe-button__label":{padding:t.outer_padding_v+t.label_padding_v+"px 0"}}})},S=function(o,t){return e.sel(o,{".pe-button--high-label":{" .pe-button__label, .pe-button__dropdown":{minHeight:"calc((1em * ".concat(t.line_height,") + 2 * ").concat(t.outer_padding_v+t.label_padding_v,"px)")}}})},R=function(o,t,r){var n,a;return e.sel(o,{" .pe-button__content":{borderRadius:t.border_radius+"px"},":not(:first-child)":{" .pe-button__content":(n={},d(n,r?"borderTopRightRadius":"borderTopLeftRadius",0),d(n,r?"borderBottomRightRadius":"borderBottomLeftRadius",0),n)},":not(:last-child)":{" .pe-button__content":(a={},d(a,r?"borderTopLeftRadius":"borderTopRightRadius",0),d(a,r?"borderBottomLeftRadius":"borderBottomRightRadius",0),a)}})},C=function(o){return e.sel(o,{" .pe-button__wash, .pe-ripple":e.mixin.fit(-1)," .pe-button__content":{borderStyle:"solid"}})},L=function(o,t){return e.sel(o,{" .pe-button__content":{borderWidth:t.border_width+"px"}," .pe-button-group & + &":{marginLeft:-t.border_width+"px"}})},T=i({general_styles:function(o){return[e.sel(o,[m(),{display:"inline-block",background:"transparent",border:"none"," .pe-button__content":{position:"relative",borderWidth:"1px",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:0,paddingBottom:0},".pe-button--border":C(o)," .pe-button__label, .pe-button__dropdown":{whiteSpace:"pre",userSelect:"none","-moz-user-select":"none"}," .pe-button__text-label":{display:"inline-block",lineHeight:1},".pe-button--dropdown":{minWidth:"0"," .pe-button__dropdown":{position:"relative"}," .pe-svg":{position:"absolute",left:0,top:"50%"}," .pe-button__label + .pe-button__dropdown":{marginLeft:"6px",minWidth:0}}," .pe-button-group &":{minWidth:0}," .pe-button__dropdown .pe-svg":e.mixin.defaultTransition("transform"),".pe-button--dropdown-open":{" .pe-button__dropdown .pe-svg":{transform:"rotate(-180deg)"}}}]),[e.sel(e.selectorRTL(o),y())]]},border_radius:function(o,t){return[e.sel(o,{" .pe-button__content":{borderRadius:t.border_radius+"px"}}),R(".pe-button-group ".concat(o),t,!1),R(e.selectorRTL(".pe-button-group ".concat(o)),t,!0)]},border_width:function(o,e){return[L(o,e)]},min_width:function(o,t){return[e.sel(o,{minWidth:t.min_width+"px"})]},animation_duration:function(o,t){return[e.sel(o,{" .pe-button__content, .pe-button__wash":[e.mixin.defaultTransition("all",t.animation_duration)]})]},padding_h:function(o,t){return[e.sel(o,{" .pe-button__content":{paddingLeft:t.padding_h+"px",paddingRight:t.padding_h+"px"," .pe-button__dropdown":{minWidth:"calc(36px - 2 * ".concat(t.padding_h,"px)")},".pe-button--dropdown":{" .pe-button__label + .pe-button__dropdown":{marginRight:"calc(7px - ".concat(t.padding_h,"px)")}}}})]},padding_h_extra_wide:function(o,t){return[e.sel(o,{".pe-button--extra-wide .pe-button__content":{padding:"0 "+t.padding_h_extra_wide+"px"}})]},label_padding_v:function(o,t){return[e.sel(o,{" .pe-button__label":{padding:t.label_padding_v+"px 0"},".pe-button--border":{" .pe-button__label":{padding:t.label_padding_v-1+"px 0"}}}),void 0!==t.line_height&&k(o,t),void 0!==t.outer_padding_v&&x(o,t),void 0!==t.line_height&&void 0!==t.outer_padding_v&&void 0!==t.label_padding_v&&S(o,t)]},font_weight:function(o,t){return[e.sel(o,{" .pe-button__label":{fontWeight:t.font_weight}})]},text_transform:function(o,t){return[e.sel(o,{" .pe-button__label":{textTransform:t.text_transform}})]},font_size:function(o,t){return[e.sel(o,{" .pe-button__label, .pe-button__dropdown":{fontSize:t.font_size+"px"}})]},line_height:function(o,t){return[e.sel(o,{" .pe-button__label, .pe-button__dropdown":{lineHeight:t.line_height}}),void 0!==t.label_padding_v&&k(o,t),void 0!==t.outer_padding_v&&void 0!==t.label_padding_v&&S(o,t)]},dropdown_icon_size:function(o,t){return[e.sel(o,{".pe-button--dropdown":{" .pe-button__dropdown":{width:t.dropdown_icon_size+"px"}," .pe-svg":{width:t.dropdown_icon_size+"px",height:t.dropdown_icon_size+"px",marginTop:-t.dropdown_icon_size/2+"px"}}})]},outer_padding_v:function(o,t){return[e.sel(o,{padding:t.outer_padding_v+"px 0",".pe-button--high-label":{padding:0}}),void 0!==t.label_padding_v&&x(o,t),void 0!==t.line_height&&void 0!==t.outer_padding_v&&void 0!==t.label_padding_v&&S(o,t)]},separator_width:function(o,t){return[e.sel(o,{".pe-button--separator-start":{" .pe-button__content":{borderWidth:t.separator_width+"px"}}})]},letter_spacing:function(o,t){return[e.sel(o,{letterSpacing:t.letter_spacing+"px"})]},border:function(o,e){return e.border&&C(o)},contained:function(o,t){return t.contained&&function(o){return e.sel(o,{})}(o)}},t.sharedVarFns),z=e.createLayout({varFns:T}),O=r.vars.unit_touch_height,j=a({},{border:!1,contained:!1},t.sharedVars),B={border_width:1,color_light_border:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_medium),color_light_disabled_border:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_dark_border:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_medium),color_dark_disabled_border:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled)},Q=i({general_styles:!0,animation_duration:r.vars.animation_duration,border_radius:r.vars.unit_item_border_radius,dropdown_icon_size:24,font_size:14,font_weight:500,label_padding_v:11,letter_spacing:.75,line_height:1,min_width:8*r.vars.grid_unit_component,outer_padding_v:(O-36)/2,padding_h:2*r.vars.grid_unit,padding_h_extra_wide:6*r.vars.grid_unit,row_margin_h:r.vars.grid_unit,separator_width:1,text_transform:"uppercase",color_light_background:"transparent",color_light_text:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_wash_background:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_light_active_background:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_background_active),color_light_disabled_background:"transparent",color_light_disabled_text:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_light_icon:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_separator:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_dark_background:"transparent",color_dark_text:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_wash_background:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_background_hover),color_dark_active_background:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_background_active),color_dark_disabled_background:"transparent",color_dark_disabled_text:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled),color_dark_icon:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_separator:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_light)},B,j),W=i({border:!1,contained:!0},t.sharedVars),V=i({general_styles:!0,padding_h:4*r.vars.grid_unit,color_light_background:"#fff",color_light_disabled_background:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_background_disabled),color_dark_active_background:e.rgba(r.vars.color_primary_dark),color_dark_background:e.rgba(r.vars.color_primary),color_dark_disabled_background:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_background_disabled)},W),F=[z,f],H=[l],P=".".concat(n.super),E=".".concat(n.component);e.styler.addStyle({selectors:[P],fns:H,vars:Q}),e.styler.addStyle({selectors:[E],fns:F,vars:Q});var q=e.createColor({superColor:f}),A=e.createLayout({superLayout:z}),D=[A,q],I=[n.component,n.contained].join(" "),G=".".concat(I.split(/\s/).join(".")),M=(e.styler.createAddStyle(G,D,V),e.styler.createGetStyle(G,D,V));e.styler.addStyle({selectors:[G],fns:D,vars:V});var J=Q,K=f,N=z,U=V,X=q,Y=A;o.addStyle=function(o,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.mediaQuery,d=void 0===n?"":n,a=r.scope;!function(o,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.mediaQuery,d=void 0===n?"":n,a=r.scope,i=void 0===a?"":a,_=t&&t.contained?V:Q;o&&e.styler.addStyle({selectors:[P,o],fns:H,vars:_,customVars:t,mediaQuery:d,scope:i}),o&&e.styler.addStyle({selectors:[E,o],fns:F,vars:_,customVars:t,mediaQuery:d,scope:i})}(o,t,{mediaQuery:d,scope:void 0===a?"":a})},o.getStyle=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.mediaQuery,d=void 0===n?"":n,a=r.scope,i=void 0===a?"":a;return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.mediaQuery,d=void 0===n?"":n,a=r.scope,i=void 0===a?"":a,_=t&&t.contained?V:Q;return e.styler.getStyle({selectors:[P,o],fns:H,vars:_,customVars:t,mediaQuery:d,scope:i}).concat(e.styler.getStyle({selectors:[E,o],fns:F,vars:_,customVars:t,mediaQuery:d,scope:i}))}(o,t,{mediaQuery:d,scope:i}).concat(M(o,t,{mediaQuery:d,scope:i}))},o.containedButtonVars=U,o.containedButtonColor=X,o.containedButtonLayout=Y,o.textButtonColor=K,o.textButtonLayout=N,o.textButtonVars=J,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-button.js.map
