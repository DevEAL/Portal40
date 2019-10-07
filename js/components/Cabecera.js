Vue.component("Cabecera", {
  template: // html
  `
  <div>
    <v-app-bar app color="black" dark height="90px" class="headPortal">
        <v-row cols="12">
          <v-col cols="6" xl="2" lg="2" md="2" sm="6" xs="6" >
            <img src="http://localhost:8080/Portal40/img/Asset8.svg" class="responsive" height="50px" width="200px"/>
            <img src="http://localhost:8080/Portal40/img/logoResponsive.svg" class="botonmenu" height="60px" width="80px"/>
          </v-col>
          <v-col cols="6" xl="1" lg="" md="3" sm="6" xs="6" class="text-right botonmenu">
            <v-app-bar-nav-icon class="red--text botonmenu" @click="menu = !menu"></v-app-bar-nav-icon>
          </v-col>
          <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="6">
          <v-tabs
            background-color="transparent"
            color="#FF1633"
            centered
            class="responsive"
          >
            <v-tab class="letra_Hat letra_menu" to="/">Inicio</v-tab>
            <v-tab class="letra_Hat letra_menu" to="/Modelo">Modelo de Negocio</v-tab>
            <v-tab class="letra_Hat letra_menu" to="/Apartamento">Apartamento</v-tab>
            <v-tab class="letra_Hat letra_menu" to="/Edificio">Edificio</v-tab>
            <v-tab class="letra_Hat letra_menu" to="/contacto">contacto</v-tab>
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
          <v-list-item-title  class="color-texto letra_Hat letra_menu py-50 px-2">
          {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-container>
          <v-row>
              <v-col cols="12">
                  <p class="font-italic text-right overline grey--text">Copyright &#169; 2019. Power By En Alg&uacute;n Lugar</p>
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