import { LitElement, html } from '@polymer/lit-element';
import {GET_PAGE} from '../../graphql/queries'
import '../../components/apollo-query';
export class Home extends LitElement {
// The properties that your element exposes.
static get properties() { return {
  _variables: {type:Object} 
}};

render() {
  const {_variables={uri: "home"}} = this;
return html`
<h1>Home</h1>
    ${_variables ? html`<apollo-query .query="${GET_PAGE}" .variables="${_variables}"
  @query-success="${e=>this.handleQuerySuccess(e)}"></apollo-query>`:null}
  
`;
};
handleQuerySuccess(evt){
  console.log(evt.detail);
  }
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)
this.state = {...this.state, loading:false}
 };
};
