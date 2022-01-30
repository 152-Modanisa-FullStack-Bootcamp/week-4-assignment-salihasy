<template>
  <div class="video-container">
      <img id="video-image"
           @mouseover="isHover=true" @mouseleave="isHover=false"
           :src="isHover ? video.hoverImage : video.coverImage"/>
    <div class="footer-of-video">
      <img class="own-image" :src="video.ownerImage"/>
      <div class="information">
        <span id="title"> <b> {{video.title}} </b></span>
        <span class="grey-font"> {{video.ownerName}} </span>
        <span class="grey-font"> {{video.viewCount}} views • {{video.publishDateInMonth}} months ago</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Video',
  props : ["video"],
  data() {
    return {
      isHover : false
    }
  }
}
</script>

<style>

.video-container{
  background: white;
  margin-top: 30px;
  width: 360px
}

#video-image {
  height: 200px;
  width: 360px

}

.footer-of-video {
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 10px;
}

.information {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 7px;
}

.own-image {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;

}


</style>
