Vue.component("Apartamento", {
    template: // html
    `
    <div>
        <v-row>
            <v-col cols="12" class="white text-center texto-hat">
                <v-container>
                    <p class="texto-hat color-texto-rojo-rojo letra-titulo-apartamento">CONOCE NUESTROS</p>
                </v-container>
            </v-col>
            <v-col cols="12" class="text-center white--text texto-opera fondo-Azul">
                <v-container>
                    <p class="texto-hat texto-titulo-apartamento">APARTAMENTOS</p>
                    <p class="texto-apartamento">3 tipo de vivienda que son de 1, 2 0 3 alcobas, desde 32m<sup>2</sup> hasta 63,92m<sup>2</sup> de area contruida.</p>
                    <p class="texto-apartamento">Apartamentod desde $180'000.000.</p>
                    <p class="texto-apartamento">El edificio cuenta con zonas comunes para beneficio de sus habitantes.</p>
                    <p class="texto-apartamento">Diseño arquitectonico moderno con espacios versatiles y dinamicos.</p>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left texto-slider">
                            <v-col cols="12">
                                <h4 class="color-texto-rojo-rojo texto-hat letra-titulo-360">APARTAMENTO <br/> 1 ALCOBA</h4>
                            </v-col>
                            <v-col cols="12" class="black--text texto-opera letra-texto-360 text-justify">
                                <p>Tipo loft, con cocina integral y un baño privado, esta unidad ofrece privacidad y tranquilidad para quienes valoran su propio espacio.</p>
                            </v-col>
                            <v-col cols="12" class="texto-opera letra-texto-360">
                                <p class="color-texto-rojo letra-texto-360">&#193;rea promedio construida:</p>
                                <p class="color-texto-rojo letra-texto-360">Desde</p>
                                <p class="black--text">32,04 m<sup>2</sup> area construida aproximadamente.</p>
                            </v-col>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="slider-apartamento">
                            <vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250" fixed-height="400px">
                                <vueper-slide
                                v-for="(slide, i) in slides1"
                                :key="i"
                                :image="slide.src"
                                :infinite="true"
                                ></vueper-slide>
                            </vueper-slides>
                        </v-col>
                    </v-row>
                    <v-row lg="12" align="center" justify="center">
                        <div class="btn-apartamento texto-hat">
                            <a @click="CambiarEstadoUnaHabitaciones"><span>RECORRIDO VIRTUAL 360º</span> APARTAMENTO 1 ALCOBA</a>
                        </div>
                        <div>
                            <iframe v-if="estadoUnaHabitaciones" class="recorrido" frameborder="0" scrolling="auto" marginheight="0"
                            marginwidth="0" src="http://www.visita360.co/360/toures/portal_40/index.htm"></iframe>
                        </div>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="black white--text">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left texto-slider">
                            <v-col cols="12">
                                <h4 class="color-texto-rojo texto-hat letra-titulo-360">APARTAMENTO <br/> 2 ALCOBAS</h4>
                            </v-col>
                            <v-col cols="12" class="texto-opera letra-texto-360 text-justify">
                                <p>Tipo loft, con cocina integral, además cuenta con 2 baños, uno ubicado en la habitación principal para mayor comodidad y privacidad.</p>
                            </v-col>
                            <v-col cols="12" class="texto-opera letra-texto-360">
                                <p class="color-texto-rojo letra-texto-360">&#193;rea promedio construida:</p>
                                <p class="color-texto-rojo letra-texto-360">Desde</p>
                                <p>52,16 m<sup>2</sup> area construida aproximadamente.</p>
                            </v-col>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="slider-apartamento">
                            <vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250" fixed-height="400px">
                                <vueper-slide
                                v-for="(slide, i) in slides2"
                                :key="i"
                                :image="slide.src"
                                :infinite="true"
                                ></vueper-slide>
                            </vueper-slides>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left texto-slider">
                            <v-row lg="12">
                                <v-col cols="12">
                                    <h4 class="color-texto-rojo texto-hat letra-titulo-360">APARTAMENTO <br/> 3 ALCOBAS</h4>
                                </v-col>
                                <v-col cols="12" class="black--text texto-opera letra-texto-360 text-justify">
                                    <p>Tipo loft, con cocina intregal y 2 baños, esta unidad ofrece un espacio más grande para aquellos que disfrutan la libertad, también incluye parqueadero.</p>
                                </v-col>
                                <v-col cols="12" class="texto-opera letra-texto-360">
                                    <p class="color-texto-rojo">&#193;rea promedio construida:</p>
                                    <p class="color-texto-rojo">Desde</p>
                                    <p class="black--text">60,42 m<sup>2</sup> area construida aproximadamente.</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="slider-apartamento">
                            <vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250" fixed-height="400px">
                                <vueper-slide
                                v-for="(slide, i) in slides3"
                                :key="i"
                                :image="slide.src"
                                :infinite="true"
                                ></vueper-slide>
                            </vueper-slides>
                        </v-col>
                    </v-row>
                    <v-row lg="12" align="center" justify="center">
                        <div class="btn-apartamento texto-hat">
                            <a @click="CambiarEstadoTresHabitaciones"><span>RECORRIDO VIRTUAL 360º</span> APARTAMENTO 3 HABITACIONES</a>
                        </div>
                        <div>
                            <iframe v-if="estadoTresHabitaciones" class="recorrido" frameborder="0" scrolling="auto" marginheight="0"
                            marginwidth="0" src="http://www.visita360.co/360/toures/portal_40/index.htm"></iframe>
                        </div>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
    `,
    data() {
        return {
            estadoUnaHabitaciones: false,
            estadoTresHabitaciones: false,
            slides1: [
                {
                  src: 'img/apartamento/1-habitacion.png',
                },
                {
                    src: 'img/apartamento/1-habitacion-2.png',
                },
                {
                    src: 'img/apartamento/1-habitacion-3.png',
                },
                {
                    src: 'img/apartamento/1-habitacion-4.png',
                },
                {
                    src: 'img/apartamento/1-habitacion-5.png',
                },
                {
                    src: 'img/apartamento/1-habitacion-6.png',
                }
              ],
              slides2: [
                {
                    src: 'img/apartamento/2-habitacion-1.png',
                },
                {
                    src: 'img/apartamento/2-habitacion-2.png',
                },
                {
                    src: 'img/apartamento/2-habitacion-3.png',
                },
                {
                    src: 'img/apartamento/2-habitacion-4.png',
                },
                {
                    src: 'img/apartamento/2-habitacion-5.png',
                },
                {
                    src: 'img/apartamento/2-habitacion-6.png',
                }
              ],
              slides3: [
                {
                    src: 'img/apartamento/3-habitacion-1.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-2.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-3.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-4.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-5.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-6.png',
                }
              ]
        }
    },
    methods: {
        CambiarEstadoUnaHabitaciones() {
            if (screen.width < 400) {
                window.location.href = "http://www.visita360.co/360/toures/portal_40/index.htm";
            } else {
                this.estadoUnaHabitaciones = !this.estadoUnaHabitaciones
            }
        },
        CambiarEstadoTresHabitaciones() {
            if (screen.width < 400) {
                window.location.href = "http://www.visita360.co/360/toures/portal_40/index.htm";
            } else {
                this.estadoTresHabitaciones = !this.estadoTresHabitaciones
            }
        }
    },
})