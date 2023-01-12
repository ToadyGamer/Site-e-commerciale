import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoAdminPage } from './photo-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoAdminPageRoutingModule {}
