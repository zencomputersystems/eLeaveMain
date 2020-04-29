import { AdminSharedModule } from './projects/admin/src/app/app.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SampleApp1SharedModule } from './projects/sampleapp1/src/app/app.module';
import { UserSharedModule } from './projects/user/src/app/app.module';
// import { SideMenuUserSharedModule } from './projects/user/src/app/side-menu-navigation/side-menu-navigation.module';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'testPage',
    loadChildren: '../app/projects/sampleapp1/src/app/app.module.ts#SampleApp1SharedModule'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'users', loadChildren: () => import('../app/projects/user/src/app/app.module').then(m=>m.AppModule)
    // path: 'users', loadChildren: '../app/projects/user/src/app/app.module.ts'
  },
  {
    path: 'admins', loadChildren: () => import('../app/projects/admin/src/app/app.module').then(m=>m.AppModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
    SampleApp1SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
