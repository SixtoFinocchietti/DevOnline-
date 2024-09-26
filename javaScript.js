const canales=[
    {
        logoc: "imagenes/Programación ATS.png",
        nombrec: "Programación ATS",
        canal: "https://www.youtube.com/c/ProgramaciónATS",
        suscriptores: "654 k SUSCRIPTORES",
        likes: "15 k likes",
        idioma: "Español",
        lenguaje: ["C++","Python"],
        descripcion: "En este canal podrás encontrar tutoriales didácticos de programación, y ademas temas interesantes en Curiosidades de Programación"
    }, {
        logoc: "imagenes/INFORMATICONFIG.jpg",
        nombrec: "INFORMATICONFIG",
        canal: "https://www.youtube.com/channel/UCtt69OVnWMAcC5ZEWY0BO5A",
        suscriptores: "64,7 k SUSCRIPTORES",
        likes: "342 likes",
        idioma: "Español",
        lenguaje: ["JavaScript","Java","SQL","python","HTML"],
        descripcion: "¡Bienvenidos a Informaticonfig! En este emocionante rincón cibernético, exploramos el vasto universo de la informática de una manera amigable, accesible y divertida. ¿Eres un apasionado de la tecnología, un entusiasta de la programación, o simplemente alguien curioso por descubrir el mundo digital? ¡Has llegado al lugar correcto! Este canal está diseñado para satisfacer a todos los niveles de experiencia, desde principiantes hasta expertos. Aquí encontrarás: 🖥️ Tutoriales paso a paso: Aprende a programar, configurar herramientas, resolver ejercicios y mucho más. No importa si eres un novato curioso o un experto en busca de nuevos desafíos, en Informaticonfig estamos comprometidos a ayudarte a expandir tus conocimientos y habilidades en el mundo de la informática. No olvides suscribirte, activar las notificaciones y unirte a nosotros en este emocionante viaje hacia el futuro digital. ¡Estamos ansiosos por explorar el mundo de la informática contigo!",
    }, {
        logoc: "imagenes/La Geekipedia De Ernesto.png",
        nombrec: "La Geekipedia De Ernesto",
        canal: "https://www.youtube.com/@LaGeekipediaDeErnesto",
        suscriptores: "706 k SUSCRIPTORES",
        likes: "20 k likes",
        idioma: "Español",
        lenguaje: ["Java","Python"],
        descripcion: "Tutoriales y cursos de programación - Mi filosofía: Rápido, Fácil: Accesible para quienes tienen algo de experiencia previa, con recursos abundantes. y sin intros. La calidad es mi religión. Canal de YouTube para aprender a programar / aprender programación.",
    }, {
        logoc: "imagenes/pildorasinformaticas.png",
        nombrec: "pildorasinformaticas",
        canal: "https://www.youtube.com/@pildorasinformaticas",
        suscriptores: "808 k SUSCRIPTORES",
        likes: "10 k likes",
        idioma: "Español",
        lenguaje: ["C#","C++","SQL","Python","Java","JavaScript", "PHP"],
        descripcion: "Este canal pretende compartir conocimientos informáticos entre todos los integrantes de la comunidad Internet. Se tratarán diversas materias, desde ofimática básica y avanzada hasta programación, pasando por diseño gráfico y web.",
    }, {
        logoc: "imagenes/diego moisset de espanes.jpg",
        nombrec: "diego moisset de espanes",
        canal: "https://www.youtube.com/@diegomoissetdeespanes",
        suscriptores: "28,9 k SUSCRIPTORES",
        likes: "17 k likes",
        idioma: "Español",
        lenguaje: ["C#", "C","Python","Java","JavaScript"],
        descripcion: "Se presentan una serie de cursos para iniciarse en la programación teniendo en cuenta los contenidos de los primeros años de universidades e instituciones educativas. Los lenguajes a emplear en un principio serán C, Java, Python, C# y JavaScript. La elección del primer lenguaje a estudiar generalmente viene impuesta por la institución donde estudiamos. Otro ámbito a incursionar son las bases de datos y deberás elegir entre: Microsoft SQL Server, MySQL, Oracle. Es posible luego de haber aprendido los conceptos básicos de lógica y programación iniciarse en la codificación para dispositivos móviles. Por el momento hago mi aporte con el curso de Android con Java (se requiere haber visto el lenguaje Java) Es posible que una vez realizado el curso quieras consultar su contenido en modo texto visitando el sitio: https://www.tutorialesprogramacionya.com/",
    }, {
        logoc: "imagenes/Danisable Programacion2.png",
        nombrec: "Danisable Programacion",
        canal: "https://www.youtube.com/@diegomoissetdeespanes",
        suscriptores: "119 k SUSCRIPTORES",
        likes: "5 k likes",
        idioma: "Español",
        lenguaje: ["C#","C","C++","Python","Java","JavaScript","PHP","SQL","HTML","Swift","Ruby"],
        descripcion: "Canal enfocado a la transmisión de conocimientos informáticos específicamente hablando del desarrollo de software. Hablamos de programación, entornos de desarrollo, software y mucho mas!",
    }, {
      logoc: "imagenes/Shiva Gautam.jpg",
      nombrec: "Shiva Gautam",
      canal: "https://www.youtube.com/@diegomoissetdeespanes",
      suscriptores: "18,2 k SUSCRIPTORES",
      likes: "13,6 k likes",
      idioma: "English",
      lenguaje: ["Python","Java","JavaScript",".NET"],
      descripcion: "I have been an entrepreneur since 2013, and I am currently managing Kangaroo Software Pvt. Ltd., a software development company, as well as Shiva Concept Solution, the number one software technology training institute in Indore. I am very passionate about teaching and helping students. I also created www.shivaconceptdigital.com, an online platform where students can learn programming at an affordable fee structure. Additionally, I developed www.shivatutorials.com, where you can access free and easy-to-follow tutorials.",
    }, {
      logoc: "imagenes/Simplilearn.jpg",
      nombrec: "Simplilearn",
      canal: "https://www.youtube.com/@diegomoissetdeespanes",
      suscriptores: "4,4 M SUSCRIPTORES",
      likes: "256,8 k likes",
      idioma: "English",
      lenguaje: ["Python","Java","JavaScript",".NET", "R","SQL","HTML","C++","C#","TypeScript","Ruby","C","Swift"],
      descripcion: "I have been an entrepreneur since 2013, and I am currently managing Kangaroo Software Pvt. Ltd., a software development company, as well as Shiva Concept Solution, the number one software technology training institute in Indore. I am very passionate about teaching and helping students. I also created www.shivaconceptdigital.com, an online platform where students can learn programming at an affordable fee structure. Additionally, I developed www.shivatutorials.com, where you can access free and easy-to-follow tutorials.",
    }
]


    

