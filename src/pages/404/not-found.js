import { LitElement, html } from '@polymer/lit-element/';

export class NotFound extends LitElement {
	render() {
		return html`
			<h1>404</h1>
			<p class="app-intro">
				Page not found.
			</p>
		`;
	}
}
