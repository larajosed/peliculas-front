import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url = 'http://localhost:8080/pelicula';

  pelicula:any;
  

  constructor(private http:HttpClient) { }

  ngOnInit(){

  }
  
  getPeliculasByUsuarioId(usuarioId: any) {
    return this.http.get(`${this.url}/usuario/${usuarioId}`);
  }

  getPeliculasById(id: any){
    return this.http.get(`${this.url}/${id}`);
  }

  getPeliculasByCategorias(categoria: any){
    return this.http.get(`${this.url}/categoria/${categoria}`);
  }
  
  save(pelicula: any){
    return this.http.post(this.url, pelicula);
  }


}
