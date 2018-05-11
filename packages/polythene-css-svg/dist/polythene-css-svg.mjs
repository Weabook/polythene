import { styler } from 'polythene-core-css';
import { vars } from 'polythene-core-svg';

var classes = {
  component: "pe-svg"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      lineHeight: 1,

      " > div, svg": {
        width: "inherit",
        height: "inherit"
      }
    })];
  }
};

var layout = (function (selector, componentVars, customVars) {
  var allVars = _extends({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel$1 = function sel(selector, o) {
  return _defineProperty$1({}, selector, o);
};

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel$1(selector, {
      color: "inherit",

      " svg": {
        color: "inherit",

        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: "currentcolor"
          }
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty$1({}, "color_" + tint, function (selector, vars$$1) {
    return [sel$1(selector, {
      " svg": {
        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: vars$$1["color_" + tint]
          }
        }
      }
    })];
  });
};

var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

var createStyle = function createStyle(selector, componentVars, customVars, tint) {
  var allVars = _extends$1({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    var varFns = tint === "light" ? lightTintFns : darkTintFns;
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
};

var style = function style(scopes, selector, componentVars, customVars, tint) {
  var selectors = scopes.map(function (s) {
    return s + selector;
  }).join(",");
  return createStyle(selectors, componentVars, customVars, tint);
};

var color = (function (selector, componentVars, customVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
});

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
