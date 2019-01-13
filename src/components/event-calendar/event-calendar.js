import { LitElement, html } from '@polymer/lit-element';
import {CalendarStyles} from './styles';
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const getDaysArray = (year, month) => {
  const names = Object.freeze(
     [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]);
  const date = new Date(year, month - 1, 1);
  const result = [];
  while (date.getMonth() == month - 1) {
    result.push({year, month, day:date.getDate(), dayOfWeek:date.getDay(), dayOfWeekName: names[date.getDay()], monthName: monthNames[month - 1]});
    date.setDate(date.getDate() + 1);
  }
  return result;
}
export class Calendar extends LitElement {
// The properties that your element exposes.
static get properties() { return {
month: {type:Number},
year:{type:Number},
today:{type:Date},
days:{type:Array},
calendarMonth:{type:String}
}};
 constructor() {
super();
 // Set up the property defaults here
this.state = {loading:true};
this.today = new Date();
this.days=[];
// const monthStartDay = moment().clone().startOf('month').startOf('week');
// const endDay = moment().clone().endOf('month').endOf('week');
// console.log(startDay, endDay);
// var calendar = [];
// var index = startDay.clone();
// while (index.isBefore(endDay, 'day')) {
//     calendar.push(
//         new Array(7).fill(0).map(
//             function(n, i) {
//               console.log(n,i);
//                 return {date: index.add(1, 'day').date()};
//             }
//         )
//     );
// }
// this.days = calendar.flat();
// console.log(this.days);

};
render() {
const {days,calendarMonth, year} = this;
return html`
${CalendarStyles}
<div class="calendar">
  <header>
<h1>${calendarMonth} ${year}</h1>
  </header>

  <ul class="weekdays">
    <li>
      <abbr title="S">Sunday</abbr>
    </li>
    <li>
      <abbr title="M">Monday</abbr>
    </li>
    <li>
      <abbr title="T">Tuesday</abbr>
    </li>
    <li>
      <abbr title="W">Wednesday</abbr>
    </li>
    <li>
      <abbr title="T">Thursday</abbr>
    </li>
    <li>
      <abbr title="F">Friday</abbr>
    </li>
    <li>
      <abbr title="S">Saturday</abbr>
    </li>
  </ul>

  <ul class="day-grid">
    ${days.length >0  ? html`${this.renderPrevSpaces(days[0].dayOfWeek)}
    ${days.map((date)=>{
      return html`<li @click="${_=>this.handleDateClick(date)}">${date.day}</li>`
    })}
      ${this.renderNextSpaces(days[days.length -1].dayOfWeek+1)}` :null}
 
  </ul>

</div>
`;
};
handleDateClick(date){
  console.log("date ",date )
}
isDateMatch(date1, event){
  new Date(2010, 9, 20).valueOf() === new Date(2010, 9, 20).valueOf();
}
renderPrevSpaces(spaces){
  const prev = [];
  var i;
  for (i = 0; i < spaces; i++) { 
    prev.push(html`<li class="month-prev"></li>`)
  }
  return prev;
}
renderNextSpaces(spaces){
  console.log(spaces);
  const length = 7-spaces;
  const next = [];
  var i;
  for (i = 0; i < length; i++) { 
  next.push(html`<li class="month-next"></li>`)
  }
  return next;
}
firstUpdated() {
  const {year, month} = this;
  this.days = getDaysArray(parseInt(year),parseInt(month));
  this.calendarMonth = monthNames[month-1];
  console.log(this.days);
 };
};
