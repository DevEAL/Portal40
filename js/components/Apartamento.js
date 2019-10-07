Vue.component("Apartamento", {
    template: // html
    `
    <div>
        <v-row>
            <v-col cols="12" class="white text-center letra_Hat">
                <v-container>
                    <p class="letra_Hat letraTitulo">CONOCE NUESTROS</p>
                </v-container>
            </v-col>
            <v-col cols="12" class="cyan text-center white--text letra_Open letrabaner">
                <v-container>
                    <p class="letra_Hat letraTitulo">APARTAMENTOS</p>
                    <p>3 tipos de vivienda desde 32m2 hasta 63,92m2 de area construida. <br/>El edificio cuenta con areas complementarias para beneficio de sus habitantes. <br/>Dise&#241;o arquitectonico moderno con espacios versatiles y dinamicos.</p>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-justify">
                            <v-col cols="12">
                                <h4 class="color-texto letra_Hat letraTitulo360">APARTAMENTO <br/> 1 ALCOBA</h4>
                            </v-col>
                            <v-col cols="12" class="letra_Open letratexto360 text-justify">
                                <p>Tipo loft, con cocina integral y un baño privado,<br/>esta unidad ofrece privacidad y tranquilidad para<br/>quienes valoran su propio espacio.</p>
                            </v-col>
                            <v-col cols="12" class="letra_Open letratexto360">
                                <p class="color-texto letratexto360">&#193;rea promedio construida:</p>
                                <p class="color-texto letratexto360">Desde</p>
                                <p>32,04 M2 area construida aproximadamente.</p>
                            </v-col>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left">
                            <v-row lg="12">
                                <v-col cols="8">
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="400px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                </v-col>
                                <v-col cols="4">
                                    <div>
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="133px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                    </div>
                                    <div>
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="133px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                    </div>
                                    <div>
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="133px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row lg="12" align="center" justify="center">
                                <a href="" class="ma-2 white--text btn letra_Open   v-btn v-btn--contained theme--light v-size--default cyan btnApartamento">RECORRIDO 360º</a>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="black white--text">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left">
                            <v-col cols="12">
                                <h4 class="color-texto letra_Hat letraTitulo360">APARTAMENTO <br/> 2 ALCOBAS</h4>
                            </v-col>
                            <v-col cols="12" class="letra_Open letratexto360 text-justify">
                                <p>Tipo loft, con cocina integral, además cuenta<br/>con 2 baños, uno ubicado en la habitación<br/>principal para mayor comodidad y privacidad.</p>
                            </v-col>
                            <v-col cols="12" class="letra_Open letratexto360">
                                <p class="color-texto letratexto360">&#193;rea promedio construida:</p>
                                <p class="color-texto letratexto360">Desde</p>
                                <p>52,16 M2 area construida aproximadamente.</p>
                            </v-col>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left">
                            <v-img
                                :src="img2habitaciones"
                                class="white--text"
                                height="400px"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            >
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="12" class="white">
                <v-container>
                    <v-row lg="12">
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left">
                            <v-row lg="12">
                                <v-col cols="12">
                                    <h4 class="color-texto letra_Hat letraTitulo360">APARTAMENTO <br/> 3 ALCOBAS</h4>
                                </v-col>
                                <v-col cols="12" class="letra_Open letratexto360 text-justify">
                                    <p>Tipo loft, con cocina intregal y 2 baños, esta<br/>unidad ofrece un espacio más grande para<br/>aquellos que disfrutan la libertad, también<br/>incluye parqueadero.</p>
                                </v-col>
                                <v-col cols="12" class="letra_Open letratexto360">
                                    <p class="color-texto">&#193;rea promedio construida:</p>
                                    <p class="color-texto">Desde</p>
                                    <p>60,42 M2 area construida aproximadamente.</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="text-left">
                            <v-row lg="12">
                                <v-col cols="8">
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="400px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                </v-col>
                                <v-col cols="4">
                                    <div>
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="133px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                    </div>
                                    <div>
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="133px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                    </div>
                                    <div>
                                    <v-img
                                        :src="img1habitacion"
                                        class="white--text"
                                        height="133px"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row lg="12" align="center" justify="center">
                                <a href="" class="ma-2 white--text btn letra_Open   v-btn v-btn--contained theme--light v-size--default cyan btnApartamento">RECORRIDO 360º</a>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
    `,
    data() {
        return {
            img2habitaciones: "http://localhost:8080/Portal40/img/old-white-brick-wall-background-texture-PN85D8Q.jpg",
            img1habitacion: "http://localhost:8080/Portal40/img/bright-loft-apartment-PX363CC.jpg",
            img3habitaciones: "http://localhost:8080/Portal40/img/bright-loft-apartment-PX363CC.jpg"
        }
    },
})