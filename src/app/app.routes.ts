import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { Menu } from './pages/menu/menu';
import { Breadcrumbs } from './pages/breadcrumbs/breadcrumbs';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Busqueda } from './pages/busqueda/busqueda';
import { Error404 } from './pages/error-404/error-404';
import path from 'path';

/**
 * Definición de las rutas de la aplicación.
 * Angular Router utiliza este arreglo para navegar entre los componentes.
 */
export const routes: Routes = [
  {
    path: '', // Ruta raíz
    component: Inicio,
    pathMatch: 'full' // Coincidencia exacta
  },
  {
    path: 'elementos', // Ruta para Elementos del Sitio
    component: ElementosSitio
  },
  {
    path: 'menu', // Ruta para Menú
    component: Menu
  },
  {
    path: 'breadcrumbs', // Ruta para Breadcrumbs
    component: Breadcrumbs
  },
  {
    path: 'mapa-sitio', // Ruta para Mapa del Sitio
    component: MapaSitio
  },  
  {
    path: 'busqueda', // Ruta para la página de Búsqueda
    component: Busqueda,
  },
  {
    path: '**', // Ruta comodín (wildcard) para URLs no encontradas
    component: Error404
  },


];
