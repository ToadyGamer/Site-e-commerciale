import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandesAdminClientPageRoutingModule } from './commandes-admin-client-routing.module';

import { CommandesAdminClientPage } from './commandes-admin-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandesAdminClientPageRoutingModule
  ],
  declarations: [CommandesAdminClientPage]
})
export class CommandesAdminClientPageModule {}
