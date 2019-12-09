<template>
   <div id="app">
  <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
</div>
</template>

<script>


const app = new Vue({
  el: '#app',
  components: {
    VueGallerySlideshow
  },
  data: {
    images: [
      'https://placekitten.com/801/800',
      'https://placekitten.com/802/800',
      'https://placekitten.com/803/800',
      'https://placekitten.com/804/800',
      'https://placekitten.com/805/800',
      'https://placekitten.com/806/800',
      'https://placekitten.com/807/800',
      'https://placekitten.com/808/800',
      'https://placekitten.com/809/800',
      'https://placekitten.com/810/800'
    ],
    index: null
  }
});
  
</script>