import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoAddAdminPageRoutingModule } from './photo-add-admin-routing.module';

import { PhotoAddAdminPage } from './photo-add-admin.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoAddAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PhotoAddAdminPage]
})
export class PhotoAddAdminPageModule {}
