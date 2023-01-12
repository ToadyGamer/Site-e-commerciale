import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosAdminPage } from './photos-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PhotosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosAdminPageRoutingModule {}
