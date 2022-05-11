import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventMemberPage } from './event-member';

@NgModule({
  declarations: [
    EventMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(EventMemberPage),
  ],
})
export class EventMemberPageModule {}
