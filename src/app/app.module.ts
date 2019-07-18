import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { TodosLosPostComponent } from './todos-los-post/todos-los-post.component';
import { SiguiendoComponent } from './siguiendo/siguiendo.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MisPostsComponent } from './mis-posts/mis-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    TodosLosPostComponent,
    SiguiendoComponent,
    FavoritosComponent,
    MisPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
