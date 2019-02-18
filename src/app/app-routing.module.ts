import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './Pages/portafolio/portafolio.component';
import { AboutComponent } from './Pages/about/about.component';
import { ItemComponent } from './Pages/item/item.component';
import { SearchComponent } from './Pages/search/search.component';

const app_routes: Routes = [

// { path: '', component:   PortafolioComponent},
{ path: 'Inicio', component: 	PortafolioComponent},
{ path: 'sobremi', component: 	AboutComponent},
  { path: 'proyectos/:id', component: 	ItemComponent},
  // { path: 'search/:termino', component: 	SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(app_routes, { useHash: true
    })
  ],
  exports: [
  RouterModule]
})
export class AppRoutingModule { }


