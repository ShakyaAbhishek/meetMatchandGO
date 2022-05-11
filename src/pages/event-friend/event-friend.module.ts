import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventFriendPage } from './event-friend';

@NgModule({
  declarations: [
    EventFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(EventFriendPage),
  ],
})
export class EventFriendPageModule {}
