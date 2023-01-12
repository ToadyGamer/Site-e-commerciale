import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompteAdminClientPage } from './compte-admin-client.page';

const routes: Routes = [
  {
    path: '',
    component: CompteAdminClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteAdminClientPageRoutingModule {}
