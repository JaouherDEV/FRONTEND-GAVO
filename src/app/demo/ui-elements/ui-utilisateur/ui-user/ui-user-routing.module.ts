import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiUserComponent } from './ui-user.component';


const routes: Routes = [
  {
    path: '',
    component: UiUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiUserRoutingModule { }
