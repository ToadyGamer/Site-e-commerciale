import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptesAdminClientPageRoutingModule } from './comptes-admin-client-routing.module';

import { ComptesAdminClientPage } from './comptes-admin-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptesAdminClientPageRoutingModule
  ],
  declarations: [ComptesAdminClientPage]
})
export class ComptesAdminClientPageModule {}
