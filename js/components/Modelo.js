Vue.component("Modelo", {
    template: //html
    `
    <div>
        <v-row class="white">
            <v-col cols="12" class="text-center fondo-Azul">
                <h2 class="title-Model my-10 white--text">AL COMPRAR UNA  unidad inmobiliaria EN PORTAL 40 SE DUEÑO DE TODOS ESTOS NEGOCIOS</h2>
            </v-col>
            <v-col cols="12" class="text-center texto-opera">
                <v-container>
                    <v-row lg="12" class="justify-center">
                        <v-col 
                            v-for="(item, i) in business" :key="i" 
                            cols="12" md="6" lg="4" 
                            class="text-center my-7"
                        >
                            <v-container>
                                <div class="iconosModelo">
                                    <img :src="item.img" class="size__img"/>
                                </div>
                                <div>
                                    <h3 class="color-texto-rojo my-5 title-content">{{ item.title }}</h3>
                                    <p class="text-content" v-html="item.text"></p>
                                </div>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-container>
                <p class="text-left color-texto-azul margenm letra-Texto-resena">* Este ingreso depende sí al momento de entrega se encuentra arrendado.</p>
                <p class="text-left color-texto-rojo margenm letra-Texto-resena">* Los ingresos productos de los diferentes negocios son recaudados y administrados por Administración.</p>
            </v-col>
            <v-col cols="12" class="black text-center white--text">
                <v-container>
                    <h1 class="color-texto-azul texto-hat title-benefit">BENEFICIOS</h1>
                    <p class="texto-opera subtitle-benefic white--text">POR LOS QUE INVERTIR</p>
                    <p class="divisor fondo-Rojo"></p>
                    <ul
                        class="text-left texto-opera lista-Modelo"
                    >
                        <li
                            v-for="(item, i) in benefit" :key="i"
                            v-html="item"></li>
                    </ul>
                    <p class="text-left white--text text-s-benefit">** El descuento total dependerá del resultado de explotación de zonas comunes.</p>
                </v-container>
            </v-col>
        </v-row>
    </div>
    `,
    data() {
        return {
            business: [
                {
                    img: 'img/model/renta.svg',
                    title: 'RENTA',
                    text: 'Recibe ingresos por arriendo de tu unidad<span class="color-texto-azul">*</span>.'
                },
                {
                    img: 'img/model/local.svg',
                    title: 'espacio COMERCIAL 1',
                    text: 'Recibe ingresos por arriendo de espacio comercial sobre la carrera 13, actualmente una inmobiliaria que facilitará el proceso de renta de tu inmueble<span class="color-texto-azul">*</span><span class="color-texto-rojo">*</span>.'
                },
                {
                    img: 'img/model/lavanderia.svg',
                    title: 'lavanderÍa',
                    text: 'Recibe ingresos por servicio de lavado y secado<span class="color-texto-rojo">*</span>.'
                },
                {
                    img: 'img/model/parqueadero.svg',
                    title: 'PArqueadero',
                    text: 'Recibe ingresos por arriendo de los parqueaderos de la copropiedad<span class="color-texto-azul">*</span><span class="color-texto-rojo">*</span>.'
                },
                {
                    img: 'img/model/local2.svg',
                    title: 'espacio COMERCIAL 2',
                    text: 'Recibe ingresos por arriendo de espacio comercial<span class="color-texto-azul">*</span><span class="color-texto-rojo">*</span>.'
                },
            ],
            benefit: [
                'Negocio maduro con mas de 5 años de explotación con éxito.',
                'Con los ingresos a la copropiedad paga solo el 20% del valor de la administración </br><strong>¡AHORRATE EL 80% DE LA CUOTA DE LA ADMINISTRACIÓN! **</strong>',
                'Portal 40 está construido pensando en: estudiantes, profesionales, inversionistas, extranjeros, familias, etc.',
                'Renta inmediata *',
                'Es un activo líquido por ser inmueble.',
                'Se diluye el riesgo de inversión gracias a los negocios que complementan la renta.',
                'Mayor rentabilidad en comparación con productos similares.',
                'No pagas cuota de administración hasta el año 2022.',
                'Posibilidad de trabajar con un operador conocedor del negocio y del sector.',
                'Alta demanda de inmuebles para arriendo.',
                'Posibilidad de arriendo como vivienda turística por medio de aplicaciones.',
                'Vigilancia 24 horas y CCTV',
                'Servicio de conserje para todos los apartamentos.',
                'No inviertas en cortinas, todos los apartamentos se entregan dotados de cortinas.',
            ]
        }
    },
})