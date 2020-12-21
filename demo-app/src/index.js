import { customElement, LitElement, html } from 'lit-element';
import 'lit-element-demo-app-helpers';
import './basic-usage/index';


@customElement('lit-style-demo-app')
export class LitStyleDemoApp extends LitElement {

    render() {
        return html`<demo-shell .pages=${this.pages}></demo-shell>`;
    }

    get pages() {
        return [
            {
                hash: 'basic-usage',
                title: 'Basic usage',
                template: html`<basic-usage></basic-usage>`
            },
        ];
    }

}
