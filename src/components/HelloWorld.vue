
<template>
<div class="Wrapper">
  <h1 class="Title">Youtube 8K(MP4 Converter)</h1>
  <div class="Input">
    <input type="text" id="input" @click="pasteit()" class="Input-text text-center" placeholder="https://www.youtube.com/watch?v=bWEbM86Bzz0">
    <label for="input" class="Input-label">Video link</label>
  </div>
  <div class="multi-button mt-1">
    <button style="background: rgb(220, 20, 60,0.95); color:white;" @click="pasteit()">Paste<i class="bi bi-clipboard"></i></button>
    <button  style="background: white; color:rgb(220, 20, 60);" @click="submitt()">Submit <i class="bi bi-arrow-down"></i></button>
  </div>
</div>
 <VideoComponent :showornot="showvideo" :thumbnail="thumbnail" :title="title" :formats="formats" :completeFormat="completeFormat"/>
</template>

<script>

import VideoComponent from './VideoComponent.vue'
var click = 0;
const axios = require('axios')
export default {
components:{
VideoComponent
},
  name: 'HelloWorld',
  data(){
  return{
showvideo: false,
thumbnail: "",
title: "",
formats:[],
completeFormat:[]
  };
  },
  methods:{
  pasteit(){
  navigator.clipboard.readText().then((clipText) => document.getElementById("input").value = clipText);
  },
   submitt(){
  const url = document.getElementById("input").value;
  const id = url.split("v=")[1]
  const id2 = id.substr(0,11)
const options = {
  method: 'GET',
  url: 'https://yt-api.p.rapidapi.com/dl',
  params: {id: id2},
  headers: {
    'X-RapidAPI-Key': process.env.VUE_APP_YT_KEY,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};
axios.request(options).then((response) =>{

    this.title = response.data.title
	this.thumbnail = response.data.thumbnail[3].url;
	this.formats = response.data.adaptiveFormats;
    this.completeFormat = response.data.formats;

});
click++;
if(click % 2 == 0)
{this.showvideo = false;}
else{
this.showvideo = true;
}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
