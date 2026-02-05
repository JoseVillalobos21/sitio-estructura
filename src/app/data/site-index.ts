/**
 * Define los tipos posibles para un elemento del sitio.
 * Puede ser una 'pagina' completa o una 'seccion' dentro de una página.
 */
export type SiteItemType = 'pagina' | 'seccion';

/**
 * Representa la estructura de datos de un elemento en el índice del sitio.
 * Se utiliza para búsquedas, mapas de sitio o listados de contenido.
 */
export type SiteItem = {
    /** Identificador único del elemento */
    id: string;
    /** Título visible del elemento (página o sección) */
    title: string;
    /** Descripción breve del contenido, útil para resultados de búsqueda */
    description: string;
    /** Ruta relativa o URL para acceder a este elemento */
    path: string;
    /** Categoría del elemento: si es una página independiente o una sección */
    type: SiteItemType;
    /** Nombre de la sección general a la que pertenece este elemento */
    section: string;
    /** Lista de palabras clave relacionadas para facilitar la búsqueda */
    keywords: string[];
    /** Propiedad opcional para cualquier otro dato adicional que se requiera */
    otro?: string;

};

export const SITE_INDEX: SiteItem[] = [
    {
        id: 'inicio',
        title: 'Inicio',
        description: 'Página principal del sitio de practica',
        path: '/',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['inicio', 'home','principal', 'estructura'],
        otro: "asada",
    },
    {
        id: 'elementos',
        title: 'Elementos del sitio',
        description: 'Identifica los elementos que componen un sitio web.',
        path: '/elementos',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['elementos', 'sitio', 'header','footer', 'main','layout'],
    },
    {
        id: 'menu',
        title: 'Menú',
        description: 'Elementos principales del menú web y su utilidad.',
        path: '/menu',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['menu', 'navegacion','navbar', 'links', 'persistente']
    },
    {
        id: 'breadcrumbs',
        title: 'Breadcrumbs',
        description: 'Describe el funcionamiento y utilidad de los breadcrumbs.',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['breadcrumbs', 'migas', 'ruta', 'navegacion', 'ux']
    },
    {
        id: 'mapa',
        title: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y la relacion con la navegación.',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['mapa', 'sitio', 'sitemap', 'navegacion', 'estructura', 'rutas']
    },
    {
        id: 'error404',
        title: 'Error 404',
        description: 'Página para rutas no existentes(404)',
        path: '/no-existe',
        type: 'seccion',
        section: 'Errores',
        keywords: ['404', 'error', 'no encontrado', 'ruta']
    }
];