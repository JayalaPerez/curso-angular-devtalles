import { Injectable, afterNextRender } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private apiKey: string = 'p7XrAfbefkrwG0T2RWDJ2qdD1jUsNzBw';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';  
  private _historial: string[] = [];

  // TODO: cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {
    this._historial = [];
    
    afterNextRender(() => {

      // 1. Leemos el historial (He limpiado tu código redundante aquí)
      const stored = localStorage.getItem('historial');
      this._historial = stored ? JSON.parse(stored) : [];
      
      // 2. ¡LA MAGIA! Si hay búsquedas previas, recargamos los gifs de la m
      if (this._historial.length > 0) {
        this.buscarGifs(this._historial[0]);
      }   
    });
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase(); //Elimina espacios en blanco y convierte a minúsculas

    if (!this._historial.includes(query)) {
      this._historial.unshift(query); //Agrega el nuevo valor al inicio del arreglo
      this._historial = this._historial.splice(0, 10); //Mantener solo los últimos 10 elementos en el historial

      localStorage.setItem('historial', JSON.stringify(this._historial)); //Guarda el historial en localStorage
    }  

    
    const params = new HttpParams ()
          .set('api_key', this.apiKey)
          .set('q', query)
          .set('limit', '10');

    

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=p7XrAfbefkrwG0T2RWDJ2qdD1jUsNzBw&q=dragon ball z&limit=10')
    //   .then(resp => {
    //     resp.json().then(data => {
    //       console.log(data)});
    //   });

    // console.log(this._historial);
  }
}
