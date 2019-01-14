import { html } from '@polymer/lit-element';

export const UniversalHeaderStyles = (backgroundAttachment)=> html`<style>
.universal-header {
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment:${backgroundAttachment};
  min-height: 600px;
  height: 100.5vh;
  position: relative;
  overflow: hidden;
}
.universal-header .row {
  height: 100%;
  position: relative
}
.text-shadow{
  text-shadow:1px 1px 2px #000;
}
.universal-header .centered-content.left-aligned{
  left: 0;
  max-width: 700px;
  position: absolute;
  top: 50%;
  transform: translateY(-61%);
  padding-left:1rem;
}
.universal-header .centered-content.right-aligned{
  right: 0;
  max-width: 700px;
  position: absolute;
  top: 50%;
  transform: translateY(-61%);
  padding-right:1rem;
}
.universal-header .centered-content.center-aligned{
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  height:100%;
  padding:1rem;
}
.universal-header .centered-content p {
  margin: 3em 0 0;
  display:flex;
}
.universal-header .centered-content .btn {
  margin-top: 3rem
}
.universal-header .centered-content.short {
  max-width: 450px
}
.universal-header .centered-content.wide {
  max-width: 735px
}
.universal-header .centered-content.extra-wide {
  max-width: 940px
}
.universal-header .centered-content.thirds {
  max-width: 33.3333%
}
.universal-header .description {
  font-size: 11px;
  font-weight: 400;
  position: absolute;
  bottom: 75px;
  left: 0;
  text-transform: uppercase
}
.universal-header .description span {
  display: block
}
.universal-header .description span:last-of-type {
  color: #bcbdc1
}
.universal-header h1 {
  font-size: 66px;
  font-size: 6vw;
  font-weight: 400;
  line-height: .97
}
@media screen and (min-width:1200px) {
  .universal-header h1 {
    font-size: 66px;
  }
}
@media screen and (max-width:906px) {
  .universal-header h1 {
    font-size: 7vw;
    max-width: 90%
  }
}
@media screen and (max-width:600px) {
  .universal-header h1 {
    font-size: 45px;
    max-width: none
  }
}
@media screen and (max-width:400px) {
  .universal-header h1 {
    font-size: 35px;
  }
}
.universal-header.yt-video {
  padding: 0
}
.universal-header.yt-video .yt-module {
  border-radius: 3px;
  margin: 0;
  max-height: 95vh;
  position: relative;
  width: 100%;
  z-index: 1
}
.universal-header.yt-video .yt-module:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 56.25%
}
.universal-header.yt-video .yt-module>.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0
}
.universal-header.yt-video .yt-module .content {
  border-radius: 3px
}
.universal-header.yt-video .yt-module .content .holder {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%
}
.universal-header.yt-video .yt-module iframe {
  border-radius: 3px;
  display: hidden;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.universal-header.yt-video .yt-module .cover-image {
  border-radius: 3px;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2
}
.universal-header.yt-video .yt-module .controller {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 3
}
.universal-header.yt-video .yt-module .controller .play-btn {
  background-color: #fff;
  border-radius: 3px;
  color: #141424;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-size: 1.5rem;
  font-family: Roboto Mono, monospace;
  padding: 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  margin: 0 auto;
  transition: transform .2s ease-in-out;
  transform-origin: 0 center
}
.universal-header.yt-video .yt-module .controller .play-btn:hover {
  transform: scale(1.04) translateX(-50%) translateY(50%)
}
.universal-header.yt-video .yt-module .controller .play-btn em {
  color: #bcbdc1
}
.universal-header.yt-video .yt-module .controller .play-btn.blue {
  background-color: #0a00aa;
  color: #fff
}
.universal-header.yt-video .yt-module .controller .play-btn.blue svg path {
  fill: #fff
}
.universal-header.yt-video .yt-module .controller .play-btn.blue span {
  color: #847ee3
}
.btn {
display: inline-block;
border: 2px solid #141424;
color: #141424;
min-width: 23rem;
position: relative;
font-size: 20px;
font-size: 2rem;
text-align: center;
transition: all .2s ease;
text-transform: none !important;
z-index: 2;
}
</style>`;