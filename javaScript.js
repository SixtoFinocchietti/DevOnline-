const canales=[
    {
        logo: "imagenes/Programación ATS.png",
        nombre: "Programación ATS",
        canal: "https://www.youtube.com/c/ProgramaciónATS",
        suscriptores: "654 k SUSCRIPTORES",
        likes: "15 k likes",
        idioma: "Español",
        lenguaje: ["C++","Python"],
        descripcion: "En este canal podrás encontrar tutoriales didácticos de programación, y ademas temas interesantes en Curiosidades de Programación"
    }, {
        logo: "imagenes/INFORMATICONFIG.jpg",
        nombre: "INFORMATICONFIG",
        canal: "https://www.youtube.com/channel/UCtt69OVnWMAcC5ZEWY0BO5A",
        suscriptores: "64,7 k SUSCRIPTORES",
        likes: "342 likes",
        idioma: "Español",
        lenguaje: ["JavaScript","Java","SQL","python","HTML"],
        descripcion: "¡Bienvenidos a Informaticonfig! En este emocionante rincón cibernético, exploramos el vasto universo de la informática de una manera amigable, accesible y divertida. ¿Eres un apasionado de la tecnología, un entusiasta de la programación, o simplemente alguien curioso por descubrir el mundo digital? ¡Has llegado al lugar correcto! Este canal está diseñado para satisfacer a todos los niveles de experiencia, desde principiantes hasta expertos. Aquí encontrarás: 🖥️ Tutoriales paso a paso: Aprende a programar, configurar herramientas, resolver ejercicios y mucho más. No importa si eres un novato curioso o un experto en busca de nuevos desafíos, en Informaticonfig estamos comprometidos a ayudarte a expandir tus conocimientos y habilidades en el mundo de la informática. No olvides suscribirte, activar las notificaciones y unirte a nosotros en este emocionante viaje hacia el futuro digital. ¡Estamos ansiosos por explorar el mundo de la informática contigo!",
    }, {
        logo: "imagenes/La Geekipedia De Ernesto.png",
        nombre: "La Geekipedia De Ernesto",
        canal: "https://www.youtube.com/@LaGeekipediaDeErnesto",
        suscriptores: "706 k SUSCRIPTORES",
        likes: "20 k likes",
        idioma: "Español",
        lenguaje: ["Java","Python"],
        descripcion: "Tutoriales y cursos de programación - Mi filosofía: Rápido, fácil y sin intros. La calidad es mi religión. Canal de YouTube para aprender a programar / aprender programación.",
    }, {
        logo: "imagenes/pildorasinformaticas.png",
        nombre: "pildorasinformaticas",
        canal: "https://www.youtube.com/@pildorasinformaticas",
        suscriptores: "808 k SUSCRIPTORES",
        likes: "10 k likes",
        idioma: "Español",
        lenguaje: ["C#","C++","SQL","Python","Java","JavaScript", "PHP"],
        descripcion: "Este canal pretende compartir conocimientos informáticos entre todos los integrantes de la comunidad Internet. Se tratarán diversas materias, desde ofimática básica y avanzada hasta programación, pasando por diseño gráfico y web.",
    }
]


    

function mostrarcanales(listacanales=canales){
    let canalhtml="";
    listacanales.forEach((canal)=>{
        canalhtml+=`<div class="card"><div class="column1">`;
        canalhtml+=`<img src="${canal.logo}" alt="${canal.nombre}">`;
        canalhtml+=`<strong><h3> ${canal.nombre} </h3></strong>`;
        canalhtml+=`<p><a href= "${canal.canal}"><img class="suscribirte" src="imagenes/Youtube-Subscribe-Button-Free-PNG-Image.png" alt="Suscribirse"></a>`;
        canalhtml+=`<strong><h2> ${canal.suscriptores} </h2></strong>`;
        canalhtml+=`<p class="like"><img src="imagenes/889221.png" alt="Likes"> ${canal.likes} </p>`;
        canalhtml+=`</div>`;
        canalhtml+=`<div class="column2">`;
        canalhtml+=`<ul>`;
        canal.lenguaje.forEach((lengua)=>{
            canalhtml+=`<li>${lengua}</li>`
        })
        canalhtml+=`</ul>`;
        canalhtml+=`<p>Idioma: <strong>${canal.idioma}</strong></p>`;
        canalhtml+=`<p>
                        Información: ${canal.descripcion}
                    </p>
                </div>
            </div>`;
    });
    document.querySelector(".listado-canales").innerHTML=canalhtml;
}