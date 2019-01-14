import {
    LitElement,
    html
} from '@polymer/lit-element';
import {HolyGrailStyles} from './styles'
export class HolygrailLayout extends LitElement {
    // The properties that your element exposes.
    static get properties() {
        return {
            headerFontColor:{type:String},
            headerBackgroundColor:{type:String},
            contentFontColor:{type:String},
            contentBackgroundColor:{type:String},
        }
    };
    constructor() {
        super();
        // Set up the property defaults here
this.headerFontColor = "#333";
this.headerBackgroundColor = "gold";
this.contentFontColor = "#333";
this.contentBackgroundColor = "#fff";

    };
    render() {
        const {
            headerFontColor,
            headerBackgroundColor,
            contentFontColor,
            contentBackgroundColor
        } = this;
        return html `
${HolyGrailStyles(this)}
      <div class="grid">
    
    <header class="header">
        <slot name="header"></slot>
    </header>
    <aside class="box sidebar" ><slot name="sidebar"></slot></aside>
    <aside class="box sidebar2" ><slot name="sidebar2"></slot></aside>
    <main class="content">
        <slot name="content"></slot>
    </main>
    <footer class="footer">
        <slot name="footer"></slot>
    </footer>
    </div>
`;
    };
    firstUpdated() {
        // Any code that relies on render having been called once goes here.
        // (for example setting up listeners, etc)
    };
};

