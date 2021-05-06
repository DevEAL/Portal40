Vue.component("Footer40", {
    template: //html
    `
        <v-footer color="footer">
            <v-container class="mt-15">
                <v-row lg="12">
                    <v-col cols="12" md="4" class="text-center text-md-left texto-opera paddingFooter">
                        <h3>POLÍTICAS Y PRIVACIDAD</h3>
                        <a href="/" class="text-decoration-none graydark-text hover-url">Política Manejo de Datos Personales</a>
                        <p class="mt-5">Todos los derechos reservado &#174;</p>
                    </v-col>
                    <v-col cols="12" md="4" class="text-center text-md-left texto-opera paddingFooter">
                        <h3>CONTÁCTANOS</h3>
                        <a
                            href="mailto:portal40@estrategiascomerciales.co"
                            class="text-decoration-none graydark-text hover-url"
                        >{{ correo }}</a>
                        <p class="mt-5">Carrera 13 # 40c - 20 Chapinero Central <br/>Bogotá - Colombia</p>
                        <p class="mt-5">(+57) 315-145-9969</p>
                    </v-col>
                    <v-col cols="12" md="4" class="text-center text-md-left texto-opera paddingFooter">
                        <h3>S&#205;GUENOS</h3>
                        <a class="socialmedia" :href="socialmedia.whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        <a class="socialmedia" :href="socialmedia.fecebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="socialmedia" :href="socialmedia.instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                    </v-col>
                </v-row>
                <v-row lg="12">
                    <v-col cols="12"  class="text-center paddingFooter">
                        <v-divider color="#D9042B"></v-divider>
                    </v-col>
                    <v-col cols="12" class="center">
                    </v-col>
                </v-row>
                <v-row align="center" justify="center" class="logoF flex-column">
                    <img class="mb-2" src="img/logo-estrategias-comerciales.svg"/>
                    <p>Comercializa – Estrategias Comerciales y de Mercadeo S.A</p>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-tabs
                            background-color="#f6f6f6"
                            color="#D9042B"
                            grow
                            class="responsive"
                        >
                            <v-tab class="texto-hat letra-menu texto-hat" v-for="(item, i) in menu" :key="i" :to="item.url">{{item.ruta}}</v-tab>
                        </v-tabs>
                        <v-divider color="#D9042B"></v-divider>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center" class="logoF flex-column mt-10">
                    <img class="mb-2" src="img/logo-footer.svg" />
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p class="texto-opera text-center text-capitalize overline grey--text">Copyright &#169; {{date}}. <a class="grey--text text-decoration-none hover-url" href="https://enalgunlugarestudio.com">Power By En Alg&uacute;n Lugar Estudio</a></p>
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
          instagram: 'https://www.instagram.com/portal__40/',
        },
        date: new Date().getFullYear(),
        // correo: []
        correo: 'portal40@estrategiascomerciales.co',
        menu: [
            {
                ruta: "Inicio",
                url: "/"
            },
            {
                ruta: "Modelo de Negocio",
                url: "/Modelo"
            },
            {
                ruta: "Inmuebles",
                url: "/inmuebles"
            },
            {
                ruta: "Edificio",
                url: "/Edificio"
            },
            {
                ruta: "Contacto",
                url: "/contacto"
            },
        ],
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

// <a href="mailto:portal40@estrategiascomerciales.co">{{ correo.value }} </a>
/* <v-col cols="12">
    <v-tabs
        v-model="tab"
        background-color="white"
        color="#D9042B"
        grow
        class="responsive"
        v-for="(item, i) in menu" :key="i"
    >
        <v-tab :to="item.url">{{item.ruta}}</v-tab>
    </v-tabs>
    <v-divider color="#D9042B"></v-divider>
</v-col> */