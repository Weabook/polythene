import { Drawer, Icon, List, ListTile, RaisedButton, keys, renderer } from 'polythene-mithril';
import { DrawerCSS, ListTileCSS } from 'polythene-css';
import { vars } from 'polythene-theme';
import { Drawer as Drawer$1, Icon as Icon$1, List as List$1, ListTile as ListTile$1, RaisedButton as RaisedButton$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream$2 = createCommonjsModule(function (module) {
	var guid = 0,
	    HALT = {};
	function createStream() {
		function stream() {
			if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);
			return stream._state.value;
		}
		initStream(stream);

		if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);

		return stream;
	}
	function initStream(stream) {
		stream.constructor = createStream;
		stream._state = { id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined };
		stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
		stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;

		Object.defineProperties(stream, {
			end: { get: function get() {
					if (!stream._state.endStream) {
						var endStream = createStream();
						endStream.map(function (value) {
							if (value === true) unregisterStream(stream), unregisterStream(endStream);
							return value;
						});
						stream._state.endStream = endStream;
					}
					return stream._state.endStream;
				} }
		});
	}
	function updateStream(stream, value) {
		updateState(stream, value);
		for (var id in stream._state.deps) {
			updateDependency(stream._state.deps[id], false);
		}finalize(stream);
	}
	function updateState(stream, value) {
		stream._state.value = value;
		stream._state.changed = true;
		if (stream._state.state !== 2) stream._state.state = 1;
	}
	function updateDependency(stream, mustSync) {
		var state = stream._state,
		    parents = state.parents;
		if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
			var value = stream._state.derive();
			if (value === HALT) return false;
			updateState(stream, value);
		}
	}
	function finalize(stream) {
		stream._state.changed = false;
		for (var id in stream._state.deps) {
			stream._state.deps[id]._state.changed = false;
		}
	}

	function combine(fn, streams) {
		if (!streams.every(valid)) throw new Error("Ensure that each item passed to m.prop.combine/m.prop.merge is a stream");
		return initDependency(createStream(), streams, function () {
			return fn.apply(this, streams.concat([streams.filter(changed)]));
		});
	}

	function initDependency(dep, streams, derive) {
		var state = dep._state;
		state.derive = derive;
		state.parents = streams.filter(notEnded);

		registerDependency(dep, state.parents);
		updateDependency(dep, true);

		return dep;
	}
	function registerDependency(stream, parents) {
		for (var i = 0; i < parents.length; i++) {
			parents[i]._state.deps[stream._state.id] = stream;
			registerDependency(stream, parents[i]._state.parents);
		}
	}
	function unregisterStream(stream) {
		for (var i = 0; i < stream._state.parents.length; i++) {
			var parent = stream._state.parents[i];
			delete parent._state.deps[stream._state.id];
		}
		for (var id in stream._state.deps) {
			var dependent = stream._state.deps[id];
			var index = dependent._state.parents.indexOf(stream);
			if (index > -1) dependent._state.parents.splice(index, 1);
		}
		stream._state.state = 2; //ended
		stream._state.deps = {};
	}

	function map(fn) {
		return combine(function (stream) {
			return fn(stream());
		}, [this]);
	}
	function ap(stream) {
		return combine(function (s1, s2) {
			return s1()(s2());
		}, [stream, this]);
	}
	function valueOf() {
		return this._state.value;
	}
	function toJSON() {
		return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value;
	}

	function valid(stream) {
		return stream._state;
	}
	function active(stream) {
		return stream._state.state === 1;
	}
	function changed(stream) {
		return stream._state.changed;
	}
	function notEnded(stream) {
		return stream._state.state !== 2;
	}

	function merge(streams) {
		return combine(function () {
			return streams.map(function (s) {
				return s();
			});
		}, streams);
	}
	createStream["fantasy-land/of"] = createStream;
	createStream.merge = merge;
	createStream.combine = combine;
	createStream.HALT = HALT;

	module["exports"] = createStream;
});

var stream = stream$2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. ";

var opener = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Drawer$$1 = _ref.Drawer,
      RaisedButton$$1 = _ref.RaisedButton,
      createContent = _ref.createContent,
      drawerOpts = _ref.drawerOpts;
  return {
    oninit: function oninit(vnode) {
      var show = stream(false);
      var hide = stream(false);
      _extends(vnode.state, {
        show: show,
        hide: hide,
        redrawOnUpdate: stream.merge([show, hide])
      });
    },
    view: function view(vnode) {
      var state = vnode.state;
      var show = state.show();
      var hide = state.hide();
      var onClick = function onClick() {
        return state.hide(true);
      };
      var content = createContent({ isLong: true, onClick: onClick });
      return h("div", null, [h(RaisedButton$$1, {
        key: "button", // for React
        label: "Toggle drawer",
        events: _defineProperty({}, k.onclick, function () {
          return show ? state.hide(true) : state.show(true);
        })
      }), h("div", {
        key: "content", // for React
        style: {
          position: "relative",
          marginTop: "24px",
          overflow: "hidden"
        }
      }, h("div", {
        style: {
          display: "flex",
          height: "350px"
        }
      }, [h("nav", {
        key: "drawer" // for React
      }, h(Drawer$$1, _extends({}, drawerOpts, {
        content: content,
        show: show,
        hide: hide,
        didShow: function didShow() {
          return state.show(true), state.hide(false);
        },
        didHide: function didHide() {
          return state.show(false), state.hide(false);
        }
      }))), h("main", {
        key: "main", // for React
        style: {
          background: "#ffeb3b",
          padding: "1rem",
          flexShrink: 0,
          flexGrow: 0,
          width: "100%"
        }
      }, ipsum + ipsum)]))]);
    }
  };
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
};

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

ListTileCSS.addStyle(".tests-drawer-navigation-list", {
  font_size_title: 14,
  font_weight_title: 500,
  color_light_title: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_hover_text: "#e01d5f",
  color_light_hover_front: "#e01d5f"
});

var navigationList = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon$$1 = _ref.Icon,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      isLong = _ref.isLong,
      onClick = _ref.onClick;


  var tile = function tile(_ref2) {
    var title = _ref2.title,
        icon = _ref2.icon,
        order = _ref2.order;
    return h(ListTile$$1, {
      title: title,
      key: order,
      className: "tests-drawer-navigation-list",
      front: h(Icon$$1, {
        svg: { content: h.trust(icon) }
      }),
      hoverable: true,
      events: _defineProperty$1({}, k.onclick, onClick)
    });
  };

  var setList = isLong ? [1, 2, 3] : [1, 2];

  return h(List$$1, {
    compact: true,
    hoverable: true,
    tiles: [].concat.apply([], setList.map(function (num, index, arr) {
      return [{
        order: arr.length,
        title: "Inbox",
        icon: icons.inbox
      }, {
        order: arr.length,
        title: "Starred",
        icon: icons.star
      }, {
        order: arr.length,
        title: "Sent mail",
        icon: icons.send
      }, {
        order: arr.length,
        title: "Drafts",
        icon: icons.drafts
      }];
    })).map(tile)
  });
});

var permanent = (function (_ref) {
  var h = _ref.renderer,
      Drawer$$1 = _ref.Drawer,
      createContent = _ref.createContent;

  var content = createContent({ isLong: false });
  return {
    view: function view() {
      return h(Drawer$$1, {
        size: 5,
        permanent: true,
        content: content
      });
    }
  };
});

var genericTests = (function (_ref) {
  var keys$$1 = _ref.keys,
      renderer$$1 = _ref.renderer,
      Drawer$$1 = _ref.Drawer,
      RaisedButton$$1 = _ref.RaisedButton,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      Icon$$1 = _ref.Icon;


  var createContent = function createContent(_ref2) {
    var isLong = _ref2.isLong,
        onClick = _ref2.onClick;
    return navigationList({ renderer: renderer$$1, keys: keys$$1, Icon: Icon$$1, List: List$$1, ListTile: ListTile$$1, isLong: isLong, onClick: onClick });
  };

  DrawerCSS.addStyle(".drawer-tests-small", {
    content_max_width: 220
  });

  return [{
    name: "Permanent, floating",
    component: permanent({ renderer: renderer$$1, Drawer: Drawer$$1, createContent: createContent })
  }, {
    name: "Sliding drawer (slide over from left, with backdrop, can be closed with ESCAPE)",
    interactive: true,
    exclude: true,
    component: opener({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, RaisedButton: RaisedButton$$1, createContent: createContent, drawerOpts: {
        backdrop: true
      } })
  }, {
    name: "Sliding drawer (modal, cannot be closed with ESCAPE)",
    interactive: true,
    exclude: true,
    component: opener({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, RaisedButton: RaisedButton$$1, createContent: createContent, drawerOpts: {
        backdrop: true,
        modal: true
      } })
  }, {
    name: "Pushing drawer (push from left, without shadow, themed small width)",
    interactive: true,
    exclude: true,
    component: opener({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, RaisedButton: RaisedButton$$1, createContent: createContent, drawerOpts: {
        push: true,
        z: 0,
        className: "drawer-tests-small"
      } })
  }];
});

