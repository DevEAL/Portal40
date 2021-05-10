Vue.component("Edificio", {
    template: // html
    `
    <div>
        <v-row>
            <v-col cols="12" class="text-center texto-hat white">
                <v-container fluid class="fondo-Azul mb-5">
                    <h1 class="white--text text-uppercase title-building px-15">Conoce nuestras zonas comunes</h1>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container >
                    <v-row lg="12">
                        <v-col
                            cols="12"
                            lg="4"
                            md="6"
                            v-for="(item,i) in items"
                            :key="i"
                        >
                            <img :src="item.src" class="img-edificio"/>
                            <p class="black--text text-center texto-opera letra-edificio">{{ item.titulo }}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="white color_fondo text-center texto-hat letraTituloE">
                <button @click="estado" class="btn-route360 texto-hat">
                    <h5 class="white--text"><span>RECORRIDO VIRTUAL</span> </br>CONOCE EL EDIFICIO</h5>
                </button>
                <div id="map-building" class="mt-5">
                    <iframe v-if="recorrido" class="recorrido" frameborder="0" scrolling="auto" marginheight="0"
                    marginwidth="0" src="360/edificio/index.htm"></iframe>
                </div>
            </v-col>
            <v-col cols="12" class="white py-15">
                <v-container class="py-15">
                    <v-row lg="12">
                        <v-col cols="12" lg="9">
                            <v-row lg="12" align="center" justify="center">
                                <img src="img/edificio/mapa.png" class="localizacionE"/>
                            </v-row>
                        </v-col>
                            <v-col
                                cols="12" lg="3" 
                                class="d-flex justify-center texto-opera letra-Texto-E lista-edifico"
                            >
                                <ul class="black--text letra-Texto-E">
                                    <li
                                        v-for="(loc,i) in location"
                                        :key="i"
                                        class="mb-5 mr-10"
                                    ><span :class="loc.color" class="fas"></span>{{ loc.text }}</li>
                                </ul>
                            </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
    `,
    data() {
        return {
            recorrido: false,
            items: [
                {
                    src: 'img/edificio/Terraza.webp',
                    titulo: 'Terraza'
                },
                {
                    src: 'img/edificio/CorredorVerde.webp',
                    titulo: 'Corredor Verde'
                },
                {
                    src: 'img/edificio/SalaComun.webp',
                    titulo: 'Sala común'
                },
                {
                    src: 'img/edificio/Lavanderia.webp',
                    titulo: 'Lavanderia'
                },
                {
                    src: 'img/edificio/Vigilancia.webp',
                    titulo: 'Vigilancia 24 horas'
                },
                {
                    src: 'img/edificio/Parqueadero.webp',
                    titulo: 'Parqueadero'
                }
            ],
            location: [
                {
                    color: 'p_orange',
                    text: 'Restaurantes'
                },
                {
                    color: 'p_light-blue',
                    text: 'Hospitales'
                },
                {
                    color: 'p_dark-blue',
                    text: 'Drogueria'
                },
                {
                    color: 'p_blue',
                    text: 'Bancos'
                },
                {
                    color: 'p_green',
                    text: 'Puntos de interes'
                },
                {
                    color: 'p_purple',
                    text: 'Universidades'
                },
                {
                    color: 'p_yellow',
                    text: 'Cajeros'
                },
                {
                    color: 'p_salmon',
                    text: 'Oficinas'
                },
                {
                    color: 'p_red',
                    text: 'Café'
                },
                {
                    color: 'p_dark-purple',
                    text: 'Bares'
                },
                {
                    color: 'p_dark-green',
                    text: 'Policia'
                },
                {
                    color: 'p_pink',
                    text: 'Iglesia'
                },
                {
                    color: 'p_forest',
                    text: 'parques'
                },
            ]
        }
    },
    methods: {
        estado() {
            if (screen.width < 400) {
                window.location.href = "360/edificio/index.htm";
            } else {
                this.recorrido = !this.recorrido
            }
        }
    },
})