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
                extended css in it:
            </p>

            <p>
                <code-block .code=${this.extendCode}></code-block>
            </p>

            <p>
                You can also access the original css object from the litStyle
                object:
            </p>

            <p>
                <code-block .code=${this.cssObjCode}></code-block>
            </p>

        `;

    }

    get extendCode() {
      return (
        'const basicStyle = litStyle(css`p { font-size: 3px; }`);\n' +
        'const extendedStyle = basicStyle(css`input { font-size: 2px; }`);'
      );
    }

    get cssObjCode() {
      return (
        'const cssObj = css`p { font-size: 3px; }`\n' +
        'const myStyle = litStyle(cssObj);\n' +
        'myStyle.css === cssObj;'
      );
    }

}
