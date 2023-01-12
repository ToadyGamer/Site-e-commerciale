import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompteAddAdminPage } from './compte-add-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CompteAddAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteAddAdminPageRoutingModule {}
