import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-categoria-pelicula',
  templateUrl: './categoria-pelicula.component.html',
  styleUrls: ['./categoria-pelicula.component.css']
})
export class CategoriaPeliculaComponent {
@Input() pelicula: any;
datos: any;

constructor(private peliculaService: PeliculaService, private router: Router){

}

ngOnInit(){
  const categoria = localStorage.getItem("categoria");
  this.peliculaService.getPeliculasByCategorias(categoria).subscribe({
    next: (respuesta) =>{         
     this.datos = respuesta;
    }
  });
  console.log(this.datos)
}

onClick(){
  this.router.navigate(['/detalle-pelicula/', this.pelicula.id]);  
}

}
