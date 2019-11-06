Vue.component("Carousels", {
  template: // html
  `
  <div>
    <v-container
      class="spacing-playground black carousels-40"
      fluid
    >
      <vueper-slides class="no-shadow" arrows-outside bullets-outside autoplay transition-speed="250" :fixed-height="ancho" >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.src"
          ></vueper-slide>
      </vueper-slides>
    </v-container>
  </div>
  `,
  data() {
      return {
        ancho: '',
        slides: [
          {
            src: 'img/galeria/1.png',
          },
          {
            src: 'img/galeria/2.png',
          },
          {
            src: 'img/galeria/3.png',
          },
          {
            src: 'img/galeria/4.png',
          }
        ]
      }
  },
  mounted() {
    if (screen.width < 1370) {
      this.ancho = '560px'
    } else if (screen.width < 400) {
      this.ancho = '200px'
    } else {
      this.ancho = '760px'
    }
  },
})