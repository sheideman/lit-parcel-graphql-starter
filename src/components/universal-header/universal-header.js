import { LitElement, html } from '@polymer/lit-element';
import {UniversalHeaderStyles} from './styles';
export class UniversalHeader extends LitElement {
// The properties that your element exposes.
static get properties() { return {
pageTitle: {type:String},
subTitle:{type:String},
featuredImage:{type:String},
aligned:{type:String},
backgroundAttachment:{type:String}
}};
constructor(){
  super();
  this.backgroundAttachment="scroll"
}
render() {
const {title,subTitle, featuredImage, aligned,backgroundAttachment} = this;
return html`
${UniversalHeaderStyles(backgroundAttachment)}
<section class="universal-header" style="background-image:url(${featuredImage});">
	<div class="row">
      <div class="centered-content ${aligned ? aligned : 'left-aligned'}">
         <h1 class="text-shadow">${title}</h1>
   		<p class="text-shadow">
     ${subTitle}	
  </p>
   		
      </div>
	</div>
</section>
`;
};
};
