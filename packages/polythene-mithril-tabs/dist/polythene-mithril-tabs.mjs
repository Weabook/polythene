import { StateComponent, ViewComponent } from 'polythene-mithril-base';
import { coreScrollButton, coreTab, coreTabs } from 'polythene-core-tabs';
import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';
import { IconButton } from 'polythene-mithril-icon-button';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tab = ViewComponent(_extends$1({}, coreTab, {
  createProps: function createProps(vnode, args) {
    return coreTab.createProps(vnode, _extends$1(args, { Icon: Icon }));
  },
  component: Button
}));

Tab.displayName = "Tab";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ScrollButton = ViewComponent(_extends$2({}, coreScrollButton, {
  component: IconButton
}));

ScrollButton.displayName = "ScrollButton";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tabs = StateComponent(_extends({}, coreTabs, {
  createContent: function createContent(vnode, args) {
    return coreTabs.createContent(vnode, _extends(args, { Tab: Tab, ScrollButton: ScrollButton }));
  }
}));

Tabs.theme = coreTabs.theme;
Tabs.displayName = "Tabs";

export { Tabs };
