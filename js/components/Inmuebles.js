Vue.component("Inmuebles", {
    template: // html
    `
    <div>
        <v-row>
            <v-col cols="12" class="white text-center texto-hat">
                <v-container class="mt-10">
                    <h1 class="texto-hat title-know-state letter--spacing">CONOCE NUESTROS</h1>
                </v-container>
            </v-col>
            <v-col cols="12" class="text-center white--text texto-opera fondo-Azul">
                <v-container>
                    <h2 class="texto-hat title-state mb-6">INMUEBLES</h2>
                    <p class="text-state white--text">3 tipo de vivienda que son de 1, 2 o 3 alcobas, desde 32m<sup>2</sup> hasta 63,92m<sup>2</sup> de área contruida.</p>
                    <p class="text-state white--text">Inmuebles desde $180'000.000.</p>
                    <p class="text-state white--text">El edificio cuenta con zonas comunes para beneficio de sus habitantes.</p>
                    <p class="text-state white--text">Diseño arquitectónico moderno con espacios versátiles y dinámicos.</p>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row col="12" class="align-center">
                        <v-col cols="12" md="6" class="text-left texto-slider">
                            <v-col cols="12">
                                <h4 class="texto-hat title-tipo letter--spacing">TIPOLOGÍA 1 HABITACIÓN</h4>
                            </v-col>
                            <v-col cols="12" class="black--text texto-opera letra-texto-360 text-justify">
                                <p class="text-tipo">Tipo loft, con cocina integral y un baño privado, esta unidad ofrece privacidad y tranquilidad para quienes valoran su propio espacio.</p>
                            </v-col>
                            <v-col cols="12" class="texto-opera text-tipo">
                                <p class="color-texto-rojo">Área promedio construida:</p>
                                <p class="color-texto-rojo">Desde</p>
                                <p class="black--text">32,04 m<sup>2</sup> area construida aproximadamente.</p>
                            </v-col>
                        </v-col>
                        <v-col cols="12" md="6" class="">
                            <v-container
                                class="spacing-playground white"
                                fluid
                                id="carouselBlock"
                            >
                                <v-carousel
                                    hide-delimiters
                                    class="carousel__40 carousel__state"
                                    height="inherit"
                                >
                                    <v-carousel-item
                                        v-for="(item,i) in slides1"
                                        :key="i"
                                        :src="item.src"
                                        reverse-transition="fade-transition"
                                        transition="fade-transition"
                                    ></v-carousel-item>
                                </v-carousel>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row col="12" class="justify-center align-center pb-15">
                        <button @click="CambiarEstadoUnaHabitaciones" class="btn-route360 texto-hat">
                            <h5 class="white--text"><span>RECORRIDO VIRTUAL 360º</span></br> INMUEBLE 1 HABITACIÓN</h5>
                        </button>
                        
                        <div>
                            <iframe v-if="estadoUnaHabitaciones" class="recorrido" frameborder="0" scrolling="auto" marginheight="0"
                            marginwidth="0" src="360/1Habitacion/index.htm"></iframe>
                        </div>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="black">
                <v-container>
                    <v-row lg="12" class="align-center">
                        <v-col cols="12" md="6" class="text-left texto-slider">
                            <v-col cols="12">
                                <h4 class="color-texto-rojo texto-hat title-tipo letter--spacing">TIPOLOGÍA 2 HABITACIONES</h4>
                            </v-col>
                            <v-col cols="12" class="texto-opera letra-texto-360 text-justify">
                                <p class="white--text text-tipo">Tipo loft, con cocina integral, además cuenta con 2 baños, uno ubicado en la habitación principal para mayor comodidad y privacidad.</p>
                            </v-col>
                            <v-col cols="12" class="texto-opera text-tipo">
                                <p class="color-texto-rojo letra-texto-360">&#193;rea promedio construida:</p>
                                <p class="color-texto-rojo letra-texto-360">Desde</p>
                                <p class="white--text">52,16 m<sup>2</sup> area construida aproximadamente.</p>
                            </v-col>
                        </v-col>
                        <v-col cols="12" md="6" class="">
                            <v-container
                                class="spacing-playground"
                                fluid
                                id="carouselBlock"
                            >
                                <v-carousel
                                    hide-delimiters
                                    class="carousel__40 carousel__state"
                                    height="inherit"
                                >
                                    <v-carousel-item
                                        v-for="(item,i) in slides2"
                                        :key="i"
                                        :src="item.src"
                                        reverse-transition="fade-transition"
                                        transition="fade-transition"
                                    ></v-carousel-item>
                                </v-carousel>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row lg="12" class="align-center">
                        <v-col cols="12" md="6" class="text-left texto-slider">
                            <v-row lg="12">
                                <v-col cols="12">
                                    <h4 class="color-texto-rojo texto-hat title-tipo letter--spacing">TIPOLOGÍA 3 HABITACIONES</h4>
                                </v-col>
                                <v-col cols="12" class="black--text texto-opera text-justify">
                                    <p class="text-tipo">Tipo loft, con cocina intregal y 2 baños, esta unidad ofrece un espacio más grande para aquellos que disfrutan la libertad, también incluye parqueadero.</p>
                                </v-col>
                                <v-col cols="12" class="texto-opera text-tipo">
                                    <p class="color-texto-rojo">Área promedio construida:</p>
                                    <p class="color-texto-rojo">Desde</p>
                                    <p class="black--text">60,42 m<sup>2</sup> área construida aproximadamente.</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="6" class="">
                            <v-container
                                class="spacing-playground"
                                fluid
                                id="carouselBlock"
                            >
                                <v-carousel
                                    hide-delimiters
                                    class="carousel__40 carousel__state"
                                    height="inherit"
                                >
                                    <v-carousel-item
                                        v-for="(item,i) in slides3"
                                        :key="i"
                                        :src="item.src"
                                        reverse-transition="fade-transition"
                                        transition="fade-transition"
                                    ></v-carousel-item>
                                </v-carousel>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row lg="12" align="center" justify="center">
                        <button @click="CambiarEstadoTresHabitaciones" class="btn-route360 texto-hat">
                            <h5 class="white--text"><span>RECORRIDO VIRTUAL 360º</span></br> INMUEBLE 3 HABITACIONES</h5>
                        </button>
                        <div>
                            <iframe v-if="estadoTresHabitaciones" class="recorrido" frameborder="0" scrolling="auto" marginheight="0"
                            marginwidth="0" src="360/3Habitaciones/index.htm"></iframe>
                        </div>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <v-container white fluid class="mx-0 pt-15">
            <div class="red--line"></div>
        </v-container>
    </div>
    `,
    data() {
        return {
            anchos: '400px',
            estadoUnaHabitaciones: false,
            estadoTresHabitaciones: false,
            slides1: [
                {
                    src: 'img/apartamento/1-habitacion-3.png',
                },
                {
                  src: 'img/apartamento/1-habitacion.png',
                },
                {
                    src: 'img/apartamento/1-habitacion-2.png',
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
                    src: 'img/apartamento/3-habitacion-3.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-2.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-5.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-4.png',
                },
                {
                    src: 'img/apartamento/3-habitacion-6.png',
                }
              ]
        }
    },
    mounted() {
        if (screen.width < 400) {
        this.anchos = '350px'
        } else {
        this.anchos = '400px'
        }
    },
    methods: {
        CambiarEstadoUnaHabitaciones() {
            if (screen.width < 400) {
                window.location.href = "360/1Habitacion/index.htm";
            } else {
                this.estadoUnaHabitaciones = !this.estadoUnaHabitaciones
            }
        },
        CambiarEstadoTresHabitaciones() {
            if (screen.width < 400) {
                window.location.href = "360/3Habitaciones/index.htm";
            } else {
                this.estadoTresHabitaciones = !this.estadoTresHabitaciones
            }
        }
    },
})

/* 
<vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250" :fixed-height="anchos">
    <vueper-slide
    v-for="(slide, i) in slides1"
    :key="i"
    :image="slide.src"
    :infinite="true"
    ></vueper-slide>
</vueper-slides>

<vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250" :fixed-height="anchos">
    <vueper-slide
    v-for="(slide, i) in slides2"
    :key="i"
    :image="slide.src"
    :infinite="true"
    ></vueper-slide>
</vueper-slides>

<vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250" :fixed-height="anchos">
    <vueper-slide
    v-for="(slide, i) in slides3"
    :key="i"
    :image="slide.src"
    :infinite="true"
    ></vueper-slide>
</vueper-slides>
*/