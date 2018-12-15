(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

  var classes = {
    component: "pe-button-group"
  };

  const createProps = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    return Object.assign({}, {
      className: [classes.component, attrs.className || attrs[k.class]].join(" ")
    });
  };
  const createContent = vnode => vnode.children;

  var buttonGroup = /*#__PURE__*/Object.freeze({
    createProps: createProps,
    createContent: createContent
  });

  exports.coreButtonGroup = buttonGroup;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-button-group.js.map
