import { environment } from "src/environments/environment";
import { IImagen, IMenuItem, ISkill } from "../interfaces/interfaces";
import { IRoadmap } from "../components/roadmap/roadmap.component";

export const MENU_ITEMS: IMenuItem[] = [
    {
        label: 'Inicio',
        href: ''
    },
    // {
    //     label: 'Sobre mí',
    //     href: `${environment.base_url}#presentacion`,
    // },
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
        href: `https://github.com/braisvicdev/portfolio`,
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
            src: `${environment.base_url}assets/images/logos/logo-ica.svg`,
            alt: 'Logo ICA'
        },
        fechaInicio: 'Febrero 2024',
        fechaFin: 'Actualidad',
        titulo: 'Desarrollador Frontend Angular',
        categorias: [
            {
                nombre: 'Proyecto',
                descripciones: [
                    'Desarrollo Frontend en Angular, participando en nuevos proyectos del <b>Centro para el Desarrollo Tecnológico y la Innovación</b>, aplicando tecnologías punteras para la creación de interfaces modernas, accesibles y de alto rendimiento.'
                ]
            },
            {
                nombre: 'Responsabilidades',
                descripciones: [
                    '🤝 <b>Trabajo en equipo y colaboración</b>: Coordinación con los equipos de backend y diseño, asegurando una integración fluida mediante el uso de APIs REST, Figma y herramientas CI/CD para optimizar el flujo de desarrollo.',
                    '🗣️ <b>Comunicación efectiva</b>: Interacción constante con los equipos de desarrollo, diseño y producto, utilizando metodologías ágiles como Scrum y herramientas de colaboración como Jira.',
                    '🔄 <b>Adaptabilidad y aprendizaje continuo</b>: Capacidad de adaptación a nuevas herramientas y metodologías, manteniéndose actualizado con las últimas tendencias en desarrollo frontend.',
                    '⏳ <b>Gestión del tiempo y organización</b>: Administración eficiente de tareas en un entorno ágil, priorizando entregables y asegurando cumplimiento de plazos dentro del marco Scrum.',
                    '💡 <b>Resolución de problemas</b>: Análisis y solución de desafíos técnicos, buscando siempre mejorar la eficiencia y usabilidad de las aplicaciones desarrolladas.',
                    '🚀 <b>Atención al detalle y mejora continua</b>: Búsqueda constante de optimización en el rendimiento y accesibilidad de las interfaces, asegurando una experiencia de usuario de alta calidad.'
                ]
            },
            {
                nombre: '🛠️ Tecnologías y herramientas utilizadas',
                descripciones: [
                    '🚀 <b>Frameworks y lenguajes</b>: Angular v17 (aprovechando mejoras clave, como el uso de Signals) | TypeScript.',
                    '🎨 <b>Estilos</b>: CSS3 | SASS | Tailwind | Storybook (documentación y visualización de componentes UI).',
                    '📊 <b>Componentes y gestión de datos</b>: AG Grid (Tabla de datos altamente personalizable y optimizada para rendimiento).',
                    '📂 <b>Control de versiones</b>: Git | Bitbucket | GitLab.',
                    '🧪 <b>Testing</b>: Jasmine | Karma | Jest | Testing Library | SonarQube.',
                    '🔗 <b>Microfrontends</b>: Implementación de arquitectura modular para aplicaciones escalables.',
                    '🏛️ <b>Arquitectura</b>: Implementación de principios de arquitectura hexagonal para garantizar modularidad y escalabilidad, mejorando la integración con APIs externas y microservicios sin afectar el núcleo del negocio.'
                ]
            }
        ]
    },
    {
        logo: {
            src: `${environment.base_url}assets/images/logos/duacode.webp`,
            alt: 'Logo Duacode'
        },
        fechaInicio: 'Septiembre 2020',
        fechaFin: 'Enero 2023',
        titulo: 'Desarrollador Full Stack',
        categorias: [
            {
                nombre: '🔬 Investigación, Desarrollo e Innovación (I+D+i)',
                descripciones: [
                    '🧩 Desarrollo de un framework interno basado en Angular 12, que servirá como base para el desarrollo ágil de proyectos dentro de la empresa en los próximos años.',
                    '⚡ <b>Uso de tecnologías avanzadas</b>: Aplicación de RxJS, Jasmine y Karma para testing automatizado.',
                ]
            },
            {
                nombre: 'Proyectos',
                descripciones: [
                    '📌 Aplicación web para la gestión de eventos.',
                    '📌 Backoffice para el seguimiento de incidencias y generación de informes.',
                    '📌 Backoffice para centralizar y optimizar procesos internos.',
                    '📌 Colaboración en proyectos Ionic 📱, apoyando el desarrollo de aplicaciones móviles híbridas.'
                ]
            },
            // {
            //     nombre: 'Backend (Node.js & Symfony)',
            //     descripciones: [
            //         '📌 Desarrollo de API REST en Node.js para dos de los proyectos mencionados.',
            //         '📌 Mantenimiento y evolución de una aplicación web para gestión de clubes deportivos ⚽ basada en Symfony.'
            //     ]
            // },
            // {
            //     nombre: 'Soporte Técnico',
            //     descripciones: [
            //         '📌 Soporte técnico de software con una gran reputación en materia de atención al cliente y capacidad de resolución.'
            //     ]
            // }
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
                nombre: 'Implementación de un asistente de voz para mejorar la accesibilidad de varios e-commerces',
                descripciones: [
                    '📌 Node.js para la gestión de lógica y APIs.',
                    '📌 Mejora de la accesibilidad para facilitar la navegación e interacción sin requerir entrada manual.',
                ]
            },
        ]
    },
];

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
                    'Elaborar un sistema de hospitales - para controlar médicos, hospitales y usuarios.',
                    'Implementar un panel administrativo con roles de usuario.',
                    'Dominar módulos, servicios, lazyload y más.',
                    'Implementar autenticación vía JWT.',
                    'Crear un backend usando Mongo, Express.',
                    'Utilizar Google Signin como una opción de login para nuestras aplicaciones.',
                    'Base sólida sobre pruebas unitarias y de integración.'
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
                    'CSS3, Maquetación web, Responsive, SASS, LESS, Flexbox, CSS Grid Layout y Bootstrap.',
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
                    'Aprender las técnicas básicas de testing.',
                    'Usar las herramientas específicas de Angular.',
                    'Dependencias para pruebas unitarias.',
                    'Probar la vista e interacción de los componentes.',
                    'Pruebas ágiles con Jest.',
                    'Pruebas E2E con Cypress.'
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
                    'Adquisición de los conocimientos teóricos y prácticos para la planificación, diseño, desarrollo e implementación de aplicaciones web.',
                    'Acceso a base de datos usando PHP y MySQL.',
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
                    'Conocer que es un sistema de control de versiones y cómo utilizarlo, así como el cómo utilizar dos de las herramientas más famosas para esto: GitHub y SourceTree.',
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
                    'Javascript, jQuery, Angular y NodeJS.'
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
                    'PHP 8, Bases de Datos Relacionales, SQL, Laravel, Symfony, Wordpress.',
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
        nombre: 'Angular 17',
        progress: 100,
        logo: {
            src: `${environment.base_url}assets/images/logos/angular.webp`,
            alt: 'Angular'
        },
    },
    {
        id: '2',
        nombre: 'Typescript',
        progress: 100,
        logo: {
            src: `${environment.base_url}assets/images/logos/ts.webp`,
            alt: ' Typescript'
        },
    },
    {
        id: '3',
        nombre: 'Javascript',
        progress: 100,
        logo: {
            src: `${environment.base_url}assets/images/logos/js.webp`,
            alt: ' Javascript'
        },
    },
    // {
    //     id: '2',
    //     nombre: 'Angular Material',
    //     progress: 95,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/angular-material.webp`,
    //         alt: 'Angular Material'
    //     },
    // },
    {
        id: '4',
        nombre: 'Tailwind / SCSS',
        progress: 100,
        logo: {
            src: `${environment.base_url}assets/images/logos/tailwind.png`,
            alt: ' Tailwind'
        },
    },
    // {
    //     id: '4',
    //     nombre: 'Bootstrap',
    //     progress: 95,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/bootstrap.webp`,
    //         alt: ' Scss'
    //     },
    // },
    {
        id: '5',
        nombre: 'Jest',
        progress: 70,
        logo: {
            src: `${environment.base_url}assets/images/logos/jest.png`,
            alt: ' Jest'
        },
    },
    {
        id: '6',
        nombre: 'Testing Library',
        progress: 70,
        logo: {
            src: `${environment.base_url}assets/images/logos/testing-library.png`,
            alt: ' Testing Library'
        },
    },
    {
        id: '7',
        nombre: 'Microfrontends',
        progress: 70,
        logo: {
            src: `${environment.base_url}assets/images/logos/native-federation.png`,
            alt: ' Native Federation'
        },
    },
    // {
    //     id: '9',
    //     nombre: 'MySQL',
    //     progress: 80,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/mysql.webp`,
    //         alt: 'MySQL'
    //     },
    // },
    // {
    //     id: '10',
    //     nombre: 'Php',
    //     progress: 80,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/php.webp`,
    //         alt: 'PHP'
    //     },
    // },
    {
        id: '8',
        nombre: 'Node JS',
        progress: 30,
        logo: {
            src: `${environment.base_url}assets/images/logos/node.webp`,
            alt: 'Node JS'
        },
    },
    // {
    //     id: '12',
    //     nombre: 'Codeigniter',
    //     progress: 80,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/codeigniter.webp`,
    //         alt: 'Codeigniter'
    //     },
    // },
    // {
    //     id: '13',
    //     nombre: 'Git/Gitlab',
    //     progress: 80,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/gitlab.webp`,
    //         alt: 'Gitlab'
    //     },
    // },
    // {
    //     id: '14',
    //     nombre: 'Symfony',
    //     progress: 60,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/symfony.webp`,
    //         alt: 'Symfony'
    //     },
    // },
    // {
    //     id: '15',
    //     nombre: 'Docker CI/CD',
    //     progress: 10,
    //     logo: {
    //         src: `${environment.base_url}assets/images/logos/docker.webp`,
    //         alt: 'Docker'
    //     }
    // },
];

export const LOGOS_MARQUEE: IImagen[] = [
    { src: 'assets/images/logos/angular.webp', alt: 'Angular' },
    { src: 'assets/images/logos/angular-material.webp', alt: 'Angular material' },
    { src: 'assets/images/logos/sass.webp', alt: 'Scss' },
    { src: 'assets/images/logos/jasmine2.webp', alt: 'Jasmine' },
    { src: 'assets/images/logos/github-actions.webp', alt: 'Github Actions' },
    { src: 'assets/images/logos/github-pages.webp', alt: 'Github Pages' },
]



