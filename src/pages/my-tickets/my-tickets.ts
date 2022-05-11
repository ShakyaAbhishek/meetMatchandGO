import { CommonService } from './../../service/common.service';
import { Component } from '@angular/core';


import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';
import { HomePage } from '../home/home';
import { InAppBrowser } from '../../../node_modules/@ionic-native/in-app-browser';
import { EventFriendPage } from '../event-friend/event-friend';

/**
 * Generated class for the MyTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTicketsPage {
loading: any;
time: number;
events: any;
loggedData: any;
isevents=true;
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private commonService: CommonService,
    public loadingCtrl: LoadingController,
    public platform: Platform,
    public iab: InAppBrowser,
    public navParams: NavParams) {
      this.time = new Date().getTime();
      this.loggedData = JSON.parse(localStorage.getItem('user'));
      this.showLoader();
      this.commonService.getliveEvents(this.loggedData['userId']).subscribe((result1) => {
        let result = JSON.parse(result1['_body']);
        if (result['Status']) {
          this.events = result['Msg']['event_list']['result'];
         // console.log(result['Msg']['event_list']['result'].length);
          this.isevents = result['Msg']['event_list']['result'].length>0?true:false;
          this.loading.dismiss();
        }
      });
       this.setTime();
       platform.registerBackButtonAction(() => {
        //console.log("second");
        //alert('Back pressed');
        // this.navCtrl.pop();
        this.navCtrl.setRoot(HomePage);
        //backAction();
      },2);
  }
  eventDetail(event_id: number){
    this.navCtrl.setRoot(EventDetailsPage, { event_id: event_id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTicketsPage');
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
  setTime(){
    this.time = new Date().getTime();
    setTimeout(() => {
      this.setTime();
    }, 1000);
  }
  eventTimer(date1, date2) {
    let date_future = date1 * 1000;
    let date_now = date2;

    let seconds = Math.floor((date_future - (date_now)) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    return (this.commonService.str_pad(days,2,'0','STR_PAD_LEFT') + " days " + this.commonService.str_pad(hours,2,'0','STR_PAD_LEFT') + ":" + this.commonService.str_pad(minutes,2,'0','STR_PAD_LEFT') + ":" + this.commonService.str_pad(seconds,2,'0','STR_PAD_LEFT'));
  }
  downloadTicket(event_id){
    console.log('https://www.meetmatchandgo.com/ticket/'+event_id+'/'+this.loggedData['userId']);
    window.open('https://www.meetmatchandgo.com/ticket/'+event_id+'/'+this.loggedData['userId'], '_system', 'location=yes'); return false;
    // const browser = this.iab.create('https://www.meetmatchandgo.com/ticket/'+event_id+'/'+this.loggedData['userId']);

    //   //browser.executeScript(...);

    //   // browser.insertCSS(...);
    //   // browser.on('loadstop').subscribe(event => {
    //   //   browser.insertCSS({ code: "body{color: red;" });
    //   // });

    //   browser.show();
  }
}
