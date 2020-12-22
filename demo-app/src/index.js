import { customElement, LitElement, html } from 'lit-element';
import 'lit-element-demo-app-helpers';
import './basic-usage/index';
import './style-precedence/index';
import './introduction-page';


@customElement('lit-style-demo-app')
export class LitStyleDemoApp extends LitElement {

    render() {
        return html`<demo-shell .pages=${this.pages}></demo-shell>`;
    }

    get pages() {
        return [
            {
                hash: 'introduction-page',
                title: 'Introduction',
                template: html`<introduction-page></introduction-page>`
            },
            {
                hash: 'basic-usage',
                title: 'Basic usage',
                template: html`<basic-usage></basic-usage>`
            },
            {
                hash: 'style-precedence',
                title: 'Style precedence',
                template: html`<style-precedence></style-precedence>`
            },
        ];
    }

}
