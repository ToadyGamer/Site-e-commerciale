import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosAdminPageRoutingModule } from './photos-admin-routing.module';

import { PhotosAdminPage } from './photos-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosAdminPageRoutingModule
  ],
  declarations: [PhotosAdminPage]
})
export class PhotosAdminPageModule {}
