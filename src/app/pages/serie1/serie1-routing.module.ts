import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Serie1Page } from './serie1.page';

const routes: Routes = [
  {
    path: '',
    component: Serie1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Serie1PageRoutingModule {}
