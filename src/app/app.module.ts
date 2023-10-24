import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoDePeliculasComponent } from './components/listado-de-peliculas/listado-de-peliculas.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './service/usuario.service';
import { ElementoListadoComponent } from './components/elemento-listado/elemento-listado.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AgregarPeliculaComponent } from './components/agregar-pelicula/agregar-pelicula.component';
import { CategoriaPeliculaComponent } from './components/categoria-pelicula/categoria-pelicula.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoDePeliculasComponent,
    LoginComponent,
    ElementoListadoComponent,
    DetallePeliculaComponent,
    AgregarPeliculaComponent,
    CategoriaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
