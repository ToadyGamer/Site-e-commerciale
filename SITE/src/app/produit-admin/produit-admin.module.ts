import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitAdminPageRoutingModule } from './produit-admin-routing.module';

import { ProduitAdminPage } from './produit-admin.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProduitAdminPage]
})
export class ProduitAdminPageModule {}
