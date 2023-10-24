import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-elemento-listado',
  templateUrl: './elemento-listado.component.html',
  styleUrls: ['./elemento-listado.component.css']
})
export class ElementoListadoComponent {
@Input() pelicula: any;



 constructor(private router: Router){

 } 
onClick(){
  this.router.navigate(['/detalle-pelicula/', this.pelicula.id]);  
}
}
