import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pelicula5Page } from './pelicula5.page';

const routes: Routes = [
  {
    path: '',
    component: Pelicula5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pelicula5PageRoutingModule {}
