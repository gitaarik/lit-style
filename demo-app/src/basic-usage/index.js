import { customElement, LitElement, html } from 'lit-element';
import { DemoPage } from 'lit-element-demo-app-helpers';
import './demo-component.js';


@customElement('basic-usage')
export class BasicUsage extends DemoPage(LitElement) {

    render() {

        return html`

            <h1>Basic Usage</h1>

            <p>
                Hi
            </p>

            <p>
                <demo-component></demo-component>
            </p>

        `;

    }

}
