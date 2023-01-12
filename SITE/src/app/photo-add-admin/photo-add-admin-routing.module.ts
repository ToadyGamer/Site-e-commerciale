import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoAddAdminPage } from './photo-add-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoAddAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoAddAdminPageRoutingModule {}
