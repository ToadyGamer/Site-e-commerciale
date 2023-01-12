import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'comptes-admin-client',
    loadChildren: () => import('./comptes-admin-client/comptes-admin-client.module').then( m => m.ComptesAdminClientPageModule)
  },
  {
    path: 'produits-admin',
    loadChildren: () => import('./produits-admin/produits-admin.module').then( m => m.ProduitsAdminPageModule)
  },
  {
    path: 'catalogue-admin-client',
    loadChildren: () => import('./catalogue-admin-client/catalogue-admin-client.module').then( m => m.CatalogueAdminClientPageModule)
  },
  {
    path: 'commandes-admin-client',
    loadChildren: () => import('./commandes-admin-client/commandes-admin-client.module').then( m => m.CommandesAdminClientPageModule)
  },
  {
    path: 'compte-admin-client',
    loadChildren: () => import('./compte-admin-client/compte-admin-client.module').then( m => m.CompteAdminClientPageModule)
  },
  {
    path: 'compte-add-admin',
    loadChildren: () => import('./compte-add-admin/compte-add-admin.module').then( m => m.CompteAddAdminPageModule)
  },
  {
    path: 'produit-admin',
    loadChildren: () => import('./produit-admin/produit-admin.module').then( m => m.ProduitAdminPageModule)
  },
  {
    path: 'produit-add-admin',
    loadChildren: () => import('./produit-add-admin/produit-add-admin.module').then( m => m.ProduitAddAdminPageModule)
  },
  {
    path: 'photos-admin',
    loadChildren: () => import('./photos-admin/photos-admin.module').then( m => m.PhotosAdminPageModule)
  },
  {
    path: 'photo-add-admin',
    loadChildren: () => import('./photo-add-admin/photo-add-admin.module').then( m => m.PhotoAddAdminPageModule)
  },
  {
    path: 'photo-admin',
    loadChildren: () => import('./photo-admin/photo-admin.module').then( m => m.PhotoAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
