import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor,NgIf, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchaaApi, SearchFilters } from '../../services/search';
import { SiteItem } from '../../data/site-index';
/**
 * Componente de la página de Búsqueda.
 * Permite a los usuarios buscar contenido dentro del sitio utilizando filtros y muestra los resultados.
 */

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [RouterModule,NgIf,FormsModule,NgFor,AsyncPipe],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css',
})
export class Busqueda {
  query = '';
  filters: SearchFilters = {
    type: 'todos',
    section: 'todas',
  };

  sections: string[] = [];
  results$!: Observable<SiteItem[]>;
  constructor(private route: ActivatedRoute, private api: SearchaaApi) {
    // Obtener secciones únicas para el filtro desde el servicio de búsqueda.
    this.sections = this.api.getsections();
    this.route.queryParamMap.subscribe(params => {
      const q = params.get('q') ?? '';
      this.query = q;
      this.doSearch();
    });
  }

  doSearch(): void {
    this.results$ = this.api.search(this.query, this.filters);
  }

  clear(): void{
    this.query='';
    this.filters={type: 'todos',section: 'todas'};
    this.doSearch();
  }

}
