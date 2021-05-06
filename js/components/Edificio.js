Vue.component("Edificio", {
    template: // html
    `
    <div>
        <v-row>
            <v-col cols="12" class="fondo-Azul text-center texto-hat letra-Titulo-edifico">
                <v-container>
                    <p class="white--text">ADEM&#193;S NUESTRO EDIFICIO CUENTA CON...</p>
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
                <div>
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
                    src: 'img/edificio/terraza.jpg',
                    titulo: 'Terraza'
                },
                {
                    src: 'img/edificio/Corredor.jpg',
                    titulo: 'Corredor Verde'
                },
                {
                    src: 'img/edificio/Sala.jpg',
                    titulo: 'Sala común'
                },
                {
                    src: 'img/edificio/Lavanderia.jpg',
                    titulo: 'Lavanderia'
                },
                {
                    src: 'img/edificio/Vigilancia.jpg',
                    titulo: 'Vigilancia 24 horas'
                },
                {
                    src: 'img/edificio/Parqueadero.jpg',
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