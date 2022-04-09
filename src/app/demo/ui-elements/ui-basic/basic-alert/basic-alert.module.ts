import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { BasicAlertRoutingModule } from './basic-alert-routing.module';
import { BasicAlertComponent } from './basic-alert.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { NgbCollapseModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicAlertRoutingModule,
    NgbTabsetModule,
    NgbCollapseModule,
    SharedModule
  ],
  providers: [DatePipe],
  declarations: [BasicAlertComponent]
})
export class BasicAlertModule { }
