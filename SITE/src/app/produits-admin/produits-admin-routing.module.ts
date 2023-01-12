import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitsAdminPage } from './produits-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitsAdminPageRoutingModule {}
