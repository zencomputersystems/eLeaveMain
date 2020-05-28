import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { SideMenuUserSharedModule } from './projects/user/src/app/side-menu-navigation/side-menu-navigation.module';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./projects/user/src/app/app.module').then(m => m.AppModule)
    // loadChildren: () => import('$user-root/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'users', loadChildren: () => import('./projects/user/src/app/app.module').then(m=>m.AppModule)
    // path: 'users', loadChildren: () => import('$user-root/src/app/app.module').then(m=>m.AppModule)
   },
  {
    path: 'admins', loadChildren: () => import('./projects/admin/src/app/app.module').then(m=>m.AppModule)
    // path: 'admins', loadChildren: () => import('$admin-root/src/app/app.module').then(m=>m.AppModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
