import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogueAdminClientPageRoutingModule } from './catalogue-admin-client-routing.module';

import { CatalogueAdminClientPage } from './catalogue-admin-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogueAdminClientPageRoutingModule
  ],
  declarations: [CatalogueAdminClientPage]
})
export class CatalogueAdminClientPageModule {}
