import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent {
  mostrarErrorLogin = false;
  email = new FormControl('');
  contrasena = new FormControl('');

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}
  onSave() {
    this.usuarioService
      .getUsuario(this.email.value, this.contrasena.value)
      .subscribe({
        next: (respuesta) => {
          if (respuesta == null) {
            this.mostrarErrorLogin = true;
          } else {
            localStorage.setItem("user", JSON.stringify(respuesta));
            this.router.navigate(['/', 'listado-de-peliculas']);
          }
        },
      });
  }
}
