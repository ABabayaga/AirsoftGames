<template >
  <v-card>
    <v-card align="center" justify="center" width="100%" height="300px">
      <v-container>
        <v-img height="200px" width="600px" src="../img/capa.jpeg">
          <v-card-title class="justify-center">Games e notícias sobre airsoft no MS.</v-card-title>
        </v-img>

        <!-- <v-card-subtitle >Number 10</v-card-subtitle> -->

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-container>
    </v-card>


    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card max-height="544" color="#385F73" dark>
            <v-card-title class="headline">Exemplos de ambientes e modalidades de airsoft</v-card-title>

            <!-- <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle> -->

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card height="250" align="center" justify="center" :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title"></v-card-title>

                <!-- <v-card-subtitle v-text="item.artist"></v-card-subtitle> -->
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <!-- <v-img :src="item.src"></v-img> -->
                <youtube player-width="440" player-height="220" :video-id="item.videoId"></youtube>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>




</template>

<script>
export default {
  data() {
    
    return {
      // videoId: "_32eKQVBioM",

      items: [
        {
          color: "#B0BEC5",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
          videoId: "_32eKQVBioM"
        },
        {
          color: "#B0BEC5",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding"
        },
        {
          color: "#B0BEC5",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
          videoId: "_32eKQVBioM"
        },
      ],
      
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>

