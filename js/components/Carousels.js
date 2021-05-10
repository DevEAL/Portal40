Vue.component("Carousels", {
  template: // html
  `
  <div>
    <v-container
      class="spacing-playground black carousels-40"
      fluid
      id="carouselBlock"
    >
      <v-carousel
        class="carousel__40 carousel__home"
        height="inherit"
        cycle
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container fluid class="py-1 white"></v-container>
  </div>
  `,
  data() {
      return {
        ancho: '',
        items: [
          {
            src: 'img/galeria/BANNER1_DESKTOP.webp',
          },
          {
            src: 'img/galeria/BANNER2_DESKTOP.webp',
          },
          {
            src: 'img/galeria/BANNER3_DESKTOP.webp',
          },
          {
            src: 'img/galeria/BANNER4_DESKTOP.webp',
          }
        ]
      }
  },
  mounted() {
    /* if (screen.width < 400) {
      this.ancho = '200px'
    } else if (screen.width < 1300) {
      this.ancho = '410px'
    } else if (screen.width < 1370){
      this.ancho = '560px'
    } else {
      this.ancho = '760px'
    } */
  },
})

/* cycle */