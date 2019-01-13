import { LitElement, html } from '@polymer/lit-element';
import {store} from '../../store';
export class Query extends LitElement {
// The properties that your element exposes.
static get properties() { return {
  client:{type:Object},
  query:{type:Object},
  variables:{type:Object},
  data:{type:Object},
  loading:{type:Boolean},
  error:{type:Object}
}};


render() {
const {loading,data,error} = this;
return html`
${loading ? html`Loading....`: null}
${error ? html`${error}<br/> <button>Retry</button>`: null}
`;
};
async _callQuery(query, variables){
  try{
  const response = await this.client.query({
     query, variables
   });
   this.loading = response.loading;
   this.data = response.data;
   if(this.data){
     this.dispatchCustomEvent(this, 'query-success', this.data);
   }
   this.error = response.error;
   console.log(response);
  } catch(error){
    this.error = error;
   console.log(error);
  }

  
 };
firstUpdated() {
  // Any code that relies on render having been called once goes here.
  // (for example setting up listeners, etc)

  // Start button on moussedown
  //Use rxjs takeuntil to stop recording on mouseup. 
  let apollo = store.select(state=>state.apollo);
  apollo.subscribe(apollo => this.client = apollo);
  this.loading = true;
  this._callQuery(this.query, this.variables);
  
 };
 dispatchCustomEvent(type, detail){
  this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail,
    })
  );
};
};