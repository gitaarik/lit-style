import { customElement, LitElement, html } from 'lit-element';
import { LitDocsContent } from 'lit-docs';
import 'lit-docs';
import './precedence-demo.js';


@customElement('style-precedence')
export class StylePrecedence extends LitDocsContent(LitElement) {

    render() {

        return html`

            <h1>Style precedence</h1>

            <p>
                The outer most style decorator gets precedence. So if you
                extend from a component that has it's own <code>litStyle()</code>
                decorator, your styles will get precedence.
            </p>

            <h2>Example:</h2>

            <p>
                <code-block .code=${this.demoComponentCode}></code-block>
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


const baseStyles = litStyle(css\`

    h1 {
        color: green;
    }

    h2 {
        color: blue;
    }

    h3 {
        color: yellow;
    }

    h4 {
        color: purple;
    }

\`);


const customStyles = litStyle(css\`

    h1 {
        color: red;
    }

    h3 {
        color: red;
    }

\`);


class BaseElement extends baseStyles(LitElement) {}


@customElement('precedence-demo')
export class PrecedenceDemo extends customStyles(BaseElement) {

    render() {

        return html\`
            <h1>This is a &lt;h1&gt; tag</h1>
            <h2>This is a &lt;h2&gt; tag</h2>
            <h3>This is a &lt;h3&gt; tag</h3>
            <h4>This is a &lt;h4&gt; tag</h4>
        \`;

    }

    static get styles() {
        // Styles from the \`static get styles()\` of the outer most class
        // get's the highest precedence. This also overrides any
        // \`static get styles()\` methods from super classes.
        return css\`
            h2 {
                color: red;
            }
        \`;
    }

}`;

    }

}
