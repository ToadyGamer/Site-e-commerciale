import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitAddAdminPageRoutingModule } from './produit-add-admin-routing.module';

import { ProduitAddAdminPage } from './produit-add-admin.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitAddAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProduitAddAdminPage]
})
export class ProduitAddAdminPageModule {}
