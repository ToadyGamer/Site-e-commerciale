import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteAdminClientPageRoutingModule } from './compte-admin-client-routing.module';

import { CompteAdminClientPage } from './compte-admin-client.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteAdminClientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompteAdminClientPage]
})
export class CompteAdminClientPageModule {}
