!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-core-slider"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-slider","polythene-theme"],r):r(e.polythene={},e["polythene-core-css"],e["polythene-core-slider"],e["polythene-theme"])}(this,function(e,r,t,i){"use strict";function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l=function(e,r,t){var i=t?e-2*r:e;return{borderWidth:r+"px",width:i+"px",height:i+"px",left:e-i+"px",top:e-i+"px"}},a=function(e,t){var n=Math.max(t.thumb_size,2*t.thumb_border_width),a=(t.active_thumb_scale-1)*n/2,s=n/2,_=Math.max(1,t.thumb_border_width/t.active_thumb_scale),c=t.thumb_touch_size,p=s-1;return[o({},e,[r.flex.layoutHorizontal,r.flex.flexGrow(1),{userSelect:"none",height:t.height+"px",marginTop:(t.height-t.track_height)/2+"px ",alignItems:"center"," > .pe-icon":[r.flex.layoutCenter,{height:t.height+"px"}]," .pe-slider__track":[r.flex.layoutHorizontal,r.flex.flexGrow(1),r.mixin.defaultTransition("transform",t.animation_duration),{userSelect:"none",position:"relative",height:t.track_height+"px",margin:"0 "+t.side_spacing+"px",outline:0}]," div + .pe-slider__track":{margin:"0 "+t.horizontal_layout_side_spacing+"px"}," .pe-slider__control":[r.flex.selfCenter,r.mixin.defaultTransition("transform, background",".200s"),{transform:"scale(1)",userSelect:"none",width:n+"px",height:n+"px",lineHeight:0,borderRadius:"50%",outline:0,zIndex:1,position:"relative",":before":[r.mixin.defaultTransition("background-color",t.animation_duration),{content:'""',position:"absolute",borderRadius:"50%",left:-c/2+n/2+"px",top:-c/2+n/2+"px",width:c+"px",height:c+"px"}],":after":[r.mixin.defaultTransition("border",t.animation_duration),l(n,t.thumb_border_width,!1),{content:'""',position:"absolute",borderRadius:"50%",borderStyle:"solid"}]}]," .pe-slider__thumb":[r.mixin.defaultTransition("opacity",t.animation_duration),r.mixin.fit(),{"&, .pe-icon":{width:"inherit",height:"inherit"}}]," .pe-slider__label":{height:t.height+"px",lineHeight:t.height+"px",minWidth:i.vars.unit_icon_size+"px",textAlign:"center",fontSize:"16px",fontWeight:i.vars.font_weight_medium}," .pe-slider__track-part":[r.flex.flex(),{userSelect:"none",height:t.bar_height+"px",margin:(t.track_height-t.bar_height)/2+"px 0",overflow:"hidden"}]," .pe-slider__track-value, .pe-slider__track-rest":r.flex.layoutHorizontal," .pe-slider__track-bar":[r.flex.flex(),{position:"relative",overflow:"hidden"}]," .pe-slider__track-bar-value":[r.flex.flex(),r.mixin.defaultTransition("transform, background-color",t.animation_duration),{height:t.bar_height+"px"}]," .pe-slider__track-value .pe-slider__track-bar":{marginLeft:s+"px"}," .pe-slider__track-rest .pe-slider__track-bar":{marginRight:s+"px"}," .pe-slider__ticks":[r.flex.layoutJustified,{userSelect:"none",position:"absolute",width:"calc(100% - "+2*p+"px)",height:t.bar_height+"px",left:0,top:t.height/2-1+"px",margin:"0 "+p+"px",pointerEvents:"none"}]," .pe-slider__ticks-tick":{width:t.step_width+"px",height:t.bar_height+"px"}," .pe-slider__pin":[r.mixin.defaultTransition("transform",".11s"),{transform:"translateZ(0) scale(0) translate(0, 0)",transformOrigin:"bottom",position:"absolute",zIndex:1,width:t.pin_width+"px",height:0,left:0,top:0,margin:"0 "+p+"px 0 "+(p-t.pin_width/2+1)+"px",pointerEvents:"none","::before":{transform:"rotate(-45deg)",content:'""',position:"absolute",top:0,left:0,width:t.pin_width+"px",height:t.pin_width+"px",borderRadius:"50% 50% 50% 0",backgroundColor:"inherit"},"::after":{content:"attr(value)",position:"absolute",top:0,left:0,width:t.pin_width+"px",height:t.pin_height+"px",textAlign:"center",color:"#fff",fontSize:t.pin_font_size+"px",lineHeight:t.pin_width+"px"}}],".pe-slider--active:not(.pe-slider--ticks)":{" .pe-slider__control":{transform:"scale("+t.active_thumb_scale+")",borderWidth:_+"px"}," .pe-slider__track-value .pe-slider__track-bar-value":{transform:"translateX("+-a+"px)"}," .pe-slider__track-rest .pe-slider__track-bar-value":{transform:"translateX("+a+"px)"}},".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus":{" .pe-slider__pin":{transform:"translateZ(0) scale(1) translate(0, -24px)"}," .pe-slider__control":{transform:"scale("+t.active_pin_thumb_scale+")"}},":not(.pe-slider--disabled)":{" .pe-slider__control":{cursor:"pointer"},".pe-slider--track":{" .pe-slider__track":{cursor:"pointer"}}},".pe-slider--disabled":{" .pe-slider__control":{transform:"scale("+t.disabled_thumb_scale+")",borderWidth:0}," .pe-slider__control:after":[l(n,1/t.disabled_thumb_scale*t.thumb_border_width,!0)]}}])]},s=function(e,r,t,i){return[n({},e.map(function(e){return e+r}).join(","),{color:t["color_"+i+"_thumb_on"]," .pe-slider__control":{"&:after":{borderColor:"transparent"}}," .pe-slider__track-bar-value":{background:t["color_"+i+"_track_inactive"]}," .pe-slider__ticks-tick":{background:t["color_"+i+"_tick"]}," .pe-slider__pin":{backgroundColor:"currentcolor"}," .pe-icon":{color:t["color_"+i+"_disabled_icon"]}," .pe-slider__label":{color:t["color_"+i+"_disabled_label"]},"&.pe-slider--active":{" .pe-slider__track-bar-value":{background:t["color_"+i+"_track_active"]}},".pe-slider--disabled":{" .pe-slider__control":{background:t["color_"+i+"_thumb_inactive"]}},"&:not(.pe-slider--disabled)":{" .pe-slider__control":{backgroundColor:t["color_"+i+"_thumb_background"]||"currentcolor","&:before":{opacity:t["color_"+i+"_thumb_off_focus_opacity"]}}," .pe-slider__track-value .pe-slider__track-bar-value":{background:"currentcolor"},"&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,      &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before":{backgroundColor:t["color_"+i+"_thumb_off_focus"]},"&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,      &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before":{backgroundColor:"currentcolor",opacity:t["color_"+i+"_thumb_on_focus_opacity"]}," .pe-icon":{color:t["color_"+i+"_icon"]}," .pe-slider__label":{color:t["color_"+i+"_label"]}},"&.pe-slider--min:not(.pe-slider--disabled)":{" .pe-slider__control":{backgroundColor:"transparent"}," .pe-slider__thumb":{opacity:0}," .pe-slider__control:after":{borderColor:t["color_"+i+"_track_inactive"]},"&.pe-slider--active .pe-slider__control:after":{borderColor:t["color_"+i+"_track_active"]},"&.pe-slider--ticks":{" .pe-slider__control":{backgroundColor:t["color_"+i+"_tick"]}," .pe-slider__control:after":{borderColor:"transparent"}}," .pe-slider__pin":{backgroundColor:t["color_"+i+"_track_inactive"]}}})]},_=function(e,r){return[s([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),s(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},p=[a,_],d="."+t.classes.component,h=function(e,i){return r.styler.generateStyles([e,d],c({},t.vars,i),p)},u=function(e,i){return e?r.styler.createStyleSheets([e,d],c({},t.vars,i),p):r.styler.createStyleSheets([d],t.vars,p)};r.styler.generateStyles([d],t.vars,p),e.addStyle=h,e.getStyle=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-slider.js.map