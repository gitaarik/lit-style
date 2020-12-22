import { customElement, LitElement, html } from 'lit-element';
import { DemoPage } from 'lit-element-demo-app-helpers';
import 'lit-element-demo-app-helpers';
import './precedence-demo.js';


@customElement('style-precedence')
export class StylePrecedence extends DemoPage(LitElement) {

    render() {

        return html`

            <h1>Style precedence</h1>

            <p>
                The inner most (mixin) class gets precedence. So if your
                component defines styles itself, they get precedence over any
                mixin that you created with
                <code-small>litStyle()</code-small>. And if you use multiple
                mixins, the more inner mixins get precedence.
            </p>

            <h2>Example:</h2>

            <p>
                <code-big .code=${this.demoComponentCode}></code-big>
            </p>

            <h2>Output:</h2>

            <p>
                <precedence-demo></precedence-demo>
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


const moreImportantStyles = litStyle(css\`

    h1 {
        color: red;
    }

    h3 {
        color: red;
    }

\`);


@customElement('precedence-demo')
export class PrecedenceDemo extends myStyles(moreImportantStyles(LitElement)) {

    render() {

        return html\`
            <h1>This is a &lt;h1&gt; tag</h1>
            <h2>This is a &lt;h2&gt; tag</h2>
            <h3>This is a &lt;h3&gt; tag</h3>
            <p>This is a &lt;p&gt; tag</p>
        \`;

    }

    static get styles() {
        return css\`
            h2 {
                color: red;
            }
        \`;
    }

}`;

    }

}
