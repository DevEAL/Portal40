Vue.component("Edificio", {
    template: // html
    `
    <div>
        <v-row>
            <v-col cols="12" class="fondo-Azul text-center texto-hat letra-Titulo-edifico">
                <v-container class="white--text">
                    <p>ADEM&#193;S NUESTRO EDIFICIO CUENTA CON...</p>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container >
                    <v-row lg="12">
                        <v-col
                            cols="12"
                            xl="4"
                            lg="4"
                            md="6"
                            sm="12"
                            xs="12"
                            v-for="(item,i) in items"
                            :key="i"
                        >
                            <v-col>
                                <v-img :src="item.src" class="img-edificio"/>
                                <p class="black--text text-center texto-opera letra-edificio">{{ item.titulo }}</p>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="white color_fondo text-center texto-hat letraTituloE">
                <div class="btn-apartamento texto-hat">
                <a @click="estado"><span>RECORRIDO VIRTUAL</span> CONOCE EL EDIFICIO</a>
                </div>
                <div>
                    <iframe v-if="recorrido" class="recorrido" frameborder="0" scrolling="auto" marginheight="0"
                    marginwidth="0" src="360/edificio/index.htm"></iframe>
                </div>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                            <v-row lg="12" align="center" justify="center">
                                <img src="img/edificio/Asset2.png" class="localizacion"/>
                            </v-row>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" class="texto-opera letra-Texto-E lista-edifico">
                            <ul class="black--text letra-Texto-E">
                                <li class="item1">Restaurantes</li>
                                <li class="item2">Comercio</li>
                                <li class="item3">Servicios bancarios</li>
                                <li class="item4">Zonas verdes</li>
                                <li class="item5">Universidades</li>
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