function mostrarcanales(listacanales=canales){
    let canalhtml="";
    listacanales.forEach((canal)=>{
        canalhtml+=`<div class="card"><div class="column1">`;
        canalhtml+=`<img src="${canal.logoc}" alt="${canal.nombrec}">`;
        canalhtml+=`<strong><h3> ${canal.nombrec} </h3></strong>`;
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

function aplicarFiltroc() 
{
    let canalesFiltrados; //Creamos una variable para ir guardando los canales que cumplen con los filtros aplicados
  
    document.querySelectorAll('input[type="radio"]').forEach((idioma) => { //Seleccionamos TODOS los radio button
      if (idioma.checked) { //Nos fijamos que radio button están seleccionados
        canalesFiltrados = canales.filter((canal) => { //aplicamos un filtro de que el idioma del array coincida con el valor seleccionado
          return canal.idioma === idioma.value;
        });
        console.log(idioma.value); //Esto es para imprimir por consola...se puede eliminar
      }
    });
  
    document.querySelectorAll('input[type="checkbox"]').forEach((progLeng) => { //Nos traemos TODOS los inputs y vamos input por input recorriendolos
      if (progLeng.checked) { //Si el input esta checkeado
        console.log(progLeng.value); //Esto es para imprimir por consola...se puede eliminar
        canalesFiltrados = canalesFiltrados.filter((canal) => { //Tomamos los canales filtrados anteriormente y ahora los filtramos por lenguaje de programación 
          return canal.lenguaje.includes(progLeng.value); //Ejemplo de includes sencillos https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        });
      }
    });
    mostrarcanales(canalesFiltrados);
}

const infos=[
    {
    logoi:"imagenes/Python-Symbol.png",
    nombrei:"Python",
    dificultad: "Rookies: Ideal para principiantes, con sintaxis clara y fácil de entender.",
    uso:["Desarrollo web (Django, Flask)", "Ciencia de datos y análisis (Pandas, NumPy)", "Inteligencia artificial y aprendizaje automático", "Automatización de tareas"],
    }, 
    {
    logoi:"imagenes/JavaScript-Symbol.png",
    nombrei:"JavaScript",
    dificultad: "Fácil: Accesible para quienes tienen algo de experiencia previa, con recursos abundantes.",
    uso:["Desarrollo web (frontend y backend con Node.js)", "Desarrollo de aplicaciones móviles (React Native)", "Interacción en el navegador"],
    },
    {
    logoi:"imagenes/Java-Logo.png",
    nombrei:"Java",
    dificultad: "Intermedio: Requiere mayor comprensión de conceptos de programación y puede ser más complejo.",
    uso:["Desarrollo de aplicaciones empresariales", "Desarrollo de aplicaciones Android", "Servidores y aplicaciones web (Spring)"],
    },
    {
    logoi:"imagenes/C_Logo.png",
    nombrei:"C",
    dificultad: "Difícil: Necesita un buen entendimiento de programación y puede ser más desafiante para los nuevos aprendices.",
    uso:["Sistemas operativos", "Controladores de hardware", "Aplicaciones de alto rendimiento"],
   },
   {
    logoi:"imagenes/Logo_Csharp.png",
    nombrei:"C#",
    dificultad: "Intermedio: Requiere mayor comprensión de conceptos de programación y puede ser más complejo.",
    uso:["Desarrollo de aplicaciones de escritorio", "Desarrollo de videojuegos (Unity)", "Aplicaciones web (ASP.NET)"],
    },
    {
    logoi:"imagenes/C++_Logo.png",
    nombrei:"C++",
    dificultad: "Difícil: Necesita un buen entendimiento de programación y puede ser más desafiante para los nuevos aprendices.",
    uso:["Desarrollo de software de sistemas", "Juegos y motores de videojuegos", "Aplicaciones de alto rendimiento"],
    },
    {
    logoi:"imagenes/Sql_logo.png",
    nombrei:"SQL",
    dificultad: "Fácil: Accesible para quienes tienen algo de experiencia previa, con recursos abundantes.",
    uso:["Gestión y manipulación de bases de datos", "Análisis de datos", "Consultas y reportes en aplicaciones"],
    }, 
    {
    logoi:"imagenes/NET_Logo.png",
    nombrei:".NET",
    dificultad: "Intermedio: Requiere mayor comprensión de conceptos de programación y puede ser más complejo.",
    uso:["Desarrollo de aplicaciones empresariales", "Aplicaciones web (ASP.NET)", "Desarrollo de servicios web y APIs"],
    },
    {
    logoi:"imagenes/php-logo.png",
    nombrei:"PHP",
    dificultad: "Fácil: Accesible para quienes tienen algo de experiencia previa, con recursos abundantes.",
    uso:["Desarrollo web del lado del servidor", "Sistemas de gestión de contenido (WordPress)", "Aplicaciones web dinámicas"],
    },
    {
    logoi:"imagenes/Ruby-logo.png",
    nombrei:"Ruby",
    dificultad: "Fácil: Accesible para quienes tienen algo de experiencia previa, con recursos abundantes.",
    uso:["Desarrollo web (Ruby on Rails)", "Prototipado rápido", "Automatización de tareas"],
    },
    {
    logoi:"imagenes/R_logo.png",
    nombrei:"R",
    dificultad: "Intermedio: Requiere mayor comprensión de conceptos de programación y puede ser más complejo.",
    uso:["Análisis estadístico", "Visualización de datos", "Ciencia de datos"],
    },
    {
    logoi:"imagenes/Typescript_logo.png",
    nombrei:"TypeScript",
    dificultad: "Intermedio: Requiere mayor comprensión de conceptos de programación y puede ser más complejo.",
    uso:["Desarrollo web (aplicaciones de gran escala)", "Mejora de la mantenibilidad de código JavaScript.", "Desarrollo de aplicaciones móviles (React Native)"],
    },
    {
    logoi:"imagenes/Swift-Logo.png",
    nombrei:"Swift",
    dificultad: "Fácil: Accesible para quienes tienen algo de experiencia previa, con recursos abundantes.",
    uso:["Desarrollo de aplicaciones para iOS y macOS", "Desarrollo de aplicaciones de escritorio", "Juegos en plataformas Apple"],
    },
    {
    logoi:"imagenes/HTML5-logo.png",
    nombrei:"HTML",
    dificultad: "Fácil: Accesible para quienes tienen algo de experiencia previa, con recursos abundantes.",
    uso:["Estructura del contenido web", "Presentación básica", "Integración de otros elementos", "Creación de páginas web estáticas"],
    }
       
]



function mostrarinfo(listainfos=infos){
  let infoshtml="";
  listainfos.forEach((infos)=>{
      infoshtml+=`<div class="card"><div class="column1">`;
      infoshtml+=`<img class="imginfojava" src="${infos.logoi}" alt="${infos.nombrei} logo">`;
      infoshtml+=`<strong><h2> ${infos.nombrei} </h2></strong>`;
      infoshtml+=`</div>`;
      infoshtml+=`<div class="column2">`;
      infoshtml+=`<p>Dificultad:</p> <p><strong>${infos.dificultad}</strong></p>`;
      infoshtml+=`<p>Uso:</p> <ul>`;
      infos.uso.forEach((dific)=>{
        infoshtml+=`<li><strong>${dific}</strong></li>`
      })
      infoshtml+=`</ul>`;
      infoshtml+=`
              </div>
          </div>`;
  });

  document.querySelector(".listado-infos").innerHTML=infoshtml;
}

function aplicarFiltroi() 
{
  let infoFiltrados; //Creamos una variable para ir guardando los canales que cumplen con los filtros aplicados

  document.querySelectorAll('input[type="radio"]').forEach((progDifi) => { //Nos traemos TODOS los inputs y vamos input por input recorriendolos
    if (progDifi.checked) { //Si el input esta checkeado
      console.log(progDifi.value); //Esto es para imprimir por consola...se puede eliminar
      infoFiltrados = infos.filter((info) => { //Tomamos los canales filtrados anteriormente y ahora los filtramos por lenguaje de programación 
        return info.dificultad.includes(progDifi.value); //Ejemplo de includes sencillos https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
      });
    }
  });
  mostrarinfo(infoFiltrados);
}
