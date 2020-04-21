import { AdminSharedModule } from './projects/admin/src/app/app.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SampleApp1SharedModule } from './projects/sampleapp1/src/app/app.module';
import { UserSharedModule } from './projects/user/src/app/app.module';
import { SideMenuUserSharedModule } from './projects/user/src/app/side-menu-navigation/side-menu-navigation.module';

const routes: Routes = [
  { path: '', redirectTo: 'testPage', pathMatch: 'full' },
  {
    path: 'login',
  //   // loadChildren: '../app/login/login.module.ts#LoginPageModule'
  //   // loadChildren: '../app/login/login.module.ts'
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'testPage',
    // loadChildren: '../app/projects/sampleapp1/src/app/app.module.ts#SampleApp1SharedModule'
    loadChildren: () => import('./projects/sampleapp1/src/app/app.module').then( m => m.SampleApp1SharedModule )
  },
  {
    path: 'testAdmin',
    loadChildren: () => import('./projects/admin/src/app/app.module').then( m => m.AdminSharedModule )
  }
  // {
  //   path: 'user/',
  //   loadChildren: () => import('./projects/user/src/app/side-menu-navigation/side-menu-navigation.module').
  //     then( m => m.SideMenuUserSharedModule )
  //   // loadChildren: '../app/projects/user/src/app/side-menu-navigation/side-menu-navigation.module.ts#SideMenuUserSharedModule',
  //   // canActivate: [AuthGuard]
  // }
  //   path: 'user',
    // loadChildren: () => import('./projects/user/src/app/app.module').then( m => m.UserSharedModule )
  // }
  // {
  //   path: 'user',
  //   loadChildren: () => import('./projects/user/src/app/app.module').then( m => m.UserSharedModule )
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./projects/admin/src/app/app.module').then( m => m.AdminSharedModule )
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
    SampleApp1SharedModule.forRoot(),
    // SideMenuUserSharedModule.forRoot()
    // UserSharedModule.forRoot(),
    AdminSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
