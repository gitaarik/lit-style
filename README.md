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


## Why not create a new component if you want things to look the same?

Generally it is the best idea to create a web component if you find yourself
repeating a particular part of your template. Then you can put the styling
inside that component and just use that component. However, for basic html tags
like `h1`, `p` or `code`, it is a bit annoying to have to create a new
component just to have consistent styling. With LitStyle you can easily apply a
common stylesheet to multiple components, so you don't have to style them
separately in every component, or create custom components for these basic
tags.


## Also see

[LitState](https://github.com/gitaarik/lit-state) - Simple shared app state management for LitElement
