import { customElement, LitElement, html } from 'lit-element';
import { LitDocsContent } from 'lit-docs';
import 'lit-docs';
import './basic-demo.js';


@customElement('basic-usage')
export class BasicUsage extends LitDocsContent(LitElement) {

    render() {

        return html`

            <h1>Basic Usage</h1>

            <p>
                The <code>litStyle()</code> function takes a
                <a href="https://lit.dev/docs/components/styles/" target="_blank">Lit CSS object</a>
                and returns a mixin that you can use on your <code>LitElement</code>
                components. Then they will include those styles.
            </p>

            <h2>Example:</h2>

            <p>
                <code-block .code=${this.litStyleCode}></code-block>
            </p>

            <h2>Output:</h2>

            <p>
                <basic-demo></basic-demo>
            </p>

        `;

    }

    get litStyleCode() {

        return `import { customElement, LitElement, html, css } from 'lit-element';
import { litStyle } from 'lit-element-style';


const myStyles = litStyle(css\`

    h1 {
        color: green;
    }

    h2 {
        color: blue;
    }

    h3 {
        color: yellow;
    }

    p {
        color: purple;
    }

\`);


@customElement('demo-component')
export class MyDemoComponent extends myStyles(LitElement) {

    render() {

        return html\`
            <h1>This is a &lt;h1&gt; tag</h1>
            <h2>This is a &lt;h2&gt; tag</h2>
            <h3>This is a &lt;h3&gt; tag</h3>
            <p>This is a &lt;p&gt; tag</p>
        \`;

    }

}`;

    }

}
