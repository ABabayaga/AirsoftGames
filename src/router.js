import Vue from 'vue'
import Router from 'vue-router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueCarousel from '@chenfengyuan/vue-carousel'
import VueAgile from 'vue-agile'
// import VueGallerySlideshow from 'vue-gallery-slideshow';




import Home from './views/Home.vue'
import Sobre from './views/Sobre.vue'
import Galeria from './views/Galeria.vue'


Vue.use(Router)
Vue.use(VueYouTubeEmbed)
Vue.component(VueCarousel.name, VueCarousel)
Vue.use(VueAgile)
// Vue.use(VueGallerySlideshow)




export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria
  }

  ]
})