import { statefulComponent } from "polythene-react-base";
import { Button as component } from "polythene-core-button";
import { Ripple } from "polythene-react-ripple";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Ripple }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Ripple }));

export const Button = statefulComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

Button.theme = component.theme;
Button.displayName = "Button";
