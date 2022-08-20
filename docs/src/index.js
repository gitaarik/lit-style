import { customElement, LitElement, html } from 'lit-element';
import 'lit-docs';
import './introduction-page';
import './basic-usage/index';
import './style-precedence/index';
import './extending-styles';


@customElement('lit-style-docs')
export class LitStyleDocs extends LitElement {

    render() {
        return html`<lit-docs-ui docsTitle="LitStyle" .pages=${this.pages}></lit-docs-ui>`;
    }

    get pages() {
        return [
            {
                title: 'Introduction',
                path: 'introduction-page',
                template: html`<introduction-page></introduction-page>`
            },
            {
                title: 'Basic usage',
                path: 'basic-usage',
                template: html`<basic-usage></basic-usage>`
            },
            {
                title: 'Style precedence',
                path: 'style-precedence',
                template: html`<style-precedence></style-precedence>`
            },
            {
                title: 'Extending styles',
                path: 'extending-styles',
                template: html`<extending-styles></extending-styles>`
            },
        ];
    }

}
