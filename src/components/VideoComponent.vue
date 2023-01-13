<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<template>
<div v-show="showornot" class="row text-center justify-content-center mt-4">
<div v-show="!isloading">
<ul class="card-list">

  <li class="card">
    <a class="card-image is-loaded" target="_blank">
      <img :src="thumbnail"/>
    </a>
    <a class="card-description"  target="_blank">
      <h2>{{title}}</h2>

    </a>
  </li>
</ul>

<div class="container text-center">
<b><span style="font-size: 26px;" class="text-white">Video Only (For higher resolutions)</span></b>
  <div class="row g-0">
    <div v-for="format in this.formats.filter(item => item.width == 1920 || item.width == 1280 || item.width == 2560 || item.width == 7680 || item.width == 3840)" :key="format.itag" @click="changelink(format.url)" class="col-12 col-md-4 col-lg-3 col-xs-12 col-sm-6 p-3 multi-button2">

     <button style="background: rgb(220, 20, 60,0.95); color:white;" v-if="format.width == 1920 && format.mimeType.substr(0,9) == 'video/mp4'">FHD(mp4)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 7680 && format.mimeType.substr(0,9) == 'video/mp4'">8K(mp4)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 3840&& format.mimeType.substr(0,9) == 'video/mp4'">4K(mp4)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 2560&& format.mimeType.substr(0,9) == 'video/mp4'">2K(mp4)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 1280&& format.mimeType.substr(0,9) == 'video/mp4'">HD(mp4)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 640&& format.mimeType.substr(0,9) == 'video/mp4'">HQ(mp4)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-if="format.width == 1920 && format.mimeType.substr(0,9) == 'video/web'">FHD(webm)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 7680 && format.mimeType.substr(0,9) == 'video/web'">8K(webm)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 3840&& format.mimeType.substr(0,9) == 'video/web'">4K(webm)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 2560&& format.mimeType.substr(0,9) == 'video/web'">2K(webm)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 1280&& format.mimeType.substr(0,9) == 'video/web'">HD(webm)|{{calculateBytes(format.contentLength)}}</button>
<button style="background: rgb(220, 20, 60,0.95); color:white;" v-else-if="format.width == 640&& format.mimeType.substr(0,9) == 'video/web'">HQ(webm)|{{calculateBytes(format.contentLength)}}</button>
    </div>
  </div>

  <b><span style="font-size: 26px;" class="text-white">Full Video + Audio included</span></b>
    <div class="row g-0 justify-content-center">
      <div v-for="format in this.completeFormat.filter(format => format.mimeType.substr(0,9) == 'video/mp4' || format.mimeType.substr(0,9) == 'video/web')" :key="format.itag" @click="changelink(format.url)" class="col-12 col-md-4 col-lg-3 col-xs-12 col-sm-6 p-3 multi-button2">
       <button style="background: rgb(220, 20, 60,0.95); color:white;">{{format.height}}p</button>
      </div>
    </div>
</div>

</div>
<div v-show="isloading" class="text-center mt-4">
<video oncontextmenu="alerte" :src="this.videolink" controls autoplay style="width:80%"></video>
<img src="https://www.linkpicture.com/q/imagedwn_1.png">
<img src="https://www.linkpicture.com/q/download_video-2.png">
</div>
</div>
</template>

<script>


