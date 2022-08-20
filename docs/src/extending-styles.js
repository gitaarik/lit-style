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

            <h2>Usage</h2>

            <p>
                <code-block .code=${this.usageCode}></code-block>
            </p>

        `;

    }

    get usageCode() {
      return (
        'const basicStyle = litStyle(css`p { font-size: 3px; }`);\n' +
        'const extendedStyle = basicStyle(css`input { font-size: 2px; }`);'
      );
    }

}
