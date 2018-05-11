(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-ios-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-ios-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-ios-spinner']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreIosSpinner) { 'use strict';

  var classes = {
    component: "pe-ios-spinner",

    // elements
    blades: "pe-ios-spinner__blades",
    blade: "pe-ios-spinner__blade"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var bladeWidth = 9; // percent
  var bladeHeight = 28; // percent

  var kfFade = function kfFade() {
    return {
      " 0%": {
        opacity: .640
      },
      " 100%": {
        opacity: .035
      }
    };
  };

  var positionBlades = function positionBlades(vars) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
      // reverse to improve performance on iOS
      var delay = -1 / 12 * i * vars.animation_duration_secs;
      var rotation = 360 - 360 / 12 * i;
      return _defineProperty({}, " .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")", {
        transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
        animation: "iosSpinnerFade " + vars.animation_duration_secs + "s " + delay + "s linear infinite"
      });
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
        " .pe-ios-spinner__blades": {
          transform: "translate3d(0,0,0)",
          position: "relative",
          width: "100%",
          height: "100%"
        },

        " .pe-ios-spinner__blade": {
          position: "absolute",
          width: bladeWidth + "%",
          height: bladeHeight + "%",
          left: (100 - bladeWidth) / 2 + "%",
          top: (100 - bladeHeight) / 2 + "%",
          opacity: 0,
          borderRadius: "50px"
        },

        "@keyframes iosSpinnerFade": kfFade()
      })];
    },
    animation_duration_secs: function animation_duration_secs(selector, vars) {
      return [sel(selector, {
        " .pe-ios-spinner__blades": [positionBlades(vars)]
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
        " .pe-ios-spinner__blade": {
          background: "currentcolor"
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    return _defineProperty$1({}, "color_" + tint, function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint]
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
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreIosSpinner.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreIosSpinner.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreIosSpinner.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreIosSpinner.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-ios-spinner.js.map
