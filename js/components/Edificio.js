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
                                <v-img :src="item.src" height="300px" with="100px"/>
                            </v-col>
                            <v-col>
                                <p class="black--text text-center texto-opera letra-edificio">{{ item.titulo }}</p>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="white color_fondo text-center texto-hat letraTituloE">
                <div class="btn-apartamento texto-hat">
                <a href="" target="_blank"><span>RECORRIDO VIRTUAL</span> CONOCE EL EDIFICIO</a>
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
                        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" class="texto-opera letraTextoE">
                            <ul class="black--text letra-edificio ">
                                <li>Restaurantes</li>
                                <li>Comercio</li>
                                <li>Servicios bancarios</li>
                                <li>Zonas verdes</li>
                                <li>Universidades</li>
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
            items: [
                {
                    src: 'img/edificio/friends-on-the-rooftop-SATFKMX.jpg',
                    titulo: 'Terraza'
                },
                {
                    src: 'img/edificio/roofed-office-building-entrance-at-night-PCZQRCE.jpg',
                    titulo: 'Corredor Verde'
                },
                {
                    src: 'img/edificio/friends-with-popcorn-and-drinks-talking-at-home-PNJPFZB.jpg',
                    titulo: 'Sala común'
                },
                {
                    src: 'img/edificio/laundry-machines-at-laundromat-shop-PWQ2LMD.jpg',
                    titulo: 'Lavanderia'
                },
                {
                    src: 'img/edificio/security-camera-P66JM58.jpg',
                    titulo: 'Vigilancia 24 horas'
                },
                {
                    src: 'img/edificio/parking-garage-underground-interior-P9N6UAX.jpg',
                    titulo: 'Parqueadero'
                }
            ]
        }
    },
})