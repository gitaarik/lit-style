import { LitElement, css } from '../web_modules/lit-element.js';
export function litStyle(myStyles) {
  return superclass => class extends superclass {
    static getStyles() {
      const styles = super.getStyles();

      if (!styles) {
        return myStyles;
      } else if (Array.isArray(styles)) {
        return [myStyles, ...styles];
      } else {
        return [myStyles, styles];
      }
    }

  };
}