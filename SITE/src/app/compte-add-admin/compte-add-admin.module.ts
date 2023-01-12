import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteAddAdminPageRoutingModule } from './compte-add-admin-routing.module';

import { CompteAddAdminPage } from './compte-add-admin.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteAddAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompteAddAdminPage]
})
export class CompteAddAdminPageModule {}
