import { LitElement, html } from '@polymer/lit-element';
import '../../components/universal-header';
import {PlaygroundStyles} from './styles';
import '../../components/event-calendar';
import '../../layouts/holy-grail';
import {GET_PAGE} from '../../graphql/queries';
export class Playground extends LitElement {
// The properties that your element exposes.
static get properties() { return {
  query: {type:Object},
  variables:{type:Object},
  page:{type:Object}
}};
 constructor() {
super();
 // Set up the property defaults here
 this.query=GET_PAGE;
this.variables = {
  uri: `home`
};
};
render() {
const {variables, page} = this;
return html`
${PlaygroundStyles}
  ${variables ? html`<apollo-query .query="${this.query}" .variables="${this.variables}"
  @query-success="${this.handleQuerySuccess}"></apollo-query>`:null}
<holygrail-layout
headerbackgroundcolor="rebeccapurple"
headerfontcolor="#fff">
<universal-header 
        class="white-txt"
        slot="header" 
        aligned="right-aligned" 
        title="This is the Playground Page. It is Awesome." 
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque eros urna, quis faucibus elit sodales eu. Curabitur condimentum lacus a nibh egestas, quis auctor nunc consectetur. Nullam vitae tellus maximus, dictum libero at, placerat ligula. Aliquam erat volutpat. Integer eget tellus pulvinar, facilisis elit non, lacinia nisi. Pellentesque sed metus dignissim, porta libero et, aliquet elit. In hac habitasse platea dictumst."
    
        ></universal-header>
       <section slot="content" class="entry">
       ${page && page.content ? html`
       <div class="entry-content" .innerHTML="${page.content}">
      </div>`: null} 
   
       <div class="block">
        <event-calendar year="2019" month="1"></event-calendar>
        </div>
        <div class="block">
        <event-calendar year="2019" month="2"></event-calendar>
        </div>
        <div class="block">
        <event-calendar year="2019" month="3"></event-calendar>
        </div>
        <div class="block">
        <event-calendar year="2019" month="4"></event-calendar>
        </div>
        <div class="block">
        <event-calendar year="2019" month="5"></event-calendar>
        </div>
        </section>

<div slot="sidebar">
  <h3>Sidebar Widget</h3>
</div>
<div slot="sidebar2">
  <h3>Sidebar 2 Widget</h3>
</div>
<div slot="footer" class="white-txt">
  <p>Footer</p>

</div>

</holygrail-layout>

`;
};
handleQuerySuccess(evt){
  console.log('query success', evt.detail);
  this.page = evt.detail.pageBy;
  console.log(this.page);
}
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
 };
};
