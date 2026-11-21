export const perfil = {
  nombre: "Jhon Jairo González",
  titulo: "Ingeniero de Sistemas | Desarrollador Full Stack",
  descripcion: "Ingeniero de Sistemas y Técnico en Programación de Software. He construido soluciones en los sectores energético, ambiental y tecnológico, destacando mi experiencia con React, Tailwind CSS, Python (Django) y C# / ASP.NET. Me apasiona programar, aprender nuevas tecnologías y aportar ideas que generen impacto real. Busco seguir creciendo como desarrollador Full Stack.",
  email: "gonzalezsanchezjhonjairo1@gmail.com",
  telefono: "310 652 2234",
  ubicacion: "Barranquilla, Atlántico",
  github: "https://github.com/jhongonzalezs",
  linkedin: "https://www.linkedin.com/in/jhon-gonzalez-web-developer/",
  cvUrl: `${import.meta.env.BASE_URL}PDF/CV_Jhon_Jairo_Gonzalez_v0.1.9.2.pdf`,
};

export const skills = {
  tecnicas: [
    { nombre: "Frontend (React, Angular, Astro)", nivel: 80 },
    { nombre: "Backend (NestJS, Express, Node.js)", nivel: 70 },
    { nombre: "Python (Django, FastAPI)", nivel: 75 },
    { nombre: "C# / .NET (ASP.NET)", nivel: 65 },
    { nombre: "Java (Spring Boot)", nivel: 40 },
    { nombre: "Bases de Datos SQL (PostgreSQL, MySQL, SQL Server)", nivel: 80 },
    { nombre: "Bases de Datos NoSQL (MongoDB, Firebase)", nivel: 70 },
    { nombre: "Estilos y UI (Tailwind, CSS)", nivel: 75 },
    { nombre: "DevOps y Nube (Docker, Kubernetes, AWS S3)", nivel: 60 },
    { nombre: "Control de Versiones (Git, GitHub)", nivel: 85 },
    { nombre: "Herramientas y API (Postman, Bruno, Swagger)", nivel: 85 },
    { nombre: "Otros (Linux, Jira, Excel)", nivel: 70 },
  ],
  blandas: [
    { nombre: "Trabajo en equipo", nivel: 90 },
    { nombre: "Iniciativa", nivel: 85 },
    { nombre: "Creatividad", nivel: 95 },
    { nombre: "Liderazgo", nivel: 70 },
    { nombre: "Responsabilidad", nivel: 100 },
    { nombre: "Comunicación", nivel: 85 },
    { nombre: "Adaptabilidad", nivel: 90 },
    { nombre: "Pensamiento crítico", nivel: 85 },
    { nombre: "Resolución de problemas", nivel: 95 },
  ],
};

export const experiencia = [
  {
    cargo: "Desarrollador Full Stack",
    empresa: "DevelopApp",
    periodo: "Ago 2025 - Sep 2026 (1 año 2 meses)",
    logros: [
      "Desarrollo y mantenimiento de aplicaciones empresariales para el sector energético.",
      "Participación en el proyecto <a href='https://lisaassistance.terpel.com/' target='_blank' rel='noreferrer' class='text-brand hover:underline font-semibold'>Lisa Assistance</a> para Terpel. API construida en Python (Django) y frontend en React. Almacenamiento en AWS S3, base de datos PostgreSQL y uso de Docker para levantar el entorno local.",
      "Implementación de mejoras en software de investigación para la <a href='https://www.uniatlantico.edu.co/departamento-de-investigaciones/grupos-de-investigacion/' target='_blank' rel='noreferrer' class='text-brand hover:underline font-semibold'>Universidad del Atlántico</a> aplicando SSD (Spec-Driven Development) con asistencia de Claude. Se refactorizó una arquitectura MPA (Multi Page Application) en Angular a SPA (Single Page Application) para mejorar la velocidad de carga.",
      "Colaboración en equipos ágiles utilizando Jira, Git y GitHub para control de versiones y pull requests.",
    ],
  },
  {
    cargo: "Desarrollador Web",
    empresa: "Megaleasing Corp.",
    periodo: "Ene 2025 - Jul 2025 (6 meses)",
    logros: [
      "Diseño y desarrollo completo de la página web corporativa desde cero, enfocada en los servicios de alquiler de equipos de limpieza (Mega Vector).",
      "Implementación de una interfaz moderna y responsiva para mejorar la presencia digital de la empresa.",
      "Desarrollo de una plataforma tipo Airbnb para alquiler de objetos y servicios, con frontend en React, backend en ASP.NET (C#) y base de datos SQL Server, gestionando usuarios, productos y reservas.",
      "Resultado: <a href='https://megaleasing-corp.vercel.app' target='_blank' rel='noreferrer' class='text-brand hover:underline font-semibold'>megaleasing-corp.vercel.app</a>",
    ],
  },
  {
    cargo: "Desarrollador de Software & Analista de Datos",
    empresa: "Tiendas Locales (Freelance)",
    periodo: "2022 - 2024 (Proyectos independientes)",
    logros: [
      "Desarrollo de un sistema de punto de venta y análisis de datos a medida para tiendas locales sin acceso a internet.",
      "Creación de una aplicación de escritorio ultraligera utilizando Tauri y SQLite para garantizar su funcionamiento en laptops de bajos recursos.",
      "Implementación de módulos de recolección de datos para identificar productos más vendidos, clientes frecuentes y comportamiento de compra.",
      "Generación de reportes locales que permitieron a los dueños de las tiendas tomar decisiones basadas en datos sin depender de la nube.",
    ],
  },
  {
    cargo: "Desarrollador de Software",
    empresa: "Comco - Proyecto Universitario",
    periodo: "2023 - 2024 (Proyecto académico)",
    logros: [
      "Desarrollo de una plataforma web de subastas en línea para emprendedores y empresas, como parte de un proyecto universitario con financiación gubernamental.",
      "Inicialmente construido con Angular (frontend y backend) y MySQL (Workbench). A mitad del proyecto, la intervención de una empresa externa (Mangus) impuso el uso de un CMS (Joomla), lo que generó dificultades técnicas y llevó a la deserción del equipo y a la pausa del proyecto.",
      "Aplicación de conocimientos en React, Node.js y bases de datos relacionales en fases tempranas.",
    ],
  },
  {
    cargo: "Desarrollador Freelance",
    empresa: "Proyectos Independientes (SENA)",
    periodo: "2018 - 2020 (Época de estudiante)",
    logros: [
      "Mantenimiento de plataformas con Java SpringBoot y SpringWeb en proyectos pequeños.",
      "Desarrollo de e-commerce con WordPress para un hotel en Barranquilla, realizando cambios de componentes y personalización.",
      "Diseño de mockups en Figma para landing pages en HTML5, CSS3 y JavaScript vanilla.",
      "Desarrollo de una aplicación móvil con Flutter y Firebase para una startup que buscaba recrear el modelo de InDriver para médicos a domicilio.",
    ],
  },
];

