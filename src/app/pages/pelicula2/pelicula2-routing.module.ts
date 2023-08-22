import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pelicula2Page } from './pelicula2.page';

const routes: Routes = [
  {
    path: '',
    component: Pelicula2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pelicula2PageRoutingModule {}
