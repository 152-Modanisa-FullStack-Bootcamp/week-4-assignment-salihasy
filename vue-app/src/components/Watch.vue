<template>
  <div class="watch-container">
        <span>
            id of the video which i clicked on :
           <em> {{$route.query.id}} </em>
        </span>
  </div>
</template>

<script>
export default {
  name: "YoutubeWatchPage"
}
</script>


<style>


.watch-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: pink;
  font-size: 30px
}

em {
  background-color: rgb(122, 107, 107);
}

</style>