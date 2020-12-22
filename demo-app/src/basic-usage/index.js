import { customElement, LitElement, html } from 'lit-element';
import { DemoPage } from 'lit-element-demo-app-helpers';
import 'lit-element-demo-app-helpers';
import './basic-demo.js';


@customElement('basic-usage')
export class BasicUsage extends DemoPage(LitElement) {

    render() {

        return html`

            <h1>Basic Usage</h1>

            <p>
                The <code-small>litStyle()</code-small> function takes some css
                and returns a mixin that you can use on your
                <code-small>LitElement</code-small> components. Then they will
                include those styles.
            </p>

            <h2>Example:</h2>

            <p>
                <code-big .code=${this.demoComponentCode}></code-big>
            </p>

            <h2>Output:</h2>

            <p>
                <basic-demo></basic-demo>
            </p>

        `;

    }

    get demoComponentCode() {

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