export const educacion = [
  {
    titulo: "Ingeniería de Sistemas",
    institucion: "Universidad de la Costa (CUC)",
    periodo: "Febrero 2021 - Febrero 2026",
    detalle: `
      • <b>Programación y Estructuras:</b> Programación estructurada (Java, PHP), POO (herencia, polimorfismo, abstracción), estructuras de datos (listas, árboles, grafos, algoritmo de Dijkstra).<br/>
      • <b>Desarrollo Web y Backend:</b> React, Tailwind, Node.js, Next.js, Express, MongoDB, MySQL, ORMs, CI/CD, JWT, WebSockets.<br/>
      • <b>Desarrollo Móvil:</b> Flutter, Firebase.<br/>
      • <b>Logro académico:</b> Publicación de artículo científico como opción de grado.
    `,
  },
  {
    titulo: "Técnico en Programación de Software",
    institucion: "SENA",
    periodo: "2019 - 2020",
    detalle: `
      • <b>Programación:</b> Fundamentos, pseudocódigo y Java (NetBeans).<br/>
      • <b>Bases de Datos:</b> SQL Server (creación, actualización y eliminación de tablas).<br/>
      • <b>Desarrollo Web:</b> HTML5, CSS3 y JavaScript vanilla.
    `,
  },
];

export const proyectos = [
  {
    titulo: "Lisa Assistance",
    categoria: "Proyecto empresarial",
    descripcion: "Plataforma de asistencia digital para Terpel.",
    link: "https://lisaassistance.terpel.com/",
    imagen: `${import.meta.env.BASE_URL}img/lisaassistence.png`,
  },
  {
    titulo: "Megaleasing Corp.",
    categoria: "Sitio corporativo",
    descripcion: "Landing page corporativa responsiva.",
    link: "https://megaleasing-corp.vercel.app",
    imagen: `${import.meta.env.BASE_URL}img/megalisingcorp.png`,
  },
  {
    titulo: "Subastas Country",
    categoria: "Aplicación web",
    descripcion: "Plataforma de subastas en línea para emprendedores.",
    link: "https://github.com/jhongonzalezs/DesarrolloWeb/tree/main/SubastasCountry",
    imagen: `${import.meta.env.BASE_URL}img/subasta.png`,
  },
  {
    titulo: "Investigacion UA",
    categoria: "Aplicación web",
    descripcion: "Modulo de investigacion universidad del atlantico",
    link: "https://www.uniatlantico.edu.co/departamento-de-investigaciones/grupos-de-investigacion/",
    imagen: `${import.meta.env.BASE_URL}img/UA.png`,
  },
  {
    titulo: "Inventario tienda local",
    categoria: "Aplicación escritorio",
    descripcion: "Sistema de inventario y punto de venta para tiendas sin acceso a internet",
    link: "https://github.com/jhongonzalezs/inventario-tienda.git",
    imagen: `${import.meta.env.BASE_URL}img/Tienda.png`,
  },
];

export const intereses = [
  { icono: "🎮", label: "Juegos" },
  { icono: "🎵", label: "Música" },
  { icono: "💻", label: "Programar" },
  { icono: "♟️", label: "Ajedrez" },
  { icono: "🏊", label: "Natación" },
  { icono: "📚", label: "Libros" },
  { icono: "⚽", label: "Fútbol" },
  { icono: "🎬", label: "Películas" },
];