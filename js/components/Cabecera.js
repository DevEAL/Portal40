Vue.component("Cabecera", {
  template: // html
  `
  <div>
    <v-app-bar app color="black" dark height="90px" class="head-portal">
        <v-row cols="12">
          <v-col cols="6" xl="2" lg="2" md="2" sm="6" xs="6" >
            <img src="http://localhost:8080/Portal40/img/Asset8.svg" class="logo-web" height="50px" width="200px"/>
            <img src="http://localhost:8080/Portal40/img/logoResponsive.svg" class="logo-cel" height="60px" width="80px"/>
          </v-col>
          <v-col cols="6" xl="1" lg="" md="3" sm="6" xs="6" class="text-right boton-menu">
            <v-app-bar-nav-icon class="red--text boton-menu" @click="menu = !menu"></v-app-bar-nav-icon>
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
    <v-navigation-drawer
      v-model="menu"
      app
      temporary
      color="black"
      width="100%"
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
  </div>
  `,
  data() {
    return {
      menu: null,
      items: [
        { title: 'Inicio' , to:"/", divider: true, inset: true},
        { title: 'Modelo de Negocio', to:"/Modelo", divider: true, inset: true },
        { title: 'Apartamento', to:"/Apartamento", divider: true, inset: true },
        { title: 'Edificio', to:"/Edificio", divider: true, inset: true},
        { title: 'contacto', to:"/contacto", divider: true, inset: true}
      ],
    }
  },
})