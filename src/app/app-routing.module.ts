import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MisPostsComponent } from './mis-posts/mis-posts.component';
import { SiguiendoComponent } from './siguiendo/siguiendo.component';
import { TodosLosPostComponent } from './todos-los-post/todos-los-post.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RouteGuard } from './route-guard';

const routes: Routes = [
{path:'Inicio' ,component:InicioComponent, pathMatch:'full'},
{path:'Favoritos', component:FavoritosComponent, canActivate:[RouteGuard]},
{path:'MisPost', component:MisPostsComponent, canActivate:[RouteGuard]},
{path:'Siguiendo', component:SiguiendoComponent, canActivate:[RouteGuard]},
{path:'TodosLosPosts', component:TodosLosPostComponent, canActivate:[RouteGuard]},
{path:'IniciarSesion', component:IniciarSesionComponent},
{path:'Registrarse', component:RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

