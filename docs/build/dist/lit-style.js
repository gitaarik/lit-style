export function litStyle(myStyles) {
  return wrappedEl => {
    /*
     * This allows to use a `litStyle()` generated function to extend
     * another stylesheet:
     *
     *   const basicStyle = litStyle(css`p { font-size: 3px; }`);
     *   const extendedStyle = basicStyle(css`input { font-size: 2px; }`);
     */
    if (typeof wrappedEl === 'object' && 'cssText' in wrappedEl) {
      return litStyle([myStyles, wrappedEl]);
    }

    return class extends wrappedEl {
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
  };
}