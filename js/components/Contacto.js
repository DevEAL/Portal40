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
                    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4291.591803787794!2d-74.05340803311765!3d4.67617671307921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a8d89c56fa9%3A0x7d19531e9b829097!2sCra.%2013%20%2393-40%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1569526646809!5m2!1ses!2sco" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </v-col>
              </v-col>
            </v-row>
        </v-container>
    </div>
    `,
})