import { customElement, LitElement, html, css } from 'lit-element';
import 'lit-docs';
import { litStyle } from '@app/lit-style.js';


const baseStyles = litStyle(css`

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

`);


const customStyles = litStyle(css`

    h1 {
        color: red;
    }

    h3 {
        color: red;
    }

`);


class BaseElement extends baseStyles(LitElement) {}


@customElement('precedence-demo')
export class PrecedenceDemo extends customStyles(BaseElement) {

    render() {

        return html`
            <showcase-box>
                <h1>This is a &lt;h1&gt; tag</h1>
                <h2>This is a &lt;h2&gt; tag</h2>
                <h3>This is a &lt;h3&gt; tag</h3>
                <h4>This is a &lt;h4&gt; tag</h4>
            </showcase-box>
        `;

    }

    static get styles() {
        // Styles from the `static get styles()` of the outer most class
        // get's the highest precedence. This also overrides any
        // `static get styles()` methods from super classes.
        return css`
            h2 {
                color: red;
            }
        `;
    }

}
