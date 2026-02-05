import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';
import { FormsModule } from '@angular/forms';

/**
 * Componente de diseño principal (Layout).
 * Actúa como contenedor estructural para la aplicación, incluyendo elementos comunes
 * como el sistema de navegación (Breadcrumbs) y el área donde se renderizan las rutas hijas.
 */
@Component({
  selector: 'app-layout',
  imports: [RouterModule, Breadcrumb, FormsModule], // Importa RouterModule para <router-outlet> y el componente Breadcrumb.
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
})
export class Layout {
  quickQuery= ''; // Variable para la consulta rápida de búsqueda.
  constructor(private router: Router) {}
  // Método para manejar la búsqueda rápida.
  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    // Navega a la página de búsqueda con el parámetro de consulta.
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}
