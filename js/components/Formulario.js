Vue.component("Formulario", {
    template: // html
    `
    <div class="form" id="formulario">
        <v-row >
            <v-col cols="12" lg="6" class="fondo-Azul margen" align="center" justify="center">
                <img class="margenDerecha" src="img/formulario/margenDerecha.svg">
                <v-col cols="12" lg="10" class="fondo-Azul margen_content" >
                    <h2 class="text-center title-form texto-opera  white--text">¿Interesado en <br/>invertir y/o vivir?</h2>
                    <h4 class="text-center texto-opera white--text texto-form">
                        Puedes visitarnos o escribenos y nosotros te<br/> contactamos para mayor información.
                    </h4>
                    <v-row align="center" justify="center" class="mt-10">
                        <img src="img/formulario/logo.svg" class="img-form" />
                    </v-row>
                </v-col>
                <img class="margenIzquierda" src="img/formulario/margenIzquierda.svg">
            </v-col>
            <v-col class="bg-form my-15" cols="12" lg="6" >
                <v-container>
                    <v-form>
                        <v-col class="size_input">
                            <v-text-field
                                :color="color"
                                label="Nombre"
                                name="Nombre"
                                class="texto-opera"
                                onkeypress="if(this.value.length >= 30){return false}"
                                v-model="form.pt_name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col class="size_input">
                            <v-text-field
                                :color="color"
                                label="Correo Electrónico"
                                name="Correo"
                                class="texto-opera "
                                onkeypress="if(this.value.length >= 40){return false}"
                                type="email"
                                v-model="form.pt_email"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col class="size_input">
                            <v-text-field
                                :color="color"
                                label="Celular"
                                name="Celular"
                                class="texto-opera"
                                onkeypress="if(this.value.length >= 10){return false}"
                                v-model="form.pt_phone"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col class="size_input">
                            <v-textarea
                                :color="color"
                                label="Mensaje"
                                class="texto-opera"
                                name="Mensaje"
                                v-model="form.pt_message"
                                required
                            ></v-textarea>
                        </v-col>
                        <v-col class="d-flex align-start size_input">
                            <v-checkbox
                                :color="color"
                                class="color-icon my-0"
                                name="Mensaje"
                                v-model="form.pt_terms"
                                required
                            ></v-checkbox>
                            <p class="txt__check white--text">Al oprimir “Enviar” acepta la política de datos personales.<br><a href="http://www.estrategiascomerciales.co/habeas-data/" target="_blank" class="white--text txt__check hover-url"> 
                            Política Manejo de Datos Personal / Habeas Data</a></p>
                        </v-col>
                        <v-col class="size_input">
                            <v-btn class="ma-2 cyan btn btn__site" tile color="indigo" dark @click="Enviar">Enviar</v-btn>
                        </v-col>
                    </v-form>
                </v-container>
            </v-col>
            <v-snackbar
                v-model="snackbar"
                color = "error"
                top
            >
                Algun campo vacio
            <v-btn
                text
                icon
                @click="snackbar = false"
            >
                <v-icon>fas fa-times</v-icon>
            </v-btn>
            </v-snackbar>
        </v-row>
    </div>
    `,
    data() {
        return {
            color: "#04D7D7",
            snackbar: false,
            form: {
                pt_name: '',
                pt_email: '',
                pt_phone: '',
                pt_message: '',
                pt_terms: ''
            }
        }
    },
    methods: {
        Enviar() {
            if (this.form.pt_name == ''  || this.form.pt_email == '' || this.form.pt_phone == ''){
                this.snackbar = true
            } else {
                fetch('Api/public/Api/Contact/Post',{
                    method: 'POST',
                    body: JSON.stringify(this.form),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                  .then(res => res.json())
                  .then( data => {
                      this.form = {
                        pt_name: '',
                        pt_email: '',
                        pt_phone: '',
                        pt_message: ''
                      };
                  })
            }
        }
    },
})