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
                The outer most style decorator gets precedence. So if extend
                from a component that has it's own <code>litStyle()</code>
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
export class PrecedenceDemo extends moreImportantStyles(myStyles(LitElement)) {

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
