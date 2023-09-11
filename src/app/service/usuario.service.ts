import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url = 'http://localhost:8080/usuario';

  constructor(private http:HttpClient) { 

  }

  ngOnInit(){

  }

  getUsuario(email: any, contrasena: any) {
    return this.http.get(this.url, {
      params: {
        email: email,
        contrasena: contrasena
      }
    });
  }

}
