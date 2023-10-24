import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PeliculaService } from 'src/app/service/pelicula.service';


@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent {

  myParamId: any;
  pelicula: any;

  constructor(private route: ActivatedRoute, private peliculaService: PeliculaService, private router: Router){
    
  }

  ngOnInit(){
    this.route.params.subscribe(params => {this.myParamId = params['id']} );
    this.peliculaService.getPeliculasById(this.myParamId).subscribe({
      next: (respuesta) =>{         
        this.pelicula = respuesta;
       }
    })
}

volverLista(){
  this.router.navigate(['/listado-de-peliculas/'])
}

}
