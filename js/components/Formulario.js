Vue.component("Formulario", {
    template: // html
    `
    <div class="form">
        <v-row >
            <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="6" class="fondo-Azul margen" align="center" justify="center">
                <img class="margenDerecha" src="img/formulario/margenDerecha.svg">
                <v-col cols="12" xl="10" lg="10" md="10" sm="10" xs="10" class="fondo-Azul margen_content" >
                    <p class="text-center title-form texto-opera  white--text">¿Interesado en <br/>invertir y/o vivir?</p>
                    <p class="text-center texto-opera white--text texto-form">
                        Puedes visitarnos o escribenos y nosotros te<br/> contactamos para mayor información.
                    </p>
                    <v-row align="center" justify="center">
                        <img src="img/formulario/logo.svg" class="img-Form" />
                    </v-row>
                </v-col>
                <img class="margenIzquierda" src="img/formulario/margenIzquierda.svg">
            </v-col>
            <v-col class="blue-grey lighten-3" cols="12" xl="6" lg="6" md="6" sm="12" xs="6">
                <v-container>
                    <form action="inicio.php" method="POST">
                        <v-col cols="12" sm="8" md="8">
                            <v-text-field
                                :color="color"
                                label="Nombre"
                                name="Nombre"
                                :rules="NombreRules"
                                class="display-1 texto-opera"
                                onkeypress="if(this.value.length >= 30){return false}"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <v-text-field
                                :color="color"
                                label="Correo Electrónico"
                                name="Correo"
                                :rules="CorreoRules"
                                class="display-1 texto-opera "
                                onkeypress="if(this.value.length >= 40){return false}"
                                type="email"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <v-text-field
                                :color="color"
                                label="Celular"
                                name="Celular"
                                :rules="CelularRules"
                                class="display-1 texto-opera"
                                onkeypress="if(this.value.length >= 10){return false}"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <v-textarea
                                :color="color"
                                label="Mensaje"
                                class="display-1 texto-opera"
                                name="Mensaje"
                                required
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <input  type="submit" Value="Enviar" class="ma-2 white--text btn texto-opera title v-btn v-btn--contained theme--light v-size--default cyan btnApartamento">
                        </v-col>
                    </form>
                </v-container>
            </v-col>
        </v-row>
    </div>
    `,
    data() {
        return {
            color: "#04D7D7",
            form: {
                Nombre: '',
                Correo: '',
                Celular: '',
                Mensaje: ''
              },
              CorreoRules: [
                v => !!v || 'Correo Requerido',
                v => /.+@.+\.+/.test || 'Correo Invalido'
              ],
              NombreRules: [
                v => !!v || 'Nombre Requerido',
                v => (v && v.length <= 10) || 'Nombre maximo de 20 letras',
              ],
              CelularRules: [
                v => !!v || 'Celular Requerido',
                v => (v && v.length <= 10) || 'Celular maximo de 10 digitos',
              ],
        }
    }
})