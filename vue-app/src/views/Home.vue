<template>
  <div class="home-container">
    <Video v-for="video in videos" :key="video.id" :video="video"> </Video>
  </div>
</template>

<script>
// @ is an alias to /src

import Video from "@/components/Video";
import API from "@/api";

export default {
  name: 'Home',
  data() {
    return {
      videos : []
    }
  },
  components: {Video},
  async created() {
    try {
      this.videos = await API.getVideoList()
      console.log(this.videos)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style>

.home-container {
  padding-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>
