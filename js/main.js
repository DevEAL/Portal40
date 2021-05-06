// Declaro constantes de rutas
const Inicio = {
  template: '#index',
}

const Modelo = {
  template: '#modelo'
}

const Inmuebles = {
  template: '#inmuebles',
}

const Edificio = {
  template: '#edificio'
}

const contacto = {
  template: '#contacto'
}

// abrir rutas a utilizar
const router = new VueRouter({
  // mode: 'history',
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
      path: '/Inmuebles',
      component: Inmuebles
    },
    {
      path: '/Edificio',
      component: Edificio
    },
    {
      path: '/contacto',
      component: contacto
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
// declaro instancia vue
var app = new Vue({
  router,
  el: '#app',
    data: {
    },
  vuetify: new Vuetify(),
}).$mount('#app')