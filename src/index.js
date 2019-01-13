import { LitElement, html } from '@polymer/lit-element';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { installOfflineWatcher } from 'pwa-helpers/network';
import { installRouter } from 'pwa-helpers/router';
import { updateMetadata } from 'pwa-helpers/metadata';
import './components/apollo-query';
import '@polymer/iron-collapse';
import { MainStyles,MaterialDesignIcons } from '../styles';
import {AppHeader,AppFooter, SidebarMenu} from './templates';
import {GET_PAGE} from './graphql/queries'
import Slideout from 'slideout';
class AppShell extends LitElement {
// The properties that your element exposes.

static get properties() {
  return {
      appTitle: { type: String },
      _page: { type: String },
      _snackbar: { type: Object },
      _variables: {type:Object}           
  };
}
updated(changedProps) {
  if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
  }
}

render() {
const {appTitle, dropdownOpened=false, menuOpened=false, toggleCollapse, handleSlideoutToggle,handleSlideoutClose, _variables={uri: "about"}} = this;
return html`
${MaterialDesignIcons}
${MainStyles}
${SidebarMenu(this)}
  <section class="page" id="panel">
${AppHeader(this)}
  <main class="content" id="outlet">
    <h1>Hello World</h1>
    ${_variables ? html`<apollo-query .query="${GET_PAGE}" .variables="${_variables}"
  @query-success="${this.handleQuerySuccess}"></apollo-query>`:null}
  
  </main>
 ${AppFooter(this)}
  </section>
`;
};
toggleCollapse(){
  const collapse = this.shadowRoot.querySelector("#collapse");
  console.log(collapse);
  collapse.toggle();
  collapse.opened ? this.dropdownOpened = true : this.dropdownOpened = false;
}
handleQuerySuccess(evt){
console.log(evt.detail);
}
handleSlideoutClose(){
  const menu = this.shadowRoot.querySelector('#menu');
  this.slideout.close();
  this.menuOpened = false;
}
handleSlideoutToggle(){
  console.log("slideout toggle");
  const menu = this.shadowRoot.querySelector('#menu');

  this.slideout.toggle();
 this.slideout.isOpen() ? this.menuOpened = true : this.menuOpened = false;
}
firstUpdated() {
  this.slideout = new Slideout({
    'panel': this.shadowRoot.querySelector('#panel'),
    'menu': this.shadowRoot.querySelector('#menu'),
    'padding': 256,
    'tolerance': 70
  });
 };
};
customElements.define('app-shell', AppShell);