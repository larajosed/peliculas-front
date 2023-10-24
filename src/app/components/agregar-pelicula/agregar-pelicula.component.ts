import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css'],
})
export class AgregarPeliculaComponent {
  nombre = new FormControl('');
  descripcion = new FormControl('');
  puntuacion = new FormControl('');
  categoria = new FormControl('');
  formData = new FormData();
  archivo: any;

  constructor(private peliculaService: PeliculaService, private router: Router) {
    this.puntuacion.setValue('0');
    this.categoria.setValue('0');
  }

  agregarPelicula() {
    const userId = JSON.parse(localStorage.getItem("user")!).id;
    this.formData.append('pelicula', new Blob ([JSON.stringify({
      nombre: this.nombre.value,
      descripcion: this.descripcion.value,
      puntuacion: this.puntuacion.value,
      usuarioId: userId,
      categoria: this.categoria.value,
    })], {type: "application/json"}));
    this.peliculaService.save(this.formData).subscribe({
      next: (respuesta: any) => {
        respuesta;
      },
    });
    this.router.navigate(['/', 'listado-de-peliculas']);
  }

  capturarFile(event: any) {
    this.archivo = <File>event.target.files[0];
    this.formData.append('archivo', this.archivo);
  }
}
