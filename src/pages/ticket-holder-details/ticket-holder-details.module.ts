import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketHolderDetailsPage } from './ticket-holder-details';

@NgModule({
  declarations: [
    TicketHolderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketHolderDetailsPage),
  ],
})
export class TicketHolderDetailsPageModule {}
