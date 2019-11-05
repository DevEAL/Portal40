Vue.component("Cabecera", {
  template: // html
  `
  <div class="cabecera">
    <v-app-bar app color="black" dark height="90px" class="head-portal">
        <v-row cols="12">
          <v-col cols="6" xl="2" lg="2" md="2" sm="6" xs="6" >
            <img src="img/logo_color_h.svg" class="logo-web" height="50px" width="200px"/>
            <img src="img/isotipo_color_m.svg" class="logo-cel" height="60px" width="80px"/>
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
            <v-tab class="texto-hat letra-menu" to="/">Inicio</v-tab>
            <v-tab class="texto-hat letra-menu" to="/Modelo">Modelo de Negocio</v-tab>
            <v-tab class="texto-hat letra-menu" to="/Apartamento">Apartamento</v-tab>
            <v-tab class="texto-hat letra-menu" to="/Edificio">Edificio</v-tab>
            <v-tab class="texto-hat letra-menu" to="/contacto">contacto</v-tab>
          </v-tabs>
          </v-col>
        </v-row>
    </v-app-bar>
    <div>
      <a class="bnt-float" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2309.2790123094615!2d-74.06974362843692!3d4.629177668645283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a285c4ec52f%3A0xc07ad86c2beeab7c!2sCra.%2013%20%2340C-20%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1572284312526!5m2!1ses-419!2sco" target="_black"><img src="img/iconoubicacion.svg"></a>
    </div>
    <div class="white--text">
      <a href="https://api.whatsapp.com/send?phone=5732154159969" class="btn-whatapp" target="_blank"><img src="img/whatsapp.svg"></a></a>
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
    <v-dialog
      v-model="dialog"
      max-width="800"
    >
      <v-card>
        <v-card-title class="headline black white--text texto-opera">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="4" md="4">
              <img src="img/isotipo_color_m.svg" height="60px" width="80px"/>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              {{ titulo }}
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-btn text icon color="white" class="btn" @click="dialog = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
          <v-container class="popup">
            <v-row align="center" justify="center">
              {{ message }}
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  :color="color"
                  label="Nombre"
                  name="Nombre"
                  class="texto-opera"
                  onkeypress="if(this.value.length >= 30){return false}"
                  v-model="form.pt_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  :color="color"
                  label="Correo Electrónico"
                  name="Correo"
                  class="texto-opera "
                  onkeypress="if(this.value.length >= 40){return false}"
                  type="email"
                  v-model="form.pt_email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  :color="color"
                  label="Celular"
                  name="Celular"
                  class="texto-opera"
                  onkeypress="if(this.value.length >= 10){return false}"
                  v-model="form.pt_phone"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  :color="color"
                  label="Mensaje"
                  class="texto-opera"
                  name="Mensaje"
                  v-model="form.pt_message"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="6" sm="3" xs="3">
                <v-row align="center" justify="center">
                  <v-btn class="ma-2 cyan " tile color="indigo" dark @click="Enviar">Enviar</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
      </v-card>
    </v-dialog>
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
      titulo: 'Titulo',
      message: 'texto de mensaje',
      colorAlert: "error",
      texto: 'Algun campo vacio',
      color: "#04D7D7",
      menu: null,
      dialog: true,
      overlay: false,
      snackbar: false,
      items: [
        { title: 'Inicio' , to:"/", divider: true, inset: true},
        { title: 'Modelo de Negocio', to:"/Modelo", divider: true, inset: true },
        { title: 'Apartamento', to:"/Apartamento", divider: true, inset: true },
        { title: 'Edificio', to:"/Edificio", divider: true, inset: true},
        { title: 'contacto', to:"/contacto", divider: true, inset: true}
      ],
    }
  },
  mounted() {
    this.validar()
  },
  methods: {
    Enviar() {
      this.overlay = true
      if (this.form.pt_name == ''  || this.form.pt_email == '' || this.form.pt_phone == ''){
        this.snackbar = true
        this.overlay = false
      } else {
        fetch('Api/public/Api/Inscription/Post',{
          method: 'POST',
          body: JSON.stringify(this.form),
          headers:{
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then( data => {
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
    validar () {
      if (sessionStorage.Inscripcion) {
        this.dialog = false
      } else {
        this.dialog = true
      }
    }
  },
})