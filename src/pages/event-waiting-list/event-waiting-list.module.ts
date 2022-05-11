import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventWaitingListPage } from './event-waiting-list';

@NgModule({
  declarations: [
    EventWaitingListPage,
  ],
  imports: [
    IonicPageModule.forChild(EventWaitingListPage),
  ],
})
export class EventWaitingListPageModule {}
