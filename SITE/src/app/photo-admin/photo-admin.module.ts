import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoAdminPageRoutingModule } from './photo-admin-routing.module';

import { PhotoAdminPage } from './photo-admin.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PhotoAdminPage]
})
export class PhotoAdminPageModule {}
