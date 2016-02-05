"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _spinner=require("polythene/spinner/spinner");var _spinner2=_interopRequireDefault(_spinner);require("polythene/spinner/theme/determinate/theme");var _config=require("polythene/spinner/theme/determinate/config");var _config2=_interopRequireDefault(_config);var _easing=require("polythene/common/easing");var _easing2=_interopRequireDefault(_easing);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var CSS_CLASSES={block:"pe-spinner-determinate",animation:"pe-spinner-determinate__animation",circle:"pe-spinner-determinate__circle",circleRight:"pe-spinner-determinate__circle--right",circleLeft:"pe-spinner-determinate__circle--left"};var sizeFromType=function sizeFromType(){var type=arguments.length<=0||arguments[0]===undefined?"regular":arguments[0];return _config2.default["size_"+type]};var percentageValue=function percentageValue(min,max,percentage){return min+(max-min)*percentage};var rotateCircle=function rotateCircle(el,min,max,percentage){var style=el.style;style["transform"]=style["-webkit-transform"]=style["-moz-transform"]=style["-ms-transform"]=style["-o-transform"]="rotate("+percentageValue(min,max,percentage)+"deg)"};var animate=function animate(ctrlEl,size,percentage){var animationEl=ctrlEl.querySelector("."+CSS_CLASSES.animation);var animationElStyle=animationEl.style;if(percentage<.5){animationElStyle.clip="rect(0px, "+size+"px, "+size+"px, "+size/2+"px)"}else{animationElStyle.clip="rect(auto, auto, auto, auto)"}var leftCircle=ctrlEl.querySelector("."+CSS_CLASSES.circleLeft);var rightCircle=ctrlEl.querySelector("."+CSS_CLASSES.circleRight);leftCircle.style.clip=rightCircle.style.clip="rect(0px, "+size/2+"px, "+size+"px, "+"0px)";rotateCircle(rightCircle,0,180,Math.min(1,percentage*2));rotateCircle(leftCircle,0,360,percentage)};var handlePercentage=function handlePercentage(percentage,ctrl,size){var opts=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];if(!ctrl.el){return}ctrl._previousPercentage=ctrl._previousPercentage||0;if(opts.animated&&ctrl._previousPercentage!==percentage){(function(){var STEP_DURATION=opts.updateDuration*1e3;var start=null;var step=function step(timestamp){if(!start)start=timestamp;var progress=timestamp-start;var stepPercentage=1/STEP_DURATION*progress;var newPercentage=ctrl._previousPercentage+stepPercentage*(percentage-ctrl._previousPercentage);animate(ctrl.el,size,_easing2.default.easeInOutQuad(newPercentage));ctrl._previousPercentage=newPercentage;if(start&&progress<STEP_DURATION){window.requestAnimationFrame(step)}else{start=null}};window.requestAnimationFrame(step)})()}else{animate(ctrl.el,size,percentage);ctrl._previousPercentage=percentage}};var component={view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var size=sizeFromType(opts.type);opts.content=(0,_mithril2.default)("div",{"class":CSS_CLASSES.animation},[(0,_mithril2.default)("div",{"class":[CSS_CLASSES.circle,CSS_CLASSES.circleLeft].join(" ")}),(0,_mithril2.default)("div",{"class":[CSS_CLASSES.circle,CSS_CLASSES.circleRight].join(" ")})]);opts.class=[CSS_CLASSES.block,opts.class].join(" ");opts.getPercentage=function(percentage,ctrl){return handlePercentage(percentage,ctrl,size,opts)};return _mithril2.default.component(_spinner2.default,opts)}};exports.default=component;module.exports=exports["default"];