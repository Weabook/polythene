(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core'), require('polythene-core-drawer'), require('polythene-mithril-dialog')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core', 'polythene-core-drawer', 'polythene-mithril-dialog'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core'],global['polythene-core-drawer'],global['polythene-mithril-dialog']));
}(this, (function (exports,polytheneMithrilBase,polytheneCore,polytheneCoreDrawer,polytheneMithrilDialog) { 'use strict';

  var classes = {
    component: "pe-dialog pe-drawer",
    // states
    cover: "pe-drawer--cover",
    push: "pe-drawer--push",
    mini: "pe-drawer--mini",
    permanent: "pe-drawer--permanent",
    border: "pe-drawer--border",
    floating: "pe-drawer--floating",
    fixed: "pe-drawer--fixed",
    anchorEnd: "pe-drawer--anchor-end"
  };

  const DrawerInstance = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreDrawer.coreDrawer, {
    component: polytheneMithrilDialog.DialogInstance
  }));
  const DrawerToggle = polytheneMithrilBase.StateComponent(polytheneCore.Conditional);
  DrawerToggle.displayName = "DrawerToggle";
  const Drawer = {
    view: vnode => polytheneMithrilBase.renderer(DrawerToggle, Object.assign({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: vnode.attrs.permanent || vnode.attrs.mini // passed to Conditional

    }))
  };
  Drawer.displayName = "Drawer";

  exports.Drawer = Drawer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-drawer.js.map
