<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Airsoft Games</v-toolbar-title>

      <v-spacer></v-spacer>
      
     
       <v-toolbar-items v-for="item in items" :key="item.title" app>
       <v-btn :to="item.route" > {{item.title}} </v-btn> 
      
      </v-toolbar-items>

      
     

      

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
  props: {
    source: String
  },
  data: () => ({
    items: [
      {
        title: "Home",
        route: "/"
      },
      {
        title: "Sobre",
        route: "/Sobre"
      },
      {
        title: "Galeria",
        route: "/Galeria"
      }
    ]
  }),
};
</script>
