import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiUserRoutingModule } from './ui-user-routing.module';

import { NgbButtonsModule, NgbPaginationModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { UiUserComponent } from './ui-user.component';



@NgModule({
  
  imports: [
    CommonModule,
    UiUserRoutingModule,
    NgbButtonsModule,
    
    NgbPaginationModule,
    NgbTabsetModule,
    SharedModule
  ],
  declarations: [UiUserComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class UiUserModule { }
