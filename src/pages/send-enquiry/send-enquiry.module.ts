import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendEnquiryPage } from './send-enquiry';

@NgModule({
  declarations: [
    SendEnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(SendEnquiryPage),
  ],
})
export class SendEnquiryPageModule {}
