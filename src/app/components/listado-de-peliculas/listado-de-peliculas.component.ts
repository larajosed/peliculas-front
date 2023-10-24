import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/service/pelicula.service';


@Component({
  selector: 'app-listado-de-peliculas',
  templateUrl: './listado-de-peliculas.component.html',
  styleUrls: ['./listado-de-peliculas.component.css'],
 
})
export class ListadoDePeliculasComponent {
  @Input() pelicula: any;
  datos: any;
  lista: string[];
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  


  constructor(private peliculaService: PeliculaService,private router: Router){
    this.lista = ["Aventura","Terror"]
    this.verSeleccion = this.opcionSeleccionado;
  }

  ngOnInit(){
    const userId = JSON.parse(localStorage.getItem("user")!).id;
    this.peliculaService.getPeliculasByUsuarioId(userId).subscribe({
        next: (respuesta) =>{         
         this.datos = respuesta;
        }
      })
     }

     aggPelicula(){
      this.router.navigate(['/agregar-pelicula/'])
    } 

    capturar() {      
      this.router.navigate(['/categoria-pelicula/',  this.opcionSeleccionado])
      localStorage.setItem("categoria", this.opcionSeleccionado);
  }
}




