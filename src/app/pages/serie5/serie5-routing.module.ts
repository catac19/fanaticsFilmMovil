import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Serie5Page } from './serie5.page';

const routes: Routes = [
  {
    path: '',
    component: Serie5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Serie5PageRoutingModule {}
