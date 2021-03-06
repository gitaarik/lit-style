import { customElement, LitElement, html, css } from 'lit-element';
import 'lit-docs';
import { litStyle } from '@app/lit-style.js';


const myStyles = litStyle(css`

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

`);


const moreImportantStyles = litStyle(css`

    h1 {
        color: red;
    }

    h3 {
        color: red;
    }

`);


@customElement('precedence-demo')
export class PrecedenceDemo extends myStyles(moreImportantStyles(LitElement)) {

    render() {

        return html`
            <showcase-box>
                <h1>This is a &lt;h1&gt; tag</h1>
                <h2>This is a &lt;h2&gt; tag</h2>
                <h3>This is a &lt;h3&gt; tag</h3>
                <p>This is a &lt;p&gt; tag</p>
            </showcase-box>
        `;

    }

    static get styles() {
        return css`
            h2 {
                color: red;
            }
        `;
    }

}
