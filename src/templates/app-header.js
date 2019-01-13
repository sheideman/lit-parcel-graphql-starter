import {html} from '@polymer/lit-element'
import {HeaderStyles} from './styles';
export const AppHeader = ({menuOpened,dropdownOpened,appTitle,toggleCollapse, handleSlideoutToggle }) => html`
${HeaderStyles}
<header class="app-header linear">
<button 
class="button circular icon secondary"
aria-label="Toggle Sidebar Menu"
@click="${handleSlideoutToggle}"><span class="${!menuOpened ? "mdi mdi-menu-open" : "mdi mdi-close"}"></span></button>
<div style="flex:1; text-align:center;"><a style="color:var(--nav-font-color);" href="/">${appTitle}</a></div>

<button 
aria-label="Toggle Dropdown Menu"
class="button circular icon secondary" @click="${toggleCollapse}"><span class="mdi ${dropdownOpened ? 'mdi-menu-up' : 'mdi-menu-down'}"></span></button>

</header>
<iron-collapse id="collapse">
  <div class="collapse-content">
  <button 
  aria-label="Call Us"
  class="button circular icon secondary small"><span class="mdi mdi-phone"></span></button>
    <button 
    aria-label="Email Us"
    class="button circular icon secondary small"><span class="mdi mdi-email"></span></button>
    <button 
    aria-label="Find us on Facebook"
    class="button circular icon secondary small"><span class="mdi mdi-facebook"></span></button>
    <button 
    aria-label="Chat on Twitter"
    class="button circular icon secondary small"><span class="mdi mdi-twitter"></span></button>
    <button
    aria-label="Instagram" 
    class="button circular icon secondary small"><span class="mdi mdi-instagram"></span></button>
</div>
</iron-collapse>`;