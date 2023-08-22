import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Serie4Page } from './serie4.page';

const routes: Routes = [
  {
    path: '',
    component: Serie4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Serie4PageRoutingModule {}
