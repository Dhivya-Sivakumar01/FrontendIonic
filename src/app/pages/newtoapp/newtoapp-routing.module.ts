import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewtoappPage } from './newtoapp.page';

const routes: Routes = [
  {
    path: '',
    component: NewtoappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewtoappPageRoutingModule {}
