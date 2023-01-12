import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitAdminPage } from './produit-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitAdminPageRoutingModule {}
