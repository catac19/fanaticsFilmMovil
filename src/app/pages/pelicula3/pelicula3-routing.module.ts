import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pelicula3Page } from './pelicula3.page';

const routes: Routes = [
  {
    path: '',
    component: Pelicula3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pelicula3PageRoutingModule {}
