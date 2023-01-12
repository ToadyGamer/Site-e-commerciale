import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandesAdminClientPage } from './commandes-admin-client.page';

const routes: Routes = [
  {
    path: '',
    component: CommandesAdminClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandesAdminClientPageRoutingModule {}
