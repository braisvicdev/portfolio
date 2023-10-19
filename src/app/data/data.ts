import { environment } from "src/environments/environment";
import { IImagen, IMenuItem, ISkill } from "../interfaces/interfaces";
import { IRoadmap } from "../components/roadmap/roadmap.component";

// TODO: Cambiar enlace github
export const MENU_ITEMS: IMenuItem[] = [
    {
        label: 'Inicio',
        href: ''
    },
    {
        label: 'Sobre mí',
        href: `${environment.base_url}#presentacion`,
    },
    {
        label: 'Trayectoria',
        href: `${environment.base_url}#trayectoria`,
    },
    {
        label: 'Skills',
        href: `${environment.base_url}#skills`,
    },
    {
        label: 'Github',
        href: `https://github.com/braisvicdev/portfolio-prueba`,
        targetBlank: true
    },
    {
        label: 'CV',
        href: environment.cv_lnk,
        targetBlank: true
    },
];

export const TRAYECTORIA_PROFESIONAL: IRoadmap[] = [
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/duacode.webp`,
            alt: 'Logo Duacode'
        },
        fechaInicio: 'Enero 2021',
        fechaFin: 'Enero 2023',
        titulo: 'Desarrollador Full Stack',
        categorias: [
            {
                nombre: '',
                descripciones: [
                    'Formé parte del departamento I+D+I de la empresa desarrollando un Framework interno basado en Angular 12 el cuál será la base para el desarrollo ágil de proyectos durante los próximos años.',
                    'He puesto en práctica y adquirido conocimientos de tecnologías como RXJS, Jasmine, Karma.',
                    'He realizado amplias labores de investigación para conseguir un producto lo más eficiente y escalable posible las cuáles me han aportado un gran conocimiento en Angular a nivel interno del framework.'
                ]
            },
            {
                nombre: 'Frontend Angular',
                descripciones: [
                    'Implementación de una aplicación web con área de administración y pública para la gestión y reserva de eventos.',
                    'Implementación de un backoffice para el seguimiento de incidencias y generación de informes para una gran empresa nacional.',
                    'Implementación de un backoffice para la centralización y simpilficación de procesos de la empresa.',
                    'Desarrollo e integración de un Webcomponent en una aplicación web desarrollada en Php.',
                    'Colaboración puntual en proyectos Ionic.'
                ]
            },
            {
                nombre: 'Backend (Node, Symfony)',
                descripciones: [
                    'Desarrollo Api Rest en Node Js para 2 de los proyectos mencionados anteriormente.',
                    'Mantenimiento y evoluciones de una aplicación web de gestión de clubes deportivos basada en el Framework Symfony.',
                ]
            },
            {
                nombre: 'Soporte Técnico',
                descripciones: [
                    'Soporte técnico de software con una gran reputación en materia de atención al cliente y capacidad de resolución.',
                ]
            },
        ]
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/duacode.webp`,
            alt: 'Logo Duacode'
        },
        fechaInicio: 'Septiembre 2020',
        fechaFin: 'Diciembre 2020',
        titulo: 'Desarrollador Frontend',
        categorias: [
            {
                nombre: '',
                descripciones: [
                    'Maquetación y desarrollo Frontend de múltiples sitos web utilizando el framework Codeigniter.',
                    'Desarrollo, evoluciones y mantenimientos de webs que utilizan el CMS Wordpress.'
                ]
            },
        ]
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/atos.webp`,
            alt: 'Logo Atos'
        },
        fechaInicio: 'Mayo 2020',
        fechaFin: 'Junio 2020',
        titulo: 'Digital Developer Bootcamp',
        categorias: [
            {
                nombre: '',
                descripciones: [
                    'Desarrollo de un asistente de voz para mejorar la accesibilidad de varios e-commerce utilizando las tecnologías Node JS y Dialogflow entre otras.',
                ]
            },
        ]
    },

]

export const TRAYECTORIA_FORMACION_COMPLEMENTARIA: IRoadmap[] = [
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/udemy.webp`,
            alt: 'Udemy'
        },
        fechaFin: 'Octubre 2023',
        titulo: 'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN',
        categorias: [
            {
                nombre: 'Competencias',
                descripciones: [
                    'Elaborar un sistema de hospitales - para controlar médicos, hospitales y usuarios',
                    'Implementar un panel administrativo con roles de usuario',
                    'Dominar módulos, servicios, lazyload y más',
                    'Implementar autenticación vía JWT',
                    'Crear un backend usando Mongo, Express',
                    'Utilizar Google Signin como una opción de login para nuestras aplicaciones',
                    'Base sólida sobre pruebas unitarias y de integración'
                ],
            },
        ],
        certificacion: 'https://www.udemy.com/certificate/UC-8e3600de-853f-456b-9bf6-77c428e45429/',
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/udemy.webp`,
            alt: 'Udemy'
        },
        fechaFin: 'Octubre 2023',
        titulo: 'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
        categorias: [
            {
                nombre: 'Competencias',
                descripciones: [
                    'CSS3, Maquetación web, Responsive, SASS, LESS, Flexbox, CSS Grid Layout y Bootstrap',
                ],
            },
        ],
        certificacion: 'https://www.udemy.com/certificate/UC-d61cf507-a972-4dc2-954b-4c5de1905133/'
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/training-it.webp`,
            alt: 'Training IT'
        },
        fechaFin: 'Noviembre 2021',
        titulo: 'Angular Testing',
        categorias: [
            {
                nombre: 'Competencias',
                descripciones: [
                    'Aprender las técnicas básicas de testing',
                    'Usar las herramientas específicas de Angular',
                    'Dependencias para pruebas unitarias',
                    'Probar la vista e interacción de los componentes',
                    'Pruebas ágiles con Jest',
                    'Pruebas E2E con Cypress'
                ],
            },
        ],
        certificacion: "https://cursos.trainingit.es/mod/customcert/verify_certificate.php?code=ScEYLSgNKq"
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/imagina-formacion.webp`,
            alt: 'Imagina Formación'
        },
        fechaFin: 'Marzo 2021',
        titulo: 'Curso de PHP, MySQL y Ajax',
        categorias: [
            {
                nombre: 'Competencias',
                descripciones: [
                    'Adquisición de los conocimientos teóricos y prácticos para la planificación, diseño, desarrollo e implementación de aplicaciones web',
                    'Acceso a base de datos usando PHP y MySQL',
                ]
            },
        ]
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/imagina-formacion.webp`,
            alt: 'Imagina Formación'
        },
        fechaFin: 'Marzo 2021',
        titulo: 'Curso de Git, Github y SourceTree',
        categorias: [
            {
                nombre: 'Competencias',
                descripciones: [
                    'Conocer que es un sistema de control de versiones y cómo utilizarlo adecuadamente, así como el cómo utilizar dos de las herramientas más famosas para esto: GitHub y SourceTree.',
                ]
            },
        ]
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/udemy.webp`,
            alt: 'Udemy'
        },
        fechaFin: 'Marzo 2020',
        titulo: 'Master en JavaScript',
        categorias: [
            {
                nombre: '',
                descripciones: [
                    'Javascript, jQuery, Angular y NodeJS'
                ],
            }
        ],
        certificacion: 'https://www.udemy.com/certificate/UC-8da0ad72-23d7-4756-93a6-157cc0275bb2/'
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/udemy.webp`,
            alt: 'Udemy'
        },
        fechaFin: 'Marzo 2020',
        titulo: 'Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress',
        categorias: [
            {
                nombre: '',
                descripciones: [
                    'PHP 8, Bases de Datos Relacionales, SQL, Laravel, Symfony, Wordpress',
                ],
            }
        ],
        certificacion: 'https://www.udemy.com/certificate/UC-795d1082-945e-42f5-8e8e-57922b32176d/'
    },
];