export default {
  name: 'VideoComponent',
  computed:{
  filteredVideos(){
  console.log(this.formats)
 return this.formats.filter(item => item.width == 1920 || item.width == 1280 || item.width == 2560 || item.width == 7680 || item.width == 3840)
  }
  },
  data(){
  return{
  isloading: false,
  videolink: ''
  }
  },
props:{
showornot: Boolean,
thumbnail: String,
title: String,
formats: [],
completeFormat:[]
},
   watch: {
              showornot: function(value) {
              if(value == true){
                  this.isloading = false;}
              }
          },
methods:{
alerte(){
alert("Po");
},
changelink(link){

this.isloading = true;
this.videolink = link;
},
calculateBytes(x){
const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }

  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}
},
      components:{
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #121212;
}
.downloaddiv{
overflow: hidden;
}
.aspect {
  display: none;
}
.cinema-embed {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  max-width: 100%;
  overflow: hidden;
  background-color: #121212;
}
.cinema-embed.four-three {
  padding-bottom: 75%;
}
.cinema-embed > iframe,
.cinema-embed > video {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.cinema-embed .controls {
  position: absolute;
  z-index: 2;
  bottom: 0;
  background-color: #121212;
  transition: all 150ms ease-out;
  transform: translateY(6rem) translateZ(0);
  transition-delay: 1s;
  height: 6rem;
  width: 100%;
  opacity: 0.25;
}
.cinema-embed .loading {
  position: absolute;
  top: 0; left: 0;
  background: black;
  height: 100%;
  width: 100%;
  z-index: 3;
  transition: opacity 400ms ease-out;
  pointer-events: none;
  opacity: .5;
  -webkit-filter: contrast(20);
  filter: contrast(20);
}
.cinema-embed .loading:before,
.cinema-embed .loading:after {
  content: '';
  position: absolute;
  height: 0;
  width: 0;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) translateZ(0);
  border-radius: 50%;
  border: 4rem solid #bada55;
  border-top: 4rem solid transparent;
  border-right: 4rem solid transparent;
  animation: spin 3s linear infinite;
  -webkit-filter: blur(1.5rem);
  filter: blur(1.5rem);
}
.cinema-embed .loading:after {
  animation: spin 3.5s ease-in-out alternate infinite;
  border: 4rem solid #bada55;
  border-right: 4rem solid transparent;
  border-top: 4rem solid transparent;
}
.cinema-embed.loaded:hover .controls,
.cinema-embed .controls.active{
  opacity: 1;
  transition: all 200ms ease-out;
  transform: translateY(0);
}
.cinema-embed .controls .icon {
  background: transparent;
  color: white;
  font-size: 4rem;
  border: none;
  outline: none;
  transition: all 200ms ease;
  top: 50%;
  transform: translateY(-43%);
  position: absolute;
  cursor: pointer;
  font-family: 'Material Icons';
  text-rendering: optimizeLegibility;
  color: #ccc;
}
.cinema-embed .controls .icon:focus {
  color: white;
}
.cinema-embed .controls .icon[title]:after {
  display: none;
  font-family: sans-serif;
  font-size: 12px;
  content: attr(title);
  color: lime;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -100%;
}
.cinema-embed .controls .icon:hover {
  color: #bada55;
}
.cinema-embed .controls .play {
  left: 1rem;
}
.cinema-embed .controls .subtitles {
  left: 6rem;
}
.cinema-embed .controls .fullscreen {
  right: 1rem;
}
.cinema-embed .controls .aspect {
  left: 8rem;
}
.cinema-embed .controls .scrubber {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-5px);
  z-index: 3;
}
.cinema-embed .controls .mute {
  color: white;
  left: calc(100% - 12rem);
}
.cinema-embed.muted .controls .mute:hover {
  color: #ccc;
}
.cinema-embed.muted .controls .mute {
  opacity: .8;
}
.cinema-embed .controls .mute:hover ~ .volume-controls,
.cinema-embed .controls .volume-controls:hover {
  transition-delay: 0s;
  pointer-events: initial;
  transform: scaleY(1);
}
.cinema-embed .volume-controls {
  position: relative;
  left: calc(100% - 12rem);
  height: 12rem;
  top: -10.2rem;
  width: 4.5rem;
  z-index: 3;
  background: #121212;
  transition: all 200ms linear;
  transition-delay: 0;
  border-radius: 0.5rem;
  pointer-events: none;
  transform: scaleY(0);
  transform-origin: bottom center;
}
.cinema-embed .controls .volume {
  position: absolute;
  width: 10rem;
  bottom: 0;
  transform-origin: left center;
  transform: rotate(-90deg) translateZ(0);
  left: 50%;
}
.cinema-embed.muted .controls .volume {
  opacity: 0.5;
}
.cinema-embed .controls .timing {
  color: white;
  left: calc(100% - 25rem);
  cursor: pointer;
  position: absolute;
  top: 43%;
  line-height: 6rem;
  transform: translateY(-40%);
  z-index: 3;
  min-width: 12rem;
  text-align: center;
  transition: all 200ms ease;
  font-family: monospace;
  font-size: 1.4rem;
}
.cinema-embed .controls .timing:hover {
  color: #bada55;
}
.cinema-embed .controls .timing:before {
  content: attr(data-current)" / ";
}
.cinema-embed .controls .timing:after {
  content: attr(data-duration);
}
.cinema-embed.timeleft .controls .timing:before {
  content: "-" attr(data-timeleft);
}
.cinema-embed:not(.loaded) .controls .timing:before,
.cinema-embed:not(.loaded) .controls .timing:after {
  display: none;
}
.cinema-embed.timeleft .controls .timing:after {
  display: none;
}
.cinema-embed  .controls input[type=range] {
  -webkit-appearance: none;
}
.cinema-embed  .controls input[type=range]:focus {
  outline: none;
}
.cinema-embed  .controls input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1.5rem;
  cursor: pointer;
  background: #484d4d;
  border-radius: 0;
  border: none;
}
.cinema-embed  .controls input[type=range]::-webkit-slider-thumb {
  border: none;
  height: 1.5rem;
  width: 1.8rem;
  border-radius: 0;
  background: #bada55;
  cursor: pointer;
  -webkit-appearance: none;
}
.cinema-embed  .controls input[type=range]:focus::-webkit-slider-runnable-track {
  background: #545a5a;
}
.cinema-embed  .controls input[type=range]::-moz-range-track {
  width: 100%;
  height: 1.5rem;
  cursor: pointer;
  background: #484d4d;
  border-radius: 0;
  border: none;
}
.cinema-embed  .controls input[type=range]::-moz-range-thumb {
  border: none;
  height: 1.5rem;
  width: 1.8rem;
  border-radius: 0;
  background: #bada55;
  cursor: pointer;
}
.cinema-embed  .controls input[type=range]::-ms-track {
  width: 100%;
  height: 0.75rem;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.cinema-embed  .controls input[type=range]::-ms-fill-lower {
  background: #3c4040;
  border: none;
  border-radius: 0;
}
.cinema-embed  .controls input[type=range]::-ms-fill-upper {
  background: #484d4d;
  border: none;
  border-radius: 0;
}
.cinema-embed  .controls input[type=range]::-ms-thumb {
  border: none;
  height: 1.5rem;
  width: 1.2rem;
  border-radius: 0;
  background: #bada55;
  cursor: pointer;
}
.cinema-embed  .controls input[type=range]:focus::-ms-fill-lower {
  background: #484d4d;
}
.cinema-embed  .controls input[type=range]:focus::-ms-fill-upper {
  background: #484d4d;
}
.cinema-embed progress {
  width: 100%;
  cursor: pointer;
  background: #484d4d;
  height: 1rem;
  color: #bada55;
  border: none;
}
.cinema-embed progress::-webkit-progress-bar {
  background-color: #484d4d;
}
.cinema-embed progress::-webkit-progress-value {
  background-color: #bada55
}
@keyframes spin {
  0% { transform: translateX(-50%) translateY(-50%) translateZ(0) rotate(0) }
  100% { transform: translateX(-50%) translateY(-50%) translateZ(0) rotate(360deg) }
}
</style>