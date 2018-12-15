import { color, layout } from 'polythene-css-selection-control';
import { createColor, createLayout, styler } from 'polythene-core-css';

var classes = {
  component: "pe-checkbox-control"
};

var color$1 = createColor({
  superColor: color
});

var layout$1 = createLayout({
  superLayout: layout
});

var vars = {
  general_styles: true
};

const fns = [layout$1, color$1];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars);
const getStyle = styler.createGetStyle(selector, fns, vars);
styler.addStyle({
  selectors: [selector],
  fns,
  vars
});

export { addStyle, color$1 as color, getStyle, layout$1 as layout, vars };
