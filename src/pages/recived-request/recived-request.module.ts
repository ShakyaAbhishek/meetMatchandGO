import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecivedRequestPage } from './recived-request';

@NgModule({
  declarations: [
    RecivedRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(RecivedRequestPage),
  ],
})
export class RecivedRequestPageModule {}
