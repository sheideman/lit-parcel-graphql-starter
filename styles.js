import {html} from '@polymer/lit-element'
export const MainStyles = html`<style>
      @import url('https://cdn.materialdesignicons.com/3.3.92/css/materialdesignicons.min.css');

:host{
  --evening-purple-gradient: linear-gradient(165deg, rgba(32,2,41,1) 0%, rgba(165,17,107,1) 100%);
  --nav-font-color:#fff;
}
h1,h2,h3,h4,h5,h6{
  line-height:1.3;
}
p{
  padding:1em;
}


.page {
  display: grid;
  grid-template-rows:auto 1fr auto;
	grid-template-columns: 1fr;
  min-height: 100vh;
  min-width:100vw;
}

.button.secondary.circular.icon{
    height: 40px;
    border-radius: 50%;
    border:none;
    font-size:24px;
    background:var(--app-secondary-color);
    width: 40px;
}
.button.secondary.circular.icon.small{
    height: 30px;
    border-radius: 50%;
    border:none;
    background:var(--app-secondary-color);
    width: 30px;
    font-size:0.8em;
}

.logo{
  width:30px;
}
iron-collapse{
  display:block;
  width:95%;
  margin:0 auto;
  text-align:center;
}
.content{
  overflow-y:auto;
  /* fluid content area -- footer floats to bottom */
  min-height: calc(100vh - 110px);
  /* fixed scrolling content area -- footer fixed to bottom */
  /* height: calc(100vh - 110px); */
}
</style>`