var mithrilTests = function mithrilTests() {

  return [];
};

var testsMithril = [].concat(genericTests({ renderer: renderer, keys: keys, Drawer: Drawer, RaisedButton: RaisedButton, List: List, ListTile: ListTile, Icon: Icon })).concat(mithrilTests({ renderer: renderer, keys: keys, Drawer: Drawer, RaisedButton: RaisedButton, List: List, ListTile: ListTile, Icon: Icon }));

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(_extends$1({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var q = "function" === typeof Symbol && Symbol["for"]; var r = q ? Symbol["for"]("react.element") : 60103; var t = q ? Symbol["for"]("react.call") : 60104; var u = q ? Symbol["for"]("react.return") : 60105; var v = q ? Symbol["for"]("react.portal") : 60106; var w = q ? Symbol["for"]("react.fragment") : 60107; var x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  for (var b = arguments.length - 1, e = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) {
    e += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);
  }b = Error(e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}
var z = { isMounted: function isMounted() {
    return !1;
  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} };function A(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}A.prototype.isReactComponent = {};A.prototype.setState = function (a, b) {
  "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && "function" !== typeof a && null != a ? y("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
};A.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function B(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}function C() {}C.prototype = A.prototype;var D = B.prototype = new C();D.constructor = B;objectAssign(D, A.prototype);D.isPureReactComponent = !0;function E(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}var F = E.prototype = new C();F.constructor = E;objectAssign(F, A.prototype);F.unstable_isAsyncReactComponent = !0;F.render = function () {
  return this.props.children;
};var G = { current: null }; var H = Object.prototype.hasOwnProperty; var I = { key: !0, ref: !0, __self: !0, __source: !0 };
function J(a, b, e) {
  var c,
      d = {},
      g = null,
      k = null;if (null != b) for (c in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    H.call(b, c) && !I.hasOwnProperty(c) && (d[c] = b[c]);
  }var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
    for (var h = Array(f), l = 0; l < f; l++) {
      h[l] = arguments[l + 2];
    }d.children = h;
  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }return { $$typeof: r, type: a, key: g, ref: k, props: d, _owner: G.current };
}function K(a) {
  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && a.$$typeof === r;
}
function escape(a) {
  var b = { "\x3d": "\x3d0", ":": "\x3d2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}var L = /\/+/g;
var M = [];function N(a, b, e, c) {
  if (M.length) {
    var d = M.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
  }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
}function O(a) {
  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > M.length && M.push(a);
}
function P(a, b, e, c) {
  var d = typeof a === 'undefined' ? 'undefined' : _typeof(a);if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
      g = !0;break;case "object":
      switch (a.$$typeof) {case r:case t:case u:case v:
          g = !0;}}if (g) return e(c, a, "" === b ? "." + Q(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];var f = b + Q(d, k);g += P(d, f, e, c);
  } else if (null === a || "undefined" === typeof a ? f = null : (f = x && a[x] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + Q(d, k++), g += P(d, f, e, c);
  } else "object" === d && (e = "" + a, y("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
}function Q(a, b) {
  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}function R(a, b) {
  a.func.call(a.context, b, a.count++);
}
function S(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? T(a, c, e, emptyFunction_1.thatReturnsArgument) : null != a && (K(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(L, "$\x26/") + "/") + e, a = { $$typeof: r, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
}function T(a, b, e, c, d) {
  var g = "";null != e && (g = ("" + e).replace(L, "$\x26/") + "/");b = N(b, g, c, d);null == a || P(a, "", S, b);O(b);
}
var U = { Children: { map: function map(a, b, e) {
      if (null == a) return a;var c = [];T(a, c, null, b, e);return c;
    }, forEach: function forEach(a, b, e) {
      if (null == a) return a;b = N(null, null, b, e);null == a || P(a, "", R, b);O(b);
    }, count: function count(a) {
      return null == a ? 0 : P(a, "", emptyFunction_1.thatReturnsNull, null);
    }, toArray: function toArray(a) {
      var b = [];T(a, b, null, emptyFunction_1.thatReturnsArgument);return b;
    }, only: function only(a) {
      K(a) ? void 0 : y("143");return a;
    } }, Component: A, PureComponent: B, unstable_AsyncComponent: E, Fragment: w, createElement: J, cloneElement: function cloneElement(a, b, e) {
    var c = objectAssign({}, a.props),
        d = a.key,
        g = a.ref,
        k = a._owner;if (null != b) {
      void 0 !== b.ref && (g = b.ref, k = G.current);void 0 !== b.key && (d = "" + b.key);if (a.type && a.type.defaultProps) var f = a.type.defaultProps;for (h in b) {
        H.call(b, h) && !I.hasOwnProperty(h) && (c[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
      }
    }var h = arguments.length - 2;if (1 === h) c.children = e;else if (1 < h) {
      f = Array(h);for (var l = 0; l < h; l++) {
        f[l] = arguments[l + 2];
      }c.children = f;
    }return { $$typeof: r, type: a.type, key: d, ref: g, props: c, _owner: k };
  }, createFactory: function createFactory(a) {
    var b = J.bind(null, a);b.type = a;return b;
  },
  isValidElement: K, version: "16.2.0", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: G, assign: objectAssign } };
var V = Object.freeze({ default: U });
var W = V && U || V;var react_production_min = W["default"] ? W["default"] : W;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof$2(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof$2(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var react_development = createCommonjsModule(function (module) {
  /** @license React v16.2.0
   * react.development.js
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== "production") {
    (function () {
      var _assign = objectAssign;
      var emptyObject = emptyObject_1;
      var invariant = invariant_1;
      var warning = warning_1;
      var emptyFunction = emptyFunction_1;
      var checkPropTypes = checkPropTypes_1;

      // TODO: this is special because it gets imported during build.

      var ReactVersion = '16.2.0';

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
      var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
      var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';

      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable === 'undefined') {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }
        return null;
      }

      /**
       * WARNING: DO NOT manually require this module.
       * This is a replacement for `invariant(...)` used by the error code system
       * and will _only_ be required by the corresponding babel pass.
       * It always throws.
       */

      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var lowPriorityWarning = function lowPriorityWarning() {};

      {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          if (typeof console !== 'undefined') {
            console.warn(message);
          }
          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarning = function lowPriorityWarning(condition, format) {
          if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
          }
          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }

      var lowPriorityWarning$1 = lowPriorityWarning;

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var constructor = publicInstance.constructor;
          var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
          var warningKey = componentName + '.' + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }
          warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }

      /**
       * This is the abstract API for an update queue.
       */
      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function isMounted(publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        }
      };

      /**
       * Base class helpers for the updating state of a component.
       */
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};

      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */
      Component.prototype.setState = function (partialState, callback) {
        !((typeof partialState === 'undefined' ? 'undefined' : _typeof$1(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */
      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };

      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */
      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
        };
        var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function get() {
              lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
              return undefined;
            }
          });
        };
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      /**
       * Base class helpers for the updating state of a component.
       */
      function PureComponent(props, context, updater) {
        // Duplicated from Component.
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      function ComponentDummy() {}
      ComponentDummy.prototype = Component.prototype;
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent;
      // Avoid an extra prototype jump for these methods.
      _assign(pureComponentPrototype, Component.prototype);
      pureComponentPrototype.isPureReactComponent = true;

      function AsyncComponent(props, context, updater) {
        // Duplicated from Component.
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
      asyncComponentPrototype.constructor = AsyncComponent;
      // Avoid an extra prototype jump for these methods.
      _assign(asyncComponentPrototype, Component.prototype);
      asyncComponentPrototype.unstable_isAsyncReactComponent = true;
      asyncComponentPrototype.render = function () {
        return this.props.children;
      };

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };

      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function warnAboutAccessingKey() {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function warnAboutAccessingRef() {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }

      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, no instanceof check
       * will work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} key
       * @param {string|object} ref
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @param {*} owner
       * @param {*} props
       * @internal
       */
      var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allow us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,

          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,

          // Record the component responsible for creating this element.
          _owner: owner
        };

        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {};

          // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.
          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          // self and source are DEV only properties.
          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.
          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }

        return element;
      };

      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */
      function createElement(type, config, children) {
        var propName;

        // Reserved names are extracted
        var props = {};

        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source;
          // Remaining properties are added to a new props object
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        }

        // Resolve default props
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        {
          if (key || ref) {
            if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }

      /**
       * Return a function that produces ReactElements of a given type.
       * See https://reactjs.org/docs/react-api.html#createfactory
       */

      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

        return newElement;
      }

      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */
      function cloneElement(element, config, children) {
        var propName;

        // Original props are copied
        var props = _assign({}, element.props);

        // Reserved names are extracted
        var key = element.key;
        var ref = element.ref;
        // Self is preserved since the owner is preserved.
        var self = element._self;
        // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source;

        // Owner will be preserved, unless ref is overridden
        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          // Remaining properties override existing props
          var defaultProps;
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      }

      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a valid component.
       * @final
       */
      function isValidElement(object) {
        return (typeof object === 'undefined' ? 'undefined' : _typeof$1(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      var ReactDebugCurrentFrame = {};

      {
        // Component that is being worked on
        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var impl = ReactDebugCurrentFrame.getCurrentStack;
          if (impl) {
            return impl();
          }
          return null;
        };
      }

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';

      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */
      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2'
        };
        var escapedString = ('' + key).replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });

        return '$' + escapedString;
      }

      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;

      var userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
      }

      var POOL_SIZE = 10;
      var traverseContextPool = [];
      function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0
          };
        }
      }

      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;
        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }

      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children === 'undefined' ? 'undefined' : _typeof$1(children);

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;
            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_CALL_TYPE:
                case REACT_RETURN_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }

        if (invokeCallback) {
          callback(traverseContext, children,
          // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows.
          nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn === 'function') {
            {
              // Warn about using Maps as children
              if (iteratorFn === children.entries) {
                warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
                didWarnAboutMaps = true;
              }
            }

            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else if (type === 'object') {
            var addendum = '';
            {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
            }
            var childrenString = '' + children;
            invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
          }
        }

        return subtreeCount;
      }

      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }

        return traverseAllChildrenImpl(children, '', callback, traverseContext);
      }

      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */
      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if ((typeof component === 'undefined' ? 'undefined' : _typeof$1(component)) === 'object' && component !== null && component.key != null) {
          // Explicit key
          return escape(component.key);
        }
        // Implicit key determined by the index in the set
        return index.toString(36);
      }

      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
            context = bookKeeping.context;

        func.call(context, child, bookKeeping.count++);
      }

      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.foreach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */
      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }
        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result,
            keyPrefix = bookKeeping.keyPrefix,
            func = bookKeeping.func,
            context = bookKeeping.context;

        var mappedChild = func.call(context, child, bookKeeping.count++);
        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
          }
          result.push(mappedChild);
        }
      }

      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = '';
        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + '/';
        }
        var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.map
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }

      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.count
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */
      function countChildren(children, context) {
        return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
      }

      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.toarray
       */
      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
        return result;
      }

      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.only
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */
      function onlyChild(children) {
        !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
        return children;
      }

      var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
        return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
      };

      function getComponentName(fiber) {
        var type = fiber.type;

        if (typeof type === 'string') {
          return type;
        }
        if (typeof type === 'function') {
          return type.displayName || type.name;
        }
        return null;
      }

      /**
       * ReactElementValidator provides a wrapper around a element factory
       * which validates the props passed to the element. This is intended to be
       * used only in DEV and could be replaced by a static type checker for languages
       * that support it.
       */

      {
        var currentlyValidatingElement = null;

        var propTypesMisspellWarningShown = false;

        var getDisplayName = function getDisplayName(element) {
          if (element == null) {
            return '#empty';
          } else if (typeof element === 'string' || typeof element === 'number') {
            return '#text';
          } else if (typeof element.type === 'string') {
            return element.type;
          } else if (element.type === REACT_FRAGMENT_TYPE) {
            return 'React.Fragment';
          } else {
            return element.type.displayName || element.type.name || 'Unknown';
          }
        };

        var getStackAddendum = function getStackAddendum() {
          var stack = '';
          if (currentlyValidatingElement) {
            var name = getDisplayName(currentlyValidatingElement);
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
          }
          stack += ReactDebugCurrentFrame.getStackAddendum() || '';
          return stack;
        };

        var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current);
          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }
        return '';
      }

      function getSourceInfoErrorAddendum(elementProps) {
        if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
          var source = elementProps.__source;
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
      }

      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */
      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = '\n\nCheck the top-level render call using <' + parentName + '>.';
          }
        }
        return info;
      }

      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */
      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;

        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

        // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
        }

        currentlyValidatingElement = element;
        {
          warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
        }
        currentlyValidatingElement = null;
      }

      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */
      function validateChildKeys(node, parentType) {
        if ((typeof node === 'undefined' ? 'undefined' : _typeof$1(node)) !== 'object') {
          return;
        }
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }

      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */
      function validatePropTypes(element) {
        var componentClass = element.type;
        if (typeof componentClass !== 'function') {
          return;
        }
        var name = componentClass.displayName || componentClass.name;
        var propTypes = componentClass.propTypes;
        if (propTypes) {
          currentlyValidatingElement = element;
          checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
          currentlyValidatingElement = null;
        } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true;
          warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
        }
        if (typeof componentClass.getDefaultProps === 'function') {
          warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }

      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */
      function validateFragmentProps(fragment) {
        currentlyValidatingElement = fragment;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!VALID_FRAGMENT_PROPS.has(key)) {
              warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (fragment.ref !== null) {
          warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
        }

        currentlyValidatingElement = null;
      }

      function createElementWithValidation(type, props, children) {
        var validType = typeof type === 'string' || typeof type === 'function' || (typeof type === 'undefined' ? 'undefined' : _typeof$1(type)) === 'symbol' || typeof type === 'number';
        // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
          var info = '';
          if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof$1(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          info += getStackAddendum() || '';

          warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof$1(type), info);
        }

        var element = createElement.apply(this, arguments);

        // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) {
          return element;
        }

        // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        if ((typeof type === 'undefined' ? 'undefined' : _typeof$1(type)) === 'symbol' && type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }

      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        // Legacy hook TODO: Warn if this is accessed
        validatedFactory.type = type;

        {
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function get() {
              lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }

        return validatedFactory;
      }

      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }

      var React = {
        Children: {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray,
          only: onlyChild
        },

        Component: Component,
        PureComponent: PureComponent,
        unstable_AsyncComponent: AsyncComponent,

        Fragment: REACT_FRAGMENT_TYPE,

        createElement: createElementWithValidation,
        cloneElement: cloneElementWithValidation,
        createFactory: createFactoryWithValidation,
        isValidElement: isValidElement,

        version: ReactVersion,

        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: ReactCurrentOwner,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        }
      };

      {
        _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
          // These should not be included in production.
          ReactDebugCurrentFrame: ReactDebugCurrentFrame,
          // Shim for React DOM 16.0.0 which still destructured (but not used) this.
          // TODO: remove in React 17.0.
          ReactComponentTreeHook: {}
        });
      }

      var React$2 = Object.freeze({
        default: React
      });

      var React$3 = React$2 && React || React$2;

      // TODO: decide on the top-level export form.
      // This is hacky but makes it work with both Rollup and Jest.
      var react = React$3['default'] ? React$3['default'] : React$3;

      module.exports = react;
    })();
  }
});

var react = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV === 'production') {
    module.exports = react_production_min;
  } else {
    module.exports = react_development;
  }
});

var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.PropTypes;
var react_4 = react.createElement;

var reactTests = function reactTests() {

  return [];
};

var testsReact = [].concat(genericTests({ renderer: renderer$1, keys: keys$1, Drawer: Drawer$1, RaisedButton: RaisedButton$1, List: List$1, ListTile: ListTile$1, Icon: Icon$1 })).concat(reactTests({ renderer: renderer$1, keys: keys$1, Drawer: Drawer$1, RaisedButton: RaisedButton$1, List: List$1, ListTile: ListTile$1, Icon: Icon$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
