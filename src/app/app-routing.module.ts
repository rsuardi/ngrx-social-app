import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadingPageComponent } from './modules/shared/components/lading-page/lading-page.component';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LadingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(module => module.AuthModule)
  },
  {
    path: 'core',
    loadChildren: () => import(`./modules/core/core.module`).then(module => module.CoreModule)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
