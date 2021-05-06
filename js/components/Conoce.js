Vue.component("Conoce", {
    template: // html
    `
    <v-container fluid white id="home__conoce">
      <v-row>
        <v-col cols="12" class="white color_fondo text-center texto-hat letraTituloE">
          <button @click="estateRoute360" class="btn-route360 texto-hat">
          <h5 class="white--text"><span>RECORRIDO VIRTUAL 360º</span></br> CONOCE EL EDIFICIO</h5>
          </button>
          <div>
            <iframe v-if="recorrido" class="recorrido" frameborder="0" scrolling="auto" marginheight="0"
            marginwidth="0" src="360/edificio/index.htm"></iframe>
          </div>
        </v-col>
        <v-col class="d-flex flex-column justify-center my-10 txt-know-us">
          <div>
            <h1 class="text-center mb-10">CONOCE <span>PORTAL 40</span></h1>
            <div class="line__title mb-10"></div>
          </div>
          <div class="size-list">
            <ul v-for="(item, i) in list" :key="i">
              <li v-html="item"></li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-contanier>
    `,
    data() {
      return {
        recorrido: false,
        list: [
          "<v-icon class='point-red fas fa-circle'></v-icon>Portal 40 te permitirá <strong>maximizar tu inversión,</strong> valorizándola y generándote diferentes ingresos ya que implementa un novedoso concepto de  <strong>5 negocios en 1 comprobados y consolidados.</strong>",
          "<v-icon class='point-red fas fa-circle'></v-icon>Es el lugar ideal para <strong>invertir en tu futuro,</strong> es el lugar ideal para vivir cerca de todo.",
          "<v-icon class='point-red fas fa-circle'></v-icon>Portal 40 es un edificio de inmuebles <strong>ubicado estratégicamente en Chapinero.<strong>",
          "<v-icon class='point-red fas fa-circle'></v-icon>El edificio está <strong>pensado para tu comodidad</strong> mejorando tu movilidad, reduciéndote el tiempo de desplazamiento para que puedas utilizarlo en lo que más te gusta. Lo logra con su ubicación estratégica y con variada oferta de transporte público, diferentes vías de acceso, cicloruta y mucho más.",
          "<v-icon class='point-red fas fa-circle'></v-icon>Edificio de <strong>78 unidades</strong>",
          "<v-icon class='point-red fas fa-circle'></v-icon><strong>RPH</strong> creada en <strong>2021</strong>",
        ]
      }
    },
    methods: {
      estateRoute360() {
        if (screen.width < 400) {
            window.location.href = "360/edificio/index.htm";
        } else {
            this.recorrido = !this.recorrido
        }
    }
    },
  })

/* 
<a href="360/edificio/index.htm" target="_blank" class="btn-route360 texto-hat">
  <h5 class="white--text"><span>RECORRIDO VIRTUAL 360º</span></br> CONOCE EL EDIFICIO</h5>
</a>
*/