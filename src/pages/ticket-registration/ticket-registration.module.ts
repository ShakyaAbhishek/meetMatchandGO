import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketRegistrationPage } from './ticket-registration';

@NgModule({
  declarations: [
    TicketRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketRegistrationPage),
  ],
})
export class TicketRegistrationPageModule {}
