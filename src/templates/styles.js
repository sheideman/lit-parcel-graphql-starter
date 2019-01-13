import {html} from '@polymer/lit-element'

export const HeaderStyles = html`
<style>
    .app-header {
    background: var(--app-primary-color);
    display:flex;
    width:100%;
    padding:10px;
    box-sizing:border-box;
    color: var(--nav-font-color);
    border-bottom:1px solid #eee;
  }

</style>`;
export const SidebarStyles = html`
<style>
    .slideout-menu {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom:0;
  z-index: 0;
  width: 256px;
  overflow:hidden;
  color:var(--nav-font-color);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background: var(--app-secondary-color);
}
.slideout-panel {
  position: relative;
  z-index: 1;
  will-change: transform;
  background:#fff;
}
 
.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}
</style>`;
 export const FooterStyles = html`
 <style>
.footer {
text-align:center;
padding:1.5em;
background:var(--app-primary-color);
color:var(--nav-font-color);
font-size:10px;
}

 </style>
 `;
