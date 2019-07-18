import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MisPostsComponent } from './mis-posts/mis-posts.component';
import { SiguiendoComponent } from './siguiendo/siguiendo.component';
import { TodosLosPostComponent } from './todos-los-post/todos-los-post.component';

const routes: Routes = [
{path:'Inicio', component:InicioComponent, pathMatch:'full'},
{path:'Favoritos', component:FavoritosComponent},
{path:'MisPost', component:MisPostsComponent},
{path:'Siguiendo', component:SiguiendoComponent},
{path:'TodosLosPosts', component:TodosLosPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
