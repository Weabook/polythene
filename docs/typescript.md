# TypeScript

TypeScript support is available for all Polythene components. The type definitions help to ensure that only valid component options are selected.

<img src="https://arthurclemens.github.io/assets/polythene/docs/type-validation.png" alt="Screenshot of type validation in Visual Studio Code" width="382" />

Code editors like Visual Studio Code let you peek into the component's type definition.

<img src="https://arthurclemens.github.io/assets/polythene/docs/type-definition.png" alt="Screenshot of type definition preview in Visual Studio Code" width="675" />



## Extending typings with wrapper components

When creating a [wrapper component](theming/wrapper-components.md), you can create a type definition to extend the Polythene component interface.

This example shows a custom Button component that extends the Polythene Button interface to accept a new option `showCustomColor`.

### Mithril

```javascript
// my-button.js

import m from "mithril"
import { Button } from "polythene-mithril"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".custom-color", {
  color_light_background: "#FF1744",
  color_light_text:       "#fff"
})

interface MyButtonAttrs extends Partial<Button> {
  showCustomColor: boolean
}

const MyButton = ({ attrs: { showCustomColor, ...otherAttrs }} : { attrs: MyButtonAttrs }) => {
  const className = showCustomColor
    ? "custom-color"
    : ""
  return {
    view: () => 
      m(Button, {
        ...otherAttrs,
        className,
      })
  }
}

export default MyButton

// app.js

m(MyButton, {
  showCustomColor: true,
  label: "Custom"
})
```


### React

```jsx
// my-button.js

import React from "react"
import { Button } from "polythene-react"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".custom-color", {
  color_light_background: "#FF1744",
  color_light_text:       "#fff"
})

interface MyButtonProps extends Partial<Button> {
  showCustomColor: boolean
}
interface MyButtonState {
  // no state used here
}

export default class MyButton extends React.Component<MyButtonProps, MyButtonState> {
  render() {
    const { showCustomColor, ...otherProps } = this.props
    const className = showCustomColor
      ? "custom-color"
      : ""
    return <Button {...otherProps} className={className} />
  }
}

// app.js

<MyButton showCustomColor label="Custom" />
```