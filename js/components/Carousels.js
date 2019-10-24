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
        <div>
          <a class="bnt-float" href="https://www.google.com/maps/place/Cra.+13+%2393-40,+Bogotá/@4.6760796,-74.0494753,16z/data=!4m5!3m4!1s0x8e3f9a8d89c56fa9:0x7d19531e9b829097!8m2!3d4.6761012!4d-74.0493678?hl=es" target="_black"><img src="img/iconoubicacion.svg"></a>
        </div>
        <div class="white--text">
          <a href="https://web.whatsapp.com" class="btn-whatapp" target="_blank"><img src="img/whatsapp.svg"></a></a>
        </div>
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