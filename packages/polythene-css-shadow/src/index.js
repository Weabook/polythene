import classes from "polythene-css-classes/shadow";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout];
const selector = `.${classes.component}`;

const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);

const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([selector], vars, fns);

styler.generateStyles([selector], vars, fns);

export {
  addStyle,
  getStyle,
  layout,
  vars,
};
