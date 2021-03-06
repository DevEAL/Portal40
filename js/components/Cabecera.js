Vue.component("Cabecera", {
    template: // html
        `
  <div class="cabecera">
    <v-app-bar app color="black" dark height="90px" class="head-portal">
        <v-row cols="12">
          <v-col cols="6" xl="2" lg="2" md="2" sm="6" xs="6" >
            <a href="/#/"><img src="img/NUEVO_LOGO_P40.svg" class="logo-web" height="50px" width="200px"/>
            <img src="img/isotipo_color_m.svg" class="logo-cel" height="60px" width="80px"/></a>
          </v-col>
          <v-col cols="6" xl="1" lg="" md="3" sm="6" xs="6" class="text-right boton-menu">
            <v-app-bar-nav-icon class="boton-menu" @click="menu = !menu"></v-app-bar-nav-icon>
          </v-col>
          <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="6" class="responsive">
          <v-tabs
            background-color="transparent"
            color="#FF1633"
            centered
            class="responsive "
          >
            <v-tab v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              class="texto-hat letra-menu">{{ item.title}}</v-tab>
          </v-tabs>
          </v-col>
        </v-row>
    </v-app-bar>
    <div>
    <v-row class="bnt-float">
      <v-menu
        transition="slide-y-transition"
        z-index="999"
        class="menu-info"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="transparent"
            plain
            v-bind="attrs"
            v-on="on"
          >
            <img src="img/info.svg">
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in info"
            :key="i"
          >
            <v-list-item-title>
              <a :href="item.url" target="_blank"><img :src="item.img" :class="item.class" /></a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    </div>
    <v-navigation-drawer
      v-model="menu"
      app
      temporary
      color="black"
      width="100%"
      class="cabecera"
    >
      <v-list
        dense
        class="text-center"
        width="100%"
        height="90%"
        >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          color="white"
          class="py-10 px-2"
        >
          <v-list-item-title  class="color-texto-rojo menu-cel texto-hat letra-menu py-50 px-2">
          {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-container>
          <v-row>
            <v-col cols="12">
              <p class="texto-opera text-right overline grey--text">Copyright &#169; 2019. Power By En Alg&uacute;n Lugar</p>
            </v-col>
          </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-snackbar
      v-model="snackbar"
      :color = "colorAlert"
      top
    >
      {{ texto }}
    <v-btn
      text
      icon
      @click="snackbar = false"
    >
      <v-icon>fas fa-times</v-icon>
    </v-btn>
    </v-snackbar>
  </div>
  `,
    data() {
        return {
            form: {
                pt_name: '',
                pt_email: '',
                pt_phone: '',
                pt_message: ''
            },
            titulo: 'Promoción',
            message: 'texto de mensaje',
            colorAlert: "error",
            texto: 'Algun campo vacio',
            color: "#04D7D7",
            menu: null,
            dialog: true,
            overlay: false,
            snackbar: false,
            items: [
                { title: 'Inicio', to: "/", divider: true, inset: true },
                { title: 'Modelo de Negocio', to: "/Modelo", divider: true, inset: true },
                { title: 'Inmuebles', to: "/Inmuebles", divider: true, inset: true },
                { title: 'Edificio', to: "/Edificio", divider: true, inset: true },
                { title: 'contacto', to: "/contacto", divider: true, inset: true }
            ],
            info: [
              {
                img: 'img/whatsapp.svg',
                url: 'https://wa.me/573186954148?text=Me%20gustaría%20tener%20mas%20Información%20del%20proyecto',
                class: 'whatsapp'
              },
              {
                img: 'img/iconoubicacion.svg',
                url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2309.2790123094615!2d-74.06974362843692!3d4.629177668645283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a285c4ec52f%3A0xc07ad86c2beeab7c!2sCra.%2013%20%2340C-20%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1572284312526!5m2!1ses-419!2sco'
              },
              /* {
                img: '',
                url: '/#formulario'
              } */
            ]
        }
    },
    mounted() {
        this.validar()
    },
    methods: {
        Enviar() {
            this.overlay = true
            if (this.form.pt_name == '' || this.form.pt_email == '' || this.form.pt_phone == '') {
                this.snackbar = true
                this.overlay = false
            } else {
                fetch('Api/public/Api/Inscription/Post', {
                        method: 'POST',
                        body: JSON.stringify(this.form),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.form = {
                            pt_name: '',
                            pt_email: '',
                            pt_phone: '',
                            pt_message: ''
                        }
                        this.dialog = false
                        sessionStorage.Inscripcion = true
                        this.overlay = false
                        this.snackbar = true
                        this.colorAlert = 'success'
                        this.texto = 'Mensaje Enviado'
                    })
            }
        },
        validar() {
            if (sessionStorage.Inscripcion) {
                this.dialog = false
            } else {
                this.dialog = true
            }
        }
    },
})