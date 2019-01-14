
import { html } from '@polymer/lit-element';
export const HolyGrailStyles =({headerBackgroundColor, headerFontColor}) => html`<style>
.sidebar {
        grid-area: sidebar;
    }

    .sidebar2 {
        grid-area: sidebar2;
    }

    .content {
        grid-area: content;
        padding: 0 10px;
        max-width:400px;
    }

    .header {
        grid-area: header;
    }

    .footer {
        grid-area: footer;
    }

    .grid {
        background-color: #fff;
        color: #444;
    }

  .grid {
    display: grid;
    grid-gap:10px;
    grid-template-areas:
     "header"
     "sidebar"
     "content"
     "sidebar2"
     "footer"
  }

    @media only screen and (min-width: 600px)  {
    .grid {

        grid-template-columns: 20% auto;
        grid-template-areas:
         "header   header"
        "sidebar  content"
        "sidebar2 sidebar2"
        "footer   footer";
    }
    .content{
        width:100%;
        max-width:600px;
    }
    }

    @media only screen and (min-width: 800px)   {
        .grid {
            grid-template-columns: minmax(150px,250px) 2fr minmax(150px,250px);
            grid-template-rows: 100vh 1fr auto;
            grid-template-areas:
             "header  header  header"
            "sidebar content sidebar2"
            "footer  footer  footer";
        }
        .content{
        width:100%;
        max-width:800px;
    }
    }

.box {
  background-color: #444;
  color: #fff;
  padding: 10px; 
}

.header,
.footer {
  background-color: ${headerBackgroundColor};
  color:${headerFontColor};
}

.sidebar2 {
  background-color: #ccc;
  color: #444;
}
::slotted(.white-txt){
color:#fff;
}
::slotted(.black-txt){
color:#333;
}
</style>`