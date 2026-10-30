import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = '/api-paises';

  get httpParams() {
    return new HttpParams()
      .set('response_fields', 'names.common,capitals.name,codes.alpha_2,flag,population');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country> {
    const url = `${this.apiUrl}/name?q=${encodeURIComponent(termino.trim())}`;
    return this.http.get<Country>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country> {
    const url = `${this.apiUrl}/capitals/${encodeURIComponent(termino.trim())}`;
    return this.http.get<Country>(url, { params: this.httpParams });
  }

  verPaisPorCodigo(codigo: string): Observable<Country[]> {
    const url = `${this.apiUrl}/codes.alpha_2/${encodeURIComponent(codigo.trim())}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country> {

    const url = `${this.apiUrl}/region/${encodeURIComponent(region.trim())}`;
    return this.http.get<Country>(url, { params: this.httpParams })
        .pipe(
          tap(console.log)
        );
  }
}