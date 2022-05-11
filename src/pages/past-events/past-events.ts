import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { AddReviewPage } from "../add-review/add-review";
import { HomePage } from '../home/home';
import { EventFriendPage } from '../event-friend/event-friend';
/**
 * Generated class for the PastEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-past-events',
  templateUrl: 'past-events.html',
})
export class PastEventsPage {
  loading: any;
  events: any;
  isevents= true;
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private commonService: CommonService,
    public platform: Platform,
    public loadingCtrl: LoadingController, 
    public navParams: NavParams) {
      let loggedData = JSON.parse(localStorage.getItem('user'));
      this.showLoader();
      this.commonService.getPastEvents(loggedData['userId']).subscribe((result1) => {
        let result = JSON.parse(result1['_body']);
        console.log("past event =>",result);
        if (result['Status']) {
          this.events = result['Msg']['event_list']['result'];
          this.isevents = result['Msg']['event_list']['result'].length>0?true:false;
          this.loading.dismiss();
        }
      });
      platform.registerBackButtonAction(() => {
        //console.log("second");
        //alert('Back pressed');
        // this.navCtrl.pop();
        this.navCtrl.setRoot(HomePage);
        //backAction();
      },2);
  }
  addReview(location_id: number, event_type: string){
    this.navCtrl.setRoot(AddReviewPage, { location_id: location_id, event_type: event_type}, { animate: true, direction: 'forward' });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PastEventsPage');
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    this.loading.present();
  }
  opnchat(){
    this.navCtrl.setRoot(EventFriendPage);
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
