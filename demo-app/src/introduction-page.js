import { customElement, LitElement, html } from 'lit-element';
import { DemoPage } from 'lit-element-demo-app-helpers';
import 'lit-element-demo-app-helpers';


@customElement('introduction-page')
export class IntroductionPage extends DemoPage(LitElement) {

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
                <code-big .code=${'npm install lit-element-style'}></code-big>
            </p>

            <h2>Usage</h2>

            <p>
                <code-big .code=${this.usageCode}></code-big>
            </p>

            <p>See <a href="#basic-usage">Basic usage</a> for more info.</p>

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
