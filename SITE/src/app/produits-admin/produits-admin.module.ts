import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsAdminPageRoutingModule } from './produits-admin-routing.module';

import { ProduitsAdminPage } from './produits-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsAdminPageRoutingModule
  ],
  declarations: [ProduitsAdminPage]
})
export class ProduitsAdminPageModule {}
