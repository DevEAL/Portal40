Vue.component("Contacto", {
  template: // html
  `
  <v-container fluid class="text-center ">
      <v-row class="white">
        <v-col cols="12" class="fondo-Rojo text-center texto-hat">
          <v-container>
          <h1 class="white--text title-contact letter--spacing">COMPRA EN PORTAL 40 Y COMPRA 5 NEGOCIOS EN 1</h1>
          </v-container>
        </v-col>
        <v-col cols="12">
          <v-container>
            <h2 class="color-texto-rojo texto-hat title-loc-contact letter--spacing my-15">UBICACIÓN</h2>
            <p class="texto-opera mb-10 text-loc-contact">Contamos con parqueadero gratuito para nuestros clientes</p>
            <img src="img/edificio/Parqueadero.jpg" class="img-parking"/>
            <h4 class="texto-opera title-time mt-10 mb-5" >Horario de atención</h4>
            <p class="text-loc-contact">Lunes a Domingo de 10 am a 5:00 pm</p>
          </v-container>
        </v-col>
        <v-col cols="12" >
            <h2 class="color-texto-rojo texto-hat title-loc-contact letter--spacing my-15">¿CÓMO LLEGAR?</h2>
            <p class="text-loc-contact mb-5">Carrera 13 # 40c - 10 Chapinero Central</p>
            <div class="mx-auto">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2309.2790123094615!2d-74.06974362843692!3d4.629177668645283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a285c4ec52f%3A0xc07ad86c2beeab7c!2sCra.%2013%20%2340C-20%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1572284312526!5m2!1ses-419!2sco" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
            <div class="btn-waze my-10">
               <a href="https://waze.com/ul/hd2g66ddhn" target="_blank">
                <img src="img/icon-waze.svg" />
               </a>
            </div>
        </v-col>
      </v-row>
  </v-container>
  `,
})