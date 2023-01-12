import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptesAdminClientPage } from './comptes-admin-client.page';

const routes: Routes = [
  {
    path: '',
    component: ComptesAdminClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptesAdminClientPageRoutingModule {}
