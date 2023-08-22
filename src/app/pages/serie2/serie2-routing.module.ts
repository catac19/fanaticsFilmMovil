import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Serie2Page } from './serie2.page';

const routes: Routes = [
  {
    path: '',
    component: Serie2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Serie2PageRoutingModule {}
