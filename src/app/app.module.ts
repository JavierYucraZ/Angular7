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
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RouteGuard } from './route-guard';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './servicios/notification.service';
import { UserService } from './servicios/user.service';
import { MyFireService } from './servicios/myfire.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    TodosLosPostComponent,
    SiguiendoComponent,
    FavoritosComponent,
    MisPostsComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RouteGuard, NotificationService, MyFireService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
