import { customElement, LitElement, html } from 'lit-element';
import { LitDocsContent } from 'lit-docs';
import 'lit-docs';


@customElement('introduction-page')
export class IntroductionPage extends LitDocsContent(LitElement) {

    render() {

        return html`

            <h1>LitStyle</h1>

            <p>
                This micro library makes it easy to apply some styles to your
                LitElement components with a mixin. This is useful if you want
                to apply some common styles to multiple components.
            </p>

            <h2>Installation</h2>

            <p>
                <code-block .code=${'npm install lit-element-style'}></code-block>
            </p>

            <h2>Usage</h2>

            <p>
                <code-block .code=${this.usageCode}></code-block>
            </p>

            <p>
                See <lit-docs-link href="basic-usage/">Basic usage</lit-docs-link>
                for more info.
            </p>

        `;

    }

    get usageCode() {
        return `import { litStyle } from 'lit-element-style';
import { LitElement, css } from 'lit-element';

const myStyles = litStyle(css\`h1 { color: red; }\`);

class MyComponent extends myStyles(LitElement) {
    // ...
}`;
    }

}
