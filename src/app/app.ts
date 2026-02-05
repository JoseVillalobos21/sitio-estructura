import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { Inicio } from './pages/inicio/inicio';


/**
 * Componente raíz de la aplicación.
 * Define la estructura base y contiene el Layout principal.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /** 
   * Título de la aplicación, manejado como una señal (signal) para reactividad.
   */
  protected readonly title = signal('sitio-estructura');
}
