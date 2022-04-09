import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [

  {
    path: '',
    component: AuthComponent,
    children: [
      
        {  path: '',
          redirectTo: 'auth/signin',
          pathMatch: 'full'
        },
        {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    
    ]
  },
    {
    path: '',
    component: AdminComponent,
    children: [
     
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'VOLS',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule),
        
      },
      {
        path: 'GestionUser',
        loadChildren: () => import('./demo/ui-elements/ui-utilisateur/ui-utilisateur.module').then(module => module.UiUtilisateurModule),
        
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
