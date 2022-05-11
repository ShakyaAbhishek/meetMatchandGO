import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingApprovalPage } from './pending-approval';

@NgModule({
  declarations: [
    PendingApprovalPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingApprovalPage),
  ],
})
export class PendingApprovalPageModule {}
