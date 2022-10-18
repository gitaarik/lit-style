import { customElement, LitElement, html } from 'lit-element';
import { LitDocsContent } from 'lit-docs';
import 'lit-docs';


@customElement('extending-styles')
export class ExtendingStyles extends LitDocsContent(LitElement) {

    render() {

        return html`

            <h1>Extending styles</h1>

            <p>
                You can extend an earlier created mixin by wrapping the
                extended CSS in it:
            </p>

            <p>
                <code-block .code=${this.extendCode}></code-block>
            </p>

            <p>
                You can also access the original CSS object from the
                <code>litStyle</code> object:
            </p>

            <p>
                <code-block .code=${this.cssObjCode}></code-block>
            </p>

        `;

    }

    get extendCode() {
      return (
        'const basicStyle = litStyle(css`p { color: green; }`);\n' +
        'const extendedStyle = basicStyle(css`input { color: red; }`);'
      );
    }

    get cssObjCode() {
      return (
        'const cssObj = css`p { color: green; }`\n' +
        'const myStyle = litStyle(cssObj);\n' +
        '\n' +
        'myStyle.css === cssObj;\n' +
        'myStyle.css.cssText === "p { color: green; }";'
      );
    }

}
