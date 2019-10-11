Vue.component("Carousels", {
    template: // html
    `
    <div>
      <v-container
        class="spacing-playground py-10 px-10 black"
        fluid
      >
      <v-row>
        <v-carousel
          cycle
          height="600"
          hide-delimiter-background
          >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-row>
      </v-container>
    </div>
    `,
    data() {
        return {
            items: [
                {
                  src: 'http://localhost:8080/Portal40/img/galeria/bright-loft-apartment-PX363CC.jpg',
                },
                // {
                //   src: 'http://localhost:8080/Portal40/img/bright-loft-apartment-PX363CC.jpg',
                // },
                // {
                //   src: 'http://localhost:8080/Portal40/img/bright-loft-apartment-PX363CC.jpg',
                // }
              ]
        }
    },
})