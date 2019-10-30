// Declaro constantes de rutas
const Inicio = {
  template: '#index',
}

const Modelo = {
  template: '#modelo'
}

const Apartamento = {
  template: '#apartamento',
}

const Edificio = {
  template: '#edificio'
}

const contacto = {
  template: '#contacto'
}

// abrir rutas a utilizar
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: '/Modelo',
      component: Modelo
    },
    {
      path: '/Apartamento',
      component: Apartamento
    },
    {
      path: '/Edificio',
      component: Edificio
    },
    {
      path: '/contacto',
      component: contacto
    }
  ]
})
// declaro instancia vue
var app = new Vue({
  router,
  el: '#app',
    data: {
    },
vuetify: new Vuetify(),
  mounted() {
  },
}).$mount('#app')