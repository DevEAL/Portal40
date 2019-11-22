Vue.component("Footer40", {
    template: //html
    `
        <v-footer color="black footer" dark>
            <v-container>
                <v-row lg="12">
                    <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="6" class="text-left texto-opera paddingFooter">
                        <p>POLITICAS Y PRIVACIDAD</p>
                        <p>Aviso de privacidad <br/>Politica de datos <br/> Todos los derechos reservado &#174;</p>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="6" class="text-left texto-opera paddingFooter">
                        <p>CONTACTANOS</p>
                        <p>{{ correo.value }} <br/>Carrera 13 # 40c - 20 Chapinero Central <br/>Bogotá - Colombia <br/> (+57) 315-145-9969</p>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="6" class="text-left texto-opera paddingFooter">
                        <p>S&#205;GUENOS</p>
                        <a class="socialmedia" :href="socialmedia.whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        <a class="socialmedia" :href="socialmedia.fecebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="socialmedia" :href="socialmedia.instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                    </v-col>
                </v-row>
                <v-row lg="12">
                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="text-center paddingFooter">
                        <v-divider color="#D9042B"></v-divider>
                    </v-col>
                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="center">
                    </v-col>
                </v-row>
                <v-row align="center" justify="center" class="logoF">
                    <img src="img/logo_white_footer.svg" height="150px" width="150px"/>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-tabs
                            background-color="black"
                            color="#FF1633"
                            grow
                            class="responsive"
                        >
                            <v-tab class="texto-hat letra-menu" to="/">Inicio</v-tab>
                            <v-tab class="texto-hat letra-menu" to="/Modelo">Modelo de Negocio</v-tab>
                            <v-tab class="texto-hat letra-menu" to="/Apartamento">Apartamento</v-tab>
                            <v-tab class="texto-hat letra-menu " to="/Edificio">Edificio</v-tab>
                            <v-tab class="texto-hat letra-menu " to="/contacto">contacto</v-tab>
                        </v-tabs>
                        <v-divider color="#D9042B"></v-divider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p class="texto-opera text-right overline grey--text">Copyright &#169; 2019. Power By En Alg&uacute;n Lugar</p>
                    </v-col>
                </v-row>
            </v-container>
		</v-footer>
    `,
    data() {
      return {
        socialmedia: {
          whatsapp: 'https://wa.me/573151459969?text=Me%20gustaría%20tener%20mas%20Información%20del%20proyecto',
          fecebook: 'https://www.facebook.com/Portal-40-109346230467942/?__tn__=%2Cd%2CP-R&eid=ARCkh5xinRuuTd6Fsbp8bb3zYO01B5IaSoAVhuwrWNZN-LKQcEE265N-hzY-sWe4zp8E3tGExqUFrwd6',
          instagram: 'https://www.instagram.com/portal__40/'
        },
        correo: []
      }
    },
    mounted() {
      this.consultar()
    },
    methods: {
      consultar(){
        fetch('Api/public/Api/enlaces')
          .then(res => res.json())
          .then(data => {
            this.correo = data.data.data
          })
      }
    },
})