export const TRAYECTORIA_ACADEMICA: IRoadmap[] = [
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/afundacion.webp`,
            alt: 'Udemy'
        },
        fechaFin: 'Abril 2020',
        titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
        categorias: []
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/xunta-galicia.webp`,
            alt: 'Udemy'
        },
        fechaFin: 'Abril 2018',
        titulo: 'Grado Medio en Sistemas Microinformáticos y Redes',
        categorias: []
    },
];

export const SKILLS: ISkill[] = [
    {
        id: '1',
        nombre: 'Angular',
        progress: 95,
        logo: {
            src: `${environment.base_url}assets/images/logos/angular.webp`,
            alt: 'Angular'
        },
    },
    {
        id: '1',
        nombre: 'Angular Material',
        progress: 95,
        logo: {
            src: `${environment.base_url}assets/images/logos/angular-material.webp`,
            alt: 'Angular Material'
        },
    },
    {
        id: '2',
        nombre: 'Scss',
        progress: 95,
        logo: {
            src: `${environment.base_url}assets/images/logos/sass.webp`,
            alt: ' Scss'
        },
    },
    {
        id: '4',
        nombre: 'Javascript',
        progress: 90,
        logo: {
            src: `${environment.base_url}assets/images/logos/js.webp`,
            alt: ' Javascript'
        },
    },
    {
        id: '4',
        nombre: 'Typescript',
        progress: 90,
        logo: {
            src: `${environment.base_url}assets/images/logos/ts.webp`,
            alt: ' Typescript'
        },
    },
    {
        id: '4',
        nombre: 'Jasmine',
        progress: 70,
        logo: {
            src: `${environment.base_url}assets/images/logos/jasmine.webp`,
            alt: ' Jasmine'
        },
    },
    {
        id: '5',
        nombre: 'Rxjs',
        progress: 70,
        logo: {
            src: `${environment.base_url}assets/images/logos/rxjs.webp`,
            alt: ' Rxjs'
        },
    },
    {
        id: '5',
        nombre: 'Node JS',
        progress: 80,
        logo: {
            src: `${environment.base_url}assets/images/logos/node.webp`,
            alt: 'Node JS'
        },
    },
    {
        id: '4',
        nombre: 'Php',
        progress: 80,
        logo: {
            src: `${environment.base_url}assets/images/logos/php.webp`,
            alt: 'PHP'
        },
    },
    {
        id: '4',
        nombre: 'Codeigniter',
        progress: 80,
        logo: {
            src: `${environment.base_url}assets/images/logos/codeigniter.webp`,
            alt: 'Codeigniter'
        },
    },
    {
        id: '3',
        nombre: 'Gitlab',
        progress: 80,
        logo: {
            src: `${environment.base_url}assets/images/logos/gitlab.webp`,
            alt: 'Gitlab'
        },
    },
    {
        id: '4',
        nombre: 'Symfony',
        progress: 60,
        logo: {
            src: `${environment.base_url}assets/images/logos/symfony.webp`,
            alt: 'Symfony'
        },
    },
    {
        id: '4',
        nombre: 'Docker CI/CD',
        progress: 10,
        logo: {
            src: `${environment.base_url}assets/images/logos/docker.webp`,
            alt: 'Docker'
        }
    },
];

export const LOGOS_MARQUEE: IImagen[] = [
    { src: 'assets/images/logos/angular.webp', alt: 'Angular' },
    { src: 'assets/images/logos/angular-material.webp', alt: 'Angular material' },
    { src: 'assets/images/logos/sass.webp', alt: 'Scss' },
    { src: 'assets/images/logos/jasmine2.webp', alt: 'Jasmine' },
    { src: 'assets/images/logos/github-actions.webp', alt: 'Github Actions' },
    { src: 'assets/images/logos/github-pages.webp', alt: 'Github Pages' },
]



