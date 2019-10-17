Vue.component("Carousels", {
    template: // html
    `
    <div>
      <v-container
        class="spacing-playground black carousels-40"
        fluid
      >
        <vueper-slides class="no-shadow" arrows-outside bullets-outside autoplay transition-speed="250" fixed-height="500px">
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
          slides: [
            {
              src: 'img/galeria/bright-loft-apartment-PX363CC.jpg',
            },
            {
              src: 'img/galeria/bright-loft-apartment-PX363CC.jpg',
            },
            {
              src: 'img/bedroom-in-loft-PEKDXR7.jpg',
            }
          ]
        }
    },
})