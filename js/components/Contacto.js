Vue.component("Contacto", {
  template: // html
  `
  <div>
      <v-container class="text-center ">
          <v-row>
            <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
              <p class="color-texto-rojo texto-hat texto-titulo-contacto">UBICACI&#211;N</p>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
              <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                  <p class="black--text texto-hat texto-contacto">Contamos con parqueadero gratuito para nuestros clientes</p>
                  <p class="black--text texto-opera texto-contacto">Carrera 13 # 40c - 10 Chapinero Central</p>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                  <img src="img/edificio/parking-garage-underground-interior-P9N6UAX.jpg" class="localizacion" height="300px" with="100px"/>
              </v-col>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
              <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                  <p class="black--text texto-hat texto-contacto">Horarios de atención</p>
                  <p class="black--text texto-hat texto-contacto">&#191;C&#211;MO LLEGAR?</p>
                  <p class="black--text texto-opera texto-contacto"></p>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2309.2790123094615!2d-74.06974362843692!3d4.629177668645283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a285c4ec52f%3A0xc07ad86c2beeab7c!2sCra.%2013%20%2340C-20%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1572284312526!5m2!1ses-419!2sco" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
              </v-col>
            </v-col>
          </v-row>
      </v-container>
  </div>
  `,
})