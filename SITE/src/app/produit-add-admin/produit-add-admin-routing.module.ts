import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitAddAdminPage } from './produit-add-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitAddAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitAddAdminPageRoutingModule {}
