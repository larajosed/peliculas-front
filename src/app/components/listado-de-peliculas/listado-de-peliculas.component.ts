import { Component, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listado-de-peliculas',
  templateUrl: './listado-de-peliculas.component.html',
  styleUrls: ['./listado-de-peliculas.component.css'],
  providers: [UsuarioService]
})
export class ListadoDePeliculasComponent {
  email: any;
  contrasena: any;
 

  constructor(private usuarioService: UsuarioService){

  }

  ngOnInit(){
    const user = JSON.parse(localStorage.getItem("user")!);
    console.log(user.id);

  }
    
}
