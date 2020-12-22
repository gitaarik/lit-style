# LitStyle

This micro library makes it easy to apply some styles to your
LitElement components with a mixin. This is useful if you want
to apply some common styles to multiple components.


## Installation

```
npm install lit-element-style
```


## Usage

```javascript
import { litStyle } from 'lit-element-style';
import { LitElement, css } from 'lit-element';

const myStyles = litStyle(css`h1 { color: red; }`);

class MyComponent extends myStyles(LitElement) {
    // ...
}
```

See the [demo app](https://gitaarik.github.io/lit-style/demo-app/build/)
for more info.


## Also see

[LitState](https://github.com/gitaarik/lit-state) - Simple shared app state management for LitElement
