import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoDePeliculasComponent } from './components/listado-de-peliculas/listado-de-peliculas.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './service/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    ListadoDePeliculasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
