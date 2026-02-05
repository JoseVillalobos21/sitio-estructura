// Importa el decorador 'Injectable' necesario para definir servicios en Angular.
import {Injectable} from '@angular/core';

// Importa 'Observable' (el tipo de dato asíncrono) y 'of' (función para crear un Observable a partir de datos estáticos) de RxJS.
import { Observable, of } from 'rxjs';

// Importa el operador 'delay' para simular un tiempo de espera (latencia de red).
import {delay} from 'rxjs/operators';

// Importa los datos crudos (SITE_INDEX) y la interfaz (SiteItem) desde un archivo local.
import { SITE_INDEX, SiteItem } from '../data/site-index';

// Define un tipo de dato personalizado llamado 'SearchFilters' para tipar los filtros opcionales.
export type SearchFilters = {
    // Propiedad opcional 'type': solo acepta los valores 'todos', 'pagina' o 'seccion'.
    type?: 'todos' | 'pagina' | 'seccion';
    // Propiedad opcional 'section': acepta 'todas' o cualquier cadena de texto (string).
    section?: 'todas'| string;
};

// Decorador que marca esta clase como un servicio que puede ser inyectado.
// 'providedIn: root' significa que hay una única instancia (singleton) para toda la aplicación.
@Injectable({providedIn: 'root'})
export class SearchaaApi { // Define y exporta la clase del servicio.

    // Define el método 'search'. 
    // Recibe 'query' (texto a buscar) y 'filters' (con valor por defecto vacío {}).
    // Retorna un Observable que emite un array de objetos 'SiteItem'.
    search(query: string, filters: SearchFilters = {}):Observable<SiteItem[]> {
        
        // Saneamiento del input: Si query es null/undefined usa '', elimina espacios extremos y lo pasa a minúsculas.
        const q = (query || '').trim().toLowerCase();
        
        // Crea una copia superficial (shallow copy) de los datos originales usando el "spread operator" (...).
        // Esto es importante para no modificar el array original 'SITE_INDEX' al filtrar.
        let data = [...SITE_INDEX];

        // LOGICA DE BÚSQUEDA POR TEXTO
        // Verifica si el usuario escribió algo (longitud mayor a 0).
        if (q.length > 0) {
            // Filtra el array 'data'. Solo pasan los items que retornen 'true'.
            data = data.filter(item => {
                // Construye un "pajar" (haystack): concatena título, descripción y palabras clave en un solo string largo.
                // Se pasa todo a minúsculas para que la búsqueda no distinga mayúsculas de minúsculas.
                const haystack = (item.title + ' ' + item.description + ' ' + item.keywords.join(' ')).toLowerCase();
                
                // Retorna 'true' si el texto buscado (q) está incluido dentro del 'haystack'.
                return haystack.includes(q);
            });
        }

        // LOGICA DE FILTRO POR TIPO
        // Verifica si existe el filtro 'type' y si NO es el valor por defecto 'todos'.
        if (filters.type && filters.type !== 'todos') {
            // Sobreescribe 'data' dejando solo los items cuyo 'type' coincida con el filtro seleccionado.
            data = data.filter(item => item.type === filters.type);
        }

        // LOGICA DE FILTRO POR SECCIÓN
        // Verifica si existe el filtro 'section' y si NO es el valor por defecto 'todas'.
        if (filters.section && filters.section !== 'todas') {
            // Sobreescribe 'data' dejando solo los items cuya 'section' coincida con el filtro.
            data = data.filter(item => item.section === filters.section);
        }

        // RETORNO DE DATOS
        // 'of(data)' convierte el array filtrado en un Observable (flujo de datos).
        // '.pipe(delay(200))' añade un retraso artificial de 200ms para simular que los datos vienen de una API real.
        return of(data).pipe(delay(200));
    }

    getsections(): string[]{
        // Usa un Set para obtener secciones únicas del índice del sitio.
        const set = new Set(SITE_INDEX.map(x => x.section));
        // Convierte el Set de nuevo a un array y lo ordena alfabéticamente antes de retornarlo.
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }
}