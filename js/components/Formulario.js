Vue.component("Formulario", {
    template: // html
    `
    <div>
        <v-row >
            <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="6" class="color_fondo1 margen" align="center" justify="center">
                <v-col cols="12" xl="10" lg="10" md="4" sm="4" xs="4" class="color_fondo1 margen_content" >
                    <p class="text-center title_form letra_Open white--text">&#191;Interesado en invertir?</p>
                    <p class="text-center letra_Open white--text">
                        Puedes visitarnos o escr&iacute;benos y nosotros te contactamos para mayor informaci&oacute;n.
                    </p>
                    <v-row align="center" justify="center">
                        <img src="http://localhost:8080/Portal40/img/Asset9.svg" class="img_Form" />
                    </v-row>
                </v-col>
            </v-col>
            <v-col class="blue-grey lighten-3" cols="12" xl="6" lg="6" md="6" sm="12" xs="6">
                <v-container>
                    <form action="inicio.php" method="POST">
                        <v-col cols="12" sm="8" md="8">
                            <v-text-field
                                class="letra_Open"
                                :color="color"
                                label="Nombre"
                                name="Nombre"
                                :rules="NombreRules"
                                class="display-1"
                                onkeypress="if(this.value.length >= 30){return false}"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <v-text-field
                                class="letra_Open"
                                :color="color"
                                label="Correo Electronico"
                                name="Correo"
                                :rules="CorreoRules"
                                class="display-1"
                                onkeypress="if(this.value.length >= 40){return false}"
                                type="email"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <v-text-field
                                class="letra_Open"
                                :color="color"
                                label="Celular"
                                name="Celular"
                                :rules="CelularRules"
                                class="display-1"
                                onkeypress="if(this.value.length >= 10){return false}"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <v-textarea
                                class="letra_Open"
                                :color="color"
                                label="Mensaje"
                                class="display-1"
                                name="Mensaje"
                                required
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <input  type="submit" Value="Enviar" class="ma-2 white--text btn letra_Open title v-btn v-btn--contained theme--light v-size--default cyan btnApartamento letra_Open">
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