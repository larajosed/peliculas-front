import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListadoDePeliculasComponent } from './components/listado-de-peliculas/listado-de-peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AgregarPeliculaComponent } from './components/agregar-pelicula/agregar-pelicula.component';
import { CategoriaPeliculaComponent } from './components/categoria-pelicula/categoria-pelicula.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'listado-de-peliculas', component: ListadoDePeliculasComponent},
  { path: 'agregar-pelicula', component: AgregarPeliculaComponent},
  { path: 'detalle-pelicula/:id', component: DetallePeliculaComponent},
  { path: 'categoria-pelicula/:categoria', component: CategoriaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
