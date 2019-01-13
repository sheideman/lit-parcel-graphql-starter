import { html } from '@polymer/lit-element';
export const CalendarStyles = html`<style>
header {
display: flex;
align-items: center;
font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
justify-content: center;
margin-bottom: 2em;
background: #000;
color: #fff;
min-height: 10vh;
text-align: center;
}

ul {
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-gap: 1em;
margin: 0 auto;
max-width: 64em;
padding: 0;
}

li {
display: flex;
align-items: center;
justify-content: center;
list-style: none;
margin-left: 0;
font-size: calc(16px + (21 - 16) * ((100vw - 300px) / (1600 - 300)));
}

ul.weekdays {
margin-bottom: 1em;
}

ul.weekdays li {
height: 4vw;
}

ul.day-grid li {
background-color: #fff;
border: 1px solid #eaeaea;
height: 12vw;
max-height: 125px;
}

ul.weekdays abbr[title] {
border: none;
font-weight: 800;
text-decoration: none;
}

ul.day-grid li.month-prev{
background-color:#eaeaea;
}
ul.day-grid li.month-next{
background-color:#eaeaea;
}

@media all and (max-width: 800px) {
ul {
  grid-gap: .25em;
}

ul.weekdays li {
  font-size: 0;
}

ul.weekdays > li abbr:after {
    content: attr(title);
    font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;
  }
}
</style>`