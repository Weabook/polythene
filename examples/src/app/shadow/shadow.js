"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneShadowShadow=require("polythene/shadow/shadow");var _polytheneShadowShadow2=_interopRequireDefault(_polytheneShadowShadow);require("./shadow.css!");var titleBlock={view:function view(ctrl,args){return(0,_mithril2["default"])(".p-block",[(0,_mithril2["default"])(".p-block-header",args.title),args.content])}};var interactiveShadow={controller:function controller(args){var STEPS=5;return{z:_mithril2["default"].prop(STEPS+args.initZ),getZ:function getZ(){return Math.abs(this.z()%(2*STEPS)-STEPS)}}},view:function view(ctrl,args){return(0,_mithril2["default"])("div.animated.layout.horizontal",{"class":args["class"],onclick:function onclick(){var z=ctrl.z();ctrl.z(++z)}},[(0,_mithril2["default"])("div.self-center","z = "+ctrl.getZ()),_mithril2["default"].component(_polytheneShadowShadow2["default"],{z:ctrl.getZ(),animated:true,refresh:true})])}};var indices=[0,1,2,3,4,5];var tapItems=[{id:1,"class":"shadow-card",initZ:1},{id:2,"class":"shadow-fab",initZ:3}];var _module={};_module.view=function(){return(0,_mithril2["default"])(".module-shadow",[_mithril2["default"].component(titleBlock,{title:"Shadows",content:(0,_mithril2["default"])("div.layout.horizontal.wrap",[indices.map(function(z){return(0,_mithril2["default"])("div.layout.horizontal",{"class":"shadow-card"},[(0,_mithril2["default"])("div.self-center","z = "+z),_mithril2["default"].component(_polytheneShadowShadow2["default"],{z:z})])})])}),_mithril2["default"].component(titleBlock,{title:"Interactive and animated",content:(0,_mithril2["default"])("div.layout.horizontal",[tapItems.map(function(item){return _mithril2["default"].component(interactiveShadow,{id:item.id,"class":item["class"],initZ:item.initZ})})])})])};exports["default"]=_module;module.exports=exports["default"];