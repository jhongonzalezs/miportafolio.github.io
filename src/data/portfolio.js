export const perfil = {
  nombre: "Jhon Jairo González",
  titulo: "Ingeniero de Sistemas | Desarrollador Full Stack",
  descripcion: "Ingeniero de Sistemas de la Universidad de la Costa y Técnico en Programación de Software del SENA Colombo Alemán. He tenido la oportunidad de trabajar en sectores muy distintos: energético (con Terpel), ambiental (con MegaLeasing Corp.) y tecnológico (con Comco). Disfruto mucho programar: en el frontend mis herramientas favoritas son React y Tailwind CSS, y en el backend me siento cómodo con frameworks de Python como Django o C# con ASP.NET.",
  email: "gonzalezsanchezjhonjairo1@gmail.com",
  telefono: "310 652 2234",
  ubicacion: "Barranquilla, Atlántico",
  github: "https://github.com/jhongonzalezs",
  linkedin: "https://www.linkedin.com/in/jhon-gonzalez-web-developer/",
  cvUrl: "/miportafolio.github.io/PDF/CV_Jhon_Jairo_Gonzalez_v0.1.8.pdf",
};

export const skills = {
  tecnicas: [
    { nombre: "C# / .NET", nivel: 75 },
    { nombre: "React", nivel: 80 },
    { nombre: "Django", nivel: 75 },
    { nombre: "Node.js / NestJS", nivel: 65 },
    { nombre: "PostgreSQL / SQL Server", nivel: 80 },
    { nombre: "Docker", nivel: 65 },
    { nombre: "Git / GitHub", nivel: 85 },
  ],
  blandas: [
    { nombre: "Trabajo en equipo", nivel: 90 },
    { nombre: "Iniciativa", nivel: 85 },
    { nombre: "Creatividad", nivel: 95 },
    { nombre: "Liderazgo", nivel: 70 },
    { nombre: "Responsabilidad", nivel: 100 },
    { nombre: "Comunicación", nivel: 85 },
  ],
};

export const experiencia = [
  {
    cargo: "Desarrollador Full Stack",
    empresa: "DevelopApp",
    periodo: "Ago 2025 - Sep 2026 (1 año 2 meses)",
    logros: [
      "Desarrollo y mantenimiento de aplicaciones empresariales para el sector energético.",
      "Participación en el proyecto Lisa Assistance: plataforma de asistencia digital y soporte técnico para empleados y clientes de Terpel (https://lisaassistance.terpel.com/). API construida en Python (Django) y frontend en React. Almacenamiento en AWS S3, base de datos PostgreSQL y uso de Docker para levantar el entorno local.",
      "Implementación de mejoras en software de investigación para la Universidad del Atlántico (https://www.uniatlantico.edu.co/departamento-de-investigaciones/grupos-de-investigacion/) aplicando SSD (Spec-Driven Development) con asistencia de Claude. Se refactorizó una arquitectura MPA (Multi Page Application) en Angular a SPA (Single Page Application) para mejorar la velocidad de carga y evitar recargas constantes.",
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
      "Resultado: https://megaleasing-corp.vercel.app",
    ],
  },
  {
    cargo: "Desarrollador de Software & Analista de Datos (Freelance)",
    empresa: "Tiendas Locales",
    periodo: "2022 - 2024 (Proyectos independientes)",
    logros: [
      "Desarrollo de un sistema de punto de venta y análisis de datos a medida para tiendas locales sin acceso a internet.",
      "Creación de una aplicación de escritorio ultraligera utilizando Tauri y SQLite para garantizar su funcionamiento en laptops de bajos recursos.",
      "Implementación de módulos de recolección de datos para identificar productos más vendidos, clientes frecuentes y comportamiento de compra.",
      "Generación de reportes locales que permitieron a los dueños de las tiendas tomar decisiones basadas en datos sin depender de la nube.",
      "Aplicación de herramientas de análisis como Pandas, NumPy y TensorFlow para proyecciones básicas con IA.",
    ],
  },
  {
    cargo: "Desarrollador de Software (Proyecto TIC)",
    empresa: "Comco - Proyecto Universitario",
    periodo: "2023 - 2024 (Proyecto académico)",
    logros: [
      "Desarrollo de una plataforma web de subastas en línea para emprendedores y empresas, como parte de un proyecto universitario con financiación gubernamental.",
      "Inicialmente construido con Angular (frontend y backend) y MySQL (Workbench). A mitad del proyecto, la intervención de una empresa externa (Mangus) impuso el uso de un CMS (Joomla), lo que generó dificultades técnicas y llevó a la deserción del equipo y a la pausa del proyecto.",
      "Aplicación de conocimientos en React, Node.js y bases de datos relacionales en fases tempranas.",
    ],
  },
  {
    cargo: "Desarrollador Freelance (SENA)",
    empresa: "Proyectos Independientes",
    periodo: "2018 - 2020 (Época de estudiante)",
    logros: [
      "Mantenimiento de plataformas con Java SpringBoot y SpringWeb en proyectos pequeños.",
      "Desarrollo de e-commerce con WordPress para un hotel en Barranquilla, realizando cambios de componentes y personalización.",
      "Diseño de mockups en Figma para landing pages en HTML5, CSS3 y JavaScript vanilla.",
      "Desarrollo de una aplicación móvil con Flutter y Firebase para una startup que buscaba recrear el modelo de InDriver pero para médicos a domicilio durante la pandemia de COVID-19.",
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
    imagen: "/miportafolio.github.io/img/lisaassistence.png",
  },
  {
    titulo: "Megaleasing Corp.",
    categoria: "Sitio corporativo",
    descripcion: "Landing page corporativa responsiva.",
    link: "https://megaleasing-corp.vercel.app",
    imagen: "/miportafolio.github.io/img/megalisingcorp.png",
  },
  {
    titulo: "Subastas Country",
    categoria: "Aplicación web",
    descripcion: "Plataforma de subastas en línea para emprendedores.",
    link: "https://github.com/jhongonzalezs/DesarrolloWeb/tree/main/SubastasCountry",
    imagen: "/miportafolio.github.io/img/subasta.png",
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