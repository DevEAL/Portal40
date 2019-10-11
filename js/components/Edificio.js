Vue.component("Edificio", {
    template: // html
    `
    <div>
        <v-row>
            <v-col cols="12" class="cyan text-center letra_Hat letraTituloC">
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
                            md="4"
                            sm="12"
                            xs="12"
                            v-for="(item,i) in items"
                            :key="i"
                        >
                            <v-col>
                                <v-img :src="item.src" height="300px" with="100px"/>
                            </v-col>
                            <v-col>
                                <p class="text-center letra_Open letraTextoE">{{ item.titulo }}</p>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="color_fondo text-center letra_Hat letraTituloE">
                <v-container class="white--text">
                    <p>Ubicado en un sector estrat&eacute;gico de Bogot&aacute; muy cerca de gimnasios,<br/>centros culturales, comerciales, empresariales, gastron&oacute;micos y cl&iacute;nicas.</p>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-row lg="12" align="center" justify="center">
                                <img src="http://localhost:8080/Portal40/img/edificio/Asset2.png" class="localizacion"/>
                            </v-row>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="letra_Open letraTextoE">
                            <ul>
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
                    src: 'http://localhost:8080/Portal40/img/edificio/friends-on-the-rooftop-SATFKMX.jpg',
                    titulo: 'Terraza'
                },
                {
                    src: 'http://localhost:8080/Portal40/img/edificio/roofed-office-building-entrance-at-night-PCZQRCE.jpg',
                    titulo: 'Corredor Verde'
                },
                {
                    src: 'http://localhost:8080/Portal40/img/edificio/friends-with-popcorn-and-drinks-talking-at-home-PNJPFZB.jpg',
                    titulo: 'Sala común'
                },
                {
                    src: 'http://localhost:8080/Portal40/img/edificio/laundry-machines-at-laundromat-shop-PWQ2LMD.jpg',
                    titulo: 'Lavanderia'
                },
                {
                    src: 'http://localhost:8080/Portal40/img/edificio/security-camera-P66JM58.jpg',
                    titulo: 'Vigilancia 24 horas'
                },
                {
                    src: 'http://localhost:8080/Portal40/img/edificio/parking-garage-underground-interior-P9N6UAX.jpg',
                    titulo: 'Parqueadero'
                }
            ]
        }
    },
})