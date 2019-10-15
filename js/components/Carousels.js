Vue.component("Carousels", {
    template: // html
    `
    <div>
      <v-container
        class="spacing-playground black carousels-40"
        fluid
      >
        <vueper-slides class="no-shadow" arrows-outside bullets-outside autoplay transition-speed="250">
          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.src"
            :infinite="true"
            ></vueper-slide>
        </vueper-slides>
      </v-container>
    </div>
    `,
    data() {
        return {
          slides: [
            {
              src: 'http://localhost:8080/Portal40/img/galeria/bright-loft-apartment-PX363CC.jpg',
            },
            {
              src: 'http://localhost:8080/Portal40/img/galeria/bright-loft-apartment-PX363CC.jpg',
            },
            {
              src: 'http://localhost:8080/Portal40/img/bedroom-in-loft-PEKDXR7.jpg',
            }
          ]
        }
    },
})