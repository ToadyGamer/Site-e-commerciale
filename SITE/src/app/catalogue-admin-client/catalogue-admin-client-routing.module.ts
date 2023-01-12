import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogueAdminClientPage } from './catalogue-admin-client.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogueAdminClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueAdminClientPageRoutingModule {}
