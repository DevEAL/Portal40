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