import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListadoDePeliculasComponent } from './components/listado-de-peliculas/listado-de-peliculas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'listado-de-peliculas', component: ListadoDePeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
