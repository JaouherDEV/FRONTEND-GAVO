import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'recherche-vol',
        loadChildren: () => import('./basic-alert/basic-alert.module').then(module => module.BasicAlertModule)
      },
      {
        path: 'button',
        loadChildren: () => import('./basic-button/basic-button.module').then(module => module.BasicButtonModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('./basic-badge/basic-badge.module').then(module => module.BasicBadgeModule)
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }
